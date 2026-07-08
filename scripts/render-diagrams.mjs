// :TODO: one-line header what this script does.

import {mkdirSync, readFileSync, writeFileSync, readdirSync, existsSync, unlinkSync} from 'node:fs';
import {readFile, readdir} from 'node:fs/promises';
import path from 'node:path';
import {fileURLToPath} from 'node:url';
import plantumlEncoder from 'plantuml-encoder';
import {normalizePuml} from '../src/lib/normalizePuml.mjs';
import {plantumlFilename} from '../src/lib/plantumlHash.mjs';
import {verifyRender} from '../src/lib/verifyRender.mjs';
import {startServer, DOCKER_IMAGE} from './plantuml-server.mjs';

const ROOT = path.resolve(fileURLToPath(import.meta.url), '../..');
const DOCS_DIR = path.join(ROOT, 'docs');
const OUT_DIR = path.join(ROOT, 'static', 'img', 'plantuml');
const MARKER = path.join(OUT_DIR, '.plantuml-image');
const FENCE_RE = /```plantuml[^\n]*\n([\s\S]*?)```/g;
const INDENTED_FENCE_RE = /^[ \t]+`{3,}\s*plantuml\b/m;
const TILDE_FENCE_RE = /^[ \t]*~{3,}\s*plantuml\b/m;
const MAX_ENCODED = 4000;   // GET path segment; worst-case corpus is ~700, server limit ~8KB
const CONCURRENCY = 8;

/** @param {string} text @returns {string[]} */
export function extractPlantumlBlocks(text) {
    const blocks = [];
    for (const m of text.matchAll(FENCE_RE)) blocks.push(m[1]);
    return blocks;
}

/**
 * Fail loudly on marker forms the MDX AST (remark plugin) and this regex extractor would parse differently.
 * A difference would hash the same diagram two ways and leave a dangling <img>.
 * ```plantuml``` marker must start at column 0.
 * @param {string} text @param {string} file
 */
export function assertSupportedMarkers(text, file) {
    if (INDENTED_FENCE_RE.test(text)) {
        throw new Error(
            `${file}: found an indented \`\`\`plantuml marker. MDX strips the marker's leading ` +
            'indentation from the code node value, but this regex extractor does not, so the two ' +
            'would hash the diagram differently. Use a ```plantuml marker starting at column 0.'
        );
    }
    if (TILDE_FENCE_RE.test(text)) {
        throw new Error(
            `${file}: found a ~~~plantuml marker. The remark plugin parses this via the MDX AST, ` +
            'but this script only matches ```plantuml``` markers, so the diagram would never render. ' +
            'Use a ```plantuml marker starting at column 0.'
        );
    }
}

/** @param {string} encoded @param {string} filename */
export function assertEncodedLength(encoded, filename) {
    if (encoded.length > MAX_ENCODED) {
        throw new Error(
            `${filename}: encoded diagram URL is ${encoded.length} chars (> ${MAX_ENCODED}), too long. ` +
            'Split this diagram into smaller ones.'
        );
    }
}

/** Recursively list *.md / *.mdx under dir. */
async function listDocs(dir) {
    const out = [];
    for (const entry of await readdir(dir, {withFileTypes: true})) {
        const full = path.join(dir, entry.name);
        if (entry.isDirectory()) {
            out.push(...await listDocs(full));
        } else if (/\.mdx?$/.test(entry.name)) {
            out.push(full);
        }
    }
    return out;
}

/** @param {string} docsDir @returns {Promise<Map<string,{source:string, file:string}>>} */
export async function collectDiagrams(docsDir) {
    const map = new Map();
    for (const file of await listDocs(docsDir)) {
        const text = await readFile(file, 'utf8');
        assertSupportedMarkers(text, file);
        for (const raw of extractPlantumlBlocks(text)) {
            const normalized = normalizePuml(raw); // throws on !include
            const filename = plantumlFilename(normalized);
            if (!map.has(filename)) {
                map.set(filename, {source: normalized, file});
            }
        }
    }
    return map;
}

/** Run `fn` over `items` with bounded concurrency. */
async function mapPool(items, limit, fn) {
    let i = 0;
    const workers = Array.from({length: Math.min(limit, items.length)}, async () => {
        while (i < items.length) {
            const idx = i++;
            await fn(items[idx]);
        }
    });
    await Promise.all(workers);
}

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

/**
 * Fetch one SVG. Retries only connection errors.
 * @returns {Promise<{status:number, svg:string}>}
 */
async function fetchSvg(baseUrl, encoded, {retries = 5} = {}) {
    let delay = 200;
    for (let attempt = 0; ; attempt++) {
        try {
            const res = await fetch(`${baseUrl}/svg/${encoded}`);
            return {status: res.status, svg: await res.text()};
        } catch (err) {
            if (attempt >= retries) throw err;
            await sleep(delay);
            delay = Math.min(delay * 2, 2000);
        }
    }
}

/** Wipe all SVGs if the pinned image changed since last render. */
function ensureVersionConsistency() {
    mkdirSync(OUT_DIR, {recursive: true});
    const current = existsSync(MARKER) ? readFileSync(MARKER, 'utf8').trim() : '';
    if (current !== DOCKER_IMAGE) {
        for (const fn of readdirSync(OUT_DIR)) {
            if (fn.endsWith('.svg')) unlinkSync(path.join(OUT_DIR, fn));
        }
        writeFileSync(MARKER, DOCKER_IMAGE, 'utf8');
        if (current) console.log('[render-diagrams] image pin changed — re-rendering all diagrams');
    }
}

export async function main() {
    ensureVersionConsistency();

    const diagrams = await collectDiagrams(DOCS_DIR);
    const referenced = new Set(diagrams.keys());

    // Content-hash cache: only render diagrams whose SVG is not already on disk.
    const missing = [...diagrams].filter(([fn]) => !existsSync(path.join(OUT_DIR, fn)));

    if (missing.length > 0) {
        const {baseUrl, stop} = await startServer();
        const failures = [];
        try {
            await mapPool(missing, CONCURRENCY, async ([fn, {source, file}]) => {
                const encoded = plantumlEncoder.encode(source);
                assertEncodedLength(encoded, fn);
                const {status, svg} = await fetchSvg(baseUrl, encoded);
                const res = verifyRender(svg, {errored: status !== 200});
                if (!res.ok) {
                    const snippet = source.split('\n').slice(0, 3).join('\n');
                    failures.push(`  ${fn} (${file}): ${res.reason} [HTTP ${status}]\n    ${snippet}`);
                    return;
                }
                writeFileSync(path.join(OUT_DIR, fn), svg, 'utf8');
            });
        } finally {
            await stop();
        }
        if (failures.length > 0) {
            throw new Error(`PlantUML render/verify failed for ${failures.length} diagram(s):\n${failures.join('\n')}`);
        }
        console.log(`[render-diagrams] rendered ${missing.length} diagram(s)`);
    }

    // Reconcile: prune orphans, then assert every referenced hash has a file.
    for (const fn of readdirSync(OUT_DIR)) {
        if (fn.endsWith('.svg') && !referenced.has(fn)) {
            unlinkSync(path.join(OUT_DIR, fn));
        }
    }
    for (const fn of referenced) {
        if (!existsSync(path.join(OUT_DIR, fn))) {
            throw new Error(`reconciliation: missing asset ${fn}`);
        }
    }
    console.log(`[render-diagrams] ${referenced.size} diagram(s) present and reconciled`);
}

if (process.argv[1] === fileURLToPath(import.meta.url)) {
    main().catch((err) => {
        console.error(`[render-diagrams] ${err.message}`);
        process.exit(1);
    });
}

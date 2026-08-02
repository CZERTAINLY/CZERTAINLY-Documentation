// Confirm the build actually emitted every API page and every asset those pages need.
//
// The routes and the navbar both come from the catalog, so a catalog mistake stays self-consistent
// and no amount of link checking notices it. And because Scalar fetches its document in the
// browser, a missing document or runtime produces a blank page at runtime rather than a build
// failure. This check looks at what landed in build/ instead of at what the config claims.

import {existsSync, readFileSync, readdirSync} from 'node:fs';
import path from 'node:path';
import {fileURLToPath} from 'node:url';
import {apiCatalog} from '../src/data/apiCatalog.mjs';
import {resolveApiCatalog} from '../src/lib/apiCatalog.mjs';
import {findUnknownApiReferences} from '../src/lib/apiLinks.mjs';
import {apiVersion, cscVersion} from '../src/data/versions.mjs';
import {resolveScalarPackage, RUNTIME_DIR_NAME} from './copy-scalar-runtime.mjs';

const ROOT = path.resolve(fileURLToPath(import.meta.url), '../..');
const BUILD_DIR = path.join(ROOT, 'build');
const DOC_DIRS = [path.join(ROOT, 'docs'), path.join(ROOT, 'problems')];
const DOC_EXTENSIONS = new Set(['.md', '.mdx']);

/** @param {string} dir @returns {Array<{file: string, text: string}>} */
function readDocPages(dir) {
    if (!existsSync(dir)) return [];

    return readdirSync(dir, {withFileTypes: true}).flatMap((entry) => {
        const full = path.join(dir, entry.name);
        if (entry.isDirectory()) return readDocPages(full);
        if (!DOC_EXTENSIONS.has(path.extname(entry.name))) return [];
        return [{file: path.relative(ROOT, full), text: readFileSync(full, 'utf8')}];
    });
}

/** @param {string} buildDir @param {string} route */
function pageExists(buildDir, route) {
    const relative = route.replace(/^\/|\/$/g, '');
    return existsSync(path.join(buildDir, `${relative}.html`))
        || existsSync(path.join(buildDir, relative, 'index.html'));
}

/**
 * @param {object} options
 * @param {string} options.buildDir
 * @param {Array<{route: string, assetPath: string}>} options.catalog
 * @param {string} options.runtimeSrc
 * @returns {string[]} every expected artifact that is not in the build
 */
export function findMissingApiArtifacts({buildDir, catalog, runtimeSrc}) {
    const missing = [];

    for (const {route} of catalog) {
        if (!pageExists(buildDir, route)) missing.push(route);
    }
    for (const {assetPath} of catalog) {
        if (!existsSync(path.join(buildDir, assetPath.slice(1)))) missing.push(assetPath);
    }
    if (!existsSync(path.join(buildDir, runtimeSrc.slice(1)))) missing.push(runtimeSrc);

    return missing;
}

/** Check the build in ./build, throwing if anything the API reference needs is absent. */
export function verifyApiBuild({buildDir = BUILD_DIR} = {}) {
    const catalog = resolveApiCatalog(apiCatalog, {apiVersion, cscVersion});
    const {version} = resolveScalarPackage();
    const runtimeSrc = `/${RUNTIME_DIR_NAME}/standalone-${version}.js`;

    const missing = findMissingApiArtifacts({buildDir, catalog, runtimeSrc});
    if (missing.length) {
        throw new Error(`the build is missing ${missing.length} API artifact(s):\n  ${missing.join('\n  ')}`);
    }

    // The other direction: a documentation page pointing at an API the catalog no longer publishes.
    // Diagram links live inside rendered SVGs and %API_BASE_URL% expands to an absolute URL, so
    // neither reaches Docusaurus' broken-link checking.
    const pages = DOC_DIRS.flatMap(readDocPages);
    const unknown = findUnknownApiReferences(pages, catalog.map((entry) => entry.id));
    if (unknown.length) {
        const detail = unknown.map(({file, id}) => `${file} -> /api/${id}`).join('\n  ');
        throw new Error(`${unknown.length} documentation link(s) point at an unpublished API:\n  ${detail}`);
    }

    return catalog.length;
}

if (process.argv[1] === fileURLToPath(import.meta.url)) {
    try {
        console.log(`API build verified: ${verifyApiBuild()} references, documents and runtime present`);
    } catch (error) {
        console.error(error.message);
        process.exitCode = 1;
    }
}

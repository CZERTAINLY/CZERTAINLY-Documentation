// Find the API references that documentation links to.
//
// Markdown links written as /api/<id> are checked by Docusaurus' own broken-link handling, but two
// forms escape it: PlantUML diagram links, which end up inside a rendered SVG, and the
// %API_BASE_URL% placeholder, which expands to an absolute URL that Docusaurus treats as external.
// Collecting them here lets the build check them against the catalog instead.

const PLANTUML_LINK = /\[\[([A-Za-z0-9-]+)\/?#/g;
const PLACEHOLDER_LINK = /%API_BASE_URL%([a-z0-9-]+)/g;
const MARKDOWN_LINK = /]\(\/api\/([a-z0-9-]+)/g;

/**
 * Every API id a page refers to, however it was written.
 * @param {string} text page source
 * @returns {string[]} ids, in first-seen order, without duplicates
 */
export function extractApiReferenceIds(text) {
    const ids = new Set();
    for (const pattern of [PLANTUML_LINK, PLACEHOLDER_LINK, MARKDOWN_LINK]) {
        for (const [, id] of text.matchAll(pattern)) {
            ids.add(id);
        }
    }
    return [...ids];
}

/** Diagram link written against Redoc's scheme: [[<id>/#tag/<Tag>/operation/<operationId>]] */
const LEGACY_OPERATION_LINK = /\[\[([A-Za-z0-9-]+)\/#tag\/[^/\]]+\/operation\/([^\]]+)]]/g;
/** A link that already names a Scalar fragment but keeps the slash before it. */
const SLASHED_OPERATION_LINK = /\[\[([A-Za-z0-9-]+)\/#(tag\/[^\]]+)]]/g;

/**
 * Rewrite diagram operation links to the form Scalar serves.
 *
 * Two things are corrected. The fragment moves from Redoc's operationId scheme to Scalar's
 * tag/method/path scheme, and the slash before it is dropped: diagrams set `topurl` to
 * `.../api/`, so `[[core-auth/#…]]` produced `.../api/core-auth/#…`, and the site publishes
 * `/api/core-auth` without a trailing slash — the slashed form is a 404.
 *
 * Links are converted in place rather than translated during the build: the PlantUML pipeline
 * hashes diagram source to name its rendered SVG, and the remark plugin and the renderer must see
 * byte-identical text or the image reference dangles. What is in the file is what is published.
 *
 * @param {string} text page source
 * @param {Record<string, Record<string, string>>} anchorsById id -> operationId -> fragment
 * @returns {{text: string, rewritten: number, unresolved: Array<{id: string, operationId: string}>}}
 */
export function rewriteLegacyOperationLinks(text, anchorsById) {
    const unresolved = [];
    let rewritten = 0;

    let next = text.replace(LEGACY_OPERATION_LINK, (whole, id, operationId) => {
        const anchor = anchorsById[id]?.[operationId];
        if (!anchor) {
            unresolved.push({id, operationId});
            return whole;
        }
        rewritten += 1;
        return `[[${id}#${anchor}]]`;
    });

    next = next.replace(SLASHED_OPERATION_LINK, (whole, id, anchor) => {
        // A leftover Redoc-style fragment is one the pass above could not resolve. Leave it exactly
        // as written so it stays visible as something to fix.
        if (anchor.includes('/operation/')) {
            return whole;
        }
        rewritten += 1;
        return `[[${id}#${anchor}]]`;
    });

    return {text: next, rewritten, unresolved};
}

/**
 * Ids that documentation links to but the catalog does not publish.
 * @param {Array<{file: string, text: string}>} pages
 * @param {Iterable<string>} publishedIds
 * @returns {Array<{file: string, id: string}>}
 */
export function findUnknownApiReferences(pages, publishedIds) {
    const published = new Set(publishedIds);
    return pages.flatMap(({file, text}) =>
        extractApiReferenceIds(text)
            .filter((id) => !published.has(id))
            .map((id) => ({file, id})));
}

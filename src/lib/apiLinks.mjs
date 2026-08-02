// Find the API references that documentation links to.
//
// Markdown links written as /api/<id> are checked by Docusaurus' own broken-link handling, but two
// forms escape it: PlantUML diagram links, which end up inside a rendered SVG, and the
// %API_BASE_URL% placeholder, which expands to an absolute URL that Docusaurus treats as external.
// Collecting them here lets the build check them against the catalog instead.

const PLANTUML_LINK = /\[\[([a-z0-9-]+)\/#/g;
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

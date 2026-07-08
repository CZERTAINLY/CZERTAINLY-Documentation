// Normalize a PlantUML source block: ensure a matching @start/@end pair and reject !include-family directives.

/**
 * Reject any !include/!import/!theme…from directive that could pull in external content.
 * This blocklist is defense-in-depth only — `PLANTUML_SECURITY_PROFILE=SANDBOX` profile is in use.
 */
const INCLUDE_RE = /^[ \t]*!(include(url|sub|def|_once|_many)?|import|theme\b[^\n]*\bfrom)\b/im;

/**
 * Ensure a PlantUML source has a matching @start<type>/@end<type> pair.
 * @param {string} source
 * @returns {string}
 */
export function normalizePuml(source) {
    if (INCLUDE_RE.test(source)) {
        throw new Error('PlantUML !include directives are not allowed in documentation diagrams');
    }
    const startMatch = source.match(/@start(\w+)/);
    const endMatch = source.match(/@end(\w+)/);
    const type = startMatch?.[1] ?? endMatch?.[1] ?? 'uml';

    let out = source;
    if (!startMatch) out = `@start${type}\n` + out;
    if (!endMatch) {
        if (!out.endsWith('\n')) out += '\n';
        out += `@end${type}\n`;
    } else if (!out.endsWith('\n')) {
        out += '\n';
    }
    return out;
}

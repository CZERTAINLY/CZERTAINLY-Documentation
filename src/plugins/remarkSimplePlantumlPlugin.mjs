// @ts-check
import {plantumlFilename} from '../lib/plantumlHash.mjs';
import {normalizePuml} from '../lib/normalizePuml.mjs';

/**
 * Rewrite each ```plantuml``` code block into an <img> pointing at the build-time rendered static SVG.
 * Filename uses the SAME hash as scripts/render-diagrams.mjs, so the reference and the emitted asset always agree.
 */
const plugin = () => {
    return async (ast) => {
        const {visit} = await import('unist-util-visit');
        visit(ast, 'code', (node) => {
            if (node.lang !== 'plantuml' || !node.value) return;
            const filename = plantumlFilename(normalizePuml(node.value));
            node.type = 'image';
            node.url = `/img/plantuml/${filename}`;
            node.alt = node.meta || '';
            node.value = undefined;
            node.meta = undefined;
            node.lang = undefined;
        });
    };
};

export default plugin;

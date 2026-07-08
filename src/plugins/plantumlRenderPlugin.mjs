import path from 'node:path';
import {fileURLToPath} from 'node:url';
import {main as renderDiagrams} from '../../scripts/render-diagrams.mjs';

const DOCS_DIR = path.resolve(fileURLToPath(import.meta.url), '../../../docs');

/**
 * Render PlantUML diagrams to static SVGs as part of the Docusaurus lifecycle.
 *
 * `loadContent` runs on startup and, because `getPathsToWatch` registers docs/ with the dev
 * server, re-runs whenever a doc changes — so a diagram added or edited during `yarn start`
 * re-renders (only the changed diagram, via the content-hash cache) before the page reloads,
 * with no manual `yarn render-diagrams` or dev-server restart. The `prebuild` hook still renders
 * up-front for production builds, independent of plugin load-phase timing.
 */
export default function plantumlRenderPlugin() {
    return {
        name: 'plantuml-render',
        getPathsToWatch() {
            return [path.join(DOCS_DIR, '**/*.{md,mdx}')];
        },
        async loadContent() {
            await renderDiagrams();
        },
    };
}

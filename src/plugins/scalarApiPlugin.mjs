import path from 'node:path';
import {fileURLToPath} from 'node:url';
import {apiCatalog} from '../data/apiCatalog.mjs';
import {resolveApiCatalog} from '../lib/apiCatalog.mjs';
import {materializeApiSpecs} from '../../scripts/fetch-api-specs.mjs';
import {copyScalarRuntime, resolveScalarPackage} from '../../scripts/copy-scalar-runtime.mjs';
import {buildApiRoutes} from './scalarApiRoutes.mjs';

const HERE = path.resolve(fileURLToPath(import.meta.url), '..');
const ROOT = path.resolve(HERE, '../..');
const STATIC_DIR = path.join(ROOT, 'static');
const SPEC_DIR = path.join(STATIC_DIR, 'api-specs');
const ROUTE_COMPONENT = path.resolve(HERE, '../components/ScalarApiReference');

/**
 * Publish every API reference as a Scalar page.
 *
 * Scalar renders in the browser, so nothing here parses an OpenAPI document during static
 * generation — that is the whole point of the plugin. `loadContent` downloads the documents and
 * vendors the Scalar bundle into `static/`, which is safe because Docusaurus finishes loading all
 * plugin content before it configures the bundler that copies the static directory.
 *
 * @param {import('@docusaurus/types').LoadContext} context
 * @param {{apiVersion: string, cscVersion: string}} versions
 */
export default function scalarApiPlugin(context, versions) {
    const catalog = resolveApiCatalog(apiCatalog, versions);

    return {
        name: 'scalar-api-reference',

        async loadContent() {
            const manifest = await materializeApiSpecs({catalog, outDir: SPEC_DIR});
            const {root} = resolveScalarPackage();
            const runtimeSrc = copyScalarRuntime({packageRoot: root, staticDir: STATIC_DIR});
            return {manifest, runtimeSrc};
        },

        contentLoaded({content, actions}) {
            const routes = buildApiRoutes({
                catalog,
                manifest: content.manifest,
                runtimeSrc: content.runtimeSrc,
                baseUrl: context.baseUrl,
                component: ROUTE_COMPONENT,
            });
            for (const route of routes) {
                actions.addRoute(route);
            }
        },
    };
}

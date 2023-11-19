import plantumlEncoder from 'plantuml-encoder';
import visit from 'unist-util-visit';

const DEFAULT_OPTIONS = {
    baseUrl: "https://www.plantuml.com/plantuml/png",
    type: "image"
};

/**
 * Plugin for remark-js
 *
 * See details about plugin API:
 * https://github.com/unifiedjs/unified#plugin
 *
 * You can specify the endpoint of PlantUML with the option 'baseUrl'
 *
 * @param {Object} pluginOptions Remark plugin options.
 */
const remarkSimplePlantumlPlugin = (pluginOptions) => {
    const options = { ...DEFAULT_OPTIONS, ...pluginOptions };

    const transformer = (syntaxTree) => {
        visit(syntaxTree, ["code"], (node) => {
            let { lang, value, meta } = node;
            if (!lang || !value || lang !== "plantuml") return;

            let url = `${options.baseUrl.replace(/\/$/, "")}/${plantumlEncoder.encode(value)}`;

            if (options.type === "image") {
                node.type = "image";
                node.url = url;
            } else if (options.type === "svg") {
                node.type = "paragraph";
                node.children = [{ value: `<object type="image/svg+xml" data="${url}" />`, type: "html" }];
            }

            node.alt = meta;
            node.meta = undefined;
        });
        return transformer;
    };
}

export default remarkSimplePlantumlPlugin;

// @ts-check
import plantumlEncoder from "plantuml-encoder";

const DEFAULT_OPTIONS = {
    baseUrl: "https://www.plantuml.com/plantuml/png",
    type: "image"
};

const plugin = (pluginOptions) => {
    const options = { ...DEFAULT_OPTIONS, ...pluginOptions };

    return async (ast) => {
        const {visit} = await import('unist-util-visit');
        visit(ast, 'code', (node) => {
            if (node.type === 'code') {
                let {lang, value, meta} = node;
                if (!lang || !value || lang !== "plantuml") return;

                let url = `${options.baseUrl.replace(/\/$/, "")}/${plantumlEncoder.encode(value)}`;

                if (options.type === "image") {
                    node.type = "image";
                    node.url = url;
                    node.alt = meta;
                } else if (options.type === "svg") {
                    //node.type = "paragraph";
                    //node.children = [{value: `<object type="image/svg+xml" data="${url}" />`, type: "html"}];
                    node.type = "mdxJsxFlowElement";
                    node.name = "object";
                    node.attributes = [
                        {
                            type: "mdxJsxAttribute",
                            name: "type",
                            value: "image/svg+xml"
                        },
                        {
                            type: "mdxJsxAttribute",
                            name: "data",
                            value: url
                        }
                    ]
                    node.value = undefined;
                }
                node.meta = undefined;
            }
        });
    };
};

export default plugin;
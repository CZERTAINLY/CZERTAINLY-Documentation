// @ts-check
import escapeStringRegexp from 'escape-string-regexp';

const DEFAULT_OPTIONS = {
    prefix: "%"
};

const plugin = (pluginOptions) => {
    const options = { ...DEFAULT_OPTIONS, ...pluginOptions };

    // Attaches prefix to the start of the string.
    const attachPrefix = str => (options.prefix || '') + str

    // Removes prefix from the start of the string.
    const stripPrefix = str =>
        options.prefix ? str.replace(RegExp(`^${options.prefix}`), '') : str

    // RegExp to find any replacement keys.
    const regexp = RegExp(
        '(' +
        Object.keys(options.replacements)
            .map(key => escapeStringRegexp(attachPrefix(key)))
            .join('|') +
        ')',
        'g',
    )

    const replacer = (_match, name) => options.replacements[stripPrefix(name)]

    return async (ast) => {
        const {visit} = await import('unist-util-visit');
        visit(ast, ['text', 'html', 'code', 'inlineCode', 'link'], (node) => {
            if (node.type === 'link') {
                // For links, the text value is replaced by text node, so we change the
                // URL value.
                node.url = node.url.replace(regexp, replacer)
            } else {
                // For all other nodes, replace the node value.
                node.value = node.value.replace(regexp, replacer)
            }
        });
    };
};

export default plugin;
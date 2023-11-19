import escapeStringRegexp from 'escape-string-regexp';
import visit from 'unist-util-visit';

const DEFAULT_OPTIONS = {
    prefix: "%"
};

/**
 * Plugin for remark-js to find and replace variables in markdown files
 * Inspired by https://github.com/angeloashmore/gatsby-remark-find-replace/blob/master/src/index.js
 *
 * You can specify the prefix for variables with the option 'prefix'
 * Replacement values are specified in the 'replacements' option
 *
 * @param {Object} pluginOptions Remark plugin options.
 */
const remarkFindReplacePlugin = (pluginOptions) => {
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

    const transformer = async (syntaxTree) => {
        visit(syntaxTree, ['text', 'html', 'code', 'inlineCode', 'link'], (node) => {
            if (node.type === 'link') {
                // For links, the text value is replaced by text node, so we change the
                // URL value.
                node.url = node.url.replace(regexp, replacer)
            } else {
                // For all other nodes, replace the node value.
                node.value = node.value.replace(regexp, replacer)
            }
        });
        return transformer;
    };
}

export default remarkFindReplacePlugin;

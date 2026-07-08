// Validate a rendered PlantUML SVG: reject PlantUML error images and geometrically degenerate output.

// PlantUML renders a distinctive error image containing this title text.
const ERROR_MARKER = /Syntax Error\??|An error has occurred/i;

/** @param {string} svg */
export function parseSvgViewBox(svg) {
    const m = svg.match(/viewBox\s*=\s*"\s*([-\d.]+)\s+([-\d.]+)\s+([-\d.]+)\s+([-\d.]+)\s*"/);
    if (!m) return null;
    return {minX: +m[1], minY: +m[2], width: +m[3], height: +m[4]};
}

/**
 * @param {string} svg
 * @param {{errored?: boolean}} [opts] `errored` set when the server returned a non-200 response.
 * @returns {{ok: boolean, reason?: string}}
 */
export function verifyRender(svg, opts = {}) {
    const {errored = false} = opts;
    if (errored) {
        return {ok: false, reason: 'server returned a non-200 response for this diagram'};
    }
    if (ERROR_MARKER.test(svg)) {
        return {ok: false, reason: 'PlantUML error image detected'};
    }

    const vb = parseSvgViewBox(svg);
    if (!vb) {
        return {ok: false, reason: 'no viewBox in SVG'};
    }

    if (!(vb.width > 0 && vb.height > 0)) {
        return {ok: false, reason: `degenerate viewBox ${vb.width}x${vb.height}`};
    }
    return {ok: true};
}

// @ts-check
import {createHash} from 'node:crypto';

/**
 * Normalize a raw regex-extracted block.
 * @param {string} source
 * @returns {string}
 */
export function normalize(source) {
    return source
        .replace(/\r\n?/g, '\n')      // CRLF / CR -> LF
        .replace(/[ \t]+$/gm, '')     // strip trailing whitespace per line
        .trim();                      // strip leading/trailing blank lines
}

/** @param {string} source @returns {string} 16-hex-char content hash */
export function plantumlHash(source) {
    return createHash('sha256').update(normalize(source), 'utf8').digest('hex').slice(0, 16);
}

/** @param {string} source @returns {string} `<hash>.svg` */
export function plantumlFilename(source) {
    return `${plantumlHash(source)}.svg`;
}

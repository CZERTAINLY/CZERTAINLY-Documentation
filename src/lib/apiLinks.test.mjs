import {test} from 'node:test';
import assert from 'node:assert/strict';
import {extractApiReferenceIds, findUnknownApiReferences} from './apiLinks.mjs';

test('finds an id in a PlantUML diagram link', () => {
    const text = 'Client -> Core [[core-authority/#tag/Authority-Management/operation/create]]: Add';
    assert.deepEqual(extractApiReferenceIds(text), ['core-authority']);
});

test('finds an id behind the API_BASE_URL placeholder', () => {
    assert.deepEqual(extractApiReferenceIds('see %API_BASE_URL%core-certificate/ for details'), ['core-certificate']);
});

test('finds an id in an ordinary markdown link', () => {
    assert.deepEqual(extractApiReferenceIds('the [Auth API](/api/core-auth/) covers this'), ['core-auth']);
});

test('collects every distinct id on a page, once each', () => {
    const text = `
        [[core-authority/#tag/A/operation/x]]
        [[connector-authority-provider-v2/#tag/B/operation/y]]
        [[core-authority/#tag/A/operation/z]]
    `;
    assert.deepEqual(extractApiReferenceIds(text), ['core-authority', 'connector-authority-provider-v2']);
});

test('finds nothing in a page with no API links', () => {
    assert.deepEqual(extractApiReferenceIds('# Title\n\nSome prose and a [link](/docs/other).'), []);
});

test('ignores a diagram link that is not an API reference', () => {
    assert.deepEqual(extractApiReferenceIds('[[https://example.test/page]]'), []);
});

test('reports an id no longer in the catalog, with the file that uses it', () => {
    const pages = [
        {file: 'a.md', text: '[[core-auth/#tag/X/operation/y]]'},
        {file: 'b.md', text: '[[core-cryptography/#tag/X/operation/y]]'},
    ];
    assert.deepEqual(findUnknownApiReferences(pages, ['core-auth']), [{file: 'b.md', id: 'core-cryptography'}]);
});

test('reports nothing when every reference is published', () => {
    const pages = [{file: 'a.md', text: '[[core-auth/#tag/X/operation/y]] and (/api/core-token/)'}];
    assert.deepEqual(findUnknownApiReferences(pages, ['core-auth', 'core-token']), []);
});

import {test} from 'node:test';
import assert from 'node:assert/strict';
import {
    extractApiReferenceIds,
    findUnknownApiReferences,
    rewriteLegacyOperationLinks,
} from './apiLinks.mjs';

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

test('rewrites a Redoc operation link to the Scalar fragment', () => {
    const anchors = {'core-authority': {createAuthorityInstance: 'tag/authority-management/POST/v1/authorities'}};
    const {text, rewritten, unresolved} = rewriteLegacyOperationLinks(
        'Client -> Core [[core-authority/#tag/Authority-Management/operation/createAuthorityInstance]]: Add',
        anchors,
    );

    assert.equal(text, 'Client -> Core [[core-authority#tag/authority-management/POST/v1/authorities]]: Add');
    assert.equal(rewritten, 1);
    assert.deepEqual(unresolved, []);
});

test('leaves a link alone and reports it when the operation is gone', () => {
    const {text, rewritten, unresolved} = rewriteLegacyOperationLinks(
        '[[core-auth/#tag/X/operation/vanished]]', {'core-auth': {}},
    );

    assert.equal(text, '[[core-auth/#tag/X/operation/vanished]]');
    assert.equal(rewritten, 0);
    assert.deepEqual(unresolved, [{id: 'core-auth', operationId: 'vanished'}]);
});

test('is idempotent — an already-converted link is left as is', () => {
    const converted = '[[core-authority#tag/authority-management/POST/v1/authorities]]';
    const {text, rewritten} = rewriteLegacyOperationLinks(converted, {});
    assert.equal(text, converted);
    assert.equal(rewritten, 0);
});

test('drops the slash before the fragment, which the published site 404s on', () => {
    // topurl ends in "/api/", so "[[core-auth/#…]]" would request "/api/core-auth/#…".
    const {text, rewritten} = rewriteLegacyOperationLinks('[[core-auth/#tag/auth/POST/v1/login]]', {});
    assert.equal(text, '[[core-auth#tag/auth/POST/v1/login]]');
    assert.equal(rewritten, 1);
});

test('rewrites every link on a page', () => {
    const anchors = {
        'core-authority': {a: 'tag/t/GET/v1/a'},
        'connector-entity-provider': {b: 'tag/u/POST/v1/b'},
    };
    const {text, rewritten} = rewriteLegacyOperationLinks(
        '[[core-authority/#tag/T/operation/a]] then [[connector-entity-provider/#tag/U/operation/b]]',
        anchors,
    );
    assert.equal(text, '[[core-authority#tag/t/GET/v1/a]] then [[connector-entity-provider#tag/u/POST/v1/b]]');
    assert.equal(rewritten, 2);
});

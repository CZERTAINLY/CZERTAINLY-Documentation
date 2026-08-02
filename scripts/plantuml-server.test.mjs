import {test} from 'node:test';
import assert from 'node:assert/strict';
import {parseMappedPort, readinessPath, DOCKER_IMAGE} from './plantuml-server.mjs';

test('DOCKER_IMAGE is pinned by digest', () => {
    assert.match(DOCKER_IMAGE, /^plantuml\/plantuml-server@sha256:[0-9a-f]{64}$/);
});
test('parseMappedPort reads the host port from docker port output', () => {
    assert.equal(parseMappedPort('0.0.0.0:55000\n[::]:55000'), 55000);
});
test('parseMappedPort handles a single ipv4 line', () => {
    assert.equal(parseMappedPort('127.0.0.1:49160'), 49160);
});
test('parseMappedPort throws on empty output', () => {
    assert.throws(() => parseMappedPort(''), /mapped port/);
});
test('readinessPath is an /svg/ path', () => {
    assert.match(readinessPath(), /^\/svg\//);
});

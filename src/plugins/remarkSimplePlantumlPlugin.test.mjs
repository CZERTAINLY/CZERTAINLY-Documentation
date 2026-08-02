import {test} from 'node:test';
import assert from 'node:assert/strict';
import plugin from './remarkSimplePlantumlPlugin.mjs';
import {normalizePuml} from '../lib/normalizePuml.mjs';
import {plantumlFilename} from '../lib/plantumlHash.mjs';

test('rewrites a plantuml code node into an image node with the hashed url', async () => {
    const value = '@startuml\na -> b\n@enduml';
    const node = {type: 'code', lang: 'plantuml', value, meta: 'A sequence diagram'};
    await plugin()({type: 'root', children: [node]});

    assert.equal(node.type, 'image');
    assert.equal(node.url, '/img/plantuml/' + plantumlFilename(normalizePuml(value)));
    assert.equal(node.alt, 'A sequence diagram');
});
test('leaves non-plantuml code nodes untouched', async () => {
    const node = {type: 'code', lang: 'js', value: 'const x = 1;'};
    await plugin()({type: 'root', children: [node]});
    assert.equal(node.type, 'code');
});

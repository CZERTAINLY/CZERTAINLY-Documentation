import {test} from 'node:test';
import assert from 'node:assert/strict';
import {extractPlantumlBlocks, assertSupportedMarkers, assertEncodedLength} from './render-diagrams.mjs';

test('extracts a single plantuml block body', () => {
    const md = 'intro\n\n```plantuml\n@startuml\na -> b\n@enduml\n```\n\nmore';
    assert.deepEqual(extractPlantumlBlocks(md), ['@startuml\na -> b\n@enduml\n']);
});
test('extracts multiple blocks and ignores non-plantuml markers', () => {
    const md = '```js\nx\n```\n\n```plantuml\nA\n```\n\n```plantuml\nB\n```';
    assert.deepEqual(extractPlantumlBlocks(md), ['A\n', 'B\n']);
});
test('assertSupportedMarkers throws on an indented ```plantuml marker', () => {
    const md = 'text\n\n  ```plantuml\n@startuml\na -> b\n@enduml\n  ```\n';
    assert.throws(() => assertSupportedMarkers(md, 'doc.mdx'), /indented/);
});
test('assertSupportedMarkers throws on a ~~~plantuml marker', () => {
    const md = 'text\n\n~~~plantuml\n@startuml\na -> b\n@enduml\n~~~\n';
    assert.throws(() => assertSupportedMarkers(md, 'doc.mdx'), /~~~plantuml/);
});
test('assertSupportedMarkers accepts a column-0 ```plantuml marker', () => {
    const md = 'text\n\n```plantuml\n@startuml\na -> b\n@enduml\n```\n';
    assert.doesNotThrow(() => assertSupportedMarkers(md, 'doc.mdx'));
});
test('assertSupportedMarkers throws on a space before "plantuml"', () => {
    const md = 'text\n\n``` plantuml\n@startuml\na -> b\n@enduml\n```\n';
    assert.throws(() => assertSupportedMarkers(md, 'doc.mdx'), /space before/);
});
test('assertSupportedMarkers throws on a language glued to plantuml', () => {
    const md = 'text\n\n```plantumlish\n@startuml\na -> b\n@enduml\n```\n';
    assert.throws(() => assertSupportedMarkers(md, 'doc.mdx'), /glued/);
});
test('assertSupportedMarkers accepts ```plantuml with trailing meta after a space', () => {
    const md = 'text\n\n```plantuml title="x"\n@startuml\na -> b\n@enduml\n```\n';
    assert.doesNotThrow(() => assertSupportedMarkers(md, 'doc.mdx'));
});
test('assertSupportedMarkers throws on a 4+ backtick plantuml marker', () => {
    const md = 'text\n\n````plantuml\n@startuml\na -> b\n@enduml\n````\n';
    assert.throws(() => assertSupportedMarkers(md, 'doc.mdx'), /4\+ backticks/);
});
test('assertEncodedLength throws when over the safe limit', () => {
    assert.throws(() => assertEncodedLength('x'.repeat(5000), 'big.svg'), /too long/i);
});
test('assertEncodedLength accepts a normal-length encoding', () => {
    assert.doesNotThrow(() => assertEncodedLength('x'.repeat(700), 'ok.svg'));
});

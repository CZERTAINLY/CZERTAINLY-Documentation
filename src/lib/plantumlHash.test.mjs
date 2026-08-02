import {test} from 'node:test';
import assert from 'node:assert/strict';
import {normalize, plantumlHash, plantumlFilename} from './plantumlHash.mjs';

test('normalizes CRLF and trims trailing whitespace', () => {
    assert.equal(normalize('a -> b  \r\n\r\n'), 'a -> b');
});
test('raw-extracted and AST-extracted forms hash identically', () => {
    const raw = '@startuml\r\na -> b\r\n@enduml\r\n';
    const ast = '@startuml\na -> b\n@enduml';
    assert.equal(plantumlHash(raw), plantumlHash(ast));
});
test('a one-character source change yields a different filename', () => {
    assert.notEqual(plantumlFilename('@startuml\na -> b\n@enduml'),
        plantumlFilename('@startuml\na -> c\n@enduml'));
});
test('filename is 16 hex chars + .svg', () => {
    assert.match(plantumlFilename('@startuml\na -> b\n@enduml'), /^[0-9a-f]{16}\.svg$/);
});

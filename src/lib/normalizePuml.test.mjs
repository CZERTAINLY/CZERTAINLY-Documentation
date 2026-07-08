import {test} from 'node:test';
import assert from 'node:assert/strict';
import {normalizePuml} from './normalizePuml.mjs';

test('wraps a source with no tags in @startuml/@enduml', () => {
    assert.equal(normalizePuml('a -> b'), '@startuml\na -> b\n@enduml\n');
});
test('closes a source that has @startuml but no @enduml', () => {
    assert.equal(normalizePuml('@startuml\na -> b'), '@startuml\na -> b\n@enduml\n');
});
test('leaves an already-wrapped source unchanged (bar trailing newline)', () => {
    assert.equal(normalizePuml('@startuml\na -> b\n@enduml\n'), '@startuml\na -> b\n@enduml\n');
});
test('pairs a non-uml diagram type correctly', () => {
    assert.equal(normalizePuml('@startmindmap\n* root'), '@startmindmap\n* root\n@endmindmap\n');
});
test('rejects an !include directive', () => {
    assert.throws(() => normalizePuml('@startuml\n!include /etc/passwd\n@enduml'), /include/i);
});
test('rejects an !includeurl directive', () => {
    assert.throws(() => normalizePuml('@startuml\n!includeurl http://evil/x\n@enduml'), /include/i);
});

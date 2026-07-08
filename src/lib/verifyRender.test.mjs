import {test} from 'node:test';
import assert from 'node:assert/strict';
import {parseSvgViewBox, verifyRender} from './verifyRender.mjs';

test('parseSvgViewBox reads width/height', () => {
    assert.deepEqual(parseSvgViewBox('<svg viewBox="0 0 601 352">'),
        {minX: 0, minY: 0, width: 601, height: 352});
});
test('SVG with a sane viewBox passes', () => {
    assert.deepEqual(verifyRender('<svg viewBox="0 0 601 352"></svg>'), {ok: true});
});
test('a tall/wide diagram still passes', () => {
    assert.deepEqual(verifyRender('<svg viewBox="0 0 467 704"></svg>'), {ok: true});
});
test('zero-dimension viewBox fails', () => {
    const res = verifyRender('<svg viewBox="0 0 0 100"></svg>');
    assert.equal(res.ok, false);
    assert.match(res.reason, /degenerate/i);
});
test('missing viewBox fails', () => {
    assert.equal(verifyRender('<svg></svg>').ok, false);
});
test('PlantUML error image fails', () => {
    assert.equal(verifyRender('<svg viewBox="0 0 300 100"><text>Syntax Error?</text></svg>').ok, false);
});
test('non-200 response (errored flag) fails', () => {
    assert.equal(verifyRender('<svg viewBox="0 0 601 352"></svg>', {errored: true}).ok, false);
});

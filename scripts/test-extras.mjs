// node --experimental-strip-types scripts/test-extras.mjs
import assert from "node:assert/strict";
import { allocate } from "../src/utils/vorrat.ts";
import { rate } from "../src/utils/rating.ts";
import { labelsFor } from "../src/utils/labels.ts";

// Eigene Anteile bleiben, der Rest wird gleich verteilt.
assert.deepEqual(allocate(40, ["a", "b", "c"], {}), [14, 13, 13]);
assert.deepEqual(allocate(40, ["a", "b", "c"], { a: 16 }), [16, 12, 12]);
assert.deepEqual(allocate(40, ["a", "b", "c"], { a: 16, b: 12, c: 5 }), [16, 12, 5]);
assert.deepEqual(allocate(40, ["a", "b"], { a: 50 }), [50, 0]);
assert.deepEqual(allocate(1000, ["a", "b", "c"], { c: 500 }, 10), [250, 250, 500]);
assert.deepEqual(allocate(40, ["a"], { x: 9 }), [40]);

const none = { up: [], down: [] };
assert.deepEqual(rate(none, "x", "up"), { up: ["x"], down: [] });
assert.deepEqual(rate({ up: ["x"], down: [] }, "x", "down"), { up: [], down: ["x"] });
assert.deepEqual(rate({ up: ["x"], down: [] }, "x", "up"), none);

const sources = {
  prep: [{ id: "p1", de: { title: "Suppe", reheat: "Aufkochen." }, zh: { title: "汤", reheat: "煮开。" } }],
  ways: [{ id: "japan-tofu-a", de: { title: "Tofu", reheat: "Braten." }, zh: { title: "豆腐", reheat: "煎。" } }],
};
const base = { portions: 4, frozenOn: "2026-12-31", months: 2 };
const [a, b, c] = labelsFor([
  { id: "p1", name: "Suppe", ...base }, { id: "vg-japan-tofu-a-2026-12-31", name: "Tofu", ...base }, { id: "own-1", name: "Jiaozi", ...base },
], sources);
assert.equal(a.zh.title, "汤");
assert.equal(a.until, "2027-02-28");
assert.equal(b.zh.reheat, "煎。");
assert.deepEqual([c.de.title, c.zh], ["Jiaozi", undefined]);
console.log("extras ok");

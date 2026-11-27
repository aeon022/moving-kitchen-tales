// node --experimental-strip-types scripts/test-cats.mjs
import assert from "node:assert/strict";
import { dayTime, isNewYear } from "../src/utils/catMood.ts";

assert.equal(dayTime(new Date(2027, 0, 1, 7)), "morning");
assert.equal(dayTime(new Date(2027, 0, 1, 13)), "day");
assert.equal(dayTime(new Date(2027, 0, 1, 22)), "night");
assert.equal(dayTime(new Date(2027, 0, 1, 3)), "night");
assert.ok(isNewYear(new Date(2027, 1, 6)));
assert.ok(!isNewYear(new Date(2027, 1, 4)));
assert.ok(!isNewYear(new Date(2026, 10, 27)));
console.log("catMood ok");

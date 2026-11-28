// node --experimental-strip-types scripts/test-freezer.mjs
import assert from "node:assert/strict";
import { monthsOf, portionsOf, eatBy, daysLeft, validFrozen } from "../src/utils/freezer.ts";
import { encodeShare, decodeShare, mergeShared } from "../src/utils/freezer.ts";

assert.equal(monthsOf("bis zu 2 Monate"), 2);
assert.equal(monthsOf("mehrere Monate"), 1);
assert.equal(monthsOf("bis zu 6 Monate"), 3);
assert.equal(portionsOf("Ergibt 4 Portionen", 0.5), 2);
assert.equal(portionsOf("Ergibt 8 Stück", 2), 16);
const item = { id: "a", name: "Suppe 汤", portions: 4, frozenOn: "2026-12-31", months: 2 };
assert.equal(eatBy(item), "2027-02-28");
assert.equal(daysLeft(item, new Date(2027, 1, 27, 23)), 1);
assert.deepEqual(validFrozen([item, { id: 1 }, { ...item, portions: -1 }, null]), [item]);

const s = { lists: { "mkt.vorkochen.done": ["x"], "mkt.vorkochen.bought": [], "mkt.pantry.buy": ["酱油"], "mkt.rating.up": ["Suppe"], "mkt.rating.down": [] }, freezer: [item] };
assert.deepEqual(decodeShare(encodeShare(s)), s);
assert.equal(decodeShare("kaputt!!"), null);
assert.deepEqual(decodeShare(encodeShare({ lists: { evil: ["y"] }, freezer: "no" })).freezer, []);
assert.ok(!("evil" in decodeShare(encodeShare({ lists: { evil: ["y"] } })).lists));
const m = mergeShared(s, { lists: { "mkt.vorkochen.done": ["y"] }, freezer: [{ ...item, portions: 1 }] });
assert.deepEqual(m.lists["mkt.vorkochen.done"], ["x", "y"]);
assert.equal(m.freezer[0].portions, 1);
console.log("freezer & share ok");

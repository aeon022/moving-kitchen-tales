// node --experimental-strip-types scripts/test-thaw.mjs
import assert from "node:assert/strict";
import fs from "node:fs";
import { referenced, needsThaw, thawList } from "../src/utils/thaw.ts";
import { PREP_RECIPES } from "../src/plans/prep/preppen.ts";

assert.deepEqual(referenced("Vom Vorrat „B“ und „X“.", ["A", "B"]), [1]);
assert.ok(needsThaw("Über Nacht im Kühlschrank auftauen, dann kochen."));
assert.ok(!needsThaw("Gefroren mit 1,2 l Wasser aufsetzen, mindestens 60 Min. köcheln."));
assert.ok(!needsThaw("Aus dem Gefrierfach in der Mikrowelle erhitzen; nicht bei Raumtemperatur auftauen."));

// Jeder Vorrats-Verweis in der Wochenbett-Festtagswoche muss gefunden werden.
const src = fs.readFileSync(new URL("../src/plans/2026/Woche-53-2026-12-28-wochenbett.de.jsx", import.meta.url), "utf8");
const data = eval(src.match(/export const DATA = (\[[\s\S]*?\n\]);/)[1]);
const titles = PREP_RECIPES.map((r) => r.title);
for (const r of data) assert.ok(referenced(r.desc, titles).length >= 1, `${r.id}: ${r.desc}`);
// Gerichte, deren Schritte das Auftauen am Vorabend verlangen, stehen auf dem Zettel.
for (const r of data) if (r.steps.some((s) => /vorabend/i.test(s) && /auftauen/i.test(s))) assert.ok(thawList(r, PREP_RECIPES).length >= 1, r.id);
const ids = (id) => thawList(data.find((r) => r.id === id), PREP_RECIPES).map((i) => PREP_RECIPES[i].id);
assert.deepEqual(ids("mo-a"), ["korea-miyeokguk-rind"]);
assert.deepEqual(ids("fr-f"), ["wb-tori-daikon-soup"]);
assert.deepEqual(ids("sa-a"), []);
console.log("thaw ok");

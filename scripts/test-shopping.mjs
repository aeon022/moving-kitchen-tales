// node --experimental-strip-types scripts/test-shopping.mjs
import assert from "node:assert/strict";
import { shoppingList, formatLine, reminderText, taskctlCommands } from "../src/utils/shoppingList.ts";
import { PREP_RECIPES, PREP_SCHEDULE } from "../src/plans/prep/preppen.ts";

const l = shoppingList([
  { ingredients: ["Rindfleisch mager 350 g", "Sojasauce natriumarm 30 ml", "Wasser 1500 ml", "Daikon 500 g", "Knoblauch 1 Zehe"], factor: 2 },
  { ingredients: ["Rindfleisch, mager, gewürfelt 200 g", "Knoblauch, gehackt 2 Zehen", "Hühnerkarkassen oder Hähnchenflügel 1 kg"] },
]);
assert.deepEqual(l["Lidl / Hofer"].map(formatLine), ["Knoblauch: 4 Zehen", "Rindfleisch mager: 900 g"]);
assert.deepEqual(l["Asia-Shop"].map(formatLine), ["Daikon: 1000 g"]);
assert.equal(l["Interspar / Spar"][0].qty, 1000);

// Jeder Eintrag im Vorkochplan zeigt auf ein Rezept, und jede Mengenzeile wird erkannt.
for (const w of PREP_SCHEDULE) for (const it of w.items) {
  const r = PREP_RECIPES.find((x) => x.id === it.id);
  assert.ok(r, it.id);
  for (const x of Object.values(shoppingList([r])).flat()) assert.ok(x.qty > 0, `${it.id}: ${x.name}`);
}
assert.equal(reminderText(["a", "b"]), "a\nb");
assert.equal(taskctlCommands(["Mom's $(x)"]), `taskctl add 'Mom'\\''s $(x)' --list 'Einkäufe'`);
console.log("shoppingList ok");

// node --experimental-strip-types scripts/test-fridge.mjs
import assert from "node:assert/strict";
import { canonical, matchRecipes } from "../src/utils/fridgeMatch.ts";

assert.equal(canonical("Eier 2 Stück"), "ei");
assert.equal(canonical("Möhren"), "karotte");
assert.equal(canonical("Reisessig mild 2 EL"), "essig");
assert.equal(canonical("Reis (roh) 150 g"), "reis");
assert.equal(canonical("Hähnchenschenkel ohne Haut 260 g"), "hähnchen");
assert.equal(canonical("Hähnchenhack 200 g"), "hähnchenhack");

const recipes = [
  { title: "Lachsreis", ingredients: ["Lachsfilet 260 g", "Reis (roh) 150 g", "Ingwer 10 g"], swaps: "Lachs ↔ Kabeljau" },
  { title: "Eierreis", ingredients: ["Eier 2 Stück", "Reis (gekocht) 280 g", "Frühlingszwiebel 2 Stück"] },
  { title: "Essigsalat", ingredients: ["Gurke 1 Stück", "Reisessig mild 2 EL"] },
  { title: "Alt", ingredients: [{ name: "Eier" }] },
];

assert.deepEqual(matchRecipes(recipes, []), []);

const sub = matchRecipes(recipes, ["Kabeljau", "Ingwer"]);
assert.equal(sub.length, 1);
assert.deepEqual(sub[0].substitutes, [{ missing: "Lachsfilet", use: "Kabeljau" }]);
assert.deepEqual(sub[0].open, []);

const eggs = matchRecipes(recipes, ["Ei", "Frühlingszwiebeln"]);
assert.equal(eggs[0].recipe.title, "Eierreis");
assert.deepEqual(eggs[0].missing, []);
assert.equal(eggs[1].recipe.title, "Alt");

// "Reis" darf nicht Reisessig treffen
assert.ok(!matchRecipes(recipes, ["Reis"]).some((m) => m.recipe.title === "Essigsalat"));
// ohne Grundvorrat fehlt Reis
assert.ok(matchRecipes(recipes, ["Ei"], false).find((m) => m.recipe.title === "Eierreis").missing.includes("Reis"));
// Oberbegriff
assert.ok(matchRecipes(recipes, ["Fisch"]).some((m) => m.recipe.title === "Lachsreis"));

// Regressionen aus dem Review
const one = (ingredients, fridge, swaps) => matchRecipes([{ title: "x", ingredients, swaps }], fridge)[0];
const full = (i, f) => { const m = one([i], [f]); return !!m && m.missing.length === 0; };
for (const [i, f] of [
  ["Ingwer-Knoblauch-Paste 10 g", "Ingwer"], ["Süßkartoffel-Gnocchi 200 g", "Süßkartoffel"], ["Karotte & Zucchini 100 g", "Karotte"],
  ["Eiernudeln 100 g", "Eier"], ["Schweineleber 200 g", "Schwein"], ["Hühnerfüße 200 g", "Hähnchenbrust"],
  ["Getrocknete Tofuhaut 20 g", "Tofu"], ["Klebreismehl 50 g", "Klebreis"],
]) assert.ok(!full(i, f), `${f} darf ${i} nicht abdecken`);
for (const [i, f] of [
  ["Seelachsfilet 200 g", "Seelachs"], ["Saiblingfilet 200 g", "Fisch"], ["Weißer Fisch 200 g", "Lachs"], ["Spinat oder Pak Choi 100 g", "Pak Choi"],
  ["Ingwer, gerieben 5 g", "Ingwer"], ["Salatgurke 1 Stück", "Gurke"], ["Putenbrust 200 g", "Pute"], ["Hühnchenbrust 200 g", "Hähnchen"],
  ["Weißkohl 200 g", "Kohl"], ["Süßkartoffel 200 g", "Süsskartoffel"], ["Eier 2 Stück", "2 Eier"], ["Kartoffeln 500 g", "500g Kartoffeln"],
  ["Pak Choi 100 g", "Bok Choy"], ["Udon vorgegart 400 g", "Nudeln"],
]) assert.ok(full(i, f), `${f} soll ${i} abdecken`);
assert.ok(full("Karotte & Zucchini 100 g", "Karotte, Zucchini") === false);
assert.deepEqual(one(["Karotte & Zucchini 100 g"], ["Karotte", "Zucchini"]).missing, []);
assert.deepEqual(one(["Lachsfilet 200 g", "Ingwer 5 g"], ["Kabeljau"], "Lachs ↔ Kabeljau").open, ["Ingwer"]);
assert.deepEqual(one(["Tofu 200 g"], ["Kabeljau"], "Tofu ↔ Hähnchen oder Kabeljau").open, []);
assert.deepEqual(one(["Karotte 1 Stück", "Pastinake 100 g"], ["Karotte"]).open, ["Pastinake"]);
assert.deepEqual(one(["Salz & Pfeffer 1 Prise", "Neutrales Öl 1 EL", "Eier 2 Stück"], ["Ei"]).missing, []);

console.log("fridgeMatch ok");

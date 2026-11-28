// node --experimental-strip-types scripts/test-vorrat.mjs [Gruppe]   (mit Gruppe: nur diese Datei prüfen)
import assert from "node:assert/strict";
import { readdirSync } from "node:fs";
import { CUTS } from "../src/plans/vorrat/cuts.ts";

const only = process.argv[2];
const dir = new URL("../src/plans/vorrat/", import.meta.url);
const files = readdirSync(dir).filter((f) => /^ways\.[a-z]+\.ts$/.test(f) && (!only || f === `ways.${only}.ts`));
const ways = [];
for (const f of files) ways.push(...(await import(new URL(f, dir))).WAYS);
const cutIds = new Set(CUTS.map((c) => c.id));
const FORBIDDEN = /reiswein|shaoxing|kochwein|weißwein|rotwein|\bsake\b|mirin|料酒|米酒|黄酒|味醂|味淋|清酒|leber|sashimi|rohmilch|thunfisch|schwertfisch|königsmakrele|danggui|当归|angelika|ginseng|人参|인삼/i;
const ANIMAL = new Set(["lamm", "pute", "haehnchen", "ente", "schwein", "rind", "fisch"]);
const HAN = /\p{Script=Han}/u;
const errors = [];
const ids = new Set();
for (const w of ways) {
  const e = (s) => errors.push(`${w.id}: ${s}`);
  if (ids.has(w.id)) e("doppelte id");
  ids.add(w.id);
  if (!w.cuts?.length || w.cuts.some((c) => !cutIds.has(c))) e("unbekannte oder fehlende cuts");
  if (!["china", "japan", "korea", "suedostasien", "indien", "orient", "mittelmeer", "heimisch"].includes(w.origin)) e("origin");
  if (!["marinade", "gegart", "basis"].includes(w.art)) e("art");
  if (![1, 2, 3].includes(w.months)) e("months");
  if (w.months > 2 && w.cuts.some((c) => ANIMAL.has(CUTS.find((x) => x.id === c)?.group))) e("Fleisch/Fisch höchstens 2 Monate");
  if (!(w.ingredients?.length >= 2)) e("zu wenige Zutaten");
  for (const i of w.ingredients ?? [])
    if (!(i.length === 4 && i[0] && HAN.test(i[1]) && i[2] > 0 && ["g", "ml", "EL", "TL", "Stk", "Zehe", "Prise"].includes(i[3]))) e(`Zutat ${JSON.stringify(i)}`);
  for (const l of ["de", "zh"]) {
    const t = w[l];
    if (!(t?.title && t.freeze && t.reheat && t.steps?.length >= 3)) e(`${l} unvollständig`);
  }
  if (w.zh && [w.zh.title, w.zh.freeze, w.zh.reheat, ...(w.zh.steps ?? [])].some((s) => !HAN.test(s))) e("zh nicht übersetzt");
  if (w.de?.steps?.length !== w.zh?.steps?.length) e("Anzahl Schritte de/zh");
  const text = [w.de?.title, w.zh?.title, ...(w.de?.steps ?? []), ...(w.zh?.steps ?? []), ...(w.ingredients ?? []).flatMap((i) => [i[0], i[1]])].join(" ");
  const bad = text.match(FORBIDDEN);
  if (bad) e(`verbotene Zutat (auch nicht als „ohne …“ erwähnen): ${bad[0]}`);
  if (w.art === "marinade" && !/kühlschrank|direkt|gefroren/i.test(w.de?.reheat ?? "")) e("reheat: Auftauen im Kühlschrank oder direkt gefroren angeben");
  if (/raumtemperatur auftauen/i.test(w.de?.reheat ?? "") && !/nicht/i.test(w.de.reheat)) e("nie bei Raumtemperatur auftauen");
}
const wanted = CUTS.filter((c) => !only || c.group === only || (only === "gefluegel" && ["haehnchen", "ente"].includes(c.group)) || (only === "lamm" && c.group === "pute") || (only === "rotfleisch" && ["schwein", "rind"].includes(c.group)) || (only === "leicht" && ["fisch", "pflanzlich"].includes(c.group)));
for (const c of wanted) {
  const n = ways.filter((w) => w.cuts?.includes(c.id)).length;
  if (n < 5) errors.push(`${c.id}: nur ${n} Wege (mind. 5)`);
}
assert.equal(errors.length, 0, "\n" + errors.join("\n"));
console.log(`vorrat ok: ${ways.length} Wege, ${wanted.length} Rohwaren`);

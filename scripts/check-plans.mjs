// scripts/check-plans.mjs
// Prüft Wochenpläne ab KW45/2026: Struktur + Ernährungs-Leitplanken.
// Aufruf: node scripts/check-plans.mjs
import { readdirSync, readFileSync, existsSync } from "node:fs";
import { join } from "node:path";

const ROOT = join(import.meta.dirname, "..", "src", "plans");
const FROM = "2026-11-02";
const IDS = ["mo", "di", "mi", "do", "fr", "sa", "so"].flatMap((d) => ["f", "m", "a"].map((m) => `${d}-${m}`));
// Zutaten, die in Schwangerschaft/Wochenbett nicht vorkommen sollen.
const FORBIDDEN = /reiswein|shaoxing|kochwein|\bsake\b|mirin|米酒|leber|sashimi|rohmilch|thunfisch|schwertfisch|königsmakrele|danggui|当归|當歸|angelika|ginseng|人参|人蔘|인삼/i;
const SEAWEED = /wakame|kombu|miyeok|kelp|seetang/i;

const errors = [];
let count = 0;
for (const year of ["2026", "2027"]) {
  const dir = join(ROOT, year);
  if (!existsSync(dir)) continue;
  for (const name of readdirSync(dir)) {
    const m = name.match(/^Woche-(\d+)-(\d{4}-\d{2}-\d{2})(-wochenbett)?\.de\.jsx$/);
    if (!m || m[2] < FROM) continue;
    count++;
    const [, week, start, variant = ""] = m;
    const err = (s) => errors.push(`${name}: ${s}`);
    const src = readFileSync(join(dir, name), "utf8");
    if (!src.includes(`id: "woche-${week}-${start}${variant}"`)) err("meta.id passt nicht zum Dateinamen");
    if (!src.includes(`startDate: "${start}"`)) err("meta.startDate falsch");
    if (new Date(start + "T12:00:00Z").getUTCDay() !== 1) err("startDate ist kein Montag");
    for (let i = 0; i < 7; i++) {
      const d = new Date(start + "T12:00:00Z");
      d.setUTCDate(d.getUTCDate() + i);
      const iso = d.toISOString().slice(0, 10);
      if (!src.includes(`(${iso})`)) err(`Tagesname mit Datum ${iso} fehlt`);
    }
    if (!/subtitle="[^"]+"/.test(src)) err("subtitle fehlt");
    const block = src.match(/export const DATA = (\[[\s\S]*?\n\]);/);
    if (!block) { err("DATA nicht gefunden"); continue; }
    let data;
    try { data = eval(block[1]); } catch (e) { err("DATA Syntaxfehler: " + e.message); continue; }
    if (data.map((r) => r.id).join() !== IDS.join()) err("braucht genau 21 Rezepte mo-f … so-a in Reihenfolge");
    let seaweed = 0;
    for (const r of data) {
      const e = (s) => err(`${r.id}: ${s}`);
      for (const k of ["title", "desc", "story", "target", "checks", "swaps", "side"]) if (!r[k]) e(`${k} fehlt`);
      if (!(r.ingredients?.length >= 3)) e("zu wenige Zutaten");
      if (!(r.steps?.length >= 3)) e("zu wenige Schritte");
      if (r.remind !== !r.id.endsWith("-m")) e("remind falsch (f/a true, m false)");
      if (typeof r.riceCooker?.enabled !== "boolean") e("riceCooker.enabled fehlt");
      const kh = Number(r.target?.match(/(\d+)\s*g KH/)?.[1]);
      if (!(kh >= 55 && kh <= 95)) e(`KH ${kh} außerhalb 55–95`);
      for (const i of r.ingredients ?? [])
        if (!/\s\d+([.,]\d+)?\s?(g|ml|Stück|Blatt|Zehen?|Prise|EL|TL|Kolben)(\s\(.*\))?$/.test(i)) e(`Zutatenformat: "${i}"`);
      const cooked = [r.title, ...(r.ingredients ?? []), r.swaps, r.side].join(" ");
      const bad = cooked.match(FORBIDDEN);
      if (bad) e(`verbotene Zutat: ${bad[0]}`);
      if (SEAWEED.test((r.ingredients ?? []).join(" "))) seaweed++;
    }
    if (seaweed > 3) err(`Algen in ${seaweed} Rezepten (max. 3 pro Woche, Jod)`);
    const titles = data.map((r) => r.title);
    if (new Set(titles).size !== titles.length) err("doppelte Titel in der Woche");
  }
}
// Einfache Wochenbett-Vorratsrezepte (id "wb-…")
const { PREP_RECIPES } = await import("../src/plans/prep/preppen.ts");
const ids = PREP_RECIPES.map((r) => r.id);
for (const id of ids.filter((x, i) => ids.indexOf(x) !== i)) errors.push(`preppen: doppelte id ${id}`);
for (const r of PREP_RECIPES.filter((x) => x.id.startsWith("wb-"))) {
  const e = (s) => errors.push(`preppen ${r.id}: ${s}`);
  for (const k of ["type", "emoji", "title", "desc", "batchSize", "freezeMethod", "freezerLife", "reheat"]) if (!r[k]) e(`${k} fehlt`);
  if (!(r.ingredients?.length >= 2 && r.steps?.length >= 3 && r.tags?.length)) e("Zutaten/Schritte/Tags unvollständig");
  const bad = r.ingredients.join(" ").match(FORBIDDEN); // Titel darf "ohne Reiswein" sagen
  if (bad) e(`verbotene Zutat: ${bad[0]}`);
}

// Übersetzungen: gleiche Rezepte, gleiche Anzahl Zutaten/Schritte, gleiche Mengen wie das Original.
const dataOf = (file) => eval(readFileSync(file, "utf8").match(/export const DATA = (\[[\s\S]*?\n\]);/)[1]);
const numbers = (list) => list.map((s) => (s.match(/\d+([.,]\d+)?/g) ?? []).join("/").replaceAll(",", ".")).join("|");
let translated = 0;
for (const year of ["2026", "2027"]) {
  const dir = join(ROOT, year);
  for (const name of readdirSync(dir)) {
    if (!name.endsWith(".zh.jsx") || !readFileSync(join(dir, name), "utf8").includes("sourceData=")) continue;
    translated++;
    const err = (s) => errors.push(`${name}: ${s}`);
    const zh = dataOf(join(dir, name));
    const de = dataOf(join(dir, name.replace(".zh.", ".de.")));
    if (zh.map((r) => r.id).join() !== de.map((r) => r.id).join()) { err("Rezept-IDs weichen ab"); continue; }
    zh.forEach((r, i) => {
      const o = de[i];
      if (numbers(r.ingredients) !== numbers(o.ingredients)) err(`${r.id}: Zutatenmengen weichen ab`);
      if (r.steps.length !== o.steps.length) err(`${r.id}: Anzahl Schritte weicht ab`);
      for (const k of ["title", "desc", "story", "target", "checks"]) if (!/\p{Script=Han}/u.test(r[k] ?? "")) err(`${r.id}: ${k} nicht übersetzt`);
      if (r.remind !== o.remind || r.riceCooker?.enabled !== o.riceCooker?.enabled) err(`${r.id}: remind/riceCooker weicht ab`);
    });
  }
}
console.log(`${translated} Übersetzungen geprüft`);

// Chinesische Vorrats-Rezepte: vollständig, gleiche Mengen.
const { PREP_ZH1 } = await import("../src/plans/prep/preppen.zh1.ts");
const { PREP_ZH2 } = await import("../src/plans/prep/preppen.zh2.ts");
const prepZh = { ...PREP_ZH1, ...PREP_ZH2 };
for (const r of PREP_RECIPES) {
  const z = prepZh[r.id];
  if (!z) { errors.push(`preppen zh: ${r.id} fehlt`); continue; }
  if (numbers(z.ingredients) !== numbers(r.ingredients)) errors.push(`preppen zh ${r.id}: Mengen weichen ab`);
  if (z.steps.length !== r.steps.length) errors.push(`preppen zh ${r.id}: Anzahl Schritte weicht ab`);
}

if (errors.length) console.error(errors.join("\n"));
console.log(`${count} Wochenpläne geprüft, ${errors.length} Fehler`);
process.exit(errors.length ? 1 : 0);

// Kühlschrank-Suche: vergleicht vorhandene Zutaten mit den Zutaten-Strings der Sammlung.
// Reine Logik ohne React, getestet in scripts/test-fridge.mjs.
// ponytail: Namensabgleich über Synonymliste + Wortanfänge, keine echte Lebensmittel-Ontologie.
// Wenn eine Zutat nicht erkannt wird: SYNONYMS oder GROUPS ergänzen.

export type Ingredient = string | { name: string };
export type Matchable = { title: string; ingredients?: Ingredient[]; swaps?: string };

// Reihenfolge zählt: erste Regel gewinnt. Namen sind klein geschrieben, ß ist zu ss normalisiert.
// Verglichen werden nur ganze Namen, damit "Süsskartoffel" nie "Süsskartoffel-Gnocchi" abdeckt.
const SYNONYMS: [RegExp, string][] = [
  [/^(\S*[ -])?\S*essig$/, "essig"],
  [/^(\S*[ -])?\S*sojaso?(auce|sse)$/, "sojasauce"],
  [/^(\S*[ -])?\S*pfeffer$/, "pfeffer"],
  [/^(\S*salz)$/, "salz"],
  [/^(sesamöl|olivenöl|speiseöl|rapsöl|sonnenblumenöl|pflanzenöl|bratöl|öl)$/, "öl"],
  [/^(röst)?sesam(samen|körner|saat)?$/, "sesam"],
  [/^(\S+ )?\S*(brühe|dashi)$|^dashi/, "brühe"],
  [/^(mais|speise|kartoffel)?stärke$/, "stärke"],
  [/^(reis|vollkornreis|risottoreis|jasminreis|basmatireis|sushi-?reis|brauner reis)$/, "reis"],
  [/^(ei|eier|eigelbe?|eiweiss)$/, "ei"],
  [/^(karotten?|möhren?|mohrrüben?)$/, "karotte"],
  [/^(daikon(-rettich)?|rettich)$/, "rettich"],
  [/^(frühlingszwiebeln?|jungzwiebeln?|lauchzwiebeln?|frühlingslauch)$/, "frühlingszwiebel"],
  [/^zwiebeln?$/, "zwiebel"],
  [/^(knoblauch(zehen?)?)$/, "knoblauch"],
  [/^(kartoffeln?|erdäpfel)$/, "kartoffel"],
  [/^(tomaten?|cherrytomaten?|kirschtomaten?|passierte tomaten|paradeiser)$/, "tomate"],
  [/^(salat|mini)?gurken?$/, "gurke"],
  [/^äpfel$/, "apfel"],
  [/^(champignons?|egerlinge?)$/, "champignons"],
  [/^shiitake([ -]?pilze?)?$/, "shiitake"],
  [/^austernpilze?$/, "austernpilze"],
  [/^kräuterseitlinge?$/, "kräuterseitlinge"],
  [/^(enoki|shimeji)([ -]?pilze?)?$/, "enoki"],
  [/^pilze?$/, "pilze"],
  [/^(pak ?choi|bok ?choy)$/, "pak choi"],
  [/^(aubergine|melanzani)n?$/, "aubergine"],
  [/^(brokkoli|brokkoli-?röschen)$/, "brokkoli"],
  [/^(kürbis|hokkaido(-?kürbis)?)$/, "kürbis"],
  [/^erbsen?$/, "erbsen"],
  [/^(garnelen?|shrimps?)$/, "garnelen"],
  [/^(seelachs|lachs|kabeljau|saibling|wolfsbarsch|zander)(-?filets?)?$/, "$1"],
  [/^dorsch(filets?)?$/, "kabeljau"],
  [/^forellen?(filets?)?$/, "forelle"],
  [/^goldbrassen?(filets?)?$/, "goldbrasse"],
  [/^(fisch|fischfilets?)$/, "fisch"],
  [/^(hähnchen|hühnchen|hühner|puten)-?hack(fleisch)?$/, "$1hack"],
  [/^(hähnchen|hühnchen|huhn|hendl|poulet)(-?(brust(filet)?|schenkel(fleisch)?|keulen?(-fleisch)?|fleisch|filet|flügel))?$/, "hähnchen"],
  [/^puten?(-?(brust(filet)?|fleisch|filet|schnitzel))?$/, "pute"],
  [/^(rinder|schweine)-?(hack(fleisch)?|faschiertes)$/, "$1hack"],
  [/^(hack|hackfleisch|faschiertes)$/, "hack"],
  [/^(rind|rindfleisch|rinder-?(filet|steaks?|gulasch|brust))$/, "rindfleisch"],
  [/^(schwein|schweine-?(fleisch|filet|schnitzel|geschnetzeltes|gulasch|schulter))$/, "schweinefleisch"],
  [/^(tofu|naturtofu|seidentofu)$/, "tofu"],
  [/^spinat|^blattspinat$/, "spinat"],
  [/^paprika(schoten?)?$/, "paprika"],
  [/^(quark|topfen|magerquark)$/, "quark"],
];

const DESCRIPTORS =
  /(?<!\p{L})(ungesüsste?r?|neutrales?|magere?[rs]?|frische?[rs]?|getrocknete?[rs]?|geröstete?[rs]?|gemahlene?r?|reife?r?|milde?[rs]?|natriumarme?|pasteurisierte?r?|rohe?|gekochte?r?|tk|grosse?r?|kleine?r?|feste?r?|seiden|weisse[rs]?|schwarze[rs]?|dunkle|helle|dunkel|hell|chinesische?r?|sehr|extrem|fein|grob|dünn|gehackte?|gerieben(e[rs]?)?|geschält|gewürfelt|geschnitten|trocken|vorgegart|gegart|aufgetaut|prise)(?!\p{L})/gu;

const fold = (s: string) => s.toLowerCase().replace(/ß/g, "ss");

/** Ein einzelner Zutatenname → Vergleichsschlüssel. "" wenn nur Beiwerk ("gerieben"). */
export function canonical(raw: string): string {
  const base = fold(raw)
    .replace(/\(.*?\)/g, " ")
    .replace(/^\s*\d+([.,]\d+)?\s*((kg|g|ml|l|el|tl|stück)(?!\p{L}))?/u, " ")
    .replace(/\s[\d½¼¾].*$/, " ")
    .replace(/\s(zum|ohne)\s.*$/, " ")
    .replace(DESCRIPTORS, " ")
    .replace(/\s+/g, " ")
    .trim();
  if (!base) return "";
  for (const [re, key] of SYNONYMS) {
    const m = base.match(re);
    if (m) return key.replace("$1", m[1] ?? "").replace(/^(hühnchen|hühner)/, "hähnchen");
  }
  return base;
}

/** Name ohne Menge, so wie er angezeigt wird. */
const label = (i: Ingredient) =>
  (typeof i === "string" ? i : i.name).replace(/\s[\d½¼¾].*$/, "").trim();

type Part = { label: string; key: string };
/** "A oder B" → einer reicht. "A & B" → beide nötig. */
function parse(name: string): Part[][] {
  return name
    .replace(/\(.*?\)/g, " ")
    .split(/\s+oder\s+|\//)
    .map((alt) =>
      alt
        .split(/\s*[&+,]\s*|\s+und\s+/)
        .map((p) => ({ label: p.trim(), key: canonical(p) }))
        .filter((p) => p.key)
    )
    .filter((alt) => alt.length);
}

// Immer als vorhanden angenommen, wenn "Grundvorrat" aktiv ist.
const PANTRY = new Set(["salz", "pfeffer", "öl", "zucker", "sojasauce", "essig", "stärke", "mehl", "reis", "sesam", "brühe"]);
const ALWAYS = new Set(["wasser"]);

/** Oberbegriffe für die Suche ("Fisch" findet Lachs). */
export const GROUPS: Record<string, string[]> = {
  fisch: ["lachs", "kabeljau", "seelachs", "wolfsbarsch", "forelle", "saibling", "goldbrasse", "zander"],
  fleisch: ["hähnchen", "pute", "schweinefleisch", "rindfleisch"],
  hack: ["hähnchenhack", "putenhack", "schweinehack", "rinderhack"],
  pilze: ["champignons", "shiitake", "enoki", "austernpilze", "kräuterseitlinge"],
  kohl: ["weisskohl", "chinakohl", "wirsing", "spitzkohl", "rotkohl"],
  käse: ["gouda", "parmesan", "mozzarella", "cheddar", "feta", "emmentaler", "bergkäse"],
  nudeln: ["udon", "udon-nudeln", "weizennudeln", "soba", "somen", "reisnudeln", "glasnudeln", "eiernudeln", "spaghetti", "penne", "pasta"],
};

/** Enger als GROUPS: nur was in der Küche wirklich füreinander einspringen kann. */
const SUBSTITUTES: string[][] = [
  GROUPS.fisch,
  GROUPS.hack,
  GROUPS.pilze,
  GROUPS.kohl,
  ["spinat", "pak choi", "mangold"],
  ["karotte", "pastinake", "petersilienwurzel"],
  ["kürbis", "süsskartoffel"],
  ["udon", "udon-nudeln", "weizennudeln", "soba", "somen"],
  ["spaghetti", "penne", "pasta"],
  ["hähnchen", "pute"],
];

/** Deckt ein Begriff aus dem Kühlschrank die Rezeptzutat ab? */
function covers(have: string, need: string): boolean {
  if (have === need || GROUPS[have]?.includes(need)) return true;
  // Rezept nennt nur den Oberbegriff ("Fisch", "Pilze").
  if (GROUPS[need]?.includes(have)) return true;
  // einfacher Plural
  return have === need + "n" || need === have + "n" || have === need + "e" || need === have + "e";
}

export type Match<T> = {
  recipe: T;
  have: string[];
  missing: string[];
  /** Fehlende Zutaten, für die etwas Vorhandenes einspringen kann. */
  substitutes: { missing: string; use: string }[];
  /** Fehlend und nicht ersetzbar. */
  open: string[];
};

function swapPairs(swaps?: string): [string, string][] {
  if (!swaps?.includes("↔")) return [];
  const side = (s: string) => s.split(/\/|\s+oder\s+/).map(canonical).filter(Boolean);
  return swaps.split(/[,;·]/).flatMap((pair) => {
    const [a, b, more] = pair.split("↔");
    if (b === undefined || more !== undefined) return [];
    return side(a).flatMap((x) => side(b).map((y): [string, string] => [x, y]));
  });
}

export function matchRecipes<T extends Matchable>(recipes: T[], fridge: string[], usePantry = true): Match<T>[] {
  const mine = fridge.map((f) => ({ raw: f.trim(), key: canonical(f) })).filter((f) => f.key);
  if (!mine.length) return [];
  const out: Match<T>[] = [];
  const seen = new Set<string>();
  const got = (key: string) => mine.find((m) => covers(m.key, key));
  const fine = (p: Part) => ALWAYS.has(p.key) || (usePantry && PANTRY.has(p.key)) || !!got(p.key);

  for (const recipe of recipes) {
    if (seen.has(recipe.title)) continue;
    const have: string[] = [];
    const missing: Part[] = [];
    const used = new Set<string>();
    for (const ing of recipe.ingredients ?? []) {
      const name = label(ing);
      const alts = parse(name);
      if (!alts.length) continue;
      const ok = alts.find((alt) => alt.every(fine));
      const hits = (ok ?? alts[0]).filter((p) => got(p.key));
      hits.forEach((p) => used.add(got(p.key)!.key));
      if (ok) {
        if (hits.length) have.push(name);
      } else {
        have.push(...hits.map((p) => p.label));
        missing.push(...alts[0].filter((p) => !fine(p)));
      }
    }

    const pairs = swapPairs(recipe.swaps);
    const substitutes: Match<T>["substitutes"] = [];
    const open: string[] = [];
    let fromSwap = false;
    for (const m of missing) {
      // Was im Rezept schon verbraucht ist, springt nicht zusätzlich ein.
      const free = mine.filter((f) => !used.has(f.key));
      const bySwap = free.find((f) => pairs.some(([a, b]) => (a === m.key && covers(f.key, b)) || (b === m.key && covers(f.key, a))));
      const sub = bySwap ?? free.find((f) => SUBSTITUTES.some((g) => g.includes(m.key) && g.includes(f.key)));
      if (sub) {
        used.add(sub.key);
        substitutes.push({ missing: m.label, use: sub.raw });
        fromSwap ||= !!bySwap;
      } else open.push(m.label);
    }
    // Ohne direkten Treffer nur zeigen, wenn das Rezept den Austausch selbst nennt.
    if (!have.length && !fromSwap) continue;
    seen.add(recipe.title);
    out.push({ recipe, have, missing: missing.map((m) => m.label), substitutes, open });
  }

  // Wenig offen zuerst, dann möglichst viel aus dem Kühlschrank verwertet.
  return out.sort(
    (a, b) => a.open.length - b.open.length || b.have.length - a.have.length || a.missing.length - b.missing.length
  );
}

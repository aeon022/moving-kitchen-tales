// Einkaufsliste aus Vorrats-Rezepten, gruppiert nach Geschäft. Test: scripts/test-shopping.mjs.
// ponytail: Geschäfts-Zuordnung per Stichwort (Erfahrungswert, kein Sortimentsabgleich).

export type ShopLine = { name: string; qty: number; unit: string };
export const STORES = ["Lidl / Hofer", "Interspar / Spar", "Asia-Shop"] as const;
export type Store = (typeof STORES)[number];

// Saucen und Gewürze sind im Haus; Brühe und Dashi werden selbst gekocht.
const AT_HOME = /^wasser|sauce|salz$|zucker|sesam|öl$|miso|doenjang|dashi|backpulver|brühe/i;

const ASIA = /miyeok|wakame|lotoswurzel|daikon|rote datteln|klebreismehl|adzuki|shiitake/i;
const SPAR = /karkassen|rippchen|rollgerste|sushi|hirse|^datteln/i;

const ALIASES: [RegExp, string][] = [
  [/^eier?$/i, "Eier"],
  [/miyeok|wakame/i, "Miyeok-Algen getrocknet"],
  [/^rindfleisch/i, "Rindfleisch mager"],
  [/sushi/i, "Sushi-Reis"],
  [/^reis \(/i, "Reis"],
  [/^(rote datteln).*/i, "Rote Datteln"],
  [/^(goldhirse|hirse)$/i, "Hirse"],
];

function cleanName(raw: string): string {
  for (const [re, name] of ALIASES) if (re.test(raw)) return name;
  return raw.replace(/\(.*?\)/g, "").replace(/,.*$/, "").replace(/\s(ohne Haut|entkernt|entsteint)\b/g, (m) => (/entsteint/.test(m) ? " entsteint" : "")).trim();
}

export function storeOf(name: string): Store {
  return ASIA.test(name) ? "Asia-Shop" : SPAR.test(name) ? "Interspar / Spar" : "Lidl / Hofer";
}

export function shoppingList(recipes: { ingredients: string[]; factor?: number }[]): Record<Store, ShopLine[]> {
  const total = new Map<string, ShopLine>();
  for (const { ingredients, factor = 1 } of recipes) {
    for (const line of ingredients) {
      const m = line.match(/^(.*?)\s(\d+(?:[.,]\d+)?)\s*(kg|g|ml|l|Stück|Zehen?|EL|TL)(?![a-zäöü])/);
      let name = cleanName(m ? m[1] : line);
      if (AT_HOME.test(name)) continue;
      let qty = m ? Number(m[2].replace(",", ".")) * factor : 0;
      let unit = m ? m[3] : "";
      if (unit === "kg") { qty *= 1000; unit = "g"; }
      if (unit === "l") { qty *= 1000; unit = "ml"; }
      if (unit === "Zehe") unit = "Zehen";
      name = name.replace(/^Frühlingszwiebel.*/, "Frühlingszwiebel");
      const key = `${name.toLowerCase()}|${unit}`;
      const old = total.get(key);
      if (old) old.qty += qty;
      else total.set(key, { name, qty, unit });
    }
  }
  const out = Object.fromEntries(STORES.map((s) => [s, [] as ShopLine[]])) as Record<Store, ShopLine[]>;
  for (const l of total.values()) out[storeOf(l.name)].push(l);
  for (const s of STORES) out[s].sort((a, b) => a.name.localeCompare(b.name, "de"));
  return out;
}

export const formatLine = (l: ShopLine) =>
  l.qty ? `${l.name}: ${String(Math.ceil(l.qty * 10) / 10).replace(".", ",")} ${l.unit}` : l.name;

/** Eine Zeile je Artikel – in Apple Erinnerungen eingefügt wird daraus je ein Eintrag. */
export const reminderText = (lines: string[]) => lines.join("\n");

const quote = (s: string) => `'${s.replace(/'/g, `'\\''`)}'`;

/** Fürs Terminal: taskctl legt die Einträge direkt in Apple Erinnerungen an. */
export const taskctlCommands = (lines: string[], list = "Einkäufe") =>
  lines.map((l) => `taskctl add ${quote(l)} --list ${quote(list)}`).join("\n");

// Sortiert Rezepte der Sammlung nach Hauptzutat, Herkunft und Art. Abgeleitet aus Titel und
// Zutaten, deshalb gut, aber nicht unfehlbar. Test: scripts/test-planer.mjs.
import { motifFor } from "./dishMotif.ts";
import type { Origin } from "../plans/vorrat/types";

export type Main = "haehnchen" | "pute" | "ente" | "schwein" | "rind" | "lamm" | "fisch" | "meeresfruechte" | "tofu" | "ei" | "gemuese" | "getreide";
export type Form = "suppe" | "brei" | "reis" | "nudeln" | "pfanne" | "schmor" | "teig" | "salat" | "sonstiges";

// Brühen, Saucen und Pasten machen ein Gericht nicht zum Fleisch- oder Fischgericht.
const SEASONING = /brühe|dashi|sauce|soße|paste|fond|schmalz|katsuobushi|bonito/i;
const MEAT: [Main, RegExp][] = [
  ["pute", /pute/i], ["ente", /\benten?(brust|keule|fleisch)?\b/i], ["lamm", /lamm/i],
  ["haehnchen", /hähnchen|huhn|hühn|chicken|poulet/i],
  ["schwein", /schwein|bauchfleisch|speck|schinken|wurst|rippchen/i],
  ["rind", /(?<!zimt|parmesan)rind(?!e\b)|beef|tafelspitz/i],
  ["fisch", /fisch|lachs|kabeljau|forelle|dorsch|pollack|makrele|barsch|zander|saibling|brasse|sardine/i],
  ["meeresfruechte", /garnele|shrimp|muschel|jakobs|tintenfisch|meeresfrüchte|surimi/i],
];
const VEGETABLE = /kürbis|karotte|möhre|spinat|kohl|pak ?choi|pilz|shiitake|champignon|zucchini|aubergine|brokkoli|tomate|gurke|rettich|daikon|lauch|paprika|bohnen|lotos|sellerie|kartoffel|mais|spargel|gemüse/i;

const grams = (s: string) => Number(s.match(/(\d+)\s*(g|ml)\b/)?.[1] ?? 0);

export function mainOf(ingredients: string[]): Main {
  // Das schwerste Stück Fleisch oder Fisch entscheidet.
  let best: Main | undefined, most = -1;
  for (const i of ingredients) {
    if (SEASONING.test(i)) continue;
    const hit = MEAT.find(([, re]) => re.test(i));
    if (hit && grams(i) > most) [best, most] = [hit[0], grams(i)];
  }
  if (best) return best;
  const all = ingredients.filter((i) => !SEASONING.test(i)).join(" | ");
  if (/tofu|tempeh|seitan/i.test(all)) return "tofu";
  if (/(^|\| )(eier?|eigelb)\b/i.test(all)) return "ei";
  return ingredients.some((i) => !SEASONING.test(i) && VEGETABLE.test(i) && grams(i) >= 100) ? "gemuese" : "getreide";
}

const ORIGINS: [Origin, RegExp][] = [
  ["korea", /\p{Script=Hangul}|korea|doenjang|gochujang|bulgogi|galbi|kimchi|jjigae/iu],
  ["japan", /[\p{Script=Hiragana}\p{Script=Katakana}]|japan|miso|dashi|teriyaki|udon|soba(?!uce)|ramen|okayu|onigiri|donburi|oyakodon|tamago|\bjiru\b|nikujaga|gyoza|丼|豚汁|玄米|味噌|鮭/iu],
  ["suedostasien", /thai|vietnam|singapur|indones|malays|nasi goreng|\bpho\b|satay|laksa/i],
  ["indien", /indisch|masala|tandoori|butter chicken|\bdal\b|biryani/i],
  ["orient", /oriental|libanes|türk|persisch|marokkan|shakshuka|hummus|köfte|harissa/i],
  ["mittelmeer", /italien|griech|kroat|spanisch|mediterran|risotto|pasta|spaghetti|gnocchi|frittata|fritaja|[cć]evap|minestrone|paella/i],
  ["china", /\p{Script=Han}|china|chinesisch|sichuan|kanton|shanghai|congee|mapo|jiaozi|wonton/iu],
];

export const originOf = (title: string): Origin => ORIGINS.find(([, re]) => re.test(title))?.[0] ?? "heimisch";

const FORM: Record<string, Form> = {
  congee: "brei", porridge: "brei", clearSoup: "suppe", noodleSoup: "suppe", friedNoodles: "nudeln",
  rice: "reis", friedRice: "reis", donburi: "reis", onigiri: "reis", stew: "schmor", braised: "schmor",
  wok: "pfanne", dumplings: "teig", bao: "teig", pancake: "teig", toast: "teig", salad: "salat",
};

export const formOf = (title: string, ingredients: string[] = []): Form => FORM[motifFor(title, ingredients)] ?? "sonstiges";

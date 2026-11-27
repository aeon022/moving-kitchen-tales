// Chinesische Eingaben für die Kühlschrank-Suche. Gesucht wird immer in den deutschen Zutaten
// (dort sitzt die Logik), Ein- und Ausgabe werden übersetzt. Test: scripts/test-fridge.mjs.

/** Alltagsbegriffe → deutscher Suchbegriff. Fehlt einer, hilft zusätzlich das Wörterbuch aus den Rezepten. */
export const ZH_TERMS: Record<string, string> = {
  鸡蛋: "Eier", 蛋: "Eier", 豆腐: "Tofu", 鸡肉: "Hähnchen", 鸡: "Hähnchen", 鸡腿: "Hähnchen", 鸡胸肉: "Hähnchen", 鸡肉末: "Hähnchenhack",
  猪肉: "Schweinefleisch", 猪肉末: "Schweinehack", 牛肉: "Rindfleisch", 牛肉末: "Rinderhack", 肉末: "Hack", 肉: "Fleisch",
  鱼: "Fisch", 三文鱼: "Lachs", 鲑鱼: "Lachs", 鳕鱼: "Kabeljau", 虾: "Garnelen", 虾仁: "Garnelen",
  胡萝卜: "Karotte", 红萝卜: "Karotte", 白萝卜: "Daikon", 萝卜: "Daikon", 土豆: "Kartoffeln", 马铃薯: "Kartoffeln",
  番茄: "Tomate", 西红柿: "Tomate", 黄瓜: "Gurke", 南瓜: "Kürbis", 红薯: "Süßkartoffel", 地瓜: "Süßkartoffel", 洋葱: "Zwiebel",
  葱: "Frühlingszwiebel", 小葱: "Frühlingszwiebel", 香葱: "Frühlingszwiebel", 大蒜: "Knoblauch", 蒜: "Knoblauch", 姜: "Ingwer", 生姜: "Ingwer",
  菠菜: "Spinat", 小油菜: "Pak Choi", 上海青: "Pak Choi", 青菜: "Pak Choi", 大白菜: "Chinakohl", 白菜: "Chinakohl", 卷心菜: "Weißkohl",
  西兰花: "Brokkoli", 西葫芦: "Zucchini", 茄子: "Aubergine", 蘑菇: "Pilze", 菌菇: "Pilze", 香菇: "Shiitake", 口蘑: "Champignons", 金针菇: "Enoki",
  米: "Reis", 大米: "Reis", 米饭: "Reis (gekocht)", 面条: "Nudeln", 面: "Nudeln", 牛奶: "Milch", 豆浆: "Sojamilch", 酸奶: "Joghurt", 苹果: "Apfel", 梨: "Birne", 香蕉: "Banane",
};

export type Pairable = { de: { ingredients: string[] }; zh: { ingredients: string[] } };

/** Zutatenname ohne Menge und Klammerzusatz. */
export const nameOf = (line: string) => line.replace(/[（(].*?[）)]/g, "").replace(/\s*[\d½¼¾].*$/, "").trim();

/** Wörterbuch aus den übersetzten Rezepten: gleiche Position = gleiche Zutat. */
export function buildDictionary(pairs: Pairable[]) {
  const toDe = new Map<string, string>();
  for (const { de, zh } of pairs) {
    if (de.ingredients.length !== zh.ingredients.length) continue;
    zh.ingredients.forEach((line, i) => {
      const z = nameOf(line);
      const d = de.ingredients[i].replace(/\s[\d½¼¾].*$/, "").trim();
      // Der kürzeste deutsche Name ist der allgemeinste.
      if (z && d && (!toDe.has(z) || d.length < toDe.get(z)!.length)) toDe.set(z, d);
    });
  }
  return toDe;
}

/** Eingabe → deutscher Suchbegriff; null, wenn ein chinesisches Wort unbekannt ist. */
export function toGerman(input: string, dict: Map<string, string>): string | null {
  const word = input.trim();
  if (!/\p{Script=Han}/u.test(word)) return word;
  return ZH_TERMS[word] ?? dict.get(word) ?? null;
}

/** Deutscher Zutatenname eines Rezepts → chinesischer Name an derselben Position. */
export function zhName(label: string, recipe: Pairable): string {
  const i = recipe.de.ingredients.findIndex((line) => line.startsWith(label));
  const j = i >= 0 ? i : recipe.de.ingredients.findIndex((line) => line.includes(label));
  return j >= 0 && recipe.zh.ingredients[j] ? nameOf(recipe.zh.ingredients[j]) : label;
}

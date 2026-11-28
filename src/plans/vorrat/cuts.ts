import type { Group } from "./types";

/** piece = Gramm je Stück, wenn man die Rohware auch in Stück zählt. */
export type Cut = { id: string; group: Group; de: string; zh: string; piece?: number };

export const CUTS: Cut[] = [
  { id: "lamm-kotelett", group: "lamm", de: "Lammkoteletts", zh: "羊排", piece: 80 },
  { id: "lamm-schulter", group: "lamm", de: "Lammschulter / Gulasch", zh: "羊肩肉" },
  { id: "lamm-keule", group: "lamm", de: "Lammkeule", zh: "羊腿肉" },
  { id: "lamm-hack", group: "lamm", de: "Lammhack", zh: "羊肉末" },
  { id: "pute-brust", group: "pute", de: "Putenbrust", zh: "火鸡胸肉" },
  { id: "pute-hack", group: "pute", de: "Putenhack", zh: "火鸡肉末" },
  { id: "huhn-brust", group: "haehnchen", de: "Hähnchenbrust", zh: "鸡胸肉", piece: 200 },
  { id: "huhn-schenkel", group: "haehnchen", de: "Hähnchenschenkel", zh: "鸡腿", piece: 250 },
  { id: "huhn-fluegel", group: "haehnchen", de: "Hähnchenflügel", zh: "鸡翅", piece: 80 },
  { id: "huhn-hack", group: "haehnchen", de: "Hähnchenhack", zh: "鸡肉末" },
  { id: "huhn-ganz", group: "haehnchen", de: "Ganzes Huhn", zh: "整鸡", piece: 1400 },
  { id: "ente-brust", group: "ente", de: "Entenbrust / Entenkeule", zh: "鸭胸 / 鸭腿", piece: 300 },
  { id: "schwein-filet", group: "schwein", de: "Schweinefilet / Schnitzel", zh: "猪里脊" },
  { id: "schwein-schulter", group: "schwein", de: "Schweineschulter / Nacken", zh: "猪肩肉 / 梅花肉" },
  { id: "schwein-bauch", group: "schwein", de: "Schweinebauch", zh: "五花肉" },
  { id: "schwein-rippen", group: "schwein", de: "Rippchen", zh: "排骨" },
  { id: "schwein-kotelett", group: "schwein", de: "Schweinekoteletts", zh: "猪排", piece: 180 },
  { id: "schwein-hack", group: "schwein", de: "Schweinehack / gemischt", zh: "猪肉末" },
  { id: "rind-schmor", group: "rind", de: "Rind zum Schmoren", zh: "牛腩 / 炖煮牛肉" },
  { id: "rind-kurz", group: "rind", de: "Rind zum Kurzbraten", zh: "牛里脊（快炒）" },
  { id: "rind-hack", group: "rind", de: "Rinderhack", zh: "牛肉末" },
  { id: "rind-knochen", group: "rind", de: "Rinderknochen / Beinscheibe", zh: "牛骨 / 带骨牛腱" },
  { id: "lachs", group: "fisch", de: "Lachs / Forelle", zh: "三文鱼 / 鳟鱼", piece: 150 },
  { id: "weissfisch", group: "fisch", de: "Weißer Fisch", zh: "白身鱼", piece: 150 },
  { id: "garnelen", group: "fisch", de: "Garnelen", zh: "虾" },
  { id: "tofu", group: "pflanzlich", de: "Tofu (fest)", zh: "老豆腐", piece: 400 },
  { id: "kuerbis", group: "pflanzlich", de: "Kürbis", zh: "南瓜" },
  { id: "pilze", group: "pflanzlich", de: "Pilze", zh: "蘑菇" },
  { id: "kohl", group: "pflanzlich", de: "Chinakohl / Kohl", zh: "大白菜 / 卷心菜" },
  { id: "wurzel", group: "pflanzlich", de: "Karotten, Rettich & Wurzeln", zh: "胡萝卜、萝卜等根菜" },
];

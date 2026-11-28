import type { Art, Group, Origin } from "./types";

type Pair = [string, string];
export const GROUPS: Record<Group, Pair> = {
  lamm: ["Lamm", "羊肉"], pute: ["Pute", "火鸡"], haehnchen: ["Hähnchen", "鸡肉"], ente: ["Ente", "鸭肉"],
  schwein: ["Schwein", "猪肉"], rind: ["Rind", "牛肉"], fisch: ["Fisch & Garnelen", "鱼虾"], pflanzlich: ["Tofu & Gemüse", "豆腐和蔬菜"],
};
export const ORIGIN_NAMES: Record<Origin, Pair> = {
  china: ["China", "中国"], japan: ["Japan", "日本"], korea: ["Korea", "韩国"], suedostasien: ["Südostasien", "东南亚"],
  indien: ["Indien", "印度"], orient: ["Orient", "中东"], mittelmeer: ["Mittelmeer", "地中海"], heimisch: ["Heimisch & Europa", "欧洲家常"],
};
export const ARTS: Record<Art, Pair> = {
  marinade: ["Roh mariniert", "生腌冷冻"], gegart: ["Fertig gegart", "做熟冷冻"], basis: ["Basis", "半成品"],
};

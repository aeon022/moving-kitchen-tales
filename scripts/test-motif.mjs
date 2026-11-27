// node --experimental-strip-types scripts/test-motif.mjs
import assert from "node:assert/strict";
import { motifFor } from "../src/utils/dishMotif.ts";

const cases = {
  rice: ["Takikomi Gohan mit Huhn (炊き込みご飯)", "鲑鱼炊饭", "Lachs-Ochazuke 茶漬け"],
  congee: ["Reisbrei mit Lachs & Spinat", "香菇嫩豆腐粥", "Juk Reisbrei mit Hähnchen (닭죽)"],
  clearSoup: ["Tomaten-Ei-Suppe (西红柿鸡蛋汤)", "清炖鱼汤"],
  stew: ["Tofu-Pilz-Tontopf (砂鍋豆腐)", "Claypot-Reis mit Hähnchen (煲仔饭)", "Doenjang-Jjigae mild"],
  noodleSoup: ["Nudelsuppe mit Huhn", "清汤面", "Udon mit Lachs & Spinat 鮭うどん"],
  friedNoodles: ["Gebratene Nudeln mit Garnelen (蝦仁炒麵)", "Yaki Udon – Gemüse & Huhn", "Japchae mit Garnelen"],
  friedRice: ["Gebratener Reis mit Ei (蛋炒飯)", "虾仁炒饭"],
  donburi: ["亲子丼", "菠菜蛋花盖饭", "Mildes Bibimbap (비빔밥)"],
  onigiri: ["三文鱼饭团 & 味噌汤", "Onigiri mit Lachs"],
  dumplings: ["早餐小馄饨", "韩式鸡肉饺子汤", "Gedämpfte Jiaozi mit Hähnchen"],
  bao: ["香菇菜肉包", "Gedämpfte Reisküchlein mit Datteln"],
  pancake: ["Frühlingszwiebel-Eierpfannkuchen (葱花鸡蛋饼)", "Kürbis-Lauch-Pfannkuchen (호박전)"],
  egg: ["Tamagoyaki & Miso-Suppe", "番茄炒蛋配豆腐"],
  tofu: ["Mildes Mapo-Tofu (麻婆豆腐)"],
  fish: ["清蒸鳕鱼 & 米饭", "Gedämpfter Kabeljau & Reisschale"],
  shrimp: ["Gebratene Garnelen mit Lychee", "虾仁蒸蛋"],
  chicken: ["Hainan Chicken Rice 海南鸡饭", "板栗烧鸡"],
  braised: ["Geschmortes Rind mit Maroni", "姜烧猪肉配上海青"],
  wok: ["鱼香茄子（不辣）配米饭"],
  salad: ["Kalter Sesam-Nudelsalat (麻酱凉面)"],
  squash: ["Süßkartoffel-Reis (さつまいも)"],
  porridge: ["番薯燕麦粥", "Haferbrei mit Birne und Zimt"],
  drink: ["咸豆浆（鹹豆漿）"],
  toast: ["HK French Toast 西多士"],
  bowl: ["Überraschung"],
};
for (const [motif, titles] of Object.entries(cases))
  for (const t of titles) assert.equal(motifFor(t), motif, t);
assert.equal(motifFor("Überraschung", ["Reis (roh) 100 g", "Garnelen 180 g"]), "shrimp");
assert.equal(motifFor("Überraschung", ["Reis (roh) 100 g"]), "rice");
console.log("motifFor ok");

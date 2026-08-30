/*
  Moving Kitchen Tales – Woche 14 (Start: 2026-03-30)
  Fokus: Virale Airfryer-Hacks, Originaltitel (CN/JP/KR), Reiskocher-Magie, EU Crossover.
  Inhalt: Balanced, Schwangerschaftssicher (alles komplett durchgegart), Diabetesfreundlich.
*/

import React from "react";
import PlanTemplate from "../PlanTemplate";

export const meta = {
  title: "Woche 14",
  startDate: "2026-03-30",
  id: "woche-14-2026-03-30",
  lang: "de",
  sidebar: "Woche 14 (2026-03-30)",
};

const DAY_NAME_DE = {
  mo: "Montag (2026-03-30)",
  di: "Dienstag (2026-03-31)",
  mi: "Mittwoch (2026-04-01)",
  do: "Donnerstag (2026-04-02)",
  fr: "Freitag (2026-04-03)",
  sa: "Samstag (2026-04-04)",
  so: "Sonntag (2026-04-05)",
};

const UI_TITLES = {
  main: "Rezepte Woche 14",
  list: "Einkaufsliste Woche 14",
};

export const DATA = [
  // MONTAG
  {
    id: "mo-f",
    title: "Viral Egg Envelope Toast 접는 토스트",
    isViral: true,
    desc: "Ein clever gefaltetes Omelett im Toast, knusprig aus dem Airfryer oder der Pfanne.",
    story: "Koreanisches Streetfood trifft TikTok-Hack! Das Brot wird direkt in die Eimasse gelegt und dann wie ein Umschlag zugeklappt. Alles in einem Rutsch, genial einfach und sicher durchgegart.",
    target: "≈65 g KH (2 P.) · Protein ≈20 g p. P.",
    ingredients: [
      "Vollkorn-Toast 4 Scheiben",
      "Eier 4 Stück",
      "Käse (Gouda, pasteurisiert) 40 g",
      "Schinken (optional) 2 Scheiben",
      "Salz & Pfeffer"
    ],
    steps: [
      "Eier verquirlen, in eine geölte heiße Pfanne geben.",
      "Sofort zwei Toastscheiben nebeneinander in das flüssige Ei legen, dann wenden, sodass die Ei-Seite nach oben zeigt.",
      "Käse und Schinken auflegen. Die überstehenden Ei-Ränder nach innen über das Brot klappen.",
      "Das Ganze zusammenklappen und braten, bis das Ei im Inneren KOMPLETT gestockt ist."
    ],
    checks: "Balanced ✓ · Schwangerschaft ✓ (Ei komplett durchgebraten!) · Diabetes ✓",
    swaps: "Schinken ↔ Tomatenscheiben",
    side: "Ein Glas warme Milch.",
    remind: true,
    riceCooker: { enabled: false },
  },
  {
    id: "mo-m",
    title: "Airfryer Sweet & Sour Tofu 糖醋豆腐",
    desc: "Knusprige Tofuwürfel aus dem Airfryer in pikanter süß-saurer Sauce.",
    story: "Wir lieben die knusprige Textur von Tofu! Im Airfryer gelingt er fettarm und saugt sich danach mit der asiatischen Tomaten-Essig-Sauce wunderbar voll.",
    target: "≈80 g KH (2 P.) · Protein ≈20 g p. P.",
    ingredients: [
      "Fester Tofu (abgetropft & gewürfelt) 300 g",
      "Maisstärke 2 EL",
      "Ketchup 2 EL",
      "Reisessig 1 EL",
      "Agavendicksaft 1 TL",
      "Paprika (gewürfelt) 100 g",
      "Reis (gekocht) 150 g"
    ],
    steps: [
      "Tofuwürfel in Maisstärke wenden und im Airfryer bei 200°C 15 Min knusprig backen.",
      "Paprika im Wok kurz anbraten. Ketchup, Essig, Agave und 3 EL Wasser aufkochen.",
      "Den knusprigen Tofu in die Sauce geben und 1 Minute schwenken.",
      "Mit Reis servieren."
    ],
    checks: "Balanced ✓ · Schwangerschaft ✓ · Diabetes ✓",
    swaps: "Tofu ↔ Hähnchenbrust-Würfel",
    side: "-",
    remind: false,
    riceCooker: { enabled: false },
  },
  {
    id: "mo-a",
    title: "Reiskocher Teriyaki Chicken 照り焼きチキン",
    desc: "Saftiges Hähnchen, im Reiskocher direkt über dem Reis gedämpft.",
    story: "Der ultimative One-Pot-Hit Japans. Das Hühnchen gart über dem Reis und tropft seine Umami-Säfte direkt in die Reiskörner. Null Aufwand, hundert Prozent Geschmack.",
    target: "≈82 g KH (2 P.) · Protein ≈32 g p. P.",
    ingredients: [
      "Reis (roh) 120 g",
      "Hähnchenkeule (o. Knochen) 250 g",
      "Teriyaki-Sauce (mild) 3 EL",
      "Hühnerbrühe 240 ml",
      "Frühlingszwiebel 10 g",
      "Pak Choi 150 g"
    ],
    steps: [
      "Hähnchen kräftig in der Teriyaki-Sauce wenden.",
      "Reis und Brühe in den Reiskocher füllen.",
      "Das marinierte Fleisch oben auflegen. Start drücken.",
      "In den letzten 5 Minuten Pak Choi in den Dämpfaufsatz legen. Nach dem Kochen Hähnchen zerteilen."
    ],
    checks: "Balanced ✓ · Schwangerschaft ✓ (Huhn wird im Dampf >80°C komplett durchgegart)",
    swaps: "Hähnchenkeule ↔ Schweinefilet",
    side: "Pak Choi mit Sesamöl.",
    remind: true,
    riceCooker: { enabled: true, program: "Mixed / White Rice", water: "Brühe (Standard)", notes: "Fleisch nicht in den Reis einrühren vor dem Kochen." },
  },

  // DIENSTAG
  {
    id: "di-f",
    title: "Reispapier-Ei-Päckchen Bánh Tráng Nướng",
    isViral: true,
    desc: "Vietnamesisches Streetfood aus dem Airfryer. Reispapier, Ei und Frühlingszwiebeln knusprig gebacken.",
    story: "Auf den Straßen Vietnams wird dieses 'Pizza'-Päckchen auf dem Grill gemacht. Im Airfryer plustert sich das Reispapier herrlich auf und das Ei stockt rasend schnell. Ein genialer Trend!",
    target: "≈65 g KH (2 P.) · Protein ≈18 g p. P.",
    ingredients: [
      "Reispapier 4 Blatt",
      "Eier 2 Stück",
      "Frühlingszwiebeln 20 g",
      "Sriracha-Mayo (pasteurisiert) 1 EL",
      "Vollkorn-Toast (als Beilage) 2 Scheiben"
    ],
    steps: [
      "Ein Reispapier in den Airfryer legen. Ein halbes, verquirltes Ei mit Frühlingszwiebeln darauf verstreichen.",
      "Bei 180°C ca. 4-5 Minuten backen, bis das Ei vollkommen fest und der Rand knusprig ist.",
      "Zusammenklappen, mit Mayo toppen. Toast dazu."
    ],
    checks: "Balanced ✓ · Schwangerschaft ✓ (Ei komplett durch, Mayo aus Tube)",
    swaps: "Reispapier ↔ Vollkorn-Wrap",
    side: "Eine große Tasse Tee.",
    remind: true,
    riceCooker: { enabled: false },
  },
  {
    id: "di-m",
    title: "Yaki Udon mit Schwein 焼きうどん",
    desc: "Dicke, softe Udon-Nudeln, angebraten mit Schweinefleisch und knackigem Kohl.",
    story: "Der Liebling der japanischen Festivals. Die Nudeln sind wunderbar kaufreudig (chewy) und die Sojasauce karamellisiert leicht in der heißen Pfanne.",
    target: "≈85 g KH (2 P.) · Protein ≈24 g p. P.",
    ingredients: [
      "Udon-Nudeln (vorgegart) 400 g",
      "Schweinegeschnetzeltes 150 g",
      "Weißkohl (geschnitten) 150 g",
      "Sojasauce 2 EL",
      "Austernsauce 1 EL",
      "Knoblauch 1 Zehe"
    ],
    steps: [
      "Udon-Nudeln kurz mit heißem Wasser übergießen, um sie zu lösen.",
      "Schweinefleisch und Knoblauch im Wok anbraten (komplett durchgaren!).",
      "Kohl dazugeben, kurz anbraten. Nudeln und Saucen unterheben.",
      "2 Minuten pfannenrühren, bis alles heiß ist."
    ],
    checks: "Balanced ✓ · Schwangerschaft ✓ (Schweinefleisch gut durchbraten) · Diabetes ✓",
    swaps: "Schwein ↔ Hähnchen",
    side: "-",
    remind: false,
    riceCooker: { enabled: false },
  },
  {
    id: "di-a",
    title: "Lachs & Spinat Takikomi Gohan 鮭とほうれん草のご飯",
    desc: "Reiskocher-Mixreis mit Lachs und viel frischem Spinat.",
    story: "Ein extrem gesundes, leichtes Abendessen. Der Lachs und die Dashi-Brühe sorgen für Umami, der Spinat bringt Eisen und Farbe.",
    target: "≈80 g KH (2 P.) · Protein ≈28 g p. P.",
    ingredients: [
      "Reis (roh) 120 g",
      "Lachsfilet 200 g",
      "Spinat (frisch) 100 g",
      "Sojasauce 1 EL",
      "Mirin 1 EL",
      "Dashi oder Brühe 240 ml"
    ],
    steps: [
      "Reis, Dashi, Sojasauce und Mirin in den Reiskocher.",
      "Lachs im Ganzen darauflegen. Start drücken.",
      "Nach dem Kochen den Lachs mit einem Löffel zerteilen.",
      "Den frischen Spinat sofort unter den kochend heißen Reis heben (er fällt durch die Restwärme zusammen)."
    ],
    checks: "Balanced ✓ · Schwangerschaft ✓ (Lachs gart sicher durch)",
    swaps: "Lachs ↔ Weißfisch",
    side: "Ein paar Tropfen Zitronensaft.",
    remind: true,
    riceCooker: { enabled: true, program: "Mixed / White Rice", water: "Brühe (Standard)", notes: "Spinat erst am Schluss unterheben." },
  },

  // MITTWOCH
  {
    id: "mi-f",
    title: "Matcha Baked Oats 抹茶ベイクドオーツ",
    isViral: true,
    desc: "Wie ein kleiner Kuchen zum Frühstück. Haferflocken, Banane und Matcha aus dem Airfryer.",
    story: "Dieser Food-Trend verwandelt langweilige Haferflocken in ofenwarmes Gebäck. Die leichte Herbe des Matcha-Tees harmoniert perfekt mit der Süße der Banane.",
    target: "≈70 g KH (2 P.) · Protein ≈16 g p. P.",
    ingredients: [
      "Haferflocken 100 g",
      "Banane (sehr reif) 1 Stück",
      "Milch 150 ml",
      "Matcha-Pulver 1 TL",
      "Backpulver 1 TL",
      "Quark (Magerstufe) 2 EL"
    ],
    steps: [
      "Haferflocken, zerdrückte Banane, Milch, Matcha und Backpulver gut verrühren.",
      "In eine kleine, ofenfeste (bzw. airfryer-geeignete) Form füllen.",
      "Im Airfryer bei 170°C für ca. 12-15 Minuten backen, bis es wie ein Muffin aufgeht.",
      "Mit einem Klecks Quark servieren."
    ],
    checks: "Balanced ✓ · Diabetes ✓ (Komplexe KH) · Schwangerschaft ✓",
    swaps: "Matcha ↔ Backkakao",
    side: "Tee.",
    remind: true,
    riceCooker: { enabled: false },
  },
  {
    id: "mi-m",
    title: "Japchae (Koreanische Glasnudeln) 잡채",
    desc: "Süßkartoffel-Glasnudeln mit Spinat, Karotten und Rindfleisch.",
    story: "Ein Festtagsgericht in Korea. Die Süßkartoffel-Nudeln haben einen genialen Biss. Normalerweise wird jede Zutat einzeln gebraten – wir machen es uns im Wok leichter.",
    target: "≈85 g KH (2 P.) · Protein ≈20 g p. P.",
    ingredients: [
      "Süßkartoffel-Glasnudeln (Dangmyeon) 120 g",
      "Rindfleisch (Streifen) 100 g",
      "Spinat 100 g",
      "Karotte 50 g",
      "Sojasauce 3 EL",
      "Sesamöl 1 EL",
      "Zucker 1 TL"
    ],
    steps: [
      "Nudeln in kochendem Wasser ca. 6 Min weichkochen, abtropfen, in Stücke schneiden.",
      "Rindfleisch und Karotte im Wok anbraten (gut durchgaren!).",
      "Spinat und Nudeln dazugeben.",
      "Sojasauce, Zucker und Sesamöl einrühren, gut durchschwenken."
    ],
    checks: "Balanced ✓ · Schwangerschaft ✓ (Rind durch) · Diabetes ✓ (Süßkartoffel-Stärke ist verträglich)",
    swaps: "Rind ↔ Pilze (Shiitake)",
    side: "-",
    remind: false,
    riceCooker: { enabled: false },
  },
  {
    id: "mi-a",
    title: "Viral Tomato Pizza Rice 🍅🍕 (Reiskocher)",
    isViral: true,
    desc: "Der legendäre Reiskocher-Hack. Eine ganze Tomate, Schinken und Käse machen den Reis zu 'Pizza'.",
    story: "Asiens verrücktester One-Pot-Hit. Du setzt eine ganze Tomate in den Reis, wirfst Schinken und Kräuter dazu. Am Ende rührst du Käse unter. Es schmeckt ernsthaft wie Pizza-Füllung!",
    target: "≈82 g KH (2 P.) · Protein ≈24 g p. P.",
    ingredients: [
      "Reis (roh) 120 g",
      "Tomate (groß) 1 Stück",
      "Kochschinken (Würfel) 100 g",
      "Gouda oder Mozzarella (pasteurisiert) 50 g",
      "Oregano & Olivenöl 1 EL",
      "Gemüsebrühe 240 ml"
    ],
    steps: [
      "Reis, Brühe, Öl und Kräuter in den Topf. Die Tomate kreuzweise einschneiden und in die Mitte setzen.",
      "Schinken drumherum streuen. Start drücken.",
      "Nach dem Kochen die butterweiche Tomate zerdrücken.",
      "Käse unterrühren, bis er Fäden zieht."
    ],
    checks: "Balanced ✓ · Schwangerschaft ✓ (Käse pasteurisiert, Schinken erhitzt) · Diabetes ✓",
    swaps: "Schinken ↔ Salami (nur wenn mitgekocht wg. Schwangerschaft)",
    side: "Ein grüner Salat.",
    remind: true,
    riceCooker: { enabled: true, program: "White Rice", water: "Brühe (etwas weniger wg. Tomate)", notes: "Tomate am Ende gut vermantschen." },
  },

  // DONNERSTAG
  {
    id: "do-f",
    title: "Miso-Haferbrei mit Ei 味噌オートミール",
    desc: "Herzhafter Haferbrei, verfeinert mit Umami-Miso und einem hartgekochten Ei.",
    story: "Wer Miso-Suppe zum Frühstück liebt, wird dieses Oatmeal vergöttern. Es ist warm, wohlig und extrem schnell gemacht.",
    target: "≈65 g KH (2 P.) · Protein ≈18 g p. P.",
    ingredients: [
      "Haferflocken 100 g",
      "Wasser oder Gemüsebrühe 400 ml",
      "Miso-Paste 1 EL",
      "Eier (hartgekocht) 2 Stück",
      "Frühlingszwiebel 10 g"
    ],
    steps: [
      "Haferflocken in Brühe/Wasser einköcheln.",
      "Vom Herd nehmen! Miso-Paste einrühren (darf nicht mehr kochen, um die Kulturen zu erhalten).",
      "Mit halbierten, hartgekochten Eiern servieren.",
      "Mit Frühlingszwiebel bestreuen."
    ],
    checks: "Balanced ✓ · Schwangerschaft ✓ (Eier hartgekocht)",
    swaps: "Eier ↔ Edamame",
    side: "Tee.",
    remind: true,
    riceCooker: { enabled: false },
  },
  {
    id: "do-m",
    title: "Tomaten-Ei-Pfanne auf Nudeln 番茄炒蛋面",
    desc: "Die berühmte chinesische Tomaten-Ei-Pfanne, serviert über Nudeln statt Reis.",
    story: "Dieses Gericht geht immer. Die Tomaten zerkochen zu einer natürlichen Sauce, das Ei fängt den Geschmack auf. Ein geniales Comfort-Mittagessen.",
    target: "≈85 g KH (2 P.) · Protein ≈20 g p. P.",
    ingredients: [
      "Weizennudeln oder Udon 150 g",
      "Tomaten (sehr reif) 3 Stück",
      "Eier 3 Stück",
      "Ketchup 1 EL",
      "Sojasauce 1 EL",
      "Knoblauch 1 Zehe"
    ],
    steps: [
      "Eier in der Pfanne komplett durchbraten (stocken lassen), herausnehmen.",
      "Tomaten würfeln und mit Knoblauch in der Pfanne weichschmoren, bis Sauce entsteht. Ketchup und Soja dazu.",
      "Eier zurückgeben und zerkleinern. Gekochte Nudeln untermischen."
    ],
    checks: "Balanced ✓ · Schwangerschaft ✓ (Eier komplett gestockt)",
    swaps: "Weizennudeln ↔ Reis",
    side: "-",
    remind: false,
    riceCooker: { enabled: false },
  },
  {
    id: "do-a",
    title: "Kürbis & Hähnchen Reis 南瓜鸡饭 (Reiskocher)",
    desc: "Kürbis und Hähnchenbrust dämpfen zusammen im Reiskocher. Ein süß-herzhafter Traum.",
    story: "Ein Wohlfühlessen aus Südchina. Der Kürbis zerfällt fast und hüllt jedes Reiskorn in ein cremiges, süßliches Gold.",
    target: "≈80 g KH (2 P.) · Protein ≈30 g p. P.",
    ingredients: [
      "Reis (roh) 120 g",
      "Kürbis (z.B. Hokkaido, gewürfelt) 150 g",
      "Hähnchenbrust (gewürfelt) 200 g",
      "Sojasauce 2 EL",
      "Knoblauch 1 Zehe",
      "Hühnerbrühe 240 ml"
    ],
    steps: [
      "Hähnchen kurz mit Sojasauce und Knoblauch vermengen.",
      "Reis waschen, in den Topf geben und Brühe (minimal weniger als normal) hinzufügen.",
      "Hähnchen und Kürbis auf dem Reis verteilen.",
      "Start drücken. Danach alles sorgfältig durchmischen (Kürbis musen)."
    ],
    checks: "Balanced ✓ · Schwangerschaft ✓ (Hähnchen gart im Topf sicher durch) · Diabetes ✓",
    swaps: "Hähnchen ↔ Schweinehack",
    side: "Miso-Suppe.",
    remind: true,
    riceCooker: { enabled: true, program: "Mixed / White Rice", water: "Brühe (etwas weniger als normal)", notes: "Kürbis gibt Wasser ab." },
  },

  // FREITAG
  {
    id: "fr-f",
    title: "Korean Street Toast 길거리 토스트",
    desc: "Sandwich mit Omelett, Kohl und Karotten, leicht gezuckert.",
    story: "Der Duft koreanischer U-Bahn-Stationen. Ein deftiges Omelett zwischen zwei Toastscheiben, oft mit Ketchup und einer Prise Zucker.",
    target: "≈75 g KH (2 P.) · Protein ≈18 g p. P.",
    ingredients: [
      "Vollkorn-Toast 4 Scheiben",
      "Eier 3 Stück",
      "Weißkohl (fein gehobelt) 100 g",
      "Karotte (geraspelt) 30 g",
      "Butter, Ketchup, Prise Zucker"
    ],
    steps: [
      "Ei mit Gemüse verquirlen, als eckiges Omelett braten (komplett durchgaren!).",
      "Brot in Butter toasten.",
      "Omelett aufs Brot, Ketchup & Zucker drauf, zuklappen."
    ],
    checks: "Balanced ✓ · Schwangerschaft ✓ (Ei durch)",
    swaps: "Kohl ↔ Frühlingszwiebeln",
    side: "Kaffee oder Milch.",
    remind: true,
    riceCooker: { enabled: false },
  },
  {
    id: "fr-m",
    title: "Pasta e Fagioli (Italienisch)",
    desc: "Ein dickflüssiger, wärmender Eintopf aus Nudeln und weißen Bohnen.",
    story: "Ein Klassiker aus Rom. Manche nennen es Suppe, manche Pasta. Die Stärke der Bohnen bindet die Brühe zu einer unglaublichen Creme.",
    target: "≈85 g KH (2 P.) · Protein ≈20 g p. P.",
    ingredients: [
      "Kleine Nudeln (z.B. Ditalini oder Macaroni) 100 g",
      "Weiße Bohnen (Dose, gespült) 150 g",
      "Tomatenmark 1 EL",
      "Gemüsebrühe 400 ml",
      "Knoblauch 1 Zehe",
      "Parmesan 20 g"
    ],
    steps: [
      "Knoblauch und Tomatenmark in etwas Öl anrösten.",
      "Bohnen (ein paar davon leicht zerdrücken) und Brühe dazugeben. 10 Min köcheln.",
      "Nudeln direkt in die Brühe geben und kochen, bis sie al dente sind und die Sauce andickt.",
      "Mit Parmesan bestreuen."
    ],
    checks: "Balanced ✓ · Schwangerschaft ✓ · Diabetes ✓",
    swaps: "Nudeln ↔ Vollkornnudeln",
    side: "-",
    remind: false,
    riceCooker: { enabled: false },
  },
  {
    id: "fr-a",
    title: "Garlic Butter Prawns エビガーリック (Reiskocher)",
    desc: "Garnelen, Knoblauch und Butter garen direkt über dem Reis.",
    story: "Hawaiianischer Garlic-Shrimp Vibe trifft auf den Asia-Reiskocher. Der Reis fängt das Knoblauch-Butter-Aroma der Garnelen ein.",
    target: "≈80 g KH (2 P.) · Protein ≈26 g p. P.",
    ingredients: [
      "Reis (roh) 120 g",
      "Garnelen (geschält) 200 g",
      "Knoblauch 2 Zehen (fein gehackt)",
      "Butter 15 g",
      "Sojasauce 1 EL",
      "Gemüsebrühe 240 ml"
    ],
    steps: [
      "Reis und Brühe in den Topf.",
      "Garnelen, Knoblauch und Butter oben drauflegen.",
      "Kochen. Am Ende Sojasauce darüberträufeln und gut durchrühren."
    ],
    checks: "Balanced ✓ · Schwangerschaft ✓ (Garnelen werden durch den Dampf >80°C sicher erhitzt)",
    swaps: "Garnelen ↔ Jakobsmuscheln",
    side: "Ein Stück Zitrone zum Drüberträufeln.",
    remind: true,
    riceCooker: { enabled: true, program: "White Rice / Mixed", water: "Brühe (Standard)", notes: "Butter erst kurz vor Schluss zugeben für noch mehr Aroma, oder von Anfang an." },
  },

  // SAMSTAG
  {
    id: "sa-f",
    title: "Chicken Congee 鸡丝粥 (Reiskocher)",
    desc: "Cremiger Reisbrei mit Hühnchen. Sehr schonend und wärmend.",
    story: "Am Wochenende darf das Frühstück Zeit brauchen. Im Reiskocher köchelt das Porridge ungestört vor sich hin, das Huhn wird wunderbar zart.",
    target: "≈70 g KH (2 P.) · Protein ≈24 g p. P.",
    ingredients: [
      "Reis (roh) 80 g",
      "Hühnerbrühe 800 ml",
      "Hähnchenbrust 150 g",
      "Ingwer (fein geschnitten) 5 g",
      "Frühlingszwiebel 10 g",
      "Sojasauce 1 EL"
    ],
    steps: [
      "Huhn am Stück lassen.",
      "Reis, Brühe, Ingwer und das Huhn in den Reiskocher (Porridge Modus, ca. 50 Min).",
      "Nach dem Kochen das Huhn herausnehmen, mit einer Gabel zerzupfen und zurück in den Brei geben.",
      "Mit Soja und Zwiebeln würzen."
    ],
    checks: "Balanced ✓ · Schwangerschaft ✓ (Huhn gart extrem lange durch) · Diabetes ✓",
    swaps: "Huhn ↔ Weißfisch",
    side: "Ein hartgekochtes Ei.",
    remind: true,
    riceCooker: { enabled: true, program: "Porridge / Congee", water: "1:10 Ratio", notes: "Sehr flüssig am Anfang, dickt toll ein." },
  },
  {
    id: "sa-m",
    title: "Airfryer Lachs-Bites サーモン",
    desc: "Kleine Lachs-Würfel, asiatisch mariniert und im Airfryer saftig gebacken.",
    story: "Lachs in Würfeln backt im Airfryer in unter 8 Minuten. Die Ränder karamellisieren durch die Sojasauce herrlich.",
    target: "≈80 g KH (2 P.) · Protein ≈28 g p. P.",
    ingredients: [
      "Lachsfilet (gewürfelt) 200 g",
      "Sojasauce 1 EL",
      "Sesamöl 1 TL",
      "Reis (gekocht) 150 g",
      "Brokkoli (gedämpft) 100 g"
    ],
    steps: [
      "Lachswürfel in Sojasauce und Sesamöl wenden.",
      "Im Airfryer bei 200°C ca. 7-9 Min backen (Fisch muss komplett durchgaren!).",
      "Mit Reis und Brokkoli in einer Bowl anrichten."
    ],
    checks: "Balanced ✓ · Schwangerschaft ✓ (Lachs komplett durchgaren)",
    swaps: "Lachs ↔ Fester Tofu",
    side: "Etwas Chili-Mayo (aus pasteurisierter Mayo) als Dip.",
    remind: false,
    riceCooker: { enabled: false },
  },
  {
    id: "sa-a",
    title: "Miso-Köttbullar (SWE/JP Fusion)",
    desc: "Schwedische Hackbällchen, serviert in einer unglaublichen Miso-Rahmsauce.",
    story: "Köttbullar mal anders! Statt normaler Rinderbrühe geben wir Miso-Paste in die Sahnesauce. Das Umami-Level steigt ins Unermessliche.",
    target: "≈85 g KH (2 P.) · Protein ≈28 g p. P.",
    ingredients: [
      "Rinderhack 200 g",
      "Paniermehl 20 g",
      "Sahne (pasteurisiert) 100 ml",
      "Miso-Paste 1 EL",
      "Kartoffeln 300 g"
    ],
    steps: [
      "Hack mit in etwas Wasser eingeweichtem Paniermehl kneten, Bällchen formen.",
      "Bällchen in der Pfanne komplett durchbraten, herausnehmen.",
      "Sahne und Miso in der Pfanne leicht aufkochen. Bällchen zurückgeben.",
      "Kartoffeln kochen und dazu servieren."
    ],
    checks: "Balanced ✓ · Schwangerschaft ✓ (Fleischbällchen KOMPLETT durchbraten!)",
    swaps: "Rinderhack ↔ Vegane Hack-Alternative",
    side: "Preiselbeermarmelade (wenig).",
    remind: true,
    riceCooker: { enabled: false },
  },

  // SONNTAG
  {
    id: "so-f",
    title: "Fluffiges Soufflé-Omelett 계란말이",
    isViral: true,
    desc: "Wie eine Wolke! Getrennt aufgeschlagene Eier ergeben ein riesiges, leichtes Omelett.",
    story: "Ein Trend aus japanischen und koreanischen Cafés. Wir schlagen das Eiweiß steif. Wichtig: Wir decken die Pfanne ab, damit die 'Wolke' auch innen komplett durchgart!",
    target: "≈45 g KH (2 P.) · Protein ≈20 g p. P.",
    ingredients: [
      "Eier 4 Stück",
      "Zucker 1 TL",
      "Salz 1 Prise",
      "Butter 10 g",
      "Vollkorn-Toast 2 Scheiben"
    ],
    steps: [
      "Eier trennen. Eiweiß mit Zucker steif schlagen. Eigelb mit Salz verrühren.",
      "Eigelb vorsichtig unter das Eiweiß heben.",
      "Butter in der Pfanne schmelzen, Masse hineingeben. Deckel drauf! Bei niedriger Hitze 6-8 Min komplett durchgaren lassen (darf nicht flüssig bleiben).",
      "Zusammenklappen und auf Toast servieren."
    ],
    checks: "Balanced ✓ · Schwangerschaft ✓ (Deckel ist Pflicht für durchgegartes Inneres!)",
    swaps: "Toast ↔ Schwarzbrot",
    side: "Frische Gurken-Sticks.",
    remind: true,
    riceCooker: { enabled: false },
  },
  {
    id: "so-m",
    title: "Dan Dan Nudeln (Hähnchen) 担担面",
    desc: "Der Sichuan-Nudelklassiker: Milde Sesam-Soja-Sauce mit gebratenem Hähnchenhack.",
    story: "Normalerweise schwimmt dieses Gericht in Chili-Öl. Wir fokussieren uns auf die reichhaltige Sesam-Tahini-Sauce und nutzen mageres Hühnerhack für eine leichte, umamireiche Mahlzeit.",
    target: "≈85 g KH (2 P.) · Protein ≈26 g p. P.",
    ingredients: [
      "Weizennudeln 150 g",
      "Hähnchenhack 150 g",
      "Tahini (Sesampaste) 2 EL",
      "Sojasauce 2 EL",
      "Knoblauch 1 Zehe",
      "Pak Choi 100 g"
    ],
    steps: [
      "Hackfleisch und Knoblauch im Wok krümelig und gut durch braten.",
      "Tahini, Sojasauce und etwas warmes Nudelwasser zu einer dicken Sauce rühren.",
      "Nudeln und Pak Choi kochen.",
      "Nudeln in die Sauce geben, Hackfleisch darüber häufen, gut umrühren."
    ],
    checks: "Balanced ✓ · Schwangerschaft ✓ (Hähnchenhack komplett durchbraten!)",
    swaps: "Hähnchenhack ↔ Tofu-Crumble",
    side: "-",
    remind: false,
    riceCooker: { enabled: false },
  },
  {
    id: "so-a",
    title: "Sausage & Rice 腊味饭 (Reiskocher)",
    desc: "Herzhafter Reistopf mit Hähnchen und etwas Wurst für den Rauchgeschmack.",
    story: "Die chinesische Variante der Paella (Bao Zai Fan). Der Reis am Boden wird oft herrlich knusprig (ähnlich dem spanischen 'Socarrat'), während das Fleisch oben dämpft.",
    target: "≈84 g KH (2 P.) · Protein ≈30 g p. P.",
    ingredients: [
      "Reis (roh) 120 g",
      "Hähnchenbrust (gewürfelt) 150 g",
      "Räucherwurst (z.B. Cabanossi) 50 g",
      "Sojasauce 2 EL",
      "Erbsen (TK) 50 g",
      "Brühe 240 ml"
    ],
    steps: [
      "Wurst in dünne Scheiben schneiden. Hähnchen mit Sojasauce mischen.",
      "Reis und Brühe in den Topf.",
      "Wurst, Hähnchen und Erbsen darauf verteilen.",
      "Start drücken. Wenn fertig, alles gut durchmischen."
    ],
    checks: "Balanced ✓ · Schwangerschaft ✓ (Fleisch und Wurst kochen auf >80°C sicher durch)",
    swaps: "Wurst ↔ Räuchertofu",
    side: "Ein Tomatensalat.",
    remind: true,
    riceCooker: { enabled: true, program: "Mixed / White Rice", water: "Standard", notes: "Wurst gibt ordentlich Fett und Geschmack ab." },
  },
];

export default function Woche14DE() {
  return (
    <PlanTemplate
      meta={meta}
      data={DATA}
      dayNames={DAY_NAME_DE}
      uiTitles={UI_TITLES}
      subtitle="Teriyaki & Takikomi Gohan · Fusion-Frühstück · Balanced"
      heroChips={["Woche 14", "Virale Trends & Wohlfühlküche", "Täglich 1× 🍚 Reiskocher"]}
    />
  );
}

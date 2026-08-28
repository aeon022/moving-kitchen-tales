/*
  Moving Kitchen Tales – Woche 13 (Start: 2026-03-23)
  Status: KOMPLETT & FUNKTIONSFÄHIG (Alle 21 Rezepte)
  Fokus: Virale Airfryer-Hacks, Reiskocher-Magie, CN/JP/KR + EU Crossover.
*/

import React from "react";
import PlanTemplate from "../PlanTemplate";

export const meta = {
  title: "Woche 13",
  startDate: "2026-03-23",
  id: "woche-13-2026-03-23",
  lang: "de",
  sidebar: "Woche 13 (2026-03-23)",
};

const DAY_NAME_DE = {
  mo: "Montag (2026-03-23)",
  di: "Dienstag (2026-03-24)",
  mi: "Mittwoch (2026-03-25)",
  do: "Donnerstag (2026-03-26)",
  fr: "Freitag (2026-03-27)",
  sa: "Samstag (2026-03-28)",
  so: "Sonntag (2026-03-29)",
};

const UI_TITLES = {
  main: "Rezepte Woche 13",
  list: "Einkaufsliste Woche 13",
};

export const DATA = [
  // MONTAG
  {
    id: "mo-f",
    title: "Viral Feta Fried Eggs 煎蛋",
    isViral: true,
    desc: "Spiegeleier, gebraten in einem Ring aus schmelzendem Feta-Käse.",
    story: "Das Internet liebt Feta! Hier schmilzt man zerkrümelten Feta in der Pfanne und schlägt das Ei direkt hinein. Der Käse wird unten knusprig und würzt das Ei perfekt.",
    target: "≈50 g KH (2 P.) · Protein ≈22 g p. P.",
    ingredients: [
      "Feta-Käse (pasteurisiert) 60 g",
      "Eier 4 Stück",
      "Vollkorn-Toast 4 Scheiben",
      "Cherrytomaten 100 g",
      "Pfeffer & Chiliflocken (optional)"
    ],
    steps: [
      "Feta am Rand einer beschichteten Pfanne zu zwei Ringen bröseln. Pfanne erhitzen, bis der Käse schmilzt und Blasen wirft.",
      "In jeden Käsering ein bis zwei Eier schlagen.",
      "Deckel drauf! Bei mittlerer Hitze braten, bis das Eiweiß UND das Eigelb komplett gestockt sind.",
      "Vorsichtig auf den Toast heben, mit Tomaten servieren."
    ],
    checks: "Balanced ✓ · Schwangerschaft ✓ (Eigelb muss fest sein! Käse pasteurisiert) · Diabetes ✓",
    swaps: "Feta ↔ Ziegenkäse (pasteurisiert)",
    side: "Kaffee oder Kräutertee.",
    remind: true,
    riceCooker: { enabled: false },
  },
  {
    id: "mo-m",
    title: "Reispapier-Tteokbokki 라이스페이퍼 떡볶이 (Airfryer / Pfanne)",
    isViral: true,
    desc: "Chewy Reiskuchen-Ersatz aus aufgerolltem Reispapier in milder Gochujang-Sauce.",
    story: "TikTok-Hack: Nasses Reispapier eng aufrollen und in Stücke schneiden. Das ergibt die perfekte, zähe Tteokbokki-Textur. Viel schneller und super bekömmlich!",
    target: "≈80 g KH (2 P.) · Protein ≈18 g p. P.",
    ingredients: [
      "Reispapier 10 Blatt",
      "Tofu (fest, gewürfelt) 200 g",
      "Lauch (in Ringen) 100 g",
      "Gochujang (milde Paste) 1 EL",
      "Sojasauce 1 EL",
      "Agavendicksaft 1 TL"
    ],
    steps: [
      "Reispapierblätter kurz in warmes Wasser tauchen, eng zu einer Rolle formen. In 4 cm Stücke schneiden.",
      "Tofu im Airfryer (15 Min, 200°C) knusprig backen oder in der Pfanne anbraten.",
      "Gochujang, Soja, Agave und 150ml Wasser im Wok aufkochen. Lauch dazugeben.",
      "Reispapier-Rollen und Tofu in der Sauce schwenken, bis sie weich sind."
    ],
    checks: "Balanced ✓ · Schwangerschaft ✓ (Kein rohes Fleisch) · Diabetes ✓",
    swaps: "Tofu ↔ Hähnchenbrust",
    side: "Gurkensticks.",
    remind: false,
    riceCooker: { enabled: false },
  },
  {
    id: "mo-a",
    title: "Pai Gu Fan 排骨饭 (Reiskocher-Ribs)",
    desc: "Zartes Schweinefleisch dämpft in schwarzer Bohnensauce direkt über dem Reis.",
    story: "In Dim Sum Restaurants dämpft man Spareribs oft in kleinen Bambuskörben. Hier landet der ganze umamireiche Fleischsaft direkt im Reis darunter. Magie!",
    target: "≈80 g KH (2 P.) · Protein ≈26 g p. P.",
    ingredients: [
      "Reis (roh) 120 g",
      "Schweinegulasch (oder dicke Geschnetzeltes) 200 g",
      "Schwarze Bohnensauce (Black Bean Garlic) 1 EL",
      "Sojasauce 1 EL",
      "Hühnerbrühe 240 ml",
      "Pak Choi 150 g"
    ],
    steps: [
      "Fleisch in kleine Stücke schneiden, mit Bohnenpaste und Sojasauce vermengen.",
      "Reis und Brühe in den Reiskocher füllen.",
      "Das marinierte Fleisch gleichmäßig oben auflegen (nicht einrühren!). Start drücken.",
      "Pak Choi in den letzten 5 Min im Dampfaufsatz garen. Danach alles kräftig durchmischen."
    ],
    checks: "Balanced ✓ · Schwangerschaft ✓ (Fleisch wird durchgedämpft >80°C)",
    swaps: "Schweinefleisch ↔ Putenbrust",
    side: "Pak Choi.",
    remind: true,
    riceCooker: { enabled: true, program: "Mixed / White Rice", water: "Brühe (Standard)", notes: "Bohnenpaste ist salzig, Brühe evtl. leicht strecken." },
  },

  // DIENSTAG
  {
    id: "di-f",
    title: "Blåbärsgröt (Schwedischer Blaubeer-Grießbrei)",
    desc: "Cremiger Weichweizengrieß, lila gefärbt durch wilde Blaubeeren.",
    story: "In Schweden kocht man Grießbrei (Mannagrynsgröt) gern direkt mit Heidelbeeren auf, sodass der ganze Brei leuchtend lila wird. Ein fröhlicher Start in den Tag.",
    target: "≈70 g KH (2 P.) · Protein ≈15 g p. P.",
    ingredients: [
      "Weichweizengrieß 60 g",
      "Milch 500 ml",
      "Blaubeeren (TK) 100 g",
      "Agavendicksaft 1 EL",
      "Mandeln (gehackt) 20 g"
    ],
    steps: [
      "Milch mit den gefrorenen Blaubeeren in einem Topf erhitzen, bis die Milch lila wird.",
      "Grieß unter ständigem Rühren einrieseln lassen.",
      "Bei schwacher Hitze ca. 3-5 Min quellen lassen, bis er dicklich ist.",
      "Mit Agavendicksaft süßen und mit Mandeln bestreuen."
    ],
    checks: "Balanced ✓ · Schwangerschaft ✓ (TK-Beeren gut mitkochen lassen)",
    swaps: "Grieß ↔ Haferflocken",
    side: "-",
    remind: true,
    riceCooker: { enabled: false },
  },
  {
    id: "di-m",
    title: "Airfryer Cevapcici Bowl (Kroatien)",
    desc: "Balkan-Flair am Mittag: Fettarm gebackene Hackröllchen mit Ajvar und Reis.",
    story: "Cevapcici sind in Kroatien Kult. Im Airfryer werden sie rundum perfekt gebräunt, und das überschüssige Fett tropft ab. Mit Ajvar ein echter Genuss.",
    target: "≈85 g KH (2 P.) · Protein ≈28 g p. P.",
    ingredients: [
      "Rinderhack (mager, oder fertige Cevapcici) 200 g",
      "Knoblauchpulver, Paprika, Salz",
      "Reis (gekocht) 200 g",
      "Ajvar (mild) 3 EL",
      "Zwiebel (in feinen Ringen) 50 g",
      "Tomaten 100 g"
    ],
    steps: [
      "Hackfleisch kräftig würzen und zu kleinen, länglichen Röllchen formen.",
      "Im Airfryer bei 190°C ca. 12 Minuten backen (komplett durchgaren!).",
      "Reis in einer Bowl anrichten, Cevapcici darauflegen.",
      "Mit Zwiebelringen, Tomatenstücken und einem großen Klecks Ajvar servieren."
    ],
    checks: "Balanced ✓ · Schwangerschaft ✓ (Hackfleisch gut durchgaren!)",
    swaps: "Rinderhack ↔ Vegane Hackröllchen",
    side: "-",
    remind: false,
    riceCooker: { enabled: false },
  },
  {
    id: "di-a",
    title: "Ganze Zwiebel & Beef Reis 玉ねぎ牛丼 (Reiskocher)",
    isViral: true,
    desc: "Eine Zwiebel schmilzt im Reiskocher. Zartes Rindfleisch macht es zum One-Pot-Wunder.",
    story: "Zwei virale Trends verschmolzen: Der Zwiebel-Reis aus Japan und Gyudon! Die Zwiebel wird süß wie Karamell, das Rindfleisch zart. Genial.",
    target: "≈80 g KH (2 P.) · Protein ≈26 g p. P.",
    ingredients: [
      "Reis (roh) 120 g",
      "Zwiebel (mittlere Größe, geschält) 1 Stück",
      "Rindfleisch (hauchdünne Hotpot-Scheiben) 150 g",
      "Sojasauce 2 EL",
      "Mirin 1 EL",
      "Dashi oder Brühe 240 ml"
    ],
    steps: [
      "Reis, Brühe, Soja und Mirin in den Topf. Die Zwiebel oben tief kreuzweise einschneiden (nicht zerteilen) und in die Mitte setzen.",
      "Das Rindfleisch locker um die Zwiebel fächern.",
      "Reiskocher starten.",
      "Nach dem Kochen die butterweiche Zwiebel mit einem Löffel zerdrücken und alles vermengen."
    ],
    checks: "Balanced ✓ · Schwangerschaft ✓ (Fleisch wird durchgedämpft) · Diabetes ✓",
    swaps: "Rind ↔ Schwein",
    side: "Etwas Frühlingszwiebel on top.",
    remind: true,
    riceCooker: { enabled: true, program: "White Rice / Mixed", water: "Brühe (Standard)", notes: "Zwiebel kreuzweise einschneiden, damit sie weich wird." },
  },

  // MITTWOCH
  {
    id: "mi-f",
    title: "Airfryer Custard Toast カスタードトースト",
    isViral: true,
    desc: "Toast, belegt mit einer cremigen Joghurt-Ei-Mischung, gebacken im Airfryer.",
    story: "Ein riesiger Frühstückshit! Eine Mischung aus Joghurt und Ei wird in eine Kuhle im Toast gegeben. Beim Backen entsteht ein süßer, puddingartiger Belag.",
    target: "≈75 g KH (2 P.) · Protein ≈18 g p. P.",
    ingredients: [
      "Vollkorn-Toast 4 Scheiben",
      "Griechischer Joghurt (pasteurisiert) 4 EL",
      "Ei 1 Stück",
      "Agavendicksaft 1 TL",
      "Beeren (z.B. Himbeeren) 50 g"
    ],
    steps: [
      "Joghurt, Ei und Agave gut verquirlen.",
      "Mit einem Löffel eine Kuhle in die Mitte der Toastscheiben drücken.",
      "Die Joghurt-Mischung in die Kuhle füllen, mit Beeren belegen.",
      "Im Airfryer bei 170°C ca. 8-10 Min backen, bis der 'Pudding' komplett fest ist (kein flüssiges Ei!)."
    ],
    checks: "Balanced ✓ · Schwangerschaft ✓ (Ei-Masse muss komplett gestockt sein)",
    swaps: "Beeren ↔ Pfirsichspalten",
    side: "Kaffee oder Tee.",
    remind: true,
    riceCooker: { enabled: false },
  },
  {
    id: "mi-m",
    title: "San Bei Ji 三杯鸡 (Three Cup Chicken Wok)",
    desc: "Taiwanesischer Hähnchen-Wok mit Soja, Sesamöl und Reiswein (alkoholfrei).",
    story: "Der Name 'Drei Tassen' kommt von den Zutaten: Sojasauce, Reiswein und Sesamöl. Wir köcheln den Reiswein aus (alkoholfrei!), was eine unvergleichliche, klebrige Glasur ergibt.",
    target: "≈80 g KH (2 P.) · Protein ≈32 g p. P.",
    ingredients: [
      "Hähnchenbrust oder Keule 250 g",
      "Sesamöl 2 EL",
      "Sojasauce 2 EL",
      "Mirin oder alkoholfreier Kochwein 2 EL",
      "Knoblauch 2 Zehen",
      "Reis (gekocht) 150 g"
    ],
    steps: [
      "Sesamöl im Wok erhitzen, Hähnchen und grob gehackten Knoblauch scharf anbraten (gut durchgaren!).",
      "Sojasauce und Mirin dazugeben.",
      "Hitze reduzieren und einköcheln lassen, bis die Sauce klebrig wird und das Fleisch umhüllt.",
      "Mit Reis servieren."
    ],
    checks: "Balanced ✓ · Schwangerschaft ✓ (Alkohol verkocht komplett / Mirin nutzen) · Diabetes ✓",
    swaps: "Hähnchen ↔ Tofu",
    side: "Gedämpfter Brokkoli.",
    remind: false,
    riceCooker: { enabled: false },
  },
  {
    id: "mi-a",
    title: "Lachs-Dill Nordic Rice 鮭とディルご飯 (Reiskocher)",
    desc: "Schwedisch inspirierter Reiskocher-Topf mit Lachs, Dill und Erbsen.",
    story: "Eine Crossover-Episode: Skandinavische Aromen treffen auf japanische Reiskocher-Technik. Der Dill gibt dem Reis eine unglaubliche Frische.",
    target: "≈80 g KH (2 P.) · Protein ≈28 g p. P.",
    ingredients: [
      "Reis (roh) 120 g",
      "Lachsfilet 200 g",
      "Erbsen (TK) 80 g",
      "Dill (frisch, viel!) 1 Bund",
      "Zitrone (nur etwas Saft) 1 TL",
      "Gemüsebrühe 240 ml"
    ],
    steps: [
      "Reis und Brühe in den Topf.",
      "Lachs und Erbsen oben auflegen.",
      "Kochen. Nach dem Öffnen den gehackten Dill und Zitronensaft zugeben.",
      "Lachs zerteilen und alles gut mischen."
    ],
    checks: "Balanced ✓ · Schwangerschaft ✓ (Lachs gart im Topf durch)",
    swaps: "Lachs ↔ Forellenfilet",
    side: "Knackiger Karottensalat.",
    remind: true,
    riceCooker: { enabled: true, program: "Mixed / White Rice", water: "Brühe Standard", notes: "Dill nicht mitkochen, erst am Ende rein!" },
  },

  // DONNERSTAG
  {
    id: "do-f",
    title: "Herzhaftes Miso-Oatmeal mit Edamame",
    desc: "Haferbrei, gekocht in Dashi, verfeinert mit Miso und Edamame.",
    story: "Wer Miso-Suppe zum Frühstück liebt, wird dieses Oatmeal vergöttern. Es ist warm, wohlig und extrem schnell gemacht. Die Edamame geben extra Protein.",
    target: "≈65 g KH (2 P.) · Protein ≈18 g p. P.",
    ingredients: [
      "Haferflocken 100 g",
      "Dashi oder Gemüsebrühe 400 ml",
      "Miso-Paste 1 EL",
      "Edamame (geschält, TK aufgetaut) 50 g",
      "Eier (hartgekocht) 2 Stück"
    ],
    steps: [
      "Haferflocken in Brühe einköcheln.",
      "In der letzten Minute die Edamame unterheben.",
      "Vom Herd nehmen! Miso-Paste einrühren (darf nicht mehr kochen).",
      "Mit halbierten, hartgekochten Eiern servieren."
    ],
    checks: "Balanced ✓ · Schwangerschaft ✓ (Eier hartgekocht)",
    swaps: "Eier ↔ Räuchertofu",
    side: "Tee.",
    remind: true,
    riceCooker: { enabled: false },
  },
  {
    id: "do-m",
    title: "Gnocchi mit Airfryer-Zucchini und Parmesan",
    desc: "Italienisches Soulfood. Im Airfryer geröstete Zucchini mit Gnocchi geschwenkt.",
    story: "Zucchini in der Pfanne wird oft matschig. Im Airfryer bekommt sie tolle Röstaromen! Zusammen mit Gnocchi und Parmesan ein schnelles Gedicht.",
    target: "≈85 g KH (2 P.) · Protein ≈15 g p. P.",
    ingredients: [
      "Gnocchi (Kühlregal) 300 g",
      "Zucchini 200 g",
      "Olivenöl 1 EL",
      "Knoblauchpulver 1 TL",
      "Parmesan 30 g",
      "Cherrytomaten 100 g"
    ],
    steps: [
      "Zucchini würfeln, mit Öl und Knoblauch mischen. Im Airfryer bei 190°C ca. 10 Min rösten.",
      "Gnocchi in kochendem Wasser garen, bis sie aufsteigen.",
      "Gnocchi, Zucchini und halbierte Tomaten in einer Pfanne kurz schwenken.",
      "Mit Parmesan bestreuen."
    ],
    checks: "Balanced ✓ · Schwangerschaft ✓ · Diabetes ✓",
    swaps: "Gnocchi ↔ Vollkorn-Penne",
    side: "Etwas Zitronensaft darüber träufeln.",
    remind: false,
    riceCooker: { enabled: false },
  },
  {
    id: "do-a",
    title: "Chicken Mushroom Claypot 煲仔饭 (Reiskocher)",
    desc: "Hongkong-Klassiker: Hühnchen und Shiitake-Pilze, zusammen im Reiskocher gedämpft.",
    story: "Claypot Rice ist berühmt für seinen Geschmack. Der Reiskocher imitiert das Prinzip perfekt. Die Pilze geben beim Kochen ihren dunklen Saft ab.",
    target: "≈82 g KH (2 P.) · Protein ≈30 g p. P.",
    ingredients: [
      "Reis (roh) 120 g",
      "Hähnchenbrust 200 g",
      "Shiitake-Pilze 100 g",
      "Sojasauce 2 EL",
      "Hühnerbrühe 240 ml",
      "Frühlingszwiebel 10 g"
    ],
    steps: [
      "Hähnchen in Würfel schneiden, Pilze in Streifen.",
      "Reis und Brühe in den Topf. Sojasauce dazugeben.",
      "Zutaten oben auflegen (nicht einrühren!).",
      "Kochen und danach alles fluffig vermischen. Mit Frühlingszwiebeln toppen."
    ],
    checks: "Balanced ✓ · Schwangerschaft ✓ (Huhn durch) · Diabetes ✓",
    swaps: "Hähnchen ↔ Schweinefleisch",
    side: "Gedämpfter Spinat.",
    remind: true,
    riceCooker: { enabled: true, program: "Mixed / White Rice", water: "Brühe", notes: "Sojasauce zählt zur Flüssigkeit dazu." },
  },

  // FREITAG
  {
    id: "fr-f",
    title: "HK French Toast 西多士 (Airfryer-Edition)",
    desc: "French Toast gefüllt mit Erdnussbutter, fettarm im Airfryer gebacken.",
    story: "In HK-Cafés ('Cha Chaan Teng') wird das frittiert. Wir machen die Airfryer-Version! Weniger Fett, genauso dekadent, aber Sonntag... äh Freitag darf das sein.",
    target: "≈78 g KH (2 P.) · Protein ≈16 g p. P.",
    ingredients: [
      "Vollkorn-Toast 4 Scheiben",
      "Erdnussbutter 2 EL",
      "Eier 2 Stück",
      "Milch 20 ml",
      "Ahornsirup oder Agave"
    ],
    steps: [
      "Sandwich mit Erdnussbutter machen.",
      "Eier mit Milch verquirlen. Toast darin großzügig tränken.",
      "Im Airfryer bei 180°C ca. 8-10 Min backen (Ei muss komplett stocken!). Nach der Hälfte wenden.",
      "Mit etwas Sirup servieren."
    ],
    checks: "Balanced ✓ · Schwangerschaft ✓ (Ei komplett durchgebacken)",
    swaps: "Erdnussbutter ↔ Marmelade (weniger Protein)",
    side: "Milchtee.",
    remind: true,
    riceCooker: { enabled: false },
  },
  {
    id: "fr-m",
    title: "Dan Dan Nudeln (Mild) 担担面",
    desc: "Der Sichuan-Nudelklassiker: Milde Sesam-Soja-Sauce mit gebratenem Schweinehack.",
    story: "Normalerweise schwimmt dieses Gericht in Chili-Öl. Wir fokussieren uns auf die reichhaltige Tahini-Sauce und nutzen mageres Hack für eine leichte, umamireiche Mahlzeit.",
    target: "≈85 g KH (2 P.) · Protein ≈26 g p. P.",
    ingredients: [
      "Weizennudeln 150 g",
      "Schweinehack (mager) 150 g",
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
    checks: "Balanced ✓ · Schwangerschaft ✓ (Hack komplett durchbraten!)",
    swaps: "Schweinehack ↔ Hähnchenhack",
    side: "-",
    remind: false,
    riceCooker: { enabled: false },
  },
  {
    id: "fr-a",
    title: "Garnelen-Erbsen-Paella (Reiskocher)",
    desc: "Reiskocher-Paella mit Garnelen, Erbsen und viel Kurkuma.",
    story: "Eine Fusion aus asiatischer Reiskocher-Technik und Paella-Zutaten. Der Kurkuma färbt den Reis leuchtend gelb, der Reis fängt den Garnelen-Fond auf.",
    target: "≈80 g KH (2 P.) · Protein ≈26 g p. P.",
    ingredients: [
      "Reis (roh) 120 g",
      "Garnelen (TK, aufgetaut) 200 g",
      "Erbsen (TK) 80 g",
      "Kurkuma-Pulver 1/2 TL",
      "Knoblauch 1 Zehe",
      "Gemüsebrühe 240 ml"
    ],
    steps: [
      "Reis, Brühe, Kurkuma und zerdrückten Knoblauch in den Topf geben.",
      "Garnelen und Erbsen oben auflegen.",
      "Starten. Nach dem Kochen alles vorsichtig durchheben."
    ],
    checks: "Balanced ✓ · Schwangerschaft ✓ (Garnelen dampfgaren im Topf >80°C sicher durch)",
    swaps: "Garnelen ↔ Hähnchenbrust",
    side: "Ein Spritzer Limette.",
    remind: true,
    riceCooker: { enabled: true, program: "White Rice / Mixed", water: "Brühe (Standard)", notes: "Garnelen vorher gut abtropfen lassen." },
  },

  // SAMSTAG
  {
    id: "sa-f",
    title: "Cloud Egg Avocado Toast ☁️🥑",
    isViral: true,
    desc: "Steif geschlagenes Eiweiß als Wolke gebacken, serviert auf Avocado-Toast.",
    story: "Noch ein Viraler Hit! Diesmal kombinieren wir das fluffige Cloud-Egg mit Avocado. Ein Fest für die Augen und unglaublich lecker.",
    target: "≈60 g KH (2 P.) · Protein ≈18 g p. P.",
    ingredients: [
      "Vollkorn-Toast 4 Scheiben",
      "Eier 2 Stück",
      "Avocado 1 Stück",
      "Salz & Pfeffer",
      "Zitronensaft"
    ],
    steps: [
      "Eier trennen. Eiweiß steif schlagen. Wolken auf Backpapier formen, Kuhle in die Mitte.",
      "Im Airfryer (160°C) 5 Min backen. Eigelb in die Kuhle geben, weitere 5-8 Min backen (komplett durchgaren!).",
      "Avocado zerdrücken, mit Zitrone würzen, auf Toast streichen.",
      "Wolken-Eier auf die Avocado legen."
    ],
    checks: "Balanced ✓ · Schwangerschaft ✓ (Eigelb muss fest sein!)",
    swaps: "Avocado ↔ Tomatenscheiben",
    side: "Kaffee.",
    remind: true,
    riceCooker: { enabled: false },
  },
  {
    id: "sa-m",
    title: "Airfryer Tonkatsu 豚カツ (Schweineschnitzel)",
    desc: "Japanisches Schweineschnitzel, fettarm im Airfryer mit Panko-Kruste gebacken.",
    story: "Tonkatsu ist Liebe. Damit wir uns das Frittierfett sparen, sprühen wir das Panko-Mehl nur leicht mit Öl ein. Der Airfryer erledigt den Rest mit Bravour.",
    target: "≈80 g KH (2 P.) · Protein ≈30 g p. P.",
    ingredients: [
      "Schweineschnitzel 2 Stück",
      "Panko-Mehl 40 g",
      "Ei 1 Stück & Mehl (Panierstraße)",
      "Weißkohl (sehr fein gehobelt) 150 g",
      "Tonkatsu-Sauce 2 EL",
      "Reis (gekocht) 150 g"
    ],
    steps: [
      "Schnitzel klopfen, in Mehl, Ei und Panko wenden. Leicht mit Öl besprühen.",
      "Im Airfryer bei 200°C ca. 15-18 Min backen (Fleisch komplett durchgaren!).",
      "In Streifen schneiden und auf dem Kohlberg anrichten. Sauce darüber geben.",
      "Mit Reis essen."
    ],
    checks: "Balanced ✓ · Schwangerschaft ✓ (Schwein durchgaren)",
    swaps: "Schwein ↔ Hähnchenbrust",
    side: "Miso-Suppe.",
    remind: false,
    riceCooker: { enabled: false },
  },
  {
    id: "sa-a",
    title: "Tomaten-Mozzarella Risotto トマトリゾット (Reiskocher)",
    desc: "Die asiatische 'Whole Tomato'-Technik trifft auf Italien. Kein Rühren nötig!",
    story: "Die Tomate schmilzt beim Kochen, und zusammen mit dem Käse entsteht am Ende ein cremiges Risotto. Absolut narrensicher.",
    target: "≈82 g KH (2 P.) · Protein ≈20 g p. P.",
    ingredients: [
      "Risottoreis 120 g",
      "Tomate (sehr groß und reif) 1 Stück",
      "Gemüsebrühe 240 ml",
      "Olivenöl 1 EL",
      "Mozzarella (pasteurisiert) 100 g",
      "Basilikum"
    ],
    steps: [
      "Reis, Brühe und Öl in den Topf geben.",
      "Strunk der Tomate entfernen und die Tomate im Ganzen in die Mitte setzen.",
      "Reiskocher starten.",
      "Am Ende die Tomate zerdrücken, Mozzarella unterheben bis er Fäden zieht."
    ],
    checks: "Balanced ✓ · Schwangerschaft ✓ (Mozzarella aus pasteurisierter Milch) · Diabetes ✓",
    swaps: "Mozzarella ↔ Feta",
    side: "Gedämpftes Hühnchen für mehr Protein.",
    remind: true,
    riceCooker: { enabled: true, program: "White Rice", water: "Brühe (etwas weniger als normal)", notes: "Tomate gut zerdrücken." },
  },

  // SONNTAG
  {
    id: "so-f",
    title: "Gyeran-jjim 계란찜 (Mikrowellen-Ei-Soufflé)",
    desc: "Koreanisches souffliertes Ei. Fluffig wie eine Wolke, blitzschnell aus der Mikrowelle.",
    story: "In koreanischen Restaurants kommt Gyeran-jjim oft blubbernd im Tontopf. Zuhause schummeln wir mit der Mikrowelle – es wird genauso fluffig und ist in 4 Minuten fertig!",
    target: "≈60 g KH (2 P.) · Protein ≈20 g p. P.",
    ingredients: [
      "Eier 4 Stück",
      "Wasser oder Hühnerbrühe 100 ml",
      "Frühlingszwiebel 10 g",
      "Salz 1 Prise",
      "Reis (gekocht, als Beilage) 120 g"
    ],
    steps: [
      "Eier mit Brühe, Salz und Frühlingszwiebeln gut verquirlen.",
      "In ein mikrowellengeeignetes Gefäß füllen (sollte nur zu 70% voll sein, es geht auf!).",
      "Deckel locker auflegen. In der Mikrowelle ca. 3-4 Minuten bei mittlerer bis hoher Stufe garen, bis es komplett durchgestockt ist.",
      "Dazu Reis essen."
    ],
    checks: "Balanced ✓ · Schwangerschaft ✓ (Eier müssen komplett fest und heiß sein!)",
    swaps: "Mikrowelle ↔ Im Topf im Wasserbad dämpfen (dauert 15 Min)",
    side: "Warmer Reis.",
    remind: true,
    riceCooker: { enabled: false },
  },
  {
    id: "so-m",
    title: "Schwedische Laxsoppa (Lachssuppe)",
    desc: "Cremige, schwedische Lachssuppe mit Kartoffeln, Dill und einem Schuss Sahne.",
    story: "Der Winterklassiker aus Skandinavien. Die Suppe ist wärmend, reichhaltig und in 20 Minuten auf dem Tisch.",
    target: "≈75 g KH (2 P.) · Protein ≈26 g p. P.",
    ingredients: [
      "Lachsfilet (gewürfelt) 200 g",
      "Kartoffeln (gewürfelt) 200 g",
      "Karotten & Lauch (geschnitten) 100 g",
      "Gemüsebrühe 600 ml",
      "Sahne (pasteurisiert) 50 ml",
      "Dill (frisch) 1 EL"
    ],
    steps: [
      "Kartoffeln und Gemüse in der Brühe ca. 15 Min kochen, bis sie weich sind.",
      "Sahne einrühren.",
      "Lachswürfel dazugeben und bei sehr schwacher Hitze ca. 5 Min garziehen lassen (nicht mehr sprudelnd kochen!).",
      "Mit Dill bestreuen."
    ],
    checks: "Balanced ✓ · Schwangerschaft ✓ (Lachs komplett durchgaren lassen)",
    swaps: "Sahne ↔ Hafercreme",
    side: "Ein Stück Vollkornbrot.",
    remind: false,
    riceCooker: { enabled: false },
  },
  {
    id: "so-a",
    title: "Nan Gua Fan 南瓜饭 (Kürbis-Schwein-Reis)",
    desc: "Kürbis und Schweinehack dämpfen zusammen im Reiskocher. Ein süß-herzhafter Traum.",
    story: "Ein Wohlfühlessen aus Südchina. Der Kürbis zerfällt fast und hüllt jedes Reiskorn in ein cremiges, süßliches Gold.",
    target: "≈80 g KH (2 P.) · Protein ≈24 g p. P.",
    ingredients: [
      "Reis (roh) 120 g",
      "Kürbis (z.B. Hokkaido, gewürfelt) 150 g",
      "Schweinehack (mager) 150 g",
      "Sojasauce 2 EL",
      "Knoblauch 1 Zehe",
      "Wasser"
    ],
    steps: [
      "Schweinehack kurz mit Sojasauce und Knoblauch vermengen.",
      "Reis waschen, in den Topf geben und Wasser (minimal weniger als normal) hinzufügen.",
      "Hackfleisch (zerpflückt!) und Kürbis auf dem Reis verteilen.",
      "Start drücken. Danach alles sorgfältig durchmischen."
    ],
    checks: "Balanced ✓ · Schwangerschaft ✓ (Hack gart im Topf sicher durch) · Diabetes ✓",
    swaps: "Schweinehack ↔ Hähnchenhack",
    side: "Miso-Suppe.",
    remind: true,
    riceCooker: { enabled: true, program: "Mixed / White Rice", water: "Etwas weniger als normal", notes: "Kürbis gibt Wasser ab." },
  },
];

export default function Woche13DE() {
  return (
    <PlanTemplate
      meta={meta}
      data={DATA}
      dayNames={DAY_NAME_DE}
      uiTitles={UI_TITLES}
      subtitle="Virale Airfryer-Hacks 🔥 · Originaltitel (CN/JP/KR) · Balanced"
      heroChips={["Woche 13", "Virale Trends & Wohlfühlküche", "Täglich 1× 🍚 Reiskocher"]}
    />
  );
}

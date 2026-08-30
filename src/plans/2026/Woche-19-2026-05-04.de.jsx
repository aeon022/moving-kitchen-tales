/*
  Moving Kitchen Tales – Woche 19 (Start: 2026-05-04)
  Status: KOMPLETT & FUNKTIONSFÄHIG (Alle 21 Rezepte)
  Fokus: Neue Virale Airfryer-Hacks, Reiskocher-Magie, CN/JP/KR + EU Crossover.
*/

import React from "react";
import PlanTemplate from "../PlanTemplate";

export const meta = {
  title: "Woche 19",
  startDate: "2026-05-04",
  id: "woche-19-2026-05-04",
  lang: "de",
  sidebar: "Woche 19 (2026-05-04)",
};

const DAY_NAME_DE = {
  mo: "Montag (2026-05-04)",
  di: "Dienstag (2026-05-05)",
  mi: "Mittwoch (2026-05-06)",
  do: "Donnerstag (2026-05-07)",
  fr: "Freitag (2026-05-08)",
  sa: "Samstag (2026-05-09)",
  so: "Sonntag (2026-05-10)",
};

const UI_TITLES = {
  main: "Rezepte Woche 19",
  list: "Einkaufsliste Woche 19",
};

export const DATA = [
  // MONTAG
  {
    id: "mo-f",
    title: "Chili Oil Fried Eggs 辣油煎蛋",
    isViral: true,
    desc: "Spiegeleier, die direkt in mildem Chili-Öl knusprig gebraten werden.",
    story: "Ein weltweiter Food-Trend! Das Chili-Öl (Lao Gan Ma oder ähnlich) röstet das Eiweiß extrem knusprig und verleiht ihm eine fantastische, tiefrote Farbe. Serviert auf cremigem Avocado-Toast.",
    target: "≈50 g KH (2 P.) · Protein ≈20 g p. P.",
    ingredients: [
      "Vollkorn-Toast 4 Scheiben",
      "Eier 4 Stück",
      "Mildes Chili-Öl (Crispy Chili Oil) 1 EL",
      "Avocado (reif) 1 Stück",
      "Frühlingszwiebel 10 g"
    ],
    steps: [
      "Chili-Öl in einer Pfanne bei mittlerer Hitze erwärmen.",
      "Die Eier direkt in das Öl schlagen.",
      "Deckel auflegen und braten, bis das Eiweiß und Eigelb GANZ durchgestockt sind.",
      "Avocado auf den getoasteten Broten zerdrücken, Eier darauflegen und mit Frühlingszwiebeln toppen."
    ],
    checks: "Balanced ✓ · Schwangerschaft ✓ (Eigelb muss komplett fest sein) · Diabetes ✓",
    swaps: "Avocado ↔ Frischkäse",
    side: "Kaffee oder Tee.",
    remind: true,
    riceCooker: { enabled: false },
  },
  {
    id: "mo-m",
    title: "Crushed Cucumber & Airfryer Tofu 拍黄瓜",
    desc: "Zerschlagene asiatische Gurken mit extrem knusprigem Tofu aus dem Airfryer.",
    story: "Gurken zu zerschlagen (statt zu schneiden) öffnet ihre Struktur, sodass sie die Soja-Knoblauch-Sauce förmlich aufsaugen. Der Tofu aus dem Airfryer bringt den nötigen Crunch.",
    target: "≈65 g KH (2 P.) · Protein ≈22 g p. P.",
    ingredients: [
      "Fester Tofu 300 g",
      "Maisstärke 2 EL",
      "Salatgurke 1 große",
      "Knoblauch 2 Zehen",
      "Sojasauce 2 EL & Reisessig 1 EL",
      "Reis (gekocht) 150 g"
    ],
    steps: [
      "Tofu würfeln, in Maisstärke wenden und im Airfryer bei 200°C ca. 15 Min knusprig backen.",
      "Gurke mit einem schweren Messer oder Nudelholz flachklopfen und in Stücke schneiden.",
      "Knoblauch fein hacken, mit Sojasauce, Essig und einem Spritzer Sesamöl mischen. Gurken darin marinieren.",
      "Knusprigen Tofu unterheben und sofort mit Reis servieren."
    ],
    checks: "Balanced ✓ · Schwangerschaft ✓ · Diabetes ✓",
    swaps: "Tofu ↔ Hähnchenbrust-Würfel",
    side: "-",
    remind: false,
    riceCooker: { enabled: false },
  },
  {
    id: "mo-a",
    title: "Risi e Bisi (Erbsen-Schinken-Reis)",
    desc: "Der italienische Frühlingsklassiker, schonend im Reiskocher zubereitet.",
    story: "'Risi e Bisi' ist in Venedig Kult. Es ist eine Mischung aus Suppe und Risotto. Im Reiskocher wird es zum perfekten, stressfreien Feierabendgericht.",
    target: "≈80 g KH (2 P.) · Protein ≈22 g p. P.",
    ingredients: [
      "Risottoreis oder Rundkornreis 120 g",
      "Erbsen (TK) 150 g",
      "Kochschinken (gewürfelt) 100 g",
      "Gemüsebrühe 300 ml",
      "Parmesan (pasteurisiert) 30 g",
      "Butter 10 g"
    ],
    steps: [
      "Reis, Brühe und Schinken in den Reiskocher geben. Starten.",
      "In den letzten 5 Minuten die aufgetauten Erbsen dazugeben (dann bleiben sie grün).",
      "Nach dem Kochen Parmesan und Butter kräftig unterrühren, bis es schlotzig ist."
    ],
    checks: "Balanced ✓ · Schwangerschaft ✓ (Käse pasteurisiert, Schinken erhitzt)",
    swaps: "Kochschinken ↔ Speckwürfel",
    side: "Ein Tomatensalat.",
    remind: true,
    riceCooker: { enabled: true, program: "White Rice / Mixed", water: "Brühe (etwas mehr für Risotto-Textur)", notes: "Soll am Ende sehr cremig sein." },
  },

  // DIENSTAG
  {
    id: "di-f",
    title: "Matcha Chia Pudding 抹茶チア",
    desc: "Cremiger Chia-Pudding mit Haferflocken und herb-frischem Matcha.",
    story: "Ein großartiges Meal-Prep-Frühstück. Der Chia-Pudding quillt über Nacht auf und bekommt durch den grünen Tee eine wunderbare Farbe und Antioxidantien.",
    target: "≈60 g KH (2 P.) · Protein ≈15 g p. P.",
    ingredients: [
      "Chia-Samen 4 EL",
      "Haferflocken 40 g",
      "Milch (oder Pflanzenmilch) 300 ml",
      "Matcha-Pulver 1 TL",
      "Agavendicksaft 1 EL",
      "Beeren (frisch oder TK) 50 g"
    ],
    steps: [
      "Matcha-Pulver in einem Schluck warmem Wasser klümpchenfrei auflösen.",
      "Chia-Samen, Haferflocken, Milch, Agave und Matcha gut verrühren.",
      "Mindestens 30 Minuten (oder über Nacht) quellen lassen.",
      "Mit Beeren toppen."
    ],
    checks: "Balanced ✓ · Diabetes ✓ (Chia und Hafer sind extrem blutzuckerfreundlich) · Schwangerschaft ✓",
    swaps: "Matcha ↔ Kakaopulver",
    side: "Eine Tasse heißes Wasser mit Zitrone.",
    remind: true,
    riceCooker: { enabled: false },
  },
  {
    id: "di-m",
    title: "Airfryer Lachsfrikadellen (Laxbiffar)",
    desc: "Schnelle schwedische Lachsfrikadellen mit Dill, fettarm gebacken.",
    story: "In Skandinavien liebt man Fischfrikadellen. Wir machen sie aus Lachsresten oder Dosenlachs, binden sie mit Semmelbröseln und garen sie im Airfryer rundum knusprig.",
    target: "≈80 g KH (2 P.) · Protein ≈26 g p. P.",
    ingredients: [
      "Lachs (Dose oder frisch gehackt) 200 g",
      "Ei 1 Stück",
      "Paniermehl 30 g",
      "Dill (frisch) 1 EL",
      "Kartoffeln 300 g",
      "Quark-Dip (Magerquark & Zitrone) 2 EL"
    ],
    steps: [
      "Lachs mit Ei, Paniermehl und Dill mischen, kleine Frikadellen formen.",
      "Im Airfryer bei 180°C ca. 12 Minuten backen, bis sie komplett durchgegart und leicht knusprig sind.",
      "Kartoffeln kochen.",
      "Frikadellen mit Kartoffeln und Zitronen-Quark-Dip servieren."
    ],
    checks: "Balanced ✓ · Schwangerschaft ✓ (Frikadellen GANZ durchgaren)",
    swaps: "Lachs ↔ Thunfisch (Dose)",
    side: "Ein paar Erbsen.",
    remind: false,
    riceCooker: { enabled: false },
  },
  {
    id: "di-a",
    title: "Kürbis-Kokos-Reis 南瓜椰香饭 (Reiskocher)",
    desc: "Cremiger Reis mit Hokkaido-Kürbis und Hähnchen, gedämpft in Kokosmilch.",
    story: "Ein Crossover, das wärmt und tröstet. Die Kokosmilch macht den Reis unfassbar cremig, der Kürbis zerfällt von allein und hüllt alles in ein zartes Orange.",
    target: "≈82 g KH (2 P.) · Protein ≈30 g p. P.",
    ingredients: [
      "Reis (roh) 120 g",
      "Hähnchenbrust (gewürfelt) 200 g",
      "Kürbis (Hokkaido, gewürfelt) 150 g",
      "Kokosmilch (fettreduziert) 150 ml",
      "Gemüsebrühe 100 ml",
      "Sojasauce 1 EL"
    ],
    steps: [
      "Hähnchenwürfel kurz in Sojasauce wenden.",
      "Reis, Kokosmilch und Brühe in den Reiskocher füllen.",
      "Hähnchen und Kürbiswürfel oben auflegen. Start drücken.",
      "Nach dem Kochen alles gründlich durchmischen, sodass der Kürbis musig wird."
    ],
    checks: "Balanced ✓ · Schwangerschaft ✓ (Huhn gart im Topf sicher durch) · Diabetes ✓",
    swaps: "Hähnchen ↔ Kichererbsen",
    side: "Ein Spritzer Limettensaft.",
    remind: true,
    riceCooker: { enabled: true, program: "Mixed / White Rice", water: "Kokosmilch + Brühe (Standardmenge)", notes: "Kürbis gibt Feuchtigkeit ab." },
  },

  // MITTWOCH
  {
    id: "mi-f",
    title: "Reispapier-Frühlingszwiebel-Pfannkuchen 葱油饼 (Airfryer)",
    isViral: true,
    desc: "Die geniale Shortcut-Version der chinesischen Scallion Pancakes (Cong You Bing).",
    story: "Teig kneten dauert ewig. TikTok hat die Lösung: Mehrere Schichten nasses Reispapier, dazwischen Frühlingszwiebeln und ein verquirltes Ei. Im Airfryer backt das extrem blättrig und knusprig auf!",
    target: "≈65 g KH (2 P.) · Protein ≈18 g p. P.",
    ingredients: [
      "Reispapier 6 Blatt",
      "Eier 2 Stück",
      "Frühlingszwiebeln 30 g",
      "Sojasauce & Sesamöl (je 1 TL)",
      "Vollkorn-Toast (als Beilage) 2 Scheiben"
    ],
    steps: [
      "Eier mit Soja, Sesamöl und Frühlingszwiebeln verquirlen.",
      "Ein Blatt Reispapier in warmes Wasser tauchen, auf einen Teller legen. Etwas Eimasse verstreichen. Nächstes Blatt darauflegen. (3 Schichten pro Pfannkuchen).",
      "Im Airfryer (leicht ölen!) bei 190°C ca. 8-10 Min backen, bis das Ei im Inneren GANZ durchgestockt und das Papier kross ist.",
      "In Ecken schneiden, mit Toast servieren."
    ],
    checks: "Balanced ✓ · Schwangerschaft ✓ (Eimasse komplett durchbacken)",
    swaps: "Reispapier ↔ Vollkorn-Tortillas",
    side: "Kaffee.",
    remind: true,
    riceCooker: { enabled: false },
  },
  {
    id: "mi-m",
    title: "Dan Dan Nudeln (Mild) 担担面",
    desc: "Sichuan-Klassiker: Weizennudeln in einer cremigen Sesam-Soja-Sauce mit gebratenem Hähnchenhack.",
    story: "Normalerweise schwimmt dieses Gericht in Chili-Öl. Wir fokussieren uns auf die reichhaltige Tahini-Sauce und nutzen mageres Hühnerhack für ein leichtes, grandioses Mittagessen.",
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
      "Hackfleisch und Knoblauch im Wok krümelig und KOMPLETT durchbraten.",
      "Tahini, Sojasauce und etwas warmes Nudelwasser zu einer dicken Sauce rühren.",
      "Nudeln und Pak Choi kochen.",
      "Nudeln in die Sauce geben, Hackfleisch darüber häufen, gut umrühren."
    ],
    checks: "Balanced ✓ · Schwangerschaft ✓ (Hähnchenhack komplett durchbraten!)",
    swaps: "Hähnchenhack ↔ Schweinehack",
    side: "-",
    remind: false,
    riceCooker: { enabled: false },
  },
  {
    id: "mi-a",
    title: "Gyudon-Style Rindfleisch-Reis 牛丼 (Reiskocher)",
    desc: "Hauchdünnes Rindfleisch und weiche Zwiebeln dämpfen direkt auf dem Reis.",
    story: "Ein japanischer Fast-Food-Klassiker, adaptiert für den Reiskocher. Das Fleisch bleibt zart, der Reis saugt die süß-salzige Marinade komplett auf.",
    target: "≈80 g KH (2 P.) · Protein ≈26 g p. P.",
    ingredients: [
      "Reis (roh) 120 g",
      "Rindfleisch (hauchdünne Hotpot-Scheiben) 150 g",
      "Zwiebel (in Ringen) 1 Stück",
      "Sojasauce 2 EL",
      "Mirin 1 EL",
      "Dashi oder Brühe 240 ml"
    ],
    steps: [
      "Reis und Brühe in den Topf geben. Soja und Mirin einrühren.",
      "Zwiebelringe und das Rindfleisch locker (!) darauf verteilen. Das Fleisch etwas auffächern, nicht klumpen.",
      "Start drücken. Danach alles gründlich durchmischen."
    ],
    checks: "Balanced ✓ · Schwangerschaft ✓ (Fleisch gart im Topf >80°C komplett durch) · Diabetes ✓",
    swaps: "Rindfleisch ↔ Schweinefleisch (dünn geschnitten)",
    side: "Eingelegter Ingwer.",
    remind: true,
    riceCooker: { enabled: true, program: "Mixed / White Rice", water: "Dashi (Standard)", notes: "Zwiebeln werden herrlich süß." },
  },

  // DONNERSTAG
  {
    id: "do-f",
    title: "Schwedischer Blaubeer-Grießbrei (Blåbärsgröt)",
    desc: "Cremiger Weichweizengrieß, lila gefärbt durch wilde Blaubeeren.",
    story: "Ein wunderschönes, wärmendes Frühstück. Die Beeren kochen direkt im Brei mit auf, was ihn unglaublich fruchtig und farbenfroh macht.",
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
    id: "do-m",
    title: "Viral Accordion Potatoes (Airfryer) 🥔",
    isViral: true,
    desc: "Kartoffeln, so eingeschnitten, dass sie sich wie eine Ziehharmonika aufziehen, gebacken im Airfryer.",
    story: "Ein unfassbar befriedigender Snack! Durch die spezielle Schnitttechnik wird die Kartoffel im Airfryer von allen Seiten gleichzeitig knusprig. Dazu ein proteinreicher Quark-Dip.",
    target: "≈75 g KH (2 P.) · Protein ≈18 g p. P.",
    ingredients: [
      "Kartoffeln (groß) 300 g",
      "Olivenöl 1 EL",
      "Paprikapulver & Knoblauchpulver",
      "Magerquark 150 g",
      "Kräuter (Schnittlauch/Petersilie)",
      "Holzspieße (als Schneidehilfe)"
    ],
    steps: [
      "Kartoffeln schälen und in dicke Rechtecke schneiden. Zwischen zwei Essstäbchen legen und horizontal einschneiden (die Stäbchen verhindern das Durchschneiden!). Wenden und diagonal einschneiden.",
      "Ziehharmonika-Kartoffeln auseinanderziehen, ölen und würzen.",
      "Im Airfryer bei 190°C ca. 15-20 Min extrem knusprig backen.",
      "Quark mit Kräutern anrühren und die Kartoffeln dippen."
    ],
    checks: "Balanced ✓ · Schwangerschaft ✓ · Diabetes ✓",
    swaps: "Kartoffeln ↔ Süßkartoffeln",
    side: "Ein grüner Beilagensalat.",
    remind: false,
    riceCooker: { enabled: false },
  },
  {
    id: "do-a",
    title: "Sekihan (Rote Bohnen Reis) 赤飯 (Reiskocher)",
    desc: "Japanischer Festtagsreis mit Adzukibohnen und zartem Schweinegeschnetzeltem.",
    story: "Sekihan wird in Japan zu Feiertagen gegessen. Die Bohnen färben den Reis leicht rötlich. Wir machen ein komplettes Gericht daraus, indem wir Schweinefleisch mitdämpfen.",
    target: "≈80 g KH (2 P.) · Protein ≈26 g p. P.",
    ingredients: [
      "Reis (roh) 120 g",
      "Adzukibohnen (Dose, gespült) 80 g",
      "Schweinegeschnetzeltes 150 g",
      "Sojasauce 2 EL",
      "Sesam (schwarz) 1 TL",
      "Gemüsebrühe 240 ml"
    ],
    steps: [
      "Fleisch kurz in Sojasauce wenden.",
      "Reis, Brühe, Bohnen und Fleisch in den Reiskocher füllen.",
      "Start drücken.",
      "Nach dem Kochen alles vorsichtig durchheben und mit schwarzem Sesam bestreuen."
    ],
    checks: "Balanced ✓ · Schwangerschaft ✓ (Fleisch dampft sicher durch) · Diabetes ✓",
    swaps: "Schweinefleisch ↔ Hähnchenbrust",
    side: "Ein Stück frische Gurke.",
    remind: true,
    riceCooker: { enabled: true, program: "Mixed / White Rice", water: "Brühe (Standard)", notes: "Bohnen drosseln den Blutzuckeranstieg." },
  },

  // FREITAG
  {
    id: "fr-f",
    title: "Savory Miso Oatmeal mit Spinat 味噌オートミール",
    desc: "Ein herzhafter Haferbrei, verfeinert mit Umami-Miso, Spinat und einem hartgekochten Ei.",
    story: "Wer Miso-Suppe liebt, wird dieses Oatmeal vergöttern. Es ist warm, wohlig und extrem schnell gemacht. Der Spinat fällt in der Restwärme herrlich zusammen.",
    target: "≈65 g KH (2 P.) · Protein ≈18 g p. P.",
    ingredients: [
      "Haferflocken 100 g",
      "Wasser oder Gemüsebrühe 400 ml",
      "Miso-Paste 1 EL",
      "Spinat (frisch) 50 g",
      "Eier (hartgekocht) 2 Stück"
    ],
    steps: [
      "Haferflocken in Brühe einköcheln.",
      "In der letzten Minute den Spinat unterheben, bis er zusammenfällt.",
      "Vom Herd nehmen! Miso-Paste einrühren (darf nicht mehr kochen).",
      "Mit halbierten, hartgekochten Eiern servieren."
    ],
    checks: "Balanced ✓ · Schwangerschaft ✓ (Eier hartgekocht)",
    swaps: "Spinat ↔ Frühlingszwiebeln",
    side: "Tee.",
    remind: true,
    riceCooker: { enabled: false },
  },
  {
    id: "fr-m",
    title: "Peanut-Butter Udon ピーナッツバターうどん",
    desc: "Dicke Udon-Nudeln in einer warmen, ultra-cremigen Erdnusssauce mit Hähnchen.",
    story: "Ein asiatischer Comfort-Food-Klassiker, der blitzschnell im Wok geht. Die Erdnussbutter emulgiert mit dem Nudelwasser zu einer Sauce, die jede Ramen-Bar neidisch macht.",
    target: "≈85 g KH (2 P.) · Protein ≈26 g p. P.",
    ingredients: [
      "Udon-Nudeln (vorgegart) 400 g",
      "Erdnussbutter (ungesüßt) 3 EL",
      "Sojasauce 2 EL",
      "Sesamöl 1 TL",
      "Hähnchenbrust (in Streifen) 150 g",
      "Spinat 100 g"
    ],
    steps: [
      "Hähnchen im Wok gut durchbraten.",
      "Erdnussbutter, Sojasauce und Sesamöl mit etwas heißem Wasser glatt rühren.",
      "Udon und Spinat zum Huhn geben, kurz anbraten.",
      "Sauce darüber gießen, schwenken bis alles cremig ist."
    ],
    checks: "Balanced ✓ · Schwangerschaft ✓ (Huhn durch) · Diabetes ✓",
    swaps: "Erdnussbutter ↔ Tahini",
    side: "-",
    remind: false,
    riceCooker: { enabled: false },
  },
  {
    id: "fr-a",
    title: "Lachs-Teriyaki Reis 鮭の照り焼きご飯 (Reiskocher)",
    desc: "Lachsfilet gart im Reiskocher über dem Reis, glasiert mit milder Teriyakisauce.",
    story: "Warum Fisch separat in der Pfanne braten, wenn der Reiskocher ihn butterweich dämpft? Der Saft zieht direkt in die Reiskörner ein. Ein absoluter Gamechanger.",
    target: "≈80 g KH (2 P.) · Protein ≈28 g p. P.",
    ingredients: [
      "Reis (roh) 120 g",
      "Lachsfilet 200 g",
      "Teriyaki-Sauce (mild) 3 EL",
      "Brokkoli-Röschen 100 g",
      "Wasser",
      "Sesam 1 TL"
    ],
    steps: [
      "Reis waschen und mit Wasser in den Reiskocher füllen.",
      "Lachs auf den Reis legen, mit Teriyaki-Sauce bepinseln.",
      "Start drücken. Brokkoli in den letzten 10 Min in den Dämpfaufsatz geben (oder roh auf den Lachs legen).",
      "Lachs zerteilen, alles mischen und mit Sesam toppen."
    ],
    checks: "Balanced ✓ · Schwangerschaft ✓ (Lachs gart im Dampf >80°C sicher durch)",
    swaps: "Lachs ↔ Kabeljau",
    side: "Brokkoli (aus dem Topf).",
    remind: true,
    riceCooker: { enabled: true, program: "Mixed / White Rice", water: "Standard", notes: "Lachs bleibt extrem saftig." },
  },

  // SAMSTAG
  {
    id: "sa-f",
    title: "Airfryer Baked Oats (Apfel-Zimt) 🍏",
    desc: "Wie ein kleiner Kuchen zum Frühstück. Haferflocken, Apfel und Zimt aus dem Airfryer.",
    story: "Ein riesiger Internet-Trend! Haferflocken werden mit etwas Milch und Backpulver vermischt und gebacken. Außen knusprig, innen wie ein warmer Muffin.",
    target: "≈65 g KH (2 P.) · Protein ≈18 g p. P.",
    ingredients: [
      "Haferflocken 100 g",
      "Milch 150 ml",
      "Apfel (gewürfelt) 1 Stück",
      "Eier 2 Stück",
      "Backpulver 1 TL",
      "Zimt 1 TL"
    ],
    steps: [
      "Alle Zutaten in einer Schüssel gut verrühren.",
      "In eine kleine, ofenfeste (bzw. airfryer-geeignete) Form füllen.",
      "Im Airfryer bei 170°C für ca. 12-15 Minuten backen, bis es aufgeht und durchgestockt ist."
    ],
    checks: "Balanced ✓ · Diabetes ✓ (Komplexe KH) · Schwangerschaft ✓ (Eier komplett durchgebacken)",
    swaps: "Apfel ↔ Banane",
    side: "Ein Klecks Naturjoghurt.",
    remind: true,
    riceCooker: { enabled: false },
  },
  {
    id: "sa-m",
    title: "Mildes Pad Krapow ผัดกะเพรา (Thai Basilikum Hähnchen)",
    desc: "Der thailändische Streetfood-König. Hähnchenhack gebraten mit viel Basilikum und Sojasauce.",
    story: "Im Original extrem scharf. Wir machen eine milde, familientaugliche Version. Das Hähnchenhack saugt die Sauce auf, der frische Basilikum gibt den genialen Kick.",
    target: "≈80 g KH (2 P.) · Protein ≈28 g p. P.",
    ingredients: [
      "Hähnchenhack 200 g",
      "Basilikum (frisch, am besten Thai-Basilikum) 1 große Handvoll",
      "Sojasauce 2 EL",
      "Austernsauce 1 EL",
      "Knoblauch 2 Zehen",
      "Reis (gekocht) 150 g"
    ],
    steps: [
      "Hähnchenhack mit Knoblauch im Wok krümelig und KOMPLETT durchbraten.",
      "Sojasauce und Austernsauce dazugeben, kurz einkochen lassen.",
      "Pfanne vom Herd nehmen, den frischen Basilikum unterheben, bis er zusammenfällt.",
      "Mit Reis servieren."
    ],
    checks: "Balanced ✓ · Schwangerschaft ✓ (Hack komplett durchgegart!)",
    swaps: "Hähnchenhack ↔ Schweinehack",
    side: "Ein komplett durchgebratenes Spiegelei on top.",
    remind: false,
    riceCooker: { enabled: false },
  },
  {
    id: "sa-a",
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
    swaps: "Schinken ↔ Räuchertofu",
    side: "Ein grüner Salat.",
    remind: true,
    riceCooker: { enabled: true, program: "White Rice", water: "Brühe (etwas weniger wg. Tomate)", notes: "Tomate am Ende gut vermantschen." },
  },

  // SONNTAG
  {
    id: "so-f",
    title: "Fluffiges Soufflé-Omelett 계란말이",
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
    title: "Airfryer Ćevapčići Bowl (Kroatien)",
    desc: "Balkan-Flair am Mittag: Fettarm gebackene Hackröllchen mit Ajvar und Nudeln.",
    story: "Cevapcici sind in Kroatien Kult. Im Airfryer werden sie rundum perfekt gebräunt, und das überschüssige Fett tropft ab. Mit Ajvar-Nudeln ein echter Genuss.",
    target: "≈85 g KH (2 P.) · Protein ≈28 g p. P.",
    ingredients: [
      "Rinderhack (mager, oder fertige Cevapcici) 200 g",
      "Knoblauchpulver, Paprika, Salz",
      "Nudeln (gekocht) 200 g",
      "Ajvar (mild) 3 EL",
      "Zwiebel (in feinen Ringen) 50 g"
    ],
    steps: [
      "Hackfleisch kräftig würzen und zu kleinen, länglichen Röllchen formen.",
      "Im Airfryer bei 190°C ca. 12 Minuten backen (komplett durchgaren!).",
      "Nudeln mit Ajvar in einer Pfanne kurz erwärmen.",
      "Nudeln in einer Bowl anrichten, Cevapcici darauflegen, mit Zwiebelringen toppen."
    ],
    checks: "Balanced ✓ · Schwangerschaft ✓ (Hackfleisch gut durchgaren!)",
    swaps: "Nudeln ↔ Reis",
    side: "-",
    remind: false,
    riceCooker: { enabled: false },
  },
  {
    id: "so-a",
    title: "Lu Rou Fan 卤肉饭 (Reiskocher)",
    desc: "Taiwanesischer Schweinebauch, butterweich im Reiskocher geschmort.",
    story: "Das absolute Soulfood Taiwans. Wir sparen uns den Topf auf dem Herd und lassen den Reiskocher die Magie vollbringen. Das Fleisch zerfällt auf der Zunge.",
    target: "≈85 g KH (2 P.) · Protein ≈25 g p. P.",
    ingredients: [
      "Reis (roh) 120 g",
      "Schweinebauch oder Schulter (gewürfelt) 200 g",
      "Sojasauce (dunkel & hell) 3 EL",
      "Sternanis 1 Stück",
      "Zucker 1 TL",
      "Pak Choi 100 g"
    ],
    steps: [
      "Schweinefleischwürfel kurz in kochendem Wasser blanchieren (reinigt das Fleisch).",
      "Reis und Wasser in den Reiskocher.",
      "Fleisch, Sojasauce, Zucker und Sternanis obendrauf geben.",
      "Starten. Pak Choi die letzten 5 Min dämpfen. Danach alles gut durchmischen (Sternanis entfernen!)."
    ],
    checks: "Balanced ✓ · Schwangerschaft ✓ (Fleisch wird >100°C gekocht) · Diabetes ✓",
    swaps: "Schweinebauch ↔ Rindergulasch",
    side: "Gedämpfter Pak Choi.",
    remind: true,
    riceCooker: { enabled: true, program: "Mixed / White Rice", water: "Standard", notes: "Verleiht dem Reis eine irre dunkle Farbe und Umami." },
  },
];

export default function Woche19DE() {
  return (
    <PlanTemplate
      meta={meta}
      data={DATA}
      dayNames={DAY_NAME_DE}
      uiTitles={UI_TITLES}
      subtitle="Thai & Kürbis-Kokos · Herzhafte Reisbowls · Balanced"
      heroChips={["Woche 19", "Virale Trends & Wohlfühlküche", "Täglich 1× 🍚 Reiskocher"]}
    />
  );
}

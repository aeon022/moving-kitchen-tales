/*
  Moving Kitchen Tales – Woche 8 (Start: 2026-02-16)
  Fokus: Virale Asia-Trends, Airfryer-Hacks & Reiskocher-Wunder.
  Inhalt: Balanced, Schwangerschaftssicher (alles durch, pasteurisiert), Diabetesfreundlich.
*/

import React from "react";
import PlanTemplate from "../PlanTemplate";

export const meta = {
  title: "Woche 8",
  startDate: "2026-02-16",
  id: "woche-8-2026-02-16",
  lang: "de",
  sidebar: "Woche 8 (2026-02-16)",
};

const DAY_NAME_DE = {
  mo: "Montag (2026-02-16)",
  di: "Dienstag (2026-02-17)",
  mi: "Mittwoch (2026-02-18)",
  do: "Donnerstag (2026-02-19)",
  fr: "Freitag (2026-02-20)",
  sa: "Samstag (2026-02-21)",
  so: "Sonntag (2026-02-22)",
};

const UI_TITLES = {
  main: "Rezepte Woche 8",
  list: "Einkaufsliste Woche 8",
};

export const DATA = [
  // MONTAG
  {
    id: "mo-f",
    title: "Cong You Bing 葱油饼 (Pfannen-Hack)",
    desc: "Schnelle Frühlingszwiebel-Pfannkuchen aus fertigem Teig, gebraten mit Spiegelei.",
    story: "Echte Cong You Bing zu kneten dauert Stunden. Unser Viral-Hack? Wir nehmen Tortilla-Wraps, bestreichen sie mit Zwiebel-Öl, falten sie und ab in die Pfanne! Dazu ein komplett durchgebratenes Ei.",
    target: "≈65 g KH (2 P.) · Protein ≈18 g p. P.",
    ingredients: [
      "Vollkorn-Tortillas (Wraps) 2 Stück",
      "Frühlingszwiebeln (gehackt) 30 g",
      "Eier 4 Stück",
      "Sesamöl 1 TL",
      "Sojasauce 1 EL"
    ],
    steps: [
      "Wraps mit Sesamöl bepinseln, Frühlingszwiebeln aufstreuen, in der Mitte falten.",
      "In einer Pfanne ohne Öl knusprig anrösten.",
      "Herausnehmen. Eier in der Pfanne komplett (!) durchbraten.",
      "Wraps aufschneiden, Eier hineinlegen, etwas Sojasauce dazu."
    ],
    checks: "Balanced ✓ · Schwangerschaft ✓ (Eier komplett durchgebraten) · Diabetes ✓",
    swaps: "Vollkorn-Tortillas ↔ Reispapier",
    side: "Eine Tasse Jasmintee.",
    remind: true,
    riceCooker: { enabled: false },
  },
  {
    id: "mo-m",
    title: "Viral Rice Paper Tteokbokki 라이스페이퍼 떡볶이",
    desc: "Chewy Reiskuchen-Ersatz aus aufgerolltem Reispapier in milder Gochujang-Sauce.",
    story: "Dieser TikTok-Trend ist genial: Wenn man nasses Reispapier eng aufrollt und in Stücke schneidet, hat man die perfekte, zähe Tteokbokki-Textur. Viel schneller und oft bekömmlicher!",
    target: "≈80 g KH (2 P.) · Protein ≈20 g p. P.",
    ingredients: [
      "Reispapier 10 Blatt",
      "Tofu (fest, gewürfelt) 200 g",
      "Karotten & Lauch (Streifen) 100 g",
      "Gochujang (milde Paste) 1 EL",
      "Sojasauce 1 EL",
      "Agavendicksaft 1 TL"
    ],
    steps: [
      "Reispapierblätter kurz in warmes Wasser tauchen, 2 Blätter übereinanderlegen und eng zu einer Zigarre aufrollen. In 4 cm Stücke schneiden.",
      "Tofu und Gemüse im Wok anbraten.",
      "Gochujang, Sojasauce, Agave und 100ml Wasser verrühren, in den Wok geben.",
      "Reispapier-Rollen 3 Min in der Sauce schwenken, bis sie weich sind."
    ],
    checks: "Balanced ✓ · Schwangerschaft ✓ (Kein rohes Fleisch/Fisch) · Diabetes ✓",
    swaps: "Tofu ↔ Hähnchenbrust",
    side: "Gurkensticks.",
    remind: false,
    riceCooker: { enabled: false },
  },
  {
    id: "mo-a",
    title: "Taro & Pork Rice 芋头烧肉饭 (Reiskocher)",
    desc: "Herzhafter Reis mit Taro-Wurzel und Schweinefleischwürfeln aus dem Reiskocher.",
    story: "Taro (Wasserbrotwurzel) schmilzt im Reiskocher fast wie eine süße Kartoffel und macht den Reis extrem cremig. Ein Klassiker der chinesischen Herbstküche.",
    target: "≈85 g KH (2 P.) · Protein ≈24 g p. P.",
    ingredients: [
      "Reis (roh) 80 g",
      "Taro-Wurzel (oder Süßkartoffel, gewürfelt) 100 g",
      "Schweinegulasch (fein gewürfelt) 150 g",
      "Sojasauce 2 EL",
      "Knoblauch 1 Zehe",
      "Gemüsebrühe 200 ml"
    ],
    steps: [
      "Schweinefleisch mit Sojasauce und Knoblauch marinieren.",
      "Reis, Brühe, Taro und Fleisch in den Reiskocher geben.",
      "Start drücken. Das Fett des Schweins und die Stärke des Taros erledigen den Rest.",
      "Gut umrühren und genießen."
    ],
    checks: "Balanced ✓ · Schwangerschaft ✓ (Fleisch wird sicher durchgedämpft) · Diabetes ✓",
    swaps: "Taro ↔ Süßkartoffel",
    side: "Gedämpfter Spinat.",
    remind: true,
    riceCooker: { enabled: true, program: "Mixed / White Rice", water: "Brühe (Standard)", notes: "Taro wird butterweich." },
  },

  // DIENSTAG
  {
    id: "di-f",
    title: "Schwarzer Sesam Congee 黑芝麻糊",
    desc: "Süßlicher, tiefschwarzer Reisbrei. Ein Schönheits-Geheimnis aus Asien.",
    story: "In China glaubt man, dass schwarzer Sesam gut für die Haare und die Seele ist. Dieser warme, leicht süßliche Brei schmeckt wie flüssiges Marzipan (nur besser).",
    target: "≈70 g KH (2 P.) · Protein ≈15 g p. P.",
    ingredients: [
      "Reis (roh) 60 g",
      "Schwarze Sesampaste (oder gemahlener schw. Sesam) 3 EL",
      "Milch (oder Hafermilch) 400 ml",
      "Wasser 200 ml",
      "Honig 1 EL",
      "Walnüsse 20 g"
    ],
    steps: [
      "Reis mit Wasser im Topf oder Reiskocher (Porridge-Modus) ca. 40 Min extrem weich kochen.",
      "Milch und Sesampaste einrühren, nochmals 5 Min köcheln.",
      "Mit Honig abschmecken und gehackten Walnüssen bestreuen."
    ],
    checks: "Balanced ✓ · Schwangerschaft ✓ · Diabetes ✓",
    swaps: "Sesam ↔ Erdnussmus",
    side: "Ein hartgekochtes Ei (für extra Protein).",
    remind: true,
    riceCooker: { enabled: false },
  },
  {
    id: "di-m",
    title: "Airfryer Enoki-Beef Rolls 肥牛金针菇",
    desc: "Hauchdünnes Rindfleisch, um Enoki-Pilze gewickelt und im Airfryer knusprig gebacken.",
    story: "Ein Izakaya-Klassiker, der im Airfryer idiotensicher gelingt. Die Pilze bleiben saftig, das Rindfleisch wird kross.",
    target: "≈65 g KH (2 P.) · Protein ≈28 g p. P.",
    ingredients: [
      "Rindfleisch (hauchdünne Hotpot-Scheiben) 200 g",
      "Enoki-Pilze 1 Packung (150g)",
      "Teriyaki-Sauce (oder Soja+Honig) 3 EL",
      "Reis (gekocht) 150 g",
      "Frühlingszwiebel 10 g"
    ],
    steps: [
      "Enoki-Pilze unten abschneiden, in kleine Bündel teilen.",
      "Jedes Bündel straff mit einer Rindfleischscheibe umwickeln.",
      "Rollen mit Teriyaki bepinseln. Im Airfryer bei 190°C ca. 8-10 Min backen (bis das Fleisch komplett durch ist!).",
      "Mit Reis servieren."
    ],
    checks: "Balanced ✓ · Schwangerschaft ✓ (Fleisch MUSS durch sein, Pilze garen im Inneren)",
    swaps: "Enoki ↔ Spargelspitzen; Rind ↔ Schweinebauch-Scheiben",
    side: "Krautsalat.",
    remind: false,
    riceCooker: { enabled: false },
  },
  {
    id: "di-a",
    title: "Rice Cooker Mac & Cheese (Asia Viral)",
    desc: "Makkaroni, Milch und Käse... aus dem Reiskocher? Ja, das klappt!",
    story: "Ein verrückter Trend aus Studenten-WGs in Asien. Der Reiskocher kocht die Nudeln direkt in der Milch, wodurch die Stärke eine bombastische Sauce bindet.",
    target: "≈85 g KH (2 P.) · Protein ≈22 g p. P.",
    ingredients: [
      "Makkaroni (kurze Nudeln) 120 g",
      "Milch 300 ml",
      "Gemüsebrühe 100 ml",
      "Cheddar oder Gouda (pasteurisiert, gerieben) 80 g",
      "Brokkoli-Röschen 100 g"
    ],
    steps: [
      "Nudeln, Milch und Brühe in den Reiskocher. Starten.",
      "Sobald es kocht, den Deckel ab und zu öffnen und umrühren (Vorsicht: Milch schäumt!).",
      "Nach 10 Min Brokkoli dazugeben. Wenn die Nudeln al dente sind, Reiskocher ausschalten.",
      "Käse unterrühren, bis er schmilzt."
    ],
    checks: "Balanced ✓ · Schwangerschaft ✓ (Käse aus pasteurisierter Milch!) · Diabetes ✓",
    swaps: "Makkaroni ↔ Vollkorn-Penne",
    side: "Eine Handvoll Kirschtomaten.",
    remind: true,
    riceCooker: { enabled: true, program: "White Rice / Quick", water: "Milchgemisch", notes: "Aufsicht beim Kochen: Milch kocht schnell über." },
  },

  // MITTWOCH
  {
    id: "mi-f",
    title: "HK Macaroni Soup 通粉汤",
    desc: "Cha Chaan Teng Klassiker: Nudelsuppe zum Frühstück mit Kochschinken und Ei.",
    story: "In Hongkong frühstückt man gerne westlich-chinesische Fusion. Makkaroni in Hühnerbrühe mit Schinken und einem Spiegelei klingen schräg, sind aber unglaublich beruhigend.",
    target: "≈75 g KH (2 P.) · Protein ≈22 g p. P.",
    ingredients: [
      "Hörnchennudeln 100 g",
      "Hühnerbrühe 600 ml",
      "Kochschinken (gewürfelt) 60 g",
      "Eier 2 Stück",
      "Mais (TK) 50 g"
    ],
    steps: [
      "Brühe aufkochen, Nudeln und Mais darin garen.",
      "Schinkenwürfel dazugeben und kurz mitziehen lassen.",
      "Eier in einer Pfanne separat als Spiegelei (komplett durchbraten!) zubereiten.",
      "Suppe in Schalen füllen, Ei oben drauflegen."
    ],
    checks: "Balanced ✓ · Schwangerschaft ✓ (Ei komplett durchgebraten, Schinken erhitzt)",
    swaps: "Kochschinken ↔ Putenbrust-Aufschnitt",
    side: "Warmer Zitronen-Tee.",
    remind: true,
    riceCooker: { enabled: false },
  },
  {
    id: "mi-m",
    title: "Liangpi (Cold Skin Noodles) Hack 凉皮",
    desc: "Erfrischende, breite Nudeln in einer Sesam-Knoblauch-Sauce mit Gurke.",
    story: "Traditionelles Liangpi ist super aufwendig. Wir faken es mit breiten Reisbandnudeln oder Glasnudeln. Perfekt für einen leichten Mittag.",
    target: "≈85 g KH (2 P.) · Protein ≈18 g p. P.",
    ingredients: [
      "Breite Reisnudeln (oder dicke Glasnudeln) 150 g",
      "Gurke (in Streifen) 150 g",
      "Tofu (gebacken oder gebraten) 100 g",
      "Tahini (Sesampaste) 2 EL",
      "Sojasauce 1 EL",
      "Reisessig 1 EL",
      "Knoblauch 1 Zehe"
    ],
    steps: [
      "Nudeln nach Packung kochen und eiskalt abschrecken.",
      "Tahini, Soja, Essig, Knoblauch und 2 EL warmes Wasser zu einer glatten Sauce rühren.",
      "Nudeln mit Gurkenstreifen und Tofu anrichten.",
      "Sauce darüber gießen und gut vermengen."
    ],
    checks: "Balanced ✓ · Schwangerschaft ✓ · Diabetes ✓",
    swaps: "Tahini ↔ Erdnussbutter",
    side: "-",
    remind: false,
    riceCooker: { enabled: false },
  },
  {
    id: "mi-a",
    title: "Mogu Ji 蘑菇鸡 (Reiskocher)",
    desc: "Einfaches Hühnchen mit braunen Champignons und Reis, alles in einem Topf.",
    story: "Wenn du abends nur noch 5 Minuten Energie hast. Alles in den Topf werfen, Knopf drücken, duschen gehen, Essen ist fertig.",
    target: "≈80 g KH (2 P.) · Protein ≈30 g p. P.",
    ingredients: [
      "Reis (roh) 120 g",
      "Hähnchenbrust 200 g",
      "Braune Champignons (geviertelt) 150 g",
      "Sojasauce 2 EL",
      "Austernsauce 1 EL",
      "Gemüsebrühe 200 ml"
    ],
    steps: [
      "Huhn in Würfel schneiden, mit Austernsauce und Sojasauce mischen.",
      "Reis und Brühe in den Reiskocher.",
      "Huhn und Pilze darauf verteilen.",
      "Kochen lassen. Am Ende gut durchrühren."
    ],
    checks: "Balanced ✓ · Schwangerschaft ✓ (Huhn gart sicher mit)",
    swaps: "Hähnchen ↔ Rindfleisch-Streifen",
    side: "Ein Schälchen Kimchi (mild).",
    remind: true,
    riceCooker: { enabled: true, program: "White Rice", water: "Brühe (Standard)", notes: "Pilze schrumpfen stark zusammen." },
  },

  // DONNERSTAG
  {
    id: "do-f",
    title: "Matcha-Haferflocken 抹茶オートミール",
    desc: "Gesunder Haferbrei, verfeinert mit Antioxidantien aus grünem Matcha-Tee.",
    story: "Die cremige Basis der Haferflocken bändigt die leichte Bitterkeit des Matchas perfekt. Sieht toll aus und gibt sanfte Energie.",
    target: "≈65 g KH (2 P.) · Protein ≈18 g p. P.",
    ingredients: [
      "Haferflocken 100 g",
      "Sojamilch 400 ml",
      "Matcha-Pulver 1 TL",
      "Agavendicksaft 1 EL",
      "Mandeln (gehackt) 30 g",
      "Beeren (frisch oder TK aufgetaut) 50 g"
    ],
    steps: [
      "Matcha in einem Schuss warmem Wasser klümpchenfrei auflösen.",
      "Haferflocken in Sojamilch aufkochen, bis es cremig wird.",
      "Matcha und Agavendicksaft einrühren.",
      "Mit Nüssen und Beeren toppen."
    ],
    checks: "Balanced ✓ · Schwangerschaft ✓ (Koffein im Matcha ist moderat, völlig im Rahmen)",
    swaps: "Matcha ↔ Kakaopulver",
    side: "-",
    remind: true,
    riceCooker: { enabled: false },
  },
  {
    id: "do-m",
    title: "Airfryer Bang Bang Chicken (Mild) 棒棒鸡",
    desc: "Knusprige Hähnchenstücke aus dem Airfryer mit einer milden Sesam-Mayo-Sauce.",
    story: "Der Name kommt eigentlich vom Geräusch des Klopfens ('Bang Bang'), mit dem das Fleisch zart gemacht wird. Wir nehmen den Airfryer für den Crunch.",
    target: "≈80 g KH (2 P.) · Protein ≈35 g p. P.",
    ingredients: [
      "Hähnchenbrust 250 g",
      "Panko 40 g",
      "Ei 1 Stück",
      "Mayonnaise (pasteurisiert) 2 EL",
      "Süße Chilisauce (mild!) 1 EL",
      "Reis (gekocht) 150 g"
    ],
    steps: [
      "Hähnchen würfeln, in Ei und Panko wenden.",
      "Im Airfryer bei 190°C ca. 12-15 Min goldbraun backen (komplett durchgaren!).",
      "Mayo und süße Chilisauce mischen.",
      "Hähnchen auf Reis anrichten, Sauce darüber träufeln."
    ],
    checks: "Balanced ✓ · Schwangerschaft ✓ (Huhn durch, Mayo aus Tube = pasteurisiert)",
    swaps: "Hähnchen ↔ Blumenkohl-Röschen (Vegan Bang Bang)",
    side: "Gurkensalat.",
    remind: false,
    riceCooker: { enabled: false },
  },
  {
    id: "do-a",
    title: "Ginger-Fish Rice 姜汁鱼饭 (Reiskocher)",
    desc: "Magerer Weißfisch dämpft mit viel Ingwer direkt auf dem Reis.",
    story: "Ingwer neutralisiert jeden Fischgeruch und wärmt den Magen. Der Reis saugt den wunderbaren, leichten Fischfond auf.",
    target: "≈80 g KH (2 P.) · Protein ≈28 g p. P.",
    ingredients: [
      "Reis (roh) 120 g",
      "Kabeljau oder Seelachs (TK aufgetaut) 200 g",
      "Ingwer (sehr feine Streifen) 15 g",
      "Sojasauce 2 EL",
      "Frühlingszwiebel 10 g",
      "Gemüsebrühe 240 ml"
    ],
    steps: [
      "Reis und Brühe in den Topf.",
      "Fischfilet darauflegen, dick mit Ingwerstreifen belegen.",
      "Reiskocher starten.",
      "Nach dem Kochen Sojasauce über den heißen Fisch träufeln, Frühlingszwiebeln dazu, Fisch leicht zerteilen."
    ],
    checks: "Balanced ✓ · Schwangerschaft ✓ (Weißfisch ist quecksilberarm und dämpft sicher durch) · Diabetes ✓",
    swaps: "Kabeljau ↔ Lachsfilet",
    side: "Gedämpfter Spinat.",
    remind: true,
    riceCooker: { enabled: true, program: "White Rice", water: "Brühe", notes: "Fisch gibt viel Flüssigkeit ab." },
  },

  // FREITAG
  {
    id: "fr-f",
    title: "Viral Onigirazu (Sushi-Sandwich)",
    desc: "Ein zusammengeklapptes Nori-Blatt gefüllt mit Reis, Thunfisch-Mayo und Spiegelei.",
    story: "Man muss keine Sushi-Rollen rollen können! Das Sandwich-Prinzip macht Onigirazu zum perfekten, kleckerfreien Frühstück (oder Bento).",
    target: "≈75 g KH (2 P.) · Protein ≈22 g p. P.",
    ingredients: [
      "Reis (gekocht, klebrig) 150 g",
      "Nori-Blätter 2 Stück",
      "Thunfisch (Dose) 100 g",
      "Mayonnaise (pasteurisiert) 1 EL",
      "Eier 2 Stück"
    ],
    steps: [
      "Eier als flache Omeletts komplett durchbraten.",
      "Thunfisch abtropfen und mit Mayo mischen.",
      "Nori-Blatt auf Frischhaltefolie legen. In die Mitte: Reis, Thunfisch, Ei, Reis.",
      "Die 4 Ecken des Nori-Blatts wie einen Briefumschlag zur Mitte falten. Fest einwickeln und halbieren."
    ],
    checks: "Balanced ✓ · Schwangerschaft ✓ (Eier durch, Dosenthunfisch in Maßen ok, Jod/Nori in Maßen) · Diabetes ✓",
    swaps: "Thunfisch ↔ Gebratene Tofu-Scheibe",
    side: "Ein paar Edamame.",
    remind: true,
    riceCooker: { enabled: false },
  },
  {
    id: "fr-m",
    title: "Moo Shu Pork 木须肉 (Wok)",
    desc: "Nordchinesischer Klassiker: Schweinefleisch-Streifen, Ei und Mu-Err-Pilze.",
    story: "Eigentlich wird das Gericht in kleine Pfannkuchen gewickelt gegessen. Wir servieren es Low-Effort einfach über einer Portion Reis.",
    target: "≈85 g KH (2 P.) · Protein ≈26 g p. P.",
    ingredients: [
      "Schweineschnitzel (feine Streifen) 150 g",
      "Eier 2 Stück",
      "Mu-Err Pilze (getrocknet) 10 g",
      "Karotte & Gurke (Streifen) 100 g",
      "Sojasauce 2 EL",
      "Reis (gekocht) 150 g"
    ],
    steps: [
      "Pilze 10 Min in heißem Wasser einweichen, dann schneiden.",
      "Eier im Wok stocken lassen, herausnehmen.",
      "Schweinefleisch anbraten (gut durch!), Gemüse und Pilze dazu.",
      "Sojasauce und Eier zurück in den Wok, schwenken."
    ],
    checks: "Balanced ✓ · Schwangerschaft ✓ (Schwein und Ei komplett durch)",
    swaps: "Schwein ↔ Hähnchen",
    side: "Reis.",
    remind: false,
    riceCooker: { enabled: false },
  },
  {
    id: "fr-a",
    title: "Pai Gu Fan 排骨饭 (Reiskocher)",
    desc: "Schweinerippchen (oder Geschnetzeltes) in schwarzer Bohnensauce über Reis gedämpft.",
    story: "In Dim Sum Restaurants dämpft man Ribs oft in kleinen Körben. Hier landet der ganze Fleischsaft direkt im Reis. Magie!",
    target: "≈80 g KH (2 P.) · Protein ≈24 g p. P.",
    ingredients: [
      "Reis (roh) 120 g",
      "Schweinegulasch (klein geschnitten) 200 g",
      "Schwarze Bohnensauce (Black Bean Garlic) 1 EL",
      "Sojasauce 1 EL",
      "Wasser",
      "Frühlingszwiebel 10 g"
    ],
    steps: [
      "Fleisch mit Bohnenpaste und Sojasauce marinieren.",
      "Reis und Wasser in den Reiskocher.",
      "Das marinierte Fleisch oben auflegen.",
      "Kochen. Danach mit Frühlingszwiebeln gut durchmischen."
    ],
    checks: "Balanced ✓ · Schwangerschaft ✓ (Fleisch wird durchgedämpft)",
    swaps: "Schweinefleisch ↔ Putenbrust",
    side: "Gedämpfter Chinakohl.",
    remind: true,
    riceCooker: { enabled: true, program: "Mixed / White Rice", water: "Standard", notes: "Bohnenpaste ist salzig, nicht zu viel Sojasauce nehmen." },
  },

  // SAMSTAG
  {
    id: "sa-f",
    title: "Gyeran Mari 계란말이 (Koreanisches Roll-Omelett)",
    desc: "Vielschichtiges, koreanisches Omelett mit fein gehacktem Gemüse.",
    story: "Ein Meisterwerk der Pfannentechnik. Das Ei wird schichtweise gebraten und immer wieder aufgerollt. Übung macht den Meister!",
    target: "≈60 g KH (2 P.) · Protein ≈22 g p. P.",
    ingredients: [
      "Eier 5 Stück",
      "Karotte (extrem fein gehackt) 20 g",
      "Frühlingszwiebel (sehr fein) 10 g",
      "Salz 1 Prise",
      "Reis (gekocht) 100 g"
    ],
    steps: [
      "Eier mit Gemüse und Salz verquirlen.",
      "Eine dünne Schicht in die Pfanne geben, stocken lassen, aufrollen (in der Pfanne lassen).",
      "Nächste Schicht an die Rolle gießen, stocken lassen, weiter aufrollen.",
      "Vorgang wiederholen. WICHTIG: Am Ende bei schwacher Hitze mit Deckel durchziehen lassen, damit es innen nicht flüssig bleibt!"
    ],
    checks: "Balanced ✓ · Schwangerschaft ✓ (Rolle muss komplett durchgaren!)",
    swaps: "Gemüse ↔ Nori-Blatt mit einrollen",
    side: "Reis und Sojasauce zum Dippen.",
    remind: true,
    riceCooker: { enabled: false },
  },
  {
    id: "sa-m",
    title: "Airfryer Crispy Tofu mit Teriyaki",
    desc: "Superknusprige Tofuwürfel dank Airfryer, glasiert in Teriyaki-Sauce.",
    story: "Tofu wird im Ofen oft trocken. Im Airfryer (vorher in Stärke gewendet) bekommt er eine Kruste, die jeder Fast-Food-Kette Konkurrenz macht.",
    target: "≈85 g KH (2 P.) · Protein ≈20 g p. P.",
    ingredients: [
      "Fester Tofu 250 g",
      "Maisstärke 2 EL",
      "Teriyaki-Sauce 3 EL",
      "Sesam 1 TL",
      "Vollkornreis (gekocht) 150 g",
      "Brokkoli 100 g"
    ],
    steps: [
      "Tofu würfeln, gut abtupfen und in Maisstärke wälzen.",
      "Im Airfryer bei 200°C ca. 12-15 Min backen, bis er aufpoppt und knusprig ist.",
      "Teriyaki-Sauce in der Pfanne leicht erwärmen, Tofu kurz darin schwenken.",
      "Mit Reis, Sesam und gedämpftem Brokkoli servieren."
    ],
    checks: "Balanced ✓ · Diabetes ✓ (Vollkornreis & Tofu)",
    swaps: "Teriyaki ↔ Süß-Sauer Sauce",
    side: "-",
    remind: false,
    riceCooker: { enabled: false },
  },
  {
    id: "sa-a",
    title: "Asia-Paella (Reiskocher)",
    desc: "Reiskocher-Paella mit Kurkuma, Meeresfrüchten und Erbsen.",
    story: "Wer braucht schon eine große spanische Paella-Pfanne? Wir färben den Reis mit etwas Kurkuma (gesund!) und garen alles schonend im Reiskocher.",
    target: "≈80 g KH (2 P.) · Protein ≈26 g p. P.",
    ingredients: [
      "Reis (roh) 120 g",
      "Meeresfrüchte-Mix (TK, aufgetaut) 200 g",
      "Kurkuma (Pulver) 1/2 TL",
      "Erbsen (TK) 50 g",
      "Hühnerbrühe 240 ml",
      "Knoblauch 1 Zehe"
    ],
    steps: [
      "Reis, Brühe, Kurkuma und zerdrückten Knoblauch in den Reiskocher.",
      "Aufgetaute Meeresfrüchte und Erbsen obendrauf geben.",
      "Start drücken.",
      "Wenn fertig, alles gut durchmischen (Kurkuma verteilt sich gelb)."
    ],
    checks: "Balanced ✓ · Schwangerschaft ✓ (Meeresfrüchte garen im Dampf >75°C sicher durch)",
    swaps: "Meeresfrüchte ↔ Hähnchenwürfel",
    side: "Ein Spritzer frische Zitrone.",
    remind: true,
    riceCooker: { enabled: true, program: "Mixed / White Rice", water: "Brühe (Standard)", notes: "Mix vorher auftauen und abtropfen lassen." },
  },

  // SONNTAG
  {
    id: "so-f",
    title: "Mango Sago Hafer-Bowl 杨枝甘露",
    desc: "Angelehnt an das berühmte Hongkong-Dessert, hier als gesundes Haferflocken-Frühstück.",
    story: "Mango Pomelo Sago ist der König der asiatischen Desserts. Wir wandeln es in ein Frühstück um: Haferflocken in Kokosmilch, frische Mango und etwas Grapefruit.",
    target: "≈75 g KH (2 P.) · Protein ≈12 g p. P.",
    ingredients: [
      "Haferflocken 80 g",
      "Kokosmilch (fettreduziert) 200 ml",
      "Wasser 100 ml",
      "Mango (reif, gewürfelt) 1 Stück",
      "Pomelo oder Grapefruit (ein paar Stückchen)",
      "Agavendicksaft 1 TL"
    ],
    steps: [
      "Haferflocken mit Kokosmilch und Wasser aufkochen.",
      "In Schalen füllen.",
      "Mit reichlich Mango-Würfeln und ein paar gezupften Grapefruit/Pomelo-Stücken toppen."
    ],
    checks: "Balanced ✓ · Schwangerschaft ✓",
    swaps: "Pomelo ↔ Mandarinen-Stücke",
    side: "Schwarzer Tee.",
    remind: true,
    riceCooker: { enabled: false },
  },
  {
    id: "so-m",
    title: "Japchae 잡채 (Koreanische Glasnudeln)",
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
    checks: "Balanced ✓ · Schwangerschaft ✓ (Fleisch durch) · Diabetes ✓",
    swaps: "Rind ↔ Pilze (Shiitake)",
    side: "-",
    remind: false,
    riceCooker: { enabled: false },
  },
  {
    id: "so-a",
    title: "Ganze Zwiebel Reis (Viral Trend)",
    desc: "Eine geschälte, eingeschnittene Zwiebel kocht im Reis butterweich.",
    story: "Ein weiterer wilder Internet-Trend: Eine ganze Zwiebel (oben kreuzweise eingeschnitten) schmilzt im Reiskocher dahin. Die Süße der Zwiebel zieht komplett in den Reis. Unglaublich!",
    target: "≈80 g KH (2 P.) · Protein ≈18 g p. P. (mit Käse)",
    ingredients: [
      "Reis (roh) 120 g",
      "Zwiebel (mittlere Größe, geschält) 1 Stück",
      "Brühwürfel 1/2 Stück",
      "Butter 15 g",
      "Wasser",
      "Käse (Gouda, pasteurisiert) 40 g"
    ],
    steps: [
      "Reis in den Topf. Zwiebel schälen, oben tief kreuzweise einschneiden (nicht ganz durchschneiden) und in die Mitte setzen.",
      "Brühwürfel ins Wasser bröseln, dazugießen.",
      "Kochen. Danach die butterweiche Zwiebel zerdrücken, Butter und Käse unterrühren."
    ],
    checks: "Balanced ✓ · Schwangerschaft ✓ (Käse pasteurisiert) · Diabetes ✓",
    swaps: "Zwiebel ↔ Tomate",
    side: "Dazu ein paar kalte Hähnchenbrust-Streifen.",
    remind: true,
    riceCooker: { enabled: true, program: "White Rice", water: "Standard", notes: "Zwiebel wird extrem süß und weich." },
  },
];

export default function Woche8DE() {
  return (
    <PlanTemplate
      meta={meta}
      data={DATA}
      dayNames={DAY_NAME_DE}
      uiTitles={UI_TITLES}
      subtitle="Airfryer-Hacks · Virale Trends · Balanced · Schwangerschaftssicher"
      heroChips={["Woche 8", "Virale Trends & Airfryer Hacks", "Täglich 1× 🍚 Reiskocher"]}
    />
  );
}

/*
  Moving Kitchen Tales – Woche 3 (Start: 2026-01-12)
  Vorlage: Woche 2 – identisches Layout/Verhalten.
  Fokus: JP/CN, schwangerschaftssicher (T1), viele Fisch/Meeresfrüchte.
  Reiskocher: täglich 1× (inkl. Trend-Gerichte am Ende als Übersicht).
*/

import React from "react";
import PlanTemplate from "../PlanTemplate";

export const meta = {
  title: "Woche 3",
  startDate: "2026-01-12",
  id: "woche-3-2026-01-12",
  lang: "de",
  sidebar: "Woche 3 (2026-01-12)",
};

const DAY_NAME_DE = {
  mo: "Montag (2026-01-12)",
  di: "Dienstag (2026-01-13)",
  mi: "Mittwoch (2026-01-14)",
  do: "Donnerstag (2026-01-15)",
  fr: "Freitag (2026-01-16)",
  sa: "Samstag (2026-01-17)",
  so: "Sonntag (2026-01-18)",
};

const UI_TITLES = {
  main: "Rezepte Woche 3",
  list: "Einkaufsliste Woche 3",
};

export const DATA = [
  // MONTAG
  {
    id: "mo-f",
    title: "Lachs-Okayu 鮭お粥 (japanischer Reisbrei)",
    desc: "Sehr mildes Frühstück: Reisbrei mit zarten Lachsflocken und Ingwer.",
    story: "Okayu ist Japans sanfter Magenwärmer; perfekt im Winter. Lachs liefert Omega-3.",
    target: "≈70 g KH (2 P.) · Protein ≈25 g p. P.",
    ingredients: [
      "Reis (roh) 80 g",
      "Wasser 800 ml",
      "Lachsfilet 180 g",
      "Ingwer 8 g",
      "Frühlingszwiebel 10 g",
      "Sojasauce natriumarm 5 ml"
    ],
    steps: [
      "Reis waschen. Lachs in grobe Stücke schneiden.",
      "Alles außer Frühlingszwiebel in den Reiskocher geben.",
      "Programm 'Porridge/Congee' starten (ca. 45–60 Min).",
      "Lachs zerzupfen, mit Frühlingszwiebeln servieren."
    ],
    checks: "Gastritis – mild · Diabetes ✓ – ≈70 g KH · Schwangerschaft ✓ Lachs komplett gegart",
    swaps: "Lachs ↔ Kabeljau; Ingwer ↔ Karotte",
    side: "Warmes Wasser oder milden Grüntee.",
    remind: true,
    riceCooker: { enabled: true, program: "Porridge / Congee", water: "1:9–1:10", notes: "Sehr weich & bekömmlich." },
  },
  {
    id: "mo-m",
    title: "Teriyaki-Kabeljau 丼 (鱈照り焼き丼)",
    desc: "Sanft glasierter Kabeljau auf Reis, salzarm.",
    story: "Teriyaki ist ein japanischer Klassiker; hier mit natriumarmer Sojasauce.",
    target: "≈78 g KH (2 P.) · Protein ≈22 g p. P.",
    ingredients: [
      "Reis (roh) 120 g",
      "Kabeljaufilet 220 g",
      "Sojasauce natriumarm 15 ml",
      "Mirin 5 ml",
      "Ingwer 5 g",
      "Frühlingszwiebel 10 g"
    ],
    steps: [
      "Reis kochen.",
      "Fisch anbraten, Teriyaki (Soja+Mirin+Ingwer+etwas Wasser) zugeben.",
      "Glasieren (5–6 Min), auf Reis anrichten, Zwiebel darüber."
    ],
    checks: "Gastritis – mild · Diabetes ✓ – ≈78 g KH · Schwangerschaft ✓ Fisch durch",
    swaps: "Kabeljau ↔ Seelachs",
    side: "Gurkenscheiben, mild eingelegt.",
    remind: false,
    riceCooker: { enabled: false },
  },
  {
    id: "mo-a",
    title: "Xiā Chǎo Fàn 虾炒饭 (milde Garnelen-Reispfanne)",
    desc: "Schonend gebratener Reis mit Garnelen und Pak Choi.",
    story: "Chinesische Hausmannskost – mit wenig Öl und viel Gemüse.",
    target: "≈72 g KH (2 P.) · Protein ≈24 g p. P.",
    ingredients: [
      "Reis (roh) 100 g",
      "Garnelen (geschält) 180 g",
      "Pak Choi 200 g",
      "Karotte 80 g",
      "Sojasauce natriumarm 10 ml",
      "Sesamöl 5 ml"
    ],
    steps: [
      "Reis vorkochen und abkühlen lassen.",
      "Garnelen in Pfanne garen (3–4 Min), herausnehmen.",
      "Gemüse dünsten, Reis und Soja zugeben, Garnelen unterheben."
    ],
    checks: "Gastritis – mild · Diabetes ✓ – ≈72 g KH · Schwangerschaft ✓ Garnelen durchgegart",
    swaps: "Pak Choi ↔ Zucchini",
    side: "Milder Jasmintee.",
    remind: true,
    riceCooker: { enabled: false },
  },

  // DIENSTAG
  {
    id: "di-f",
    title: "Sake-Jiru 鮭汁 (Miso-Lachs-Suppe, mild)",
    desc: "Wärmende Misosuppe mit Lachs, Tofu und Gemüse.",
    story: "Nordjapanisch inspiriert; kräftig, aber magenfreundlich zubereitet.",
    target: "≈60 g KH (2 P.) · Protein ≈23 g p. P.",
    ingredients: [
      "Dashi 600 ml",
      "Miso-Paste 20 g",
      "Lachsfilet 160 g",
      "Tofu 150 g",
      "Karotte 80 g",
      "Frühlingszwiebel 10 g"
    ],
    steps: [
      "Dashi erhitzen, Karotte 5 Min sieden.",
      "Lachs und Tofu zugeben, 6–8 Min leise köcheln (durch).",
      "Miso einrühren (nicht kochen), abbiegen, Zwiebel drauf."
    ],
    checks: "Gastritis – mild · Diabetes ✓ – ≈60 g KH · Schwangerschaft ✓",
    swaps: "Lachs ↔ Weißer Fisch",
    side: "Kleine Portion Reis (inkludiert in KH).",
    remind: true,
    riceCooker: { enabled: false },
  },
  {
    id: "di-m",
    title: "Knoblauch-Butter-Garnelen-Reis (ライスクッカー)",
    desc: "Trend: Alles in den Reiskocher – Reis, Garnelen, Knoblauch, mild gewürzt.",
    story: "Beliebtes Netz-One-Pot; schnell, proteinreich und familienfreundlich.",
    target: "≈80 g KH (2 P.) · Protein ≈28 g p. P.",
    ingredients: [
      "Reis (roh) 120 g",
      "Garnelen (geschält) 200 g",
      "Knoblauch 6 g",
      "Sojasauce natriumarm 10 ml",
      "Butter 15 g",
      "Gemüsebrühe 250 ml"
    ],
    steps: [
      "Reis waschen, mit Brühe und Soja in den Topf.",
      "Knoblauch fein hacken, Butter in Stücken dazu.",
      "Garnelen obenauf legen. Programm 'White Rice/Mixed' starten.",
      "Nach Ende mischen und 2 Min nachdämpfen."
    ],
    checks: "Gastritis – mild · Diabetes ✓ – ≈80 g KH · Schwangerschaft ✓ Garnelen durch",
    swaps: "Garnelen ↔ Tofu + Erbsen",
    side: "Gedämpfter Brokkoli.",
    remind: false,
    riceCooker: { enabled: true, program: "White Rice / Mixed", water: "Brühe bis Markierung", notes: "Dump-&-Go Variante." },
  },
  {
    id: "di-a",
    title: "Qīngdùn Yú 清炖鱼 (sanfte Fischsuppe)",
    desc: "Klar gekochter Weißfisch mit Ingwer & Gemüse, sehr leicht.",
    story: "Chinesische Schonkost – ideal am Abend.",
    target: "≈62 g KH (2 P.) · Protein ≈22 g p. P.",
    ingredients: [
      "Weißer Fisch 260 g",
      "Ingwer 8 g",
      "Pak Choi 200 g",
      "Karotte 80 g",
      "Gemüsebrühe 700 ml",
      "Reis (roh) 80 g"
    ],
    steps: [
      "Brühe aufsetzen, Ingwer & Karotte 8 Min sieden.",
      "Fischstücke 6–8 Min leise gar ziehen lassen.",
      "Pak Choi zugeben, kurz garen. Mit Reis servieren."
    ],
    checks: "Gastritis – mild · Diabetes ✓ – ≈62 g KH · Schwangerschaft ✓ Fisch durch",
    swaps: "Pak Choi ↔ Spinat",
    side: "Reis separat kochen.",
    remind: true,
    riceCooker: { enabled: false },
  },

  // MITTWOCH
  {
    id: "mi-f",
    title: "Reiskocher-Pancake 炊飯器パンケーキ (mild)",
    desc: "Fluffiger Frühstücks-„Kuchen“ aus dem Reiskocher, wenig Zucker.",
    story: "Beliebter Netz-Trend; Eier komplett durchgegart.",
    target: "≈75 g KH (2 P.) · Protein ≈14 g p. P.",
    ingredients: [
      "Mehl 120 g",
      "Backpulver 1 TL",
      "Eier 2 Stück",
      "Milch 120 ml",
      "Honig 12 g",
      "Öl 5 ml"
    ],
    steps: [
      "Teig rühren, Topf leicht ölen.",
      "Teig in den Reiskocher, Programm 'Cake/Steam' 25–30 Min.",
      "Stäbchenprobe, 5 Min ruhen, stürzen."
    ],
    checks: "Gastritis – mild · Diabetes ⚠︎ – ≈75 g KH · Schwangerschaft ✓ Eier fest",
    swaps: "Mehl ↔ Dinkelmehl; Honig ↔ wenig Zucker",
    side: "Ungezuckerter Naturjoghurt.",
    remind: true,
    riceCooker: { enabled: true, program: "Cake / Steam", water: "Bei Steam Wasser lt. Markierung", notes: "Ei vollständig stocken lassen." },
  },
  {
    id: "mi-m",
    title: "Ebi-Soba 海老蕎麦 (Garnelen mit Buchweizennudeln)",
    desc: "Soba mit kurz gegarten Garnelen & Gemüse, leicht.",
    story: "Japanischer Alltagsklassiker – soba hat einen moderaten GI.",
    target: "≈82 g KH (2 P.) · Protein ≈22 g p. P.",
    ingredients: [
      "Soba (trocken) 120 g",
      "Garnelen (geschält) 160 g",
      "Zucchini 120 g",
      "Karotte 80 g",
      "Sojasauce natriumarm 15 ml",
      "Sesamöl 5 ml"
    ],
    steps: [
      "Soba kochen, abspülen.",
      "Gemüse kurz dünsten, Garnelen 3–4 Min garen.",
      "Mit Soba und Soja/Sesamöl vermengen."
    ],
    checks: "Gastritis – mild · Diabetes ✓ – ≈82 g KH · Schwangerschaft ✓",
    swaps: "Garnelen ↔ Tofu; Soba ↔ Udon",
    side: "Einfacher Gurkensalat.",
    remind: false,
    riceCooker: { enabled: false },
  },
  {
    id: "mi-a",
    title: "Gedämpfte Miesmuscheln 清蒸青口 (mit Ingwer)",
    desc: "Miesmuscheln behutsam gedämpft, klarer Sud.",
    story: "Chinesisch inspiriert; Muscheln stets gut durchgaren.",
    target: "≈60 g KH (2 P.) · Protein ≈24 g p. P.",
    ingredients: [
      "Miesmuscheln 600 g",
      "Ingwer 10 g",
      "Knoblauch 1 Zehe",
      "Frühlingszwiebel 10 g",
      "Gemüsebrühe 300 ml",
      "Reis (roh) 80 g"
    ],
    steps: [
      "Muscheln waschen, offene aussortieren.",
      "Brühe mit Ingwer aufkochen, Muscheln 5–7 Min dämpfen (alle geöffnet).",
      "Mit Reis servieren, Sud übergießen."
    ],
    checks: "Gastritis – mild · Diabetes ✓ – ≈60 g KH · Schwangerschaft ✓ Muscheln voll durch",
    swaps: "Miesmuscheln ↔ Venusmuscheln",
    side: "Gedünsteter Spinat.",
    remind: true,
    riceCooker: { enabled: false },
  },

  // DONNERSTAG
  {
    id: "do-f",
    title: "Kabeljau-Congee 鱈魚粥 (mild)",
    desc: "Sanfter Reisbrei mit Kabeljau und Karotte.",
    story: "Canton-Style Congee, ideal bei empfindlichem Magen.",
    target: "≈68 g KH (2 P.) · Protein ≈22 g p. P.",
    ingredients: [
      "Reis (roh) 80 g",
      "Wasser 800 ml",
      "Kabeljaufilet 180 g",
      "Karotte 80 g",
      "Ingwer 6 g",
      "Sojasauce natriumarm 5 ml"
    ],
    steps: [
      "Reis waschen, mit Wasser aufsetzen (Topf, 45–60 Min leise kochen).",
      "Karotte und Ingwer zugeben, 10 Min mitköcheln.",
      "Fisch einlegen, 6–8 Min gar ziehen lassen, mild würzen."
    ],
    checks: "Gastritis – mild · Diabetes ✓ – ≈68 g KH · Schwangerschaft ✓",
    swaps: "Kabeljau ↔ Seelachs",
    side: "Lauwarmer Grüntee.",
    remind: true,
    riceCooker: { enabled: false },
  },
  {
    id: "do-m",
    title: "Udon mit Lachs & Spinat 鮭うどん",
    desc: "Klare Brühe mit Udon, Lachswürfeln und Spinat.",
    story: "Schlicht, sättigend, mit omega-3-reichem Fisch.",
    target: "≈86 g KH (2 P.) · Protein ≈24 g p. P.",
    ingredients: [
      "Udon (vorgegart) 400 g",
      "Lachsfilet 180 g",
      "Dashi 700 ml",
      "Sojasauce natriumarm 10 ml",
      "Spinat 120 g",
      "Frühlingszwiebel 10 g"
    ],
    steps: [
      "Dashi aufkochen, Soja zugeben.",
      "Udon 2–3 Min erwärmen, Lachs 4–5 Min gar ziehen lassen.",
      "Spinat kurz unterheben, servieren."
    ],
    checks: "Gastritis – mild · Diabetes ✓ – ≈86 g KH · Schwangerschaft ✓ Lachs durch",
    swaps: "Lachs ↔ Kabeljau",
    side: "Radieschen-Pickles (mild).",
    remind: false,
    riceCooker: { enabled: false },
  },
  {
    id: "do-a",
    title: "Hotate Shōyu-Butter Gohan ホタテ醤油バターご飯",
    desc: "Reiskocher-Reis mit Jakobsmuscheln, Soja & Butter – sanft, aromatisch.",
    story: "Beliebt online: dump-and-go Jakobsmuschel-Reis.",
    target: "≈82 g KH (2 P.) · Protein ≈26 g p. P.",
    ingredients: [
      "Reis (roh) 120 g",
      "Jakobsmuscheln 220 g",
      "Dashi 240 ml",
      "Sojasauce natriumarm 12 ml",
      "Butter 12 g",
      "Ingwer 5 g"
    ],
    steps: [
      "Reis waschen, mit Dashi/Soja in Topf.",
      "Jakobsmuscheln & Ingwer obenauf, Butter in Flöckchen.",
      "Programm 'Mixed/White Rice' starten, 10 Min ruhen, mischen."
    ],
    checks: "Gastritis – mild · Diabetes ✓ – ≈82 g KH · Schwangerschaft ✓ Muscheln durch",
    swaps: "Jakobsmuscheln ↔ Garnelen",
    side: "Blanchierter Pak Choi.",
    remind: true,
    riceCooker: { enabled: true, program: "Mixed / White Rice", water: "Dashi bis Markierung", notes: "Nicht umrühren vor dem Garen." },
  },

  // FREITAG
  {
    id: "fr-f",
    title: "Lachs-Ochazuke 茶漬け (mit Dashi)",
    desc: "Warmer Reis mit heißer Dashi übergossen und Lachsflocken.",
    story: "Japanisches Komfortgericht – leicht & beruhigend.",
    target: "≈66 g KH (2 P.) · Protein ≈22 g p. P.",
    ingredients: [
      "Reis (roh) 90 g",
      "Dashi 500 ml",
      "Lachsfilet 150 g",
      "Frühlingszwiebel 10 g",
      "Sojasauce natriumarm 5 ml",
      "Sesam 6 g"
    ],
    steps: [
      "Reis kochen. Lachs garen und zerzupfen.",
      "Reis in Schalen, Lachs darauf.",
      "Mit heißer Dashi übergießen, mild würzen."
    ],
    checks: "Gastritis – mild · Diabetes ✓ – ≈66 g KH · Schwangerschaft ✓",
    swaps: "Lachs ↔ Weißer Fisch; Dashi ↔ Gemüsebrühe",
    side: "Eingelegte Gurke (mild).",
    remind: true,
    riceCooker: { enabled: false },
  },
  {
    id: "fr-m",
    title: "Kaisen Takikomi Gohan 海鮮炊き込みご飯",
    desc: "Gemischter Reis aus dem Reiskocher mit weißem Fisch, Garnelen und Pilzen.",
    story: "Beliebter Herbst/Winter-Reis – hier als schonendes One-Pot-Gericht.",
    target: "≈84 g KH (2 P.) · Protein ≈24 g p. P.",
    ingredients: [
      "Reis (roh) 120 g",
      "Weißer Fisch (Würfel) 120 g",
      "Garnelen (geschält) 120 g",
      "Shiitake 50 g",
      "Sojasauce natriumarm 15 ml",
      "Dashi 240 ml"
    ],
    steps: [
      "Reis waschen, mit Dashi und Sojasauce in den Topf.",
      "Fisch-/Garnelenstücke und Shiitake obenauf legen.",
      "Programm 'Mixed/White Rice' starten. Nach Ende 10 Min ruhen, dann locker unterheben."
    ],
    checks: "Gastritis – mild · Diabetes ✓ – ≈84 g KH · Schwangerschaft ✓ Fisch/Meeresfrüchte durch",
    swaps: "Weißer Fisch ↔ Lachs; Shiitake ↔ Champignons",
    side: "Miso-Suppe (mild).",
    remind: false,
    riceCooker: { enabled: true, program: "Mixed / White Rice", water: "Dashi bis Markierung (inkl. Soja)", notes: "Nicht vorzeitig öffnen." },
  },
  {
    id: "fr-a",
    title: "Yosenabe 鍋 (Meeresfrüchte-Hotpot)",
    desc: "Leichter Eintopf mit Kabeljau, Garnelen, Tofu & Gemüse.",
    story: "Winterlicher Klassiker – alles sanft gegart am Tisch.",
    target: "≈72 g KH (2 P.) · Protein ≈26 g p. P.",
    ingredients: [
      "Weißer Fisch 200 g",
      "Garnelen (geschält) 160 g",
      "Tofu 200 g",
      "Chinakohl 250 g",
      "Dashi 800 ml",
      "Reis (roh) 90 g"
    ],
    steps: [
      "Dashi erhitzen, Kohl 5–7 Min garen.",
      "Fisch, Garnelen, Tofu zugeben, 6–8 Min ziehen lassen.",
      "Mit Reis servieren."
    ],
    checks: "Gastritis – mild · Diabetes ✓ – ≈72 g KH · Schwangerschaft ✓",
    swaps: "Weißer Fisch ↔ Lachs",
    side: "Grüner Tee.",
    remind: true,
    riceCooker: { enabled: false },
  },

  // SAMSTAG
  {
    id: "sa-f",
    title: "Tuna-Onigiri ツナマヨおにぎり (pasteurisiert)",
    desc: "Reisbälle mit Thunfisch-Joghurt/Mayomix (pasteurisiert), mild.",
    story: "Bento-Liebling; Jod über Nori nur sparsam.",
    target: "≈70 g KH (2 P.) · Protein ≈18 g p. P.",
    ingredients: [
      "Reis (roh) 100 g",
      "Thunfisch (Dose, abgetropft) 120 g",
      "Joghurt oder Mayo (pasteur.) 20 g",
      "Reisessig 8 ml",
      "Sesam 6 g",
      "Nori 2 g"
    ],
    steps: [
      "Reis kochen, lauwarm mit wenig Essig mischen.",
      "Thunfisch mit Joghurt/Mayo verrühren.",
      "Bälle formen, Füllung einarbeiten, Nori sparsam."
    ],
    checks: "Gastritis – mild · Diabetes ✓ – ≈70 g KH · Schwangerschaft ✓ (pasteurisiert)",
    swaps: "Thunfisch ↔ Lachsflocken",
    side: "Gemüsesticks.",
    remind: true,
    riceCooker: { enabled: false },
  },
  {
    id: "sa-m",
    title: "Teriyaki-Lachs 丼 (mild, salzarm)",
    desc: "Zarter Lachs mit leichter Teriyaki-Glasur auf Reis.",
    story: "Schnelles Mittag – japanische Hausküche.",
    target: "≈86 g KH (2 P.) · Protein ≈24 g p. P.",
    ingredients: [
      "Reis (roh) 120 g",
      "Lachsfilet 220 g",
      "Sojasauce natriumarm 12 ml",
      "Mirin 6 ml",
      "Ingwer 5 g",
      "Frühlingszwiebel 10 g"
    ],
    steps: [
      "Reis kochen.",
      "Lachs in Pfanne garen, Glasur zugeben und kurz sirupartig reduzieren.",
      "Auf Reis anrichten, Zwiebel darüber."
    ],
    checks: "Gastritis – mild · Diabetes ✓ – ≈86 g KH · Schwangerschaft ✓",
    swaps: "Lachs ↔ Weißer Fisch",
    side: "Gedämpfter Brokkoli.",
    remind: false,
    riceCooker: { enabled: false },
  },
  {
    id: "sa-a",
    title: "Mais-Butter-Shōyu-Gohan とうもろこしご飯",
    desc: "Trendiges Mais-Reis-Gericht aus dem Reiskocher – süßlich & mild.",
    story: "Japanischer Sommerklassiker, online beliebt; buttrig und sanft.",
    target: "≈84 g KH (2 P.) · Protein ≈12 g p. P.",
    ingredients: [
      "Reis (roh) 120 g",
      "Mais & Erbsen (TK) 160 g",
      "Dashi 240 ml",
      "Sojasauce natriumarm 10 ml",
      "Butter 12 g",
      "Frühlingszwiebel 10 g"
    ],
    steps: [
      "Reis waschen, mit Dashi/Soja in den Topf.",
      "Mais/Erbsen und Butter obenauf.",
      "Programm 'White Rice/Mixed' starten, danach mischen und Zwiebel zugeben."
    ],
    checks: "Gastritis – mild · Diabetes ✓ – ≈84 g KH · Schwangerschaft ✓",
    swaps: "Mais ↔ Karottenwürfel",
    side: "Gegrillter Kabeljau (separat).",
    remind: true,
    riceCooker: { enabled: true, program: "White Rice / Mixed", water: "Flüssigkeit bis Markierung", notes: "Sehr beliebt in Socials." },
  },

  // SONNTAG
  {
    id: "so-f",
    title: "Tamagoyaki-Sando 卵サンド (Ei-Sandwich, gut gestockt)",
    desc: "Japanisches Ei-Sandwich mit vollständig gestocktem Ei & Vollkornbrot.",
    story: "Café-Klassiker; hier mild und schwangerschaftssicher.",
    target: "≈68 g KH (2 P.) · Protein ≈20 g p. P.",
    ingredients: [
      "Eier 4 Stück",
      "Milch 40 ml",
      "Vollkornbrot 4 Scheiben",
      "Sojasauce natriumarm 5 ml",
      "Frühlingszwiebel 8 g",
      "Öl 5 ml"
    ],
    steps: [
      "Eier mit Milch/Soja verquirlen.",
      "In Pfanne langsam zu dickem Omelett braten (innen fest).",
      "Zwischen Brot geben, halbieren."
    ],
    checks: "Gastritis – mild · Diabetes ✓ – ≈68 g KH · Schwangerschaft ✓ Ei fest",
    swaps: "Vollkornbrot ↔ Reis",
    side: "Tomatenscheiben.",
    remind: true,
    riceCooker: { enabled: false },
  },
  {
    id: "so-m",
    title: "Milder Mapo-Tofu 麻婆豆腐 (mit Lachs statt Schwein)",
    desc: "Sanfte Mapo-Variante mit Lachsflocken und Miso statt scharfer Paste.",
    story: "Sichuan-Klassiker, hier ent-schärft & fischreich.",
    target: "≈74 g KH (2 P.) · Protein ≈24 g p. P.",
    ingredients: [
      "Tofu (weich) 300 g",
      "Lachsfilet 180 g",
      "Miso-Paste 20 g",
      "Gemüsebrühe 200 ml",
      "Stärke 1 TL",
      "Reis (roh) 100 g"
    ],
    steps: [
      "Lachs garziehen, zerpflücken.",
      "Miso mit Brühe erhitzen, Tofu in Würfeln 5 Min simmern.",
      "Lachs zugeben, mit Stärke leicht binden, mit Reis servieren."
    ],
    checks: "Gastritis – mild · Diabetes ✓ – ≈74 g KH · Schwangerschaft ✓",
    swaps: "Lachs ↔ Weißer Fisch; Tofu ↔ fester Tofu",
    side: "Gedünsteter Pak Choi.",
    remind: false,
    riceCooker: { enabled: false },
  },
  {
    id: "so-a",
    title: "Viral Whole Tomato Rice 整个番茄饭 (2.0, mit Garnelen)",
    desc: "Die ganze Tomate kocht im Reiskocher mit – plus Garnelen für Protein.",
    story: "Netz-Hit: simpel, saftig, perfekt für faule Sonntage.",
    target: "≈86 g KH (2 P.) · Protein ≈22 g p. P.",
    ingredients: [
      "Reis (roh) 120 g",
      "Tomate (groß) 1 Stück",
      "Garnelen (geschält) 160 g",
      "Olivenöl 10 ml",
      "Sojasauce natriumarm 10 ml",
      "Mais & Erbsen (TK) 80 g"
    ],
    steps: [
      "Reis & Wasser (oder milde Brühe) in den Topf, Soja/Öl zugeben.",
      "Tomate mittig platzieren, Garnelen & Gemüse außen herum.",
      "Programm 'White Rice' starten. Danach Tomate zerdrücken, alles mischen."
    ],
    checks: "Gastritis – mild · Diabetes ✓ – ≈86 g KH · Schwangerschaft ✓ Garnelen durch",
    swaps: "Garnelen ↔ Pilze; Olivenöl ↔ Sesamöl (wenig)",
    side: "Spiegelei (gut durch) optional.",
    remind: true,
    riceCooker: { enabled: true, program: "White Rice", water: "Etwas unter Normal (Tomatenwasser zählt)", notes: "Tomate sehr reif verwenden." },
  },
];

export default function Woche3DE() {
  return (
    <PlanTemplate
      meta={meta}
      data={DATA}
      dayNames={DAY_NAME_DE}
      uiTitles={UI_TITLES}
      subtitle="JP/CN · mild & schwangerschaftssicher · viel Fisch/Meeresfrüchte · 1× Reiskocher/Tag"
      heroChips={["Woche 3", "JP/CN · Mild · Schwangerschaft", "Täglich 1× 🍚 Reiskocher"]}
    />
  );
}

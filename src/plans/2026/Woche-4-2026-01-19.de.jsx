/*
  Moving Kitchen Tales – Woche 4 (Start: 2026-01-19)
  Design: Identisch zu Woche 3.
  Fix: Header-Bild (Gradient) repariert.
  Inhalt: CN/JP/KR, schwangerschaftsgeeignet, Reiskocher-Fokus.
*/

import React from "react";
import PlanTemplate from "../PlanTemplate";

export const meta = {
  title: "Woche 4",
  startDate: "2026-01-19",
  id: "woche-4-2026-01-19",
  lang: "de",
  sidebar: "Woche 4 (2026-01-19)",
};

const DAY_NAME_DE = {
  mo: "Montag (2026-01-19)",
  di: "Dienstag (2026-01-20)",
  mi: "Mittwoch (2026-01-21)",
  do: "Donnerstag (2026-01-22)",
  fr: "Freitag (2026-01-23)",
  sa: "Samstag (2026-01-24)",
  so: "Sonntag (2026-01-25)",
};

const UI_TITLES = {
  main: "Rezepte Woche 4",
  list: "Einkaufsliste Woche 4",
};

export const DATA = [
  // MONTAG
  {
    id: "mo-f",
    title: "Tofu-Spinat-Zōsui 豆腐ほうれん草雑炊 (Reisbrei)",
    desc: "Japanischer Frühstücks-Reisbrei mit Tofu & Spinat – sehr mild, warm & ballaststoffreich.",
    story: "Zōsui ist ein leichter japanischer Reisbrei nach Suppenart – ideal für kalte Morgen.",
    target: "≈70 g KH (2 P.) · Protein ≈22 g p. P.",
    ingredients: [
      "Reis (roh) 80 g",
      "Dashi 700 ml",
      "Tofu (fest) 180 g",
      "Spinat 120 g",
      "Sojasauce natriumarm 6 ml",
      "Ingwer 6 g"
    ],
    steps: [
      "Reis waschen, mit Dashi 35–40 Min leise sieden (Topf) oder Reiskocher Porridge.",
      "Tofu würfeln, Spinat grob schneiden, 5 Min vor Schluss zugeben.",
      "Mild mit Sojasauce abschmecken, heiß servieren."
    ],
    checks: "Gastritis – mild · Diabetes ✓ – ≈70 g KH · Schwangerschaft ✓ (alles durchgegart)",
    swaps: "Spinat ↔ Pak Choi; Dashi ↔ Gemüsebrühe",
    side: "Jasmintee oder warmes Wasser.",
    remind: true,
    riceCooker: { enabled: true, program: "Porridge / Congee", water: "1:9–1:10", notes: "Sehr weich kochen." },
  },
  {
    id: "mo-m",
    title: "Bulgogi-Lachs Bowl 불고기 연어덮밥",
    desc: "Zarter Lachs in milder Bulgogi-Marinade auf Reis, mit Gurke & Sesam.",
    story: "Koreanisch inspiriertes Schnellgericht – würzig-süß, aber sanft.",
    target: "≈84 g KH (2 P.) · Protein ≈24 g p. P.",
    ingredients: [
      "Reis (roh) 120 g",
      "Lachsfilet 220 g",
      "Sojasauce natriumarm 12 ml",
      "Birne (gerieben) 40 g",
      "Knoblauch (fein) 4 g",
      "Sesam 6 g",
      "Gurke 120 g"
    ],
    steps: [
      "Reis kochen (Topf/Reiskocher).",
      "Lachs in Soja/Birne/Knoblauch 10 Min marinieren, dann 5–6 Min sanft anbraten bis durch.",
      "Auf Reis anrichten, Gurke und Sesam darüber."
    ],
    checks: "Gastritis – moderat würzen · Diabetes ✓ – ≈84 g KH · Schwangerschaft ✓ Lachs durch",
    swaps: "Lachs ↔ Kabeljau; Birne ↔ Apfel",
    side: "Pak‑Choi-Dämpfgemüse.",
    remind: false,
    riceCooker: { enabled: false },
  },
  {
    id: "mo-a",
    title: "Gedämpftes Hähnchen mit Shiitake 清蒸香菇鸡",
    desc: "Canton-style: saftig gedämpftes Hähnchen mit Shiitake, Ingwersud, dazu Reis.",
    story: "Ein sanfter Klassiker aus der südchinesischen Küche – leicht, aromatisch.",
    target: "≈76 g KH (2 P.) · Protein ≈30 g p. P.",
    ingredients: [
      "Reis (roh) 110 g",
      "Hähnchenbrust 300 g",
      "Shiitake 80 g",
      "Ingwer 8 g",
      "Sojasauce natriumarm 8 ml",
      "Frühlingszwiebel 10 g"
    ],
    steps: [
      "Reis kochen. Hähnchen in Streifen, Shiitake in Scheiben schneiden.",
      "Alles in flacher Schale mit Ingwer/Soja 12–14 Min dämpfen (gar).",
      "Mit Frühlingszwiebel bestreuen, Sud über den Reis geben."
    ],
    checks: "Gastritis – mild · Diabetes ✓ – ≈76 g KH · Schwangerschaft ✓ Geflügel durch",
    swaps: "Hähnchen ↔ Tofu + Pilze",
    side: "Gedünsteter Babyspinat.",
    remind: true,
    riceCooker: { enabled: false },
  },

  // DIENSTAG
  {
    id: "di-f",
    title: "Gyeran-Bap Rühr-Ei-Reisschale 계란밥 (fest)",
    desc: "Koreanisches Komfortfrühstück – Reis mit vollständig gestocktem Rührei.",
    story: "Berühmtes Netz‑Frühstück; Ei hier komplett durchgegart.",
    target: "≈72 g KH (2 P.) · Protein ≈20 g p. P.",
    ingredients: [
      "Reis (roh) 100 g",
      "Eier 3 Stück",
      "Sesamöl 5 ml",
      "Sojasauce natriumarm 6 ml",
      "Nori 1 g",
      "Frühlingszwiebel 8 g"
    ],
    steps: [
      "Reis kochen. Eier verquirlen und in Pfanne zu fester Rührei‑Textur braten.",
      "Reis in Schalen, Ei darüber, mit Soja und Sesamöl mild würzen.",
      "Nori und Zwiebel darüber."
    ],
    checks: "Gastritis – mild · Diabetes ✓ – ≈72 g KH · Schwangerschaft ✓ Ei fest",
    swaps: "Nori ↔ Sesam",
    side: "Miso‑Suppe (mild).",
    remind: true,
    riceCooker: { enabled: false },
  },
  {
    id: "di-m",
    title: "Soba mit Pilzen & Hähnchen きのこ蕎麦",
    desc: "Wärmende Buchweizennudeln mit Shiitake, Hähnchen und milder Soja‑Brühe.",
    story: "Alltagsküche aus Japan – nussige Soba, leicht verdaulich.",
    target: "≈82 g KH (2 P.) · Protein ≈24 g p. P.",
    ingredients: [
      "Soba (trocken) 120 g",
      "Hähnchenbrust 220 g",
      "Shiitake 80 g",
      "Dashi 700 ml",
      "Sojasauce natriumarm 12 ml",
      "Frühlingszwiebel 10 g"
    ],
    steps: [
      "Soba kochen, kalt abspülen.",
      "Dashi mit Soja erhitzen, Hähnchen 6–7 Min gar ziehen lassen, Pilze 3 Min.",
      "Soba in Brühe geben, Zwiebel darüber."
    ],
    checks: "Gastritis – mild · Diabetes ✓ – ≈82 g KH · Schwangerschaft ✓ Geflügel durch",
    swaps: "Hähnchen ↔ Tofu; Soba ↔ Udon",
    side: "Gurkensalat (mild).",
    remind: false,
    riceCooker: { enabled: false },
  },
  {
    id: "di-a",
    title: "Reiskocher-Claypot‑Style Chicken 煲仔饭风味",
    desc: "Hähnchen, Shiitake & Reis gemeinsam im Reiskocher – knusprige Ränder light.",
    story: "Hongkong‑Inspiration in alltagstauglich: Dump‑and‑Go im Reiskocher.",
    target: "≈84 g KH (2 P.) · Protein ≈28 g p. P.",
    ingredients: [
      "Reis (roh) 120 g",
      "Hähnchenschenkel (o. Knochen) 260 g",
      "Shiitake 60 g",
      "Sojasauce natriumarm 14 ml",
      "Ingwer 6 g",
      "Frühlingszwiebel 10 g"
    ],
    steps: [
      "Reis waschen, mit Wasser in den Topf.",
      "Fleischwürfel mit Soja/Ingwer mischen, zusammen mit Shiitake obenauf geben.",
      "Programm 'Mixed/White Rice' starten, 10 Min ruhen, auflockern."
    ],
    checks: "Gastritis – mild · Diabetes ✓ – ≈84 g KH · Schwangerschaft ✓ Geflügel durch",
    swaps: "Hähnchen ↔ fester Tofu",
    side: "Gedämpfter Brokkoli.",
    remind: true,
    riceCooker: { enabled: true, program: "Mixed / White Rice", water: "bis Markierung (inkl. Soja)", notes: "Nicht vorzeitig öffnen." },
  },

  // MITTWOCH
  {
    id: "mi-f",
    title: "Lachs-Onigiri & Miso-Suppe 鮭おにぎり",
    desc: "Reisbälle mit gegartem Lachs, dazu milde Miso‑Suppe – Bento‑Frühstück.",
    story: "Japanischer Klassiker – praktisch & sättigend.",
    target: "≈70 g KH (2 P.) · Protein ≈20 g p. P.",
    ingredients: [
      "Reis (roh) 100 g",
      "Lachsfilet 160 g",
      "Miso-Paste 18 g",
      "Dashi 500 ml",
      "Sesam 6 g",
      "Nori 1 g"
    ],
    steps: [
      "Reis kochen; Lachs schonend garen und zerpflücken.",
      "Onigiri formen, mit Lachs füllen, Nori sparsam anlegen.",
      "Miso in heißem Dashi lösen (nicht kochen) und servieren."
    ],
    checks: "Gastritis – mild · Diabetes ✓ – ≈70 g KH · Schwangerschaft ✓ (Lachs durch)",
    swaps: "Lachs ↔ Thunfisch (Dose)",
    side: "Gurkenscheiben.",
    remind: true,
    riceCooker: { enabled: false },
  },
  {
    id: "mi-m",
    title: "Jajangmyeon (mild) 자장면",
    desc: "Weiche Weizennudeln mit milder schwarzer Bohnen‑Sauce, viel Gemüse & Tofu.",
    story: "Koreanisch‑chinesische Nudelhaus‑Ikone – hier sanft gewürzt.",
    target: "≈88 g KH (2 P.) · Protein ≈22 g p. P.",
    ingredients: [
      "Weizennudeln (trocken) 130 g",
      "Schwarze Bohnenpaste 35 g",
      "Tofu (fest) 220 g",
      "Zucchini 120 g",
      "Zwiebel 80 g",
      "Gemüsebrühe 250 ml"
    ],
    steps: [
      "Nudeln kochen.",
      "Tofu & Gemüse dünsten, Paste kurz mitrösten, Brühe angießen.",
      "3–4 Min leise köcheln, mit den Nudeln mischen."
    ],
    checks: "Gastritis – moderat (Zwiebel gut gegart) · Diabetes ✓ – ≈88 g KH · Schwangerschaft ✓",
    swaps: "Weizennudeln ↔ Udon; Tofu ↔ Hähnchen",
    side: "Blanchierter Pak Choi.",
    remind: false,
    riceCooker: { enabled: false },
  },
  {
    id: "mi-a",
    title: "Gochujang‑Butter‑Lachs (Reiskocher, viral)",
    desc: "Milde Gochujang‑Butter mit Lachs im Reiskocher – cremig, umami.",
    story: "Ein Social‑Media‑Liebling – mit dezenter Schärfe.",
    target: "≈82 g KH (2 P.) · Protein ≈26 g p. P.",
    ingredients: [
      "Reis (roh) 120 g",
      "Lachsfilet 220 g",
      "Gochujang 10 g",
      "Butter 12 g",
      "Sojasauce natriumarm 10 ml",
      "Dashi 240 ml"
    ],
    steps: [
      "Reis waschen, mit Dashi/Soja in den Topf.",
      "Lachswürfel, Gochujang und Butter obenauf verteilen.",
      "Programm 'Mixed/White Rice' starten, danach grob vermengen."
    ],
    checks: "Gastritis – ⚠︎ leichte Schärfe · Diabetes ✓ – ≈82 g KH · Schwangerschaft ✓ Lachs durch",
    swaps: "Gochujang ↔ Miso (milder); Lachs ↔ Weißfisch",
    side: "Gurkensalat (ohne Chili).",
    remind: true,
    riceCooker: { enabled: true, program: "Mixed / White Rice", water: "Dashi bis Markierung", notes: "Chili separat servieren möglich." },
  },

  // DONNERSTAG
  {
    id: "do-f",
    title: "Rote‑Bohnen‑Congee 红豆粥 (mild)",
    desc: "Süßlich‑nussiger Frühstücksbrei aus Reis & Adzuki – sanft, warm.",
    story: "Beliebt in China im Winter – gut sättigend und mild.",
    target: "≈76 g KH (2 P.) · Protein ≈18 g p. P.",
    ingredients: [
      "Reis (roh) 90 g",
      "Adzuki (vorgegart) 150 g",
      "Wasser 900 ml",
      "Ingwer 4 g",
      "Honig 10 g",
      "Prise Salz 1 Prise"
    ],
    steps: [
      "Reis waschen, mit Wasser im Reiskocher (Porridge) 60–70 Min.",
      "Adzuki und Ingwer die letzten 15 Min zugeben.",
      "Leicht süßen und servieren."
    ],
    checks: "Gastritis – mild · Diabetes ✓ – ≈76 g KH · Schwangerschaft ✓",
    swaps: "Honig ↔ Dattelsirup; Adzuki ↔ Kidneybohnen",
    side: "Grüner Tee mild.",
    remind: true,
    riceCooker: { enabled: true, program: "Porridge / Congee", water: "1:9–1:10", notes: "Bohnen vorgegart verwenden." },
  },
  {
    id: "do-m",
    title: "Oyakodon 親子丼 (Ei fest)",
    desc: "Hähnchen‑Ei‑Reisschale – hier mit komplett gestocktem Ei und salzarmer Würzung.",
    story: "Hausmannskost aus Japan – simpel & tröstlich.",
    target: "≈86 g KH (2 P.) · Protein ≈26 g p. P.",
    ingredients: [
      "Reis (roh) 120 g",
      "Hähnchenbrust 240 g",
      "Eier 3 Stück",
      "Dashi 250 ml",
      "Sojasauce natriumarm 10 ml",
      "Zwiebel 80 g"
    ],
    steps: [
      "Reis kochen. Zwiebel in Dashi/Soja 5 Min köcheln.",
      "Hähnchenstücke 6–7 Min gar ziehen lassen.",
      "Eier eingießen und komplett stocken lassen, auf Reis geben."
    ],
    checks: "Gastritis – moderat · Diabetes ✓ – ≈86 g KH · Schwangerschaft ✓ Ei fest, Geflügel durch",
    swaps: "Hähnchen ↔ Tofu",
    side: "Blanchierter Spinat.",
    remind: false,
    riceCooker: { enabled: false },
  },
  {
    id: "do-a",
    title: "Doenjang‑Tofu‑Eintopf 된장찌개 (mild)",
    desc: "Sanfter Sojabohnenpasten‑Eintopf mit Tofu, Gemüse & Garnelen, dazu Reis.",
    story: "Koreanischer Klassiker, hier dezent und ohne Schärfe.",
    target: "≈72 g KH (2 P.) · Protein ≈24 g p. P.",
    ingredients: [
      "Reis (roh) 100 g",
      "Doenjang (milde Paste) 18 g",
      "Tofu (weich) 300 g",
      "Garnelen (geschält) 180 g",
      "Zucchini 120 g",
      "Gemüsebrühe 700 ml"
    ],
    steps: [
      "Brühe erhitzen, Doenjang glatt rühren, 3 Min simmern.",
      "Zucchini 4–5 Min, Tofu 3 Min, Garnelen 3–4 Min gar ziehen lassen.",
      "Mit Reis servieren."
    ],
    checks: "Gastritis – mild · Diabetes ✓ – ≈72 g KH · Schwangerschaft ✓ Garnelen durch",
    swaps: "Garnelen ↔ Jakobsmuscheln",
    side: "Milder Kimchi ohne Chili.",
    remind: true,
    riceCooker: { enabled: false },
  },

  // FREITAG
  {
    id: "fr-f",
    title: "Herzhafte Hafer‑Reis‑Zhou 咸粥",
    desc: "Fusions‑Congee aus Reis & Haferflocken mit Pilzen; Ei fest gekocht.",
    story: "Moderne Hausküche – sehr mild & cremig.",
    target: "≈74 g KH (2 P.) · Protein ≈20 g p. P.",
    ingredients: [
      "Reis (roh) 70 g",
      "Haferflocken zart 40 g",
      "Shiitake 60 g",
      "Ei (hart) 2 Stück",
      "Dashi 800 ml",
      "Sojasauce natriumarm 6 ml"
    ],
    steps: [
      "Reis + Dashi 40 Min sieden, Haferflocken 10 Min mitköcheln.",
      "Pilze 5 Min, Sojasauce mild. Eier geviertelt zugeben.",
      "Heiß servieren."
    ],
    checks: "Gastritis – mild · Diabetes ✓ – ≈74 g KH · Schwangerschaft ✓ Ei hart",
    swaps: "Shiitake ↔ Champignons",
    side: "Grüner Tee.",
    remind: true,
    riceCooker: { enabled: false },
  },
  {
    id: "fr-m",
    title: "Gebratene Reisnudeln 河粉 (mild)",
    desc: "Weiche Reisnudeln mit viel Gemüse, wenig Öl im Wok gebraten.",
    story: "Südchinesischer Street‑Food‑Liebling – hier in milder Version.",
    target: "≈86 g KH (2 P.) · Protein ≈24 g p. P.",
    ingredients: [
      "Reisnudeln (breit, frisch) 400 g",
      "Hähnchenbrust 220 g",
      "Pak Choi 200 g",
      "Karotte 80 g",
      "Sojasauce natriumarm 12 ml",
      "Sesamöl 5 ml"
    ],
    steps: [
      "Nudeln abspülen. Hähnchen in wenig Öl 4–5 Min braten (gar).",
      "Gemüse 3–4 Min mitdünsten, Nudeln zugeben.",
      "Mit Soja/Sesamöl mild würzen."
    ],
    checks: "Gastritis – mild · Diabetes ✓ – ≈86 g KH · Schwangerschaft ✓",
    swaps: "Hähnchen ↔ Tofu",
    side: "Gurkensalat.",
    remind: false,
    riceCooker: { enabled: false },
  },
  {
    id: "fr-a",
    title: "Whole Tomato Rice 2.0 (viral) mit Thunfisch",
    desc: "Die ganze Tomate gart im Reiskocher mit – plus Thunfisch.",
    story: "Internet‑Kult – simpel, saftig, immer wieder im Trend.",
    target: "≈86 g KH (2 P.) · Protein ≈22 g p. P.",
    ingredients: [
      "Reis (roh) 120 g",
      "Tomate (groß) 1 Stück",
      "Thunfisch (Dose, abgetropft) 140 g",
      "Mais & Erbsen (TK) 120 g",
      "Sojasauce natriumarm 10 ml",
      "Olivenöl 8 ml"
    ],
    steps: [
      "Reis + Wasser (oder Brühe) in den Topf, Soja/Öl zugeben.",
      "Ganze Tomate mittig, Thunfisch und Gemüse außen herum.",
      "Programm 'White Rice' starten. Danach Tomate zerdrücken, mischen."
    ],
    checks: "Gastritis – mild · Diabetes ✓ – ≈86 g KH · Schwangerschaft ✓ (Dose pasteurisiert)",
    swaps: "Thunfisch ↔ Lachsflocken",
    side: "Spiegelei (gut durch) optional.",
    remind: true,
    riceCooker: { enabled: true, program: "White Rice", water: "etwas unter Normal (Tomatenwasser zählt)", notes: "Sehr reife Tomate verwenden." },
  },

  // SAMSTAG
  {
    id: "sa-f",
    title: "Miyeok‑Guk 미역국 (sparsam) + Reis",
    desc: "Milde koreanische Suppe mit wenig Miyeok (Jod sparsam), dazu Reis.",
    story: "Traditionelle Kraftsuppe – in Schwangerschaft nur sparsam mit Algen.",
    target: "≈62 g KH (2 P.) · Protein ≈20 g p. P.",
    ingredients: [
      "Reis (roh) 80 g",
      "Miyeok (getrocknet) 6 g",
      "Rinderhack mager 180 g",
      "Knoblauch 4 g",
      "Sojasauce natriumarm 6 ml",
      "Gemüsebrühe 800 ml"
    ],
    steps: [
      "Miyeok einweichen, abspülen.",
      "Hack 5–6 Min krümelig garen, Knoblauch mitdünsten.",
      "Brühe + Miyeok 10–12 Min köcheln, mild würzen; mit Reis servieren."
    ],
    checks: "Gastritis – mild · Diabetes ✓ – ≈62 g KH · Schwangerschaft ✓ (Jod sparsam)",
    swaps: "Rinderhack ↔ Hähnchen; Miyeok ↔ Spinat",
    side: "Kimchi ohne Chili.",
    remind: true,
    riceCooker: { enabled: false },
  },
  {
    id: "sa-m",
    title: "Vollkorn‑Risotto ai Funghi (IT, mild)",
    desc: "Cremiges Pilz‑Risotto mit Vollkornreis, wenig Salz.",
    story: "Italienische Inspiration für mehr Abwechslung am Wochenende.",
    target: "≈84 g KH (2 P.) · Protein ≈18 g p. P.",
    ingredients: [
      "Vollkorn‑Risottoreis (roh) 120 g",
      "Shiitake 80 g",
      "Champignons 120 g",
      "Gemüsebrühe 700 ml",
      "Olivenöl 10 ml",
      "Parmesan (pasteurisiert) 20 g"
    ],
    steps: [
      "Reis in Öl anschwitzen, nach und nach Brühe 25–30 Min rühren.",
      "Pilze separat 5 Min dünsten, unterheben.",
      "Mit wenig Parmesan abrunden."
    ],
    checks: "Gastritis – mild · Diabetes ✓ – ≈84 g KH · Schwangerschaft ✓ (pasteurisierter Käse)",
    swaps: "Shiitake ↔ Steinpilz",
    side: "Blattsalat mild.",
    remind: false,
    riceCooker: { enabled: false },
  },
  {
    id: "sa-a",
    title: "Takikomi Gohan 鮭と根菜の炊き込みご飯",
    desc: "Gemischter Reis mit Lachs & Wurzelgemüse – One‑Pot im Reiskocher.",
    story: "Herbstlicher JP‑Klassiker – hier mit Omega‑3‑reichem Lachs.",
    target: "≈82 g KH (2 P.) · Protein ≈26 g p. P.",
    ingredients: [
      "Reis (roh) 120 g",
      "Lachsfilet 200 g",
      "Karotte 90 g",
      "Shiitake 60 g",
      "Dashi 240 ml",
      "Sojasauce natriumarm 10 ml"
    ],
    steps: [
      "Reis waschen, mit Dashi/Soja in den Topf.",
      "Lachs in Stücken, Karotte & Pilze obenauf.",
      "Programm 'Mixed/White Rice' starten, 10 Min ruhen, unterheben."
    ],
    checks: "Gastritis – mild · Diabetes ✓ – ≈82 g KH · Schwangerschaft ✓ Lachs durch",
    swaps: "Lachs ↔ Weißer Fisch",
    side: "Miso‑Suppe (mild).",
    remind: true,
    riceCooker: { enabled: true, program: "Mixed / White Rice", water: "Dashi bis Markierung", notes: "Nicht umrühren vor dem Garen." },
  },

  // SONNTAG
  {
    id: "so-f",
    title: "Süßkartoffel‑Okayu さつまいもお粥",
    desc: "Samter JP‑Reisbrei mit Süßkartoffelwürfeln – süßlich, warm.",
    story: "Frühstücks‑Comfort aus Japan, ideal für Energie am Morgen.",
    target: "≈72 g KH (2 P.) · Protein ≈16 g p. P.",
    ingredients: [
      "Reis (roh) 90 g",
      "Wasser 900 ml",
      "Süßkartoffel 220 g",
      "Sojasauce natriumarm 4 ml",
      "Ingwer 4 g",
      "Sesam 6 g"
    ],
    steps: [
      "Reis mit Wasser 45–60 Min zu Okayu kochen (Topf) oder Reiskocher Porridge.",
      "Süßkartoffel in Würfeln 15 Min mitgaren.",
      "Dezent würzen, Sesam darüber."
    ],
    checks: "Gastritis – mild · Diabetes ✓ – ≈72 g KH · Schwangerschaft ✓",
    swaps: "Süßkartoffel ↔ Kürbis",
    side: "Grüner Tee.",
    remind: true,
    riceCooker: { enabled: true, program: "Porridge / Congee", water: "1:9–1:10", notes: "Sehr weich kochen." },
  },
  {
    id: "so-m",
    title: "Bibimbap (mild) 비빔밥",
    desc: "Buntes Gemüse, Rind & Reis – Gochujang separat; Ei fest.",
    story: "Koreanischer Klassiker; farbenfroh und sättigend.",
    target: "≈88 g KH (2 P.) · Protein ≈26 g p. P.",
    ingredients: [
      "Reis (roh) 130 g",
      "Rinderhack mager 220 g",
      "Zucchini 120 g",
      "Karotte 100 g",
      "Spinat 120 g",
      "Eier 2 Stück",
      "Gochujang (optional) 12 g"
    ],
    steps: [
      "Reis kochen. Gemüse getrennt dünsten.",
      "Hack garen. Eier vollständig durch braten.",
      "Alles auf Reis anrichten, Gochujang separat servieren."
    ],
    checks: "Gastritis – mild (Chili optional) · Diabetes ✓ – ≈88 g KH · Schwangerschaft ✓ Ei fest",
    swaps: "Rind ↔ Hähnchen",
    side: "Miso‑Suppe.",
    remind: false,
    riceCooker: { enabled: false },
  },
  {
    id: "so-a",
    title: "Garlic‑Butter‑Shrimp Rice (viral)",
    desc: "Knoblauch‑Butter‑Garnelen direkt mit dem Reis gegart – One‑Pot.",
    story: "Beliebt auf Instagram – schnell, proteinreich.",
    target: "≈84 g KH (2 P.) · Protein ≈28 g p. P.",
    ingredients: [
      "Reis (roh) 120 g",
      "Garnelen (geschält) 220 g",
      "Knoblauch 6 g",
      "Butter 12 g",
      "Sojasauce natriumarm 10 ml",
      "Gemüsebrühe 240 ml",
      "Frühlingszwiebel 10 g"
    ],
    steps: [
      "Reis waschen, mit Brühe/Soja in den Topf.",
      "Garnelen, Knoblauch und Butter obenauf legen.",
      "Programm 'Mixed/White Rice' starten, mischen, Zwiebel dazu."
    ],
    checks: "Gastritis – moderat · Diabetes ✓ – ≈84 g KH · Schwangerschaft ✓ Garnelen durch",
    swaps: "Garnelen ↔ Jakobsmuscheln",
    side: "Gedämpfter Brokkoli.",
    remind: true,
    riceCooker: { enabled: true, program: "Mixed / White Rice", water: "bis Markierung", notes: "Dump‑and‑Go." },
  },
];

export default function Woche4DE() {
  return (
    <PlanTemplate
      meta={meta}
      data={DATA}
      dayNames={DAY_NAME_DE}
      uiTitles={UI_TITLES}
      subtitle="JP/CN/KR · mild & schwangerschaftssicher · abwechslungsreich · 1× Reiskocher/Tag"
      heroChips={["Woche 4", "CN/JP/KR · Mild · Schwangerschaft", "Täglich 1× 🍚 Reiskocher"]}
    />
  );
}

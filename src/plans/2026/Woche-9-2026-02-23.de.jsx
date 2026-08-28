/*
  Moving Kitchen Tales – Woche 9 (Start: 2026-02-23)
  Fokus: Airfryer Hacks, Reiskocher-Liebe (täglich 1x), Asiatische & Europäische Comfort-Food Mischung.
  Inhalt: Balanced, Schwangerschaftssicher, Diabetesfreundlich.
*/

import React from "react";
import PlanTemplate from "../PlanTemplate";

export const meta = {
  title: "Woche 9",
  startDate: "2026-02-23",
  id: "woche-9-2026-02-23",
  lang: "de",
  sidebar: "Woche 9 (2026-02-23)",
};

const DAY_NAME_DE = {
  mo: "Montag (2026-02-23)",
  di: "Dienstag (2026-02-24)",
  mi: "Mittwoch (2026-02-25)",
  do: "Donnerstag (2026-02-26)",
  fr: "Freitag (2026-02-27)",
  sa: "Samstag (2026-02-28)",
  so: "Sonntag (2026-03-01)",
};

const UI_TITLES = {
  main: "Rezepte Woche 9",
  list: "Einkaufsliste Woche 9",
};

export const DATA = [
  // MONTAG
  {
    id: "mo-f",
    title: "Herzhafter Soja-Haferbrei 酱油麦片",
    desc: "Haferbrei mal nicht süß, sondern herzhaft mit Sojasauce, Sesamöl und einem festen Ei.",
    story: "Wer sagt, dass Haferflocken immer nach Apfel und Zimt schmecken müssen? In Asien liebt man herzhaftes Congee am Morgen – wir hacken das Ganze mit blitzschnellen Haferflocken.",
    target: "≈60 g KH (2 P.) · Protein ≈20 g p. P.",
    ingredients: [
      "Haferflocken zart 100 g",
      "Gemüsebrühe 500 ml",
      "Eier (hartgekocht) 2 Stück",
      "Sojasauce 1 EL",
      "Sesamöl 1 TL",
      "Frühlingszwiebel 10 g"
    ],
    steps: [
      "Haferflocken in der Gemüsebrühe ca. 5 Min einköcheln, bis ein cremiger Brei entsteht.",
      "Brei in Schüsseln füllen.",
      "Mit Sojasauce und Sesamöl würzen, hartgekochte Eier halbieren und auflegen.",
      "Mit Frühlingszwiebeln bestreuen."
    ],
    checks: "Balanced ✓ · Diabetes ✓ (Komplexe KH) · Schwangerschaft ✓ (Eier hartgekocht)",
    swaps: "Eier ↔ Gebratener Tofu",
    side: "Warmer Tee.",
    remind: true,
    riceCooker: { enabled: false },
  },
  {
    id: "mo-m",
    title: "Yaki Udon 焼きうどん (Wok)",
    desc: "Gebratene dicke Udon-Nudeln mit Schweinefleisch und knackigem Kohl.",
    story: "Das ultimative japanische Streetfood. Yaki Udon ist die dickere, saftigere Schwester von Yakisoba. Sojasauce und Kohl karamellisieren leicht im heißen Wok.",
    target: "≈85 g KH (2 P.) · Protein ≈24 g p. P.",
    ingredients: [
      "Udon-Nudeln (vorgegart) 400 g",
      "Schweinegeschnetzeltes 150 g",
      "Weißkohl (geschnitten) 150 g",
      "Sojasauce 2 EL",
      "Austernsauce 1 EL",
      "Karotte 50 g"
    ],
    steps: [
      "Udon-Nudeln kurz in heißem Wasser lösen, abtropfen.",
      "Schweinefleisch im Wok anbraten (komplett durchgaren!).",
      "Kohl und Karotte dazugeben, kurz anbraten.",
      "Nudeln, Sojasauce und Austernsauce unterheben und pfannenrühren."
    ],
    checks: "Balanced ✓ · Schwangerschaft ✓ (Fleisch komplett durch) · Diabetes ✓",
    swaps: "Schwein ↔ Hähnchen",
    side: "-",
    remind: false,
    riceCooker: { enabled: false },
  },
  {
    id: "mo-a",
    title: "Lachs-Teriyaki Reis 鮭の照り焼きご飯 (Reiskocher)",
    desc: "Lachsfilet gart im Reiskocher über dem Reis, glasiert mit milder Teriyakisauce.",
    story: "Warum Fisch separat in der Pfanne braten, wenn der Reiskocher ihn butterweich dämpft? Der Saft zieht direkt in die Reiskörner ein.",
    target: "≈80 g KH (2 P.) · Protein ≈28 g p. P.",
    ingredients: [
      "Reis (roh) 120 g",
      "Lachsfilet 220 g",
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
    swaps: "Lachs ↔ Weißfisch",
    side: "Gedämpfter Brokkoli (direkt aus dem Topf).",
    remind: true,
    riceCooker: { enabled: true, program: "Mixed / White Rice", water: "Standard", notes: "Lachs bleibt extrem saftig." },
  },

  // DIENSTAG
  {
    id: "di-f",
    title: "Bananen-Hafer-Pancakes",
    desc: "Zuckerfreie Pancakes, die nur durch eine reife Banane gesüßt werden.",
    story: "Ein Fitness-Klassiker. Wenn Bananen zu braun werden, verwandeln wir sie in diese kleinen, fluffigen Wunder.",
    target: "≈75 g KH (2 P.) · Protein ≈18 g p. P.",
    ingredients: [
      "Haferflocken (im Mixer fein gemahlen) 100 g",
      "Banane (sehr reif) 1 Stück",
      "Eier 2 Stück",
      "Milch 50 ml",
      "Backpulver 1/2 TL",
      "Öl zum Braten"
    ],
    steps: [
      "Banane mit einer Gabel zu Mus zerdrücken.",
      "Eier, Milch, Hafermehl und Backpulver unterrühren.",
      "In einer Pfanne kleine Pancakes von beiden Seiten durchbacken.",
      "Mit etwas Joghurt servieren."
    ],
    checks: "Balanced ✓ · Schwangerschaft ✓ (Pancakes durchgaren) · Diabetes ✓",
    swaps: "Haferflocken ↔ Normales Mehl",
    side: "Naturjoghurt.",
    remind: true,
    riceCooker: { enabled: false },
  },
  {
    id: "di-m",
    title: "Airfryer Sweet & Sour Tofu",
    desc: "Knusprige Tofuwürfel aus dem Airfryer in milder süß-saurer Sauce.",
    story: "Die leichtere Version des chinesischen Take-aways. Der Airfryer macht den Tofu außen kross wie Chips, ohne ihn in Öl zu ertränken.",
    target: "≈85 g KH (2 P.) · Protein ≈18 g p. P.",
    ingredients: [
      "Fester Tofu 250 g",
      "Maisstärke 2 EL",
      "Ananas (Dose) 50 g",
      "Ketchup 2 EL",
      "Reisessig 1 EL",
      "Reis (gekocht) 150 g"
    ],
    steps: [
      "Tofu würfeln, abtupfen und in Maisstärke wälzen.",
      "Im Airfryer bei 200°C ca. 12-15 Min knusprig backen.",
      "Ketchup, Essig und etwas Ananassaft in einer Pfanne aufkochen.",
      "Knusper-Tofu und Ananasstücke kurz in der Sauce schwenken.",
      "Mit Reis servieren."
    ],
    checks: "Balanced ✓ · Schwangerschaft ✓ · Diabetes ✓",
    swaps: "Tofu ↔ Hähnchenbrust",
    side: "Etwas Paprika im Wok mitbraten.",
    remind: false,
    riceCooker: { enabled: false },
  },
  {
    id: "di-a",
    title: "Goguma Bap 고구마밥 (Süßkartoffel-Reis)",
    desc: "Koreanischer Reiskocher-Liebling: Reis, zusammen mit Süßkartoffelwürfeln gegart.",
    story: "In Korea liebt man Süßkartoffeln. Die Stärke der Kartoffel macht den Reis wunderbar klebrig und bringt eine natürliche, sanfte Süße.",
    target: "≈80 g KH (2 P.) · Protein ≈20 g p. P.",
    ingredients: [
      "Reis (roh) 120 g",
      "Süßkartoffel (gewürfelt) 150 g",
      "Hähnchenbrust (kleine Würfel) 150 g",
      "Sojasauce 1 EL",
      "Sesamöl 1 TL",
      "Wasser"
    ],
    steps: [
      "Hähnchenwürfel mit Sojasauce kurz marinieren.",
      "Reis und Wasser in den Reiskocher.",
      "Süßkartoffelwürfel und Fleisch oben auflegen.",
      "Nach dem Kochen Sesamöl darüberträufeln und gut durchmischen."
    ],
    checks: "Balanced ✓ · Schwangerschaft ✓ (Fleisch gart durch) · Diabetes ✓",
    swaps: "Hähnchen ↔ Rinderhack",
    side: "Ein mildes Kimchi oder Gurkensalat.",
    remind: true,
    riceCooker: { enabled: true, program: "Mixed / White Rice", water: "Standard", notes: "Süßkartoffel nicht zu klein schneiden, sonst zerkocht sie komplett." },
  },

  // MITTWOCH
  {
    id: "mi-f",
    title: "Schnelle Spinat-Miso-Suppe mit Ei",
    desc: "Warme Brühe, die den Magen beruhigt, aufgewertet mit Ei und Spinat.",
    story: "Ein super schnelles Frühstück. Die Miso-Paste liefert probiotische Kulturen und das gestockte Ei sorgt dafür, dass du bis zum Mittag satt bleibst.",
    target: "≈65 g KH (2 P.) · Protein ≈18 g p. P.",
    ingredients: [
      "Dashi oder Gemüsebrühe 600 ml",
      "Miso-Paste 2 EL",
      "Spinat 100 g",
      "Eier 2 Stück",
      "Gekochter Reis 100 g"
    ],
    steps: [
      "Brühe aufkochen, Reis und Spinat kurz erwärmen.",
      "Eier in die Suppe gleiten lassen und vollständig durchstocken lassen (!).",
      "Topf vom Herd nehmen und die Miso-Paste einrühren (nicht mehr kochen!)."
    ],
    checks: "Balanced ✓ · Schwangerschaft ✓ (Eier müssen in der heißen Brühe komplett fest werden!)",
    swaps: "Spinat ↔ Pak Choi",
    side: "-",
    remind: true,
    riceCooker: { enabled: false },
  },
  {
    id: "mi-m",
    title: "Bulgogi-Style Beef Bowl 불고기 (Mild)",
    desc: "Süßlich mariniertes Rindfleisch mit Gemüse auf Reis.",
    story: "Bulgogi heißt wörtlich 'Feuerfleisch', aber es ist absolut null scharf. Die Marinade aus Soja und ein wenig Süße ist legendär.",
    target: "≈80 g KH (2 P.) · Protein ≈28 g p. P.",
    ingredients: [
      "Rindfleisch (Streifen) 200 g",
      "Sojasauce 2 EL",
      "Agavendicksaft 1 TL",
      "Knoblauch 1 Zehe",
      "Zucchini (Stifte) 100 g",
      "Reis (gekocht) 150 g"
    ],
    steps: [
      "Rindfleisch mit Sojasauce, Agave und Knoblauch marinieren.",
      "Im Wok das Fleisch komplett durchbraten.",
      "Zucchini-Stifte in den letzten 3 Minuten mitbraten, damit sie knackig bleiben.",
      "Alles über den Reis geben."
    ],
    checks: "Balanced ✓ · Schwangerschaft ✓ (Rindfleisch gut durchgaren)",
    swaps: "Rind ↔ Schweinefleisch",
    side: "-",
    remind: false,
    riceCooker: { enabled: false },
  },
  {
    id: "mi-a",
    title: "Mushroom & Edamame Rice (Reiskocher)",
    desc: "Aromatischer Reis mit Pilzen und proteinreichen Sojabohnen (Edamame).",
    story: "Veganer Comfort Food aus dem Reiskocher. Die Edamame bringen Farbe und Biss in den weichen Pilzreis.",
    target: "≈78 g KH (2 P.) · Protein ≈18 g p. P.",
    ingredients: [
      "Reis (roh) 120 g",
      "Champignons oder Shiitake 150 g",
      "Edamame (TK, geschält) 100 g",
      "Gemüsebrühe 240 ml",
      "Sojasauce 1 EL",
      "Sesamöl 1 TL"
    ],
    steps: [
      "Pilze in Scheiben schneiden.",
      "Reis, Brühe, Pilze und Sojasauce in den Reiskocher geben und starten.",
      "Aufgetaute Edamame in den letzten 5 Minuten unter den heißen Reis mischen (so bleiben sie grün).",
      "Mit Sesamöl verfeinern."
    ],
    checks: "Balanced ✓ · Schwangerschaft ✓ · Diabetes ✓",
    swaps: "Edamame ↔ Erbsen",
    side: "Ein Stück gebratener Fisch, falls mehr Protein gewünscht ist.",
    remind: true,
    riceCooker: { enabled: true, program: "White Rice / Mixed", water: "Brühe (Standard)", notes: "Edamame nicht die ganze Zeit mitkochen." },
  },

  // DONNERSTAG
  {
    id: "do-f",
    title: "Gyeran-jjim 계란찜 (Dampf-Ei Mikrowelle)",
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
      "In ein mikrowellengeeignetes Gefäß (z.B. kleiner Keramiktopf) füllen (sollte nur zu 70% voll sein, es geht auf!).",
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
    id: "do-m",
    title: "Pasta e Ceci (Italienische Kichererbsen-Pasta)",
    desc: "Ein dickflüssiger, wärmender Eintopf aus Nudeln und Kichererbsen.",
    story: "Ein Klassiker aus Rom. Manche nennen es Suppe, manche Pasta. Die Stärke der Kichererbsen bindet die Brühe zu einer unglaublichen Creme.",
    target: "≈85 g KH (2 P.) · Protein ≈20 g p. P.",
    ingredients: [
      "Kleine Nudeln (z.B. Ditalini) 100 g",
      "Kichererbsen (Dose, gespült) 150 g",
      "Tomatenmark 1 EL",
      "Gemüsebrühe 400 ml",
      "Knoblauch 1 Zehe",
      "Parmesan 20 g"
    ],
    steps: [
      "Knoblauch und Tomatenmark in etwas Öl anrösten.",
      "Kichererbsen (ein paar davon leicht zerdrücken) und Brühe dazugeben. 10 Min köcheln.",
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
    id: "do-a",
    title: "Soy-Chicken Rice 豉油鸡饭 (Reiskocher)",
    desc: "Variation des Hainan Chicken: Hähnchenkeule mariniert in dunkler Sojasauce.",
    story: "Wir verpassen dem Hähnchen eine Glasur aus dunkler Sojasauce, bevor es im Reiskocher verschwindet. Das Ergebnis schmeckt wie aus einem Hongkonger BBQ-Restaurant.",
    target: "≈80 g KH (2 P.) · Protein ≈30 g p. P.",
    ingredients: [
      "Reis (roh) 120 g",
      "Hähnchenkeule (o. Knochen) 250 g",
      "Sojasauce (dunkel & hell gemischt) 2 EL",
      "Ingwer 5 g",
      "Hühnerbrühe 240 ml",
      "Pak Choi 100 g"
    ],
    steps: [
      "Hähnchen kräftig in der Sojasauce wenden.",
      "Reis und Brühe in den Topf. Hähnchen mit der Sauce und Ingwer oben auflegen.",
      "Kochen. Pak Choi in den letzten 5 Minuten in den Dampf legen.",
      "Fleisch in Streifen schneiden und mit dem Reis servieren."
    ],
    checks: "Balanced ✓ · Schwangerschaft ✓ (Huhn durch) · Diabetes ✓",
    swaps: "Hähnchenkeule ↔ Schweinefilet",
    side: "Pak Choi.",
    remind: true,
    riceCooker: { enabled: true, program: "Mixed / White Rice", water: "Brühe (Standard)", notes: "Dunkle Sojasauce gibt eine tolle Farbe." },
  },

  // FREITAG
  {
    id: "fr-f",
    title: "Kabeljau-Congee 鱼片粥",
    desc: "Ein extrem feiner, milder Reisbrei mit Weißfisch. Perfekt für den Magen.",
    story: "In Guangdong dämpft man feine Fischscheiben direkt in der Hitze des Reisbreis. Es ist leicht verdaulich und bringt pure Wohlfühl-Energie.",
    target: "≈70 g KH (2 P.) · Protein ≈24 g p. P.",
    ingredients: [
      "Reis (roh) 80 g",
      "Kabeljau oder Seelachs 150 g",
      "Hühnerbrühe 800 ml",
      "Ingwer (feine Streifen) 10 g",
      "Frühlingszwiebel 10 g",
      "Weißer Pfeffer 1 Prise"
    ],
    steps: [
      "Reis in Brühe ca. 45 Min zu Congee einkochen.",
      "Fisch in dünne Scheiben schneiden. Ingwer in den Brei geben.",
      "Fischscheiben in den köchelnden Brei legen. Ca. 3-5 Min ziehen lassen, bis der Fisch komplett weiß und durchgegart ist.",
      "Mit Frühlingszwiebeln und Pfeffer servieren."
    ],
    checks: "Balanced ✓ · Schwangerschaft ✓ (Kabeljau ist quecksilberarm, muss komplett durchgegart sein!)",
    swaps: "Kabeljau ↔ Lachs",
    side: "Tee.",
    remind: true,
    riceCooker: { enabled: false },
  },
  {
    id: "fr-m",
    title: "Wok-Tofu in Tomatensauce 番茄豆腐",
    desc: "Eine vegetarische Variante der berühmten Tomaten-Ei-Pfanne.",
    story: "Wer Eier nicht mag (oder eine Pause braucht), nimmt Tofu! Die säuerlich-süße Tomatensauce zieht perfekt in die Poren des Tofus ein.",
    target: "≈80 g KH (2 P.) · Protein ≈18 g p. P.",
    ingredients: [
      "Fester Tofu (gewürfelt) 200 g",
      "Tomaten (groß, in Stücken) 2 Stück",
      "Ketchup 1 EL",
      "Sojasauce 1 EL",
      "Reis (gekocht) 150 g",
      "Frühlingszwiebel 10 g"
    ],
    steps: [
      "Tofu im Wok kurz anbraten, bis er leicht Farbe bekommt, herausnehmen.",
      "Tomaten im Wok braten, bis sie weich werden und Saft abgeben.",
      "Ketchup und Sojasauce einrühren, Tofu zurückgeben.",
      "Einköcheln lassen und über den Reis geben."
    ],
    checks: "Balanced ✓ · Schwangerschaft ✓",
    swaps: "Tofu ↔ Hähnchenbrust",
    side: "-",
    remind: false,
    riceCooker: { enabled: false },
  },
  {
    id: "fr-a",
    title: "Schweinebauch & Karotten Reis (Reiskocher)",
    desc: "Takikomi Gohan Style: Reis, gekocht mit Wurzelgemüse und zarten Schweinewürfeln.",
    story: "Ein japanischer Herbst-Klassiker. Die Karotten geben Süße ab, das Schwein sorgt für ein unglaubliches Mundgefühl.",
    target: "≈82 g KH (2 P.) · Protein ≈24 g p. P.",
    ingredients: [
      "Reis (roh) 120 g",
      "Schweinebauch oder Schulter (fein gewürfelt) 150 g",
      "Karotte (in Stiften) 100 g",
      "Dashi oder Brühe 240 ml",
      "Sojasauce 2 EL",
      "Mirin 1 EL"
    ],
    steps: [
      "Reis und Brühe in den Topf.",
      "Schweinefleisch und Karottenstifte darauflegen.",
      "Sojasauce und Mirin dazugeben (nicht umrühren).",
      "Reiskocher starten. Wenn fertig, alles gut durchmischen."
    ],
    checks: "Balanced ✓ · Schwangerschaft ✓ (Fleisch wird durchgedämpft)",
    swaps: "Schweinebauch ↔ Hähnchen",
    side: "Miso-Suppe.",
    remind: true,
    riceCooker: { enabled: true, program: "Mixed / White Rice", water: "Dashi (Standard)", notes: "Karotten nicht zu grob schneiden." },
  },

  // SAMSTAG
  {
    id: "sa-f",
    title: "Airfryer Croque Monsieur (Käse-Schinken-Toast)",
    desc: "Die französische Bistro-Legende, rasant gemacht im Airfryer.",
    story: "Im Airfryer schmilzt der Käse perfekt, während das Brot von allen Seiten knusprig wird. Wir verzichten auf Béchamelsauce und machen es einfach und schnell.",
    target: "≈60 g KH (2 P.) · Protein ≈20 g p. P.",
    ingredients: [
      "Vollkorn-Toast 4 Scheiben",
      "Kochschinken 4 Scheiben",
      "Gouda oder Gruyère (pasteurisiert) 60 g",
      "Etwas Senf oder Mayo",
      "Cherrytomaten 100 g"
    ],
    steps: [
      "Brot mit etwas Senf bestreichen.",
      "Mit Schinken und Käse belegen, zuklappen. Etwas Käse auch oben auf das Brot streuen.",
      "Im Airfryer bei 180°C ca. 6-8 Min backen, bis der Käse goldbraun blubbert.",
      "Dazu Tomaten naschen."
    ],
    checks: "Balanced ✓ · Schwangerschaft ✓ (Käse pasteurisiert, Schinken wird hoch erhitzt)",
    swaps: "Schinken ↔ Putenbrust",
    side: "Tomaten.",
    remind: true,
    riceCooker: { enabled: false },
  },
  {
    id: "sa-m",
    title: "Airfryer Tonkatsu 豚カツ (Schweineschnitzel)",
    desc: "Knuspriges japanisches Schnitzel, fettsparend im Airfryer gebacken.",
    story: "Mit Panko-Paniermehl klappt Tonkatsu auch im Airfryer fantastisch. Ein kleiner Sprüher Öl reicht für eine gigantische Kruste.",
    target: "≈85 g KH (2 P.) · Protein ≈28 g p. P.",
    ingredients: [
      "Schweineschnitzel 2 Stück",
      "Panko (japanisches Paniermehl) 40 g",
      "Ei 1 Stück & etwas Mehl (Panierstraße)",
      "Kohl (sehr fein gehobelt) 150 g",
      "Reis (gekocht) 150 g",
      "Tonkatsu-Sauce"
    ],
    steps: [
      "Schweineschnitzel plattieren.",
      "In Mehl, Ei und Panko wenden. Mit wenig Öl besprühen.",
      "Im Airfryer bei 200°C ca. 15-18 Min backen (Fleisch komplett durchgaren!).",
      "In Streifen schneiden und auf gehobeltem Kohl mit Reis und Sauce servieren."
    ],
    checks: "Balanced ✓ · Schwangerschaft ✓ (Schwein gut durch)",
    swaps: "Schwein ↔ Hähnchenbrust",
    side: "Viel frischer Kohl.",
    remind: false,
    riceCooker: { enabled: false },
  },
  {
    id: "sa-a",
    title: "Garlic Butter Shrimp Rice (Reiskocher)",
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

  // SONNTAG
  {
    id: "so-f",
    title: "Hongkong Red Bean Congee (Süß) 红豆粥",
    desc: "Süßer Frühstücksbrei mit roten Adzukibohnen und Datteln.",
    story: "Rote Bohnen werden in Asien oft süß gegessen. Dieser Brei ist extrem wärmend und die Bohnen liefern tolles pflanzliches Protein zum Start in den Tag.",
    target: "≈70 g KH (2 P.) · Protein ≈15 g p. P.",
    ingredients: [
      "Reis (roh) 60 g",
      "Adzukibohnen (Dose/vorgekocht) 100 g",
      "Wasser 800 ml",
      "Rote Datteln (Jujube, entkernt) 4 Stück",
      "Agavendicksaft oder Honig 1 EL"
    ],
    steps: [
      "Reis, vorgekochte Bohnen und Datteln mit Wasser aufsetzen.",
      "Ca. 45 Min köcheln lassen (oder Reiskocher Porridge-Modus), bis alles zerfällt.",
      "Mit wenig Honig süßen."
    ],
    checks: "Balanced ✓ · Schwangerschaft ✓ · Diabetes ✓ (Bohnen drosseln den Blutzucker)",
    swaps: "Rote Datteln ↔ Normale Datteln",
    side: "Tee.",
    remind: true,
    riceCooker: { enabled: false },
  },
  {
    id: "so-m",
    title: "Dekonstruierte Gimbap Bowl 김밥 볼",
    desc: "Alle Zutaten einer koreanischen Sushi-Rolle, nur als schnelle Bowl serviert.",
    story: "Gimbap zu rollen dauert ewig. Die Bowl-Version hat exakt den gleichen Geschmack, ist aber in 10 Minuten in der Schüssel.",
    target: "≈85 g KH (2 P.) · Protein ≈24 g p. P.",
    ingredients: [
      "Reis (gekocht) 200 g",
      "Rinderhack 100 g",
      "Eier 2 Stück",
      "Spinat (blanchiert) 50 g",
      "Karotte (in feinen Streifen, gebraten) 50 g",
      "Nori (zerbröselt) 1 Blatt",
      "Sesamöl & Sojasauce"
    ],
    steps: [
      "Rinderhack mit Soja und Sesamöl braten (gut durch!).",
      "Eier zu einem flachen Omelett braten, in Streifen schneiden.",
      "Reis in Schüsseln anrichten. Fleisch, Eier, Karotte, Spinat kranzförmig darauflegen.",
      "Mit Nori-Bröseln und Sesamöl toppen."
    ],
    checks: "Balanced ✓ · Schwangerschaft ✓ (Fleisch/Ei durch. Nori in Maßen OK) · Diabetes ✓",
    swaps: "Rinderhack ↔ Thunfisch (Dose)",
    side: "-",
    remind: false,
    riceCooker: { enabled: false },
  },
  {
    id: "so-a",
    title: "Sausage & Pea Rice (Reiskocher)",
    desc: "Würstchen und Erbsen dämpfen zusammen mit dem Reis. Ein One-Pot-Wunder.",
    story: "In Taiwan gibt es das mit süßen Lap-Cheong-Würsten. Da die oft schwer zu kriegen sind, nutzen wir herzhafte Würstchen. Ihr Saft aromatisiert das ganze Gericht.",
    target: "≈84 g KH (2 P.) · Protein ≈20 g p. P.",
    ingredients: [
      "Reis (roh) 120 g",
      "Würstchen (z.B. Cabanossi oder Geflügelwiener) 150 g",
      "Erbsen (TK) 80 g",
      "Hühnerbrühe 240 ml",
      "Sojasauce 1 EL",
      "Frühlingszwiebel 10 g"
    ],
    steps: [
      "Würstchen in Scheiben schneiden.",
      "Reis, Brühe und Sojasauce in den Topf.",
      "Würstchen und Erbsen darauf verteilen. Kochen.",
      "Nach dem Öffnen mit Frühlingszwiebeln durchmischen."
    ],
    checks: "Balanced ✓ · Schwangerschaft ✓ (Würstchen werden im Topf hoch erhitzt)",
    swaps: "Würstchen ↔ Tofu-Würstchen",
    side: "Gurkensalat.",
    remind: true,
    riceCooker: { enabled: true, program: "Mixed / White Rice", water: "Brühe (Standard)", notes: "Erbsen bleiben relativ grün, wenn man sie nicht rührt." },
  },
];

export default function Woche9DE() {
  return (
    <PlanTemplate
      meta={meta}
      data={DATA}
      dayNames={DAY_NAME_DE}
      uiTitles={UI_TITLES}
      subtitle="Airfryer Hacks · Reiskocher-Liebe · Balanced · Schwangerschaftssicher"
      heroChips={["Woche 9", "Airfryer & Reiskocher Liebe", "Täglich 1× 🍚 Reiskocher"]}
    />
  );
}

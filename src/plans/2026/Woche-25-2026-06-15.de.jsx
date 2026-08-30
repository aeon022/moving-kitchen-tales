/*
  GhibliKitchen – Woche 25 (Start: 2026-06-15)
  Status: KOMPLETT & FUNKTIONSFÄHIG (Alle 21 Rezepte) - BUGFIXED
  Fokus: Italienischer Crossover, Virale Airfryer-Hacks, Reiskocher-Magie.
*/

import React from "react";
import PlanTemplate from "../PlanTemplate";

export const meta = {
  title: "Woche 25",
  startDate: "2026-06-15",
  id: "woche-25-2026-06-15",
  lang: "de",
  sidebar: "Woche 25 (2026-06-15)",
};

const DAY_NAME_DE = {
  mo: "Montag (2026-06-15)",
  di: "Dienstag (2026-06-16)",
  mi: "Mittwoch (2026-06-17)",
  do: "Donnerstag (2026-06-18)",
  fr: "Freitag (2026-06-19)",
  sa: "Samstag (2026-06-20)",
  so: "Sonntag (2026-06-21)",
};

const UI_TITLES = {
  main: "Rezepte Woche 25",
  list: "Einkaufsliste Woche 25",
};

export const DATA = [
  // MONTAG
  {
    id: "mo-f",
    title: "Airfryer Caprese Frittata Muffins",
    isViral: true,
    desc: "Kleine italienische Omeletts mit Mozzarella und Tomaten, gebacken in Muffinförmchen.",
    story: "Ein perfektes, proteinreiches Frühstück. Im Airfryer stocken die Eier gleichmäßig, während die Tomaten ihr fruchtiges Aroma entfalten. Der Käse bildet eine großartige Kruste.",
    target: "≈45 g KH (2 P. - inkl. Brot) · Protein ≈22 g p. P.",
    ingredients: [
      "Eier 4 Stück",
      "Cherrytomaten (halbiert) 100 g",
      "Mozzarella (pasteurisiert) 50 g",
      "Basilikum (frisch)",
      "Vollkorn-Toast (Beilage) 2 Scheiben"
    ],
    steps: [
      "Eier verquirlen, leicht salzen und pfeffern.",
      "Tomaten, zerzupften Basilikum und Mozzarella in Silikon-Muffinförmchen verteilen.",
      "Die Eimasse darübergießen.",
      "Im Airfryer bei 160°C ca. 12-15 Min backen, bis das Ei GANZ durchgestockt ist."
    ],
    checks: "Balanced ✓ · Schwangerschaft ✓ (Eier komplett fest, Käse pasteurisiert) · Diabetes ✓",
    swaps: "Mozzarella ↔ Feta",
    side: "Kaffee oder Tee.",
    remind: true,
    riceCooker: { enabled: false },
  },
  {
    id: "mo-m",
    title: "Udon Cacio e Pepe",
    desc: "Asiatische dicke Udon-Nudeln treffen auf den italienischen Käse-Pfeffer-Klassiker.",
    story: "Eine geniale Fusion. Die Stärke der dicken japanischen Nudeln bindet den geriebenen Käse im Handumdrehen zu einer unfassbar cremigen Sauce. Ganz ohne Sahne!",
    target: "≈85 g KH (2 P.) · Protein ≈18 g p. P.",
    ingredients: [
      "Udon-Nudeln (vorgegart) 400 g",
      "Parmesan oder Pecorino (pasteurisiert, fein gerieben) 50 g",
      "Butter 20 g",
      "Schwarzer Pfeffer (frisch gemahlen) 1 TL",
      "Edamame (geschält) 50 g"
    ],
    steps: [
      "Udon in wenig Wasser kurz kochen, Wasser auffangen.",
      "Butter in einer Pfanne schmelzen, frisch gemahlenen Pfeffer darin anrösten.",
      "Nudeln und etwas Nudelwasser in die Pfanne geben.",
      "Hitze reduzieren, Parmesan schrittweise einrühren, bis es cremig wird. Edamame unterheben."
    ],
    checks: "Balanced ✓ · Schwangerschaft ✓ (Hartkäse aus pasteurisierter Milch) · Diabetes ✓",
    swaps: "Udon ↔ Vollkorn-Spaghetti",
    side: "Ein Tomatensalat.",
    remind: false,
    riceCooker: { enabled: false },
  },
  {
    id: "mo-a",
    title: "Tomato-Basil Chicken Rice (Reiskocher)",
    desc: "Ein italienisch inspiriertes One-Pot-Gericht. Hähnchen und Tomaten garen im Reis.",
    story: "Wir wandeln den Whole-Tomato-Trend ab: Hähnchenwürfel, eine große Tomate und viel Basilikum machen diesen Reistopf zu einer mediterranen Sensation.",
    target: "≈80 g KH (2 P.) · Protein ≈30 g p. P.",
    ingredients: [
      "Reis (roh) 120 g",
      "Hähnchenbrust (gewürfelt) 200 g",
      "Tomate (groß) 1 Stück",
      "Gemüsebrühe 240 ml",
      "Knoblauch 1 Zehe",
      "Basilikum (frisch) 1 Bund"
    ],
    steps: [
      "Reis, Brühe und gepressten Knoblauch in den Reiskocher füllen.",
      "Die Tomate kreuzweise tief einschneiden und in die Mitte setzen. Das Hähnchen drumherum anordnen.",
      "Start drücken.",
      "Nach dem Kochen die Tomate zerdrücken, frischen Basilikum unterheben und alles gut durchmischen."
    ],
    checks: "Balanced ✓ · Schwangerschaft ✓ (Huhn dampft auf >80°C sicher durch)",
    swaps: "Hähnchenbrust ↔ Putenbrust",
    side: "Ein Spritzer Olivenöl.",
    remind: true,
    riceCooker: { enabled: true, program: "Mixed / White Rice", water: "Brühe (etwas weniger wg. Tomate)", notes: "Tomate am Ende gut vermantschen." },
  },

  // DIENSTAG
  {
    id: "di-f",
    title: "Ricotta-Zitronen Toast mit Honig",
    desc: "Cremiger Ricotta, frischer Zitronenabrieb und ein Hauch Süße auf Vollkornbrot.",
    story: "Ein sizilianisches Frühstück, das in 3 Minuten fertig ist. Der cremige Käse und die frische Zitrone bilden einen genialen Kontrast.",
    target: "≈60 g KH (2 P.) · Protein ≈15 g p. P.",
    ingredients: [
      "Vollkorn-Toast 4 Scheiben",
      "Ricotta (pasteurisiert) 100 g",
      "Zitrone (nur der Abrieb) 1 TL",
      "Honig oder Agavendicksaft 1 EL",
      "Walnüsse (gehackt) 20 g"
    ],
    steps: [
      "Toastscheiben im Toaster oder Airfryer knusprig rösten.",
      "Ricotta in einer Schale mit dem Zitronenabrieb glattrühren.",
      "Die Masse dick auf die Toastscheiben streichen.",
      "Mit Honig beträufeln und Walnüssen bestreuen."
    ],
    checks: "Balanced ✓ · Schwangerschaft ✓ (Ricotta pasteurisiert) · Diabetes ✓",
    swaps: "Ricotta ↔ Körniger Frischkäse",
    side: "Kaffee.",
    remind: true,
    riceCooker: { enabled: false },
  },
  {
    id: "di-m",
    title: "Bolognese-Style Zucchini Wok",
    desc: "Rinderhack und Zoodles asiatisch angehaucht mit Sojasauce und Tomatenmark gebraten.",
    story: "Ein fantastisches Low-Carb Crossover. Rinderhackfleisch trifft auf das klassische italienische Mirepoix, wird aber im Wok mit asiatischen Aromen vollendet.",
    target: "≈50 g KH (2 P. - inkl. Beilage) · Protein ≈28 g p. P.",
    ingredients: [
      "Rinderhack (mager) 200 g",
      "Zucchini (als Nudeln/Zoodles geschnitten) 2 große",
      "Tomatenmark 2 EL",
      "Sojasauce 1 EL",
      "Knoblauch 1 Zehe",
      "Vollkornbrot 2 Scheiben"
    ],
    steps: [
      "Rinderhack und Knoblauch im Wok krümelig und KOMPLETT durchbraten.",
      "Tomatenmark dazugeben und kurz anrösten. Mit Sojasauce und 50ml Wasser ablöschen.",
      "Die Zucchini-Nudeln hineingeben und nur 2-3 Minuten durchschwenken (sie sollen Biss behalten und nicht wässern).",
      "Zusammen mit dem Brot servieren."
    ],
    checks: "Balanced ✓ · Schwangerschaft ✓ (Hackfleisch GANZ durchbraten!)",
    swaps: "Zoodles ↔ Vollkorn-Spaghetti",
    side: "-",
    remind: false,
    riceCooker: { enabled: false },
  },
  {
    id: "di-a",
    title: "Pilz-Risotto (Reiskocher) 🍄",
    desc: "Cremiges Risotto mit braunen Champignons und Parmesan. Komplett ohne Rühren.",
    story: "Risotto kochen ist eigentlich mit viel Rühren verbunden. Der Reiskocher übernimmt das durch seine präzise Temperaturkontrolle. Das Ergebnis ist herrlich schlotzig.",
    target: "≈82 g KH (2 P.) · Protein ≈15 g p. P.",
    ingredients: [
      "Risottoreis 120 g",
      "Champignons (in Scheiben) 150 g",
      "Gemüsebrühe 300 ml",
      "Knoblauch 1 Zehe",
      "Parmesan (pasteurisiert) 30 g",
      "Butter 10 g"
    ],
    steps: [
      "Reis, Brühe, gepressten Knoblauch und Pilzscheiben in den Topf geben.",
      "Reiskocher starten.",
      "Nach dem Kochen die Butter und den Parmesan in den extrem heißen Reis einrühren.",
      "Sehr kräftig durchmischen, bis eine cremige Emulsion entsteht."
    ],
    checks: "Balanced ✓ · Schwangerschaft ✓ (Käse pasteurisiert)",
    swaps: "Champignons ↔ Shiitake",
    side: "Ein Stück gebratenes Hähnchen (optional für mehr Protein).",
    remind: true,
    riceCooker: { enabled: true, program: "White Rice / Mixed", water: "Brühe (etwas mehr für Risotto)", notes: "Käse und Butter erst ganz am Schluss einrühren." },
  },

  // MITTWOCH
  {
    id: "mi-f",
    title: "Viral Pesto Fried Eggs 🍳",
    isViral: true,
    desc: "Spiegeleier, die direkt in grünem Pesto statt in Öl knusprig gebraten werden.",
    story: "Ein grandioser TikTok-Trend. Das Pesto liefert das Öl zum Braten und würzt das Ei gleichzeitig mit Basilikum, Knoblauch und Parmesan.",
    target: "≈50 g KH (2 P.) · Protein ≈20 g p. P.",
    ingredients: [
      "Pesto (Glas) 2 EL",
      "Eier 4 Stück",
      "Vollkorn-Toast 4 Scheiben",
      "Cherrytomaten 100 g",
      "Parmesan (gerieben) 1 EL"
    ],
    steps: [
      "Pesto in einer Pfanne bei mittlerer Hitze erwärmen.",
      "Die Eier direkt auf das Pesto schlagen.",
      "Deckel auflegen und braten, bis das Eiweiß und Eigelb GANZ durchgestockt sind (wichtig für die Schwangerschaft!).",
      "Mit halbierten Tomaten auf dem Toast servieren, etwas Parmesan darüberstreuen."
    ],
    checks: "Balanced ✓ · Schwangerschaft ✓ (Eigelb muss komplett fest sein!) · Diabetes ✓",
    swaps: "Pesto (grün) ↔ Pesto (rot)",
    side: "-",
    remind: true,
    riceCooker: { enabled: false },
  },
  {
    id: "mi-m",
    title: "Pasta e Ceci (Kichererbsen-Nudeln)",
    desc: "Ein rustikaler italienischer Eintopf aus Nudeln, Kichererbsen und Tomaten.",
    story: "Manche nennen es Suppe, manche Pasta. Die Stärke der Kichererbsen bindet die Brühe zu einer unglaublichen Creme. Zählt in Italien zum ultimativen Comfort Food.",
    target: "≈85 g KH (2 P.) · Protein ≈20 g p. P.",
    ingredients: [
      "Kleine Nudeln (z.B. Makkaroni) 100 g",
      "Kichererbsen (Dose, gespült) 150 g",
      "Passierte Tomaten 100 ml",
      "Gemüsebrühe 300 ml",
      "Knoblauch 1 Zehe",
      "Rosmarin (frisch oder getrocknet) 1/2 TL"
    ],
    steps: [
      "Knoblauch in etwas Olivenöl anrösten.",
      "Passierte Tomaten, Kichererbsen (ein paar leicht zerdrücken), Rosmarin und Brühe dazugeben. 10 Min köcheln.",
      "Nudeln direkt in die Brühe geben und kochen, bis sie gar sind und die Sauce stark andickt."
    ],
    checks: "Balanced ✓ · Schwangerschaft ✓ (alles durchgekocht) · Diabetes ✓",
    swaps: "Kichererbsen ↔ Weiße Bohnen",
    side: "Ein Löffel Parmesan.",
    remind: false,
    riceCooker: { enabled: false },
  },
  {
    id: "mi-a",
    title: "Hainan-Style Weißfisch 清蒸鱼饭 (Reiskocher)",
    desc: "Magerer Kabeljau, der auf dem Reis dämpft, umhüllt von feinem Ingwer.",
    story: "Ein unbeschreiblich sauberes, klares Gericht. Der Fisch wird im Dampf butterzart, und der Ingwer gibt eine großartige Frische, die hervorragend zu dem sanften Reis passt.",
    target: "≈80 g KH (2 P.) · Protein ≈28 g p. P.",
    ingredients: [
      "Reis (roh) 120 g",
      "Kabeljau oder Seelachs (TK, aufgetaut) 200 g",
      "Ingwer (feine Streifen) 15 g",
      "Sojasauce 2 EL",
      "Gemüsebrühe 240 ml",
      "Frühlingszwiebel 10 g"
    ],
    steps: [
      "Reis und Brühe in den Reiskocher geben.",
      "Den Weißfisch auf den Reis legen und dick mit Ingwer bestreuen. Start drücken.",
      "Nach dem Kochen den Fisch leicht zerteilen. Frühlingszwiebeln aufstreuen.",
      "Alles vermengen und mit der Sojasauce beträufeln."
    ],
    checks: "Balanced ✓ · Schwangerschaft ✓ (Weißfisch quecksilberarm, dämpft auf >80°C durch)",
    swaps: "Kabeljau ↔ Lachs",
    side: "Gedämpfter Spinat.",
    remind: true,
    riceCooker: { enabled: true, program: "White Rice / Mixed", water: "Brühe (Standard)", notes: "Fisch gibt Feuchtigkeit ab." },
  },

  // DONNERSTAG
  {
    id: "do-f",
    title: "Savory Parmesan Oatmeal",
    desc: "Haferbrei nach Risotto-Art mit Brühe, Parmesan und einem hartgekochten Ei.",
    story: "Ein herzhaftes Frühstück, das dich wie eine warme Decke einhüllt. Der Parmesan schmilzt in den Haferflocken und macht sie unfassbar cremig.",
    target: "≈65 g KH (2 P.) · Protein ≈22 g p. P.",
    ingredients: [
      "Haferflocken 100 g",
      "Gemüsebrühe 450 ml",
      "Parmesan (gerieben) 30 g",
      "Eier (hartgekocht) 2 Stück",
      "Frühlingszwiebel 10 g"
    ],
    steps: [
      "Haferflocken in der Brühe aufkochen und einköcheln lassen.",
      "Wenn der Brei cremig ist, den Topf vom Herd nehmen und den Parmesan einrühren.",
      "Die hartgekochten Eier pellen, halbieren und auf den Brei setzen.",
      "Mit gehackten Frühlingszwiebeln garnieren."
    ],
    checks: "Balanced ✓ · Schwangerschaft ✓ (Eier komplett hartkochen) · Diabetes ✓",
    swaps: "Eier ↔ Tofu-Würfel",
    side: "Tee.",
    remind: true,
    riceCooker: { enabled: false },
  },
  {
    id: "do-m",
    title: "Airfryer Gnocchi mit Zucchini",
    desc: "Außen krosse Gnocchi, geröstet mit Zucchini-Würfeln und mediterranen Gewürzen.",
    story: "Ein geniales Blech-Gericht, das im Airfryer noch schneller geht. Die Gnocchi werden wie kleine Kartoffelkroketten: außen knusprig und innen fluffig.",
    target: "≈85 g KH (2 P.) · Protein ≈15 g p. P. (mit Käse mehr)",
    ingredients: [
      "Gnocchi (Kühlregal) 300 g",
      "Zucchini (gewürfelt) 200 g",
      "Olivenöl 1 EL",
      "Italienische Kräuter 1 TL",
      "Feta (pasteurisiert) 50 g"
    ],
    steps: [
      "Gnocchi und Zucchini-Würfel in einer Schüssel gut mit Olivenöl und Kräutern vermengen.",
      "In den Airfryer geben und bei 190°C ca. 12-15 Minuten rösten. Zwischendurch gut durchschütteln.",
      "Auf Teller verteilen und den Feta darüber bröseln."
    ],
    checks: "Balanced ✓ · Schwangerschaft ✓ (Feta pasteurisiert) · Diabetes ✓",
    swaps: "Zucchini ↔ Paprika",
    side: "-",
    remind: false,
    riceCooker: { enabled: false },
  },
  {
    id: "do-a",
    title: "Balsamico-Schwein & Zwiebel-Reis (Reiskocher)",
    desc: "Zartes Schweinefilet und rote Zwiebeln dämpfen in einer Balsamico-Brühe über dem Reis.",
    story: "Italienische Aromen im Reiskocher! Der Balsamico-Essig verleiht dem Fleisch eine großartige dunkle Farbe und eine angenehme, milde Säure, die in den Reis zieht.",
    target: "≈80 g KH (2 P.) · Protein ≈28 g p. P.",
    ingredients: [
      "Reis (roh) 120 g",
      "Schweinefilet (in Medaillons) 200 g",
      "Zwiebel (rot, in Ringen) 1 Stück",
      "Balsamico-Essig 2 EL",
      "Sojasauce 1 EL",
      "Gemüsebrühe 240 ml"
    ],
    steps: [
      "Fleisch kurz in Balsamico und Sojasauce wenden.",
      "Reis und Brühe in den Reiskocher füllen.",
      "Zwiebelringe und das Fleisch (inkl. Marinade) oben auflegen.",
      "Start drücken. Nach dem Kochen das Fleisch leicht zerteilen und alles auflockern."
    ],
    checks: "Balanced ✓ · Schwangerschaft ✓ (Schweinefilet dämpft sicher auf >80°C durch)",
    swaps: "Schweinefilet ↔ Hähnchenbrust",
    side: "Ein grüner Salat.",
    remind: true,
    riceCooker: { enabled: true, program: "Mixed / White Rice", water: "Brühe (Standard)", notes: "Essig verliert beim Kochen seine Schärfe." },
  },

  // FREITAG
  {
    id: "fr-f",
    title: "Jianbing Wrap Hack 煎饼 (Airfryer)",
    isViral: true,
    desc: "Chinesisches Streetfood als genialer Airfryer-Hack mit einem Wrap, Ei und Frühlingszwiebeln.",
    story: "Der Duft von Peking am Morgen. Da traditioneller Teig lange dauert, nehmen wir einen Wrap, bestreichen ihn dick mit Ei und backen ihn knusprig auf.",
    target: "≈65 g KH (2 P.) · Protein ≈18 g p. P.",
    ingredients: [
      "Vollkorn-Tortillas 2 Stück",
      "Eier 2 Stück",
      "Frühlingszwiebeln 30 g",
      "Hoisin-Sauce 1 EL",
      "Sesam 1 TL"
    ],
    steps: [
      "Ein verquirltes Ei auf einem Wrap verstreichen. Mit Frühlingszwiebeln und Sesam bestreuen.",
      "Im Airfryer bei 180°C ca. 5-7 Min backen, bis das Ei im Inneren KOMPLETT durchgestockt und der Rand kross ist.",
      "Herausnehmen, mit Hoisin-Sauce bestreichen, falten und servieren."
    ],
    checks: "Balanced ✓ · Schwangerschaft ✓ (Ei komplett durchbacken)",
    swaps: "Hoisin-Sauce ↔ Etwas Ketchup & Sojasauce",
    side: "Eine Tasse Jasmintee.",
    remind: true,
    riceCooker: { enabled: false },
  },
  {
    id: "fr-m",
    title: "Mapo Tofu (Mild) 麻婆豆腐",
    desc: "Sichuan-Klassiker ohne die extreme Schärfe. Tofu und Hackfleisch in pikanter Sauce.",
    story: "Wir machen eine fantastische, familientaugliche Version: Viel weicher Tofu, mageres Hack und Sojasauce. Wärmend, umamireich und perfekt zu Reis.",
    target: "≈80 g KH (2 P.) · Protein ≈28 g p. P.",
    ingredients: [
      "Seidentofu oder weicher Tofu 300 g",
      "Schweinehack (mager) 100 g",
      "Sojasauce 2 EL",
      "Austernsauce 1 EL",
      "Knoblauch 1 Zehe",
      "Reis (gekocht) 150 g"
    ],
    steps: [
      "Tofu würfeln.",
      "Hackfleisch und Knoblauch im Wok krümelig und GANZ durch braten.",
      "Saucen und 100ml Wasser zugeben. Tofu hineingleiten lassen.",
      "3 Min sanft köcheln. Über Reis servieren."
    ],
    checks: "Balanced ✓ · Schwangerschaft ✓ (Hack komplett durch, Tofu heiß)",
    swaps: "Schweinehack ↔ Hähnchenhack",
    side: "-",
    remind: false,
    riceCooker: { enabled: false },
  },
  {
    id: "fr-a",
    title: "Seafood Paella/Risotto 海鲜烩饭 (Reiskocher)",
    desc: "Bunter Reis mit Meeresfrüchten, Paprika und Erbsen, butterweich aus dem Reiskocher.",
    story: "Eine Fusion aus asiatischer Reiskocher-Technik und spanisch-italienischen Zutaten. Schmeckt wie Paella ohne großen Aufwand und langes Rühren am Herd.",
    target: "≈82 g KH (2 P.) · Protein ≈24 g p. P.",
    ingredients: [
      "Reis (roh) 120 g",
      "Meeresfrüchte-Mix (TK, aufgetaut) 200 g",
      "Paprika (gewürfelt) 50 g",
      "Gemüsebrühe 240 ml",
      "Erbsen (TK) 50 g",
      "Butter 10 g"
    ],
    steps: [
      "Reis, Brühe und Paprika in den Topf.",
      "Aufgetauten Meeresfrüchte-Mix und Erbsen dazu.",
      "Kochen. Am Ende Butter unterrühren."
    ],
    checks: "Balanced ✓ · Schwangerschaft ✓ (Mix muss >80°C erhitzt werden - im Reiskocher sicher!)",
    swaps: "Meeresfrüchte-Mix ↔ Nur Garnelen",
    side: "Ein Spritzer frische Zitrone.",
    remind: true,
    riceCooker: { enabled: true, program: "Mixed / White Rice", water: "Brühe (Standard)", notes: "TK-Mix vorher gut abtropfen lassen." },
  },

  // SAMSTAG
  {
    id: "sa-f",
    title: "Airfryer Pizza Bagel 🍕",
    isViral: true,
    desc: "Aufgeschnittene Vollkorn-Bagels, belegt wie Pizza und im Airfryer knusprig überbacken.",
    story: "Ein absoluter Internet-Favorit! Die Bagels werden durch die Heißluft außen kross und bleiben innen weich. Ein geniales Frühstück für das Wochenende.",
    target: "≈65 g KH (2 P.) · Protein ≈20 g p. P.",
    ingredients: [
      "Vollkorn-Bagel 2 Stück",
      "Passierte Tomaten 4 EL",
      "Mozzarella (pasteurisiert) 60 g",
      "Italienische Kräuter 1 TL",
      "Cherrytomaten 50 g"
    ],
    steps: [
      "Bagels aufschneiden.",
      "Hälften mit passierten Tomaten bestreichen und mit Kräutern würzen.",
      "Mozzarella und halbierte Cherrytomaten darauf verteilen.",
      "Im Airfryer bei 180°C ca. 6-8 Minuten backen, bis der Käse goldbraun blubbert."
    ],
    checks: "Balanced ✓ · Schwangerschaft ✓ (Käse schmilzt komplett durch) · Diabetes ✓",
    swaps: "Bagel ↔ Vollkorn-Toast",
    side: "Kaffee.",
    remind: true,
    riceCooker: { enabled: false },
  },
  {
    id: "sa-m",
    title: "Crispy Airfryer Tofu (Italian Style)",
    desc: "Tofuwürfel mit einer Kruste aus dem Airfryer, geschwenkt in einer fruchtigen Tomatensauce.",
    story: "Tofu funktioniert auch fabelhaft mit mediterranen Aromen. Im Airfryer gelingt die Kruste fettsparend und behält dennoch ihren hervorragenden Biss in der Nudelsauce.",
    target: "≈80 g KH (2 P.) · Protein ≈22 g p. P.",
    ingredients: [
      "Fester Tofu 300 g",
      "Maisstärke 2 EL",
      "Passierte Tomaten 150 ml",
      "Italienische Kräuter 1 TL",
      "Vollkorn-Penne (gekocht) 150 g"
    ],
    steps: [
      "Tofu würfeln, gut abtupfen und in Maisstärke wenden.",
      "Im Airfryer bei 200°C ca. 12-15 Min backen, bis er knusprig ist.",
      "In einer Pfanne die passierten Tomaten mit Kräutern erhitzen.",
      "Den Tofu und die Nudeln in der Sauce schwenken."
    ],
    checks: "Balanced ✓ · Diabetes ✓ · Schwangerschaft ✓",
    swaps: "Tofu ↔ Hähnchenbrust",
    side: "-",
    remind: false,
    riceCooker: { enabled: false },
  },
  {
    id: "sa-a",
    title: "Risi e Bisi (Erbsen-Schinken Reis im Reiskocher)",
    desc: "Ein cremiger italienischer Frühlingsklassiker. Reis mit Erbsen und Schinken aus dem Reiskocher.",
    story: "Eine Mischung aus Suppe und Risotto. Im Reiskocher wird es zum perfekten, stressfreien Feierabendgericht und kocht sich von ganz allein.",
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
      "In den letzten 5 Minuten die aufgetauten Erbsen dazugeben (dann bleiben sie leuchtend grün).",
      "Nach dem Kochen Parmesan und Butter kräftig unterrühren, bis alles wunderbar schlotzig ist."
    ],
    checks: "Balanced ✓ · Schwangerschaft ✓ (Käse pasteurisiert, Schinken erhitzt)",
    swaps: "Kochschinken ↔ Speckwürfel",
    side: "Ein Tomatensalat.",
    remind: true,
    riceCooker: { enabled: true, program: "White Rice / Mixed", water: "Brühe (etwas mehr für Risi e Bisi Textur)", notes: "Soll am Ende sehr cremig sein." },
  },

  // SONNTAG
  {
    id: "so-f",
    title: "Fluffy Ricotta Pancakes",
    desc: "Fluffige Pfannkuchen mit Ricotta-Käse im Teig. Ein italienischer Frühstückstraum.",
    story: "Der Ricotta sorgt dafür, dass die Pancakes unglaublich weich und saftig werden, ohne schwer im Magen zu liegen. Ein geniales Frühstück, um nebenher Blogbeiträge zu tippen.",
    target: "≈75 g KH (2 P.) · Protein ≈22 g p. P.",
    ingredients: [
      "Vollkornmehl 100 g",
      "Ricotta (pasteurisiert) 100 g",
      "Eier 2 Stück",
      "Milch 50 ml",
      "Backpulver 1 TL",
      "Honig 1 EL"
    ],
    steps: [
      "Ricotta, Eier, Milch und Honig glatt rühren.",
      "Mehl und Backpulver zügig unterheben (nicht zu viel rühren!).",
      "In der Pfanne bei mittlerer Hitze durchbacken, bis sie fest und goldbraun sind."
    ],
    checks: "Balanced ✓ · Schwangerschaft ✓ (Teig komplett durchbacken, Ricotta pasteurisiert)",
    swaps: "Ricotta ↔ Magerquark",
    side: "Ein paar Beeren.",
    remind: true,
    riceCooker: { enabled: false },
  },
  {
    id: "so-m",
    title: "Viral Crispy Quinoa Salad",
    isViral: true,
    desc: "Italienisch angehauchter Quinoa-Salat, bei dem der Quinoa im Airfryer extrem knusprig gebacken wird.",
    story: "Quinoa-Salat kennt jeder. Aber gekochten Quinoa im Airfryer zu rösten, bis er crunchig wie Nüsse wird, ist ein Gamechanger!",
    target: "≈70 g KH (2 P.) · Protein ≈18 g p. P.",
    ingredients: [
      "Quinoa (bereits gekocht!) 150 g",
      "Olivenöl 1 EL",
      "Cherrytomaten & Gurke 200 g",
      "Käse (Feta, pasteurisiert) 50 g",
      "Basilikum & Balsamico-Essig"
    ],
    steps: [
      "Gekochten Quinoa mit Olivenöl mischen. Im Airfryer bei 190°C ca. 10-15 Min rösten, bis er knusprig wird. (Vorsicht, fliegt leicht rum, evtl. Backpapier nutzen).",
      "Gemüse klein schneiden, mit Balsamico und Basilikum anmachen.",
      "Salat anrichten, Käse darüberbröseln und den krossen Quinoa als Crunch-Topping darübergeben."
    ],
    checks: "Balanced ✓ · Schwangerschaft ✓ (Käse pasteurisiert)",
    swaps: "Quinoa ↔ Kichererbsen",
    side: "-",
    remind: false,
    riceCooker: { enabled: false },
  },
  {
    id: "so-a",
    title: "Gyudon-Style Beef Rice 牛丼 (Reiskocher)",
    desc: "Hauchdünnes Rindfleisch und weiche Zwiebeln dämpfen direkt auf dem Reis.",
    story: "Als asiatischer Ausgleich am Sonntagabend! Ein japanischer Fast-Food-Klassiker, adaptiert für den Reiskocher. Das Fleisch bleibt zart, der Reis saugt die Marinade komplett auf.",
    target: "≈80 g KH (2 P.) · Protein ≈26 g p. P.",
    ingredients: [
      "Reis (roh) 120 g",
      "Rindfleisch (hauchdünne Hotpot-Scheiben) 150 g",
      "Zwiebel (rot, in Ringen) 1 Stück",
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
];

export default function Woche25DE() {
  return (
    <PlanTemplate
      meta={meta}
      data={DATA}
      dayNames={DAY_NAME_DE}
      uiTitles={UI_TITLES}
      subtitle="Italien & Asia Fusion · Airfryer-Hacks · Balanced"
      heroChips={["Woche 25", "Italien & Asia Fusion", "Täglich 1× 🍚 Reiskocher"]}
    />
  );
}

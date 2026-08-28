/*
  Moving Kitchen Tales – Woche 7 (Start: 2026-02-09)
  Fokus: CN Wok & Schwein, Airfryer-Hacks, + Kroatien/Schweden/Italien.
  Inhalt: Balanced, Schwangerschaftssicher (alles durch, pasteurisiert), Diabetesfreundlich.
*/

import React from "react";
import PlanTemplate from "../PlanTemplate";

export const meta = {
  title: "Woche 7",
  startDate: "2026-02-09",
  id: "woche-7-2026-02-09",
  lang: "de",
  sidebar: "Woche 7 (2026-02-09)",
};

const DAY_NAME_DE = {
  mo: "Montag (2026-02-09)",
  di: "Dienstag (2026-02-10)",
  mi: "Mittwoch (2026-02-11)",
  do: "Donnerstag (2026-02-12)",
  fr: "Freitag (2026-02-13)",
  sa: "Samstag (2026-02-14)",
  so: "Sonntag (2026-02-15)",
};

const UI_TITLES = {
  main: "Rezepte Woche 7",
  list: "Einkaufsliste Woche 7",
};

export const DATA = [
  // MONTAG
  {
    id: "mo-f",
    title: "Airfryer Frühstücks-Bao (CN)",
    desc: "Schnell aufgebackene Bao-Buns mit durchgebratenem Rührei.",
    story: "Bao Buns werden normalerweise gedämpft. Der Airfryer-Hack macht sie außen leicht knusprig und spart morgens enorm viel Zeit!",
    target: "≈60 g KH (2 P.) · Protein ≈20 g p. P.",
    ingredients: [
      "Bao Buns (TK) 4 Stück",
      "Eier 4 Stück",
      "Frühlingszwiebel 20 g",
      "Sojasauce 1 EL",
      "Sesamöl 1 TL"
    ],
    steps: [
      "Bao Buns im Airfryer bei 160°C ca. 5 Min aufbacken.",
      "Eier mit Frühlingszwiebeln und Sojasauce verquirlen.",
      "In einer Pfanne zu Rührei braten (komplett durchgaren!).",
      "Buns aufschneiden und füllen."
    ],
    checks: "Balanced ✓ · Schwangerschaft ✓ (Ei komplett fest) · Diabetes ✓",
    swaps: "Bao Buns ↔ Vollkorn-Pita",
    side: "Warmer Jasmintee.",
    remind: true,
    riceCooker: { enabled: false },
  },
  {
    id: "mo-m",
    title: "Kroatischer Djuvec-Wok mit Schwein (HR)",
    desc: "Schnelle Pfannen-Version des Balkan-Klassikers mit Reis, Ajvar und Schweinefilet.",
    story: "Urlaub in Kroatien gefällig? Das eigentlich stundenlang geschmorte Gemüsegericht wird hier im Wok zum Express-Genuss. Ajvar liefert die perfekte Würze.",
    target: "≈80 g KH (2 P.) · Protein ≈28 g p. P.",
    ingredients: [
      "Gekochter Reis (vom Vortag) 200 g",
      "Schweinefilet (Streifen) 200 g",
      "Paprika 100 g",
      "Erbsen (TK) 50 g",
      "Mildes Ajvar 2 EL",
      "Gemüsebrühe 50 ml"
    ],
    steps: [
      "Schweinefilet im Wok scharf anbraten und komplett durchgaren. Herausnehmen.",
      "Paprika und Erbsen im Wok anbraten.",
      "Reis, Fleisch und Ajvar unterheben. Mit Brühe ablöschen.",
      "Schwenken, bis die Flüssigkeit aufgesaugt ist."
    ],
    checks: "Balanced ✓ · Schwangerschaft ✓ (Schweinefleisch gut durch!) · Diabetes ✓",
    swaps: "Schwein ↔ Hähnchenbrust",
    side: "Krautsalat.",
    remind: false,
    riceCooker: { enabled: false },
  },
  {
    id: "mo-a",
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

  // DIENSTAG
  {
    id: "di-f",
    title: "Fan Qie Chao Dan 番茄炒蛋 (Wok)",
    desc: "Der chinesische Hausmannskost-Klassiker: Tomaten und Ei auf Brot.",
    story: "Dieses Gericht lernt jedes chinesische Kind als Erstes. Es ist simpel, wärmend und die milde Tomatensäure macht sofort wach.",
    target: "≈65 g KH (2 P.) · Protein ≈22 g p. P.",
    ingredients: [
      "Tomaten (weich) 2 Stück",
      "Eier 4 Stück",
      "Knoblauch 1 Zehe",
      "Sojasauce 1 TL",
      "Ketchup 1 TL",
      "Vollkornbrot 2-4 Scheiben"
    ],
    steps: [
      "Eier verquirlen, im Wok vollständig stocken lassen und herausnehmen.",
      "Tomaten würfeln und mit Knoblauch weichkochen, bis eine Sauce entsteht.",
      "Sojasauce und Ketchup einrühren, Eier wieder dazugeben.",
      "Auf geröstetem Vollkornbrot servieren."
    ],
    checks: "Balanced ✓ · Schwangerschaft ✓ (Eier komplett durchgebraten)",
    swaps: "Brot ↔ Reis",
    side: "-",
    remind: true,
    riceCooker: { enabled: false },
  },
  {
    id: "di-m",
    title: "Tang Cu Li Ji 糖醋里脊 (Airfryer S&S)",
    desc: "Schweinefleisch süß-sauer. Das Fleisch wird im Airfryer fettarm geknuspert.",
    story: "Süß-Sauer ist ein Weltstar. Durch den Airfryer sparen wir extrem viel Frittier-Öl, behalten aber den geliebten Crunch bei.",
    target: "≈88 g KH (2 P.) · Protein ≈28 g p. P.",
    ingredients: [
      "Schweinefilet (in Stücken) 250 g",
      "Maisstärke 2 EL",
      "Paprika 100 g",
      "Ananas (Dose, ungezuckert) 50 g",
      "Ketchup & Reisessig je 2 EL",
      "Gekochter Reis 200 g"
    ],
    steps: [
      "Fleisch in Stärke wenden. Im Airfryer bei 200°C ca. 12 Min backen (durchgaren!).",
      "Im Wok Paprika und Ananas anbraten.",
      "Ketchup, Essig und etwas Wasser aufkochen.",
      "Knuspriges Fleisch kurz in der Sauce schwenken (nicht zu lang, sonst wird's weich!)."
    ],
    checks: "Balanced ✓ · Schwangerschaft ✓ (Schwein durchgegart)",
    swaps: "Schwein ↔ Fester Tofu",
    side: "Reis.",
    remind: false,
    riceCooker: { enabled: false },
  },
  {
    id: "di-a",
    title: "Pilz-Pancetta-Risotto (IT Reiskocher)",
    desc: "Cremiges Risotto aus dem Reiskocher mit Speck und Pilzen.",
    story: "Wer sagt, dass der Reiskocher nur asiatisch kann? Das ewige Risotto-Rühren am Herd entfällt hier komplett.",
    target: "≈82 g KH (2 P.) · Protein ≈20 g p. P.",
    ingredients: [
      "Risottoreis (oder Rundkorn) 120 g",
      "Champignons 150 g",
      "Pancetta oder Speck 50 g",
      "Gemüsebrühe 240 ml",
      "Parmesan (pasteurisiert) 20 g"
    ],
    steps: [
      "Speck und Pilze im Airfryer oder Pfanne 3 Min anrösten (optional für mehr Aroma).",
      "Reis, Brühe, Pilze und Speck in den Reiskocher.",
      "Start drücken.",
      "Wenn fertig: Parmesan unterrühren, bis es herrlich cremig wird."
    ],
    checks: "Balanced ✓ · Schwangerschaft ✓ (Käse pasteurisiert, Speck erhitzt)",
    swaps: "Pancetta ↔ Räuchertofu",
    side: "Ein frischer, grüner Salat.",
    remind: true,
    riceCooker: { enabled: true, program: "White Rice", water: "Brühe (Standard)", notes: "Risotto ohne Rühren." },
  },

  // MITTWOCH
  {
    id: "mi-f",
    title: "Schweinehack-Congee 瘦肉粥 (Reiskocher)",
    desc: "Wohlig wärmender Reisbrei mit magerem Schweinehack und feinem Ingwer.",
    story: "Ein morgendlicher Magen-Schmeichler aus Südchina. Das Hackfleisch macht lange satt, der Ingwer heizt dem Kreislauf ein.",
    target: "≈70 g KH (2 P.) · Protein ≈22 g p. P.",
    ingredients: [
      "Reis (roh) 80 g",
      "Hühnerbrühe 800 ml",
      "Schweinehack (mager) 150 g",
      "Ingwer (feine Streifen) 10 g",
      "Frühlingszwiebel 10 g",
      "Sojasauce 1 EL"
    ],
    steps: [
      "Hackfleisch mit Sojasauce mischen und zerpflücken.",
      "Reis und Brühe im Reiskocher (Porridge-Modus) ca. 50 Min kochen.",
      "Hackfleisch und Ingwer in den letzten 15 Min zufügen und sicher durchgaren lassen.",
      "Mit Frühlingszwiebeln servieren."
    ],
    checks: "Balanced ✓ · Schwangerschaft ✓ (Hackfleisch vollständig durchkochen!)",
    swaps: "Schweinehack ↔ Hähnchenhack",
    side: "Tee.",
    remind: true,
    riceCooker: { enabled: true, program: "Porridge / Congee", water: "1:10 Ratio", notes: "Hackfleisch nicht am Stück reinwerfen." },
  },
  {
    id: "mi-m",
    title: "Gnocchi Stir-fry (IT meets CN)",
    desc: "Italienische Gnocchi, im Wok gebraten wie chinesische Reiskuchen (Nian Gao).",
    story: "Die Textur von Gnocchi ähnelt chinesischen Reiskuchen extrem. Im heißen Wok mit Sojasauce und Pak Choi entsteht ein unglaublicher Crossover-Hit!",
    target: "≈85 g KH (2 P.) · Protein ≈20 g p. P.",
    ingredients: [
      "Gnocchi (Kühlregal) 300 g",
      "Schweinegeschnetzeltes 100 g",
      "Pak Choi 150 g",
      "Sojasauce 2 EL",
      "Austernsauce 1 EL",
      "Knoblauch 1 Zehe"
    ],
    steps: [
      "Schweinefleisch im Wok anbraten, bis es durch ist.",
      "Gnocchi direkt aus der Packung dazugeben und in wenig Öl leicht anknuspern.",
      "Knoblauch, Pak Choi und Saucen rein.",
      "3-4 Min pfannenrühren, bis die Gnocchi weich sind."
    ],
    checks: "Balanced ✓ · Schwangerschaft ✓ (Fleisch durch)",
    swaps: "Gnocchi ↔ Koreanische Tteokbokki",
    side: "-",
    remind: false,
    riceCooker: { enabled: false },
  },
  {
    id: "mi-a",
    title: "Airfryer Siu Yuk 脆皮烧肉 (Crispy Pork)",
    desc: "Chinesischer knuspriger Schweinebauch mit einer genialen Kruste.",
    story: "Das Krachen der Kruste ist Musik. Im Airfryer bläst sich die Schwarte perfekt auf, während überschüssiges Fett einfach abtropft.",
    target: "≈80 g KH (2 P.) · Protein ≈30 g p. P.",
    ingredients: [
      "Schweinebauch (mit Schwarte) 300 g",
      "Salz (für Kruste) 1 EL",
      "Fünf-Gewürze-Pulver 1 TL",
      "Essig (zum Bepinseln)",
      "Reis (roh) 120 g",
      "Gurke 100 g"
    ],
    steps: [
      "Schwarte oft einstecken, mit Essig bepinseln und dick mit Salz bedecken (zieht Feuchtigkeit). Fleischseite würzen.",
      "Bei 180°C 25 Min im Airfryer. Salzschicht entfernen, bei 200°C ca. 10 Min Kruste poppen lassen.",
      "Reis kochen.",
      "Fleisch (muss durch sein!) in Scheiben schneiden. Mit Reis und frischer Gurke servieren."
    ],
    checks: "Balanced ✓ · Schwangerschaft ✓ (Fleisch sehr hoch erhitzt)",
    swaps: "Schweinebauch ↔ Hähnchenschenkel (mit Haut)",
    side: "Reis und Gurke.",
    remind: true,
    riceCooker: { enabled: false },
  },

  // DONNERSTAG
  {
    id: "do-f",
    title: "Italienische Ricotta-Pancakes",
    desc: "Unglaublich weiche Pancakes, dank Ricotta im Teig.",
    story: "Ein Frühstück wie in einem Straßencafé in Rom. Der Käse macht den Teig wunderbar fluffig, feucht und eiweißreich.",
    target: "≈75 g KH (2 P.) · Protein ≈22 g p. P.",
    ingredients: [
      "Mehl 100 g",
      "Ricotta (pasteurisiert) 100 g",
      "Eier 2 Stück",
      "Milch 50 ml",
      "Backpulver 1 TL",
      "Honig 1 EL"
    ],
    steps: [
      "Ricotta, Eier und Milch glatt verquirlen.",
      "Mehl und Backpulver vorsichtig unterheben.",
      "In einer beschichteten Pfanne kleine Pancakes von beiden Seiten goldbraun durchbacken (nicht flüssig im Kern lassen!).",
      "Mit Honig beträufeln."
    ],
    checks: "Balanced ✓ · Schwangerschaft ✓ (Ricotta pasteurisiert, Teig durchgebacken)",
    swaps: "Ricotta ↔ Quark",
    side: "Beeren.",
    remind: true,
    riceCooker: { enabled: false },
  },
  {
    id: "do-m",
    title: "Zha Jiang Mian 炸酱面 (Wok)",
    desc: "Nordchinesische Nudeln mit einer dunklen, herzhaften Hackfleisch-Sauce.",
    story: "Die 'Spaghetti Bolognese' Pekings. Die dunkle Bohnenpaste liefert den unverwechselbaren, tiefen Umami-Geschmack.",
    target: "≈86 g KH (2 P.) · Protein ≈24 g p. P.",
    ingredients: [
      "Weizennudeln 150 g",
      "Schweinehack 150 g",
      "Süße Bohnenpaste (Hoisin geht auch) 2 EL",
      "Gurke (in Streifen) 50 g",
      "Sojasauce 1 EL",
      "Ingwer 5 g"
    ],
    steps: [
      "Hackfleisch und Ingwer im Wok krümelig und gut durch braten.",
      "Bohnenpaste und Sojasauce einrühren, mit etwas Wasser andicken.",
      "Nudeln kochen und abtropfen.",
      "Nudeln in Schüsseln geben, Fleischsauce darüber, mit Gurkenstiften toppen."
    ],
    checks: "Balanced ✓ · Schwangerschaft ✓ (Hack komplett durch) · Diabetes ✓",
    swaps: "Weizennudeln ↔ Zucchini-Nudeln Mix",
    side: "-",
    remind: false,
    riceCooker: { enabled: false },
  },
  {
    id: "do-a",
    title: "Balkan Cevapcici-Reistopf (Reiskocher)",
    desc: "Würzige Fleischröllchen, direkt auf dem Reis dampfgegart.",
    story: "Cevapcici sind in Kroatien Kult. Im Reiskocher geben sie ihren herzhaften Saft direkt an den Reis ab – ein geniales One-Pot-Wunder!",
    target: "≈82 g KH (2 P.) · Protein ≈28 g p. P.",
    ingredients: [
      "Reis (roh) 120 g",
      "Cevapcici (frisch oder TK) 6 Stück",
      "Tomatenmark 1 EL",
      "Paprikapulver (edelsüß) 1 TL",
      "Gemüsebrühe 240 ml"
    ],
    steps: [
      "Reis, Brühe, Tomatenmark und Paprika im Reiskocher gut mischen.",
      "Die Cevapcici oben auf den roten Reis legen.",
      "Reiskocher starten.",
      "Wenn fertig, die Cevapcici leicht zerteilen und mit dem Reis vermengen."
    ],
    checks: "Balanced ✓ · Schwangerschaft ✓ (Fleischröllchen garen im Dampf >80°C sicher durch)",
    swaps: "Cevapcici ↔ Vegane Röllchen",
    side: "Ein Löffel Ajvar dazu.",
    remind: true,
    riceCooker: { enabled: true, program: "Mixed / White Rice", water: "Standard", notes: "TK-Cevapcici vorher leicht antauen lassen." },
  },

  // FREITAG
  {
    id: "fr-f",
    title: "Toast Skagen (Schwedischer Krabbentoast)",
    desc: "Ein eleganter, cremiger Krabbensalat auf knusprigem Toast.",
    story: "Der berühmteste schwedische Vorspeisenteller. Schmeckt nach Urlaub am Meer. Wir nutzen pasteurisierte Mayo für absolute Sicherheit.",
    target: "≈65 g KH (2 P.) · Protein ≈20 g p. P.",
    ingredients: [
      "Garnelen/Krabben (bereits gekocht!) 150 g",
      "Mayo (aus der Tube, pasteurisiert) 2 EL",
      "Dill (frisch) 1 EL",
      "Zitrone 1 TL",
      "Toastbrot (Vollkorn) 4 Scheiben"
    ],
    steps: [
      "Gekochte Garnelen (falls TK, gut auftauen und abtrocknen) mit Mayo, Dill und Zitronensaft mischen.",
      "Toast im Toaster oder Pfanne goldbraun rösten.",
      "Krabbensalat großzügig auf dem Toast verteilen."
    ],
    checks: "Balanced ✓ · Schwangerschaft ✓ (Garnelen gekocht, Mayo pasteurisiert)",
    swaps: "Garnelen ↔ Gekochtes Ei (gehackt)",
    side: "Gurkenscheiben.",
    remind: true,
    riceCooker: { enabled: false },
  },
  {
    id: "fr-m",
    title: "Airfryer Panko-Tofu mit Asia-Dip",
    desc: "Knusprige Tofuwürfel im Japan-Style, fettarm gebacken.",
    story: "Panko (japanisches Paniermehl) ist der König des Crunches. Im Airfryer wird der Tofu wie ein kleiner Schwamm für die süß-salzige Sauce.",
    target: "≈75 g KH (2 P.) · Protein ≈22 g p. P.",
    ingredients: [
      "Fester Tofu 250 g",
      "Panko 40 g",
      "Mehl 1 EL",
      "Ei 1 Stück",
      "Sojasauce & Agavendicksaft 2 EL",
      "Reis 100 g"
    ],
    steps: [
      "Tofu würfeln.",
      "In Mehl, Ei und Panko wenden.",
      "Im Airfryer bei 190°C ca. 12-15 Min backen, bis sie goldbraun sind.",
      "Mit einem Dip aus Sojasauce und Agave sowie Reis servieren."
    ],
    checks: "Balanced ✓ · Schwangerschaft ✓ (Ei wird gebacken)",
    swaps: "Tofu ↔ Hähnchenbrust",
    side: "Ein paar Salatblätter.",
    remind: false,
    riceCooker: { enabled: false },
  },
  {
    id: "fr-a",
    title: "Shanghai Gemüsereis 上海菜饭 (Reiskocher)",
    desc: "Komfort pur: Reis, der mit Speck und klein gehacktem Pak Choi gekocht wird.",
    story: "Ein echter Shanghai-Klassiker. Traditionell im Tontopf gemacht, gelingt er im Reiskocher genauso gut. Der Speck bringt die Magie.",
    target: "≈84 g KH (2 P.) · Protein ≈18 g p. P.",
    ingredients: [
      "Reis (roh) 120 g",
      "Pak Choi 150 g",
      "Speckwürfel oder Schinken 50 g",
      "Hühnerbrühe 240 ml",
      "Schmalz oder Öl 1 TL"
    ],
    steps: [
      "Pak Choi sehr klein schneiden.",
      "Reis, Brühe und Speck in den Reiskocher geben und starten.",
      "Etwa 5 Minuten vor Ende (wenn das Wasser weg ist) den Pak Choi und das Öl unterrühren. (So bleibt er grün!)"
    ],
    checks: "Balanced ✓ · Schwangerschaft ✓ (Speck kocht sicher mit)",
    swaps: "Speck ↔ Räuchertofu",
    side: "Spiegelei (vollständig gebraten).",
    remind: true,
    riceCooker: { enabled: true, program: "Mixed / White Rice", water: "Brühe Standard", notes: "Gemüse am Ende rein, sonst wird es grau." },
  },

  // SAMSTAG
  {
    id: "sa-f",
    title: "Kroatische Fritaja mit Spargel (Wok)",
    desc: "Ein herzhaftes Rührei mit (TK-)Spargel und Schinken.",
    story: "In Istrien ist Fritaja (Frittata) ein Nationalgericht, besonders im Frühling. Wir machen es im Wok, da geht es superschnell.",
    target: "≈60 g KH (2 P.) · Protein ≈24 g p. P.",
    ingredients: [
      "Eier 4 Stück",
      "Spargel (TK oder Glas, abgetropft) 100 g",
      "Frühlingszwiebel 10 g",
      "Kochschinken 40 g",
      "Vollkornbrot 2-4 Scheiben"
    ],
    steps: [
      "Spargel und Schinken im heißen Wok anbraten.",
      "Verquirlte Eier dazugeben.",
      "Komplett durchstocken lassen (für die Schwangerschaft: keine glänzenden, feuchten Stellen mehr!).",
      "Mit Brot servieren."
    ],
    checks: "Balanced ✓ · Schwangerschaft ✓ (Eier durchgebraten)",
    swaps: "Spargel ↔ Lauch",
    side: "Kaffee.",
    remind: true,
    riceCooker: { enabled: false },
  },
  {
    id: "sa-m",
    title: "Airfryer Köttbullar (Svenska)",
    desc: "Schwedische Hackbällchen aus dem Airfryer, dazu schnelle Rahmsauce.",
    story: "Hackbällchen im Airfryer werden rundum perfekt braun, ohne dass man am Herd stehen und sie wenden muss.",
    target: "≈85 g KH (2 P.) · Protein ≈28 g p. P.",
    ingredients: [
      "Rinderhack 200 g",
      "Paniermehl 20 g",
      "Milch 30 ml",
      "Sojasauce 1 TL",
      "Brühe & Sahne (pasteurisiert) für Sauce",
      "Kartoffeln 300 g"
    ],
    steps: [
      "Hack mit in Milch eingeweichtem Paniermehl kneten, Bällchen formen.",
      "Im Airfryer bei 180°C ca. 12-15 Min backen (komplett durchgaren!).",
      "Kartoffeln kochen. In einer kleinen Pfanne Brühe und Sahne aufkochen, leicht andicken.",
      "Bällchen in die Sauce geben."
    ],
    checks: "Balanced ✓ · Schwangerschaft ✓ (Fleischbällchen gut durch)",
    swaps: "Kartoffeln ↔ Nudeln",
    side: "Preiselbeeren.",
    remind: false,
    riceCooker: { enabled: false },
  },
  {
    id: "sa-a",
    title: "Yu Xiang Rou Si 鱼香肉丝 (Wok)",
    desc: "Feine Schweinefleischstreifen in einer milden 'fischduftenden' Knoblauchsauce.",
    story: "Der Name trügt: Hier ist kein Fisch drin! Die Sauce aus Knoblauch, Essig und Soja wurde früher für Fisch genutzt. Weltbekannt und genial lecker.",
    target: "≈84 g KH (2 P.) · Protein ≈26 g p. P.",
    ingredients: [
      "Schweineschnitzel (feine Streifen) 200 g",
      "Karotte & Zucchini (feine Streifen) 150 g",
      "Sojasauce 2 EL",
      "Reisessig 1 EL",
      "Knoblauch 1 Zehe",
      "Reis (gekocht) 200 g"
    ],
    steps: [
      "Fleischstreifen im Wok scharf anbraten, bis sie durch sind.",
      "Gemüsestreifen kurz mitbraten.",
      "Sauce aus Soja, Essig, wenig Zucker und Stärke angießen.",
      "Kurz aufkochen, bis es glänzt, über den Reis geben."
    ],
    checks: "Balanced ✓ · Schwangerschaft ✓ (Schwein durchgegart)",
    swaps: "Schwein ↔ Hühnchenbrust",
    side: "Reis.",
    remind: true,
    riceCooker: { enabled: false },
  },

  // SONNTAG
  {
    id: "so-f",
    title: "Jianbing 煎饼 (mit Airfryer-Crunch)",
    desc: "Chinesischer Streetfood-Crêpe. Den frittierten Innenteil machen wir im Airfryer.",
    story: "Jianbing ist das beste Frühstück Chinas. Der Knusper im Inneren (Baocui) wird oft frittiert. Wir backen einfach Wan-Tan-Teigblätter im Airfryer auf!",
    target: "≈75 g KH (2 P.) · Protein ≈18 g p. P.",
    ingredients: [
      "Mehl 80 g",
      "Eier 2 Stück",
      "Wan-Tan-Blätter 4 Stück",
      "Hoisin-Sauce oder Sojapaste 1 EL",
      "Frühlingszwiebel 10 g"
    ],
    steps: [
      "Wan-Tan-Blätter im Airfryer bei 180°C 3 Min knusprig backen.",
      "Dünnen Crêpe aus Mehl und Wasser in der Pfanne backen.",
      "Ei draufschlagen, verstreichen und durchbraten lassen (!).",
      "Wenden, mit Hoisin bestreichen, Knusper rein, falten."
    ],
    checks: "Balanced ✓ · Schwangerschaft ✓ (Ei komplett durchgaren)",
    swaps: "Wan-Tan-Blätter ↔ Nachos (ungewürzt)",
    side: "Tee.",
    remind: true,
    riceCooker: { enabled: false },
  },
  {
    id: "so-m",
    title: "Kroatische Pasticada (Schnell-Wok)",
    desc: "Rinderschmortopf-Aromen im Wok, serviert mit Gnocchi.",
    story: "Echte Pasticada schmort tagelang. Wir adaptieren die Aromen (Rotweinessig, Pflaumen, Tomate) für ein schnelles, herrlich süß-saures Wok-Ragout.",
    target: "≈85 g KH (2 P.) · Protein ≈24 g p. P.",
    ingredients: [
      "Rindfleisch (Minutensteaks/Geschnetzeltes) 200 g",
      "Gnocchi 300 g",
      "Passierte Tomaten 100 ml",
      "Backpflaumen 2 Stück",
      "Rotweinessig 1 EL"
    ],
    steps: [
      "Rindfleisch im Wok anbraten (gut durchgaren!).",
      "Tomaten, gehackte Pflaumen und Essig dazugeben.",
      "10 Min einköcheln lassen.",
      "Gnocchi kochen und in der Sauce schwenken."
    ],
    checks: "Balanced ✓ · Schwangerschaft ✓ (Fleisch durch)",
    swaps: "Rind ↔ Schwein",
    side: "Ein paar Tropfen Olivenöl am Ende.",
    remind: false,
    riceCooker: { enabled: false },
  },
  {
    id: "so-a",
    title: "Claypot Sausage Rice 煲仔饭 (Reiskocher)",
    desc: "Chinesische Lap Cheong Wurst gibt ihr süßliches Fett an den Reis ab.",
    story: "Ein Klassiker aus Guangzhou. Wenn du keine Lap Cheong (süße chinesische Wurst) hast, nimm Cabanossi. Es geht um das Fett, das in den Reis schmilzt.",
    target: "≈82 g KH (2 P.) · Protein ≈20 g p. P.",
    ingredients: [
      "Reis (roh) 120 g",
      "Lap Cheong (oder Cabanossi) 1-2 Stück",
      "Sojasauce 2 EL",
      "Sesamöl 1 TL",
      "Brokkoli oder Pak Choi 100 g"
    ],
    steps: [
      "Wurst in dünne Scheiben schneiden.",
      "Reis und Wasser in den Reiskocher, Wurst oben drauf legen.",
      "Kochen lassen.",
      "Brokkoli extra dämpfen. Am Ende alles mit Soja/Sesamöl mischen."
    ],
    checks: "Balanced ✓ · Schwangerschaft ✓ (Wurst wird dampfgekocht >80°C)",
    swaps: "Lap Cheong ↔ Chorizo",
    side: "Gedämpfter Brokkoli.",
    remind: true,
    riceCooker: { enabled: true, program: "White Rice", water: "Standard", notes: "Wurst nicht umrühren vor dem Kochen." },
  },
];

export default function Woche7DE() {
  return (
    <PlanTemplate
      meta={meta}
      data={DATA}
      dayNames={DAY_NAME_DE}
      uiTitles={UI_TITLES}
      subtitle="CN Wok & Schwein · Airfryer-Hacks · SWE/HR/IT · 1× Reiskocher/Tag"
      heroChips={["Woche 7", "CN Wok & Airfryer + EU Crossover", "Täglich 1× 🍚 Reiskocher"]}
    />
  );
}

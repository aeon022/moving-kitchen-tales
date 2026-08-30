/*
  Moving Kitchen Tales – Woche 20 (Start: 2026-05-11)
  Status: KOMPLETT & FUNKTIONSFÄHIG (Alle 21 Rezepte)
  Fokus: Schwedisch, viel Fisch, Chinesisch, Virale Airfryer-Hacks, Reiskocher-Magie.
*/

import React from "react";
import PlanTemplate from "../PlanTemplate";

export const meta = {
  title: "Woche 20",
  startDate: "2026-05-11",
  id: "woche-20-2026-05-11",
  lang: "de",
  sidebar: "Woche 20 (2026-05-11)",
};

const DAY_NAME_DE = {
  mo: "Montag (2026-05-11)",
  di: "Dienstag (2026-05-12)",
  mi: "Mittwoch (2026-05-13)",
  do: "Donnerstag (2026-05-14)",
  fr: "Freitag (2026-05-15)",
  sa: "Samstag (2026-05-16)",
  so: "Sonntag (2026-05-17)",
};

const UI_TITLES = {
  main: "Rezepte Woche 20",
  list: "Einkaufsliste Woche 20",
};

export const DATA = [
  // MONTAG
  {
    id: "mo-f",
    title: "Airfryer Kardamom Baked Oats Kardemummagröt",
    isViral: true,
    desc: "Schwedisch inspirierter Haferbrei, der im Airfryer wie ein kleiner Kuchen aufbackt.",
    story: "Kardamom ist die Seele der schwedischen Backkunst. Dieser virale Airfryer-Hit verwandelt morgendliche Haferflocken in ofenwarmes Gebäck. Fantastisch und wärmend.",
    target: "≈65 g KH (2 P.) · Protein ≈18 g p. P.",
    ingredients: [
      "Haferflocken 100 g",
      "Milch 150 ml",
      "Eier 2 Stück",
      "Kardamom (gemahlen) 1 TL",
      "Blaubeeren (TK) 50 g",
      "Backpulver 1 TL"
    ],
    steps: [
      "Alle Zutaten in einer Schüssel gut verrühren.",
      "In eine kleine, ofenfeste (bzw. airfryer-geeignete) Form füllen.",
      "Im Airfryer bei 170°C für ca. 12-15 Minuten backen, bis es aufgeht und komplett durchgestockt ist."
    ],
    checks: "Balanced ✓ · Diabetes ✓ (Komplexe KH) · Schwangerschaft ✓ (Eier komplett durchgebacken)",
    swaps: "Blaubeeren ↔ Apfelstücke",
    side: "Ein Klecks Naturjoghurt.",
    remind: true,
    riceCooker: { enabled: false },
  },
  {
    id: "mo-m",
    title: "Kantonesischer Dämpffisch (Pfanne/Wok) 清蒸鱼",
    desc: "Weißfisch, gedämpft und mit heißem Öl, Sojasauce, Ingwer und Frühlingszwiebeln übergossen.",
    story: "Ein Meisterwerk der chinesischen Küche. Das heiße Öl entlockt dem Ingwer und den Zwiebeln ein großartiges Aroma, das den perfekt gegarten Fisch umhüllt.",
    target: "≈60 g KH (2 P.) · Protein ≈28 g p. P.",
    ingredients: [
      "Kabeljau oder Seelachs 200 g",
      "Ingwer (in feinen Streifen) 10 g",
      "Frühlingszwiebel (in Streifen) 20 g",
      "Sojasauce 2 EL",
      "Speiseöl 2 EL",
      "Reis (gekocht) 150 g"
    ],
    steps: [
      "Fisch in einem hitzefesten Teller im Wok/Pfanne über kochendem Wasser ca. 8-10 Min dämpfen (muss GANZ durch sein!).",
      "Dämpfwasser vom Teller abgießen. Ingwer und Zwiebeln auf den Fisch legen.",
      "Öl in einem kleinen Topf rauchend heiß machen und über die Zwiebeln/Ingwer gießen (es muss zischen!).",
      "Sojasauce darüber träufeln und mit Reis servieren."
    ],
    checks: "Balanced ✓ · Schwangerschaft ✓ (Weißfisch quecksilberarm, komplett durchgedämpft)",
    swaps: "Kabeljau ↔ Lachs",
    side: "-",
    remind: false,
    riceCooker: { enabled: false },
  },
  {
    id: "mo-a",
    title: "Hainan Lachs-Reis (Reiskocher) 海南三文鱼",
    desc: "Lachsfilet dämpft im Ingwer-Knoblauch-Reis direkt im Reiskocher.",
    story: "Eine geniale Adaption des chinesischen Hainan Chicken. Der Fisch gart im Dampf butterweich, während sein Saft den Reis aromatisiert. Das spart Abwasch und Zeit. Da bleibt auch Zeit, um Finn und Fleur zu füttern.",
    target: "≈80 g KH (2 P.) · Protein ≈28 g p. P.",
    ingredients: [
      "Reis (roh) 120 g",
      "Lachsfilet 200 g",
      "Ingwer (fein gehackt) 10 g",
      "Knoblauch 1 Zehe",
      "Hühnerbrühe 240 ml",
      "Pak Choi 150 g"
    ],
    steps: [
      "Reis mit Brühe, Knoblauch und Ingwer in den Reiskocher geben.",
      "Lachs oben auf den Reis legen.",
      "Start drücken. Pak Choi in den letzten 5 Minuten in den Dämpfaufsatz legen.",
      "Lachs zerteilen, mit etwas Sojasauce beträufeln und servieren."
    ],
    checks: "Balanced ✓ · Schwangerschaft ✓ (Lachs gart im Dampf >80°C sicher durch)",
    swaps: "Lachs ↔ Heilbutt",
    side: "Gedämpfter Pak Choi.",
    remind: true,
    riceCooker: { enabled: true, program: "White Rice / Mixed", water: "Brühe (Standard)", notes: "Fisch gibt noch Feuchtigkeit ab." },
  },

  // DIENSTAG
  {
    id: "di-f",
    title: "Thunfisch Jianbing 煎饼",
    isViral: true,
    desc: "Chinesischer Streetfood-Crêpe als Tortilla-Hack mit Thunfisch und Ei.",
    story: "Jianbing ist ein Meisterwerk. Da der Teig aufwendig ist, nehmen wir Wraps! Mit Ei bestrichen und im Airfryer oder der Pfanne gebacken, wird es großartig knusprig.",
    target: "≈65 g KH (2 P.) · Protein ≈22 g p. P.",
    ingredients: [
      "Vollkorn-Tortillas 2 Stück",
      "Eier 2 Stück",
      "Thunfisch (Dose) 100 g",
      "Frühlingszwiebel 10 g",
      "Hoisin-Sauce 1 EL"
    ],
    steps: [
      "Wrap in die Pfanne oder den Airfryer legen. Ein verquirltes Ei darauf verstreichen, mit Zwiebel bestreuen.",
      "Backen/braten, bis das Ei KOMPLETT durchgestockt ist.",
      "Herausnehmen, mit Hoisin-Sauce bestreichen, abgetropften Thunfisch darauf verteilen, falten und genießen."
    ],
    checks: "Balanced ✓ · Schwangerschaft ✓ (Ei komplett durch! Dosenthunfisch in Maßen OK)",
    swaps: "Thunfisch ↔ Gebratener Tofu",
    side: "Warmer Tee.",
    remind: true,
    riceCooker: { enabled: false },
  },
  {
    id: "di-m",
    title: "Airfryer Baked Salmon Toast Laxsmörgås",
    desc: "Skandinavisch inspiriert: Vollkorntoast mit saftig gebackenem Lachs und Dill.",
    story: "Schwedischer Gravlax ist roh und in der Schwangerschaft tabu. Wir backen frischen Lachs im Airfryer in nur 8 Minuten zart und saftig durch. Auf Toast ein hervorragender Lunch.",
    target: "≈60 g KH (2 P.) · Protein ≈28 g p. P.",
    ingredients: [
      "Vollkorn-Toast 4 Scheiben",
      "Lachsfilet 200 g",
      "Frischkäse (pasteurisiert) 2 EL",
      "Dill (frisch) 1 EL",
      "Gurke 50 g"
    ],
    steps: [
      "Lachsfilet leicht salzen und im Airfryer bei 190°C ca. 8-10 Min komplett durchgaren.",
      "Toast rösten und mit Frischkäse bestreichen.",
      "Den warmen Lachs mit einer Gabel zerpflücken und auf dem Toast verteilen.",
      "Mit Dill und Gurkenscheiben garnieren."
    ],
    checks: "Balanced ✓ · Schwangerschaft ✓ (Fisch GANZ durchgaren, Käse pasteurisiert)",
    swaps: "Lachs ↔ Forellenfilet",
    side: "-",
    remind: false,
    riceCooker: { enabled: false },
  },
  {
    id: "di-a",
    title: "Garnelen & Erbsen Reis 虾仁豌豆饭 (Reiskocher)",
    desc: "Simpler, asiatisch angehauchter Reistopf mit Garnelen und grünen Erbsen.",
    story: "Ein Gericht, das dir die Arbeit abnimmt. Die Garnelen dämpfen über dem Reis und bleiben saftig, während der Reis den kräftigen Fond aufnimmt.",
    target: "≈80 g KH (2 P.) · Protein ≈26 g p. P.",
    ingredients: [
      "Reis (roh) 120 g",
      "Garnelen (TK, aufgetaut) 200 g",
      "Erbsen (TK) 50 g",
      "Sojasauce 1 EL",
      "Gemüsebrühe 240 ml",
      "Knoblauch 1 Zehe"
    ],
    steps: [
      "Reis, Brühe, zerdrückten Knoblauch und Sojasauce in den Topf geben.",
      "Garnelen und Erbsen oben auflegen.",
      "Starten. Nach dem Kochen alles vorsichtig durchheben."
    ],
    checks: "Balanced ✓ · Schwangerschaft ✓ (Garnelen dampfgaren sicher durch)",
    swaps: "Garnelen ↔ Hähnchenbrust",
    side: "Ein Spritzer Zitrone.",
    remind: true,
    riceCooker: { enabled: true, program: "White Rice / Mixed", water: "Brühe (Standard)", notes: "Garnelen vorher gut abtropfen lassen." },
  },

  // MITTWOCH
  {
    id: "mi-f",
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
    id: "mi-m",
    title: "Viral Feta-Salmon Bake",
    isViral: true,
    desc: "Lachs und Feta, zusammen mit Tomaten im Airfryer gebacken.",
    story: "Eine großartige Weiterentwicklung des Baked-Feta-Trends! Der Lachs und der Käse schmelzen zusammen zu einem herzhaften Traum.",
    target: "≈85 g KH (2 P.) · Protein ≈30 g p. P.",
    ingredients: [
      "Lachsfilet 200 g",
      "Feta (pasteurisiert) 100 g",
      "Kirschtomaten 150 g",
      "Olivenöl 1 EL",
      "Reis (gekocht) 150 g",
      "Italienische Kräuter"
    ],
    steps: [
      "Lachs, Feta am Stück und Tomaten in eine airfryer-taugliche Form geben.",
      "Mit Öl beträufeln und würzen.",
      "Bei 190°C ca. 12-15 Min backen, bis der Lachs GANZ durch ist und der Feta weich wird.",
      "Zusammen mit dem Reis servieren und Feta/Tomaten leicht zerdrücken."
    ],
    checks: "Balanced ✓ · Schwangerschaft ✓ (Lachs komplett durchgaren, Käse pasteurisiert)",
    swaps: "Lachs ↔ Hähnchenbrust",
    side: "-",
    remind: false,
    riceCooker: { enabled: false },
  },
  {
    id: "mi-a",
    title: "Canton Claypot Rice 煲仔饭 (Reiskocher)",
    desc: "Schweinemett und Pak Choi dämpfen über dem Reis. Schmeckt wie aus dem Tontopf.",
    story: "Claypot Rice ist in Südchina berühmt für seinen intensiven Geschmack. Der Reiskocher imitiert das Prinzip perfekt. Der Fleischsaft zieht direkt in den Reis ein.",
    target: "≈82 g KH (2 P.) · Protein ≈28 g p. P.",
    ingredients: [
      "Reis (roh) 120 g",
      "Schweinehack (mager) 150 g",
      "Sojasauce 2 EL",
      "Pak Choi 100 g",
      "Gemüsebrühe 240 ml",
      "Knoblauch 1 Zehe"
    ],
    steps: [
      "Hackfleisch kurz mit Sojasauce und Knoblauch vermengen.",
      "Reis und Brühe in den Reiskocher geben.",
      "Hackfleisch (zerpflückt!) oben auf den Reis verteilen. Start drücken.",
      "Pak Choi in den letzten 5 Minuten dämpfen. Danach alles sorgfältig durchmischen."
    ],
    checks: "Balanced ✓ · Schwangerschaft ✓ (Hack gart im Topf sicher durch) · Diabetes ✓",
    swaps: "Schweinehack ↔ Hähnchenhack",
    side: "-",
    remind: true,
    riceCooker: { enabled: true, program: "Mixed / White Rice", water: "Brühe (Standard)", notes: "Fleisch gibt ordentlich Geschmack ab." },
  },

  // DONNERSTAG
  {
    id: "do-f",
    title: "Knäckebröd mit Lachs & Quark",
    desc: "Ein schnelles, knackiges Frühstück auf schwedische Art.",
    story: "Knäckebröd ist das Rückgrat der schwedischen Vorratskammer. Kombiniert mit durchgebratenem oder heißgeräuchertem Lachs und etwas Magerquark entsteht ein wunderbar leichtes Frühstück.",
    target: "≈65 g KH (2 P.) · Protein ≈22 g p. P.",
    ingredients: [
      "Vollkorn-Knäckebrot 4 Scheiben",
      "Lachsfilet (gebraten oder heißgeräuchert) 100 g",
      "Quark (Magerstufe) 2 EL",
      "Schnittlauch 10 g",
      "Zitrone 1 TL"
    ],
    steps: [
      "Lachs mit einer Gabel zerpflücken (sicherstellen, dass er komplett durch ist!).",
      "Quark mit Zitrone und Schnittlauch glattrühren.",
      "Knäckebrot dick mit Quark bestreichen und den Lachs darauf verteilen."
    ],
    checks: "Balanced ✓ · Schwangerschaft ✓ (Lachs komplett durcherhitzt!)",
    swaps: "Lachs ↔ Hartgekochtes Ei",
    side: "Kaffee.",
    remind: true,
    riceCooker: { enabled: false },
  },
  {
    id: "do-m",
    title: "Airfryer Sweet & Sour Fish 糖醋鱼",
    desc: "Knusprige Weißfisch-Würfel aus dem Airfryer in pikanter süß-saurer Sauce.",
    story: "Die leichte Version des chinesischen Take-aways. Der Airfryer macht den Fisch (dank etwas Stärke) außen kross, ohne ihn in Öl zu ertränken.",
    target: "≈80 g KH (2 P.) · Protein ≈26 g p. P.",
    ingredients: [
      "Kabeljau oder Seelachs 200 g",
      "Maisstärke 2 EL",
      "Paprika (gewürfelt) 100 g",
      "Ketchup 2 EL",
      "Reisessig 1 EL",
      "Reis (gekocht) 150 g"
    ],
    steps: [
      "Fisch würfeln, abtupfen und in Maisstärke wälzen.",
      "Im Airfryer bei 200°C ca. 10-12 Min knusprig backen (komplett durchgaren!).",
      "Ketchup, Essig und etwas Wasser in einer Pfanne aufkochen. Paprika kurz mitrösten.",
      "Knusper-Fisch in der Sauce schwenken und mit Reis servieren."
    ],
    checks: "Balanced ✓ · Schwangerschaft ✓ (Fisch durch!) · Diabetes ✓",
    swaps: "Fisch ↔ Fester Tofu",
    side: "-",
    remind: false,
    riceCooker: { enabled: false },
  },
  {
    id: "do-a",
    title: "Tomaten-Fisch-Risotto 番茄鱼烩饭 (Reiskocher)",
    desc: "Der asiatische 'Whole Tomato' Trend trifft auf Weißfisch und Reis.",
    story: "Die Tomate schmilzt und bildet eine natürliche süß-saure Sauce. Der Fisch gart im Dampf zart. Eine geniale Reiskocher-Fusion.",
    target: "≈82 g KH (2 P.) · Protein ≈28 g p. P.",
    ingredients: [
      "Risottoreis oder Normalreis 120 g",
      "Tomate (groß) 1 Stück",
      "Weißfisch (Kabeljau/Seelachs) 150 g",
      "Gemüsebrühe 240 ml",
      "Knoblauch 1 Zehe",
      "Olivenöl 1 EL"
    ],
    steps: [
      "Reis, Brühe, Öl und Knoblauch in den Topf geben.",
      "Tomate kreuzweise tief einschneiden, in die Mitte setzen. Den Fisch danebenlegen.",
      "Start drücken.",
      "Nach dem Kochen die Tomate zerdrücken, Fisch grob zerteilen und alles vermengen."
    ],
    checks: "Balanced ✓ · Schwangerschaft ✓ (Fisch dämpft komplett durch) · Diabetes ✓",
    swaps: "Weißfisch ↔ Lachs",
    side: "Ein Schälchen Gurkensalat.",
    remind: true,
    riceCooker: { enabled: true, program: "White Rice / Mixed", water: "Brühe (etwas weniger wg. Tomate)", notes: "Tomate gut zerdrücken." },
  },

  // FREITAG
  {
    id: "fr-f",
    title: "Viral Folded Tuna Wrap (Airfryer)",
    isViral: true,
    desc: "Ein eingeschnittener Tortilla-Wrap, in Vierteln belegt und zur Dreieckstasche gefaltet.",
    story: "Der wohl praktischste Food-Hack des Internets. Das Falten macht den Wrap extrem stabil, und im Airfryer wird er außen rundum knusprig. Ideal mit proteinreichem Thunfisch.",
    target: "≈65 g KH (2 P.) · Protein ≈24 g p. P.",
    ingredients: [
      "Vollkorn-Tortillas 2 Stück",
      "Thunfisch (Dose, abgetropft) 100 g",
      "Mayo (pasteurisiert) 1 EL",
      "Gouda (gerieben) 40 g",
      "Tomate 50 g"
    ],
    steps: [
      "Thunfisch mit Mayo mischen.",
      "Wraps von unten bis zur Mitte einschneiden.",
      "Viertel 1: Käse, Viertel 2: Thunfisch, Viertel 3: Tomate, Viertel 4: noch etwas Käse.",
      "Rundum falten zum Dreieck. Im Airfryer bei 180°C ca. 5-7 Min knusprig toasten."
    ],
    checks: "Balanced ✓ · Schwangerschaft ✓ (Käse pasteurisiert, Thunfisch in Maßen)",
    swaps: "Thunfisch ↔ Gekochte Eier",
    side: "Tee.",
    remind: true,
    riceCooker: { enabled: false },
  },
  {
    id: "fr-m",
    title: "Laxbullar (Schwedische Lachsbällchen)",
    desc: "Die fischige Version der Köttbullar! Zarte Lachsbällchen mit Dill und Kartoffeln.",
    story: "Ein fantastisches Gericht aus Schweden. Die Bällchen werden in der Pfanne oder im Airfryer gebraten und sind wunderbar saftig.",
    target: "≈85 g KH (2 P.) · Protein ≈26 g p. P.",
    ingredients: [
      "Lachs (roh, fein gehackt) 200 g",
      "Paniermehl 30 g",
      "Ei 1 Stück",
      "Dill (frisch) 1 EL",
      "Kartoffeln 300 g",
      "Zitronensaft"
    ],
    steps: [
      "Lachs mit Ei, Paniermehl und Dill mischen. Mit feuchten Händen Bällchen formen.",
      "In einer Pfanne bei mittlerer Hitze rundum anbraten (komplett durchgaren!).",
      "Kartoffeln kochen.",
      "Lachsbällchen mit Kartoffeln und einem Spritzer Zitrone anrichten."
    ],
    checks: "Balanced ✓ · Schwangerschaft ✓ (Fischbällchen GANZ durchgaren!)",
    swaps: "Lachs ↔ Weißfisch",
    side: "Erbsen.",
    remind: false,
    riceCooker: { enabled: false },
  },
  {
    id: "fr-a",
    title: "Sojasauce-Garnelen-Reis 酱油虾饭 (Reiskocher)",
    desc: "Dunkler, extrem würziger Reis, der den Garnelen-Fond beim Dämpfen in sich aufnimmt.",
    story: "Dunkle Sojasauce verleiht dem Reis eine spektakuläre Farbe und eine leichte Süße. Die Garnelen garen direkt mit und bleiben wunderbar saftig.",
    target: "≈80 g KH (2 P.) · Protein ≈26 g p. P.",
    ingredients: [
      "Reis (roh) 120 g",
      "Garnelen (TK, aufgetaut) 200 g",
      "Sojasauce (dunkel & hell) 2 EL",
      "Zwiebel 50 g",
      "Gemüsebrühe 240 ml",
      "Sesamöl 1 TL"
    ],
    steps: [
      "Zwiebel fein hacken.",
      "Reis, Brühe, Zwiebel und Sojasauce in den Topf geben.",
      "Garnelen oben auflegen.",
      "Starten. Nach dem Kochen Sesamöl darüberträufeln und vorsichtig durchheben."
    ],
    checks: "Balanced ✓ · Schwangerschaft ✓ (Garnelen dampfgaren sicher durch)",
    swaps: "Garnelen ↔ Hähnchenbrust",
    side: "Brokkoli.",
    remind: true,
    riceCooker: { enabled: true, program: "White Rice / Mixed", water: "Brühe (Standard)", notes: "Dunkle Sojasauce bringt Farbe." },
  },

  // SAMSTAG
  {
    id: "sa-f",
    title: "Airfryer Prawn Toast 虾多士",
    isViral: true,
    desc: "Chinesisches Dim Sum: Toast, bestrichen mit Garnelenpaste, bedeckt mit Sesam und kross gebacken.",
    story: "In Restaurants wird dieser Toast tief frittiert. Wir streichen die Paste auf den Toast und backen ihn im Airfryer. Er wird gigantisch knusprig und schmeckt originalgetreu!",
    target: "≈60 g KH (2 P.) · Protein ≈22 g p. P.",
    ingredients: [
      "Vollkorn-Toast 4 Scheiben",
      "Garnelen (geschält, sehr fein gehackt/püriert) 150 g",
      "Eiweiß 1 Stück",
      "Sesam 2 EL",
      "Sojasauce 1 TL",
      "Ingwer (Prise, gemahlen)"
    ],
    steps: [
      "Garnelen mit Eiweiß, Soja und Ingwer zu einer Paste verrühren.",
      "Paste dick auf die Toastscheiben streichen. Großzügig mit Sesam bestreuen.",
      "Im Airfryer bei 190°C ca. 8-10 Min backen, bis die Garnelen GANZ durch sind und der Toast kross ist."
    ],
    checks: "Balanced ✓ · Schwangerschaft ✓ (Garnelenpaste komplett durchbacken!)",
    swaps: "Garnelen ↔ Hähnchenhack",
    side: "Ein Stück Obst.",
    remind: true,
    riceCooker: { enabled: false },
  },
  {
    id: "sa-m",
    title: "Kung Pao Garnelen (Wok) 宫保虾球",
    desc: "Garnelen, scharf angebraten in einer süß-säuerlichen Sauce mit knackigen Erdnüssen.",
    story: "Der Szechuan-Klassiker Kung Pao funktioniert mit Garnelen fast noch besser als mit Huhn. Die Garnelen garen rasend schnell und saugen die Sauce auf.",
    target: "≈80 g KH (2 P.) · Protein ≈28 g p. P.",
    ingredients: [
      "Garnelen (TK, aufgetaut) 200 g",
      "Paprika (gewürfelt) 100 g",
      "Erdnüsse (ungesalzen) 30 g",
      "Sojasauce 2 EL",
      "Reisessig 1 EL",
      "Reis (gekocht) 150 g"
    ],
    steps: [
      "Garnelen im Wok scharf anbraten, bis sie rosa und komplett durch sind. Herausnehmen.",
      "Paprika kurz anrösten. Sojasauce, Essig und etwas Zucker/Wasser als Sauce angießen.",
      "Garnelen zurück in den Wok geben. Erdnüsse unterheben.",
      "Mit Reis servieren."
    ],
    checks: "Balanced ✓ · Schwangerschaft ✓ (Garnelen durchbraten)",
    swaps: "Erdnüsse ↔ Cashews",
    side: "-",
    remind: false,
    riceCooker: { enabled: false },
  },
  {
    id: "sa-a",
    title: "Dill-Lachs Reis 鮭とディルのご飯 (Reiskocher)",
    desc: "Schwedisch-Japanisches Crossover. Lachs und viel frischer Dill garen mit dem Reis.",
    story: "Eine Fusion aus Skandinavien und Japan. Der Dill gibt dem Reis eine unglaubliche Frische, während der Lachs im Dampf butterweich wird.",
    target: "≈80 g KH (2 P.) · Protein ≈28 g p. P.",
    ingredients: [
      "Reis (roh) 120 g",
      "Lachsfilet 200 g",
      "Dill (frisch, viel!) 1 EL",
      "Zitrone 1 EL (Saft)",
      "Gemüsebrühe 240 ml",
      "Erbsen 50 g"
    ],
    steps: [
      "Reis und Brühe in den Topf.",
      "Lachs und Erbsen oben auflegen.",
      "Kochen. Nach dem Öffnen den gehackten Dill und Zitronensaft zugeben.",
      "Lachs zerteilen und alles gut mischen."
    ],
    checks: "Balanced ✓ · Schwangerschaft ✓ (Lachs gart im Topf durch)",
    swaps: "Lachs ↔ Kabeljau",
    side: "Knackiger Karottensalat.",
    remind: true,
    riceCooker: { enabled: true, program: "Mixed / White Rice", water: "Brühe Standard", notes: "Dill nicht mitkochen, erst am Ende rein!" },
  },

  // SONNTAG
  {
    id: "so-f",
    title: "Dim Sum Dampf-Ei 蒸水蛋",
    desc: "Extrem glatter Eierstich, gewürzt mit Sojasauce und Sesamöl. Perfekt für das Sonntagsfrühstück, um nebenbei die neuen Reiseblog-Beiträge zu tippen.",
    story: "Eine Schale warmer Eierstich ist in China pures Wohlgefühl. Durch schonendes Garen wird er wie Pudding.",
    target: "≈60 g KH (2 P. - inkl. Brot) · Protein ≈18 g p. P.",
    ingredients: [
      "Eier 3 Stück",
      "Warmes Wasser 150 ml",
      "Sojasauce 1 EL",
      "Sesamöl 1 TL",
      "Toastbrot (Vollkorn) 2 Scheiben"
    ],
    steps: [
      "Eier mit dem warmen Wasser sehr sanft verquirlen (wenig Schaum machen!).",
      "In eine Schale geben. Abdecken (Teller).",
      "Im Topf im Wasserbad oder in der Mikrowelle auf mittlerer Stufe garen, bis es komplett durchgestockt ist.",
      "Sojasauce und Sesamöl darüber träufeln. Mit Toast essen."
    ],
    checks: "Balanced ✓ · Schwangerschaft ✓ (Ei MUSS komplett fest sein, keine glitschigen Stellen!)",
    swaps: "Wasser ↔ Dashi-Brühe",
    side: "Tee.",
    remind: true,
    riceCooker: { enabled: false },
  },
  {
    id: "so-m",
    title: "Janssons Frestelse Express (Airfryer)",
    desc: "Der schwedische Auflauf-Klassiker: Kartoffeln, Zwiebeln und Sprotten in Sahne, rasch gebacken.",
    story: "Janssons Versuchung ist ein Auflauf für Feste. Wir machen eine schnelle Airfryer-Variante. Die Sprotten/Anchovis zerfallen und würzen die Kartoffeln phänomenal.",
    target: "≈80 g KH (2 P.) · Protein ≈15 g p. P.",
    ingredients: [
      "Kartoffeln (in feinen Stiften) 300 g",
      "Zwiebel (in Ringen) 1 Stück",
      "Sprotten oder Anchovis (Dose) 50 g",
      "Sahne (pasteurisiert) 100 ml",
      "Paniermehl 10 g"
    ],
    steps: [
      "Kartoffelstifte und Zwiebeln in eine kleine Airfryer-Form schichten. Sprotten dazwischenlegen.",
      "Sahne darüber gießen. Mit Paniermehl bestreuen.",
      "Im Airfryer bei 180°C ca. 25 Min backen, bis die Kartoffeln weich sind und die Kruste goldbraun ist."
    ],
    checks: "Balanced ✓ · Schwangerschaft ✓ (Fisch/Sprotten aus der Dose sind stark erhitzt/unbedenklich, Sahne pasteurisiert)",
    swaps: "Sprotten ↔ Räuchertofu (für eine vegane Version)",
    side: "Ein grüner Salat.",
    remind: false,
    riceCooker: { enabled: false },
  },
  {
    id: "so-a",
    title: "Lachs & Pak Choi Takikomi 鮭とチンゲン菜のご飯",
    desc: "Reiskocher-Mischreis mit Lachs und viel frischem Pak Choi.",
    story: "Ein extrem gesundes, leichtes Abendessen. Der Lachs und die Dashi-Brühe sorgen für Umami, der Pak Choi bringt Biss und Farbe.",
    target: "≈80 g KH (2 P.) · Protein ≈28 g p. P.",
    ingredients: [
      "Reis (roh) 120 g",
      "Lachsfilet 200 g",
      "Pak Choi 100 g",
      "Dashi-Brühe 240 ml",
      "Sojasauce 1 EL"
    ],
    steps: [
      "Reis, Dashi und Sojasauce in den Reiskocher.",
      "Lachs im Ganzen darauflegen. Start drücken.",
      "Nach dem Kochen den Lachs mit einem Löffel zerteilen.",
      "Den in Streifen geschnittenen Pak Choi sofort unter den kochend heißen Reis heben (er gart in der Restwärme)."
    ],
    checks: "Balanced ✓ · Schwangerschaft ✓ (Lachs gart sicher durch)",
    swaps: "Lachs ↔ Weißfisch",
    side: "Ein paar Tropfen Zitronensaft.",
    remind: true,
    riceCooker: { enabled: true, program: "Mixed / White Rice", water: "Brühe (Standard)", notes: "Pak Choi erst am Schluss unterheben." },
  },
];

export default function Woche18DE() {
  return (
    <PlanTemplate
      meta={meta}
      data={DATA}
      dayNames={DAY_NAME_DE}
      uiTitles={UI_TITLES}
      subtitle="Lachs, Fisch & Meeresfrüchte · Reiskocher-Vielfalt · Balanced"
      heroChips={["Woche 20", "Schwedisch & CN/JP Wohlfühlküche", "Täglich 1× 🍚 Reiskocher"]}
    />
  );
}

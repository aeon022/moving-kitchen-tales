/*
  GhibliKitchen – Woche 21 (Start: 2026-05-18)
  Status: KOMPLETT & FUNKTIONSFÄHIG (Alle 21 Rezepte)
  Fokus: Virale Airfryer-Hacks, Reiskocher-Magie, Zha Cai, Pao Jiang Dou & Goldbrasse.
*/

import React from "react";
import PlanTemplate from "../PlanTemplate";

export const meta = {
  title: "Woche 21",
  startDate: "2026-05-18",
  id: "woche-21-2026-05-18",
  lang: "de",
  sidebar: "Woche 21 (2026-05-18)",
};

const DAY_NAME_DE = {
  mo: "Montag (2026-05-18)",
  di: "Dienstag (2026-05-19)",
  mi: "Mittwoch (2026-05-20)",
  do: "Donnerstag (2026-05-21)",
  fr: "Freitag (2026-05-22)",
  sa: "Samstag (2026-05-23)",
  so: "Sonntag (2026-05-24)",
};

const UI_TITLES = {
  main: "Rezepte Woche 21",
  list: "Einkaufsliste Woche 21",
};

export const DATA = [
  // MONTAG
  {
    id: "mo-f",
    title: "Viral Pesto Egg Bagel 🥯",
    isViral: true,
    desc: "Ein aufgeschnittener Bagel, bei dem das Ei direkt in frischem Pesto knusprig gebraten wird.",
    story: "Eine Variation des Pesto-Egg-Trends. Das Pesto liefert das Öl zum Braten und zieht gleichzeitig tief in die Ränder des Bagels ein.",
    target: "≈65 g KH (2 P.) · Protein ≈20 g p. P.",
    ingredients: [
      "Vollkorn-Bagel 2 Stück",
      "Eier 2 Stück",
      "Grünes Pesto (Glas) 2 EL",
      "Feta (pasteurisiert) 40 g",
      "Cherrytomaten 50 g"
    ],
    steps: [
      "Pesto in der Pfanne erhitzen.",
      "Die Eier direkt auf das Pesto aufschlagen. Sofort den Deckel auflegen und braten, bis Eigelb und Eiweiß komplett durchgestockt sind.",
      "Bagels aufschneiden und toasten.",
      "Pesto-Eier auf den Bagels anrichten, mit zerbröseltem Feta und Tomaten toppen."
    ],
    checks: "Balanced ✓ · Schwangerschaft ✓ (Eier GANZ durchgaren, Käse pasteurisiert)",
    swaps: "Bagel ↔ Vollkornbrötchen",
    side: "Kaffee.",
    remind: true,
    riceCooker: { enabled: false },
  },
  {
    id: "mo-m",
    title: "Zha Cai Nudel-Wok 榨菜肉丝面",
    desc: "Weizennudeln gebraten mit Zha Cai (eingelegte Senfknolle) und Schweinefleisch.",
    story: "Zha Cai bringt eine fantastische, säuerlich-würzige Knusprigkeit in jedes Pfannengericht. Es hebt das Schweinefleisch auf ein ganz neues Level.",
    target: "≈80 g KH (2 P.) · Protein ≈26 g p. P.",
    ingredients: [
      "Weizennudeln (oder Mie-Nudeln) 150 g",
      "Schweineschnitzel (in feinen Streifen) 150 g",
      "Zha Cai (eingelegte Senfknolle, in feinen Streifen) 50 g",
      "Sojasauce 1 EL",
      "Knoblauch 1 Zehe",
      "Frühlingszwiebel 20 g"
    ],
    steps: [
      "Nudeln kochen und abtropfen.",
      "Schweinefleisch und Knoblauch im heißen Wok scharf anbraten (komplett durchgaren!).",
      "Die Zha Cai-Streifen hinzufügen und kurz mitrösten.",
      "Nudeln und Sojasauce untermischen, gut durchschwenken."
    ],
    checks: "Balanced ✓ · Schwangerschaft ✓ (Schweinefleisch durch)",
    swaps: "Schweinefleisch ↔ Hähnchenbrust",
    side: "Ein paar Edamame.",
    remind: false,
    riceCooker: { enabled: false },
  },
  {
    id: "mo-a",
    title: "Hainan-Style Goldbrasse (Reiskocher)",
    desc: "Zartes Goldbrassenfilet, das mit Ingwer und Soja direkt im Reiskocher dämpft.",
    story: "Ein asiatisches Meisterwerk, bei dem der Reis den gesamten Sud des Fisches auffängt. Die Goldbrasse dämpft wunderbar weich.",
    target: "≈80 g KH (2 P.) · Protein ≈28 g p. P.",
    ingredients: [
      "Reis (roh) 120 g",
      "Goldbrassenfilet (ohne Gräten) 200 g",
      "Ingwer (in feinen Streifen) 15 g",
      "Knoblauch 2 Zehen",
      "Hühnerbrühe 240 ml",
      "Sojasauce 2 EL"
    ],
    steps: [
      "Reis, Brühe, zerdrückten Knoblauch und 1 EL Sojasauce in den Topf geben.",
      "Goldbrassenfilet auf den Reis legen und großzügig mit Ingwerstreifen belegen.",
      "Reiskocher starten.",
      "Nach dem Kochen den Fisch leicht zerteilen und mit der restlichen Sojasauce beträufeln. Vorsichtig untermischen."
    ],
    checks: "Balanced ✓ · Schwangerschaft ✓ (Fisch gart im Dampf >80°C komplett durch)",
    swaps: "Goldbrasse ↔ Kabeljau",
    side: "Gedämpfter Spinat.",
    remind: true,
    riceCooker: { enabled: true, program: "Mixed / White Rice", water: "Brühe (Standard)", notes: "Fischfilet vorher auf Gräten prüfen!" },
  },

  // DIENSTAG
  {
    id: "di-f",
    title: "Viral Grated Egg Avocado Wrap 🥑",
    isViral: true,
    desc: "Ein Vollkorn-Wrap, gefüllt mit Avocado und fein geriebenem, hartgekochtem Ei.",
    story: "Der Grated-Egg-Trend in handlicher Wrap-Form. Das Ei wird so fein, dass es sich mit der Avocado zu einer großartigen Creme verbindet.",
    target: "≈60 g KH (2 P.) · Protein ≈18 g p. P.",
    ingredients: [
      "Vollkorn-Tortillas 2 Stück",
      "Eier (hartgekocht) 2 Stück",
      "Avocado (reif) 1 Stück",
      "Mayo (pasteurisiert) 1 EL",
      "Limettensaft 1 TL"
    ],
    steps: [
      "Avocado mit Limettensaft zerdrücken.",
      "Die Wraps im Airfryer oder in der Pfanne kurz anwärmen, damit sie weich werden.",
      "Avocado auf die Wraps streichen. Die hartgekochten Eier mit einer Reibe darüber reiben.",
      "Mit Mayo toppen, fest zusammenrollen und halbieren."
    ],
    checks: "Balanced ✓ · Schwangerschaft ✓ (Eier hartgekocht, Mayo aus Tube) · Diabetes ✓",
    swaps: "Avocado ↔ Tomatenscheiben",
    side: "Ein Glas Wasser mit Zitrone.",
    remind: true,
    riceCooker: { enabled: false },
  },
  {
    id: "di-m",
    title: "Airfryer Gnocchi mit Wurst & Paprika",
    desc: "Knusprige Gnocchi, geröstet mit Wurstscheiben und buntem Gemüse.",
    story: "Ein Blech-Gericht, das im Airfryer noch schneller geht. Die Gnocchi werden außen kross und innen fluffig.",
    target: "≈85 g KH (2 P.) · Protein ≈18 g p. P.",
    ingredients: [
      "Gnocchi (Kühlregal) 300 g",
      "Geflügelwurst oder Cabanossi 80 g",
      "Paprika 1 Stück",
      "Olivenöl 1 EL",
      "Italienische Kräuter 1 TL"
    ],
    steps: [
      "Paprika würfeln, Wurst in Scheiben schneiden.",
      "Gnocchi, Wurst, Paprika und Öl in einer Schüssel gut vermengen.",
      "In den Airfryer geben und bei 190°C ca. 12-15 Minuten rösten. Zwischendurch gut durchschütteln."
    ],
    checks: "Balanced ✓ · Schwangerschaft ✓ (Wurst wird stark erhitzt)",
    swaps: "Geflügelwurst ↔ Räuchertofu",
    side: "Ein Klecks Magerquark zum Dippen.",
    remind: false,
    riceCooker: { enabled: false },
  },
  {
    id: "di-a",
    title: "Miso-Pilz-Reis mit Tofu (Reiskocher)",
    desc: "Ein tief-aromatischer, veganer Reistopf mit Miso, Champignons und Tofu.",
    story: "Die Miso-Paste wird direkt im Kochwasser aufgelöst und durchdringt jedes Reiskorn. Der Tofu liefert eine großartige Textur.",
    target: "≈80 g KH (2 P.) · Protein ≈22 g p. P.",
    ingredients: [
      "Reis (roh) 120 g",
      "Miso-Paste (hell) 2 EL",
      "Champignons 150 g",
      "Fester Tofu (gewürfelt) 150 g",
      "Gemüsebrühe 240 ml",
      "Sesamöl 1 TL"
    ],
    steps: [
      "Miso-Paste in der leicht warmen Brühe auflösen.",
      "Reis, Miso-Brühe, Pilze und Tofu in den Reiskocher füllen.",
      "Start drücken.",
      "Nach dem Kochen das Sesamöl darüberträufeln und den Reis kräftig auflockern."
    ],
    checks: "Balanced ✓ · Diabetes ✓ (Pilze und Tofu sind exzellent für den Blutzucker)",
    swaps: "Tofu ↔ Hähnchenbrust",
    side: "Etwas Frühlingszwiebel.",
    remind: true,
    riceCooker: { enabled: true, program: "Mixed / White Rice", water: "Brühe (Standard)", notes: "Miso gut auflösen, um Klumpen zu vermeiden." },
  },

  // MITTWOCH
  {
    id: "mi-f",
    title: "Süßkartoffel-Pancakes 🥞",
    desc: "Saftige Pancakes, deren Teig zu einem großen Teil aus Süßkartoffelpüree besteht.",
    story: "Eine geniale Resteverwertung für gebackene Süßkartoffeln. Die Pancakes werden saftig, leicht orange und haben eine tolle natürliche Süße.",
    target: "≈75 g KH (2 P.) · Protein ≈16 g p. P.",
    ingredients: [
      "Süßkartoffel-Püree 100 g",
      "Vollkornmehl 80 g",
      "Eier 2 Stück",
      "Milch 50 ml",
      "Backpulver 1 TL",
      "Zimt 1/2 TL"
    ],
    steps: [
      "Püree, Eier und Milch glatt rühren.",
      "Mehl, Backpulver und Zimt unterheben.",
      "In einer Pfanne bei mittlerer Hitze durchbacken. Sie brauchen etwas länger als normale Pancakes, damit sie komplett durch sind.",
      "Mit etwas Joghurt servieren."
    ],
    checks: "Balanced ✓ · Schwangerschaft ✓ (Komplett durchbacken!) · Diabetes ✓",
    swaps: "Süßkartoffel-Püree ↔ Kürbispüree",
    side: "Ein Klecks Magerquark.",
    remind: true,
    riceCooker: { enabled: false },
  },
  {
    id: "mi-m",
    title: "Crispy Rice Paper Dumplings (Schweinehack)",
    isViral: true,
    desc: "Reispapier-Blätter werden wie Briefumschläge um Schweinehack gefaltet und knusprig gebacken.",
    story: "Ein viraler Hack, wenn man keinen Nudelteig kneten möchte. Im Airfryer oder in der Pfanne wird das Reispapier unglaublich kross.",
    target: "≈75 g KH (2 P.) · Protein ≈24 g p. P.",
    ingredients: [
      "Reispapier 8 Blatt",
      "Schweinehack (mager) 150 g",
      "Weißkohl (fein gehackt) 100 g",
      "Sojasauce 2 EL",
      "Sesamöl 1 TL",
      "Reis (als Beilage) 100 g"
    ],
    steps: [
      "Schweinehack und Kohl in der Pfanne krümelig und KOMPLETT durch braten. Mit Sojasauce würzen.",
      "Reispapier nass machen, Füllung in die Mitte, zu einem Quadrat falten (zwei Blätter pro Tasche nutzen).",
      "Im Airfryer (leicht geölt) bei 190°C ca. 10 Min backen oder in der Pfanne knusprig braten.",
      "Mit Reis und Dip servieren."
    ],
    checks: "Balanced ✓ · Schwangerschaft ✓ (Hack vorher durchbraten!)",
    swaps: "Schweinehack ↔ Tofu-Crumble",
    side: "Sojasauce zum Dippen.",
    remind: false,
    riceCooker: { enabled: false },
  },
  {
    id: "mi-a",
    title: "Tomaten-Mozzarella Risotto トマトリゾット (Reiskocher)",
    desc: "Asiatische 'Whole Tomato'-Technik trifft auf Italien. Ein cremiges Risotto ohne Rühren.",
    story: "Die ganze Tomate schmilzt beim Kochen im Reiskocher. Zusammen mit dem Käse entsteht am Ende ein cremiges, narrensicheres Risotto.",
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
    side: "Gedämpftes Hähnchen für mehr Protein.",
    remind: true,
    riceCooker: { enabled: true, program: "White Rice", water: "Brühe (etwas weniger als normal)", notes: "Tomate gut zerdrücken." },
  },

  // DONNERSTAG
  {
    id: "do-f",
    title: "Matcha-Haferbrei 抹茶オートミール",
    desc: "Cremiger, wärmender Haferbrei, verfeinert mit Antioxidantien aus grünem Matcha-Tee.",
    story: "Die Haferflocken-Basis bändigt die leichte Bitterkeit des Matchas perfekt. Sieht fantastisch aus und liefert sanfte Energie für den Tag.",
    target: "≈65 g KH (2 P.) · Protein ≈18 g p. P.",
    ingredients: [
      "Haferflocken 100 g",
      "Sojamilch oder Milch 400 ml",
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
    checks: "Balanced ✓ · Schwangerschaft ✓ (Matcha in Maßen ist unbedenklich)",
    swaps: "Matcha ↔ Kakaopulver",
    side: "-",
    remind: true,
    riceCooker: { enabled: false },
  },
  {
    id: "do-m",
    title: "Pao Jiang Dou & Hähnchen-Wok 泡豇豆炒鸡肉",
    desc: "Hähnchenhack, gebraten mit säuerlichen, eingelegten Schlangenbohnen.",
    story: "Pao Jiang Dou (säuerlich eingelegte Bohnen) sind eine absolute Offenbarung aus Sichuan. Die feine Säure schneidet durch das Hähnchenfleisch und macht das Gericht unglaublich appetitanregend.",
    target: "≈80 g KH (2 P.) · Protein ≈28 g p. P.",
    ingredients: [
      "Hähnchenhack 150 g",
      "Pao Jiang Dou (säuerliche Bohnen, fein gehackt) 80 g",
      "Knoblauch 1 Zehe",
      "Sojasauce 1 EL",
      "Reis (gekocht) 150 g",
      "Paprika (gewürfelt) 50 g"
    ],
    steps: [
      "Knoblauch und Paprika im Wok kurz anbraten.",
      "Hähnchenhack dazugeben und krümelig sowie KOMPLETT durchbraten.",
      "Die gehackten sauren Bohnen (Pao Jiang Dou) untermischen.",
      "Mit Sojasauce abschmecken und über Reis servieren."
    ],
    checks: "Balanced ✓ · Schwangerschaft ✓ (Hähnchenhack gut durchbraten)",
    swaps: "Hähnchenhack ↔ Schweinehack",
    side: "-",
    remind: false,
    riceCooker: { enabled: false },
  },
  {
    id: "do-a",
    title: "Jambalaya (Garnelen & Wurst) im Reiskocher",
    desc: "Südstaaten-Soulfood. Reis, Garnelen und Wurst garen in einer Cajun-Brühe.",
    story: "New Orleans Flair aus dem Reiskocher! Das Geheimnis sind Paprika, Tomatenmark und eine rauchige Wurst. Der Reis saugt diese Aromenwand komplett auf.",
    target: "≈84 g KH (2 P.) · Protein ≈30 g p. P.",
    ingredients: [
      "Reis (roh) 120 g",
      "Garnelen (TK, aufgetaut) 100 g",
      "Räucherwurst (Cabanossi) 50 g",
      "Paprika (gewürfelt) 1 Stück",
      "Tomatenmark 1 EL",
      "Hühnerbrühe 240 ml"
    ],
    steps: [
      "Reis, Brühe, Tomatenmark und Paprika im Reiskocher gut mischen.",
      "Garnelen und Wurstscheiben oben auflegen.",
      "Start drücken.",
      "Nach dem Kochen kräftig durchrühren. (Optional mit Paprika/Cajun-Gewürz nachschärfen)."
    ],
    checks: "Balanced ✓ · Schwangerschaft ✓ (Fleisch/Garnelen kochen auf >80°C sicher durch)",
    swaps: "Wurst ↔ Nur Garnelen (für weniger Fett)",
    side: "Ein grüner Salat.",
    remind: true,
    riceCooker: { enabled: true, program: "Mixed / White Rice", water: "Brühe (Standard)", notes: "Wurst gibt viel Geschmack ab." },
  },

  // FREITAG
  {
    id: "fr-f",
    title: "Savory Soy Oatmeal",
    desc: "Herzhafter Haferbrei, gewürzt mit Sojasauce und Sesamöl, serviert mit hartgekochtem Ei.",
    story: "Eine großartige Alternative zu traditionellem asiatischen Congee. Haferflocken kochen schneller und liefern langanhaltende, stabile Energie.",
    target: "≈60 g KH (2 P.) · Protein ≈20 g p. P.",
    ingredients: [
      "Haferflocken zart 100 g",
      "Gemüsebrühe 450 ml",
      "Eier (hartgekocht) 2 Stück",
      "Sojasauce 1 EL",
      "Sesamöl 1 TL",
      "Frühlingszwiebel 10 g"
    ],
    steps: [
      "Haferflocken in der Brühe aufkochen und eindicken lassen.",
      "Sojasauce und Sesamöl einrühren.",
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
    id: "fr-m",
    title: "Airfryer Honey-Garlic Tofu",
    desc: "Tofuwürfel mit einer Kruste aus dem Airfryer, geschwenkt in einer süßlich-würzigen Knoblauchsauce.",
    story: "Ein Klassiker aus dem Asia-Bistro. Im Airfryer gelingt die Tofu-Kruste fettsparend und behält dennoch ihren hervorragenden Biss.",
    target: "≈80 g KH (2 P.) · Protein ≈22 g p. P.",
    ingredients: [
      "Fester Tofu 300 g",
      "Maisstärke 2 EL",
      "Sojasauce 2 EL",
      "Honig oder Agavendicksaft 1 EL",
      "Knoblauch 2 Zehen (gepresst)",
      "Reis (gekocht) 150 g"
    ],
    steps: [
      "Tofu würfeln, gut abtupfen und in Maisstärke wenden.",
      "Im Airfryer bei 200°C ca. 12-15 Min backen, bis er knusprig ist.",
      "In einer Pfanne Sojasauce, Honig, Knoblauch und etwas Wasser kurz aufkochen.",
      "Den Tofu in der Sauce schwenken und auf Reis servieren."
    ],
    checks: "Balanced ✓ · Diabetes ✓ · Schwangerschaft ✓",
    swaps: "Tofu ↔ Hähnchenbrust",
    side: "Gedämpfter Brokkoli.",
    remind: false,
    riceCooker: { enabled: false },
  },
  {
    id: "fr-a",
    title: "Lachs & Pak Choi Takikomi 鮭とチンゲン菜のご飯",
    desc: "Reiskocher-Mischreis mit Lachs und viel frischem Pak Choi.",
    story: "Ein extrem gesundes, leichtes Abendessen. Der Lachs und die Dashi-Brühe sorgen für Umami, der Pak Choi bringt tollen Biss und Farbe in den Topf.",
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

  // SAMSTAG
  {
    id: "sa-f",
    title: "Airfryer Croque Monsieur",
    desc: "Die französische Bistro-Legende als genialer Käse-Schinken-Toast aus der Heißluftfritteuse.",
    story: "Im Airfryer schmilzt der Käse perfekt, während das Brot von allen Seiten knusprig wird. Wir verzichten auf Béchamelsauce und machen es einfach und schnell.",
    target: "≈60 g KH (2 P.) · Protein ≈20 g p. P.",
    ingredients: [
      "Vollkorn-Toast 4 Scheiben",
      "Kochschinken 4 Scheiben",
      "Gouda oder Gruyère (pasteurisiert) 60 g",
      "Senf oder Mayo (pasteurisiert)",
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
    title: "Mildes Pad Krapow (Thai Basilikum Hähnchen)",
    desc: "Der thailändische Streetfood-König. Hähnchenhack gebraten mit viel Basilikum und Sojasauce.",
    story: "Im Original extrem scharf. Wir machen eine milde, familientaugliche Version. Das Hähnchenhack saugt die Sauce auf, der frische Basilikum gibt den hervorragenden Kick.",
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
    title: "Oyakodon 親子丼 (Reiskocher-Hack)",
    desc: "Huhn und Ei dämpfen zusammen auf Reis. Ein entspanntes, warmes Abendessen.",
    story: "Oyakodon (Eltern-Kind-Schale) ist ein japanisches Soulfood. Im Reiskocher sparen wir uns die Pfanne. Das Ei wird hier nicht weich, sondern komplett fest gedämpft.",
    target: "≈80 g KH (2 P.) · Protein ≈30 g p. P.",
    ingredients: [
      "Reis (roh) 120 g",
      "Hähnchenbrust (gewürfelt) 200 g",
      "Zwiebel (in Ringen) 1 Stück",
      "Sojasauce 2 EL",
      "Dashi oder Brühe 240 ml",
      "Eier 2 Stück"
    ],
    steps: [
      "Reis, Brühe, Sojasauce in den Topf geben.",
      "Zwiebeln und Hähnchenstücke darauflegen. Start drücken.",
      "Ca. 10 Minuten vor Ende (wenn das Wasser fast weg ist) die leicht verquirlten Eier über das Fleisch gießen.",
      "Deckel schließen und fertig garen (Ei wird fest)."
    ],
    checks: "Balanced ✓ · Schwangerschaft ✓ (Fleisch und Ei garen im Topf komplett durch)",
    swaps: "Hähnchen ↔ Tofu",
    side: "Etwas Frühlingszwiebel on top.",
    remind: true,
    riceCooker: { enabled: true, program: "Mixed / White Rice", water: "Brühe (Standard)", notes: "Eier erst am Ende, sonst werden sie zäh." },
  },

  // SONNTAG
  {
    id: "so-f",
    title: "Gyeran-jjim 계란찜 (Mikrowellen-Dampf-Ei)",
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
    story: "Der Suppenklassiker aus Skandinavien. Die Suppe ist wärmend, reichhaltig und wunderbar unkompliziert. Dill ist hier der Star.",
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
    title: "Ganze Zwiebel & Feta Reis 丸ごと玉ねぎ (Reiskocher)",
    isViral: true,
    desc: "Eine Zwiebel schmilzt im Reiskocher. Feta bringt die cremige Salzigkeit.",
    story: "Zwei virale Trends verschmolzen: Der Zwiebel-Reis aus Japan und der Baked-Feta-Trend! Die Zwiebel wird süß wie Karamell, der Feta cremig. Genial.",
    target: "≈80 g KH (2 P.) · Protein ≈22 g p. P.",
    ingredients: [
      "Reis (roh) 120 g",
      "Zwiebel (mittlere Größe, geschält) 1 Stück",
      "Feta (pasteurisiert) 100 g",
      "Gemüsebrühe 240 ml",
      "Olivenöl 1 EL",
      "Oregano 1 TL"
    ],
    steps: [
      "Reis, Brühe und Öl in den Topf. Die Zwiebel oben kreuzweise tief einschneiden (nicht zerteilen) und in die Mitte setzen.",
      "Den Feta daneben legen.",
      "Reiskocher starten.",
      "Nach dem Kochen die butterweiche Zwiebel zerdrücken und mit dem Käse-Reis vermengen."
    ],
    checks: "Balanced ✓ · Schwangerschaft ✓ (Käse pasteurisiert) · Diabetes ✓",
    swaps: "Feta ↔ Mozzarella",
    side: "Tomatensalat.",
    remind: true,
    riceCooker: { enabled: true, program: "White Rice", water: "Brühe (Standard)", notes: "Zwiebel kreuzweise einschneiden, damit sie weich wird." },
  },
];

export default function Woche21DE() {
  return (
    <PlanTemplate
      meta={meta}
      data={DATA}
      dayNames={DAY_NAME_DE}
      uiTitles={UI_TITLES}
      subtitle="Virale Airfryer-Hacks 🔥 · Goldbrasse, Zha Cai & Co · Balanced"
      heroChips={["Woche 21", "Virale Trends & Wohlfühlküche", "Täglich 1× 🍚 Reiskocher"]}
    />
  );
}

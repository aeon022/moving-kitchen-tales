/*
  Moving Kitchen Tales – Woche 11 (Start: 2026-03-09)
  Fokus: Virale Hits (hervorgehoben!), Original-Titel (CN/JP/KR), Reiskocher, Airfryer.
  Inhalt: Balanced, Schwangerschaftssicher, Diabetesfreundlich.
*/

import React from "react";
import PlanTemplate from "../PlanTemplate";

export const meta = {
  title: "Woche 11",
  startDate: "2026-03-09",
  id: "woche-11-2026-03-09",
  lang: "de",
  sidebar: "Woche 11 (2026-03-09)",
};

const DAY_NAME_DE = {
  mo: "Montag (2026-03-09)",
  di: "Dienstag (2026-03-10)",
  mi: "Mittwoch (2026-03-11)",
  do: "Donnerstag (2026-03-12)",
  fr: "Freitag (2026-03-13)",
  sa: "Samstag (2026-03-14)",
  so: "Sonntag (2026-03-15)",
};

const UI_TITLES = {
  main: "Rezepte Woche 11",
  list: "Einkaufsliste Woche 11",
};

export const DATA = [
  // MONTAG
  {
    id: "mo-f",
    title: "Grated Egg Avocado Toast アボカドエッグトースト",
    isViral: true,
    desc: "Hartgekochtes Ei, über Avocado-Toast gerieben wie Parmesan. Super cremig!",
    story: "Dieser TikTok-Trend ist ein Gamechanger. Statt das Ei in Scheiben zu schneiden, reibt man es über den Toast. Die Textur wird dadurch unglaublich fein und schmilzt fast.",
    target: "≈60 g KH (2 P.) · Protein ≈18 g p. P.",
    ingredients: [
      "Vollkorn-Toast 4 Scheiben",
      "Eier (hartgekocht) 2 Stück",
      "Avocado (reif) 1 Stück",
      "Sriracha-Sauce oder Mayo (pasteurisiert) 1 TL",
      "Salz & Pfeffer"
    ],
    steps: [
      "Toastbrot knusprig toasten.",
      "Avocado zerdrücken und auf dem Toast verstreichen.",
      "Die hartgekochten Eier mit einer Käserreibe fein über die Brote reiben.",
      "Mit etwas Mayo oder Sriracha toppen."
    ],
    checks: "Balanced ✓ · Schwangerschaft ✓ (Eier hartgekocht!) · Diabetes ✓",
    swaps: "Avocado ↔ Frischkäse",
    side: "Ein Glas Tee.",
    remind: true,
    riceCooker: { enabled: false },
  },
  {
    id: "mo-m",
    title: "Peanut-Butter Udon ピーナッツバターうどん",
    desc: "Dicke Udon-Nudeln in einer warmen, ultra-cremigen Erdnusssauce.",
    story: "Ein asiatischer Comfort-Food-Klassiker, der blitzschnell im Wok oder in der Pfanne geht. Die Erdnussbutter emulgiert mit dem Nudelwasser zu einer Traum-Sauce.",
    target: "≈85 g KH (2 P.) · Protein ≈22 g p. P.",
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
    id: "mo-a",
    title: "Lazy Sushi Bake 寿司ベイク (Reiskocher)",
    isViral: true,
    desc: "Die Aromen einer Sushi-Rolle, einfach zusammen im Reiskocher zubereitet.",
    story: "Der Sushi-Bake ist normalerweise ein Auflauf. Wir machen ihn noch einfacher: Der Lachs gart im Reiskocher mit, am Ende wird Mayo und Nori untergehoben.",
    target: "≈80 g KH (2 P.) · Protein ≈28 g p. P.",
    ingredients: [
      "Reis (roh, ideal Sushi-Reis) 120 g",
      "Lachsfilet 200 g",
      "Mayonnaise (pasteurisiert) 2 EL",
      "Sojasauce 1 EL",
      "Reisessig 1 EL",
      "Nori (zerbröselt) 1 Blatt"
    ],
    steps: [
      "Reis mit Wasser in den Reiskocher geben. Lachs mit Sojasauce beträufeln und obendrauf setzen.",
      "Start drücken. Wenn fertig, Lachs zerteilen.",
      "Mayo, Reisessig und Nori-Brösel unter den heißen Reis rühren.",
      "Warm löffeln."
    ],
    checks: "Balanced ✓ · Schwangerschaft ✓ (Lachs dämpft komplett durch, Mayo aus Tube) · Diabetes ✓",
    swaps: "Lachs ↔ Thunfisch (Dose)",
    side: "Gurkensalat.",
    remind: true,
    riceCooker: { enabled: true, program: "White Rice / Sushi", water: "Standard", notes: "Lachs gart wunderbar zart im Dampf." },
  },

  // DIENSTAG
  {
    id: "di-f",
    title: "Herzhaftes Miso-Oatmeal 味噌オートミール",
    desc: "Haferbrei nach japanischer Art, mit Miso-Paste, Sojasauce und Spiegelei.",
    story: "In Japan frühstückt man oft Reis mit Miso-Suppe. Das Oatmeal kombiniert beides: Die Flocken kochen in Dashi-Brühe. Macht satt und glücklich.",
    target: "≈65 g KH (2 P.) · Protein ≈18 g p. P.",
    ingredients: [
      "Haferflocken 100 g",
      "Dashi oder Gemüsebrühe 400 ml",
      "Miso-Paste 1 EL",
      "Eier 2 Stück",
      "Frühlingszwiebel 10 g"
    ],
    steps: [
      "Haferflocken in Brühe einköcheln. Am Ende vom Herd nehmen und Miso einrühren.",
      "Eier in der Pfanne komplett durchbraten (kein flüssiges Eigelb).",
      "Haferbrei mit dem Ei und Frühlingszwiebeln toppen."
    ],
    checks: "Balanced ✓ · Schwangerschaft ✓ (Ei durchgebraten)",
    swaps: "Eier ↔ Fester Tofu",
    side: "-",
    remind: true,
    riceCooker: { enabled: false },
  },
  {
    id: "di-m",
    title: "Airfryer Zucchini Pizza Bites ズッキーニピザ",
    desc: "Low-Carb Snack-Mittagessen. Zucchinischeiben überbacken mit Tomatensauce und Käse.",
    story: "Eine schnelle, vitaminreiche Alternative zu normaler Pizza. Im Airfryer wird die Zucchini nicht matschig, sondern behält einen tollen Biss.",
    target: "≈45 g KH (2 P.) · Protein ≈20 g p. P.",
    ingredients: [
      "Zucchini (groß) 1 Stück",
      "Passierte Tomaten 4 EL",
      "Gouda oder Mozzarella (pasteurisiert) 80 g",
      "Italienische Kräuter 1 TL",
      "Vollkornbrot (als Beilage) 2-4 Scheiben"
    ],
    steps: [
      "Zucchini in ca. 1 cm dicke Scheiben schneiden.",
      "Jede Scheibe mit Tomatensauce bestreichen, würzen und Käse darauflegen.",
      "Im Airfryer bei 180°C ca. 8-10 Min backen, bis der Käse goldbraun ist.",
      "Mit Brot servieren."
    ],
    checks: "Balanced ✓ · Diabetes ✓ · Schwangerschaft ✓ (Käse schmilzt komplett durch)",
    swaps: "Zucchini ↔ Auberginen",
    side: "-",
    remind: false,
    riceCooker: { enabled: false },
  },
  {
    id: "di-a",
    title: "Baozi-Hack Reis 包子风味饭 (Reiskocher)",
    desc: "Der Geschmack von chinesischen Bao-Teigtaschen, ohne Teig zu kneten.",
    story: "Wir formen Hackbällchen mit typischen Baozi-Gewürzen (Ingwer, Soja, Sesamöl) und dämpfen sie direkt auf dem Reis.",
    target: "≈80 g KH (2 P.) · Protein ≈28 g p. P.",
    ingredients: [
      "Reis (roh) 120 g",
      "Schweinehack (mager) 200 g",
      "Ingwer (gerieben) 1 TL",
      "Sojasauce 2 EL",
      "Weißkohl (fein geschnitten) 100 g",
      "Wasser"
    ],
    steps: [
      "Hack mit Ingwer und Sojasauce verkneten, kleine Bällchen formen.",
      "Reis und Wasser in den Reiskocher. Kohl und Hackbällchen darauf verteilen.",
      "Start drücken. Der Fleischsaft zieht direkt in den Reis.",
      "Am Ende gut vermischen."
    ],
    checks: "Balanced ✓ · Schwangerschaft ✓ (Hackfleisch gart sicher durch)",
    swaps: "Schweinehack ↔ Hähnchenhack",
    side: "Ein Spritzer Sesamöl drüber.",
    remind: true,
    riceCooker: { enabled: true, program: "Mixed / White Rice", water: "Standard", notes: "Kohl gibt etwas Feuchtigkeit ab." },
  },

  // MITTWOCH
  {
    id: "mi-f",
    title: "Ricotta-Zitronen Pancakes (Pancake alla Ricotta)",
    desc: "Fluffige Pancakes mit Ricotta-Käse im Teig. Ein italienischer Frühstückstraum.",
    story: "Der Ricotta sorgt dafür, dass die Pancakes unglaublich weich und saftig werden, ohne schwer im Magen zu liegen. Ein Hauch Zitrone weckt dich auf.",
    target: "≈75 g KH (2 P.) · Protein ≈22 g p. P.",
    ingredients: [
      "Mehl 100 g",
      "Ricotta (pasteurisiert) 100 g",
      "Eier 2 Stück",
      "Zitronenabrieb (bio) 1 TL",
      "Milch 50 ml",
      "Backpulver 1 TL"
    ],
    steps: [
      "Ricotta, Eier, Milch und Zitronenabrieb glatt rühren.",
      "Mehl und Backpulver zügig unterheben (nicht zu viel rühren!).",
      "In der Pfanne bei mittlerer Hitze durchbacken, bis sie fest und goldbraun sind."
    ],
    checks: "Balanced ✓ · Schwangerschaft ✓ (Teig durchbacken, Ricotta pasteurisiert)",
    swaps: "Ricotta ↔ Magerquark",
    side: "Ein paar Beeren.",
    remind: true,
    riceCooker: { enabled: false },
  },
  {
    id: "mi-m",
    title: "Gochujang-Sahne Pasta 고추장 파스타",
    isViral: true,
    desc: "Vollkorn-Nudeln in einer koreanisch-italienischen Fusions-Sauce.",
    story: "Ein Internet-Phänomen! Die süßlich-würzige koreanische Chilipaste (Gochujang) vermischt mit etwas Sahne ergibt eine unschlagbare Rosé-Sauce.",
    target: "≈85 g KH (2 P.) · Protein ≈18 g p. P.",
    ingredients: [
      "Vollkorn-Nudeln 130 g",
      "Gochujang (milde Paste) 1 EL",
      "Kochsahne (oder Sojacreme) 100 ml",
      "Knoblauch 1 Zehe",
      "Parmesan 20 g",
      "Spinat 50 g"
    ],
    steps: [
      "Nudeln kochen. Etwas Nudelwasser aufheben.",
      "Knoblauch in der Pfanne anbraten, Gochujang kurz mitrösten.",
      "Mit Sahne und Nudelwasser ablöschen. Spinat reinwerfen.",
      "Nudeln in der Sauce schwenken und mit Parmesan bestreuen."
    ],
    checks: "Balanced ✓ · Schwangerschaft ✓ · Diabetes ✓",
    swaps: "Gochujang ↔ Tomatenmark (falls es komplett mild sein soll)",
    side: "-",
    remind: false,
    riceCooker: { enabled: false },
  },
  {
    id: "mi-a",
    title: "Butabara Daikon 豚バラ大根 (Reiskocher)",
    desc: "Japanisch inspirierter Schmortopf. Rettich und Schweinebauch verschmelzen förmlich.",
    story: "Daikon (weißer Rettich) wirkt Wunder bei der Verdauung und saugt die herzhafte Soja-Brühe auf wie ein Schwamm. Ein echtes Wohlfühl-Essen.",
    target: "≈80 g KH (2 P.) · Protein ≈24 g p. P.",
    ingredients: [
      "Reis (roh) 120 g",
      "Schweinebauch (in dünnen Scheiben oder gewürfelt) 150 g",
      "Daikon (Rettich, gewürfelt) 150 g",
      "Sojasauce 2 EL",
      "Mirin 1 EL",
      "Dashi oder Brühe 240 ml"
    ],
    steps: [
      "Reis und Brühe in den Topf geben.",
      "Sojasauce und Mirin dazugeben.",
      "Schweinebauch und Rettich oben auflegen. Start drücken.",
      "Nach dem Kochen alles vorsichtig durchmischen."
    ],
    checks: "Balanced ✓ · Schwangerschaft ✓ (Fleisch wird durchgedämpft)",
    swaps: "Schweinebauch ↔ Hähnchenoberschenkel",
    side: "Frühlingszwiebeln drüberstreuen.",
    remind: true,
    riceCooker: { enabled: true, program: "Mixed / White Rice", water: "Brühe (Standard)", notes: "Rettich wird extrem weich und lecker." },
  },

  // DONNERSTAG
  {
    id: "do-f",
    title: "Tomaten-Rührei Toast 番茄炒蛋吐司",
    desc: "Der chinesische Klassiker 'Tomate & Ei' serviert auf knusprigem Brot.",
    story: "Jedes chinesische Kind wächst damit auf. Die Säure der Tomate weckt auf, das Ei macht satt. Auf Vollkornbrot ein geniales, schnelles Frühstück.",
    target: "≈65 g KH (2 P.) · Protein ≈20 g p. P.",
    ingredients: [
      "Tomaten (sehr reif) 2 Stück",
      "Eier 3 Stück",
      "Ketchup 1 TL",
      "Knoblauch 1 Zehe",
      "Vollkorn-Toast 4 Scheiben"
    ],
    steps: [
      "Eier in der Pfanne stocken lassen (komplett durchbraten!), herausnehmen.",
      "Tomaten mit Knoblauch anbraten, bis sie musig werden. Ketchup dazu.",
      "Eier zurück in die Pfanne, vermischen.",
      "Toast rösten und die Mischung darauf verteilen."
    ],
    checks: "Balanced ✓ · Schwangerschaft ✓ (Eier komplett durch)",
    swaps: "Toast ↔ Reis",
    side: "-",
    remind: true,
    riceCooker: { enabled: false },
  },
  {
    id: "do-m",
    title: "Airfryer Chicken Wings 炸鸡翅 (Asia Style)",
    desc: "Knusprige Hähnchenflügel aus der Heißluftfritteuse mit klebriger Soja-Glasur.",
    story: "Flügel im Airfryer werden unglaublich kross, und fast das gesamte Fett tropft ab. Die asiatische Glasur aus Soja und ein wenig Honig macht sie perfekt.",
    target: "≈80 g KH (2 P.) · Protein ≈30 g p. P.",
    ingredients: [
      "Hähnchenflügel 300 g",
      "Sojasauce 2 EL",
      "Honig 1 TL",
      "Reis (gekocht) 150 g",
      "Gurke 100 g"
    ],
    steps: [
      "Flügel trocken tupfen. Im Airfryer bei 200°C ca. 20-25 Min backen (bis sie am Knochen komplett durch sind!).",
      "Sojasauce und Honig in einer Pfanne kurz aufkochen, bis es dickt.",
      "Knusprige Flügel in der Sauce schwenken.",
      "Mit Reis und Gurkensticks servieren."
    ],
    checks: "Balanced ✓ · Schwangerschaft ✓ (Fleisch am Knochen prüfen, muss durch sein!)",
    swaps: "Flügel ↔ Hähnchenbrust-Würfel",
    side: "Reis und Gurke.",
    remind: false,
    riceCooker: { enabled: false },
  },
  {
    id: "do-a",
    title: "Miso-Kinoko Gohan 味噌きのこご飯 (Reiskocher)",
    desc: "Veganer Umami-Traum. Pilze und Edamame dämpfen mit Miso-Paste im Reis.",
    story: "Ein leichtes Gericht für den Abend. Miso liefert die Würze, Edamame das Protein, und der Reiskocher macht die ganze Arbeit.",
    target: "≈82 g KH (2 P.) · Protein ≈18 g p. P.",
    ingredients: [
      "Reis (roh) 120 g",
      "Braune Champignons oder Shiitake 150 g",
      "Edamame (geschält, TK) 100 g",
      "Miso-Paste 1 EL",
      "Gemüsebrühe 240 ml",
      "Butter 10 g"
    ],
    steps: [
      "Miso-Paste in der warmen Brühe auflösen.",
      "Reis, Brühe, Pilze in den Reiskocher geben und starten.",
      "Nach dem Kochen die Edamame (aufgetaut) und die Butter unter den heißen Reis heben.",
      "5 Minuten ziehen lassen."
    ],
    checks: "Balanced ✓ · Schwangerschaft ✓ · Diabetes ✓",
    swaps: "Edamame ↔ Tofu-Würfel",
    side: "Ein Stück gebratener Lachs (optional).",
    remind: true,
    riceCooker: { enabled: true, program: "White Rice / Mixed", water: "Brühe (Standard)", notes: "Miso nicht unaufgelöst reingeben, sonst gibt es Klumpen." },
  },

  // FREITAG
  {
    id: "fr-f",
    title: "Vietnamesische Reispapier-Pizza Bánh Tráng Nướng",
    isViral: true,
    desc: "Ein Airfryer/Pfannen-Hack mit Ei auf Reispapier.",
    story: "Das genialste vietnamesische Streetfood. Das Reispapier wird beim Erhitzen wie ein knuspriger Taco, das Ei stockt oben drauf.",
    target: "≈65 g KH (2 P.) · Protein ≈18 g p. P.",
    ingredients: [
      "Reispapier 4 Blatt",
      "Eier 2 Stück",
      "Frühlingszwiebeln 20 g",
      "Sriracha-Mayo (pasteurisiert) 1 EL",
      "Gouda (gerieben) 30 g",
      "Brot (als Beilage) 2 Scheiben"
    ],
    steps: [
      "Ein Reispapier in die heiße Pfanne oder den Airfryer legen.",
      "Ein halbes, verquirltes Ei darauf verstreichen, Zwiebeln und Käse drauf.",
      "Backen/Braten bis das Reispapier am Rand poppt und das Ei komplett (!) gestockt ist.",
      "Zusammenklappen und genießen."
    ],
    checks: "Balanced ✓ · Schwangerschaft ✓ (Ei komplett durchgaren)",
    swaps: "Käse ↔ Putenbrust-Streifen",
    side: "Tee.",
    remind: true,
    riceCooker: { enabled: false },
  },
  {
    id: "fr-m",
    title: "Airfryer Lachs-Frikadellen Laxbiffar",
    desc: "Schnelle Lachsfrikadellen mit Dill, fettarm im Airfryer gebacken.",
    story: "In Skandinavien liebt man Fischfrikadellen (Laxbiffar). Wir machen sie aus Lachsresten oder Dosenlachs, gebunden mit etwas Semmelbröseln.",
    target: "≈80 g KH (2 P.) · Protein ≈26 g p. P.",
    ingredients: [
      "Lachs (Dose oder frische Reste, sehr klein gehackt) 200 g",
      "Ei 1 Stück",
      "Paniermehl 30 g",
      "Dill (frisch) 1 EL",
      "Kartoffeln 300 g",
      "Quark-Dip (aus Magerquark & Zitrone) 2 EL"
    ],
    steps: [
      "Lachs mit Ei, Paniermehl und Dill mischen, Frikadellen formen.",
      "Im Airfryer bei 180°C ca. 12 Minuten backen, bis sie komplett durchgegart und leicht knusprig sind.",
      "Kartoffeln kochen.",
      "Mit dem Zitronen-Quark-Dip servieren."
    ],
    checks: "Balanced ✓ · Schwangerschaft ✓ (Frikadellen gut durchgaren)",
    swaps: "Lachs ↔ Thunfisch (Dose)",
    side: "Erbsen.",
    remind: false,
    riceCooker: { enabled: false },
  },
  {
    id: "fr-a",
    title: "Hühnchen & Kürbis Congee 南瓜鸡粥 (Reiskocher)",
    desc: "Cremiger Reisbrei mit Kürbis und Hühnchen. Sehr schonend und wärmend.",
    story: "Am Ende der Arbeitswoche braucht der Körper etwas Sanftes. Der Kürbis verkocht komplett im Brei und verleiht ihm eine wunderschöne, goldene Farbe.",
    target: "≈75 g KH (2 P.) · Protein ≈24 g p. P.",
    ingredients: [
      "Reis (roh) 80 g",
      "Hühnerbrühe 800 ml",
      "Hähnchenbrust (klein gewürfelt) 150 g",
      "Kürbis (z.B. Hokkaido, in Stücken) 150 g",
      "Ingwer 5 g",
      "Sojasauce 1 EL"
    ],
    steps: [
      "Huhn mit Sojasauce mischen.",
      "Reis, Brühe, Kürbis und Ingwer in den Reiskocher (Porridge Modus, ca. 50 Min).",
      "In den letzten 15 Minuten das Huhn hinzugeben und sicher durchgaren lassen.",
      "Gut umrühren, der Kürbis zerfällt von allein."
    ],
    checks: "Balanced ✓ · Schwangerschaft ✓ (Huhn durch) · Diabetes ✓",
    swaps: "Kürbis ↔ Karotte",
    side: "Etwas frischer Koriander oder Frühlingszwiebeln.",
    remind: true,
    riceCooker: { enabled: true, program: "Porridge / Congee", water: "1:10 Ratio", notes: "Sehr flüssig am Anfang, dickt toll ein." },
  },

  // SAMSTAG
  {
    id: "sa-f",
    title: "Custard Yogurt Toast ヨーグルトトースト",
    isViral: true,
    desc: "Toast, belegt mit einer cremigen Joghurt-Ei-Mischung, gebacken im Airfryer.",
    story: "Ein viraler Frühstückshit! Eine Mischung aus Joghurt und Ei wird auf eine Kuhle im Toast gegeben. Beim Backen entsteht ein süßer, puddingartiger Belag (Custard).",
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
    checks: "Balanced ✓ · Schwangerschaft ✓ (Ei-Masse muss gestockt sein)",
    swaps: "Beeren ↔ Apfelspalten",
    side: "Kaffee.",
    remind: true,
    riceCooker: { enabled: false },
  },
  {
    id: "sa-m",
    title: "Schnelle Wok-Nudeln 捞面 (Lo Mein)",
    desc: "Einfache, gebratene Nudeln mit einer dunklen Soja-Sauce und Pak Choi.",
    story: "Das klassische chinesische Wok-Gericht. 'Lo Mein' bedeutet gerührte Nudeln. Der Schlüssel ist, die Nudeln erst nach dem Gemüse in die Pfanne zu geben.",
    target: "≈85 g KH (2 P.) · Protein ≈15 g p. P. (mehr mit Beilage)",
    ingredients: [
      "Eiernudeln oder Weizennudeln 150 g",
      "Pak Choi 150 g",
      "Sojasauce (dunkel & hell) 2 EL",
      "Knoblauch 1 Zehe",
      "Zucker 1 TL",
      "Tofu oder gebratenes Ei (optional) 100 g"
    ],
    steps: [
      "Nudeln kochen und abtropfen.",
      "Knoblauch und Pak Choi im Wok scharf anbraten.",
      "Nudeln dazugeben.",
      "Mit Sojasauce und Zucker würzen, 2 Minuten pfannenrühren."
    ],
    checks: "Balanced ✓ · Schwangerschaft ✓ · Diabetes ✓",
    swaps: "Pak Choi ↔ Spinat",
    side: "Spiegelei (durchgebraten).",
    remind: false,
    riceCooker: { enabled: false },
  },
  {
    id: "sa-a",
    title: "Gyu-Don Style Rice 牛丼風ご飯 (Reiskocher)",
    desc: "Dünnes Rindfleisch dämpft über dem Reis mit einer süß-salzigen Zwiebel-Sauce.",
    story: "Gyu-Don ist eigentlich ein japanisches Fast-Food. Die Kombination aus zartem Rindfleisch und weichen Zwiebeln klappt aber auch perfekt im Reiskocher als One-Pot-Meal.",
    target: "≈80 g KH (2 P.) · Protein ≈28 g p. P.",
    ingredients: [
      "Reis (roh) 120 g",
      "Rindfleisch (sehr feine Hotpot-Scheiben) 200 g",
      "Zwiebel 1 Stück",
      "Sojasauce 2 EL",
      "Mirin 1 EL",
      "Brühe 240 ml"
    ],
    steps: [
      "Zwiebel in feine Ringe schneiden.",
      "Reis und Brühe in den Topf. Soja und Mirin dazu.",
      "Zwiebeln und Rindfleisch obendrauf verteilen (Fleisch auffächern, nicht als Klumpen!).",
      "Start drücken. Alles durchrühren."
    ],
    checks: "Balanced ✓ · Schwangerschaft ✓ (Fleisch wird durchgedämpft)",
    swaps: "Rind ↔ Schwein",
    side: "Eingelegter Ingwer.",
    remind: true,
    riceCooker: { enabled: true, program: "Mixed / White Rice", water: "Standard", notes: "Fleisch gut verteilen, damit es gleichmäßig gart." },
  },

  // SONNTAG
  {
    id: "so-f",
    title: "Tomaten-Käse-Spiegelei 烤番茄鸡蛋 (Airfryer)",
    desc: "Eier und Kirschtomaten, überbacken in einem kleinen Förmchen.",
    story: "Sonntagsfrühstück ohne Pfanne abzuwaschen! Man schlägt einfach Eier über Tomaten und Käse auf und lässt den Airfryer den Rest erledigen.",
    target: "≈60 g KH (2 P.) · Protein ≈22 g p. P.",
    ingredients: [
      "Eier 4 Stück",
      "Kirschtomaten 100 g",
      "Gouda oder Cheddar (gerieben) 40 g",
      "Vollkornbrot 4 Scheiben",
      "Salz & Pfeffer"
    ],
    steps: [
      "Tomaten halbieren und in zwei kleine, ofenfeste Förmchen legen.",
      "Käse darüber streuen. Jeweils 2 Eier vorsichtig darüber aufschlagen.",
      "Im Airfryer bei 170°C ca. 10-12 Min backen (Eier müssen komplett gestockt sein!).",
      "Mit Toast servieren."
    ],
    checks: "Balanced ✓ · Schwangerschaft ✓ (Eigelb darf nicht mehr flüssig sein!)",
    swaps: "Tomaten ↔ Champignons",
    side: "Kaffee.",
    remind: true,
    riceCooker: { enabled: false },
  },
  {
    id: "so-m",
    title: "Airfryer Lachs-Bites サーモンボウル",
    desc: "Kleine Lachs-Würfel, asiatisch mariniert und im Airfryer saftig gebacken.",
    story: "Lachs in Würfeln backt im Airfryer in unter 8 Minuten. Die Ränder karamellisieren durch die Sojasauce herrlich.",
    target: "≈80 g KH (2 P.) · Protein ≈28 g p. P.",
    ingredients: [
      "Lachsfilet (gewürfelt) 200 g",
      "Sojasauce 1 EL",
      "Sesamöl 1 TL",
      "Reis (gekocht) 150 g",
      "Brokkoli (gedämpft) 100 g"
    ],
    steps: [
      "Lachswürfel in Sojasauce und Sesamöl wenden.",
      "Im Airfryer bei 200°C ca. 7-9 Min backen (Fisch muss komplett durchgaren!).",
      "Mit Reis und Brokkoli in einer Bowl anrichten."
    ],
    checks: "Balanced ✓ · Schwangerschaft ✓ (Lachs komplett durchgaren)",
    swaps: "Lachs ↔ Tofu",
    side: "Etwas Chili-Mayo (aus pasteurisierter Mayo) als Dip.",
    remind: false,
    riceCooker: { enabled: false },
  },
  {
    id: "so-a",
    title: "Chicken & Sausage Paella 腊味煲仔饭 (Reiskocher)",
    desc: "Herzhafter Reistopf mit Hähnchen und etwas Wurst für den Rauchgeschmack.",
    story: "Die chinesische Variante der Paella (Bao Zai Fan). Der Reis am Boden wird oft herrlich knusprig, während das Fleisch oben dämpft.",
    target: "≈84 g KH (2 P.) · Protein ≈30 g p. P.",
    ingredients: [
      "Reis (roh) 120 g",
      "Hähnchenbrust (gewürfelt) 150 g",
      "Räucherwurst (z.B. Cabanossi) 50 g",
      "Sojasauce 2 EL",
      "Erbsen (TK) 50 g",
      "Brühe 240 ml"
    ],
    steps: [
      "Wurst in dünne Scheiben schneiden. Hähnchen mit Sojasauce mischen.",
      "Reis und Brühe in den Topf.",
      "Wurst, Hähnchen und Erbsen darauf verteilen.",
      "Start drücken. Wenn fertig, alles gut durchmischen."
    ],
    checks: "Balanced ✓ · Schwangerschaft ✓ (Fleisch und Wurst kochen auf >80°C sicher durch)",
    swaps: "Wurst ↔ Räuchertofu",
    side: "Ein Tomatensalat.",
    remind: true,
    riceCooker: { enabled: true, program: "Mixed / White Rice", water: "Standard", notes: "Wurst gibt ordentlich Fett und Geschmack ab." },
  },
];

export default function Woche11DE() {
  return (
    <PlanTemplate
      meta={meta}
      data={DATA}
      dayNames={DAY_NAME_DE}
      uiTitles={UI_TITLES}
      subtitle="Virale Hits 🔥 · Originaltitel (CN/JP/KR) · Balanced"
      heroChips={["Woche 11", "Virale Trends & Wohlfühlküche", "Täglich 1× 🍚 Reiskocher"]}
    />
  );
}

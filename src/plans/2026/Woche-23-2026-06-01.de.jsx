/*
  GhibliKitchen – Woche 23 (Start: 2026-06-01)
  Status: KOMPLETT & FUNKTIONSFÄHIG (Alle 21 Rezepte)
  Fokus: Japan (ausgefallen, aber extrem leicht), Reiskocher-Magie, Schwangerschaftssicher.
*/

import React from "react";
import PlanTemplate from "../PlanTemplate";

export const meta = {
  title: "Woche 23",
  startDate: "2026-06-01",
  id: "woche-23-2026-06-01",
  lang: "de",
  sidebar: "Woche 23 (2026-06-01)",
};

const DAY_NAME_DE = {
  mo: "Montag (2026-06-01)",
  di: "Dienstag (2026-06-02)",
  mi: "Mittwoch (2026-06-03)",
  do: "Donnerstag (2026-06-04)",
  fr: "Freitag (2026-06-05)",
  sa: "Samstag (2026-06-06)",
  so: "Sonntag (2026-06-07)",
};

const UI_TITLES = {
  main: "Rezepte Woche 23",
  list: "Einkaufsliste Woche 23",
};

export const DATA = [
  // MONTAG
  {
    id: "mo-f",
    title: "Airfryer Omurice-Toast オムライス風トースト",
    desc: "Ein Toast, belegt mit Ketchup-Reis, umhüllt von einem im Airfryer gebackenen Omelett.",
    story: "Omurice ist das japanische Soulfood schlechthin. Wir machen daraus ein einfaches Frühstück. Der Ketchup-Reis wird auf den Toast gedrückt und mit Ei übergossen. Im Airfryer stockt das Ei perfekt.",
    target: "≈65 g KH (2 P.) · Protein ≈18 g p. P.",
    ingredients: [
      "Vollkorn-Toast 4 Scheiben",
      "Reis (gekocht) 100 g",
      "Ketchup 2 EL",
      "Eier 3 Stück",
      "Käse (Gouda, gerieben) 30 g"
    ],
    steps: [
      "Gekochten Reis mit Ketchup und Käse vermengen.",
      "Die Reismasse flach auf die Toastscheiben drücken.",
      "Eier verquirlen, leicht salzen und vorsichtig über die Toastscheiben gießen, sodass der Reis bedeckt ist.",
      "Im Airfryer bei 170°C ca. 8-10 Min backen, bis das Ei komplett durchgestockt ist."
    ],
    checks: "Balanced ✓ · Schwangerschaft ✓ (Ei komplett durchgebacken) · Diabetes ✓",
    swaps: "Toast ↔ Reispapier",
    side: "Kaffee.",
    remind: true,
    riceCooker: { enabled: false },
  },
  {
    id: "mo-m",
    title: "Miso Butter Corn Udon 味噌バターコーンうどん",
    desc: "Dicke Udon-Nudeln in einer schnellen, cremigen Brühe aus Miso, Butter und Mais.",
    story: "Eine Hommage an die berühmten Hokkaido-Ramen. Miso und Butter sind eine unschlagbare Kombination. Der süße Mais bringt einen fantastischen Crunch.",
    target: "≈80 g KH (2 P.) · Protein ≈15 g p. P. (mit Beilage mehr)",
    ingredients: [
      "Udon-Nudeln (vorgegart) 400 g",
      "Gemüsebrühe oder Dashi 600 ml",
      "Miso-Paste (hell) 2 EL",
      "Butter 20 g",
      "Mais (Dose, abgetropft) 100 g",
      "Frühlingszwiebel 20 g"
    ],
    steps: [
      "Brühe in einem Topf erhitzen (nicht sprudelnd kochen).",
      "Udon-Nudeln und Mais hinzugeben und ca. 2-3 Minuten heiß werden lassen.",
      "Topf vom Herd nehmen. Die Miso-Paste und die Butter einrühren, bis eine cremige Emulsion entsteht.",
      "Mit gehackten Frühlingszwiebeln anrichten."
    ],
    checks: "Balanced ✓ · Schwangerschaft ✓ · Diabetes ✓",
    swaps: "Udon ↔ Ramen-Nudeln",
    side: "Ein hartgekochtes Ei on top.",
    remind: false,
    riceCooker: { enabled: false },
  },
  {
    id: "mo-a",
    title: "Hotate Gohan 帆立ご飯 (Jakobsmuschel-Reis)",
    desc: "Edler Reis, gegart mit Jakobsmuscheln und Bambussprossen.",
    story: "Klingt nach einem Sterne-Restaurant, ist aber ein extrem simples Reiskocher-Gericht. Die Jakobsmuscheln geben ihren eleganten, süßlichen Saft direkt an den Reis ab.",
    target: "≈80 g KH (2 P.) · Protein ≈26 g p. P.",
    ingredients: [
      "Reis (roh) 120 g",
      "Jakobsmuscheln (TK, aufgetaut, ohne Rogen) 150 g",
      "Bambussprossen (Dose, in Streifen) 50 g",
      "Sojasauce 2 EL",
      "Mirin 1 EL",
      "Dashi oder Brühe 240 ml"
    ],
    steps: [
      "Jakobsmuscheln trocken tupfen, große Exemplare halbieren.",
      "Reis, Dashi, Sojasauce und Mirin in den Reiskocher füllen.",
      "Jakobsmuscheln und Bambussprossen oben auflegen. Start drücken.",
      "Nach dem Kochen alles vorsichtig auflockern, damit die Muscheln nicht zerfallen."
    ],
    checks: "Balanced ✓ · Schwangerschaft ✓ (Muscheln dämpfen auf >80°C sicher durch)",
    swaps: "Jakobsmuscheln ↔ Garnelen",
    side: "Ein kleiner Gurkensalat.",
    remind: true,
    riceCooker: { enabled: true, program: "Mixed / White Rice", water: "Dashi (Standard)", notes: "Bambus bringt einen grandiosen Biss." },
  },

  // DIENSTAG
  {
    id: "di-f",
    title: "Matcha French Toast 抹茶フレンチトースト",
    desc: "Vollkorntoast, gewendet in einer Matcha-Ei-Mischung und in der Pfanne goldbraun gebacken.",
    story: "Eine japanische Version des Frühstücksklassikers. Der Matcha verleiht dem Toast eine wunderschöne grüne Farbe und eine leicht herbe Note, die grandios zu etwas Ahornsirup passt.",
    target: "≈65 g KH (2 P.) · Protein ≈18 g p. P.",
    ingredients: [
      "Vollkorn-Toast 4 Scheiben",
      "Eier 2 Stück",
      "Milch 50 ml",
      "Matcha-Pulver 1 TL",
      "Agavendicksaft 1 EL",
      "Butter (zum Braten)"
    ],
    steps: [
      "Matcha-Pulver in einem winzigen Schluck heißem Wasser klümpchenfrei auflösen.",
      "Eier, Milch, Matcha und Agavendicksaft in einem flachen Teller verquirlen.",
      "Toastscheiben von beiden Seiten gut darin tränken.",
      "In einer Pfanne mit Butter bei mittlerer Hitze braten, bis das Ei vollständig gestockt und der Toast goldbraun ist."
    ],
    checks: "Balanced ✓ · Schwangerschaft ✓ (Ei komplett durchbraten!)",
    swaps: "Matcha ↔ Zimt",
    side: "Frische Beeren.",
    remind: true,
    riceCooker: { enabled: false },
  },
  {
    id: "di-m",
    title: "Omu-Yakisoba オム焼きそば",
    desc: "Japanische Bratnudeln (Yakisoba), versteckt in einem dünnen, durchgebratenen Omelett.",
    story: "Auf japanischen Sommerfesten (Matsuri) ein Hit. Die Kombination aus herzhaften Bratnudeln und dem Ei-Mantel ist purer Spaß auf dem Teller.",
    target: "≈85 g KH (2 P.) · Protein ≈24 g p. P.",
    ingredients: [
      "Weizennudeln oder Yakisoba-Nudeln 150 g",
      "Schweineschnitzel oder Hähnchen (in feinen Streifen) 100 g",
      "Weißkohl (geschnitten) 100 g",
      "Tonkatsu-Sauce oder Yakisoba-Sauce 3 EL",
      "Eier 3 Stück"
    ],
    steps: [
      "Fleisch und Kohl in der Pfanne komplett durchbraten. Nudeln und Sauce dazugeben, kräftig anrösten. Herausnehmen.",
      "Eier verquirlen, leicht salzen. Die Hälfte der Eimasse in einer sauberen Pfanne zu einem dünnen, GANZ DURCHGEBRATENEN Omelett braten.",
      "Eine Portion Nudeln auf eine Hälfte des Omeletts legen, die andere Hälfte darüberklappen.",
      "Mit der zweiten Portion wiederholen. Mit etwas Ketchup oder Mayo garnieren."
    ],
    checks: "Balanced ✓ · Schwangerschaft ✓ (Fleisch und Eier GANZ durchbraten)",
    swaps: "Schweinefleisch ↔ Tofu-Stifte",
    side: "-",
    remind: false,
    riceCooker: { enabled: false },
  },
  {
    id: "di-a",
    title: "Reiskocher Kare Raisu カレーライス (Japanisches Curry)",
    desc: "Mildes japanisches Curry mit Hühnchen, Kartoffeln und Karotten, als One-Pot-Meal im Reiskocher.",
    story: "Japanisches Curry schmeckt süßlich, herzhaft und sehr mild. Wir geben den Curry-Roux-Block direkt zum Reis und den Zutaten in den Reiskocher. So entsteht Reis und dicke Sauce in einem Durchgang.",
    target: "≈85 g KH (2 P.) · Protein ≈28 g p. P.",
    ingredients: [
      "Reis (roh) 120 g",
      "Hähnchenbrust (gewürfelt) 200 g",
      "Kartoffeln & Karotten (gewürfelt) 150 g",
      "Japanischer Curry-Block (Golden Curry, mild) 1 Würfel",
      "Wasser oder Hühnerbrühe 280 ml"
    ],
    steps: [
      "Reis waschen. Wasser, Reis, Kartoffeln, Karotten und das Hähnchen in den Reiskocher geben.",
      "Den Curry-Block (evtl. leicht zerkleinert) oben auflegen.",
      "Start drücken. Das Curry schmilzt während des Garens.",
      "Nach dem Öffnen sehr gründlich durchmischen, damit sich das Curry gleichmäßig als cremige Sauce um den Reis legt."
    ],
    checks: "Balanced ✓ · Schwangerschaft ✓ (Hähnchen gart sicher durch)",
    swaps: "Hähnchen ↔ Rindergulasch",
    side: "Eingelegter Ingwer oder Gurken.",
    remind: true,
    riceCooker: { enabled: true, program: "Mixed / White Rice", water: "Etwas mehr als Standard (wg. Kartoffeln/Curry)", notes: "Extrem cremig, das Curry dickt stark an." },
  },

  // MITTWOCH
  {
    id: "mi-f",
    title: "Airfryer Baked TKG (Tamago Kake Gohan) 卵かけご飯",
    isViral: true,
    desc: "Der TKG-Trend, schwangerschaftssicher gemacht: Reis-Ei-Patties, knusprig gebacken.",
    story: "TKG (rohes Ei über heißem Reis) ist das japanische Standard-Frühstück. Da rohes Ei in der Schwangerschaft riskant ist, mischen wir das Ei mit dem Reis, formen Patties und backen sie im Airfryer auf. Außen ein Crunch, innen wunderbar weich.",
    target: "≈65 g KH (2 P.) · Protein ≈18 g p. P.",
    ingredients: [
      "Reis (gekocht) 200 g",
      "Eier 2 Stück",
      "Sojasauce 1 EL",
      "Sesamöl 1 TL",
      "Nori (zerbröselt) 1 Blatt"
    ],
    steps: [
      "Gekochten Reis, Eier, Sojasauce und Sesamöl gründlich vermischen.",
      "Aus der Masse 4 flache Patties formen. Leicht ölen.",
      "Im Airfryer bei 190°C ca. 12 Min backen, bis sie komplett durchgestockt und außen knusprig sind.",
      "Mit Nori bestreuen."
    ],
    checks: "Balanced ✓ · Schwangerschaft ✓ (Ei komplett durchgebacken) · Diabetes ✓",
    swaps: "Nori ↔ Frühlingszwiebeln",
    side: "Tee.",
    remind: true,
    riceCooker: { enabled: false },
  },
  {
    id: "mi-m",
    title: "Nasu Dengaku 茄子田楽 (Airfryer)",
    desc: "Butterweiche Auberginen-Hälften mit einer süßlichen Miso-Glasur.",
    story: "Dieses Gericht sieht aus wie Kunst, ist aber unfassbar simpel. Die Miso-Glasur karamellisiert im Airfryer und die Aubergine schmilzt auf der Zunge.",
    target: "≈60 g KH (2 P.) · Protein ≈15 g p. P. (mit Beilage)",
    ingredients: [
      "Aubergine 1 große",
      "Miso-Paste (hell) 2 EL",
      "Agavendicksaft 1 EL",
      "Mirin 1 EL",
      "Reis (gekocht) 150 g",
      "Edamame (aufgetaut) 100 g"
    ],
    steps: [
      "Aubergine längs halbieren, das Fruchtfleisch rautenförmig einschneiden. Etwas einölen.",
      "Im Airfryer bei 180°C ca. 12 Min backen, bis sie weich ist.",
      "Miso, Agave und Mirin zu einer Paste verrühren.",
      "Die Paste dick auf die Auberginenhälften streichen und weitere 3-4 Min backen, bis die Glasur Blasen wirft.",
      "Mit Reis und Edamame servieren."
    ],
    checks: "Balanced ✓ · Schwangerschaft ✓ · Diabetes ✓",
    swaps: "Aubergine ↔ Zucchini (groß)",
    side: "-",
    remind: false,
    riceCooker: { enabled: false },
  },
  {
    id: "mi-a",
    title: "Taimeshi 鯛めし (Goldbrassen-Reis)",
    desc: "Der Stolz der Ehime-Präfektur: Goldbrasse, die im Reiskocher auf einem Bett aus Ingwer und Reis dämpft.",
    story: "Ein Festtagsessen in Japan. Die Goldbrasse gibt einen feinen, unglaublich eleganten Geschmack an den Reis ab. Sobald man den Reiskocher öffnet, strömt einem ein grandioser Duft entgegen.",
    target: "≈80 g KH (2 P.) · Protein ≈28 g p. P.",
    ingredients: [
      "Reis (roh) 120 g",
      "Goldbrassenfilet (Tai, ohne Gräten!) 200 g",
      "Ingwer (feine Streifen) 15 g",
      "Dashi-Brühe 240 ml",
      "Sojasauce (hell) 2 EL",
      "Mirin 1 EL"
    ],
    steps: [
      "Reis waschen. Dashi, Sojasauce und Mirin in den Reiskocher geben.",
      "Das Fischfilet oben auflegen und mit den Ingwerstreifen bedecken.",
      "Start drücken.",
      "Nach dem Kochen den Fisch leicht zerteilen und alles vorsichtig mischen, ohne den Fisch komplett zu zermatschen."
    ],
    checks: "Balanced ✓ · Schwangerschaft ✓ (Fisch dämpft sicher auf >80°C durch) · Diabetes ✓",
    swaps: "Goldbrasse ↔ Wolfsbarsch oder Kabeljau",
    side: "Ein Schälchen Wakame-Salat.",
    remind: true,
    riceCooker: { enabled: true, program: "Mixed / White Rice", water: "Dashi (Standard)", notes: "Unbedingt Filet auf Gräten abtasten." },
  },

  // DONNERSTAG
  {
    id: "do-f",
    title: "Kinako Oatmeal きな粉オートミール",
    desc: "Haferbrei, verfeinert mit geröstetem Sojabohnenmehl (Kinako) und Agavendicksaft.",
    story: "Kinako schmeckt extrem nussig, fast ein bisschen wie Erdnussbutter, ist aber reines Soja-Protein. In Japan streut man es über Mochi. Im Porridge ist es eine absolute Offenbarung.",
    target: "≈65 g KH (2 P.) · Protein ≈22 g p. P.",
    ingredients: [
      "Haferflocken 100 g",
      "Sojamilch oder Milch 400 ml",
      "Kinako (Geröstetes Sojabohnenmehl) 3 EL",
      "Agavendicksaft 1 EL",
      "Walnüsse 20 g"
    ],
    steps: [
      "Haferflocken in der Milch aufkochen, bis der Brei cremig ist.",
      "Das Kinako-Pulver und den Agavendicksaft einrühren (es dickt den Brei nochmal toll an).",
      "In Schüsseln füllen und mit Walnüssen bestreuen."
    ],
    checks: "Balanced ✓ · Diabetes ✓ (Kinako hat viel Protein/Ballaststoffe) · Schwangerschaft ✓",
    swaps: "Kinako ↔ Erdnussmus (falls Kinako nicht verfügbar)",
    side: "-",
    remind: true,
    riceCooker: { enabled: false },
  },
  {
    id: "do-m",
    title: "Airfryer Ebi Fry エビフライ",
    desc: "Knusprig panierte Garnelen im japanischen Panko-Stil, fettarm gebacken.",
    story: "Normalerweise werden diese Garnelen tief frittiert und sind in jeder Bento-Box zu finden. Wir sprühen die Panko-Panade leicht mit Öl ein und lassen den Airfryer den perfekten Crunch erzeugen.",
    target: "≈80 g KH (2 P.) · Protein ≈26 g p. P.",
    ingredients: [
      "Garnelen (groß, TK aufgetaut) 200 g",
      "Panko (Paniermehl) 40 g",
      "Ei 1 Stück & Mehl (Panierstraße)",
      "Mayonnaise (pasteurisiert) 2 EL",
      "Reis (gekocht) 150 g",
      "Weißkohl (fein gehobelt) 100 g"
    ],
    steps: [
      "Garnelen trocken tupfen. Erst in Mehl, dann Ei, dann in Panko wenden.",
      "In den Airfryer legen und leicht mit Speiseöl besprühen.",
      "Bei 190°C ca. 8-10 Min backen (Garnelen müssen GANZ durch sein, die Panade goldbraun).",
      "Auf dem Kohl mit Reis servieren. Etwas Mayo dazu."
    ],
    checks: "Balanced ✓ · Schwangerschaft ✓ (Garnelen GANZ durchgaren, Mayo pasteurisiert) · Diabetes ✓",
    swaps: "Garnelen ↔ Hähnchen-Innenfilets",
    side: "Ein Spritzer Zitrone.",
    remind: false,
    riceCooker: { enabled: false },
  },
  {
    id: "do-a",
    title: "Okonomiyaki Rice お好み焼きご飯 (Reiskocher)",
    isViral: true,
    desc: "Der Geschmack des japanischen Kohl-Pfannkuchens, transformiert in ein einfaches Reiskocher-Gericht.",
    story: "Ein grandioser Hack! Weißkohl und Schweinefleisch garen im Reis. Am Ende wird alles in der Schüssel mit der typischen Okonomiyaki-Sauce und Mayo garniert. Schmeckt 1:1 wie das Original, ohne Pfannenwenden.",
    target: "≈82 g KH (2 P.) · Protein ≈24 g p. P.",
    ingredients: [
      "Reis (roh) 120 g",
      "Schweinegeschnetzeltes oder Speckwürfel 100 g",
      "Weißkohl (grob gehackt) 150 g",
      "Dashi oder Brühe 240 ml",
      "Okonomiyaki-Sauce & Mayo (pasteurisiert)",
      "Aonori oder Nori-Brösel"
    ],
    steps: [
      "Reis, Brühe, Fleisch und den Kohl in den Reiskocher füllen. Start drücken.",
      "Nach dem Kochen gründlich durchmischen.",
      "In Schüsseln anrichten. Ein Gittermuster aus Okonomiyaki-Sauce und Mayo darüberziehen.",
      "Mit Nori-Bröseln garnieren."
    ],
    checks: "Balanced ✓ · Schwangerschaft ✓ (Fleisch dampft durch, Mayo aus der Tube) · Diabetes ✓",
    swaps: "Schweinefleisch ↔ Räuchertofu",
    side: "-",
    remind: true,
    riceCooker: { enabled: true, program: "Mixed / White Rice", water: "Brühe (Standard)", notes: "Der Kohl gibt etwas Wasser ab, Reis wird schön weich." },
  },

  // FREITAG
  {
    id: "fr-f",
    title: "Tamago Sando たまごサンド (Eiersalat-Sandwich)",
    desc: "Das ikonische japanische Eiersalat-Sandwich, extrem cremig auf weichem Toast.",
    story: "Jeder Japan-Tourist liebt diese Sandwiches aus dem Konbini. Das Geheimnis ist das feine Zerdrücken der Eier und ein Hauch japanischer Mayo. Wir nutzen komplett hartgekochte Eier für maximale Sicherheit.",
    target: "≈65 g KH (2 P.) · Protein ≈20 g p. P.",
    ingredients: [
      "Toastbrot (ohne Rinde) 4 Scheiben",
      "Eier (hartgekocht) 4 Stück",
      "Mayonnaise (pasteurisiert) 2 EL",
      "Salz & Prise weißer Pfeffer"
    ],
    steps: [
      "Hartgekochte Eier pellen und mit einer Gabel in einer Schüssel extrem fein zerdrücken.",
      "Mayonnaise, Salz und Pfeffer unterrühren, bis eine glatte, cremige Paste entsteht.",
      "Die Paste dick auf die Toastscheiben streichen, zuklappen.",
      "In der Mitte durchschneiden."
    ],
    checks: "Balanced ✓ · Schwangerschaft ✓ (Eier 10 Min hartkochen, Mayo aus Tube)",
    swaps: "Toastbrot ↔ Vollkornbrot (weniger authentisch, aber gesünder)",
    side: "Kaffee oder Matcha.",
    remind: true,
    riceCooker: { enabled: false },
  },
  {
    id: "fr-m",
    title: "Wafu Pasta 和風パスタ (Mushroom & Soy)",
    desc: "Spaghetti in einer japanisch inspirierten Butter-Sojasauce mit Pilzen.",
    story: "Wafu Pasta bedeutet 'Pasta im japanischen Stil'. Die Kombination aus Butter und Sojasauce erzeugt ein tiefes Umami, das die Pilze hervorragend aufnehmen. In 15 Minuten fertig.",
    target: "≈85 g KH (2 P.) · Protein ≈15 g p. P.",
    ingredients: [
      "Spaghetti (Vollkorn) 150 g",
      "Champignons oder Shiitake 200 g",
      "Butter 30 g",
      "Sojasauce 2 EL",
      "Knoblauch 1 Zehe",
      "Nori (zerbröselt)"
    ],
    steps: [
      "Spaghetti in Salzwasser kochen. Etwas Nudelwasser aufheben.",
      "Pilze in Scheiben schneiden. In einer Pfanne ohne Fett anbraten, bis sie braun sind.",
      "Butter und Knoblauch dazugeben.",
      "Nudeln, Sojasauce und einen Schuss Nudelwasser in die Pfanne geben, kräftig schwenken.",
      "Mit Nori bestreut servieren."
    ],
    checks: "Balanced ✓ · Schwangerschaft ✓ · Diabetes ✓ (Vollkorn-Pasta)",
    swaps: "Spaghetti ↔ Udon",
    side: "Ein Tomatensalat.",
    remind: false,
    riceCooker: { enabled: false },
  },
  {
    id: "fr-a",
    title: "Sake to Corn Gohan 鮭とコーンご飯 (Reiskocher)",
    desc: "Lachsfilet und süßer Mais dämpfen zusammen im Reis.",
    story: "Eine sehr beliebte Kombination bei japanischen Familien. Der süßliche Mais bricht die Herbe des Lachses, während die Dashi-Brühe alles harmonisch verbindet.",
    target: "≈82 g KH (2 P.) · Protein ≈28 g p. P.",
    ingredients: [
      "Reis (roh) 120 g",
      "Lachsfilet 200 g",
      "Mais (Dose, abgetropft) 100 g",
      "Sojasauce 1 EL",
      "Dashi oder Brühe 240 ml",
      "Butter 10 g"
    ],
    steps: [
      "Reis, Dashi und Sojasauce in den Reiskocher geben.",
      "Den abgetropften Mais einrühren. Lachsfilet oben auflegen.",
      "Start drücken.",
      "Nach dem Kochen die Butter hineingeben, den Lachs zerteilen und alles gut auflockern."
    ],
    checks: "Balanced ✓ · Schwangerschaft ✓ (Lachs gart im Topf auf >80°C durch) · Diabetes ✓",
    swaps: "Lachs ↔ Hähnchenbrust",
    side: "Etwas Frühlingszwiebel.",
    remind: true,
    riceCooker: { enabled: true, program: "Mixed / White Rice", water: "Dashi (Standard)", notes: "Butter am Schluss gibt ein tolles Finish." },
  },

  // SAMSTAG
  {
    id: "sa-f",
    title: "Fluffy Soufflé Pancake (Pfanne)",
    desc: "Die gigantisch hohen, zitternden japanischen Pancakes für das Wochenende.",
    story: "Jeder kennt die Videos dieser dicken Pancakes. Der Trick ist steif geschlagenes Eiweiß und ein Deckel auf der Pfanne, damit sie im Dampf hochziehen und auch in der Mitte GANZ durchgaren.",
    target: "≈75 g KH (2 P.) · Protein ≈18 g p. P.",
    ingredients: [
      "Eier 2 Stück",
      "Mehl 40 g",
      "Zucker 2 TL",
      "Milch 20 ml",
      "Backpulver 1/2 TL",
      "Agavendicksaft oder Ahornsirup"
    ],
    steps: [
      "Eier trennen. Eigelb mit Milch, Mehl und Backpulver glatt rühren.",
      "Eiweiß mit Zucker sehr steif schlagen. In drei Etappen unter die Eigelb-Masse heben.",
      "In eine leicht geölte Pfanne bei SEHR schwacher Hitze hohe Teigtürmchen setzen.",
      "Deckel drauf! 5-6 Min backen. Vorsichtig wenden. Wieder Deckel drauf und 5 Min backen, bis sie KOMPLETT durch sind.",
      "Mit Sirup servieren."
    ],
    checks: "Balanced ✓ · Schwangerschaft ✓ (Deckel ist Pflicht für den Kern!)",
    swaps: "Zucker ↔ Erythrit (wer Zucker sparen möchte)",
    side: "Frisches Obst.",
    remind: true,
    riceCooker: { enabled: false },
  },
  {
    id: "sa-m",
    title: "Airfryer Karaage 唐揚げ (Japanisches Fried Chicken)",
    desc: "Marinierte, mit Kartoffelstärke panierte Hähnchenstücke, kross aus dem Airfryer.",
    story: "Karaage ist meist frittiert. Wir nutzen Kartoffelstärke (Katakuriko) oder Maisstärke und den Airfryer, um eine hauchdünne, extrem knusprige Kruste ohne tiefes Fett zu erzeugen.",
    target: "≈80 g KH (2 P.) · Protein ≈30 g p. P.",
    ingredients: [
      "Hähnchenkeulen-Fleisch (oder Brust, gewürfelt) 250 g",
      "Maisstärke 3 EL",
      "Sojasauce 2 EL",
      "Knoblauch & Ingwer (gepresst/gerieben)",
      "Reis (gekocht) 150 g",
      "Weißkohl (sehr fein gehobelt) 100 g"
    ],
    steps: [
      "Hähnchen in Sojasauce, Knoblauch und Ingwer kurz marinieren.",
      "Stücke großzügig in der Maisstärke wälzen. Überschuss abklopfen.",
      "Im Airfryer (leicht mit Öl besprüht) bei 190°C ca. 12-15 Min backen (komplett durchgaren!).",
      "Auf dem Kohl mit Reis servieren."
    ],
    checks: "Balanced ✓ · Schwangerschaft ✓ (Huhn durchgaren!)",
    swaps: "Hähnchen ↔ Fester Tofu",
    side: "Ein Spritzer Zitrone.",
    remind: false,
    riceCooker: { enabled: false },
  },
  {
    id: "sa-a",
    title: "Oden-Style Daikon & Beef Rice (Reiskocher)",
    desc: "Weißer Rettich und Rindfleisch, gegart in einer intensiven, süßlichen Dashi-Brühe.",
    story: "Oden ist ein japanischer Wintereintopf. Der weiße Rettich (Daikon) saugt die Brühe auf wie ein Schwamm. Im Reiskocher zerfällt er fast, und das Rindfleisch sorgt für Fülle.",
    target: "≈80 g KH (2 P.) · Protein ≈28 g p. P.",
    ingredients: [
      "Reis (roh) 120 g",
      "Daikon (Rettich, gewürfelt) 150 g",
      "Rindfleisch (Gulasch oder Streifen) 150 g",
      "Sojasauce 2 EL & Mirin 1 EL",
      "Dashi-Brühe 240 ml"
    ],
    steps: [
      "Reis, Dashi, Soja und Mirin in den Reiskocher füllen.",
      "Rettichwürfel und das Rindfleisch darauf verteilen.",
      "Start drücken.",
      "Nach dem Kochen alles vorsichtig durchheben. Der Rettich wird extrem heiß und weich, vorsicht beim ersten Bissen!"
    ],
    checks: "Balanced ✓ · Schwangerschaft ✓ (Fleisch wird durchgedämpft)",
    swaps: "Daikon ↔ Kohlrabi",
    side: "Etwas Frühlingszwiebel.",
    remind: true,
    riceCooker: { enabled: true, program: "Mixed / White Rice", water: "Dashi (Standard)", notes: "Daikon gibt den perfekten Oden-Geschmack." },
  },

  // SONNTAG
  {
    id: "so-f",
    title: "Airfryer Yaki-Onigiri 焼きおにぎり",
    isViral: true,
    desc: "Gegrillte japanische Reisbällchen, glasiert mit Sojasauce. Knusprig aus dem Airfryer.",
    story: "Dieser Trend ist genial, um übrig gebliebenen Reis vom Vortag zu verwerten. Die Sojasauce karamellisiert auf der Außenseite, innen bleibt der Reis schön weich.",
    target: "≈70 g KH (2 P.) · Protein ≈15 g p. P. (mit Beilage)",
    ingredients: [
      "Reis (gekocht, klebrig) 200 g",
      "Sojasauce 2 EL",
      "Sesamöl 1 TL",
      "Mirin 1 TL",
      "Spiegelei (durchgebraten) 2 Stück"
    ],
    steps: [
      "Aus dem kalten Reis mit feuchten Händen feste Dreiecke (Onigiri) formen.",
      "Sojasauce, Sesamöl und Mirin mischen. Die Reisbällchen von beiden Seiten damit bepinseln.",
      "Im Airfryer auf etwas Backpapier bei 190°C ca. 10 Min backen. Zwischendurch wenden und nochmals bepinseln, bis sie krustig sind.",
      "Mit durchgebratenen Eiern servieren."
    ],
    checks: "Balanced ✓ · Schwangerschaft ✓ (Ei komplett durch!) · Diabetes ✓",
    swaps: "Reis ↔ Man kann auch Thunfisch in die Mitte füllen",
    side: "Ein Stück Gurke.",
    remind: true,
    riceCooker: { enabled: false },
  },
  {
    id: "so-m",
    title: "Tonjiru 豚汁 (Pork Miso Soup) mit Udon",
    desc: "Eine rustikale, extrem füllende Miso-Suppe mit Schweinefleisch und Wurzelgemüse.",
    story: "Normale Miso-Suppe ist leicht. Tonjiru ist eine Mahlzeit! Durch das Schweinefleisch und das Gemüse wird die Brühe süßlich und herzhaft. Wir essen dicke Udon-Nudeln dazu.",
    target: "≈85 g KH (2 P.) · Protein ≈25 g p. P.",
    ingredients: [
      "Udon-Nudeln 200 g",
      "Schweinefleisch (Bauch oder Schnitzel, in Streifen) 100 g",
      "Karotten & Daikon (oder Rettich) 150 g",
      "Dashi oder Brühe 600 ml",
      "Miso-Paste 2 EL",
      "Frühlingszwiebel 10 g"
    ],
    steps: [
      "Schweinefleisch in einem Topf anbraten (komplett durchgaren!). Karotten und Rettich kurz mitbraten.",
      "Mit Brühe ablöschen, ca. 15 Min köcheln lassen, bis das Gemüse weich ist.",
      "Udon-Nudeln in der Brühe erwärmen.",
      "Topf vom Herd nehmen, Miso-Paste einrühren. Mit Frühlingszwiebeln toppen."
    ],
    checks: "Balanced ✓ · Schwangerschaft ✓ (Fleisch gut durchbraten)",
    swaps: "Schweinefleisch ↔ Shiitake-Pilze (vegane Version)",
    side: "-",
    remind: false,
    riceCooker: { enabled: false },
  },
  {
    id: "so-a",
    title: "Kakuni-Style Pork Belly Rice 豚の角煮風 (Reiskocher)",
    desc: "Der Geschmack des berühmten geschmorten japanischen Schweinebauchs (Kakuni), vereinfacht für den Reiskocher.",
    story: "Kakuni kocht normalerweise stundenlang. Im Reiskocher geben wir den Schweinebauch mit Sojasauce, Zucker und Ingwer direkt auf den Reis. Das Fett schmilzt in die Körner – ein unfassbares Soulfood.",
    target: "≈80 g KH (2 P.) · Protein ≈24 g p. P.",
    ingredients: [
      "Reis (roh) 120 g",
      "Schweinebauch (in mundgerechten Würfeln) 150 g",
      "Sojasauce 3 EL",
      "Mirin 2 EL",
      "Zucker 1 TL",
      "Ingwer 10 g"
    ],
    steps: [
      "Reis mit Wasser in den Topf geben.",
      "Sojasauce, Mirin, Zucker und gehackten Ingwer einrühren.",
      "Die Schweinebauch-Würfel oben auf den Reis legen.",
      "Start drücken. Danach sehr gut durchmischen, damit sich das Aroma verteilt."
    ],
    checks: "Balanced ✓ · Schwangerschaft ✓ (Fleisch wird im Topf stark durcherhitzt)",
    swaps: "Schweinebauch ↔ Rindfleisch (Gulasch)",
    side: "Ein großer Spinatsalat.",
    remind: true,
    riceCooker: { enabled: true, program: "Mixed / White Rice", water: "Standard", notes: "Sojasauce macht den Reis herrlich braun." },
  },
];

export default function Woche23DE() {
  return (
    <PlanTemplate
      meta={meta}
      data={DATA}
      dayNames={DAY_NAME_DE}
      uiTitles={UI_TITLES}
      subtitle="Japan (ausgefallen & leicht) · Reiskocher · Balanced"
      heroChips={["Woche 23", "Japan & Izakaya-Vibes", "Täglich 1× 🍚 Reiskocher"]}
    />
  );
}

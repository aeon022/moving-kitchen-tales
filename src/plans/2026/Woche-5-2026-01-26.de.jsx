/*
  Moving Kitchen Tales – Woche 5 (Start: 2026-01-26)
  Status: FIX (White Screen behoben).
  Inhalt: Balanced (nicht Gastritis-streng), Schwangerschaftssicher.
*/

import React from "react";
import PlanTemplate from "../PlanTemplate";

export const meta = {
  title: "Woche 5",
  startDate: "2026-01-26",
  id: "woche-5-2026-01-26",
  lang: "de",
  sidebar: "Woche 5 (2026-01-26)",
};

const DAY_NAME_DE = {
  mo: "Montag (2026-01-26)",
  di: "Dienstag (2026-01-27)",
  mi: "Mittwoch (2026-01-28)",
  do: "Donnerstag (2026-01-29)",
  fr: "Freitag (2026-01-30)",
  sa: "Samstag (2026-01-31)",
  so: "Sonntag (2026-02-01)",
};

const UI_TITLES = {
  main: "Rezepte Woche 5",
  list: "Einkaufsliste Woche 5",
};

export const DATA = [
  // MONTAG
  {
    id: "mo-f",
    title: "Dan Bing 蛋餅 (Taiwanesischer Eier-Crêpe)",
    desc: "Ein weicher Pfannkuchen, mit Ei und Frühlingszwiebeln aufgerollt. Frühstücksklassiker!",
    story: "In Taiwan an jeder Straßenecke zu finden. Die Legende besagt, wer Dan Bing nicht mag, hat einfach noch keinen guten gegessen. Super einfach und macht glücklich.",
    target: "≈65 g KH (2 P.) · Protein ≈20 g p. P.",
    ingredients: [
      "Mehl 100 g",
      "Maisstärke 20 g",
      "Wasser 200 ml",
      "Eier 4 Stück",
      "Frühlingszwiebel 30 g",
      "Sojasauce 10 ml"
    ],
    steps: [
      "Mehl, Stärke und Wasser zu einem dünnen Teig verrühren.",
      "Kelle Teig in die Pfanne, kurz stocken lassen. Ein verquirltes Ei darüber gießen.",
      "Wenden, aufrollen, mit Sojasauce oder süßer Sojapaste servieren."
    ],
    checks: "Balanced ✓ · Diabetes ✓ (Proteinreich durch Eier) · Schwangerschaft ✓ Ei komplett durchbraten!",
    swaps: "Weizenmehl ↔ Dinkelmehl; Füllung ↔ +Käse (pasteurisiert)",
    side: "Sojamilch (warm/kalt).",
    remind: true,
    riceCooker: { enabled: false },
  },
  {
    id: "mo-m",
    title: "Kitsune Udon きつねうどん (Der Fuchs liebt Tofu)",
    desc: "Dicke Udon-Nudeln in klarer Brühe mit süßlich geschmortem Tofu (Inari-Age).",
    story: "Japanische Folklore sagt, Füchse (Kitsune) lieben frittierten Tofu. Wir nehmen fertige Inari-Taschen oder braten Tofu selbst an. Seelenwärmer pur.",
    target: "≈88 g KH (2 P.) · Protein ≈22 g p. P.",
    ingredients: [
      "Udon (vorgegart) 400 g",
      "Inari-Age (gewürzte Tofutaschen) 6 Stk",
      "Spinat 100 g",
      "Dashi 700 ml",
      "Sojasauce 15 ml",
      "Frühlingszwiebel 10 g"
    ],
    steps: [
      "Dashi mit Soja erhitzen. Udon darin erwärmen.",
      "Inari-Taschen (oder gebratenen Tofu mit etwas Zucker/Soja glasiert) drauflegen.",
      "Spinat kurz mitgaren. Heiß schlürfen."
    ],
    checks: "Balanced ✓ · Diabetes ✓ (Ballaststoffe aus Spinat) · Schwangerschaft ✓",
    swaps: "Inari ↔ Gebratener Räuchertofu; Udon ↔ Soba",
    side: "-",
    remind: false,
    riceCooker: { enabled: false },
  },
  {
    id: "mo-a",
    title: "Kinoko Gohan 茸ご飯 (Pilz-Reis)",
    desc: "Aromatischer Reis, der mit verschiedenen Pilzen und Soja gedämpft wird.",
    story: "Der Wald ruft! 'Kinoko' heißt Pilz. Wenn der Reiskocherdeckel aufgeht, riecht die ganze Küche nach Herbstspaziergang und Umami.",
    target: "≈82 g KH (2 P.) · Protein ≈18 g p. P. (mit Beilage)",
    ingredients: [
      "Reis (roh) 120 g",
      "Shiitake & Champignons 150 g",
      "Karotte 50 g",
      "Aburaage (Frittierter Tofu) 1 Stk",
      "Dashi 240 ml",
      "Sojasauce 15 ml"
    ],
    steps: [
      "Reis waschen. Pilze und Tofu in Streifen schneiden.",
      "Alles mit Dashi und Soja in den Topf. Nicht umrühren, einfach oben drauflegen!",
      "Starten. Nach dem Kochen sanft unterheben."
    ],
    checks: "Balanced ✓ · Diabetes ✓ (Viel Pilz-Volumen) · Schwangerschaft ✓",
    swaps: "Aburaage ↔ Hühnchenschenkel-Würfel",
    side: "Edamame oder Miso-Suppe.",
    remind: true,
    riceCooker: { enabled: true, program: "Mixed / White Rice", water: "Dashi bis Markierung", notes: "Pilze geben Wasser ab, nicht zu viel Dashi nehmen." },
  },

  // DIENSTAG
  {
    id: "di-f",
    title: "Tamago Kake Gohan 卵かけご飯 (Safe Edition)",
    desc: "Der japanische Klassiker 'Ei auf Reis', aber mit Rührei statt rohem Ei.",
    story: "Normalerweise wird ein rohes Ei über heißen Reis geschlagen. Wir machen ein cremiges, aber durchgegartes Rührei daraus. Fast genauso gut und sicher!",
    target: "≈70 g KH (2 P.) · Protein ≈20 g p. P.",
    ingredients: [
      "Reis (roh) 100 g",
      "Eier 4 Stück",
      "Sojasauce 10 ml",
      "Furikake (Reisgewürz) 5 g",
      "Sesamöl 5 ml"
    ],
    steps: [
      "Reis kochen. Eier mit Soja verquirlen.",
      "In der Pfanne zu sehr weichem (aber durchgegartem!) Rührei stocken.",
      "Über den Reis geben, Furikake drüber."
    ],
    checks: "Balanced ✓ · Schwangerschaft ✓ Ei muss fest sein (kein flüssiges Eigelb)",
    swaps: "Furikake ↔ Nori-Schnipsel",
    side: "Miso-Suppe.",
    remind: true,
    riceCooker: { enabled: false },
  },
  {
    id: "di-m",
    title: "Chow Mein 炒面 (mit Hühnchen)",
    desc: "Knusprig gebratene Nudeln mit viel Gemüse und Hühnchenstreifen.",
    story: "Der Lieferdienst-Klassiker, aber gesund. 'Chow' heißt gebraten, 'Mein' heißt Nudel. Das Geheimnis ist, die Nudeln erst kurz knusprig zu braten.",
    target: "≈86 g KH (2 P.) · Protein ≈30 g p. P.",
    ingredients: [
      "Chow Mein Nudeln (oder Mie) 150 g",
      "Hähnchenbrust 200 g",
      "Kohl (Weißkohl/Chinakohl) 150 g",
      "Karotte 80 g",
      "Austernsauce 15 ml",
      "Sojasauce 10 ml"
    ],
    steps: [
      "Nudeln kochen, abschrecken. In Pfanne mit Öl kurz knusprig braten, rausnehmen.",
      "Huhn und Gemüse braten. Sauce dazu.",
      "Nudeln zurück, alles schwenken."
    ],
    checks: "Balanced ✓ · Schwangerschaft ✓ Huhn durchbraten",
    swaps: "Huhn ↔ Tofu; Austernsauce ↔ Pilzsauce (vegan)",
    side: "-",
    remind: false,
    riceCooker: { enabled: false },
  },
  {
    id: "di-a",
    title: "Miso-Butter Lachs 味噌バター鮭 (Reiskocher)",
    desc: "Lachsfilet dämpft auf dem Reis, gewürzt mit Miso und einem Stück Butter.",
    story: "Hokkaido-Style! Im Norden Japans liebt man die Kombi Miso & Butter (wie bei Ramen). Der Reis saugt die Butter auf... ein Traum.",
    target: "≈80 g KH (2 P.) · Protein ≈28 g p. P.",
    ingredients: [
      "Reis (roh) 120 g",
      "Lachsfilet 220 g",
      "Miso-Paste 15 g",
      "Butter 15 g",
      "Mais (TK) 50 g",
      "Frühlingszwiebel 10 g"
    ],
    steps: [
      "Reis und Wasser in den Topf. Miso im Wasser auflösen.",
      "Lachs und Mais oben drauf.",
      "Kochen. Am Ende Butter auf den heißen Lachs geben und schmelzen lassen.",
      "Lachs zerteilen und mischen."
    ],
    checks: "Balanced ✓ · Schwangerschaft ✓ Lachs wird im Dampf gar",
    swaps: "Lachs ↔ Kabeljau",
    side: "Gurkensalat.",
    remind: true,
    riceCooker: { enabled: true, program: "White Rice", water: "Standard", notes: "Butter erst ganz am Ende dazu!" },
  },

  // MITTWOCH
  {
    id: "mi-f",
    title: "Hotteok 호떡 (Herzhafte Pfannkuchen)",
    desc: "Koreanische gefüllte Pfannkuchen, hier mal herzhaft mit Käse & Gemüse statt süß.",
    story: "Eigentlich ein süßer Streetfood-Snack mit Zimt. Aber mit Käse und Gemüse gefüllt ist es ein geniales Frühstück.",
    target: "≈75 g KH (2 P.) · Protein ≈18 g p. P.",
    ingredients: [
      "Mehl 150 g",
      "Hefe 3 g",
      "Wasser (lauwarm) 100 ml",
      "Mozzarella (gerieben) 50 g",
      "Karotte & Lauch (fein) 50 g",
      "Salz"
    ],
    steps: [
      "Teig kneten, 30 Min gehen lassen.",
      "Kugeln formen, Käse/Gemüse reindrücken, verschließen.",
      "In der Pfanne flachdrücken und goldbraun braten."
    ],
    checks: "Balanced ✓ · Schwangerschaft ✓ Käse erhitzt/pasteurisiert",
    swaps: "Mozzarella ↔ Tofu-Crumble",
    side: "Milch oder Tee.",
    remind: true,
    riceCooker: { enabled: false },
  },
  {
    id: "mi-m",
    title: "Tenshindon 天津丼 (Omelett auf Reis)",
    desc: "Chinesisch-Japanisches Krabbenomelett auf Reis mit einer süß-sauren Sauce.",
    story: "Benannt nach der Stadt Tianjin, aber eigentlich in Japan erfunden. Fluffiges Ei trifft auf dicke, glänzende Sauce. Comfort Food pur.",
    target: "≈85 g KH (2 P.) · Protein ≈24 g p. P.",
    ingredients: [
      "Reis (roh) 120 g",
      "Eier 4 Stück",
      "Surimi oder Flusskrebse (gegart) 80 g",
      "Erbsen 30 g",
      "Essig, Zucker, Soja, Stärke (für Sauce)"
    ],
    steps: [
      "Reis kochen. Sauce aus Essig, Soja, Zucker, Brühe aufkochen und andicken.",
      "Eier mit Krebsfleisch/Erbsen braten (Omelett).",
      "Auf Reis legen, Sauce drüber."
    ],
    checks: "Balanced ✓ · Schwangerschaft ✓ Ei durch, Surimi gegart",
    swaps: "Surimi ↔ Garnelen; Erbsen ↔ Lauch",
    side: "-",
    remind: false,
    riceCooker: { enabled: false },
  },
  {
    id: "mi-a",
    title: "Hainan Chicken Rice 海南鸡饭 (Easy Mode)",
    desc: "Das berühmte Hühnchen-Gericht, komplett im Reiskocher zubereitet.",
    story: "Singapurs Nationalgericht. Das Fett des Huhns macht den Reis unglaublich aromatisch. Dazu Ingwer-Dip.",
    target: "≈82 g KH (2 P.) · Protein ≈30 g p. P.",
    ingredients: [
      "Reis (roh) 120 g",
      "Hähnchenkeulen (o. Knochen) 250 g",
      "Ingwer (Scheiben & gerieben) 15 g",
      "Knoblauch 2 Zehen",
      "Hühnerbrühe 200 ml",
      "Gurke 100 g"
    ],
    steps: [
      "Reis, Brühe, Ingwerscheiben, Knoblauch in den Topf.",
      "Huhn (hautseitig) drauflegen.",
      "Kochen. Huhn rausnehmen, schneiden. Reis umrühren.",
      "Dazu Gurkenscheiben."
    ],
    checks: "Balanced ✓ · Schwangerschaft ✓ Huhn muss >75°C haben",
    swaps: "Keule ↔ Brust (wird aber trockener)",
    side: "Chilisauce (optional)",
    remind: true,
    riceCooker: { enabled: true, program: "White Rice", water: "Brühe statt Wasser", notes: "Das Huhn dämpft perfekt im Dampf des Reis." },
  },

  // DONNERSTAG
  {
    id: "do-f",
    title: "Dou Jiang & Youtiao 豆浆油条 (mit Toast)",
    desc: "Herzhafte warme Sojamilch-Suppe mit Toast-Streifen (statt Fettgebäck).",
    story: "Das klassische chinesische Frühstück: Sojamilch, die durch Essig leicht ausflockt (wie feiner Quark), dazu Brot. Wir nehmen Toast statt frittiertem Youtiao.",
    target: "≈65 g KH (2 P.) · Protein ≈18 g p. P.",
    ingredients: [
      "Sojamilch (ungezuckert!) 500 ml",
      "Reisessig 10 ml",
      "Sojasauce 10 ml",
      "Sesamöl, Chiliöl (opt)",
      "Getrocknete Mini-Garnelen (opt) oder Nori",
      "Toastbrot 2 Scheiben"
    ],
    steps: [
      "Sojamilch aufkochen.",
      "In Schale Essig/Soja geben. Heiße Milch drüber gießen (es flockt, das soll so!).",
      "Toast toasten, in Streifen schneiden und dazu dippen."
    ],
    checks: "Balanced ✓ · Schwangerschaft ✓ (Garnelen wenn, dann gegart)",
    swaps: "Toast ↔ Brötchen",
    side: "-",
    remind: true,
    riceCooker: { enabled: false },
  },
  {
    id: "do-m",
    title: "Curry Udon カレーうどん (Mild & Cremig)",
    desc: "Dicke Udon-Nudeln in einer milden Curry-Brühe. Kleckergefahr, aber es lohnt sich!",
    story: "Japanisches Soulfood. Wenn vom Curry-Reis was übrig bleibt, macht man am nächsten Tag Udon draus. Hier machen wir es frisch.",
    target: "≈88 g KH (2 P.) · Protein ≈20 g p. P.",
    ingredients: [
      "Udon (vorgegart) 400 g",
      "Curry-Roux (Würfel, mild) 2 Stk",
      "Zwiebel 80 g",
      "Dünnes Schweinefleisch oder Tofu 150 g",
      "Dashi 600 ml",
      "Frühlingszwiebel"
    ],
    steps: [
      "Zwiebel und Fleisch anbraten.",
      "Dashi dazu, aufkochen. Curry-Würfel darin auflösen.",
      "Udon rein, 3 Min köcheln bis die Sauce andickt."
    ],
    checks: "Balanced ✓ · Schwangerschaft ✓ Fleisch durch",
    swaps: "Schwein ↔ Rind oder Tofu",
    side: "-",
    remind: false,
    riceCooker: { enabled: false },
  },
  {
    id: "do-a",
    title: "Char Siu Chicken Rice 叉烧鸡饭 (Reiskocher)",
    desc: "Hähnchen in süß-herzhafter BBQ-Marinade, geschmort im Reiskocher.",
    story: "Char Siu ist eigentlich rotes Schweinefleisch vom Grill. Wir machen die Hühnchen-Version im Reiskocher – klebrig, süß, genial.",
    target: "≈84 g KH (2 P.) · Protein ≈28 g p. P.",
    ingredients: [
      "Reis (roh) 120 g",
      "Hähnchenkeule (o. Knochen) 250 g",
      "Char Siu Sauce (oder: Hoisin + Honig + Soja) 3 EL",
      "Pak Choi 100 g",
      "Wasser"
    ],
    steps: [
      "Huhn marinieren (min. 15 Min).",
      "Reis und Wasser in den Topf.",
      "Huhn inkl. Marinade oben drauf.",
      "Kochen. Pak Choi die letzten 5 Min dämpfen.",
      "Huhn schneiden, Saft über Reis."
    ],
    checks: "Balanced ✓ · Schwangerschaft ✓ Huhn durch",
    swaps: "Char Siu Sauce ↔ Teriyaki Sauce",
    side: "Klare Brühe.",
    remind: true,
    riceCooker: { enabled: true, program: "White Rice", water: "Standard", notes: "Zucker in Marinade kann Boden leicht dunkel machen (karamellisieren)." },
  },

  // FREITAG
  {
    id: "fr-f",
    title: "Tarako Ochazuke たらこ茶漬け (mit Rogen)",
    desc: "Reis mit grünem Tee übergossen, dazu salziger, durchgebratener Rogen.",
    story: "Ochazuke ist der 'Notfall-Snack' Japans oder Katerfrühstück. Tee über Reis. Klingt komisch, schmeckt himmlisch.",
    target: "≈70 g KH (2 P.) · Protein ≈22 g p. P.",
    ingredients: [
      "Reis (gekocht oder Reste) 200 g",
      "Tarako (Kabeljaurogen) oder Lachs 80 g",
      "Grüner Tee (heiß) 400 ml",
      "Nori/Sesam (wenig)"
    ],
    steps: [
      "Tarako/Fisch in der Pfanne gut durchbraten.",
      "Reis in Schale, Fisch drauf.",
      "Heißen Tee drüber gießen. Toppings dazu."
    ],
    checks: "Balanced ✓ · Schwangerschaft ✓ Rogen/Fisch MUSS durchgebraten sein (kein roher Rogen!)",
    swaps: "Rogen ↔ Lachsflocken",
    side: "Pickles.",
    remind: true,
    riceCooker: { enabled: false },
  },
  {
    id: "fr-m",
    title: "Bibimbap 비빔밥 (Reiskocher)",
    desc: "Alle Bibimbap-Zutaten garen gleichzeitig mit dem Reis. Easy Cheating.",
    story: "Echtes Bibimbap ist viel Schnippel- und Bratarbeit. Hier werfen wir (fast) alles in den Topf. Nicht authentisch, aber lecker.",
    target: "≈86 g KH (2 P.) · Protein ≈24 g p. P.",
    ingredients: [
      "Reis (roh) 120 g",
      "Rinderhack 150 g",
      "Karottenstifte 80 g",
      "Sojasprossen 100 g",
      "Spinat 100 g",
      "Gochujang (als Sauce danach)"
    ],
    steps: [
      "Reis, Hack (roh, zerzupft), Karotten, Sprossen in den Topf. Wasser dazu.",
      "Kochen.",
      "Sofort Spinat unterrühren (gart in Restwärme).",
      "Mit Sesamöl und Paste mischen."
    ],
    checks: "Balanced ✓ · Schwangerschaft ✓ Hack durchgegart",
    swaps: "Rind ↔ Tofu",
    side: "Spiegelei (gebraten) on top.",
    remind: false,
    riceCooker: { enabled: true, program: "Mixed Rice", water: "Standard", notes: "Hackfleisch gut verteilen." },
  },
  {
    id: "fr-a",
    title: "Sukiyaki すき焼き (Mild Style)",
    desc: "Rindfleisch, Tofu und Gemüse in einer süß-salzigen Soja-Brühe geschmort.",
    story: "Das Festmahl für den Freitagabend. Normalerweise taucht man das Fleisch in rohes Ei – das lassen wir wegen der Schwangerschaft weg!",
    target: "≈65 g KH (2 P.) · Protein ≈30 g p. P.",
    ingredients: [
      "Rinderhüfte (hauchdünn) 250 g",
      "Tofu (geflammt oder fest) 200 g",
      "Chinakohl 200 g",
      "Shirataki-Nudeln oder Glasnudeln 100 g",
      "Warishita (Sauce: Soja, Zucker, Mirin)",
      "Reis (Beilage)"
    ],
    steps: [
      "Sauce in Pfanne erhitzen.",
      "Fleisch kurz garen, Gemüse und Tofu dazu.",
      "Köcheln lassen bis alles weich ist."
    ],
    checks: "Balanced ✓ · Schwangerschaft ✓ Fleisch durch, KEIN rohes Ei als Dip",
    swaps: "Rind ↔ Schwein",
    side: "Reis.",
    remind: true,
    riceCooker: { enabled: false },
  },

  // SAMSTAG
  {
    id: "sa-f",
    title: "Gilgeori Toast 길거리 토스트 (Korean Street Toast)",
    desc: "Sandwich mit Omelett, Kohl und Karotten, leicht gezuckert.",
    story: "Der Duft koreanischer U-Bahn-Stationen. Ein deftiges Omelett zwischen zwei Toastscheiben, oft mit Ketchup und einer Prise Zucker.",
    target: "≈75 g KH (2 P.) · Protein ≈18 g p. P.",
    ingredients: [
      "Toastbrot 4 Scheiben",
      "Eier 3 Stück",
      "Weißkohl (fein gehobelt) 100 g",
      "Karotte (geraspelt) 30 g",
      "Butter, Ketchup, Prise Zucker"
    ],
    steps: [
      "Ei mit Gemüse verquirlen, als eckiges Omelett braten (durch!).",
      "Brot in Butter toasten.",
      "Omelett aufs Brot, Ketchup & Zucker drauf, zuklappen."
    ],
    checks: "Balanced ✓ · Schwangerschaft ✓ Ei durch",
    swaps: "Kohl ↔ Zwiebeln",
    side: "Kaffee oder Milch.",
    remind: true,
    riceCooker: { enabled: false },
  },
  {
    id: "sa-m",
    title: "Ebi Chili エビチリ (Garnelen)",
    desc: "Japanisch-Chinesische Fusion: Garnelen in einer milden, süßlichen Tomatensauce.",
    story: "Ein Gericht, das Chen Kenmin (Iron Chef Vater) in Japan populär machte. Weniger scharf als das Original, sehr fruchtig.",
    target: "≈84 g KH (2 P.) · Protein ≈26 g p. P.",
    ingredients: [
      "Garnelen (geschält) 250 g",
      "Ketchup 3 EL",
      "Hühnerbrühe 100 ml",
      "Zwiebel 50 g",
      "Ingwer/Knoblauch",
      "Stärke, Reis 120 g"
    ],
    steps: [
      "Garnelen in Stärke wenden, anbraten.",
      "Zwiebel/Ingwer braten, Ketchup & Brühe dazu.",
      "Einköcheln, Garnelen zurück in die Sauce."
    ],
    checks: "Balanced ✓ · Schwangerschaft ✓ Garnelen durch",
    swaps: "Garnelen ↔ Tofu frittiert",
    side: "Reis.",
    remind: false,
    riceCooker: { enabled: false },
  },
  {
    id: "sa-a",
    title: "Seafood Pilaf シーフードピラフ (Reiskocher)",
    desc: "Bunter Reis mit Meeresfrüchtemix und Erbsen, butterweich.",
    story: "Eher westlich angehaucht ('Yoshoku'), aber in Japan sehr beliebt aus dem Reiskocher. Schmeckt wie Paella ohne Aufwand.",
    target: "≈82 g KH (2 P.) · Protein ≈24 g p. P.",
    ingredients: [
      "Reis (roh) 120 g",
      "Meeresfrüchte-Mix (TK, Garnelen/Muscheln/Tintenfisch) 200 g",
      "Zwiebel 50 g",
      "Paprika 50 g",
      "Gemüsebrühe 240 ml",
      "Butter 10 g"
    ],
    steps: [
      "Reis und Brühe in den Topf.",
      "Aufgetauten Mix und Gemüsewürfel dazu.",
      "Kochen. Am Ende Butter unterrühren."
    ],
    checks: "Balanced ✓ · Schwangerschaft ✓ Mix muss >75°C erhitzt werden (im Reiskocher kein Problem)",
    swaps: "Mix ↔ Nur Garnelen oder Hühnchen",
    side: "Kleiner Salat.",
    remind: true,
    riceCooker: { enabled: true, program: "Mixed / White Rice", water: "Brühe Standard", notes: "TK-Mix vorher auftauen lassen." },
  },

  // SONNTAG
  {
    id: "so-f",
    title: "HK French Toast 西多士 (Light)",
    desc: "French Toast gefüllt mit Erdnussbutter, in Ei gewendet. Wir braten statt frittieren.",
    story: "In HK-Cafés ('Cha Chaan Teng') wird das frittiert. Wir machen die Pfannen-Version. Dekadent, aber Sonntag darf das sein.",
    target: "≈78 g KH (2 P.) · Protein ≈16 g p. P.",
    ingredients: [
      "Toastbrot 4 Scheiben",
      "Erdnussbutter 2 EL",
      "Eier 2 Stück",
      "Milch 20 ml",
      "Ahornsirup oder Kondensmilch"
    ],
    steps: [
      "Sandwich mit Erdnussbutter machen.",
      "In Ei-Milch-Mix tunken.",
      "In der Pfanne goldbraun braten (Ei muss stocken!)."
    ],
    checks: "Balanced ✓ · Schwangerschaft ✓ Ei durch",
    swaps: "Erdnussbutter ↔ Marmelade (weniger Protein)",
    side: "Milchtee.",
    remind: true,
    riceCooker: { enabled: false },
  },
  {
    id: "so-m",
    title: "Tonkatsu 豚カツ (Ofen)",
    desc: "Paniertes Schweineschnitzel, aber im Ofen gebacken statt frittiert.",
    story: "Jeder liebt Tonkatsu! Um das Fett zu sparen, rösten wir das Panko vorher in der Pfanne an und backen das Fleisch dann im Ofen. Super knusprig!",
    target: "≈80 g KH (2 P.) · Protein ≈30 g p. P.",
    ingredients: [
      "Schweineschnitzel 2 Stk",
      "Panko (Paniermehl) 50 g",
      "Mehl, Ei (Panierstraße)",
      "Kohl (fein gehobelt) 200 g",
      "Reis 120 g",
      "Tonkatsu-Sauce"
    ],
    steps: [
      "Panko in Pfanne ohne Öl goldbraun rösten.",
      "Fleisch mehlieren, durchs Ei ziehen, in geröstetes Panko drücken.",
      "Im Ofen bei 200°C ca 15-20 Min backen.",
      "Mit Kohlberg und Reis servieren."
    ],
    checks: "Balanced ✓ · Schwangerschaft ✓ Fleisch durch",
    swaps: "Schwein ↔ Hähnchenbrust",
    side: "Reis & Kohl.",
    remind: false,
    riceCooker: { enabled: false },
  },
  {
    id: "so-a",
    title: "Steamed Egg with Shrimp 虾仁蒸蛋",
    desc: "Seidenweicher Eierstich (Chawanmushi Art) mit Garnelen, im Reiskocher gedämpft.",
    story: "Kann man super über dem reisenden Reis im Dämpfeinsatz machen! 'Tiered Cooking' spart Energie und Zeit.",
    target: "≈82 g KH (2 P.) · Protein ≈24 g p. P.",
    ingredients: [
      "Reis (roh) 120 g",
      "Eier 3 Stück",
      "Wasser/Dashi 250 ml",
      "Garnelen 6 Stück",
      "Sojasauce",
      "Frühlingszwiebel"
    ],
    steps: [
      "Reis unten kochen.",
      "Eier mit Dashi verquirlen, in hitzefeste Schale sieben. Garnelen rein.",
      "Schale in den Dämpfeinsatz stellen. Wenn Reis kocht, Einsatz rein (ca. 15-20 Min dämpfen).",
      "Ei muss fest sein."
    ],
    checks: "Balanced ✓ · Schwangerschaft ✓ Ei stocken lassen",
    swaps: "Garnelen ↔ Surimi oder Pilze",
    side: "Reis (von unten).",
    remind: true,
    riceCooker: { enabled: true, program: "White Rice + Steam", water: "Standard", notes: "Dämpfeinsatz nutzen!" },
  },
];

export default function Woche5DE() {
  return (
    <PlanTemplate
      meta={meta}
      data={DATA}
      dayNames={DAY_NAME_DE}
      uiTitles={UI_TITLES}
      subtitle="JP/CN/KR · Balanced · Schwangerschaftssicher · 1× Reiskocher/Tag"
      heroChips={["Woche 5", "CN/JP/KR · Balanced · Schwangerschaft", "Täglich 1× 🍚 Reiskocher"]}
    />
  );
}

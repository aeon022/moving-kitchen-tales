/*
  Moving Kitchen Tales – Woche 6 (Start: 2026-02-02)
  Status: VOLLSTÄNDIG (1:1 Template-Kopie von Woche 5).
  Fokus: Virale Trends (CN/JP/KR) + SWE/IT, Balanced, Schwangerschaftssicher.
*/

import React from "react";
import PlanTemplate from "../PlanTemplate";

export const meta = {
  title: "Woche 6",
  startDate: "2026-02-02",
  id: "woche-6-2026-02-02",
  lang: "de",
  sidebar: "Woche 6 (2026-02-02)",
};

const DAY_NAME_DE = {
  mo: "Montag (2026-02-02)",
  di: "Dienstag (2026-02-03)",
  mi: "Mittwoch (2026-02-04)",
  do: "Donnerstag (2026-02-05)",
  fr: "Freitag (2026-02-06)",
  sa: "Samstag (2026-02-07)",
  so: "Sonntag (2026-02-08)",
};

const UI_TITLES = {
  main: "Rezepte Woche 6",
  list: "Einkaufsliste Woche 6",
};

export const DATA = [
  // MONTAG
  {
    id: "mo-f",
    title: "Havregrynsgröt (Schwedischer Apfel-Zimt-Haferbrei)",
    desc: "Wärmender Haferbrei mit geriebenem Apfel und Zimt. Wie eine Umarmung am Morgen.",
    story: "In Schweden ist dieser Brei ein nationales Heiligtum. Er wärmt von innen, hält lange satt und der Duft von Zimt am Morgen weckt selbst die müdesten Geister.",
    target: "≈65 g KH (2 P.) · Protein ≈18 g p. P.",
    ingredients: [
      "Haferflocken 100 g",
      "Milch (oder Sojamilch) 400 ml",
      "Apfel 1 Stück",
      "Zimt 1 TL",
      "Walnüsse (gehackt) 30 g",
      "Quark oder Joghurt (pasteurisiert) 100 g"
    ],
    steps: [
      "Haferflocken mit Milch und Zimt in einem Topf unter Rühren aufkochen, bis es andickt (ca. 5 Min).",
      "Apfel grob reiben und die Hälfte unter den Brei heben.",
      "Brei aufteilen, mit restlichem Apfel, Walnüssen und einem Klecks Joghurt/Quark toppen."
    ],
    checks: "Balanced ✓ · Diabetes ✓ (Komplexe KH & Nüsse) · Schwangerschaft ✓",
    swaps: "Walnüsse ↔ Mandeln; Apfel ↔ Birne",
    side: "Eine Tasse warmer Tee.",
    remind: true,
    riceCooker: { enabled: false },
  },
  {
    id: "mo-m",
    title: "Viral Baked Feta Pasta (Mild)",
    desc: "Der TikTok-Klassiker! Ein Block Feta schmilzt im Ofen mit Tomaten zu einer cremigen Sauce.",
    story: "Dieses Rezept hat in Finnland mal für einen Feta-Mangel im Supermarkt gesorgt! Wir machen es mild, mit wenig Knoblauch und viel Liebe. Simpel, genial, viral.",
    target: "≈85 g KH (2 P.) · Protein ≈25 g p. P.",
    ingredients: [
      "Vollkorn-Nudeln (trocken) 130 g",
      "Feta-Käse (pasteurisiert!) 150 g",
      "Kirschtomaten 250 g",
      "Olivenöl 1 EL",
      "Knoblauch 1 Zehe",
      "Basilikum (frisch oder getrocknet) 1 TL"
    ],
    steps: [
      "Tomaten, etwas Öl, Knoblauch in eine Auflaufform geben. Feta-Block in die Mitte setzen. Bei 200°C ca. 20-25 Min backen.",
      "Nudeln kochen.",
      "Form aus dem Ofen holen, Feta mit den Tomaten zu einer Sauce zerdrücken.",
      "Nudeln unterheben, mit Basilikum garnieren."
    ],
    checks: "Balanced ✓ · Schwangerschaft ✓ (Feta erhitzt & aus pasteurisierter Milch) · Diabetes ✓",
    swaps: "Feta ↔ Frischkäse; Vollkorn-Nudeln ↔ Zucchini-Nudeln",
    side: "Ein kleiner grüner Salat.",
    remind: false,
    riceCooker: { enabled: false },
  },
  {
    id: "mo-a",
    title: "KFC-Style Chicken Rice ケンタッキー炊き込みご飯",
    desc: "Saftiges Hähnchen, geschmort im Reiskocher. Inspiriert vom japanischen Weihnachts-Hype.",
    story: "In Japan geht man Weihnachten zu KFC. Daraus entstand der Trend, frittiertes Huhn mit Reis im Reiskocher zu kochen. Wir machen die gesündere Variante mit mariniertem Hühnchen, das im Dampf unglaublich zart wird.",
    target: "≈80 g KH (2 P.) · Protein ≈35 g p. P.",
    ingredients: [
      "Reis (roh) 120 g",
      "Hähnchenkeule (ohne Knochen) 250 g",
      "Hühnerbrühe 240 ml",
      "Sojasauce 2 EL",
      "Knoblauch (gerieben) 1 Zehe",
      "Karotte (gewürfelt) 50 g"
    ],
    steps: [
      "Hähnchen in etwas Sojasauce und Knoblauch wenden.",
      "Reis, Brühe, restliche Sojasauce und Karotten in den Reiskocher geben.",
      "Das Hähnchen oben auf den Reis legen.",
      "Programm starten. Danach Hähnchen zerkleinern und alles durchmischen."
    ],
    checks: "Balanced ✓ · Schwangerschaft ✓ (Huhn gart im Dampf >75°C) · Diabetes ✓",
    swaps: "Hähnchenkeule ↔ Hähnchenbrust (wird aber etwas trockener)",
    side: "Gedämpfter Brokkoli.",
    remind: true,
    riceCooker: { enabled: true, program: "Mixed / White Rice", water: "Brühe statt Wasser", notes: "Das Fett des Huhns aromatisiert den gesamten Reis." },
  },

  // DIENSTAG
  {
    id: "di-f",
    title: "Tomaten-Eier-Nudelsuppe 番茄鸡蛋面",
    desc: "Warme Nudelsuppe in einer samtigen Tomaten-Brühe. Ein chinesischer Trostspender.",
    story: "Diese Suppe ist die chinesische Antwort auf Hühnersuppe. Jeder hat seine eigene Version. Die Säure der Tomate macht wach, das Ei liefert weiche Proteine.",
    target: "≈75 g KH (2 P.) · Protein ≈20 g p. P.",
    ingredients: [
      "Weizennudeln 120 g",
      "Tomaten (groß, weich) 2 Stück",
      "Eier 3 Stück",
      "Gemüsebrühe 600 ml",
      "Frühlingszwiebel 10 g",
      "Sojasauce 1 EL"
    ],
    steps: [
      "Tomaten würfeln und in einem Topf mit wenig Öl anbraten, bis sie musig werden.",
      "Brühe und Sojasauce angießen, aufkochen.",
      "Nudeln direkt in der Suppe garen. Wenn sie weich sind, die verquirlten Eier langsam einrühren (vollständig stocken lassen!).",
      "Mit Frühlingszwiebeln toppen."
    ],
    checks: "Balanced ✓ · Schwangerschaft ✓ (Ei komplett gestockt) · Diabetes ✓",
    swaps: "Weizennudeln ↔ Reisnudeln",
    side: "Keine Beilage nötig, alles in einer Schüssel.",
    remind: true,
    riceCooker: { enabled: false },
  },
  {
    id: "di-m",
    title: "Wafu Pilz-Spaghetti 和風スパゲッティ",
    desc: "Spaghetti auf japanische Art: mit Pilzen, Sojasauce und einem Hauch Butter.",
    story: "'Wafu' bedeutet 'japanischer Stil'. Die Kombination aus Butter, Sojasauce und Pilzen erzeugt ein Umami-Feuerwerk, das besser ist als jede Sahnesauce!",
    target: "≈85 g KH (2 P.) · Protein ≈18 g p. P.",
    ingredients: [
      "Spaghetti (Vollkorn) 130 g",
      "Shiitake oder Champignons 200 g",
      "Knoblauch 1 Zehe",
      "Sojasauce 2 EL",
      "Butter 15 g",
      "Nori (zerbröselt, sparsam)"
    ],
    steps: [
      "Spaghetti al dente kochen. Etwas Nudelwasser aufheben.",
      "Pilze und Knoblauch in einer Pfanne anbraten.",
      "Nudeln dazugeben, mit Sojasauce, Butter und Nudelwasser schwenken, bis es cremig wird.",
      "Mit wenig Nori garnieren."
    ],
    checks: "Balanced ✓ · Schwangerschaft ✓ (Jod/Nori sparsam)",
    swaps: "Pilze ↔ Zucchini & Paprika",
    side: "Kleiner Tomatensalat.",
    remind: false,
    riceCooker: { enabled: false },
  },
  {
    id: "di-a",
    title: "Kongnamul Bap 콩나물밥 (Sprossen-Reis)",
    desc: "Koreanischer Reiskocher-Klassiker mit Sojasprossen und Rinderhack.",
    story: "Ein nostalgisches Gericht aus Korea. Die Sprossen geben beim Kochen ihr nussiges Aroma an den Reis ab. Super gesund und komplett im Reiskocher gemacht.",
    target: "≈80 g KH (2 P.) · Protein ≈26 g p. P.",
    ingredients: [
      "Reis (roh) 120 g",
      "Sojasprossen (frisch) 150 g",
      "Rinderhack (mager) 150 g",
      "Sojasauce 2 EL",
      "Sesamöl 1 EL",
      "Karotte (fein geraspelt) 50 g"
    ],
    steps: [
      "Hackfleisch mit 1 EL Sojasauce mischen und gut zerteilen.",
      "Reis waschen und mit Wasser in den Topf geben.",
      "Hack, Karotten und Sojasprossen als große Schicht oben drauflegen.",
      "Kochen. Danach mit Sesamöl und restlicher Sojasauce durchmischen."
    ],
    checks: "Balanced ✓ · Schwangerschaft ✓ (Hackfleisch gut durchgegart im Topf)",
    swaps: "Rinderhack ↔ Räuchertofu",
    side: "Koreanische Pickles (mild).",
    remind: true,
    riceCooker: { enabled: true, program: "Mixed / White Rice", water: "Etwas weniger als Standard (Sprossen wässern)", notes: "Fleisch vorher gut auseinanderzupfen." },
  },

  // MITTWOCH
  {
    id: "mi-f",
    title: "Fluffiges Soufflé-Omelett (Fully Cooked!)",
    desc: "Wie eine Wolke! Getrennt aufgeschlagene Eier ergeben ein riesiges, leichtes Omelett.",
    story: "Ein Trend aus japanischen und koreanischen Cafés. Wir schlagen das Eiweiß steif. Wichtig: Wir decken die Pfanne ab, damit die 'Wolke' auch innen komplett durchgart!",
    target: "≈45 g KH (2 P.) · Protein ≈20 g p. P.",
    ingredients: [
      "Eier 4 Stück",
      "Zucker 1 TL",
      "Salz 1 Prise",
      "Butter 10 g",
      "Toastbrot 2 Scheiben"
    ],
    steps: [
      "Eier trennen. Eiweiß mit Zucker steif schlagen. Eigelb mit Salz verrühren.",
      "Eigelb vorsichtig unter das Eiweiß heben.",
      "Butter in der Pfanne schmelzen, Masse hineingeben. Deckel drauf! Bei niedriger Hitze 6-8 Min komplett durchgaren lassen (darf nicht flüssig bleiben).",
      "Zusammenklappen und auf Toast servieren."
    ],
    checks: "Balanced ✓ · Schwangerschaft ✓ (Deckel ist Pflicht für durchgegartes Inneres!)",
    swaps: "Toast ↔ Schwarzbrot",
    side: "Frische Gurken-Sticks.",
    remind: true,
    riceCooker: { enabled: false },
  },
  {
    id: "mi-m",
    title: "Cong You Ban Mian 葱油拌面 (Frühlingszwiebel-Nudeln)",
    desc: "Shanghaier Streetfood: Nudeln in einem aromatischen Öl aus gerösteten Frühlingszwiebeln.",
    story: "Gutes Essen braucht oft nur drei Zutaten. Frühlingszwiebeln werden langsam in Öl geröstet, bis sie knusprig sind. Das Öl wird zur magischen Sauce. Mild und unwiderstehlich.",
    target: "≈86 g KH (2 P.) · Protein ≈18 g p. P. (mit Beilage)",
    ingredients: [
      "Weizennudeln 130 g",
      "Frühlingszwiebeln (viel!) 100 g",
      "Speiseöl 2 EL",
      "Sojasauce (dunkel & hell) 2 EL",
      "Zucker 1 TL",
      "Gekochte Eier (hart) 2 Stück"
    ],
    steps: [
      "Frühlingszwiebeln (nur der grüne Teil, in Stücken) in Öl bei niedriger Hitze langsam braten, bis sie braun und knusprig sind (ca. 10 Min).",
      "Sojasauce und Zucker in die Pfanne geben, kurz aufkochen. Vom Herd nehmen.",
      "Nudeln kochen, abtropfen, mit dem Aroma-Öl mischen.",
      "Mit knusprigen Zwiebeln und hartgekochtem Ei servieren."
    ],
    checks: "Balanced ✓ · Schwangerschaft ✓ (Eier hartgekocht)",
    swaps: "Weizennudeln ↔ Zucchini-Nudeln Mix für weniger KH",
    side: "Edamame für extra Protein.",
    remind: false,
    riceCooker: { enabled: false },
  },
  {
    id: "mi-a",
    title: "Tomaten-Feta-Risotto (Reiskocher)",
    desc: "Eine mediterrane Fusion: Cremiger Reis, gekocht mit ganzen Tomaten und Käse.",
    story: "Der 'Whole Tomato Rice'-Trend aus Asien trifft auf das italienische Risotto. Der Reiskocher übernimmt das lästige Rühren. Feta schmilzt am Ende herrlich ein.",
    target: "≈84 g KH (2 P.) · Protein ≈22 g p. P.",
    ingredients: [
      "Vollkorn-Risottoreis oder Normalreis 120 g",
      "Tomate (groß, reif) 1 Stück",
      "Feta-Käse (pasteurisiert) 100 g",
      "Gemüsebrühe 240 ml",
      "Knoblauch 1 Zehe",
      "Erbsen (TK) 50 g"
    ],
    steps: [
      "Reis, Brühe, Knoblauch und Erbsen in den Reiskocher geben.",
      "Die ganze Tomate (Strunk entfernt) in die Mitte setzen.",
      "Kochen. Nach dem Kochen den Feta zerbröselt dazugeben.",
      "Tomate zerdrücken und alles zu einem cremigen Risotto verrühren."
    ],
    checks: "Balanced ✓ · Schwangerschaft ✓ (Käse pasteurisiert) · Diabetes ✓",
    swaps: "Feta ↔ Mozzarella",
    side: "Hähnchenbruststreifen (gebraten) für extra Protein.",
    remind: true,
    riceCooker: { enabled: true, program: "White Rice", water: "Brühe (etwas weniger wegen der Tomate)", notes: "Risotto-Konsistenz ohne Rühren!" },
  },

  // DONNERSTAG
  {
    id: "do-f",
    title: "Goguma Latte 고구마 라떼 (Süßkartoffel-Latte)",
    desc: "Warmes, koreanisches Frühstücksgetränk aus pürierter Süßkartoffel und Milch.",
    story: "In koreanischen Cafés der Hit. Es ist eigentlich eine Art süße, cremige Suppe zum Trinken. Wahnsinnig sättigend und reich an guten Kohlenhydraten.",
    target: "≈68 g KH (2 P.) · Protein ≈18 g p. P.",
    ingredients: [
      "Süßkartoffel (gekocht/gedämpft) 200 g",
      "Milch (oder Hafermilch) 400 ml",
      "Honig 1 TL",
      "Vollkorn-Toast 2 Scheiben",
      "Frischkäse 2 EL"
    ],
    steps: [
      "Gekochte Süßkartoffel mit heißer Milch und Honig in einem Mixer oder mit dem Pürierstab cremig pürieren.",
      "In Tassen füllen.",
      "Dazu Vollkorntoast mit Frischkäse."
    ],
    checks: "Balanced ✓ · Schwangerschaft ✓",
    swaps: "Süßkartoffel ↔ Kürbis",
    side: "-",
    remind: true,
    riceCooker: { enabled: false },
  },
  {
    id: "do-m",
    title: "Köttbullar Express (Schwedische Hackbällchen)",
    desc: "Schnelle schwedische Fleischbällchen mit Erbsen und Kartoffelpüree.",
    story: "Grüße aus dem schwedischen Möbelhaus! Wir machen eine schnelle, unkomplizierte Version, die sicherstellt, dass das Fleisch gut durchgart.",
    target: "≈85 g KH (2 P.) · Protein ≈28 g p. P.",
    ingredients: [
      "Rinderhackfleisch 200 g",
      "Paniermehl 20 g",
      "Milch 30 ml",
      "Kartoffeln 300 g",
      "Erbsen (TK) 100 g",
      "Gemüsebrühe & etwas Mehl (für die Sauce)"
    ],
    steps: [
      "Kartoffeln kochen und zu Püree stampfen.",
      "Paniermehl in Milch einweichen, mit Hack mischen. Kleine Bällchen formen.",
      "Bällchen in der Pfanne rundum gut durchbraten (wichtig!).",
      "Bällchen raus, Mehl ins Bratfett, mit Brühe ablöschen = Sauce. Erbsen in der Sauce erwärmen."
    ],
    checks: "Balanced ✓ · Schwangerschaft ✓ (Fleischbällchen KOMPLETT durchbraten!)",
    swaps: "Rinderhack ↔ Vegane Hack-Alternative",
    side: "Preiselbeermarmelade (wenig).",
    remind: false,
    riceCooker: { enabled: false },
  },
  {
    id: "do-a",
    title: "Kohl & Hähnchen Reiskocher-Topf",
    desc: "Ein herrlich saftiges One-Pot-Gericht. Der Kohl wird butterweich.",
    story: "Eine Adaption des chinesischen Cabbage Rice. Der Kohl verliert beim Kochen sein Volumen und gibt dem Reis eine unglaubliche Süße.",
    target: "≈82 g KH (2 P.) · Protein ≈28 g p. P.",
    ingredients: [
      "Reis (roh) 120 g",
      "Weißkohl oder Spitzkohl 200 g",
      "Hähnchenbrust 200 g",
      "Sojasauce 2 EL",
      "Knoblauch 1 Zehe",
      "Sesamöl 1 TL"
    ],
    steps: [
      "Hähnchen in Würfel schneiden, mit Sojasauce und Knoblauch mischen.",
      "Kohl in grobe Stücke schneiden.",
      "Reis und Wasser in den Topf. Erst das Hähnchen, dann den ganzen Kohlberg darauf stapeln (er fällt zusammen!).",
      "Kochen, am Ende Sesamöl unterrühren."
    ],
    checks: "Balanced ✓ · Schwangerschaft ✓ (Huhn gart sicher mit)",
    swaps: "Huhn ↔ Geräucherter Tofu",
    side: "Klare Pilzbrühe.",
    remind: true,
    riceCooker: { enabled: true, program: "White Rice", water: "Standard (Kohl gibt Wasser ab)", notes: "Kohlberg sieht riesig aus, schrumpft aber." },
  },

  // FREITAG
  {
    id: "fr-f",
    title: "Spinat-Parmesan Frittata",
    desc: "Eine dicke, italienische Omelett-Torte aus der Pfanne.",
    story: "In Italien isst man Frittata warm, kalt, im Brötchen... überall! Der Trick ist, sie bei geringer Hitze mit Deckel zu braten, damit sie stockt, ohne unten anzubrennen.",
    target: "≈45 g KH (2 P.) · Protein ≈24 g p. P.",
    ingredients: [
      "Eier 4 Stück",
      "Spinat (frisch) 150 g",
      "Parmesan (pasteurisiert, gerieben) 30 g",
      "Tomaten 100 g",
      "Vollkornbrot 2 Scheiben"
    ],
    steps: [
      "Spinat in der Pfanne kurz zusammenfallen lassen. Tomatenwürfel dazu.",
      "Eier mit Parmesan verquirlen, über das Gemüse gießen.",
      "Deckel drauf! Bei niedriger Hitze ca. 10 Min stocken lassen (muss komplett fest sein).",
      "In Tortenstücke schneiden, mit Brot servieren."
    ],
    checks: "Balanced ✓ · Schwangerschaft ✓ (Eier voll gestockt, Parmesan ist Hartkäse/pasteurisiert) · Diabetes ✓",
    swaps: "Spinat ↔ Zucchini",
    side: "-",
    remind: true,
    riceCooker: { enabled: false },
  },
  {
    id: "fr-m",
    title: "Gungjung Tteokbokki (Mild, Soja-Basis) 궁중 떡볶이",
    desc: "Königliche Reiskuchen: Nicht scharf und rot, sondern mild und herzhaft mit Rind.",
    story: "Bevor Chili nach Korea kam, aßen die Könige ihre Reiskuchen (Tteok) genau so: In einer edlen Soja-Sesam-Sauce mit Gemüse und Rindfleisch. Super lecker!",
    target: "≈85 g KH (2 P.) · Protein ≈22 g p. P.",
    ingredients: [
      "Tteokbokki (koreanische Reiskuchen) 200 g",
      "Rindfleisch (in Streifen) 100 g",
      "Paprika & Karotte 100 g",
      "Sojasauce 2 EL",
      "Honig 1 TL",
      "Sesamöl 1 EL"
    ],
    steps: [
      "Reiskuchen in warmem Wasser 10 Min einweichen.",
      "Rindfleisch und Gemüse in der Pfanne anbraten.",
      "Reiskuchen und Marinade (Soja, Honig, Sesamöl, etwas Wasser) dazugeben.",
      "Köcheln lassen, bis die Reiskuchen weich und die Sauce klebrig ist."
    ],
    checks: "Balanced ✓ · Schwangerschaft ✓ (Rind gut durchbraten)",
    swaps: "Rind ↔ Hähnchen; Reiskuchen ↔ Gnocchi (wäre dann italienisch!)",
    side: "Gurken-Sticks.",
    remind: false,
    riceCooker: { enabled: false },
  },
  {
    id: "fr-a",
    title: "Ebi-Mayo Rice エビマヨご飯 (Reiskocher)",
    desc: "Garnelen garen auf dem Reis und werden danach mit etwas Mayo verfeinert.",
    story: "Ebi Mayo ist ein beliebtes Gericht in Japan (Garnelen in Mayo). Wir machen eine Reiskocher-Version. Die Mayo rühren wir erst am Ende unter den heißen Reis, das macht ihn super cremig.",
    target: "≈80 g KH (2 P.) · Protein ≈26 g p. P.",
    ingredients: [
      "Reis (roh) 120 g",
      "Garnelen (geschält, TK aufgetaut) 200 g",
      "Brokkoli-Röschen 100 g",
      "Sojasauce 1 EL",
      "Mayonnaise (aus Tube, pasteurisiert!) 1 EL",
      "Brühe"
    ],
    steps: [
      "Reis, Brühe und Sojasauce in den Topf.",
      "Garnelen oben drauf.",
      "Kochen. 10 Min vor Ende Brokkoli schnell oben drauflegen.",
      "Wenn fertig: Mayo dazugeben und vorsichtig untermischen."
    ],
    checks: "Balanced ✓ · Schwangerschaft ✓ (Mayo MUSS aus industrieller Herstellung sein = pasteurisiert. Keine frische Hausmayo!)",
    swaps: "Garnelen ↔ Lachs",
    side: "-",
    remind: true,
    riceCooker: { enabled: true, program: "Mixed / White Rice", water: "Standard", notes: "Brokkoli nicht von Anfang an mitkochen, sonst wird er braun." },
  },

  // SAMSTAG
  {
    id: "sa-f",
    title: "Matcha Pancakes",
    desc: "Grüne, fluffige Pfannkuchen mit einem Hauch von herbem Grüntee.",
    story: "Ein Café-Hit in Kyoto! Der Matcha sorgt für eine tolle Farbe und gleicht die Süße perfekt aus. Keine Angst, komplett durchgebacken.",
    target: "≈75 g KH (2 P.) · Protein ≈18 g p. P.",
    ingredients: [
      "Mehl 120 g",
      "Matcha-Pulver 1 TL",
      "Backpulver 1 TL",
      "Eier 2 Stück",
      "Milch 100 ml",
      "Joghurt (pasteurisiert) 100 g"
    ],
    steps: [
      "Mehl, Matcha, Backpulver mischen.",
      "Eier und Milch verquirlen, zu den trockenen Zutaten geben.",
      "In einer beschichteten Pfanne kleine Pancakes von beiden Seiten durchbacken.",
      "Mit einem Klecks Joghurt servieren."
    ],
    checks: "Balanced ✓ · Schwangerschaft ✓ (Pancakes komplett durchgaren)",
    swaps: "Matcha ↔ Kakaopulver",
    side: "Frische Früchte.",
    remind: true,
    riceCooker: { enabled: false },
  },
  {
    id: "sa-m",
    title: "Italienische Minestrone (Mild)",
    desc: "Dicker, herzhafter Gemüseeintopf mit kleinen Nudeln und Bohnen.",
    story: "Die beste Art, den Kühlschrank leer zu machen. In Italien wird oft noch die harte Rinde vom Parmesan mitgekocht, das gibt mega Geschmack!",
    target: "≈80 g KH (2 P.) · Protein ≈20 g p. P.",
    ingredients: [
      "Suppennudeln 80 g",
      "Weiße Bohnen (Dose, gewaschen) 100 g",
      "Zucchini, Karotte, Sellerie 200 g",
      "Tomaten passiert 200 ml",
      "Gemüsebrühe 500 ml",
      "Parmesan 20 g"
    ],
    steps: [
      "Gemüse klein würfeln und leicht andünsten.",
      "Mit Tomaten und Brühe ablöschen, 15 Min köcheln.",
      "Bohnen und Nudeln dazugeben, kochen bis die Nudeln al dente sind.",
      "Mit Parmesan bestreuen."
    ],
    checks: "Balanced ✓ · Schwangerschaft ✓ (alles gekocht) · Diabetes ✓",
    swaps: "Nudeln ↔ Vollkornreis",
    side: "Eine Scheibe Vollkornbrot.",
    remind: false,
    riceCooker: { enabled: false },
  },
  {
    id: "sa-a",
    title: "Lachs-Dill Nordic Rice (Reiskocher)",
    desc: "Schwedisch inspirierter Reiskocher-Topf mit Lachs, Dill und Erbsen.",
    story: "Eine Crossover-Episode: Skandinavische Aromen treffen auf japanische Technik. Der Dill gibt dem Reis eine unglaubliche Frische.",
    target: "≈80 g KH (2 P.) · Protein ≈28 g p. P.",
    ingredients: [
      "Reis (roh) 120 g",
      "Lachsfilet 200 g",
      "Erbsen (TK) 80 g",
      "Dill (frisch, viel!) 1 Bund",
      "Zitrone (nur etwas Saft) 1 TL",
      "Gemüsebrühe 240 ml"
    ],
    steps: [
      "Reis und Brühe in den Topf.",
      "Lachs und Erbsen oben auflegen.",
      "Kochen. Nach dem Öffnen den gehackten Dill und Zitronensaft zugeben.",
      "Lachs zerteilen und alles gut mischen."
    ],
    checks: "Balanced ✓ · Schwangerschaft ✓ (Lachs gart im Topf durch)",
    swaps: "Lachs ↔ Forellenfilet",
    side: "Knackiger Karottensalat.",
    remind: true,
    riceCooker: { enabled: true, program: "Mixed / White Rice", water: "Brühe Standard", notes: "Dill nicht mitkochen, erst am Ende rein!" },
  },

  // SONNTAG
  {
    id: "so-f",
    title: "Shredded Chicken Congee 鸡丝粥",
    desc: "Wohlig warmer Reisbrei mit gezupftem Hühnchen und einem hartgekochten Ei.",
    story: "In Guangdong isst man 'Century Egg & Pork' Congee. Da fermentierte Tausendjährige Eier in der Schwangerschaft riskant sein können, nehmen wir saftiges Huhn und ein normales, hartgekochtes Ei.",
    target: "≈70 g KH (2 P.) · Protein ≈24 g p. P.",
    ingredients: [
      "Reis (roh) 80 g",
      "Hühnerbrühe 800 ml",
      "Hühnerbrust 150 g",
      "Eier (hartgekocht) 2 Stück",
      "Frühlingszwiebel 10 g",
      "Ingwer (feine Streifen) 5 g"
    ],
    steps: [
      "Reis waschen. In Brühe mit Ingwer ca. 45-60 Min zu Brei einköcheln.",
      "Hühnerbrust in den letzten 15 Min im Brei pochieren. Rausnehmen, mit Gabel zerzupfen, wieder rein.",
      "Mit gevierteltem hartgekochtem Ei und Frühlingszwiebeln servieren."
    ],
    checks: "Balanced ✓ · Schwangerschaft ✓ (Ei hartgekocht, Huhn durch) · Diabetes ✓",
    swaps: "Huhn ↔ Weißfisch",
    side: "Tee.",
    remind: true,
    riceCooker: { enabled: false },
  },
  {
    id: "so-m",
    title: "Viral Folded Gimbap 접는 김밥",
    desc: "Tortilla-Trick auf Koreanisch: Ein Nori-Blatt vierteln, belegen und zuklappen.",
    story: "Erinnerst du dich an den TikTok Tortilla-Hack? In Korea macht man das mit Nori-Blättern. Wir nehmen eine große Reisplatte, Omelett und Schinken. Achtung: In der Schwangerschaft Nori nur in Maßen!",
    target: "≈75 g KH (2 P.) · Protein ≈20 g p. P.",
    ingredients: [
      "Nori-Blätter 2 Stück",
      "Reis (gekocht) 150 g",
      "Eier 2 Stück",
      "Spam oder Kochschinken 80 g",
      "Karotte (geraspelt & gebraten) 50 g",
      "Sesamöl"
    ],
    steps: [
      "Ei zu einem flachen Omelett braten, vierteln. Schinken anbraten.",
      "Nori-Blatt von unten bis zur Mitte einschneiden.",
      "Reis, Omelett, Schinken, Karotte auf die 4 Viertel verteilen.",
      "Im Uhrzeigersinn zusammenklappen. Zu einem handlichen Dreieck essen."
    ],
    checks: "Balanced ✓ · Schwangerschaft ✓ (Schinken/Spam erhitzen! Nori maßvoll)",
    swaps: "Spam ↔ Tofu-Scheiben gebraten",
    side: "Miso-Suppe.",
    remind: false,
    riceCooker: { enabled: false },
  },
  {
    id: "so-a",
    title: "Viral Camembert Rice (Reiskocher)",
    desc: "Ein ganzer Camembert schmilzt im Reiskocher über dem Reis. Absurd lecker.",
    story: "Das japanische Internet ist verrückt danach. Sobald man den Deckel öffnet, zerfließt der Käse in den heißen Reis, verfeinert mit Sojasauce und Speck. Wir stellen sicher, dass der Käse pasteurisiert ist!",
    target: "≈82 g KH (2 P.) · Protein ≈28 g p. P.",
    ingredients: [
      "Reis (roh) 120 g",
      "Camembert (zwingend PASTEURISIERT!) 1 Stück (ca. 120g)",
      "Schinkenwürfel oder Bacon (roh) 50 g",
      "Sojasauce 1 EL",
      "Schwarzer Pfeffer",
      "Wasser"
    ],
    steps: [
      "Reis und Wasser (etwas weniger) in den Topf. Sojasauce einrühren.",
      "Den ganzen Camembert in die Mitte setzen. Schinkenwürfel außen herum.",
      "Kochen. Nach dem Öffnen Pfeffer drüber und den geschmolzenen Käse unter den Reis rühren."
    ],
    checks: "Balanced ✓ · Schwangerschaft ✓ (NUR Käse aus pasteurisierter Milch verwenden! Speck wird im Topf durchgegart) · Diabetes ✓",
    swaps: "Schinken ↔ Räuchertofu",
    side: "Ein großer, saurer Beilagensalat (balanciert das Fett).",
    remind: true,
    riceCooker: { enabled: true, program: "White Rice", water: "Etwas weniger als Normal", notes: "Achtung: Etikett vom Käse checken (pasteurisiert!)." },
  },
];

export default function Woche6DE() {
  return (
    <PlanTemplate
      meta={meta}
      data={DATA}
      dayNames={DAY_NAME_DE}
      uiTitles={UI_TITLES}
      subtitle="Virale Trends (CN/JP/KR) + SWE/IT · Balanced · Schwangerschaftssicher · 1× Reiskocher/Tag"
      heroChips={["Woche 6", "Virale Trends & Wohlfühlküche", "Täglich 1× 🍚 Reiskocher"]}
    />
  );
}

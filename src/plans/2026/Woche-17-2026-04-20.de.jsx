/*
  Moving Kitchen Tales – Woche 17 (Start: 2026-04-20)
  Status: KOMPLETT & FUNKTIONSFÄHIG (Alle 21 Rezepte)
  Fokus: Virale Airfryer-Hacks, Reiskocher-Magie, CN/JP/KR + EU Crossover.
*/

import React from "react";
import PlanTemplate from "../PlanTemplate";

export const meta = {
  title: "Woche 17",
  startDate: "2026-04-20",
  id: "woche-17-2026-04-20",
  lang: "de",
  sidebar: "Woche 17 (2026-04-20)",
};

const DAY_NAME_DE = {
  mo: "Montag (2026-04-20)",
  di: "Dienstag (2026-04-21)",
  mi: "Mittwoch (2026-04-22)",
  do: "Donnerstag (2026-04-23)",
  fr: "Freitag (2026-04-24)",
  sa: "Samstag (2026-04-25)",
  so: "Sonntag (2026-04-26)",
};

const UI_TITLES = {
  main: "Rezepte Woche 17",
  list: "Einkaufsliste Woche 17",
};

export const DATA = [
  // MONTAG
  {
    id: "mo-f",
    title: "Viral Hashbrown Egg Toast",
    isViral: true,
    desc: "Ein knuspriges Kartoffelrösti, kombiniert mit Ei und Käse auf Vollkorntoast aus dem Airfryer.",
    story: "Ein Social-Media-Trend, der sättigt und am Morgen schnell zubereitet ist. Das fertige Rösti (Hashbrown) wird im Airfryer aufgebacken und anschließend mit Käse und Ei überbacken.",
    target: "≈65 g KH (2 P.) · Protein ≈20 g p. P.",
    ingredients: [
      "Vollkorn-Toast 2 Scheiben",
      "Kartoffelrösti (TK, Hashbrowns) 2 Stück",
      "Eier 2 Stück",
      "Gouda oder Cheddar (pasteurisiert) 40 g",
      "Sriracha oder Ketchup"
    ],
    steps: [
      "TK-Rösti im Airfryer bei 200°C ca. 10 Min knusprig vorbacken.",
      "Vollkorn-Toast in den Airfryer legen, das Rösti darauf platzieren.",
      "Käse darüber streuen. Vorsichtig ein aufgeschlagenes Ei daraufgeben.",
      "Weitere 8-10 Min bei 170°C backen, bis das Ei vollständig gestockt ist."
    ],
    checks: "Balanced ✓ · Schwangerschaft ✓ (Eigelb muss komplett fest sein!) · Diabetes ✓",
    swaps: "Rösti ↔ Tomatenscheiben",
    side: "Eine Tasse warmer Tee.",
    remind: true,
    riceCooker: { enabled: false },
  },
  {
    id: "mo-m",
    title: "Udon Miso-Carbonara (うどん味噌)",
    desc: "Japanische Udon-Nudeln in einer cremigen Sahnesauce mit Speck und Miso-Paste.",
    story: "Eine asiatische Abwandlung der Carbonara. Wir verzichten aus Sicherheitsgründen auf rohes Ei und binden die Sauce stattdessen mit etwas Sahne und herzhafter Miso-Paste.",
    target: "≈85 g KH (2 P.) · Protein ≈22 g p. P.",
    ingredients: [
      "Udon-Nudeln (vorgegart) 400 g",
      "Speckwürfel oder Pancetta 80 g",
      "Miso-Paste 1 EL",
      "Sahne (pasteurisiert) 100 ml",
      "Parmesan (gerieben) 30 g"
    ],
    steps: [
      "Speckwürfel in einer Pfanne knusprig ausbraten.",
      "Hitze reduzieren. Sahne angießen und die Miso-Paste darin auflösen.",
      "Udon-Nudeln (vorher kurz heiß abgespült) in die Sauce geben.",
      "Mit Parmesan bestreuen und gut durchschwenken, bis die Sauce andickt."
    ],
    checks: "Balanced ✓ · Schwangerschaft ✓ (Speck durchgebraten, Sahne pasteurisiert, kein rohes Ei)",
    swaps: "Speck ↔ Räuchertofu",
    side: "Gurkensalat.",
    remind: false,
    riceCooker: { enabled: false },
  },
  {
    id: "mo-a",
    title: "Hainan-Style Tofu & Shiitake 海南豆腐 (Reiskocher)",
    desc: "Tofu und Pilze garen schonend über Reis in einer aromatischen Ingwer-Brühe.",
    story: "Die vegane Variante des Hainan Chicken Rice. Der Tofu saugt die intensive Brühe auf und wird extrem weich, während der Ingwer wärmt.",
    target: "≈80 g KH (2 P.) · Protein ≈18 g p. P.",
    ingredients: [
      "Reis (roh) 120 g",
      "Fester Tofu (gewürfelt) 200 g",
      "Shiitake-Pilze 100 g",
      "Ingwer (fein gehackt) 15 g",
      "Knoblauch 2 Zehen",
      "Gemüsebrühe 240 ml",
      "Sojasauce 1 EL"
    ],
    steps: [
      "Reis, Brühe, Sojasauce, Ingwer und Knoblauch in den Reiskocher geben.",
      "Tofu und Pilze in mundgerechte Stücke schneiden und oben auf den Reis legen.",
      "Start drücken.",
      "Nach dem Kochen gründlich durchmischen und auf Tellern anrichten."
    ],
    checks: "Balanced ✓ · Schwangerschaft ✓ (Tofu dämpft komplett durch) · Diabetes ✓",
    swaps: "Tofu ↔ Hähnchenbrust",
    side: "Frühlingszwiebeln darüber streuen.",
    remind: true,
    riceCooker: { enabled: true, program: "Mixed / White Rice", water: "Brühe (Standard)", notes: "Ingwer gibt ein sehr wärmendes Aroma." },
  },

  // DIENSTAG
  {
    id: "di-f",
    title: "Schwedischer Kardamom-Haferbrei (Kardemummagröt)",
    desc: "Wärmender Haferbrei, verfeinert mit Kardamom und frischen Apfelstücken.",
    story: "Kardamom ist in Skandinavien unverzichtbar. Er verleiht diesem simplen Haferbrei eine blumige, intensive Note, die perfekt zum Apfel passt.",
    target: "≈65 g KH (2 P.) · Protein ≈15 g p. P.",
    ingredients: [
      "Haferflocken 100 g",
      "Milch oder Haferdrink 400 ml",
      "Kardamom (gemahlen) 1/2 TL",
      "Apfel (gewürfelt) 1 Stück",
      "Mandeln (gehackt) 20 g"
    ],
    steps: [
      "Haferflocken mit Milch und Kardamom in einem Topf sanft aufkochen.",
      "Hitze reduzieren und köcheln lassen, bis die Flocken weich sind.",
      "Apfelwürfel unterheben.",
      "In Schüsseln füllen und mit Mandeln bestreuen."
    ],
    checks: "Balanced ✓ · Diabetes ✓ (Komplexe KH) · Schwangerschaft ✓",
    swaps: "Kardamom ↔ Zimt",
    side: "-",
    remind: true,
    riceCooker: { enabled: false },
  },
  {
    id: "di-m",
    title: "Airfryer Katsu Sando 豚カツサンド",
    desc: "Japanisches Schweineschnitzel-Sandwich, fettarm im Airfryer gebacken.",
    story: "Ein Klassiker aus den japanischen Convenience-Stores. Das Schnitzel wird im Airfryer knusprig, danach dick mit Sauce bestrichen und zwischen Toastscheiben geklemmt.",
    target: "≈80 g KH (2 P.) · Protein ≈28 g p. P.",
    ingredients: [
      "Schweineschnitzel 2 Stück",
      "Panko (Paniermehl) 40 g",
      "Ei 1 Stück & Mehl (Panierstraße)",
      "Vollkorn-Toast 4 Scheiben",
      "Weißkohl (sehr fein gehobelt) 50 g",
      "Tonkatsu-Sauce 2 EL"
    ],
    steps: [
      "Schnitzel klopfen, in Mehl, Ei und Panko wenden. Leicht mit Öl besprühen.",
      "Im Airfryer bei 200°C ca. 15 Min backen (Fleisch komplett durchgaren!).",
      "Toast toasten. Kohl auflegen, Schnitzel daraufsetzen und mit Sauce bestreichen.",
      "Zusammenklappen und in der Mitte durchschneiden."
    ],
    checks: "Balanced ✓ · Schwangerschaft ✓ (Schweinefleisch GANZ durchbraten)",
    swaps: "Schwein ↔ Hähnchenbrust",
    side: "Ein paar Radieschen.",
    remind: false,
    riceCooker: { enabled: false },
  },
  {
    id: "di-a",
    title: "Zitronen-Hähnchen-Risotto (Reiskocher)",
    desc: "Ein frisches, italienisch inspiriertes Risotto mit Hähnchen und Zitrone.",
    story: "Risotto ohne Rühren! Die Stärke des Reises bindet die Brühe im Reiskocher. Ein Schuss Zitrone und etwas Parmesan runden das Gericht ab.",
    target: "≈82 g KH (2 P.) · Protein ≈30 g p. P.",
    ingredients: [
      "Risottoreis 120 g",
      "Hähnchenbrust (gewürfelt) 200 g",
      "Hühnerbrühe 300 ml",
      "Zitrone (Saft & Abrieb) 1/2 Stück",
      "Parmesan (pasteurisiert) 30 g",
      "Zucchini (gewürfelt) 100 g"
    ],
    steps: [
      "Reis, Brühe, Zucchini und Hähnchenwürfel in den Reiskocher geben.",
      "Start drücken.",
      "Nach dem Kochen Zitronensaft, Zitronenabrieb und Parmesan kräftig unterrühren.",
      "Das Risotto sollte cremig und leicht fließend sein."
    ],
    checks: "Balanced ✓ · Schwangerschaft ✓ (Huhn gart sicher durch, Käse pasteurisiert)",
    swaps: "Zucchini ↔ Erbsen",
    side: "Tomatensalat.",
    remind: true,
    riceCooker: { enabled: true, program: "White Rice / Mixed", water: "Brühe (etwas mehr für Risotto-Textur)", notes: "Käse und Zitrone erst ganz am Schluss einrühren." },
  },

  // MITTWOCH
  {
    id: "mi-f",
    title: "Savory Soy Oatmeal 醤油オートミール",
    desc: "Herzhafter Haferbrei, gewürzt mit Sojasauce und Sesamöl, serviert mit hartgekochtem Ei.",
    story: "Eine schnelle Alternative zu traditionellem asiatischen Congee. Haferflocken kochen schneller und liefern langanhaltende Energie.",
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
    id: "mi-m",
    title: "Kroatische Đuveč-Gnocchi",
    desc: "Gnocchi aus der Pfanne, geschwenkt in einer würzigen Ajvar-Gemüse-Sauce.",
    story: "Djuvec-Reis ist ein Hit auf dem Balkan. Wir wandeln die Aromen (Paprika, Erbsen, Ajvar) ab und kombinieren sie mit weichen Gnocchi für ein schnelles Mittagessen.",
    target: "≈85 g KH (2 P.) · Protein ≈15 g p. P.",
    ingredients: [
      "Gnocchi 300 g",
      "Paprika (gewürfelt) 1 Stück",
      "Erbsen (TK) 80 g",
      "Ajvar (mild) 3 EL",
      "Tomatenmark 1 EL",
      "Gemüsebrühe 50 ml"
    ],
    steps: [
      "Gnocchi in kochendem Wasser garen, bis sie oben schwimmen.",
      "Paprika in einer Pfanne andünsten. Tomatenmark und Ajvar kurz mitrösten.",
      "Mit Brühe ablöschen, Erbsen dazugeben und kurz einköcheln.",
      "Die Gnocchi in der Sauce schwenken."
    ],
    checks: "Balanced ✓ · Schwangerschaft ✓ · Diabetes ✓",
    swaps: "Gnocchi ↔ Vollkorn-Penne",
    side: "Etwas geriebener Parmesan.",
    remind: false,
    riceCooker: { enabled: false },
  },
  {
    id: "mi-a",
    title: "Gyudon-Style Beef Rice 牛丼 (Reiskocher)",
    desc: "Hauchdünnes Rindfleisch und weiche Zwiebeln dämpfen direkt auf dem Reis.",
    story: "Ein japanischer Fast-Food-Klassiker, adaptiert für den Reiskocher. Das Fleisch bleibt zart, der Reis saugt die süß-salzige Marinade auf.",
    target: "≈80 g KH (2 P.) · Protein ≈26 g p. P.",
    ingredients: [
      "Reis (roh) 120 g",
      "Rindfleisch (hauchdünne Hotpot-Scheiben) 150 g",
      "Zwiebel (in Ringen) 1 Stück",
      "Sojasauce 2 EL",
      "Mirin 1 EL",
      "Dashi oder Brühe 240 ml"
    ],
    steps: [
      "Reis und Brühe in den Topf geben.",
      "Soja und Mirin einrühren.",
      "Zwiebelringe und das Rindfleisch locker (!) darauf verteilen. Das Fleisch etwas auffächern.",
      "Start drücken. Danach alles gründlich durchmischen."
    ],
    checks: "Balanced ✓ · Schwangerschaft ✓ (Fleisch gart im Topf >80°C komplett durch)",
    swaps: "Rindfleisch ↔ Schweinefleisch (dünn geschnitten)",
    side: "Eingelegter Ingwer.",
    remind: true,
    riceCooker: { enabled: true, program: "Mixed / White Rice", water: "Dashi (Standard)", notes: "Fleisch auffächern, nicht klumpen." },
  },

  // DONNERSTAG
  {
    id: "do-f",
    title: "Viral Reispapier-Croissant 🥐 (Airfryer)",
    isViral: true,
    desc: "Reispapier-Blätter werden geschichtet, mit Käse und Ei gefüllt und wie ein Croissant aufgerollt.",
    story: "Ein knuspriger Trend! Wenn man Reispapier in Milch tränkt und bäckt, wird es unglaublich blättrig und luftig. Gefüllt mit etwas Ei und Käse ein perfekter Snack.",
    target: "≈65 g KH (2 P.) · Protein ≈20 g p. P.",
    ingredients: [
      "Reispapier 6 Blatt",
      "Milch 50 ml",
      "Eier (als Rührei vorgebraten) 2 Stück",
      "Käse (Gouda, gerieben) 40 g",
      "Schinken (optional) 2 Scheiben"
    ],
    steps: [
      "Eier in der Pfanne komplett durchbraten.",
      "Reispapier-Blätter kurz in Milch tauchen und drei Blätter übereinanderlegen.",
      "Rührei, Käse und Schinken im unteren Drittel platzieren.",
      "Die Seiten einklappen und aufrollen. Mit etwas Öl bestreichen.",
      "Im Airfryer bei 190°C ca. 10 Min backen, bis sie knusprig und goldbraun sind."
    ],
    checks: "Balanced ✓ · Schwangerschaft ✓ (Ei komplett durch, Käse pasteurisiert)",
    swaps: "Schinken ↔ Putenbrust",
    side: "Kaffee.",
    remind: true,
    riceCooker: { enabled: false },
  },
  {
    id: "do-m",
    title: "Buldak-Style Vollkorn-Penne 불닭 파스타",
    isViral: true,
    desc: "Pasta in einer cremigen, koreanisch inspirierten Gochujang-Sahne-Sauce.",
    story: "Buldak-Nudeln sind scharf. Wir machen eine milde, ausgewogene Version: Gochujang bringt Würze, die Sahne sorgt für die Cremigkeit. Perfekt mit Vollkorn-Penne.",
    target: "≈85 g KH (2 P.) · Protein ≈18 g p. P.",
    ingredients: [
      "Vollkorn-Penne 130 g",
      "Gochujang (milde Paste) 1 EL",
      "Kochsahne 100 ml",
      "Knoblauch 1 Zehe",
      "Spinat 50 g",
      "Parmesan 20 g"
    ],
    steps: [
      "Penne kochen. Etwas Nudelwasser aufheben.",
      "Knoblauch und Gochujang in einer Pfanne kurz anrösten.",
      "Mit Sahne ablöschen, Spinat hineinwerfen und einköcheln lassen.",
      "Nudeln in die Sauce geben und mit Parmesan bestreuen."
    ],
    checks: "Balanced ✓ · Schwangerschaft ✓ (Käse und Sahne erhitzt) · Diabetes ✓",
    swaps: "Gochujang ↔ Tomatenmark (komplett mild)",
    side: "-",
    remind: false,
    riceCooker: { enabled: false },
  },
  {
    id: "do-a",
    title: "Linsen-Curry-Pilaf (Reiskocher)",
    desc: "Rote Linsen, Reis und Karotten garen in einer aromatischen Curry-Brühe.",
    story: "Ein One-Pot-Dal für den Reiskocher. Die Linsen zerfallen und machen den Reis extrem sämig, die Karotten bringen einen tollen Biss.",
    target: "≈82 g KH (2 P.) · Protein ≈18 g p. P.",
    ingredients: [
      "Reis (roh) 100 g",
      "Rote Linsen (roh, gewaschen) 40 g",
      "Karotten (in Stiften) 100 g",
      "Currypulver (mild) 1 TL",
      "Gemüsebrühe 300 ml",
      "Frühlingszwiebel 10 g"
    ],
    steps: [
      "Reis und Linsen gründlich waschen.",
      "Zusammen mit Brühe und Currypulver in den Topf geben.",
      "Karottenstifte oben auflegen.",
      "Start drücken. Am Ende gut durchmischen."
    ],
    checks: "Balanced ✓ · Schwangerschaft ✓ · Diabetes ✓ (Linsen drosseln Blutzucker)",
    swaps: "Karotten ↔ Süßkartoffel",
    side: "Ein Löffel Naturjoghurt.",
    remind: true,
    riceCooker: { enabled: true, program: "Mixed / White Rice", water: "Brühe (Reis + Linsen berechnen)", notes: "Linsen sorgen für eine weiche Textur." },
  },

  // FREITAG
  {
    id: "fr-f",
    title: "Tomaten-Rührei Bowl 番茄炒蛋",
    desc: "Der chinesische Klassiker 'Tomate & Ei' serviert über einer Portion Reis oder Quinoa.",
    story: "Das klassische Comfort-Food Chinas. Die Tomaten kochen weich und bilden eine natürliche Sauce, die das gestockte Ei perfekt umschließt.",
    target: "≈65 g KH (2 P.) · Protein ≈20 g p. P.",
    ingredients: [
      "Tomaten (sehr reif) 3 Stück",
      "Eier 3 Stück",
      "Ketchup 1 TL",
      "Knoblauch 1 Zehe",
      "Reis (gekocht) oder Quinoa 150 g"
    ],
    steps: [
      "Eier in der Pfanne stocken lassen (komplett durchbraten!), herausnehmen.",
      "Tomaten würfeln und mit Knoblauch weichschmoren, bis Sauce entsteht. Ketchup dazu.",
      "Eier zurück in die Pfanne, vermischen.",
      "Über dem Reis anrichten."
    ],
    checks: "Balanced ✓ · Schwangerschaft ✓ (Eier komplett durch)",
    swaps: "Reis ↔ Vollkorn-Toast",
    side: "-",
    remind: true,
    riceCooker: { enabled: false },
  },
  {
    id: "fr-m",
    title: "Schwedische Korvstroganoff (Wurstpfanne)",
    desc: "Ein schnelles schwedisches Alltagsgericht aus Wurststreifen in einer Tomaten-Sahne-Sauce.",
    story: "In Schweden liebt jedes Kind Korvstroganoff. Falukorv (eine Art Fleischwurst) wird mit Zwiebeln angebraten und in einer cremigen Sauce geschmort.",
    target: "≈80 g KH (2 P.) · Protein ≈20 g p. P.",
    ingredients: [
      "Fleischwurst oder Geflügelwurst 200 g",
      "Zwiebel 1 Stück",
      "Tomatenmark 2 EL",
      "Sahne oder Hafercreme 100 ml",
      "Nudeln (gekocht) oder Reis 200 g"
    ],
    steps: [
      "Wurst in Streifen schneiden und mit Zwiebeln in der Pfanne anbraten.",
      "Tomatenmark kurz mitrösten.",
      "Sahne und 50ml Wasser angießen, aufkochen und 5 Min einköcheln lassen.",
      "Zusammen mit den Nudeln oder Reis servieren."
    ],
    checks: "Balanced ✓ · Schwangerschaft ✓ (Wurst wird stark erhitzt)",
    swaps: "Fleischwurst ↔ Tofu-Würstchen",
    side: "Ein paar Gurkenscheiben.",
    remind: false,
    riceCooker: { enabled: false },
  },
  {
    id: "fr-a",
    title: "Mediterraner Weißfisch-Reis (Reiskocher)",
    desc: "Magerer Fisch, Cherrytomaten und Oliven dämpfen schonend über dem Reis.",
    story: "Ein unkompliziertes Fischgericht. Der Reiskocher fängt den leichten Fischfond auf. Tomaten und Oliven geben dem Ganzen einen mediterranen Touch.",
    target: "≈80 g KH (2 P.) · Protein ≈28 g p. P.",
    ingredients: [
      "Reis (roh) 120 g",
      "Kabeljau oder Seelachs (TK aufgetaut) 200 g",
      "Cherrytomaten 100 g",
      "Schwarze Oliven (entsteint) 30 g",
      "Gemüsebrühe 240 ml",
      "Italienische Kräuter 1 TL"
    ],
    steps: [
      "Reis, Brühe und Kräuter in den Reiskocher füllen.",
      "Fischfilet, Tomaten und Oliven auflegen.",
      "Start drücken.",
      "Nach dem Kochen den Fisch leicht zerpflücken und alles untermischen."
    ],
    checks: "Balanced ✓ · Schwangerschaft ✓ (Weißfisch ist quecksilberarm und dämpft sicher durch)",
    swaps: "Kabeljau ↔ Lachsfilet",
    side: "Ein Spritzer frische Zitrone.",
    remind: true,
    riceCooker: { enabled: true, program: "White Rice / Mixed", water: "Brühe (Standard)", notes: "Fisch und Tomaten geben etwas Feuchtigkeit ab." },
  },

  // SAMSTAG
  {
    id: "sa-f",
    title: "Miso-Bananen-Pancakes 味噌バナナパンケーキ",
    desc: "Süße Bananen-Pancakes mit einem winzigen Hauch salziger Miso-Paste für intensives Umami.",
    story: "Die Kombination aus süßer Banane und salzigem Miso funktioniert ähnlich wie Salted Caramel. Ein tolles, ungewöhnliches Frühstück für den Samstag.",
    target: "≈75 g KH (2 P.) · Protein ≈18 g p. P.",
    ingredients: [
      "Mehl (Vollkorn oder Dinkel) 120 g",
      "Banane (sehr reif) 1 Stück",
      "Miso-Paste (hell) 1 TL",
      "Eier 2 Stück",
      "Milch 80 ml",
      "Backpulver 1 TL"
    ],
    steps: [
      "Banane mit einer Gabel zu Mus zerdrücken.",
      "Eier, Milch und die Miso-Paste (vorher in 1 EL Wasser auflösen) gut unterrühren.",
      "Mehl und Backpulver zügig unterheben.",
      "In einer Pfanne bei mittlerer Hitze durchbacken, bis sie fest und goldbraun sind."
    ],
    checks: "Balanced ✓ · Schwangerschaft ✓ (Teig durchbacken)",
    swaps: "Miso ↔ Prise Salz",
    side: "Ein Klecks Joghurt.",
    remind: true,
    riceCooker: { enabled: false },
  },
  {
    id: "sa-m",
    title: "Airfryer Crispy Rice Paper Dumplings 라이스페이퍼 만두",
    isViral: true,
    desc: "Quadratische, knusprige Teigtaschen aus Reispapier, gefüllt mit Rinderhack und Kohl.",
    story: "Ein toller Hack, wenn man keinen Nudelteig kneten möchte. Reispapier-Blätter werden wie Briefumschläge um die Füllung gefaltet und im Airfryer extrem kross gebacken.",
    target: "≈75 g KH (2 P.) · Protein ≈24 g p. P.",
    ingredients: [
      "Reispapier 8 Blatt",
      "Rinderhack (mager) 150 g",
      "Kohl & Karotten (fein gehackt) 100 g",
      "Sojasauce 2 EL",
      "Sesamöl 1 TL",
      "Reis (als Beilage) 100 g"
    ],
    steps: [
      "Rinderhack und Gemüse in der Pfanne krümelig und KOMPLETT durch braten. Mit Sojasauce würzen.",
      "Reispapier nass machen, Füllung in die Mitte, zu einem Quadrat falten (zwei Blätter pro Tasche für Stabilität).",
      "Im Airfryer (leicht ölen) bei 190°C ca. 10 Min backen.",
      "Mit Reis und Dip servieren."
    ],
    checks: "Balanced ✓ · Schwangerschaft ✓ (Hack vorher durchbraten!) · Diabetes ✓",
    swaps: "Rinderhack ↔ Tofu-Crumble",
    side: "Sojasauce zum Dippen.",
    remind: false,
    riceCooker: { enabled: false },
  },
  {
    id: "sa-a",
    title: "Claypot-Style Cabanossi Rice 煲仔饭 (Reiskocher)",
    desc: "Reistopf mit geräucherter Wurst und Pak Choi, inspiriert vom chinesischen Claypot Rice.",
    story: "In Guangdong wird Reis mit süßer Lap-Cheong-Wurst in Tontöpfen gegart. Wir nutzen herzhafte Cabanossi. Ihr Fett und Raucharoma ziehen komplett in den Reis ein.",
    target: "≈84 g KH (2 P.) · Protein ≈20 g p. P.",
    ingredients: [
      "Reis (roh) 120 g",
      "Cabanossi oder Räucherwurst 1-2 Stück",
      "Sojasauce 2 EL",
      "Sesamöl 1 TL",
      "Pak Choi 150 g",
      "Brühe 240 ml"
    ],
    steps: [
      "Wurst in dünne Scheiben schneiden.",
      "Reis und Brühe in den Reiskocher, Wurst oben drauf legen.",
      "Kochen lassen.",
      "Pak Choi separat kurz dämpfen. Am Ende alles mit Soja/Sesamöl mischen."
    ],
    checks: "Balanced ✓ · Schwangerschaft ✓ (Wurst wird im Dampf >80°C erhitzt)",
    swaps: "Cabanossi ↔ Räuchertofu",
    side: "Pak Choi.",
    remind: true,
    riceCooker: { enabled: true, program: "White Rice", water: "Standard", notes: "Wurst nicht einrühren vor dem Kochen." },
  },

  // SONNTAG
  {
    id: "so-f",
    title: "Upside-Down Zucchini-Feta Tarts 🥒 (Airfryer)",
    isViral: true,
    desc: "Herzhafte Blätterteig-Törtchen. Zucchini, Käse, Teig drüber – fertig!",
    story: "Der 'Upside-Down Pastry' Trend aus Frankreich! Zucchini und Feta liegen auf dem Backpapier, Blätterteig darüber. Im Airfryer wird der Teig luftig, das Gemüse röstet. Perfekt für Sonntag.",
    target: "≈65 g KH (2 P.) · Protein ≈15 g p. P.",
    ingredients: [
      "Blätterteig (Rolle) 1/2 Stück",
      "Zucchini (in Scheiben) 150 g",
      "Feta (pasteurisiert) 40 g",
      "Honig 1 TL",
      "Thymian oder Oregano"
    ],
    steps: [
      "Blätterteig in 4 Quadrate schneiden.",
      "Auf Airfryer-Backpapier 4 kleine Kleckse Honig geben. Zucchinischeiben darauflegen. Mit Kräutern und Feta bestreuen.",
      "Ein Teig-Quadrat über die Zucchini legen und Ränder andrücken.",
      "Im Airfryer bei 180°C ca. 10 Min backen. Stürzen!"
    ],
    checks: "Balanced ✓ · Schwangerschaft ✓ (Käse erhitzt)",
    swaps: "Zucchini ↔ Tomatenscheiben",
    side: "Ein gekochtes Ei für mehr Protein.",
    remind: true,
    riceCooker: { enabled: false },
  },
  {
    id: "so-m",
    title: "Zucchini-Nudel-Wok mit Garnelen",
    desc: "Zoodles (Zucchini-Nudeln) mit Garnelen, scharf angebraten in Knoblauch und Sojasauce.",
    story: "Ein leichtes Mittagessen. Die Zucchini-Nudeln garen im heißen Wok extrem schnell und nehmen die intensiven Aromen der Garnelen auf.",
    target: "≈50 g KH (2 P. - inkl. Brot) · Protein ≈24 g p. P.",
    ingredients: [
      "Zucchini (mit Spiralschneider zu Nudeln gedreht) 2-3 Stück",
      "Garnelen (TK, aufgetaut) 200 g",
      "Knoblauch 2 Zehen",
      "Sojasauce 2 EL",
      "Vollkornbrot (als Beilage) 2 Scheiben"
    ],
    steps: [
      "Garnelen und Knoblauch im Wok anbraten, bis die Garnelen rosa und GANZ durch sind.",
      "Zucchini-Nudeln hinzugeben und nur 2-3 Minuten schwenken (sie sollen knackig bleiben).",
      "Mit Sojasauce ablöschen.",
      "Dazu Brot reichen."
    ],
    checks: "Balanced ✓ · Schwangerschaft ✓ (Garnelen komplett durchbraten)",
    swaps: "Zoodles ↔ Normale Vollkorn-Spaghetti",
    side: "-",
    remind: false,
    riceCooker: { enabled: false },
  },
  {
    id: "so-a",
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
];

export default function Woche17DE() {
  return (
    <PlanTemplate
      meta={meta}
      data={DATA}
      dayNames={DAY_NAME_DE}
      uiTitles={UI_TITLES}
      subtitle="Neue Virale Hacks 🔥 · Abwechslung pur · Reiskocher · Balanced"
      heroChips={["Woche 17", "Neue Virale Trends & Wohlfühlküche", "Täglich 1× 🍚 Reiskocher"]}
    />
  );
}

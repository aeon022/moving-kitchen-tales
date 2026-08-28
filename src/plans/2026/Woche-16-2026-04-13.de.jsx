/*
  Moving Kitchen Tales – Woche 16 (Start: 2026-04-13)
  Status: KOMPLETT & FUNKTIONSFÄHIG (Alle 21 Rezepte)
  Fokus: Komplett neue virale Hits, Abwechslung zu W15, Reiskocher-Diversität.
*/

import React from "react";
import PlanTemplate from "../PlanTemplate";

export const meta = {
  title: "Woche 16",
  startDate: "2026-04-13",
  id: "woche-16-2026-04-13",
  lang: "de",
  sidebar: "Woche 16 (2026-04-13)",
};

const DAY_NAME_DE = {
  mo: "Montag (2026-04-13)",
  di: "Dienstag (2026-04-14)",
  mi: "Mittwoch (2026-04-15)",
  do: "Donnerstag (2026-04-16)",
  fr: "Freitag (2026-04-17)",
  sa: "Samstag (2026-04-18)",
  so: "Sonntag (2026-04-19)",
};

const UI_TITLES = {
  main: "Rezepte Woche 16",
  list: "Einkaufsliste Woche 16",
};

export const DATA = [
  // MONTAG
  {
    id: "mo-f",
    title: "Carrot Cake Oatmeal 🥕",
    desc: "Haferbrei, der schmeckt wie Karottenkuchen – mit feinen Karottenraspeln und Zimt.",
    story: "Eine fantastische Art, schon morgens Gemüse einzubauen. Die Karotte kocht im Brei extrem weich und gibt eine natürliche Süße ab.",
    target: "≈65 g KH (2 P.) · Protein ≈15 g p. P.",
    ingredients: [
      "Haferflocken 100 g",
      "Milch (oder Mandelmilch) 400 ml",
      "Karotte (fein gerieben) 1 Stück",
      "Zimt 1 TL",
      "Walnüsse (gehackt) 20 g",
      "Agavendicksaft 1 TL"
    ],
    steps: [
      "Karotte sehr fein raspeln.",
      "Milch, Haferflocken, Karotte und Zimt in einem Topf ca. 5-7 Min sanft köcheln, bis ein cremiger Brei entsteht.",
      "Mit Agavendicksaft süßen und Walnüssen toppen."
    ],
    checks: "Balanced ✓ · Schwangerschaft ✓ · Diabetes ✓ (Zimt und Ballaststoffe sind top)",
    swaps: "Walnüsse ↔ Pecannüsse",
    side: "Kaffee oder Tee.",
    remind: true,
    riceCooker: { enabled: false },
  },
  {
    id: "mo-m",
    title: "Viral Smash Burger Tacos 🍔🌮",
    isViral: true,
    desc: "Rinderhack wird direkt auf einem Tortilla-Wrap in der Pfanne knusprig gebraten.",
    story: "Ein riesiger TikTok-Hit! Statt Brötchen nimmt man Wraps. Das Hackfleisch drückt man roh auf den Wrap und legt es mit der Fleischseite nach unten in die Pfanne. Es wird ultra knusprig!",
    target: "≈65 g KH (2 P.) · Protein ≈28 g p. P.",
    ingredients: [
      "Kleine Vollkorn-Tortillas 4 Stück",
      "Rinderhack 200 g",
      "Käse (Cheddar oder Gouda) 40 g",
      "Salat & Gewürzgurken (klein gehackt) 100 g",
      "Ketchup & Mayo (pasteurisiert) 2 EL"
    ],
    steps: [
      "Hackfleisch in 4 Portionen teilen. Jeweils dünn auf eine Seite der Wraps drücken. Salzen und pfeffern.",
      "Wrap mit der Fleischseite nach unten in eine heiße Pfanne legen. Festdrücken! Ca. 3-4 Min braten (komplett durchgaren!).",
      "Wenden, Käse auf die Fleischseite legen, schmelzen lassen.",
      "Mit Salat, Gurken und Sauce toppen, zuklappen."
    ],
    checks: "Balanced ✓ · Schwangerschaft ✓ (Fleisch GANZ durchbraten, Mayo aus Tube) · Diabetes ✓",
    swaps: "Rinderhack ↔ Veganes Hack",
    side: "-",
    remind: false,
    riceCooker: { enabled: false },
  },
  {
    id: "mo-a",
    title: "Kung Pao Chicken Rice 宫保鸡饭 (Reiskocher)",
    desc: "Die Aromen des Szechuan-Klassikers Kung Pao sanft im Reiskocher gedämpft.",
    story: "Kung Pao ist eigentlich scharf und im Wok gebraten. Diese One-Pot-Version fokussiert sich auf die süß-säuerliche Sojasauce und die knackigen Erdnüsse. Sehr schonend!",
    target: "≈80 g KH (2 P.) · Protein ≈32 g p. P.",
    ingredients: [
      "Reis (roh) 120 g",
      "Hähnchenbrust (gewürfelt) 200 g",
      "Paprika (gewürfelt) 100 g",
      "Sojasauce & Reisessig (je 1 EL)",
      "Ungesalzene Erdnüsse 30 g",
      "Hühnerbrühe 240 ml"
    ],
    steps: [
      "Hähnchen in Sojasauce und Essig kurz marinieren.",
      "Reis und Brühe in den Topf geben.",
      "Paprikawürfel und das marinierte Hähnchen darauflegen.",
      "Start drücken. Nach dem Kochen die Erdnüsse unterrühren (so bleiben sie knackig)."
    ],
    checks: "Balanced ✓ · Schwangerschaft ✓ (Hähnchen dämpft sicher durch)",
    swaps: "Erdnüsse ↔ Cashews",
    side: "Ein Gurkensalat.",
    remind: true,
    riceCooker: { enabled: true, program: "Mixed / White Rice", water: "Brühe (Standard)", notes: "Erdnüsse erst am Schluss für den Crunch!" },
  },

  // DIENSTAG
  {
    id: "di-f",
    title: "Inside-Out Grilled Cheese 🧀",
    isViral: true,
    desc: "Ein Käsetoast, bei dem der Käse nicht nur innen schmilzt, sondern auch außen eine Kruste bildet.",
    story: "Noch ein Social-Media-Star. Der Trick: Ein bisschen Käse wird direkt in die Pfanne gestreut. Wenn er Blasen wirft, legt man das Brot drauf. Ergibt eine göttliche Kruste.",
    target: "≈55 g KH (2 P.) · Protein ≈20 g p. P.",
    ingredients: [
      "Vollkorn-Toast 4 Scheiben",
      "Gouda oder Cheddar (gerieben) 80 g",
      "Kochschinken 2 Scheiben",
      "Butter 10 g",
      "Tomatenscheiben"
    ],
    steps: [
      "Ein wenig Käse in die beschichtete Pfanne streuen. Sobald er schmilzt, eine Scheibe Toast andrücken.",
      "Mit Schinken, Tomate und mehr Käse belegen. Zweite Toastscheibe drauflegen.",
      "Wenden und auch die andere Außenseite in etwas Käse knusprig braten.",
      "Braten, bis alles verschmolzen und heiß ist."
    ],
    checks: "Balanced ✓ · Schwangerschaft ✓ (Käse pasteurisiert, Schinken erhitzt)",
    swaps: "Schinken ↔ Putenbrust",
    side: "Etwas Rohkost.",
    remind: true,
    riceCooker: { enabled: false },
  },
  {
    id: "di-m",
    title: "Shakshuka (Well-Done Edition) (شكشوكة)",
    desc: "Eier in einer würzigen Tomaten-Paprika-Sauce, komplett durchgegart.",
    story: "Shakshuka kommt aus Nordafrika/Israel. In der Schwangerschaft pochieren wir die Eier nicht weich, sondern legen einfach einen Deckel auf die Pfanne, bis auch das Eigelb komplett fest ist.",
    target: "≈65 g KH (2 P.) · Protein ≈22 g p. P.",
    ingredients: [
      "Passierte Tomaten 200 ml",
      "Paprika (gewürfelt) 1 Stück",
      "Zwiebel & Knoblauch 1 Stück",
      "Eier 4 Stück",
      "Kreuzkümmel & Paprikapulver",
      "Vollkornbrot 4 Scheiben"
    ],
    steps: [
      "Zwiebel, Knoblauch und Paprika in der Pfanne weich dünsten.",
      "Tomaten und Gewürze zugeben, 10 Min einköcheln lassen.",
      "Mit einem Löffel 4 Mulden in die Sauce drücken und die Eier hineinschlagen.",
      "Deckel drauf! Auf mittlerer Hitze garen, bis das Ei GANZ fest ist."
    ],
    checks: "Balanced ✓ · Schwangerschaft ✓ (Eier komplett durchgegart!) · Diabetes ✓",
    swaps: "Vollkornbrot ↔ Quinoa",
    side: "-",
    remind: false,
    riceCooker: { enabled: false },
  },
  {
    id: "di-a",
    title: "Lemon Garlic Butter Lachs (Reiskocher)",
    desc: "Lachsfilet, beträufelt mit Zitrone und Knoblauchbutter, gedämpft über Reis.",
    story: "Mediterrane Aromen treffen auf den Reiskocher. Die Zitronenbutter schmilzt direkt in die Reiskörner und gibt dem ganzen Gericht eine unglaubliche Frische.",
    target: "≈80 g KH (2 P.) · Protein ≈28 g p. P.",
    ingredients: [
      "Reis (roh) 120 g",
      "Lachsfilet 200 g",
      "Knoblauch 1 Zehe (gepresst)",
      "Butter 20 g",
      "Zitrone 1/2 Stück (Saft)",
      "Gemüsebrühe 240 ml"
    ],
    steps: [
      "Reis und Brühe in den Topf.",
      "Lachs oben auflegen. Butter, Knoblauch und Zitronensaft über dem Lachs verteilen.",
      "Start drücken.",
      "Nach dem Kochen den Lachs vorsichtig zerteilen und mit dem aromatisierten Reis vermengen."
    ],
    checks: "Balanced ✓ · Schwangerschaft ✓ (Lachs gart sicher durch)",
    swaps: "Lachs ↔ Kabeljau",
    side: "Ein grüner Salat.",
    remind: true,
    riceCooker: { enabled: true, program: "White Rice / Mixed", water: "Brühe (Standard)", notes: "Butter und Zitrone machen den Reis extrem cremig." },
  },

  // MITTWOCH
  {
    id: "mi-f",
    title: "Viral Cottage Cheese Flatbread",
    isViral: true,
    desc: "Ein kohlenhydratarmes Fladenbrot, das fast nur aus Hüttenkäse und Ei besteht.",
    story: "Der Wahnsinn aus der Fitness-Bubble! Hüttenkäse und Ei werden gemixt, auf einem Blech verstrichen und gebacken. Das Ergebnis lässt sich wie ein Tortilla rollen und ist Protein pur.",
    target: "≈40 g KH (2 P.) · Protein ≈35 g p. P.",
    ingredients: [
      "Körniger Frischkäse (Cottage Cheese) 200 g",
      "Eier 2 Stück",
      "Italienische Kräuter & Knoblauchpulver",
      "Putenbrustaufschnitt 4 Scheiben",
      "Spinat (frisch) 50 g"
    ],
    steps: [
      "Hüttenkäse, Eier und Gewürze in einem Mixer komplett glatt pürieren.",
      "Auf ein Backblech (mit Backpapier!) streichen (ca. 1 cm dick).",
      "Im Ofen oder großen Airfryer bei 180°C ca. 25-30 Min backen, bis es goldbraun und fest ist.",
      "Auskühlen lassen, abziehen, mit Putenbrust und Spinat belegen und rollen."
    ],
    checks: "Balanced ✓ · Schwangerschaft ✓ (Ei und Käse komplett durchgebacken) · Diabetes ✓",
    swaps: "Putenbrust ↔ Räucherlachs",
    side: "Kaffee.",
    remind: true,
    riceCooker: { enabled: false },
  },
  {
    id: "mi-m",
    title: "Zucchini Noodle Shrimp Scampi",
    desc: "Zoodles (Zucchini-Nudeln) mit Garnelen in einer leichten Knoblauch-Zitronen-Sauce.",
    story: "Scampi-Sauce ohne die Schwere von Nudeln. Die Zucchini-Nudeln saugen den Knoblauch auf und das Ganze liegt nachmittags nicht schwer im Magen.",
    target: "≈50 g KH (2 P. - inkl. Brot) · Protein ≈24 g p. P.",
    ingredients: [
      "Zucchini (mit einem Spiralschneider zu Nudeln gedreht) 2-3 Stück",
      "Garnelen (TK, aufgetaut) 200 g",
      "Olivenöl 2 EL & Knoblauch 2 Zehen",
      "Zitronensaft 1 EL",
      "Vollkornbrot (als Beilage) 2 Scheiben"
    ],
    steps: [
      "Garnelen und Knoblauch in Olivenöl in einer Pfanne anbraten, bis die Garnelen rosa und komplett durch sind.",
      "Zucchini-Nudeln hinzugeben. Nur 2-3 Minuten schwenken (sie sollen knackig bleiben, nicht wässrig werden!).",
      "Mit Zitrone, Salz und Pfeffer abschmecken.",
      "Mit Brot servieren."
    ],
    checks: "Balanced ✓ · Schwangerschaft ✓ (Garnelen komplett durchbraten)",
    swaps: "Zoodles ↔ Normale Vollkorn-Spaghetti",
    side: "-",
    remind: false,
    riceCooker: { enabled: false },
  },
  {
    id: "mi-a",
    title: "Tomato Beef Rice 番茄牛肉饭 (Reiskocher)",
    desc: "Der legendäre Whole-Tomato-Hack, diesmal gepaart mit hauchdünnem Rindfleisch.",
    story: "Die Tomate schmilzt und bildet eine natürliche süß-saure Sauce. Das Rindfleisch gart im Dampf unfassbar zart. Ein echtes Wohlfühlessen.",
    target: "≈82 g KH (2 P.) · Protein ≈28 g p. P.",
    ingredients: [
      "Reis (roh) 120 g",
      "Tomate (groß) 1 Stück",
      "Rindfleisch (hauchdünne Scheiben) 150 g",
      "Sojasauce 2 EL",
      "Gemüsebrühe 240 ml",
      "Frühlingszwiebel 10 g"
    ],
    steps: [
      "Reis, Brühe und Sojasauce in den Topf geben.",
      "Tomate kreuzweise einschneiden, in die Mitte setzen. Das Rindfleisch locker darum fächern.",
      "Start drücken.",
      "Nach dem Kochen die Tomate zerdrücken, alles vermengen und mit Frühlingszwiebeln toppen."
    ],
    checks: "Balanced ✓ · Schwangerschaft ✓ (Fleisch wird >80°C durchgedämpft)",
    swaps: "Rindfleisch ↔ Hähnchenbrust",
    side: "Ein Schälchen Kimchi (mild).",
    remind: true,
    riceCooker: { enabled: true, program: "White Rice / Mixed", water: "Brühe (etwas weniger wg. Tomate)", notes: "Tomate gut zerdrücken." },
  },

  // DONNERSTAG
  {
    id: "do-f",
    title: "Süßkartoffel-Pancakes 🥞",
    desc: "Pancakes, deren Teig zu einem großen Teil aus Süßkartoffelpüree besteht.",
    story: "Eine tolle Resteverwertung für gebackene Süßkartoffeln. Die Pancakes werden extrem saftig, leicht orange und haben eine tolle natürliche Süße.",
    target: "≈75 g KH (2 P.) · Protein ≈16 g p. P.",
    ingredients: [
      "Süßkartoffel-Püree (aus gekochter Süßkartoffel) 100 g",
      "Mehl (Vollkorn) 80 g",
      "Eier 2 Stück",
      "Milch 50 ml",
      "Backpulver 1 TL",
      "Zimt"
    ],
    steps: [
      "Püree, Eier und Milch glatt rühren.",
      "Mehl, Backpulver und Zimt unterheben.",
      "In der Pfanne bei mittlerer Hitze durchbacken. (Sie brauchen etwas länger als normale Pancakes!).",
      "Mit etwas Quark servieren."
    ],
    checks: "Balanced ✓ · Schwangerschaft ✓ (Komplett durchbacken!) · Diabetes ✓",
    swaps: "Süßkartoffel ↔ Kürbispüree",
    side: "Ein Klecks Magerquark.",
    remind: true,
    riceCooker: { enabled: false },
  },
  {
    id: "do-m",
    title: "Viral Crispy Quinoa Salad",
    isViral: true,
    desc: "Quinoa wird im Airfryer knusprig gebacken und dann über einen Salat gestreut.",
    story: "Quinoa-Salat kennt jeder. Aber Quinoa im Airfryer zu rösten, bis er crunchig wie Nüsse wird, ist ein Gamechanger auf Instagram!",
    target: "≈70 g KH (2 P.) · Protein ≈18 g p. P.",
    ingredients: [
      "Quinoa (bereits gekocht!) 150 g",
      "Olivenöl 1 EL",
      "Gurke & Tomate 200 g",
      "Feta (pasteurisiert) 50 g",
      "Zitronensaft & Kräuter"
    ],
    steps: [
      "Gekochten Quinoa mit Olivenöl mischen. Im Airfryer bei 190°C ca. 10-15 Min rösten, bis er knusprig wird. (Vorsicht, fliegt leicht rum, evt. Backpapier nutzen).",
      "Gemüse klein schneiden, mit Zitrone anmachen.",
      "Salat anrichten, Feta darüberbröseln und den krossen Quinoa als Crunch-Topping darübergeben."
    ],
    checks: "Balanced ✓ · Schwangerschaft ✓ (Käse pasteurisiert)",
    swaps: "Quinoa ↔ Kichererbsen (werden auch super knusprig)",
    side: "-",
    remind: false,
    riceCooker: { enabled: false },
  },
  {
    id: "do-a",
    title: "Mapo Tofu (Mild) 麻婆豆腐",
    desc: "Sichuan-Klassiker ohne die extreme Schärfe. Tofu und Hackfleisch in pikanter Sauce.",
    story: "Echtes Mapo Tofu betäubt die Zunge. Wir machen eine milde 'Balanced'-Version: Viel Tofu, mageres Hack, Sojasauce und nur ein Hauch Chili. Perfekt zu Reis.",
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
      "Tofu in Würfel schneiden, kurz in heißem Wasser blanchieren (dann bricht er nicht so leicht).",
      "Hackfleisch und Knoblauch im Wok krümelig und GANZ durch braten.",
      "Saucen und 100ml Wasser zugeben. Tofu hineingleiten lassen.",
      "3 Min sanft köcheln. Mit etwas in Wasser gelöster Stärke andicken. Über Reis servieren."
    ],
    checks: "Balanced ✓ · Schwangerschaft ✓ (Hack komplett durch, Tofu heiß)",
    swaps: "Schweinehack ↔ Hähnchenhack",
    side: "-",
    remind: true,
    riceCooker: { enabled: false },
  },

  // FREITAG
  {
    id: "fr-f",
    title: "Dim Sum Steamed Egg 蒸水蛋 (Mikrowelle)",
    desc: "Extrem glatter Eierstich, gewürzt mit Sojasauce und Sesamöl.",
    story: "Eine Schale warmer Eierstich ist in China pures Wohlgefühl. Wir machen ihn superschnell in der Mikrowelle.",
    target: "≈60 g KH (2 P. - inkl. Brot) · Protein ≈18 g p. P.",
    ingredients: [
      "Eier 3 Stück",
      "Warmes Wasser 150 ml",
      "Sojasauce 1 EL",
      "Sesamöl 1 TL",
      "Vollkorn-Toast (als Beilage) 4 Scheiben"
    ],
    steps: [
      "Eier mit dem warmen Wasser sehr sanft verquirlen (wenig Schaum machen!).",
      "In eine mikrowellenfeste Schale geben. Abdecken (Mikrowellendeckel oder Teller).",
      "Auf mittlerer bis niedriger Stufe ca. 4-6 Min garen, bis es komplett durchgestockt (wie Pudding) ist.",
      "Sojasauce und Sesamöl darüber träufeln. Mit Toast essen."
    ],
    checks: "Balanced ✓ · Schwangerschaft ✓ (Ei MUSS komplett fest sein, keine glitschigen Stellen!)",
    swaps: "Wasser ↔ Dashi-Brühe",
    side: "Tee.",
    remind: true,
    riceCooker: { enabled: false },
  },
  {
    id: "fr-m",
    title: "Marry Me Beans 💍",
    isViral: true,
    desc: "Weiße Bohnen in einer cremigen Sauce aus getrockneten Tomaten, Sahne und Parmesan.",
    story: "Das 'Marry Me Chicken' hat das Internet erobert (so gut, dass man einen Heiratsantrag bekommt). Die fleischlose Version mit Bohnen ist sogar noch cremiger und schneller!",
    target: "≈80 g KH (2 P.) · Protein ≈18 g p. P.",
    ingredients: [
      "Weiße Bohnen (Dose, gespült) 250 g",
      "Getrocknete Tomaten (in Öl, gehackt) 40 g",
      "Knoblauch 1 Zehe",
      "Kochsahne (pasteurisiert) 100 ml",
      "Parmesan 20 g",
      "Vollkornbrot 2-4 Scheiben"
    ],
    steps: [
      "Knoblauch und getrocknete Tomaten in etwas Öl aus dem Tomatenglas anbraten.",
      "Bohnen, Sahne und etwas Wasser dazugeben. 5 Min köcheln lassen.",
      "Parmesan unterrühren, bis die Sauce dick wird.",
      "Mit Brot servieren, um die geniale Sauce aufzutunken."
    ],
    checks: "Balanced ✓ · Schwangerschaft ✓ (Käse/Sahne pasteurisiert) · Diabetes ✓",
    swaps: "Bohnen ↔ Kichererbsen",
    side: "-",
    remind: false,
    riceCooker: { enabled: false },
  },
  {
    id: "fr-a",
    title: "Mushroom Takikomi Gohan きのこご飯 (Reiskocher)",
    desc: "Japanischer Mischreis mit drei Sorten Pilzen und Soja-Aroma.",
    story: "Ein Fest der erdigen Aromen. Shiitake, Champignons und Enoki dämpfen gemeinsam mit dem Reis. Ein echtes veganes Highlight.",
    target: "≈82 g KH (2 P.) · Protein ≈15 g p. P. (mit Tofu)",
    ingredients: [
      "Reis (roh) 120 g",
      "Pilze gemischt (Shiitake, Champignons, Enoki) 200 g",
      "Sojasauce 2 EL",
      "Mirin 1 EL",
      "Dashi oder Gemüsebrühe 240 ml",
      "Räuchertofu (optional für mehr Protein) 100 g"
    ],
    steps: [
      "Alle Pilze in Scheiben/Mundgerechte Stücke schneiden. Tofu würfeln.",
      "Reis, Brühe, Soja und Mirin in den Reiskocher geben.",
      "Pilze und Tofu darauf verteilen (nicht umrühren).",
      "Start drücken. Nach dem Kochen kräftig vermengen."
    ],
    checks: "Balanced ✓ · Schwangerschaft ✓ · Diabetes ✓",
    swaps: "Pilzmix ↔ Nur Champignons",
    side: "Ein kleiner Spinatsalat.",
    remind: true,
    riceCooker: { enabled: true, program: "Mixed / White Rice", water: "Brühe (Standard)", notes: "Pilze schrumpfen stark zusammen." },
  },

  // SAMSTAG
  {
    id: "sa-f",
    title: "Airfryer Breakfast Burrito 🌯",
    desc: "Ein gefüllter Wrap mit Rührei und schwarzen Bohnen, knusprig aus dem Airfryer.",
    story: "Burritos im Airfryer aufzubacken schließt sie nicht nur perfekt, sondern macht sie außen herrlich knusprig. Ein Power-Frühstück am Wochenende.",
    target: "≈75 g KH (2 P.) · Protein ≈22 g p. P.",
    ingredients: [
      "Vollkorn-Tortillas 2 Stück",
      "Eier 3 Stück",
      "Schwarze Bohnen (Dose) 50 g",
      "Käse (Gouda, pasteurisiert) 30 g",
      "Tomate (gewürfelt) 1 Stück"
    ],
    steps: [
      "Eier in der Pfanne als Rührei KOMPLETT durchbraten.",
      "Wraps mit Rührei, Bohnen, Tomate und Käse füllen. Wie einen Burrito eng aufrollen.",
      "Im Airfryer bei 190°C ca. 5-7 Minuten backen, bis der Wrap kross ist."
    ],
    checks: "Balanced ✓ · Schwangerschaft ✓ (Ei komplett fest, Käse pasteurisiert)",
    swaps: "Schwarze Bohnen ↔ Schinkenwürfel",
    side: "Kaffee.",
    remind: true,
    riceCooker: { enabled: false },
  },
  {
    id: "sa-m",
    title: "Viral Sushi Waffles 寿司ワッフル (Airfryer Hack)",
    isViral: true,
    desc: "Gekochter Reis wird im Airfryer (oder Waffeleisen) knusprig gebacken und wie Sushi belegt.",
    story: "Kein Waffeleisen? Kein Problem. Wir formen flache Reis-Patties, backen sie im Airfryer extrem knusprig und toppen sie mit cremiger Thunfisch-Mayo.",
    target: "≈80 g KH (2 P.) · Protein ≈24 g p. P.",
    ingredients: [
      "Reis (gekocht, klebrig/Sushi-Reis) 200 g",
      "Thunfisch (Dose) 100 g",
      "Mayonnaise (pasteurisiert) 1 EL",
      "Sojasauce 1 TL",
      "Gurke (in feinen Scheiben)",
      "Nori (zerbröselt)"
    ],
    steps: [
      "Reis zu zwei kompakten, flachen 'Waffeln' formen. Leicht mit Öl bepinseln.",
      "Im Airfryer bei 200°C ca. 12-15 Min backen, bis sie außen richtig kross sind.",
      "Thunfisch mit Mayo und Sojasauce mischen.",
      "Crispy Rice mit Gurke, Thunfischcreme und Nori toppen."
    ],
    checks: "Balanced ✓ · Schwangerschaft ✓ (Mayo pasteurisiert, Dosenthunfisch in Maßen)",
    swaps: "Thunfisch ↔ Gekochte Garnelen",
    side: "-",
    remind: false,
    riceCooker: { enabled: false },
  },
  {
    id: "sa-a",
    title: "Golden Coconut Chicken Rice 椰香鸡饭 (Reiskocher)",
    desc: "Reis, Hühnchen und Erbsen dämpfen in einer aromatischen Kurkuma-Kokos-Brühe.",
    story: "Ein asiatisch-karibisches Crossover. Die Kokosmilch macht den Reis unfassbar cremig, das Kurkuma färbt ihn leuchtend gelb. Hühnchen gart zart mit.",
    target: "≈82 g KH (2 P.) · Protein ≈30 g p. P.",
    ingredients: [
      "Reis (roh) 120 g",
      "Hähnchenbrust (gewürfelt) 200 g",
      "Kokosmilch (fettarm) 100 ml",
      "Hühnerbrühe 150 ml",
      "Kurkuma 1/2 TL",
      "Erbsen (TK) 50 g"
    ],
    steps: [
      "Reis, Kokosmilch, Brühe und Kurkuma in den Topf. Gut verrühren.",
      "Hähnchenwürfel oben auflegen.",
      "Start drücken. In den letzten 5 Minuten die Erbsen dazugeben.",
      "Alles gut durchmischen."
    ],
    checks: "Balanced ✓ · Schwangerschaft ✓ (Huhn gart sicher durch)",
    swaps: "Hähnchen ↔ Weißfisch",
    side: "Ein Spritzer Limettensaft.",
    remind: true,
    riceCooker: { enabled: true, program: "Mixed / White Rice", water: "Brühe+Kokos (Standardmenge)", notes: "Kurkuma färbt alles intensiv gelb." },
  },

  // SONNTAG
  {
    id: "so-f",
    title: "Banana Split Oatmeal 🍌🍫",
    desc: "Ein Sonntags-Frühstück, das wie ein Dessert aussieht. Haferbrei mit Banane und Kakaonibs.",
    story: "Wir halbieren die Banane längs (wie beim Banana Split) und braten sie vielleicht sogar kurz an. Darunter cremiger Porridge. Ein Fest!",
    target: "≈75 g KH (2 P.) · Protein ≈15 g p. P.",
    ingredients: [
      "Haferflocken 100 g",
      "Milch 400 ml",
      "Banane 1 Stück",
      "Kakaonibs (oder dunkle Schokolade) 1 EL",
      "Joghurt 2 EL"
    ],
    steps: [
      "Haferflocken in Milch aufkochen, bis der Brei cremig ist.",
      "Banane längs halbieren (wer mag: in der Pfanne kurz anbraten).",
      "Oatmeal in Schüsseln geben, Bananenhälften darauflegen.",
      "Mit Joghurt und Kakaonibs garnieren."
    ],
    checks: "Balanced ✓ · Schwangerschaft ✓",
    swaps: "Kakaonibs ↔ Walnüsse",
    side: "Kaffee.",
    remind: true,
    riceCooker: { enabled: false },
  },
  {
    id: "so-m",
    title: "Gnocchi Caprese (Pfanne)",
    desc: "Ein Blitz-Mittagessen: Gnocchi in der Pfanne angebraten mit Kirschtomaten und Mozzarella.",
    story: "Wenn sonntags die Lust zum Kochen fehlt: Gnocchi aus der Packung direkt in die Pfanne. Die Tomaten platzen auf und bilden mit dem Mozzarella eine Sauce.",
    target: "≈85 g KH (2 P.) · Protein ≈18 g p. P.",
    ingredients: [
      "Gnocchi 300 g",
      "Cherrytomaten 200 g",
      "Mozzarella (pasteurisiert) 100 g",
      "Olivenöl 1 EL",
      "Knoblauch 1 Zehe",
      "Basilikum"
    ],
    steps: [
      "Gnocchi in etwas Olivenöl anbraten, bis sie leicht Farbe bekommen.",
      "Knoblauch und ganze Cherrytomaten dazugeben. Braten, bis die Tomaten aufplatzen.",
      "Pfanne vom Herd nehmen. Mozzarella in Stücken unterheben, bis er zieht.",
      "Mit Basilikum servieren."
    ],
    checks: "Balanced ✓ · Schwangerschaft ✓ (Käse aus pasteurisierter Milch)",
    swaps: "Gnocchi ↔ Schupfnudeln",
    side: "-",
    remind: false,
    riceCooker: { enabled: false },
  },
  {
    id: "so-a",
    title: "Jambalaya (Reiskocher-Edition)",
    desc: "Südstaaten-Soulfood. Reis, Hühnchen, Wurst und Paprika garen in einer Cajun-Brühe.",
    story: "New Orleans Flair aus dem Reiskocher! Das Geheimnis sind Paprika, Tomatenmark und eine rauchige Wurst. Der Reis saugt diese Aromenwand komplett auf.",
    target: "≈84 g KH (2 P.) · Protein ≈30 g p. P.",
    ingredients: [
      "Reis (roh) 120 g",
      "Hähnchenbrust (gewürfelt) 100 g",
      "Räucherwurst (Cabanossi, in Scheiben) 50 g",
      "Paprika (gewürfelt) 1 Stück",
      "Tomatenmark 1 EL",
      "Hühnerbrühe 240 ml"
    ],
    steps: [
      "Reis, Brühe, Tomatenmark und Paprika im Reiskocher gut mischen.",
      "Hähnchen und Wurstscheiben oben auflegen.",
      "Start drücken.",
      "Nach dem Kochen kräftig durchrühren. (Optional mit Paprika/Cajun-Gewürz nachschärfen)."
    ],
    checks: "Balanced ✓ · Schwangerschaft ✓ (Fleisch/Wurst kocht auf >80°C sicher durch)",
    swaps: "Wurst ↔ Nur Hähnchen (für weniger Fett)",
    side: "Ein grüner Salat.",
    remind: true,
    riceCooker: { enabled: true, program: "Mixed / White Rice", water: "Brühe (Standard)", notes: "Wurst gibt viel Geschmack und etwas Fett ab." },
  },
];

export default function Woche16DE() {
  return (
    <PlanTemplate
      meta={meta}
      data={DATA}
      dayNames={DAY_NAME_DE}
      uiTitles={UI_TITLES}
      subtitle="Neue Virale Hacks 🔥 · Abwechslung pur · Reiskocher · Balanced"
      heroChips={["Woche 16", "Neue Virale Trends & Wohlfühlküche", "Täglich 1× 🍚 Reiskocher"]}
    />
  );
}

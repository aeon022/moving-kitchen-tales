/*
  Moving Kitchen Tales – Woche 18 (Start: 2026-04-27)
  Status: KOMPLETT & FUNKTIONSFÄHIG (Alle 21 Rezepte)
  Fokus: Virale Airfryer-Hacks, Reiskocher-Magie, CN/JP/KR + EU Crossover.
*/

import React from "react";
import PlanTemplate from "../PlanTemplate";

export const meta = {
  title: "Woche 18",
  startDate: "2026-04-27",
  id: "woche-18-2026-04-27",
  lang: "de",
  sidebar: "Woche 18 (2026-04-27)",
};

const DAY_NAME_DE = {
  mo: "Montag (2026-04-27)",
  di: "Dienstag (2026-04-28)",
  mi: "Mittwoch (2026-04-29)",
  do: "Donnerstag (2026-04-30)",
  fr: "Freitag (2026-05-01)",
  sa: "Samstag (2026-05-02)",
  so: "Sonntag (2026-05-03)",
};

const UI_TITLES = {
  main: "Rezepte Woche 18",
  list: "Einkaufsliste Woche 18",
};

export const DATA = [
  // MONTAG
  {
    id: "mo-f",
    title: "Viral Grated Apple Toast 🍎",
    isViral: true,
    desc: "Geriebener Apfel mit Zimt auf einem Toast, im Airfryer knusprig gebacken.",
    story: "Ein grandioser Frühstücks-Trend. Durch das Reiben karamellisiert der Apfel im Airfryer fast wie eine schnelle Apfeltarte. Mit etwas Magerquark ein hervorragender Start in den Tag.",
    target: "≈65 g KH (2 P.) · Protein ≈15 g p. P.",
    ingredients: [
      "Vollkorn-Toast 4 Scheiben",
      "Apfel 1 Stück",
      "Zimt 1 TL",
      "Quark (Magerstufe) 4 EL",
      "Agavendicksaft 1 TL"
    ],
    steps: [
      "Apfel schälen und grob reiben. Mit Zimt und etwas Agavendicksaft mischen.",
      "Toastscheiben mit Magerquark bestreichen, die Apfelmasse darauf verteilen.",
      "Im Airfryer bei 180°C ca. 7-9 Min backen, bis der Apfel weich ist und duftet."
    ],
    checks: "Balanced ✓ · Diabetes ✓ (Komplexe KH & Ballaststoffe) · Schwangerschaft ✓",
    swaps: "Quark ↔ Frischkäse",
    side: "Kaffee oder Kräutertee.",
    remind: true,
    riceCooker: { enabled: false },
  },
  {
    id: "mo-m",
    title: "Beef Bulgogi Udon 불고기 우동",
    desc: "Dicke Udon-Nudeln im Wok gebraten mit süß-würzigem Rindfleisch und Karotten.",
    story: "Koreanisches Bulgogi-Rindfleisch ist weltberühmt. Zusammen mit japanischen Udon-Nudeln entsteht eine Textur, die absolut fantastisch ist und blitzschnell auf dem Teller steht.",
    target: "≈85 g KH (2 P.) · Protein ≈28 g p. P.",
    ingredients: [
      "Udon-Nudeln (vorgegart) 400 g",
      "Rindfleisch (sehr feine Streifen) 200 g",
      "Karotte (in dünnen Stiften) 100 g",
      "Sojasauce 3 EL",
      "Agavendicksaft 1 EL",
      "Knoblauch 1 Zehe"
    ],
    steps: [
      "Rindfleisch mit Sojasauce, Agave und Knoblauch kurz marinieren.",
      "Im heißen Wok scharf anbraten (komplett durchgaren!). Karottenstifte dazugeben.",
      "Die vorgegarten Udon-Nudeln (vorher kurz heiß abspülen) in den Wok geben.",
      "Alles 3 Minuten pfannenrühren, bis die Nudeln die Sauce aufsaugen."
    ],
    checks: "Balanced ✓ · Schwangerschaft ✓ (Rindfleisch GANZ durchbraten) · Diabetes ✓",
    swaps: "Rindfleisch ↔ Schweinegeschnetzeltes",
    side: "Ein paar Frühlingszwiebelringe.",
    remind: false,
    riceCooker: { enabled: false },
  },
  {
    id: "mo-a",
    title: "Sausage & Shiitake Rice 香菇腊肠焖饭 (Reiskocher)",
    desc: "Ein tief-aromatischer Reistopf mit Räucherwurst und getrockneten Pilzen.",
    story: "Ein Klassiker aus der südchinesischen Küche. Die getrockneten Pilze bringen ein extremes Umami, während die Wurst ihr Aroma an den Reis abgibt. Ein geniales One-Pot-Gericht.",
    target: "≈80 g KH (2 P.) · Protein ≈22 g p. P.",
    ingredients: [
      "Reis (roh) 120 g",
      "Räucherwurst (Cabanossi) 100 g",
      "Shiitake-Pilze (getrocknet) 20 g",
      "Sojasauce 2 EL",
      "Gemüsebrühe 240 ml",
      "Pak Choi 150 g"
    ],
    steps: [
      "Shiitake-Pilze in heißem Wasser 15 Min einweichen, dann in Streifen schneiden (Pilzwasser aufheben!).",
      "Wurst in Scheiben schneiden. Reis, Brühe, Sojasauce, Pilze und Wurst in den Reiskocher.",
      "Start drücken. In den letzten 5 Minuten den Pak Choi in den Dämpfaufsatz legen.",
      "Nach dem Kochen alles mischen."
    ],
    checks: "Balanced ✓ · Schwangerschaft ✓ (Wurst dampft sicher auf >80°C durch)",
    swaps: "Räucherwurst ↔ Gebratener Tofu",
    side: "Gedämpfter Pak Choi.",
    remind: true,
    riceCooker: { enabled: true, program: "Mixed / White Rice", water: "Brühe + Pilzwasser (Standard)", notes: "Pilzwasser bringt extrem viel Geschmack." },
  },

  // DIENSTAG
  {
    id: "di-f",
    title: "Spinat-Feta Omelett Wrap",
    desc: "Ein Vollkorn-Wrap, direkt in der Pfanne mit einem Spinat-Omelett verbunden.",
    story: "Ein großartiger Hack, um Rührei ohne Kleckern mitzunehmen oder warm zu genießen. Der Wrap verbindet sich beim Braten fest mit dem Ei.",
    target: "≈60 g KH (2 P.) · Protein ≈22 g p. P.",
    ingredients: [
      "Vollkorn-Tortillas 2 Stück",
      "Eier 4 Stück",
      "Spinat (frisch) 50 g",
      "Feta (pasteurisiert) 50 g",
      "Tomaten (gewürfelt) 50 g"
    ],
    steps: [
      "Eier in einer Schüssel mit Spinat, Feta und Tomaten verquirlen.",
      "Die Hälfte der Eimasse in eine geölte Pfanne geben. Sofort einen Wrap darauflegen und andrücken.",
      "Braten, bis das Ei vollständig gestockt ist (Deckel hilft!). Wenden und die andere Seite kurz anrösten.",
      "Aus der Pfanne nehmen, rollen und halbieren. Mit dem zweiten Wrap wiederholen."
    ],
    checks: "Balanced ✓ · Schwangerschaft ✓ (Ei komplett durchgebraten, Käse pasteurisiert)",
    swaps: "Feta ↔ Gouda",
    side: "Ein Glas Orangensaft.",
    remind: true,
    riceCooker: { enabled: false },
  },
  {
    id: "di-m",
    title: "Airfryer Tofu Katsu 豆腐カツ",
    desc: "Außen kross, innen weich. Panko-panierter Tofu, fettarm im Airfryer gebacken.",
    story: "Tonkatsu (Schweineschnitzel) ist großartig, aber Tofu Katsu ist eine geniale vegetarische Alternative. Das Panko sorgt im Airfryer für den legendären Crunch.",
    target: "≈85 g KH (2 P.) · Protein ≈22 g p. P.",
    ingredients: [
      "Fester Tofu 300 g",
      "Panko (Paniermehl) 50 g",
      "Mehl & Ei (für die Panierstraße)",
      "Tonkatsu-Sauce 3 EL",
      "Reis (gekocht) 150 g",
      "Weißkohl (sehr fein gehobelt) 100 g"
    ],
    steps: [
      "Tofu in ca. 1,5 cm dicke Scheiben schneiden. Abtupfen.",
      "In Mehl, Ei und Panko wenden. Mit etwas Öl besprühen.",
      "Im Airfryer bei 200°C ca. 15 Min backen, bis er goldbraun ist.",
      "Tofu in Streifen schneiden. Auf einem Berg Weißkohl mit Reis servieren, kräftig mit Sauce beträufeln."
    ],
    checks: "Balanced ✓ · Schwangerschaft ✓ (Ei in der Panade gart komplett durch)",
    swaps: "Tofu ↔ Hähnchenbrust",
    side: "Roher Weißkohl (sehr fein!).",
    remind: false,
    riceCooker: { enabled: false },
  },
  {
    id: "di-a",
    title: "Whole Tomato & Egg Rice 番茄鸡蛋焖饭 (Reiskocher)",
    isViral: true,
    desc: "Der asiatische 'Whole Tomato' Trend kombiniert mit Ei und Reis.",
    story: "Die Tomate schmilzt und bildet eine natürliche süß-saure Sauce. Das Ei stockt sanft in der Hitze. Eine geniale Reiskocher-Variation des Pfannenklassikers.",
    target: "≈82 g KH (2 P.) · Protein ≈18 g p. P.",
    ingredients: [
      "Reis (roh) 120 g",
      "Tomate (groß) 1 Stück",
      "Eier 3 Stück",
      "Sojasauce 2 EL",
      "Gemüsebrühe 240 ml",
      "Frühlingszwiebel 10 g"
    ],
    steps: [
      "Reis, Brühe und Sojasauce in den Topf geben.",
      "Tomate kreuzweise tief einschneiden, in die Mitte setzen. Start drücken.",
      "Ca. 8 Min vor Ende (wenn das Wasser fast verdampft ist), die leicht verquirlten Eier über den Reis gießen.",
      "Nach dem Kochen die Tomate zerdrücken, Eier grob zerteilen und alles vermengen."
    ],
    checks: "Balanced ✓ · Schwangerschaft ✓ (Eier dämpfen komplett durch) · Diabetes ✓",
    swaps: "Eier ↔ Hähnchenwürfel (von Anfang an mitgaren)",
    side: "Ein Schälchen Kimchi (mild).",
    remind: true,
    riceCooker: { enabled: true, program: "White Rice / Mixed", water: "Brühe (etwas weniger wg. Tomate)", notes: "Tomate gut zerdrücken." },
  },

  // MITTWOCH
  {
    id: "mi-f",
    title: "Ingwer-Hack-Congee 姜丝肉末粥 (Reiskocher)",
    desc: "Ein extrem feiner, milder Reisbrei mit magerem Schweinehack. Perfekt für den Magen.",
    story: "In China ist Congee das Frühstück der Champions. Das magere Hackfleisch gart direkt in der Brühe, während der Ingwer den Kreislauf aufwärmt.",
    target: "≈70 g KH (2 P.) · Protein ≈22 g p. P.",
    ingredients: [
      "Reis (roh) 80 g",
      "Hühnerbrühe 800 ml",
      "Schweinehack (mager) 150 g",
      "Ingwer (feine Streifen) 10 g",
      "Sojasauce 1 EL",
      "Frühlingszwiebel 10 g"
    ],
    steps: [
      "Hackfleisch mit der Sojasauce mischen und auflockern.",
      "Reis und Brühe in den Reiskocher geben (Porridge Modus, ca. 50 Min).",
      "In den letzten 15 Minuten das Hackfleisch und den Ingwer hinzufügen und SICHER durchgaren lassen.",
      "Mit Frühlingszwiebeln garnieren."
    ],
    checks: "Balanced ✓ · Schwangerschaft ✓ (Schweinehack komplett durchkochen!)",
    swaps: "Schweinehack ↔ Hähnchenhack",
    side: "Tee.",
    remind: true,
    riceCooker: { enabled: true, program: "Porridge / Congee", water: "1:10 Ratio", notes: "Hackfleisch nicht am Stück reinwerfen." },
  },
  {
    id: "mi-m",
    title: "Zucchini-Ricotta Gnocchi (Pfanne)",
    desc: "Ein schnelles Mittagessen: Gnocchi geschwenkt in cremiger Ricotta-Zucchini-Sauce.",
    story: "Italienische Mamma-Vibes! Der Ricotta schmilzt in der Pfanne leicht an und umhüllt die Gnocchi, während die geriebene Zucchini für Leichtigkeit sorgt.",
    target: "≈85 g KH (2 P.) · Protein ≈18 g p. P.",
    ingredients: [
      "Gnocchi (Kühlregal) 300 g",
      "Zucchini 150 g",
      "Ricotta (pasteurisiert) 100 g",
      "Knoblauch 1 Zehe",
      "Olivenöl 1 EL",
      "Parmesan 20 g"
    ],
    steps: [
      "Gnocchi in kochendem Wasser garen.",
      "Zucchini grob raspeln und mit Knoblauch in Öl anbraten, bis sie weich ist.",
      "Gnocchi und etwas Nudelwasser dazugeben.",
      "Pfanne vom Herd nehmen, Ricotta und Parmesan unterrühren, bis es eine cremige Sauce ergibt."
    ],
    checks: "Balanced ✓ · Schwangerschaft ✓ (Käse pasteurisiert)",
    swaps: "Gnocchi ↔ Vollkorn-Penne",
    side: "-",
    remind: false,
    riceCooker: { enabled: false },
  },
  {
    id: "mi-a",
    title: "San Bei Ji 三杯鸡 (Drei-Tassen-Huhn)",
    desc: "Taiwanesisches Pfannenhuhn in einer süßlich-klebrigen Soja-Sesam-Glasur (Alkoholfrei).",
    story: "Der Name 'Drei Tassen' steht für die gleiche Menge Sojasauce, Reiswein und Sesamöl. Für eine sichere Variante lassen wir den Alkohol weg und nutzen Brühe und Apfelsaft – der Geschmack bleibt gigantisch gut.",
    target: "≈80 g KH (2 P.) · Protein ≈32 g p. P.",
    ingredients: [
      "Hähnchenbrust oder Keule (gewürfelt) 250 g",
      "Sesamöl 2 EL",
      "Sojasauce 2 EL",
      "Hühnerbrühe (oder naturtrüber Apfelsaft) 2 EL",
      "Knoblauch 2 Zehen & Ingwer 5 g",
      "Reis (gekocht) 150 g"
    ],
    steps: [
      "Sesamöl im Wok erhitzen, Hähnchen, Ingwer und Knoblauch scharf anbraten (gut durchgaren!).",
      "Sojasauce und Brühe/Saft dazugeben.",
      "Hitze reduzieren und einköcheln lassen, bis die Sauce klebrig wird und das Fleisch glänzend umhüllt.",
      "Mit Reis servieren."
    ],
    checks: "Balanced ✓ · Schwangerschaft ✓ (Kein Alkohol, Fleisch durch) · Diabetes ✓",
    swaps: "Hähnchen ↔ Fester Tofu",
    side: "Gedämpfter Brokkoli.",
    remind: true,
    riceCooker: { enabled: false },
  },

  // DONNERSTAG
  {
    id: "do-f",
    title: "Bánh Tráng Nướng (Airfryer Reispapier-Ei)",
    isViral: true,
    desc: "Vietnamesische Reispapier-Pizza aus dem Airfryer. Knusprig mit gestocktem Ei.",
    story: "Ein Streetfood-Held. Das Reispapier wird beim Erhitzen wie ein knuspriger Taco. Das Ei darauf wird im Airfryer sicher und schnell fest.",
    target: "≈65 g KH (2 P.) · Protein ≈18 g p. P.",
    ingredients: [
      "Reispapier 4 Blatt",
      "Eier 2 Stück",
      "Frühlingszwiebeln 20 g",
      "Sriracha-Mayo (pasteurisiert) 1 EL",
      "Vollkorn-Toast (als Beilage) 2 Scheiben"
    ],
    steps: [
      "Ein Reispapier in den Airfryer legen. Ein halbes, verquirltes Ei darauf verstreichen, Frühlingszwiebeln drüber.",
      "Bei 180°C ca. 4-5 Minuten backen, bis das Ei vollkommen fest und der Rand knusprig ist.",
      "Zusammenklappen, mit Mayo toppen. Toast dazu."
    ],
    checks: "Balanced ✓ · Schwangerschaft ✓ (Ei komplett durch, Mayo aus Tube)",
    swaps: "Reispapier ↔ Tortilla-Wrap",
    side: "Eine Tasse warmer Tee.",
    remind: true,
    riceCooker: { enabled: false },
  },
  {
    id: "do-m",
    title: "Gochujang-Sahne Penne 고추장 파스타",
    isViral: true,
    desc: "Vollkorn-Nudeln in einer koreanisch-italienischen Fusions-Sauce.",
    story: "Ein Internet-Phänomen! Die süßlich-würzige koreanische Chilipaste (Gochujang) vermischt mit etwas Sahne ergibt eine unschlagbare Rosé-Sauce.",
    target: "≈85 g KH (2 P.) · Protein ≈18 g p. P.",
    ingredients: [
      "Vollkorn-Penne 130 g",
      "Gochujang (milde Paste) 1 EL",
      "Kochsahne 100 ml",
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
    checks: "Balanced ✓ · Schwangerschaft ✓ (Käse pasteurisiert, Sahne erhitzt) · Diabetes ✓",
    swaps: "Gochujang ↔ Tomatenmark (falls es komplett mild sein soll)",
    side: "-",
    remind: false,
    riceCooker: { enabled: false },
  },
  {
    id: "do-a",
    title: "Lachs & Edamame Takikomi Gohan 鮭と枝豆のご飯",
    desc: "Lachsfilet und proteinreiche Edamame dämpfen schonend zusammen im Reis.",
    story: "Dieses Gericht vereint alle Vorzüge der japanischen Hausmannskost. Der Lachs wird zart, die Bohnen geben Biss, und der Reis strotzt vor Umami.",
    target: "≈80 g KH (2 P.) · Protein ≈28 g p. P.",
    ingredients: [
      "Reis (roh) 120 g",
      "Lachsfilet 200 g",
      "Edamame (geschält, TK aufgetaut) 80 g",
      "Sojasauce 2 EL",
      "Mirin 1 EL",
      "Dashi oder Gemüsebrühe 240 ml"
    ],
    steps: [
      "Reis und Brühe in den Topf. Soja und Mirin dazu.",
      "Lachs am Stück oben auflegen. Start drücken.",
      "Nach dem Kochen die Edamame in den heißen Reis geben.",
      "Lachs zerteilen und alles sorgfältig durchmischen."
    ],
    checks: "Balanced ✓ · Schwangerschaft ✓ (Lachs gart im Topf >80°C komplett durch) · Diabetes ✓",
    swaps: "Lachs ↔ Weißfisch",
    side: "Gurkensalat.",
    remind: true,
    riceCooker: { enabled: true, program: "Mixed / White Rice", water: "Dashi (Standard)", notes: "Edamame erst am Ende rein, sonst werden sie blass." },
  },

  // FREITAG
  {
    id: "fr-f",
    title: "Tamagoyaki Sandwich たまごサンド",
    desc: "Ein dicker, saftiger Omelett-Block zwischen zwei knusprigen Toastscheiben.",
    story: "Das japanische Eiersandwich ist Legende. Da wir das Ei in der Schwangerschaft komplett durchgaren müssen, backen wir den Ei-Block einfach in einer kleinen, eckigen Form im Airfryer!",
    target: "≈65 g KH (2 P.) · Protein ≈20 g p. P.",
    ingredients: [
      "Vollkorn-Toast 4 Scheiben",
      "Eier 4 Stück",
      "Milch 20 ml",
      "Sojasauce 1 TL",
      "Mayonnaise (pasteurisiert) 1 EL"
    ],
    steps: [
      "Eier, Milch und Sojasauce gut verquirlen.",
      "In eine kleine, geölte feuerfeste Form gießen (ca. so groß wie der Toast).",
      "Im Airfryer bei 160°C ca. 12-15 Min backen, bis der Ei-Block KOMPLETT durchgestockt ist.",
      "Toast mit Mayo bestreichen, den Ei-Block dazwischenlegen und warm servieren."
    ],
    checks: "Balanced ✓ · Schwangerschaft ✓ (Ei komplett fest, Mayo aus Tube)",
    swaps: "Mayo ↔ Frischkäse",
    side: "Kaffee oder grüner Tee.",
    remind: true,
    riceCooker: { enabled: false },
  },
  {
    id: "fr-m",
    title: "Viral Crispy Quinoa Salad",
    isViral: true,
    desc: "Quinoa wird im Airfryer extrem knusprig gebacken und dann über einen Salat gestreut.",
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
      "Gekochten Quinoa mit Olivenöl mischen. Im Airfryer bei 190°C ca. 10-15 Min rösten, bis er knusprig wird. (Vorsicht, fliegt leicht rum).",
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
    id: "fr-a",
    title: "Curry-Hühnchen-Pilaf 咖喱鸡肉饭 (Reiskocher)",
    desc: "Reis, der mit mildem Currypulver, Hühnchen und Erbsen gedämpft wird.",
    story: "Ein Klassiker aus den Yoshoku-Küchen Japans. Das Currypulver bringt Wärme und eine tolle Farbe, das Hühnchen gart buttrig weich.",
    target: "≈82 g KH (2 P.) · Protein ≈30 g p. P.",
    ingredients: [
      "Reis (roh) 120 g",
      "Hähnchenbrust 200 g",
      "Erbsen (TK) 80 g",
      "Mildes Currypulver 1 TL",
      "Hühnerbrühe 240 ml",
      "Zwiebel 50 g"
    ],
    steps: [
      "Hühnchen in Würfel schneiden, Zwiebel fein hacken.",
      "Reis, Brühe, Currypulver und Zwiebel in den Topf. Gut mischen.",
      "Hühnchen und Erbsen darauflegen.",
      "Start drücken und am Ende alles durchheben."
    ],
    checks: "Balanced ✓ · Schwangerschaft ✓ (Hühnchen gart im Dampf komplett durch)",
    swaps: "Hähnchen ↔ Kichererbsen",
    side: "Ein Klecks Joghurt obendrauf.",
    remind: true,
    riceCooker: { enabled: true, program: "Mixed / White Rice", water: "Brühe (Standard)", notes: "Currypulver gut mit der Brühe verrühren." },
  },

  // SAMSTAG
  {
    id: "sa-f",
    title: "Miso-Haferbrei mit Spinat 味噌オートミール",
    desc: "Haferbrei, gekocht in Dashi, verfeinert mit Miso und frischem Spinat.",
    story: "Ein herzhaftes Frühstück am Wochenende. Die Miso-Paste liefert probiotische Kulturen und der Spinat wertvolles Eisen.",
    target: "≈65 g KH (2 P.) · Protein ≈15 g p. P.",
    ingredients: [
      "Haferflocken 100 g",
      "Dashi oder Gemüsebrühe 400 ml",
      "Miso-Paste 1 EL",
      "Spinat (frisch) 50 g",
      "Sesamöl 1 TL"
    ],
    steps: [
      "Haferflocken in Brühe einköcheln.",
      "In der letzten Minute den Spinat unterheben, bis er zusammenfällt.",
      "Vom Herd nehmen! Miso-Paste einrühren (darf nicht mehr kochen).",
      "Mit einem Spritzer Sesamöl servieren."
    ],
    checks: "Balanced ✓ · Schwangerschaft ✓ · Diabetes ✓",
    swaps: "Spinat ↔ Frühlingszwiebeln",
    side: "Ein Stück Vollkornbrot.",
    remind: true,
    riceCooker: { enabled: false },
  },
  {
    id: "sa-m",
    title: "Dan Dan Nudeln (Mild) 担担面",
    desc: "Der Sichuan-Nudelklassiker: Milde Sesam-Soja-Sauce mit gebratenem Schweinehack.",
    story: "Normalerweise schwimmt dieses Gericht in Chili-Öl. Wir fokussieren uns auf die reichhaltige Tahini-Sauce und nutzen mageres Hack für eine leichte, umamireiche Mahlzeit.",
    target: "≈85 g KH (2 P.) · Protein ≈26 g p. P.",
    ingredients: [
      "Weizennudeln 150 g",
      "Schweinehack (mager) 150 g",
      "Tahini (Sesampaste) 2 EL",
      "Sojasauce 2 EL",
      "Knoblauch 1 Zehe",
      "Pak Choi 100 g"
    ],
    steps: [
      "Hackfleisch und Knoblauch im Wok krümelig und KOMPLETT durchbraten.",
      "Tahini, Sojasauce und etwas warmes Nudelwasser zu einer dicken Sauce rühren.",
      "Nudeln und Pak Choi kochen.",
      "Nudeln in die Sauce geben, Hackfleisch darüber häufen, gut umrühren."
    ],
    checks: "Balanced ✓ · Schwangerschaft ✓ (Hack komplett durchbraten!)",
    swaps: "Schweinehack ↔ Hähnchenhack",
    side: "-",
    remind: false,
    riceCooker: { enabled: false },
  },
  {
    id: "sa-a",
    title: "Upside-Down Onion Tart (Airfryer)",
    isViral: true,
    desc: "Zwiebelringe karamellisieren unter Blätterteig im Airfryer.",
    story: "Der berühmte Tarte-Tatin-Trend! Man legt rote Zwiebeln und etwas Käse aufs Backpapier, deckt sie mit Blätterteig ab und stürzt das Ganze nach dem Backen. Großartig!",
    target: "≈65 g KH (2 P.) · Protein ≈15 g p. P.",
    ingredients: [
      "Blätterteig (Rolle) 1/2 Stück",
      "Rote Zwiebel (in Ringen) 1 Stück",
      "Feta (pasteurisiert) 40 g",
      "Balsamico-Essig 1 TL",
      "Thymian"
    ],
    steps: [
      "Blätterteig in 4 Quadrate schneiden.",
      "Auf Airfryer-Backpapier Essig-Tropfen verteilen. Zwiebelringe und Feta darauflegen.",
      "Teig-Quadrat über die Zwiebeln legen und Ränder andrücken.",
      "Im Airfryer bei 180°C ca. 10 Min backen. Vorsichtig stürzen!"
    ],
    checks: "Balanced ✓ · Schwangerschaft ✓ (Käse pasteurisiert)",
    swaps: "Zwiebel ↔ Tomatenscheiben",
    side: "Ein großer Salat mit Gurke.",
    remind: true,
    riceCooker: { enabled: false },
  },

  // SONNTAG
  {
    id: "so-f",
    title: "Matcha Pancakes 抹茶パンケーキ",
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
    id: "so-m",
    title: "Italienische Minestrone",
    desc: "Dicker, herzhafter Gemüseeintopf mit kleinen Nudeln und Bohnen.",
    story: "Die beste Art, den Kühlschrank leer zu machen. In Italien wird oft noch die harte Rinde vom Parmesan mitgekocht, das gibt einen extrem intensiven Geschmack!",
    target: "≈80 g KH (2 P.) · Protein ≈20 g p. P.",
    ingredients: [
      "Suppennudeln oder Makkaroni 80 g",
      "Weiße Bohnen (Dose, gewaschen) 100 g",
      "Zucchini, Karotte, Sellerie 200 g",
      "Passierte Tomaten 200 ml",
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
    id: "so-a",
    title: "Seafood Paella Asia-Style 海鲜烩饭 (Reiskocher)",
    desc: "Bunter Reis mit Meeresfrüchtemix und Erbsen, butterweich aus dem Reiskocher.",
    story: "Eher westlich angehaucht, aber in Japan sehr beliebt aus dem Reiskocher. Schmeckt wie Paella ohne großen Aufwand und langes Rühren.",
    target: "≈82 g KH (2 P.) · Protein ≈24 g p. P.",
    ingredients: [
      "Reis (roh) 120 g",
      "Meeresfrüchte-Mix (TK, aufgetaut) 200 g",
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
    checks: "Balanced ✓ · Schwangerschaft ✓ (Mix muss >80°C erhitzt werden - im Reiskocher kein Problem)",
    swaps: "Mix ↔ Nur Garnelen oder Hühnchen",
    side: "Kleiner Salat.",
    remind: true,
    riceCooker: { enabled: true, program: "Mixed / White Rice", water: "Brühe Standard", notes: "TK-Mix vorher gut abtropfen lassen." },
  },
];

export default function Woche18DE() {
  return (
    <PlanTemplate
      meta={meta}
      data={DATA}
      dayNames={DAY_NAME_DE}
      uiTitles={UI_TITLES}
      subtitle="Virale Airfryer-Hacks 🔥 · Reiskocher-Magie · Balanced"
      heroChips={["Woche 18", "Neue Virale Trends & Wohlfühlküche", "Täglich 1× 🍚 Reiskocher"]}
    />
  );
}

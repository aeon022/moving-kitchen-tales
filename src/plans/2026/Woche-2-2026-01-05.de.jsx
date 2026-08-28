/*
  Moving Kitchen Tales – Woche 2 (Start: 2026-01-05)
  Fixes:
  - Links: Funktionieren jetzt mit HashRouter (scrollen statt navigieren).
  - Titel: Werden in Platzhaltern nicht mehr abgeschnitten.
  - Design: 1:1 Woche 1 (Verläufe, Schatten).
  - Inhalt: Asiatisch, Viral/Trendy, Reiskocher-Sektion am Ende.
*/

import React from "react";
import PlanTemplate from "../PlanTemplate";

export const meta = {
  title: "Woche 2",
  startDate: "2026-01-05",
  id: "woche-2-2026-01-05",
  lang: "de",
  sidebar: "Woche 2 (2026-01-05)",
};

const DAY_NAME_DE = {
  mo: "Montag (2026-01-05)",
  di: "Dienstag (2026-01-06)",
  mi: "Mittwoch (2026-01-07)",
  do: "Donnerstag (2026-01-08)",
  fr: "Freitag (2026-01-09)",
  sa: "Samstag (2026-01-10)",
  so: "Sonntag (2026-01-11)",
};

const UI_TITLES = {
  main: "Rezepte Woche 2",
  list: "Einkaufsliste Woche 2",
};

export const DATA = [
  // MONTAG
  {
    id: "mo-f",
    title: "Dakjuk 닭죽 (Koreanischer Hühner-Brei)",
    desc: "Ein sehr bekömmlicher, wärmender Start. Huhn wird direkt mit dem Reis weichgekocht.",
    story: "In Korea ein klassisches Gericht zur Stärkung. Sehr mild und magenfreundlich.",
    target: "≈65 g Kohlenhydrate (2 Pers.) · Proteinreich",
    ingredients: [
      "Reis (roh) 80 g",
      "Wasser 800 ml",
      "Hähnchenbrust 150 g",
      "Karotte 80 g",
      "Zucchini 80 g",
      "Knoblauch 1 Zehe",
      "Sesamöl 5 ml",
      "Frühlingszwiebel 10 g"
    ],
    steps: [
      "Reis waschen. Huhn in kleine Stücke schneiden.",
      "Alle Zutaten (außer Sesamöl/Zwiebel) in den Reiskocher geben.",
      "Programm 'Porridge' oder 'Congee' starten.",
      "Am Ende mit Sesamöl und Frühlingszwiebeln verfeinern."
    ],
    checks: "Magenfreundlich ✓ · Protein ✓ · Huhn durchgegart ✓",
    swaps: "Huhn ↔ Tofu (erst am Ende zugeben)",
    side: "Warmes Wasser oder Ingwertee.",
    remind: true,
    riceCooker: {
      enabled: true,
      program: "Porridge / Congee",
      water: "1:9 bis 1:10 Verhältnis",
      notes: "Sehr weich und bekömmlich."
    },
  },
  {
    id: "mo-m",
    title: "Soba Salad 蕎麦サラダ (Buchweizennudeln)",
    desc: "Soba-Nudeln mit viel knackigem Gemüse und einem leichten Dressing.",
    story: "Soba hat einen niedrigeren glykämischen Index als Weizennudeln.",
    target: "≈75 g KH · Ballaststoffreich",
    ingredients: [
      "Soba (trocken) 100 g",
      "Gurke 150 g",
      "Karotte 100 g",
      "Edamame (geschält, TK) 100 g",
      "Sojasauce natriumarm 20 ml",
      "Reisessig 10 ml",
      "Sesamöl 10 ml",
      "Sesam 5 g"
    ],
    steps: [
      "Soba nach Packung kochen, kalt abspülen.",
      "Gemüse in feine Stifte schneiden. Edamame kurz blanchieren.",
      "Dressing anrühren und alles vermengen."
    ],
    checks: "Leicht ✓ · Vegan möglich ✓",
    swaps: "Edamame ↔ Tofuwürfel",
    side: "Misosuppe (instant, mild)",
    remind: false,
    riceCooker: { enabled: false },
  },
  {
    id: "mo-a",
    title: "Báicài Chǎo Ròu 白菜炒肉 (Chinakohl-Hack-Pfanne)",
    desc: "Rinderhack (mager) mit viel Chinakohl, geschmort in einer milden Austernsauce-Basis.",
    story: "Chinakohl ist sehr gut verträglich und liefert Volumen ohne viele Kalorien.",
    target: "Low Carb Option möglich · Proteinreich",
    ingredients: [
      "Rinderhack mager 200 g",
      "Chinakohl 300 g",
      "Karotte 100 g",
      "Ingwer 5 g",
      "Sojasauce natriumarm 15 ml",
      "Austernsauce 10 ml",
      "Reis (gekocht) 200 g (als Beilage)"
    ],
    steps: [
      "Hackfleisch krümelig braten (ganz durch!).",
      "Gemüse und Ingwer dazu, kurz mitbraten.",
      "Saucen und etwas Wasser dazu, 10 Min schmoren bis Kohl weich ist.",
      "Mit Reis servieren."
    ],
    checks: "Hackfleisch durch ✓ · Chinakohl gut verdaulich ✓",
    swaps: "Rind ↔ Pute; Austernsauce ↔ Veggie-Stir-Fry-Sauce",
    side: "-",
    remind: true,
    riceCooker: { enabled: false },
  },

  // DIENSTAG
  {
    id: "di-f",
    title: "Tamagoyaki 卵焼き (Gefaltetes Omelett)",
    desc: "Klassisches japanisches Frühstück: Das Ei wird hier komplett durchgegart.",
    story: "Proteinreich und macht lange satt.",
    target: "Proteinbetont",
    ingredients: [
      "Eier 4 Stück",
      "Karotte (gerieben) 30 g",
      "Sojasauce natriumarm 5 ml",
      "Dashi (oder Wasser) 20 ml",
      "Reis (gekocht) 150 g",
      "Öl zum Braten"
    ],
    steps: [
      "Eier verquirlen, Karottenraspel und Würze dazu.",
      "In der Pfanne schichtweise braten und rollen (Sicherstellen, dass es innen fest ist).",
      "In Scheiben schneiden und zum Reis essen."
    ],
    checks: "Ei vollständig gestockt (Schwangerschaft) ✓",
    swaps: "Dashi ↔ Gemüsebrühe",
    side: "Kleine Portion Obst",
    remind: true,
    riceCooker: { enabled: false },
  },
  {
    id: "di-m",
    title: "Hainanese Chicken Rice 海南鸡饭 (Reiskocher)",
    desc: "Das Huhn dämpft auf dem Reis und gibt Geschmack ab. Ingwer-Knoblauch-Note.",
    story: "Ein absoluter Klassiker, hier in der One-Pot-Variante.",
    target: "Fettarm (wenn Haut weg) · Glutenfrei (mit Tamari)",
    ingredients: [
      "Reis (roh) 120 g",
      "Hähnchenbrust 250 g",
      "Ingwer 15 g",
      "Knoblauch 2 Zehen",
      "Frühlingszwiebel 20 g",
      "Hühnerbrühe 200 ml (statt Wasser)",
      "Gurke 100 g (Deko)"
    ],
    steps: [
      "Reis waschen, mit Brühe in den Topf.",
      "Ingwer und Knoblauch fein hacken, dazugeben.",
      "Hähnchenbrust obenauf legen (im Ganzen).",
      "Kochen 'White Rice'. Danach Huhn prüfen (muss weiß sein), schneiden.",
      "Mit Gurkenscheiben servieren."
    ],
    checks: "Huhn >75°C Kerntemperatur ✓ · Keine rohen Saucen ✓",
    swaps: "Brust ↔ Keule (ohne Knochen)",
    side: "Chilisauce (optional/weglassen)",
    remind: false,
    riceCooker: {
      enabled: true,
      program: "White Rice / Mixed",
      water: "Wie gewohnt für Reis (Brühe statt Wasser)",
      notes: "Huhn wird extrem zart."
    },
  },
  {
    id: "di-a",
    title: "Dòufu Mógū Chǎo 豆腐蘑菇炒 (Tofu-Pilz-Pfanne)",
    desc: "Schnell, vegan und leicht. Verschiedene Pilze sorgen für Biss.",
    story: "Perfekt für den Abend, da nicht zu schwer.",
    target: "Low Carb (ohne Reis)",
    ingredients: [
      "Tofu fest 200 g",
      "Champignons 150 g",
      "Shiitake 50 g",
      "Pak Choi 150 g",
      "Sojasauce natriumarm 15 ml",
      "Sesamöl 5 ml",
      "Reis (gekocht) 150 g"
    ],
    steps: [
      "Tofu würfeln und anbraten.",
      "Pilze dazu, scharf anbraten.",
      "Pak Choi und Sauce dazu, kurz dünsten.",
      "Mit Reis servieren."
    ],
    checks: "Vegan ✓ · Pilze gut durchgaren (Verdaulichkeit) ✓",
    swaps: "Pilze ↔ Zucchini",
    side: "-",
    remind: true,
    riceCooker: { enabled: false },
  },

  // MITTWOCH
  {
    id: "mi-f",
    title: "Mushi-Pan 蒸しパン (Süßkartoffel-Brot)",
    desc: "Ein gedämpfter 'Kuchen' aus dem Reiskocher oder Topf, wenig Zucker.",
    story: "In Japan ein beliebter Snack, hier als Frühstück.",
    target: "Mäßig KH",
    ingredients: [
      "Mehl (Dinkel oder Weizen) 100 g",
      "Backpulver 1 TL",
      "Ei 1 Stück",
      "Milch 60 ml",
      "Süßkartoffel (roh, klein gewürfelt) 80 g",
      "Honig 10 g"
    ],
    steps: [
      "Teig anrühren, Süßkartoffelwürfel unterheben.",
      "In Förmchen füllen oder direkt in den gefetteten Reiskocher-Topf.",
      "Programm 'Cake' oder 'Steam' (ca. 20 Min)."
    ],
    checks: "Ei durchgebacken/gedämpft ✓",
    swaps: "Süßkartoffel ↔ Apfel",
    side: "Glas Milch oder Sojamilch",
    remind: true,
    riceCooker: {
      enabled: true,
      program: "Cake / Steam",
      water: "Wenn Steam: Wasser bis zur Markierung",
      notes: "Zahnstocherprobe machen."
    },
  },
  {
    id: "mi-m",
    title: "Japchae 잡채 (Glasnudeln mild)",
    desc: "Koreanische Süßkartoffelglasnudeln mit viel Gemüse und Rindfleischstreifen.",
    story: "Bunt und festlich, aber hier in einer Alltagsversion.",
    target: "Glutenfrei (bei Tamari)",
    ingredients: [
      "Glasnudeln (Süßkartoffelstärke) 100 g",
      "Rindersteak (in Streifen) 100 g",
      "Spinat 100 g",
      "Karotte 80 g",
      "Zwiebel 50 g",
      "Sojasauce natriumarm 20 ml",
      "Sesamöl 10 ml",
      "Zucker/Honig 5 g"
    ],
    steps: [
      "Nudeln kochen und abspülen.",
      "Fleisch und Gemüse separat anbraten (alles gut durch).",
      "Alles in der Pfanne mischen und würzen.",
      "Sesamöl zum Schluss darüber."
    ],
    checks: "Rindfleisch well-done ✓",
    swaps: "Rind ↔ Pilze (vegan)",
    side: "Kimchi (pasteurisiert/gekauft, wegen Schwangerschaft)",
    remind: false,
    riceCooker: { enabled: false },
  },
  {
    id: "mi-a",
    title: "Qīngzhēng Yú 清蒸鱼 (Gedämpfter Fisch)",
    desc: "Ganz klassisch, leicht und gesund. Dazu Reis.",
    story: "Der Fisch bleibt saftig und die Verdauung wird nicht belastet.",
    target: "High Protein · Low Fat",
    ingredients: [
      "Weißer Fisch (Kabeljau/Seelachs) 300 g",
      "Ingwer 15 g (Stifte)",
      "Frühlingszwiebel 2 Stangen",
      "Sojasauce natriumarm 15 ml",
      "Öl 10 ml (heiß)",
      "Reis (gekocht) 150 g"
    ],
    steps: [
      "Fisch auf Teller legen, Ingwer darauf.",
      "Im Dämpfer (oder Reiskocher-Einsatz) 10-12 Min dämpfen.",
      "Flüssigkeit abgießen, Sojasauce drüber.",
      "Öl erhitzen und über die Frühlingszwiebeln auf den Fisch gießen (Zischen!)."
    ],
    checks: "Fisch durchgegart ✓ · Kein roher Fisch ✓",
    swaps: "Fisch ↔ Tofu",
    side: "Gedämpfter Brokkoli",
    remind: true,
    riceCooker: { enabled: false },
  },

  // DONNERSTAG
  {
    id: "do-f",
    title: "Sù Zhōu 粟粥 (Hirse-Brei mit Kürbis)",
    desc: "Hirse ist eisenreich und gut für die Schwangerschaft. Mit Kürbis natürlich süß.",
    story: "Ein 'Comfort Food' für den Magen.",
    target: "Eisenreich · Ballaststoffe",
    ingredients: [
      "Goldhirse 60 g",
      "Kürbis (Hokkaido) 100 g",
      "Wasser/Milch-Mix 400 ml",
      "Zimt 1 Prise",
      "Walnüsse 10 g (gehackt)"
    ],
    steps: [
      "Hirse heiß abspülen (Bitterstoffe weg).",
      "Mit Kürbiswürfeln und Flüssigkeit köcheln (ca 15 Min).",
      "Quellen lassen, Nüsse drüber."
    ],
    checks: "Hirse gut gewaschen ✓",
    swaps: "Kürbis ↔ Apfel",
    side: "-",
    remind: true,
    riceCooker: { enabled: false },
  },
  {
    id: "do-m",
    title: "Oyakodon 親子丼 (Well Done)",
    desc: "Huhn und Ei in einer süßlichen Brühe auf Reis. Wichtig: Ei komplett gestockt.",
    story: "Oyakodon heißt 'Eltern-Kind-Schüssel' (Huhn & Ei).",
    target: "Ausgewogen",
    ingredients: [
      "Hähnchenschenkel (ohne Knochen) 150 g",
      "Eier 3 Stück",
      "Zwiebel 80 g",
      "Dashi/Brühe 100 ml",
      "Sojasauce natriumarm 15 ml",
      "Reis (gekocht) 200 g"
    ],
    steps: [
      "Zwiebel in Brühe/Soja weichkochen.",
      "Huhn dazu, garen bis durch.",
      "Verquirlte Eier darüber gießen, Deckel drauf.",
      "Dämpfen bis Ei komplett fest ist (kein flüssiges Eigelb!)."
    ],
    checks: "Ei fest ✓ · Huhn durch ✓",
    swaps: "Huhn ↔ Tofu (dann aber kein Oyakodon mehr im Namen ;))",
    side: "-",
    remind: false,
    riceCooker: { enabled: false },
  },
  {
    id: "do-a",
    title: "Bāo Zǎi Fàn 煲仔饭 (Cantonese Claypot Style)",
    desc: "Reis mit mariniertem Huhn und Pilzen, zusammen gegart. One Pot Wonder.",
    story: "Normalerweise im Tontopf für Kruste, im Reiskocher für Komfort.",
    target: "One Pot Meal",
    ingredients: [
      "Reis (roh) 120 g",
      "Hähnchenbrust (gewürfelt) 150 g",
      "Shiitake (eingeweicht/frisch) 50 g",
      "Pak Choi 100 g",
      "Ingwer 5 g",
      "Sojasauce 10 ml",
      "Maisstärke 1 TL (Marinade)"
    ],
    steps: [
      "Huhn mit Soja, Stärke, Ingwer marinieren (15 Min).",
      "Reis und Wasser in den Kocher.",
      "Huhn und Pilze obenauf verteilen.",
      "Kochen 'White Rice'.",
      "5 Min vor Ende Pak Choi drauflegen (dämpfen)."
    ],
    checks: "Huhn durch ✓",
    swaps: "Pak Choi ↔ Spinat",
    side: "Klare Brühe",
    remind: true,
    riceCooker: {
      enabled: true,
      program: "White Rice",
      water: "Standard (Marinade nicht als Wasser zählen)",
      notes: "Durchmischen vor dem Servieren."
    },
  },

  // FREITAG
  {
    id: "fr-f",
    title: "Xīhóngshì Chǎo Jīdàn 西红柿炒鸡蛋 (Rührei & Tomate)",
    desc: "Klassiker: Rührei mit saftigen Tomaten, leicht gesüßt. Dazu Brot statt Reis.",
    story: "Schnellstes chinesisches Hausgericht.",
    target: "Vegetarisch",
    ingredients: [
      "Eier 3 Stück",
      "Tomaten 2 große",
      "Frühlingszwiebel 10 g",
      "Salz/Pfeffer",
      "Vollkornbrot 2 Scheiben"
    ],
    steps: [
      "Eier braten (Rührei), herausnehmen.",
      "Tomaten anbraten bis sie Saft lassen.",
      "Eier zurück, mischen, würzen.",
      "Eier müssen durch sein."
    ],
    checks: "Eier durch ✓",
    swaps: "Brot ↔ Reis",
    side: "-",
    remind: true,
    riceCooker: { enabled: false },
  },
  {
    id: "fr-m",
    title: "Takikomi Gohan 炊き込みご飯 (Lachs & Pilze)",
    desc: "Japanischer 'Mixed Rice' aus dem Reiskocher. Lachs wird mitgedämpft.",
    story: "Sehr beliebt im Herbst/Winter.",
    target: "Omega-3 (Lachs)",
    ingredients: [
      "Reis (roh) 120 g",
      "Lachsfilet 150 g (frisch/TK)",
      "Karotte 50 g",
      "Shiitake/Champignons 50 g",
      "Sojasauce 15 ml",
      "Mirin (oder Prise Zucker) 5 ml",
      "Dashi/Wasser"
    ],
    steps: [
      "Reis waschen. Wasser/Dashi bis Markierung, dann Soja dazu.",
      "Gemüsestifte und Lachsfilet obenauf legen.",
      "Kochen.",
      "Lachs zerpflücken und unter den Reis heben."
    ],
    checks: "Lachs durchgegart ✓ · Gräten entfernt ✓",
    swaps: "Lachs ↔ Hühnchen",
    side: "Misosuppe",
    remind: false,
    riceCooker: {
      enabled: true,
      program: "Mixed / White Rice",
      water: "Inkl. Würzflüssigkeit messen",
      notes: "Lachshaut vorher entfernen oder nachher abziehen."
    },
  },
  {
    id: "fr-a",
    title: "Kake Udon かけうどん (Milde Suppe mit Tofu)",
    desc: "Dicke Nudeln in klarer Brühe mit Tofuwürfeln und Spinat.",
    story: "Udon sind leicht verdaulich und wärmen.",
    target: "Leichtes Abendessen",
    ingredients: [
      "Udon (Vorgegart oder Trocken) 200 g",
      "Tofu 150 g",
      "Spinat 100 g",
      "Frühlingszwiebel",
      "Dashi/Gemüsebrühe 600 ml",
      "Sojasauce 10 ml"
    ],
    steps: [
      "Brühe aufkochen, Tofu darin erwärmen.",
      "Udon dazu (nur kurz kochen).",
      "Spinat im letzten Moment dazu.",
      "Abschmecken."
    ],
    checks: "Sehr mild ✓",
    swaps: "Tofu ↔ Gekochtes Ei",
    side: "-",
    remind: true,
    riceCooker: { enabled: false },
  },

  // SAMSTAG
  {
    id: "sa-f",
    title: "Yachaejeon 야채전 (Reis-Pfannkuchen)",
    desc: "Aus Reismehl und Gemüse, herzhaft.",
    story: "Abwechslung zum süßen Frühstück.",
    target: "Glutenfrei möglich",
    ingredients: [
      "Reismehl (Klebreis oder normal) 80 g",
      "Wasser ca. 80 ml",
      "Ei 1 Stück",
      "Zucchini (geraspelt) 50 g",
      "Karotte (geraspelt) 30 g",
      "Prise Salz"
    ],
    steps: [
      "Teig mischen, Gemüse unterheben.",
      "In Pfanne kleine Puffer backen.",
      "Durchgaren."
    ],
    checks: "Gemüse weich ✓",
    swaps: "Reismehl ↔ Weizenmehl",
    side: "Dip aus Sojasauce",
    remind: true,
    riceCooker: { enabled: false },
  },
  {
    id: "sa-m",
    title: "Bibimbap 비빔밥 (Safe Edition)",
    desc: "Reis mit verschiedenen Gemüse-Toppings und gebratenem Rind. Kein rohes Eigelb!",
    story: "Das Nationalgericht Koreas. Hier ohne scharfe Gochujang (oder nur wenig).",
    target: "Viel Gemüse",
    ingredients: [
      "Reis (gekocht) 200 g",
      "Rinderhack 100 g (gebraten)",
      "Spinat (blanchiert) 80 g",
      "Karotte (gedünstet) 80 g",
      "Sojasprossen (gekocht!) 80 g",
      "Ei (Spiegelei, durchgebraten) 2 Stk",
      "Sesamöl, Sojasauce"
    ],
    steps: [
      "Alle Toppings separat garen (Sprossen unbedingt kochen wegen Bakterien!).",
      "Auf Reis anrichten.",
      "Mit Sesamöl und Sojasauce würzen."
    ],
    checks: "Sprossen gekocht (Listerien-Schutz) ✓ · Ei hart ✓",
    swaps: "Rind ↔ Tofu",
    side: "Keine",
    remind: false,
    riceCooker: { enabled: false },
  },
  {
    id: "sa-a",
    title: "Mille-Feuille Nabe ミルフィーユ鍋 (Schichtkohl)",
    desc: "Trend-Gericht: Schichten aus Chinakohl und dünnem Schweinefleisch, im Reiskocher gedämpft.",
    story: "Sieht aus wie eine Blume ('Tausend Blätter'), super einfach und gesund.",
    target: "Viral Hit · Low Carb",
    ingredients: [
      "Chinakohl 1/2 Kopf",
      "Schweinefleisch oder Pute (dünn geschnitten) 200 g",
      "Dashi/Brühe 200 ml",
      "Ingwer Scheiben",
      "Ponzu (Zitrus-Soja) zum Dippen"
    ],
    steps: [
      "Kohlblätter und Fleisch abwechselnd stapeln.",
      "In 5cm Stücke schneiden.",
      "Hochkant dicht in den Reiskocher-Topf schichten (vom Rand zur Mitte).",
      "Brühe drüber. Kochen (ca. 20-25 Min).",
      "Fleisch muss grau/weiß sein (durch)."
    ],
    checks: "Fleisch komplett durch ✓",
    swaps: "Schwein ↔ Rind",
    side: "Ggf. Reis",
    remind: true,
    riceCooker: {
      enabled: true,
      program: "Steam / Cook",
      water: "200ml Brühe",
      notes: "Optisch ein Highlight, sehr gesund."
    },
  },

  // SONNTAG
  {
    id: "so-f",
    title: "Viral Whole Tomato Rice 整个番茄饭",
    desc: "Der Internet-Hit: Eine ganze Tomate kocht mit dem Reis und wird zur Sauce.",
    story: "Super einfach, saftig und perfekt für faule Sonntage.",
    target: "Instagram-Hit",
    ingredients: [
      "Reis (roh) 120 g",
      "Tomate (groß, reif) 1 Stück",
      "Olivenöl 1 EL",
      "Mais & Erbsen (TK) 50 g",
      "Schinkenwürfel (gekocht) 30 g",
      "Salz, Pfeffer"
    ],
    steps: [
      "Reis & Wasser in den Topf.",
      "Strunk der Tomate entfernen, Tomate mittig auf den Reis setzen.",
      "Öl, Gemüse & Schinken drumherum verteilen.",
      "Kochen. Danach Tomate zerdrücken und alles mischen."
    ],
    checks: "Vegan (ohne Schinken) ✓",
    swaps: "Schinken ↔ Pilze",
    side: "Spiegelei",
    remind: true,
    riceCooker: {
      enabled: true,
      program: "White Rice",
      water: "Etwas weniger als normal (Tomate hat Wasser)",
      notes: "Tomate muss sehr reif sein."
    },
  },
  {
    id: "so-m",
    title: "Mapo Tofu 麻婆豆腐 (Mild)",
    desc: "Seidentofu und Hackfleisch in einer würzigen (aber milden) Bohnensauce.",
    story: "Der Klassiker aus Sichuan, hier 'entschärft' für den Magen.",
    target: "Proteinbombe",
    ingredients: [
      "Tofu (Seiden oder Weich) 300 g",
      "Rinderhack oder Schwein 100 g",
      "Doubanjiang (nur wenig!) oder Miso-Paste 1 EL",
      "Brühe 150 ml",
      "Stärke zum Binden",
      "Reis (gekocht) 200 g"
    ],
    steps: [
      "Hack anbraten.",
      "Paste dazu, kurz rösten. Brühe aufgießen.",
      "Tofuwürfel vorsichtig hinein (nicht rühren, schwenken). 5 Min köcheln.",
      "Mit Stärke binden."
    ],
    checks: "Hack durch ✓ · Nicht zu scharf würzen ✓",
    swaps: "Hack ↔ Pilze",
    side: "-",
    remind: false,
    riceCooker: { enabled: false },
  },
  {
    id: "so-a",
    title: "Běigū Zhēng Huájī 北菇蒸滑鸡 (Huhn mit Pilzen)",
    desc: "Zartes Hühnchen, mariniert und gedämpft. Sehr purer Geschmack.",
    story: "Klassische Schonkost in der chinesischen Küche.",
    target: "Leicht verdaulich",
    ingredients: [
      "Hähnchenschenkel-Fleisch (Würfel) 200 g",
      "Shiitake (getrocknet, eingeweicht) 4 Stk",
      "Ingwerstreifen",
      "Sojasauce, Sesamöl, Stärke",
      "Reis (gekocht) 150 g"
    ],
    steps: [
      "Huhn mit Gewürzen und Stärke marinieren.",
      "Auf einen Teller geben, Pilze dazu.",
      "Im Dampfgarer (oder Wok mit Einsatz) 15-20 Min dämpfen.",
      "Prüfen ob Fleischsaft klar ist."
    ],
    checks: "Huhn komplett durch ✓",
    swaps: "-",
    side: "Blanchierter Spinat",
    remind: true,
    riceCooker: { enabled: false },
  },
];

export default function Woche2DE() {
  return (
    <PlanTemplate
      meta={meta}
      data={DATA}
      dayNames={DAY_NAME_DE}
      uiTitles={UI_TITLES}
      subtitle="Asiatische Hausmannskost (CN/JP/KR) · Mild & Schwangerschaftsgeeignet · 1x Reiskocher/Tag"
      heroChips={["Woche 2", "CN/JP/KR · Mild · Schwangerschaft", "Täglich 1× 🍚 Reiskocher"]}
    />
  );
}

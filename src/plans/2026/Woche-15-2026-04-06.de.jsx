/*
  Moving Kitchen Tales – Woche 15 (Start: 2026-04-06)
  Status: KOMPLETT & FUNKTIONSFÄHIG (Alle 21 Rezepte)
  Fokus: Virale Airfryer-Hacks, Reiskocher-Magie, EU/Asia Crossover.
*/

import React from "react";
import PlanTemplate from "../PlanTemplate";

export const meta = {
  title: "Woche 15",
  startDate: "2026-04-06",
  id: "woche-15-2026-04-06",
  lang: "de",
  sidebar: "Woche 15 (2026-04-06)",
};

const DAY_NAME_DE = {
  mo: "Montag (2026-04-06)",
  di: "Dienstag (2026-04-07)",
  mi: "Mittwoch (2026-04-08)",
  do: "Donnerstag (2026-04-09)",
  fr: "Freitag (2026-04-10)",
  sa: "Samstag (2026-04-11)",
  so: "Sonntag (2026-04-12)",
};

const UI_TITLES = {
  main: "Rezepte Woche 15",
  list: "Einkaufsliste Woche 15",
};

export const DATA = [
  // MONTAG
  {
    id: "mo-f",
    title: "Viral Pesto Fried Eggs 煎蛋",
    isViral: true,
    desc: "Spiegeleier, die direkt in grünem Pesto statt in Öl gebraten werden.",
    story: "Ein grandioser TikTok-Trend. Das Pesto liefert das Öl zum Braten und würzt das Ei gleichzeitig mit Basilikum, Knoblauch und Parmesan. Auf knusprigem Brot ein Traum.",
    target: "≈50 g KH (2 P.) · Protein ≈20 g p. P.",
    ingredients: [
      "Grünes Pesto (aus dem Glas) 2 EL",
      "Eier 4 Stück",
      "Vollkorn-Toast 4 Scheiben",
      "Cherrytomaten 100 g",
      "Parmesan (gerieben) 1 EL"
    ],
    steps: [
      "Pesto in einer Pfanne bei mittlerer Hitze erwärmen.",
      "Die Eier direkt auf das Pesto schlagen.",
      "Deckel auflegen und braten, bis das Eiweiß und Eigelb GANZ durchgestockt sind (wichtig für die Schwangerschaft!).",
      "Mit Tomaten auf dem Toast servieren, etwas Parmesan darüberstreuen."
    ],
    checks: "Balanced ✓ · Schwangerschaft ✓ (Eigelb muss komplett fest sein) · Diabetes ✓",
    swaps: "Grünes Pesto ↔ Rotes Pesto",
    side: "Kaffee oder Tee.",
    remind: true,
    riceCooker: { enabled: false },
  },
  {
    id: "mo-m",
    title: "Airfryer Pasta Chips Salat",
    isViral: true,
    desc: "Gekochte Nudeln werden im Airfryer zu knusprigen Chips und dienen als Croutons auf frischem Salat.",
    story: "Pasta Chips sind ein riesiger Hit. Sie eignen sich super als Snack, aber noch besser machen sie sich als sättigender, knuspriger Crunch in einer großen, bunten Salat-Bowl.",
    target: "≈65 g KH (2 P.) · Protein ≈18 g p. P.",
    ingredients: [
      "Kurze Nudeln (z.B. Penne oder Farfalle) 150 g",
      "Olivenöl 1 EL",
      "Italienische Kräuter & Knoblauchpulver",
      "Gemischter Salat (Gurke, Tomate, Paprika) 300 g",
      "Feta (pasteurisiert) 100 g",
      "Joghurt-Dressing 3 EL"
    ],
    steps: [
      "Nudeln kochen, abtropfen und gut mit Olivenöl und Gewürzen mischen.",
      "Im Airfryer bei 200°C ca. 10-12 Minuten backen, bis sie knusprig sind. Zwischendurch schütteln.",
      "Salat und Gemüse zerkleinern, Feta darüberbröseln.",
      "Salat mit Dressing mischen, die Pasta Chips kurz vor dem Essen als Topping daraufgeben."
    ],
    checks: "Balanced ✓ · Schwangerschaft ✓ (Käse pasteurisiert) · Diabetes ✓",
    swaps: "Feta ↔ Mozzarella",
    side: "-",
    remind: false,
    riceCooker: { enabled: false },
  },
  {
    id: "mo-a",
    title: "Reiskocher Oyakodon 親子丼",
    desc: "Der japanische 'Eltern-und-Kind'-Klassiker: Hühnchen und Ei dämpfen direkt auf dem Reis.",
    story: "Oyakodon (Huhn = Eltern, Ei = Kind) kocht man meist in einer speziellen Pfanne. Wir machen daraus ein One-Pot-Gericht. Das Ei stockt im Reiskocher perfekt durch.",
    target: "≈80 g KH (2 P.) · Protein ≈30 g p. P.",
    ingredients: [
      "Reis (roh) 120 g",
      "Hähnchenbrust (in mundgerechten Stücken) 200 g",
      "Zwiebel (in Ringen) 1 Stück",
      "Sojasauce 2 EL",
      "Mirin 1 EL",
      "Dashi oder Brühe 240 ml",
      "Eier 2 Stück"
    ],
    steps: [
      "Reis, Brühe, Sojasauce und Mirin in den Reiskocher geben.",
      "Zwiebelringe und Hähnchenstücke gleichmäßig darauf verteilen. Start drücken.",
      "Etwa 10 Minuten vor Ende der Garzeit (wenn das Wasser fast weg ist), den Deckel öffnen und die leicht verquirlten Eier über das Fleisch gießen.",
      "Deckel wieder schließen und fertig garen lassen. Das Ei wird komplett fest."
    ],
    checks: "Balanced ✓ · Schwangerschaft ✓ (Fleisch und Ei garen im Topf >80°C komplett durch)",
    swaps: "Hähnchen ↔ Schweinefilet",
    side: "Ein wenig Frühlingszwiebel on top.",
    remind: true,
    riceCooker: { enabled: true, program: "Mixed / White Rice", water: "Brühe (Standard)", notes: "Eier erst gegen Ende zugeben, sonst werden sie gummiartig." },
  },

  // DIENSTAG
  {
    id: "di-f",
    title: "Miso-Bananen-Pancakes 味噌バナナパンケーキ",
    desc: "Süße Bananen-Pancakes mit einem winzigen Hauch salziger Miso-Paste für das ultimative Umami.",
    story: "Die Kombination aus süßer Banane und salzigem Miso funktioniert ähnlich genial wie Salted Caramel. Ein tolles, ungewöhnliches Frühstück.",
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
      "Eier, Milch und die Miso-Paste (am besten vorher in 1 EL warmem Wasser auflösen) gut unterrühren.",
      "Mehl und Backpulver zügig unterheben.",
      "In einer Pfanne mit etwas Öl bei mittlerer Hitze durchbacken, bis sie fest und goldbraun sind."
    ],
    checks: "Balanced ✓ · Schwangerschaft ✓ (Teig durchbacken)",
    swaps: "Miso ↔ Prise Salz (falls Miso zu mutig ist)",
    side: "Ein Klecks Naturjoghurt.",
    remind: true,
    riceCooker: { enabled: false },
  },
  {
    id: "di-m",
    title: "Gochujang Butter Spaghetti 고추장 버터 파스타",
    isViral: true,
    desc: "Ein gigantischer Fusion-Hit. Spaghetti in einer feurigsüßen Butter-Knoblauch-Sauce.",
    story: "Nichts ist simpler und besser. Die koreanische Chilipaste Gochujang karamellisiert in Butter und verbindet sich mit dem Nudelwasser zu einer glänzenden Emulsion.",
    target: "≈85 g KH (2 P.) · Protein ≈15 g p. P.",
    ingredients: [
      "Spaghetti (Vollkorn) 150 g",
      "Butter 30 g",
      "Knoblauch 2 Zehen (fein gehackt)",
      "Gochujang (milde Paste) 1 EL",
      "Sojasauce 1 TL",
      "Spinat oder Pak Choi 100 g"
    ],
    steps: [
      "Spaghetti in Salzwasser kochen. Eine Tasse Nudelwasser aufheben.",
      "Butter in einer Pfanne schmelzen, Knoblauch und Gochujang 1 Min anrösten.",
      "Einen Schuss Nudelwasser und Sojasauce einrühren, bis die Sauce bindet.",
      "Spaghetti und Spinat dazugeben und kräftig schwenken."
    ],
    checks: "Balanced ✓ · Diabetes ✓ (Vollkorn-Spaghetti nutzen)",
    swaps: "Gochujang ↔ Tomatenmark mit einer Prise Chili",
    side: "Spiegelei (durchgebraten) für mehr Protein.",
    remind: false,
    riceCooker: { enabled: false },
  },
  {
    id: "di-a",
    title: "Rindfleisch & Erbsen Pilaf پلو (Reiskocher)",
    desc: "Ein herrlich aromatischer Rindfleisch-Reis mit Erbsen und orientalischen Gewürzen.",
    story: "Inspiriert vom orientalischen Pulao. Der Reiskocher nimmt dir die Arbeit ab, das Rindfleisch wird butterzart.",
    target: "≈80 g KH (2 P.) · Protein ≈28 g p. P.",
    ingredients: [
      "Reis (roh) 120 g",
      "Rinderhack oder Rindfleisch (fein geschnitten) 150 g",
      "Erbsen (TK) 80 g",
      "Zwiebel (gehackt) 1 Stück",
      "Rinderbrühe oder Gemüsebrühe 240 ml",
      "Kreuzkümmel & Zimt (je eine Prise)"
    ],
    steps: [
      "Hackfleisch kurz mit den Gewürzen und der Zwiebel vermengen (optional vorher in der Pfanne krümelig anbraten für mehr Röstaromen).",
      "Reis und Brühe in den Reiskocher.",
      "Fleischmischung und Erbsen darauflegen.",
      "Start drücken. Am Ende alles auflockern und mischen."
    ],
    checks: "Balanced ✓ · Schwangerschaft ✓ (Rindfleisch komplett durchgaren im Topf) · Diabetes ✓",
    swaps: "Rindfleisch ↔ Lammhack",
    side: "Ein frischer Gurkensalat mit Joghurt.",
    remind: true,
    riceCooker: { enabled: true, program: "Mixed / White Rice", water: "Brühe (Standard)", notes: "Erbsen können ihre leuchtende Farbe verlieren, schmecken aber super." },
  },

  // MITTWOCH
  {
    id: "mi-f",
    title: "Savory French Toast (Käse & Lauch)",
    desc: "French Toast mal herzhaft! Das Brot wird in Ei getunkt und mit Käse und Frühlingszwiebeln gebacken.",
    story: "Ein perfektes Reste-Essen. Der herzhafte Ei-Mantel macht das Brot unglaublich saftig, der geschmolzene Käse sorgt für den Crunch am Rand.",
    target: "≈65 g KH (2 P.) · Protein ≈22 g p. P.",
    ingredients: [
      "Vollkorn-Toast 4 Scheiben",
      "Eier 3 Stück",
      "Milch 30 ml",
      "Frühlingszwiebeln (fein gehackt) 20 g",
      "Gouda oder Cheddar (gerieben) 40 g"
    ],
    steps: [
      "Eier mit Milch, Frühlingszwiebeln, Salz und Pfeffer in einem tiefen Teller verquirlen.",
      "Toastscheiben nacheinander von beiden Seiten durch die Ei-Masse ziehen.",
      "In einer Pfanne mit etwas Öl oder Butter bei mittlerer Hitze anbraten.",
      "Käse auf die Brote streuen, wenden und backen, bis der Käse eine Kruste bildet und das Ei komplett durch ist."
    ],
    checks: "Balanced ✓ · Schwangerschaft ✓ (Ei komplett durchbraten)",
    swaps: "Gouda ↔ Mozzarella",
    side: "Tomatenscheiben.",
    remind: true,
    riceCooker: { enabled: false },
  },
  {
    id: "mi-m",
    title: "Airfryer Sweet Potato Gnocchi",
    desc: "Gekaufte Gnocchi werden im Airfryer zu knusprigen Kartoffel-Pops geröstet.",
    story: "Ein genialer Trick! Statt Gnocchi in Wasser zu kochen, werden sie im Airfryer außen wie Kroketten und bleiben innen weich. Ein fantastischer Salat- oder Bowl-Zusatz.",
    target: "≈85 g KH (2 P.) · Protein ≈15 g p. P. (mehr mit Tofu)",
    ingredients: [
      "Süßkartoffel-Gnocchi (Kühlregal) 300 g",
      "Olivenöl 1 EL",
      "Knoblauchpulver & Paprika",
      "Brokkoli (gedämpft) 150 g",
      "Feta (pasteurisiert) 50 g"
    ],
    steps: [
      "Gnocchi aus der Packung direkt mit Olivenöl und Gewürzen mischen.",
      "Im Airfryer bei 190°C ca. 12-14 Minuten rösten, bis sie knusprig sind. Zwischendurch schütteln.",
      "Mit gedämpftem Brokkoli in einer Schüssel anrichten.",
      "Feta darüber bröseln."
    ],
    checks: "Balanced ✓ · Schwangerschaft ✓ · Diabetes ✓ (Süßkartoffel gut verträglich)",
    swaps: "Süßkartoffel-Gnocchi ↔ Normale Gnocchi",
    side: "Etwas Joghurt-Dip.",
    remind: false,
    riceCooker: { enabled: false },
  },
  {
    id: "mi-a",
    title: "Hainan-Style Schwein 猪肉饭 (Reiskocher)",
    desc: "Mageres Schweinefleisch gart im Ingwer-Reis und wird butterzart.",
    story: "Wer Hainan Chicken liebt, wird diese Variation mögen. Das Schweinefilet saugt das Dämpf-Wasser auf und lässt sich danach fast mit dem Löffel zerteilen.",
    target: "≈80 g KH (2 P.) · Protein ≈28 g p. P.",
    ingredients: [
      "Reis (roh) 120 g",
      "Schweinefilet (am Stück oder dicke Medaillons) 200 g",
      "Ingwer (fein gehackt) 15 g",
      "Knoblauch 2 Zehen",
      "Hühnerbrühe 240 ml",
      "Sojasauce 1 EL"
    ],
    steps: [
      "Reis, Brühe, Ingwer, zerdrückten Knoblauch und Sojasauce in den Reiskocher geben.",
      "Schweinefilet oben drauflegen. Start drücken.",
      "Nach dem Kochen das Fleisch herausnehmen, in Scheiben schneiden und auf dem gut umgerührten Reis anrichten."
    ],
    checks: "Balanced ✓ · Schwangerschaft ✓ (Schweinefilet gart im Reiskocher >80°C komplett durch)",
    swaps: "Schweinefilet ↔ Putenbrust",
    side: "Gedämpfter Pak Choi.",
    remind: true,
    riceCooker: { enabled: true, program: "Mixed / White Rice", water: "Brühe (Standard)", notes: "Fleisch nicht zu klein schneiden." },
  },

  // DONNERSTAG
  {
    id: "do-f",
    title: "Schwarzer Sesam Haferbrei 黑芝麻燕麦",
    desc: "Tiefschwarzer, nussiger Porridge mit schwarzer Sesampaste und Honig.",
    story: "Schwarzer Sesam ist in China ein Superfood für Haare und Haut. Die Paste färbt das Oatmeal dramatisch schwarz und gibt ihm ein grandioses, erdig-süßes Aroma.",
    target: "≈65 g KH (2 P.) · Protein ≈18 g p. P.",
    ingredients: [
      "Haferflocken 100 g",
      "Sojamilch oder Milch 400 ml",
      "Schwarze Sesampaste 2 EL",
      "Honig oder Agavendicksaft 1 EL",
      "Walnüsse 20 g"
    ],
    steps: [
      "Haferflocken in der Milch aufkochen, bis der Brei andickt.",
      "Sesampaste und Honig unterrühren.",
      "Mit gehackten Walnüssen garnieren."
    ],
    checks: "Balanced ✓ · Schwangerschaft ✓ · Diabetes ✓",
    swaps: "Schwarze Sesampaste ↔ Erdnussmus",
    side: "-",
    remind: true,
    riceCooker: { enabled: false },
  },
  {
    id: "do-m",
    title: "Crispy Reispapier Sushi-Rollen 寿司ロール (Airfryer)",
    isViral: true,
    desc: "Gefüllte Reispapier-Rollen, die im Airfryer wie kleine Sushi-Tacos aufknuspern.",
    story: "Statt Algen nehmen wir Reispapier! Gefüllt mit Reis, Thunfisch und Mayo werden sie im Airfryer wahnsinnig knusprig. Ein toller TikTok-Trend für die Mittagspause.",
    target: "≈75 g KH (2 P.) · Protein ≈22 g p. P.",
    ingredients: [
      "Reispapier 6 Blatt",
      "Reis (gekocht, klebrig) 150 g",
      "Thunfisch (Dose, abgetropft) 100 g",
      "Mayonnaise (pasteurisiert) 1 EL",
      "Sriracha 1 TL",
      "Sojasauce zum Dippen"
    ],
    steps: [
      "Thunfisch mit Mayo und Sriracha mischen.",
      "Ein Blatt Reispapier in warmes Wasser tauchen. Eine Portion Reis und Thunfisch-Creme in die Mitte geben.",
      "Wie einen Burrito oder eine Frühlingsrolle eng falten.",
      "Im Airfryer (vorher leicht einölen!) bei 190°C ca. 8 Min backen, bis sie knusprig sind."
    ],
    checks: "Balanced ✓ · Schwangerschaft ✓ (Mayo pasteurisiert, Dosenthunfisch in Maßen OK)",
    swaps: "Thunfisch ↔ Gebratenes Hackfleisch",
    side: "Gurkensalat.",
    remind: false,
    riceCooker: { enabled: false },
  },
  {
    id: "do-a",
    title: "One-Pot Linsen-Curry mit Reis (Reiskocher)",
    desc: "Reis und rote Linsen garen zusammen in einer milden Curry-Brühe.",
    story: "Dieses 'One-Pot-Dal' ist ein absoluter Retter an stressigen Tagen. Die Linsen zerfallen und machen den Reis cremig wie ein Risotto.",
    target: "≈82 g KH (2 P.) · Protein ≈20 g p. P.",
    ingredients: [
      "Reis (roh) 100 g",
      "Rote Linsen (roh, gewaschen) 50 g",
      "Kokosmilch 100 ml",
      "Gemüsebrühe 200 ml",
      "Currypulver (mild) 1 EL",
      "Spinat (frisch) 100 g"
    ],
    steps: [
      "Reis, Linsen, Kokosmilch, Brühe und Currypulver in den Reiskocher geben. Starten.",
      "In den letzten 2 Minuten den frischen Spinat oben auflegen, damit er im Dampf zusammenfällt.",
      "Nach dem Öffnen alles gut durchrühren, bis es eine cremige Konsistenz hat."
    ],
    checks: "Balanced ✓ · Schwangerschaft ✓ · Diabetes ✓ (Ballaststoffreich)",
    swaps: "Spinat ↔ Erbsen",
    side: "Ein Klecks Joghurt.",
    remind: true,
    riceCooker: { enabled: true, program: "Mixed / White Rice", water: "Brühe + Kokosmilch (ca. 300ml gesamt)", notes: "Macht herrlich satt." },
  },

  // FREITAG
  {
    id: "fr-f",
    title: "Upside-Down Tomato Tart 🍅 (Airfryer)",
    isViral: true,
    desc: "Kleine herzhafte Blätterteig-Törtchen. Tomaten, Käse, Teig drüber – fertig!",
    story: "Der 'Upside-Down Pastry' Trend aus Frankreich! Man legt die Füllung (Tomaten, etwas Honig, Käse) direkt auf das Backpapier, legt ein Quadrat Blätterteig darüber und drückt die Ränder fest. Nach dem Backen wird gestürzt. Grandios!",
    target: "≈65 g KH (2 P.) · Protein ≈15 g p. P.",
    ingredients: [
      "Blätterteig (Rolle) 1/2 Stück",
      "Cherrytomaten 100 g",
      "Parmesan oder Feta (pasteurisiert) 30 g",
      "Honig 1 TL",
      "Thymian oder Basilikum"
    ],
    steps: [
      "Blätterteig in 4 Quadrate schneiden.",
      "Auf ein Stück Airfryer-Backpapier 4 kleine Kleckse Honig geben. Halbierte Tomaten daraufsetzen. Mit Kräutern und Käse bestreuen.",
      "Jeweils ein Teig-Quadrat über die Tomatenhaufen legen und die Ränder leicht andrücken.",
      "Im Airfryer bei 180°C ca. 10 Min backen, bis der Teig hoch aufgegangen und goldbraun ist. Vorsichtig stürzen!"
    ],
    checks: "Balanced ✓ · Schwangerschaft ✓ (Käse schmilzt komplett durch)",
    swaps: "Tomaten ↔ Zwiebelringe",
    side: "Ein gekochtes Ei für mehr Protein.",
    remind: true,
    riceCooker: { enabled: false },
  },
  {
    id: "fr-m",
    title: "Airfryer Teriyaki-Lachs Bites 照り焼きサーモン",
    desc: "Saftige Lachswürfel, kross gebacken und mit Teriyaki-Sauce glasiert.",
    story: "Lachs in kleine Würfel geschnitten gart im Airfryer extrem schnell und bekommt überall eine fantastische Kruste. Ideal für Bowls.",
    target: "≈80 g KH (2 P.) · Protein ≈28 g p. P.",
    ingredients: [
      "Lachsfilet (in Würfeln) 200 g",
      "Teriyaki-Sauce 2 EL",
      "Sesamöl 1 TL",
      "Reis (gekocht) 150 g",
      "Edamame (TK, aufgetaut) 100 g"
    ],
    steps: [
      "Lachswürfel in Teriyaki und Sesamöl 10 Min marinieren.",
      "Im Airfryer bei 190°C für 6-8 Minuten backen (Fisch muss komplett durchgaren!).",
      "Mit Reis und Edamame in einer Schüssel anrichten."
    ],
    checks: "Balanced ✓ · Schwangerschaft ✓ (Lachs komplett durchgaren)",
    swaps: "Lachs ↔ Tofuwürfel",
    side: "Ein Stück Gurke.",
    remind: false,
    riceCooker: { enabled: false },
  },
  {
    id: "fr-a",
    title: "Tom Yum Reis ต้มยำ (Reiskocher)",
    desc: "Die Aromen der berühmten thailändischen sauren Suppe, eingekocht in duftenden Reis mit Garnelen.",
    story: "Ein Schuss Tom-Yum-Paste (gibt es im Glas) verwandelt faden Reis in eine Geschmacksexplosion aus Zitronengras und Galgant.",
    target: "≈80 g KH (2 P.) · Protein ≈26 g p. P.",
    ingredients: [
      "Reis (roh) 120 g",
      "Tom Yum Paste (aus dem Asia-Markt) 1-2 EL",
      "Garnelen (TK, aufgetaut) 200 g",
      "Kokosmilch 50 ml",
      "Gemüsebrühe 190 ml",
      "Brokkoli 100 g"
    ],
    steps: [
      "Tom Yum Paste in der Brühe auflösen. Zusammen mit Kokosmilch und Reis in den Topf geben.",
      "Garnelen (gut abgetropft) oben auflegen. Starten.",
      "Brokkoli extra dämpfen oder in den letzten 5 Min in den Topf legen.",
      "Alles durchmischen."
    ],
    checks: "Balanced ✓ · Schwangerschaft ✓ (Garnelen dämpfen im Topf sicher durch)",
    swaps: "Garnelen ↔ Hähnchenbrust",
    side: "Etwas frischer Koriander.",
    remind: true,
    riceCooker: { enabled: true, program: "Mixed / White Rice", water: "Flüssigkeit (Brühe+Kokosmilch) = Standard", notes: "Paste ist salzig/sauer, sehr erfrischend." },
  },

  // SAMSTAG
  {
    id: "sa-f",
    title: "Tamagoyaki Sandwich (Airfryer-Version) たまごサンド",
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
    id: "sa-m",
    title: "Dan Dan Nudeln (Schwein) 担担面",
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
    title: "Viral Zwiebel-Bacon-Brie Reis (Reiskocher)",
    isViral: true,
    desc: "Eine ganze Zwiebel schmilzt zusammen mit einem Stück Brie-Käse und Bacon über dem Reis.",
    story: "Noch ein Internet-Wahnsinn, der funktioniert. Die Zwiebel karamellisiert im Dampf, der Bacon gibt Würze und der Brie liefert die perfekte Creme. (Wichtig: Brie MUSS pasteurisiert sein!).",
    target: "≈80 g KH (2 P.) · Protein ≈22 g p. P.",
    ingredients: [
      "Reis (roh) 120 g",
      "Zwiebel (mittlere Größe, geschält) 1 Stück",
      "Brie oder Camembert (Zwingend aus PASTEURISIERTER Milch!) 80 g",
      "Bacon oder Schinkenwürfel 50 g",
      "Gemüsebrühe 240 ml",
      "Schwarzer Pfeffer"
    ],
    steps: [
      "Reis und Brühe in den Topf. Die Zwiebel oben kreuzweise tief einschneiden und in die Mitte setzen.",
      "Den Brie (Rinde evtl. leicht einschneiden) und Bacon drumherum verteilen.",
      "Reiskocher starten.",
      "Nach dem Kochen die butterweiche Zwiebel zerdrücken und alles zu einem unfassbaren Risotto verrühren."
    ],
    checks: "Balanced ✓ · Schwangerschaft ✓ (Achtung: Unbedingt auf das Etikett des Käses schauen. Nur 'Aus pasteurisierter Milch' verwenden!) · Diabetes ✓",
    swaps: "Brie ↔ Feta",
    side: "Ein großer grüner Salat zum Ausgleich.",
    remind: true,
    riceCooker: { enabled: true, program: "White Rice", water: "Brühe (Standard)", notes: "Die Zwiebel muss tief eingeschnitten sein, damit sie weich gart." },
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
    title: "Kroatische Ćevapčići mit Đuveč-Reis (Pfanne)",
    desc: "Der Balkan-Klassiker. Kräftige Hackröllchen mit würzigem Tomaten-Erbsen-Reis.",
    story: "Djuvec-Reis lebt von Ajvar und Tomatenmark. Wir machen es in einer großen Pfanne und braten die Cevapcici direkt mit.",
    target: "≈85 g KH (2 P.) · Protein ≈28 g p. P.",
    ingredients: [
      "Cevapcici (frisch oder TK) 200 g",
      "Reis (gekocht, vom Vortag) 200 g",
      "Erbsen (TK) 50 g",
      "Tomatenmark 1 EL",
      "Ajvar 2 EL",
      "Gemüsebrühe 50 ml"
    ],
    steps: [
      "Cevapcici in der Pfanne rundum gut durchbraten, dann an den Rand schieben.",
      "Tomatenmark, Ajvar und Erbsen in die Mitte geben, kurz anrösten.",
      "Gekochten Reis dazugeben, mit Brühe ablöschen.",
      "Alles vermengen, bis der Reis die rote Farbe angenommen hat und heiß ist."
    ],
    checks: "Balanced ✓ · Schwangerschaft ✓ (Fleischröllchen GANZ durchbraten!)",
    swaps: "Cevapcici ↔ Schweinegeschnetzeltes",
    side: "Rohe Zwiebelringe (wer mag).",
    remind: false,
    riceCooker: { enabled: false },
  },
  {
    id: "so-a",
    title: "Hähnchen & Edamame Reis 鶏と枝豆のご飯 (Reiskocher)",
    desc: "Ein extrem sauberes, proteinreiches Gericht. Hähnchenbrust dämpft mit Sojabohnen.",
    story: "Edamame geben dem Reis einen tollen, nussigen Biss. Das Hähnchen liefert mageres Protein. Ein perfekter, sanfter Abschluss der Woche.",
    target: "≈82 g KH (2 P.) · Protein ≈30 g p. P.",
    ingredients: [
      "Reis (roh) 120 g",
      "Hähnchenbrust (gewürfelt) 200 g",
      "Edamame (geschält, TK) 100 g",
      "Sojasauce 2 EL",
      "Sesamöl 1 TL",
      "Hühnerbrühe 240 ml"
    ],
    steps: [
      "Hähnchen mit Sojasauce mischen.",
      "Reis und Brühe in den Topf. Hähnchen oben auflegen.",
      "Start drücken.",
      "Nach dem Kochen die aufgetauten Edamame und das Sesamöl unter den heißen Reis heben."
    ],
    checks: "Balanced ✓ · Schwangerschaft ✓ (Huhn kocht sicher durch) · Diabetes ✓",
    swaps: "Hähnchen ↔ Garnelen",
    side: "Miso-Suppe.",
    remind: true,
    riceCooker: { enabled: true, program: "White Rice / Mixed", water: "Brühe", notes: "Edamame nicht mitkochen, sonst werden sie grau." },
  },
];

export default function Woche15DE() {
  return (
    <PlanTemplate
      meta={meta}
      data={DATA}
      dayNames={DAY_NAME_DE}
      uiTitles={UI_TITLES}
      subtitle="Gochujang & Tom Yum · Würzige Reisbowls · Balanced"
      heroChips={["Woche 15", "Virale Trends & Wohlfühlküche", "Täglich 1× 🍚 Reiskocher"]}
    />
  );
}

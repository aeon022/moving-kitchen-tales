/*
  GhibliKitchen – Woche 24 (Start: 2026-06-08)
  Status: KOMPLETT & FUNKTIONSFÄHIG (Alle 21 Rezepte)
  Fokus: Koreanische Küche, Virale Airfryer-Hacks, Reiskocher-Magie, Schwangerschaftssicher.
*/

import React from "react";
import PlanTemplate from "../PlanTemplate";

export const meta = {
  title: "Woche 24",
  startDate: "2026-06-08",
  id: "woche-24-2026-06-08",
  lang: "de",
  sidebar: "Woche 24 (2026-06-08)",
};

const DAY_NAME_DE = {
  mo: "Montag (2026-06-08)",
  di: "Dienstag (2026-06-09)",
  mi: "Mittwoch (2026-06-10)",
  do: "Donnerstag (2026-06-11)",
  fr: "Freitag (2026-06-12)",
  sa: "Samstag (2026-06-13)",
  so: "Sonntag (2026-06-14)",
};

const UI_TITLES = {
  main: "Rezepte Woche 24",
  list: "Einkaufsliste Woche 24",
};

export const DATA = [
  // MONTAG
  {
    id: "mo-f",
    title: "Viral Folded Gimbap 접는 김밥",
    isViral: true,
    desc: "Koreanisches Gimbap, aber statt gerollt als praktisches Sandwich gefaltet.",
    story: "Der TikTok-Wrap-Trick, angewendet auf Nori-Blätter! Ein Viertel einschneiden, belegen und klappen. Es ist das perfekte, handliche Frühstück ohne Sushi-Matte.",
    target: "≈65 g KH (2 P.) · Protein ≈20 g p. P.",
    ingredients: [
      "Nori-Blätter 4 Stück",
      "Reis (gekocht) 150 g",
      "Eier (als flaches Omelett gebraten) 2 Stück",
      "Spinat (blanchiert) 50 g",
      "Karotte (in Streifen gebraten) 50 g",
      "Sesamöl 1 TL"
    ],
    steps: [
      "Omelett in Quadrate schneiden. Nori-Blatt von unten bis zur Mitte einschneiden.",
      "Viertel 1: Reis (mit Sesamöl), Viertel 2: Ei, Viertel 3: Spinat, Viertel 4: Karotte.",
      "Vom ersten Viertel aus reihum zu einem Dreieck oder Quadrat zusammenklappen.",
      "In der Mitte durchschneiden und genießen."
    ],
    checks: "Balanced ✓ · Schwangerschaft ✓ (Ei komplett durchgebraten) · Diabetes ✓",
    swaps: "Ei ↔ Thunfisch (Dose)",
    side: "Ein warmer Tee.",
    remind: true,
    riceCooker: { enabled: false },
  },
  {
    id: "mo-m",
    title: "Airfryer Gochujang Tofu 고추장 두부",
    desc: "Knusprige Tofuwürfel in einer süß-scharfen koreanischen Chili-Glasur.",
    story: "Tofu wird im Airfryer unfassbar knusprig. Die koreanische Gochujang-Paste karamellisiert in der Pfanne und hüllt die Würfel in ein wunderbares Aroma.",
    target: "≈80 g KH (2 P.) · Protein ≈22 g p. P.",
    ingredients: [
      "Fester Tofu 300 g",
      "Maisstärke 2 EL",
      "Gochujang (milde Paste) 1 EL",
      "Sojasauce 1 EL & Agavendicksaft 1 TL",
      "Reis (gekocht) 150 g",
      "Brokkoli (gedämpft) 150 g"
    ],
    steps: [
      "Tofu würfeln, abtupfen und in Maisstärke wenden. Im Airfryer bei 200°C ca. 15 Min knusprig backen.",
      "Gochujang, Soja, Agave und 3 EL Wasser in einer Pfanne aufkochen.",
      "Tofu durchschwenken, bis er glänzt.",
      "Mit Brokkoli und Reis servieren."
    ],
    checks: "Balanced ✓ · Schwangerschaft ✓ · Diabetes ✓",
    swaps: "Tofu ↔ Hähnchenbrust",
    side: "-",
    remind: false,
    riceCooker: { enabled: false },
  },
  {
    id: "mo-a",
    title: "Kongnamul Bap 콩나물밥 (Reiskocher)",
    desc: "Reis, gedämpft mit Sojasprossen und Rinderhack. Ein echtes koreanisches Soulfood.",
    story: "Sojasprossen (Kongnamul) geben beim Dämpfen eine nussige, wärmende Brühe ab. Zusammen mit etwas Rinderhack wird der Reis im Reiskocher zu einer kompletten Mahlzeit.",
    target: "≈80 g KH (2 P.) · Protein ≈26 g p. P.",
    ingredients: [
      "Reis (roh) 120 g",
      "Sojasprossen (gewaschen) 150 g",
      "Rinderhack (mager) 150 g",
      "Sojasauce 2 EL",
      "Sesamöl 1 TL",
      "Gemüsebrühe 240 ml"
    ],
    steps: [
      "Rinderhack kurz mit etwas Sojasauce vermengen.",
      "Reis und Brühe in den Reiskocher füllen.",
      "Sojasprossen und das Hackfleisch (aufgelockert) darauf verteilen.",
      "Start drücken. Nach dem Kochen Sojasauce und Sesamöl unterrühren."
    ],
    checks: "Balanced ✓ · Schwangerschaft ✓ (Rinderhack dämpft >80°C sicher durch)",
    swaps: "Rinderhack ↔ Schweinehack",
    side: "Kimchi (mild).",
    remind: true,
    riceCooker: { enabled: true, program: "Mixed / White Rice", water: "Brühe (Standard)", notes: "Sojasprossen verlieren beim Garen an Volumen." },
  },

  // DIENSTAG
  {
    id: "di-f",
    title: "Gyeran-jjim 계란찜 (Mikrowellen-Ei-Soufflé)",
    desc: "Koreanisches souffliertes Ei. Fluffig wie eine Wolke, blitzschnell aus der Mikrowelle.",
    story: "In koreanischen Restaurants kommt Gyeran-jjim oft blubbernd im Tontopf. Zuhause schummeln wir mit der Mikrowelle – es wird genauso fluffig und ist in 4 Minuten komplett durchgegart!",
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
      "Deckel locker auflegen. In der Mikrowelle ca. 3-4 Minuten bei mittlerer bis hoher Stufe garen, bis es KOMPLETT durchgestockt ist.",
      "Dazu warmen Reis essen."
    ],
    checks: "Balanced ✓ · Schwangerschaft ✓ (Eier müssen komplett fest und heiß sein!)",
    swaps: "Mikrowelle ↔ Im Topf im Wasserbad dämpfen (dauert 15 Min)",
    side: "Ein Spritzer Sesamöl.",
    remind: true,
    riceCooker: { enabled: false },
  },
  {
    id: "di-m",
    title: "Japchae 잡채 (Koreanische Glasnudeln)",
    desc: "Süßkartoffel-Glasnudeln mit Spinat, Karotten und Hühnchen.",
    story: "Ein Festtagsgericht in Korea. Die Süßkartoffel-Nudeln haben einen hervorragenden Biss. Wir machen es uns einfach und braten das Gemüse rasch im Wok an.",
    target: "≈85 g KH (2 P.) · Protein ≈24 g p. P.",
    ingredients: [
      "Süßkartoffel-Glasnudeln (Dangmyeon) 120 g",
      "Hähnchenbrust (in feinen Streifen) 150 g",
      "Spinat 100 g",
      "Karotte 50 g",
      "Sojasauce 3 EL",
      "Sesamöl 1 EL",
      "Zucker 1 TL"
    ],
    steps: [
      "Nudeln in kochendem Wasser ca. 6 Min weichkochen, abtropfen, mit der Schere kurz zerschneiden.",
      "Hähnchen und Karotte im Wok anbraten (Hähnchen komplett durchgaren!).",
      "Spinat und Nudeln dazugeben.",
      "Sojasauce, Zucker und Sesamöl einrühren, alles gut durchschwenken."
    ],
    checks: "Balanced ✓ · Schwangerschaft ✓ (Hähnchen durch) · Diabetes ✓ (Süßkartoffel-Stärke ist verträglich)",
    swaps: "Hähnchen ↔ Rindfleisch",
    side: "-",
    remind: false,
    riceCooker: { enabled: false },
  },
  {
    id: "di-a",
    title: "Kimchi-Tofu Reis 김치 볶음밥 (Reiskocher)",
    desc: "Die Aromen von Kimchi Fried Rice, völlig ohne Rühren im Reiskocher zubereitet.",
    story: "Erhitztes Kimchi verliert seine Schärfe und entwickelt eine wunderbare Tiefe. Zusammen mit Tofu und Reis entsteht ein geniales, würziges One-Pot-Meal.",
    target: "≈80 g KH (2 P.) · Protein ≈18 g p. P.",
    ingredients: [
      "Reis (roh) 120 g",
      "Kimchi (gut abgetropft und gehackt) 100 g",
      "Fester Tofu (gewürfelt) 150 g",
      "Sojasauce 1 EL",
      "Gemüsebrühe 240 ml",
      "Sesamöl 1 TL"
    ],
    steps: [
      "Reis, Brühe, Sojasauce und das gehackte Kimchi in den Reiskocher füllen.",
      "Tofu-Würfel oben auflegen. Start drücken.",
      "Nach dem Kochen das Sesamöl darüberträufeln und kräftig durchmischen."
    ],
    checks: "Balanced ✓ · Schwangerschaft ✓ (Kimchi wird im Reiskocher ausreichend erhitzt) · Diabetes ✓",
    swaps: "Tofu ↔ Schweinebauch",
    side: "Ein voll durchgebratenes Spiegelei on top.",
    remind: true,
    riceCooker: { enabled: true, program: "Mixed / White Rice", water: "Brühe (Standard)", notes: "Kimchi bringt viel Säure und Umami." },
  },

  // MITTWOCH
  {
    id: "mi-f",
    title: "Süßkartoffel-Toast 고구마 토스트 (Airfryer)",
    desc: "Süßkartoffelscheiben ersetzen das Brot, getoppt mit Mandelmus und Banane.",
    story: "Ein grandioser Low-Gluten-Trend. Die Süßkartoffelscheiben werden im Airfryer außen fest und innen weich – perfekt als Basis für ein süßes koreanisch inspiriertes Frühstück.",
    target: "≈65 g KH (2 P.) · Protein ≈12 g p. P.",
    ingredients: [
      "Süßkartoffel (groß) 1 Stück",
      "Mandelmus oder Erdnussbutter 2 EL",
      "Banane 1 Stück",
      "Zimt",
      "Ein Klecks Quark (optional)"
    ],
    steps: [
      "Süßkartoffel längs in ca. 1 cm dicke Scheiben schneiden.",
      "Im Airfryer bei 180°C ca. 12-15 Min backen, bis sie weich und der Rand leicht knusprig ist.",
      "Die Scheiben mit Mandelmus bestreichen.",
      "Mit Bananenscheiben und Zimt toppen."
    ],
    checks: "Balanced ✓ · Diabetes ✓ (Süßkartoffel hat einen exzellenten Glykämischen Index)",
    swaps: "Mandelmus ↔ Frischkäse",
    side: "Kaffee oder Tee.",
    remind: true,
    riceCooker: { enabled: false },
  },
  {
    id: "mi-m",
    title: "Reispapier Tteokbokki 라이스페이퍼 떡볶이",
    isViral: true,
    desc: "Chewy Reiskuchen-Ersatz aus aufgerolltem Reispapier in milder Gochujang-Sauce.",
    story: "Ein viraler Hit! Nasses Reispapier eng aufrollen und in Stücke schneiden. Das ergibt die perfekte, zähe Tteokbokki-Textur. Dazu gibt es koreanische Fischkuchen (Eomuk / Surimi).",
    target: "≈80 g KH (2 P.) · Protein ≈18 g p. P.",
    ingredients: [
      "Reispapier 10 Blatt",
      "Fischkuchen (Surimi/Krabbenstäbchen) 100 g",
      "Lauch (in Ringen) 100 g",
      "Gochujang (milde Paste) 1 EL",
      "Sojasauce 1 EL",
      "Agavendicksaft 1 TL"
    ],
    steps: [
      "Reispapierblätter kurz in warmes Wasser tauchen, eng zu einer Rolle formen. In 4 cm Stücke schneiden.",
      "Gochujang, Soja, Agave und 150ml Wasser im Wok aufkochen. Lauch und in Stücke geschnittenen Fischkuchen (Surimi) dazugeben.",
      "Reispapier-Rollen in der kochenden Sauce schwenken, bis sie weich sind."
    ],
    checks: "Balanced ✓ · Schwangerschaft ✓ (Fischkuchen/Surimi wird in der Sauce gekocht)",
    swaps: "Surimi ↔ Festgekochte Eier (halbiert)",
    side: "Ein Stück Gurke.",
    remind: false,
    riceCooker: { enabled: false },
  },
  {
    id: "mi-a",
    title: "Bossam-Style Schweinebauch 보쌈 (Reiskocher)",
    desc: "Schweinebauch, butterweich im Reiskocher gedämpft, serviert mit Kohlblättern.",
    story: "Bossam ist gedämpftes Schweinefleisch, das in blanchierte Kohlblätter gewickelt wird. Im Reiskocher schmilzt das Fett des Fleisches sanft ab, der Reis fängt das Aroma auf.",
    target: "≈80 g KH (2 P.) · Protein ≈28 g p. P.",
    ingredients: [
      "Reis (roh) 120 g",
      "Schweinebauch (in mundgerechten Würfeln) 150 g",
      "Sojasauce 2 EL",
      "Knoblauch & Ingwer (je 1 TL gehackt)",
      "Weißkohlblätter (groß) 4 Stück",
      "Brühe 240 ml"
    ],
    steps: [
      "Reis, Brühe, Sojasauce, Ingwer und Knoblauch in den Topf geben.",
      "Schweinebauch-Würfel obendrauf legen.",
      "Start drücken.",
      "Kohlblätter separat kurz blanchieren. Fleisch und Reis in die Blätter wickeln und essen."
    ],
    checks: "Balanced ✓ · Schwangerschaft ✓ (Fleisch wird durchgedämpft >80°C)",
    swaps: "Schweinebauch ↔ Hähnchenoberschenkel",
    side: "Ein Dip aus Doenjang (Sojapaste).",
    remind: true,
    riceCooker: { enabled: true, program: "Mixed / White Rice", water: "Standard", notes: "Fleisch wird extrem zart." },
  },

  // DONNERSTAG
  {
    id: "do-f",
    title: "Gilgeori Toast 길거리 토스트",
    desc: "Das legendäre koreanische Street-Toast. Omelett mit Kohl und Karotten, leicht süßlich.",
    story: "Der Duft koreanischer U-Bahn-Stationen am Morgen. Ein deftiges Gemüse-Omelett zwischen zwei Toastscheiben, abgerundet mit Ketchup und einer kleinen Prise Zucker.",
    target: "≈75 g KH (2 P.) · Protein ≈18 g p. P.",
    ingredients: [
      "Vollkorn-Toast 4 Scheiben",
      "Eier 3 Stück",
      "Weißkohl (fein gehobelt) 100 g",
      "Karotte (geraspelt) 30 g",
      "Butter, Ketchup, Prise Zucker"
    ],
    steps: [
      "Ei mit dem Gemüse verquirlen, salzen und als eckiges Omelett braten (KOMPLETT durchgaren!).",
      "Brot in etwas Butter toasten.",
      "Omelett aufs Brot legen, Ketchup & eine winzige Prise Zucker drauf, zuklappen."
    ],
    checks: "Balanced ✓ · Schwangerschaft ✓ (Ei komplett durchgebraten)",
    swaps: "Weißkohl ↔ Frühlingszwiebeln",
    side: "Kaffee oder Milch.",
    remind: true,
    riceCooker: { enabled: false },
  },
  {
    id: "do-m",
    title: "Bibimbap Bowl (Pfannen-Hack) 비빔밥",
    desc: "Der koreanische Bowl-Klassiker entkonstruiert. Reis, Rinderhack, Spinat und Karotten.",
    story: "Bibimbap heißt 'gemischter Reis'. Wir sparen uns das Marinieren jedes einzelnen Gemüses und braten einfach Rindfleisch, Karotten und Spinat zügig nacheinander an.",
    target: "≈85 g KH (2 P.) · Protein ≈28 g p. P.",
    ingredients: [
      "Reis (gekocht) 200 g",
      "Rinderhack (mager) 150 g",
      "Spinat 100 g",
      "Karotte (in feinen Stiften) 50 g",
      "Gochujang (milde Paste) 1 EL",
      "Eier 2 Stück"
    ],
    steps: [
      "Rinderhack in der Pfanne krümelig und GANZ durch braten. Mit Sojasauce ablöschen. Herausnehmen.",
      "Karottenstifte und Spinat nacheinander kurz anbraten.",
      "Eier braten (als komplett durchgebratenes Spiegelei).",
      "Reis in einer Bowl anrichten, Zutaten darauf drapieren, mit Gochujang toppen und durchmischen."
    ],
    checks: "Balanced ✓ · Schwangerschaft ✓ (Rindfleisch und Eier komplett durchbraten!)",
    swaps: "Rinderhack ↔ Tofu-Crumble",
    side: "-",
    remind: false,
    riceCooker: { enabled: false },
  },
  {
    id: "do-a",
    title: "Lachs & Doo-Bu Reis 연어 두부 밥 (Reiskocher)",
    desc: "Lachsfilet und cremiger Seidentofu dämpfen gemeinsam über Reis.",
    story: "Ein unglaublich sauberes, klares Gericht. Der Lachs wird zart, der weiche Tofu wärmt, und die Sojasauce verbindet alles zu einem grandiosen Abendessen.",
    target: "≈80 g KH (2 P.) · Protein ≈30 g p. P.",
    ingredients: [
      "Reis (roh) 120 g",
      "Lachsfilet 200 g",
      "Seidentofu 150 g",
      "Sojasauce 2 EL",
      "Sesamöl 1 TL",
      "Dashi oder Brühe 240 ml"
    ],
    steps: [
      "Reis und Brühe in den Topf geben.",
      "Lachsfilet und Seidentofu (am Stück oder in dicken Scheiben) vorsichtig oben auflegen.",
      "Start drücken.",
      "Nach dem Kochen Sojasauce und Sesamöl darüberträufeln, alles leicht zerteilen und servieren."
    ],
    checks: "Balanced ✓ · Schwangerschaft ✓ (Lachs gart auf >80°C durch) · Diabetes ✓",
    swaps: "Lachs ↔ Weißfisch",
    side: "Ein Gurkensalat.",
    remind: true,
    riceCooker: { enabled: true, program: "Mixed / White Rice", water: "Standard", notes: "Seidentofu wird extrem heiß, Vorsicht!" },
  },

  // FREITAG
  {
    id: "fr-f",
    title: "Yuzu-Zitronen Pancakes",
    desc: "Fluffige Pfannkuchen, aromatisiert mit koreanischem Yuzu-Sirup (Yuja-cha).",
    story: "Yuja-cha ist eigentlich ein Zitrus-Tee-Sirup. Im Pancake-Teig sorgt er für eine unfassbar erfrischende, marmeladige Süße.",
    target: "≈75 g KH (2 P.) · Protein ≈18 g p. P.",
    ingredients: [
      "Mehl 120 g",
      "Yuzu-Sirup (Yuja-cha, aus dem Asia-Markt) 2 EL",
      "Eier 2 Stück",
      "Milch 80 ml",
      "Backpulver 1 TL",
      "Joghurt 2 EL"
    ],
    steps: [
      "Eier, Milch und Yuzu-Sirup glattrühren.",
      "Mehl und Backpulver unterheben.",
      "In der Pfanne bei mittlerer Hitze kleine Pancakes von beiden Seiten durchbacken.",
      "Mit Joghurt servieren."
    ],
    checks: "Balanced ✓ · Schwangerschaft ✓ (Komplett durchbacken!)",
    swaps: "Yuzu-Sirup ↔ Zitronenabrieb & etwas Honig",
    side: "Eine Tasse heißes Wasser mit Zitrone.",
    remind: true,
    riceCooker: { enabled: false },
  },
  {
    id: "fr-m",
    title: "Airfryer Dakgangjeong 닭강정 (Korean Fried Chicken)",
    isViral: true,
    desc: "Hähnchen in Cornflakes-Panade aus dem Airfryer, gewendet in süß-klebriger Sauce.",
    story: "Koreanisches Fried Chicken ohne Fritteuse! Wir panieren das Hähnchen mit zerkleinerten Cornflakes. Der Airfryer zaubert einen gigantischen Crunch.",
    target: "≈80 g KH (2 P.) · Protein ≈30 g p. P.",
    ingredients: [
      "Hähnchenbrust (gewürfelt) 250 g",
      "Cornflakes (ungesüßt, zerbröselt) 50 g",
      "Ei 1 Stück",
      "Sojasauce, Ketchup, Honig (je 1 EL)",
      "Reis (gekocht) 150 g"
    ],
    steps: [
      "Hähnchen in Ei und danach in den Cornflakes-Bröseln wenden.",
      "Im Airfryer bei 190°C ca. 12-15 Min backen (komplett durchgaren!).",
      "In einer Pfanne Sojasauce, Ketchup, Honig und 2 EL Wasser kurz einkochen lassen.",
      "Das knusprige Hähnchen in der Sauce schwenken. Mit Reis servieren."
    ],
    checks: "Balanced ✓ · Schwangerschaft ✓ (Hähnchen komplett durch!)",
    swaps: "Cornflakes ↔ Panko",
    side: "Eingelegter Rettich (Danmuji).",
    remind: false,
    riceCooker: { enabled: false },
  },
  {
    id: "fr-a",
    title: "Dak-juk 닭죽 (Hühner-Congee im Reiskocher)",
    desc: "Koreanischer Reisbrei mit Hühnchen, Möhren und Knoblauch. Extrem wärmend.",
    story: "In Korea isst man Juk (Porridge) immer dann, wenn man sich etwas Gutes tun will. Es ist mild, liegt nicht schwer im Magen und wärmt von innen.",
    target: "≈70 g KH (2 P.) · Protein ≈24 g p. P.",
    ingredients: [
      "Reis (roh) 80 g",
      "Hühnerbrühe 800 ml",
      "Hähnchenbrust (am Stück) 150 g",
      "Karotte (sehr fein gewürfelt) 50 g",
      "Knoblauch 1 Zehe",
      "Sesamöl 1 TL"
    ],
    steps: [
      "Reis, Brühe, Karotte, Knoblauch und das Hähnchen am Stück in den Reiskocher (Porridge Modus, ca. 50 Min).",
      "Nach dem Kochen das Hähnchen herausnehmen, mit einer Gabel zerzupfen und zurück in den Brei geben.",
      "Mit Sesamöl beträufeln und servieren."
    ],
    checks: "Balanced ✓ · Schwangerschaft ✓ (Hähnchen gart extrem lang durch) · Diabetes ✓",
    swaps: "Hähnchenbrust ↔ Weißfisch",
    side: "Etwas Frühlingszwiebel.",
    remind: true,
    riceCooker: { enabled: true, program: "Porridge / Congee", water: "1:10 Ratio", notes: "Wird fantastisch cremig." },
  },

  // SAMSTAG
  {
    id: "sa-f",
    title: "Matcha Baked Oats (Airfryer) 🍵",
    desc: "Haferflocken, Banane und Matcha aus dem Airfryer, wie ein kleiner Muffin.",
    story: "Dieser Food-Trend verwandelt langweilige Haferflocken in ofenwarmes Gebäck. Die leichte Herbe des Matcha-Tees harmoniert perfekt mit der Süße der Banane.",
    target: "≈70 g KH (2 P.) · Protein ≈16 g p. P.",
    ingredients: [
      "Haferflocken 100 g",
      "Banane (sehr reif) 1 Stück",
      "Milch 150 ml",
      "Matcha-Pulver 1 TL",
      "Backpulver 1 TL",
      "Quark (Magerstufe) 2 EL"
    ],
    steps: [
      "Haferflocken, zerdrückte Banane, Milch, Matcha und Backpulver gut verrühren.",
      "In eine kleine, ofenfeste (bzw. airfryer-geeignete) Form füllen.",
      "Im Airfryer bei 170°C für ca. 12-15 Minuten backen, bis es wie ein Muffin aufgeht.",
      "Mit einem Klecks Quark servieren."
    ],
    checks: "Balanced ✓ · Diabetes ✓ (Komplexe KH) · Schwangerschaft ✓",
    swaps: "Matcha ↔ Backkakao",
    side: "Tee.",
    remind: true,
    riceCooker: { enabled: false },
  },
  {
    id: "sa-m",
    title: "Gyeran Mari 계란말이 (Gerolltes Omelett)",
    desc: "Koreanisches, geschichtetes Ei-Röllchen mit fein gehacktem Gemüse.",
    story: "Ein Must-have in jeder koreanischen Lunchbox (Dosirak). Das Ei wird in dünnen Schichten in der Pfanne gebraten und immer wieder aufgerollt.",
    target: "≈45 g KH (2 P. - inkl. Reis) · Protein ≈20 g p. P.",
    ingredients: [
      "Eier 5 Stück",
      "Karotte & Frühlingszwiebel (extrem fein gehackt) 30 g",
      "Salz 1 Prise",
      "Reis (gekocht) 150 g",
      "Nori (zerbröselt)"
    ],
    steps: [
      "Eier mit dem Gemüse und Salz verquirlen.",
      "Eine dünne Schicht Ei in eine geölte Pfanne geben. Sobald es fast stockt, von einer Seite her aufrollen.",
      "Die Rolle an den Rand schieben, neue Eimasse angießen, an die Rolle anbinden lassen und weiterrollen.",
      "WICHTIG: Die fertige Rolle bei schwacher Hitze mit Deckel noch 3 Min ziehen lassen, damit das Innere KOMPLETT durchgart. Aufschneiden und mit Reis essen."
    ],
    checks: "Balanced ✓ · Schwangerschaft ✓ (Deckel am Ende ist wichtig!)",
    swaps: "Gemüse ↔ Käse (pasteurisiert)",
    side: "Sojasauce.",
    remind: false,
    riceCooker: { enabled: false },
  },
  {
    id: "sa-a",
    title: "Bulgogi-Reis 불고기 밥 (Reiskocher-Hack)",
    desc: "Koreanisches Rindfleisch dämpft in Soja-Birnen-Marinade über Reis.",
    story: "Klassisches Bulgogi nutzt geriebene Birne, um das Fleisch zart zu machen. Im Reiskocher geben wir die Marinade direkt über das Rindfleisch. Alles gart zu einem perfekten Eintopf zusammen.",
    target: "≈80 g KH (2 P.) · Protein ≈28 g p. P.",
    ingredients: [
      "Reis (roh) 120 g",
      "Rindfleisch (feine Streifen) 150 g",
      "Sojasauce 2 EL",
      "Birne oder Apfel (fein gerieben) 1 EL",
      "Sesamöl 1 TL",
      "Brühe 240 ml"
    ],
    steps: [
      "Rindfleisch mit Sojasauce, geriebener Birne und Sesamöl vermengen.",
      "Reis und Brühe in den Topf geben.",
      "Rindfleisch oben auflegen (auffächern, nicht klumpen!).",
      "Start drücken. Nach dem Kochen alles gründlich durchmischen."
    ],
    checks: "Balanced ✓ · Schwangerschaft ✓ (Fleisch dampft durch)",
    swaps: "Rindfleisch ↔ Schweinefleisch",
    side: "Ein Schälchen Gurkensalat.",
    remind: true,
    riceCooker: { enabled: true, program: "Mixed / White Rice", water: "Standard", notes: "Die Birne macht das Fleisch unglaublich zart." },
  },

  // SONNTAG
  {
    id: "so-f",
    title: "Viral Cloud Egg Toast ☁️🍳",
    isViral: true,
    desc: "Ein fluffiges Wolken-Ei aus aufgeschlagenem Eiweiß mit dem Eigelb in der Mitte.",
    story: "Dieser virale Frühstückstrend sieht aus wie eine kleine Wolke! Da wir das Eigelb in der Schwangerschaft durchgaren müssen, lassen wir es im Airfryer einfach etwas länger backen.",
    target: "≈60 g KH (2 P.) · Protein ≈18 g p. P.",
    ingredients: [
      "Vollkorn-Toast 4 Scheiben",
      "Eier 2 Stück",
      "Parmesan (gerieben) 20 g",
      "Salz & Pfeffer"
    ],
    steps: [
      "Eier trennen. Eiweiß mit einer Prise Salz steif schlagen. Parmesan vorsichtig unterheben.",
      "Zwei Eiweiß-Wolken auf Backpapier (oder in eine Airfryer-Form) formen, in der Mitte eine Kuhle machen.",
      "Im Airfryer bei 160°C ca. 5 Min backen. Dann das Eigelb in die Kuhle geben und weitere 5-8 Min backen, bis alles KOMPLETT durchgestockt ist.",
      "Wolken auf den getoasteten Toast legen."
    ],
    checks: "Balanced ✓ · Schwangerschaft ✓ (Eigelb muss fest sein, kein flüssiger Kern!)",
    swaps: "Parmesan ↔ Gouda",
    side: "Tomaten.",
    remind: true,
    riceCooker: { enabled: false },
  },
  {
    id: "so-m",
    title: "Hobak Jeon 호박전 (Zucchini-Pfannkuchen)",
    desc: "Koreanische Zucchinischeiben, in einem leichten Eiteig in der Pfanne gebraten.",
    story: "Ein exzellenter koreanischer Beilagen-Klassiker (Banchan), der sich wunderbar als leichtes Mittagessen eignet. Die Zucchini wird in Ei gewendet und saftig gebraten.",
    target: "≈45 g KH (2 P. - inkl. Reis) · Protein ≈18 g p. P.",
    ingredients: [
      "Zucchini 1 große",
      "Eier 2 Stück",
      "Mehl 2 EL",
      "Reis (gekocht) 150 g",
      "Sojasauce & Reisessig (als Dip)"
    ],
    steps: [
      "Zucchini in ca. 5 mm dicke Scheiben schneiden. Leicht salzen und 5 Min schwitzen lassen. Abtupfen.",
      "Scheiben erst in Mehl wenden, dann durch das verquirlte Ei ziehen.",
      "In der Pfanne bei mittlerer Hitze von beiden Seiten goldbraun und komplett durchbraten.",
      "Mit Reis und dem Dip servieren."
    ],
    checks: "Balanced ✓ · Schwangerschaft ✓ (Ei durchbraten) · Diabetes ✓",
    swaps: "Zucchini ↔ Auberginenscheiben",
    side: "-",
    remind: false,
    riceCooker: { enabled: false },
  },
  {
    id: "so-a",
    title: "Jjamppong-Reis 짬뽕밥 (Reiskocher)",
    desc: "Meeresfrüchte-Reis, inspiriert von der koreanischen Jjamppong-Nudelsuppe.",
    story: "Jjamppong ist feurig und steckt voller Meeresfrüchte. Wir machen eine milde Reiskocher-Version. Paprikapulver und Knoblauch sorgen für das Aroma, ohne zu scharf zu sein.",
    target: "≈80 g KH (2 P.) · Protein ≈26 g p. P.",
    ingredients: [
      "Reis (roh) 120 g",
      "Meeresfrüchte-Mix (TK, aufgetaut) 200 g",
      "Weißkohl (geschnitten) 50 g",
      "Paprikapulver (edelsüß) 1 TL",
      "Sojasauce 1 EL",
      "Gemüsebrühe 240 ml"
    ],
    steps: [
      "Reis, Brühe, Paprikapulver und Sojasauce in den Topf geben.",
      "Aufgetaute Meeresfrüchte (gut abgetropft) und Kohl oben auflegen.",
      "Starten.",
      "Nach dem Kochen alles vorsichtig durchheben. Es duftet fantastisch nach Meer und Paprika."
    ],
    checks: "Balanced ✓ · Schwangerschaft ✓ (Meeresfrüchte dämpfen auf >80°C durch)",
    swaps: "Meeresfrüchte-Mix ↔ Nur Garnelen",
    side: "Ein Spritzer Sesamöl.",
    remind: true,
    riceCooker: { enabled: true, program: "Mixed / White Rice", water: "Brühe (Standard)", notes: "Meeresfrüchte vorher gut abtropfen lassen." },
  },
];

export default function Woche24DE() {
  return (
    <PlanTemplate
      meta={meta}
      data={DATA}
      dayNames={DAY_NAME_DE}
      uiTitles={UI_TITLES}
      subtitle="Koreanische Küche · Airfryer-Hacks 🔥 · Balanced"
      heroChips={["Woche 24", "Koreanische Küche & Virale Trends", "Täglich 1× 🍚 Reiskocher"]}
    />
  );
}

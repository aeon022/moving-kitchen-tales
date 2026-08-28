/*
  GhibliKitchen – Woche 26 (Start: 2026-06-22)
  Status: KOMPLETT & FUNKTIONSFÄHIG (Alle 21 Rezepte)
  Fokus: Neue Virale Airfryer-Hacks, Italienisch-Asiatische Crossover, Reiskocher-Magie.
*/

import React from "react";
import PlanTemplate from "../PlanTemplate";

export const meta = {
  title: "Woche 26",
  startDate: "2026-06-22",
  id: "woche-26-2026-06-22",
  lang: "de",
  sidebar: "Woche 26 (2026-06-22)",
};

const DAY_NAME_DE = {
  mo: "Montag (2026-06-22)",
  di: "Dienstag (2026-06-23)",
  mi: "Mittwoch (2026-06-24)",
  do: "Donnerstag (2026-06-25)",
  fr: "Freitag (2026-06-26)",
  sa: "Samstag (2026-06-27)",
  so: "Sonntag (2026-06-28)",
};

const UI_TITLES = {
  main: "Rezepte Woche 26",
  list: "Einkaufsliste Woche 26",
};

export const DATA = [
  // MONTAG
  {
    id: "mo-f",
    title: "Viral Yogurt Custard Toast mit Pfirsich",
    isViral: true,
    desc: "Vollkorntoast, belegt mit einer süßen Joghurt-Ei-Creme und Pfirsichspalten, gebacken im Airfryer.",
    story: "Dieses Frühstück hat das Internet im Sturm erobert. Die Joghurt-Ei-Mischung stockt beim Backen und verwandelt sich in einen herrlich cremigen Pudding. Das Obst karamellisiert leicht.",
    target: "≈65 g KH (2 P.) · Protein ≈18 g p. P.",
    ingredients: [
      "Vollkorn-Toast 4 Scheiben",
      "Griechischer Joghurt (pasteurisiert) 4 EL",
      "Ei 1 Stück",
      "Agavendicksaft 1 TL",
      "Pfirsich (in Spalten) 1 Stück"
    ],
    steps: [
      "Joghurt, Ei und Agavendicksaft glattrühren.",
      "Mit einem Esslöffel den inneren Teil der Toastscheiben etwas flachdrücken, um eine Mulde zu formen.",
      "Die Joghurtcreme in die Mulden füllen und mit Pfirsichspalten belegen.",
      "Im Airfryer bei 170°C ca. 8-10 Min backen, bis der 'Pudding' komplett fest ist (kein flüssiges Ei!)."
    ],
    checks: "Balanced ✓ · Schwangerschaft ✓ (Ei-Masse muss vollständig gestockt sein) · Diabetes ✓",
    swaps: "Pfirsich ↔ Himbeeren oder Apfel",
    side: "Kaffee oder Tee.",
    remind: true,
    riceCooker: { enabled: false },
  },
  {
    id: "mo-m",
    title: "Thai Basil Tofu (Pad Krapow Style)",
    desc: "Krümeliger Tofu, extrem aromatisch angebraten mit Sojasauce und viel frischem Basilikum.",
    story: "Eine vegane, milde Interpretation des thailändischen Streetfood-Klassikers Pad Krapow. Der Tofu wird zerbröselt und nimmt die salzig-süße Sauce fantastisch auf.",
    target: "≈80 g KH (2 P.) · Protein ≈22 g p. P.",
    ingredients: [
      "Fester Tofu 300 g",
      "Basilikum (frisch, ideal Thai-Basilikum) 1 große Handvoll",
      "Sojasauce 2 EL",
      "Austernsauce (oder vegetarische Pilzsauce) 1 EL",
      "Knoblauch 2 Zehen",
      "Reis (gekocht) 150 g"
    ],
    steps: [
      "Tofu mit einer Gabel zerbröseln. In einer heißen Pfanne mit etwas Öl anbraten, bis das Wasser verdampft ist und der Tofu leicht Farbe bekommt.",
      "Gehackten Knoblauch dazugeben und kurz mitrösten.",
      "Sojasauce und Austernsauce einrühren.",
      "Pfanne vom Herd nehmen, den frischen Basilikum unterheben, bis er zusammenfällt. Mit Reis servieren."
    ],
    checks: "Balanced ✓ · Schwangerschaft ✓ · Diabetes ✓",
    swaps: "Tofu ↔ Hähnchenhack",
    side: "-",
    remind: false,
    riceCooker: { enabled: false },
  },
  {
    id: "mo-a",
    title: "Golden Kurkuma Chicken Rice (Reiskocher)",
    desc: "Reis und Hähnchenbrust, schonend gegart in einer leuchtend gelben Kurkuma-Brühe.",
    story: "Kurkuma ist ein geniales Gewürz – es wärmt von innen und färbt den Reis spektakulär gelb. Das Hähnchen dämpft butterweich mit, eine echte One-Pot-Freude.",
    target: "≈80 g KH (2 P.) · Protein ≈30 g p. P.",
    ingredients: [
      "Reis (roh) 120 g",
      "Hähnchenbrust (gewürfelt) 200 g",
      "Kurkuma (gemahlen) 1/2 TL",
      "Gemüsebrühe 240 ml",
      "Erbsen (TK) 50 g",
      "Knoblauch 1 Zehe (gepresst)"
    ],
    steps: [
      "Reis, Brühe, Kurkuma und Knoblauch in den Reiskocher füllen und gut umrühren.",
      "Hähnchenwürfel oben auflegen. Start drücken.",
      "In den letzten 5 Minuten die Erbsen in den Topf geben, damit sie leuchtend grün bleiben.",
      "Nach dem Kochen alles kräftig durchmischen."
    ],
    checks: "Balanced ✓ · Schwangerschaft ✓ (Huhn dampft auf >80°C sicher durch)",
    swaps: "Hähnchenbrust ↔ Schweinefilet",
    side: "Ein Spritzer frische Zitrone.",
    remind: true,
    riceCooker: { enabled: true, program: "Mixed / White Rice", water: "Brühe (Standard)", notes: "Kurkuma färbt intensiv, Vorsicht mit Kleidung." },
  },

  // DIENSTAG
  {
    id: "di-f",
    title: "Miso-Karamell Haferbrei mit Apfel",
    desc: "Wärmender Haferbrei, verfeinert mit einer Kombination aus süßer Agave und einem winzigen Hauch Miso.",
    story: "Süß und salzig in Perfektion. Die Miso-Paste verhält sich hier wie das Salz in Salted Caramel und bringt eine erstaunliche geschmackliche Tiefe in den Porridge.",
    target: "≈65 g KH (2 P.) · Protein ≈15 g p. P.",
    ingredients: [
      "Haferflocken 100 g",
      "Milch (oder Haferdrink) 400 ml",
      "Apfel (gewürfelt) 1 Stück",
      "Agavendicksaft 1 EL",
      "Miso-Paste (hell) 1/2 TL",
      "Mandeln (gehackt) 20 g"
    ],
    steps: [
      "Haferflocken mit Milch und den Apfelwürfeln in einem Topf sanft aufkochen und eindicken lassen.",
      "Topf vom Herd nehmen.",
      "Miso-Paste mit dem Agavendicksaft glattrühren und unter den Brei ziehen.",
      "Mit gehackten Mandeln bestreut servieren."
    ],
    checks: "Balanced ✓ · Diabetes ✓ (Komplexe KH) · Schwangerschaft ✓",
    swaps: "Miso-Paste ↔ Eine Prise Meersalz",
    side: "Eine Tasse heißer Tee.",
    remind: true,
    riceCooker: { enabled: false },
  },
  {
    id: "di-m",
    title: "Airfryer Zucchini-Parmesankrusten-Sticks 🥒",
    isViral: true,
    desc: "Zucchini in handlichen Sticks, umhüllt von einer knusprigen Parmesan-Panko-Panade.",
    story: "Gemüse als Snack! Im Airfryer wird die Panade aus Panko und Parmesan grandios knusprig, während die Zucchini innen weich bleibt. Perfekt dazu: Ein proteinreicher Quinoa-Salat.",
    target: "≈75 g KH (2 P.) · Protein ≈20 g p. P.",
    ingredients: [
      "Zucchini (in dicke Sticks geschnitten) 2 große",
      "Panko (Paniermehl) 30 g",
      "Parmesan (gerieben) 30 g",
      "Eier 1 Stück",
      "Quinoa (gekocht, als Beilagensalat mit Essig/Öl) 150 g"
    ],
    steps: [
      "Zucchini-Sticks durch das verquirlte Ei ziehen.",
      "In einer Mischung aus Panko und Parmesan wälzen. Leicht mit Öl besprühen.",
      "Im Airfryer bei 190°C ca. 12-15 Min backen, bis die Kruste goldbraun ist.",
      "Dazu den gekochten Quinoa als leichten Essig-Öl-Salat reichen."
    ],
    checks: "Balanced ✓ · Schwangerschaft ✓ (Käse aus pasteurisierter Milch) · Diabetes ✓",
    swaps: "Zucchini ↔ Karotten",
    side: "Ein Klecks Magerquark zum Dippen.",
    remind: false,
    riceCooker: { enabled: false },
  },
  {
    id: "di-a",
    title: "Lachs & Edamame Risotto 鮭と枝豆 (Reiskocher)",
    desc: "Ein herrlich schlotziges Risotto mit Lachsfilet und proteinreichen Sojabohnen.",
    story: "Der Reiskocher nimmt die ganze Arbeit des Risotto-Rührens ab. Der Lachs gart im Dampf mit und wird am Ende einfach in den cremigen Reis gemischt. Ein Crossover, das begeistert.",
    target: "≈82 g KH (2 P.) · Protein ≈28 g p. P.",
    ingredients: [
      "Risottoreis oder Rundkornreis 120 g",
      "Lachsfilet 200 g",
      "Edamame (geschält, TK aufgetaut) 80 g",
      "Gemüsebrühe 300 ml",
      "Parmesan (pasteurisiert) 20 g",
      "Zitrone (etwas Saft)"
    ],
    steps: [
      "Reis und Brühe in den Topf geben.",
      "Lachsfilet am Stück oben auflegen. Start drücken.",
      "Nach dem Kochen die Edamame, Parmesan und einen Spritzer Zitronensaft hinzufügen.",
      "Den Lachs zerteilen und alles kräftig durchmischen, bis das Risotto cremig bindet."
    ],
    checks: "Balanced ✓ · Schwangerschaft ✓ (Lachs gart sicher auf >80°C durch, Käse pasteurisiert)",
    swaps: "Lachs ↔ Weißfisch",
    side: "Ein Tomatensalat.",
    remind: true,
    riceCooker: { enabled: true, program: "White Rice / Mixed", water: "Brühe (etwas mehr für Risotto-Textur)", notes: "Edamame und Käse erst am Ende unterheben." },
  },

  // MITTWOCH
  {
    id: "mi-f",
    title: "Viral Pesto Egg Folded Wrap 🌯",
    isViral: true,
    desc: "Ein clever gefalteter Wrap mit Eiern, die in Pesto gebraten wurden, und frischen Tomaten.",
    story: "Zwei TikTok-Trends in einem Gericht! Das Ei brät knusprig in grünem Pesto. Danach falten wir es mit dem Wrap-Trick zusammen und rösten das Ganze im Airfryer auf.",
    target: "≈65 g KH (2 P.) · Protein ≈22 g p. P.",
    ingredients: [
      "Vollkorn-Tortillas 2 Stück",
      "Eier 2 Stück",
      "Grünes Pesto (aus dem Glas) 2 EL",
      "Gouda oder Cheddar (gerieben) 40 g",
      "Tomate (in Scheiben) 1 Stück"
    ],
    steps: [
      "Pesto in einer Pfanne erhitzen, Eier daraufschlagen und komplett durchbraten (Deckel drauf!).",
      "Wrap bis zur Mitte einschneiden. Viertel 1: Pesto-Ei, Viertel 2: Käse, Viertel 3: Tomatenscheiben, Viertel 4: Käse.",
      "Zum Dreieck zusammenfalten.",
      "Im Airfryer oder Pfanne bei 180°C kurz knusprig toasten."
    ],
    checks: "Balanced ✓ · Schwangerschaft ✓ (Ei komplett durchgebraten, Käse pasteurisiert)",
    swaps: "Pesto ↔ Ajvar",
    side: "Tee.",
    remind: true,
    riceCooker: { enabled: false },
  },
  {
    id: "mi-m",
    title: "Szechuan Schweinefleisch mit Sellerie (Wok) 芹菜肉丝",
    desc: "Schweinefleischstreifen und Staudensellerie, pfannengerührt in einer dunklen Sojasauce.",
    story: "Ein Klassiker aus der chinesischen Hausmannskost. Der Sellerie bleibt wunderbar knackig und bildet einen hervorragenden Kontrast zu den weichen, würzigen Fleischstreifen.",
    target: "≈80 g KH (2 P.) · Protein ≈26 g p. P.",
    ingredients: [
      "Schweineschnitzel (in sehr feinen Streifen) 150 g",
      "Staudensellerie (in Scheiben) 150 g",
      "Karotte (in feinen Streifen) 50 g",
      "Sojasauce (dunkel & hell) 2 EL",
      "Knoblauch 1 Zehe",
      "Reis (gekocht) 150 g"
    ],
    steps: [
      "Schweinefleisch und Knoblauch im heißen Wok scharf anbraten und GANZ durchgaren. Herausnehmen.",
      "Sellerie und Karotte im Wok kurz knackig braten.",
      "Fleisch zurückgeben, mit Sojasauce und einem Schuss Wasser ablöschen.",
      "Kurz durchschwenken und über dem warmen Reis servieren."
    ],
    checks: "Balanced ✓ · Schwangerschaft ✓ (Schweinefleisch GANZ durchbraten!)",
    swaps: "Staudensellerie ↔ Paprika",
    side: "-",
    remind: false,
    riceCooker: { enabled: false },
  },
  {
    id: "mi-a",
    title: "Oden-Style Rettich & Rindfleisch Reis (Reiskocher)",
    desc: "Weißer Rettich und Rindfleisch, gegart in einer intensiven, süßlichen Dashi-Brühe.",
    story: "Oden ist ein japanischer Wintereintopf. Der weiße Rettich (Daikon) saugt die Brühe auf wie ein Schwamm. Im Reiskocher zerfällt er fast, und das Rindfleisch sorgt für Fülle.",
    target: "≈80 g KH (2 P.) · Protein ≈28 g p. P.",
    ingredients: [
      "Reis (roh) 120 g",
      "Rettich (Daikon, gewürfelt) 150 g",
      "Rindfleisch (Gulasch oder Streifen) 150 g",
      "Sojasauce 2 EL & Mirin 1 EL",
      "Dashi-Brühe 240 ml"
    ],
    steps: [
      "Reis, Dashi, Soja und Mirin in den Reiskocher füllen.",
      "Rettichwürfel und das Rindfleisch darauf verteilen.",
      "Start drücken.",
      "Nach dem Kochen alles vorsichtig durchheben. Der Rettich wird extrem heiß und weich, Vorsicht beim Essen!"
    ],
    checks: "Balanced ✓ · Schwangerschaft ✓ (Fleisch wird durchgedämpft) · Diabetes ✓",
    swaps: "Rettich ↔ Kohlrabi",
    side: "Etwas Frühlingszwiebel.",
    remind: true,
    riceCooker: { enabled: true, program: "Mixed / White Rice", water: "Dashi (Standard)", notes: "Der Rettich gibt den perfekten Oden-Geschmack." },
  },

  // DONNERSTAG
  {
    id: "do-f",
    title: "Matcha-Bananen-Pancakes 抹茶パンケーキ",
    desc: "Fluffige, grüne Pfannkuchen, gesüßt durch Banane und mit der Frische von grünem Tee.",
    story: "Eine fantastische Variante des klassischen Frühstücks. Der Matcha neutralisiert die Süße der Banane und verleiht den Pancakes eine wunderschöne grüne Farbe.",
    target: "≈75 g KH (2 P.) · Protein ≈18 g p. P.",
    ingredients: [
      "Vollkornmehl 100 g",
      "Banane (sehr reif) 1 Stück",
      "Matcha-Pulver 1 TL",
      "Eier 2 Stück",
      "Milch 50 ml",
      "Backpulver 1 TL"
    ],
    steps: [
      "Banane zerdrücken und mit Eiern sowie Milch verquirlen.",
      "Matcha, Mehl und Backpulver zügig unterrühren.",
      "In einer Pfanne bei mittlerer Hitze durchbacken, bis sie fest und GANZ durchgestockt sind (wichtig für die Schwangerschaft).",
      "Mit etwas Quark oder Joghurt servieren."
    ],
    checks: "Balanced ✓ · Schwangerschaft ✓ (Teig komplett durchbacken!)",
    swaps: "Matcha ↔ Backkakao",
    side: "Ein Klecks Magerquark.",
    remind: true,
    riceCooker: { enabled: false },
  },
  {
    id: "do-m",
    title: "Tuscan Bean Soup (Weiße Bohnen-Spinat-Eintopf)",
    desc: "Ein dicker, toskanischer Eintopf aus weißen Bohnen, passierten Tomaten und Spinat.",
    story: "Dieser schnelle Eintopf ist pures Comfort Food. Die weißen Bohnen liefern großartige Ballaststoffe, der frische Spinat fällt am Ende sanft in der warmen Sauce zusammen.",
    target: "≈80 g KH (2 P.) · Protein ≈20 g p. P.",
    ingredients: [
      "Weiße Bohnen (Dose, gespült) 200 g",
      "Passierte Tomaten 200 ml",
      "Spinat (frisch) 100 g",
      "Knoblauch 1 Zehe & Italienische Kräuter",
      "Parmesan 20 g",
      "Vollkornbrot 2 Scheiben"
    ],
    steps: [
      "Knoblauch in etwas Öl andünsten. Mit passierten Tomaten und etwas Wasser ablöschen.",
      "Weiße Bohnen und Kräuter hinzugeben und ca. 10 Min einköcheln lassen.",
      "Pfanne vom Herd nehmen, den frischen Spinat unterheben, bis er zusammenfällt.",
      "Mit Parmesan bestreuen und Brot dazu reichen."
    ],
    checks: "Balanced ✓ · Diabetes ✓ (Bohnen sind super blutzuckerfreundlich) · Schwangerschaft ✓",
    swaps: "Weiße Bohnen ↔ Kichererbsen",
    side: "-",
    remind: false,
    riceCooker: { enabled: false },
  },
  {
    id: "do-a",
    title: "Mac & Cheese (Asia-Reiskocher Hack) 🧀",
    isViral: true,
    desc: "Ein Studenten-Hit: Makkaroni, Milch und Käse direkt im Reiskocher zu cremiger Pasta gekocht.",
    story: "Eine geniale Koch-Abkürzung aus Asien. Die Nudeln saugen die Flüssigkeit komplett auf, die Stärke bindet die Milch. Ohne Abgießen entsteht ein cremiger Pasta-Traum.",
    target: "≈85 g KH (2 P.) · Protein ≈24 g p. P.",
    ingredients: [
      "Kurze Nudeln (Makkaroni oder Penne) 150 g",
      "Gemüsebrühe 150 ml & Milch 150 ml",
      "Brokkoli-Röschen 100 g",
      "Käse (Gouda oder Cheddar, gerieben) 80 g",
      "Prise Muskat & Pfeffer"
    ],
    steps: [
      "Nudeln, Brühe und Milch in den Reiskocher füllen. Start drücken.",
      "Nach ca. 10 Min (oder wenn es brodelt) die Brokkoli-Röschen dazugeben. Deckel wieder schließen.",
      "Sobald das Programm endet, den Käse und die Gewürze in die heißen Nudeln einrühren.",
      "Kräftig mischen, bis der Käse dicke Fäden zieht."
    ],
    checks: "Balanced ✓ · Schwangerschaft ✓ (Käse aus pasteurisierter Milch, Milch wird erhitzt)",
    swaps: "Brokkoli ↔ Erbsen",
    side: "Ein paar Cherrytomaten.",
    remind: true,
    riceCooker: { enabled: true, program: "White Rice / Quick", water: "Brühe + Milch = Standardmenge für Reis", notes: "Milch kann hochkochen, bei Bedarf Dampfventil überwachen." },
  },

  // FREITAG
  {
    id: "fr-f",
    title: "Tomaten-Rührei Toast 番茄炒蛋",
    desc: "Der chinesische Hausmannskost-Klassiker 'Tomate & Ei' serviert auf knusprigem Brot.",
    story: "Jedes chinesische Kind wächst mit dieser Kombination auf. Die Säure der Tomate weckt morgens auf, das Ei macht nachhaltig satt. Auf Vollkornbrot ein fantastisches, schnelles Frühstück.",
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
      "Toast rösten und die heiße Mischung darauf verteilen."
    ],
    checks: "Balanced ✓ · Schwangerschaft ✓ (Eier komplett durch)",
    swaps: "Toast ↔ Reis",
    side: "-",
    remind: true,
    riceCooker: { enabled: false },
  },
  {
    id: "fr-m",
    title: "Airfryer Crispy Gnocchi mit Feta",
    isViral: true,
    desc: "Krosse Gnocchi, geröstet mit Kirschtomaten und Feta-Käse aus der Heißluftfritteuse.",
    story: "Die Kombination aus dem Baked-Feta-Trend und Airfryer-Gnocchi! Die Gnocchi werden außen kross wie kleine Kartoffelkroketten und fangen die Sauce der geplatzten Tomaten auf.",
    target: "≈85 g KH (2 P.) · Protein ≈18 g p. P.",
    ingredients: [
      "Gnocchi (Kühlregal) 300 g",
      "Cherrytomaten 200 g",
      "Olivenöl 1 EL",
      "Italienische Kräuter 1 TL",
      "Feta (pasteurisiert) 60 g"
    ],
    steps: [
      "Gnocchi und Tomaten in einer Schüssel gut mit Olivenöl und Kräutern vermengen.",
      "In den Airfryer geben und bei 190°C ca. 12-15 Minuten rösten. Zwischendurch schütteln.",
      "Auf Teller verteilen und den Feta darüber bröseln. Die Tomaten sollten weich und geplatzt sein."
    ],
    checks: "Balanced ✓ · Schwangerschaft ✓ (Feta pasteurisiert) · Diabetes ✓",
    swaps: "Feta ↔ Mozzarella",
    side: "-",
    remind: false,
    riceCooker: { enabled: false },
  },
  {
    id: "fr-a",
    title: "Meeresfrüchte-Erbsen Paella (Reiskocher)",
    desc: "Bunter Reis mit Meeresfrüchtemix und Erbsen, butterweich aus dem Reiskocher.",
    story: "Eher westlich angehaucht, aber in Japan (und China) sehr beliebt als stressfreies One-Pot-Meal aus dem Reiskocher. Schmeckt hervorragend ohne großen Aufwand und langes Rühren.",
    target: "≈82 g KH (2 P.) · Protein ≈24 g p. P.",
    ingredients: [
      "Reis (roh) 120 g",
      "Meeresfrüchte-Mix (TK, aufgetaut) 200 g",
      "Erbsen (TK) 50 g",
      "Paprikapulver (edelsüß) 1 TL",
      "Gemüsebrühe 240 ml",
      "Butter 10 g"
    ],
    steps: [
      "Reis, Brühe und Paprikapulver in den Topf geben.",
      "Aufgetauten Meeresfrüchte-Mix (gut abgetropft!) und Erbsen dazu.",
      "Kochen. Am Ende Butter unterrühren, um den Reis cremig zu machen."
    ],
    checks: "Balanced ✓ · Schwangerschaft ✓ (Mix muss >80°C erhitzt werden - im Reiskocher kein Problem)",
    swaps: "Mix ↔ Nur Garnelen oder Hühnchen",
    side: "Ein Spritzer frische Zitrone.",
    remind: true,
    riceCooker: { enabled: true, program: "Mixed / White Rice", water: "Brühe (Standard)", notes: "TK-Mix vorher gut abtropfen lassen." },
  },

  // SAMSTAG
  {
    id: "sa-f",
    title: "Schwarzer Sesam & Walnuss Porridge 黑芝麻燕麦",
    desc: "Tiefschwarzer, nussiger Porridge mit schwarzer Sesampaste und Honig.",
    story: "Schwarzer Sesam ist in China ein Superfood für Haare und Haut. Die Paste färbt das Oatmeal dramatisch schwarz und gibt ihm ein grandioses, erdig-süßes Aroma.",
    target: "≈65 g KH (2 P.) · Protein ≈18 g p. P.",
    ingredients: [
      "Haferflocken 100 g",
      "Milch 400 ml",
      "Schwarze Sesampaste 2 EL",
      "Agavendicksaft 1 EL",
      "Walnüsse (gehackt) 20 g"
    ],
    steps: [
      "Haferflocken in der Milch aufkochen, bis der Brei andickt.",
      "Sesampaste und Agavendicksaft unterrühren.",
      "In Schüsseln füllen und mit Walnüssen garnieren."
    ],
    checks: "Balanced ✓ · Schwangerschaft ✓ · Diabetes ✓",
    swaps: "Schwarze Sesampaste ↔ Erdnussmus",
    side: "Kaffee.",
    remind: true,
    riceCooker: { enabled: false },
  },
  {
    id: "sa-m",
    title: "Yakisoba Bratnudeln mit Garnelen 焼きそば",
    desc: "Japanische Weizennudeln, kräftig angebraten mit Garnelen, Kohl und süß-würziger Sauce.",
    story: "Ein Fest in der Pfanne! Die dicke Yakisoba-Sauce karamellisiert leicht, der Kohl gibt Crunch und die Garnelen liefern das Protein. Perfekt für das Wochenende.",
    target: "≈85 g KH (2 P.) · Protein ≈26 g p. P.",
    ingredients: [
      "Yakisoba-Nudeln oder Weizennudeln 150 g",
      "Garnelen (TK, aufgetaut) 150 g",
      "Weißkohl (geschnitten) 100 g",
      "Karotte (in Streifen) 50 g",
      "Tonkatsu-Sauce oder Yakisoba-Sauce 3 EL"
    ],
    steps: [
      "Garnelen im Wok scharf anbraten, bis sie rosa und komplett durch sind. Herausnehmen.",
      "Kohl und Karotten braten. Nudeln (kurz heiß abgespült) in den Wok geben.",
      "Garnelen zurückgeben, mit Sauce übergießen und 2 Min kräftig pfannenrühren."
    ],
    checks: "Balanced ✓ · Schwangerschaft ✓ (Garnelen komplett durchbraten!)",
    swaps: "Garnelen ↔ Hähnchenbrust",
    side: "Ein Spritzer Zitrone.",
    remind: false,
    riceCooker: { enabled: false },
  },
  {
    id: "sa-a",
    title: "Taro Pork Rice 芋头焖肉饭 (Reiskocher)",
    desc: "Herzhafter Reis mit Taro-Wurzel, Sojasauce und Schweinebauch.",
    story: "Die Taro-Wurzel schmilzt im Reiskocher fast wie eine süße Kartoffel und macht den Reis extrem cremig. Das Fett des Schweinefleischs zieht direkt in die Körner ein.",
    target: "≈82 g KH (2 P.) · Protein ≈24 g p. P.",
    ingredients: [
      "Reis (roh) 120 g",
      "Taro (Wasserbrotwurzel, gewürfelt) 150 g",
      "Schweinebauch oder Schulter (gewürfelt) 150 g",
      "Sojasauce 2 EL",
      "Brühe 240 ml",
      "Frühlingszwiebel 10 g"
    ],
    steps: [
      "Fleischwürfel kurz in Sojasauce wenden.",
      "Reis, Brühe, Taro und Fleisch in den Reiskocher füllen.",
      "Start drücken. Das Fett und die Stärke des Taros erledigen den Rest.",
      "Am Ende sehr gut durchmischen, Taro dabei leicht zerdrücken. Mit Frühlingszwiebeln bestreuen."
    ],
    checks: "Balanced ✓ · Schwangerschaft ✓ (Fleisch gart sicher durch) · Diabetes ✓",
    swaps: "Taro ↔ Süßkartoffel",
    side: "Ein Tomatensalat.",
    remind: true,
    riceCooker: { enabled: true, program: "Mixed / White Rice", water: "Brühe (Standard)", notes: "Taro wird butterweich." },
  },

  // SONNTAG
  {
    id: "so-f",
    title: "Fluffy Ricotta-Zitronen Pancakes",
    desc: "Luftige Pfannkuchen mit Ricotta-Käse im Teig und erfrischendem Zitronenabrieb.",
    story: "Der Ricotta sorgt dafür, dass die Pancakes unglaublich weich und saftig werden, ohne schwer im Magen zu liegen. Ein geniales, sonntägliches Frühstück.",
    target: "≈75 g KH (2 P.) · Protein ≈22 g p. P.",
    ingredients: [
      "Vollkornmehl 100 g",
      "Ricotta (pasteurisiert) 100 g",
      "Eier 2 Stück",
      "Zitronenabrieb (bio) 1 TL",
      "Milch 50 ml",
      "Backpulver 1 TL"
    ],
    steps: [
      "Ricotta, Eier, Milch und Zitronenabrieb glatt rühren.",
      "Mehl und Backpulver zügig unterheben (nicht zu viel rühren!).",
      "In der Pfanne bei mittlerer Hitze durchbacken, bis sie fest, goldbraun und INNEN GANZ DURCH sind."
    ],
    checks: "Balanced ✓ · Schwangerschaft ✓ (Teig komplett durchbacken, Ricotta pasteurisiert)",
    swaps: "Ricotta ↔ Magerquark",
    side: "Ein paar Beeren.",
    remind: true,
    riceCooker: { enabled: false },
  },
  {
    id: "so-m",
    title: "Viral Sushi Bake Cups (Airfryer) 🍣🧁",
    isViral: true,
    desc: "Der Sushi-Bake-Trend in kleinen, handlichen Muffinformen gebacken.",
    story: "Sushi Bake ist der Hit auf Potlucks. Wir machen ihn portionierbar: Reis und Lachs in eine Silikon-Muffinform drücken, im Airfryer backen. Der Rand wird grandios knusprig!",
    target: "≈75 g KH (2 P.) · Protein ≈20 g p. P.",
    ingredients: [
      "Reis (gekocht) 200 g",
      "Lachs (Dose oder frisch gehackt) 150 g",
      "Mayonnaise (pasteurisiert) 2 EL",
      "Sojasauce 1 TL",
      "Nori (zerbröselt, in Maßen) 1 Blatt"
    ],
    steps: [
      "Lachs mit Mayo und Sojasauce mischen.",
      "Gekochten Reis in Muffinförmchen drücken (wie ein kleines Nest).",
      "Lachs-Mischung darauf verteilen.",
      "Im Airfryer bei 190°C ca. 10 Min backen, bis der Rand kross und der Lachs (falls frisch) durch ist. Mit Nori garnieren."
    ],
    checks: "Balanced ✓ · Schwangerschaft ✓ (Lachs komplett durchgaren, Mayo pasteurisiert)",
    swaps: "Lachs ↔ Thunfisch (Dose)",
    side: "Edamame.",
    remind: false,
    riceCooker: { enabled: false },
  },
  {
    id: "so-a",
    title: "Mildes Mapo Tofu mit Hähnchen 麻婆豆腐",
    desc: "Sichuan-Klassiker ohne die extreme Schärfe. Viel weicher Tofu und Hähnchenhack in pikanter Sauce.",
    story: "Wir machen eine fantastische, familientaugliche Version: Wärmend, umamireich und perfekt zu Reis. Das Hähnchenhack macht es leicht bekömmlich.",
    target: "≈80 g KH (2 P.) · Protein ≈28 g p. P.",
    ingredients: [
      "Seidentofu oder weicher Tofu 300 g",
      "Hähnchenhack 100 g",
      "Sojasauce 2 EL",
      "Austernsauce 1 EL",
      "Knoblauch 1 Zehe",
      "Reis (gekocht) 150 g"
    ],
    steps: [
      "Tofu würfeln.",
      "Hähnchenhack und Knoblauch im Wok krümelig und GANZ durch braten.",
      "Saucen und 100ml Wasser zugeben. Tofu hineingleiten lassen.",
      "3 Min sanft köcheln. Über warmem Reis servieren."
    ],
    checks: "Balanced ✓ · Schwangerschaft ✓ (Hack komplett durch, Tofu heiß)",
    swaps: "Hähnchenhack ↔ Schweinehack",
    side: "-",
    remind: true,
    riceCooker: { enabled: false },
  },
];

export default function Woche26DE() {
  return (
    <PlanTemplate
      meta={meta}
      data={DATA}
      dayNames={DAY_NAME_DE}
      uiTitles={UI_TITLES}
      subtitle="Neue Virale Hacks 🔥 · Italien & Asia Fusion · Balanced"
      heroChips={["Woche 26", "Italien & Asia Fusion", "Täglich 1× 🍚 Reiskocher"]}
    />
  );
}

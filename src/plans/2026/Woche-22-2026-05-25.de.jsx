/*
  GhibliKitchen – Woche 22 (Start: 2026-05-25)
  Status: KOMPLETT & FUNKTIONSFÄHIG (Alle 21 Rezepte)
  Fokus: Viel Chinesisch (Wok & Reiskocher), Virale Airfryer-Hacks, Schwangerschaftssicher.
*/

import React from "react";
import PlanTemplate from "../PlanTemplate";

export const meta = {
  title: "Woche 22",
  startDate: "2026-05-25",
  id: "woche-22-2026-05-25",
  lang: "de",
  sidebar: "Woche 22 (2026-05-25)",
};

const DAY_NAME_DE = {
  mo: "Montag (2026-05-25)",
  di: "Dienstag (2026-05-26)",
  mi: "Mittwoch (2026-05-27)",
  do: "Donnerstag (2026-05-28)",
  fr: "Freitag (2026-05-29)",
  sa: "Samstag (2026-05-30)",
  so: "Sonntag (2026-05-31)",
};

const UI_TITLES = {
  main: "Rezepte Woche 22",
  list: "Einkaufsliste Woche 22",
};

export const DATA = [
  // MONTAG
  {
    id: "mo-f",
    title: "Jianbing Reispapier Hack 煎饼 (Airfryer)",
    isViral: true,
    desc: "Chinesischer Streetfood-Crêpe als genialer Airfryer-Hack mit Reispapier.",
    story: "Ein echtes Jianbing zu machen dauert ewig. TikTok hat die Lösung: Mehrere Schichten nasses Reispapier, bestrichen mit Ei und Frühlingszwiebeln. Im Airfryer backt es extrem knusprig auf!",
    target: "≈65 g KH (2 P.) · Protein ≈18 g p. P.",
    ingredients: [
      "Reispapier 6 Blatt",
      "Eier 2 Stück",
      "Frühlingszwiebeln 30 g",
      "Sojasauce 1 TL",
      "Hoisin-Sauce 1 EL",
      "Vollkorn-Toast (als Beilage) 2 Scheiben"
    ],
    steps: [
      "Eier mit Soja und Frühlingszwiebeln verquirlen.",
      "Ein Blatt Reispapier nass machen. Etwas Eimasse verstreichen. Nächstes Blatt darauflegen (3 Schichten pro Crêpe).",
      "Im Airfryer (leicht ölen!) bei 190°C ca. 8-10 Min backen, bis das Ei im Inneren KOMPLETT durchgestockt und das Papier kross ist.",
      "Mit Hoisin-Sauce bestreichen, falten und servieren."
    ],
    checks: "Balanced ✓ · Schwangerschaft ✓ (Eimasse komplett durchbacken)",
    swaps: "Reispapier ↔ Vollkorn-Tortillas",
    side: "Eine Tasse Jasmintee.",
    remind: true,
    riceCooker: { enabled: false },
  },
  {
    id: "mo-m",
    title: "Beef Chow Fun 干炒牛河 (Wok)",
    desc: "Breite Reisnudeln, pfannengerührt mit Rindfleischstreifen und Sojasprossen.",
    story: "Der Klassiker aus den kantonesischen Restaurants. Breite Reisnudeln sind ein Traum, wenn sie die würzige dunkle Sojasauce aufsaugen.",
    target: "≈80 g KH (2 P.) · Protein ≈28 g p. P.",
    ingredients: [
      "Reisnudeln (breit, getrocknet) 150 g",
      "Rindfleisch (sehr feine Streifen) 200 g",
      "Sojasprossen 100 g",
      "Sojasauce (dunkel & hell) 3 EL",
      "Frühlingszwiebel 20 g",
      "Knoblauch 1 Zehe"
    ],
    steps: [
      "Reisnudeln nach Packung einweichen/kochen, gut abtropfen lassen.",
      "Rindfleisch und Knoblauch im heißen Wok scharf anbraten (komplett durchgaren!).",
      "Sojasprossen und Frühlingszwiebeln dazugeben, 1 Min mitbraten.",
      "Nudeln und Sojasauce untermischen, kräftig durchschwenken."
    ],
    checks: "Balanced ✓ · Schwangerschaft ✓ (Rindfleisch GANZ durchbraten) · Diabetes ✓",
    swaps: "Rindfleisch ↔ Tofu (gebraten)",
    side: "-",
    remind: false,
    riceCooker: { enabled: false },
  },
  {
    id: "mo-a",
    title: "Donggu Huaji Fan 冬菇滑鸡饭 (Reiskocher)",
    desc: "Kantonesisches Hähnchen mit Shiitake-Pilzen, schonend über dem Reis gedämpft.",
    story: "Ein authentisches chinesisches One-Pot-Gericht. Die getrockneten Pilze bringen ein unvergleichliches Aroma mit, das direkt in den Reis zieht.",
    target: "≈82 g KH (2 P.) · Protein ≈30 g p. P.",
    ingredients: [
      "Reis (roh) 120 g",
      "Hähnchenbrust (gewürfelt) 200 g",
      "Shiitake (getrocknet) 20 g",
      "Sojasauce 2 EL",
      "Ingwer (fein gehackt) 10 g",
      "Gemüsebrühe 240 ml"
    ],
    steps: [
      "Shiitake in heißem Wasser 15 Min einweichen, dann in Streifen schneiden (Einweichwasser aufheben!).",
      "Hähnchen mit Sojasauce und Ingwer vermengen.",
      "Reis, Brühe, Shiitake-Wasser (als Teil der Flüssigkeit), Pilze und das Hähnchen in den Reiskocher füllen.",
      "Start drücken. Nach dem Kochen kräftig durchmischen."
    ],
    checks: "Balanced ✓ · Schwangerschaft ✓ (Huhn dampft sicher auf >80°C durch)",
    swaps: "Hähnchenbrust ↔ Hähnchenkeule",
    side: "Gedämpfter Brokkoli.",
    remind: true,
    riceCooker: { enabled: true, program: "Mixed / White Rice", water: "Brühe + Pilzwasser (Standard)", notes: "Pilzwasser bringt extrem viel Umami." },
  },

  // DIENSTAG
  {
    id: "di-f",
    title: "Tomaten-Ei-Nudelsuppe 番茄鸡蛋面",
    desc: "Warme, stärkende Nudelsuppe in einer natürlichen Tomatenbrühe.",
    story: "Ein Klassiker aus der chinesischen Hausmannskost. Die Säure der frischen Tomaten macht morgens wach, und das Ei liefert eine gute Portion Protein.",
    target: "≈75 g KH (2 P.) · Protein ≈20 g p. P.",
    ingredients: [
      "Weizennudeln 120 g",
      "Tomaten (sehr reif) 2 Stück",
      "Eier 3 Stück",
      "Gemüsebrühe 600 ml",
      "Frühlingszwiebel 10 g",
      "Sojasauce 1 EL"
    ],
    steps: [
      "Tomaten würfeln und in einem Topf anbraten, bis sie musig werden.",
      "Brühe und Sojasauce angießen, aufkochen lassen.",
      "Nudeln direkt in der Suppe garen.",
      "Wenn die Nudeln weich sind, die verquirlten Eier langsam einrühren (vollständig stocken lassen!)."
    ],
    checks: "Balanced ✓ · Schwangerschaft ✓ (Ei komplett gestockt) · Diabetes ✓",
    swaps: "Weizennudeln ↔ Reisnudeln",
    side: "-",
    remind: true,
    riceCooker: { enabled: false },
  },
  {
    id: "di-m",
    title: "Airfryer Tang Cu Li Ji 糖醋里脊",
    desc: "Knuspriges Schweinefilet süß-sauer, völlig fettarm aus der Heißluftfritteuse.",
    story: "Chinesisches Sweet & Sour Pork ist weltberühmt. Durch den Airfryer sparen wir uns das Frittieren. Die Maisstärke zaubert trotzdem eine fantastische Kruste.",
    target: "≈85 g KH (2 P.) · Protein ≈28 g p. P.",
    ingredients: [
      "Schweinefilet (in Würfeln) 250 g",
      "Maisstärke 2 EL",
      "Paprika (gewürfelt) 100 g",
      "Ananas (Dose) 50 g",
      "Ketchup & Reisessig je 2 EL",
      "Reis (gekocht) 150 g"
    ],
    steps: [
      "Schweinefilet würfeln, leicht salzen und in Maisstärke wälzen.",
      "Im Airfryer bei 200°C ca. 12-15 Min backen, bis es knusprig und INNEN GANZ DURCH ist.",
      "In einer Pfanne Ketchup, Essig, etwas Wasser und Paprika aufkochen.",
      "Das knusprige Fleisch und Ananas in der Sauce schwenken und über Reis servieren."
    ],
    checks: "Balanced ✓ · Schwangerschaft ✓ (Schweinefilet GANZ durchbraten)",
    swaps: "Schweinefilet ↔ Hähnchenbrust",
    side: "-",
    remind: false,
    riceCooker: { enabled: false },
  },
  {
    id: "di-a",
    title: "Taro & Lap Cheong Rice 芋头腊肠饭 (Reiskocher)",
    desc: "Herzhafter Reis mit Taro-Wurzel und chinesischer Wurst.",
    story: "Die Taro-Wurzel schmilzt im Reiskocher fast wie eine süße Kartoffel und macht den Reis extrem cremig. Die Wurst gibt das würzige Raucharoma ab.",
    target: "≈82 g KH (2 P.) · Protein ≈22 g p. P.",
    ingredients: [
      "Reis (roh) 120 g",
      "Taro (Wasserbrotwurzel, gewürfelt) 150 g",
      "Cabanossi (als Ersatz für Lap Cheong) 50 g",
      "Sojasauce 1 EL",
      "Hühnerbrühe 240 ml",
      "Frühlingszwiebel 10 g"
    ],
    steps: [
      "Wurst in Scheiben schneiden.",
      "Reis, Brühe, Taro, Wurst und Sojasauce in den Reiskocher füllen.",
      "Start drücken. Das Fett der Wurst und die Stärke des Taros erledigen den Rest.",
      "Am Ende gut durchmischen und mit Frühlingszwiebeln bestreuen."
    ],
    checks: "Balanced ✓ · Schwangerschaft ✓ (Wurst gart sicher durch) · Diabetes ✓",
    swaps: "Taro ↔ Süßkartoffel",
    side: "Ein Tomatensalat.",
    remind: true,
    riceCooker: { enabled: true, program: "Mixed / White Rice", water: "Brühe (Standard)", notes: "Taro wird butterweich." },
  },

  // MITTWOCH
  {
    id: "mi-f",
    title: "Miso-Spinat Oatmeal",
    desc: "Herzhafter Haferbrei, gekocht in Dashi, verfeinert mit Miso und frischem Spinat.",
    story: "Wer Miso-Suppe liebt, wird dieses Oatmeal verehren. Es ist warm, wohlig und blitzschnell fertig. Der Spinat fällt in der Restwärme herrlich zusammen.",
    target: "≈65 g KH (2 P.) · Protein ≈18 g p. P.",
    ingredients: [
      "Haferflocken 100 g",
      "Dashi oder Gemüsebrühe 400 ml",
      "Miso-Paste 1 EL",
      "Spinat (frisch) 50 g",
      "Eier (hartgekocht) 2 Stück"
    ],
    steps: [
      "Haferflocken in der Brühe aufkochen und einköcheln.",
      "In der letzten Minute den Spinat unterheben, bis er zusammenfällt.",
      "Vom Herd nehmen! Die Miso-Paste einrühren (darf nicht mehr kochen, um die Kulturen zu bewahren).",
      "Mit den halbierten, hartgekochten Eiern toppen."
    ],
    checks: "Balanced ✓ · Schwangerschaft ✓ (Eier hartgekocht)",
    swaps: "Eier ↔ Edamame",
    side: "Tee.",
    remind: true,
    riceCooker: { enabled: false },
  },
  {
    id: "mi-m",
    title: "Mapo Aubergine (Mild) 鱼香茄子",
    desc: "Auberginenstücke und Schweinehack in einer fantastischen süßlich-pikanten Sauce.",
    story: "Eine Abwandlung des Mapo Tofus. Die Aubergine saugt die Sauce auf wie ein Schwamm. Wir braten sie vorher kurz mit wenig Öl an, damit sie ihre Form behält.",
    target: "≈80 g KH (2 P.) · Protein ≈24 g p. P.",
    ingredients: [
      "Aubergine 250 g",
      "Schweinehack (mager) 150 g",
      "Knoblauch 2 Zehen & Ingwer 5 g",
      "Sojasauce 2 EL & Reisessig 1 EL",
      "Zucker 1 TL",
      "Reis (gekocht) 150 g"
    ],
    steps: [
      "Aubergine würfeln und in der Pfanne anbraten, bis sie weich wird. Herausnehmen.",
      "Hackfleisch, Knoblauch und Ingwer krümelig und KOMPLETT durchbraten.",
      "Sojasauce, Essig, Zucker und etwas Wasser zugeben. Aubergine zurück in die Pfanne.",
      "Kurz einköcheln lassen und über den Reis geben."
    ],
    checks: "Balanced ✓ · Schwangerschaft ✓ (Hack komplett durchbraten!)",
    swaps: "Schweinehack ↔ Hähnchenhack",
    side: "-",
    remind: false,
    riceCooker: { enabled: false },
  },
  {
    id: "mi-a",
    title: "Kabeljau mit Ingwer & Soja 清蒸鳕鱼饭 (Reiskocher)",
    desc: "Magerer Weißfisch, der auf dem Reis dämpft, übergossen mit Sojasauce und heißem Öl.",
    story: "Ein unglaublich sauberes, klares Gericht. Der Fisch wird im Dampf butterzart, und der Ingwer gibt eine großartige Frische.",
    target: "≈80 g KH (2 P.) · Protein ≈28 g p. P.",
    ingredients: [
      "Reis (roh) 120 g",
      "Kabeljau oder Seelachs (TK, aufgetaut) 200 g",
      "Ingwer (feine Streifen) 15 g",
      "Sojasauce 2 EL",
      "Speiseöl 1 EL",
      "Frühlingszwiebel 10 g"
    ],
    steps: [
      "Reis mit Wasser in den Reiskocher geben.",
      "Den Fisch auf den Reis legen und dick mit Ingwer bestreuen. Start drücken.",
      "Nach dem Kochen den Fisch leicht zerteilen. Frühlingszwiebeln aufstreuen.",
      "Öl kurz erhitzen, zusammen mit der Sojasauce über den Fisch träufeln."
    ],
    checks: "Balanced ✓ · Schwangerschaft ✓ (Kabeljau quecksilberarm, dämpft sicher auf >80°C durch)",
    swaps: "Kabeljau ↔ Lachs",
    side: "Gedämpfter Spinat.",
    remind: true,
    riceCooker: { enabled: true, program: "White Rice / Mixed", water: "Standard", notes: "Fisch gibt Feuchtigkeit ab." },
  },

  // DONNERSTAG
  {
    id: "do-f",
    title: "Schweinehack-Congee 瘦肉粥",
    desc: "Wärmender, glatter Reisbrei mit magerem Schweinehack und feinem Ingwer.",
    story: "Im Original kommt oft noch das 'Tausendjährige Ei' hinein. Da dieses in der Schwangerschaft riskant ist, bleiben wir beim puren, herrlich würzigen Hackfleisch.",
    target: "≈70 g KH (2 P.) · Protein ≈22 g p. P.",
    ingredients: [
      "Reis (roh) 80 g",
      "Hühnerbrühe 800 ml",
      "Schweinehack (mager) 150 g",
      "Ingwer (feine Streifen) 10 g",
      "Frühlingszwiebel 10 g",
      "Sojasauce 1 EL"
    ],
    steps: [
      "Reis in Brühe ca. 45 Min zu Congee einkochen.",
      "Hackfleisch mit Sojasauce mischen und auflockern.",
      "Hack und Ingwer in den köchelnden Brei geben und sicher durchgaren lassen (ca. 10 Min).",
      "Mit Frühlingszwiebeln servieren."
    ],
    checks: "Balanced ✓ · Schwangerschaft ✓ (Hackfleisch komplett durchkochen!)",
    swaps: "Schweinehack ↔ Hähnchenhack",
    side: "Tee.",
    remind: true,
    riceCooker: { enabled: false },
  },
  {
    id: "do-m",
    title: "Viral Chili Oil Eggs auf Avocado Toast 🌶️🍳",
    isViral: true,
    desc: "Spiegeleier, die direkt in mildem Chili-Öl knusprig gebraten werden.",
    story: "Ein weltweiter Food-Trend! Das Chili-Öl (Crispy Chili Oil) röstet das Eiweiß extrem knusprig und verleiht ihm eine fantastische, tiefrote Farbe. Serviert auf cremigem Avocado-Toast.",
    target: "≈50 g KH (2 P.) · Protein ≈20 g p. P.",
    ingredients: [
      "Vollkorn-Toast 4 Scheiben",
      "Eier 4 Stück",
      "Mildes Chili-Öl (Crispy Chili Oil) 1 EL",
      "Avocado (reif) 1 Stück",
      "Frühlingszwiebel 10 g"
    ],
    steps: [
      "Chili-Öl in einer Pfanne bei mittlerer Hitze erwärmen.",
      "Die Eier direkt in das Öl schlagen.",
      "Deckel auflegen und braten, bis das Eiweiß und Eigelb GANZ durchgestockt sind.",
      "Avocado auf den getoasteten Broten zerdrücken, Eier darauflegen und mit Frühlingszwiebeln toppen."
    ],
    checks: "Balanced ✓ · Schwangerschaft ✓ (Eigelb muss komplett fest sein) · Diabetes ✓",
    swaps: "Avocado ↔ Frischkäse",
    side: "Ein Stück Gurke.",
    remind: false,
    riceCooker: { enabled: false },
  },
  {
    id: "do-a",
    title: "Pai Gu Fan 排骨饭 (Reiskocher)",
    desc: "Schweinegulasch in schwarzer Bohnensauce dämpft direkt über dem Reis.",
    story: "In Dim Sum Restaurants dämpft man Ribs oft in kleinen Körben. Hier landet der ganze fleischige, salzige Saft direkt im Reis darunter.",
    target: "≈80 g KH (2 P.) · Protein ≈28 g p. P.",
    ingredients: [
      "Reis (roh) 120 g",
      "Schweinegulasch (klein geschnitten) 200 g",
      "Schwarze Bohnensauce 1 EL",
      "Sojasauce 1 EL",
      "Hühnerbrühe 240 ml",
      "Pak Choi 150 g"
    ],
    steps: [
      "Fleisch in kleine Stücke schneiden, mit Bohnenpaste und Sojasauce vermengen.",
      "Reis und Brühe in den Reiskocher füllen.",
      "Das marinierte Fleisch gleichmäßig oben auflegen (nicht einrühren!). Start drücken.",
      "Pak Choi in den letzten 5 Min im Dampfaufsatz garen. Danach alles kräftig durchmischen."
    ],
    checks: "Balanced ✓ · Schwangerschaft ✓ (Fleisch wird durchgedämpft >80°C)",
    swaps: "Schweinegulasch ↔ Putenbrust",
    side: "-",
    remind: true,
    riceCooker: { enabled: true, program: "Mixed / White Rice", water: "Brühe (Standard)", notes: "Bohnenpaste ist salzig, Brühe evtl. leicht strecken." },
  },

  // FREITAG
  {
    id: "fr-f",
    title: "Airfryer Custard Toast 카스타드 토스트",
    isViral: true,
    desc: "Toast, belegt mit einer cremigen Joghurt-Ei-Mischung, gebacken im Airfryer.",
    story: "Ein riesiger Frühstückshit! Eine Mischung aus Joghurt und Ei wird in eine Kuhle im Toast gegeben. Beim Backen entsteht ein süßer, puddingartiger Belag.",
    target: "≈75 g KH (2 P.) · Protein ≈18 g p. P.",
    ingredients: [
      "Vollkorn-Toast 4 Scheiben",
      "Griechischer Joghurt (pasteurisiert) 4 EL",
      "Ei 1 Stück",
      "Agavendicksaft 1 TL",
      "Beeren (z.B. Himbeeren) 50 g"
    ],
    steps: [
      "Joghurt, Ei und Agave gut verquirlen.",
      "Mit einem Löffel eine Kuhle in die Mitte der Toastscheiben drücken.",
      "Die Joghurt-Mischung in die Kuhle füllen, mit Beeren belegen.",
      "Im Airfryer bei 170°C ca. 8-10 Min backen, bis der 'Pudding' komplett fest ist (kein flüssiges Ei!)."
    ],
    checks: "Balanced ✓ · Schwangerschaft ✓ (Ei-Masse muss komplett gestockt sein)",
    swaps: "Beeren ↔ Apfelspalten",
    side: "Kaffee.",
    remind: true,
    riceCooker: { enabled: false },
  },
  {
    id: "fr-m",
    title: "Zha Cai Nudel-Wok 榨菜肉丝面",
    desc: "Weizennudeln gebraten mit Zha Cai (eingelegte Senfknolle) und Schweinefleisch.",
    story: "Zha Cai bringt eine fantastische, säuerlich-würzige Knusprigkeit in jedes Pfannengericht. Es hebt das Schweinefleisch auf ein ganz neues Level.",
    target: "≈80 g KH (2 P.) · Protein ≈26 g p. P.",
    ingredients: [
      "Weizennudeln 150 g",
      "Schweineschnitzel (in feinen Streifen) 150 g",
      "Zha Cai (eingelegte Senfknolle, in Streifen) 50 g",
      "Sojasauce 1 EL",
      "Knoblauch 1 Zehe",
      "Frühlingszwiebel 20 g"
    ],
    steps: [
      "Nudeln kochen und abtropfen.",
      "Schweinefleisch und Knoblauch im heißen Wok scharf anbraten (komplett durchgaren!).",
      "Die Zha Cai-Streifen hinzufügen und kurz mitrösten.",
      "Nudeln und Sojasauce untermischen, gut durchschwenken."
    ],
    checks: "Balanced ✓ · Schwangerschaft ✓ (Schweinefleisch durch)",
    swaps: "Schweinefleisch ↔ Hähnchenbrust",
    side: "Ein paar Edamame.",
    remind: false,
    riceCooker: { enabled: false },
  },
  {
    id: "fr-a",
    title: "Viral Tomato Beef Rice 番茄牛肉饭 (Reiskocher)",
    isViral: true,
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
    side: "-",
    remind: true,
    riceCooker: { enabled: true, program: "White Rice / Mixed", water: "Brühe (etwas weniger wg. Tomate)", notes: "Tomate gut zerdrücken." },
  },

  // SAMSTAG
  {
    id: "sa-f",
    title: "Schwarzer Sesam Haferbrei 黑芝麻燕麦",
    desc: "Tiefschwarzer, nussiger Porridge mit schwarzer Sesampaste und Honig.",
    story: "Schwarzer Sesam ist in China ein Superfood für Haare und Haut. Die Paste färbt das Oatmeal dramatisch schwarz und gibt ihm ein grandioses, erdig-süßes Aroma.",
    target: "≈65 g KH (2 P.) · Protein ≈18 g p. P.",
    ingredients: [
      "Haferflocken 100 g",
      "Milch 400 ml",
      "Schwarze Sesampaste 2 EL",
      "Agavendicksaft 1 EL",
      "Walnüsse 20 g"
    ],
    steps: [
      "Haferflocken in der Milch aufkochen, bis der Brei andickt.",
      "Sesampaste und Agavendicksaft unterrühren.",
      "Mit gehackten Walnüssen garnieren."
    ],
    checks: "Balanced ✓ · Schwangerschaft ✓ · Diabetes ✓",
    swaps: "Schwarze Sesampaste ↔ Erdnussmus",
    side: "Kaffee.",
    remind: true,
    riceCooker: { enabled: false },
  },
  {
    id: "sa-m",
    title: "Airfryer Siu Yuk 脆皮烧肉 (Crispy Pork Belly)",
    desc: "Chinesischer knuspriger Schweinebauch mit einer brillanten Kruste.",
    story: "Das Krachen der Kruste ist Musik. Im Airfryer bläst sich die Schwarte perfekt auf, während das überschüssige Fett einfach abtropft.",
    target: "≈80 g KH (2 P.) · Protein ≈30 g p. P.",
    ingredients: [
      "Schweinebauch (mit Schwarte) 300 g",
      "Salz (für Kruste) 1 EL",
      "Fünf-Gewürze-Pulver 1 TL",
      "Essig (zum Bepinseln)",
      "Reis (gekocht) 120 g",
      "Gurke 100 g"
    ],
    steps: [
      "Schwarte oft einstecken, mit Essig bepinseln und dick mit Salz bedecken (zieht Feuchtigkeit). Fleischseite würzen.",
      "Bei 180°C 25 Min im Airfryer. Salzschicht entfernen, bei 200°C ca. 10 Min Kruste poppen lassen.",
      "Fleisch (muss durch sein!) in Scheiben schneiden. Mit Reis und frischer Gurke servieren."
    ],
    checks: "Balanced ✓ · Schwangerschaft ✓ (Fleisch sehr hoch erhitzt)",
    swaps: "Schweinebauch ↔ Hähnchenschenkel (mit Haut)",
    side: "-",
    remind: false,
    riceCooker: { enabled: false },
  },
  {
    id: "sa-a",
    title: "Garnelen-Erbsen Reis 虾仁青豆饭 (Reiskocher)",
    desc: "Simpler, asiatisch angehauchter Reistopf mit Garnelen und grünen Erbsen.",
    story: "Ein Gericht, das dir die Arbeit abnimmt. Die Garnelen dämpfen über dem Reis und bleiben saftig, während der Reis den kräftigen Fond aufnimmt.",
    target: "≈80 g KH (2 P.) · Protein ≈26 g p. P.",
    ingredients: [
      "Reis (roh) 120 g",
      "Garnelen (TK, aufgetaut) 200 g",
      "Erbsen (TK) 50 g",
      "Sojasauce 1 EL",
      "Gemüsebrühe 240 ml",
      "Knoblauch 1 Zehe"
    ],
    steps: [
      "Reis, Brühe, zerdrückten Knoblauch und Sojasauce in den Topf geben.",
      "Garnelen und Erbsen oben auflegen.",
      "Starten. Nach dem Kochen alles vorsichtig durchheben."
    ],
    checks: "Balanced ✓ · Schwangerschaft ✓ (Garnelen dampfgaren sicher durch)",
    swaps: "Garnelen ↔ Hähnchenbrust",
    side: "Ein Spritzer Zitrone.",
    remind: true,
    riceCooker: { enabled: true, program: "White Rice / Mixed", water: "Brühe (Standard)", notes: "Garnelen vorher gut abtropfen lassen." },
  },

  // SONNTAG
  {
    id: "so-f",
    title: "Airfryer Rice Paper Dumplings 🥟",
    isViral: true,
    desc: "Quadratische, knusprige Teigtaschen aus Reispapier, gefüllt mit Rinderhack und Kohl.",
    story: "Ein toller Hack, wenn man keinen Nudelteig kneten möchte. Reispapier-Blätter werden wie Briefumschläge um die Füllung gefaltet und im Airfryer extrem kross gebacken.",
    target: "≈75 g KH (2 P.) · Protein ≈24 g p. P.",
    ingredients: [
      "Reispapier 8 Blatt",
      "Rinderhack (mager) 150 g",
      "Weißkohl (fein gehackt) 100 g",
      "Sojasauce 2 EL",
      "Sesamöl 1 TL",
      "Sojasauce zum Dippen"
    ],
    steps: [
      "Rinderhack und Kohl in der Pfanne krümelig und KOMPLETT durch braten. Mit Sojasauce würzen.",
      "Reispapier nass machen, Füllung in die Mitte, zu einem Quadrat falten (zwei Blätter pro Tasche für Stabilität).",
      "Im Airfryer (leicht geölt) bei 190°C ca. 10 Min backen.",
      "Mit Dip servieren."
    ],
    checks: "Balanced ✓ · Schwangerschaft ✓ (Hack vorher durchbraten!) · Diabetes ✓",
    swaps: "Rinderhack ↔ Tofu-Crumble",
    side: "Gurkensalat.",
    remind: false,
    riceCooker: { enabled: false },
  },
  {
    id: "so-m",
    title: "Pao Jiang Dou Hähnchen Wok 泡豇豆炒鸡肉",
    desc: "Hähnchenhack, gebraten mit säuerlichen, eingelegten Schlangenbohnen.",
    story: "Pao Jiang Dou (säuerlich eingelegte Bohnen) sind eine absolute Offenbarung aus Sichuan. Die feine Säure schneidet durch das Hähnchenfleisch und macht das Gericht unglaublich appetitanregend.",
    target: "≈80 g KH (2 P.) · Protein ≈28 g p. P.",
    ingredients: [
      "Hähnchenhack 150 g",
      "Pao Jiang Dou (saure Bohnen, fein gehackt) 80 g",
      "Knoblauch 1 Zehe",
      "Sojasauce 1 EL",
      "Reis (gekocht) 150 g",
      "Paprika (gewürfelt) 50 g"
    ],
    steps: [
      "Knoblauch und Paprika im Wok kurz anbraten.",
      "Hähnchenhack dazugeben und krümelig sowie KOMPLETT durchbraten.",
      "Die gehackten sauren Bohnen untermischen.",
      "Mit Sojasauce abschmecken und über Reis servieren."
    ],
    checks: "Balanced ✓ · Schwangerschaft ✓ (Hähnchenhack gut durchbraten)",
    swaps: "Hähnchenhack ↔ Schweinehack",
    side: "-",
    remind: false,
    riceCooker: { enabled: false },
  },
  {
    id: "so-a",
    title: "Kürbis-Hähnchen-Reis 南瓜鸡肉饭 (Reiskocher)",
    desc: "Kürbis und Hähnchenbrust dämpfen zusammen im Reiskocher. Ein süß-herzhafter Traum.",
    story: "Ein Wohlfühlessen aus Südchina. Der Kürbis zerfällt fast und hüllt jedes Reiskorn in ein cremiges, süßliches Gold.",
    target: "≈80 g KH (2 P.) · Protein ≈30 g p. P.",
    ingredients: [
      "Reis (roh) 120 g",
      "Kürbis (z.B. Hokkaido, gewürfelt) 150 g",
      "Hähnchenbrust (gewürfelt) 200 g",
      "Sojasauce 2 EL",
      "Knoblauch 1 Zehe",
      "Hühnerbrühe 240 ml"
    ],
    steps: [
      "Hähnchen kurz mit Sojasauce und Knoblauch vermengen.",
      "Reis waschen, in den Topf geben und Brühe (minimal weniger als normal) hinzufügen.",
      "Hähnchen und Kürbis auf dem Reis verteilen.",
      "Start drücken. Danach alles sorgfältig durchmischen (Kürbis musen)."
    ],
    checks: "Balanced ✓ · Schwangerschaft ✓ (Hähnchen gart im Topf sicher durch) · Diabetes ✓",
    swaps: "Hähnchen ↔ Schweinehack",
    side: "Miso-Suppe.",
    remind: true,
    riceCooker: { enabled: true, program: "Mixed / White Rice", water: "Brühe (etwas weniger als normal)", notes: "Kürbis gibt Wasser ab." },
  },
];

export default function Woche22DE() {
  return (
    <PlanTemplate
      meta={meta}
      data={DATA}
      dayNames={DAY_NAME_DE}
      uiTitles={UI_TITLES}
      subtitle="Chinesische Wok-Hits · Reiskocher-Magie · Balanced"
      heroChips={["Woche 22", "Chinesische Wok-Hits & Reiskocher", "Täglich 1× 🍚 Reiskocher"]}
    />
  );
}

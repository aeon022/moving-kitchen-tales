/*
  Moving Kitchen Tales – Woche 12 (Start: 2026-03-16)
  Fokus: Virale Airfryer-Hacks, Originaltitel (CN/JP/KR), Reiskocher-Magie, CN/JP/KR + EU Crossover.
  Inhalt: Balanced, Schwangerschaftssicher (alles komplett durchgegart), Diabetesfreundlich.
*/

import React from "react";
import PlanTemplate from "../PlanTemplate";

export const meta = {
  title: "Woche 12",
  startDate: "2026-03-16",
  id: "woche-12-2026-03-16",
  lang: "de",
  sidebar: "Woche 12 (2026-03-16)",
};

const DAY_NAME_DE = {
  mo: "Montag (2026-03-16)",
  di: "Dienstag (2026-03-17)",
  mi: "Mittwoch (2026-03-18)",
  do: "Donnerstag (2026-03-19)",
  fr: "Freitag (2026-03-20)",
  sa: "Samstag (2026-03-21)",
  so: "Sonntag (2026-03-22)",
};

const UI_TITLES = {
  main: "Rezepte Woche 12",
  list: "Einkaufsliste Woche 12",
};

export const DATA = [
  // MONTAG
  {
    id: "mo-f",
    title: "Airfryer Avocado-Egg-Boats アボカドエッグ",
    isViral: true,
    desc: "Eine halbe Avocado, gefüllt mit einem Ei und im Airfryer gebacken.",
    story: "Ein riesiger Social-Media-Hit für ein proteinreiches, schnelles Frühstück. Das Ei backt perfekt in der Mulde der Avocado, während das Fruchtfleisch leicht anröstet.",
    target: "≈60 g KH (2 P.) · Protein ≈18 g p. P.",
    ingredients: [
      "Avocado (reif) 1 Stück",
      "Eier 2 Stück",
      "Vollkorn-Toast 4 Scheiben",
      "Sriracha-Sauce (mild) 1 TL",
      "Salz & Pfeffer"
    ],
    steps: [
      "Avocado halbieren, Kern entfernen. Etwas Fruchtfleisch auslöffeln, um die Mulde zu vergrößern.",
      "Jeweils ein Ei in die Mulde schlagen.",
      "Im Airfryer bei 180°C für ca. 12-15 Minuten backen, bis das Ei komplett durchgestockt ist (kein flüssiges Eigelb!).",
      "Mit Salz, Pfeffer und Sriracha würzen. Dazu Vollkorntoast."
    ],
    checks: "Balanced ✓ · Schwangerschaft ✓ (Eier komplett durchgebacken!) · Diabetes ✓",
    swaps: "Avocado ↔ Tomatenhälften",
    side: "Ein warmer Tee.",
    remind: true,
    riceCooker: { enabled: false },
  },
  {
    id: "mo-m",
    title: "Soba-Nudelsalat そばサラダ",
    desc: "Erfrischende japanische Buchweizennudeln in cremiger Erdnusssauce.",
    story: "Wenn es schnell gehen muss: Soba-Nudeln garen in 4 Minuten und schmecken kalt fantastisch. Die Erdnusssauce liefert die nötigen Fette und Proteine.",
    target: "≈85 g KH (2 P.) · Protein ≈20 g p. P.",
    ingredients: [
      "Soba-Nudeln 150 g",
      "Erdnussbutter 2 EL",
      "Sojasauce 2 EL",
      "Reisessig 1 EL",
      "Gurke (in Streifen) 100 g",
      "Edamame (geschält) 100 g"
    ],
    steps: [
      "Soba-Nudeln und Edamame kochen, danach eiskalt abschrecken.",
      "Erdnussbutter, Sojasauce, Essig und etwas warmes Wasser zu einem glatten Dressing rühren.",
      "Nudeln, Edamame und Gurkenstreifen im Dressing schwenken."
    ],
    checks: "Balanced ✓ · Schwangerschaft ✓ · Diabetes ✓ (Buchweizen ist super blutzuckerfreundlich)",
    swaps: "Erdnussbutter ↔ Tahini",
    side: "Ein hartgekochtes Ei (optional).",
    remind: false,
    riceCooker: { enabled: false },
  },
  {
    id: "mo-a",
    title: "Hainan-Style Schweinefilet-Reis 海南猪肉饭 (Reiskocher)",
    desc: "Zartes Schweinefilet dämpft in einem würzigen Ingwer-Knoblauch-Reis.",
    story: "Das klassische Hainan-Gericht wird eigentlich mit fettem Huhn gemacht. Wir nehmen mageres Schweinefilet – das gart im Reiskocher butterweich und aromatisiert den Reis wunderbar.",
    target: "≈80 g KH (2 P.) · Protein ≈28 g p. P.",
    ingredients: [
      "Reis (roh) 120 g",
      "Schweinefilet (am Stück oder dicke Medaillons) 200 g",
      "Hühnerbrühe 240 ml",
      "Ingwer (fein gehackt) 15 g",
      "Knoblauch 2 Zehen",
      "Sojasauce 1 EL"
    ],
    steps: [
      "Reis, Brühe, Ingwer, zerdrückten Knoblauch und Sojasauce in den Reiskocher geben.",
      "Schweinefilet oben drauflegen. Start drücken.",
      "Nach dem Kochen das Fleisch herausnehmen, in Scheiben schneiden und auf dem gut umgerührten Reis anrichten."
    ],
    checks: "Balanced ✓ · Schwangerschaft ✓ (Schweinefilet gart im Reiskocher >80°C komplett durch)",
    swaps: "Schweinefilet ↔ Hähnchenbrust",
    side: "Gedämpfter Pak Choi.",
    remind: true,
    riceCooker: { enabled: true, program: "White Rice / Mixed", water: "Brühe (Standard)", notes: "Fleisch nicht zu klein schneiden, damit es saftig bleibt." },
  },

  // DIENSTAG
  {
    id: "di-f",
    title: "Cloud Egg Toast 클라우드 에그 (Airfryer)",
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
    id: "di-m",
    title: "Knoblauch-Butter Yaki Udon ガリバタ焼きうどん",
    desc: "Bratnudeln auf japanische Art mit einer herrlichen Knoblauch-Butter-Soja-Glasur.",
    story: "Yaki Udon ist in japanischen Izakayas ein Muss. Die Kombination aus Butter und Sojasauce ist ein unschlagbares Umami-Duo.",
    target: "≈85 g KH (2 P.) · Protein ≈20 g p. P.",
    ingredients: [
      "Udon-Nudeln (vorgegart) 400 g",
      "Butter 20 g",
      "Sojasauce 2 EL",
      "Knoblauch 2 Zehen",
      "Weißkohl (geschnitten) 150 g",
      "Champignons 100 g"
    ],
    steps: [
      "Knoblauch, Kohl und Pilze in der Butter anbraten.",
      "Udon-Nudeln kurz heiß abspülen und mit in den Wok geben.",
      "Sojasauce darüber gießen und alles kräftig schwenken, bis die Nudeln die Sauce aufgesaugt haben."
    ],
    checks: "Balanced ✓ · Schwangerschaft ✓ · Diabetes ✓",
    swaps: "Udon ↔ Vollkorn-Spaghetti",
    side: "Etwas gerösteter Sesam on top.",
    remind: false,
    riceCooker: { enabled: false },
  },
  {
    id: "di-a",
    title: "Linsen-Karotten-Reis 扁豆鸡肉饭 (Reiskocher)",
    desc: "Ein proteinreicher Reistopf mit Linsen, warmen Gewürzen und zartem Hühnchen.",
    story: "Ein Crossover, das leicht in Richtung indisches Biryani geht, aber im Reiskocher komplett ohne Aufwand gelingt. Die Linsen schmelzen förmlich.",
    target: "≈82 g KH (2 P.) · Protein ≈28 g p. P.",
    ingredients: [
      "Reis (roh) 100 g",
      "Rote Linsen (roh, gewaschen) 40 g",
      "Hähnchenbrust (gewürfelt) 200 g",
      "Karotten (in Stiften) 100 g",
      "Gemüsebrühe 300 ml",
      "Currypulver (mild) 1 TL"
    ],
    steps: [
      "Reis und Linsen gut waschen und mit der Brühe in den Topf geben. Currypulver einrühren.",
      "Hähnchen und Karotten oben auflegen.",
      "Start drücken.",
      "Am Ende alles durchmischen, die Linsen geben dem Reis eine tolle cremige Textur."
    ],
    checks: "Balanced ✓ · Schwangerschaft ✓ (Huhn durch) · Diabetes ✓ (Linsen drosseln Blutzucker)",
    swaps: "Hähnchen ↔ Räuchertofu",
    side: "Ein Klecks Joghurt.",
    remind: true,
    riceCooker: { enabled: true, program: "Mixed / White Rice", water: "Brühe (Reis + Linsen berechnen)", notes: "Rote Linsen zerfallen perfekt im Reiskocher." },
  },

  // MITTWOCH
  {
    id: "mi-f",
    title: "Miso-Haferbrei mit Ei 味噌オートミール",
    desc: "Ein herzhafter Haferbrei, verfeinert mit Umami-Miso und einem hartgekochten Ei.",
    story: "Wer Miso-Suppe zum Frühstück liebt, wird dieses Oatmeal vergöttern. Es ist warm, wohlig und extrem schnell gemacht.",
    target: "≈65 g KH (2 P.) · Protein ≈18 g p. P.",
    ingredients: [
      "Haferflocken 100 g",
      "Wasser oder Gemüsebrühe 400 ml",
      "Miso-Paste 1 EL",
      "Eier (hartgekocht) 2 Stück",
      "Spinat (frisch) 50 g"
    ],
    steps: [
      "Haferflocken in Brühe/Wasser einköcheln.",
      "In der letzten Minute den Spinat unterheben, bis er zusammenfällt.",
      "Vom Herd nehmen! Miso-Paste einrühren (darf nicht mehr kochen).",
      "Mit halbierten, hartgekochten Eiern servieren."
    ],
    checks: "Balanced ✓ · Schwangerschaft ✓ (Eier hartgekocht)",
    swaps: "Spinat ↔ Frühlingszwiebeln",
    side: "Tee.",
    remind: true,
    riceCooker: { enabled: false },
  },
  {
    id: "mi-m",
    title: "Sushi Bake Muffins 寿司ベイクマフィン",
    isViral: true,
    desc: "Der Sushi-Bake-Trend in kleinen, handlichen Cupcake-Formen gebacken.",
    story: "Sushi Bake ist der Hit auf Potlucks. Wir machen ihn portionierbar: Reis und Lachs in eine Muffinform drücken, im Airfryer backen. Der Rand wird grandios knusprig!",
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
      "Gekochten Reis in Silikon-Muffinförmchen drücken (wie ein kleines Nest).",
      "Lachs-Mischung darauf verteilen.",
      "Im Airfryer bei 190°C ca. 10 Min backen. Mit Nori garnieren."
    ],
    checks: "Balanced ✓ · Schwangerschaft ✓ (Lachs komplett durchgaren, Mayo pasteurisiert)",
    swaps: "Lachs ↔ Krebsfleisch-Imitat (Surimi)",
    side: "Edamame.",
    remind: false,
    riceCooker: { enabled: false },
  },
  {
    id: "mi-a",
    title: "Gyudon-Style Rindfleisch-Reis 牛丼 (Reiskocher)",
    desc: "Der japanische Fast-Food-Klassiker Gyudon (Rindfleischschale) aus dem Reiskocher.",
    story: "Hauchdünnes Rindfleisch und weiche Zwiebeln dämpfen direkt auf dem Reis. Der süßlich-salzige Fleischsaft sickert nach unten – köstlich!",
    target: "≈80 g KH (2 P.) · Protein ≈25 g p. P.",
    ingredients: [
      "Reis (roh) 120 g",
      "Rindfleisch (sehr dünne Scheiben) 150 g",
      "Zwiebel (in Ringen) 1 Stück",
      "Sojasauce 2 EL",
      "Mirin 1 EL",
      "Dashi-Brühe 240 ml"
    ],
    steps: [
      "Reis und Dashi in den Reiskocher.",
      "Zwiebeln und Rindfleisch locker (!) darüber verteilen. Soja und Mirin angießen.",
      "Start drücken. Nach dem Kochen gründlich durchmischen."
    ],
    checks: "Balanced ✓ · Schwangerschaft ✓ (Fleisch wird im Dampf >80°C sicher durchgegart)",
    swaps: "Rindfleisch ↔ Schweinefleisch (dünn geschnitten)",
    side: "Eingelegter Ingwer.",
    remind: true,
    riceCooker: { enabled: true, program: "Mixed / White Rice", water: "Dashi (Standard)", notes: "Fleisch auffächern, nicht klumpen." },
  },

  // DONNERSTAG
  {
    id: "do-f",
    title: "Schwedischer Grießbrei (Mannagrynsgröt)",
    desc: "Ein feiner, wärmender Grießbrei mit etwas Zimt und Obst.",
    story: "In Schweden isst man diesen samtigen Brei oft im Winter. Er ist rasend schnell gemacht und legt sich wie eine warme Decke in den Magen.",
    target: "≈70 g KH (2 P.) · Protein ≈15 g p. P.",
    ingredients: [
      "Weichweizengrieß 60 g",
      "Milch 500 ml",
      "Agavendicksaft 1 EL",
      "Zimt 1 TL",
      "Beeren (frisch oder TK aufgetaut) 50 g"
    ],
    steps: [
      "Milch aufkochen. Grieß unter ständigem Rühren einrieseln lassen.",
      "Bei schwacher Hitze ca. 3-5 Min quellen lassen.",
      "Mit Agavendicksaft, Zimt und Beeren toppen."
    ],
    checks: "Balanced ✓ · Schwangerschaft ✓",
    swaps: "Grieß ↔ Polenta (fein)",
    side: "-",
    remind: true,
    riceCooker: { enabled: false },
  },
  {
    id: "do-m",
    title: "Tomaten-Ei-Pfanne auf Nudeln 番茄炒蛋面",
    desc: "Die berühmte chinesische Tomaten-Ei-Pfanne, serviert über Nudeln statt Reis.",
    story: "Dieses Gericht geht immer. Die Tomaten zerkochen zu einer natürlichen Sauce, das Ei fängt den Geschmack auf. Ein geniales Comfort-Mittagessen.",
    target: "≈85 g KH (2 P.) · Protein ≈20 g p. P.",
    ingredients: [
      "Weizennudeln oder Udon 150 g",
      "Tomaten (sehr reif) 3 Stück",
      "Eier 3 Stück",
      "Ketchup 1 EL",
      "Sojasauce 1 EL",
      "Frühlingszwiebel 10 g"
    ],
    steps: [
      "Eier in der Pfanne komplett durchbraten, herausnehmen.",
      "Tomaten würfeln und in der Pfanne weichschmoren, bis Sauce entsteht. Ketchup und Soja dazu.",
      "Eier zurückgeben. Gekochte Nudeln untermischen."
    ],
    checks: "Balanced ✓ · Schwangerschaft ✓ (Eier komplett gestockt)",
    swaps: "Weizennudeln ↔ Reis",
    side: "-",
    remind: false,
    riceCooker: { enabled: false },
  },
  {
    id: "do-a",
    title: "Erbsen-Schinken Risi e Bisi (Reiskocher)",
    desc: "Ein italienischer Frühlingsklassiker. Reis mit Erbsen und Schinken aus dem Reiskocher.",
    story: "'Risi e Bisi' ist in Venedig Kult. Es ist eine Mischung aus Suppe und Risotto. Im Reiskocher wird es zum perfekten, stressfreien Feierabendgericht.",
    target: "≈80 g KH (2 P.) · Protein ≈22 g p. P.",
    ingredients: [
      "Risottoreis oder Rundkornreis 120 g",
      "Erbsen (TK) 150 g",
      "Kochschinken (gewürfelt) 100 g",
      "Gemüsebrühe 300 ml",
      "Parmesan 30 g",
      "Butter 10 g"
    ],
    steps: [
      "Reis, Brühe und Schinken in den Reiskocher geben. Starten.",
      "In den letzten 5 Minuten die aufgetauten Erbsen dazugeben (dann bleiben sie grün).",
      "Nach dem Kochen Parmesan und Butter kräftig unterrühren, bis es schlotzig ist."
    ],
    checks: "Balanced ✓ · Schwangerschaft ✓ (Käse pasteurisiert, Schinken erhitzt)",
    swaps: "Schinken ↔ Speck (Pancetta)",
    side: "Tomatensalat.",
    remind: true,
    riceCooker: { enabled: true, program: "White Rice", water: "Brühe (etwas mehr für Risi e Bisi Textur)", notes: "Soll am Ende sehr schlotzig sein." },
  },

  // FREITAG
  {
    id: "fr-f",
    title: "TikTok Wrap-Hack (접는 랩 Folded Wrap)",
    isViral: true,
    desc: "Ein eingeschnittener Tortilla-Wrap, in Vierteln belegt und zur Dreieckstasche gefaltet.",
    story: "Der wohl praktischste Food-Hack des Internets. Das Falten macht den Wrap extrem stabil, und im Airfryer oder Pfanne wird er außen rundum knusprig.",
    target: "≈65 g KH (2 P.) · Protein ≈20 g p. P.",
    ingredients: [
      "Vollkorn-Tortillas 2 Stück",
      "Käse (Gouda, gerieben) 40 g",
      "Kochschinken 2 Scheiben",
      "Ei (als flaches Omelett gebraten) 2 Stück",
      "Spinat 20 g"
    ],
    steps: [
      "Eier vorher zu zwei dünnen, durchgebratenen Omeletts braten.",
      "Wraps von unten bis zur Mitte einschneiden.",
      "Viertel 1: Käse, Viertel 2: Ei, Viertel 3: Schinken, Viertel 4: Spinat.",
      "Rundum falten zum Dreieck. In Pfanne/Airfryer knusprig toasten."
    ],
    checks: "Balanced ✓ · Schwangerschaft ✓ (Ei durch, Käse pasteurisiert)",
    swaps: "Schinken ↔ Räucherlachs",
    side: "Kaffee.",
    remind: true,
    riceCooker: { enabled: false },
  },
  {
    id: "fr-m",
    title: "Kroatische Krautfleckerl (Krpice sa zeljem)",
    desc: "Ein deftiger Balkan-Klassiker: Nudeln mit karamellisiertem Weißkohl und Speck.",
    story: "Ein unglaublich günstiges, aber grandioses Wohlfühlessen aus Kroatien. Der Weißkohl wird in der Pfanne süßlich und goldbraun.",
    target: "≈85 g KH (2 P.) · Protein ≈18 g p. P.",
    ingredients: [
      "Fleckerl oder quadratische Nudeln 150 g",
      "Weißkohl (grob gehackt) 250 g",
      "Speckwürfel 50 g",
      "Zwiebel 1 Stück",
      "Salz & reichlich Pfeffer",
      "Öl 1 EL"
    ],
    steps: [
      "Nudeln kochen.",
      "Speck und Zwiebeln im Wok/Pfanne anbraten. Kohl dazugeben und bei mittlerer Hitze ca. 15-20 Min braten, bis er leicht karamellisiert und weich ist.",
      "Nudeln unterheben, kräftig mit Salz und Pfeffer abschmecken."
    ],
    checks: "Balanced ✓ · Schwangerschaft ✓ (Speck wird durchgebraten) · Diabetes ✓",
    swaps: "Speck ↔ Räuchertofu",
    side: "-",
    remind: false,
    riceCooker: { enabled: false },
  },
  {
    id: "fr-a",
    title: "Garnelen-Paella Asiatisch 海鲜炖饭 (Reiskocher)",
    desc: "Reiskocher-Paella mit Garnelen, Erbsen und Sojasauce.",
    story: "Eine Fusion aus asiatischer Reiskocher-Technik und Paella-Zutaten. Der Reis fängt den gesamten Garnelen-Fond auf.",
    target: "≈80 g KH (2 P.) · Protein ≈26 g p. P.",
    ingredients: [
      "Reis (roh) 120 g",
      "Garnelen (TK, aufgetaut) 200 g",
      "Erbsen (TK) 80 g",
      "Paprika (gewürfelt) 50 g",
      "Sojasauce 1 EL",
      "Gemüsebrühe 240 ml"
    ],
    steps: [
      "Reis, Brühe, Paprika und Sojasauce in den Topf geben.",
      "Garnelen und Erbsen oben auflegen.",
      "Starten. Nach dem Kochen alles vorsichtig durchheben."
    ],
    checks: "Balanced ✓ · Schwangerschaft ✓ (Garnelen dampfgaren sicher durch)",
    swaps: "Garnelen ↔ Hähnchenbrust",
    side: "Ein Spritzer Limette.",
    remind: true,
    riceCooker: { enabled: true, program: "White Rice / Mixed", water: "Brühe (Standard)", notes: "Garnelen vorher gut abtropfen lassen." },
  },

  // SAMSTAG
  {
    id: "sa-f",
    title: "Süßkartoffel-Toast 고구마 토스트 (Airfryer)",
    desc: "Süßkartoffelscheiben ersetzen das Brot, getoppt mit Quark und Beeren.",
    story: "Ein cooler Low-Gluten-Trend. Die Süßkartoffelscheiben werden im Airfryer außen fest und innen weich – perfekt als 'Brot-Ersatz'.",
    target: "≈65 g KH (2 P.) · Protein ≈16 g p. P.",
    ingredients: [
      "Süßkartoffel (groß) 1 Stück",
      "Quark (Magerstufe) 150 g",
      "Agavendicksaft 1 EL",
      "Beeren (TK, aufgetaut) 50 g",
      "Zimt"
    ],
    steps: [
      "Süßkartoffel längs in ca. 1 cm dicke Scheiben schneiden.",
      "Im Airfryer bei 180°C ca. 12-15 Min backen, bis sie weich und der Rand leicht knusprig ist.",
      "Quark mit Agave süßen.",
      "Die Süßkartoffel-'Toasts' mit Quark, Beeren und Zimt toppen."
    ],
    checks: "Balanced ✓ · Diabetes ✓ (Süßkartoffel hat einen tollen Glykämischen Index)",
    swaps: "Quark ↔ Körniger Frischkäse",
    side: "Kaffee.",
    remind: true,
    riceCooker: { enabled: false },
  },
  {
    id: "sa-m",
    title: "Wok-Schweinehack mit grünen Bohnen 干煸四季豆",
    desc: "Gan Bian Si Ji Dou (Style). Grüne Bohnen, scharf angebraten mit herzhaftem Hackfleisch.",
    story: "Ein Klassiker aus Sichuan. Im Original extrem ölig und scharf. Wir machen es 'Balanced', nehmen mageres Hack und braten die Bohnen mit wenig Öl knackig.",
    target: "≈80 g KH (2 P.) · Protein ≈28 g p. P.",
    ingredients: [
      "Grüne Bohnen (frisch oder TK) 200 g",
      "Schweinehack (mager) 150 g",
      "Knoblauch 1 Zehe",
      "Sojasauce 2 EL",
      "Reis (gekocht) 150 g"
    ],
    steps: [
      "Grüne Bohnen im Wok anbraten, bis sie runzelig werden. (Oder vorher 3 Min blanchieren).",
      "Hackfleisch und Knoblauch dazugeben, krümelig und KOMPLETT durchbraten.",
      "Sojasauce angießen, alles gut durchschwenken.",
      "Mit Reis servieren."
    ],
    checks: "Balanced ✓ · Schwangerschaft ✓ (Hack und Bohnen müssen komplett durchgegart sein!)",
    swaps: "Schweinehack ↔ Veganes Hack",
    side: "-",
    remind: false,
    riceCooker: { enabled: false },
  },
  {
    id: "sa-a",
    title: "Ganze Zwiebel & Feta Reis 丸ごと玉ねぎご飯",
    isViral: true,
    desc: "Eine Zwiebel schmilzt im Reiskocher. Feta bringt die cremige Salzigkeit.",
    story: "Zwei virale Trends verschmolzen: Der Zwiebel-Reis aus Japan und der Baked-Feta-Trend! Die Zwiebel wird süß wie Karamell, der Feta cremig. Genial.",
    target: "≈80 g KH (2 P.) · Protein ≈22 g p. P.",
    ingredients: [
      "Reis (roh) 120 g",
      "Zwiebel (mittlere Größe, geschält) 1 Stück",
      "Feta (pasteurisiert) 100 g",
      "Gemüsebrühe 240 ml",
      "Olivenöl 1 EL",
      "Oregano 1 TL"
    ],
    steps: [
      "Reis, Brühe und Öl in den Topf. Die Zwiebel oben kreuzweise tief einschneiden (nicht zerteilen) und in die Mitte setzen.",
      "Den Feta daneben legen.",
      "Reiskocher starten.",
      "Nach dem Kochen die butterweiche Zwiebel zerdrücken und mit dem Käse-Reis vermengen."
    ],
    checks: "Balanced ✓ · Schwangerschaft ✓ (Käse pasteurisiert) · Diabetes ✓",
    swaps: "Feta ↔ Mozzarella",
    side: "Tomatensalat.",
    remind: true,
    riceCooker: { enabled: true, program: "White Rice", water: "Brühe (Standard)", notes: "Zwiebel kreuzweise einschneiden, damit sie weich wird." },
  },

  // SONNTAG
  {
    id: "so-f",
    title: "Reispapier-Jianbing 煎饼 (Airfryer)",
    desc: "Chinesischer Streetfood-Crêpe, als Wrap mit Reispapier gehackt.",
    story: "Jianbing ist ein Meisterwerk. Da der Teig schwer zu machen ist, nehmen wir Reispapier! Es wird mit Ei bestrichen, gefaltet und im Airfryer knusprig gebacken.",
    target: "≈65 g KH (2 P.) · Protein ≈20 g p. P.",
    ingredients: [
      "Reispapier 4 Blatt",
      "Eier 2 Stück",
      "Hoisin-Sauce 1 EL",
      "Frühlingszwiebel 10 g",
      "Sesam 1 TL"
    ],
    steps: [
      "Ein Reispapier in den Airfryer legen. Verquirltes Ei darauf verstreichen, mit Zwiebel und Sesam bestreuen.",
      "Bei 180°C ca. 5 Min backen (Ei MUSS durchgestockt sein).",
      "Herausnehmen, mit Hoisin-Sauce bestreichen, falten und genießen."
    ],
    checks: "Balanced ✓ · Schwangerschaft ✓ (Ei komplett durch!)",
    swaps: "Hoisin ↔ Milde Chilisauce",
    side: "Warme Sojamilch.",
    remind: true,
    riceCooker: { enabled: false },
  },
  {
    id: "so-m",
    title: "Airfryer Tonkatsu 豚カツ mit Kohl",
    desc: "Japanisches Schweineschnitzel, fettarm im Airfryer mit Panko-Kruste gebacken.",
    story: "Tonkatsu ist Liebe. Damit wir uns das Frittierfett sparen, sprühen wir das Panko-Mehl nur leicht mit Öl ein. Der Airfryer erledigt den Rest mit Bravour.",
    target: "≈80 g KH (2 P.) · Protein ≈30 g p. P.",
    ingredients: [
      "Schweineschnitzel 2 Stück",
      "Panko-Mehl 40 g",
      "Ei 1 Stück & Mehl (Panierstraße)",
      "Weißkohl (sehr fein gehobelt) 150 g",
      "Tonkatsu-Sauce 2 EL",
      "Reis (gekocht) 150 g"
    ],
    steps: [
      "Schnitzel klopfen, in Mehl, Ei und Panko wenden. Leicht mit Öl besprühen.",
      "Im Airfryer bei 200°C ca. 15-18 Min backen (Fleisch komplett durchgaren!).",
      "In Streifen schneiden und auf dem Kohlberg anrichten. Sauce darüber geben.",
      "Mit Reis essen."
    ],
    checks: "Balanced ✓ · Schwangerschaft ✓ (Schwein durchgaren)",
    swaps: "Schwein ↔ Hähnchenbrust",
    side: "Miso-Suppe.",
    remind: false,
    riceCooker: { enabled: false },
  },
  {
    id: "so-a",
    title: "Pilz-Lachs Takikomi Gohan 鮭ときのこの炊き込みご飯",
    desc: "Herbstlicher japanischer Mischreis mit Lachs und Shiitake.",
    story: "Takikomi Gohan ist die japanische Kunst, Reis zusammen mit saisonalen Zutaten zu dämpfen. Der Lachs und die Pilze geben ihr volles Aroma an das Getreide ab.",
    target: "≈82 g KH (2 P.) · Protein ≈28 g p. P.",
    ingredients: [
      "Reis (roh) 120 g",
      "Lachsfilet 200 g",
      "Shiitake (oder Champignons) 100 g",
      "Sojasauce 2 EL",
      "Dashi-Brühe 240 ml",
      "Karotte (Stifte) 50 g"
    ],
    steps: [
      "Reis, Dashi und Sojasauce in den Topf geben.",
      "Pilze, Karottenstifte und den Lachs (am Stück) oben auflegen.",
      "Reiskocher starten.",
      "Nach dem Kochen den Lachs zerpflücken und alles fluffig untermischen."
    ],
    checks: "Balanced ✓ · Schwangerschaft ✓ (Lachs gart im Dampf komplett durch) · Diabetes ✓",
    swaps: "Lachs ↔ Weißfisch",
    side: "Edamame.",
    remind: true,
    riceCooker: { enabled: true, program: "Mixed / White Rice", water: "Dashi (Standard)", notes: "Nicht umrühren vor dem Kochen." },
  },
];

export default function Woche12DE() {
  return (
    <PlanTemplate
      meta={meta}
      data={DATA}
      dayNames={DAY_NAME_DE}
      uiTitles={UI_TITLES}
      subtitle="Sushi Bake & Donburi · Reiskocher-Vielfalt · Balanced"
      heroChips={["Woche 12", "Virale Trends & Wohlfühlküche", "Täglich 1× 🍚 Reiskocher"]}
    />
  );
}

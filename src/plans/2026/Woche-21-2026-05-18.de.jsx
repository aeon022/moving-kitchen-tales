// src/plans/2026/Woche-21-2026-05-18.de.jsx
import React, { useMemo, useState, useEffect } from "react";
import { exportHTMLById, ensureScript } from "@/utils/exporters";
import { buildEmbedCss } from "@/utils/embedCss";

/*
  GhibliKitchen – Woche 21 (Start: 2026-05-18)
  Status: KOMPLETT & FUNKTIONSFÄHIG (Alle 21 Rezepte)
  Fokus: Virale Airfryer-Hacks, Reiskocher-Magie, Zha Cai, Pao Jiang Dou & Goldbrasse.
*/

// ---- Meta ----
export const meta = {
  title: "Woche 21",
  startDate: "2026-05-18",
  id: "woche-21-2026-05-18",
  lang: "de",
  sidebar: "Woche 21 (2026-05-18)",
};

const FILE_BASE = "Woche 21 2026-05-18";

const UI_TITLES = {
  main: "Rezepte Woche 21",
  list: "Einkaufsliste Woche 21",
};

// ---- THEME ----
const THEME_VARS_LIGHT = {
  "--bg": "#FAF7F1",
  "--text": "#111827",
  "--panel": "#FFFFFF",
  "--border": "rgba(0,0,0,.10)",
  "--muted": "#6B7280",
  "--chip-bg": "#EEF8F3",
  "--shadow": "0 8px 24px rgba(0,0,0,.12)",
  "--accent": "#e07a9a",
  "--accent-2": "#2aa769",
  "--grad-hero": "linear-gradient(135deg, rgba(224,122,154,.2), rgba(42,167,105,.18))",
  "--btn-on-bg": "#EEF8F3",
  "--btn-border": "rgba(0,0,0,.15)",
};
const THEME_VARS_DARK = {
  "--bg": "#0f1115",
  "--text": "#E5E7EB",
  "--panel": "#161A22",
  "--border": "rgba(255,255,255,.12)",
  "--muted": "#9CA3AF",
  "--chip-bg": "rgba(255,255,255,.06)",
  "--shadow": "0 10px 28px rgba(0,0,0,.45)",
  "--accent": "#e07a9a",
  "--accent-2": "#2aa769",
  "--grad-hero": "linear-gradient(135deg, rgba(224,122,154,.18), rgba(42,167,105,.15))",
  "--btn-on-bg": "rgba(255,255,255,.10)",
  "--btn-border": "rgba(255,255,255,.18)",
};

function useSystemPrefersDark() {
  const [pref, setPref] = useState(false);
  useEffect(() => {
    const m = window.matchMedia?.("(prefers-color-scheme: dark)");
    if (!m) return;
    setPref(m.matches);
    const fn = (e) => setPref(e.matches);
    m.addEventListener?.("change", fn);
    return () => m.removeEventListener?.("change", fn);
  }, []);
  return pref;
}
function themeVars(mode) {
  return mode === "dark" ? THEME_VARS_DARK : THEME_VARS_LIGHT;
}

function getLangFromQuery() {
  if (typeof window === "undefined") return null;
  try {
    const qs = new URLSearchParams(window.location.search);
    const fromQuery = qs.get("lang");
    return fromQuery ? String(fromQuery).slice(0, 2).toLowerCase() : null;
  } catch { return null; }
}
function useLangHint() {
  const [q, setQ] = useState(getLangFromQuery());
  useEffect(() => {
    const onChange = () => setQ(getLangFromQuery());
    window.addEventListener?.("popstate", onChange);
    window.addEventListener?.("hashchange", onChange);
    return () => {
      window.removeEventListener?.("popstate", onChange);
      window.removeEventListener?.("hashchange", onChange);
    };
  }, []);
  return q;
}

const scrollToId = (id) => (e) => {
  e.preventDefault();
  const el = document.getElementById(id);
  if (el) {
    const y = el.getBoundingClientRect().top + window.scrollY - 20;
    window.scrollTo({ top: y, behavior: "smooth" });
  }
};

const cardPanelStyle = {
  background: "var(--panel)",
  borderRadius: 18,
  padding: 24,
  boxShadow: "var(--shadow)",
  border: "1px solid var(--border)",
};

const tagChip = (text) => (
  <span className="ghk-chip" key={text} style={{ display: "inline-block", padding: "2px 10px", borderRadius: 999, background: "var(--chip-bg)", border: "1px solid var(--border)", fontSize: 12, marginRight: 6, marginBottom: 6 }}>
    {text}
  </span>
);

const viralChip = () => (
  <span className="ghk-chip" key="viral" style={{ display: "inline-block", padding: "2px 10px", borderRadius: 999, background: "linear-gradient(135deg, #ff7e5f, #feb47b)", color: "#fff", fontWeight: "bold", border: "none", fontSize: 12, marginRight: 6, marginBottom: 6 }}>
    🔥 Viral Trend
  </span>
);

const DAYS_ORDER = ["mo", "di", "mi", "do", "fr", "sa", "so"];
const DAY_NAME_DE = {
  mo: "Montag (2026-05-18)",
  di: "Dienstag (2026-05-19)",
  mi: "Mittwoch (2026-05-20)",
  do: "Donnerstag (2026-05-21)",
  fr: "Freitag (2026-05-22)",
  sa: "Samstag (2026-05-23)",
  so: "Sonntag (2026-05-24)",
};

// -----------------------------------------------------------------------
// DATA (ALLE 21 REZEPTE)
// -----------------------------------------------------------------------
const DATA = [
  // MONTAG
  {
    id: "mo-f",
    title: "Viral Pesto Egg Bagel 🥯",
    isViral: true,
    desc: "Ein aufgeschnittener Bagel, bei dem das Ei direkt in frischem Pesto knusprig gebraten wird.",
    story: "Eine Variation des Pesto-Egg-Trends. Das Pesto liefert das Öl zum Braten und zieht gleichzeitig tief in die Ränder des Bagels ein.",
    target: "≈65 g KH (2 P.) · Protein ≈20 g p. P.",
    ingredients: [
      "Vollkorn-Bagel 2 Stück",
      "Eier 2 Stück",
      "Grünes Pesto (Glas) 2 EL",
      "Feta (pasteurisiert) 40 g",
      "Cherrytomaten 50 g"
    ],
    steps: [
      "Pesto in der Pfanne erhitzen.",
      "Die Eier direkt auf das Pesto aufschlagen. Sofort den Deckel auflegen und braten, bis Eigelb und Eiweiß komplett durchgestockt sind.",
      "Bagels aufschneiden und toasten.",
      "Pesto-Eier auf den Bagels anrichten, mit zerbröseltem Feta und Tomaten toppen."
    ],
    checks: "Balanced ✓ · Schwangerschaft ✓ (Eier GANZ durchgaren, Käse pasteurisiert)",
    swaps: "Bagel ↔ Vollkornbrötchen",
    side: "Kaffee.",
    remind: true,
    riceCooker: { enabled: false },
  },
  {
    id: "mo-m",
    title: "Zha Cai Nudel-Wok 榨菜肉丝面",
    desc: "Weizennudeln gebraten mit Zha Cai (eingelegte Senfknolle) und Schweinefleisch.",
    story: "Zha Cai bringt eine fantastische, säuerlich-würzige Knusprigkeit in jedes Pfannengericht. Es hebt das Schweinefleisch auf ein ganz neues Level.",
    target: "≈80 g KH (2 P.) · Protein ≈26 g p. P.",
    ingredients: [
      "Weizennudeln (oder Mie-Nudeln) 150 g",
      "Schweineschnitzel (in feinen Streifen) 150 g",
      "Zha Cai (eingelegte Senfknolle, in feinen Streifen) 50 g",
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
    id: "mo-a",
    title: "Hainan-Style Goldbrasse (Reiskocher)",
    desc: "Zartes Goldbrassenfilet, das mit Ingwer und Soja direkt im Reiskocher dämpft.",
    story: "Ein asiatisches Meisterwerk, bei dem der Reis den gesamten Sud des Fisches auffängt. Die Goldbrasse dämpft wunderbar weich.",
    target: "≈80 g KH (2 P.) · Protein ≈28 g p. P.",
    ingredients: [
      "Reis (roh) 120 g",
      "Goldbrassenfilet (ohne Gräten) 200 g",
      "Ingwer (in feinen Streifen) 15 g",
      "Knoblauch 2 Zehen",
      "Hühnerbrühe 240 ml",
      "Sojasauce 2 EL"
    ],
    steps: [
      "Reis, Brühe, zerdrückten Knoblauch und 1 EL Sojasauce in den Topf geben.",
      "Goldbrassenfilet auf den Reis legen und großzügig mit Ingwerstreifen belegen.",
      "Reiskocher starten.",
      "Nach dem Kochen den Fisch leicht zerteilen und mit der restlichen Sojasauce beträufeln. Vorsichtig untermischen."
    ],
    checks: "Balanced ✓ · Schwangerschaft ✓ (Fisch gart im Dampf >80°C komplett durch)",
    swaps: "Goldbrasse ↔ Kabeljau",
    side: "Gedämpfter Spinat.",
    remind: true,
    riceCooker: { enabled: true, program: "Mixed / White Rice", water: "Brühe (Standard)", notes: "Fischfilet vorher auf Gräten prüfen!" },
  },

  // DIENSTAG
  {
    id: "di-f",
    title: "Viral Grated Egg Avocado Wrap 🥑",
    isViral: true,
    desc: "Ein Vollkorn-Wrap, gefüllt mit Avocado und fein geriebenem, hartgekochtem Ei.",
    story: "Der Grated-Egg-Trend in handlicher Wrap-Form. Das Ei wird so fein, dass es sich mit der Avocado zu einer großartigen Creme verbindet.",
    target: "≈60 g KH (2 P.) · Protein ≈18 g p. P.",
    ingredients: [
      "Vollkorn-Tortillas 2 Stück",
      "Eier (hartgekocht) 2 Stück",
      "Avocado (reif) 1 Stück",
      "Mayo (pasteurisiert) 1 EL",
      "Limettensaft 1 TL"
    ],
    steps: [
      "Avocado mit Limettensaft zerdrücken.",
      "Die Wraps im Airfryer oder in der Pfanne kurz anwärmen, damit sie weich werden.",
      "Avocado auf die Wraps streichen. Die hartgekochten Eier mit einer Reibe darüber reiben.",
      "Mit Mayo toppen, fest zusammenrollen und halbieren."
    ],
    checks: "Balanced ✓ · Schwangerschaft ✓ (Eier hartgekocht, Mayo aus Tube) · Diabetes ✓",
    swaps: "Avocado ↔ Tomatenscheiben",
    side: "Ein Glas Wasser mit Zitrone.",
    remind: true,
    riceCooker: { enabled: false },
  },
  {
    id: "di-m",
    title: "Airfryer Gnocchi mit Wurst & Paprika",
    desc: "Knusprige Gnocchi, geröstet mit Wurstscheiben und buntem Gemüse.",
    story: "Ein Blech-Gericht, das im Airfryer noch schneller geht. Die Gnocchi werden außen kross und innen fluffig.",
    target: "≈85 g KH (2 P.) · Protein ≈18 g p. P.",
    ingredients: [
      "Gnocchi (Kühlregal) 300 g",
      "Geflügelwurst oder Cabanossi 80 g",
      "Paprika 1 Stück",
      "Olivenöl 1 EL",
      "Italienische Kräuter 1 TL"
    ],
    steps: [
      "Paprika würfeln, Wurst in Scheiben schneiden.",
      "Gnocchi, Wurst, Paprika und Öl in einer Schüssel gut vermengen.",
      "In den Airfryer geben und bei 190°C ca. 12-15 Minuten rösten. Zwischendurch gut durchschütteln."
    ],
    checks: "Balanced ✓ · Schwangerschaft ✓ (Wurst wird stark erhitzt)",
    swaps: "Geflügelwurst ↔ Räuchertofu",
    side: "Ein Klecks Magerquark zum Dippen.",
    remind: false,
    riceCooker: { enabled: false },
  },
  {
    id: "di-a",
    title: "Miso-Pilz-Reis mit Tofu (Reiskocher)",
    desc: "Ein tief-aromatischer, veganer Reistopf mit Miso, Champignons und Tofu.",
    story: "Die Miso-Paste wird direkt im Kochwasser aufgelöst und durchdringt jedes Reiskorn. Der Tofu liefert eine großartige Textur.",
    target: "≈80 g KH (2 P.) · Protein ≈22 g p. P.",
    ingredients: [
      "Reis (roh) 120 g",
      "Miso-Paste (hell) 2 EL",
      "Champignons 150 g",
      "Fester Tofu (gewürfelt) 150 g",
      "Gemüsebrühe 240 ml",
      "Sesamöl 1 TL"
    ],
    steps: [
      "Miso-Paste in der leicht warmen Brühe auflösen.",
      "Reis, Miso-Brühe, Pilze und Tofu in den Reiskocher füllen.",
      "Start drücken.",
      "Nach dem Kochen das Sesamöl darüberträufeln und den Reis kräftig auflockern."
    ],
    checks: "Balanced ✓ · Diabetes ✓ (Pilze und Tofu sind exzellent für den Blutzucker)",
    swaps: "Tofu ↔ Hähnchenbrust",
    side: "Etwas Frühlingszwiebel.",
    remind: true,
    riceCooker: { enabled: true, program: "Mixed / White Rice", water: "Brühe (Standard)", notes: "Miso gut auflösen, um Klumpen zu vermeiden." },
  },

  // MITTWOCH
  {
    id: "mi-f",
    title: "Süßkartoffel-Pancakes 🥞",
    desc: "Saftige Pancakes, deren Teig zu einem großen Teil aus Süßkartoffelpüree besteht.",
    story: "Eine geniale Resteverwertung für gebackene Süßkartoffeln. Die Pancakes werden saftig, leicht orange und haben eine tolle natürliche Süße.",
    target: "≈75 g KH (2 P.) · Protein ≈16 g p. P.",
    ingredients: [
      "Süßkartoffel-Püree 100 g",
      "Vollkornmehl 80 g",
      "Eier 2 Stück",
      "Milch 50 ml",
      "Backpulver 1 TL",
      "Zimt 1/2 TL"
    ],
    steps: [
      "Püree, Eier und Milch glatt rühren.",
      "Mehl, Backpulver und Zimt unterheben.",
      "In einer Pfanne bei mittlerer Hitze durchbacken. Sie brauchen etwas länger als normale Pancakes, damit sie komplett durch sind.",
      "Mit etwas Joghurt servieren."
    ],
    checks: "Balanced ✓ · Schwangerschaft ✓ (Komplett durchbacken!) · Diabetes ✓",
    swaps: "Süßkartoffel-Püree ↔ Kürbispüree",
    side: "Ein Klecks Magerquark.",
    remind: true,
    riceCooker: { enabled: false },
  },
  {
    id: "mi-m",
    title: "Crispy Rice Paper Dumplings (Schweinehack)",
    isViral: true,
    desc: "Reispapier-Blätter werden wie Briefumschläge um Schweinehack gefaltet und knusprig gebacken.",
    story: "Ein viraler Hack, wenn man keinen Nudelteig kneten möchte. Im Airfryer oder in der Pfanne wird das Reispapier unglaublich kross.",
    target: "≈75 g KH (2 P.) · Protein ≈24 g p. P.",
    ingredients: [
      "Reispapier 8 Blatt",
      "Schweinehack (mager) 150 g",
      "Weißkohl (fein gehackt) 100 g",
      "Sojasauce 2 EL",
      "Sesamöl 1 TL",
      "Reis (als Beilage) 100 g"
    ],
    steps: [
      "Schweinehack und Kohl in der Pfanne krümelig und KOMPLETT durch braten. Mit Sojasauce würzen.",
      "Reispapier nass machen, Füllung in die Mitte, zu einem Quadrat falten (zwei Blätter pro Tasche nutzen).",
      "Im Airfryer (leicht geölt) bei 190°C ca. 10 Min backen oder in der Pfanne knusprig braten.",
      "Mit Reis und Dip servieren."
    ],
    checks: "Balanced ✓ · Schwangerschaft ✓ (Hack vorher durchbraten!)",
    swaps: "Schweinehack ↔ Tofu-Crumble",
    side: "Sojasauce zum Dippen.",
    remind: false,
    riceCooker: { enabled: false },
  },
  {
    id: "mi-a",
    title: "Tomaten-Mozzarella Risotto トマトリゾット (Reiskocher)",
    desc: "Asiatische 'Whole Tomato'-Technik trifft auf Italien. Ein cremiges Risotto ohne Rühren.",
    story: "Die ganze Tomate schmilzt beim Kochen im Reiskocher. Zusammen mit dem Käse entsteht am Ende ein cremiges, narrensicheres Risotto.",
    target: "≈82 g KH (2 P.) · Protein ≈20 g p. P.",
    ingredients: [
      "Risottoreis 120 g",
      "Tomate (sehr groß und reif) 1 Stück",
      "Gemüsebrühe 240 ml",
      "Olivenöl 1 EL",
      "Mozzarella (pasteurisiert) 100 g",
      "Basilikum"
    ],
    steps: [
      "Reis, Brühe und Öl in den Topf geben.",
      "Strunk der Tomate entfernen und die Tomate im Ganzen in die Mitte setzen.",
      "Reiskocher starten.",
      "Am Ende die Tomate zerdrücken, Mozzarella unterheben bis er Fäden zieht."
    ],
    checks: "Balanced ✓ · Schwangerschaft ✓ (Mozzarella aus pasteurisierter Milch) · Diabetes ✓",
    swaps: "Mozzarella ↔ Feta",
    side: "Gedämpftes Hähnchen für mehr Protein.",
    remind: true,
    riceCooker: { enabled: true, program: "White Rice", water: "Brühe (etwas weniger als normal)", notes: "Tomate gut zerdrücken." },
  },

  // DONNERSTAG
  {
    id: "do-f",
    title: "Matcha-Haferbrei 抹茶オートミール",
    desc: "Cremiger, wärmender Haferbrei, verfeinert mit Antioxidantien aus grünem Matcha-Tee.",
    story: "Die Haferflocken-Basis bändigt die leichte Bitterkeit des Matchas perfekt. Sieht fantastisch aus und liefert sanfte Energie für den Tag.",
    target: "≈65 g KH (2 P.) · Protein ≈18 g p. P.",
    ingredients: [
      "Haferflocken 100 g",
      "Sojamilch oder Milch 400 ml",
      "Matcha-Pulver 1 TL",
      "Agavendicksaft 1 EL",
      "Mandeln (gehackt) 30 g",
      "Beeren (frisch oder TK aufgetaut) 50 g"
    ],
    steps: [
      "Matcha in einem Schuss warmem Wasser klümpchenfrei auflösen.",
      "Haferflocken in Sojamilch aufkochen, bis es cremig wird.",
      "Matcha und Agavendicksaft einrühren.",
      "Mit Nüssen und Beeren toppen."
    ],
    checks: "Balanced ✓ · Schwangerschaft ✓ (Matcha in Maßen ist unbedenklich)",
    swaps: "Matcha ↔ Kakaopulver",
    side: "-",
    remind: true,
    riceCooker: { enabled: false },
  },
  {
    id: "do-m",
    title: "Pao Jiang Dou & Hähnchen-Wok 泡豇豆炒鸡肉",
    desc: "Hähnchenhack, gebraten mit säuerlichen, eingelegten Schlangenbohnen.",
    story: "Pao Jiang Dou (säuerlich eingelegte Bohnen) sind eine absolute Offenbarung aus Sichuan. Die feine Säure schneidet durch das Hähnchenfleisch und macht das Gericht unglaublich appetitanregend.",
    target: "≈80 g KH (2 P.) · Protein ≈28 g p. P.",
    ingredients: [
      "Hähnchenhack 150 g",
      "Pao Jiang Dou (säuerliche Bohnen, fein gehackt) 80 g",
      "Knoblauch 1 Zehe",
      "Sojasauce 1 EL",
      "Reis (gekocht) 150 g",
      "Paprika (gewürfelt) 50 g"
    ],
    steps: [
      "Knoblauch und Paprika im Wok kurz anbraten.",
      "Hähnchenhack dazugeben und krümelig sowie KOMPLETT durchbraten.",
      "Die gehackten sauren Bohnen (Pao Jiang Dou) untermischen.",
      "Mit Sojasauce abschmecken und über Reis servieren."
    ],
    checks: "Balanced ✓ · Schwangerschaft ✓ (Hähnchenhack gut durchbraten)",
    swaps: "Hähnchenhack ↔ Schweinehack",
    side: "-",
    remind: false,
    riceCooker: { enabled: false },
  },
  {
    id: "do-a",
    title: "Jambalaya (Garnelen & Wurst) im Reiskocher",
    desc: "Südstaaten-Soulfood. Reis, Garnelen und Wurst garen in einer Cajun-Brühe.",
    story: "New Orleans Flair aus dem Reiskocher! Das Geheimnis sind Paprika, Tomatenmark und eine rauchige Wurst. Der Reis saugt diese Aromenwand komplett auf.",
    target: "≈84 g KH (2 P.) · Protein ≈30 g p. P.",
    ingredients: [
      "Reis (roh) 120 g",
      "Garnelen (TK, aufgetaut) 100 g",
      "Räucherwurst (Cabanossi) 50 g",
      "Paprika (gewürfelt) 1 Stück",
      "Tomatenmark 1 EL",
      "Hühnerbrühe 240 ml"
    ],
    steps: [
      "Reis, Brühe, Tomatenmark und Paprika im Reiskocher gut mischen.",
      "Garnelen und Wurstscheiben oben auflegen.",
      "Start drücken.",
      "Nach dem Kochen kräftig durchrühren. (Optional mit Paprika/Cajun-Gewürz nachschärfen)."
    ],
    checks: "Balanced ✓ · Schwangerschaft ✓ (Fleisch/Garnelen kochen auf >80°C sicher durch)",
    swaps: "Wurst ↔ Nur Garnelen (für weniger Fett)",
    side: "Ein grüner Salat.",
    remind: true,
    riceCooker: { enabled: true, program: "Mixed / White Rice", water: "Brühe (Standard)", notes: "Wurst gibt viel Geschmack ab." },
  },

  // FREITAG
  {
    id: "fr-f",
    title: "Savory Soy Oatmeal",
    desc: "Herzhafter Haferbrei, gewürzt mit Sojasauce und Sesamöl, serviert mit hartgekochtem Ei.",
    story: "Eine großartige Alternative zu traditionellem asiatischen Congee. Haferflocken kochen schneller und liefern langanhaltende, stabile Energie.",
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
    id: "fr-m",
    title: "Airfryer Honey-Garlic Tofu",
    desc: "Tofuwürfel mit einer Kruste aus dem Airfryer, geschwenkt in einer süßlich-würzigen Knoblauchsauce.",
    story: "Ein Klassiker aus dem Asia-Bistro. Im Airfryer gelingt die Tofu-Kruste fettsparend und behält dennoch ihren hervorragenden Biss.",
    target: "≈80 g KH (2 P.) · Protein ≈22 g p. P.",
    ingredients: [
      "Fester Tofu 300 g",
      "Maisstärke 2 EL",
      "Sojasauce 2 EL",
      "Honig oder Agavendicksaft 1 EL",
      "Knoblauch 2 Zehen (gepresst)",
      "Reis (gekocht) 150 g"
    ],
    steps: [
      "Tofu würfeln, gut abtupfen und in Maisstärke wenden.",
      "Im Airfryer bei 200°C ca. 12-15 Min backen, bis er knusprig ist.",
      "In einer Pfanne Sojasauce, Honig, Knoblauch und etwas Wasser kurz aufkochen.",
      "Den Tofu in der Sauce schwenken und auf Reis servieren."
    ],
    checks: "Balanced ✓ · Diabetes ✓ · Schwangerschaft ✓",
    swaps: "Tofu ↔ Hähnchenbrust",
    side: "Gedämpfter Brokkoli.",
    remind: false,
    riceCooker: { enabled: false },
  },
  {
    id: "fr-a",
    title: "Lachs & Pak Choi Takikomi 鮭とチンゲン菜のご飯",
    desc: "Reiskocher-Mischreis mit Lachs und viel frischem Pak Choi.",
    story: "Ein extrem gesundes, leichtes Abendessen. Der Lachs und die Dashi-Brühe sorgen für Umami, der Pak Choi bringt tollen Biss und Farbe in den Topf.",
    target: "≈80 g KH (2 P.) · Protein ≈28 g p. P.",
    ingredients: [
      "Reis (roh) 120 g",
      "Lachsfilet 200 g",
      "Pak Choi 100 g",
      "Dashi-Brühe 240 ml",
      "Sojasauce 1 EL"
    ],
    steps: [
      "Reis, Dashi und Sojasauce in den Reiskocher.",
      "Lachs im Ganzen darauflegen. Start drücken.",
      "Nach dem Kochen den Lachs mit einem Löffel zerteilen.",
      "Den in Streifen geschnittenen Pak Choi sofort unter den kochend heißen Reis heben (er gart in der Restwärme)."
    ],
    checks: "Balanced ✓ · Schwangerschaft ✓ (Lachs gart sicher durch)",
    swaps: "Lachs ↔ Weißfisch",
    side: "Ein paar Tropfen Zitronensaft.",
    remind: true,
    riceCooker: { enabled: true, program: "Mixed / White Rice", water: "Brühe (Standard)", notes: "Pak Choi erst am Schluss unterheben." },
  },

  // SAMSTAG
  {
    id: "sa-f",
    title: "Airfryer Croque Monsieur",
    desc: "Die französische Bistro-Legende als genialer Käse-Schinken-Toast aus der Heißluftfritteuse.",
    story: "Im Airfryer schmilzt der Käse perfekt, während das Brot von allen Seiten knusprig wird. Wir verzichten auf Béchamelsauce und machen es einfach und schnell.",
    target: "≈60 g KH (2 P.) · Protein ≈20 g p. P.",
    ingredients: [
      "Vollkorn-Toast 4 Scheiben",
      "Kochschinken 4 Scheiben",
      "Gouda oder Gruyère (pasteurisiert) 60 g",
      "Senf oder Mayo (pasteurisiert)",
      "Cherrytomaten 100 g"
    ],
    steps: [
      "Brot mit etwas Senf bestreichen.",
      "Mit Schinken und Käse belegen, zuklappen. Etwas Käse auch oben auf das Brot streuen.",
      "Im Airfryer bei 180°C ca. 6-8 Min backen, bis der Käse goldbraun blubbert.",
      "Dazu Tomaten naschen."
    ],
    checks: "Balanced ✓ · Schwangerschaft ✓ (Käse pasteurisiert, Schinken wird hoch erhitzt)",
    swaps: "Schinken ↔ Putenbrust",
    side: "Tomaten.",
    remind: true,
    riceCooker: { enabled: false },
  },
  {
    id: "sa-m",
    title: "Mildes Pad Krapow (Thai Basilikum Hähnchen)",
    desc: "Der thailändische Streetfood-König. Hähnchenhack gebraten mit viel Basilikum und Sojasauce.",
    story: "Im Original extrem scharf. Wir machen eine milde, familientaugliche Version. Das Hähnchenhack saugt die Sauce auf, der frische Basilikum gibt den hervorragenden Kick.",
    target: "≈80 g KH (2 P.) · Protein ≈28 g p. P.",
    ingredients: [
      "Hähnchenhack 200 g",
      "Basilikum (frisch, am besten Thai-Basilikum) 1 große Handvoll",
      "Sojasauce 2 EL",
      "Austernsauce 1 EL",
      "Knoblauch 2 Zehen",
      "Reis (gekocht) 150 g"
    ],
    steps: [
      "Hähnchenhack mit Knoblauch im Wok krümelig und KOMPLETT durchbraten.",
      "Sojasauce und Austernsauce dazugeben, kurz einkochen lassen.",
      "Pfanne vom Herd nehmen, den frischen Basilikum unterheben, bis er zusammenfällt.",
      "Mit Reis servieren."
    ],
    checks: "Balanced ✓ · Schwangerschaft ✓ (Hack komplett durchgegart!)",
    swaps: "Hähnchenhack ↔ Schweinehack",
    side: "Ein komplett durchgebratenes Spiegelei on top.",
    remind: false,
    riceCooker: { enabled: false },
  },
  {
    id: "sa-a",
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
    title: "Schwedische Laxsoppa (Lachssuppe)",
    desc: "Cremige, schwedische Lachssuppe mit Kartoffeln, Dill und einem Schuss Sahne.",
    story: "Der Suppenklassiker aus Skandinavien. Die Suppe ist wärmend, reichhaltig und wunderbar unkompliziert. Dill ist hier der Star.",
    target: "≈75 g KH (2 P.) · Protein ≈26 g p. P.",
    ingredients: [
      "Lachsfilet (gewürfelt) 200 g",
      "Kartoffeln (gewürfelt) 200 g",
      "Karotten & Lauch (geschnitten) 100 g",
      "Gemüsebrühe 600 ml",
      "Sahne (pasteurisiert) 50 ml",
      "Dill (frisch) 1 EL"
    ],
    steps: [
      "Kartoffeln und Gemüse in der Brühe ca. 15 Min kochen, bis sie weich sind.",
      "Sahne einrühren.",
      "Lachswürfel dazugeben und bei sehr schwacher Hitze ca. 5 Min garziehen lassen (nicht mehr sprudelnd kochen!).",
      "Mit Dill bestreuen."
    ],
    checks: "Balanced ✓ · Schwangerschaft ✓ (Lachs komplett durchgaren lassen)",
    swaps: "Sahne ↔ Hafercreme",
    side: "Ein Stück Vollkornbrot.",
    remind: false,
    riceCooker: { enabled: false },
  },
  {
    id: "so-a",
    title: "Ganze Zwiebel & Feta Reis 丸ごと玉ねぎ (Reiskocher)",
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
];

// -----------------------------------------------------------------------
// Shopping List Logic
// -----------------------------------------------------------------------
const CANON = {
  // Protein
  "Schweinefilet": { group: "Protein/Fisch/Tofu", label: "Schweinefilet", unitDefault: "g" },
  "Schweinegeschnetzeltes": { group: "Protein/Fisch/Tofu", label: "Schweinegeschnetzeltes", unitDefault: "g" },
  "Schweinegulasch": { group: "Protein/Fisch/Tofu", label: "Schweinegulasch", unitDefault: "g" },
  "Schweineschnitzel": { group: "Protein/Fisch/Tofu", label: "Schweineschnitzel", unitDefault: "g" },
  "Schweinehack": { group: "Protein/Fisch/Tofu", label: "Schweinehack (mager)", unitDefault: "g" },
  "Rinderhack": { group: "Protein/Fisch/Tofu", label: "Rinderhack (mager)", unitDefault: "g" },
  "Rindfleisch": { group: "Protein/Fisch/Tofu", label: "Rindfleisch", unitDefault: "g" },
  "Hähnchenbrust": { group: "Protein/Fisch/Tofu", label: "Hähnchenbrust", unitDefault: "g" },
  "Hähnchenkeule": { group: "Protein/Fisch/Tofu", label: "Hähnchenkeule", unitDefault: "g" },
  "Hähnchenhack": { group: "Protein/Fisch/Tofu", label: "Hähnchenhack", unitDefault: "g" },
  "Lachsfilet": { group: "Protein/Fisch/Tofu", label: "Lachsfilet", unitDefault: "g" },
  "Lachs": { group: "Protein/Fisch/Tofu", label: "Lachs", unitDefault: "g" },
  "Kabeljau": { group: "Protein/Fisch/Tofu", label: "Kabeljau/Seelachs", unitDefault: "g" },
  "Goldbrassenfilet": { group: "Protein/Fisch/Tofu", label: "Goldbrassenfilet", unitDefault: "g" },
  "Garnelen": { group: "Protein/Fisch/Tofu", label: "Garnelen (geschält)", unitDefault: "g" },
  "Thunfisch": { group: "Protein/Fisch/Tofu", label: "Thunfisch (Dose)", unitDefault: "g" },
  "Kochschinken": { group: "Protein/Fisch/Tofu", label: "Kochschinken", unitDefault: "g" },
  "Schinken": { group: "Protein/Fisch/Tofu", label: "Schinken/Bacon", unitDefault: "g" },
  "Geflügelwurst": { group: "Protein/Fisch/Tofu", label: "Geflügelwurst/Cabanossi", unitDefault: "g" },
  "Cabanossi": { group: "Protein/Fisch/Tofu", label: "Cabanossi/Räucherwurst", unitDefault: "g" },
  "Speckwürfel": { group: "Protein/Fisch/Tofu", label: "Speckwürfel", unitDefault: "g" },
  "Tofu": { group: "Protein/Fisch/Tofu", label: "Tofu", unitDefault: "g" },
  "Eier": { group: "Protein/Fisch/Tofu", label: "Eier", unitDefault: "Stück" },
  "Feta": { group: "Protein/Fisch/Tofu", label: "Feta (pasteurisiert)", unitDefault: "g" },
  "Parmesan": { group: "Protein/Fisch/Tofu", label: "Parmesan", unitDefault: "g" },
  "Gouda": { group: "Protein/Fisch/Tofu", label: "Gouda / Käse", unitDefault: "g" },
  "Cheddar": { group: "Protein/Fisch/Tofu", label: "Cheddar", unitDefault: "g" },
  "Käse": { group: "Protein/Fisch/Tofu", label: "Käse (Gouda/Cheddar)", unitDefault: "g" },
  "Quark": { group: "Protein/Fisch/Tofu", label: "Quark", unitDefault: "g" },

  // Gemüse
  "Pak Choi": { group: "Gemüse/Pilze", label: "Pak Choi", unitDefault: "g" },
  "Spinat": { group: "Gemüse/Pilze", label: "Spinat (frisch)", unitDefault: "g" },
  "Weißkohl": { group: "Gemüse/Pilze", label: "Weißkohl/Chinakohl", unitDefault: "g" },
  "Karotte": { group: "Gemüse/Pilze", label: "Karotten", unitDefault: "g" },
  "Gurke": { group: "Gemüse/Pilze", label: "Gurke", unitDefault: "g" },
  "Zucchini": { group: "Gemüse/Pilze", label: "Zucchini", unitDefault: "g" },
  "Edamame": { group: "Gemüse/Pilze", label: "Edamame", unitDefault: "g" },
  "Erbsen": { group: "Gemüse/Pilze", label: "Erbsen (TK)", unitDefault: "g" },
  "Brokkoli": { group: "Gemüse/Pilze", label: "Brokkoli", unitDefault: "g" },
  "Champignons": { group: "Gemüse/Pilze", label: "Champignons", unitDefault: "g" },
  "Shiitake": { group: "Gemüse/Pilze", label: "Shiitake", unitDefault: "g" },
  "Frühlingszwiebel": { group: "Gemüse/Pilze", label: "Frühlingszwiebeln", unitDefault: "g" },
  "Zwiebel": { group: "Gemüse/Pilze", label: "Zwiebeln", unitDefault: "g" },
  "Lauch": { group: "Gemüse/Pilze", label: "Lauch", unitDefault: "g" },
  "Knoblauch": { group: "Gemüse/Pilze", label: "Knoblauch", unitDefault: "Zehe" },
  "Ingwer": { group: "Gemüse/Pilze", label: "Ingwer", unitDefault: "g" },
  "Tomaten": { group: "Gemüse/Pilze", label: "Tomaten (frisch/Kirsch)", unitDefault: "g" },
  "Tomate": { group: "Gemüse/Pilze", label: "Tomate", unitDefault: "Stück" },
  "Cherrytomaten": { group: "Gemüse/Pilze", label: "Cherrytomaten", unitDefault: "g" },
  "Passierte Tomaten": { group: "Gemüse/Pilze", label: "Passierte Tomaten", unitDefault: "ml" },
  "Tomatenmark": { group: "Gemüse/Pilze", label: "Tomatenmark", unitDefault: "EL" },
  "Apfel": { group: "Gemüse/Pilze", label: "Apfel", unitDefault: "Stück" },
  "Banane": { group: "Gemüse/Pilze", label: "Banane", unitDefault: "Stück" },
  "Kürbis": { group: "Gemüse/Pilze", label: "Kürbis", unitDefault: "g" },
  "Avocado": { group: "Gemüse/Pilze", label: "Avocado", unitDefault: "Stück" },
  "Paprika": { group: "Gemüse/Pilze", label: "Paprika", unitDefault: "g" },
  "Kartoffeln": { group: "Gemüse/Pilze", label: "Kartoffeln", unitDefault: "g" },
  "Blaubeeren": { group: "Gemüse/Pilze", label: "Blaubeeren", unitDefault: "g" },
  "Beeren": { group: "Gemüse/Pilze", label: "Beeren (TK)", unitDefault: "g" },
  "Salat": { group: "Gemüse/Pilze", label: "Gemischter Salat", unitDefault: "g" },
  "Gewürzgurken": { group: "Gemüse/Pilze", label: "Gewürzgurken", unitDefault: "g" },
  "Zha Cai": { group: "Gemüse/Pilze", label: "Zha Cai (Senfknolle)", unitDefault: "g" },
  "Pao Jiang Dou": { group: "Gemüse/Pilze", label: "Pao Jiang Dou (Saure Bohnen)", unitDefault: "g" },

  // Carb
  "Reis": { group: "Reis/Nudeln/Sättigung", label: "Reis (roh/gekocht)", unitDefault: "g" },
  "Risottoreis": { group: "Reis/Nudeln/Sättigung", label: "Risottoreis", unitDefault: "g" },
  "Udon": { group: "Reis/Nudeln/Sättigung", label: "Udon-Nudeln", unitDefault: "g" },
  "Weizennudeln": { group: "Reis/Nudeln/Sättigung", label: "Weizennudeln", unitDefault: "g" },
  "Vollkorn-Nudeln": { group: "Reis/Nudeln/Sättigung", label: "Vollkorn-Nudeln", unitDefault: "g" },
  "Soba": { group: "Reis/Nudeln/Sättigung", label: "Soba-Nudeln", unitDefault: "g" },
  "Gnocchi": { group: "Reis/Nudeln/Sättigung", label: "Gnocchi", unitDefault: "g" },
  "Reispapier": { group: "Reis/Nudeln/Sättigung", label: "Reispapier", unitDefault: "Blatt" },
  "Vollkorn-Tortillas": { group: "Reis/Nudeln/Sättigung", label: "Tortilla-Wraps", unitDefault: "Stück" },
  "Toastbrot": { group: "Reis/Nudeln/Sättigung", label: "Toastbrot / Vollkorn", unitDefault: "Scheiben" },
  "Vollkorn-Toast": { group: "Reis/Nudeln/Sättigung", label: "Vollkorn-Toast", unitDefault: "Scheiben" },
  "Vollkornbrot": { group: "Reis/Nudeln/Sättigung", label: "Vollkornbrot", unitDefault: "Scheiben" },
  "Kartoffelrösti": { group: "Reis/Nudeln/Sättigung", label: "Kartoffelrösti (TK)", unitDefault: "Stück" },
  "Haferflocken": { group: "Reis/Nudeln/Sättigung", label: "Haferflocken", unitDefault: "g" },
  "Weichweizengrieß": { group: "Reis/Nudeln/Sättigung", label: "Grieß", unitDefault: "g" },
  "Mehl": { group: "Reis/Nudeln/Sättigung", label: "Mehl", unitDefault: "g" },
  "Vollkornmehl": { group: "Reis/Nudeln/Sättigung", label: "Vollkornmehl", unitDefault: "g" },
  "Maisstärke": { group: "Reis/Nudeln/Sättigung", label: "Maisstärke", unitDefault: "EL" },
  "Panko": { group: "Reis/Nudeln/Sättigung", label: "Panko/Paniermehl", unitDefault: "g" },
  "Paniermehl": { group: "Reis/Nudeln/Sättigung", label: "Paniermehl", unitDefault: "g" },

  // Pantry
  "Sojasauce": { group: "Algen/Brühen/Würze", label: "Sojasauce", unitDefault: "EL" },
  "Austernsauce": { group: "Algen/Brühen/Würze", label: "Austernsauce", unitDefault: "EL" },
  "Sesamöl": { group: "Algen/Brühen/Würze", label: "Sesamöl", unitDefault: "TL" },
  "Reisessig": { group: "Algen/Brühen/Würze", label: "Reisessig", unitDefault: "EL" },
  "Gemüsebrühe": { group: "Algen/Brühen/Würze", label: "Gemüsebrühe", unitDefault: "ml" },
  "Hühnerbrühe": { group: "Algen/Brühen/Würze", label: "Hühnerbrühe", unitDefault: "ml" },
  "Dashi": { group: "Algen/Brühen/Würze", label: "Dashi", unitDefault: "ml" },
  "Milch": { group: "Algen/Brühen/Würze", label: "Milch", unitDefault: "ml" },
  "Sahne": { group: "Algen/Brühen/Würze", label: "Sahne", unitDefault: "ml" },
  "Butter": { group: "Algen/Brühen/Würze", label: "Butter", unitDefault: "g" },
  "Olivenöl": { group: "Algen/Brühen/Würze", label: "Olivenöl", unitDefault: "EL" },
  "Speiseöl": { group: "Algen/Brühen/Würze", label: "Speiseöl", unitDefault: "EL" },
  "Mayonnaise": { group: "Algen/Brühen/Würze", label: "Mayo (Tube, pasteurisiert)", unitDefault: "EL" },
  "Sriracha-Sauce": { group: "Algen/Brühen/Würze", label: "Sriracha (mild)", unitDefault: "TL" },
  "Ketchup": { group: "Algen/Brühen/Würze", label: "Ketchup", unitDefault: "EL" },
  "Miso-Paste": { group: "Algen/Brühen/Würze", label: "Miso-Paste", unitDefault: "EL" },
  "Hoisin-Sauce": { group: "Algen/Brühen/Würze", label: "Hoisin-Sauce", unitDefault: "EL" },
  "Teriyaki-Sauce": { group: "Algen/Brühen/Würze", label: "Teriyaki-Sauce", unitDefault: "EL" },
  "Mirin": { group: "Algen/Brühen/Würze", label: "Mirin", unitDefault: "EL" },
  "Agavendicksaft": { group: "Algen/Brühen/Würze", label: "Agavendicksaft", unitDefault: "EL" },
  "Honig": { group: "Algen/Brühen/Würze", label: "Honig/Agave", unitDefault: "EL" },
  "Zucker": { group: "Algen/Brühen/Würze", label: "Zucker", unitDefault: "TL" },
  "Zimt": { group: "Algen/Brühen/Würze", label: "Zimt", unitDefault: "TL" },
  "Kardamom": { group: "Algen/Brühen/Würze", label: "Kardamom", unitDefault: "TL" },
  "Pesto": { group: "Algen/Brühen/Würze", label: "Pesto (Glas)", unitDefault: "EL" },
  "Matcha": { group: "Algen/Brühen/Würze", label: "Matcha-Pulver", unitDefault: "TL" },
  "Nori": { group: "Algen/Brühen/Würze", label: "Nori-Blätter", unitDefault: "Blatt" },
  "Walnüsse": { group: "Algen/Brühen/Würze", label: "Walnüsse", unitDefault: "g" },
  "Mandeln": { group: "Algen/Brühen/Würze", label: "Mandeln", unitDefault: "g" },
  "Backpulver": { group: "Algen/Brühen/Würze", label: "Backpulver", unitDefault: "TL" },
};

function aggregateList(data, canon) {
  const totals = {};
  for (const r of data) {
    for (const ing of r.ingredients) {
      const m = String(ing).match(/^(.*)\s(\d+[\.,]?\d*)\s?(g|ml|Stück|Zehe|Prise|Stangen|Scheiben|TL|EL|Stk|Blatt)?/i);
      if (!m) continue;
      let name = m[1].trim();
      const qty = parseFloat(m[2].replace(",", "."));
      const unit = m[3] || "";
      
      let key = Object.keys(canon).find((k) => name.toLowerCase().includes(k.toLowerCase()));
      if (!key) {
        if (name.includes("Reis (roh)") || name.includes("Reis (gekocht)")) key = "Reis";
        else if (name.includes("Toast")) key = "Vollkorn-Toast";
        else if (name.includes("Feta") || name.includes("Cheddar") || name.includes("Käse") || name.includes("Gouda")) key = "Käse";
        else if (name.includes("Pilze")) key = "Champignons";
        else if (name.includes("Kohl")) key = "Weißkohl";
        else if (name.includes("Tomate")) key = "Tomate";
        else if (name.includes("Nudeln")) key = "Weizennudeln";
      }
      
      if (!key) continue;
      
      const c = canon[key];
      const id = `${key}`;
      
      if (!totals[id]) totals[id] = { key, label: c.label, unit: c.unitDefault, qty: 0, group: c.group };
      totals[id].qty += qty; 
    }
  }
  const groups = { "Protein/Fisch/Tofu": [], "Gemüse/Pilze": [], "Reis/Nudeln/Sättigung": [], "Algen/Brühen/Würze": [] };
  Object.values(totals).forEach((t) => {
    if(groups[t.group]) groups[t.group].push(t);
  });
  Object.keys(groups).forEach((g) => groups[g].sort((a, b) => a.label.localeCompare(b.label)));
  return groups;
}

// -----------------------------------------------------------------------
// Components
// -----------------------------------------------------------------------

function animePlaceholder(title) {
  const esc = (s) => String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
  const svg = `
  <svg xmlns='http://www.w3.org/2000/svg' width='1200' height='675'>
    <defs><linearGradient id='g' x1='0' y1='0' x2='1' y2='1'>
      <stop offset='0%' stop-color='#FCE7F3'/><stop offset='100%' stop-color='#DCFCE7'/>
    </linearGradient></defs>
    <rect width='1200' height='675' fill='url(#g)'/>
    <g font-family='sans-serif'>
      <text x='40' y='120' font-size='44' fill='#1F2937'>🍱 ${esc(title)}</text>
      <text x='40' y='180' font-size='20' fill='#374151'>GhibliKitchen</text>
    </g>
  </svg>`;
  return `data:image/svg+xml;charset=utf-8,${encodeURIComponent(svg)}`;
}

function ImageBanner({ meal, year = 2026, weekFolder = "kw21" }) {
  const [src, setSrc] = useState("");
  
  useEffect(() => {
    const preferred = `/plan-art/${year}/${weekFolder}/${meal.id}.jpg`;
    const fallback = animePlaceholder(meal.title);
    setSrc(fallback);

    const img = new Image();
    img.onload = () => setSrc(preferred);
    img.onerror = () => setSrc(fallback);
    img.src = preferred;
  }, [meal, year, weekFolder]);

  return (
    <div className="ghk-art" style={{ position: "relative", borderRadius: 14, overflow: "hidden", marginBottom: 12, border: "1px solid var(--border)", boxShadow: "var(--shadow)" }}>
      <img src={src} alt={meal.title} style={{ width: "100%", height: "auto", display: "block", aspectRatio: "16/9", objectFit: "cover" }} loading="lazy" />
    </div>
  );
}

function MealCard({ meal }) {
  return (
    <div className="meal-card" style={cardPanelStyle} id={`meal-${meal.id}`}>
      <ImageBanner meal={meal} />
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: 8, flexWrap: "wrap", marginBottom: 12 }}>
        <h3 style={{ margin: 0, lineHeight: 1.3 }}>{meal.title}</h3>
        <div>
          {meal.isViral ? viralChip() : null}
          {tagChip(meal.target)}
          {meal.riceCooker?.enabled ? tagChip("🍚 Reiskocher") : null}
          {meal.remind ? tagChip("💊 Metformin") : null}
        </div>
      </div>
      {meal.desc ? <p style={{ marginTop: 8, color: "var(--muted)", fontStyle: "italic" }}>{meal.desc}</p> : null}
      {meal.story ? <p style={{ marginTop: 4, color: "var(--text)", fontSize: "0.9em" }}>{meal.story}</p> : null}
      
      <h4>Zutaten (2 Personen)</h4>
      <ul>{meal.ingredients.map((i, idx) => <li key={idx}>{i}</li>)}</ul>
      
      <h4>Zubereitung</h4>
      <ol>{meal.steps.map((s, idx) => <li key={idx}>{s}</li>)}</ol>
      
      <div style={{ marginTop: 16, padding: "12px 16px", background: "var(--chip-bg)", borderRadius: 12 }}>
        <p style={{margin:"0 0 4px"}}><strong>Hinweise:</strong> {meal.checks}</p>
        <p style={{margin:"0 0 4px"}}><strong>Austausche:</strong> {meal.swaps}</p>
        <p style={{margin:0}}><strong>Beilage:</strong> {meal.side}</p>
      </div>

      {meal.riceCooker?.enabled ? (
        <div style={{ marginTop: 12 }}>
          <details>
            <summary style={{cursor:"pointer", fontWeight:600}}>Reiskocher-Details</summary>
            <ul style={{marginTop:8}}>
              <li><strong>Programm:</strong> {meal.riceCooker.program}</li>
              <li><strong>Wasser:</strong> {meal.riceCooker.water}</li>
              {meal.riceCooker.notes ? <li><strong>Info:</strong> {meal.riceCooker.notes}</li> : null}
            </ul>
          </details>
        </div>
      ) : null}
    </div>
  );
}

function DaySection({ dayKey, meals, dayName }) {
  return (
    <section className="day-section" style={{ marginBottom: 40 }} id={`day-${dayKey}`}>
      <h2 style={{ marginBottom: 16, borderBottom:"2px solid var(--border)", paddingBottom:8 }}>
        {dayName.replace(/\s*\(.+\)$/, "")} <span className="ghk-date-paren" style={{fontSize:"0.7em", color:"var(--muted)", fontWeight:400}}>{dayName.match(/\(.+\)$/)?.[0] ?? ""}</span>
      </h2>
      <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: 24 }}>
        {meals.map((m) => <MealCard key={m.id} meal={m} />)}
      </div>
    </section>
  );
}

function WeekOverview({ data, DAY_NAME_DE, meta }) {
  const byDay = useMemo(() => {
    const map = { mo: [], di: [], mi: [], do: [], fr: [], sa: [], so: [] };
    for (const r of data) map[r.id.split("-")[0]].push(r);
    return map;
  }, [data]);

  const pill = (meal) => {
    let icon = "🍽️";
    if (meal.riceCooker?.enabled) icon = "🍚";
    if (meal.isViral) icon = "🔥";
    
    return (
      <a
        key={meal.id}
        href={`#meal-${meal.id}`}
        onClick={scrollToId(`meal-${meal.id}`)}
        style={{ 
          display: "inline-flex", 
          alignItems: "center", 
          gap: 6, 
          padding: "6px 10px", 
          borderRadius: 999, 
          border: meal.isViral ? "1px solid #ff7e5f" : "1px solid var(--border)", 
          background: meal.isViral ? "linear-gradient(135deg, rgba(255,126,95,0.1), rgba(254,180,123,0.1))" : "var(--panel)", 
          textDecoration: "none", 
          color: "var(--text)", 
          boxShadow: "var(--shadow)", 
          fontSize: 13, 
          cursor: "pointer" 
        }}
      >
        {icon} <span>{meal.title.split(" (")[0]}</span>
      </a>
    );
  };

  return (
    <section style={{ marginBottom: 32 }}>
      <div style={{ ...cardPanelStyle, background: "var(--panel)", border: "1px solid var(--border)" }}>
        <div className="ghk-hero-inner" style={{ padding: 18, borderRadius: 12, marginBottom: 16, background: "var(--grad-hero)" }}>
          <h2 style={{ margin: 0 }}>
            Woche 21 – Übersicht <span className="ghk-date-paren" style={{ color: "var(--muted)" }}>({meta.startDate})</span>
          </h2>
          <p style={{ marginTop: 6, color: "var(--muted)" }}>Virale Airfryer-Hacks 🔥 · Goldbrasse, Zha Cai & Co · Balanced</p>
        </div>
        <div style={{ display: "grid", gap: 12 }}>
          {DAYS_ORDER.map((d) => (
            <div key={d} style={{ padding: 12, borderRadius: 12, border: "1px solid var(--border)", background: "var(--panel)" }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 8, gap: 8, flexWrap: "wrap" }}>
                <strong>{DAY_NAME_DE[d]}</strong>
                <a 
                  href={`#day-${d}`} 
                  onClick={scrollToId(`day-${d}`)}
                  style={{ fontSize: 12, color: "var(--text)", textDecoration: "none", border: "1px solid var(--border)", padding: "4px 8px", borderRadius: 8, background: "var(--chip-bg)", cursor: "pointer" }}
                >
                  zum Tag ▿
                </a>
              </div>
              <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
                {byDay[d].map((m) => pill(m))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ---- RiceCooker Section ----
function RiceCookerSection({ data }) {
  const perDay = useMemo(() => {
    const map = { mo: null, di: null, mi: null, do: null, fr: null, sa: null, so: null };
    if (!data) return map; 
    for (const r of data) {
      const day = r.id.split("-")[0];
      if (r.riceCooker?.enabled && !map[day]) map[day] = r;
    }
    return map;
  }, [data]);

  return (
    <section style={{ marginTop: 32 }}>
      <h2 style={{ borderBottom: "2px solid var(--border)", paddingBottom: 10, marginBottom: 20 }}>🍚 Reiskocher-Gerichte (Übersicht)</h2>
      <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: 16 }}>
        {DAYS_ORDER.map((d) => {
          const r = perDay[d];
          return (
            <div key={d} style={{ ...cardPanelStyle }}>
              <h3 style={{ marginTop: 0, fontSize: 16 }}>
                {DAY_NAME_DE[d].split(" ")[0]} – {r ? r.title : "Kein Reiskocher-Gericht"}
              </h3>
              {r ? (
                <ul style={{ margin: 0, paddingLeft: 20 }}>
                  <li><strong>Programm:</strong> {r.riceCooker.program}</li>
                  <li><strong>Wasser:</strong> {r.riceCooker.water}</li>
                  {r.riceCooker.notes ? <li><strong>Notiz:</strong> {r.riceCooker.notes}</li> : null}
                </ul>
              ) : null}
            </div>
          );
        })}
      </div>
      <p style={{ marginTop: 12, color: "var(--muted)" }}>Tägliche Entlastung: Hainan Goldbrasse, Miso-Pilz-Reis, Tomaten-Risotto und mehr.</p>
    </section>
  );
}

// PDF Export (nur noch Drucken Funktion)
const doPrint = () => window.print();

// Theme Switch Component
function ThemeSwitch({ mode, setMode, effectiveDark }) {
  return (
    <div className="ghk-theme-switch" style={{ display: "inline-flex", alignItems: "center", gap: 10, padding: 6, border: "1px solid var(--btn-border)", borderRadius: 999, background: "var(--panel)" }}>
      <button type="button" className="ghk-tab" aria-pressed={mode === "auto"} onClick={() => setMode(mode === "auto" ? (effectiveDark ? "dark" : "light") : "auto")} style={{ padding: "6px 10px" }}>Auto</button>
      <label className="ghk-switch" title={effectiveDark ? "Dunkel" : "Hell"}>
        <input type="checkbox" checked={effectiveDark} onChange={(e) => setMode(e.target.checked ? "dark" : "light")} disabled={mode === "auto"} />
        <span className="ghk-slider" />
      </label>
    </div>
  );
}

// -----------------------------------------------------------------------
// MAIN EXPORT
// -----------------------------------------------------------------------
export default function Woche21DE() {
  const langFromUrl = useLangHint();
  const hiddenByLang = langFromUrl && langFromUrl !== meta.lang;
  if (hiddenByLang) return null;

  const systemDark = useSystemPrefersDark();
  const [mode, setMode] = useState("auto");
  const effectiveDark = mode === "auto" ? systemDark : mode === "dark";
  const vars = themeVars(effectiveDark ? "dark" : "light");

  const [tab, setTab] = useState("kochbuch");
  const listGroups = useMemo(() => aggregateList(DATA, CANON), []);

  useEffect(() => {
    const root = document.documentElement;
    Object.entries(vars).forEach(([k, v]) => root.style.setProperty(k, v));
    return () => Object.keys(vars).forEach((k) => root.style.removeProperty(k));
  }, [vars]);

  const Styles = () => (
    <style>{`
      .meal-card p { line-height: 1.75; margin-bottom: 1rem; }
      .meal-card li { line-height: 1.7; margin-bottom: 0.5rem; }
      .meal-card h4 { margin-top: 1.5rem; margin-bottom: 0.75rem; color: var(--accent-2); font-weight: 700; }
      
      .ghk-tab { display: inline-flex; align-items: center; justify-content: center; gap: 6px; padding: 8px 16px; border-radius: 12px; border: 1px solid var(--btn-border); background: var(--panel); color: var(--text); cursor: pointer; font-weight: 600; box-shadow: 0 2px 5px rgba(0,0,0,0.05); transition: all 0.2s ease; }
      .ghk-tab:hover { transform: translateY(-1px); box-shadow: 0 4px 8px rgba(0,0,0,0.1); border-color: var(--accent-2); }
      .ghk-switch{ --w:48px; --h:28px; --k:22px; position:relative; display:inline-block; width:var(--w); height:var(--h); }
      .ghk-switch input{ opacity:0; width:0; height:0; position:absolute; }
      .ghk-switch .ghk-slider{ position:absolute; inset:0; border-radius:var(--h); background:var(--btn-border); border:1px solid var(--btn-border); transition:0.2s; }
      .ghk-switch .ghk-slider::before{ content:""; position:absolute; height:var(--k); width:var(--k); left:3px; top:50%; transform:translateY(-50%); border-radius:999px; background:var(--panel); box-shadow:var(--shadow); transition:transform .2s; }
      .ghk-switch input:checked + .ghk-slider{ background:var(--accent-2); border-color:var(--accent-2); }
      .ghk-switch input:checked + .ghk-slider::before{ transform:translateY(-50%) translateX(calc(var(--w) - var(--k) - 6px)); }

      .ghk-segment{ display:inline-flex; gap:4px; border:1px solid var(--btn-border); border-radius:999px; padding:4px; background:var(--panel); }
      .ghk-segment label{ position:relative; display:inline-flex; align-items:center; border-radius:999px; overflow:hidden; cursor:pointer; }
      .ghk-segment input[type="radio"]{ position:absolute; inset:0; opacity:0; cursor:pointer; }
      .ghk-segment span{ display:inline-block; padding:8px 14px; border-radius:999px; border:1px solid transparent; }
      .ghk-segment input[type="radio"]:checked + span{ background:var(--btn-on-bg); outline:2px solid var(--accent-2); outline-offset:1px; }

      #ghk-content{ display:block !important; }
      #ghk-content > [hidden]{ display:none !important; }

      .ghk-exporting{ width:794px !important; max-width:794px !important; margin:0 auto !important; background:#fff !important; box-sizing:border-box !important; font-size:12pt !important; line-height:1.45 !important; --bg:#FFFFFF; --text:#111827; --panel:#FFFFFF; --border:rgba(0,0,0,.12); --muted:#374151; --chip-bg:#F3F4F6; --btn-border:rgba(0,0,0,.15); --btn-on-bg:#F3F4F6; }
      .ghk-exporting *{ box-shadow:none !important; }
      .ghk-exporting .ghk-art, .ghk-exporting img{ display:none !important; visibility:hidden !important; }
      .ghk-exporting .ghk-chip, .ghk-exporting .ghk-date-paren{ display:none !important; }

      @media print { .ghk-art, .ghk-date-paren{ display:none !important; visibility:hidden !important; } html, body, #root { background:#fff !important; } aside, nav, header, footer, .ghk-no-print { display:none !important; } #kochbuch-root { width: calc(210mm - 24mm); margin:0 auto !important; background:#fff !important; border:none !important; box-shadow:none !important; } .ghk-hero, .ghk-hero-inner { background:#fff !important; box-shadow:none !important; } .day-section, .meal-card { break-inside:avoid; page-break-inside:avoid; } h2, h3 { break-after:avoid; page-break-after:avoid; } #kochbuch-root * { -webkit-print-color-adjust: exact; print-color-adjust: exact; } a[href]:after { content:""; } }
    `}</style>
  );

  return (
    <div style={{ background: "var(--bg)", color: "var(--text)", padding: 24 }}>
      <Styles />

      <div className="ghk-hero" style={{ ...cardPanelStyle, padding: 16, marginBottom: 18 }}>
        <div className="ghk-hero-inner" style={{ background: "var(--grad-hero)", borderRadius: 12, padding: 14, marginBottom: 12, display: "grid", gap: 8 }}>
          <h1 style={{ margin: 0 }}>{UI_TITLES.main}</h1>
          <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
            {tagChip(`Start: ${meta.startDate}`)}
            {tagChip("Woche 21")}
            {tagChip("Virale Trends & Wohlfühlküche")}
            {tagChip("Täglich 1× 🍚 Reiskocher")}
          </div>
        </div>

        <div className="ghk-no-print" style={{ display: "flex", gap: 8, flexWrap: "wrap", alignItems: "center", justifyContent: "space-between" }}>
          <fieldset className="ghk-segment" role="radiogroup" aria-label="Ansicht wählen">
            <label>
              <input type="radio" name="ghk-view" value="kochbuch" checked={tab === "kochbuch"} onChange={() => setTab("kochbuch")} />
              <span>{UI_TITLES.main}</span>
            </label>
            <label>
              <input type="radio" name="ghk-view" value="liste" checked={tab === "liste"} onChange={() => setTab("liste")} />
              <span>{UI_TITLES.list}</span>
            </label>
          </fieldset>

          <div style={{ display: "flex", gap: 8, flexWrap: "wrap", alignItems: "center", marginLeft: "auto" }}>
            <button type="button" onClick={doPrint} className="ghk-tab"><span className="icon">🖨️</span> Drucken</button>
            <ThemeSwitch mode={mode} setMode={setMode} effectiveDark={effectiveDark} />
          </div>
        </div>
      </div>

      <div id="kochbuch-root" style={{ ...cardPanelStyle }}>
        <WeekOverview data={DATA} DAY_NAME_DE={DAY_NAME_DE} meta={meta} />
        <div id="ghk-content" data-view={tab}>
          <section id="ghk-pane-kochbuch" aria-hidden={tab !== "kochbuch"} hidden={tab !== "kochbuch"}>
            {DAYS_ORDER.map((d) => (
              <DaySection key={d} dayKey={d} meals={DATA.filter(r => r.id.startsWith(d))} dayName={DAY_NAME_DE[d]} />
            ))}
            <RiceCookerSection data={DATA} />
          </section>
          <section id="ghk-pane-liste" aria-hidden={tab !== "liste"} hidden={tab !== "liste"}>
            {Object.entries(listGroups).map(([group, items]) => (
              <div key={group} style={{ marginBottom: 20 }}>
                <h3>{group}</h3>
                <ul>{items.map((it, idx) => <li key={idx}>{`${it.label} – ${Math.round(it.qty * 10) / 10} ${it.unit}`}</li>)}</ul>
              </div>
            ))}
          </section>
        </div>
      </div>
    </div>
  );
}
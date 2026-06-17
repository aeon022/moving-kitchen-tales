// src/plans/2026/Woche-26-2026-06-22.de.jsx
import React, { useMemo, useState, useEffect } from "react";
import { exportHTMLById, ensureScript } from "@/utils/exporters";
import { buildEmbedCss } from "@/utils/embedCss";

/*
  GhibliKitchen – Woche 26 (Start: 2026-06-22)
  Status: KOMPLETT & FUNKTIONSFÄHIG (Alle 21 Rezepte)
  Fokus: Neue Virale Airfryer-Hacks, Italienisch-Asiatische Crossover, Reiskocher-Magie.
*/

// ---- Meta ----
export const meta = {
  title: "Woche 26",
  startDate: "2026-06-22",
  id: "woche-26-2026-06-22",
  lang: "de",
  sidebar: "Woche 26 (2026-06-22)",
};

const FILE_BASE = "Woche 26 2026-06-22";

const UI_TITLES = {
  main: "Rezepte Woche 26",
  list: "Einkaufsliste Woche 26",
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
  mo: "Montag (2026-06-22)",
  di: "Dienstag (2026-06-23)",
  mi: "Mittwoch (2026-06-24)",
  do: "Donnerstag (2026-06-25)",
  fr: "Freitag (2026-06-26)",
  sa: "Samstag (2026-06-27)",
  so: "Sonntag (2026-06-28)",
};

// -----------------------------------------------------------------------
// DATA (ALLE 21 REZEPTE)
// -----------------------------------------------------------------------
const DATA = [
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

// -----------------------------------------------------------------------
// Shopping List Logic
// -----------------------------------------------------------------------
const CANON = {
  // Protein
  "Schweineschnitzel": { group: "Protein/Fisch/Tofu", label: "Schweineschnitzel", unitDefault: "g" },
  "Schweinebauch": { group: "Protein/Fisch/Tofu", label: "Schweinebauch", unitDefault: "g" },
  "Schweinehack": { group: "Protein/Fisch/Tofu", label: "Schweinehack", unitDefault: "g" },
  "Rinderhack": { group: "Protein/Fisch/Tofu", label: "Rinderhack (mager)", unitDefault: "g" },
  "Rindfleisch": { group: "Protein/Fisch/Tofu", label: "Rindfleisch", unitDefault: "g" },
  "Hähnchenbrust": { group: "Protein/Fisch/Tofu", label: "Hähnchenbrust", unitDefault: "g" },
  "Hähnchenhack": { group: "Protein/Fisch/Tofu", label: "Hähnchenhack", unitDefault: "g" },
  "Lachsfilet": { group: "Protein/Fisch/Tofu", label: "Lachsfilet", unitDefault: "g" },
  "Lachs": { group: "Protein/Fisch/Tofu", label: "Lachs", unitDefault: "g" },
  "Kabeljau": { group: "Protein/Fisch/Tofu", label: "Kabeljau/Seelachs", unitDefault: "g" },
  "Garnelen": { group: "Protein/Fisch/Tofu", label: "Garnelen (geschält)", unitDefault: "g" },
  "Meeresfrüchte-Mix": { group: "Protein/Fisch/Tofu", label: "Meeresfrüchte-Mix (TK)", unitDefault: "g" },
  "Kochschinken": { group: "Protein/Fisch/Tofu", label: "Kochschinken", unitDefault: "g" },
  "Tofu": { group: "Protein/Fisch/Tofu", label: "Tofu", unitDefault: "g" },
  "Seidentofu": { group: "Protein/Fisch/Tofu", label: "Seidentofu", unitDefault: "g" },
  "Eier": { group: "Protein/Fisch/Tofu", label: "Eier", unitDefault: "Stück" },
  "Parmesan": { group: "Protein/Fisch/Tofu", label: "Parmesan", unitDefault: "g" },
  "Käse": { group: "Protein/Fisch/Tofu", label: "Gouda / Käse", unitDefault: "g" },
  "Feta": { group: "Protein/Fisch/Tofu", label: "Feta (pasteurisiert)", unitDefault: "g" },
  "Mozzarella": { group: "Protein/Fisch/Tofu", label: "Mozzarella (pasteurisiert)", unitDefault: "g" },
  "Ricotta": { group: "Protein/Fisch/Tofu", label: "Ricotta", unitDefault: "g" },
  "Quark": { group: "Protein/Fisch/Tofu", label: "Quark", unitDefault: "EL" },
  "Joghurt": { group: "Protein/Fisch/Tofu", label: "Griechischer Joghurt", unitDefault: "EL" },

  // Gemüse
  "Pak Choi": { group: "Gemüse/Pilze", label: "Pak Choi", unitDefault: "g" },
  "Spinat": { group: "Gemüse/Pilze", label: "Spinat (frisch)", unitDefault: "g" },
  "Weißkohl": { group: "Gemüse/Pilze", label: "Weißkohl/Chinakohl", unitDefault: "g" },
  "Karotte": { group: "Gemüse/Pilze", label: "Karotten", unitDefault: "g" },
  "Gurke": { group: "Gemüse/Pilze", label: "Gurke", unitDefault: "g" },
  "Zucchini": { group: "Gemüse/Pilze", label: "Zucchini", unitDefault: "g" },
  "Edamame": { group: "Gemüse/Pilze", label: "Edamame", unitDefault: "g" },
  "Erbsen": { group: "Gemüse/Pilze", label: "Erbsen (TK)", unitDefault: "g" },
  "Weiße Bohnen": { group: "Gemüse/Pilze", label: "Weiße Bohnen (Dose)", unitDefault: "g" },
  "Sojasprossen": { group: "Gemüse/Pilze", label: "Sojasprossen", unitDefault: "g" },
  "Champignons": { group: "Gemüse/Pilze", label: "Champignons", unitDefault: "g" },
  "Shiitake": { group: "Gemüse/Pilze", label: "Shiitake (getrocknet)", unitDefault: "g" },
  "Frühlingszwiebel": { group: "Gemüse/Pilze", label: "Frühlingszwiebeln", unitDefault: "g" },
  "Zwiebel": { group: "Gemüse/Pilze", label: "Zwiebeln", unitDefault: "g" },
  "Daikon": { group: "Gemüse/Pilze", label: "Daikon/Rettich", unitDefault: "g" },
  "Knoblauch": { group: "Gemüse/Pilze", label: "Knoblauch", unitDefault: "Zehe" },
  "Ingwer": { group: "Gemüse/Pilze", label: "Ingwer", unitDefault: "g" },
  "Tomaten": { group: "Gemüse/Pilze", label: "Tomaten (frisch/Kirsch)", unitDefault: "g" },
  "Tomate": { group: "Gemüse/Pilze", label: "Tomate", unitDefault: "Stück" },
  "Cherrytomaten": { group: "Gemüse/Pilze", label: "Cherrytomaten", unitDefault: "g" },
  "Passierte Tomaten": { group: "Gemüse/Pilze", label: "Passierte Tomaten", unitDefault: "ml" },
  "Apfel": { group: "Gemüse/Pilze", label: "Apfel", unitDefault: "Stück" },
  "Banane": { group: "Gemüse/Pilze", label: "Banane", unitDefault: "Stück" },
  "Pfirsich": { group: "Gemüse/Pilze", label: "Pfirsich", unitDefault: "Stück" },
  "Taro": { group: "Gemüse/Pilze", label: "Taro (Wasserbrotwurzel)", unitDefault: "g" },
  "Paprika": { group: "Gemüse/Pilze", label: "Paprika", unitDefault: "g" },
  "Sellerie": { group: "Gemüse/Pilze", label: "Staudensellerie", unitDefault: "g" },
  "Blaubeeren": { group: "Gemüse/Pilze", label: "Blaubeeren", unitDefault: "g" },
  "Basilikum": { group: "Gemüse/Pilze", label: "Basilikum (frisch)", unitDefault: "Bund" },

  // Carb
  "Reis": { group: "Reis/Nudeln/Sättigung", label: "Reis (roh/gekocht)", unitDefault: "g" },
  "Risottoreis": { group: "Reis/Nudeln/Sättigung", label: "Risottoreis", unitDefault: "g" },
  "Udon": { group: "Reis/Nudeln/Sättigung", label: "Udon-Nudeln", unitDefault: "g" },
  "Weizennudeln": { group: "Reis/Nudeln/Sättigung", label: "Weizennudeln", unitDefault: "g" },
  "Reisnudeln": { group: "Reis/Nudeln/Sättigung", label: "Reisnudeln", unitDefault: "g" },
  "Vollkorn-Penne": { group: "Reis/Nudeln/Sättigung", label: "Vollkorn-Penne", unitDefault: "g" },
  "Kurze Nudeln": { group: "Reis/Nudeln/Sättigung", label: "Kurze Nudeln (Penne/Makkaroni)", unitDefault: "g" },
  "Gnocchi": { group: "Reis/Nudeln/Sättigung", label: "Gnocchi", unitDefault: "g" },
  "Quinoa": { group: "Reis/Nudeln/Sättigung", label: "Quinoa", unitDefault: "g" },
  "Reispapier": { group: "Reis/Nudeln/Sättigung", label: "Reispapier", unitDefault: "Blatt" },
  "Vollkorn-Tortillas": { group: "Reis/Nudeln/Sättigung", label: "Tortilla-Wraps", unitDefault: "Stück" },
  "Vollkorn-Toast": { group: "Reis/Nudeln/Sättigung", label: "Vollkorn-Toast", unitDefault: "Scheiben" },
  "Toastbrot": { group: "Reis/Nudeln/Sättigung", label: "Toastbrot", unitDefault: "Scheiben" },
  "Vollkornbrot": { group: "Reis/Nudeln/Sättigung", label: "Vollkornbrot", unitDefault: "Scheiben" },
  "Vollkorn-Bagel": { group: "Reis/Nudeln/Sättigung", label: "Vollkorn-Bagel", unitDefault: "Stück" },
  "Haferflocken": { group: "Reis/Nudeln/Sättigung", label: "Haferflocken", unitDefault: "g" },
  "Weichweizengrieß": { group: "Reis/Nudeln/Sättigung", label: "Grieß", unitDefault: "g" },
  "Vollkornmehl": { group: "Reis/Nudeln/Sättigung", label: "Vollkornmehl", unitDefault: "g" },
  "Mehl": { group: "Reis/Nudeln/Sättigung", label: "Mehl", unitDefault: "g" },
  "Maisstärke": { group: "Reis/Nudeln/Sättigung", label: "Maisstärke", unitDefault: "EL" },
  "Panko": { group: "Reis/Nudeln/Sättigung", label: "Panko/Paniermehl", unitDefault: "g" },

  // Pantry
  "Sojasauce": { group: "Algen/Brühen/Würze", label: "Sojasauce", unitDefault: "EL" },
  "Austernsauce": { group: "Algen/Brühen/Würze", label: "Austernsauce", unitDefault: "EL" },
  "Reisessig": { group: "Algen/Brühen/Würze", label: "Reisessig", unitDefault: "EL" },
  "Gemüsebrühe": { group: "Algen/Brühen/Würze", label: "Gemüsebrühe", unitDefault: "ml" },
  "Hühnerbrühe": { group: "Algen/Brühen/Würze", label: "Hühnerbrühe", unitDefault: "ml" },
  "Milch": { group: "Algen/Brühen/Würze", label: "Milch", unitDefault: "ml" },
  "Butter": { group: "Algen/Brühen/Würze", label: "Butter", unitDefault: "g" },
  "Olivenöl": { group: "Algen/Brühen/Würze", label: "Olivenöl", unitDefault: "EL" },
  "Mayonnaise": { group: "Algen/Brühen/Würze", label: "Mayo (Tube, pasteurisiert)", unitDefault: "EL" },
  "Ketchup": { group: "Algen/Brühen/Würze", label: "Ketchup", unitDefault: "EL" },
  "Miso-Paste": { group: "Algen/Brühen/Würze", label: "Miso-Paste", unitDefault: "EL" },
  "Pesto": { group: "Algen/Brühen/Würze", label: "Pesto (Grün)", unitDefault: "EL" },
  "Hoisin-Sauce": { group: "Algen/Brühen/Würze", label: "Hoisin-Sauce", unitDefault: "EL" },
  "Mirin": { group: "Algen/Brühen/Würze", label: "Mirin", unitDefault: "EL" },
  "Agavendicksaft": { group: "Algen/Brühen/Würze", label: "Agavendicksaft", unitDefault: "EL" },
  "Zucker": { group: "Algen/Brühen/Würze", label: "Zucker", unitDefault: "TL" },
  "Zimt": { group: "Algen/Brühen/Würze", label: "Zimt", unitDefault: "TL" },
  "Kardamom": { group: "Algen/Brühen/Würze", label: "Kardamom", unitDefault: "TL" },
  "Matcha": { group: "Algen/Brühen/Würze", label: "Matcha-Pulver", unitDefault: "TL" },
  "Kurkuma": { group: "Algen/Brühen/Würze", label: "Kurkuma", unitDefault: "TL" },
  "Schwarze Sesampaste": { group: "Algen/Brühen/Würze", label: "Schwarze Sesampaste", unitDefault: "EL" },
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
        else if (name.includes("Nudeln") || name.includes("Makkaroni") || name.includes("Spaghetti")) key = "Weizennudeln";
      }
      
      if (!key) continue;
      
      const c = canon[key];
      if (!c) continue; // Safety Check
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

function ImageBanner({ meal, year = 2026, weekFolder = "kw26" }) {
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
            Woche 26 – Übersicht <span className="ghk-date-paren" style={{ color: "var(--muted)" }}>({meta.startDate})</span>
          </h2>
          <p style={{ marginTop: 6, color: "var(--muted)" }}>Neue Virale Hacks 🔥 · Italien & Asia Fusion · Balanced</p>
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
      <p style={{ marginTop: 12, color: "var(--muted)" }}>Tägliche Entlastung: Golden Kurkuma Chicken, Lachs-Risotto, Oden-Rettich Reis und mehr.</p>
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
export default function Woche26DE() {
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
            {tagChip("Woche 26")}
            {tagChip("Italien & Asia Fusion")}
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
// src/plans/2026/Woche-24-2026-06-08.de.jsx
import React, { useMemo, useState, useEffect } from "react";
import { exportHTMLById, ensureScript } from "@/utils/exporters";
import { buildEmbedCss } from "@/utils/embedCss";

/*
  GhibliKitchen – Woche 24 (Start: 2026-06-08)
  Status: KOMPLETT & FUNKTIONSFÄHIG (Alle 21 Rezepte)
  Fokus: Koreanische Küche, Virale Airfryer-Hacks, Reiskocher-Magie, Schwangerschaftssicher.
*/

// ---- Meta ----
export const meta = {
  title: "Woche 24",
  startDate: "2026-06-08",
  id: "woche-24-2026-06-08",
  lang: "de",
  sidebar: "Woche 24 (2026-06-08)",
};

const FILE_BASE = "Woche 24 2026-06-08";

const UI_TITLES = {
  main: "Rezepte Woche 24",
  list: "Einkaufsliste Woche 24",
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
    m.addEventListener?.change?.(fn) || m.addListener?.(fn);
    return () => m.removeEventListener?.change?.(fn) || m.removeListener?.(fn);
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
  mo: "Montag (2026-06-08)",
  di: "Dienstag (2026-06-09)",
  mi: "Mittwoch (2026-06-10)",
  do: "Donnerstag (2026-06-11)",
  fr: "Freitag (2026-06-12)",
  sa: "Samstag (2026-06-13)",
  so: "Sonntag (2026-06-14)",
};

// -----------------------------------------------------------------------
// DATA (ALLE 21 REZEPTE)
// -----------------------------------------------------------------------
const DATA = [
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

// -----------------------------------------------------------------------
// Shopping List Logic
// -----------------------------------------------------------------------
const CANON = {
  // Protein
  "Schweinehack": { group: "Protein/Fisch/Tofu", label: "Schweinehack", unitDefault: "g" },
  "Schweinebauch": { group: "Protein/Fisch/Tofu", label: "Schweinebauch", unitDefault: "g" },
  "Rinderhack": { group: "Protein/Fisch/Tofu", label: "Rinderhack (mager)", unitDefault: "g" },
  "Rindfleisch": { group: "Protein/Fisch/Tofu", label: "Rindfleisch", unitDefault: "g" },
  "Hähnchenbrust": { group: "Protein/Fisch/Tofu", label: "Hähnchenbrust", unitDefault: "g" },
  "Lachsfilet": { group: "Protein/Fisch/Tofu", label: "Lachsfilet", unitDefault: "g" },
  "Meeresfrüchte-Mix": { group: "Protein/Fisch/Tofu", label: "Meeresfrüchte-Mix (TK)", unitDefault: "g" },
  "Fischkuchen": { group: "Protein/Fisch/Tofu", label: "Surimi/Fischkuchen", unitDefault: "g" },
  "Thunfisch": { group: "Protein/Fisch/Tofu", label: "Thunfisch (Dose)", unitDefault: "g" },
  "Tofu": { group: "Protein/Fisch/Tofu", label: "Tofu", unitDefault: "g" },
  "Seidentofu": { group: "Protein/Fisch/Tofu", label: "Seidentofu", unitDefault: "g" },
  "Eier": { group: "Protein/Fisch/Tofu", label: "Eier", unitDefault: "Stück" },
  "Parmesan": { group: "Protein/Fisch/Tofu", label: "Parmesan", unitDefault: "g" },
  "Käse": { group: "Protein/Fisch/Tofu", label: "Gouda / Käse", unitDefault: "g" },
  "Quark": { group: "Protein/Fisch/Tofu", label: "Quark", unitDefault: "EL" },

  // Gemüse
  "Spinat": { group: "Gemüse/Pilze", label: "Spinat (frisch)", unitDefault: "g" },
  "Weißkohl": { group: "Gemüse/Pilze", label: "Weißkohl", unitDefault: "g" },
  "Weißkohlblätter": { group: "Gemüse/Pilze", label: "Weißkohlblätter", unitDefault: "Stück" },
  "Karotte": { group: "Gemüse/Pilze", label: "Karotten", unitDefault: "g" },
  "Gurke": { group: "Gemüse/Pilze", label: "Gurke", unitDefault: "g" },
  "Zucchini": { group: "Gemüse/Pilze", label: "Zucchini", unitDefault: "g" },
  "Brokkoli": { group: "Gemüse/Pilze", label: "Brokkoli", unitDefault: "g" },
  "Sojasprossen": { group: "Gemüse/Pilze", label: "Sojasprossen", unitDefault: "g" },
  "Frühlingszwiebel": { group: "Gemüse/Pilze", label: "Frühlingszwiebeln", unitDefault: "g" },
  "Zwiebel": { group: "Gemüse/Pilze", label: "Zwiebeln", unitDefault: "g" },
  "Lauch": { group: "Gemüse/Pilze", label: "Lauch", unitDefault: "g" },
  "Knoblauch": { group: "Gemüse/Pilze", label: "Knoblauch", unitDefault: "Zehe" },
  "Ingwer": { group: "Gemüse/Pilze", label: "Ingwer", unitDefault: "g" },
  "Tomaten": { group: "Gemüse/Pilze", label: "Tomaten (frisch)", unitDefault: "g" },
  "Tomate": { group: "Gemüse/Pilze", label: "Tomate", unitDefault: "Stück" },
  "Banane": { group: "Gemüse/Pilze", label: "Banane", unitDefault: "Stück" },
  "Avocado": { group: "Gemüse/Pilze", label: "Avocado", unitDefault: "Stück" },
  "Süßkartoffel": { group: "Gemüse/Pilze", label: "Süßkartoffel", unitDefault: "Stück" },
  "Kimchi": { group: "Gemüse/Pilze", label: "Kimchi", unitDefault: "g" },

  // Carb
  "Reis": { group: "Reis/Nudeln/Sättigung", label: "Reis (roh/gekocht)", unitDefault: "g" },
  "Weizennudeln": { group: "Reis/Nudeln/Sättigung", label: "Weizennudeln", unitDefault: "g" },
  "Süßkartoffel-Glasnudeln": { group: "Reis/Nudeln/Sättigung", label: "Süßkartoffel-Glasnudeln (Dangmyeon)", unitDefault: "g" },
  "Reispapier": { group: "Reis/Nudeln/Sättigung", label: "Reispapier", unitDefault: "Blatt" },
  "Nori-Blätter": { group: "Reis/Nudeln/Sättigung", label: "Nori-Blätter", unitDefault: "Stück" },
  "Vollkorn-Toast": { group: "Reis/Nudeln/Sättigung", label: "Vollkorn-Toast", unitDefault: "Scheiben" },
  "Haferflocken": { group: "Reis/Nudeln/Sättigung", label: "Haferflocken", unitDefault: "g" },
  "Mehl": { group: "Reis/Nudeln/Sättigung", label: "Mehl", unitDefault: "g" },
  "Maisstärke": { group: "Reis/Nudeln/Sättigung", label: "Maisstärke", unitDefault: "EL" },
  "Cornflakes": { group: "Reis/Nudeln/Sättigung", label: "Cornflakes (ungesüßt)", unitDefault: "g" },

  // Pantry
  "Sojasauce": { group: "Algen/Brühen/Würze", label: "Sojasauce", unitDefault: "EL" },
  "Sesamöl": { group: "Algen/Brühen/Würze", label: "Sesamöl", unitDefault: "TL" },
  "Reisessig": { group: "Algen/Brühen/Würze", label: "Reisessig", unitDefault: "EL" },
  "Gemüsebrühe": { group: "Algen/Brühen/Würze", label: "Gemüsebrühe", unitDefault: "ml" },
  "Hühnerbrühe": { group: "Algen/Brühen/Würze", label: "Hühnerbrühe", unitDefault: "ml" },
  "Milch": { group: "Algen/Brühen/Würze", label: "Milch", unitDefault: "ml" },
  "Butter": { group: "Algen/Brühen/Würze", label: "Butter", unitDefault: "g" },
  "Mayonnaise": { group: "Algen/Brühen/Würze", label: "Mayo (Tube, pasteurisiert)", unitDefault: "EL" },
  "Ketchup": { group: "Algen/Brühen/Würze", label: "Ketchup", unitDefault: "EL" },
  "Gochujang": { group: "Algen/Brühen/Würze", label: "Gochujang", unitDefault: "EL" },
  "Chili-Öl": { group: "Algen/Brühen/Würze", label: "Chili-Öl", unitDefault: "EL" },
  "Mandelmus": { group: "Algen/Brühen/Würze", label: "Mandelmus", unitDefault: "EL" },
  "Agavendicksaft": { group: "Algen/Brühen/Würze", label: "Agavendicksaft", unitDefault: "EL" },
  "Honig": { group: "Algen/Brühen/Würze", label: "Honig", unitDefault: "EL" },
  "Zucker": { group: "Algen/Brühen/Würze", label: "Zucker", unitDefault: "TL" },
  "Zimt": { group: "Algen/Brühen/Würze", label: "Zimt", unitDefault: "TL" },
  "Matcha": { group: "Algen/Brühen/Würze", label: "Matcha-Pulver", unitDefault: "TL" },
  "Yuzu-Sirup": { group: "Algen/Brühen/Würze", label: "Yuzu-Sirup (Yuja-cha)", unitDefault: "EL" },
  "Nori": { group: "Algen/Brühen/Würze", label: "Nori-Brösel", unitDefault: "Prise" },
  "Paprikapulver": { group: "Algen/Brühen/Würze", label: "Paprikapulver", unitDefault: "TL" },
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
        else if (name.includes("Käse")) key = "Käse";
        else if (name.includes("Pilze")) key = "Champignons";
        else if (name.includes("Tomate")) key = "Tomate";
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

function ImageBanner({ meal, year = 2026, weekFolder = "kw24" }) {
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
            Woche 24 – Übersicht <span className="ghk-date-paren" style={{ color: "var(--muted)" }}>({meta.startDate})</span>
          </h2>
          <p style={{ marginTop: 6, color: "var(--muted)" }}>Koreanische Küche · Airfryer-Hacks 🔥 · Balanced</p>
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
      <p style={{ marginTop: 12, color: "var(--muted)" }}>Tägliche Entlastung: Kongnamul Bap, Kimchi-Tofu-Reis, Bossam-Style Schweinebauch und mehr.</p>
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
export default function Woche24DE() {
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
            {tagChip("Woche 24")}
            {tagChip("Koreanische Küche & Virale Trends")}
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
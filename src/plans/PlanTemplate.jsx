// src/plans/PlanTemplate.jsx
import React, { useEffect, useMemo, useState } from "react";
import { ensureScript, exportHTMLById, buildShoppingListText, shareOrCopyText, downloadTextFile } from "@/utils/exporters";
import { buildEmbedCss } from "@/utils/embedCss";
import { useBookmarks } from "@/hooks/useBookmarks";
import { CANON as DEFAULT_CANON } from "./canon";

// Bild-Prompts für externe Text-zu-Bild-Tools (DALL·E/GPT-Image/Midjourney) — werden bewusst
// nicht gerendert, nur als String im Code vorgehalten (Konvention aus Woche-1). Ergebnis-Datei
// unter /plan-art/{jahr}/{kwOrdner}/... ablegen, ImageBanner pickt sie automatisch auf.
export const PROMPT_HEADER =
  "Use exactly two cats only: Fleur (small, playful, European Shorthair, grey-black tabby) and Finn (larger, reserved prankster, European Shorthair, grey-black tabby). No third cat, no extra animals. Western man with short fauxhawk as the cook. warm hand-painted watercolor vibe, warm golden light, gentle magical steam/pot/vegetable spirits. Pregnancy-safe food only (no raw fish/eggs). A4 landscape page; manga/cartoon panel with generous margins; image intended to occupy ≤ one-third of the page width on the left.";
export const buildPrompt = (a, b) => `${a}\n${b}`;
// Beispiel pro Woche (im jeweiligen Wochen-File, ein einziger Szenen-Prompt reicht):
//   export const WEEK_SCENE_PROMPT = buildPrompt(PROMPT_HEADER, "Cook stirring a pot of miso soup; Fleur pawing at steam; Finn watching from the counter.");

// Japanese design system — washi/sumi/indigo, torii-red used only as a sparse single accent
// (viral badge, the hanko stamp). No gradients — --grad-hero is a flat panel tone,
// kept as a variable only so `background: var(--grad-hero)` call sites don't need touching.
const THEME_VARS_LIGHT = {
  // Dimmed from #F7F3EA/#FCFAF4 (glaring-white on a bright display) — kept in sync with the
  // same tones in app.css's global :root.
  "--bg": "#EDE7D8",
  "--text": "#1C1B19",
  "--panel": "#F5EFE1",
  "--border": "rgba(28,27,25,.14)",
  "--muted": "#837C6E",
  "--chip-bg": "#E7ECF3",
  "--shadow": "none",
  "--accent": "#2E4C7A",
  "--accent-2": "#2E4C7A",
  "--seal": "#B7282E",
  "--grad-hero": "var(--panel)",
  "--btn-on-bg": "#E7ECF3",
  "--btn-border": "rgba(28,27,25,.16)",
};
const THEME_VARS_DARK = {
  "--bg": "#1A1917",
  "--text": "rgba(247,243,234,.92)",
  "--panel": "#232220",
  "--border": "rgba(247,243,234,.14)",
  "--muted": "#9C9488",
  "--chip-bg": "rgba(247,243,234,.06)",
  "--shadow": "none",
  "--accent": "#7C9BC4",
  "--accent-2": "#7C9BC4",
  "--seal": "#D97A63",
  "--grad-hero": "var(--panel)",
  "--btn-on-bg": "rgba(247,243,234,.10)",
  "--btn-border": "rgba(247,243,234,.18)",
};

function useSystemPrefersDark() {
  const [pref, setPref] = useState(false);
  useEffect(() => {
    const m = window.matchMedia?.("(prefers-color-scheme: dark)");
    if (!m) return;
    setPref(m.matches);
    const onChange = (e) => setPref(e.matches);
    m.addEventListener?.("change", onChange);
    return () => m.removeEventListener?.("change", onChange);
  }, []);
  return pref;
}
const themeVars = (mode) => (mode === "dark" ? THEME_VARS_DARK : THEME_VARS_LIGHT);

// ---------- Utilities ----------
const DAYS_ORDER = ["mo", "di", "mi", "do", "fr", "sa", "so"];

const cardPanelStyle = {
  background: "var(--panel)",
  borderRadius: 0,
  padding: 24, /* Etwas mehr Padding */
  boxShadow: "var(--shadow)",
  border: "1px solid var(--border)",
};

// Kein eigener Rand mehr — bei bis zu 4 Chips pro Meal-Card (schon selbst umrandet) türmten sich
// sonst drei verschachtelte Rahmenebenen übereinander. Die getönte Fläche reicht zur Erkennung.
const tagChip = (text) => (
  <span
    className="mkt-chip"
    style={{
      display: "inline-block",
      padding: "2px 10px",
      borderRadius: 0,
      background: "var(--chip-bg)",
      fontSize: 12,
      marginRight: 6,
      marginBottom: 6,
    }}
  >
    {text}
  </span>
);

// War fest auf die helle Palette codiert (SVG-data-URI, kann keine CSS-Variablen auflösen) —
// im Dark Mode leuchtete jeder Platzhalter als greller cremefarbener Block. Liest die aktuell
// gesetzten Root-Variablen zum Aufrufzeitpunkt aus (die stehen schon vor jedem JS-Effekt fest,
// dank der reinen @media(prefers-color-scheme:dark)-Regeln in app.css).
function animePlaceholder(title, subtitle = "") {
  const esc = (s) =>
    String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
  const cs = typeof document !== "undefined" ? getComputedStyle(document.documentElement) : null;
  const bg = cs?.getPropertyValue("--bg")?.trim() || "#EDE7D8";
  const text = cs?.getPropertyValue("--text")?.trim() || "#1C1B19";
  const muted = cs?.getPropertyValue("--muted")?.trim() || "#837C6E";
  const seal = cs?.getPropertyValue("--seal")?.trim() || "#B7282E";
  const svg = `
  <svg xmlns='http://www.w3.org/2000/svg' width='1200' height='675'>
    <rect width='1200' height='675' fill='${bg}'/>
    <rect x='0' y='0' width='1200' height='675' fill='none' stroke='${text}' stroke-opacity='0.12' stroke-width='2'/>
    <rect x='1120' y='40' width='40' height='40' fill='${seal}'/>
    <g font-family='Georgia, "Noto Serif SC", serif'>
      <text x='40' y='120' font-size='40' fill='${text}'>${esc(title)}</text>
      <text x='40' y='168' font-size='16' fill='${muted}' letter-spacing='1'>ILLUSTRATION PLACEHOLDER</text>
      <text x='40' y='630' font-size='14' fill='${muted}'>Moving Kitchen Tales</text>
    </g>
  </svg>`;
  return `data:image/svg+xml;utf8,${encodeURIComponent(svg)}`;
}

// Einkaufsliste aggregieren
function aggregateList(data, CANON) {
  const totals = {};
  for (const r of data) {
    for (const ing of r.ingredients) {
      const m = String(ing).match(/^(.*)\s(\d+[\.,]?\d*)\s?(g|ml|Stück|Blatt|Zehe|Prise)$/);
      if (!m) continue;
      const name = m[1].trim();
      const qty = parseFloat(m[2].replace(",", "."));
      const unit = m[3];
      let key = Object.keys(CANON).find((k) => name.startsWith(k));
      if (!key) {
        if (name.includes("Brauner Reis")) key = "Brauner Reis";
        else if (name.includes("Vollkornreis")) key = "Vollkornreis";
        else if (name.includes("Reis (roh)")) key = "Reis";
        else if (name.includes("Soba")) key = "Soba";
        else if (name.includes("Udon")) key = "Udon";
        else if (name.includes("Glasnudeln")) key = "Glasnudeln";
        else if (name.includes("Vollkornnudeln")) key = "Vollkornnudeln";
      }
      if (!key) continue;
      const c = CANON[key];
      const id = `${key}|${unit || c.unitDefault}`;
      if (!totals[id]) totals[id] = { key, label: c.label, unit: unit || c.unitDefault, qty: 0, group: c.group };
      totals[id].qty += qty;
    }
  }
  const groups = { "Protein/Fisch/Tofu": [], "Gemüse/Pilze": [], "Reis/Nudeln/Sättigung": [], "Algen/Brühen/Würze": [] };
  Object.values(totals).forEach((t) => groups[t.group].push(t));
  Object.keys(groups).forEach((g) => groups[g].sort((a, b) => a.label.localeCompare(b.label)));
  return groups;
}

// ---------- Building blocks ----------
// Wochennummer aus meta.id ("woche-26-...") oder meta.title ("Woche 26") ableiten statt sie als
// Default-Prop hartzukodieren, die vorher beim Copy-Paste jeder Woche manuell mitgezogen werden musste.
function weekFolderFromMeta(meta) {
  const m = /(?:woche-|woche\s+)(\d+)/i.exec(meta?.id ?? meta?.title ?? "");
  return m ? `kw${m[1]}` : "kw1";
}

function ImageBanner({ meal, year, weekFolder = "kw1" }) {
  const [src, setSrc] = useState("");
  useEffect(() => {
    const preferred = meal.image ?? `/plan-art/${year}/${weekFolder}/${meal.id}.jpg`;
    const fallback = animePlaceholder(meal.title);
    if (!preferred) return setSrc(fallback);
    const img = new Image();
    img.onload = () => setSrc(preferred);
    img.onerror = () => setSrc(fallback);
    img.src = preferred;
  }, [meal, year, weekFolder]);

  return (
    <div className="mkt-art" style={{ position: "relative", borderRadius: 0, overflow: "hidden", marginBottom: 12 }}>
      <img src={src || animePlaceholder(meal.title)} alt={meal.title} style={{ width: "100%", height: "auto", display: "block", aspectRatio: "16/9" }} loading="lazy" />
      <div style={{ position: "absolute", right: 10, bottom: 10, background: "rgba(0,0,0,.35)", color: "#fff", padding: "4px 10px", borderRadius: 0, fontSize: 12 }}>
        {src?.startsWith("/plan-art") ? "Artwork" : "Placeholder"}
      </div>
    </div>
  );
}

function MealCard({ meal, year, meta }) {
  const { isBookmarked, toggleBookmark, bookmarkLists, toggleInList } = useBookmarks();
  const bookmarked = isBookmarked(meta.id, meal.id);
  const [showOptions, setShowOptions] = React.useState(false);
  const weekFolder = weekFolderFromMeta(meta);

  return (
    <div className="meal-card" style={cardPanelStyle} id={`meal-${meal.id}`}>
      <ImageBanner meal={meal} year={year} weekFolder={weekFolder} />
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: 8, flexWrap: "wrap", marginBottom: 12 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <div style={{ position: "relative" }}>
            <button
              onClick={() => setShowOptions(!showOptions)}
              style={{
                background: bookmarked ? "var(--accent)" : "transparent",
                border: "1px solid var(--border)",
                borderRadius: 0,
                padding: "4px 8px",
                cursor: "pointer",
                fontSize: 16,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: bookmarked ? "#fff" : "var(--text)"
              }}
              title={bookmarked ? "Bookmark entfernen" : "Bookmark hinzufügen"}
            >
              {bookmarked ? "★" : "☆"}
            </button>
            {showOptions && (
              <div style={{
                position: "absolute",
                top: "100%",
                right: 0,
                background: "var(--panel)",
                border: "1px solid var(--border)",
                borderRadius: 0,
                padding: "8px",
                zIndex: 10,
                minWidth: "150px"
              }}>
                <button
                  onClick={() => {
                    toggleBookmark({
                      planSlug: meta.id,
                      recipeId: meal.id,
                      recipeTitle: meal.title,
                      planTitle: meta.title
                    });
                    setShowOptions(false);
                  }}
                  style={{
                    display: "block",
                    width: "100%",
                    textAlign: "left",
                    background: bookmarked ? "var(--accent)" : "transparent",
                    border: "none",
                    padding: "4px 8px",
                    cursor: "pointer",
                    fontSize: 12,
                    color: bookmarked ? "#fff" : "var(--text)",
                    borderRadius: 0
                  }}
                >
                  {bookmarked ? "Aus Merkliste entfernen" : "Zu Merkliste hinzufügen"}
                </button>
                {bookmarkLists.length > 0 && (
                  <>
                    <hr style={{ margin: "8px 0", border: "none", borderTop: "1px solid var(--border)" }} />
                    {bookmarkLists.map((list) => {
                      const inList = list.bookmarks.some((b) => b.planSlug === meta.id && b.recipeId === meal.id);
                      return (
                        <button
                          key={list.id}
                          onClick={() => {
                            toggleInList(list.id, {
                              planSlug: meta.id,
                              recipeId: meal.id,
                              recipeTitle: meal.title,
                              planTitle: meta.title
                            });
                            setShowOptions(false);
                          }}
                          style={{
                            display: "block",
                            width: "100%",
                            textAlign: "left",
                            background: inList ? "var(--accent)" : "transparent",
                            border: "none",
                            padding: "4px 8px",
                            cursor: "pointer",
                            fontSize: 12,
                            color: inList ? "#fff" : "var(--text)",
                            borderRadius: 0
                          }}
                        >
                          {list.name} {inList ? "✓" : ""}
                        </button>
                      );
                    })}
                  </>
                )}
              </div>
            )}
          </div>
          <h3 style={{ margin: 0, lineHeight: 1.3 }}>{meal.title}</h3>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          {meal.isViral ? tagChip("🔥 Viral") : null}
          {tagChip(meal.target)}
          {meal.riceCooker?.enabled ? tagChip("🍚 Reiskocher") : null}
        </div>
      </div>
      {meal.desc ? <p style={{ marginTop: 8, color: "var(--muted)", fontStyle: "italic" }}>{meal.desc}</p> : null}
      
      <h4>Zutaten (2 Personen)</h4>
      <ul>{meal.ingredients.map((i, idx) => <li key={idx}>{i}</li>)}</ul>
      
      <h4>Zubereitung</h4>
      <ol>{meal.steps.map((s, idx) => <li key={idx}>{s}</li>)}</ol>
      
      <div style={{ marginTop: 16, padding: "12px 16px", background: "var(--chip-bg)", borderRadius: 0 }}>
        <p style={{margin:"0 0 4px"}}><strong>Hinweise:</strong> {meal.checks}</p>
        <p style={{margin:"0 0 4px"}}><strong>Austausche:</strong> {meal.swaps}</p>
        <p style={{margin:0}}><strong>Beilage & Getränke:</strong> {meal.side}</p>
      </div>

      {meal.riceCooker?.enabled ? (
        <div style={{ marginTop: 12 }}>
          <details>
            <summary style={{cursor:"pointer", fontWeight:600}}>Reiskocher-Details</summary>
            <ul style={{marginTop:8}}>
              <li><strong>Programm:</strong> {meal.riceCooker.program}</li>
              <li><strong>Wasserverhältnis:</strong> {meal.riceCooker.water}</li>
              {meal.riceCooker.notes ? <li><strong>Hinweise:</strong> {meal.riceCooker.notes}</li> : null}
            </ul>
          </details>
        </div>
      ) : null}
    </div>
  );
}

function DaySection({ dayKey, meals, dayName, meta }) {
  return (
    <section className="day-section" style={{ marginBottom: 40 }} id={`day-${dayKey}`}>
      <h2 style={{ marginBottom: 16, borderBottom:"2px solid var(--border)", paddingBottom:8 }}>
        {dayName.replace(/\s*\(.+\)$/, "")} <span className="mkt-date-paren" style={{fontSize:"0.7em", color:"var(--muted)", fontWeight:400}}>{dayName.match(/\(.+\)$/)?.[0] ?? ""}</span>
      </h2>
      <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: 24 }}>
        {meals.map((m) => <MealCard key={m.id} meal={m} year={new Date().getFullYear()} meta={meta} />)}
      </div>
    </section>
  );
}

// Register-Seite statt Karten-Grid: Tag-Nummer (01–07) wie im Wochen-Index der Sidebar, Haarlinie
// statt Kachel, Mahlzeiten als flache Liste statt Pillen — gleiche Sprache wie das Register-Menü.
function WeekOverview({ data, DAY_NAME_DE, meta, subtitle }) {
  const byDay = useMemo(() => {
    const map = { mo: [], di: [], mi: [], do: [], fr: [], sa: [], so: [] };
    for (const r of data) map[r.id.split("-")[0]].push(r);
    return map;
  }, [data]);

  return (
    <section style={{ marginBottom: 32 }}>
      {/* Kein voller Kartenrand — sitzt direkt im randlosen #kochbuch-root, ein zweiter Rahmen
          wäre hier nur ein Kasten im Kasten. Eine Haarlinie unten grenzt gegen die Meal-Cards ab. */}
      <div style={{ ...cardPanelStyle, border: "none", borderBottom: "1px solid var(--border)" }}>
        <div style={{ marginBottom: 8 }}>
          <div style={{ fontFamily: '"Cormorant Garamond", "Noto Serif JP", serif', fontSize: 11.5, letterSpacing: "0.14em", color: "var(--muted)", marginBottom: 8 }}>
            索引 · Woche
          </div>
          <h2 style={{ margin: 0 }}>
            {meta.title} <span style={{ color: "var(--muted)", fontWeight: 400 }}>({meta.startDate})</span>
          </h2>
          <p style={{ marginTop: 6, color: "var(--muted)" }}>{subtitle ?? "Täglich 3 Mahlzeiten · 1× Reiskocher-Gericht pro Tag · mild, salzarm, schwangerschaftsgeeignet."}</p>
        </div>
        <div>
          {DAYS_ORDER.map((d, i) => (
            <div key={d} style={{ display: "flex", gap: 18, padding: "16px 0", borderBottom: i < DAYS_ORDER.length - 1 ? "1px solid var(--border)" : "none" }}>
              <div style={{ fontFamily: '"Cormorant Garamond", "Noto Serif JP", serif', fontSize: 24, color: "var(--muted)", minWidth: "1.6em", textAlign: "right", lineHeight: 1, flexShrink: 0 }}>
                {String(i + 1).padStart(2, "0")}
              </div>
              <div style={{ flex: 1, minWidth: 0 }}>
                <a href={`#day-${d}`} style={{ display: "block", fontWeight: 600, textDecoration: "none", color: "var(--text)", marginBottom: 8, fontSize: 15 }}>
                  {DAY_NAME_DE[d]}
                </a>
                <div style={{ display: "flex", flexDirection: "column", gap: 5 }}>
                  {byDay[d].map((m) => (
                    <a key={m.id} href={`#meal-${m.id}`} style={{ display: "flex", alignItems: "baseline", gap: 8, textDecoration: "none", fontSize: 13.5, color: "var(--muted)" }}>
                      <span aria-hidden="true">{m.riceCooker?.enabled ? "🍚" : m.isViral ? "🔥" : "·"}</span>
                      <span style={{ color: "var(--text)" }}>{m.title.replace(/ – .*$/, "")}</span>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Separate Tages-Übersicht nur für Reiskocher-Gerichte — zusätzlich zu den Reiskocher-Details
// pro Karte, damit man auf einen Blick sieht, welcher Tag KEIN Reiskocher-Gericht hat.
function RiceCookerSection({ data, DAY_NAME_DE }) {
  const perDay = useMemo(() => {
    const map = { mo: null, di: null, mi: null, do: null, fr: null, sa: null, so: null };
    for (const r of data) {
      const day = r.id.split("-")[0];
      if (r.riceCooker?.enabled && !map[day]) map[day] = r;
    }
    return map;
  }, [data]);
  if (!Object.values(perDay).some(Boolean)) return null;

  return (
    <section style={{ marginTop: 32 }}>
      <h2 style={{ borderBottom: "2px solid var(--border)", paddingBottom: 10, marginBottom: 20 }}>🍚 Reiskocher-Gerichte (Übersicht)</h2>
      <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: 16 }}>
        {DAYS_ORDER.map((d) => {
          const r = perDay[d];
          return (
            <div key={d} style={cardPanelStyle}>
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
    </section>
  );
}

// ---------- PDF Export ----------
const nextFrame = () => new Promise((r) => requestAnimationFrame(() => r()));

async function exportPdfFromRoot(rootEl, filename) {
  await ensureScript("https://cdnjs.cloudflare.com/ajax/libs/html2pdf.js/0.10.1/html2pdf.bundle.min.js");
  if (!window.html2pdf) throw new Error("html2pdf nicht verfügbar.");

  const clone = rootEl.cloneNode(true);
  clone.id = "kochbuch-export";
  clone.classList.add("mkt-exporting");
  document.body.appendChild(clone);
  window.scrollTo(0, 0);
  await nextFrame();

  const opt = {
    margin: [34, 28, 34, 28],
    filename,
    pagebreak: { mode: ["css", "legacy"], after: [".day-section"], avoid: [".meal-card", ".mkt-hero"] },
    html2canvas: { backgroundColor: "#FFFFFF", useCORS: true, logging: false, imageTimeout: 0, scale: 2, foreignObjectRendering: false, scrollX: 0, scrollY: -window.scrollY },
    jsPDF: { unit: "pt", format: "a4", orientation: "portrait" },
  };

  try {
    await window.html2pdf().set(opt).from(clone).save();
  } finally {
    clone.remove();
  }
}

// ---------- Template-Komponente ----------
export default function PlanTemplate({
  meta,
  data,
  canon = DEFAULT_CANON,
  dayNames,
  uiTitles = { main: "Moving Kitchen Tales – Woche", list: "Moving Kitchen Tales – Einkaufsliste" },
  subtitle,
  heroChips,
  year = 2026,
  options = { showImagesInViewer: true, pdf: { hideImages: true } },
}) {
  const systemDark = useSystemPrefersDark();
  const [mode, setMode] = useState("auto");
  const effectiveDark = mode === "auto" ? systemDark : mode === "dark";
  const vars = themeVars(effectiveDark ? "dark" : "light");

  useEffect(() => {
    const root = document.documentElement;
    Object.entries(vars).forEach(([k, v]) => root.style.setProperty(k, v));
    return () => Object.keys(vars).forEach((k) => root.style.removeProperty(k));
  }, [vars]);

  const [tab, setTab] = useState("kochbuch");
  const listGroups = useMemo(() => aggregateList(data, canon), [data, canon]);

  const doExportPDF = async () => {
    const el = document.getElementById("kochbuch-root");
    if (!el) return alert("Export: #kochbuch-root nicht gefunden.");
    try {
      await exportPdfFromRoot(el, `${meta.title} ${meta.startDate}.pdf`);
    } catch (e) {
      console.error(e);
      alert("PDF-Export fehlgeschlagen.");
    }
  };
  const doPrint = () => window.print();
  const doExportHTML = () => {
    const pageBg = getComputedStyle(document.documentElement).getPropertyValue("--bg")?.trim() || "#FFFFFF";
    const url = exportHTMLById("kochbuch-root", `${meta.title} ${meta.startDate}`, buildEmbedCss(), pageBg);
    if (!url) return alert("HTML-Export nicht verfügbar.");
    const a = document.createElement("a");
    a.href = url;
    a.download = `${meta.title} ${meta.startDate}.html`;
    document.body.appendChild(a);
    a.click();
    a.remove();
    setTimeout(() => URL.revokeObjectURL(url), 1500);
  };

  // ---- Styles mit verbessertem Zeilenabstand ----
  const Styles = () => (
    <style>{`
      /* Bessere Lesbarkeit für Pläne */
      .meal-card p { line-height: 1.75; margin-bottom: 1rem; }
      .meal-card li { line-height: 1.7; margin-bottom: 0.5rem; }
      .meal-card h4 { margin-top: 1.5rem; margin-bottom: 0.75rem; color: var(--accent-2); font-weight: 700; }
      
      /* Flach statt Pille — gleiche Sprache wie .btn-primary/.btn-secondary: Haarlinie,
         keine Rundung, aktiver Zustand über Rand-/Textfarbe statt gefüllter Fläche. Nur der
         Schalter-Knopf (.mkt-switch) bleibt rund — Konvention wie der Sprachschalter im Register. */
      .mkt-tab { padding:9px 16px; border-radius:0; border:1px solid var(--btn-border); background:var(--panel); color:var(--text); cursor:pointer; font-weight:600; font-size:13.5px; }
      .mkt-tab:hover { border-color:var(--seal); color:var(--seal); }
      .mkt-tab[aria-pressed="true"] { border-color:var(--seal); color:var(--seal); background:var(--chip-bg); }
      .mkt-switch{ --w:48px; --h:28px; --k:22px; position:relative; display:inline-block; width:var(--w); height:var(--h); }
      .mkt-switch input{ opacity:0; width:0; height:0; position:absolute; }
      .mkt-switch .mkt-slider{ position:absolute; inset:0; border-radius:var(--h); background:var(--btn-border); border:1px solid var(--btn-border); }
      .mkt-switch .mkt-slider::before{ content:""; position:absolute; height:var(--k); width:var(--k); left:3px; top:50%; transform:translateY(-50%); border-radius:999px; background:var(--panel); box-shadow:var(--shadow); transition:transform .2s; }
      .mkt-switch input:checked + .mkt-slider{ background:var(--accent-2); border-color:var(--accent-2); }
      .mkt-switch input:checked + .mkt-slider::before{ transform:translateY(-50%) translateX(calc(var(--w) - var(--k) - 6px)); }

      .mkt-segment{ display:inline-flex; gap:0; border:1px solid var(--btn-border); border-radius:0; padding:0; background:var(--panel); }
      .mkt-segment label{ position:relative; display:inline-flex; align-items:center; }
      .mkt-segment label:not(:last-child) span{ border-right:1px solid var(--btn-border); }
      .mkt-segment input[type="radio"]{ position:absolute; inset:0; opacity:0; cursor:pointer; }
      .mkt-segment span{ display:inline-block; padding:9px 16px; font-weight:600; font-size:13.5px; }
      .mkt-segment input[type="radio"]:checked + span{ background:var(--btn-on-bg); color:var(--seal); }

      #mkt-content{ display:block !important; }
      #mkt-content > [hidden]{ display:none !important; }

      .mkt-exporting{ width:794px !important; max-width:794px !important; margin:0 auto !important; background:#fff !important; box-sizing:border-box !important; font-size:12pt !important; line-height:1.45 !important;
        --bg:#FFFFFF; --text:#111827; --panel:#FFFFFF; --border:rgba(0,0,0,.12); --muted:#374151; --chip-bg:#F3F4F6; --btn-border:rgba(0,0,0,.15); --btn-on-bg:#F3F4F6;
      }
      .mkt-exporting *{ box-shadow:none !important; }
      .mkt-exporting .mkt-art, .mkt-exporting img{ display:none !important; visibility:hidden !important; }
      .mkt-exporting .mkt-chip, .mkt-exporting .mkt-date-paren{ display:none !important; }

      @media print {
        .mkt-art, .mkt-date-paren{ display:none !important; visibility:hidden !important; }
      }

      @page { size: A4; margin:12mm; }
      @media print {
        html, body, #root { background:#fff !important; }
        aside, nav, header, footer, .mkt-no-print { display:none !important; }
        #kochbuch-root { width: calc(210mm - 24mm); margin:0 auto !important; background:#fff !important; border:none !important; box-shadow:none !important; }
        .mkt-hero, .mkt-hero-inner { background:#fff !important; box-shadow:none !important; }
        .day-section, .meal-card { break-inside:avoid; page-break-inside:avoid; }
        h2, h3 { break-after:avoid; page-break-after:avoid; }
        #kochbuch-root * { -webkit-print-color-adjust: exact; print-color-adjust: exact; }
        a[href]:after { content:""; }
      }
    `}</style>
  );

  const Week = () => {
    const byDay = useMemo(() => {
      const map = { mo: [], di: [], mi: [], do: [], fr: [], sa: [], so: [] };
      for (const r of data) map[r.id.split("-")[0]].push(r);
      return map;
    }, [data]);
    return (
      <>
        {DAYS_ORDER.map((d) => (
          <DaySection key={d} dayKey={d} meals={byDay[d]} dayName={dayNames[d]} meta={meta} />
        ))}
      </>
    );
  };

  const ShoppingList = () => {
    const Group = ({ name, items }) => (
      <div style={{ marginBottom: 20 }}>
        <h3>{name}</h3>
        <ul>{items.map((it, idx) => <li key={idx}>{`${it.label} – ${Math.round(it.qty * 10) / 10} ${it.unit}`}</li>)}</ul>
      </div>
    );
    const listTitle = `Einkaufsliste – ${meta?.title ?? ""}`.trim();
    const asText = () => buildShoppingListText(listGroups, listTitle);
    return (
      <div>
        <div className="ghk-no-print" style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: 16 }}>
          <button type="button" className="ghk-tab" onClick={() => shareOrCopyText(asText(), listTitle)}>
            📤 Teilen / Kopieren
          </button>
          <button type="button" className="ghk-tab" onClick={() => downloadTextFile(asText(), `${listTitle}.txt`)}>
            ⬇️ Als Text herunterladen
          </button>
        </div>
        <Group name="Protein/Fisch/Tofu" items={listGroups["Protein/Fisch/Tofu"]} />
        <Group name="Gemüse/Pilze" items={listGroups["Gemüse/Pilze"]} />
        <Group name="Reis/Nudeln/Sättigung" items={listGroups["Reis/Nudeln/Sättigung"]} />
        <Group name="Algen/Brühen/Würze" items={listGroups["Algen/Brühen/Würze"]} />
      </div>
    );
  };

  return (
    <div style={{ background: "var(--bg)", color: "var(--text)", padding: 24 }}>
      <Styles />

      <div className="mkt-hero" style={{ ...cardPanelStyle, padding: 16, marginBottom: 18 }}>
        <div className="mkt-hero-inner" style={{ background: "var(--grad-hero)", borderRadius: 0, padding: 14, marginBottom: 12, display: "grid", gap: 8 }}>
          <h1 style={{ margin: 0 }}>{uiTitles.main}</h1>
          <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
            {tagChip(`Start: ${meta.startDate}`)}
            {(heroChips ?? ["Mahlzeiten/Woche: 21", "Salzarm · mild · alles durchgegart", "Täglich 1× 🍚 Reiskocher"]).map((c) => tagChip(c))}
          </div>
        </div>

        <div className="mkt-no-print" style={{ display: "flex", gap: 8, flexWrap: "wrap", alignItems: "center", justifyContent: "space-between" }}>
          <fieldset className="mkt-segment" role="radiogroup" aria-label="Ansicht wählen">
            <label htmlFor="view-kochbuch">
              <input id="view-kochbuch" type="radio" name="mkt-view" value="kochbuch" checked={tab === "kochbuch"} onChange={() => setTab("kochbuch")} aria-controls="mkt-content" />
              <span>{uiTitles.main}</span>
            </label>
            <label htmlFor="view-liste">
              <input id="view-liste" type="radio" name="mkt-view" value="liste" checked={tab === "liste"} onChange={() => setTab("liste")} aria-controls="mkt-content" />
              <span>{uiTitles.list}</span>
            </label>
          </fieldset>

          <div style={{ display: "flex", gap: 8, flexWrap: "wrap", alignItems: "center" }}>
            <button type="button" onClick={doExportPDF} className="mkt-tab" style={{ padding: "8px 12px" }}>⤓ PDF</button>
            <button type="button" onClick={doExportHTML} className="mkt-tab" style={{ padding: "8px 12px" }}>⤓ HTML</button>
            <button type="button" onClick={() => doPrint()} className="mkt-tab" style={{ padding: "8px 12px" }}>🖨️ Drucken</button>

            <div className="mkt-theme-switch" style={{ display: "inline-flex", alignItems: "center", gap: 10, padding: 6, border: "1px solid var(--btn-border)", background: "var(--panel)" }}>
              <button type="button" className="mkt-tab" aria-pressed={mode === "auto"} onClick={() => setMode(mode === "auto" ? (effectiveDark ? "dark" : "light") : "auto")} style={{ padding: "6px 10px" }}>Auto</button>
              <label className="mkt-switch" title={effectiveDark ? "Dunkel" : "Hell"}>
                <input type="checkbox" checked={effectiveDark} onChange={(e) => setMode(e.target.checked ? "dark" : "light")} disabled={mode === "auto"} />
                <span className="mkt-slider" />
              </label>
              <span style={{ fontSize: 12, color: "var(--muted)" }}>{mode === "auto" ? "System" : effectiveDark ? "Dunkel" : "Hell"}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Kein eigener Rand: dieser Wrapper gruppiert nur WeekOverview + Week + Liste, er ist kein
          eigenständiges Karten-Element — mit Rand hier stapelten sich sonst drei Rahmen ineinander
          (Buch → dieser Wrapper → jede Meal-Card). */}
      <div id="kochbuch-root" style={{ ...cardPanelStyle, border: "none" }}>
        <WeekOverview data={data} DAY_NAME_DE={dayNames} meta={meta} subtitle={subtitle} />
        <div id="mkt-content" data-view={tab}>
          <section id="mkt-pane-kochbuch" aria-hidden={tab !== "kochbuch"} hidden={tab !== "kochbuch"}>
            <Week />
            <RiceCookerSection data={data} DAY_NAME_DE={dayNames} />
          </section>
          <section id="mkt-pane-liste" aria-hidden={tab !== "liste"} hidden={tab !== "liste"}>
            <ShoppingList />
          </section>
        </div>
      </div>
    </div>
  );
}

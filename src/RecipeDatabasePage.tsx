// src/RecipeDatabasePage.tsx
// Cross-week recipe browser/filter — separate from the fast homepage/sidebar path on purpose:
// filtering "all rice-cooker dishes" or "all viral trends" needs every plan's full data loaded,
// which is exactly the cost the lazy-loading elsewhere in the app avoids paying by default.
// Visiting this page is an explicit opt-in to that one-time bulk load.
import React, { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { useLang, planDataCache, loadPlanData, PlanRecord } from "./App";

type Recipe = {
  id: string;
  title: string;
  desc?: string;
  ingredients?: string[];
  remind?: boolean;
  isViral?: boolean;
  riceCooker?: { enabled?: boolean };
  [key: string]: any;
};

function mealTypeOf(id: string): "f" | "m" | "a" | null {
  if (id.endsWith("-f")) return "f";
  if (id.endsWith("-m")) return "m";
  if (id.endsWith("-a")) return "a";
  return null;
}

export function RecipeDatabasePage({ plans }: { plans: PlanRecord[] }) {
  const { lang } = useLang();
  const [loading, setLoading] = useState(true);
  const [, forceRender] = useState(0);

  const langPlans = useMemo(() => plans.filter(p => p.lang === lang), [plans, lang]);

  useEffect(() => {
    let alive = true;
    setLoading(true);
    Promise.all(langPlans.map(loadPlanData)).then(() => {
      if (alive) { setLoading(false); forceRender(v => v + 1); }
    });
    return () => { alive = false; };
  }, [langPlans]);

  const [search, setSearch] = useState("");
  const [riceCookerOnly, setRiceCookerOnly] = useState(false);
  const [viralOnly, setViralOnly] = useState(false);
  const [mealType, setMealType] = useState<"all" | "f" | "m" | "a">("all");

  const allRows = useMemo(() => {
    const rows: { plan: PlanRecord; recipe: Recipe }[] = [];
    for (const p of langPlans) {
      const data = planDataCache.get(p.slug)?.DATA;
      if (!data) continue;
      for (const r of data) rows.push({ plan: p, recipe: r });
    }
    return rows;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [langPlans, loading]);

  const filtered = useMemo(() => {
    const q = search.trim().toLowerCase();
    return allRows.filter(({ recipe }) => {
      if (riceCookerOnly && !recipe.riceCooker?.enabled) return false;
      if (viralOnly && !recipe.isViral) return false;
      if (mealType !== "all" && mealTypeOf(recipe.id) !== mealType) return false;
      if (q) {
        const hay = [recipe.title, recipe.desc, ...(recipe.ingredients ?? [])].join(" ").toLowerCase();
        if (!hay.includes(q)) return false;
      }
      return true;
    });
  }, [allRows, search, riceCookerOnly, viralOnly, mealType]);

  const t = (de: string, zh: string) => (lang === "de" ? de : zh);

  return (
    <div className="main-inner" style={{ padding: "0 20px" }}>
      <header style={{ marginBottom: 20 }}>
        <h1 style={{ marginBottom: 4 }}>{t("📚 Rezept-Datenbank", "📚 Recipe database")}</h1>
        <p style={{ color: "var(--muted)" }}>
          {t(
            `Alle Rezepte aus allen Wochen durchsuchen und filtern (${allRows.length} gefunden).`,
            `Search and filter every recipe across all weeks (${allRows.length} found).`
          )}
        </p>
      </header>

      <div style={{ display: "flex", gap: 10, flexWrap: "wrap", marginBottom: 20, alignItems: "center" }}>
        <input
          type="search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder={t("Titel, Zutaten...", "Title, ingredients...")}
          style={{
            flex: "1 1 220px",
            padding: "8px 12px",
            borderRadius: 8,
            border: "1px solid var(--border)",
            background: "var(--panel)",
            color: "var(--text)",
          }}
        />
        <label style={{ display: "flex", alignItems: "center", gap: 6, fontSize: 14 }}>
          <input type="checkbox" checked={riceCookerOnly} onChange={(e) => setRiceCookerOnly(e.target.checked)} />
          🍚 {t("Nur Reiskocher", "Rice cooker only")}
        </label>
        <label style={{ display: "flex", alignItems: "center", gap: 6, fontSize: 14 }}>
          <input type="checkbox" checked={viralOnly} onChange={(e) => setViralOnly(e.target.checked)} />
          🔥 {t("Nur virale Trends", "Viral trends only")}
        </label>
        <select
          value={mealType}
          onChange={(e) => setMealType(e.target.value as any)}
          style={{ padding: "8px 12px", borderRadius: 8, border: "1px solid var(--border)", background: "var(--panel)", color: "var(--text)" }}
        >
          <option value="all">{t("Alle Mahlzeiten", "All meals")}</option>
          <option value="f">{t("Frühstück", "Breakfast")}</option>
          <option value="m">{t("Mittag", "Lunch")}</option>
          <option value="a">{t("Abend", "Dinner")}</option>
        </select>
      </div>

      {loading ? (
        <p style={{ color: "var(--muted)" }}>{t("Lädt alle Rezepte…", "Loading all recipes…")}</p>
      ) : filtered.length === 0 ? (
        <p style={{ color: "var(--muted)" }}>{t("Keine Treffer.", "No matches.")}</p>
      ) : (
        <div style={{ display: "grid", gap: 12 }}>
          {filtered.slice(0, 200).map(({ plan, recipe }) => (
            <Link
              key={`${plan.slug}-${recipe.id}`}
              to={`/plan/${plan.slug}#meal-${recipe.id}`}
              style={{
                display: "block",
                padding: "12px 16px",
                borderRadius: 12,
                border: "1px solid var(--border)",
                background: "var(--panel)",
                textDecoration: "none",
                color: "var(--text)",
              }}
            >
              <div style={{ display: "flex", justifyContent: "space-between", gap: 8, flexWrap: "wrap" }}>
                <strong>{recipe.title}</strong>
                <span style={{ fontSize: 12, color: "var(--muted)" }}>
                  {recipe.riceCooker?.enabled ? "🍚 " : ""}
                  {recipe.isViral ? "🔥 " : ""}
                  {plan.meta.title}
                </span>
              </div>
              {recipe.desc && <div style={{ fontSize: 13, color: "var(--muted)", marginTop: 4 }}>{recipe.desc}</div>}
            </Link>
          ))}
          {filtered.length > 200 && (
            <p style={{ color: "var(--muted)", fontSize: 13 }}>
              {t(`+ ${filtered.length - 200} weitere — Suche eingrenzen für mehr Übersicht.`, `+ ${filtered.length - 200} more — narrow your search.`)}
            </p>
          )}
        </div>
      )}
    </div>
  );
}

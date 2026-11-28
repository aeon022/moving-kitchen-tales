// Hat es geschmeckt? Gespeichert unter dem deutschen Titel, damit beide Sprachen dasselbe sehen.
import React from "react";
import { useLang } from "../App";
import { useRatings } from "../hooks/useRatings";

export function Rating({ title }: { title: string }) {
  const { lang } = useLang();
  const t = (de: string, zh: string) => (lang === "de" ? de : zh);
  const r = useRatings();
  return (
    <span className="rating ghk-no-print">
      <button type="button" className="rating-up" aria-pressed={r.up.includes(title)} onClick={() => r.toggle(title, "up")}>
        <span aria-hidden="true">好</span> {t("schmeckt", "好吃")}
      </button>
      <button type="button" className="rating-down" aria-pressed={r.down.includes(title)} onClick={() => r.toggle(title, "down")}>
        {t("eher nicht", "不太喜欢")}
      </button>
    </span>
  );
}

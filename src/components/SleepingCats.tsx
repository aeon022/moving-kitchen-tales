// Fußzeile: die beiden schlafen. Antippen weckt sie kurz.
import React, { useEffect, useState } from "react";
import { useLang } from "../App";
import { CatsAsleep } from "./Cats";
import { isNewYear } from "../utils/catMood";

export function SleepingCats() {
  const { lang } = useLang();
  const [stir, setStir] = useState(false);
  useEffect(() => {
    if (!stir) return;
    const timer = setTimeout(() => setStir(false), 2600);
    return () => clearTimeout(timer);
  }, [stir]);
  return (
    <button
      type="button"
      className={`page-end${stir ? " is-stirring" : ""}`}
      onClick={() => setStir(true)}
      aria-label={lang === "de" ? "Finn und Fleur wecken" : "叫醒 Finn 和 Fleur"}
    >
      <CatsAsleep stir={stir} festive={isNewYear(new Date())} />
    </button>
  );
}

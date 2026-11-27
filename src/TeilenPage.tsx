// src/TeilenPage.tsx
// Haken, Nachkaufliste und Gefrierschrank per Link an ein anderes Gerät geben. Kein Server:
// der Stand steckt im Link selbst und wird erst nach Bestätigung übernommen.
import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useLang } from "./App";
import { encodeShare, decodeShare, mergeShared, Shared, STRING_KEYS, FREEZER_KEY } from "./utils/freezer";
import { readFreezer } from "./hooks/useFreezer";

function readState(): Shared {
  const lists: Shared["lists"] = {};
  for (const k of STRING_KEYS) {
    try { lists[k] = JSON.parse(localStorage.getItem(k) ?? "[]"); } catch { lists[k] = []; }
  }
  return { lists, freezer: readFreezer() };
}

export function ShareState() {
  const { lang } = useLang();
  const t = (de: string, zh: string) => (lang === "de" ? de : zh);
  const [msg, setMsg] = useState("");
  const share = async () => {
    const url = `${location.origin}${location.pathname}#/teilen?d=${encodeShare(readState())}`;
    try {
      if (navigator.share) await navigator.share({ title: "Moving Kitchen Tales", url });
      else {
        await navigator.clipboard.writeText(url);
        setMsg(t("Link kopiert. Auf dem anderen Gerät öffnen.", "链接已复制，在另一台设备上打开。"));
      }
    } catch (e) {
      if ((e as Error).name !== "AbortError") setMsg(t("Teilen ist in diesem Browser nicht möglich.", "此浏览器无法分享。"));
    }
  };
  return (
    <section className="share-box">
      <h3>{t("Mit dem anderen Handy abgleichen", "同步到另一部手机")}</h3>
      <p className="export-msg">{t("Der Link enthält Vorkoch-Haken, Einkaufshaken, Nachkaufliste und Gefrierschrank. Er gleicht nicht laufend ab: nach Änderungen neu schicken.", "链接包含备餐勾选、购物勾选、补货清单和冷冻库存。不会自动同步：有改动后请重新发送。")}</p>
      <button type="button" className="prep-tab" onClick={share}>{t("Stand teilen", "分享当前状态")}</button>
      <p className="export-msg" aria-live="polite">{msg}</p>
    </section>
  );
}

export function TeilenPage() {
  const { lang } = useLang();
  const t = (de: string, zh: string) => (lang === "de" ? de : zh);
  const { search } = useLocation();
  const theirs = decodeShare(new URLSearchParams(search).get("d") ?? "");
  const [done, setDone] = useState(false);

  const apply = (next: Shared) => {
    try {
      for (const k of STRING_KEYS) localStorage.setItem(k, JSON.stringify(next.lists[k] ?? []));
      localStorage.setItem(FREEZER_KEY, JSON.stringify(next.freezer));
      setDone(true);
    } catch {
      alert(t("Speichern nicht möglich (privates Fenster?).", "无法保存（隐私窗口？）"));
    }
  };

  return (
    <div className="main-inner" style={{ padding: "0 20px", maxWidth: 640 }}>
      <header className="prep-header"><h1>{t("Stand übernehmen", "导入状态")}</h1></header>
      {!theirs ? (
        <p>{t("Dieser Link ist unvollständig oder kaputt.", "链接不完整或已损坏。")}</p>
      ) : done ? (
        <p>{t("Übernommen.", "已导入。")} <Link to="/gefrierschrank">{t("Zum Gefrierschrank →", "查看冷冻室 →")}</Link></p>
      ) : (
        <>
          <p>
            {t(
              `Im Link: ${theirs.lists["mkt.vorkochen.done"].length} gekocht, ${theirs.lists["mkt.vorkochen.bought"].length} eingekauft, ${theirs.lists["mkt.pantry.buy"].length} nachzukaufen, ${theirs.freezer.length} im Gefrierschrank.`,
              `链接内容：已做${theirs.lists["mkt.vorkochen.done"].length}项，已买${theirs.lists["mkt.vorkochen.bought"].length}项，需补货${theirs.lists["mkt.pantry.buy"].length}项，冷冻库存${theirs.freezer.length}种。`
            )}
          </p>
          <div className="export-bar">
            <button type="button" className="prep-tab" onClick={() => apply(theirs)}>{t("Meinen Stand ersetzen", "覆盖我的数据")}</button>
            <button type="button" className="prep-tab" onClick={() => apply(mergeShared(readState(), theirs))}>{t("Zusammenführen", "合并")}</button>
          </div>
          <p className="export-msg">{t("„Ersetzen“ übernimmt auch Entferntes. „Zusammenführen“ ergänzt nur.", "“覆盖”会同步删除操作；“合并”只做增加。")}</p>
        </>
      )}
    </div>
  );
}

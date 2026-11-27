// Einkaufsliste weitergeben: Apple Erinnerungen (einfügen) oder taskctl (Terminal).
import React, { useState } from "react";
import { reminderText, taskctlCommands } from "../utils/shoppingList";
import { useLang } from "../App";

export function ExportBar({ lines }: { lines: string[] }) {
  const [msg, setMsg] = useState("");
  const { lang } = useLang();
  const zh = lang === "zh";
  const copy = (text: string, ok: string) =>
    navigator.clipboard.writeText(text).then(
      () => setMsg(ok),
      () => setMsg(zh ? "此浏览器无法复制。" : "Kopieren ist in diesem Browser nicht möglich.")
    );
  if (!lines.length) return <p className="export-msg">{zh ? "全部已勾选。" : "Alles abgehakt – nichts zu exportieren."}</p>;
  // Chinesisch: nur Kopieren, taskctl ist ein Werkzeug auf unserem Rechner.
  if (zh)
    return (
      <div className="export-bar ghk-no-print">
        <button type="button" className="prep-tab" onClick={() => copy(reminderText(lines), `已复制${lines.length}行。`)}>复制清单</button>
        <p className="export-msg" aria-live="polite">{msg}</p>
      </div>
    );
  return (
    <div className="export-bar ghk-no-print">
      <button type="button" className="prep-tab" onClick={() => copy(reminderText(lines), `${lines.length} Zeilen kopiert. In Erinnerungen eine Liste öffnen und einfügen.`)}>
        Für Apple Erinnerungen
      </button>
      <button type="button" className="prep-tab" onClick={() => copy(taskctlCommands(lines), `${lines.length} taskctl-Befehle kopiert. Im Terminal einfügen (Liste „Einkäufe“).`)}>
        Für taskctl
      </button>
      <p className="export-msg" aria-live="polite">{msg}</p>
    </div>
  );
}

// Einkaufsliste weitergeben: Apple Erinnerungen (einfügen) oder taskctl (Terminal).
import React, { useState } from "react";
import { reminderText, taskctlCommands } from "../utils/shoppingList";

export function ExportBar({ lines }: { lines: string[] }) {
  const [msg, setMsg] = useState("");
  const copy = (text: string, ok: string) =>
    navigator.clipboard.writeText(text).then(
      () => setMsg(ok),
      () => setMsg("Kopieren ist in diesem Browser nicht möglich.")
    );
  if (!lines.length) return <p className="export-msg">Alles abgehakt – nichts zu exportieren.</p>;
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

import React, { useState } from "react";

export function CopyButton({ text, label = "Liste kopieren" }: { text: string; label?: string }) {
  const [state, setState] = useState("");
  const copy = () =>
    navigator.clipboard.writeText(text).then(
      () => setState("Kopiert ✓"),
      () => setState("Kopieren nicht möglich")
    );
  return (
    <button type="button" className="prep-tab" style={{ marginTop: 10 }} onClick={copy}>
      <span aria-live="polite">{state || label}</span>
    </button>
  );
}

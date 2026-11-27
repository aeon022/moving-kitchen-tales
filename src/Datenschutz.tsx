// Hinweis zu Speicherung im Browser + Datenschutzseite. Die Seite setzt keine Cookies und trackt nicht,
// daher nur eine Information mit "Verstanden", keine Einwilligungs-Abfrage.
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useLang } from "./App";

const KEY = "mkt.notice.ok";

function seen() {
  try { return localStorage.getItem(KEY) === "1"; } catch { return false; }
}

export function CookieNotice() {
  const { lang } = useLang();
  const [hidden, setHidden] = useState(seen);
  if (hidden) return null;
  const close = () => {
    try { localStorage.setItem(KEY, "1"); } catch { /* privates Fenster */ }
    setHidden(true);
  };
  return (
    <aside className="cookie-notice" aria-label={lang === "de" ? "Hinweis zum Datenschutz" : "隐私提示"}>
      <p>
        {lang === "de"
          ? "Keine Cookies, kein Tracking. Merkliste, Haken und Einstellungen werden nur in deinem Browser gespeichert."
          : "本网站不使用 Cookie，也不做追踪。收藏、勾选和设置只保存在您的浏览器里。"}{" "}
        <Link to="/datenschutz">{lang === "de" ? "Mehr dazu" : "了解详情"}</Link>
      </p>
      <button type="button" className="prep-tab" onClick={close}>{lang === "de" ? "Verstanden" : "知道了"}</button>
    </aside>
  );
}

export function DatenschutzPage() {
  const { lang } = useLang();
  const sections: [string, string][] = lang === "de"
    ? [
        ["Cookies und Tracking", "Diese Seite setzt keine Cookies, verwendet keine Analyse- oder Werbedienste und hat keine Konten oder Formulare, die Daten an uns senden."],
        ["Speicherung im Browser", "Merkliste, Pinnwände, abgehakte Einträge, Kühlschrank-Zutaten, Spracheinstellung und die Bestätigung dieses Hinweises liegen im lokalen Speicher deines Browsers. Sie verlassen dein Gerät nur, wenn du selbst einen Teilen-Link verschickst. Für die Offline-Nutzung speichert der Browser außerdem eine Kopie der Seite. Du kannst sie über die Browser-Einstellungen („Websitedaten löschen“) entfernen."],
        ["Hosting", "Die Seite liegt bei GitHub Pages (GitHub, Inc., USA). Beim Aufruf verarbeitet GitHub technische Daten wie die IP-Adresse; Näheres in der Datenschutzerklärung von GitHub."],
        ["Externe Dienste", "Schriften werden von dieser Seite selbst geladen. Nur beim Erzeugen eines PDF wird eine Programmbibliothek von cdnjs (Cloudflare) geladen. Der Link „Projekt unterstützen“ führt zu Polar; dort gelten deren Bedingungen."],
      ]
    : [
        ["Cookie 与追踪", "本网站不使用 Cookie，没有分析或广告服务，也没有向我们发送数据的账户或表单。"],
        ["浏览器本地保存", "收藏、清单、勾选项、冰箱食材、语言设置以及本提示的确认，只保存在您浏览器的本地存储中，只有当您自己发送分享链接时才会离开设备。为了离线使用，浏览器还会保存一份网页副本。可在浏览器设置中清除网站数据。"],
        ["托管", "网站托管于 GitHub Pages（美国 GitHub, Inc.）。访问时 GitHub 会处理 IP 地址等技术数据，详见 GitHub 隐私声明。"],
        ["外部服务", "字体由本网站自行提供。只有在生成 PDF 时，才会从 cdnjs（Cloudflare）加载程序库。“支持项目”链接指向 Polar，适用其条款。"],
      ];
  return (
    <div className="main-inner" style={{ padding: "0 20px", maxWidth: 720 }}>
      <header className="prep-header">
        <div className="prep-kicker">隐私 · {lang === "de" ? "Datenschutz" : "隐私说明"}</div>
        <h1>{lang === "de" ? "Datenschutz" : "隐私说明"}</h1>
      </header>
      {sections.map(([h, p]) => (
        <section key={h}>
          <h3>{h}</h3>
          <p style={{ lineHeight: 1.7 }}>{p}</p>
        </section>
      ))}
    </div>
  );
}

import React from "react";
import { Link } from "react-router-dom";
import { useLang } from "./App";
import { Cat } from "./components/Cats";

export function NotFoundPage() {
  const { lang } = useLang();
  return (
    <div className="main-inner not-found">
      <div><Cat who="finn" pose="onpaper" /></div>
      <h1>{lang === "de" ? "Hier liegt schon wer." : "这里已经有猫占了。"}</h1>
      <p>{lang === "de" ? "Diese Seite gibt es nicht. Finn behauptet, er habe nichts damit zu tun." : "找不到这个页面。Finn 说跟他没关系。"}</p>
      <Link className="btn-primary" to="/">{lang === "de" ? "Zur Startseite" : "回到首页"}</Link>
    </div>
  );
}

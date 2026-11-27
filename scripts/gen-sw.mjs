// Nach dem Build: Service Worker mit allen Seitenteilen für die Offline-Nutzung schreiben.
// Schriften sind sehr viele Dateien; sie werden erst beim Benutzen gespeichert.
import { readdirSync, writeFileSync, readFileSync } from "node:fs";
import { createHash } from "node:crypto";
import { join } from "node:path";

const DIST = join(import.meta.dirname, "..", "dist");
const files = readdirSync(DIST, { recursive: true })
  .map((f) => String(f).split("\\").join("/"))
  .filter((f) => /\.(html|js|css|png|webp|webmanifest)$/.test(f) && f !== "sw.js")
  .sort();
const hash = createHash("sha1");
for (const f of files) hash.update(f).update(readFileSync(join(DIST, f)));
const version = hash.digest("hex").slice(0, 10);

writeFileSync(
  join(DIST, "sw.js"),
  `// automatisch erzeugt (scripts/gen-sw.mjs)
const CACHE = "mkt-${version}";
const FILES = ${JSON.stringify(["./", ...files])};
self.addEventListener("install", (e) => e.waitUntil(caches.open(CACHE).then((c) => c.addAll(FILES))));
self.addEventListener("activate", (e) =>
  e.waitUntil(caches.keys().then((keys) => Promise.all(keys.filter((k) => k.startsWith("mkt-") && k !== CACHE).map((k) => caches.delete(k)))))
);
self.addEventListener("fetch", (e) => {
  const req = e.request;
  if (req.method !== "GET" || new URL(req.url).origin !== location.origin) return;
  // Seite selbst: zuerst Netz (neue Inhalte), ohne Netz die gespeicherte.
  if (req.mode === "navigate") {
    e.respondWith(fetch(req).catch(() => caches.match("./")));
    return;
  }
  e.respondWith(
    caches.match(req, { ignoreVary: true }).then(
      (hit) =>
        hit ||
        fetch(req).then((res) => {
          if (res.ok) { const copy = res.clone(); caches.open(CACHE).then((c) => c.put(req, copy)); }
          return res;
        })
    )
  );
});
`
);
console.log(`sw.js: ${files.length} Dateien, Version ${version}`);

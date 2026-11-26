// node --experimental-strip-types scripts/test-rice.mjs
import assert from "node:assert/strict";
import { riceAlternative as alt } from "../src/utils/riceAlternative.ts";

assert.match(alt(["Reis (roh) 150 g"]), /75 g Reis \+ 150 g Blumenkohlreis \(etwa 55 g KH/);
assert.match(alt(["Reis (roh) 90 g"], "Congee (粥)"), /45 g Reis \+ 45 g Rollgerste/);
assert.match(alt(["Klebreis (roh) 100 g"]), /Rollgerste/);
assert.match(alt(["Reis (gekocht, kalt) 280 g"]), /140 g Reis \+ 140 g Blumenkohlreis/);
assert.match(alt(["Risottoreis 150 g"]), /Gersotto/);
assert.match(alt(["Vollkornreis (roh) 90 g"]), /Oder 90 g Rollgerste/);
assert.match(alt(["Reisnudeln trocken 150 g"]), /Soba/);
assert.match(alt(["Gekochter Reis"]), /Hälfte/);
for (const s of ["Reisessig mild 2 EL", "Reismehl 50 g", "Reispapier 8 Stück", "Tteokbokki Reiskuchen 200 g", "Weizennudeln 100 g"])
  assert.equal(alt([s]), null, s);
console.log("riceAlternative ok");

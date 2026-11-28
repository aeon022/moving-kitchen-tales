import type { Way } from "./types";

export const WAYS: Way[] = [
  {
    id: "japan-lamm-dry-curry", cuts: ["lamm-hack"], origin: "japan", art: "gegart", months: 2,
    ingredients: [["Zwiebel", "洋葱", 150, "g"], ["Karotten", "胡萝卜", 100, "g"], ["Apfel, gerieben", "苹果泥", 80, "g"], ["Currypulver, mild", "温和咖喱粉", 1.5, "EL"], ["Tomatenmark", "番茄膏", 1, "EL"], ["Natriumarme Sojasauce", "低钠生抽", 1, "EL"], ["Wasser", "水", 150, "ml"], ["Rapsöl", "菜籽油", 1, "EL"]],
    de: { title: "Japanisches Trockencurry (キーマカレー)", steps: ["Zwiebel und Karotten fein würfeln und im Öl weich anschwitzen.", "Faschiertes zugeben und krümelig braten, bis nichts mehr rosa ist.", "Currypulver und Tomatenmark kurz mitrösten, Apfel, Sojasauce und Wasser zugeben und 15 Min. einkochen.", "In flachen Behältern rasch abkühlen und portionsweise einfrieren."], freeze: "Flach in Beuteln oder Dosen, ohne Reis.", reheat: "Im Kühlschrank auftauen oder gefroren mit einem Schuss Wasser zugedeckt erhitzen, bis alles durchgehend kochend heiß ist; mit frisch gekochtem Reis servieren." },
    zh: { title: "日式肉末干咖喱", steps: ["洋葱和胡萝卜切细丁，用油炒软。", "放入肉末炒散，炒到完全没有粉红色。", "加咖喱粉和番茄膏略炒，再加苹果泥、生抽和水，收汁15分钟。", "装进浅盒快速放凉，分份冷冻。"], freeze: "装扁平袋或盒中冷冻，不连米饭。", reheat: "冷藏解冻，或冷冻状态加少许水盖锅加热至整锅滚烫；配现煮米饭。" },
  },
  {
    id: "japan-lamm-hambagu", cuts: ["lamm-hack"], origin: "japan", art: "gegart", months: 2,
    ingredients: [["Zwiebel", "洋葱", 120, "g"], ["Ei", "鸡蛋", 1, "Stk"], ["Semmelbrösel", "面包糠", 30, "g"], ["Milch, pasteurisiert", "巴氏杀菌牛奶", 3, "EL"], ["Passierte Tomaten", "番茄泥", 250, "g"], ["Champignons", "口蘑", 120, "g"], ["Natriumarme Sojasauce", "低钠生抽", 1, "EL"], ["Wasser", "水", 120, "ml"], ["Rapsöl", "菜籽油", 1.5, "EL"]],
    de: { title: "Geschmorte Hambagu in Tomatensauce (煮込みハンバーグ)", steps: ["Zwiebel fein hacken, in etwas Öl glasig braten und abkühlen lassen.", "Faschiertes mit Zwiebel, Ei, Bröseln und Milch gut verkneten und flache Laibchen formen.", "Laibchen im restlichen Öl beidseitig anbraten.", "Tomaten, Pilze in Scheiben, Sojasauce und Wasser zugeben und zugedeckt 20 Min. schmoren, bis die Laibchen innen durch sind (mindestens 75 °C).", "Rasch abkühlen und mit Sauce einfrieren."], freeze: "Laibchen nebeneinander, mit Sauce bedeckt.", reheat: "Im Kühlschrank auftauen oder gefroren mit etwas Wasser zugedeckt bei kleiner Hitze erwärmen, bis die Mitte kochend heiß ist." },
    zh: { title: "番茄酱炖日式汉堡肉", steps: ["洋葱切碎，用少许油炒至透明后放凉。", "肉末加洋葱、鸡蛋、面包糠和牛奶揉匀，做成扁肉饼。", "用剩下的油把肉饼两面煎上色。", "加番茄泥、蘑菇片、生抽和水，盖锅炖20分钟至肉饼中心熟透（至少75°C）。", "快速放凉，连酱汁冷冻。"], freeze: "肉饼平铺不叠放，用酱汁盖住。", reheat: "冷藏解冻，或冷冻状态加少许水小火盖锅加热至中心滚烫。" },
  },
  {
    id: "japan-huhn-mizutaki", cuts: ["huhn-ganz"], origin: "japan", art: "basis", months: 2,
    ingredients: [["Wasser", "水", 1300, "ml"], ["Ingwer", "姜", 15, "g"], ["Lauch", "大葱", 80, "g"], ["Getrocknete Shiitake", "干香菇", 3, "Stk"]],
    de: { title: "Mizutaki-Brühe mit Huhn (水炊き)", steps: ["Huhn in Teile zerlegen, mit kochendem Wasser kurz überbrühen und abspülen.", "Mit kaltem Wasser, Ingwer, Lauch und Shiitake aufkochen und abschäumen.", "Etwa 1,5 Stunden köcheln, bis das Fleisch ganz durch ist und sich leicht von den Knochen löst.", "Fleisch ablösen, Brühe abseihen, beides getrennt in flachen Behältern im Eisbad oder Kühlschrank rasch abkühlen und einfrieren."], freeze: "Fleisch mit etwas Brühe bedeckt, restliche Brühe mit Rand in Behältern.", reheat: "Im Kühlschrank auftauen oder gefroren in den Topf geben, sprudelnd aufkochen und darin Gemüse und Tofu garen; Fleisch durchgehend heiß werden lassen." },
    zh: { title: "日式水炊鸡汤", steps: ["整鸡切块，用开水略烫后冲净。", "加冷水、姜、大葱和香菇煮开，撇去浮沫。", "小火煮约1.5小时，至鸡肉全熟、容易脱骨。", "拆下鸡肉，滤出清汤，分别装浅盒，冰浴或冷藏快速降温后冷冻。"], freeze: "鸡肉用少许汤盖住，其余的汤装盒并留空间。", reheat: "冷藏解冻或冷冻状态下锅，煮至滚沸后涮煮蔬菜和豆腐；鸡肉要热透。" },
  },
  {
    id: "japan-huhn-karaage", cuts: ["huhn-ganz"], origin: "japan", art: "marinade", months: 2,
    ingredients: [["Natriumarme Sojasauce", "低钠生抽", 1.5, "EL"], ["Ingwer, gerieben", "姜蓉", 12, "g"], ["Knoblauch", "大蒜", 1, "Zehe"], ["Sesamöl", "芝麻油", 1, "TL"], ["Speisestärke", "淀粉", 50, "g"], ["Rapsöl zum Ausbacken", "煎炸用菜籽油", 150, "ml"]],
    de: { title: "Karaage aus dem ganzen Huhn (唐揚げ)", steps: ["Huhn zerlegen, entbeinen und in gleich große, etwa 3 cm große Stücke schneiden; die Karkasse anderweitig verwenden.", "Sojasauce, Ingwer, gepressten Knoblauch und Sesamöl gründlich unter das Fleisch mischen.", "Flach in Beutel füllen und sofort einfrieren; die Stärke trocken aufbewahren.", "Nach dem Auftauen abtropfen lassen, Marinadereste wegwerfen, in Stärke wenden und in heißem Öl portionsweise 6–8 Min. ausbacken, bis die Mitte durch ist (mindestens 75 °C)."], freeze: "Frisches, noch nie gefrorenes Huhn; flach in einer Lage.", reheat: "Über Nacht im Kühlschrank auftauen, dann wie im letzten Schritt ausbacken; nicht bei Raumtemperatur auftauen und rohes Fleisch nicht wieder einfrieren." },
    zh: { title: "整鸡版日式炸鸡块", steps: ["整鸡拆骨，切成约3厘米大小均匀的块；鸡骨架另作他用。", "生抽、姜蓉、蒜泥和香油与鸡块充分拌匀。", "平铺装袋，立即冷冻；淀粉干燥保存。", "解冻后沥干，剩余腌汁倒掉，裹上淀粉，分批用热油炸6–8分钟至中心熟透（至少75°C）。"], freeze: "选用从未冷冻过的鲜鸡，单层铺平。", reheat: "冷藏过夜解冻，再按最后一步炸熟；不要室温解冻，生肉不可再次冷冻。" },
  },
  {
    id: "japan-schwein-tonjiru", cuts: ["schwein-schulter"], origin: "japan", art: "gegart", months: 2,
    ingredients: [["Daikon-Rettich", "白萝卜", 250, "g"], ["Karotten", "胡萝卜", 150, "g"], ["Schwarzwurzel oder Klettenwurzel", "牛蒡或鸦葱", 100, "g"], ["Lauch", "大葱", 80, "g"], ["Ingwer", "姜", 10, "g"], ["Miso (laut Etikett nur Soja, Getreide, Salz)", "味噌（配料仅大豆、谷物、盐）", 2.5, "EL"], ["Wasser", "水", 1200, "ml"], ["Sesamöl", "芝麻油", 1, "EL"]],
    de: { title: "Tonjiru – Miso-Suppe mit Schwein (豚汁)", steps: ["Schulter in kleine, dünne Stücke schneiden, Wurzelgemüse und Lauch ebenfalls klein schneiden.", "Fleisch im Sesamöl anbraten, Wurzeln und Ingwer kurz mitrösten.", "Wasser zugeben, abschäumen und etwa 40 Min. köcheln, bis das Fleisch durch und weich ist.", "Lauch 5 Min. mitgaren und das Miso in etwas Brühe glatt rühren und einrühren.", "In flachen Behältern rasch abkühlen und einfrieren."], freeze: "Portionsweise, mit etwas Rand.", reheat: "Im Kühlschrank auftauen oder gefroren zugedeckt erhitzen und einmal vollständig aufkochen." },
    zh: { title: "猪肉味噌汤（豚汁）", steps: ["猪肩肉切成小薄片，根菜和大葱也切小。", "用香油把肉炒上色，放入根菜和姜略炒。", "加水煮开撇沫，小火煮约40分钟至肉熟透变软。", "放大葱煮5分钟，味噌用少许汤调开后拌入。", "装浅盒快速放凉后冷冻。"], freeze: "分份装盒，留少许空间。", reheat: "冷藏解冻或冷冻状态盖锅加热，彻底煮开一次。" },
  },
  {
    id: "japan-schwein-negishio", cuts: ["schwein-schulter"], origin: "japan", art: "marinade", months: 2,
    ingredients: [["Lauch", "大葱", 100, "g"], ["Zitronensaft", "柠檬汁", 1, "EL"], ["Sesamöl", "芝麻油", 1.5, "EL"], ["Knoblauch", "大蒜", 1, "Zehe"], ["Salz", "盐", 0.5, "TL"], ["Sesam", "芝麻", 1, "EL"]],
    de: { title: "Lauch-Zitronen-Schwein (ねぎ塩豚)", steps: ["Schulter quer zur Faser in etwa 5 mm dünne Scheiben schneiden.", "Lauch fein hacken und mit Zitronensaft, Sesamöl, gepresstem Knoblauch, Salz und Sesam verrühren.", "Fleisch gründlich damit mischen.", "Flach in Beutel füllen, Luft ausstreichen und sofort einfrieren."], freeze: "Frisches, noch nie gefrorenes Fleisch; dünn und flach.", reheat: "Im Kühlschrank auftauen, in der heißen Pfanne unter Wenden 6–8 Min. braten, bis alle Scheiben vollständig durch sind (mindestens 75 °C)." },
    zh: { title: "葱盐柠檬猪肉", steps: ["猪肩肉逆纹切成约5毫米薄片。", "大葱切碎，加柠檬汁、香油、蒜泥、盐和芝麻拌匀。", "与肉片充分拌匀。", "平铺装袋，排出空气，立即冷冻。"], freeze: "选用从未冷冻过的鲜肉，薄薄铺平。", reheat: "冷藏解冻，热锅翻炒6–8分钟，至每片肉完全熟透（至少75°C）。" },
  },
  {
    id: "japan-rippen-soki", cuts: ["schwein-rippen"], origin: "japan", art: "gegart", months: 2,
    ingredients: [["Daikon-Rettich", "白萝卜", 300, "g"], ["Ingwer", "姜", 20, "g"], ["Reisessig", "米醋", 1, "EL"], ["Natriumarme Sojasauce", "低钠生抽", 1.5, "EL"], ["Brauner Zucker", "红糖", 1, "TL"], ["Wasser", "水", 900, "ml"]],
    de: { title: "Weich geschmorte Rippchen nach Okinawa-Art (ソーキ煮)", steps: ["Rippchen 10 Min. blanchieren und gut abspülen.", "Mit Wasser, Ingwer und Reisessig zugedeckt etwa 1 Stunde sanft köcheln.", "Rettich in dicken Stücken, Sojasauce und Zucker zugeben und weitere 40 Min. schmoren, bis das Fleisch ganz weich ist.", "In flachen Behältern rasch abkühlen, festes Fett abheben und mit Sud einfrieren."], freeze: "Mit Sud bedeckt, portionsweise.", reheat: "Im Kühlschrank auftauen oder gefroren mit einem Schuss Wasser zugedeckt erhitzen, bis alles durchgehend kochend heiß ist." },
    zh: { title: "冲绳风软炖排骨", steps: ["排骨焯水10分钟后冲洗干净。", "加水、姜和米醋，盖锅小火煮约1小时。", "放入白萝卜厚块、生抽和红糖，再炖40分钟至肉软烂。", "装浅盒快速放凉，去掉凝固的油脂，连汤冷冻。"], freeze: "用汤汁盖住，分份保存。", reheat: "冷藏解冻，或冷冻状态加少许水盖锅加热至整锅滚烫。" },
  },
  {
    id: "japan-rippen-miso-ofen", cuts: ["schwein-rippen"], origin: "japan", art: "marinade", months: 2,
    ingredients: [["Miso (laut Etikett nur Soja, Getreide, Salz)", "味噌（配料仅大豆、谷物、盐）", 2, "EL"], ["Apfel, gerieben", "苹果泥", 70, "g"], ["Ingwer, gerieben", "姜蓉", 10, "g"], ["Reisessig", "米醋", 1, "EL"], ["Sesam", "芝麻", 1, "EL"]],
    de: { title: "Miso-Sesam-Ofenrippchen (味噌スペアリブ)", steps: ["Rippchen zwischen den Knochen in Einzelstücke teilen.", "Miso, Apfel, Ingwer, Reisessig und Sesam glatt rühren.", "Rippchen rundum damit einreiben, einlagig in Beutel legen und sofort einfrieren.", "Nach dem Auftauen überschüssige Marinade abstreifen und wegwerfen, Rippchen zugedeckt bei 170 °C etwa 60 Min. garen, dann offen 15–20 Min. bräunen, bis das Fleisch durch und weich ist."], freeze: "Frisches, noch nie gefrorenes Fleisch; flach in einer Lage.", reheat: "Über Nacht im Kühlschrank auftauen und wie im letzten Schritt garen (mindestens 75 °C am Knochen)." },
    zh: { title: "味噌芝麻烤排骨", steps: ["顺着骨缝把排骨分成单根。", "味噌、苹果泥、姜蓉、米醋和芝麻搅匀。", "排骨抹匀腌料，单层装袋，立即冷冻。", "解冻后抹去多余腌料并丢弃，盖好以170°C烤约60分钟，再敞开烤15–20分钟上色，至肉熟透软嫩。"], freeze: "选用从未冷冻过的鲜肉，单层铺平。", reheat: "冷藏过夜解冻，按最后一步烤熟（贴骨处至少75°C）。" },
  },
  {
    id: "japan-rind-gyudon", cuts: ["rind-kurz"], origin: "japan", art: "gegart", months: 2,
    ingredients: [["Zwiebel", "洋葱", 250, "g"], ["Ingwer", "姜", 10, "g"], ["Natriumarme Sojasauce", "低钠生抽", 2, "EL"], ["Apfel, gerieben", "苹果泥", 60, "g"], ["Wasser", "水", 250, "ml"]],
    de: { title: "Gyudon-Topping (牛丼の具)", steps: ["Rindfleisch quer zur Faser dünn schneiden, Zwiebel in Spalten schneiden.", "Zwiebel mit Wasser, Sojasauce, Apfel und fein geschnittenem Ingwer 8 Min. köcheln.", "Fleisch portionsweise in den Sud geben und 5–8 Min. garen, bis nichts mehr rosa ist; abschäumen.", "In flachen Behältern rasch abkühlen und mit Sud einfrieren."], freeze: "Flach, mit Sud, ohne Reis.", reheat: "Im Kühlschrank auftauen oder gefroren zugedeckt erhitzen, bis alles kochend heiß ist; über frisch gekochten Reis geben." },
    zh: { title: "日式牛丼浇头", steps: ["牛肉逆纹切薄片，洋葱切成瓣。", "洋葱加水、生抽、苹果泥和姜丝煮8分钟。", "牛肉分批下锅煮5–8分钟至完全没有粉红色，撇去浮沫。", "装浅盒快速放凉，连汤汁冷冻。"], freeze: "连汤铺平冷冻，不连米饭。", reheat: "冷藏解冻或冷冻状态盖锅加热至滚烫，浇在现煮米饭上。" },
  },
  {
    id: "japan-rind-saikoro", cuts: ["rind-kurz"], origin: "japan", art: "marinade", months: 2,
    ingredients: [["Zwiebel, gerieben", "洋葱泥", 100, "g"], ["Natriumarme Sojasauce", "低钠生抽", 1, "EL"], ["Reisessig", "米醋", 1, "EL"], ["Rapsöl", "菜籽油", 1, "EL"], ["Schwarzer Pfeffer", "黑胡椒", 0.25, "TL"]],
    de: { title: "Würfelsteak in Zwiebelmarinade (サイコロステーキ)", steps: ["Rindfleisch in etwa 2 cm große Würfel schneiden.", "Zwiebel mit Sojasauce, Reisessig, Öl und Pfeffer verrühren.", "Fleischwürfel darin wenden.", "Einlagig in Beutel füllen und sofort einfrieren."], freeze: "Frisches, noch nie gefrorenes Fleisch; Würfel flach nebeneinander.", reheat: "Im Kühlschrank auftauen, Marinade abstreifen und wegwerfen, Würfel in heißer Pfanne rundum anbraten und zugedeckt fertig garen, bis sie in der Mitte ganz durch sind (mindestens 75 °C)." },
    zh: { title: "洋葱腌骰子牛排", steps: ["牛肉切成约2厘米见方的块。", "洋葱泥加生抽、米醋、油和黑胡椒拌匀。", "放入牛肉块裹匀。", "单层装袋，立即冷冻。"], freeze: "选用从未冷冻过的鲜肉，肉块单层铺平。", reheat: "冷藏解冻，抹去腌料并丢弃，热锅把每面煎上色，再盖锅焖至中心完全熟透（至少75°C）。" },
  },
  {
    id: "japan-knochen-ramenbruehe", cuts: ["rind-knochen"], origin: "japan", art: "basis", months: 2,
    ingredients: [["Lauch", "大葱", 100, "g"], ["Ingwer", "姜", 20, "g"], ["Knoblauch", "大蒜", 2, "Zehe"], ["Getrocknete Shiitake", "干香菇", 3, "Stk"], ["Wasser", "水", 1800, "ml"]],
    de: { title: "Rinderknochen-Brühe für Ramen (牛骨ラーメンスープ)", steps: ["Knochen mit kaltem Wasser aufsetzen, 10 Min. blanchieren und gründlich abspülen.", "Mit frischem Wasser aufkochen, abschäumen und 4 Stunden köcheln, bei Bedarf heißes Wasser nachgießen.", "Lauch, Ingwer, Knoblauch und Shiitake zugeben und 1 Stunde mitziehen lassen.", "Abseihen, im Eisbad rasch abkühlen, Fett abheben und ungesalzen einfrieren."], freeze: "Portionsweise in Behältern mit Rand; Nudeln erst frisch kochen.", reheat: "Gefroren in den Topf geben, sprudelnd aufkochen und erst dann sparsam mit natriumarmer Sojasauce oder Miso würzen." },
    zh: { title: "日式牛骨拉面汤底", steps: ["牛骨冷水下锅焯10分钟，彻底冲洗干净。", "换清水煮开撇沫，小火熬4小时，水少时添热水。", "加大葱、姜、蒜和香菇再熬1小时。", "过滤后冰浴快速降温，撇去油脂，不加盐冷冻。"], freeze: "分份装盒并留空间；面条食用时现煮。", reheat: "冷冻状态下锅煮至滚沸，再用少量低钠生抽或味噌调味。" },
  },
  {
    id: "japan-knochen-suppencurry", cuts: ["rind-knochen"], origin: "japan", art: "gegart", months: 2,
    ingredients: [["Zwiebel", "洋葱", 200, "g"], ["Karotten", "胡萝卜", 200, "g"], ["Kichererbsen, gekocht", "熟鹰嘴豆", 200, "g"], ["Passierte Tomaten", "番茄泥", 200, "g"], ["Currypulver, mild", "温和咖喱粉", 1.5, "EL"], ["Ingwer", "姜", 15, "g"], ["Natriumarme Sojasauce", "低钠生抽", 1, "EL"], ["Rapsöl", "菜籽油", 1, "EL"], ["Wasser", "水", 1600, "ml"]],
    de: { title: "Suppencurry auf Knochenbrühe (スープカレー)", steps: ["Knochen blanchieren, abspülen und in frischem Wasser 2,5 Stunden köcheln; reine Knochen genügen, bei Beinscheiben ist zusätzlich Fleisch dabei.", "Knochen herausnehmen, eventuell vorhandenes Fleisch ablösen, Brühe abseihen und entfetten.", "Zwiebel und geriebenen Ingwer im Öl anbraten, Currypulver kurz mitrösten.", "Karotten, Kichererbsen, Tomaten, Brühe und Sojasauce zugeben, 25 Min. köcheln und das Fleisch, falls vorhanden, zurückgeben.", "In flachen Behältern rasch abkühlen und ohne Knochen einfrieren."], freeze: "Portionsweise mit etwas Rand.", reheat: "Im Kühlschrank auftauen oder gefroren zugedeckt erhitzen, öfter rühren und einmal sprudelnd aufkochen." },
    zh: { title: "牛骨汤咖喱", steps: ["牛骨焯水冲净，换清水熬2.5小时；只用光骨即可，带骨牛腱则还会有肉。", "捞出骨头，如有肉则拆下，汤过滤并撇油。", "用油把洋葱和姜蓉炒香，加咖喱粉略炒。", "加胡萝卜、鹰嘴豆、番茄泥、骨汤和生抽煮25分钟，如有拆下的肉则放回锅中。", "装浅盒快速放凉，去骨冷冻。"], freeze: "分份装盒，留少许空间。", reheat: "冷藏解冻或冷冻状态盖锅加热，常搅拌并彻底煮开一次。" },
  },
  {
    id: "japan-garnelen-ebifry", cuts: ["garnelen"], origin: "japan", art: "basis", months: 2,
    ingredients: [["Mehl", "面粉", 40, "g"], ["Ei", "鸡蛋", 1, "Stk"], ["Panko", "日式面包糠", 80, "g"], ["Schwarzer Pfeffer", "黑胡椒", 0.25, "TL"], ["Rapsöl zum Ausbacken", "煎炸用菜籽油", 150, "ml"]],
    de: { title: "Panierte Garnelen auf Vorrat (エビフライ)", steps: ["Nur nie aufgetaute, frische Garnelen roh einfrieren: schälen, entdarmen, trocken tupfen und an der Bauchseite leicht einschneiden. Aufgetaute Ware stattdessen sofort panieren, vollständig ausbacken, rasch abkühlen und erst dann einfrieren.", "Garnelen pfeffern und nacheinander in Mehl, verschlagenem Ei und Panko wenden.", "Einzeln auf einem Blech vorfrieren, dann in Beutel umfüllen.", "Gefroren in heißem Öl bei etwa 170 °C portionsweise 4–5 Min. ausbacken, bis die Garnelen in der Mitte vollständig undurchsichtig sind (mindestens 75 °C)."], freeze: "Zügig arbeiten und kalt halten; einlagig vorfrieren.", reheat: "Roh panierte Garnelen nicht auftauen, sondern direkt gefroren ausbacken; vorab gegarte bei 200 °C im Ofen etwa 12 Min. durchgehend erhitzen." },
    zh: { title: "冷冻备用日式炸虾", steps: ["只有从未解冻过的鲜虾才能生冻：去壳去虾线，擦干，在腹部浅划几刀。解冻过的虾应立即裹粉、彻底炸熟、快速放凉后再冷冻。", "虾撒胡椒，依次裹面粉、蛋液和面包糠。", "单只摆在盘上预冻，再装袋。", "冷冻状态下用约170°C热油分批炸4–5分钟，至虾中心完全不透明（至少75°C）。"], freeze: "操作要快并保持低温，单层预冻。", reheat: "生裹粉虾不要解冻，直接冷冻下锅炸；预先炸熟的用200°C烤箱约12分钟热透。" },
  },
  {
    id: "japan-garnelen-ebichiri", cuts: ["garnelen"], origin: "japan", art: "gegart", months: 2,
    ingredients: [["Passierte Tomaten", "番茄泥", 200, "g"], ["Lauch", "大葱", 80, "g"], ["Ingwer", "姜", 10, "g"], ["Knoblauch", "大蒜", 1, "Zehe"], ["Natriumarme Sojasauce", "低钠生抽", 1, "EL"], ["Reisessig", "米醋", 1, "TL"], ["Speisestärke", "淀粉", 1, "EL"], ["Wasser", "水", 120, "ml"], ["Rapsöl", "菜籽油", 1, "EL"]],
    de: { title: "Milde Ebi-Chiri ohne Schärfe (エビチリ)", steps: ["Garnelen schälen, entdarmen und trocken tupfen; tiefgekühlte vorher im Kühlschrank auftauen und noch am selben Tag garen.", "Lauch, Ingwer und Knoblauch fein hacken, im Öl anschwitzen, Tomaten, Sojasauce, Reisessig und Wasser 5 Min. köcheln.", "Garnelen zugeben und 4–5 Min. garen, bis sie in der Mitte vollständig undurchsichtig sind.", "Mit angerührter Stärke binden, in flachen Behältern rasch abkühlen und einfrieren."], freeze: "Flach, mit Sauce bedeckt.", reheat: "Im Kühlschrank auftauen oder gefroren mit etwas Wasser zugedeckt sanft erhitzen, bis alles durchgehend kochend heiß ist." },
    zh: { title: "不辣版日式干烧虾仁", steps: ["虾去壳去虾线并擦干；冷冻虾先冷藏解冻，当天烹熟。", "大葱、姜、蒜切碎用油炒香，加番茄泥、生抽、米醋和水煮5分钟。", "放虾仁煮4–5分钟至中心完全不透明。", "用水淀粉勾芡，装浅盒快速放凉后冷冻。"], freeze: "铺平并用酱汁盖住。", reheat: "冷藏解冻，或冷冻状态加少许水盖锅慢慢加热至整锅滚烫。" },
  },
  {
    id: "japan-tofu-ganmodoki", cuts: ["tofu"], origin: "japan", art: "gegart", months: 3,
    ingredients: [["Karotten", "胡萝卜", 60, "g"], ["Edamame, geschält", "毛豆仁", 60, "g"], ["Getrocknete Shiitake", "干香菇", 3, "Stk"], ["Ei", "鸡蛋", 1, "Stk"], ["Speisestärke", "淀粉", 2, "EL"], ["Natriumarme Sojasauce", "低钠生抽", 2, "TL"], ["Rapsöl", "菜籽油", 4, "EL"]],
    de: { title: "Gemüse-Tofu-Laibchen (がんもどき)", steps: ["Tofu gut auspressen; Shiitake einweichen und mit den Karotten fein schneiden, Edamame 5 Min. kochen.", "Tofu zerdrücken und mit Gemüse, Ei, Stärke und Sojasauce verkneten.", "Flache Laibchen formen und im Öl bei mittlerer Hitze je Seite 5–6 Min. goldbraun und durchbraten.", "Auf einem Gitter rasch abkühlen und einzeln einfrieren."], freeze: "Einzeln vorfrieren, dann in Beutel.", reheat: "Direkt gefroren bei 190 °C etwa 18 Min. im Ofen erhitzen, bis die Mitte dampfend heiß ist." },
    zh: { title: "日式蔬菜豆腐饼", steps: ["豆腐充分压干；香菇泡发后与胡萝卜切细，毛豆煮5分钟。", "豆腐捏碎，加蔬菜、鸡蛋、淀粉和生抽揉匀。", "做成扁圆饼，用油中火每面煎5–6分钟至金黄熟透。", "放在网架上快速放凉，单个冷冻。"], freeze: "逐个预冻后装袋。", reheat: "冷冻状态直接用190°C烤箱加热约18分钟至中心热气腾腾。" },
  },
  {
    id: "japan-tofu-karaage", cuts: ["tofu"], origin: "japan", art: "marinade", months: 3,
    ingredients: [["Natriumarme Sojasauce", "低钠生抽", 1.5, "EL"], ["Ingwer, gerieben", "姜蓉", 10, "g"], ["Knoblauch", "大蒜", 1, "Zehe"], ["Wasser", "水", 3, "EL"], ["Speisestärke", "淀粉", 40, "g"], ["Rapsöl", "菜籽油", 4, "EL"]],
    de: { title: "Tofu-Karaage (豆腐の唐揚げ)", steps: ["Tofu auspressen und in mundgerechte Stücke reißen.", "Sojasauce, Ingwer, gepressten Knoblauch und Wasser verrühren und den Tofu darin wenden.", "Einlagig verpacken und sofort einfrieren.", "Nach dem Auftauen sanft ausdrücken, in Stärke wenden und im heißen Öl rundum knusprig und durchgehend heiß braten."], freeze: "Flach in einer Lage; durch das Frieren wird der Tofu bissfester.", reheat: "Im Kühlschrank auftauen und wie im letzten Schritt braten." },
    zh: { title: "日式炸豆腐块", steps: ["豆腐压干，掰成一口大小的块。", "生抽、姜蓉、蒜泥和水调匀，放入豆腐裹匀。", "单层包装，立即冷冻。", "解冻后轻轻挤干，裹上淀粉，用热油煎至四面酥脆、内外热透。"], freeze: "单层铺平；冷冻后豆腐口感更有嚼劲。", reheat: "冷藏解冻，按最后一步煎熟。" },
  },
];

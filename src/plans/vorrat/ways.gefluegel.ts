// Gefrierwege für Huhn und Ente. Mengen je 500 g Rohware; Geflügel immer auf 74 °C Kerntemperatur.
import type { Way } from "./types";

export const WAYS: Way[] = [
  // ───── Brust / Schenkel / Flügel: roh mariniert ─────
  {
    id: "huhn-wok-samtig", cuts: ["huhn-brust"], origin: "china", art: "marinade", months: 2,
    ingredients: [["Sojasauce natriumarm", "低钠生抽", 1.5, "EL"], ["Speisestärke", "淀粉", 2, "TL"], ["Ingwer", "姜", 10, "g"], ["Sesamöl", "香油", 2, "TL"], ["Wasser", "清水", 2, "EL"]],
    de: { title: "Samtiges Wok-Huhn mit Ingwer", steps: ["Brust quer zur Faser in 5 mm dünne Streifen schneiden.", "Wasser, Sojasauce und geriebenen Ingwer ins Fleisch einkneten, bis die Flüssigkeit aufgesogen ist.", "Stärke und dann Sesamöl untermischen.", "In flache Portionsbeutel füllen und sofort einfrieren."], freeze: "Frisches, noch nie gefrorenes Fleisch; flach im Beutel, Luft ausstreichen.", reheat: "Über Nacht im Kühlschrank auftauen, im heißen Wok in Öl 5–6 Min. braten, bis alle Streifen durch sind (74 °C); Gemüse nach Wahl dazu." },
    zh: { title: "姜香滑炒鸡片", steps: ["鸡胸逆纹切成5毫米薄条。", "加清水、生抽和姜蓉抓匀，直到水分被肉吸收。", "先拌入淀粉，再拌香油。", "分装进扁平保鲜袋，立即冷冻。"], freeze: "选用从未冷冻过的鲜肉，装袋压平并排出空气。", reheat: "冷藏过夜解冻，热锅下油炒5–6分钟至鸡肉全熟（中心74°C），可加喜欢的蔬菜。" },
  },
  {
    id: "huhn-miso-joghurt", cuts: ["huhn-brust"], origin: "japan", art: "marinade", months: 2,
    ingredients: [["helles Miso", "白味噌", 1.5, "EL"], ["Naturjoghurt pasteurisiert", "巴氏杀菌原味酸奶", 80, "g"], ["Ingwer", "姜", 8, "g"], ["Sesam", "芝麻", 2, "TL"]],
    de: { title: "Miso-Joghurt-Hühnerbrust", steps: ["Brust waagrecht halbieren, sodass etwa 1,5 cm dicke Stücke entstehen.", "Miso mit Joghurt, geriebenem Ingwer und Sesam glatt rühren.", "Fleisch rundum damit bedecken, in Beutel legen und sofort einfrieren."], freeze: "Frisches, noch nie gefrorenes Fleisch; Stücke nebeneinander flach im Beutel.", reheat: "Im Kühlschrank auftauen, Marinade abstreifen und im Ofen bei 200 °C 20–25 Min. garen, bis 74 °C im Kern erreicht sind." },
    zh: { title: "味噌酸奶鸡胸", steps: ["鸡胸横向片开，成约1.5厘米厚的肉片。", "白味噌、酸奶、姜蓉和芝麻搅拌均匀。", "让鸡肉裹满腌料，装袋后立即冷冻。"], freeze: "选用从未冷冻过的鲜肉，肉片不重叠、平铺装袋。", reheat: "冷藏解冻，抹去多余腌料，烤箱200°C烤20–25分钟，至中心达74°C。" },
  },
  {
    id: "huhn-tikka", cuts: ["huhn-brust", "huhn-schenkel"], origin: "indien", art: "marinade", months: 2,
    ingredients: [["Naturjoghurt pasteurisiert", "巴氏杀菌原味酸奶", 120, "g"], ["Garam Masala", "印度综合香料", 2, "TL"], ["Kurkuma", "姜黄粉", 0.5, "TL"], ["Knoblauch", "大蒜", 2, "Zehe"], ["Ingwer", "姜", 10, "g"], ["Zitronensaft", "柠檬汁", 1, "EL"], ["Salz", "盐", 0.5, "TL"]],
    de: { title: "Mildes Tikka-Huhn", steps: ["Brust in große Würfel schneiden; Schenkel bis zum Knochen einschneiden.", "Joghurt mit Gewürzen, geriebenem Knoblauch und Ingwer, Zitronensaft und Salz verrühren.", "Fleisch gründlich darin wenden.", "Flach in Beutel füllen und sofort einfrieren."], freeze: "Frisches, noch nie gefrorenes Fleisch; flach im Beutel.", reheat: "Im Kühlschrank auftauen, bei 210 °C backen: Würfel etwa 20 Min., Schenkel 40–45 Min., immer bis 74 °C im Kern." },
    zh: { title: "温和提卡鸡", steps: ["鸡胸切大块；鸡腿划几刀至见骨。", "酸奶中加入香料、蒜蓉、姜蓉、柠檬汁和盐拌匀。", "放入鸡肉充分裹匀。", "平铺装袋，立即冷冻。"], freeze: "选用从未冷冻过的鲜肉，装袋压平。", reheat: "冷藏解冻，烤箱210°C烤制：鸡胸块约20分钟，鸡腿40–45分钟，中心须达74°C。" },
  },
  {
    id: "huhn-zitrone-oregano", cuts: ["huhn-brust", "huhn-schenkel"], origin: "mittelmeer", art: "marinade", months: 2,
    ingredients: [["Olivenöl", "橄榄油", 2, "EL"], ["Zitronensaft", "柠檬汁", 2, "EL"], ["Oregano getrocknet", "干牛至", 2, "TL"], ["Knoblauch", "大蒜", 2, "Zehe"], ["Salz", "盐", 0.5, "TL"]],
    de: { title: "Zitronen-Oregano-Huhn", steps: ["Knoblauch fein hacken und mit Öl, Zitronensaft, Oregano und Salz verrühren.", "Dicke Bruststücke flacher schneiden; Schenkel ein- bis zweimal einschneiden.", "Fleisch mit der Marinade in Beutel füllen und sofort einfrieren."], freeze: "Frisches, noch nie gefrorenes Fleisch; einlagig und flach im Beutel.", reheat: "Im Kühlschrank auftauen und bei 200 °C braten: Brust 20–25 Min., Schenkel 40–45 Min., bis 74 °C im Kern." },
    zh: { title: "柠檬牛至鸡", steps: ["大蒜切末，与橄榄油、柠檬汁、牛至和盐调匀。", "厚鸡胸片薄一些；鸡腿划一两刀。", "鸡肉和腌料一起装袋，立即冷冻。"], freeze: "选用从未冷冻过的鲜肉，单层平铺装袋。", reheat: "冷藏解冻，烤箱200°C烤制：鸡胸20–25分钟，鸡腿40–45分钟，至中心74°C。" },
  },
  {
    id: "huhn-shawarma", cuts: ["huhn-brust", "huhn-schenkel"], origin: "orient", art: "marinade", months: 2,
    ingredients: [["Olivenöl", "橄榄油", 2, "EL"], ["Kreuzkümmel", "孜然粉", 2, "TL"], ["Koriander gemahlen", "香菜籽粉", 1, "TL"], ["Paprikapulver edelsüß", "甜椒粉", 2, "TL"], ["Zimt", "肉桂粉", 0.25, "TL"], ["Zwiebel", "洋葱", 100, "g"], ["Zitronensaft", "柠檬汁", 1, "EL"], ["Salz", "盐", 0.5, "TL"]],
    de: { title: "Shawarma-Huhn vom Blech", steps: ["Fleisch (Schenkel wenn möglich ausgelöst) in fingerdicke Streifen schneiden.", "Zwiebel in Spalten schneiden.", "Öl, Gewürze, Zitronensaft und Salz mit Fleisch und Zwiebel mischen.", "Flach in Beutel füllen und sofort einfrieren."], freeze: "Frisches, noch nie gefrorenes Fleisch; dünn und flach im Beutel.", reheat: "Im Kühlschrank auftauen, auf dem Blech verteilen und bei 220 °C 25 Min. rösten, bis alles durch ist (74 °C)." },
    zh: { title: "中东沙威玛烤鸡", steps: ["鸡肉（鸡腿尽量去骨）切成手指粗的条。", "洋葱切瓣。", "橄榄油、香料、柠檬汁和盐与鸡肉、洋葱拌匀。", "平铺装袋，立即冷冻。"], freeze: "选用从未冷冻过的鲜肉，装薄装平。", reheat: "冷藏解冻，铺在烤盘上，220°C烤25分钟至全熟（中心74°C）。" },
  },
  {
    id: "huhn-zitronengras", cuts: ["huhn-brust", "huhn-schenkel", "huhn-fluegel"], origin: "suedostasien", art: "marinade", months: 2,
    ingredients: [["Zitronengras", "香茅", 2, "Stk"], ["Knoblauch", "大蒜", 2, "Zehe"], ["Fischsauce", "鱼露", 1, "EL"], ["Limettensaft", "青柠汁", 1, "EL"], ["Öl", "食用油", 1, "EL"], ["brauner Zucker", "红糖", 1, "TL"]],
    de: { title: "Zitronengras-Huhn", steps: ["Vom Zitronengras nur das weiche untere Stück sehr fein hacken.", "Mit gehacktem Knoblauch, Fischsauce, Limettensaft, Öl und Zucker verrühren.", "Fleisch bei Bedarf einschneiden und gut mit der Marinade mischen.", "Flach in Beutel füllen und sofort einfrieren."], freeze: "Frisches, noch nie gefrorenes Fleisch; einlagig im Beutel.", reheat: "Im Kühlschrank auftauen, bei 200 °C garen: Brust 20–25 Min., Flügel etwa 35 Min., Schenkel 40–45 Min., bis 74 °C im Kern." },
    zh: { title: "香茅鸡", steps: ["香茅只取下段嫩的部分，切得很细。", "与蒜末、鱼露、青柠汁、油和红糖调匀。", "鸡肉视需要划刀，与腌料充分拌匀。", "平铺装袋，立即冷冻。"], freeze: "选用从未冷冻过的鲜肉，单层装袋。", reheat: "冷藏解冻，烤箱200°C：鸡胸20–25分钟，鸡翅约35分钟，鸡腿40–45分钟，至中心74°C。" },
  },

  // ───── Brust: gegart ─────
  {
    id: "huhn-zupf-basis", cuts: ["huhn-brust"], origin: "china", art: "basis", months: 2,
    ingredients: [["Ingwer", "姜", 15, "g"], ["Frühlingszwiebel", "葱", 2, "Stk"], ["Wasser", "清水", 800, "ml"], ["Salz", "盐", 0.5, "TL"]],
    de: { title: "Saftiges Zupfhuhn für Salat und Nudeln", steps: ["Wasser mit Ingwer, Frühlingszwiebel und Salz aufkochen.", "Brust einlegen und zugedeckt bei kleinster Hitze 20–25 Min. ziehen lassen, bis 74 °C im Kern erreicht sind.", "Fleisch zerzupfen und mit etwas Kochsud befeuchten.", "Im flachen Behälter rasch abkühlen und innerhalb von 1–2 Stunden einfrieren."], freeze: "Portionsweise mit etwas Sud; restlichen Sud getrennt einfrieren.", reheat: "Im Kühlschrank auftauen und mit dem Sud zugedeckt 5 Min. durchgehend dampfend heiß erhitzen; für Salat danach rasch abkühlen und gleich essen." },
    zh: { title: "嫩手撕鸡（拌菜拌面用）", steps: ["清水加姜、葱和盐煮开。", "放入鸡胸，盖盖用最小火焖20–25分钟，至中心达74°C。", "将鸡肉撕成丝，淋少许原汤保湿。", "放入浅容器快速放凉，1–2小时内冷冻。"], freeze: "分份并带少许汤汁；剩余原汤另装冷冻。", reheat: "冷藏解冻，加原汤盖盖加热约5分钟至热透冒气；做凉拌的话加热后快速放凉并马上食用。" },
  },
  {
    id: "huhn-rahm-geschnetzeltes", cuts: ["huhn-brust"], origin: "heimisch", art: "gegart", months: 2,
    ingredients: [["Champignons", "口蘑", 250, "g"], ["Zwiebel", "洋葱", 100, "g"], ["Öl", "食用油", 1, "EL"], ["Hühnerbrühe natriumarm", "低钠鸡汤", 250, "ml"], ["Schlagobers", "淡奶油", 80, "ml"], ["Speisestärke", "淀粉", 2, "TL"], ["Petersilie", "欧芹", 10, "g"]],
    de: { title: "Hühnergeschnetzeltes mit Champignons", steps: ["Brust in Streifen schneiden, in Öl anbraten und herausnehmen.", "Zwiebel und Champignons kräftig anrösten, mit Brühe aufgießen.", "Fleisch zugeben und 10 Min. köcheln, bis es vollständig durch ist (74 °C).", "Obers und angerührte Stärke einrühren, kurz aufkochen, Petersilie dazugeben.", "Im flachen Behälter im kalten Wasserbad rasch abkühlen und einfrieren."], freeze: "In flachen Portionsbehältern mit etwas Rand.", reheat: "Gefroren mit 3 EL Wasser zugedeckt bei kleiner Hitze 20 Min. erwärmen, öfter rühren, dann einmal gut aufkochen." },
    zh: { title: "奶油蘑菇鸡柳", steps: ["鸡胸切条，用油煎至上色后盛出。", "洋葱和蘑菇大火炒香，倒入鸡汤。", "放回鸡肉煮10分钟至全熟（中心74°C）。", "加淡奶油和水淀粉煮开，撒欧芹。", "装浅盒隔冷水快速降温后冷冻。"], freeze: "分装于浅盒，顶部留空。", reheat: "无需解冻，加3汤匙水盖盖小火热20分钟，不时搅拌，最后煮开一次。" },
  },

  // ───── Schenkel: gegart ─────
  {
    id: "huhn-schenkel-hongshao", cuts: ["huhn-schenkel"], origin: "china", art: "gegart", months: 2,
    ingredients: [["getrocknete Shiitake", "干香菇", 15, "g"], ["Sojasauce natriumarm", "低钠生抽", 2, "EL"], ["Ingwer", "姜", 15, "g"], ["Sternanis", "八角", 1, "Stk"], ["Kandiszucker", "冰糖", 8, "g"], ["Wasser", "清水", 300, "ml"], ["Öl", "食用油", 1, "EL"]],
    de: { title: "Rot geschmorte Hühnerschenkel mit Shiitake", steps: ["Shiitake einweichen und halbieren.", "Schenkel in Öl rundum anbraten, Ingwer und Sternanis kurz mitrösten.", "Sojasauce, Zucker, Pilze und Wasser zugeben.", "Zugedeckt 35–40 Min. schmoren, bis 74 °C am Knochen erreicht sind, Sauce etwas einkochen.", "Rasch abkühlen und mit Sauce portionieren."], freeze: "Mit Sauce in flachen Behältern.", reheat: "Im Kühlschrank auftauen, mit etwas Wasser zugedeckt 15 Min. köcheln, bis alles durch und durch heiß ist." },
    zh: { title: "香菇红烧鸡腿", steps: ["干香菇泡发后对半切。", "鸡腿用油煎至四面上色，加姜和八角炒香。", "加生抽、冰糖、香菇和清水。", "盖盖焖35–40分钟，至骨边达74°C，略收汁。", "快速放凉，带汁分装。"], freeze: "连汤汁装浅盒冷冻。", reheat: "冷藏解冻，加少许水盖盖煮15分钟至彻底热透。" },
  },
  {
    id: "huhn-schenkel-dakbokkeum", cuts: ["huhn-schenkel"], origin: "korea", art: "gegart", months: 2,
    ingredients: [["Erdäpfel", "土豆", 200, "g"], ["Karotte", "胡萝卜", 120, "g"], ["Zwiebel", "洋葱", 100, "g"], ["Sojasauce natriumarm", "低钠生抽", 2, "EL"], ["Birne", "梨", 80, "g"], ["Knoblauch", "大蒜", 3, "Zehe"], ["Wasser", "清水", 400, "ml"]],
    de: { title: "Milder koreanischer Hühnereintopf (Dakjjim)", steps: ["Gemüse in große Stücke schneiden; Birne und Knoblauch reiben.", "Schenkel mit Sojasauce, Birne, Knoblauch und Wasser aufkochen und abschäumen.", "20 Min. zugedeckt köcheln, Karotte und Zwiebel samt Erdäpfeln zugeben.", "Weitere 20 Min. garen, bis das Fleisch 74 °C erreicht hat.", "Erdäpfel getrennt gleich essen oder grob zerdrücken, dann alles rasch abkühlen und einfrieren."], freeze: "Mit Sauce in Behältern; Erdäpfel zerdrückt, weil ganze Stücke nach dem Frieren mehlig werden.", reheat: "Im Kühlschrank auftauen und 15 Min. zugedeckt durchköcheln." },
    zh: { title: "韩式不辣炖鸡", steps: ["蔬菜切大块；梨和大蒜擦成泥。", "鸡腿加生抽、梨泥、蒜泥和清水煮开，撇去浮沫。", "盖盖炖20分钟，加入胡萝卜、洋葱和土豆。", "再炖20分钟，至鸡肉中心达74°C。", "土豆可单独先吃或压碎，然后整锅快速放凉冷冻。"], freeze: "带汁装盒；整块土豆冻后口感变差，建议压碎。", reheat: "冷藏解冻，盖盖煮15分钟至热透。" },
  },
  {
    id: "huhn-schenkel-chikuzenni", cuts: ["huhn-schenkel"], origin: "japan", art: "gegart", months: 2,
    ingredients: [["Karotte", "胡萝卜", 150, "g"], ["Lotoswurzel", "莲藕", 150, "g"], ["Shiitake", "鲜香菇", 100, "g"], ["Dashi", "日式高汤", 350, "ml"], ["Sojasauce natriumarm", "低钠生抽", 2, "EL"], ["Zucker", "糖", 1, "TL"], ["Sesamöl", "香油", 1, "EL"]],
    de: { title: "Chikuzenni mit Wurzelgemüse", steps: ["Fleisch von den Knochen lösen, in Stücke schneiden; Gemüse mundgerecht schneiden.", "Fleisch in Sesamöl anbraten, Gemüse kurz mitrösten.", "Dashi, Sojasauce und Zucker zugeben.", "25 Min. mit Deckel köcheln, bis das Huhn durch ist (74 °C), dann offen etwas einkochen.", "Flach ausbreiten, rasch abkühlen und portionieren."], freeze: "In flachen Behältern mit dem restlichen Sud.", reheat: "Gefroren mit 4 EL Wasser zugedeckt 15–20 Min. erhitzen, bis alles dampfend heiß ist." },
    zh: { title: "筑前煮（根菜炖鸡）", steps: ["鸡腿去骨切块；蔬菜切成一口大小。", "用香油煎鸡肉，再加蔬菜略炒。", "加入高汤、生抽和糖。", "盖盖煮25分钟至鸡肉全熟（74°C），开盖稍收汁。", "摊开快速放凉后分装。"], freeze: "连剩余汤汁装浅盒。", reheat: "无需解冻，加4汤匙水盖盖加热15–20分钟至热气腾腾。" },
  },
  {
    id: "huhn-schenkel-paprikahendl", cuts: ["huhn-schenkel"], origin: "heimisch", art: "gegart", months: 2,
    ingredients: [["Zwiebel", "洋葱", 200, "g"], ["Paprikapulver edelsüß", "甜椒粉", 1.5, "EL"], ["Paprika rot", "红甜椒", 150, "g"], ["Paradeismark", "番茄膏", 1, "EL"], ["Hühnerbrühe natriumarm", "低钠鸡汤", 350, "ml"], ["Sauerrahm", "酸奶油", 80, "g"], ["Öl", "食用油", 1, "EL"]],
    de: { title: "Paprikahendl", steps: ["Zwiebel fein schneiden und in Öl goldgelb rösten.", "Vom Herd Paprikapulver und Paradeismark einrühren, sofort mit Brühe aufgießen.", "Schenkel und Paprikastreifen einlegen, 40 Min. zugedeckt schmoren, bis 74 °C am Knochen erreicht sind.", "Sauce rasch abkühlen und ohne Sauerrahm mit dem Fleisch einfrieren."], freeze: "Mit Saft in Behältern; Sauerrahm erst beim Aufwärmen zugeben.", reheat: "Im Kühlschrank auftauen, 15 Min. zugedeckt köcheln, Sauerrahm einrühren; dazu Nockerl oder Vollkornnudeln." },
    zh: { title: "奥地利红椒鸡", steps: ["洋葱切碎，用油炒至金黄。", "离火拌入甜椒粉和番茄膏，马上倒入鸡汤。", "放入鸡腿和甜椒条，盖盖焖40分钟，至骨边达74°C。", "快速放凉，暂不加酸奶油，连肉带汁冷冻。"], freeze: "带汁装盒；酸奶油留到加热时再加。", reheat: "冷藏解冻，盖盖煮15分钟，拌入酸奶油；可配面疙瘩或全麦面。" },
  },

  // ───── Flügel ─────
  {
    id: "huhn-fluegel-knoblauch-ingwer", cuts: ["huhn-fluegel"], origin: "china", art: "marinade", months: 2,
    ingredients: [["Sojasauce natriumarm", "低钠生抽", 1.5, "EL"], ["Austernsauce", "蚝油", 1, "EL"], ["Knoblauch", "大蒜", 4, "Zehe"], ["Ingwer", "姜", 10, "g"], ["Frühlingszwiebel", "葱", 2, "Stk"], ["Sesamöl", "香油", 1, "TL"]],
    de: { title: "Knoblauch-Ingwer-Flügel", steps: ["Flügel mit Küchenpapier trocken tupfen und je zweimal einschneiden.", "Knoblauch und Ingwer reiben, Frühlingszwiebel schneiden, mit den Saucen und Sesamöl verrühren.", "Flügel darin wenden, flach in Beutel legen und sofort einfrieren."], freeze: "Frisches, noch nie gefrorenes Fleisch; einlagig im Beutel.", reheat: "Im Kühlschrank auftauen und bei 200 °C 35–40 Min. backen, einmal wenden, bis 74 °C am Knochen erreicht sind." },
    zh: { title: "蒜香姜味鸡翅", steps: ["鸡翅用厨房纸吸干，每个划两刀。", "蒜和姜擦泥，葱切碎，与生抽、蚝油、香油调匀。", "鸡翅裹匀腌料，平铺装袋后立即冷冻。"], freeze: "选用从未冷冻过的鲜肉，单层装袋。", reheat: "冷藏解冻，烤箱200°C烤35–40分钟，中途翻面，至骨边达74°C。" },
  },
  {
    id: "huhn-fluegel-tebasaki", cuts: ["huhn-fluegel"], origin: "japan", art: "marinade", months: 2,
    ingredients: [["Sojasauce natriumarm", "低钠生抽", 1.5, "EL"], ["Reisessig", "米醋", 1, "EL"], ["Honig", "蜂蜜", 2, "TL"], ["Sesam", "芝麻", 1, "EL"], ["schwarzer Pfeffer", "黑胡椒", 0.5, "TL"]],
    de: { title: "Sesam-Pfeffer-Flügel nach Tebasaki-Art", steps: ["Flügel trocken tupfen und entlang des Knochens einschneiden.", "Sojasauce, Essig, Honig und Pfeffer verrühren.", "Flügel untermischen, mit Sesam bestreuen.", "Flach einpacken und sofort einfrieren."], freeze: "Frisches, noch nie gefrorenes Fleisch; flach im Beutel.", reheat: "Im Kühlschrank auftauen, auf Backpapier bei 200 °C etwa 40 Min. knusprig und vollständig durchbacken (74 °C)." },
    zh: { title: "名古屋风芝麻胡椒鸡翅", steps: ["鸡翅吸干水分，沿骨头划一刀。", "生抽、米醋、蜂蜜和黑胡椒调匀。", "拌入鸡翅，撒上芝麻。", "平铺装袋，立即冷冻。"], freeze: "选用从未冷冻过的鲜肉，装袋压平。", reheat: "冷藏解冻，铺在烘焙纸上，200°C烤约40分钟至表皮酥脆、全熟（74°C）。" },
  },
  {
    id: "huhn-fluegel-ganjang", cuts: ["huhn-fluegel"], origin: "korea", art: "marinade", months: 2,
    ingredients: [["Sojasauce natriumarm", "低钠生抽", 2, "EL"], ["Apfel", "苹果", 80, "g"], ["Knoblauch", "大蒜", 3, "Zehe"], ["Sesamöl", "香油", 2, "TL"], ["Gochugaru (nach Wunsch)", "韩国辣椒粉（可选）", 0.5, "TL"]],
    de: { title: "Koreanische Apfel-Soja-Flügel", steps: ["Apfel und Knoblauch fein reiben.", "Mit Sojasauce, Sesamöl und nach Wunsch Gochugaru verrühren.", "Trocken getupfte Flügel damit mischen, in Beutel füllen und sofort einfrieren."], freeze: "Frisches, noch nie gefrorenes Fleisch; flach im Beutel.", reheat: "Im Kühlschrank auftauen, übrige rohe Marinade wegwerfen und bei 190 °C 40–45 Min. backen, einmal wenden, bis 74 °C am Knochen erreicht sind." },
    zh: { title: "韩式苹果酱油鸡翅", steps: ["苹果和大蒜擦成细泥。", "与生抽、香油和辣椒粉（可选）调匀。", "鸡翅吸干后拌入腌料，装袋立即冷冻。"], freeze: "选用从未冷冻过的鲜肉，装袋压平。", reheat: "冷藏解冻，倒掉剩余的生腌汁，烤箱190°C烤40–45分钟，中途翻面，至骨边达74°C。" },
  },
  {
    id: "huhn-fluegel-zaatar", cuts: ["huhn-fluegel"], origin: "orient", art: "marinade", months: 2,
    ingredients: [["Olivenöl", "橄榄油", 2, "EL"], ["Za'atar", "扎塔尔香料", 1.5, "EL"], ["Sumach", "盐肤木粉", 1, "TL"], ["Zitronensaft", "柠檬汁", 1, "EL"], ["Salz", "盐", 0.5, "TL"]],
    de: { title: "Za'atar-Flügel", steps: ["Flügel mit Küchenpapier trocken tupfen.", "Öl, Za'atar, Sumach, Zitronensaft und Salz verrühren.", "Flügel gründlich einreiben, flach in Beutel legen und sofort einfrieren."], freeze: "Frisches, noch nie gefrorenes Fleisch; einlagig im Beutel.", reheat: "Im Kühlschrank auftauen und bei 200 °C 35–40 Min. backen, bis sie knusprig und durch sind (74 °C)." },
    zh: { title: "扎塔尔香料鸡翅", steps: ["鸡翅用厨房纸吸干。", "橄榄油、扎塔尔、盐肤木粉、柠檬汁和盐调匀。", "均匀抹在鸡翅上，平铺装袋后立即冷冻。"], freeze: "选用从未冷冻过的鲜肉，单层装袋。", reheat: "冷藏解冻，烤箱200°C烤35–40分钟至酥香全熟（74°C）。" },
  },
  {
    id: "huhn-fluegel-masala", cuts: ["huhn-fluegel"], origin: "indien", art: "marinade", months: 2,
    ingredients: [["Öl", "食用油", 1, "EL"], ["Kreuzkümmel", "孜然粉", 2, "TL"], ["Kurkuma", "姜黄粉", 0.5, "TL"], ["Koriander gemahlen", "香菜籽粉", 2, "TL"], ["Limettensaft", "青柠汁", 1, "EL"], ["Salz", "盐", 0.5, "TL"]],
    de: { title: "Kurkuma-Kreuzkümmel-Flügel", steps: ["Gewürze im warmen Öl 30 Sek. anrösten und vollständig abkühlen lassen.", "Limettensaft und Salz einrühren.", "Trocken getupfte Flügel damit mischen, in Beutel füllen und sofort einfrieren."], freeze: "Frisches, noch nie gefrorenes Fleisch; flach im Beutel.", reheat: "Im Kühlschrank auftauen, bei 200 °C etwa 40 Min. backen, einmal wenden, bis 74 °C am Knochen erreicht sind." },
    zh: { title: "姜黄孜然鸡翅", steps: ["香料用温油炒30秒，彻底放凉。", "拌入青柠汁和盐。", "鸡翅吸干后拌匀香料油，装袋立即冷冻。"], freeze: "选用从未冷冻过的鲜肉，装袋压平。", reheat: "冷藏解冻，烤箱200°C烤约40分钟，中途翻面，至骨边74°C。" },
  },
  {
    id: "huhn-fluegel-backofen-basis", cuts: ["huhn-fluegel"], origin: "heimisch", art: "gegart", months: 2,
    ingredients: [["Öl", "食用油", 1, "EL"], ["Paprikapulver edelsüß", "甜椒粉", 2, "TL"], ["Kümmel gemahlen", "葛缕子粉", 0.5, "TL"], ["Knoblauchpulver", "蒜粉", 1, "TL"], ["Salz", "盐", 0.5, "TL"]],
    de: { title: "Ofenflügel wie vom Brathendl, fertig gegart", steps: ["Flügel trocken tupfen, mit Öl und Gewürzen mischen.", "Auf dem Blech bei 200 °C 40 Min. braten, bis 74 °C am Knochen erreicht sind.", "Auf ein kaltes Blech legen, rasch abkühlen.", "Einzeln anfrieren, dann in Beutel umfüllen."], freeze: "Einzeln vorgefroren, so lassen sie sich stückweise entnehmen.", reheat: "Gefroren bei 200 °C 25–30 Min. backen, bis sie knusprig und innen dampfend heiß sind." },
    zh: { title: "红椒烤鸡翅（熟冻）", steps: ["鸡翅吸干，拌入油和香料。", "烤盘200°C烤40分钟，至骨边达74°C。", "移到冷烤盘上快速放凉。", "先单个摆开冻硬，再装袋。"], freeze: "单个预冻，方便按需取用。", reheat: "无需解冻，200°C烤25–30分钟至外皮酥脆、内部滚烫。" },
  },

  // ───── Faschiertes ─────
  {
    id: "huhn-hack-wontonfuelle", cuts: ["huhn-hack"], origin: "china", art: "basis", months: 1,
    ingredients: [["Chinakohl", "大白菜", 200, "g"], ["Ingwer", "姜", 10, "g"], ["Frühlingszwiebel", "葱", 2, "Stk"], ["Sojasauce natriumarm", "低钠生抽", 1.5, "EL"], ["Sesamöl", "香油", 2, "TL"], ["Wonton-Blätter", "馄饨皮", 40, "Stk"]],
    de: { title: "Hühner-Kohl-Wontons", steps: ["Kohl sehr fein hacken, kurz blanchieren, abkühlen und gut ausdrücken.", "Faschiertes mit Kohl, Ingwer, Frühlingszwiebel, Sojasauce und Sesamöl kräftig rühren.", "Wontons füllen und gut verschließen.", "Einzeln auf einem Brett sofort anfrieren, dann in Beutel geben."], freeze: "Frisches, noch nie gefrorenes Faschiertes; einzeln vorfrieren.", reheat: "Direkt gefroren in sprudelndes Wasser oder Suppe geben und 6–8 Min. kochen, bis die Füllung durch ist (74 °C)." },
    zh: { title: "鸡肉白菜馄饨", steps: ["白菜剁细，焯水后放凉并挤干。", "鸡肉末加白菜、姜、葱、生抽和香油用力搅上劲。", "包成馄饨，捏紧封口。", "在案板上摆开立即冻硬，再装袋。"], freeze: "选用从未冷冻过的鲜肉末，单个预冻。", reheat: "无需解冻，直接下沸水或汤中煮6–8分钟至馅料全熟（74°C）。" },
  },
  {
    id: "huhn-hack-tsukune", cuts: ["huhn-hack"], origin: "japan", art: "gegart", months: 2,
    ingredients: [["Frühlingszwiebel", "葱", 3, "Stk"], ["Ingwer", "姜", 10, "g"], ["Ei", "鸡蛋", 1, "Stk"], ["Speisestärke", "淀粉", 1, "EL"], ["Sojasauce natriumarm", "低钠生抽", 1.5, "EL"], ["Öl", "食用油", 1, "EL"]],
    de: { title: "Tsukune-Bällchen", steps: ["Frühlingszwiebel und Ingwer fein hacken.", "Mit Faschiertem, Ei, Stärke und der halben Sojasauce klebrig verkneten.", "Flache Bällchen formen, in Öl beidseitig anbraten und zugedeckt mit etwas Wasser garen, bis 74 °C im Kern erreicht sind.", "Mit der restlichen Sojasauce glasieren, rasch abkühlen und einzeln anfrieren."], freeze: "Einzeln vorgefroren im Beutel.", reheat: "Gefroren mit 3 EL Wasser zugedeckt in der Pfanne 10–12 Min. erhitzen, bis sie innen dampfen." },
    zh: { title: "日式鸡肉丸", steps: ["葱和姜切末。", "与鸡肉末、鸡蛋、淀粉和一半生抽搅至黏稠。", "做成扁圆丸子，两面煎上色，加少量水盖盖焖熟，中心达74°C。", "淋入剩余生抽裹匀，快速放凉后单个预冻。"], freeze: "单个预冻后装袋。", reheat: "无需解冻，平底锅加3汤匙水盖盖加热10–12分钟至内部热透。" },
  },
  {
    id: "huhn-hack-wanja", cuts: ["huhn-hack"], origin: "korea", art: "gegart", months: 2,
    ingredients: [["fester Tofu", "老豆腐", 150, "g"], ["Karotte", "胡萝卜", 60, "g"], ["Frühlingszwiebel", "葱", 2, "Stk"], ["Ei", "鸡蛋", 1, "Stk"], ["Sesamöl", "香油", 2, "TL"], ["Salz", "盐", 0.5, "TL"], ["Öl", "食用油", 1, "EL"]],
    de: { title: "Tofu-Hühner-Taler (Wanja-jeon)", steps: ["Tofu fest ausdrücken und zerbröseln, Gemüse fein hacken.", "Alles mit Faschiertem, Ei, Sesamöl und Salz verkneten.", "Dünne Taler formen und in Öl bei mittlerer Hitze je Seite etwa 5 Min. braten, bis sie durch sind (74 °C).", "Auf einem Gitter rasch abkühlen, mit Backpapier dazwischen einfrieren."], freeze: "Mit Backpapier getrennt, flach.", reheat: "Gefroren bei 180 °C 15–18 Min. im Ofen durchgehend heiß backen." },
    zh: { title: "韩式豆腐鸡肉煎饼", steps: ["豆腐挤干水分捏碎，蔬菜切细末。", "与鸡肉末、鸡蛋、香油和盐拌匀。", "做成薄饼，中火每面煎约5分钟至全熟（74°C）。", "放在网架上快速放凉，用烘焙纸隔开冷冻。"], freeze: "用烘焙纸隔开，平放冷冻。", reheat: "无需解冻，烤箱180°C烤15–18分钟至热透。" },
  },
  {
    id: "huhn-hack-basilikum", cuts: ["huhn-hack"], origin: "suedostasien", art: "gegart", months: 2,
    ingredients: [["Fisolen", "四季豆", 200, "g"], ["Knoblauch", "大蒜", 3, "Zehe"], ["Thai-Basilikum", "泰国罗勒", 30, "g"], ["Austernsauce", "蚝油", 1, "EL"], ["Fischsauce", "鱼露", 2, "TL"], ["Öl", "食用油", 1, "EL"]],
    de: { title: "Basilikum-Huhn aus dem Wok", steps: ["Fisolen klein schneiden und 5 Min. gar kochen.", "Knoblauch in Öl anbraten, Faschiertes krümelig braten, bis nichts mehr rosa ist (74 °C).", "Fisolen und Saucen zugeben, kurz durchschwenken, Basilikum unterheben.", "Flach auf einer Platte rasch abkühlen und portionieren."], freeze: "Flach in Beuteln oder Behältern.", reheat: "Gefroren mit 2 EL Wasser in der Pfanne 8–10 Min. braten, bis alles dampfend heiß ist." },
    zh: { title: "泰式罗勒炒鸡肉末", steps: ["四季豆切小段，煮5分钟至熟。", "油爆蒜末，下鸡肉末炒散至完全没有粉色（74°C）。", "加四季豆和调味汁翻匀，拌入罗勒。", "摊在盘上快速放凉后分装。"], freeze: "装袋或装盒，摊平。", reheat: "无需解冻，加2汤匙水入锅炒8–10分钟至热气腾腾。" },
  },
  {
    id: "huhn-hack-keema", cuts: ["huhn-hack"], origin: "indien", art: "gegart", months: 2,
    ingredients: [["Zwiebel", "洋葱", 150, "g"], ["Paradeiser gehackt (Dose)", "罐装碎番茄", 250, "g"], ["Erbsen", "豌豆", 150, "g"], ["Currypulver mild", "温和咖喱粉", 1.5, "EL"], ["Ingwer", "姜", 10, "g"], ["Öl", "食用油", 1, "EL"], ["Salz", "盐", 0.5, "TL"]],
    de: { title: "Keema mit Erbsen", steps: ["Zwiebel und Ingwer in Öl weich rösten, Currypulver kurz mitrösten.", "Faschiertes zugeben und krümelig anbraten.", "Paradeiser und Salz einrühren, 20 Min. köcheln, bis das Fleisch vollständig durch ist.", "Erbsen 5 Min. mitgaren, rasch abkühlen und portionieren."], freeze: "In flachen Behältern.", reheat: "Gefroren mit etwas Wasser zugedeckt 20 Min. erhitzen, öfter rühren und einmal gut aufkochen." },
    zh: { title: "豌豆鸡肉末咖喱", steps: ["油炒洋葱和姜至软，加咖喱粉略炒。", "下鸡肉末炒散。", "加番茄和盐，煮20分钟至肉全熟。", "加豌豆再煮5分钟，快速放凉后分装。"], freeze: "装浅盒冷冻。", reheat: "无需解冻，加少许水盖盖加热20分钟，勤搅拌并煮开一次。" },
  },
  {
    id: "huhn-hack-kofta", cuts: ["huhn-hack"], origin: "orient", art: "marinade", months: 1,
    ingredients: [["Zwiebel", "洋葱", 80, "g"], ["Petersilie", "欧芹", 25, "g"], ["Kreuzkümmel", "孜然粉", 2, "TL"], ["Paprikapulver edelsüß", "甜椒粉", 1, "TL"], ["Semmelbrösel", "面包糠", 30, "g"], ["Salz", "盐", 0.5, "TL"]],
    de: { title: "Kofta, roh vorgeformt", steps: ["Zwiebel reiben und ausdrücken, Petersilie hacken.", "Mit Faschiertem, Gewürzen, Bröseln und Salz verkneten.", "Längliche Röllchen formen.", "Auf Backpapier sofort anfrieren, dann in Beutel legen."], freeze: "Frisches, noch nie gefrorenes Faschiertes; roh einzeln vorfrieren.", reheat: "Direkt gefroren bei 200 °C etwa 25–30 Min. backen, einmal wenden, bis 74 °C im Kern erreicht sind." },
    zh: { title: "中东鸡肉卡夫塔（生冻）", steps: ["洋葱擦碎挤干，欧芹切末。", "与鸡肉末、香料、面包糠和盐揉匀。", "搓成长条形肉卷。", "摆在烘焙纸上立即冻硬，再装袋。"], freeze: "选用从未冷冻过的鲜肉末，生肉卷单个预冻。", reheat: "无需解冻，烤箱200°C烤25–30分钟，中途翻面，至中心74°C。" },
  },
  {
    id: "huhn-hack-sugo", cuts: ["huhn-hack"], origin: "mittelmeer", art: "gegart", months: 2,
    ingredients: [["Paradeiser gehackt (Dose)", "罐装碎番茄", 400, "g"], ["Zucchini", "西葫芦", 200, "g"], ["Karotte", "胡萝卜", 100, "g"], ["Zwiebel", "洋葱", 100, "g"], ["Olivenöl", "橄榄油", 1, "EL"], ["Oregano getrocknet", "干牛至", 2, "TL"], ["Salz", "盐", 0.5, "TL"]],
    de: { title: "Hühner-Gemüse-Sugo", steps: ["Zwiebel, Karotte und Zucchini fein würfeln und in Olivenöl andünsten.", "Faschiertes zugeben und krümelig braten.", "Paradeiser, Oregano und Salz einrühren und 25 Min. köcheln.", "Im kalten Wasserbad rasch abkühlen und abfüllen."], freeze: "In Portionsbehältern mit etwas Rand.", reheat: "Gefroren mit einem Schuss Wasser zugedeckt 20 Min. erwärmen, dann 2 Min. sprudelnd kochen; zu Vollkornnudeln." },
    zh: { title: "鸡肉蔬菜番茄酱", steps: ["洋葱、胡萝卜和西葫芦切细丁，用橄榄油炒软。", "下鸡肉末炒散。", "加番茄、牛至和盐，煮25分钟。", "隔冷水快速降温后装盒。"], freeze: "分份装盒，顶部留空。", reheat: "无需解冻，加少量水盖盖加热20分钟，再沸煮2分钟；配全麦意面。" },
  },
  {
    id: "huhn-hack-laibchen", cuts: ["huhn-hack"], origin: "heimisch", art: "gegart", months: 2,
    ingredients: [["Zucchini", "西葫芦", 150, "g"], ["Haferflocken fein", "即食燕麦片", 50, "g"], ["Ei", "鸡蛋", 1, "Stk"], ["Petersilie", "欧芹", 15, "g"], ["Senf", "芥末酱", 2, "TL"], ["Öl", "食用油", 1, "EL"], ["Salz", "盐", 0.5, "TL"]],
    de: { title: "Hühnerlaibchen mit Zucchini", steps: ["Zucchini raspeln und kräftig ausdrücken.", "Mit Faschiertem, Haferflocken, Ei, Petersilie, Senf und Salz verkneten.", "Laibchen formen, in Öl anbraten und bei 180 °C etwa 15 Min. fertig garen (74 °C im Kern).", "Auf einem Gitter rasch abkühlen und einzeln einfrieren."], freeze: "Einzeln mit Backpapier getrennt.", reheat: "Gefroren zugedeckt bei 180 °C 20–25 Min. im Ofen erhitzen, bis die Mitte dampfend heiß ist." },
    zh: { title: "西葫芦鸡肉饼", steps: ["西葫芦擦丝，用力挤干。", "与鸡肉末、燕麦片、鸡蛋、欧芹、芥末酱和盐拌匀。", "做成肉饼，先煎上色，再以180°C烤约15分钟至熟（中心74°C）。", "放网架上快速放凉，单个冷冻。"], freeze: "用烘焙纸逐个隔开。", reheat: "无需解冻，加盖放入180°C烤箱加热20–25分钟至中心热透。" },
  },

  // ───── Ganzes Huhn ─────
  {
    id: "huhn-ganz-ingwerhuhn", cuts: ["huhn-ganz"], origin: "china", art: "basis", months: 2,
    ingredients: [["Wasser", "清水", 1000, "ml"], ["Ingwer", "姜", 20, "g"], ["Frühlingszwiebel", "葱", 3, "Stk"], ["Salz", "盐", 0.5, "TL"]],
    de: { title: "Pochiertes Ingwerhuhn mit Brühe", steps: ["Das ungewaschene Huhn mit Ingwer, Frühlingszwiebel, Salz und Wasser aufkochen und abschäumen.", "Zugedeckt 50–60 Min. leise köcheln, bis an der dicksten Stelle des Schenkels mindestens 74 °C erreicht sind.", "Huhn herausheben, sofort zerlegen und Fleisch von den Knochen lösen.", "Fleisch und abgeseihte Brühe getrennt flach rasch abkühlen und einfrieren."], freeze: "Fleisch mit etwas Brühe, restliche Brühe separat.", reheat: "Im Kühlschrank auftauen, Fleisch in der Brühe 10 Min. durchkochen." },
    zh: { title: "姜葱白煮鸡配清汤", steps: ["整鸡不用冲洗，加姜、葱、盐和清水煮开并撇沫。", "盖盖小火煮50–60分钟，至鸡腿最厚处达到74°C以上。", "捞出后马上分割拆肉。", "鸡肉与过滤后的汤分开装浅盒，快速放凉后冷冻。"], freeze: "鸡肉带少许汤，其余汤另装。", reheat: "冷藏解冻，将鸡肉放回汤中煮10分钟至热透。" },
  },
  {
    id: "huhn-ganz-suppe", cuts: ["huhn-ganz"], origin: "heimisch", art: "basis", months: 2,
    ingredients: [["Karotte", "胡萝卜", 120, "g"], ["Knollensellerie", "根芹", 80, "g"], ["Petersilienwurzel", "欧芹根", 60, "g"], ["Lauch", "韭葱", 60, "g"], ["Pfefferkörner", "胡椒粒", 5, "Stk"], ["Wasser", "清水", 1300, "ml"], ["Salz", "盐", 0.5, "TL"]],
    de: { title: "Alt-Wiener Hühnersuppe mit Einlage", steps: ["Huhn ungewaschen in kaltem Wasser zustellen, aufkochen und abschäumen.", "Wurzelgemüse, Lauch, Pfeffer und Salz zugeben, 75 Min. leise köcheln.", "Garprobe machen (mindestens 74 °C am Schenkel), Fleisch auslösen, Gemüse schneiden.", "Suppe abseihen, im kalten Wasserbad rasch abkühlen und mit Einlage abfüllen."], freeze: "In Portionsbehältern mit Rand zum Ausdehnen.", reheat: "Gefroren bei mittlerer Hitze zugedeckt etwa 25 Min. auftauen und 3 Min. sprudelnd kochen; Nudeln frisch dazu." },
    zh: { title: "维也纳式清炖鸡汤", steps: ["整鸡不冲洗，冷水下锅煮开并撇沫。", "加根菜、韭葱、胡椒和盐，小火煮75分钟。", "确认熟透（鸡腿处至少74°C），拆肉，蔬菜切块。", "汤过滤后隔冷水快速降温，与肉菜一起分装。"], freeze: "分份装盒，留出膨胀空间。", reheat: "无需解冻，盖盖中火加热约25分钟至化开，再沸煮3分钟；面条现煮现加。" },
  },
  {
    id: "huhn-ganz-dakgomtang", cuts: ["huhn-ganz"], origin: "korea", art: "gegart", months: 2,
    ingredients: [["Daikon", "白萝卜", 200, "g"], ["Knoblauch", "大蒜", 6, "Zehe"], ["Zwiebel", "洋葱", 100, "g"], ["Wasser", "清水", 1200, "ml"], ["Sesamöl", "香油", 2, "TL"], ["Salz", "盐", 0.5, "TL"]],
    de: { title: "Dakgomtang – klare Knoblauch-Hühnersuppe", steps: ["Huhn ungewaschen mit Daikon, Knoblauch, Zwiebel und Wasser aufkochen und abschäumen.", "60–70 Min. köcheln, bis das Fleisch weich und mindestens 74 °C heiß ist.", "Fleisch zupfen und mit Sesamöl und Salz mischen, Rettich in Scheiben schneiden.", "Brühe abseihen, alles rasch abkühlen und portionsweise einfrieren."], freeze: "Fleisch, Rettich und Brühe gemeinsam in Behältern.", reheat: "Im Kühlschrank auftauen und 10 Min. sprudelnd kochen; Frühlingszwiebel frisch darüber." },
    zh: { title: "韩式蒜香清鸡汤", steps: ["整鸡不冲洗，加白萝卜、大蒜、洋葱和清水煮开撇沫。", "小火煮60–70分钟至肉软烂，中心至少74°C。", "鸡肉撕丝拌香油和盐，萝卜切片。", "汤过滤后与肉菜一起快速放凉，分份冷冻。"], freeze: "肉、萝卜和汤一起装盒。", reheat: "冷藏解冻后沸煮10分钟，吃时撒新鲜葱花。" },
  },
  {
    id: "huhn-ganz-hainan", cuts: ["huhn-ganz"], origin: "suedostasien", art: "gegart", months: 2,
    ingredients: [["Jasminreis", "香米", 120, "g"], ["Ingwer", "姜", 25, "g"], ["Knoblauch", "大蒜", 4, "Zehe"], ["Pandanblatt", "斑斓叶", 1, "Stk"], ["Wasser", "清水", 1100, "ml"], ["Sesamöl", "香油", 2, "TL"], ["Salz", "盐", 0.5, "TL"]],
    de: { title: "Hainan-Huhn mit Duftreis", steps: ["Huhn ungewaschen mit halbem Ingwer, Pandanblatt, Salz und Wasser 55–60 Min. leise garen, bis 74 °C am Schenkel erreicht sind.", "Fleisch auslösen, mit Sesamöl bestreichen und flach rasch abkühlen.", "Brühe abseihen, im kalten Wasserbad rasch abkühlen und getrennt vom Fleisch einfrieren.", "Den Reis nicht einfrieren: erst beim Servieren mit restlichem Ingwer und Knoblauch anrösten und in aufgetauter Brühe frisch kochen."], freeze: "Fleisch und Brühe getrennt; Reis wird frisch gekocht.", reheat: "Fleisch und Brühe im Kühlschrank auftauen. Fleisch 8–10 Min. dämpfen, bis es dampfend heiß ist; Reis in der aufgekochten Brühe frisch garen." },
    zh: { title: "海南鸡饭", steps: ["整鸡不冲洗，加一半姜、斑斓叶、盐和清水小火煮55–60分钟，鸡腿处达74°C。", "拆肉，抹香油，摊开快速放凉。", "鸡汤过滤，隔冷水快速降温，与鸡肉分开冷冻。", "米饭不冷冻：吃时再把米与剩下的姜和蒜炒香，用解冻的鸡汤现煮。"], freeze: "鸡肉和鸡汤分开装；米饭现煮。", reheat: "鸡肉和鸡汤冷藏解冻。鸡肉蒸8–10分钟至热透；鸡汤煮开后现煮米饭。" },
  },
  {
    id: "huhn-ganz-oliven-zitrone", cuts: ["huhn-ganz"], origin: "orient", art: "gegart", months: 2,
    ingredients: [["Zwiebel", "洋葱", 150, "g"], ["grüne Oliven", "绿橄榄", 40, "g"], ["Bio-Zitrone", "有机柠檬", 0.5, "Stk"], ["Kurkuma", "姜黄粉", 0.5, "TL"], ["Ingwer", "姜", 10, "g"], ["Wasser", "清水", 250, "ml"], ["Olivenöl", "橄榄油", 1, "EL"]],
    de: { title: "Zitronen-Oliven-Huhn nach marokkanischer Art", steps: ["Das ungewaschene Huhn in Teile zerlegen, Brett und Messer danach heiß reinigen.", "Teile in Olivenöl anbraten, Zwiebel, Ingwer und Kurkuma zugeben.", "Mit Wasser, Zitronenscheiben und abgespülten Oliven 45–50 Min. schmoren, bis alle Teile 74 °C erreicht haben.", "Flach in Behälter verteilen, rasch abkühlen und einfrieren."], freeze: "Mit Sauce in flachen Behältern.", reheat: "Im Kühlschrank auftauen, zugedeckt 15–20 Min. durchköcheln." },
    zh: { title: "摩洛哥风柠檬橄榄鸡", steps: ["整鸡不冲洗，直接分块，用后将砧板和刀热水清洗干净。", "鸡块用橄榄油煎上色，加洋葱、姜和姜黄。", "加水、柠檬片和冲过的橄榄，焖45–50分钟，各块均达74°C。", "分装浅盒，快速放凉后冷冻。"], freeze: "带汁装浅盒。", reheat: "冷藏解冻，盖盖煮15–20分钟至热透。" },
  },
  {
    id: "huhn-ganz-kraeuterteile", cuts: ["huhn-ganz"], origin: "mittelmeer", art: "marinade", months: 2,
    ingredients: [["Olivenöl", "橄榄油", 2, "EL"], ["Rosmarin", "迷迭香", 5, "g"], ["Thymian", "百里香", 5, "g"], ["Knoblauch", "大蒜", 3, "Zehe"], ["Zitronensaft", "柠檬汁", 1, "EL"], ["Salz", "盐", 0.5, "TL"]],
    de: { title: "Kräuterhendl in Teilen für das Blech", steps: ["Jedes ungewaschene Huhn in 8 Teile zerlegen; Arbeitsflächen danach heiß reinigen.", "Kräuter und Knoblauch hacken, mit Öl, Zitronensaft und Salz verrühren.", "Teile damit einreiben, einlagig in Beutel verteilen und sofort einfrieren."], freeze: "Nur ein frisches, noch nie gefrorenes Huhn verwenden; flach im Beutel.", reheat: "Im Kühlschrank 24 Stunden auftauen und bei 200 °C 45–50 Min. braten, bis jedes Teil 74 °C erreicht hat." },
    zh: { title: "香草鸡块（生腌烤盘用）", steps: ["整鸡不冲洗，每只分成8块；之后用热水清洁台面。", "香草和蒜切碎，与橄榄油、柠檬汁和盐调匀。", "抹匀鸡块，单层装袋后立即冷冻。"], freeze: "只用从未冷冻过的鲜鸡，装袋压平。", reheat: "冷藏解冻24小时，200°C烤45–50分钟，每块都要达到74°C。" },
  },
  {
    id: "huhn-ganz-tandoori", cuts: ["huhn-ganz"], origin: "indien", art: "marinade", months: 2,
    ingredients: [["Naturjoghurt pasteurisiert", "巴氏杀菌原味酸奶", 150, "g"], ["Tandoori-Gewürz mild", "温和坦都里香料", 1.5, "EL"], ["Knoblauch", "大蒜", 3, "Zehe"], ["Ingwer", "姜", 15, "g"], ["Zitronensaft", "柠檬汁", 1, "EL"], ["Salz", "盐", 0.5, "TL"]],
    de: { title: "Tandoori-Huhn in Teilen", steps: ["Das ungewaschene Huhn zerlegen, Haut abziehen und die Teile einschneiden.", "Joghurt mit Gewürz, geriebenem Knoblauch und Ingwer, Zitronensaft und Salz verrühren.", "Teile gut bedecken, einlagig in flache Beutel füllen und sofort einfrieren."], freeze: "Nur ein frisches, noch nie gefrorenes Huhn verwenden; einlagig im Beutel.", reheat: "Im Kühlschrank 24 Stunden auftauen, bei 210 °C 40–45 Min. backen, bis jedes Teil 74 °C am Knochen hat." },
    zh: { title: "坦都里烤鸡块", steps: ["整鸡不冲洗，分块去皮并划刀。", "酸奶加香料、蒜蓉、姜蓉、柠檬汁和盐拌匀。", "鸡块裹满腌料，单层装入扁平袋中压平，立即冷冻。"], freeze: "只用从未冷冻过的鲜鸡，单层装袋。", reheat: "冷藏解冻24小时，210°C烤40–45分钟，各块骨边达74°C。" },
  },

  // ───── Ente ─────
  {
    id: "ente-soja-geschmort", cuts: ["ente-brust"], origin: "china", art: "gegart", months: 2,
    ingredients: [["Sojasauce natriumarm", "低钠生抽", 2, "EL"], ["Ingwer", "姜", 20, "g"], ["Sternanis", "八角", 2, "Stk"], ["Zimtstange", "桂皮", 1, "Stk"], ["Kandiszucker", "冰糖", 8, "g"], ["Wasser", "清水", 500, "ml"]],
    de: { title: "Soja-geschmorte Ente mit Sternanis", steps: ["Haut einritzen, Ente ohne Öl langsam anbraten und das Fett abgießen.", "Ingwer, Gewürze, Sojasauce, Zucker und Wasser zugeben.", "Zugedeckt schmoren: Brust etwa 35 Min., Keulen 75 Min., bis sie ganz durch sind (mindestens 74 °C, kein Rosa).", "Aufschneiden, Sauce entfetten, rasch abkühlen und zusammen einfrieren."], freeze: "Mit Sauce in flachen Behältern.", reheat: "Im Kühlschrank auftauen, in der Sauce zugedeckt 15 Min. durchköcheln." },
    zh: { title: "八角酱香焖鸭", steps: ["鸭皮划刀，不放油小火煎出油脂并倒掉。", "加姜、香料、生抽、冰糖和清水。", "盖盖焖煮：鸭胸约35分钟，鸭腿75分钟，完全熟透（至少74°C，无粉红色）。", "切块，撇去浮油，快速放凉后连汁冷冻。"], freeze: "带汁装浅盒。", reheat: "冷藏解冻，在原汁中盖盖煮15分钟至热透。" },
  },
  {
    id: "ente-daikon", cuts: ["ente-brust"], origin: "japan", art: "gegart", months: 2,
    ingredients: [["Daikon", "白萝卜", 350, "g"], ["Dashi", "日式高汤", 500, "ml"], ["Sojasauce natriumarm", "低钠生抽", 1.5, "EL"], ["Ingwer", "姜", 15, "g"], ["Lauch", "大葱", 120, "g"]],
    de: { title: "Ente mit Rettich in Dashi", steps: ["Ente auf der Hautseite anbraten, Fett abgießen und in dicke Stücke schneiden.", "Daikon und Lauch schneiden und mit Dashi, Ingwer und Sojasauce aufkochen.", "Ente zugeben und leise köcheln: Brust 35 Min., Keulen 70 Min., bis das Fleisch vollständig durch ist (74 °C).", "Fett abschöpfen, rasch abkühlen und portionieren."], freeze: "Mit Sud in Behältern.", reheat: "Im Kühlschrank auftauen und 12–15 Min. zugedeckt köcheln." },
    zh: { title: "日式萝卜炖鸭", steps: ["鸭皮朝下煎香，倒掉油脂后切厚块。", "白萝卜和大葱切段，加高汤、姜和生抽煮开。", "放入鸭肉小火炖：鸭胸35分钟，鸭腿70分钟，至完全熟透（74°C）。", "撇去浮油，快速放凉后分装。"], freeze: "连汤装盒。", reheat: "冷藏解冻，盖盖煮12–15分钟至热透。" },
  },
  {
    id: "ente-bulgogi", cuts: ["ente-brust"], origin: "korea", art: "marinade", months: 1,
    ingredients: [["Sojasauce natriumarm", "低钠生抽", 1.5, "EL"], ["Birne", "梨", 80, "g"], ["Zwiebel", "洋葱", 120, "g"], ["Knoblauch", "大蒜", 3, "Zehe"], ["Ingwer", "姜", 10, "g"], ["Sesamöl", "香油", 2, "TL"]],
    de: { title: "Enten-Bulgogi (Ori-Bulgogi), mild", steps: ["Fett großteils entfernen, Entenfleisch von allfälligen Knochen lösen und in 4 mm dünne Scheiben schneiden.", "Birne, Knoblauch und Ingwer reiben, mit Sojasauce und Sesamöl verrühren.", "Fleisch und Zwiebelstreifen untermischen.", "Dünn in Beutel streichen und sofort einfrieren."], freeze: "Frisches, noch nie gefrorenes Fleisch; höchstens fingerdick und flach.", reheat: "Im Kühlschrank auftauen, portionsweise in der heißen Pfanne 8–10 Min. braten, bis nichts mehr rosa ist (74 °C)." },
    zh: { title: "韩式烤鸭肉（不辣）", steps: ["剔去大部分脂肪和骨头，鸭肉切4毫米薄片。", "梨、蒜和姜擦泥，加生抽和香油调匀。", "拌入鸭肉和洋葱丝。", "薄薄地铺进保鲜袋，立即冷冻。"], freeze: "选用从未冷冻过的鲜肉，厚度不超过一指，压平。", reheat: "冷藏解冻，热锅分批炒8–10分钟至完全没有粉色（74°C）。" },
  },
  {
    id: "ente-wuxiang", cuts: ["ente-brust"], origin: "china", art: "marinade", months: 2,
    ingredients: [["Fünf-Gewürze-Pulver", "五香粉", 1.5, "TL"], ["Sojasauce natriumarm", "低钠生抽", 1.5, "EL"], ["Ingwer", "姜", 10, "g"], ["Orangenschale (Bio)", "有机橙皮", 5, "g"], ["Honig", "蜂蜜", 1, "TL"]],
    de: { title: "Fünf-Gewürze-Ente fürs Rohr", steps: ["Haut rautenförmig einschneiden.", "Gewürz, Sojasauce, geriebenen Ingwer, Orangenschale und Honig verrühren.", "Fleischseiten gut einreiben, Stücke einzeln in Beutel legen und sofort einfrieren."], freeze: "Frisches, noch nie gefrorenes Fleisch; Stücke nicht übereinander.", reheat: "Im Kühlschrank auftauen; Hautseite 8 Min. anbraten, dann bei 180 °C garen: Brust etwa 20 Min., Keulen 60–70 Min. zugedeckt, ganz durch ohne Rosa (74 °C)." },
    zh: { title: "五香橙皮烤鸭肉", steps: ["鸭皮划菱形花刀。", "五香粉、生抽、姜蓉、橙皮和蜂蜜调匀。", "抹匀肉面，逐块装袋后立即冷冻。"], freeze: "选用从未冷冻过的鲜肉，肉块不重叠。", reheat: "冷藏解冻；鸭皮朝下煎8分钟，再入180°C烤箱：鸭胸约20分钟，鸭腿加盖60–70分钟，熟透无粉红色（74°C）。" },
  },
  {
    id: "ente-rotes-curry", cuts: ["ente-brust"], origin: "suedostasien", art: "gegart", months: 2,
    ingredients: [["rote Currypaste mild", "温和红咖喱酱", 1.5, "EL"], ["Kokosmilch", "椰奶", 300, "ml"], ["Paprika rot", "红甜椒", 150, "g"], ["Melanzani", "茄子", 150, "g"], ["Fischsauce", "鱼露", 2, "TL"], ["Wasser", "清水", 150, "ml"]],
    de: { title: "Mildes rotes Entencurry", steps: ["Ente häuten oder Fett auslassen, Fleisch anbraten und in Stücke schneiden.", "Currypaste in etwas Kokosmilch anrösten, restliche Milch und Wasser zugeben.", "Ente 30 Min. (Brust) bis 70 Min. (Keule) köcheln, bis sie durch ist (74 °C), Gemüse die letzten 15 Min. mitgaren.", "Mit Fischsauce abschmecken, rasch abkühlen und abfüllen."], freeze: "In Behältern mit etwas Rand.", reheat: "Im Kühlschrank auftauen, unter Rühren 10 Min. leise durchkochen." },
    zh: { title: "温和泰式红咖喱鸭", steps: ["鸭肉去皮或煎出油脂，煎香后切块。", "红咖喱酱用少许椰奶炒香，倒入剩余椰奶和清水。", "鸭胸煮30分钟、鸭腿煮70分钟至熟透（74°C），最后15分钟加蔬菜。", "加鱼露调味，快速放凉后装盒。"], freeze: "装盒并留空隙。", reheat: "冷藏解冻，边搅边小火煮10分钟至热透。" },
  },
  {
    id: "ente-kokos-pfeffer", cuts: ["ente-brust"], origin: "indien", art: "gegart", months: 2,
    ingredients: [["Zwiebel", "洋葱", 200, "g"], ["Kokosmilch", "椰奶", 150, "ml"], ["Koriander gemahlen", "香菜籽粉", 2, "TL"], ["Garam Masala", "印度综合香料", 1, "TL"], ["schwarzer Pfeffer", "黑胡椒", 0.5, "TL"], ["Ingwer", "姜", 20, "g"], ["Wasser", "清水", 300, "ml"], ["Salz", "盐", 0.5, "TL"]],
    de: { title: "Entencurry nach Kerala-Art", steps: ["Ente häuten und in große Stücke teilen.", "Zwiebel und Ingwer in etwas ausgelassenem Entenfett goldbraun rösten, Gewürze mitrösten.", "Fleisch, Wasser und Salz zugeben und 40 Min. (Brust) bis 75 Min. (Keule) zugedeckt schmoren, bis es durch ist (74 °C).", "Kokosmilch einrühren, kurz aufkochen, entfetten, rasch abkühlen und einfrieren."], freeze: "Mit Sauce in flachen Behältern.", reheat: "Gefroren mit 4 EL Wasser zugedeckt etwa 30 Min. erhitzen, öfter wenden und 3 Min. durchkochen." },
    zh: { title: "喀拉拉风椰香胡椒鸭", steps: ["鸭肉去皮，切大块。", "用少量鸭油把洋葱和姜炒至金黄，加香料炒香。", "加鸭肉、水和盐，盖盖焖：鸭胸40分钟、鸭腿75分钟至熟透（74°C）。", "拌入椰奶煮开，撇油，快速放凉后冷冻。"], freeze: "带汁装浅盒。", reheat: "无需解冻，加4汤匙水盖盖加热约30分钟，勤翻动并煮开3分钟。" },
  },
  {
    id: "ente-fesenjan", cuts: ["ente-brust"], origin: "orient", art: "gegart", months: 2,
    ingredients: [["Walnüsse", "核桃仁", 120, "g"], ["Zwiebel", "洋葱", 150, "g"], ["Granatapfelsirup", "石榴浓浆", 1.5, "EL"], ["Wasser", "清水", 450, "ml"], ["Zimt", "肉桂粉", 0.25, "TL"], ["Salz", "盐", 0.5, "TL"]],
    de: { title: "Fesenjan – Ente in Walnuss-Granatapfel-Sauce", steps: ["Walnüsse ohne Fett rösten und fein mahlen.", "Ente anbraten, Fett abgießen, Zwiebel mitdünsten.", "Nüsse, Wasser, Sirup, Zimt und Salz zugeben und zugedeckt schmoren: Brust 40 Min., Keulen 80 Min., bis ganz durch (74 °C).", "Rasch abkühlen, erstarrtes Fett grob abheben und portionieren."], freeze: "Mit Sauce in Behältern.", reheat: "Im Kühlschrank auftauen, mit etwas Wasser unter Rühren 15 Min. köcheln." },
    zh: { title: "波斯核桃石榴炖鸭", steps: ["核桃干锅烘香后磨细。", "鸭肉煎上色，倒掉多余油脂，加洋葱炒软。", "加核桃、清水、石榴浓浆、肉桂和盐，盖盖炖：鸭胸40分钟、鸭腿80分钟至熟透（74°C）。", "快速放凉，撇去凝结的油后分装。"], freeze: "连酱汁装盒。", reheat: "冷藏解冻，加少许水边搅边煮15分钟。" },
  },
  {
    id: "ente-ragu", cuts: ["ente-brust"], origin: "mittelmeer", art: "gegart", months: 2,
    ingredients: [["Paradeiser gehackt (Dose)", "罐装碎番茄", 400, "g"], ["Karotte", "胡萝卜", 100, "g"], ["Stangensellerie", "西芹", 80, "g"], ["Zwiebel", "洋葱", 100, "g"], ["Rosmarin", "迷迭香", 3, "g"], ["Hühnerbrühe natriumarm", "低钠鸡汤", 250, "ml"]],
    de: { title: "Entenragout für Pasta", steps: ["Ente anbraten, Fett bis auf 1 EL abgießen.", "Gemüse fein würfeln und mitrösten, Paradeiser, Brühe und Rosmarin zugeben.", "Schmoren, bis das Fleisch zerfällt und durch ist: Brust etwa 60 Min., Keulen 90 Min. (mindestens 74 °C).", "Fleisch zupfen, Knochen und Haut entfernen, rasch abkühlen und einfrieren."], freeze: "In flachen Portionsbehältern.", reheat: "Gefroren mit einem Schuss Wasser zugedeckt 20–25 Min. erhitzen und gut aufkochen." },
    zh: { title: "番茄鸭肉意面酱", steps: ["鸭肉煎上色，只留1汤匙油。", "蔬菜切细丁炒香，加番茄、鸡汤和迷迭香。", "炖至肉可撕开且熟透：鸭胸约60分钟，鸭腿90分钟（至少74°C）。", "鸭肉撕碎，去骨去皮，快速放凉后冷冻。"], freeze: "分份装浅盒。", reheat: "无需解冻，加少量水盖盖加热20–25分钟并煮开。" },
  },
  {
    id: "ente-apfel-majoran", cuts: ["ente-brust"], origin: "heimisch", art: "gegart", months: 2,
    ingredients: [["Apfel säuerlich", "酸苹果", 200, "g"], ["Zwiebel", "洋葱", 120, "g"], ["Majoran getrocknet", "干马郁兰", 2, "TL"], ["Hühnerbrühe natriumarm", "低钠鸡汤", 350, "ml"], ["Salz", "盐", 0.5, "TL"]],
    de: { title: "Geschmorte Ente mit Apfel und Majoran", steps: ["Ente mit Salz und Majoran einreiben, auf der Hautseite anbraten und Fett abgießen.", "Zwiebel- und Apfelspalten in einen Bräter geben, Ente daraufsetzen, Brühe angießen.", "Bei 170 °C zugedeckt schmoren: Brust 40 Min., Keulen 90 Min., bis kein Rosa mehr da ist (mindestens 74 °C).", "Sauce entfetten, Fleisch mit Saft rasch abkühlen und portionieren."], freeze: "Mit Apfelsauce in Behältern.", reheat: "Im Kühlschrank auftauen und zugedeckt bei 180 °C etwa 25 Min. durchgehend heiß machen." },
    zh: { title: "苹果马郁兰焖鸭", steps: ["鸭肉抹盐和马郁兰，皮朝下煎上色并倒掉油脂。", "烤锅铺洋葱和苹果块，放上鸭肉，倒入鸡汤。", "170°C加盖焖烤：鸭胸40分钟，鸭腿90分钟，直至无粉红色（至少74°C）。", "汤汁撇油，连肉快速放凉后分装。"], freeze: "带苹果酱汁装盒。", reheat: "冷藏解冻，加盖180°C加热约25分钟至热透。" },
  },
];

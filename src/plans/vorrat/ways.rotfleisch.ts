// Vorrat-Wege: Schwein & Rind. Mengen je 500 g Rohware.
import type { Way } from "./types";

export const WAYS: Way[] = [
  // ── Schweinefilet / Schnitzel ────────────────────────────────
  {
    id: "schwein-filet-ingwer-japan", cuts: ["schwein-filet"], origin: "japan", art: "marinade", months: 2,
    ingredients: [["Ingwer", "姜", 20, "g"], ["Natriumarme Sojasauce", "低钠生抽", 2, "EL"], ["Zwiebel", "洋葱", 150, "g"], ["Rapsöl", "菜籽油", 1, "EL"]],
    de: { title: "Ingwer-Schwein (Shogayaki)", steps: ["Filet in 3 mm dünne Scheiben schneiden, Zwiebel in Streifen.", "Ingwer reiben und mit Sojasauce und Öl verrühren.", "Fleisch und Zwiebel gut damit mischen, flach in Beutel füllen und sofort einfrieren."], freeze: "Flach im Gefrierbeutel, Luft herausstreichen.", reheat: "Über Nacht im Kühlschrank auftauen, dann in heißer Pfanne 5–6 Min. braten, bis nichts mehr rosa ist." },
    zh: { title: "日式姜烧猪肉", steps: ["里脊切成3毫米薄片，洋葱切丝。", "姜磨成泥，与生抽和油调匀。", "把肉和洋葱拌匀腌料，压平装袋，立即冷冻。"], freeze: "平放装入冷冻袋，排出空气。", reheat: "放冰箱冷藏室过夜解冻，热锅翻炒5–6分钟，至完全没有粉红色。" },
  },
  {
    id: "schwein-filet-yuxiang", cuts: ["schwein-filet"], origin: "china", art: "marinade", months: 2,
    ingredients: [["Natriumarme Sojasauce", "低钠生抽", 1, "EL"], ["Speisestärke", "淀粉", 1, "EL"], ["Reisessig", "米醋", 1, "EL"], ["Knoblauch", "大蒜", 3, "Zehe"], ["Ingwer", "姜", 15, "g"], ["Rapsöl", "菜籽油", 1, "EL"]],
    de: { title: "Schweinestreifen mit Fischduft-Würze", steps: ["Filet in feine Streifen schneiden.", "Knoblauch und Ingwer hacken, mit Sojasauce, Essig, Stärke und Öl verrühren.", "Streifen darin wenden, flach verpacken und sofort einfrieren."], freeze: "Flach im Beutel, je 250 g.", reheat: "Im Kühlschrank auftauen, 5 Min. scharf anbraten, bis alles durch ist; frisches Gemüse und 3 EL Wasser zugeben und noch 3 Min. garen." },
    zh: { title: "鱼香肉丝腌料包", steps: ["里脊切细丝。", "蒜和姜切末，与生抽、米醋、淀粉和油调匀。", "肉丝裹匀腌料，压平包装，立即冷冻。"], freeze: "每袋250克，平放冷冻。", reheat: "冷藏室解冻后大火翻炒5分钟至熟透，加新鲜蔬菜和3汤匙水再炒3分钟。" },
  },
  {
    id: "schwein-filet-schnitzel", cuts: ["schwein-filet"], origin: "heimisch", art: "marinade", months: 2,
    ingredients: [["Eier", "鸡蛋", 2, "Stk"], ["Vollkornbrösel", "全麦面包糠", 80, "g"], ["Dinkelmehl", "斯佩耳特面粉", 40, "g"], ["Salz", "盐", 1, "Prise"], ["Rapsöl zum Braten", "煎炸用菜籽油", 3, "EL"]],
    de: { title: "Schnitzel pfannenfertig paniert", steps: ["Scheiben 5 mm dünn klopfen und ganz leicht salzen.", "Nacheinander in Mehl, verquirltem Ei und Bröseln wenden.", "Einzeln auf einem Blech 1 Stunde vorfrieren, dann mit Backpapier dazwischen verpacken."], freeze: "Vorgefroren, Lage für Lage mit Backpapier.", reheat: "Direkt gefroren bei mittlerer Hitze im Öl 5–6 Min. je Seite braten, bis das Fleisch innen durchgegart ist." },
    zh: { title: "裹好面衣的维也纳式猪排", steps: ["肉片敲至5毫米厚，撒极少量盐。", "依次裹面粉、蛋液和面包糠。", "平铺在烤盘上预冻1小时，再用烘焙纸隔开包装。"], freeze: "预冻后分层垫烘焙纸保存。", reheat: "无需解冻，直接中火用油煎，每面5–6分钟，至中心熟透。" },
  },
  {
    id: "schwein-filet-satay", cuts: ["schwein-filet"], origin: "suedostasien", art: "marinade", months: 2,
    ingredients: [["Kokosmilch", "椰奶", 100, "ml"], ["Kurkuma gemahlen", "姜黄粉", 1, "TL"], ["Koriander gemahlen", "香菜籽粉", 1, "TL"], ["Zitronengras", "香茅", 1, "Stk"], ["Natriumarme Sojasauce", "低钠生抽", 1, "EL"]],
    de: { title: "Kokos-Kurkuma-Spießfleisch", steps: ["Filet in 2 cm große Würfel schneiden.", "Zitronengras fein hacken und mit Kokosmilch, Gewürzen und Sojasauce verrühren.", "Fleisch untermischen, in einer Lage verpacken und sofort einfrieren."], freeze: "Würfel nebeneinander in flachen Beuteln.", reheat: "Im Kühlschrank auftauen, auf Spieße stecken und bei 220 °C im Rohr 15–18 Min. durchgaren." },
    zh: { title: "椰香姜黄沙爹肉", steps: ["里脊切2厘米见方的丁。", "香茅切末，与椰奶、香料和生抽调匀。", "拌入肉丁，单层装袋，立即冷冻。"], freeze: "肉丁单层平放装袋。", reheat: "冷藏室解冻后穿串，烤箱220度烤15–18分钟至熟透。" },
  },
  {
    id: "schwein-filet-senf-kraeuter", cuts: ["schwein-filet"], origin: "mittelmeer", art: "marinade", months: 2,
    ingredients: [["Dijonsenf (ohne Alkohol)", "第戎芥末酱（无酒精）", 1, "EL"], ["Olivenöl", "橄榄油", 2, "EL"], ["Rosmarin", "迷迭香", 1, "TL"], ["Thymian", "百里香", 1, "TL"], ["Zitronensaft", "柠檬汁", 1, "EL"]],
    de: { title: "Filet in Senf-Kräuter-Mantel", steps: ["Filet putzen und in 4 cm dicke Medaillons schneiden.", "Senf, Öl, Kräuter und Zitronensaft verrühren.", "Medaillons rundum bestreichen, nebeneinander verpacken und sofort einfrieren."], freeze: "Medaillons einzeln nebeneinander im Beutel.", reheat: "Im Kühlschrank auftauen, 2 Min. je Seite anbraten, dann bei 180 °C 15 Min. im Rohr fertig garen, innen nicht rosa (mind. 70 °C)." },
    zh: { title: "芥末香草里脊排", steps: ["里脊修净，切成4厘米厚的圆块。", "把芥末酱、橄榄油、香草和柠檬汁调匀。", "肉块均匀抹上酱料，并排装袋，立即冷冻。"], freeze: "肉块并排单层装袋。", reheat: "冷藏室解冻后每面煎2分钟，再入180度烤箱15分钟，中心不带粉红（至少70度）。" },
  },
  {
    id: "schwein-filet-tikka", cuts: ["schwein-filet"], origin: "indien", art: "marinade", months: 2,
    ingredients: [["Naturjoghurt (pasteurisiert)", "原味酸奶（巴氏杀菌）", 150, "g"], ["Garam Masala", "印度综合香料", 2, "TL"], ["Paprikapulver edelsüß", "甜椒粉", 1, "TL"], ["Knoblauch", "大蒜", 2, "Zehe"], ["Ingwer", "姜", 15, "g"]],
    de: { title: "Mildes Joghurt-Tikka", steps: ["Filet in mundgerechte Würfel schneiden.", "Knoblauch und Ingwer reiben, mit Joghurt und Gewürzen verrühren.", "Fleisch darin wenden, flach verpacken und sofort einfrieren."], freeze: "Flach im Beutel.", reheat: "Im Kühlschrank auftauen, auf einem Blech bei 220 °C 18–20 Min. backen, bis alles durch ist." },
    zh: { title: "温和酸奶提卡肉", steps: ["里脊切一口大小的丁。", "蒜和姜磨泥，与酸奶和香料调匀。", "肉丁裹匀腌料，压平装袋，立即冷冻。"], freeze: "平放装袋冷冻。", reheat: "冷藏室解冻后铺在烤盘上，220度烤18–20分钟至熟透。" },
  },

  // ── Schweineschulter / Nacken ────────────────────────────────
  {
    id: "schwein-schulter-charsiu", cuts: ["schwein-schulter"], origin: "china", art: "gegart", months: 2,
    ingredients: [["Natriumarme Sojasauce", "低钠生抽", 2, "EL"], ["Hoisinsauce", "海鲜酱", 1, "EL"], ["Honig", "蜂蜜", 1, "EL"], ["Fünf-Gewürze-Pulver", "五香粉", 1, "TL"], ["Knoblauch", "大蒜", 2, "Zehe"]],
    de: { title: "Char Siu aus dem Rohr", steps: ["Würzzutaten verrühren und ein Drittel zum Bestreichen getrennt kühl stellen; Fleisch in 4 cm dicke Streifen schneiden und mit dem Rest über Nacht im Kühlschrank marinieren.", "Rohe Marinade abstreifen und wegwerfen; auf einem Rost bei 200 °C 40 Min. braten, einmal wenden und mit der beiseitegestellten Sauce bestreichen, bis es innen mindestens 75 °C hat.", "Rasch abkühlen, in Scheiben schneiden und portionsweise einfrieren."], freeze: "Scheiben mit etwas Bratensaft, flach verpackt.", reheat: "Im Kühlschrank auftauen oder gefroren zugedeckt bei 170 °C 20–25 Min. durch und durch erhitzen." },
    zh: { title: "烤叉烧", steps: ["调料调匀，取三分之一另装冷藏留作刷酱；肉切成4厘米厚的长条，用其余调料在冰箱冷藏腌一夜。", "刮掉并倒掉生腌料；放烤架上200度烤40分钟，中途翻面并刷上预留的酱，至中心达到75度以上。", "快速放凉，切片分份冷冻。"], freeze: "带少许肉汁，平放包装。", reheat: "冷藏室解冻，或冷冻状态盖好以170度加热20–25分钟至热透。" },
  },
  {
    id: "schwein-schulter-bulgogi", cuts: ["schwein-schulter"], origin: "korea", art: "marinade", months: 2,
    ingredients: [["Birne", "梨", 100, "g"], ["Natriumarme Sojasauce", "低钠生抽", 2, "EL"], ["Sesamöl", "香油", 1, "EL"], ["Knoblauch", "大蒜", 3, "Zehe"], ["Zwiebel", "洋葱", 100, "g"], ["Gochugaru (nach Wunsch)", "韩式辣椒粉（可选）", 1, "TL"]],
    de: { title: "Schweine-Bulgogi mit Birne", steps: ["Frisches Fleisch mit einem scharfen Messer hauchdünn schneiden.", "Birne und Knoblauch reiben, mit Sojasauce, Sesamöl und nach Wunsch Chiliflocken verrühren.", "Fleisch und Zwiebelstreifen einmassieren, flach verpacken und sofort einfrieren."], freeze: "Dünne flache Platten im Beutel.", reheat: "Im Kühlschrank auftauen, portionsweise in heißer Pfanne 6–7 Min. braten, bis alles vollständig durch ist." },
    zh: { title: "韩式梨香烤猪肉", steps: ["新鲜肉用快刀切成极薄片。", "梨和蒜磨泥，与生抽、香油及可选的辣椒粉调匀。", "把肉和洋葱丝抓匀，压平装袋，立即冷冻。"], freeze: "压成薄片装袋冷冻。", reheat: "冷藏室解冻后分批热锅翻炒6–7分钟至完全熟透。" },
  },
  {
    id: "schwein-schulter-szegediner", cuts: ["schwein-schulter"], origin: "heimisch", art: "gegart", months: 2,
    ingredients: [["Sauerkraut", "德式酸菜", 400, "g"], ["Zwiebeln", "洋葱", 200, "g"], ["Paprikapulver edelsüß", "甜椒粉", 1, "EL"], ["Kümmel", "葛缕子", 1, "TL"], ["Natriumarme Rindsuppe", "低钠牛肉汤", 400, "ml"], ["Rapsöl", "菜籽油", 1, "EL"]],
    de: { title: "Szegediner Gulasch", steps: ["Zwiebeln im Öl goldig rösten, Fleischwürfel zugeben und anbraten.", "Paprikapulver kurz mitrösten, mit Suppe aufgießen, Kümmel und gespültes Kraut zugeben.", "Zugedeckt 75 Min. weich schmoren.", "Im kalten Wasserbad rasch abkühlen und portionsweise einfrieren."], freeze: "In Behältern mit etwas Rand; Sauerrahm erst beim Servieren.", reheat: "Im Kühlschrank auftauen und 10 Min. durchkochen, oder gefroren mit einem Schuss Wasser zugedeckt 30 Min. bis zum Aufkochen erhitzen." },
    zh: { title: "酸菜炖猪肉（匈牙利风味）", steps: ["用油把洋葱炒至金黄，放入肉块煎上色。", "加甜椒粉略炒，倒入肉汤，放葛缕子和冲洗过的酸菜。", "加盖小火炖75分钟至软烂。", "隔冷水快速降温，分份冷冻。"], freeze: "装盒留少许空间；酸奶油上桌时再加。", reheat: "冷藏室解冻后煮沸10分钟，或冷冻状态加少许水盖锅加热30分钟至沸腾。" },
  },
  {
    id: "schwein-schulter-adobo", cuts: ["schwein-schulter"], origin: "suedostasien", art: "gegart", months: 2,
    ingredients: [["Apfelessig", "苹果醋", 60, "ml"], ["Natriumarme Sojasauce", "低钠生抽", 3, "EL"], ["Knoblauch", "大蒜", 6, "Zehe"], ["Lorbeerblätter", "香叶", 2, "Stk"], ["Wasser", "水", 250, "ml"]],
    de: { title: "Philippinisches Adobo", steps: ["Fleisch in große Würfel schneiden und in einem schweren Topf rundum anbraten.", "Essig, Sojasauce, Wasser, zerdrückten Knoblauch und Lorbeer zugeben.", "Zugedeckt 60 Min. schmoren, dann offen 10 Min. einkochen.", "Rasch abkühlen und mit Sauce einfrieren."], freeze: "Mit Sauce in flachen Behältern.", reheat: "Gefroren mit 3 EL Wasser zugedeckt bei kleiner Hitze 25–30 Min. erhitzen, bis es sprudelnd kocht." },
    zh: { title: "菲律宾醋焖猪肉", steps: ["肉切大块，在厚底锅里煎至各面上色。", "加苹果醋、生抽、水、拍碎的蒜和香叶。", "加盖焖60分钟，再开盖收汁10分钟。", "快速放凉，连汁冷冻。"], freeze: "连汁装入扁盒。", reheat: "冷冻状态加3汤匙水，盖锅小火加热25–30分钟至完全沸腾。" },
  },
  {
    id: "schwein-schulter-souvlaki", cuts: ["schwein-schulter"], origin: "mittelmeer", art: "marinade", months: 2,
    ingredients: [["Olivenöl", "橄榄油", 2, "EL"], ["Zitronensaft", "柠檬汁", 2, "EL"], ["Oregano", "牛至", 2, "TL"], ["Knoblauch", "大蒜", 2, "Zehe"]],
    de: { title: "Zitronen-Oregano-Souvlaki", steps: ["Fleisch in 2,5 cm große Würfel schneiden.", "Öl, Zitronensaft, Oregano und gepressten Knoblauch verrühren.", "Würfel untermischen, in einer Lage verpacken und sofort einfrieren."], freeze: "Einlagig im Beutel.", reheat: "Im Kühlschrank auftauen, auf Spieße stecken und in Grillpfanne oder Rohr (220 °C) 18–20 Min. rundum durchgaren." },
    zh: { title: "柠檬牛至希腊烤肉", steps: ["肉切2.5厘米见方的块。", "橄榄油、柠檬汁、牛至和蒜泥调匀。", "拌入肉块，单层装袋，立即冷冻。"], freeze: "单层装袋冷冻。", reheat: "冷藏室解冻后穿串，用条纹锅或220度烤箱加热18–20分钟至各面熟透。" },
  },
  {
    id: "schwein-schulter-pulled", cuts: ["schwein-schulter"], origin: "heimisch", art: "basis", months: 2,
    ingredients: [["Zwiebeln", "洋葱", 150, "g"], ["Paprikapulver geräuchert", "烟熏红椒粉", 2, "TL"], ["Kreuzkümmel", "孜然", 1, "TL"], ["Passierte Tomaten", "番茄泥", 150, "g"], ["Wasser", "水", 200, "ml"]],
    de: { title: "Zupffleisch als Basis", steps: ["Fleisch im Ganzen mit den Gewürzen einreiben, Zwiebeln in einen Bräter schneiden.", "Fleisch darauflegen, Tomaten und Wasser zugeben, zugedeckt bei 150 °C etwa 3 Stunden garen (größere Stücke länger), bis es sich leicht zerzupfen lässt.", "Mit zwei Gabeln zerzupfen und mit dem Saft mischen.", "Flach ausbreiten, rasch abkühlen und portionsweise einfrieren."], freeze: "Je 150 g flach im Beutel.", reheat: "Im Kühlschrank auftauen oder gefroren mit etwas Wasser zugedeckt 20 Min. kochend heiß erwärmen; für Wraps, Reis oder Weckerl." },
    zh: { title: "手撕猪肉基底", steps: ["整块肉抹上香料，洋葱切好铺在炖锅底。", "放上肉，加番茄泥和水，加盖150度烤约3小时（肉块越大时间越长），直到能轻松撕开。", "用两把叉子撕碎，与汤汁拌匀。", "摊开快速放凉，分份冷冻。"], freeze: "每袋150克压平。", reheat: "冷藏室解冻，或冷冻状态加少许水盖锅加热20分钟至滚烫；可配卷饼、米饭或面包。" },
  },

  // ── Schweinebauch ────────────────────────────────
  {
    id: "schwein-bauch-hongshao", cuts: ["schwein-bauch"], origin: "china", art: "gegart", months: 2,
    ingredients: [["Natriumarme Sojasauce", "低钠生抽", 2, "EL"], ["Dunkle Sojasauce", "老抽", 2, "TL"], ["Kandiszucker", "冰糖", 10, "g"], ["Ingwer", "姜", 20, "g"], ["Sternanis", "八角", 2, "Stk"], ["Wasser", "水", 400, "ml"]],
    de: { title: "Rot geschmorter Bauch (Hong Shao Rou)", steps: ["Bauch in Würfel schneiden, 5 Min. blanchieren und abspülen.", "Ohne Fett anbraten, Zucker darin schmelzen, beide Sojasaucen zugeben.", "Mit Wasser, Ingwer und Sternanis zugedeckt 75 Min. schmoren.", "Rasch abkühlen, erstarrtes Fett teilweise abheben und einfrieren."], freeze: "Mit Sauce in kleinen Behältern.", reheat: "Im Kühlschrank auftauen und 10 Min. durchkochen, oder gefroren mit etwas Wasser 25–30 Min. zugedeckt erhitzen." },
    zh: { title: "红烧肉", steps: ["五花肉切块，焯水5分钟后冲净。", "干锅煎香，放冰糖化开，加生抽和老抽。", "加水、姜和八角，盖锅焖75分钟。", "快速放凉，撇去部分凝固的油脂后冷冻。"], freeze: "连汁装小盒。", reheat: "冷藏室解冻后煮沸10分钟，或冷冻状态加少许水盖锅加热25–30分钟。" },
  },
  {
    id: "schwein-bauch-lurou", cuts: ["schwein-bauch"], origin: "china", art: "gegart", months: 2,
    ingredients: [["Schalotten", "红葱头", 100, "g"], ["Getrocknete Shiitake", "干香菇", 20, "g"], ["Natriumarme Sojasauce", "低钠生抽", 3, "EL"], ["Fünf-Gewürze-Pulver", "五香粉", 1, "TL"], ["Wasser", "水", 450, "ml"]],
    de: { title: "Taiwanisches Lu-Rou-Ragout", steps: ["Shiitake einweichen und fein würfeln, Bauch in kleine Streifen schneiden.", "Schalotten goldig rösten, Fleisch zugeben und braten, bis Fett austritt; überschüssiges Fett abgießen.", "Pilze, Sojasauce, Gewürz und Wasser zugeben, 60 Min. sanft köcheln.", "Rasch abkühlen und in kleinen Portionen einfrieren."], freeze: "Portionen zu je etwa 120 g.", reheat: "Gefroren mit 2 EL Wasser zugedeckt 15–20 Min. sprudelnd erhitzen und über frischen Reis geben." },
    zh: { title: "台式卤肉", steps: ["香菇泡发切小丁，五花肉切小条。", "红葱头炒至金黄，下肉煸出油，倒掉多余油脂。", "加香菇、生抽、五香粉和水，小火卤60分钟。", "快速放凉，分小份冷冻。"], freeze: "每份约120克。", reheat: "冷冻状态加2汤匙水，盖锅加热15–20分钟至沸腾，浇在新煮的米饭上。" },
  },
  {
    id: "schwein-bauch-kakuni", cuts: ["schwein-bauch"], origin: "japan", art: "gegart", months: 2,
    ingredients: [["Daikon-Rettich", "白萝卜", 300, "g"], ["Ingwer", "姜", 20, "g"], ["Natriumarme Sojasauce", "低钠生抽", 3, "EL"], ["Honig", "蜂蜜", 2, "TL"], ["Dashi oder Wasser", "高汤或清水", 600, "ml"]],
    de: { title: "Kakuni mit Rettich", steps: ["Bauch in große Würfel schneiden, 30 Min. in Wasser vorkochen und abgießen.", "Rettich in dicke Scheiben schneiden.", "Alles mit Dashi, Ingwer, Sojasauce und Honig 60 Min. zugedeckt köcheln.", "Rasch abkühlen, Fett abheben und mit Sud einfrieren."], freeze: "Mit Sud; der Rettich wird nach dem Frieren weicher.", reheat: "Im Kühlschrank auftauen, dann 15 Min. im Sud durchgehend kochen." },
    zh: { title: "日式角煮配萝卜", steps: ["五花肉切大块，清水煮30分钟后沥出。", "萝卜切厚片。", "全部放入高汤，加姜、生抽和蜂蜜，盖锅炖60分钟。", "快速放凉，撇油后连汤冷冻。"], freeze: "连汤保存；萝卜冻后会更软。", reheat: "冷藏室解冻后带汤煮15分钟。" },
  },
  {
    id: "schwein-bauch-doenjang", cuts: ["schwein-bauch"], origin: "korea", art: "marinade", months: 1,
    ingredients: [["Doenjang (koreanische Sojabohnenpaste)", "韩式大酱", 1, "EL"], ["Knoblauch", "大蒜", 3, "Zehe"], ["Sesamöl", "香油", 2, "TL"], ["Apfelmus ungesüßt", "无糖苹果泥", 2, "EL"]],
    de: { title: "Doenjang-Bauchscheiben", steps: ["Bauch in 5 mm dünne Scheiben schneiden.", "Paste, gehackten Knoblauch, Sesamöl und Apfelmus verrühren.", "Scheiben dünn bestreichen, mit Backpapier schichten und sofort einfrieren."], freeze: "Geschichtet mit Backpapier im Beutel.", reheat: "Im Kühlschrank auftauen, bei mittlerer Hitze 4–5 Min. je Seite knusprig durchbraten." },
    zh: { title: "大酱腌五花肉片", steps: ["五花肉切5毫米薄片。", "大酱、蒜末、香油和苹果泥调匀。", "肉片薄薄抹酱，垫烘焙纸叠放，立即冷冻。"], freeze: "垫纸分层装袋。", reheat: "冷藏室解冻后中火每面煎4–5分钟，至焦香熟透。" },
  },
  {
    id: "schwein-bauch-thitkho", cuts: ["schwein-bauch"], origin: "suedostasien", art: "gegart", months: 2,
    ingredients: [["Kokoswasser ungesüßt", "无糖椰子水", 400, "ml"], ["Fischsauce", "鱼露", 1, "EL"], ["Schalotten", "红葱头", 60, "g"], ["Hartgekochte Eier", "熟鸡蛋", 4, "Stk"], ["Schwarzer Pfeffer", "黑胡椒", 1, "Prise"]],
    de: { title: "Vietnamesischer Kokoswasser-Schmortopf", steps: ["Bauch in Würfel schneiden und mit Schalotten kräftig anbraten.", "Mit Kokoswasser, Fischsauce und Pfeffer 60 Min. weich köcheln.", "Rasch abkühlen und ohne Eier einfrieren; die Eier erst beim Aufwärmen frisch kochen."], freeze: "Mit Sauce, ohne Eier (sie würden gummiartig).", reheat: "Gefroren zugedeckt 25 Min. erhitzen, bis es sprudelt, frisch hartgekochte Eier zugeben und 10 Min. mitziehen lassen." },
    zh: { title: "越南椰子水焖肉", steps: ["五花肉切块，与红葱头大火煎香。", "加椰子水、鱼露和胡椒，小火炖60分钟至软。", "快速放凉，不带鸡蛋冷冻；鸡蛋等加热时现煮。"], freeze: "连汁保存，不放鸡蛋（冻后口感发硬）。", reheat: "冷冻状态盖锅加热25分钟至沸腾，放入现煮的全熟蛋再浸煮10分钟。" },
  },
  {
    id: "schwein-bauch-knusprig-basis", cuts: ["schwein-bauch"], origin: "china", art: "basis", months: 2,
    ingredients: [["Ingwer", "姜", 20, "g"], ["Frühlingszwiebeln", "小葱", 2, "Stk"], ["Sichuanpfeffer", "花椒", 1, "TL"], ["Wasser", "水", 1000, "ml"]],
    de: { title: "Vorgekochter Bauch für Zweimal-gebraten", steps: ["Bauch im Ganzen mit Wasser, Ingwer, Zwiebeln und Pfefferkörnern aufkochen.", "40 Min. köcheln, bis er innen vollständig gar ist.", "Im Eiswasser rasch abkühlen, trocken tupfen und in dünne Scheiben schneiden.", "Flach verpacken und sofort einfrieren."], freeze: "Scheiben flach in Portionsbeuteln.", reheat: "Gefroren Scheiben trennen und mit Lauch und Paprika 8–10 Min. braten, bis sie durch und durch heiß sind." },
    zh: { title: "回锅肉用熟五花", steps: ["整块五花肉加水、姜、葱和花椒煮开。", "小火煮40分钟至中心完全熟透。", "泡冰水快速降温，擦干切薄片。", "平铺包装，立即冷冻。"], freeze: "薄片平放分袋。", reheat: "冷冻肉片拨散，与大葱和彩椒翻炒8–10分钟至热透。" },
  },

  // ── Rippchen ────────────────────────────────
  {
    id: "schwein-rippen-suppe-mais", cuts: ["schwein-rippen"], origin: "china", art: "gegart", months: 2,
    ingredients: [["Maiskolben", "玉米", 2, "Stk"], ["Karotten", "胡萝卜", 200, "g"], ["Ingwer", "姜", 15, "g"], ["Wasser", "水", 1500, "ml"]],
    de: { title: "Rippchen-Mais-Suppe", steps: ["Rippchen 5 Min. blanchieren und abspülen.", "Mit Wasser und Ingwer 45 Min. köcheln.", "Mais- und Karottenstücke zugeben und weitere 30 Min. garen.", "Im Wasserbad rasch abkühlen und portionsweise einfrieren."], freeze: "Mit Brühe, 3 cm Rand im Behälter lassen.", reheat: "Im Kühlschrank auftauen und 10 Min. kochen, oder gefroren zugedeckt 35 Min. erhitzen, bis alles sprudelt; erst dann salzen." },
    zh: { title: "玉米排骨汤", steps: ["排骨焯水5分钟后冲净。", "加水和姜小火煮45分钟。", "放玉米段和胡萝卜块再煮30分钟。", "隔水快速降温，分份冷冻。"], freeze: "连汤装盒，留3厘米空间。", reheat: "冷藏室解冻后煮10分钟，或冷冻状态盖锅加热35分钟至滚沸，最后再调盐。" },
  },
  {
    id: "schwein-rippen-doushi", cuts: ["schwein-rippen"], origin: "china", art: "marinade", months: 2,
    ingredients: [["Schwarzbohnen-Knoblauch-Sauce (ohne Alkohol)", "蒜蓉豆豉酱（无酒精）", 1, "EL"], ["Speisestärke", "淀粉", 1, "EL"], ["Knoblauch", "大蒜", 3, "Zehe"], ["Sesamöl", "香油", 2, "TL"]],
    de: { title: "Dampf-Rippchen mit Schwarzbohnen", steps: ["In kleine Stücke gehackte Rippchen wässern, abspülen und gut trocken tupfen.", "Bohnensauce, gehackten Knoblauch, Stärke und Sesamöl untermischen.", "Flach in Portionen verpacken und sofort einfrieren."], freeze: "Einlagige Portionen, passend für einen Dämpfteller.", reheat: "Direkt gefroren auf einem tiefen Teller 40–45 Min. kräftig dämpfen, einmal auflockern, bis das Fleisch am Knochen durch ist." },
    zh: { title: "豉汁蒸排骨", steps: ["小块排骨泡去血水，冲净并擦干。", "拌入豆豉酱、蒜末、淀粉和香油。", "按份压平包装，立即冷冻。"], freeze: "单层分份，大小适合蒸盘。", reheat: "无需解冻，放深盘中大火蒸40–45分钟，中途拨散，至贴骨处熟透。" },
  },
  {
    id: "schwein-rippen-tangcu", cuts: ["schwein-rippen"], origin: "china", art: "gegart", months: 2,
    ingredients: [["Schwarzer Reisessig", "香醋", 3, "EL"], ["Natriumarme Sojasauce", "低钠生抽", 2, "EL"], ["Brauner Zucker", "红糖", 15, "g"], ["Ingwer", "姜", 15, "g"], ["Wasser", "水", 400, "ml"]],
    de: { title: "Essig-Rippchen, mild süßsauer", steps: ["Rippchen 5 Min. blanchieren, abspülen und rundum anbraten.", "Sojasauce, Zucker, Ingwer, Wasser und die Hälfte vom Essig zugeben.", "45 Min. schmoren, restlichen Essig zugeben und sämig einkochen.", "Rasch abkühlen und einfrieren."], freeze: "Mit Sauce in flachen Behältern.", reheat: "Gefroren mit 4 EL Wasser zugedeckt 25–30 Min. erhitzen, bis die Sauce kocht." },
    zh: { title: "少糖糖醋排骨", steps: ["排骨焯水5分钟，冲净后煎上色。", "加生抽、红糖、姜、水和一半香醋。", "焖45分钟，加入剩下的醋收浓汤汁。", "快速放凉后冷冻。"], freeze: "连汁装扁盒。", reheat: "冷冻状态加4汤匙水，盖锅加热25–30分钟至汤汁沸腾。" },
  },
  {
    id: "schwein-rippen-ofen", cuts: ["schwein-rippen"], origin: "heimisch", art: "gegart", months: 2,
    ingredients: [["Paprikapulver edelsüß", "甜椒粉", 2, "TL"], ["Kümmel", "葛缕子", 1, "TL"], ["Knoblauch", "大蒜", 3, "Zehe"], ["Rapsöl", "菜籽油", 1, "EL"], ["Wasser", "水", 150, "ml"]],
    de: { title: "Ofenripperl vorgegart", steps: ["Ripperl mit Öl, Gewürzen und gepresstem Knoblauch einreiben.", "Mit Wasser in eine Form legen und zugedeckt bei 160 °C 90 Min. weich garen.", "Rasch abkühlen, in Portionen teilen und mit etwas Saft einfrieren."], freeze: "Portionsstücke dicht verpackt.", reheat: "Im Kühlschrank auftauen und bei 200 °C 20 Min. knusprig durchhitzen; gefroren zugedeckt 35 Min., dann 10 Min. offen." },
    zh: { title: "预烤香料肋排", steps: ["肋排抹上油、香料和蒜泥。", "放入烤盘加水，盖好160度烤90分钟至软。", "快速放凉，分份并带少许肉汁冷冻。"], freeze: "分份密封包装。", reheat: "冷藏室解冻后200度烤20分钟至焦香热透；冷冻状态先盖烤35分钟，再开盖10分钟。" },
  },
  {
    id: "schwein-rippen-bakkutteh", cuts: ["schwein-rippen"], origin: "suedostasien", art: "gegart", months: 2,
    ingredients: [["Knoblauch (ganze Knolle)", "大蒜（整瓣）", 10, "Zehe"], ["Weiße Pfefferkörner", "白胡椒粒", 2, "TL"], ["Sternanis", "八角", 1, "Stk"], ["Zimtstange", "桂皮", 1, "Stk"], ["Natriumarme Sojasauce", "低钠生抽", 1, "EL"], ["Wasser", "水", 1300, "ml"]],
    de: { title: "Pfeffrig-milde Knoblauch-Rippensuppe", steps: ["Rippchen blanchieren und abspülen; Pfefferkörner leicht zerdrücken.", "Mit Knoblauch, Gewürzen und Wasser 75 Min. sanft köcheln.", "Mit Sojasauce abschmecken, rasch abkühlen und einfrieren."], freeze: "Mit Brühe, etwas Rand lassen.", reheat: "Gefroren zugedeckt etwa 35 Min. erhitzen und dann 5 Min. sprudelnd kochen." },
    zh: { title: "清香蒜头肉骨汤", steps: ["排骨焯水冲净，胡椒粒略拍碎。", "加蒜、香料和水小火煲75分钟。", "用生抽调味，快速放凉后冷冻。"], freeze: "连汤装盒，留出空间。", reheat: "冷冻状态盖锅加热约35分钟，再滚煮5分钟。" },
  },
  {
    id: "schwein-rippen-gamjatang", cuts: ["schwein-rippen"], origin: "korea", art: "basis", months: 2,
    ingredients: [["Ingwer", "姜", 20, "g"], ["Zwiebel", "洋葱", 150, "g"], ["Knoblauch", "大蒜", 5, "Zehe"], ["Doenjang (koreanische Sojabohnenpaste)", "韩式大酱", 1, "EL"], ["Wasser", "水", 1500, "ml"]],
    de: { title: "Suppenbasis für Kartoffel-Rippen-Eintopf", steps: ["Rippchen 10 Min. blanchieren und gründlich abspülen.", "Mit Wasser, Zwiebel, Ingwer, Knoblauch und Paste 70 Min. köcheln, bis das Fleisch gar ist.", "Aromaten entfernen, rasch abkühlen und Fleisch mit Brühe einfrieren."], freeze: "Fleisch und Brühe zusammen, Gemüse erst frisch.", reheat: "Gefroren aufsetzen, nach dem Auftauen Erdäpfel und Chinakohl zugeben und insgesamt etwa 50 Min. kochen." },
    zh: { title: "排骨土豆汤底", steps: ["排骨焯水10分钟，彻底冲净。", "加水、洋葱、姜、蒜和大酱煮70分钟至肉熟。", "捞出香料，快速放凉，肉和汤一起冷冻。"], freeze: "肉汤同装，蔬菜现加。", reheat: "冷冻状态下锅，化开后加土豆和大白菜，总共煮约50分钟。" },
  },

  // ── Schweinekoteletts ────────────────────────────────
  {
    id: "schwein-kotelett-paigu", cuts: ["schwein-kotelett"], origin: "china", art: "marinade", months: 2,
    ingredients: [["Natriumarme Sojasauce", "低钠生抽", 2, "EL"], ["Fünf-Gewürze-Pulver", "五香粉", 1, "TL"], ["Knoblauch", "大蒜", 3, "Zehe"], ["Süßkartoffelstärke", "红薯淀粉", 2, "EL"], ["Sesamöl", "香油", 1, "TL"]],
    de: { title: "Taiwanische Fünf-Gewürze-Koteletts", steps: ["Koteletts mit dem Messerrücken klopfen und den Fettrand einschneiden.", "Sojasauce, Gewürz, Knoblauch und Sesamöl einmassieren.", "Einzeln mit Backpapier trennen und sofort einfrieren; die Stärke erst später verwenden."], freeze: "Einzeln getrennt, flach.", reheat: "Im Kühlschrank auftauen, in Stärke wenden und 5–6 Min. je Seite braten, bis auch am Knochen nichts rosa ist." },
    zh: { title: "台式五香排骨肉", steps: ["猪排用刀背拍松，筋膜处划几刀。", "抹上生抽、五香粉、蒜末和香油。", "用烘焙纸逐片隔开，立即冷冻；淀粉以后再裹。"], freeze: "逐片隔开平放。", reheat: "冷藏室解冻后裹红薯淀粉，每面煎5–6分钟，至贴骨处没有粉红色。" },
  },
  {
    id: "schwein-kotelett-miso", cuts: ["schwein-kotelett"], origin: "japan", art: "marinade", months: 2,
    ingredients: [["Helle Misopaste (ohne Alkohol)", "白味噌（无酒精）", 2, "EL"], ["Apfel", "苹果", 80, "g"], ["Ingwer", "姜", 10, "g"], ["Sesamöl", "香油", 1, "TL"]],
    de: { title: "Miso-Apfel-Koteletts", steps: ["Koteletts trocken tupfen und den Fettrand einschneiden.", "Apfel und Ingwer reiben, mit Miso und Sesamöl glatt rühren.", "Dünn auftragen, einzeln verpacken und sofort einfrieren."], freeze: "Einzeln im Beutel.", reheat: "Im Kühlschrank auftauen, Paste abstreifen, 2 Min. je Seite anbraten und zugedeckt 8 Min. durchgaren." },
    zh: { title: "味噌苹果猪排", steps: ["猪排擦干，肥边划几刀。", "苹果和姜磨泥，与味噌和香油调匀。", "薄薄抹上酱，单片包装，立即冷冻。"], freeze: "单片装袋。", reheat: "冷藏室解冻后抹去多余酱料，每面煎2分钟，再盖锅焖8分钟至熟透。" },
  },
  {
    id: "schwein-kotelett-zwiebel", cuts: ["schwein-kotelett"], origin: "heimisch", art: "gegart", months: 2,
    ingredients: [["Zwiebeln", "洋葱", 300, "g"], ["Natriumarme Rindsuppe", "低钠牛肉汤", 300, "ml"], ["Majoran", "马郁兰", 1, "TL"], ["Dinkelmehl", "斯佩耳特面粉", 1, "EL"], ["Rapsöl", "菜籽油", 1, "EL"]],
    de: { title: "Zwiebelkoteletts im Saftl", steps: ["Koteletts im Öl beidseitig anbraten und herausnehmen.", "Zwiebeln goldig rösten, mit Mehl stauben, Suppe und Majoran zugeben.", "Koteletts zurücklegen und zugedeckt 35 Min. schmoren.", "Rasch abkühlen und mit dem Saft einfrieren."], freeze: "Mit Sauce nebeneinander in flachen Behältern.", reheat: "Im Kühlschrank auftauen und zugedeckt 15 Min. köcheln, oder gefroren bei 180 °C zugedeckt 40–45 Min. erhitzen." },
    zh: { title: "洋葱肉汁焖猪排", steps: ["猪排用油两面煎上色后盛出。", "洋葱炒金黄，撒面粉，倒入肉汤和马郁兰。", "猪排放回，盖锅焖35分钟。", "快速放凉，连汁冷冻。"], freeze: "带汁并排装扁盒。", reheat: "冷藏室解冻后盖锅煮15分钟，或冷冻状态180度盖好加热40–45分钟。" },
  },
  {
    id: "schwein-kotelett-lemongrass", cuts: ["schwein-kotelett"], origin: "suedostasien", art: "marinade", months: 2,
    ingredients: [["Zitronengras", "香茅", 2, "Stk"], ["Fischsauce", "鱼露", 1, "EL"], ["Schalotte", "红葱头", 40, "g"], ["Limettensaft", "青柠汁", 1, "EL"], ["Honig", "蜂蜜", 1, "TL"], ["Rapsöl", "菜籽油", 1, "EL"]],
    de: { title: "Zitronengras-Koteletts auf vietnamesische Art", steps: ["Koteletts flach klopfen.", "Zitronengras und Schalotte sehr fein hacken, mit den übrigen Zutaten verrühren.", "Koteletts einreiben, einzeln trennen und sofort einfrieren."], freeze: "Flach, mit Backpapier getrennt.", reheat: "Im Kühlschrank auftauen und in Pfanne oder Grillpfanne 5–6 Min. je Seite vollständig durchbraten." },
    zh: { title: "越式香茅猪排", steps: ["猪排拍平。", "香茅和红葱头切极细末，与其余调料拌匀。", "抹匀猪排，逐片隔开，立即冷冻。"], freeze: "垫纸隔开平放。", reheat: "冷藏室解冻后用平底锅或条纹锅每面煎5–6分钟至完全熟透。" },
  },
  {
    id: "schwein-kotelett-zaatar", cuts: ["schwein-kotelett"], origin: "orient", art: "marinade", months: 2,
    ingredients: [["Za'atar", "扎塔香料", 1, "EL"], ["Olivenöl", "橄榄油", 2, "EL"], ["Zitronenschale", "柠檬皮屑", 1, "TL"], ["Knoblauch", "大蒜", 1, "Zehe"]],
    de: { title: "Za'atar-Zitronen-Koteletts", steps: ["Koteletts trocken tupfen.", "Za'atar mit Öl, Zitronenschale und Knoblauch zu einer Paste rühren.", "Fleisch bestreichen, einzeln verpacken und sofort einfrieren."], freeze: "Einzeln flach verpackt.", reheat: "Im Kühlschrank auftauen, anbraten und bei 180 °C im Rohr 15 Min. fertig garen, bis nichts mehr rosa ist." },
    zh: { title: "扎塔柠檬猪排", steps: ["猪排擦干。", "扎塔香料与橄榄油、柠檬皮屑和蒜调成糊。", "均匀抹在肉上，单片包装，立即冷冻。"], freeze: "单片平放包装。", reheat: "冷藏室解冻后先煎上色，再入180度烤箱15分钟至没有粉红色。" },
  },
  {
    id: "schwein-kotelett-tomate", cuts: ["schwein-kotelett"], origin: "mittelmeer", art: "gegart", months: 2,
    ingredients: [["Passierte Tomaten", "番茄泥", 400, "g"], ["Paprika", "彩椒", 200, "g"], ["Zwiebel", "洋葱", 150, "g"], ["Oregano", "牛至", 2, "TL"], ["Olivenöl", "橄榄油", 1, "EL"]],
    de: { title: "Pizzaiola-Koteletts", steps: ["Koteletts kurz im Öl anbraten und beiseitestellen.", "Zwiebel und Paprika anschwitzen, Tomaten und Oregano zugeben.", "Koteletts in der Sauce 30 Min. zugedeckt gar schmoren.", "Rasch abkühlen und einfrieren."], freeze: "Fleisch ganz mit Sauce bedecken.", reheat: "Gefroren mit 3 EL Wasser zugedeckt bei kleiner Hitze 30–35 Min. erhitzen, bis es kocht." },
    zh: { title: "意式番茄焖猪排", steps: ["猪排用油略煎后盛出。", "炒软洋葱和彩椒，加番茄泥和牛至。", "猪排放入酱中盖锅焖30分钟至熟。", "快速放凉后冷冻。"], freeze: "让酱汁盖住肉。", reheat: "冷冻状态加3汤匙水，盖锅小火加热30–35分钟至煮开。" },
  },

  // ── Hackfleisch ────────────────────────────────
  {
    id: "schwein-hack-jiaozi", cuts: ["schwein-hack"], origin: "china", art: "marinade", months: 1,
    ingredients: [["Chinakohl", "大白菜", 300, "g"], ["Teigblätter für Jiaozi", "饺子皮", 50, "Stk"], ["Ingwer", "姜", 15, "g"], ["Frühlingszwiebeln", "小葱", 3, "Stk"], ["Natriumarme Sojasauce", "低钠生抽", 2, "EL"], ["Sesamöl", "香油", 1, "EL"]],
    de: { title: "Jiaozi mit Chinakohl", steps: ["Kohl fein hacken, leicht ziehen lassen und fest ausdrücken.", "Mit Fleisch, Ingwer, Zwiebeln, Sojasauce und Sesamöl kräftig in eine Richtung rühren.", "Teigblätter füllen und gut verschließen.", "Einzeln auf einem Blech vorfrieren, dann in Beutel umfüllen."], freeze: "Vorgefroren lose im Beutel.", reheat: "Direkt gefroren in kochendes Wasser geben, nach dem Aufschwimmen noch 5 Min. kochen (insgesamt etwa 10 Min.), Füllung vollständig durch." },
    zh: { title: "白菜猪肉饺", steps: ["白菜剁碎，略腌后挤干水分。", "与肉、姜、葱、生抽和香油顺一个方向搅打上劲。", "包入饺子皮，捏紧封口。", "平铺烤盘预冻后装袋。"], freeze: "预冻后散装入袋。", reheat: "无需解冻直接下开水，浮起后再煮5分钟（共约10分钟），确保馅全熟。" },
  },
  {
    id: "schwein-hack-shizitou", cuts: ["schwein-hack"], origin: "china", art: "gegart", months: 2,
    ingredients: [["Wasserkastanien", "马蹄", 80, "g"], ["Eier", "鸡蛋", 1, "Stk"], ["Ingwer", "姜", 15, "g"], ["Natriumarme Sojasauce", "低钠生抽", 2, "EL"], ["Speisestärke", "淀粉", 1, "EL"], ["Natriumarme Hühnersuppe", "低钠鸡汤", 700, "ml"]],
    de: { title: "Löwenkopf-Fleischbällchen", steps: ["Kastanien hacken und mit Fleisch, Ei, Ingwer, Sojasauce und Stärke verkneten.", "Große Kugeln formen.", "In der siedenden Suppe zugedeckt 45 Min. gar ziehen lassen.", "Rasch abkühlen und mit Suppe einfrieren."], freeze: "Bällchen mit Suppe in Behältern.", reheat: "Im Kühlschrank auftauen und 15 Min. köcheln, oder gefroren 40 Min. zugedeckt erhitzen, bis die Mitte kochend heiß ist." },
    zh: { title: "清炖狮子头", steps: ["马蹄切碎，与肉、鸡蛋、姜、生抽和淀粉搅匀。", "团成大肉丸。", "放入微沸的鸡汤中盖锅炖45分钟。", "快速放凉，连汤冷冻。"], freeze: "肉丸连汤装盒。", reheat: "冷藏室解冻后煮15分钟，或冷冻状态盖锅加热40分钟至中心滚烫。" },
  },
  {
    id: "schwein-hack-gyoza", cuts: ["schwein-hack"], origin: "japan", art: "marinade", months: 1,
    ingredients: [["Weißkraut", "卷心菜", 250, "g"], ["Gyoza-Blätter", "日式饺子皮", 45, "Stk"], ["Schnittknoblauch", "韭菜", 50, "g"], ["Knoblauch", "大蒜", 2, "Zehe"], ["Natriumarme Sojasauce", "低钠生抽", 1, "EL"], ["Sesamöl", "香油", 2, "TL"]],
    de: { title: "Knusprige Gyoza", steps: ["Kraut und Schnittknoblauch fein hacken, Kraut ausdrücken.", "Mit Fleisch, Knoblauch, Sojasauce und Sesamöl verkneten.", "Dünn in die Blätter füllen und mit Falten verschließen.", "Auf einem Blech vorfrieren und dann verpacken."], freeze: "Vorgefroren, sofort verschlossen.", reheat: "Gefroren in geölter Pfanne anbraten, 100 ml Wasser zugeben, zugedeckt 9–10 Min. dämpfen und offen knusprig braten." },
    zh: { title: "日式煎饺", steps: ["卷心菜和韭菜切碎，卷心菜挤干。", "与肉、蒜、生抽和香油拌匀。", "皮中包入薄薄一层馅，打褶封口。", "放烤盘预冻后包装。"], freeze: "预冻后密封。", reheat: "冷冻状态放入抹油的锅中略煎，加100毫升水，盖锅焖9–10分钟，开盖煎脆。" },
  },
  {
    id: "schwein-hack-larb", cuts: ["schwein-hack"], origin: "suedostasien", art: "basis", months: 2,
    ingredients: [["Zitronengras", "香茅", 1, "Stk"], ["Schalotten", "红葱头", 80, "g"], ["Fischsauce", "鱼露", 1, "EL"], ["Knoblauch", "大蒜", 3, "Zehe"], ["Rapsöl", "菜籽油", 1, "EL"]],
    de: { title: "Zitronengras-Hack für Salatwraps", steps: ["Zitronengras, Schalotten und Knoblauch fein hacken und im Öl anschwitzen.", "Hack zugeben und krümelig braten, bis es vollständig durchgegart ist.", "Mit Fischsauce würzen, flach ausbreiten, rasch abkühlen und einfrieren."], freeze: "Flach in kleinen Beuteln.", reheat: "Gefroren mit 2 EL Wasser 8–10 Min. kochend heiß braten, dann mit Limette und frischen Kräutern servieren." },
    zh: { title: "香茅肉末（生菜包用）", steps: ["香茅、红葱头和蒜切末，用油炒香。", "下肉末炒散至完全熟透。", "加鱼露调味，摊开快速放凉后冷冻。"], freeze: "分小袋压平。", reheat: "冷冻状态加2汤匙水翻炒8–10分钟至滚烫，配青柠和新鲜香草。" },
  },
  {
    id: "schwein-hack-bolognese", cuts: ["schwein-hack", "rind-hack"], origin: "mittelmeer", art: "gegart", months: 2,
    ingredients: [["Passierte Tomaten", "番茄泥", 600, "g"], ["Karotten", "胡萝卜", 150, "g"], ["Stangensellerie", "西芹", 100, "g"], ["Zwiebel", "洋葱", 150, "g"], ["Oregano", "牛至", 2, "TL"], ["Olivenöl", "橄榄油", 1, "EL"]],
    de: { title: "Gemüsereiches Sugo Bolognese", steps: ["Gemüse sehr fein würfeln und im Öl anschwitzen.", "Hack zugeben und krümelig braten, bis nichts mehr rosa ist.", "Tomaten und Oregano zugeben und 45 Min. köcheln.", "Rasch abkühlen und portionsweise einfrieren."], freeze: "Flach im Beutel oder in Gläsern mit viel Rand.", reheat: "Gefroren mit einem Schuss Wasser zugedeckt 20–25 Min. erhitzen und kurz sprudelnd kochen." },
    zh: { title: "蔬菜番茄肉酱", steps: ["蔬菜切细丁，用橄榄油炒软。", "下肉末炒散至没有粉红色。", "加番茄泥和牛至小火煮45分钟。", "快速放凉，分份冷冻。"], freeze: "装袋压平，或装罐留足空间。", reheat: "冷冻状态加少许水，盖锅加热20–25分钟并滚煮片刻。" },
  },
  {
    id: "schwein-hack-laibchen", cuts: ["schwein-hack", "rind-hack"], origin: "heimisch", art: "gegart", months: 2,
    ingredients: [["Eier", "鸡蛋", 1, "Stk"], ["Haferflocken", "燕麦片", 50, "g"], ["Zwiebel", "洋葱", 100, "g"], ["Majoran", "马郁兰", 2, "TL"], ["Senf (ohne Alkohol)", "芥末酱（无酒精）", 2, "TL"], ["Rapsöl", "菜籽油", 2, "EL"]],
    de: { title: "Fleischlaibchen mit Hafer", steps: ["Zwiebel anschwitzen und mit Fleisch, Ei, Haferflocken, Majoran und Senf verkneten.", "Flache Laibchen formen.", "Im Öl je Seite 6–7 Min. braten, bis sie innen mindestens 70 °C haben.", "Rasch abkühlen, einzeln vorfrieren und verpacken."], freeze: "Einzeln vorgefroren im Beutel.", reheat: "Gefroren bei 180 °C 25 Min. im Rohr erhitzen, bis die Mitte dampfend heiß ist." },
    zh: { title: "燕麦煎肉饼", steps: ["洋葱炒软，与肉、鸡蛋、燕麦、马郁兰和芥末酱拌匀。", "做成扁圆肉饼。", "用油每面煎6–7分钟，至中心达到70度以上。", "快速放凉，单个预冻后包装。"], freeze: "单个预冻后装袋。", reheat: "冷冻状态入180度烤箱25分钟，至中心热气腾腾。" },
  },
  {
    id: "rind-hack-chili", cuts: ["schwein-hack", "rind-hack"], origin: "heimisch", art: "gegart", months: 2,
    ingredients: [["Gekochte Kidneybohnen", "熟红腰豆", 400, "g"], ["Passierte Tomaten", "番茄泥", 400, "g"], ["Paprika", "彩椒", 200, "g"], ["Zwiebel", "洋葱", 150, "g"], ["Kreuzkümmel", "孜然", 2, "TL"], ["Chiliflocken (nach Wunsch)", "辣椒碎（可选）", 1, "Prise"]],
    de: { title: "Milder Bohnen-Fleischtopf", steps: ["Zwiebel und Paprika würfeln und anschwitzen.", "Hack zugeben und vollständig durchbraten, Gewürze kurz mitrösten.", "Tomaten und Bohnen zugeben und 35 Min. köcheln.", "Rasch abkühlen und einfrieren."], freeze: "Portionsweise mit etwas Rand.", reheat: "Im Kühlschrank auftauen und 10 Min. kochen, oder gefroren zugedeckt 30 Min. unter Rühren erhitzen." },
    zh: { title: "温和豆子肉末煲", steps: ["洋葱和彩椒切丁炒软。", "下肉末炒至熟透，加香料略炒。", "加番茄泥和豆子煮35分钟。", "快速放凉后冷冻。"], freeze: "分份装盒，留少许空间。", reheat: "冷藏室解冻后煮10分钟，或冷冻状态盖锅边搅边加热30分钟。" },
  },
  {
    id: "rind-hack-kofta", cuts: ["rind-hack"], origin: "orient", art: "marinade", months: 1,
    ingredients: [["Zwiebel", "洋葱", 100, "g"], ["Petersilie", "欧芹", 15, "g"], ["Kreuzkümmel", "孜然", 2, "TL"], ["Koriander gemahlen", "香菜籽粉", 1, "TL"], ["Zimt", "肉桂粉", 1, "Prise"]],
    de: { title: "Kofta-Röllchen", steps: ["Zwiebel reiben und ausdrücken, Petersilie fein hacken.", "Mit Fleisch und Gewürzen kurz verkneten und längliche Röllchen formen.", "Sofort auf einem Blech vorfrieren und verpacken."], freeze: "Vorgefroren, dicht verschlossen.", reheat: "Direkt gefroren bei 200 °C 25 Min. backen, einmal wenden, Kerntemperatur mindestens 70 °C." },
    zh: { title: "中东香料牛肉卷", steps: ["洋葱磨碎挤干，欧芹切末。", "与肉和香料略拌匀，搓成长条肉卷。", "立即放烤盘预冻后包装。"], freeze: "预冻后密封。", reheat: "无需解冻，200度烤25分钟，中途翻面，中心至少70度。" },
  },
  {
    id: "rind-hack-keema", cuts: ["rind-hack"], origin: "indien", art: "gegart", months: 2,
    ingredients: [["Erbsen", "青豆", 150, "g"], ["Tomaten gewürfelt", "番茄丁", 300, "g"], ["Zwiebel", "洋葱", 150, "g"], ["Ingwer", "姜", 20, "g"], ["Garam Masala", "印度综合香料", 2, "TL"], ["Kurkuma gemahlen", "姜黄粉", 1, "TL"]],
    de: { title: "Keema mit Erbsen", steps: ["Zwiebel und Ingwer anrösten, Gewürze zugeben.", "Hack dazugeben und krümelig vollständig durchbraten.", "Tomaten zugeben, 25 Min. köcheln, zuletzt Erbsen 5 Min. mitgaren.", "Rasch abkühlen und einfrieren."], freeze: "Flach in Portionsbeuteln.", reheat: "Gefroren mit 3 EL Wasser zugedeckt 20 Min. erhitzen, bis alles sprudelnd heiß ist." },
    zh: { title: "青豆牛肉末咖喱", steps: ["洋葱和姜炒香，加香料。", "下牛肉末炒散至熟透。", "加番茄丁煮25分钟，最后放青豆煮5分钟。", "快速放凉后冷冻。"], freeze: "分袋压平。", reheat: "冷冻状态加3汤匙水，盖锅加热20分钟至滚热。" },
  },
  {
    id: "rind-hack-soboro", cuts: ["rind-hack"], origin: "japan", art: "basis", months: 2,
    ingredients: [["Ingwer", "姜", 20, "g"], ["Natriumarme Sojasauce", "低钠生抽", 2, "EL"], ["Honig", "蜂蜜", 2, "TL"], ["Karotten", "胡萝卜", 150, "g"]],
    de: { title: "Ingwer-Soboro", steps: ["Ingwer und Karotten sehr fein hacken.", "Mit dem Hack in der Pfanne unter Rühren vollständig durchbraten.", "Sojasauce und Honig einrühren, bis die Flüssigkeit verkocht ist.", "Flach rasch abkühlen und einfrieren."], freeze: "Flach, lässt sich portionsweise abbrechen.", reheat: "Gefroren mit 2 EL Wasser 8 Min. kochend heiß braten und auf Reis oder Gemüse geben." },
    zh: { title: "日式姜味牛肉松", steps: ["姜和胡萝卜切极细末。", "与牛肉末下锅，边拌边炒至熟透。", "加生抽和蜂蜜，炒到收干。", "摊平快速放凉后冷冻。"], freeze: "压平冷冻，可掰开取用。", reheat: "冷冻状态加2汤匙水翻炒8分钟至滚烫，盖在米饭或蔬菜上。" },
  },

  // ── Rind zum Schmoren ────────────────────────────────
  {
    id: "rind-schmor-hongshao", cuts: ["rind-schmor"], origin: "china", art: "gegart", months: 2,
    ingredients: [["Tomaten", "番茄", 300, "g"], ["Natriumarme Sojasauce", "低钠生抽", 2, "EL"], ["Ingwer", "姜", 20, "g"], ["Sternanis", "八角", 2, "Stk"], ["Zimtstange", "桂皮", 1, "Stk"], ["Wasser", "水", 900, "ml"]],
    de: { title: "Rinderbrühe-Schmorfleisch für Nudelsuppe", steps: ["Fleischwürfel 5 Min. blanchieren und abspülen.", "Ingwer und Tomaten anbraten, Fleisch und Sojasauce zugeben.", "Mit Wasser und Gewürzen etwa 2 Stunden zugedeckt weich köcheln.", "Gewürze entfernen, rasch abkühlen und mit Brühe einfrieren."], freeze: "Fleisch mit Brühe, Nudeln immer frisch.", reheat: "Im Kühlschrank auftauen und 10 Min. kochen, oder gefroren 35 Min. erhitzen; über frisch gekochte Nudeln geben." },
    zh: { title: "红烧牛肉（牛肉面汤）", steps: ["牛肉块焯水5分钟后冲净。", "炒香姜和番茄，加牛肉和生抽。", "加水和香料，盖锅炖约2小时至软。", "捞出香料，快速放凉后连汤冷冻。"], freeze: "肉汤同冻，面条现煮。", reheat: "冷藏室解冻后煮10分钟，或冷冻状态加热35分钟，浇在新煮的面条上。" },
  },
  {
    id: "rind-schmor-gulasch", cuts: ["rind-schmor"], origin: "heimisch", art: "gegart", months: 2,
    ingredients: [["Zwiebeln", "洋葱", 450, "g"], ["Paprikapulver edelsüß", "甜椒粉", 2, "EL"], ["Tomatenmark", "番茄膏", 1, "EL"], ["Majoran", "马郁兰", 2, "TL"], ["Apfelessig", "苹果醋", 1, "EL"], ["Wasser", "水", 600, "ml"], ["Rapsöl", "菜籽油", 2, "EL"]],
    de: { title: "Wiener Saftgulasch", steps: ["Zwiebeln im Öl langsam goldbraun rösten.", "Tomatenmark und Paprikapulver kurz mitrösten, sofort mit Essig und etwas Wasser ablöschen.", "Fleisch, Majoran und restliches Wasser zugeben und 2,5 Stunden sanft schmoren.", "Im kalten Wasserbad rasch abkühlen und einfrieren."], freeze: "In Portionen mit viel Saft.", reheat: "Im Kühlschrank auftauen und 10 Min. durchkochen, oder gefroren zugedeckt 30–35 Min. langsam erhitzen." },
    zh: { title: "维也纳洋葱炖牛肉", steps: ["用油把洋葱慢炒至金褐色。", "加番茄膏和甜椒粉略炒，立刻倒入醋和少许水。", "加牛肉、马郁兰和剩下的水，小火炖2.5小时。", "隔冷水快速降温后冷冻。"], freeze: "分份保存，多带汤汁。", reheat: "冷藏室解冻后煮10分钟，或冷冻状态盖锅慢热30–35分钟。" },
  },
  {
    id: "rind-schmor-rendang", cuts: ["rind-schmor"], origin: "suedostasien", art: "gegart", months: 2,
    ingredients: [["Kokosmilch", "椰奶", 400, "ml"], ["Zitronengras", "香茅", 2, "Stk"], ["Schalotten", "红葱头", 100, "g"], ["Ingwer", "姜", 20, "g"], ["Kurkuma gemahlen", "姜黄粉", 2, "TL"], ["Limettenblätter", "青柠叶", 4, "Stk"]],
    de: { title: "Mildes Rendang", steps: ["Schalotten, Ingwer und die Hälfte vom Zitronengras zu einer Paste mixen und anrösten.", "Fleisch, Kurkuma, Kokosmilch, Limettenblätter und restliches Zitronengras zugeben.", "Offen etwa 2,5 Stunden köcheln, öfter rühren, bis die Sauce dick ist.", "Rasch abkühlen und in Portionen einfrieren."], freeze: "Dicht in flachen Behältern.", reheat: "Gefroren mit 4 EL Wasser zugedeckt 25–30 Min. unter Rühren erhitzen, bis es kocht." },
    zh: { title: "温和版仁当牛肉", steps: ["红葱头、姜和一半香茅打成酱，下锅炒香。", "加牛肉、姜黄、椰奶、青柠叶和剩下的香茅。", "开盖小火煮约2.5小时，常搅拌至汤汁浓稠。", "快速放凉，分份冷冻。"], freeze: "装扁盒密封。", reheat: "冷冻状态加4汤匙水，盖锅边搅边加热25–30分钟至煮开。" },
  },
  {
    id: "rind-schmor-galbijjim", cuts: ["rind-schmor"], origin: "korea", art: "gegart", months: 2,
    ingredients: [["Birne", "梨", 150, "g"], ["Daikon-Rettich", "白萝卜", 250, "g"], ["Karotten", "胡萝卜", 150, "g"], ["Natriumarme Sojasauce", "低钠生抽", 3, "EL"], ["Knoblauch", "大蒜", 4, "Zehe"], ["Wasser", "水", 500, "ml"]],
    de: { title: "Birnen-Sojasaucen-Schmorrind", steps: ["Fleisch blanchieren und abspülen, Birne mit Knoblauch pürieren.", "Fleisch mit Püree, Sojasauce und Wasser 90 Min. schmoren.", "Rettich und Karotten zugeben und 40 Min. weich garen.", "Rasch abkühlen und mit Sauce einfrieren."], freeze: "Mit Sauce, Gemüse in großen Stücken.", reheat: "Im Kühlschrank auftauen und zugedeckt 15 Min. köcheln, oder gefroren 35 Min. erhitzen." },
    zh: { title: "韩式梨汁炖牛肉", steps: ["牛肉焯水冲净，梨和蒜打成泥。", "牛肉加果泥、生抽和水焖90分钟。", "加萝卜和胡萝卜再炖40分钟至软。", "快速放凉，连汁冷冻。"], freeze: "连汁保存，蔬菜切大块。", reheat: "冷藏室解冻后盖锅煮15分钟，或冷冻状态加热35分钟。" },
  },
  {
    id: "rind-schmor-tajine", cuts: ["rind-schmor"], origin: "orient", art: "gegart", months: 2,
    ingredients: [["Getrocknete Marillen", "杏干", 50, "g"], ["Gekochte Kichererbsen", "熟鹰嘴豆", 250, "g"], ["Zwiebeln", "洋葱", 200, "g"], ["Ras el-Hanout", "摩洛哥综合香料", 2, "TL"], ["Passierte Tomaten", "番茄泥", 200, "g"], ["Wasser", "水", 500, "ml"]],
    de: { title: "Rindertajine mit Marillen", steps: ["Fleisch mit Zwiebeln anbraten und die Gewürzmischung kurz mitrösten.", "Tomaten und Wasser zugeben und 100 Min. schmoren.", "Kichererbsen und Marillenstücke zugeben, weitere 30 Min. garen.", "Rasch abkühlen und einfrieren."], freeze: "Portionsweise mit Sauce.", reheat: "Gefroren mit etwas Wasser zugedeckt 30–35 Min. erhitzen, bis alles kocht." },
    zh: { title: "杏干塔吉锅牛肉", steps: ["牛肉与洋葱煎香，加综合香料略炒。", "加番茄泥和水炖100分钟。", "放鹰嘴豆和杏干块，再炖30分钟。", "快速放凉后冷冻。"], freeze: "连汁分份。", reheat: "冷冻状态加少许水，盖锅加热30–35分钟至沸腾。" },
  },
  {
    id: "rind-schmor-nikujaga", cuts: ["rind-schmor"], origin: "japan", art: "basis", months: 2,
    ingredients: [["Zwiebeln", "洋葱", 250, "g"], ["Dashi oder Wasser", "高汤或清水", 700, "ml"], ["Natriumarme Sojasauce", "低钠生抽", 2, "EL"], ["Ingwer", "姜", 15, "g"]],
    de: { title: "Dashi-Rind für Nikujaga", steps: ["Fleisch in kleine Würfel schneiden, kurz blanchieren und abspülen.", "Mit Zwiebeln, Ingwer, Dashi und Sojasauce 2 Stunden weich köcheln.", "Rasch abkühlen und ohne Erdäpfel portionsweise einfrieren."], freeze: "Mit Sud; Erdäpfel erst frisch zugeben.", reheat: "Gefroren aufsetzen, nach dem Auftauen Erdäpfel und Karotten zugeben und insgesamt etwa 40 Min. köcheln." },
    zh: { title: "高汤牛肉（土豆炖肉底）", steps: ["牛肉切小块，略焯后冲净。", "加洋葱、姜、高汤和生抽炖2小时至软。", "快速放凉，不放土豆分份冷冻。"], freeze: "连汤保存，土豆现加。", reheat: "冷冻状态下锅，化开后加土豆和胡萝卜，总共煮约40分钟。" },
  },

  // ── Rind zum Kurzbraten ────────────────────────────────
  {
    id: "rind-kurz-heijiao", cuts: ["rind-kurz"], origin: "china", art: "marinade", months: 2,
    ingredients: [["Natriumarme Sojasauce", "低钠生抽", 1, "EL"], ["Austernsauce", "蚝油", 1, "EL"], ["Schwarzer Pfeffer", "黑胡椒", 1, "TL"], ["Speisestärke", "淀粉", 1, "EL"], ["Rapsöl", "菜籽油", 1, "EL"]],
    de: { title: "Schwarzpfeffer-Rindstreifen", steps: ["Fleisch quer zur Faser in dünne Streifen schneiden.", "Mit Saucen, Pfeffer und Stärke verrühren, zuletzt Öl untermischen.", "Flach verpacken und sofort einfrieren."], freeze: "Flach, je 250 g.", reheat: "Im Kühlschrank auftauen, 4–5 Min. in sehr heißer Pfanne braten, bis nichts mehr rosa ist; Paprika dazugeben und 3 Min. weiterbraten." },
    zh: { title: "黑椒牛肉丝", steps: ["牛肉逆纹切细条。", "加生抽、蚝油、黑胡椒和淀粉抓匀，最后拌油。", "压平包装，立即冷冻。"], freeze: "每袋250克平放。", reheat: "冷藏室解冻后热锅翻炒4–5分钟至无粉红色，加彩椒再炒3分钟。" },
  },
  {
    id: "rind-kurz-bulgogi", cuts: ["rind-kurz"], origin: "korea", art: "marinade", months: 2,
    ingredients: [["Birne", "梨", 100, "g"], ["Natriumarme Sojasauce", "低钠生抽", 2, "EL"], ["Sesamöl", "香油", 1, "EL"], ["Knoblauch", "大蒜", 3, "Zehe"], ["Frühlingszwiebeln", "小葱", 3, "Stk"]],
    de: { title: "Bulgogi", steps: ["Frisches Fleisch mit einem scharfen Messer hauchdünn schneiden.", "Birne und Knoblauch reiben, mit Sojasauce und Sesamöl mischen.", "Fleisch und Zwiebelringe damit vermengen, flach verpacken und sofort einfrieren."], freeze: "Dünne Platten im Beutel.", reheat: "Im Kühlschrank auftauen und portionsweise 5 Min. braten, bis jedes Stück vollständig durch ist." },
    zh: { title: "韩式烤牛肉", steps: ["新鲜牛肉用快刀切成极薄片。", "梨和蒜磨泥，与生抽和香油调匀。", "拌入牛肉和葱圈，压平装袋，立即冷冻。"], freeze: "压薄装袋。", reheat: "冷藏室解冻后分批翻炒5分钟，至每片完全熟透。" },
  },
  {
    id: "rind-kurz-luclac", cuts: ["rind-kurz"], origin: "suedostasien", art: "marinade", months: 2,
    ingredients: [["Fischsauce", "鱼露", 2, "TL"], ["Natriumarme Sojasauce", "低钠生抽", 1, "EL"], ["Knoblauch", "大蒜", 4, "Zehe"], ["Schwarzer Pfeffer", "黑胡椒", 1, "TL"], ["Rapsöl", "菜籽油", 1, "EL"]],
    de: { title: "Knoblauch-Rindwürfel (Bo Luc Lac)", steps: ["Fleisch in 2 cm große Würfel schneiden.", "Knoblauch hacken und mit Saucen, Pfeffer und Öl verrühren.", "Würfel darin wenden, einlagig verpacken und sofort einfrieren."], freeze: "Einlagig im Beutel.", reheat: "Im Kühlschrank auftauen, rundum 7–8 Min. braten, bis die Mitte durchgegart ist, und auf Salat servieren (Salat frisch waschen)." },
    zh: { title: "越式蒜香牛肉粒", steps: ["牛肉切2厘米见方的粒。", "蒜切末，与鱼露、生抽、胡椒和油调匀。", "牛肉裹匀后单层装袋，立即冷冻。"], freeze: "单层装袋。", reheat: "冷藏室解冻后各面煎炒7–8分钟至中心熟透，配现洗的生菜。" },
  },
  {
    id: "rind-kurz-zwiebelrostbraten", cuts: ["rind-kurz"], origin: "heimisch", art: "gegart", months: 2,
    ingredients: [["Zwiebeln", "洋葱", 350, "g"], ["Natriumarme Rindsuppe", "低钠牛肉汤", 350, "ml"], ["Senf (ohne Alkohol)", "芥末酱（无酒精）", 2, "TL"], ["Dinkelmehl", "斯佩耳特面粉", 1, "EL"], ["Rapsöl", "菜籽油", 2, "EL"]],
    de: { title: "Geschmorter Zwiebelrostbraten", steps: ["Fleisch in dünne Schnitten teilen, mit Senf bestreichen und kurz anbraten.", "Zwiebeln goldig rösten, mit Mehl stauben und mit Suppe aufgießen.", "Fleisch in die Sauce legen und zugedeckt 45 Min. weich dünsten.", "Rasch abkühlen und mit Saft einfrieren."], freeze: "Schnitten mit Sauce bedeckt.", reheat: "Gefroren mit 3 EL Wasser zugedeckt 30 Min. bei kleiner Hitze erhitzen, bis es aufkocht." },
    zh: { title: "洋葱焖牛排片", steps: ["牛肉切薄片，抹芥末酱后略煎。", "洋葱炒金黄，撒面粉后倒入肉汤。", "牛肉放入酱汁，盖锅焖45分钟至软。", "快速放凉，连汁冷冻。"], freeze: "让酱汁盖住肉片。", reheat: "冷冻状态加3汤匙水，盖锅小火加热30分钟至煮开。" },
  },
  {
    id: "rind-kurz-tagliata", cuts: ["rind-kurz"], origin: "mittelmeer", art: "marinade", months: 2,
    ingredients: [["Olivenöl", "橄榄油", 2, "EL"], ["Rosmarin", "迷迭香", 2, "TL"], ["Knoblauch", "大蒜", 2, "Zehe"], ["Zitronenschale", "柠檬皮屑", 1, "TL"]],
    de: { title: "Rosmarin-Zitronen-Streifen", steps: ["Fleisch quer zur Faser in 1 cm dicke Streifen schneiden.", "Öl mit Rosmarin, Knoblauch und Zitronenschale verrühren.", "Streifen darin wenden, flach verpacken und sofort einfrieren."], freeze: "Flach im Beutel.", reheat: "Im Kühlschrank auftauen, 5–6 Min. scharf braten, bis die Streifen innen nicht mehr rosa sind." },
    zh: { title: "迷迭香柠檬牛肉条", steps: ["牛肉逆纹切1厘米厚的条。", "橄榄油与迷迭香、蒜和柠檬皮屑调匀。", "肉条裹匀后压平装袋，立即冷冻。"], freeze: "平放装袋。", reheat: "冷藏室解冻后大火煎炒5–6分钟，至中心没有粉红色。" },
  },
  {
    id: "rind-kurz-jeera", cuts: ["rind-kurz"], origin: "indien", art: "marinade", months: 2,
    ingredients: [["Kreuzkümmel", "孜然", 2, "TL"], ["Koriander gemahlen", "香菜籽粉", 1, "TL"], ["Naturjoghurt (pasteurisiert)", "原味酸奶（巴氏杀菌）", 100, "g"], ["Ingwer", "姜", 15, "g"], ["Knoblauch", "大蒜", 2, "Zehe"]],
    de: { title: "Kreuzkümmel-Joghurt-Rind", steps: ["Fleisch in dünne Streifen schneiden, Kreuzkümmel trocken anrösten und abkühlen lassen.", "Mit Joghurt, Koriander, geriebenem Ingwer und Knoblauch verrühren.", "Fleisch untermischen, flach verpacken und sofort einfrieren."], freeze: "Flach in Portionsbeuteln.", reheat: "Im Kühlschrank auftauen und mit Zwiebeln 8–10 Min. braten, bis alles durch und die Flüssigkeit eingekocht ist." },
    zh: { title: "孜然酸奶牛肉", steps: ["牛肉切细条，孜然干炒出香后放凉。", "与酸奶、香菜籽粉、姜泥和蒜泥调匀。", "拌入牛肉，压平包装，立即冷冻。"], freeze: "分袋平放。", reheat: "冷藏室解冻后与洋葱翻炒8–10分钟，至熟透收汁。" },
  },

  // ── Rinderknochen / Beinscheibe ────────────────────────────────
  {
    id: "rind-knochen-rindsuppe", cuts: ["rind-knochen"], origin: "heimisch", art: "basis", months: 2,
    ingredients: [["Suppengemüse", "汤用蔬菜", 300, "g"], ["Zwiebel mit Schale", "带皮洋葱", 1, "Stk"], ["Pfefferkörner", "胡椒粒", 1, "TL"], ["Lorbeerblätter", "香叶", 2, "Stk"], ["Wasser", "水", 1800, "ml"]],
    de: { title: "Klare Rindsuppe", steps: ["Zwiebel halbieren und an der Schnittfläche dunkel rösten.", "Knochen mit kaltem Wasser aufsetzen, aufkochen und abschäumen.", "Gemüse und Gewürze zugeben und 3,5 Stunden sanft ziehen lassen.", "Abseihen, im Eisbad rasch abkühlen, Fett abheben und einfrieren."], freeze: "In Gläsern oder Beuteln mit Rand.", reheat: "Gefroren in den Topf geben, etwa 25 Min. erhitzen und 3 Min. sprudelnd kochen." },
    zh: { title: "奥地利清牛肉汤", steps: ["洋葱对半切开，切面煎至深色。", "牛骨冷水下锅，煮开后撇沫。", "加蔬菜和香料，微火熬3.5小时。", "过滤后冰浴快速降温，撇油冷冻。"], freeze: "装罐或装袋，留出空间。", reheat: "冷冻状态入锅加热约25分钟，再滚煮3分钟。" },
  },
  {
    id: "rind-knochen-luobo", cuts: ["rind-knochen"], origin: "china", art: "gegart", months: 2,
    ingredients: [["Daikon-Rettich", "白萝卜", 400, "g"], ["Ingwer", "姜", 25, "g"], ["Frühlingszwiebeln", "小葱", 2, "Stk"], ["Sichuanpfeffer", "花椒", 1, "TL"], ["Wasser", "水", 1600, "ml"]],
    de: { title: "Rindsknochen-Rettich-Suppe", steps: ["Knochen 10 Min. blanchieren und abspülen.", "Mit Wasser, Ingwer, Zwiebeln und Pfeffer 2,5 Stunden köcheln.", "Rettichstücke zugeben und 40 Min. weich garen.", "Rasch abkühlen und portionsweise einfrieren."], freeze: "Mit Einlage, etwas Rand lassen.", reheat: "Im Kühlschrank auftauen und 10 Min. kochen, oder gefroren 35 Min. zugedeckt erhitzen." },
    zh: { title: "清炖萝卜牛骨汤", steps: ["牛骨焯水10分钟后冲净。", "加水、姜、葱和花椒熬2.5小时。", "放萝卜块煮40分钟至软。", "快速放凉，分份冷冻。"], freeze: "连料装盒，留少许空间。", reheat: "冷藏室解冻后煮10分钟，或冷冻状态盖锅加热35分钟。" },
  },
  {
    id: "rind-knochen-seolleongtang", cuts: ["rind-knochen"], origin: "korea", art: "basis", months: 2,
    ingredients: [["Knoblauch", "大蒜", 5, "Zehe"], ["Ingwer", "姜", 15, "g"], ["Frühlingszwiebeln", "小葱", 3, "Stk"], ["Wasser", "水", 2000, "ml"]],
    de: { title: "Milchweiße koreanische Knochenbrühe", steps: ["Knochen 1 Stunde kalt wässern, dann 10 Min. blanchieren und abspülen.", "Mit frischem Wasser, Knoblauch und Ingwer 5 Stunden kräftig köcheln, bei Bedarf heißes Wasser nachgießen.", "Abseihen, im Eisbad rasch abkühlen, Fett entfernen und einfrieren; Zwiebeln erst beim Servieren schneiden."], freeze: "Portionsweise in Behältern.", reheat: "Gefroren etwa 25 Min. erhitzen, sprudelnd aufkochen, dann Frühlingszwiebeln darüberstreuen." },
    zh: { title: "韩式奶白牛骨汤", steps: ["牛骨冷水浸泡1小时，焯水10分钟后冲净。", "换清水加蒜和姜，中火熬5小时，水少时添热水。", "过滤后冰浴快速降温，去油冷冻；葱上桌时再切。"], freeze: "分份装盒。", reheat: "冷冻状态加热约25分钟至滚沸，撒上葱花。" },
  },
  {
    id: "rind-knochen-pho", cuts: ["rind-knochen"], origin: "suedostasien", art: "basis", months: 2,
    ingredients: [["Zwiebeln", "洋葱", 150, "g"], ["Ingwer", "姜", 40, "g"], ["Sternanis", "八角", 3, "Stk"], ["Zimtstange", "桂皮", 1, "Stk"], ["Fischsauce", "鱼露", 1, "EL"], ["Wasser", "水", 1800, "ml"]],
    de: { title: "Pho-Brühe", steps: ["Knochen blanchieren und abspülen.", "Zwiebeln und Ingwer dunkel anrösten, Gewürze kurz mitrösten.", "Alles mit Wasser 4 Stunden sanft köcheln, mit Fischsauce würzen.", "Abseihen, rasch abkühlen und einfrieren."], freeze: "In Portionen zu etwa 500 ml.", reheat: "Gefroren etwa 25 Min. erhitzen und sprudelnd kochend über gegarte Reisnudeln und durchgegartes Fleisch gießen." },
    zh: { title: "越南河粉汤底", steps: ["牛骨焯水冲净。", "洋葱和姜烤至深色，香料略炒。", "全部加水小火熬4小时，用鱼露调味。", "过滤后快速放凉冷冻。"], freeze: "每份约500毫升。", reheat: "冷冻状态加热约25分钟，把滚汤浇在煮好的河粉和熟牛肉上。" },
  },
  {
    id: "rind-knochen-ossobuco", cuts: ["rind-knochen"], origin: "mittelmeer", art: "gegart", months: 2,
    ingredients: [["Passierte Tomaten", "番茄泥", 300, "g"], ["Karotten", "胡萝卜", 150, "g"], ["Stangensellerie", "西芹", 100, "g"], ["Zwiebel", "洋葱", 150, "g"], ["Natriumarme Rindsuppe", "低钠牛肉汤", 400, "ml"], ["Zitronenschale", "柠檬皮屑", 1, "TL"]],
    de: { title: "Beinscheiben nach Ossobuco-Art", steps: ["Für diesen Weg Beinscheiben nehmen: Ränder einschneiden und beidseitig anbraten.", "Gemüse würfeln und anschwitzen, Tomaten, Suppe und Zitronenschale zugeben.", "Fleisch einlegen und zugedeckt etwa 2,5 Stunden schmoren, bis es weich ist.", "Rasch abkühlen und mit Sauce einfrieren."], freeze: "Scheiben einzeln mit Sauce.", reheat: "Im Kühlschrank auftauen und zugedeckt 20 Min. köcheln, oder gefroren bei 170 °C zugedeckt 50 Min. erhitzen." },
    zh: { title: "意式番茄炖带骨牛腱", steps: ["此做法用带骨牛腱片：边缘划几刀，两面煎上色。", "蔬菜切丁炒软，加番茄泥、肉汤和柠檬皮屑。", "放入牛腱，盖锅炖约2.5小时至软。", "快速放凉，连汁冷冻。"], freeze: "逐片带汁分装。", reheat: "冷藏室解冻后盖锅煮20分钟，或冷冻状态170度盖好加热50分钟。" },
  },
  {
    id: "rind-knochen-shorba", cuts: ["rind-knochen"], origin: "orient", art: "gegart", months: 2,
    ingredients: [["Rote Linsen", "红扁豆", 120, "g"], ["Tomaten gewürfelt", "番茄丁", 300, "g"], ["Zwiebel", "洋葱", 150, "g"], ["Kreuzkümmel", "孜然", 2, "TL"], ["Kurkuma gemahlen", "姜黄粉", 1, "TL"], ["Wasser", "水", 1800, "ml"]],
    de: { title: "Linsen-Schorba auf Knochenbrühe", steps: ["Knochen blanchieren, abspülen und mit Wasser 2,5 Stunden köcheln.", "Knochen herausnehmen, vorhandenes Fleisch ablösen, Brühe entfetten.", "Zwiebel, Tomaten, Linsen und Gewürze in der Brühe 30 Min. garen, Fleisch zugeben.", "Rasch abkühlen und einfrieren."], freeze: "Ohne Knochen, portionsweise.", reheat: "Gefroren mit etwas Wasser zugedeckt 30 Min. erhitzen, öfter rühren und sprudelnd aufkochen." },
    zh: { title: "牛骨红扁豆汤", steps: ["牛骨焯水冲净，加水熬2.5小时。", "取出骨头拆下肉，撇去汤面浮油。", "汤中加洋葱、番茄、扁豆和香料煮30分钟，放回肉。", "快速放凉后冷冻。"], freeze: "去骨分份保存。", reheat: "冷冻状态加少许水，盖锅加热30分钟，常搅拌至滚沸。" },
  },
];

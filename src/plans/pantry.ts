// src/plans/pantry.ts
// Must-haves der Vorratskammer. store = wo man es voraussichtlich bekommt.
export type PantryGroup = { jp: string; title: string; zh: string; items: { name: string; zh: string; zhUse: string; store: string; use: string }[] };

export const PANTRY_GROUPS: PantryGroup[] = [
  { jp: "調味", title: "Saucen & Pasten", zh: "酱料", items: [
    { name: "Sojasauce natriumarm", zh: "低钠酱油", zhUse: "红烧、腌肉、汤", store: "Interspar / Spar", use: "Schmorgerichte, Marinaden, Suppen" },
    { name: "Austernsauce", zh: "蚝油", zhUse: "蔬菜、快炒", store: "Asia-Shop", use: "Gemüse, Wok" },
    { name: "Hoisin-Sauce", zh: "海鲜酱", zhUse: "叉烧、腌料", store: "Asia-Shop", use: "Char Siu, Marinaden" },
    { name: "Miso hell (pasteurisiert)", zh: "白味噌（巴氏杀菌）", zhUse: "味噌汤、豚汁、腌料", store: "Asia-Shop", use: "Misosuppe, Tonjiru, Marinaden" },
    { name: "Doenjang", zh: "韩式大酱", zhUse: "大酱汤", store: "Asia-Shop", use: "Koreanische Bohnenpastensuppen" },
    { name: "Reisessig mild", zh: "米醋", zhUse: "凉菜、酱汁", store: "Lidl / Hofer", use: "Salate, Saucen" },
    { name: "Tomatenmark & passierte Tomaten", zh: "番茄膏和番茄泥", zhUse: "番茄汤、肉酱", store: "Lidl / Hofer", use: "Tomatensuppe, Hacksauce" },
  ] },
  { jp: "油香", title: "Öle & Gewürze", zh: "油和调料", items: [
    { name: "Sesamöl", zh: "香油", zhUse: "月子经典菜、提味", store: "Lidl / Hofer", use: "Wochenbett-Klassiker, Abschmecken" },
    { name: "Rapsöl", zh: "菜籽油", zhUse: "炒菜", store: "Lidl / Hofer", use: "Anbraten" },
    { name: "Sesam", zh: "芝麻", zhUse: "小菜、点心、饭团", store: "Lidl / Hofer", use: "Banchan, Snacks, Onigiri" },
    { name: "Salz & weißer Pfeffer", zh: "盐和白胡椒", zhUse: "所有菜", store: "Lidl / Hofer", use: "Alles" },
    { name: "Zucker oder Honig", zh: "糖或蜂蜜", zhUse: "少量使用", store: "Lidl / Hofer", use: "kleine Mengen" },
    { name: "Zimt & Sternanis", zh: "桂皮和八角", zhUse: "卤汁，少量", store: "Interspar / Spar", use: "Schmorsud, sparsam" },
  ] },
  { jp: "乾貨", title: "Trockenvorrat", zh: "干货", items: [
    { name: "Reis (Rundkorn/Sushi-Reis)", zh: "圆粒米/寿司米", zhUse: "主食、粥、饭团", store: "Lidl / Hofer", use: "Beilage, Brei, Onigiri" },
    { name: "Rollgerste", zh: "大麦仁", zhUse: "米饭替代", store: "Interspar / Spar", use: "Reis-Alternative" },
    { name: "Haferflocken", zh: "燕麦片", zhUse: "早餐、点心", store: "Lidl / Hofer", use: "Frühstück, Snacks" },
    { name: "Hirse", zh: "小米", zhUse: "小米粥", store: "Interspar / Spar", use: "Hirsebrei" },
    { name: "Soba, Udon, Weizennudeln", zh: "荞麦面、乌冬、面条", zhUse: "汤面", store: "Asia-Shop", use: "Nudelsuppen" },
    { name: "Glasnudeln", zh: "粉丝", zhUse: "汤、蒸菜", store: "Asia-Shop", use: "Suppen, Dämpfgerichte" },
    { name: "Katsuobushi (Bonitoflocken)", zh: "鲣鱼花", zhUse: "无海带高汤", store: "Asia-Shop", use: "Dashi ohne Algen" },
    { name: "Shiitake getrocknet", zh: "干香菇", zhUse: "高汤、红烧", store: "Asia-Shop", use: "Brühen, Schmorgerichte" },
    { name: "Rote Datteln", zh: "红枣", zhUse: "粥、汤", store: "Asia-Shop", use: "Brei, Suppen" },
    { name: "Miyeok-Algen", zh: "裙带菜", zhUse: "海带汤，少量（碘）", store: "Asia-Shop", use: "Miyeokguk, nur sparsam (Jod)" },
    { name: "Maisstärke & Mehl", zh: "淀粉和面粉", zhUse: "勾芡、饼", store: "Lidl / Hofer", use: "Binden, Fladen" },
    { name: "Klebreismehl", zh: "糯米粉", zhUse: "南瓜粥、小饼", store: "Asia-Shop", use: "Kürbisbrei, Taler" },
    { name: "Walnüsse & Datteln", zh: "核桃和椰枣", zhUse: "零食", store: "Lidl / Hofer", use: "Snacks" },
  ] },
  { jp: "鮮", title: "Kühlschrank & Frisches", zh: "冷藏和生鲜", items: [
    { name: "Eier", zh: "鸡蛋", zhUse: "早餐、亲子丼、蒸蛋", store: "Lidl / Hofer", use: "Frühstück, Oyakodon, Eierstich" },
    { name: "Tofu fest & Seidentofu", zh: "老豆腐和嫩豆腐", zhUse: "汤、快手菜", store: "Lidl / Hofer", use: "Suppen, schnelle Gerichte" },
    { name: "Ingwer", zh: "姜", zhUse: "几乎每道菜", store: "Lidl / Hofer", use: "fast jedes Gericht" },
    { name: "Knoblauch", zh: "大蒜", zhUse: "几乎每道菜", store: "Lidl / Hofer", use: "fast jedes Gericht" },
    { name: "Frühlingszwiebeln", zh: "小葱", zhUse: "点缀、饼", store: "Lidl / Hofer", use: "Topping, Fladen" },
    { name: "Karotten & Zwiebeln", zh: "胡萝卜和洋葱", zhUse: "汤底", store: "Lidl / Hofer", use: "Basis für Suppen" },
    { name: "Pak Choi oder Spinat", zh: "小油菜或菠菜", zhUse: "每餐的绿叶菜", store: "Lidl / Hofer", use: "Grün zu jeder Mahlzeit" },
    { name: "Joghurt & Sojamilch ungesüßt", zh: "酸奶和无糖豆浆", zhUse: "早餐", store: "Lidl / Hofer", use: "Frühstück" },
  ] },
  { jp: "凍", title: "Gefrierfach", zh: "冷冻", items: [
    { name: "Hühnerbrühe in 500-ml-Portionen", zh: "500毫升分装鸡汤", zhUse: "自己熬，见备餐页", store: "Lidl / Hofer", use: "selbst gekocht, siehe Preppen" },
    { name: "Ingwer-Knoblauch-Würfel", zh: "姜蒜冰块", zhUse: "自己做，见备餐页", store: "Lidl / Hofer", use: "selbst gemacht, siehe Preppen" },
    { name: "Hähnchenschenkel & Hack", zh: "鸡腿和肉末", zhUse: "分装", store: "Lidl / Hofer", use: "portionsweise" },
    { name: "Lachs & Kabeljau TK", zh: "冷冻三文鱼和鳕鱼", zhUse: "粥、汤", store: "Lidl / Hofer", use: "Brei, Suppen" },
    { name: "TK-Gemüse (Spinat, Erbsen, Brokkoli)", zh: "冷冻蔬菜（菠菜、豌豆、西兰花）", zhUse: "赶时间时", store: "Lidl / Hofer", use: "wenn es schnell gehen muss" },
    { name: "Wan-Tan-Blätter", zh: "馄饨皮", zhUse: "馄饨汤", store: "Asia-Shop", use: "Wonton-Suppe" },
  ] },
];

// Ordnet einem Rezept (deutsch/chinesisch/japanisch/koreanisch) ein Tuschemotiv zu.
export type Motif =
  | "rice" | "congee" | "clearSoup" | "stew" | "noodleSoup" | "friedNoodles" | "friedRice" | "donburi"
  | "onigiri" | "dumplings" | "bao" | "pancake" | "egg" | "tofu" | "fish" | "shrimp" | "chicken"
  | "braised" | "wok" | "salad" | "squash" | "porridge" | "drink" | "toast" | "bowl";

type Rule = [Motif, RegExp];

const NOODLE = /nudel|noodle|udon|soba(?!uc)|ramen|spaghetti|pasta|gnocchi|japchae|chow (fun|mein)|\bmian\b|面(?!包)|麵(?!包)|麺|うどん|そば(?!ろ)|米粉(?!糕)|河粉|牛河|冬粉|국수|파스타|잡채|우동|냉면|자장면|orzo|mac & cheese|fleckerl|粉条|蚂蚁上树|ameisen im baum/;
const SOUPY = /suppe|brühe|soup|汤|湯|탕|국(?!수)|スープ|ramen|nabe|鍋|砂锅|锅烧/;
const FRIED = /gebrat|pfanne|wok|yaki(?!.*nabe)|炒|焼きうどん|焼きそば|拌|japchae|잡채|볶|spaghetti|pasta|gnocchi|파스타/;

// Gerichtform schlägt Hauptzutat; Reihenfolge = Priorität.
const FORMS: Rule[] = [
  ["onigiri", /onigir|おにぎり|おむすび|饭团|飯糰|飯團|주먹밥/],
  ["toast", /toast|sandwich|サンド|西多士|grilled cheese|croque|bagel|burrito|\bwrap\b|面包|麵包|吐司|(?<!fladen)brot\b|\btarts?\b|pizza(?! rice)/],
  ["friedRice", /bratreis|gebratene[rn]? [\w-]*reis(?!nudel)|fried rice|炒饭|炒飯|chahan|チャーハン|볶음밥|bokkeumbap|nasi goreng/],
  ["salad", /salat|salad|凉拌|涼拌|凉皮|涼皮|ohitashi|おひたし|sunomono|무침/],
  ["pancake", /jianbing|煎饼|煎餅|葱油饼|蔥油餅/],
  ["dumplings", /dim.?sum-auswahl|点心拼盘|點心拼盤|jiaozi|wan.?tan|wonton|dumpling|gyoza|mandu|maultasche|frühlingsroll|sommerroll|reispapier|tangyuan|饺|餃|馄饨|餛飩|抄手|汤圆|湯圓|春卷|만두/],
  ["porridge", /hafer|oatmeal|\boats?\b|porridge|grie(ß|ss)brei|gröt|müsli|granola|milchreis|chia.?pudding|燕麦|燕麥|牛奶粥|joghurt-bowl|yogurt bowl/],
  ["congee", /congee|\bjuk\b|reisbrei|hirsebrei|brei\b|okayu|zosui|z[oō]sui|雑炊|粥|죽|おじや|芝麻糊/],
  ["bao", /(?<!gong )\bbao\b|蒸しパン|mushi-pan|baozi(?!-hack)|包子(?!风)|菜包(?!饭)|肉包|mantou|馒头|küchlein|发糕|發糕|蒸糕|muffin|brötchen/],
  ["pancake", /pfannkuchen|pancake|okonomiyaki|お好み焼|\bjeon\b|전\)|전$|모듬전|jianbing|蛋饼|蛋餅|煎饼|煎餅|烧饼|燒餅|南瓜餅|南瓜饼|肉饼|肉餅|パンケーキ|hotteok|糖饼|松饼|鬆餅|flatbread|fladenbrot|waffel|crêpe|puffer|rösti/],
  ["noodleSoup", new RegExp(`(?=.*(${NOODLE.source}))(?=.*(${SOUPY.source}))`)],
  ["noodleSoup", new RegExp(`^(?!.*(${FRIED.source})).*(udon|soba(?!uc)|うどん|そば(?!ろ)|蕎麦|乌冬|烏冬|우동)`)],
  ["friedNoodles", NOODLE],
  ["donburi", /donburi|\bdon\b|丼|盖饭|蓋飯|덮밥|비빔밥|bibimbap|拌饭|天津饭|tenshin/],
  ["rice", /茶漬|chazuke|茶泡[饭飯]|takikomi|炊き込み|gohan|risotto|烩饭|燴飯|paella|pilaf|jambalaya|sushi bake|sekihan|赤飯|赤饭|tomato (pizza )?rice|番茄饭|bohnenreis|ご飯|菜飯|菜饭|risi e bisi|炊饭|焖饭|燜飯/],
  ["stew", /eintopf|tontopf|clay.?pot|hot.?pot|jjigae|찌개|전골|\bnabe\b|oden|おでん|tteokbokki|떡볶이|关东煮|sukiyaki|すき焼|寿喜烧|stew|シチュー|炖菜|燉菜|煲|砂锅|砂鍋|火锅|火鍋|鍋|(?<!回)锅|topf\b|gulasch|curry/],
  ["clearSoup", /suppe|brühe|soup|minestrone|汤|湯|탕|국(?!수)|汁(?!粉)|スープ|\bguk\b/],
  ["drink", /sojamilch|豆浆|豆漿|\btee\b|-tee\b|(?<!抹)茶(?!碗|泡|漬)|latte\b|smoothie|lassi|kakao|kaffee/],
];

// Hauptzutaten: es gewinnt, was im Titel zuerst genannt wird.
const MAINS: Rule[] = [
  ["egg", /\bei(er)?\b|eierstich|rührei|omelett?|omuraisu|tamago|frittata|chawan|fritaja|\beggs?\b|玉子|shakshuka|卵|蛋|계란|달걀/],
  ["tofu", /tofu|豆腐|두부|natto|納豆|豆花|soja-pudding/],
  ["fish", /fisch(?!duft)|brasse|鯛|鲷|saibling|lachs|laxbiffar|salmon|kabeljau|forelle|dorsch|pollack|makrele|barsch|zander|tuna|\baal\b|鱼(?!香)|魚(?!香)|鳕|鱈|鮭|鲑|鳟|鱒|鲈|鱸|생선|명태|연어/],
  ["shrimp", /garnele|shrimp|prawn|meeresfrüchte|seafood|muschel|青口|hotate|帆立|虾|蝦|エビ|海鲜|海鮮|새우/],
  ["chicken", /huhn|hähnchen|hühn|pute|chicken|\bente\b|からあげ|dakgang|dakjjim|鸡(?!蛋)|雞(?!蛋)|鶏|닭/],
  ["braised", /rind|schwein|fleisch|hack\b|beef|pork|lamm|[cć]evap|tonkatsu|galbi|bulgogi|jeyuk|siu yuk|köttbullar|korv|smash burger|tang cu li ji|里脊|狮子头|獅子頭|肉|牛(?!奶)|排骨|豚|불고기|고기|갈비|보쌈/],
];

const VEG: Rule[] = [
  ["squash", /kürbis|kartoffel|daikon|rettich|karotte|möhre|pastinake|wurzel|sellerie|taro|maroni|kastanie|南瓜|红薯|紅薯|地瓜|番薯|土豆|萝卜|蘿蔔|根菜|藕|芋|栗|欧防风|potato|pyttipanna|janssons|호박|감자/],
  ["wok", /gemüse|aubergine|brokkoli|broccoli|pak.?choi|spinat|kohl|pilz|shiitake|champignon|zucchini|sprossen|bohnen|beans|\bwok\b|菜|菇|(?<!番)茄|蔬|西兰花|豆芽/],
];

const RICE: Rule[] = [
  ["rice", /reis(?!essig|papier|kocher|mehl)|rice(?! cooker)|饭(?!煲)|飯|밥|ごはん/],
  ["donburi", /bowl/],
];

const first = (rules: Rule[], s: string) => rules.find(([, re]) => re.test(s))?.[0];

function earliest(rules: Rule[], s: string): Motif | undefined {
  let best: Motif | undefined, at = Infinity;
  for (const [m, re] of rules) {
    const i = s.search(re);
    if (i >= 0 && i < at) [best, at] = [m, i];
  }
  return best;
}

const match = (s: string) => first(FORMS, s) ?? earliest(MAINS, s) ?? earliest(VEG, s) ?? first(RICE, s);

export function motifFor(title: string, ingredients: string[] = []): Motif {
  // Gerätehinweise sagen nichts über das Gericht.
  const t = title.toLowerCase().replace(/reiskocher[\w-]*|电饭煲|電飯煲|air.?fryer|\(wok\)/g, " ");
  // Erst der Hauptteil ("Tamagoyaki & Miso-Suppe" ist ein Eiergericht), dann der ganze Titel.
  const head = t.split(/\s[&+]\s|\+| mit |配/)[0];
  const hit = match(head) ?? match(t);
  if (hit) return hit;
  for (const raw of ingredients) {
    const i = raw.toLowerCase();
    const m = (NOODLE.test(i) ? "friedNoodles" : undefined) ?? first(MAINS, i) ?? first(VEG, i);
    if (m) return m;
  }
  return first(RICE, ingredients.join(" ").toLowerCase()) ?? "bowl";
}

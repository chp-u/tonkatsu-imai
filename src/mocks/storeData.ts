export interface Store {
  id: number;
  name: string;
  nameEn: string;
  badge: string | null;
  address: string;
  phone: string;
  access: string;
  lunchHours: string;
  dinnerHours: string;
  lunchLO?: string;
  dinnerLO?: string;
  closed: string;
  seats: string;
  privateHire: string;
  budgetLunch: string;
  budgetDinner: string;
  payment: string;
  mapUrl: string;
  mapEmbedUrl: string;
  extraNote?: string;
}

export interface MenuItem {
  id: number;
  name: string;
  description: string;
  price: string;
  image: string;
}

export const stores: Store[] = [
  {
    id: 1,
    name: "とんかつ今井 西新宿店",
    nameEn: "TONKATSU IMAI Nishi-Shinjuku",
    badge: null,
    address: "〒160-0023 東京都新宿区西新宿５丁目８−１ 第一ともえビル 107",
    phone: "03-6383-4711",
    access: "都営大江戸線 西新宿五丁目駅 徒歩4分 / 丸の内線 西新宿駅 徒歩10分",
    lunchHours: "11:00〜15:00",
    lunchLO: "料理 L.O. 14:00",
    dinnerHours: "17:00〜21:00",
    dinnerLO: "料理 L.O. 20:00",
    closed: "定休日なし（年中無休）",
    seats: "20席（カウンター8席、テーブル5名×2席、2名×1）",
    privateHire: "可（20人以下）",
    budgetLunch: "¥1,000〜¥1,999",
    budgetDinner: "¥2,000〜¥2,999",
    payment: "カード可・電子マネー可・QRコード決済可",
    mapUrl: "https://maps.google.com/maps?q=東京都新宿区西新宿5-8-1+第一ともえビル",
    mapEmbedUrl: "https://maps.google.com/maps?q=東京都新宿区西新宿5-8-1+第一ともえビル&output=embed&hl=ja",
  },
  {
    id: 2,
    name: "とんかつ今井 北新地店",
    nameEn: "TONKATSU IMAI Kitashinchi",
    badge: null,
    address: "〒530-0002 大阪府大阪市北区曾根崎新地１丁目１−３９ スペランツァビル 谷安 2F",
    phone: "06-6341-9090",
    access: "北新地駅 徒歩5分 / 大江橋駅 徒歩約5分",
    lunchHours: "11:30〜15:00",
    lunchLO: "L.O. 14:00",
    dinnerHours: "18:00〜22:00（土曜〜21:00）",
    dinnerLO: "L.O. 21:00（土曜 L.O. 20:00）",
    closed: "日曜日・年末年始",
    seats: "29席（カウンター7席、テーブル22席）",
    privateHire: "可（20〜50人）",
    budgetLunch: "¥1,000〜¥1,999",
    budgetDinner: "¥5,000〜¥5,999",
    payment: "カード可・電子マネー可・QRコード決済可",
    mapUrl: "https://maps.google.com/maps?q=大阪府大阪市北区曾根崎新地1-1-39+スペランツァビル",
    mapEmbedUrl: "https://maps.google.com/maps?q=大阪府大阪市北区曾根崎新地1-1-39+スペランツァビル&output=embed&hl=ja",
    extraNote: "※ランチとディナーはメニュー・価格が異なります。土鍋ご飯はディナーのみ。",
  },
  {
    id: 3,
    name: "とんかつ今井軽井沢",
    nameEn: "TONKATSU IMAI Karuizawa",
    badge: null,
    address: "〒385-0022 長野県佐久市岩村田１１８３−３",
    phone: "050-8880-7274",
    access: "JR岩村田駅より徒歩5分（駅から約380m）",
    lunchHours: "11:00〜15:00",
    lunchLO: "料理 L.O. 14:30",
    dinnerHours: "17:00〜23:00",
    dinnerLO: "料理 L.O. 22:30",
    closed: "月曜日",
    seats: "41席（カウンター3席、テーブル・座敷席）",
    privateHire: "可（20〜50人）",
    budgetLunch: "¥1,000〜¥1,999",
    budgetDinner: "¥2,000〜¥2,999",
    payment: "カード可・電子マネー可・QRコード決済可",
    mapUrl: "https://maps.google.com/maps?q=長野県佐久市岩村田1183-3",
    mapEmbedUrl: "https://maps.google.com/maps?q=長野県佐久市岩村田1183-3&output=embed&hl=ja",
    extraNote: "※駐車場あり・無料Wi-Fiあり。御膳・定食はランチ・ディナーで料金が異なります。",
  },
  {
    id: 4,
    name: "エビとささみとワタシ♡",
    nameEn: "Ebi to Sasami to Watashi",
    badge: "NEW",
    address: "〒105-0004 東京都港区新橋２丁目１５−１３ 新橋Sビル 1F",
    phone: "03-6257-3262",
    access: "JR新橋駅「烏森口」「日比谷口」から徒歩3分 / 地下鉄三田線 内幸町駅「A1出口」から徒歩4分",
    lunchHours: "11:30〜15:00",
    dinnerHours: "17:00〜22:00",
    closed: "日曜日",
    seats: "10席（カウンター10席・立ち飲み可）",
    privateHire: "可（20人以下）",
    budgetLunch: "¥1,000〜¥1,999",
    budgetDinner: "¥1,000〜¥1,999",
    payment: "カード可・電子マネー可・QRコード決済可",
    mapUrl: "https://maps.google.com/maps?q=東京都港区新橋2-15-13+新橋Sビル",
    mapEmbedUrl: "https://maps.google.com/maps?q=東京都港区新橋2-15-13+新橋Sビル&output=embed&hl=ja",
    extraNote: "※2026年2月25日オープン。予約いただいた膳は当日変更可能。",
  },
];

export const menuItems: MenuItem[] = [
  {
    id: 1,
    name: "上ロースカツ定食",
    description: "群馬県産・赤城ポークを使用した看板メニュー。生パン粉をまとわせ、純正ラードと国産米油で低温からじっくり揚げた渾身の一品。ご飯・豚汁・お新香付き。",
    price: "¥1,800〜",
    image: "https://readdy.ai/api/search-image?query=golden%20crispy%20pork%20loin%20tonkatsu%20cutlet%20cross%20section%20showing%20juicy%20pink%20meat%20on%20white%20ceramic%20plate%20shredded%20cabbage%20Japanese%20teishoku%20set%20meal%20warm%20amber%20lighting%20elegant%20wooden%20table&width=600&height=450&seq=tonkatsu-rosu-1&orientation=landscape",
  },
  {
    id: 2,
    name: "特選ヒレカツ定食",
    description: "きめ細かく柔らかな赤城ポークのヒレ肉を贅沢に使用。あっさりとした旨味が広がり、女性にも人気の定食です。岩塩でのご賞味もおすすめ。",
    price: "¥1,980〜",
    image: "https://readdy.ai/api/search-image?query=tender%20pork%20fillet%20tonkatsu%20hire%20katsu%20golden%20crispy%20thin%20coating%20white%20plate%20shredded%20green%20cabbage%20Japanese%20dinner%20set%20warm%20restaurant%20ambience%20elegant&width=600&height=450&seq=tonkatsu-hire-2&orientation=landscape",
  },
  {
    id: 3,
    name: "エビとささみかつ膳",
    description: "当店自慢の大エビフライ一本とジューシーなささみカツが一度に楽しめる贅沢な定食。新橋店の人気No.1メニュー。とじ卵付き。",
    price: "¥1,800〜",
    image: "https://readdy.ai/api/search-image?query=large%20fried%20tiger%20prawn%20ebi%20furai%20golden%20crispy%20and%20chicken%20tenderloin%20sasami%20katsu%20cutlet%20white%20plate%20with%20rice%20miso%20soup%20Japanese%20set%20meal%20tonkatsu%20restaurant&width=600&height=450&seq=tonkatsu-ebi-3&orientation=landscape",
  },
  {
    id: 4,
    name: "カキフライ定食",
    description: "冬季限定の人気メニュー。大粒で肉厚なカキをサクサクに揚げた、季節ならではの絶品。レモンを絞ってどうぞ。",
    price: "¥2,000〜",
    image: "https://readdy.ai/api/search-image?query=multiple%20golden%20crispy%20fried%20oysters%20kakifurai%20on%20white%20plate%20with%20lemon%20wedge%20shredded%20cabbage%20Japanese%20teishoku%20set%20meal%20warm%20amber%20lighting%20restaurant&width=600&height=450&seq=tonkatsu-kaki-4&orientation=landscape",
  },
  {
    id: 5,
    name: "カツカレー",
    description: "とんかつ専門店が手がける本格カツカレー。深みのある自家製カレーソースと香ばしいカツが絶妙にマッチ。満足感抜群の人気メニュー。",
    price: "¥1,300〜",
    image: "https://readdy.ai/api/search-image?query=japanese%20tonkatsu%20katsu%20curry%20pork%20cutlet%20placed%20over%20golden%20japanese%20curry%20rice%20white%20deep%20bowl%20rich%20amber%20sauce%20garnished%20Japanese%20restaurant%20warm%20lighting&width=600&height=450&seq=tonkatsu-curry-5&orientation=landscape",
  },
];

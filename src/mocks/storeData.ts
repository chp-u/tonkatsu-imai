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
    name: "テキスト",
    nameEn: "テキスト",
    badge: null,
    address: "テキスト",
    phone: "テキテキスト",
    access: "テキスト",
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
    mapUrl: "https://maps.google.com/",
    mapEmbedUrl: "https://maps.google.com/",
  },
  {
    id: 2,
    name: "テキスト",
    nameEn: "テキスト",
    badge: null,
    address: "てきすと",
    phone: "テキスト",
    access: "テキスト",
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
    mapUrl: "https://maps.google.com/",
    mapEmbedUrl: "https://maps.google.com/",
    extraNote: "※ランチとディナーはメニュー・価格が異なります。土鍋ご飯はディナーのみ。",
  },
  {
    id: 3,
    name: "テキスト",
    nameEn: "テキスト",
    badge: null,
    address: "テキスト",
    phone: "テキスト",
    access: "テキスト",
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
    mapUrl: "https://maps.google.com/",
    mapEmbedUrl: "https://maps.google.com/",
    extraNote: "※駐車場あり・無料Wi-Fiあり。御膳・定食はランチ・ディナーで料金が異なります。",
  },
  {
    id: 4,
    name: "テキスト",
    nameEn: "テキスト",
    badge: "NEW",
    address: "テキスト",
    phone: "テキスト",
    access: "テテキスト",
    lunchHours: "11:30〜15:00",
    dinnerHours: "17:00〜22:00",
    closed: "日曜日",
    seats: "10席（カウンター10席・立ち飲み可）",
    privateHire: "可（20人以下）",
    budgetLunch: "¥1,000〜¥1,999",
    budgetDinner: "¥1,000〜¥1,999",
    payment: "カード可・電子マネー可・QRコード決済可",
    mapUrl: "https://maps.google.com/",
    mapEmbedUrl: "https://maps.google.com/",
    extraNote: "※テキスト",
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

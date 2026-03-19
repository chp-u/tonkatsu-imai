export default function SiteFooter() {
  return (
    <footer className="bg-stone-800 text-stone-300 py-14 px-6 md:px-12">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img src="https://static.readdy.ai/image/68f89381c4c7240bb69246b185e50103/db622031ce3feec7752e3a603a572754.jpeg" alt="ロゴ" className="w-10 h-10 rounded-full object-cover" />
              <span className="text-white text-lg font-semibold" style={{ fontFamily: "'Noto Serif JP', serif" }}>とんかつ今井</span>
            </div>
            <p className="text-stone-400 text-xs leading-relaxed" style={{ fontFamily: "'Noto Sans JP', sans-serif" }}>
              群馬県産・赤城ポークをはじめとした国産銘柄豚を使用。生パン粉で丁寧に揚げたこだわりのとんかつを4店舗でご提供しています。
            </p>
          </div>
          {/* Links */}
          <div>
            <p className="text-white text-sm font-semibold mb-4 tracking-wider" style={{ fontFamily: "'Noto Serif JP', serif" }}>店舗一覧</p>
            <ul className="space-y-2 text-stone-400 text-sm" style={{ fontFamily: "'Noto Sans JP', sans-serif" }}>
              <li>とんかつ今井 西新宿店</li>
              <li>とんかつ今井 北新地店</li>
              <li>とんかつ今井軽井沢</li>
              <li className="flex items-center gap-1">エビとささみとワタシ♡ <span className="text-xs bg-red-500 text-white px-1.5 py-0.5 rounded font-bold">NEW</span></li>
            </ul>
          </div>
          {/* SNS & Contact */}
          <div>
            <p className="text-white text-sm font-semibold mb-4 tracking-wider" style={{ fontFamily: "'Noto Serif JP', serif" }}>SNS・お問い合わせ</p>
            <a href="https://www.instagram.com/tonkatsu_imai_official" target="_blank" rel="nofollow noopener" className="flex items-center gap-2 text-stone-400 hover:text-amber-400 transition-colors cursor-pointer mb-3" style={{ fontFamily: "'Noto Sans JP', sans-serif" }}>
              <i className="ri-instagram-line text-xl" />
              <span className="text-sm">@tonkatsu_imai_official</span>
            </a>
            <p className="text-stone-500 text-xs" style={{ fontFamily: "'Noto Sans JP', sans-serif" }}>各店舗へのお問い合わせは電話にてお願いいたします。</p>
          </div>
        </div>
        <div className="border-t border-stone-700 pt-6 text-center">
          <p className="text-stone-500 text-xs" style={{ fontFamily: "'Noto Sans JP', sans-serif" }}>© 2026 とんかつ今井 All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}

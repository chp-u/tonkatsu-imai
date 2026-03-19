import { useState, useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { stores } from "../../../mocks/storeData";

gsap.registerPlugin(ScrollTrigger);

interface TableRowProps {
  label: string;
  value: string;
  sub?: string;
}

function TableRow({ label, value, sub }: TableRowProps) {
  return (
    <tr className="border-b border-stone-100 last:border-0">
      <td
        className="py-4 pr-4 w-28 md:w-36 text-stone-400 text-sm align-top whitespace-nowrap"
        style={{ fontFamily: "'Noto Sans JP', sans-serif" }}
      >
        {label}
      </td>
      <td className="py-4 align-top">
        <p
          className="text-stone-700 text-sm leading-relaxed"
          style={{ fontFamily: "'Noto Sans JP', sans-serif" }}
        >
          {value}
        </p>
        {sub && (
          <p
            className="text-stone-400 text-xs mt-1 leading-relaxed"
            style={{ fontFamily: "'Noto Sans JP', sans-serif" }}
          >
            {sub}
          </p>
        )}
      </td>
    </tr>
  );
}

export default function StoreDetails() {
  const [activeStore, setActiveStore] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        titleRef.current,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.9,
          ease: "power2.out",
          scrollTrigger: {
            trigger: titleRef.current,
            start: "top 80%",
          },
        }
      );
      gsap.fromTo(
        contentRef.current,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.9,
          ease: "power2.out",
          scrollTrigger: {
            trigger: contentRef.current,
            start: "top 75%",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const store = stores[activeStore];

  return (
    <section
      id="details"
      ref={sectionRef}
      className="py-20 md:py-28 bg-stone-50"
    >
      <div className="max-w-4xl mx-auto px-6 md:px-12">
        {/* Section Title */}
        <div ref={titleRef} className="text-center mb-12 md:mb-14">
          <p
            className="text-amber-600 text-xs tracking-[0.4em] mb-3 uppercase"
            style={{ fontFamily: "'Noto Sans JP', sans-serif" }}
          >
            STORE INFORMATION
          </p>
          <h2
            className="text-stone-800 text-3xl md:text-4xl font-light mb-4"
            style={{ fontFamily: "'Noto Serif JP', serif" }}
          >
            詳細情報
          </h2>
          <div className="flex items-center justify-center gap-3">
            <div className="h-px w-16 bg-amber-400" />
            <div className="w-1.5 h-1.5 rounded-full bg-amber-500" />
            <div className="h-px w-16 bg-amber-400" />
          </div>
        </div>

        {/* Store Tabs */}
        <div className="flex flex-wrap gap-2 mb-8 justify-center" ref={contentRef}>
          {stores.map((s, idx) => (
            <button
              key={s.id}
              onClick={() => setActiveStore(idx)}
              className={`relative px-4 py-2.5 text-sm rounded-full border transition-all duration-200 cursor-pointer whitespace-nowrap ${
                activeStore === idx
                  ? "bg-amber-600 border-amber-600 text-white"
                  : "bg-white border-stone-200 text-stone-600 hover:border-amber-400 hover:text-amber-600"
              }`}
              style={{ fontFamily: "'Noto Sans JP', sans-serif" }}
            >
              {s.badge && (
                <span className="absolute -top-2 -right-1 bg-red-500 text-white text-xs px-1.5 py-0.5 rounded-full text-[10px] font-bold">
                  {s.badge}
                </span>
              )}
              {s.name}
            </button>
          ))}
        </div>

        {/* Store Detail Card */}
        <div className="bg-white rounded-2xl overflow-hidden border border-stone-100">
          {/* Card Header */}
          <div className="bg-gradient-to-r from-amber-50 to-stone-50 px-6 md:px-10 py-6 border-b border-stone-100">
            <div className="flex items-start justify-between flex-wrap gap-3">
              <div>
                {store.badge && (
                  <span className="inline-block bg-red-500 text-white text-xs px-2 py-0.5 rounded mb-2 font-bold">
                    {store.badge}
                  </span>
                )}
                <h3
                  className="text-stone-800 text-xl md:text-2xl font-semibold"
                  style={{ fontFamily: "'Noto Serif JP', serif" }}
                >
                  {store.name}
                </h3>
                <p
                  className="text-stone-400 text-sm mt-1 tracking-wider"
                  style={{ fontFamily: "'Noto Sans JP', sans-serif" }}
                >
                  {store.nameEn}
                </p>
              </div>
              <a
                href={`tel:${store.phone}`}
                className="flex items-center gap-2 text-amber-600 font-semibold hover:text-amber-700 transition-colors cursor-pointer whitespace-nowrap"
                style={{ fontFamily: "'Noto Sans JP', sans-serif" }}
              >
                <div className="w-6 h-6 flex items-center justify-center">
                  <i className="ri-phone-line text-lg" />
                </div>
                {store.phone}
              </a>
            </div>
          </div>

          {/* Table */}
          <div className="px-6 md:px-10">
            <table className="w-full">
              <tbody>
                <TableRow label="住所" value={store.address} />
                <TableRow label="アクセス" value={store.access} />
                <TableRow
                  label="営業時間"
                  value={`【ランチ】${store.lunchHours}${store.lunchLO ? `　${store.lunchLO}` : ""}`}
                  sub={`【ディナー】${store.dinnerHours}${store.dinnerLO ? `　${store.dinnerLO}` : ""}`}
                />
                <TableRow label="定休日" value={store.closed} />
                <TableRow label="席数" value={store.seats} />
                <TableRow label="貸切" value={store.privateHire} />
                <TableRow
                  label="予算"
                  value={`ランチ ${store.budgetLunch}`}
                  sub={`ディナー ${store.budgetDinner}`}
                />
                <TableRow label="支払い" value={store.payment} />
                <TableRow label="予約" value="予約可" />
              </tbody>
            </table>
          </div>

          {/* Extra Note */}
          {store.extraNote && (
            <div className="px-6 md:px-10 pb-6">
              <p
                className="text-stone-400 text-xs leading-relaxed bg-stone-50 rounded-lg px-4 py-3"
                style={{ fontFamily: "'Noto Sans JP', sans-serif" }}
              >
                {store.extraNote}
              </p>
            </div>
          )}

          {/* Footer */}
          <div className="px-6 md:px-10 py-5 border-t border-stone-50 bg-stone-50 rounded-b-2xl">
            <div className="flex flex-wrap items-center gap-3 text-xs text-stone-400">
              <span className="flex items-center gap-1">
                <i className="ri-bank-card-line" /> カード可
              </span>
              <span className="text-stone-200">|</span>
              <span className="flex items-center gap-1">
                <i className="ri-smartphone-line" /> 電子マネー可
              </span>
              <span className="text-stone-200">|</span>
              <span className="flex items-center gap-1">
                <i className="ri-qr-code-line" /> QR決済可
              </span>
              <span className="text-stone-200">|</span>
              <span className="flex items-center gap-1">
                <i className="ri-no-smoking-line" /> 全席禁煙
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

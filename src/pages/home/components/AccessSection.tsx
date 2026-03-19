import { useRef, useEffect, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { stores } from "../../../mocks/storeData";

gsap.registerPlugin(ScrollTrigger);

function AccessCard({ store }: { store: typeof stores[0] }) {
  const [mapOpen, setMapOpen] = useState(false);

  return (
    <div className="access-card bg-white rounded-xl border border-stone-100 overflow-hidden hover:border-amber-200 transition-colors duration-300">
      {/* Card Header */}
      <div className="px-6 py-5 border-b border-stone-50 bg-gradient-to-r from-amber-50/60 to-stone-50/40">
        <div className="flex items-start gap-3">
          <div className="w-8 h-8 flex items-center justify-center text-amber-600 flex-shrink-0 mt-0.5">
            <i className="ri-store-2-line text-xl" />
          </div>
          <div>
            <div className="flex items-center gap-2 flex-wrap">
              <h3
                className="text-stone-800 text-base font-semibold"
                style={{ fontFamily: "'Noto Serif JP', serif" }}
              >
                {store.name}
              </h3>
              {store.badge && (
                <span className="bg-red-500 text-white text-xs px-2 py-0.5 rounded font-bold">
                  {store.badge}
                </span>
              )}
            </div>
            <p
              className="text-stone-400 text-xs mt-0.5 tracking-wider"
              style={{ fontFamily: "'Noto Sans JP', sans-serif" }}
            >
              {store.nameEn}
            </p>
          </div>
        </div>
      </div>

      {/* Card Body */}
      <div className="px-6 py-5 space-y-4">
        {/* Address */}
        <div className="flex items-start gap-3">
          <div className="w-6 h-6 flex items-center justify-center text-amber-500 flex-shrink-0 mt-0.5">
            <i className="ri-map-pin-2-line text-base" />
          </div>
          <p
            className="text-stone-600 text-sm leading-relaxed"
            style={{ fontFamily: "'Noto Sans JP', sans-serif" }}
          >
            {store.address}
          </p>
        </div>

        {/* Access */}
        <div className="flex items-start gap-3">
          <div className="w-6 h-6 flex items-center justify-center text-amber-500 flex-shrink-0 mt-0.5">
            <i className="ri-train-line text-base" />
          </div>
          <p
            className="text-stone-500 text-sm leading-relaxed"
            style={{ fontFamily: "'Noto Sans JP', sans-serif" }}
          >
            {store.access}
          </p>
        </div>

        {/* Phone */}
        <div className="flex items-center gap-3">
          <div className="w-6 h-6 flex items-center justify-center text-amber-500 flex-shrink-0">
            <i className="ri-phone-line text-base" />
          </div>
          <a
            href={`tel:${store.phone}`}
            className="text-amber-600 text-sm font-medium hover:text-amber-700 transition-colors cursor-pointer"
            style={{ fontFamily: "'Noto Sans JP', sans-serif" }}
          >
            {store.phone}
          </a>
        </div>

        {/* Map Toggle Button */}
        <button
          onClick={() => setMapOpen((prev) => !prev)}
          className="flex items-center justify-center gap-2 w-full py-3 border border-amber-400 text-amber-600 rounded-lg text-sm font-medium hover:bg-amber-600 hover:text-white transition-all duration-200 cursor-pointer whitespace-nowrap mt-2"
          style={{ fontFamily: "'Noto Sans JP', sans-serif" }}
        >
          <i className={mapOpen ? "ri-map-2-fill" : "ri-map-2-line"} />
          {mapOpen ? "地図を閉じる" : "地図をページ内で確認する"}
          <i className={`ri-arrow-${mapOpen ? "up" : "down"}-s-line text-base`} />
        </button>

        {/* Google Maps Embed - slide down */}
        <div
          className="overflow-hidden transition-all duration-500"
          style={{ maxHeight: mapOpen ? "360px" : "0px", opacity: mapOpen ? 1 : 0 }}
        >
          <div className="rounded-lg overflow-hidden border border-stone-100 mt-1" style={{ height: "320px" }}>
            <iframe
              title={`${store.name} マップ`}
              src={store.mapEmbedUrl}
              width="100%"
              height="320"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

          {/* External link below map */}
          <a
            href={store.mapUrl}
            target="_blank"
            rel="nofollow noopener"
            className="flex items-center justify-center gap-1.5 mt-2 text-xs text-stone-400 hover:text-amber-600 transition-colors cursor-pointer"
            style={{ fontFamily: "'Noto Sans JP', sans-serif" }}
          >
            <i className="ri-external-link-line" />
            Google マップで大きく開く
          </a>
        </div>
      </div>
    </div>
  );
}

export default function AccessSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

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

      const cards = cardsRef.current?.querySelectorAll(".access-card");
      if (cards) {
        gsap.fromTo(
          cards,
          { opacity: 0, y: 40 },
          {
            opacity: 1,
            y: 0,
            duration: 0.7,
            ease: "power2.out",
            stagger: 0.12,
            scrollTrigger: {
              trigger: cardsRef.current,
              start: "top 75%",
            },
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="access" ref={sectionRef} className="py-20 md:py-28 bg-white">
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        {/* Section Title */}
        <div ref={titleRef} className="text-center mb-14 md:mb-16">
          <p
            className="text-amber-600 text-xs tracking-[0.4em] mb-3 uppercase"
            style={{ fontFamily: "'Noto Sans JP', sans-serif" }}
          >
            ACCESS
          </p>
          <h2
            className="text-stone-800 text-3xl md:text-4xl font-light mb-4"
            style={{ fontFamily: "'Noto Serif JP', serif" }}
          >
            アクセス
          </h2>
          <div className="flex items-center justify-center gap-3">
            <div className="h-px w-16 bg-amber-400" />
            <div className="w-1.5 h-1.5 rounded-full bg-amber-500" />
            <div className="h-px w-16 bg-amber-400" />
          </div>
        </div>

        {/* Access Cards Grid */}
        <div ref={cardsRef} className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {stores.map((store) => (
            <AccessCard key={store.id} store={store} />
          ))}
        </div>
      </div>
    </section>
  );
}

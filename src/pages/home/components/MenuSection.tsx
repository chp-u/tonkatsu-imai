import { useRef, useEffect, useState, useCallback } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { menuItems } from "../../../mocks/storeData";

gsap.registerPlugin(ScrollTrigger);

const SLIDE_DURATION = 4000;

export default function MenuSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  // Extended items for infinite loop: [last, ...all, first]
  const extended = [menuItems[menuItems.length - 1], ...menuItems, menuItems[0]];
  const total = extended.length;

  const [current, setCurrent] = useState(1); // start at real index 1
  const [isTransitioning, setIsTransitioning] = useState(true);

  const goTo = useCallback((index: number) => {
    setIsTransitioning(true);
    setCurrent(index);
  }, []);

  const goNext = useCallback(() => goTo(current + 1), [current, goTo]);
  const goPrev = useCallback(() => goTo(current - 1), [current, goTo]);

  // Auto-play
  useEffect(() => {
    timerRef.current = setInterval(goNext, SLIDE_DURATION);
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [goNext]);

  // Handle infinite jump
  useEffect(() => {
    if (!isTransitioning) return;
    const handle = () => {
      // After transition ends, if we're at clone positions, jump silently
      if (current === total - 1) {
        setIsTransitioning(false);
        setCurrent(1);
      } else if (current === 0) {
        setIsTransitioning(false);
        setCurrent(menuItems.length);
      }
    };
    const el = trackRef.current;
    el?.addEventListener("transitionend", handle);
    return () => el?.removeEventListener("transitionend", handle);
  }, [current, total, isTransitioning]);

  // Re-enable transition after silent jump
  useEffect(() => {
    if (!isTransitioning) {
      const raf = requestAnimationFrame(() => {
        requestAnimationFrame(() => setIsTransitioning(true));
      });
      return () => cancelAnimationFrame(raf);
    }
  }, [isTransitioning]);

  // Real index for dots (1-based in extended → 0-based in menuItems)
  const realIndex =
    current === 0
      ? menuItems.length - 1
      : current === total - 1
      ? 0
      : current - 1;

  // GSAP entrance for section title
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
        ".menu-carousel-wrap",
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".menu-carousel-wrap",
            start: "top 78%",
          },
        }
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  const translateX = -(current * (100 / total));

  return (
    <section id="menu" ref={sectionRef} className="py-20 md:py-28 bg-white overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        {/* Section Title */}
        <div ref={titleRef} className="text-center mb-14 md:mb-16">
          <p
            className="text-amber-600 text-xs tracking-[0.4em] mb-3 uppercase"
            style={{ fontFamily: "'Noto Sans JP', sans-serif" }}
          >
            POPULAR MENU
          </p>
          <h2
            className="text-stone-800 text-3xl md:text-4xl font-light mb-4"
            style={{ fontFamily: "'Noto Serif JP', serif" }}
          >
            人気メニュー
          </h2>
          <div className="flex items-center justify-center gap-3">
            <div className="h-px w-16 bg-amber-400" />
            <div className="w-1.5 h-1.5 rounded-full bg-amber-500" />
            <div className="h-px w-16 bg-amber-400" />
          </div>
          <p
            className="text-stone-500 text-sm mt-5 tracking-wide"
            style={{ fontFamily: "'Noto Sans JP', sans-serif" }}
          >
            ※ 価格は店舗・メニューにより異なります。
          </p>
        </div>

        {/* Carousel */}
        <div className="menu-carousel-wrap relative">
          {/* Prev Arrow */}
          <button
            onClick={goPrev}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-8 z-10 w-11 h-11 flex items-center justify-center bg-white border border-stone-200 rounded-full text-stone-600 hover:bg-amber-50 hover:border-amber-400 hover:text-amber-600 transition-all duration-200 cursor-pointer whitespace-nowrap"
            aria-label="前のメニュー"
          >
            <i className="ri-arrow-left-s-line text-xl" />
          </button>

          {/* Next Arrow */}
          <button
            onClick={goNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-8 z-10 w-11 h-11 flex items-center justify-center bg-white border border-stone-200 rounded-full text-stone-600 hover:bg-amber-50 hover:border-amber-400 hover:text-amber-600 transition-all duration-200 cursor-pointer whitespace-nowrap"
            aria-label="次のメニュー"
          >
            <i className="ri-arrow-right-s-line text-xl" />
          </button>

          {/* Track */}
          <div className="overflow-hidden rounded-2xl mx-6 md:mx-0">
            <div
              ref={trackRef}
              className="flex"
              style={{
                width: `${total * 100}%`,
                transform: `translateX(${translateX}%)`,
                transition: isTransitioning ? "transform 0.55s cubic-bezier(0.4, 0, 0.2, 1)" : "none",
              }}
            >
              {extended.map((item, idx) => (
                <div
                  key={`${item.id}-${idx}`}
                  style={{ width: `${100 / total}%` }}
                >
                  <div className="md:flex bg-stone-50 rounded-2xl overflow-hidden h-full">
                    {/* Image */}
                    <div
                      className="w-full md:w-1/2 flex-shrink-0"
                      style={{ height: "300px" }}
                    >
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover object-top"
                      />
                    </div>

                    {/* Content */}
                    <div className="flex flex-col justify-center p-8 md:p-12 w-full md:w-1/2">
                      <span
                        className="text-amber-500 text-xs tracking-widest mb-3 uppercase"
                        style={{ fontFamily: "'Noto Sans JP', sans-serif" }}
                      >
                        NO.{item.id} of {menuItems.length}
                      </span>
                      <h3
                        className="text-stone-800 text-2xl md:text-3xl font-semibold mb-4 leading-snug"
                        style={{ fontFamily: "'Noto Serif JP', serif" }}
                      >
                        {item.name}
                      </h3>
                      <p
                        className="text-stone-500 text-sm leading-relaxed mb-6"
                        style={{ fontFamily: "'Noto Sans JP', sans-serif" }}
                      >
                        {item.description}
                      </p>
                      <div className="flex items-end gap-2">
                        <span
                          className="text-amber-600 text-2xl font-semibold"
                          style={{ fontFamily: "'Noto Serif JP', serif" }}
                        >
                          {item.price}
                        </span>
                        <span
                          className="text-stone-400 text-xs mb-1"
                          style={{ fontFamily: "'Noto Sans JP', sans-serif" }}
                        >
                          (税込)
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Dots */}
          <div className="flex items-center justify-center gap-2 mt-8">
            {menuItems.map((_, idx) => (
              <button
                key={idx}
                onClick={() => goTo(idx + 1)}
                className={`transition-all duration-300 rounded-full cursor-pointer ${
                  realIndex === idx
                    ? "w-8 h-2 bg-amber-500"
                    : "w-2 h-2 bg-stone-300 hover:bg-amber-300"
                }`}
                aria-label={`メニュー ${idx + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Note */}
        <p
          className="text-center text-stone-400 text-xs mt-8 tracking-wide"
          style={{ fontFamily: "'Noto Sans JP', sans-serif" }}
        >
          上記は代表的なメニューです。各店舗でメニュー・価格が異なる場合があります。
        </p>
      </div>
    </section>
  );
}

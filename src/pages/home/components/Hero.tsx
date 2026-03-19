import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function Hero() {
  const headingRef = useRef<HTMLHeadingElement>(null);
  const subRef = useRef<HTMLParagraphElement>(null);
  const arrowRef = useRef<HTMLDivElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

    tl.fromTo(
      overlayRef.current,
      { opacity: 0.7 },
      { opacity: 0.45, duration: 1.8 }
    )
      .fromTo(
        headingRef.current,
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, duration: 1 },
        "-=1"
      )
      .fromTo(
        subRef.current,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.9 },
        "-=0.6"
      )
      .fromTo(
        arrowRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 0.6 },
        "-=0.3"
      );

    gsap.to(arrowRef.current, {
      y: 12,
      duration: 1.2,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
      delay: 2,
    });
  }, []);

  const scrollToMenu = () => {
    const target = document.querySelector("#menu");
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section
      id="hero"
      className="relative w-full h-screen min-h-[600px] flex items-center justify-center overflow-hidden"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url(https://readdy.ai/api/search-image?query=authentic%20Japanese%20tonkatsu%20restaurant%20interior%20warm%20amber%20lighting%20wooden%20counter%20seats%20elegant%20clean%20minimal%20zen%20atmosphere%20golden%20fried%20pork%20cutlet%20being%20served%20steam%20rising%20professional%20food&width=1920&height=1080&seq=hero-tonkatsu-main&orientation=landscape)",
        }}
      />

      {/* Dark Overlay */}
      <div
        ref={overlayRef}
        className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/50"
      />

      {/* Content */}
      <div className="relative z-10 text-center px-6 w-full">
        {/* Logo image centered */}
        <div className="flex justify-center mb-6">
          <img
            src="https://static.readdy.ai/image/68f89381c4c7240bb69246b185e50103/db622031ce3feec7752e3a603a572754.jpeg"
            alt="とんかつ今井ロゴ"
            className="w-20 h-20 md:w-24 md:h-24 object-cover rounded-full border-2 border-white/30"
          />
        </div>

        <h1
          ref={headingRef}
          className="text-white text-4xl md:text-6xl lg:text-7xl font-light tracking-[0.2em] mb-6 opacity-0"
          style={{ fontFamily: "'Noto Serif JP', serif" }}
        >
          とんかつ今井
        </h1>

        <p
          ref={subRef}
          className="text-white/85 text-base md:text-xl tracking-widest mb-2 opacity-0"
          style={{ fontFamily: "'Noto Serif JP', serif", fontWeight: 300 }}
        >
          こだわりのとんかつを、4つの店舗でご提供
        </p>
        <p
          className="text-white/70 text-sm md:text-base tracking-wider"
          style={{ fontFamily: "'Noto Sans JP', sans-serif" }}
        >
          西新宿 / 北新地 / 軽井沢 / 新橋
        </p>

        {/* Store badges */}
        <div className="flex flex-wrap items-center justify-center gap-3 mt-8">
          {["西新宿", "北新地", "軽井沢", "新橋 NEW"].map((store) => (
            <span
              key={store}
              className="px-4 py-1.5 border border-white/40 text-white/80 text-xs tracking-widest rounded-full"
              style={{ fontFamily: "'Noto Sans JP', sans-serif" }}
            >
              {store}
            </span>
          ))}
        </div>
      </div>

      {/* Scroll Arrow */}
      <div
        ref={arrowRef}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 opacity-0 cursor-pointer"
        onClick={scrollToMenu}
      >
        <div className="w-10 h-10 flex items-center justify-center">
          <i className="ri-arrow-down-s-line text-white/70 text-3xl" />
        </div>
      </div>
    </section>
  );
}

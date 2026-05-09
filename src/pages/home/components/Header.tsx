import { useState, useEffect } from "react";

const navItems = [
  { label: "メニュー", href: "#menu" },
  { label: "詳細情報", href: "#details" },
  { label: "アクセス", href: "#access" },
];

export default function Header() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isDrawerOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isDrawerOpen]);

  const handleNavClick = (href: string) => {
    setIsDrawerOpen(false);
    setTimeout(() => {
      const target = document.querySelector(href);
      if (target) {
        target.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }, 300);
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-white/95 backdrop-blur-sm border-b border-stone-100"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-none px-6 md:px-12 h-16 md:h-20 flex items-center justify-between">
          {/* Logo */}
          <a
            href="#hero"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className="flex items-center gap-3 cursor-pointer"
          >
            <div className="w-10 h-10 flex items-center justify-center">
              <img
                src=""
                alt="とんかつ"
                className="w-10 h-10 object-cover rounded-full"
              />
            </div>
            <span
              className={`font-serif text-base md:text-lg font-semibold tracking-wider whitespace-nowrap transition-colors duration-300 ${
                isScrolled ? "text-stone-800" : "text-white"
              }`}
              style={{ fontFamily: "'Noto Serif JP', serif" }}
            >
              とんかつ
            </span>
          </a>

          {/* PC Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(item.href);
                }}
                className={`text-sm font-medium tracking-widest whitespace-nowrap transition-colors duration-300 hover:text-amber-600 cursor-pointer ${
                  isScrolled ? "text-stone-600" : "text-white/90"
                }`}
                style={{ fontFamily: "'Noto Sans JP', sans-serif" }}
              >
                {item.label}
              </a>
            ))}
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="nofollow noopener"
              className={`w-8 h-8 flex items-center justify-center transition-colors duration-300 hover:text-amber-600 cursor-pointer ${
                isScrolled ? "text-stone-600" : "text-white/90"
              }`}
            >
              <i className="ri-instagram-line text-xl" />
            </a>
          </nav>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setIsDrawerOpen(true)}
            className={`md:hidden w-11 h-11 flex items-center justify-center rounded-lg transition-colors cursor-pointer ${
              isScrolled
                ? "text-stone-700 hover:bg-stone-100"
                : "text-white hover:bg-white/10"
            }`}
            aria-label="メニューを開く"
          >
            <i className="ri-menu-3-line text-2xl" />
          </button>
        </div>
      </header>

      {/* Mobile Drawer Overlay */}
      {isDrawerOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/50"
          onClick={() => setIsDrawerOpen(false)}
        />
      )}

      {/* Mobile Drawer */}
      <div
        className={`fixed top-0 right-0 bottom-0 z-50 w-4/5 max-w-xs bg-white flex flex-col transition-transform duration-300 ease-out ${
          isDrawerOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Close Button */}
        <div className="flex justify-end p-4">
          <button
            onClick={() => setIsDrawerOpen(false)}
            className="w-12 h-12 flex items-center justify-center bg-stone-800 text-white rounded-full cursor-pointer hover:bg-stone-700 transition-colors"
            aria-label="メニューを閉じる"
          >
            <i className="ri-close-line text-2xl" />
          </button>
        </div>

        {/* Drawer Logo */}
        <div className="px-8 py-4 border-b border-stone-100">
          <div className="flex items-center gap-3">
            <img
              src="https://static.readdy.ai/image/68f89381c4c7240bb69246b185e50103/db622031ce3feec7752e3a603a572754.jpeg"
              alt="とんかつ"
              className="w-10 h-10 object-cover rounded-full"
            />
            <span
              className="text-stone-800 font-semibold text-lg"
              style={{ fontFamily: "'Noto Serif JP', serif" }}
            >
              とんかつ
            </span>
          </div>
        </div>

        {/* Drawer Nav Items */}
        <nav className="flex flex-col flex-1 px-6 py-8 gap-2">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={(e) => {
                e.preventDefault();
                handleNavClick(item.href);
              }}
              className="flex items-center gap-4 px-4 py-5 text-stone-700 text-lg font-medium rounded-lg hover:bg-amber-50 hover:text-amber-700 transition-colors cursor-pointer border-b border-stone-50"
              style={{ fontFamily: "'Noto Sans JP', sans-serif" }}
            >
              <i className="ri-arrow-right-s-line text-amber-500" />
              {item.label}
            </a>
          ))}

          <a
            href="https://www.instagram.com/"
            target="_blank"
            rel="nofollow noopener"
            className="flex items-center gap-4 px-4 py-5 text-stone-700 text-lg font-medium rounded-lg hover:bg-amber-50 hover:text-amber-700 transition-colors cursor-pointer mt-2"
            style={{ fontFamily: "'Noto Sans JP', sans-serif" }}
          >
            <i className="ri-instagram-line text-amber-500 text-xl" />
            Instagram
          </a>
        </nav>
      </div>
    </>
  );
}

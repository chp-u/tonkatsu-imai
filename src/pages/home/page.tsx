import Header from "./components/Header";
import Hero from "./components/Hero";
import MenuSection from "./components/MenuSection";
import StoreDetails from "./components/StoreDetails";
import AccessSection from "./components/AccessSection";
import SiteFooter from "./components/SiteFooter";
import BackToTop from "./components/BackToTop";

export default function HomePage() {
  return (
    <div className="min-h-screen" style={{ fontFamily: "'Noto Sans JP', sans-serif" }}>
      <Header />
      <Hero />
      <MenuSection />
      <StoreDetails />
      <AccessSection />
      <SiteFooter />
      <BackToTop />
    </div>
  );
}

import { useState, useEffect } from "react";
import { MessageSquare, ArrowUp, Sparkles, TrendingUp } from "lucide-react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Metodo from "./components/Metodo";
import CaseStudy from "./components/CaseStudy";
import Services from "./components/Services";
import GoogleCompleto from "./components/GoogleCompleto";
import CaptacaoEventos from "./components/CaptacaoEventos";
import AIForm from "./components/AIForm";
import Footer from "./components/Footer";

export default function App() {
  const [currentTab, setCurrentTab] = useState("home");
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Toggle back-to-top button
      if (window.scrollY > 500) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }

      // Intersection Observer alternative for Active Tab tracking based on scroll position
      const sections = ["home", "sobre", "metodo", "case", "servicos", "google-completo", "eventos"];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setCurrentTab(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToDiagnostic = () => {
    const el = document.getElementById("diagnostico-final");
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const scrollToSection = (id: string) => {
    setCurrentTab(id);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-navy-950 text-gray-100 flex flex-col font-sans select-none antialiased relative">
      
      {/* Premium Translucent Header Menu */}
      <Header
        currentTab={currentTab}
        setCurrentTab={setCurrentTab}
        openDiagnosticModal={scrollToDiagnostic}
      />

      {/* Main Structural Layout flows */}
      <main className="flex-grow flex flex-col">
        {/* 1. Hero Section */}
        <Hero onCtaClick={scrollToDiagnostic} />

        {/* 2. Storytelling / About Section */}
        <About />

        {/* 3. P² Method Section */}
        <Metodo onCtaClick={scrollToDiagnostic} />

        {/* 4. Success Case study: Casa Travertino */}
        <CaseStudy />

        {/* 5. Services Section */}
        <Services onServiceSelect={scrollToSection} />

        {/* 6. Landing part: Google Completo service */}
        <GoogleCompleto onCtaClick={scrollToDiagnostic} />

        {/* 7. Landing part: Audiovisual/Event capts */}
        <CaptacaoEventos onCtaClick={scrollToDiagnostic} />

        {/* 8. CTA Final: Dynamic AI Marketing Diagnostic Machine */}
        <AIForm />
      </main>

      {/* 9. Premium Footer */}
      <Footer onNavClick={scrollToSection} />

      {/* Floating Interactive Conversion widgets */}
      <div className="fixed bottom-6 right-6 z-40 flex flex-col gap-3 items-end" id="floating-interaction-dock">
        
        {/* Scroll Top Button */}
        {showScrollTop && (
          <button
            onClick={handleScrollToTop}
            className="p-3.5 rounded-full bg-navy-900/90 text-gold-500 border border-gold-500/20 shadow-xl backdrop-blur-md hover:text-white hover:bg-gold-500/10 cursor-pointer transition-all hover:-translate-y-1"
            aria-label="Scroll to top"
            id="back-to-top"
          >
            <ArrowUp className="w-5 h-5" />
          </button>
        )}

        {/* Sticky Floating WhatsApp Hub bubble */}
        <a
          href="https://wa.me/5511999999999?text=Ol%C3%A1%21%20Gostaria%20de%20bater%20um%20papo%20e%20saber%20mais%20sobre%20as%20estrat%C3%A9gias%20da%20LOCCI%20Digital."
          target="_blank"
          rel="noreferrer"
          className="group flex items-center gap-2 bg-gradient-to-r from-gold-600 to-gold-500 hover:from-gold-500 hover:to-gold-400 text-navy-950 font-bold p-3.5 sm:px-5 sm:py-3.5 rounded-full shadow-2xl hover:scale-[1.03] transition-all cursor-pointer border border-gold-400/20"
          id="whatsapp-floating-bubble"
        >
          <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-300 text-xs uppercase tracking-wider font-extrabold font-mono hidden sm:inline">
            Falar pelo WhatsApp
          </span>
          <MessageSquare className="w-5 h-5 text-navy-950 fill-navy-950" />
        </a>

      </div>

    </div>
  );
}

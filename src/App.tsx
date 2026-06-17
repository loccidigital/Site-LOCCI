import { useState, useEffect } from "react";
import { MessageSquare, ArrowUp, ArrowLeft } from "lucide-react";
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

type PageType = "main" | "google-completo" | "captacao-eventos";

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageType>("main");
  const [currentTab, setCurrentTab] = useState("home");
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 500);

      // Active tab tracking: only on main page
      if (currentPage !== "main") return;

      const sections = ["home", "sobre", "metodo", "case", "servicos"];
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
  }, [currentPage]);

  // Navigate: handles both scroll-based (main page) and page-based navigation
  const navigateTo = (id: string) => {
    if (id === "google-completo") {
      setCurrentPage("google-completo");
      setCurrentTab("google-completo");
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    if (id === "eventos") {
      setCurrentPage("captacao-eventos");
      setCurrentTab("eventos");
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    // All other sections: go to main page and scroll
    if (currentPage !== "main") {
      setCurrentPage("main");
      setCurrentTab(id);
      setTimeout(() => {
        if (id === "home") {
          window.scrollTo({ top: 0, behavior: "smooth" });
        } else {
          const el = document.getElementById(id);
          if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }, 100);
    } else {
      setCurrentTab(id);
      if (id === "home") {
        window.scrollTo({ top: 0, behavior: "smooth" });
      } else {
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  };

  const scrollToDiagnostic = () => {
    if (currentPage !== "main") {
      setCurrentPage("main");
      setTimeout(() => {
        const el = document.getElementById("diagnostico-final");
        if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 100);
    } else {
      const el = document.getElementById("diagnostico-final");
      if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const goBackToMain = () => {
    setCurrentPage("main");
    setCurrentTab("servicos");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-navy-950 text-gray-100 flex flex-col font-sans select-none antialiased relative">

      <Header
        currentTab={currentTab}
        onNavigate={navigateTo}
        openDiagnosticModal={scrollToDiagnostic}
      />

      <main className="flex-grow flex flex-col">

        {/* MAIN PAGE */}
        {currentPage === "main" && (
          <>
            <Hero onCtaClick={scrollToDiagnostic} />
            <About />
            <Metodo onCtaClick={scrollToDiagnostic} />
            <CaseStudy />
            <Services onServiceSelect={navigateTo} />
            <AIForm />
          </>
        )}

        {/* GOOGLE COMPLETO — página separada */}
        {currentPage === "google-completo" && (
          <div className="pt-24 flex flex-col flex-grow">
            <div className="max-w-7xl mx-auto px-6 pt-6 pb-2 w-full">
              <button
                onClick={goBackToMain}
                className="flex items-center gap-2 text-sm text-gray-400 hover:text-gold-500 transition-colors cursor-pointer group"
              >
                <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                Voltar ao site
              </button>
            </div>
            <GoogleCompleto onCtaClick={scrollToDiagnostic} />
            <AIForm />
          </div>
        )}

        {/* CAPTAÇÃO DE EVENTOS — página separada */}
        {currentPage === "captacao-eventos" && (
          <div className="pt-24 flex flex-col flex-grow">
            <div className="max-w-7xl mx-auto px-6 pt-6 pb-2 w-full">
              <button
                onClick={goBackToMain}
                className="flex items-center gap-2 text-sm text-gray-400 hover:text-gold-500 transition-colors cursor-pointer group"
              >
                <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                Voltar ao site
              </button>
            </div>
            <CaptacaoEventos onCtaClick={scrollToDiagnostic} />
            <AIForm />
          </div>
        )}

      </main>

      <Footer onNavClick={navigateTo} />

      {/* Floating widgets */}
      <div className="fixed bottom-6 right-6 z-40 flex flex-col gap-3 items-end" id="floating-interaction-dock">

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

        <a
          href="https://wa.me/5561994219292?text=Ol%C3%A1%21%20Gostaria%20de%20saber%20mais%20sobre%20as%20estrat%C3%A9gias%20da%20LOCCI."
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

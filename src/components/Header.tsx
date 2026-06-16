import { useState, useEffect } from "react";
import { Menu, X, Sparkles, ArrowRight } from "lucide-react";
import logoLocci from "../public/logo-locci.png";

interface HeaderProps {
  currentTab: string;
  setCurrentTab: (tab: string) => void;
  openDiagnosticModal: () => void;
}

export default function Header({ currentTab, setCurrentTab, openDiagnosticModal }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Trava o scroll do body quando menu mobile está aberto
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const navItems = [
    { name: "Início", id: "home" },
    { name: "Sobre Nós", id: "sobre" },
    { name: "Método P²", id: "metodo" },
    { name: "Cases", id: "case" },
    { name: "Serviços", id: "servicos" },
    { name: "Google Completo", id: "google-completo" },
    { name: "Captação de Eventos", id: "eventos" },
  ];

  const handleNavClick = (id: string) => {
    setIsOpen(false);
    setCurrentTab(id);
    // Pequeno delay para garantir que o menu feche antes de rolar
    setTimeout(() => {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
      } else {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    }, 50);
  };

  return (
    <>
      <header
        id="main-header"
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-navy-950/90 backdrop-blur-md border-b border-white/5 py-4 shadow-xl"
            : "bg-transparent py-6"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          {/* Logo */}
          <div
            onClick={() => handleNavClick("home")}
            className="flex items-center gap-2 cursor-pointer group"
            id="logo-container"
          >
            <img
              src={logoLocci}
              alt="LOCCI"
              className="h-10 w-auto group-hover:scale-105 transition-transform"
            />
            <span className="text-white font-display font-semibold text-xl tracking-wider uppercase">
              LOCCI
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8" id="desktop-nav">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`text-sm font-medium tracking-wide transition-all duration-200 relative py-1.5 cursor-pointer hover:text-gold-500 ${
                  currentTab === item.id ? "text-gold-500" : "text-gray-300"
                }`}
                id={`nav-link-${item.id}`}
              >
                {item.name}
                {currentTab === item.id && (
                  <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-gold-600 to-gold-200 rounded-full" />
                )}
              </button>
            ))}
          </nav>

          {/* Desktop CTA Button */}
          <div className="hidden lg:flex items-center gap-4">
            <button
              onClick={openDiagnosticModal}
              className="group px-5 py-2.5 rounded-full text-xs font-semibold tracking-wider uppercase text-white bg-gradient-to-r from-gold-500 to-gold-600 hover:opacity-90 transition-all shadow-lg hover:shadow-gold-500/20 flex items-center gap-2 cursor-pointer"
              id="header-cta-button"
            >
              <Sparkles className="w-3.5 h-3.5" />
              Diagnóstico Grátis
              <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          {/* Mobile Menu Trigger */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 text-gray-300 hover:text-white transition-colors cursor-pointer z-50 relative"
            aria-label="Toggle menu"
            id="mobile-menu-trigger"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </header>

      {/* Mobile Overlay Backdrop */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Mobile Drawer */}
      {isOpen && (
        <div
          className="lg:hidden fixed top-0 right-0 bottom-0 w-4/5 max-w-sm z-50 bg-navy-950 flex flex-col justify-between py-8 px-6 border-l border-white/5 shadow-2xl"
          id="mobile-menu-drawer"
        >
          {/* Logo no topo do menu */}
          <div>
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center gap-2">
                <img src={logoLocci} alt="LOCCI" className="h-8 w-auto" />
                <span className="text-white font-display font-semibold text-lg tracking-wider uppercase">LOCCI</span>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="p-2 text-gray-400 hover:text-white transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="flex flex-col gap-1">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`text-left text-base font-display font-medium tracking-wide py-3 px-3 rounded-lg transition-all ${
                    currentTab === item.id
                      ? "text-gold-500 bg-gold-500/10 border-l-2 border-gold-500 pl-3"
                      : "text-gray-300 hover:text-white hover:bg-white/5"
                  }`}
                  id={`mobile-nav-link-${item.id}`}
                >
                  {item.name}
                </button>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <button
              onClick={() => {
                setIsOpen(false);
                setTimeout(() => openDiagnosticModal(), 50);
              }}
              className="w-full text-center py-3.5 rounded-xl font-semibold text-sm tracking-wider uppercase text-white bg-gradient-to-r from-gold-500 to-gold-600 flex items-center justify-center gap-2 cursor-pointer"
              id="mobile-menu-cta"
            >
              <Sparkles className="w-4 h-4" />
              Obter Meu Diagnóstico
            </button>
            <p className="text-center text-xs text-gray-500 font-mono">
              ★ LOCCI — MARKETING QUE FUNCIONA
            </p>
          </div>
        </div>
      )}
    </>
  );
}

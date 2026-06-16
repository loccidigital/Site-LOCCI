import { MessageSquare, Mail, Instagram, ShieldCheck, MapPin } from "lucide-react";
import logoLocci from "../public/logo-locci.png";

interface FooterProps {
  onNavClick: (id: string) => void;
}

export default function Footer({ onNavClick }: FooterProps) {
  const currentYear = new Date().getFullYear();

  const menuItems = [
    { name: "Início", id: "home" },
    { name: "Sobre Nós", id: "sobre" },
    { name: "Método P²", id: "metodo" },
    { name: "Case de Sucesso", id: "case" },
    { name: "Serviços", id: "servicos" },
    { name: "Google Completo", id: "google-completo" },
    { name: "Captação de Eventos", id: "eventos" },
    { name: "Obter Diagnóstico", id: "diagnostico-final" }
  ];

  const handleNav = (id: string) => {
    onNavClick(id);
    const elem = document.getElementById(id);
    if (elem) {
      elem.scrollIntoView({ behavior: "smooth" });
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-navy-950 text-gray-400 py-16 border-t border-white/5 font-sans" id="site-footer">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-12 gap-12 border-b border-white/5 pb-12 mb-12">

        {/* Left column: brand details */}
        <div className="md:col-span-5 space-y-5" id="footer-brand-section">
          <div className="flex items-center gap-3 cursor-pointer group" onClick={() => handleNav("home")}>
            <img
              src={logoLocci}
              alt="LOCCI"
              className="h-9 w-auto group-hover:scale-105 transition-transform"
            />
            <span className="text-white font-display font-bold text-lg tracking-wider uppercase">
              LOCCI
            </span>
          </div>

          <p className="text-sm max-w-sm leading-relaxed text-gray-400">
            A LOCCI é uma agência boutique de inteligência de marketing premium e alta conversão regional. Construímos autoridade, criamos mídias cinematográficas e dominamos mecanismos de busca locais.
          </p>

          {/* Social icons */}
          <div className="flex items-center gap-3 pt-2" id="footer-socials">
            <a
              href="https://www.instagram.com/loccidigital/"
              target="_blank"
              rel="noreferrer"
              className="p-2.5 rounded-lg bg-white/5 border border-white/10 hover:border-gold-500/50 hover:text-white transition-all text-gray-300"
              aria-label="Instagram"
            >
              <Instagram className="w-4 h-4" />
            </a>
            <a
              href="https://wa.me/5561994219292"
              target="_blank"
              rel="noreferrer"
              className="p-2.5 rounded-lg bg-white/5 border border-white/10 hover:border-gold-500/50 hover:text-white transition-all text-gray-300"
              aria-label="WhatsApp"
            >
              <MessageSquare className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Middle column: navigation links */}
        <div className="md:col-span-4" id="footer-nav-section">
          <h4 className="text-white font-display font-bold text-sm uppercase tracking-widest mb-6">Navegação</h4>
          <div className="grid grid-cols-2 gap-x-4 gap-y-3 text-sm">
            {menuItems.map((item, idx) => (
              <button
                key={idx}
                onClick={() => handleNav(item.id)}
                className="text-left text-gray-400 hover:text-gold-500 transition-colors cursor-pointer"
                id={`footer-item-${item.id}`}
              >
                {item.name}
              </button>
            ))}
          </div>
        </div>

        {/* Right column: contact */}
        <div className="md:col-span-3 space-y-6" id="footer-contact-section">
          <h4 className="text-white font-display font-bold text-sm uppercase tracking-widest">Contato Direto</h4>

          <div className="space-y-4 text-sm">
            <a
              href="mailto:loccidigital@gmail.com"
              className="flex items-center gap-2.5 hover:text-gold-500 transition-colors"
            >
              <Mail className="w-4 h-4 text-gold-500" />
              <span>loccidigital@gmail.com</span>
            </a>

            <a
              href="https://wa.me/5561994219292"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2.5 hover:text-gold-500 transition-colors"
            >
              <MessageSquare className="w-4 h-4 text-gold-500" />
              <span>+55 61 99421-9292</span>
            </a>

            <a
              href="https://wa.me/351913747506"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2.5 hover:text-gold-500 transition-colors"
            >
              <MessageSquare className="w-4 h-4 text-gold-500" />
              <span>+351 913 747 506</span>
            </a>

            <div className="flex items-center gap-2.5">
              <MapPin className="w-4 h-4 text-gold-500" />
              <span>Brasília, BR / Alcanena, PT</span>
            </div>
          </div>
        </div>

      </div>

      {/* Bottom copyright */}
      <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between text-xs text-gray-500 gap-4" id="footer-copyright-row">
        <div className="flex items-center gap-1.5">
          <ShieldCheck className="w-4 h-4 text-gold-500" />
          <span>© {currentYear} LOCCI. Todos os direitos reservados. CNPJ 61.613.724/0001-03</span>
        </div>
        <p className="font-mono tracking-widest text-[9px] uppercase">
          ✦ COMPROMISSO • LEALDADE • INOVAÇÃO
        </p>
      </div>
    </footer>
  );
}

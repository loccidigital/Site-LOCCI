import { Search, Camera, Share2, Compass, Layers, Smartphone, ArrowRight, CheckCircle2 } from "lucide-react";

interface ServicesProps {
  onServiceSelect: (id: string) => void;
}

export default function Services({ onServiceSelect }: ServicesProps) {
  const list = [
    {
      id: "google-completo",
      title: "Google Completo",
      desc: "Visibilidade absoluta onde as pessoas pesquisam ativamente. Garantimos destaque no maior mecanismo de busca do mundo com perfil otimizado, anúncios estratégicos de alta intenção e site veloz que vende.",
      bullets: ["Otimização de Perfil de Negócio", "Campanhas de Google Ads", "Resultados locais imediatos"],
      icon: Search,
      className: "border-gold-500/20 hover:border-gold-500/50"
    },
    {
      id: "eventos",
      title: "Captação de Eventos",
      desc: "Produção audiovisual sob demanda. Nossa equipe vai até a sua empresa ou celebração, captura toda a atmosfera com qualidade profissional e entrega as mídias prontas e lapidadas para postagem imediata.",
      bullets: ["Stories captados em tempo real", "Vídeo de pós-evento editado", "Material institucional bruto no Drive"],
      icon: Camera,
      className: "border-blue-500/20 hover:border-blue-500/50"
    },
    {
      id: "redes-sociais",
      title: "Gerenciamento de Redes Sociais",
      desc: "Sua marca ativa com autoridade. Criamos rotinas estratégicas de conteúdo, planejamento de linha editorial, designs sofisticados e presença consistente para conectar com o cliente local ideal.",
      bullets: ["Identidade visual consistente", "Linha editorial magnética", "Directs convertidos em leads"],
      icon: Share2,
      className: "border-white/10 hover:border-gold-500/30"
    },
    {
      id: "trafego-pago",
      title: "Tráfego Pago",
      desc: "Curtida não paga conta. Desenvolvemos e operamos as melhores táticas de anúncios patrocinados no Google Ads e Meta Ads para capturar leads prontos para contratar seu serviço ou comprar seu produto.",
      bullets: ["Análise de CAC e ROI", "Públicos geolocalizados", "Foco em vendas e faturamento"],
      icon: CompartilharExtra, // Use custom icon or custom icon indicator
      className: "border-white/10 hover:border-gold-500/30"
    },
    {
      id: "sites",
      title: "Sites & Landing Pages",
      desc: "Sua melhor vitrine comercial vendendo 24 horas por dia. Desenvolvemos soluções leves, pensadas especificamente para reter o usuário e guiá-lo em uma jornada veloz até o contato comercial direto.",
      bullets: ["Design responsivo e veloz", "Otimizado para conversão", "Garantia de carregamento rápido"],
      icon: Layers,
      className: "border-white/10 hover:border-gold-500/30"
    }
  ];

  function CompartilharExtra() {
    return (
      <svg className="w-6 h-6 text-gold-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    );
  }

  const handleSaibaMais = (id: string) => {
    onServiceSelect(id);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section id="servicos" className="relative py-25 bg-[#0a0f1d] text-white overflow-hidden">
      {/* Light design effects */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-gold-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Title services */}
        <div className="max-w-3xl mx-auto text-center mb-20" id="services-intro">
          <span className="text-xs font-mono font-bold text-gold-500 uppercase tracking-widest bg-white/5 py-1.5 px-3 rounded-full border border-white/10">
            Nossas Especialidades
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-black tracking-tight mt-4 mb-4 text-white">
            Como podemos ajudar seu negócio?
          </h2>
          <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
            Unimos o melhor de dois mundos: captação visual premium e anúncios estratégicos focados em conversão imediata. Conheça nossos serviços.
          </p>
        </div>

        {/* Services grid representation */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" id="services-grid">
          {list.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={service.id}
                className={`bg-navy-900/50 p-6 rounded-2xl border ${service.className} hover:bg-navy-900/80 transition-all duration-300 flex flex-col justify-between group h-full`}
                id={`service-card-${service.id}`}
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center text-gold-500 mb-6 group-hover:scale-105 transition-transform">
                    {typeof Icon === "function" ? <Icon /> : <Search className="w-6 h-6 text-gold-500" />}
                  </div>

                  <h3 className="text-xl font-display font-bold text-white mb-3 group-hover:text-gold-200 transition-colors">
                    {service.title}
                  </h3>
                  
                  <p className="text-gray-400 text-xs sm:text-sm leading-relaxed mb-6">
                    {service.desc}
                  </p>

                  <ul className="space-y-2 mb-8">
                    {service.bullets.map((bullet, bIdx) => (
                      <li key={bIdx} className="flex items-center gap-2 text-xs text-gray-300">
                        <CheckCircle2 className="w-3.5 h-3.5 text-gold-500 flex-shrink-0" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Saiba mais redirect button */}
                <button
                  onClick={() => handleSaibaMais(service.id)}
                  className="group/btn text-xs font-bold uppercase tracking-wider text-gold-500 hover:text-white flex items-center gap-2 cursor-pointer transition-colors pt-4 border-t border-white/5 mt-auto"
                >
                  Saiba mais sobre {service.title}
                  <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1.5 transition-transform" />
                </button>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

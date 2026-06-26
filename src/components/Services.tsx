import { Search, Camera, Share2, Layers, ArrowRight, CheckCircle2 } from "lucide-react";

interface ServicesProps {
  onServiceSelect: (id: string) => void;
}

function BoltIcon() {
  return (
    <svg className="w-6 h-6 text-gold-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
      <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
    </svg>
  );
}

const services = [
  {
    id: "google-completo",
    title: "Google Completo",
    desc: "Visibilidade absoluta onde as pessoas pesquisam ativamente. Garantimos destaque no maior mecanismo de busca do mundo com perfil otimizado, anúncios estratégicos de alta intenção e site veloz que vende.",
    bullets: ["Otimização de Perfil de Negócio", "Campanhas de Google Ads", "Resultados locais imediatos"],
    icon: "search" as const,
    className: "border-gold-500/20 hover:border-gold-500/50",
    whatsapp: false,
  },
  {
    id: "eventos",
    title: "Captação de Eventos",
    desc: "Produção audiovisual sob demanda. Nossa equipe vai até a sua empresa ou celebração, captura toda a atmosfera com qualidade profissional e entrega as mídias prontas e lapidadas para postagem imediata.",
    bullets: ["Stories captados em tempo real", "Vídeo de pós-evento editado", "Material institucional bruto no Drive"],
    icon: "camera" as const,
    className: "border-blue-500/20 hover:border-blue-500/50",
    whatsapp: false,
  },
  {
    id: "redes-sociais",
    title: "Gerenciamento de Redes Sociais",
    desc: "Sua marca ativa com autoridade. Criamos rotinas estratégicas de conteúdo, planejamento de linha editorial, designs sofisticados e presença consistente para conectar com o cliente local ideal.",
    bullets: ["Identidade visual consistente", "Linha editorial magnética", "Directs convertidos em leads"],
    icon: "share" as const,
    className: "border-white/10 hover:border-gold-500/30",
    whatsapp: true,
    waMessage: "Olá! Tenho interesse em saber mais sobre Gerenciamento de Redes Sociais.",
  },
  {
    id: "trafego-pago",
    title: "Tráfego Pago",
    desc: "Curtida não paga conta. Desenvolvemos e operamos as melhores táticas de anúncios patrocinados no Google Ads e Meta Ads para capturar leads prontos para contratar seu serviço ou comprar seu produto.",
    bullets: ["Análise de CAC e ROI", "Públicos geolocalizados", "Foco em vendas e faturamento"],
    icon: "bolt" as const,
    className: "border-white/10 hover:border-gold-500/30",
    whatsapp: true,
    waMessage: "Olá! Tenho interesse em saber mais sobre Tráfego Pago.",
  },
  {
    id: "sites",
    title: "Sites & Landing Pages",
    desc: "Sua melhor vitrine comercial vendendo 24 horas por dia. Desenvolvemos soluções leves, pensadas especificamente para reter o usuário e guiá-lo em uma jornada veloz até o contato comercial direto.",
    bullets: ["Design responsivo e veloz", "Otimizado para conversão", "Garantia de carregamento rápido"],
    icon: "layers" as const,
    className: "border-white/10 hover:border-gold-500/30",
    whatsapp: true,
    waMessage: "Olá! Tenho interesse em saber mais sobre Sites e Landing Pages.",
  },
];

function ServiceIcon({ type }: { type: string }) {
  if (type === "search") return <Search className="w-6 h-6 text-gold-500" />;
  if (type === "camera") return <Camera className="w-6 h-6 text-gold-500" />;
  if (type === "share") return <Share2 className="w-6 h-6 text-gold-500" />;
  if (type === "bolt") return <BoltIcon />;
  if (type === "layers") return <Layers className="w-6 h-6 text-gold-500" />;
  return <Search className="w-6 h-6 text-gold-500" />;
}

export default function Services({ onServiceSelect }: ServicesProps) {
  const firstRow = services.slice(0, 3);
  const secondRow = services.slice(3);

  const renderCard = (service: typeof services[0]) => (
    <div
      key={service.id}
      className={`bg-navy-900/50 p-6 rounded-2xl border ${service.className} hover:bg-navy-900/80 transition-all duration-300 flex flex-col justify-between group h-full`}
      id={`service-card-${service.id}`}
    >
      <div>
        <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center text-gold-500 mb-6 group-hover:scale-105 transition-transform">
          <ServiceIcon type={service.icon} />
        </div>
        <h3 className="text-xl font-display font-bold text-white mb-3 group-hover:text-gold-200 transition-colors">
          {service.title}
        </h3>
        <p className="text-gray-400 text-xs sm:text-sm leading-relaxed mb-6 [text-wrap:pretty]">
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

      {service.whatsapp ? (
        <a
          href={`https://wa.me/5561994219292?text=${encodeURIComponent(service.waMessage ?? "")}`}
          target="_blank"
          rel="noreferrer"
          className="group/btn text-xs font-bold uppercase tracking-wider text-gold-500 hover:text-white flex items-center gap-2 cursor-pointer transition-colors pt-4 border-t border-white/5 mt-auto"
        >
          Saiba mais sobre {service.title}
          <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1.5 transition-transform" />
        </a>
      ) : (
        <button
          onClick={() => onServiceSelect(service.id)}
          className="group/btn text-xs font-bold uppercase tracking-wider text-gold-500 hover:text-white flex items-center gap-2 cursor-pointer transition-colors pt-4 border-t border-white/5 mt-auto"
        >
          Saiba mais sobre {service.title}
          <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1.5 transition-transform" />
        </button>
      )}
    </div>
  );

  return (
    <section id="servicos" className="relative py-25 bg-[#0a0f1d] text-white overflow-hidden">
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-gold-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">

        <div className="max-w-3xl mx-auto text-center mb-20" id="services-intro">
          <span className="text-xs font-mono font-bold text-gold-500 uppercase tracking-widest bg-white/5 py-1.5 px-3 rounded-full border border-white/10">
            Nossas Especialidades
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-black tracking-tight mt-4 mb-4 text-white [text-wrap:pretty]">
            Como podemos ajudar seu negócio?
          </h2>
          <p className="text-gray-400 text-sm sm:text-base leading-relaxed [text-wrap:pretty]">
            Unimos o melhor de dois mundos: captação visual de qualidade e anúncios estratégicos focados em conversão imediata. Conheça nossos serviços.
          </p>
        </div>

        {/* Linha 1: Google Completo | Captação de Eventos | Gerenciamento */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8" id="services-grid-top">
          {firstRow.map(renderCard)}
        </div>

        {/* Linha 2: Tráfego Pago | Sites & Landing Pages — centralizados */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:w-2/3 mx-auto" id="services-grid-bottom">
          {secondRow.map(renderCard)}
        </div>

      </div>
    </section>
  );
}

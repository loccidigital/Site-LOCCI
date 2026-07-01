import { Play, Camera, Film, Send, CheckCircle2, Download } from "lucide-react";

interface CaptacaoEventosProps {
  onCtaClick: () => void;
}

export default function CaptacaoEventos({ onCtaClick }: CaptacaoEventosProps) {
  const deliveries = [
    {
      title: "Todo o Material Bruto no Drive",
      desc: "Tudo o que foi captado no evento fica guardado, organizado de forma impecável e disponível no Google Drive no mesmo dia, pronto para você armazenar, revisar e usar quando quiser.",
      icon: Download,
      color: "from-blue-500/20 to-blue-600/10"
    },
    {
      title: "Vídeo Editado e Finalizado",
      desc: "Um vídeo cinematográfico completo das principais cenas do evento, com transições dinâmicas, tratamento professional de cores e áudio ideal, pronto para causar impacto imediato nas suas redes.",
      icon: Film,
      color: "from-gold-500/20 to-gold-600/10"
    },
    {
      title: "Stories em Tempo Real durante o Evento",
      desc: "Seu evento ganha vida na internet enquanto ele ainda está acontecendo. Capturamos e postamos pílulas dinâmicas de bastidores, mantendo seu público conectado e gerando desejo espontâneo.",
      icon: Send,
      color: "from-purple-500/20 to-purple-600/10"
    },
    {
      title: "Bônus: Fotos do Evento Editadas",
      desc: "Além do formato em vídeo, nossa equipe captura e entrega imagens estáticas profissionais tratadas e ajustadas para sua equipe publicar em carrosséis ou materiais institucionais adicionais.",
      icon: Camera,
      color: "from-green-500/20 to-green-600/10"
    }
  ];

  return (
    <section id="eventos" className="relative py-24 bg-gradient-to-b from-navy-950 to-[#030a16] text-white overflow-hidden">
      {/* Intense dark cinematic ambient backdrop */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-gold-600/5 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(#ffffff02_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* Upper Title block */}
        <div className="max-w-3xl mx-auto text-center mb-16" id="event-header">
          <span className="text-xs font-mono font-bold text-gold-500 uppercase tracking-widest bg-white/5 py-1.5 px-3.5 rounded-full border border-white/10 inline-flex items-center gap-1.5">
            <Film className="w-3.5 h-3.5 text-gold-500" /> Cobertura Audiovisual de Qualidade
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-black tracking-tight text-white mt-4 mb-4 [text-wrap:pretty]">
            A LOCCI vai ao seu evento e entrega tudo pronto pra você usar
          </h2>
        </div>

        {/* Cinematic Device / Reels Overlay Stack preview */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-20">

          {/* Left panel: Bullet storytelling */}
          <div className="lg:col-span-5 flex flex-col gap-6 text-left" id="event-narrative">
            {/* Texto narrativo — visível em todos os tamanhos */}
            <div className="flex flex-col gap-4">
              <h3 className="text-2xl font-display font-extrabold text-white leading-snug">
                Seu evento foi incrível, mas você não tem um bom registro para divulgar?
              </h3>
              <p className="text-gray-400 text-sm sm:text-base leading-relaxed max-w-md">
                Celular tremendo e luz estourada não refletem o valor real do que aconteceu. A LOCCI captura tudo com equipamentos profissionais e transforma o momento em conteúdo que gera autoridade e novos negócios.
              </p>
            </div>

            {/* Botão — visível apenas no desktop aqui */}
            <div className="hidden lg:flex">
              <button
                onClick={onCtaClick}
                className="px-6 py-3.5 rounded-xl font-bold text-xs tracking-wider uppercase text-navy-950 bg-gold-500 hover:bg-gold-600 transition-all inline-flex items-center gap-2 cursor-pointer"
              >
                Garanta que seu evento seja incrível
                <Play className="w-3.5 h-3.5 fill-navy-950 text-navy-950" />
              </button>
            </div>
          </div>

          {/* Right panel: YouTube Shorts embed inside phone frame */}
          <div className="lg:col-span-7 flex justify-center" id="stories-mockup-container">
            <div className="relative w-full max-w-[300px]">

              {/* Phone frame outer shell */}
              <div className="relative rounded-[40px] bg-navy-900 border-4 border-white/10 p-2 shadow-2xl">

                {/* Dynamic island / notch */}
                <div className="absolute top-3 left-1/2 -translate-x-1/2 w-20 h-4 bg-black rounded-full z-20" />

                {/* Video container 9:16 */}
                <div className="relative rounded-[32px] overflow-hidden aspect-[9/16]">
                  <iframe
                    src="https://www.youtube.com/embed/FgP1PKVKXp8?autoplay=1&mute=1&loop=1&playlist=FgP1PKVKXp8&rel=0&modestbranding=1&playsinline=1&controls=0"
                    title="Captação de Eventos LOCCI — Cobertura Audiovisual Profissional"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="absolute inset-0 w-full h-full"
                  />
                </div>

                {/* Bottom home bar detail */}
                <div className="flex justify-center pt-2 pb-1">
                  <div className="w-24 h-1 bg-white/20 rounded-full" />
                </div>

              </div>

              {/* Glow decoration */}
              <div className="absolute -inset-4 bg-gold-500/10 rounded-full blur-3xl -z-10 pointer-events-none" />

            </div>
          </div>

        </div>

        {/* Deliverables cards listing */}
        <h3 className="text-2xl sm:text-3xl font-display font-black text-center text-white mb-2 [text-wrap:pretty]">
          Nossos Formatos de Entrega
        </h3>
        <p className="text-gray-400 text-sm text-center max-w-lg mx-auto mb-12 [text-wrap:pretty]">
          Garantimos profissionalismo absoluto, velocidade de renderização e organização digital impecável do material.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6" id="event-deliveries">
          {deliveries.map((del, dIdx) => {
            const Icon = del.icon;
            return (
              <div
                key={dIdx}
                className={`bg-navy-900 border border-white/5 rounded-2xl p-6 flex flex-col justify-between hover:border-gold-500/30 transition-all duration-300 group`}
                id={`event-delivery-card-${dIdx}`}
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-gold-500 mb-5 group-hover:scale-105 transition-transform">
                    {Icon && <Icon className="w-5 h-5" />}
                  </div>

                  <h4 className="font-display font-bold text-white text-sm sm:text-base group-hover:text-gold-200 transition-colors [text-wrap:pretty]">
                    {del.title}
                  </h4>
                  <p className="text-gray-400 text-xs sm:text-sm leading-relaxed mt-2 [text-wrap:pretty]">
                    {del.desc}
                  </p>
                </div>

                <div className="pt-4 border-t border-white/5 mt-6 flex items-center gap-2 text-[10px] text-gray-500 font-mono uppercase">
                  <CheckCircle2 className="w-3.5 h-3.5 text-gold-500" />
                  ENTREGA GARANTIDA
                </div>
              </div>
            );
          })}
        </div>

        {/* Botão CTA — visível apenas no mobile, após os cards */}
        <div className="flex lg:hidden justify-center mt-10">
          <button
            onClick={onCtaClick}
            className="w-full max-w-sm px-6 py-4 rounded-xl font-bold text-xs tracking-wider uppercase text-navy-950 bg-gold-500 hover:bg-gold-600 transition-all inline-flex items-center justify-center gap-2 cursor-pointer"
          >
            Garanta que seu evento seja incrível
            <Play className="w-3.5 h-3.5 fill-navy-950 text-navy-950" />
          </button>
        </div>

      </div>
    </section>
  );
}

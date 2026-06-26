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
          <div className="lg:col-span-5 space-y-6" id="event-narrative">
            {/* Texto narrativo — oculto no mobile */}
            <div className="hidden lg:block space-y-6">
              <h3 className="text-2xl font-display font-extrabold text-white [text-wrap:pretty]">
                Seu evento foi incrível, mas você não tem nenhum bom registro real para divulgar?
              </h3>
              <p className="text-gray-400 text-sm sm:text-base leading-relaxed [text-wrap:pretty]">
                Celular tremendo, áudio falho e luz estourada não transmitem o verdadeiro padrão de valor do seu serviço. No final, o material amador não faz jus ao impacto real que o seu evento presencial causou.
              </p>
              <p className="text-gray-400 text-sm sm:text-base leading-relaxed [text-wrap:pretty]">
                Nossa equipe carrega equipamentos de primeira linha para estruturar um storytelling audiovisual forte. Capturamos depoimentos de convidados em tempo real, mostramos a energia do espaço físico e transformamos esse momento em uma poderosa máquina de marketing para fechar novos negócios futuros.
              </p>
            </div>

            {/* Botão — visível apenas no desktop aqui */}
            <div className="pt-4 hidden lg:flex">
              <button
                onClick={onCtaClick}
                className="px-6 py-3.5 rounded-xl font-bold text-xs tracking-wider uppercase text-navy-950 bg-gold-500 hover:bg-gold-600 transition-all inline-flex items-center gap-2 cursor-pointer"
              >
                Garantir Captura no Meu Evento
                <Play className="w-3.5 h-3.5 fill-navy-950 text-navy-950" />
              </button>
            </div>
          </div>

          {/* Right panel: Phone simulator modeling stories capture */}
          <div className="lg:col-span-7 flex justify-center" id="stories-mockup-container">
            <div className="relative w-full max-w-[400px]">

              {/* Main Simulated Phone Frame */}
              <div className="relative rounded-[36px] bg-navy-900 border-4 border-white/10 p-2.5 shadow-2xl overflow-hidden aspect-[9/16] max-h-[500px] mx-auto flex flex-col justify-between">

                {/* Selfie Cam / Speaker Detail */}
                <span className="absolute top-4 left-1/2 -translate-x-1/2 w-24 h-4 bg-black rounded-full z-20 flex items-center justify-center">
                  <span className="w-2.5 h-2.5 rounded-full bg-blue-900/40" />
                </span>

                {/* Main Visual background representing active recording visual */}
                <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/20 to-navy-950/40 z-0" />

                {/* Simulated Content inside screen */}
                <div className="relative z-10 p-4 pt-10 flex flex-col justify-between h-full text-white">

                  {/* Top user profile header */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 bg-black/40 p-1.5 rounded-full border border-white/5 backdrop-blur-sm">
                      <div className="w-6 h-6 rounded-full bg-gold-500 text-navy-950 font-display font-black text-[9px] flex items-center justify-center">L</div>
                      <div>
                        <span className="block text-[9px] font-bold">@loccidigital</span>
                        <span className="block text-[7px] text-gray-300">Gravado agora mesmo</span>
                      </div>
                    </div>
                    <span className="px-2 py-0.5 rounded bg-red-600 text-[8px] font-mono tracking-widest font-black animate-pulse">● AO VIVO</span>
                  </div>

                  {/* Play circle button overlay to trigger feeling */}
                  <div className="flex items-center justify-center pb-12 cursor-pointer group">
                    <div className="w-16 h-16 rounded-full bg-gold-500/20 border border-gold-500/50 flex items-center justify-center group-hover:scale-105 transition-transform">
                      <Play className="w-6 h-6 text-gold-500 fill-gold-500 ml-1" />
                    </div>
                  </div>

                  {/* Text details bottom of screen */}
                  <div className="space-y-2 bg-black/50 p-3 rounded-xl border border-white/5 backdrop-blur-sm">
                    <span className="text-[8px] font-mono text-gold-500 font-bold uppercase tracking-wider">Momento Captado</span>
                    <h4 className="text-xs font-bold leading-tight [text-wrap:pretty]">Posicionamento e Entrega Cinematográfica do seu Showroom</h4>
                    <p className="text-[9px] text-gray-300">Geração de desejo e autoridade em segundos de tela.</p>
                  </div>

                </div>

              </div>

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
            Garantir Captura no Meu Evento
            <Play className="w-3.5 h-3.5 fill-navy-950 text-navy-950" />
          </button>
        </div>

      </div>
    </section>
  );
}

import { CheckCircle, Trophy, Star, ArrowRight, Activity, CalendarDays } from "lucide-react";

export default function CaseStudy() {
  const steps = [
    {
      title: "01. Nome & Identidade",
      desc: "Análise de público de qualidade e desenvolvimento do nome 'Casa Travertino', traduzindo sofisticação, solidez e acabamento de alto padrão."
    },
    {
      title: "02. Site & Vitrine",
      desc: "Uma landing page de design minimalista, responsiva e otimizada para SEO local, focada em guiar o usuário diretamente ao botão de orçamento."
    },
    {
      title: "03. Captação & Reels",
      desc: "Capturamos fotos e vídeos roteirizados de qualidade, transmitindo para as redes sociais os valores da empresa."
    },
    {
      title: "04. Funil de Anúncios",
      desc: "Estruturação de campanhas direcionadas no Google Ads e Meta Ads para captar o cliente local refinado no exato momento da decisão."
    }
  ];

  return (
    <section id="case" className="relative py-24 bg-white overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ab864405_1px,transparent_1px),linear-gradient(to_bottom,#ab864405_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16" id="case-header">
          <span className="text-xs font-mono font-bold text-gold-600 uppercase tracking-widest bg-gold-100/50 px-3.5 py-1.5 rounded-full border border-gold-200">
            ★ Case de Sucesso em Destaque
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-black tracking-tight text-navy-950 mt-4 mb-4 [text-wrap:pretty]">
            Do absoluto zero a 40 clientes qualificados por mês
          </h2>
          <p className="text-gray-600 text-sm sm:text-base leading-relaxed [text-wrap:pretty]">
            A Casa Travertino chegou até nós antes mesmo de ter um nome definido. Construímos todo o posicionamento digital da marca do absoluto zero e estruturamos um funil previsível de faturamento local.
          </p>
        </div>

        {/* Core Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">

          {/* Left panel */}
          <div className="lg:col-span-6 space-y-6" id="case-visual">
            <div className="relative rounded-2xl overflow-hidden bg-navy-950 p-8 border border-white/10 shadow-2xl text-white">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gold-500/10 rounded-full blur-2xl" />

              <div className="flex justify-between items-start mb-6">
                <div>
                  <span className="text-[10px] text-gold-500 font-mono uppercase tracking-widest">Nicho Construção</span>
                  <h3 className="text-xl font-display font-bold text-white mt-1">Casa Travertino</h3>
                  <p className="text-xs text-gray-400">Revestimentos e Acabamentos</p>
                </div>
                <span className="px-2.5 py-1 rounded bg-gold-500/10 border border-gold-500/30 text-[10px] text-gold-500 font-mono uppercase">
                  Resultado Certo
                </span>
              </div>

              <div className="grid grid-cols-2 gap-4 mt-6">
                <div className="bg-white/5 p-4 rounded-xl border border-white/5">
                  <span className="text-[10px] text-gray-400 font-mono uppercase block">Status Inicial</span>
                  <span className="text-sm font-semibold text-red-400 block mt-1">Zero Clientes Digitais</span>
                  <span className="text-[9px] text-gray-500">Apenas uma ideia no papel</span>
                </div>
                <div className="bg-white/5 p-4 rounded-xl border border-gold-500/10">
                  <span className="text-[10px] text-gold-500 font-mono uppercase block">Resultado Atual</span>
                  <span className="text-base font-bold text-green-400 block mt-1">+40 Leads/mês</span>
                  <span className="text-[9px] text-gray-500">Faturamento local previsível</span>
                </div>
              </div>

              <div className="bg-gradient-to-tr from-gold-100 to-gold-50 p-[1.5px] rounded-xl border border-white/5 mt-6">
                <div className="bg-navy-900 rounded-[11px] p-4 flex items-center justify-between text-xs">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded bg-gold-200 flex items-center justify-center font-bold text-navy-950">
                      <Activity className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="block font-bold">Impacto Financeiro</span>
                      <span className="text-[9px] text-gray-400">Aumento Relevante de Faturamento</span>
                    </div>
                  </div>
                  <Trophy className="w-5 h-5 text-gold-500" />
                </div>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-4" id="case-stats-ticker">
              <div className="bg-gold-50 p-4 rounded-xl border border-gold-200 text-center">
                <span className="block text-2xl font-display font-extrabold text-navy-900">40</span>
                <span className="text-[10px] text-gray-500 uppercase font-mono tracking-wider block mt-1">Leads /mês</span>
              </div>
              <div className="bg-gold-50 p-4 rounded-xl border border-gold-200 text-center">
                <span className="block text-2xl font-display font-extrabold text-navy-900">100%</span>
                <span className="text-[10px] text-gray-500 uppercase font-mono tracking-wider block mt-1">Marca Estruturada</span>
              </div>
              <div className="bg-gold-50 p-4 rounded-xl border border-gold-200 text-center">
                <span className="block text-2xl font-display font-extrabold text-navy-900">10x</span>
                <span className="text-[10px] text-gray-500 uppercase font-mono tracking-wider block mt-1">Retorno de ROI</span>
              </div>
            </div>
          </div>

          {/* Right panel */}
          <div className="lg:col-span-6 flex flex-col justify-between" id="case-deliverables">
            <div className="space-y-6">
              <h3 className="text-2xl font-display font-black text-navy-950">
                Como construímos essa história<br />de sucesso do absoluto zero:
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {steps.map((step, idx) => (
                  <div key={idx} className="bg-gold-50/50 p-5 rounded-xl border border-gold-100 flex flex-col gap-2">
                    <h4 className="font-display font-bold text-navy-950 text-sm sm:text-base">
                      {step.title}
                    </h4>
                    <p className="text-gray-500 text-xs sm:text-sm leading-relaxed [text-wrap:pretty]">
                      {step.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>

        {/* Depoimento */}
        <div className="max-w-4xl mx-auto mt-16" id="case-testimonial">
          <div className="relative bg-gradient-to-r from-gold-50 to-gold-100 p-8 sm:p-12 rounded-3xl border border-gold-200 shadow-md">
            <span className="absolute top-4 left-6 text-7xl font-display text-gold-500/20 select-none pointer-events-none">"</span>
            <div className="relative z-10 flex flex-col gap-6">
              <p className="text-navy-950 text-base sm:text-lg lg:text-xl font-medium italic leading-relaxed text-center [text-wrap:pretty]">
                {"\"Muito obrigada por toda a ajuda gente, tá tudo um sonho. Vocês pegaram nosso sonho, uma ideia que a gente só tinha na cabeça"}
                <br className="sm:hidden" />{" "}
                {"e tornaram real.\""}
              </p>
              <div className="flex items-center justify-center gap-3">
                <div className="w-11 h-11 rounded-full bg-navy-900 text-white flex items-center justify-center font-display font-bold text-sm">
                  C
                </div>
                <div>
                  <h4 className="font-display font-bold text-navy-900 sm:text-base">Cátia</h4>
                  <p className="text-xs text-gray-500 font-mono uppercase">Fundadora, Casa Travertino</p>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

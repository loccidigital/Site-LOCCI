import { useState } from "react";
import { Compass, CheckCircle2, AlertCircle, ArrowRight } from "lucide-react";

interface MetodoProps {
  onCtaClick: () => void;
}

export default function Metodo({ onCtaClick }: MetodoProps) {
  const [activeContrastTab, setActiveContrastTab] = useState<"with" | "without">("without");

  const pillars = [
    {
      num: "01",
      title: "Hiperpersonalização",
      desc: "Com base nos valores e objetivos da sua empresa, desenvolvemos uma comunicação estratégica exclusiva para transformar a presença digital em uma extensão autêntica da sua marca.",
      details: ["Estudo aprofundado do segmento", "Tom de voz específico da empresa", "Análise de público geolocalizado"]
    },
    {
      num: "02",
      title: "Praticidade",
      desc: "Uma estrutura altamente organizada e transparente que centraliza toda a operação da marca em um só lugar para tornar a comunicação ágil, acessível e eficiente no dia a dia.",
      details: ["Drive único e organizado", "Centralização de materiais", "Processo rápido de aprovação"]
    },
    {
      num: "03",
      title: "Estratégia",
      desc: "Cada decisão é construída com intenção genuína, análise de concorrência e posicionamento inteligente para garantir que a comunicação da sua marca tenha direção, consistência e rentabilidade.",
      details: ["Direcionamento de anúncios", "Funil comercial integrado", "Foco no lead qualificado"]
    },
    {
      num: "04",
      title: "Otimização",
      desc: "Análise contínua de métricas, comportamento do consumidor local e dados de anúncios para refinar as estratégias, otimizar orçamentos e potencializar o crescimento da sua marca.",
      details: ["Dashboard claro de resultados", "Reunião mensal de alinhamento", "Ajustes de lance em tempo real"]
    }
  ];

  return (
    <section id="metodo" className="relative py-24 bg-gradient-to-b from-[#101930] to-navy-950 text-white overflow-hidden">
      {/* Light highlights */}
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-gold-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* Title block */}
        <div className="max-w-5xl mx-auto text-center mb-16" id="metodo-intro">
          <span className="text-xs font-mono font-bold text-gold-500 uppercase tracking-widest bg-white/5 px-3 py-1.5 rounded-full border border-white/10">
            Metodologia LOCCI
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-[2.75rem] font-display font-black tracking-tight text-white mt-4 mb-6 lg:whitespace-nowrap">
            Método P² — Prático e Personalizado
          </h2>
          <p className="text-gray-300 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto">
            Nada de pacote genérico. Nada de estratégia copiada. O Método P² é o jeito LOCCI de trabalhar: mergulhamos no seu negócio, entendemos sua história, valores e objetivos, e montamos um plano de ação claro, direto e acompanhável.
          </p>
        </div>

        {/* Interactive Contrast Section: Sem o Método vs Com o Método */}
        <div className="bg-navy-900/60 p-6 sm:p-8 rounded-2xl border border-white/10 shadow-2xl mb-20">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-8 border-b border-white/5 pb-6">
            <div>
              <h3 className="text-xl font-display font-bold text-white [text-wrap:pretty]">Como você quer operar o marketing da sua empresa?</h3>
              <p className="text-xs sm:text-sm text-gray-400">Veja como sua empresa ficaria com o método LOCCI.</p>
            </div>

            {/* Toggler */}
            <div className="flex bg-navy-950 p-1.5 rounded-xl border border-white/5 select-none font-mono text-xs">
              <button
                onClick={() => setActiveContrastTab("without")}
                className={`px-4 py-2 rounded-lg cursor-pointer transition-all ${
                  activeContrastTab === "without"
                    ? "bg-red-500/20 text-red-400 border border-red-500/30"
                    : "text-gray-400 hover:text-white"
                }`}
                id="tab-without-metodo"
              >
                Sem o Método P²
              </button>
              <button
                onClick={() => setActiveContrastTab("with")}
                className={`px-4 py-2 rounded-lg cursor-pointer transition-all ${
                  activeContrastTab === "with"
                    ? "bg-gold-500 text-navy-950 font-bold"
                    : "text-gray-400 hover:text-white"
                }`}
                id="tab-with-metodo"
              >
                Com o Método P²
              </button>
            </div>
          </div>

          {/* Contrast Content Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">

            {/* Visual simulation representation */}
            <div className="bg-navy-950 p-6 rounded-xl border border-white/5 h-[280px] flex flex-col justify-between relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-white/2 rounded-full pointer-events-none" />

              {activeContrastTab === "without" ? (
                <>
                  <div className="flex items-center gap-2 text-red-500">
                    <AlertCircle className="w-5 h-5" />
                    <span className="font-mono text-xs font-bold uppercase tracking-widest">Totalmente Perdido</span>
                  </div>
                  <div className="flex-1 flex items-center justify-center py-4">
                    <div className="w-full max-w-[280px] stroke-red-500/60 flex flex-col items-center gap-2 text-center">
                      <div className="w-12 h-12 rounded-full bg-red-500/10 flex items-center justify-center text-red-400 text-lg animate-pulse">❓</div>
                      <p className="text-xs text-gray-400 max-w-[220px] [text-wrap:pretty]">Anúncios jogados no lixo, posts diários sem engajamento, dependência do acaso e zero previsibilidade comercial.</p>
                    </div>
                  </div>
                  <span className="text-[10px] text-gray-600 font-mono text-center block uppercase tracking-widest">Insegurança & Dinheiro no Ralo</span>
                </>
              ) : (
                <>
                  <div className="flex items-center gap-2 text-gold-500">
                    <CheckCircle2 className="w-5 h-5 text-gold-500" />
                    <span className="font-mono text-xs font-bold uppercase tracking-widest">Solução Clara & Sucessiva</span>
                  </div>
                  <div className="flex-1 flex items-center justify-center py-4">
                    <div className="relative w-full max-w-[340px] flex items-center justify-between">
                      <div className="text-center">
                        <div className="w-8 h-8 rounded-full bg-gold-500/20 text-gold-500 flex items-center justify-center text-xs font-bold mx-auto">1</div>
                        <span className="text-[9px] text-gray-400 block mt-1">Diagnóstico</span>
                      </div>
                      <div className="flex-1 border-t-2 border-dashed border-gold-500/30 mx-2" />
                      <div className="text-center">
                        <div className="w-8 h-8 rounded-full bg-gold-500/20 text-gold-500 flex items-center justify-center text-xs font-bold mx-auto">2</div>
                        <span className="text-[9px] text-gray-400 block mt-1">Ativação</span>
                      </div>
                      <div className="flex-1 border-t-2 border-dashed border-gold-500/30 mx-2" />
                      <div className="text-center">
                        <div className="w-8 h-8 rounded-full bg-gold-500 text-navy-950 flex items-center justify-center text-xs font-bold mx-auto">3</div>
                        <span className="text-[9px] text-gold-500 block font-bold mt-1">Venda Direta</span>
                      </div>
                    </div>
                  </div>
                  <span className="text-[10px] text-gold-500 font-mono text-center block uppercase tracking-widest">Processo previsível de captação comercial</span>
                </>
              )}
            </div>

            {/* Explanatory text grid */}
            <div className="flex flex-col justify-center gap-4">
              <h4 className="text-lg font-display font-semibold text-white [text-wrap:pretty]">
                {activeContrastTab === "without"
                  ? "As dores do marketing genérico tradicional"
                  : "Por que o Método P² funciona de verdade"
                }
              </h4>
              <ul className="space-y-3" id="contrast-checklist">
                {activeContrastTab === "without" ? (
                  <>
                    <li className="flex items-start gap-2.5 text-xs sm:text-sm text-gray-400">
                      <div className="w-1.5 h-1.5 bg-red-500 rounded-full mt-2" />
                      <span>Copiar cegamente posts sem uma identidade ou propósito comercial.</span>
                    </li>
                    <li className="flex items-start gap-2.5 text-xs sm:text-sm text-gray-400">
                      <div className="w-1.5 h-1.5 bg-red-500 rounded-full mt-2" />
                      <span>Anúncios configurados incorretamente que queimam dinheiro em cliques de curiosos.</span>
                    </li>
                    <li className="flex items-start gap-2.5 text-xs sm:text-sm text-gray-400">
                      <div className="w-1.5 h-1.5 bg-red-500 rounded-full mt-2" />
                      <span>Falta de clareza: você não sabe de onde vêm seus leads ou por que as vendas esfriaram.</span>
                    </li>
                  </>
                ) : (
                  <>
                    <li className="flex items-start gap-2.5 text-xs sm:text-sm text-gray-300">
                      <div className="w-1.5 h-1.5 bg-gold-500 rounded-full mt-2" />
                      <span><strong>Totalmente Rastreado:</strong> Você sabe de onde vem o lead, o custo exato e o retorno</span>
                    </li>
                    <li className="flex items-start gap-2.5 text-xs sm:text-sm text-gray-300">
                      <div className="w-1.5 h-1.5 bg-gold-500 rounded-full mt-2" />
                      <span><strong>Vídeos:</strong> Captação presencial que transmite autoridade imediata</span>
                    </li>
                    <li className="flex items-start gap-2.5 text-xs sm:text-sm text-gray-300">
                      <div className="w-1.5 h-1.5 bg-gold-500 rounded-full mt-2" />
                      <span><strong>Posicionamento Local:</strong> Domínio absoluto do Google e do Instagram</span>
                    </li>
                  </>
                )}
              </ul>
            </div>

          </div>
        </div>

        {/* Pilares do Método P² Grid */}
        <h3 className="text-2xl sm:text-3xl font-display font-black text-center text-white mb-2 [text-wrap:pretty]">
          Pilares Operacionais do Método P²
        </h3>
        <p className="text-gray-400 text-sm text-center max-w-lg mx-auto mb-12 [text-wrap:pretty]">
          Garantimos estrutura, velocidade e direção estratégica integrada para sua empresa faturar mais.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6" id="pilares-cards">
          {pillars.map((pilar, index) => (
            <div
              key={index}
              className="bg-navy-900 border border-white/5 rounded-2xl p-6 hover:border-gold-500/40 hover:bg-navy-900/80 transition-all duration-300 flex flex-col justify-between group cursor-default"
              id={`pilar-${pilar.num}`}
            >
              <div>
                <span className="font-mono text-xs font-bold text-gold-500 tracking-widest block mb-4 group-hover:scale-105 transition-transform">
                  ★ PILAR {pilar.num}
                </span>
                <h4 className="text-lg font-display font-bold text-white mb-3 group-hover:text-gold-200 transition-colors">
                  {pilar.title}
                </h4>
                <p className="text-gray-400 text-xs sm:text-sm leading-relaxed mb-6 [text-wrap:pretty]">
                  {pilar.desc}
                </p>
              </div>
              <div className="border-t border-white/5 pt-4 space-y-2">
                {pilar.details.map((detail, dIdx) => (
                  <span key={dIdx} className="block text-[11px] text-gray-500 font-mono">
                    • {detail}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Action Bottom */}
        <div className="text-center mt-12">
          <button
            onClick={onCtaClick}
            className="group px-6 py-3.5 rounded-xl font-bold text-xs tracking-wider uppercase text-navy-950 bg-gold-500 hover:bg-gold-600 transition-all inline-flex items-center gap-2 cursor-pointer"
            id="metodo-cta-bottom"
          >
            Quero aplicar a metodologia na minha empresa
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

      </div>
    </section>
  );
}

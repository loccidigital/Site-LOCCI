import fotoFundadores from "../public/foto-fundadores.PNG";

export default function About() {
  return (
    <section id="sobre" className="relative py-24 bg-[#F6F6F6] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 flex flex-col gap-5">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-gold-500">História e Propósito</span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-black text-navy-950 tracking-tight leading-tight [text-wrap:pretty]">
              Por trás da LOCCI, tem história!
            </h2>
            <div className="h-1 w-20 bg-gold-500 rounded" />

            <p className="text-gray-700 text-lg leading-relaxed mt-2 font-medium [text-wrap:pretty]">
              "A LOCCI nasceu em 2024 com a missão de transformar a forma como negócios locais se posicionam no digital."
            </p>
            <p className="text-gray-600 text-sm sm:text-base leading-relaxed [text-wrap:pretty]">
              Criamos a agência motivados por um propósito claro: negócios locais não precisam de pacotes prontos de agências automatizadas. Eles merecem marketing de verdade, feito por quem se importa com o resultado financeiro delas.
              Somos de carne e osso, dedicados, obstinados. E colocamos o nosso nome, literalmente, em cada projeto que entregamos.
            </p>
          </div>

          {/* Founders Card */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden bg-navy-950/95 border border-white/5 py-10 px-8 shadow-2xl text-center group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gold-500/10 rounded-full blur-2xl pointer-events-none" />
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-blue-500/10 rounded-full blur-2xl pointer-events-none" />

              <div className="relative z-10">
                <div className="flex justify-center mb-6">
                  <img
                    src={fotoFundadores}
                    alt="Emanuel e Camila - Fundadores da LOCCI"
                    className="w-36 h-36 rounded-full object-cover border-2 border-gold-500/40 shadow-xl"
                    onError={(e) => {
                      (e.target as HTMLImageElement).style.display = 'none';
                      const fallback = document.getElementById('founders-fallback');
                      if (fallback) fallback.style.display = 'flex';
                    }}
                  />
                  <div id="founders-fallback" className="hidden justify-center -space-x-4">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-tr from-gold-600 to-gold-200 p-[1px] shadow-lg">
                      <div className="w-full h-full bg-navy-950 rounded-full flex items-center justify-center font-display font-black text-white text-base">E</div>
                    </div>
                    <div className="w-16 h-16 rounded-full bg-gradient-to-tr from-gold-600 to-gold-200 p-[1px] shadow-lg">
                      <div className="w-full h-full bg-navy-950 rounded-full flex items-center justify-center font-display font-black text-white text-base">C</div>
                    </div>
                  </div>
                </div>

                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[10px] text-gold-500 uppercase tracking-widest font-mono mb-4">
                  Fundadores
                </div>

                <h3 className="text-xl font-display font-bold text-white">Emanuel e Camila</h3>
                <p className="text-xs font-mono text-gray-400 mt-1 uppercase">LOCCI</p>

                <p className="text-gray-300 text-xs mt-4 leading-relaxed max-w-sm mx-auto [text-wrap:pretty]">
                  "Cuidamos de cada funil estratégico pessoalmente. Na LOCCI, seu projeto não é tratado por estagiários genéricos; nós mesmos validamos e acompanhamos toda a operação."
                </p>

                <div className="flex justify-center gap-8 mt-8 pt-6 border-t border-white/5">
                  <div className="text-center">
                    <span className="block text-white font-bold text-sm">Emanuel</span>
                    <span className="text-[10px] text-gray-500 font-mono uppercase whitespace-nowrap">Tráfego & Análise</span>
                  </div>
                  <div className="w-px bg-white/10 self-stretch" />
                  <div className="text-center">
                    <span className="block text-white font-bold text-sm">Camila</span>
                    <span className="text-[10px] text-gray-500 font-mono uppercase whitespace-nowrap">Estratégia & Posicionamento</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Timeline: Jornada da LOCCI */}
        <div className="mt-20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative">
            {/* Connecting line desktop */}
            <div className="hidden md:block absolute top-8 left-[16.66%] right-[16.66%] h-[2px] bg-gradient-to-r from-gold-500/30 via-gold-500/60 to-gold-500/30 pointer-events-none" />

            {/* Card 1 */}
            <div className="relative bg-white border border-gray-200 rounded-2xl p-6 pb-8 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-10 h-10 rounded-full bg-navy-950 text-gold-500 flex items-center justify-center font-display font-black text-base mb-5 relative z-10">
                1
              </div>
              <span className="text-[10px] font-mono text-gold-600 uppercase tracking-widest font-bold">2024 (O Início)</span>
              <h4 className="text-base font-display font-bold text-navy-950 mt-1 mb-3 [text-wrap:pretty]">
                Um computador, um celular e uma convicção
              </h4>
              <p className="text-gray-500 text-xs sm:text-sm leading-relaxed [text-wrap:pretty]">
                A LOCCI nasce em 2024 motivada pelo cansaço do marketing "de agência tradicional": relatórios complexos sem vendas na conta bancária. Decidimos que negócios locais merecem mais.
              </p>
            </div>

            {/* Card 2 */}
            <div className="relative bg-white border border-gray-200 rounded-2xl p-6 pb-8 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-10 h-10 rounded-full bg-navy-950 text-gold-500 flex items-center justify-center font-display font-black text-base mb-5 relative z-10">
                2
              </div>
              <span className="text-[10px] font-mono text-gold-600 uppercase tracking-widest font-bold">Método P² Desenvolvido</span>
              <h4 className="text-base font-display font-bold text-navy-950 mt-1 mb-3 [text-wrap:pretty]">
                Consolidação de Processos Estratégicos
              </h4>
              <p className="text-gray-500 text-xs sm:text-sm leading-relaxed [text-wrap:pretty]">
                Após imersão profunda em diversos segmentos locais, criamos o Método P² (Prático e Personalizado) para alinhar a comunicação e canais de intenção como o Google, gerando leads qualificados de forma previsível.
              </p>
            </div>

            {/* Card 3 */}
            <div className="relative bg-white border border-gold-200 rounded-2xl p-6 pb-8 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-10 h-10 rounded-full bg-gold-500 text-navy-950 flex items-center justify-center font-display font-black text-base mb-5 relative z-10">
                3
              </div>
              <span className="text-[10px] font-mono text-gold-600 uppercase tracking-widest font-bold">Hoje &amp; Futuro</span>
              <h4 className="text-base font-display font-bold text-navy-950 mt-1 mb-3 [text-wrap:pretty]">
                Transformando o Cenário Digital
              </h4>
              <p className="text-gray-500 text-xs sm:text-sm leading-relaxed [text-wrap:pretty]">
                Atendemos contas que chegam até nós antes de ter nome e as transformamos em líderes regionais. Colocamos o nosso nome literalmente em cada entrega.
              </p>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}

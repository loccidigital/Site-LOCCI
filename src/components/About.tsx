import fotoFundadores from "../public/foto-fundadores.PNG";

export default function About() {
  return (
    <section id="sobre" className="relative py-24 bg-[#F6F6F6] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 flex flex-col gap-5">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-gold-500">História e Propósito</span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-black text-navy-950 tracking-tight leading-tight">
              Por trás da LOCCI, tem história!
            </h2>
            <div className="h-1 w-20 bg-gold-500 rounded" />

            <p className="text-gray-700 text-lg leading-relaxed mt-2 font-medium">
              "A LOCCI nasceu em 2024 com a missão de transformar a forma como negócios locais se posicionam no digital."
            </p>
            <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
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

                <p className="text-gray-300 text-xs mt-4 leading-relaxed max-w-sm mx-auto">
                  "Cuidamos de cada funil estratégico pessoalmente. Na LOCCI, seu projeto não é tratado por estagiários genéricos; nós mesmos validamos e acompanhamos toda a operação."
                </p>

                <div className="flex justify-center gap-6 mt-6 pt-6 border-t border-white/5">
                  <div>
                    <span className="block text-white font-bold text-sm">Emanuel</span>
                    <span className="text-[10px] text-gray-500 font-mono uppercase">Tráfego & Análise</span>
                  </div>
                  <div className="w-px h-8 bg-white/10" />
                  <div>
                    <span className="block text-white font-bold text-sm">Camila</span>
                    <span className="text-[10px] text-gray-500 font-mono uppercase">Estratégia & Posicionamento</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

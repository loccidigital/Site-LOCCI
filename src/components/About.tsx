import { Target, UserCheck, Heart, Users, Compass, HelpCircle } from "lucide-react";

export default function About() {
  const locciMeaning = [
    {
      letter: "L",
      word: "Lealdade",
      desc: "Relacionamentos sólidos e transparentes em primeiro lugar. Fazemos do seu sucesso o nosso compromisso.",
      icon: "🤝"
    },
    {
      letter: "O",
      word: "Otimização",
      desc: "Nossa obsessão é analisar resultados constantemente e ajustar rotas para extrair o máximo de performance.",
      icon: "⚙️"
    },
    {
      letter: "C",
      word: "Comunicação",
      desc: "Conversas claras, relatórios honestos e zero enrolação técnica. Você sabe exatamente onde cada centavo está sendo investido.",
      icon: "📣"
    },
    {
      letter: "C",
      word: "Conexão",
      desc: "Construímos pontes emocionais reais entre seus produtos e os clientes locais prontos para fechar contrato.",
      icon: "✨"
    },
    {
      letter: "I",
      word: "Inovação",
      desc: "Métodos modernos de captação, anúncios estratégicos no Google e ferramentas inteligentes para sair na frente.",
      icon: "⚡"
    }
  ];

  const milestones = [
    {
      year: "2024 (O Início)",
      title: "Um computador, um celular e uma convicção",
      desc: "A LOCCI nasce em 2024 motivada pelo cansaço do marketing 'de agência tradicional': relatórios complexos sem vendas na conta bancária. Decidimos que negócios locais merecem marketing sério, transparente e focado em faturamento real."
    },
    {
      year: "Método P² Desenvolvido",
      title: "Consolidação de Processos Estratégicos",
      desc: "Após imersão profunda em diversos segmentos locais, criamos o Método P² (Prático e Personalizado) para alinhar a comunicação e canais de intenção como o Google, gerando leads previsíveis."
    },
    {
      year: "Hoje & Futuro",
      title: "Transformando o Cenário Digital",
      desc: "Atendemos contas que chegam até nós antes de ter nome e as transformamos em líderes regionais. Colocamos o nosso nome literalmente em cada entrega."
    }
  ];

  return (
    <section id="sobre" className="relative py-24 bg-gold-50/70 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Storytelling introduction */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-20">
          <div className="lg:col-span-7 flex flex-col gap-5">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-gold-500">História e Propósito</span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-black text-navy-950 tracking-tight leading-tight">
              Por trás da LOCCI, tem história!
            </h2>
            <div className="h-1 w-20 bg-gold-500 rounded" />
            
            <p className="text-gray-700 text-lg leading-relaxed mt-2 font-medium">
              “A LOCCI nasceu em 2024 com a missão de transformar a forma como negócios locais se posicionam no digital.”
            </p>
            <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
              Criamos a agência motivados por um propósito claro: negócios locais não precisam de pacotes prontos de agências automatizadas. Eles merecem marketing de verdade, feito por quem se importa com o resultado financeiro delas. 
              Somos de carne e osso, dedicados, obstinados. E colocamos o nosso nome, literalmente, em cada projeto que entregamos.
            </p>
          </div>

          {/* Founders Premium Card representation */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden bg-navy-950/95 border border-white/5 py-12 px-8 shadow-2xl text-center group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gold-500/10 rounded-full blur-2xl pointer-events-none" />
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-blue-500/10 rounded-full blur-2xl pointer-events-none" />
              
              <div className="relative z-10">
                {/* Simulated stylized portrait placeholders */}
                <div className="flex justify-center -space-x-4 mb-6">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-tr from-gold-600 to-gold-200 p-[1px] shadow-lg">
                    <div className="w-full h-full bg-navy-950 rounded-full flex items-center justify-center font-display font-black text-white text-base">E</div>
                  </div>
                  <div className="w-16 h-16 rounded-full bg-gradient-to-tr from-gold-600 to-gold-200 p-[1px] shadow-lg">
                    <div className="w-full h-full bg-navy-950 rounded-full flex items-center justify-center font-display font-black text-white text-base">C</div>
                  </div>
                </div>

                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[10px] text-gold-500 uppercase tracking-widest font-mono mb-4">
                  Fundadores
                </div>

                <h3 className="text-xl font-display font-bold text-white">Emanuel e Camila</h3>
                <p className="text-xs text-mono text-gray-400 mt-1 uppercase">LOCCI Digital</p>
                
                <p className="text-gray-300 text-xs mt-4 leading-relaxed max-w-sm mx-auto">
                  “Cuidamos de cada funil estratégico pessoalmente. Na LOCCI, seu projeto não é tratado por estagiários genéricos; nós mesmos validamos e acompanhamos toda a operação.”
                </p>

                <div className="flex justify-center gap-6 mt-6 pt-6 border-t border-white/5">
                  <div>
                    <span className="block text-white font-bold text-sm">Emanuel</span>
                    <span className="text-[10px] text-gray-500 font-mono uppercase">Estratégia & Tráfego</span>
                  </div>
                  <div className="w-px h-8 bg-white/10" />
                  <div>
                    <span className="block text-white font-bold text-sm">Camila</span>
                    <span className="text-[10px] text-gray-500 font-mono uppercase">Audiovisual & Posicionamento</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Timeline representation */}
        <div className="mb-24 mt-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
            <div className="hidden md:block absolute top-[28px] left-[50px] right-[50px] h-[2px] bg-gold-200 z-0" />
            
            {milestones.map((milestone, idx) => (
              <div key={idx} className="relative z-10 flex flex-col items-center md:items-start text-center md:text-left bg-white p-6 rounded-xl border border-gold-200/50 shadow-sm">
                <div className="w-12 h-12 rounded-full bg-navy-950 flex items-center justify-center border-4 border-gold-100 font-display font-bold text-white text-xs mb-4">
                  {idx + 1}
                </div>
                <span className="text-xs font-mono font-bold text-gold-500 uppercase tracking-wider">{milestone.year}</span>
                <h4 className="text-base font-display font-bold text-navy-950 mt-1.5 mb-2">{milestone.title}</h4>
                <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">{milestone.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Breakdown of LOCCI letters (MEANING) */}
        <div>
          <div className="text-center mb-12">
            <span className="text-xs font-mono font-bold uppercase text-gold-500 tracking-wider">O Significado da Marca</span>
            <h3 className="text-2xl sm:text-3xl font-display font-extrabold text-navy-950 mt-2">
              Os Pilares de Caráter da LOCCI Digital
            </h3>
            <p className="text-gray-500 text-sm max-w-xl mx-auto mt-2">
              Muito além de um nome, carregamos compromissos claros desenhados em nossa assinatura institucional.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
            {locciMeaning.map((item, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-2xl border border-gold-100 shadow-sm transition-all duration-300 hover:shadow-xl hover:-translate-y-1 relative group"
                id={`locci-meaning-${item.letter.toLowerCase()}-${index}`}
              >
                <div className="absolute top-4 right-4 text-2xl opacity-60 group-hover:opacity-100 transition-opacity">
                  {item.icon}
                </div>
                
                <div className="text-4xl font-display font-black text-gold-500 -mt-1">
                  {item.letter}
                </div>
                
                <h4 className="text-lg font-display font-bold text-navy-950 mt-1 mb-2">
                  {item.word}
                </h4>
                
                <p className="text-gray-500 text-xs sm:text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}

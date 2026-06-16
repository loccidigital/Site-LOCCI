import { Search, MapPin, Star, ArrowUpRight, TrendingUp, AlertTriangle, CheckCircle } from "lucide-react";

interface GoogleCompletoProps {
  onCtaClick: () => void;
}

export default function GoogleCompleto({ onCtaClick }: GoogleCompletoProps) {
  const processSteps = [
    {
      title: "Google Meu Negócio de Elite",
      desc: "Otimizamos seu cadastro de ponta a ponta: SEO local avançado, fotos profissionais categorizadas, automação de respostas de avaliação e palavras-chave que te listam nos 3 primeiros resultados do mapa."
    },
    {
      title: "Campanhas Google Ads Patrocinadas",
      desc: "Criamos e gerenciamos campanhas cirúrgicas. Excluímos termos de curiosos que gastam seu orçamento e focamos exatamente em quem está digitando expressões com alta intenção de contratação imediata."
    },
    {
      title: "Página de Destino Veloz (Landing Page)",
      desc: "A primeira impressão dita a conversão. Estruturamos uma página focada e rápida, que prende a atenção do usuário e o direciona diretamente para o WhatsApp do seu comercial em segundos."
    }
  ];

  return (
    <section id="google-completo" className="relative py-24 bg-[#D9D9D9] border-y border-gold-200/50 overflow-hidden">

      {/* Decoração Google colorida por trás do título */}
      <div className="absolute top-0 left-0 right-0 flex justify-center items-start pt-[8%] sm:pt-[4%] md:pt-[1%] opacity-[0.18] pointer-events-none select-none overflow-hidden px-4">
        <div className="flex font-black leading-none text-[2.5rem] sm:text-[3.8rem] md:text-[5.5rem] lg:text-[7.5rem]">
          <span style={{ color: '#4285F4' }}>G</span>
          <span style={{ color: '#EA4335' }}>o</span>
          <span style={{ color: '#FBBC05' }}>o</span>
          <span style={{ color: '#4285F4' }}>g</span>
          <span style={{ color: '#34A853' }}>l</span>
          <span style={{ color: '#EA4335' }}>e</span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* Intro */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
          <div className="lg:col-span-12 text-center max-w-3xl mx-auto flex flex-col items-center gap-4">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-500/10 text-blue-600 border border-blue-500/20 text-xs font-mono font-bold uppercase tracking-wider">
              <Search className="w-3.5 h-3.5" /> Google Completo LOCCI
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-black text-navy-950 tracking-tight leading-tight">
              Seu cliente está procurando o que você faz agora mesmo. <span className="text-gold-500">Ele te acha?</span>
            </h2>
            <p className="text-gray-600 text-base sm:text-lg">
              A maioria das empresas perdem clientes valiosos todos os dias simplesmente por invisibilidade digital no Google. Nós resolvemos isso de forma integrada.
            </p>
          </div>
        </div>

        {/* Visual Simulated Google Search result + Metrics */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-20">

          {/* Left panel: Simulated Google Search results Card */}
          <div className="lg:col-span-6" id="google-search-mockup">
            <div className="bg-white rounded-2xl border border-gray-200 shadow-xl overflow-hidden">
              {/* Google style header info */}
              <div className="bg-gray-50 px-4 py-3 border-b border-gray-150 flex items-center justify-between">
                <div className="flex gap-1.5">
                  <span className="w-3 h-3 rounded-full bg-red-400" />
                  <span className="w-3 h-3 rounded-full bg-yellow-400" />
                  <span className="w-3 h-3 rounded-full bg-green-400" />
                </div>
                <div className="bg-white border border-gray-200 text-[10px] text-gray-500 px-3 py-1 rounded-md w-1/2 flex items-center gap-1.5">
                  <Search className="w-3 h-3 text-blue-500" />
                  <span>[Sua Categoria comercial] perto de mim</span>
                </div>
                <div className="w-4 h-4" />
              </div>

              {/* Main content */}
              <div className="p-4 sm:p-6 space-y-4 font-sans text-xs sm:text-sm">

                {/* Simulated Google Ad result 1: Optimized LOCCI client */}
                <div className="p-4 rounded-xl border border-gold-200 bg-gold-50/30 space-y-2 relative">
                  <span className="absolute top-2 right-3 font-mono text-[9px] bg-gold-500 text-white font-bold px-1.5 py-0.5 rounded uppercase">Anúncio #1 Patrocinado</span>
                  <div className="flex items-start gap-2">
                    <div className="w-4 h-4 text-blue-600 mt-0.5">🌐</div>
                    <div>
                      <h4 className="font-bold text-blue-800 text-sm hover:underline cursor-pointer flex items-center gap-1">
                        Sua Empresa | Líder Regional
                        <ArrowUpRight className="w-3.5 h-3.5 text-blue-800" />
                      </h4>
                      <p className="text-green-700 text-[10px]">https://www.suaempresa.com.br</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-1 pl-6">
                    <span className="text-xs font-bold text-gray-800">4.9</span>
                    <div className="flex text-gold-500">
                      {[1, 2, 3, 4, 5].map((s) => (
                        <Star key={s} className="w-3 h-3 fill-gold-500 text-gold-500" />
                      ))}
                    </div>
                    <span className="text-[10px] text-gray-400 font-mono">(152 avaliações • Empresa Recomendada)</span>
                  </div>
                  <p className="text-gray-500 text-[11px] pl-6">
                    Destaque absoluto em atendimento premium na região. Atendimento ágil e consultoria personalizada. Solicite um orçamento imediato pelo WhatsApp agora.
                  </p>
                </div>

                {/* Simulated organic Maps result below */}
                <div className="p-3 border-l-2 border-blue-500 bg-blue-50/20 rounded-r-xl space-y-1.5">
                  <div className="flex items-center gap-1.5">
                    <MapPin className="w-4 h-4 text-red-500 animate-bounce" />
                    <span className="font-bold text-gray-900 text-xs sm:text-sm">Seu Perfil no Mapa do Google (Top 3)</span>
                  </div>
                  <p className="text-[11px] text-gray-500 pl-6">Listado logo abaixo dos anúncios patrocinados, gerando ligações e rotas de GPS diárias de forma orgânica.</p>
                </div>

              </div>
            </div>
          </div>

          {/* Right panel */}
          <div className="lg:col-span-6 flex flex-col justify-center gap-6" id="google-strategico-detalhes">

            {/* Warning callout */}
            <div className="flex items-start gap-3 p-4 bg-red-500/5 rounded-xl border border-red-500/10 text-red-700">
              <AlertTriangle className="w-5 h-5 flex-shrink-0 mt-0.5" />
              <div>
                <h4 className="font-bold text-xs sm:text-sm">Ter um bom produto e não aparecer no Google é o mesmo que não existir</h4>
                <p className="text-xs text-gray-600 mt-1 leading-relaxed">
                  Seu concorrente local não é necessariamente melhor do que você. Ele só está melhor posicionado digitalmente onde o seu cliente está procurando.
                </p>
              </div>
            </div>

            <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
              Com o serviço de <strong>Google Completo</strong> da LOCCI, nós cobrimos todo o ecossistema de maior intenção de compra. Você não depende apenas de um post orgânico no Instagram que some em 24h. Você capta o lead no exato segundo em que ele precisa do seu produto.
            </p>

            <div className="space-y-4 mt-2">
              {processSteps.map((step, idx) => (
                <div key={idx} className="flex gap-4">
                  <div className="w-6 h-6 rounded-full bg-gold-500/20 text-gold-500 flex items-center justify-center text-xs font-bold mt-1">
                    {idx + 1}
                  </div>
                  <div>
                    <h4 className="font-display font-bold text-navy-950 text-sm sm:text-base">{step.title}</h4>
                    <p className="text-gray-500 text-xs sm:text-sm leading-relaxed mt-1">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>

          </div>

        </div>

        {/* CTA Banner bottom */}
        <div className="bg-navy-950 text-white rounded-3xl p-8 sm:p-12 border border-white/10 shadow-2xl relative overflow-hidden text-center max-w-5xl mx-auto">
          <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 rounded-full blur-2xl" />
          <div className="absolute bottom-0 left-0 w-32 h-32 bg-gold-500/10 rounded-full blur-2xl" />

          <div className="relative z-10 flex flex-col items-center gap-6">
            <h3 className="text-2xl sm:text-3xl font-display font-black tracking-tight text-white">
              Vamos colocar seu negócio frente a frente de quem está procurando você
            </h3>
            <p className="text-xs sm:text-sm text-gray-400 max-w-xl">
              Deixe nossa equipe auditar sua presença no Google. Iremos mapear o seu perfil atual e apontar exatamente onde você está perdendo vendas de forma gratuita.
            </p>
            <button
              onClick={onCtaClick}
              className="px-8 py-4 rounded-xl font-bold text-xs tracking-wider uppercase text-white bg-gradient-to-r from-gold-500 to-gold-600 hover:opacity-95 transition-all shadow-xl shadow-gold-500/20 flex items-center gap-2 cursor-pointer"
            >
              Quero meu diagnóstico gratuito
              <TrendingUp className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}

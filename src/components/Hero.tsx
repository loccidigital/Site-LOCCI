import { ArrowRight, CheckCircle, Star, Sparkles, ShieldCheck } from "lucide-react";

interface HeroProps {
  onCtaClick: () => void;
}

export default function Hero({ onCtaClick }: HeroProps) {
  return (
    <section
      id="home"
      className="relative min-h-screen bg-navy-950 flex items-center justify-center overflow-hidden pt-28 pb-20 px-6"
    >
      {/* Dynamic light glows */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-gold-500/10 rounded-full blur-3xl animate-pulse-slow pointer-events-none" />
      <div className="absolute bottom-10 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse-slow pointer-events-none" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">

        {/* Left Side */}
        <div className="lg:col-span-7 flex flex-col gap-6" id="hero-left-content">

          {/* Badge */}
          <div className="inline-flex items-center gap-2 self-start px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-semibold tracking-wider text-gold-500 uppercase animate-fade-in-up" id="hero-badge">
            Método P² — Estratégia sem Achismo
          </div>

          {/* Headline */}
          <h1
            className="text-4xl sm:text-5xl xl:text-6xl font-display font-black tracking-tight text-white leading-[1.1] [text-wrap:pretty] animate-fade-in-up"
            id="hero-title"
          >
            Seu negócio merece um{" "}
            <span className="relative inline-block text-transparent bg-clip-text bg-gradient-to-r from-gold-500 via-gold-200 to-gold-600">
              marketing
              <span className="absolute bottom-1.5 left-0 right-0 h-1 bg-gold-500/40 rounded-full" />
            </span>{" "}
            que funcione de verdade
          </h1>

          {/* Subtitle */}
          <p
            className="text-gray-300 text-base sm:text-lg max-w-xl leading-relaxed [text-wrap:pretty]"
            id="hero-subtitle"
          >
            Nós transformamos a presença digital de empresas com método e clareza.
            Sem enrolação, sem achismo, apenas estratégia que funciona.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mt-2" id="hero-actions">
            <button
              onClick={onCtaClick}
              className="group px-8 py-4 rounded-xl text-sm font-bold tracking-wide text-white bg-gradient-to-r from-gold-500 to-gold-600 hover:opacity-95 transition-all shadow-xl shadow-gold-500/10 flex items-center justify-center gap-3 cursor-pointer"
              id="hero-cta-main"
            >
              Quero transformar meu negócio
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
            </button>

            <a
              href="#sobre"
              className="px-6 py-4 rounded-xl text-sm font-semibold text-gray-300 hover:text-white hover:bg-white/5 border border-white/10 transition-all text-center flex items-center justify-center gap-2"
              id="hero-cta-sec"
            >
              Conhecer a LOCCI
            </a>
          </div>

          {/* Micro Trust Stats */}
          <div className="grid grid-cols-3 gap-6 pt-8 mt-4 border-t border-white/5" id="hero-trust">
            <div>
              <div className="text-2xl sm:text-3xl font-display font-bold text-white tracking-tight">20+</div>
              <p className="text-xs text-gray-500 font-mono tracking-widest uppercase mt-1">Clientes Transformados</p>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-display font-bold text-white tracking-tight">100%</div>
              <p className="text-xs text-gray-500 font-mono tracking-widest uppercase mt-1">Soluções Customizadas</p>
            </div>
            <div>
              <div className="flex items-center gap-1 text-2xl sm:text-3xl font-display font-bold text-white tracking-tight">
                5.0<Star className="w-4 h-4 text-gold-500 fill-gold-500 inline" />
              </div>
              <p className="text-xs text-gray-500 font-mono tracking-widest uppercase mt-1">Satisfação Clientes</p>
            </div>
          </div>

        </div>

        {/* Right Side: Dashboard Mockup */}
        <div className="lg:col-span-5 relative mt-8 lg:mt-0 animate-float" id="hero-right-mockup">

          {/* Main Dashboard Panel Mockup */}
          <div className="relative mx-auto max-w-[420px] rounded-2xl bg-gradient-to-tr from-white/10 to-white/5 border border-white/10 p-4 shadow-2xl backdrop-blur-md">

            {/* Window bar */}
            <div className="flex items-center justify-between pb-3 border-b border-white/5 mb-3">
              <div className="flex gap-1.5">
                <span className="w-3 h-3 rounded-full bg-red-500/60" />
                <span className="w-3 h-3 rounded-full bg-yellow-500/60" />
                <span className="w-3 h-3 rounded-full bg-green-500/60" />
              </div>
              <span className="text-[10px] text-gray-500 font-mono uppercase tracking-widest">loccidigital.com</span>
              <div className="w-3 h-3" />
            </div>

            {/* Simulated Data */}
            <div className="space-y-4">
              <div className="flex justify-between items-start">
                <div>
                  <span className="text-[10px] text-gray-400 font-mono uppercase">Campanha Ativa</span>
                  <p className="font-display font-bold text-white text-lg">Sua Empresa</p>
                </div>
                <span className="px-2 py-0.5 rounded-full bg-green-500/10 text-green-400 font-mono text-[9px] font-bold flex items-center gap-1">
                  <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse" />
                  EM EXECUÇÃO
                </span>
              </div>

              {/* Simulated Counter Chart */}
              <div className="bg-navy-900/60 rounded-xl p-3 border border-white/5">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-[10px] text-gray-400 font-mono">Leads Gerados</span>
                  <span className="text-xs font-bold text-gold-500 flex items-center gap-0.5">
                    +20/mês
                  </span>
                </div>

                {/* Visual Bar representation */}
                <div className="flex items-end gap-1.5 h-20 pt-4" id="simulated-bars">
                  <div className="w-full bg-white/5 rounded-t h-[20%] transition-all duration-500 hover:bg-gold-500" />
                  <div className="w-full bg-white/5 rounded-t h-[35%] transition-all" />
                  <div className="w-full bg-white/5 rounded-t h-[15%] transition-all" />
                  <div className="w-full bg-white/5 rounded-t h-[52%] transition-all" />
                  <div className="w-full bg-white/5 rounded-t h-[40%] transition-all" />
                  <div className="w-full bg-gold-500/20 rounded-t h-[75%] border-t border-gold-500" />
                  <div className="w-full bg-gradient-to-t from-gold-600 to-gold-500 rounded-t h-[95%]" />
                </div>
              </div>

              {/* Sub features grid */}
              <div className="grid grid-cols-2 gap-2">
                <div className="bg-white/5 p-2.5 rounded-xl border border-white/5 flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-blue-500/10 flex items-center justify-center text-blue-400">
                    🏆
                  </div>
                  <div>
                    <span className="text-[9px] text-gray-400 font-mono">Google Rank</span>
                    <p className="text-xs font-bold text-white">#1 Local</p>
                  </div>
                </div>

                <div className="bg-white/5 p-2.5 rounded-xl border border-white/5 flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-gold-500/10 flex items-center justify-center text-gold-500">
                    🎬
                  </div>
                  <div>
                    <span className="text-[9px] text-gray-400 font-mono font-bold">Eventos</span>
                    <p className="text-xs font-bold text-white">Captura Premium</p>
                  </div>
                </div>
              </div>

            </div>
          </div>

          {/* Floating Small Card overlay — oculto no mobile */}
          <div className="hidden sm:flex absolute -bottom-6 -left-6 bg-navy-950 p-4 rounded-xl border border-white/10 shadow-xl max-w-[200px] items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-gold-500/20 flex items-center justify-center text-gold-500">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <p className="text-xs font-bold text-white">Diagnóstico Honesto</p>
              <p className="text-[10px] text-gray-500">Sem mentiras, sem promessas falsas.</p>
            </div>
          </div>

          {/* Floating Small Card 2 overlay — oculto no mobile */}
          <div className="hidden sm:flex absolute -top-6 -right-4 bg-navy-950/90 py-2 px-3.5 rounded-full border border-white/10 shadow-lg items-center gap-2">
            <Sparkles className="w-3.5 h-3.5 text-gold-500" />
            <span className="text-[10px] font-mono font-semibold text-white tracking-widest uppercase">Resultados Reais</span>
          </div>

        </div>

      </div>
    </section>
  );
}

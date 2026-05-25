import { useState, FormEvent } from "react";
import { Sparkles, Calendar, Eye, Send, Lock, Loader2, RefreshCw, CheckCircle2, AlertTriangle, ShieldCheck, ArrowRight, HelpCircle } from "lucide-react";
import { DiagnosticRequest, DiagnosticResult } from "../types";

export default function AIForm() {
  const [loading, setLoading] = useState(false);
  const [loadingStep, setLoadingStep] = useState(0);
  const [result, setResult] = useState<DiagnosticResult | null>(null);
  const [formData, setFormData] = useState<DiagnosticRequest>({
    companyName: "",
    website: "",
    segment: "",
    mainChannels: [],
    biggestPain: ""
  });

  const segments = [
    "Arquitetura & Design",
    "Estética e Bem-estar",
    "Saúde & Clínicas Médicas",
    "Advocacia & Serviços Técnicos",
    "Restaurantes & Gastronomia",
    "Loja Fisica ou Varejo local",
    "Setor Automotivo / Concessionárias",
    "Outros Serviços"
  ];

  const channelsList = [
    { label: "Google Meu Negócio", value: "Google Meu Negócio" },
    { label: "Anúncios Patrocinados (Google/Meta Ads)", value: "Anúncios" },
    { label: "Instagram & TikTok Orgânico", value: "Instagram Orgânico" },
    { label: "Indicações boca-a-boca", value: "Indicações" },
    { label: "Feiras & Eventos locais", value: "Eventos" },
    { label: "Material Impresso / Panfletagem", value: "Panfletagem" }
  ];

  const painsList = [
    "Atração de novos clientes realmente qualificados (ticket alto)",
    "Não sei como configurar ou gerenciar anúncios online",
    "Pouca ou nenhuma consistência de posts nas mídias sociais",
    "Falta de um site profissional veloz (vitrine 24h)",
    "Dificuldade de estruturar um comercial rápido no WhatsApp para leads",
    "Pouca visibilidade na região em termos de pesquisa comercial"
  ];

  const handleChannelToggle = (val: string) => {
    setFormData(prev => {
      const channels = prev.mainChannels.includes(val)
        ? prev.mainChannels.filter(c => c !== val)
        : [...prev.mainChannels, val];
      return { ...prev, mainChannels: channels };
    });
  };

  const startLoadingSequence = () => {
    setLoading(true);
    setLoadingStep(0);
    const intervals = [
      setTimeout(() => setLoadingStep(1), 1000),
      setTimeout(() => setLoadingStep(2), 2200),
      setTimeout(() => setLoadingStep(3), 3500)
    ];
    return intervals;
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!formData.companyName || !formData.segment) {
      alert("Por favor, informe o nome da empresa e o segmento.");
      return;
    }

    const stopIntervals = startLoadingSequence();

    try {
      const response = await fetch("/api/diagnostic", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData)
      });
      
      const data = await response.json();
      setResult(data);
    } catch (err) {
      console.error("Erro ao gerar diagnóstico:", err);
    } finally {
      stopIntervals.forEach(clearTimeout);
      setLoading(false);
    }
  };

  const handleReset = () => {
    setResult(null);
    setFormData({
      companyName: "",
      website: "",
      segment: "",
      mainChannels: [],
      biggestPain: ""
    });
  };

  const handleWhatsAppRedirect = () => {
    if (!result) return;
    const number = "5511999999999"; // Replace with real agency phone number when needed
    const text = encodeURIComponent(
      `Olá Emanuel e Camila! Acabei de gerar o diagnóstico estratégico automatizado da minha empresa (${formData.companyName}) no site da LOCCI Digital.\n\n` +
      `Minha nota de maturidade digital foi de ${result.score}/100.\n` +
      `Meu segmento: ${formData.segment}.\n` +
      `Gostaria de bater um papo sincero e receber um diagnóstico aprofundado para resolver esses gargalos!`
    );
    window.open(`https://wa.me/${number}?text=${text}`, "_blank");
  };

  return (
    <section id="diagnostico-final" className="relative py-24 bg-gradient-to-b from-[#0e1628] to-navy-950 text-white overflow-hidden border-t border-white/5">
      {/* Light design grids overlay */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-gold-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Intro */}
        {!result && (
          <div className="max-w-3xl mx-auto text-center mb-16" id="cta-form-header">
            <span className="text-xs font-mono font-bold text-gold-500 uppercase tracking-widest bg-white/5 py-1.5 px-3.5 rounded-full border border-white/10">
              ⚡ Diagnóstico Estratégico em Tempo Real
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-black tracking-tight text-white mt-4 mb-4">
              Pronto para transformar seu negócio?
            </h2>
            <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
              Conta pra gente sobre sua empresa. Nossa Inteligência Estratégica analisa as suas informações e gera, na mesma hora, um diagnóstico sincero do seu atual momento e um plano de ação direto, sem enrolação.
            </p>
          </div>
        )}

        {/* Dynamic State Machine Display */}
        {loading ? (
          /* LOADING STAGE */
          <div className="max-w-2xl mx-auto bg-navy-900 border border-white/10 p-8 sm:p-12 rounded-2xl text-center shadow-2xl flex flex-col items-center justify-center min-h-[400px]">
            <Loader2 className="w-12 h-12 text-gold-500 animate-spin mb-6" />
            
            <div className="space-y-3">
              <h3 className="text-xl font-display font-bold text-white">Criando Diagnóstico Personalizado...</h3>
              <p className="text-xs sm:text-sm text-gray-400 font-mono tracking-wider transition-all">
                {loadingStep === 0 && "• Analisando perfil comercial e canais..."}
                {loadingStep === 1 && "• Identificando dores regionais e concorrência..."}
                {loadingStep === 2 && "• Mapeando prioridades de tráfego e visual..."}
                {loadingStep >= 3 && "• Finalizando sumário executivo LOCCI..."}
              </p>
            </div>
          </div>
        ) : result ? (
          /* DIAGNOSTIC RESULTS STAGE */
          <div className="max-w-5xl mx-auto bg-navy-900/90 border border-gold-500/20 p-6 sm:p-12 rounded-3xl shadow-2xl" id="diagnostic-result-board">
            
            {/* Header Results details */}
            <div className="flex flex-col md:flex-row items-center justify-between gap-8 border-b border-white/5 pb-8 mb-8" id="result-header">
              <div className="space-y-2 text-center md:text-left">
                <span className="text-xs font-mono font-bold text-gold-500 uppercase">Diagnóstico Processado</span>
                <h3 className="text-2xl sm:text-3xl font-display font-black text-white">{formData.companyName}</h3>
                <p className="text-xs text-gray-400 font-mono tracking-wider">{formData.segment} • Gerado de forma justa</p>
              </div>

              {/* Score Circular Meter */}
              <div className="flex items-center gap-4 bg-navy-950 p-4 rounded-2xl border border-white/10 shadow-lg">
                <div className="relative w-16 h-16 flex items-center justify-center">
                  <svg className="w-full h-full transform -rotate-90">
                    <circle cx="32" cy="32" r="28" stroke="#1c2c4d" strokeWidth="4" fill="transparent" />
                    <circle cx="32" cy="32" r="28" stroke="#ab8644" strokeWidth="4" fill="transparent"
                      strokeDasharray={175}
                      strokeDashoffset={175 - (175 * result.score) / 100}
                    />
                  </svg>
                  <span className="absolute font-display font-black text-sm text-white">{result.score}%</span>
                </div>
                <div>
                  <span className="block text-[10px] text-gray-400 font-mono uppercase">Nota Maturidade</span>
                  <span className="text-xs text-gold-500 font-bold">
                    {result.score < 50 ? "⚠️ Gargalos Críticos" : "⭐️ Nível Moderado"}
                  </span>
                </div>
              </div>
            </div>

            {/* Sumario Executivo */}
            <div className="mb-10 bg-white/5 p-6 rounded-2xl border border-white/5" id="executive-summary">
              <h4 className="text-sm font-mono font-bold text-gold-500 uppercase tracking-widest mb-3">★ Visão Estratégica do Diretor</h4>
              <p className="text-gray-300 text-sm sm:text-base leading-relaxed">{result.executiveSummary}</p>
            </div>

            {/* SWOT Matrices (FUTI) */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              <div className="bg-navy-950 p-5 rounded-2xl border border-white/5 space-y-3">
                <span className="text-[10px] font-mono tracking-widest text-green-400 uppercase font-bold">💪 Forças</span>
                <ul className="space-y-2">
                  {result.swot.strengths.map((item, i) => (
                    <li key={i} className="text-xs text-gray-400 leading-relaxed">• {item}</li>
                  ))}
                </ul>
              </div>

              <div className="bg-navy-950 p-5 rounded-2xl border border-white/5 space-y-3">
                <span className="text-[10px] font-mono tracking-widest text-red-400 uppercase font-bold">⚠️ Fraquezas</span>
                <ul className="space-y-2">
                  {result.swot.weaknesses.map((item, i) => (
                    <li key={i} className="text-xs text-gray-400 leading-relaxed">• {item}</li>
                  ))}
                </ul>
              </div>

              <div className="bg-navy-950 p-5 rounded-2xl border border-white/5 space-y-3">
                <span className="text-[10px] font-mono tracking-widest text-gold-500 uppercase font-bold">🚀 Oportunidades</span>
                <ul className="space-y-2">
                  {result.swot.opportunities.map((item, i) => (
                    <li key={i} className="text-xs text-gray-400 leading-relaxed">• {item}</li>
                  ))}
                </ul>
              </div>

              <div className="bg-navy-950 p-5 rounded-2xl border border-white/5 space-y-3">
                <span className="text-[10px] font-mono tracking-widest text-yellow-500 uppercase font-bold">⚡️ Ameaças</span>
                <ul className="space-y-2">
                  {result.swot.threats.map((item, i) => (
                    <li key={i} className="text-xs text-gray-400 leading-relaxed">• {item}</li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Strategic Phase Plan Timeline */}
            <div className="mb-12 space-y-6">
              <h4 className="text-base font-display font-bold text-white border-b border-white/5 pb-2">Plano de Direção Recomendado</h4>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {result.prioritizedPlan.map((phase, pIdx) => (
                  <div key={pIdx} className="bg-navy-950 p-5 rounded-2xl border border-white/5 space-y-4">
                    <div className="flex justify-between items-start">
                      <span className="text-[10px] font-mono bg-white/5 px-2 py-1 rounded text-gray-400 uppercase block">{phase.timeframe}</span>
                      <span className="text-xs font-bold font-mono text-gold-500">FASE {pIdx + 1}</span>
                    </div>
                    
                    <h5 className="font-display font-bold text-white text-sm">{phase.phase}</h5>
                    
                    <ul className="space-y-2">
                      {phase.actions.map((act, aIdx) => (
                        <li key={aIdx} className="flex gap-2 text-xs text-gray-400 leading-relaxed">
                          <CheckCircle2 className="w-4 h-4 text-gold-500 flex-shrink-0 mt-0.5" />
                          <span>{act}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* Specialized tips */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12 pt-6 border-t border-white/5">
              <div>
                <h5 className="font-display font-bold text-white text-sm flex items-center gap-1.5 mb-3">
                  🌐 Direcionamento para Google Completo:
                </h5>
                <ul className="space-y-1.5">
                  {result.googleCompletoTips.map((tip, idx) => (
                    <li key={idx} className="text-xs text-gray-400 leading-relaxed">• {tip}</li>
                  ))}
                </ul>
              </div>

              <div>
                <h5 className="font-display font-bold text-white text-sm flex items-center gap-1.5 mb-3">
                  🎬 Direcionamento para Audiovisual/Eventos:
                </h5>
                <ul className="space-y-1.5">
                  {result.eventTips.map((tip, idx) => (
                    <li key={idx} className="text-xs text-gray-400 leading-relaxed">• {tip}</li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Convert Diagnostic results to sales click */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-6 bg-gradient-to-r from-gold-500/10 to-gold-500/5 p-6 rounded-2xl border border-gold-500/20 text-center sm:text-left">
              <div>
                <h5 className="font-display font-bold text-white text-sm sm:text-base">Gostou da análise? Vamos implementar!</h5>
                <p className="text-xs text-gray-400 mt-1 max-w-md">Envie esses resultados para nossa equipe de especialistas. Vamos realizar um plano comercial sincero no WhatsApp da LOCCI.</p>
              </div>

              <div className="flex gap-3 w-full sm:w-auto">
                <button
                  onClick={handleReset}
                  className="px-4 py-3 rounded-xl text-xs font-semibold text-gray-300 hover:text-white border border-white/10 flex items-center justify-center gap-2 cursor-pointer transition-colors w-1/2 sm:w-auto"
                >
                  <RefreshCw className="w-3.5 h-3.5" /> Voltar
                </button>
                <button
                  onClick={handleWhatsAppRedirect}
                  className="px-6 py-3 rounded-xl text-xs font-bold text-navy-950 bg-gradient-to-r from-gold-500 to-gold-200 hover:opacity-95 transition-all flex items-center justify-center gap-2 cursor-pointer w-1/2 sm:w-auto"
                >
                  Falar sobre meu Diagnóstico
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

          </div>
        ) : (
          /* INPUT FORM STAGE */
          <form
            onSubmit={handleSubmit}
            className="max-w-3xl mx-auto bg-navy-900 border border-white/10 p-6 sm:p-10 rounded-2xl shadow-2xl space-y-8"
            id="strategic-diagnostic-form"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              
              {/* Company Name */}
              <div className="flex flex-col gap-2">
                <label className="text-xs font-mono font-bold text-gray-300 uppercase tracking-wider block">Nome da Empresa *</label>
                <input
                  type="text"
                  required
                  placeholder="Ex: Consultório Odonto Silva"
                  value={formData.companyName}
                  onChange={(e) => setFormData(prev => ({ ...prev, companyName: e.target.value }))}
                  className="w-full bg-navy-950 border border-white/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-gold-500 focus:ring-1 focus:ring-gold-500"
                  id="form-company-name"
                />
              </div>

              {/* Website */}
              <div className="flex flex-col gap-2">
                <label className="text-xs font-mono font-bold text-gray-300 uppercase tracking-wider block">Site ou Instagram da Empresa</label>
                <input
                  type="text"
                  placeholder="Ex: @odontosilva"
                  value={formData.website}
                  onChange={(e) => setFormData(prev => ({ ...prev, website: e.target.value }))}
                  className="w-full bg-navy-950 border border-white/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-gold-500 focus:ring-1 focus:ring-gold-500"
                  id="form-website"
                />
              </div>

            </div>

            {/* Segment choices cards */}
            <div className="space-y-3">
              <label className="text-xs font-mono font-bold text-gray-300 uppercase tracking-wider block">Segmento Comercial *</label>
              
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {segments.map((seg) => (
                  <div
                    key={seg}
                    onClick={() => setFormData(prev => ({ ...prev, segment: seg }))}
                    className={`cursor-pointer border p-3 rounded-xl text-xs text-center font-medium transition-all ${
                      formData.segment === seg
                        ? "bg-gold-500 border-gold-500 text-navy-950 font-bold shadow-lg"
                        : "bg-navy-950 border-white/10 text-gray-300 hover:border-gold-500/30"
                    }`}
                    id={`segment-${seg.toLowerCase().replace(/\s+/g, "-")}`}
                  >
                    {seg}
                  </div>
                ))}
              </div>
            </div>

            {/* Current channels check */}
            <div className="space-y-3">
              <label className="text-xs font-mono font-bold text-gray-300 uppercase tracking-wider block">Quais canais de divulgação você usa hoje? (Selecione todos)</label>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {channelsList.map((ch) => (
                  <div
                    key={ch.value}
                    onClick={() => handleChannelToggle(ch.value)}
                    className={`cursor-pointer border p-3.5 rounded-xl text-xs sm:text-sm flex items-center justify-between transition-all ${
                      formData.mainChannels.includes(ch.value)
                        ? "bg-gold-500/10 border-gold-500 text-gold-500 font-bold"
                        : "bg-navy-950 border-white/10 text-gray-400 hover:border-white/20"
                    }`}
                    id={`channel-${ch.value}`}
                  >
                    <span>{ch.label}</span>
                    <span className="w-4 h-4 rounded-md border flex items-center justify-center border-white/20">
                      {formData.mainChannels.includes(ch.value) && "✓"}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Pain / Gargalo check */}
            <div className="space-y-3">
              <label className="text-xs font-mono font-bold text-gray-300 uppercase tracking-wider block">Qual sua maior dificuldade ou dor atual? *</label>
              
              <div className="grid grid-cols-1 gap-2">
                {painsList.map((pain) => (
                  <div
                    key={pain}
                    onClick={() => setFormData(prev => ({ ...prev, biggestPain: pain }))}
                    className={`cursor-pointer border p-3.5 rounded-xl text-xs transition-all flex items-center gap-3 ${
                      formData.biggestPain === pain
                        ? "bg-gold-500/10 border-gold-500 text-gold-500 font-bold"
                        : "bg-navy-950 border-white/10 text-gray-400 hover:border-white/25"
                    }`}
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-gold-500 flex-shrink-0" />
                    <span>{pain}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Security disclaimer info */}
            <div className="flex gap-2.5 p-3.5 bg-white/5 rounded-xl border border-white/5 text-[11px] text-gray-400">
              <ShieldCheck className="w-4 h-4 text-gold-500 flex-shrink-0 mt-0.5" />
              <span>Garantimos total sigilo industrial dos seus dados compartilhados. Suas informações são enviadas diretamente à equipe da LOCCI via protocolo seguro.</span>
            </div>

            {/* Submit banner key */}
            <div className="pt-4 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
              <p className="text-[10px] sm:text-xs text-gray-500 font-mono">* Preenchimento obrigatório para processamento correto.</p>
              
              <button
                type="submit"
                className="w-full sm:w-auto px-8 py-4 rounded-xl font-bold text-xs tracking-wider uppercase text-navy-950 bg-gradient-to-r from-gold-500 via-gold-200 to-gold-600 hover:opacity-95 transition-all shadow-xl shadow-gold-500/10 flex items-center justify-center gap-2 cursor-pointer"
                id="submit-diagnostic-button"
              >
                Obter Diagnóstico Gratuito
                <Sparkles className="w-4 h-4 text-navy-950" />
              </button>
            </div>

          </form>
        )}

      </div>
    </section>
  );
}

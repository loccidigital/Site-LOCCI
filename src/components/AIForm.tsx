import { useState, FormEvent } from "react";
import { Sparkles, ShieldCheck, CheckCircle2, Loader2, ArrowRight } from "lucide-react";

interface LeadData {
  nome: string;
  whatsapp: string;
  empresa: string;
  instagram: string;
  segment: string;
  mainChannels: string[];
  biggestPain: string;
}

export default function AIForm() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [formError, setFormError] = useState(false);
  const [formData, setFormData] = useState<LeadData>({
    nome: "",
    whatsapp: "",
    empresa: "",
    instagram: "",
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
    "Loja Física ou Varejo Local",
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

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setFormError(false);

    if (!formData.nome || !formData.whatsapp || !formData.empresa || !formData.segment) {
      alert("Por favor, preencha os campos obrigatórios.");
      return;
    }

    setLoading(true);
    try {
      const response = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        setSuccess(true);
        window.scrollTo({ top: 0, behavior: "smooth" });
      } else {
        setFormError(true);
      }
    } catch {
      setFormError(true);
    } finally {
      setLoading(false);
    }
  };

  /* ── SUCCESS STATE ── */
  if (success) {
    return (
      <section id="diagnostico-final" className="relative py-24 bg-gradient-to-b from-[#0e1628] to-navy-950 text-white overflow-hidden border-t border-white/5">
        <div className="absolute top-0 left-0 w-96 h-96 bg-gold-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />

        <div className="max-w-2xl mx-auto px-6 relative z-10 text-center flex flex-col items-center gap-8">
          <div className="w-20 h-20 rounded-full bg-gold-500/10 border border-gold-500/30 flex items-center justify-center">
            <CheckCircle2 className="w-10 h-10 text-gold-500" />
          </div>

          <div className="space-y-4">
            <span className="text-xs font-mono font-bold text-gold-500 uppercase tracking-widest bg-white/5 py-1.5 px-3.5 rounded-full border border-white/10">
              Diagnóstico Recebido
            </span>
            <h2 className="text-3xl sm:text-4xl font-display font-black text-white">
              Obrigado, {formData.nome.split(" ")[0]}!
            </h2>
            <p className="text-gray-300 text-base sm:text-lg leading-relaxed max-w-lg mx-auto">
              Recebemos seu diagnóstico da <strong className="text-white">{formData.empresa}</strong>. Em poucos minutos nossa equipe entrará em contato pelo WhatsApp com uma análise personalizada do seu negócio.
            </p>
          </div>

          <div className="bg-navy-900 border border-white/10 rounded-2xl p-6 w-full max-w-md text-left space-y-3">
            <p className="text-xs font-mono text-gold-500 uppercase tracking-widest font-bold">Resumo do que enviamos</p>
            <div className="space-y-2 text-sm text-gray-300">
              <div className="flex justify-between">
                <span className="text-gray-500">Empresa</span>
                <span className="font-medium">{formData.empresa}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-500">Segmento</span>
                <span className="font-medium">{formData.segment}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-500">WhatsApp</span>
                <span className="font-medium">{formData.whatsapp}</span>
              </div>
            </div>
          </div>

          <p className="text-xs text-gray-500 font-mono">
            ★ LOCCI — MARKETING QUE FUNCIONA
          </p>
        </div>
      </section>
    );
  }

  /* ── FORM STATE ── */
  return (
    <section id="diagnostico-final" className="relative py-24 bg-gradient-to-b from-[#0e1628] to-navy-950 text-white overflow-hidden border-t border-white/5">
      <div className="absolute top-0 left-0 w-96 h-96 bg-gold-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="text-xs font-mono font-bold text-gold-500 uppercase tracking-widest bg-white/5 py-1.5 px-3.5 rounded-full border border-white/10">
            ⚡ Diagnóstico Estratégico Gratuito
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-black tracking-tight text-white mt-4 mb-4">
            Pronto para transformar seu negócio?
          </h2>
          <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
            Preencha abaixo e nossa equipe entrará em contato em poucos minutos com um diagnóstico personalizado e sem enrolação para o seu negócio.
          </p>
        </div>

        {/* Form */}
        <form
          onSubmit={handleSubmit}
          className="max-w-3xl mx-auto bg-navy-900 border border-white/10 p-6 sm:p-10 rounded-2xl shadow-2xl space-y-8"
          id="strategic-diagnostic-form"
        >

          {/* Nome + WhatsApp */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="flex flex-col gap-2">
              <label className="text-xs font-mono font-bold text-gray-300 uppercase tracking-wider">Seu Nome *</label>
              <input
                type="text"
                required
                placeholder="Ex: Carlos Andrade"
                value={formData.nome}
                onChange={(e) => setFormData(prev => ({ ...prev, nome: e.target.value }))}
                className="w-full bg-navy-950 border border-white/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-gold-500 focus:ring-1 focus:ring-gold-500"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-xs font-mono font-bold text-gray-300 uppercase tracking-wider">WhatsApp *</label>
              <input
                type="tel"
                required
                placeholder="Ex: (61) 99999-9999"
                value={formData.whatsapp}
                onChange={(e) => setFormData(prev => ({ ...prev, whatsapp: e.target.value }))}
                className="w-full bg-navy-950 border border-white/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-gold-500 focus:ring-1 focus:ring-gold-500"
              />
            </div>
          </div>

          {/* Empresa + Instagram */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="flex flex-col gap-2">
              <label className="text-xs font-mono font-bold text-gray-300 uppercase tracking-wider">Nome da Empresa *</label>
              <input
                type="text"
                required
                placeholder="Ex: Consultório Odonto Silva"
                value={formData.empresa}
                onChange={(e) => setFormData(prev => ({ ...prev, empresa: e.target.value }))}
                className="w-full bg-navy-950 border border-white/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-gold-500 focus:ring-1 focus:ring-gold-500"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-xs font-mono font-bold text-gray-300 uppercase tracking-wider">Site ou Instagram</label>
              <input
                type="text"
                placeholder="Ex: @odontosilva"
                value={formData.instagram}
                onChange={(e) => setFormData(prev => ({ ...prev, instagram: e.target.value }))}
                className="w-full bg-navy-950 border border-white/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-gold-500 focus:ring-1 focus:ring-gold-500"
              />
            </div>
          </div>

          {/* Segmento */}
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
                >
                  {seg}
                </div>
              ))}
            </div>
          </div>

          {/* Canais atuais */}
          <div className="space-y-3">
            <label className="text-xs font-mono font-bold text-gray-300 uppercase tracking-wider block">Quais canais você usa hoje? (Selecione todos)</label>
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
                >
                  <span>{ch.label}</span>
                  <span className="w-4 h-4 rounded-md border flex items-center justify-center border-white/20 flex-shrink-0">
                    {formData.mainChannels.includes(ch.value) && "✓"}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Maior dor */}
          <div className="space-y-3">
            <label className="text-xs font-mono font-bold text-gray-300 uppercase tracking-wider block">Qual sua maior dificuldade hoje? *</label>
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

          {/* Aviso de privacidade */}
          <div className="flex gap-2.5 p-3.5 bg-white/5 rounded-xl border border-white/5 text-[11px] text-gray-400">
            <ShieldCheck className="w-4 h-4 text-gold-500 flex-shrink-0 mt-0.5" />
            <span>Suas informações são enviadas diretamente à equipe da LOCCI e nunca compartilhadas com terceiros. Total sigilo garantido.</span>
          </div>

          {/* Erro de envio */}
          {formError && (
            <p className="text-xs text-red-400 text-center font-mono">
              Ocorreu um erro ao enviar. Tente novamente ou fale diretamente pelo WhatsApp.
            </p>
          )}

          {/* Submit */}
          <div className="pt-4 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-[10px] sm:text-xs text-gray-500 font-mono">* Preenchimento obrigatório. Nossa equipe responde em minutos.</p>
            <button
              type="submit"
              disabled={loading}
              className="w-full sm:w-auto px-8 py-4 rounded-xl font-bold text-xs tracking-wider uppercase text-navy-950 bg-gradient-to-r from-gold-500 via-gold-200 to-gold-600 hover:opacity-95 transition-all shadow-xl shadow-gold-500/10 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-70"
              id="submit-diagnostic-button"
            >
              {loading ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  Enviando...
                </>
              ) : (
                <>
                  Solicitar Diagnóstico Gratuito
                  <Sparkles className="w-4 h-4" />
                </>
              )}
            </button>
          </div>

        </form>
      </div>
    </section>
  );
}

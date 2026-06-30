import { useState, useRef, FormEvent } from "react";
import { ArrowRight, ShieldCheck, Loader2, CheckCircle2, AlertCircle } from "lucide-react";

export default function AIForm() {
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState("");
  const [leadName, setLeadName] = useState("");
  const sectionRef = useRef<HTMLElement>(null);
  const [formData, setFormData] = useState({
    nome: "",
    whatsapp: "",
    empresa: "",
    instagram: "",
    segment: "",
    mainChannels: [] as string[],
    biggestPain: "",
    investimento: "",
  });

  const segments = [
    "Arquitetura & Design",
    "Estética e Bem-estar",
    "Saúde & Clínicas Médicas",
    "Advocacia & Serviços Técnicos",
    "Restaurantes & Gastronomia",
    "Loja Física ou Varejo Local",
    "Setor Automotivo / Concessionárias",
    "Outros Serviços",
  ];

  const channelsList = [
    { label: "Google Meu Negócio", value: "Google Meu Negócio" },
    { label: "Anúncios Patrocinados (Google/Meta Ads)", value: "Anúncios" },
    { label: "Instagram & TikTok Orgânico", value: "Instagram Orgânico" },
    { label: "Indicações boca-a-boca", value: "Indicações" },
    { label: "Feiras & Eventos locais", value: "Eventos" },
    { label: "Material Impresso / Panfletagem", value: "Panfletagem" },
  ];

  const painsList = [
    "Atrair novos clientes qualificados para meu negócio",
    "Quero trazer mais pessoas para meu perfil por meio do tráfego pago",
    "Quero ter mais consistência de posts nas mídias sociais",
    "Preciso de um site profissional para minha empresa",
    "Quero ter mais visibilidade na minha região pelo Google",
    "Necessito de uma estratégia de marketing completa para minha empresa",
  ];


  const handleChannelToggle = (val: string) => {
    setFormData((prev) => {
      const channels = prev.mainChannels.includes(val)
        ? prev.mainChannels.filter((c) => c !== val)
        : [...prev.mainChannels, val];
      return { ...prev, mainChannels: channels };
    });
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!formData.nome || !formData.whatsapp) {
      alert("Por favor, informe seu nome e WhatsApp.");
      return;
    }
    if (!formData.empresa) {
      alert("Por favor, informe o nome da sua empresa.");
      return;
    }
    if (!formData.instagram) {
      alert("Por favor, informe o Instagram da sua empresa.");
      return;
    }
    if (!formData.segment) {
      alert("Por favor, selecione o segmento comercial.");
      return;
    }
    if (formData.mainChannels.length === 0) {
      alert("Por favor, selecione ao menos um canal de divulgação.");
      return;
    }
    if (!formData.biggestPain) {
      alert("Por favor, selecione sua maior dificuldade hoje.");
      return;
    }
    if (!formData.investimento.trim()) {
      alert("Por favor, informe seu investimento mensal em marketing.");
      return;
    }
    setLoading(true);
    setSubmitError("");
    try {
      const res = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        setSubmitError(data.error || "Erro ao enviar. Tente novamente ou nos contacte pelo WhatsApp.");
        return;
      }
      setLeadName(formData.nome.split(" ")[0]);
      setSubmitted(true);
      setTimeout(() => {
        sectionRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 50);
    } catch (_err) {
      setSubmitError("Sem conexão. Verifique sua internet e tente novamente.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      ref={sectionRef}
      id="diagnostico-final"
      className="relative py-24 bg-gradient-to-b from-[#0e1628] to-navy-950 text-white overflow-hidden border-t border-white/5"
    >
      <div className="absolute top-0 left-0 w-96 h-96 bg-gold-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {!submitted && (
          <div className="max-w-3xl mx-auto text-center mb-16">
            <span className="text-xs font-mono font-bold text-gold-500 uppercase tracking-widest bg-white/5 py-1.5 px-3.5 rounded-full border border-white/10">
              Diagnóstico Estratégico Gratuito
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-black tracking-tight text-white mt-4 mb-4">
              Pronto para transformar seu negócio?
            </h2>
            <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
              Preencha abaixo e nossa equipe entra em contato em poucos minutos com um diagnóstico personalizado para sua empresa.
            </p>
          </div>
        )}

        {loading ? (
          <div className="max-w-2xl mx-auto bg-navy-900 border border-white/10 p-8 sm:p-12 rounded-2xl text-center shadow-2xl flex flex-col items-center justify-center min-h-[300px]">
            <Loader2 className="w-12 h-12 text-gold-500 animate-spin mb-6" />
            <h3 className="text-xl font-display font-bold text-white">Enviando suas informações...</h3>
          </div>
        ) : submitted ? (
          <div className="max-w-2xl mx-auto bg-navy-900 border border-gold-500/20 p-10 sm:p-14 rounded-3xl shadow-2xl text-center flex flex-col items-center gap-6">
            <CheckCircle2 className="w-16 h-16 text-gold-500" />
            <div className="space-y-2">
              <h3 className="text-2xl sm:text-3xl font-display font-black text-white">
                Obrigado, {leadName}!
              </h3>
              <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                Em poucos minutos nossa equipe entrará em contato pelo WhatsApp informado.
              </p>
            </div>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="max-w-3xl mx-auto bg-navy-900 border border-white/10 p-6 sm:p-10 rounded-2xl shadow-2xl space-y-8"
          >
            {/* Dados de contato */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="flex flex-col gap-2">
                <label className="text-xs font-mono font-bold text-gray-300 uppercase tracking-wider">
                  Nome *
                </label>
                <input
                  type="text"
                  required
                  placeholder="Seu nome completo"
                  value={formData.nome}
                  onChange={(e) => setFormData((prev) => ({ ...prev, nome: e.target.value }))}
                  className="w-full bg-navy-950 border border-white/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-gold-500 focus:ring-1 focus:ring-gold-500"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-xs font-mono font-bold text-gray-300 uppercase tracking-wider">
                  WhatsApp *
                </label>
                <input
                  type="tel"
                  required
                  placeholder="+351 900 000 000"
                  value={formData.whatsapp}
                  onChange={(e) => setFormData((prev) => ({ ...prev, whatsapp: e.target.value }))}
                  className="w-full bg-navy-950 border border-white/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-gold-500 focus:ring-1 focus:ring-gold-500"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-xs font-mono font-bold text-gray-300 uppercase tracking-wider">
                  Empresa *
                </label>
                <input
                  type="text"
                  required
                  placeholder="Nome da sua empresa"
                  value={formData.empresa}
                  onChange={(e) => setFormData((prev) => ({ ...prev, empresa: e.target.value }))}
                  className="w-full bg-navy-950 border border-white/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-gold-500 focus:ring-1 focus:ring-gold-500"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-xs font-mono font-bold text-gray-300 uppercase tracking-wider">
                  Instagram *
                </label>
                <input
                  type="text"
                  required
                  placeholder="@suaempresa"
                  value={formData.instagram}
                  onChange={(e) => setFormData((prev) => ({ ...prev, instagram: e.target.value }))}
                  className="w-full bg-navy-950 border border-white/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-gold-500 focus:ring-1 focus:ring-gold-500"
                />
              </div>
            </div>

            {/* Segmento */}
            <div className="space-y-3">
              <label className="text-xs font-mono font-bold text-gray-300 uppercase tracking-wider block">
                Segmento Comercial * {!formData.segment && <span className="text-red-400 text-[10px] normal-case font-normal ml-1">(obrigatório)</span>}
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {segments.map((seg) => (
                  <div
                    key={seg}
                    onClick={() => setFormData((prev) => ({ ...prev, segment: seg }))}
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

            {/* Canais */}
            <div className="space-y-3">
              <label className="text-xs font-mono font-bold text-gray-300 uppercase tracking-wider block">
                Quais canais você usa hoje? (Selecione todos)
              </label>
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
                    <span className="w-4 h-4 rounded-md border flex items-center justify-center border-white/20">
                      {formData.mainChannels.includes(ch.value) && "✓"}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Maior dificuldade */}
            <div className="space-y-3">
              <label className="text-xs font-mono font-bold text-gray-300 uppercase tracking-wider block">
                Qual sua maior dificuldade hoje? *
              </label>
              <div className="grid grid-cols-1 gap-2">
                {painsList.map((pain) => (
                  <div
                    key={pain}
                    onClick={() => setFormData((prev) => ({ ...prev, biggestPain: pain }))}
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

            {/* Investimento em marketing */}
            <div className="space-y-3">
              <label className="text-xs font-mono font-bold text-gray-300 uppercase tracking-wider block">
                Qual é o seu investimento mensal total em marketing? *
              </label>
              <input
                type="text"
                required
                placeholder="Ex: R$ 1.500 / mês ou €500 / mês"
                value={formData.investimento}
                onChange={(e) => setFormData((prev) => ({ ...prev, investimento: e.target.value }))}
                className="w-full bg-navy-950 border border-white/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-gold-500 focus:ring-1 focus:ring-gold-500"
              />
            </div>

            {/* Disclaimer */}
            <div className="flex gap-2.5 p-3.5 bg-white/5 rounded-xl border border-white/5 text-[11px] text-gray-400">
              <ShieldCheck className="w-4 h-4 text-gold-500 flex-shrink-0 mt-0.5" />
              <span>
                Suas informações são enviadas diretamente à equipe da LOCCI e nunca compartilhadas com terceiros. Total sigilo garantido.
              </span>
            </div>

            {/* Error message */}
            {submitError && (
              <div className="flex items-start gap-2.5 p-3.5 bg-red-500/10 rounded-xl border border-red-500/20 text-xs text-red-400">
                <AlertCircle className="w-4 h-4 flex-shrink-0 mt-0.5" />
                <span>{submitError}</span>
              </div>
            )}

            {/* Submit */}
            <div className="pt-4 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
              <p className="text-[10px] sm:text-xs text-gray-500 font-mono">
                * Preenchimento obrigatório.
              </p>
              <button
                type="submit"
                className="w-full sm:w-auto px-8 py-4 rounded-xl font-bold text-xs tracking-wider uppercase text-navy-950 bg-gradient-to-r from-gold-500 via-gold-200 to-gold-600 hover:opacity-95 transition-all shadow-xl shadow-gold-500/10 flex items-center justify-center gap-2 cursor-pointer"
              >
                Quero meu Diagnóstico Gratuito
                <ArrowRight className="w-4 h-4 text-navy-950" />
              </button>
            </div>
          </form>
        )}
      </div>
    </section>
  );
}

// api/leads.ts  ← este arquivo vai na pasta /api na raiz do projeto

function sanitize(str: unknown): string {
  if (typeof str !== "string") return "";
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#x27;");
}

const rateLimitMap = new Map<string, { count: number; resetAt: number }>();

export default async function handler(req: any, res: any) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Método não permitido." });
  }

  // Rate limiting simples
  const ip =
    (req.headers["x-forwarded-for"] as string)?.split(",")[0]?.trim() ||
    req.socket?.remoteAddress ||
    "unknown";
  const now = Date.now();
  const entry = rateLimitMap.get(ip);
  if (entry && now <= entry.resetAt && entry.count >= 5) {
    return res.status(429).json({ error: "Muitas requisições. Tente novamente em 1 minuto." });
  }
  if (!entry || now > entry.resetAt) {
    rateLimitMap.set(ip, { count: 1, resetAt: now + 60_000 });
  } else {
    entry.count++;
  }

  const raw = req.body ?? {};

  const nome         = sanitize(raw.nome);
  const whatsapp     = sanitize(raw.whatsapp);
  const empresa      = sanitize(raw.empresa);
  const instagram    = sanitize(raw.instagram);
  const segment      = sanitize(raw.segment);
  const biggestPain  = sanitize(raw.biggestPain);
  const investimento = sanitize(raw.investimento);
  const mainChannels = Array.isArray(raw.mainChannels)
    ? raw.mainChannels.map((c: unknown) => sanitize(c)).join(", ")
    : "—";

  if (!nome || !whatsapp) {
    return res.status(400).json({ error: "Nome e WhatsApp são obrigatórios." });
  }

  const resendApiKey = process.env.RESEND_API_KEY;
  if (!resendApiKey) {
    return res.status(500).json({ error: "Configuração de email ausente." });
  }

  const whatsappLink = `https://wa.me/${whatsapp.replace(/\D/g, "")}`;

  const htmlBody = `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #f9f9f9; padding: 32px; border-radius: 12px;">
      <div style="background: #021836; padding: 24px; border-radius: 8px; margin-bottom: 24px; text-align: center;">
        <h1 style="color: #C9A368; margin: 0; font-size: 22px; letter-spacing: 2px;">LOCCI DIGITAL</h1>
        <p style="color: #ffffff; margin: 8px 0 0; font-size: 13px;">Novo Lead Capturado</p>
      </div>
      <div style="background: #ffffff; border-radius: 8px; padding: 24px; border: 1px solid #e5e7eb;">
        <h2 style="color: #021836; font-size: 18px; margin: 0 0 20px;">🔥 ${nome} — ${empresa || "Empresa não informada"}</h2>
        <table style="width: 100%; border-collapse: collapse; font-size: 14px;">
          <tr style="border-bottom: 1px solid #f3f4f6;">
            <td style="padding: 10px 0; color: #6b7280; width: 40%;">Nome</td>
            <td style="padding: 10px 0; color: #111827; font-weight: 600;">${nome}</td>
          </tr>
          <tr style="border-bottom: 1px solid #f3f4f6;">
            <td style="padding: 10px 0; color: #6b7280;">WhatsApp</td>
            <td style="padding: 10px 0; color: #111827; font-weight: 600;">
              <a href="${whatsappLink}" style="color: #C9A368;">${whatsapp}</a>
            </td>
          </tr>
          <tr style="border-bottom: 1px solid #f3f4f6;">
            <td style="padding: 10px 0; color: #6b7280;">Empresa</td>
            <td style="padding: 10px 0; color: #111827; font-weight: 600;">${empresa || "—"}</td>
          </tr>
          <tr style="border-bottom: 1px solid #f3f4f6;">
            <td style="padding: 10px 0; color: #6b7280;">Instagram / Site</td>
            <td style="padding: 10px 0; color: #111827;">${instagram || "—"}</td>
          </tr>
          <tr style="border-bottom: 1px solid #f3f4f6;">
            <td style="padding: 10px 0; color: #6b7280;">Segmento</td>
            <td style="padding: 10px 0; color: #111827; font-weight: 600;">${segment || "—"}</td>
          </tr>
          <tr style="border-bottom: 1px solid #f3f4f6;">
            <td style="padding: 10px 0; color: #6b7280;">Canais Atuais</td>
            <td style="padding: 10px 0; color: #111827;">${mainChannels}</td>
          </tr>
          <tr style="border-bottom: 1px solid #f3f4f6;">
            <td style="padding: 10px 0; color: #6b7280;">Maior Dificuldade</td>
            <td style="padding: 10px 0; color: #111827;">${biggestPain || "—"}</td>
          </tr>
          <tr>
            <td style="padding: 10px 0; color: #6b7280;">Investimento em Marketing</td>
            <td style="padding: 10px 0; color: #111827; font-weight: 600;">${investimento || "—"}</td>
          </tr>
        </table>
      </div>
      <div style="margin-top: 20px; background: #C9A368; border-radius: 8px; padding: 16px; text-align: center;">
        <a href="${whatsappLink}" style="color: #021836; font-weight: 700; font-size: 14px; text-decoration: none;">
          👉 Iniciar conversa no WhatsApp com ${nome}
        </a>
      </div>
      <p style="color: #9ca3af; font-size: 11px; text-align: center; margin-top: 24px;">
        LOCCI Digital · loccidigital@gmail.com
      </p>
    </div>
  `;

  try {
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${resendApiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: "onboarding@resend.dev",
        to: ["loccidigital@gmail.com"],
        subject: `🔥 Novo Lead: ${nome} — ${empresa || whatsapp}`,
        html: htmlBody,
      }),
    });

    if (!response.ok) {
      return res.status(500).json({ error: "Falha ao enviar email." });
    }

    return res.status(200).json({ success: true });
  } catch {
    return res.status(500).json({ error: "Erro interno ao enviar email." });
  }
}

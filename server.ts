import express from "express";
import path from "path";
import dotenv from "dotenv";
import { GoogleGenAI, Type } from "@google/genai";
import { createServer as createViteServer } from "vite";

// Load environment variables
dotenv.config();

// Initialize Express
const app = express();
const PORT = 3000;

// Body parsing middleware
app.use(express.json());

// Lazy-initialize Gemini SDK to fail gracefully if key is missing when called
let ai: GoogleGenAI | null = null;
function getGeminiClient(): GoogleGenAI {
  if (!ai) {
    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
      console.warn("⚠️ Warning: GEMINI_API_KEY is missing. Mock AI diagnostics fallback will be used.");
      throw new Error("GEMINI_API_KEY is not defined");
    }
    ai = new GoogleGenAI({
      apiKey,
      httpOptions: {
        headers: {
          'User-Agent': 'aistudio-build',
        }
      }
    });
  }
  return ai;
}

// ─────────────────────────────────────────────────
// ENDPOINT: Captação de Leads → Email via Resend
// ─────────────────────────────────────────────────
app.post("/api/leads", async (req, res) => {
  const { nome, whatsapp, empresa, instagram, segment, mainChannels, biggestPain } = req.body;

  if (!nome || !whatsapp || !empresa || !segment) {
    return res.status(400).json({ error: "Campos obrigatórios faltando." });
  }

  const resendApiKey = process.env.RESEND_API_KEY;
  if (!resendApiKey) {
    console.error("❌ RESEND_API_KEY não configurada.");
    return res.status(500).json({ error: "Configuração de email ausente." });
  }

  const channelsText = Array.isArray(mainChannels) && mainChannels.length > 0
    ? mainChannels.join(", ")
    : "Nenhum informado";

  const htmlBody = `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #f9f9f9; padding: 32px; border-radius: 12px;">
      <div style="background: #021836; padding: 24px; border-radius: 8px; margin-bottom: 24px; text-align: center;">
        <h1 style="color: #C9A368; margin: 0; font-size: 22px; letter-spacing: 2px;">LOCCI DIGITAL</h1>
        <p style="color: #ffffff; margin: 8px 0 0; font-size: 13px;">Novo Lead Capturado</p>
      </div>

      <div style="background: #ffffff; border-radius: 8px; padding: 24px; border: 1px solid #e5e7eb;">
        <h2 style="color: #021836; font-size: 18px; margin: 0 0 20px;">🔥 ${nome} — ${empresa}</h2>

        <table style="width: 100%; border-collapse: collapse; font-size: 14px;">
          <tr style="border-bottom: 1px solid #f3f4f6;">
            <td style="padding: 10px 0; color: #6b7280; width: 40%;">Nome</td>
            <td style="padding: 10px 0; color: #111827; font-weight: 600;">${nome}</td>
          </tr>
          <tr style="border-bottom: 1px solid #f3f4f6;">
            <td style="padding: 10px 0; color: #6b7280;">WhatsApp</td>
            <td style="padding: 10px 0; color: #111827; font-weight: 600;">
              <a href="https://wa.me/55${whatsapp.replace(/\D/g, '')}" style="color: #C9A368;">${whatsapp}</a>
            </td>
          </tr>
          <tr style="border-bottom: 1px solid #f3f4f6;">
            <td style="padding: 10px 0; color: #6b7280;">Empresa</td>
            <td style="padding: 10px 0; color: #111827; font-weight: 600;">${empresa}</td>
          </tr>
          <tr style="border-bottom: 1px solid #f3f4f6;">
            <td style="padding: 10px 0; color: #6b7280;">Instagram / Site</td>
            <td style="padding: 10px 0; color: #111827;">${instagram || "Não informado"}</td>
          </tr>
          <tr style="border-bottom: 1px solid #f3f4f6;">
            <td style="padding: 10px 0; color: #6b7280;">Segmento</td>
            <td style="padding: 10px 0; color: #111827; font-weight: 600;">${segment}</td>
          </tr>
          <tr style="border-bottom: 1px solid #f3f4f6;">
            <td style="padding: 10px 0; color: #6b7280;">Canais Atuais</td>
            <td style="padding: 10px 0; color: #111827;">${channelsText}</td>
          </tr>
          <tr>
            <td style="padding: 10px 0; color: #6b7280;">Maior Dificuldade</td>
            <td style="padding: 10px 0; color: #111827;">${biggestPain || "Não informado"}</td>
          </tr>
        </table>
      </div>

      <div style="margin-top: 20px; background: #C9A368; border-radius: 8px; padding: 16px; text-align: center;">
        <a href="https://wa.me/55${whatsapp.replace(/\D/g, '')}"
           style="color: #021836; font-weight: 700; font-size: 14px; text-decoration: none;">
          👉 Iniciar conversa no WhatsApp com ${nome}
        </a>
      </div>

      <p style="color: #9ca3af; font-size: 11px; text-align: center; margin-top: 24px;">
        LOCCI Digital · loccidigital@gmail.com
      </p>
    </div>
  `;

  try {
    const emailRes = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${resendApiKey}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        from: "LOCCI Digital <onboarding@resend.dev>",
        to: ["loccidigital@gmail.com"],
        subject: `🔥 Novo Lead: ${nome} — ${empresa} (${segment})`,
        html: htmlBody
      })
    });

    if (!emailRes.ok) {
      const errText = await emailRes.text();
      console.error("Resend error:", errText);
      return res.status(500).json({ error: "Falha ao enviar email." });
    }

    console.log(`✅ Lead capturado: ${nome} — ${empresa}`);
    return res.json({ success: true });

  } catch (error) {
    console.error("Erro ao enviar lead:", error);
    return res.status(500).json({ error: "Erro interno." });
  }
});

// REST Backend Endpoint for Marketing Diagnostic
app.post("/api/diagnostic", async (req, res) => {
  const { companyName, website, segment, mainChannels, biggestPain } = req.body;
  if (!companyName || !segment) {
    return res.status(400).json({ error: "Nome da empresa e segmento são obrigatórios." });
  }
  try {
    const client = getGeminiClient();
    const prompt = `
      Você é o Diretor de Estratégia Digital da LOCCI Digital, uma agência de marketing premium e de alta conversão.
      Analise o seguinte cliente para construir um diagnóstico de marketing estratégico detalhado, voltado a resultados rápidos e sustentáveis.
      Dados do Cliente:
      - Nome da Empresa: ${companyName}
      - Site/Rede Social: ${website || 'Não informado'}
      - Segmento: ${segment}
      - Canais Atuais de Marketing: ${mainChannels?.join(", ") || 'Nenhum/Indefinido'}
      - Maior Dificuldade/Dor: ${biggestPain || 'Atração de clientes qualificados'}
      Gere um diagnóstico estratégico exclusivo em português contendo:
      1. Uma nota de score estratégico (0 a 100) refletindo a maturidade digital atual da empresa (seja realista e direto).
      2. No seu Sumário Executivo, use um tom provocativo, elegante, profissional e prático. Mostre clareza e autoridade.
      3. Uma matriz SWOT (FUTI - Forças, Fraquezas, Oportunidades, Ameaças) simplificada.
      4. Um plano tático priorizado de 3 fases (curto, médio e longo prazo) com ações altamente aplicáveis.
      5. Recomendações personalizadas baseadas no serviço "Google Completo" da LOCCI (perfil otimizado, Google Ads, SEO local).
      6. Recomendação personalizada sobre como o serviço de "Captação de Eventos" (gravação premium na empresa, vídeos editados rápidos, conteúdo profissional no drive) ajudará na conexão emocional do cliente.
    `;
    const response = await client.models.generateContent({
      model: "gemini-3.5-flash",
      contents: prompt,
      config: {
        temperature: 0.7,
        systemInstruction: "Você é o estrategista chefe da LOCCI Digital, uma renomada agência brasileira de marketing digital estratégico de alto padrão.",
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            score: {
              type: Type.INTEGER,
              description: "Nota de maturidade digital de 0 a 100 baseada nas dores reportadas."
            },
            executiveSummary: {
              type: Type.STRING,
              description: "Sumário executivo em português resumindo os gargalos e as soluções propostas no tom sofisticado da agência LOCCI."
            },
            swot: {
              type: Type.OBJECT,
              properties: {
                strengths: { type: Type.ARRAY, items: { type: Type.STRING }, description: "Lista de pontos fortes identificados ou presumidos do segmento." },
                weaknesses: { type: Type.ARRAY, items: { type: Type.STRING }, description: "Lista de pontos fracos/gargalos atuais." },
                opportunities: { type: Type.ARRAY, items: { type: Type.STRING }, description: "Oportunidades de crescimento no digital." },
                threats: { type: Type.ARRAY, items: { type: Type.STRING }, description: "Ameaças por inatividade ou concorrência agressiva." }
              },
              required: ["strengths", "weaknesses", "opportunities", "threats"]
            },
            prioritizedPlan: {
              type: Type.ARRAY,
              items: {
                type: Type.OBJECT,
                properties: {
                  phase: { type: Type.STRING, description: "Título da fase (ex: 'Fase 1: Otimização Rápida')" },
                  actions: { type: Type.ARRAY, items: { type: Type.STRING }, description: "Ações táticas sugeridas" },
                  timeframe: { type: Type.STRING, description: "Prazo sugerido de execução (ex: '7-14 dias', '30 dias')" }
                },
                required: ["phase", "actions", "timeframe"]
              }
            },
            googleCompletoTips: {
              type: Type.ARRAY,
              items: { type: Type.STRING },
              description: "Dicas específicas para o mecanismo de pesquisa e perfil profissional do Google."
            },
            eventTips: {
              type: Type.ARRAY,
              items: { type: Type.STRING },
              description: "Sugestões de geração de conteúdo / cobertura de momentos / captação de eventos presenciais na empresa."
            }
          },
          required: ["score", "executiveSummary", "swot", "prioritizedPlan", "googleCompletoTips", "eventTips"]
        }
      }
    });
    const textOutput = response.text;
    if (!textOutput) {
      throw new Error("Gemini returned empty text response");
    }
    const jsonParsed = JSON.parse(textOutput.trim());
    return res.json(jsonParsed);
  } catch (error: any) {
    console.error("Erro na API de diagnóstico:", error);

    const mockScore = biggestPain ? 42 : 55;
    const backupResult = {
      score: mockScore,
      executiveSummary: `Constatamos que a ${companyName} possui um excelente potencial latente no segmento de ${segment}, mas precisa estruturar sua atração digital de forma mais profissional.`,
      swot: {
        strengths: [`Entendimento claro das dores do cliente`, `Presença de mercado em ${segment}`],
        weaknesses: [`Pouca otimização para tráfego pago ativo`, `Dependência de canais orgânicos instáveis`],
        opportunities: [`Domínio de palavras-chave locais de alta intenção`, `Diferenciação via captação cinematográfica`],
        threats: [`Concorrentes capturando leads por anúncios`, `Perda de relevância visual`]
      },
      prioritizedPlan: [
        { phase: "Fase 1: Base de Tráfego", actions: ["Otimizar Perfil no Google", "Criar landing page de conversão"], timeframe: "10 dias" },
        { phase: "Fase 2: Presença Premium", actions: ["Captação audiovisual institucional", "Posts de posicionamento"], timeframe: "30 dias" },
        { phase: "Fase 3: Escala", actions: ["Mensurar custo por lead", "Campanhas de remarketing"], timeframe: "Contínuo" }
      ],
      googleCompletoTips: ["Estar em destaque no Google quando o cliente pesquisar na sua região.", "Manter avaliações ativas e responsivas."],
      eventTips: ["Captação presencial eleva percepção de marca.", "Divida gravações em pílulas de conteúdo para o trimestre."]
    };
    return res.json(backupResult);
  }
});

// Configure Vite or Static Assets based on Environment
async function startServer() {
  if (process.env.NODE_ENV !== "production") {
    console.log("🚀 Starting Vite system in dev mode...");
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });

    app.use(vite.middlewares);

    app.get("*", async (req, res, next) => {
      try {
        const url = req.originalUrl;
        const html = await vite.transformIndexHtml(url, `<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>LOCCI Digital | Agência de Marketing Premium</title>
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.tsx"></script>
  </body>
</html>`);
        res.status(200).set({ "Content-Type": "text/html" }).end(html);
      } catch (e) {
        vite.ssrFixStacktrace(e as Error);
        next(e);
      }
    });
  } else {
    console.log("🛡️ Running in production environment...");
    const distPath = path.join(process.cwd(), "dist");

    app.use(express.static(distPath));

    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`✨ LOCCI Server listening successfully at http://0.0.0.0:${PORT}`);
  });
}

startServer();

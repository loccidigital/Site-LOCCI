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
    
    // Fail gracefully with a custom professional backup diagnostic
    const mockScore = biggestPain ? 42 : 55;
    const backupResult = {
      score: mockScore,
      executiveSummary: `Constatamos que a ${companyName} possui um excelente potencial latente no segmento de ${segment}, mas precisa estruturar sua atração digital de forma mais profissional. Atualmente, a falta de canais integrados causa dependência de indicação orgânica, limitando o crescimento previsível. A agência LOCCI recomenda focar em canais de intenção de compra como o Google de forma prioritária.`,
      swot: {
        strengths: [
          `Entendimento claro das dores do cliente`,
          `Presença de mercado em ${segment}`,
          `Qualidade de serviço diferenciada no offline`
        ],
        weaknesses: [
          `Pouca ou nenhuma otimização para tráfego pago ativo`,
          `Dependência de canais orgânicos instáveis`,
          `Ausência de processos de nutrição visual de alta qualidade`
        ],
        opportunities: [
          `Domínio de palavras-chave locais de alta intenção`,
          `Diferenciação competitiva através de captação cinematográfica presencial`,
          `Otimização de Perfil de Negócio para conversões automáticas no Google`
        ],
        threats: [
          `Concorrentes locais capturando leads através de anúncios patrocinados`,
          `Perda de relevância visual frente a novas marcas atuando no segmento`,
          `Fadiga do público em redes sociais estáticas`
        ]
      },
      prioritizedPlan: [
        {
          phase: "Fase 1: Base de Tráfego e Intenção",
          actions: [
            "Cadastrar e otimizar completamente o Perfil da Empresa no Google",
            "Criar uma landing page de alta conversão estruturada especificamente para leads",
            "Ativar campanhas iniciais de anúncio no Google Ads para o termo principal do seu serviço"
          ],
          timeframe: "Próximos 10 dias"
        },
        {
          phase: "Fase 2: Presença e Conexão Premium",
          actions: [
            "Realizar uma sessão dedicada de Captação Audiovisual com foco institucional de alto nível",
            "Sincronizar a identidade visual e produzir 3 posts estruturados de posicionamento no Instagram",
            "Estruturar atendimento comercial rápido e pronto no WhatsApp para leads vindos de anúncios"
          ],
          timeframe: "Próximos 30 dias"
        },
        {
          phase: "Fase 3: Escala e Retenção de Clientes",
          actions: [
            "Mensurar custo por lead e otimizar lances de conversão no Google e Instagram Ads",
            "Lançar campanhas de remarketing focado em quem visitou sua página",
            "Análise do funil comercial para melhorar a taxa de conversão final vendas-leads"
          ],
          timeframe: "Contínuo"
        }
      ],
      googleCompletoTips: [
        "Sua marca precisa estar em destaque no topo quando um cliente pesquisar ativamente em sua região por termos comerciais.",
        "Mantenha avaliações de clientes ativas e responsivas no Perfil do Google: isso eleva o ranking local exponencialmente.",
        "Crie campanhas de pesquisa focando no fundo de funil (com intenção clara de contratação imediata)."
      ],
      eventTips: [
        "A captação presencial eleva o nível de percepção da empresa: vídeos bem produzidos aumentam a confiança instantânea de quem entra no seu perfil.",
        "Divida o material bruto de gravação em pílulas rápidas de conteúdo (reels/stories) para usar durante todo o trimestre.",
        "Use vídeos dinâmicos no fundo de suas landing pages e sites institucionais para reter o usuário por mais tempo."
      ]
    };

    return res.json(backupResult);
  }
});

// Configure Vite or Static Assets based on Environment
async function startServer() {
  if (process.env.NODE_ENV !== "production") {
    // Development Mode
    console.log("🚀 Starting Vite system in dev mode...");
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    
    // Bind Vite middlewares
    app.use(vite.middlewares);
    
    // Catch-all requests will default to Vite's root handling
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
    // Production Mode
    console.log("🛡️ Running in production environment...");
    const distPath = path.join(process.cwd(), "dist");
    
    // Serve static files from index build
    app.use(express.static(distPath));
    
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  // Bind server to port
  app.listen(PORT, "0.0.0.0", () => {
    console.log(`✨ LOCCI Server listening successfully at http://0.0.0.0:${PORT}`);
  });
}

startServer();

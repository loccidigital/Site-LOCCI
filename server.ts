import express from "express";
import path from "path";
import dotenv from "dotenv";
import { createServer as createViteServer } from "vite";

dotenv.config();

const app = express();
const PORT = 3000;

app.use(express.json());

// POST /api/leads — recebe dados do formulário e envia email via Resend
app.post("/api/leads", async (req, res) => {
  const { nome, whatsapp, empresa, instagram, segment, mainChannels, biggestPain, investimento } = req.body;

  if (!nome || !whatsapp) {
    return res.status(400).json({ error: "Nome e WhatsApp são obrigatórios." });
  }

  const resendApiKey = process.env.RESEND_API_KEY;
  if (!resendApiKey) {
    console.warn("⚠️ RESEND_API_KEY não configurada.");
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
            <td style="padding: 10px 0; color: #111827;">${Array.isArray(mainChannels) && mainChannels.length > 0 ? mainChannels.join(", ") : "—"}</td>
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
        <a href="${whatsappLink}"
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
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${resendApiKey}`,
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
      const error = await response.text();
      console.error("Resend error:", error);
      return res.status(500).json({ error: "Falha ao enviar email." });
    }

    return res.json({ success: true });
  } catch (err) {
    console.error("Erro ao chamar Resend:", err);
    return res.status(500).json({ error: "Erro interno ao enviar email." });
  }
});

// Servidor Vite ou estático
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

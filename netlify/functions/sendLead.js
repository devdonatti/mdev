// api/sendLead.js (Vercel) o functions/sendLead.js (Netlify)
export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ ok: false, error: "Method not allowed" });
  }

  const { nombre, email, mensaje } = req.body;

  try {
    const zapierWebhook =
      "https://hooks.zapier.com/hooks/catch/25038243/urs17r1/";

    const response = await fetch(zapierWebhook, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ nombre, email, mensaje }),
    });

    if (response.ok) {
      return res.status(200).json({ ok: true, message: "Lead enviado" });
    } else {
      return res.status(500).json({ ok: false, message: "Error en Zapier" });
    }
  } catch (error) {
    console.error(error);
    return res.status(500).json({ ok: false, error });
  }
}

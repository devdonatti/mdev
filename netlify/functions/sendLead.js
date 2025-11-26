// netlify/functions/sendLead.js
export async function handler(event, context) {
  try {
    if (!event.body) return { statusCode: 400, body: "No data received" };

    let incoming;
    try {
      incoming = JSON.parse(event.body);
    } catch (e) {
      incoming = Object.fromEntries(new URLSearchParams(event.body));
    }

    const dataToSend = {
      Fecha: new Date().toLocaleString("es-AR"),
      Nombre: incoming.nombre || "",
      Email: incoming.email || "",
      WhatsApp: incoming.whatsapp || incoming.phone || "",
      "Tipo de proyecto": incoming.tipoProyecto || "",
      Estado: "Nuevo Lead",
    };

    // --- pegá la URL del webhook de Make aquí ---
    const MAKE_WEBHOOK_URL =
      "https://hook.us2.make.com/koqn1s3zm7fedlgklld9blhc4tcf565e";
    const resp = await fetch(MAKE_WEBHOOK_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(dataToSend),
    });

    const respText = await resp.text().catch(() => "");

    if (!resp.ok) {
      console.error("Make response not ok:", resp.status, respText);
      return {
        statusCode: 502,
        body: JSON.stringify({
          error: "Error sending to Make",
          details: respText,
        }),
      };
    }

    return {
      statusCode: 200,
      body: JSON.stringify({
        message: "Lead enviado correctamente a Make",
        dataToSend,
      }),
    };
  } catch (err) {
    console.error("Error en función:", err);
    return { statusCode: 500, body: JSON.stringify({ error: err.message }) };
  }
}

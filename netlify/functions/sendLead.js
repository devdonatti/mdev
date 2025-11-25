// netlify/functions/sendLead.js
export async function handler(event, context) {
  try {
    if (!event.body) {
      return { statusCode: 400, body: "No data received" };
    }

    // parsear seguro (event.body viene como string)
    let incoming;
    try {
      incoming = JSON.parse(event.body);
    } catch (e) {
      // si por algún motivo viene urlencoded, tratamos de parsear manualmente
      const params = Object.fromEntries(new URLSearchParams(event.body));
      incoming = params;
    }

    console.log("Incoming raw:", incoming);

    // mapear exactamente los nombres que tiene tu Google Sheet
    const dataToSend = {
      Fecha: new Date().toLocaleString("es-AR"),
      Nombre: incoming.nombre || incoming.name || "",
      Email: incoming.email || "",
      WhatsApp: incoming.whatsapp || incoming.whatsApp || incoming.phone || "",
      "Tipo de proyecto":
        incoming.tipoProyecto || incoming.tipo_proyecto || incoming.type || "",
      Estado: "Nuevo Lead",
    };

    console.log("Data to send to Zapier:", dataToSend);

    // URL de tu webhook de Zapier (reemplazala)
    const ZAPIER_WEBHOOK_URL =
      "https://hooks.zapier.com/hooks/catch/25038243/urs17r1/";

    const resp = await fetch(ZAPIER_WEBHOOK_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(dataToSend),
    });

    if (!resp.ok) {
      const text = await resp.text().catch(() => "");
      console.error("Zapier response not ok:", resp.status, text);
      throw new Error("Error sending to Zapier: " + resp.status + " " + text);
    }

    return {
      statusCode: 200,
      body: JSON.stringify({
        message: "Lead enviado correctamente a Zapier",
        dataToSend,
      }),
    };
  } catch (err) {
    console.error("Error en función:", err);
    return { statusCode: 500, body: JSON.stringify({ error: err.message }) };
  }
}

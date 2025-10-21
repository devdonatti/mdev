export async function handler(event, context) {
  try {
    if (!event.body) {
      return { statusCode: 400, body: "No data received" };
    }

    const data = JSON.parse(event.body);
    console.log("Lead recibido:", data);

    // Mapeo de datos con los mismos nombres que tus columnas de Sheets
    const dataToSend = {
      Fecha: new Date().toLocaleString("es-AR"),
      Nombre: data.nombre || "",
      Email: data.email || "",
      WhatsApp: data.whatsapp || "",
      "Tipo de proyecto": data.tipoProyecto || "",
      Estado: "Nuevo Lead",
    };

    // 👉 URL de tu Webhook de Zapier
    const ZAPIER_WEBHOOK_URL =
      "https://hooks.zapier.com/hooks/catch/XXXXXXX/XXXXXXX/";

    // Enviar datos a Zapier
    const response = await fetch(ZAPIER_WEBHOOK_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(dataToSend),
    });

    if (!response.ok) {
      throw new Error(`Error al enviar a Zapier: ${response.statusText}`);
    }

    return {
      statusCode: 200,
      body: JSON.stringify({ message: "Lead enviado correctamente a Zapier" }),
    };
  } catch (err) {
    console.error("Error en función:", err);
    return { statusCode: 500, body: JSON.stringify({ error: err.message }) };
  }
}

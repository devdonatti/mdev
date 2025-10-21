// netlify/functions/sendLead.js
export async function handler(event, context) {
  try {
    if (!event.body) {
      return { statusCode: 400, body: "No data received" };
    }

    const data = JSON.parse(event.body);
    console.log("Lead recibido:", data);

    // TODO: enviar a Zapier/Google Sheets aquí
    return {
      statusCode: 200,
      body: JSON.stringify({ message: "Lead recibido correctamente" }),
    };
  } catch (err) {
    console.error("Error en función:", err);
    return { statusCode: 500, body: JSON.stringify({ error: err.message }) };
  }
}

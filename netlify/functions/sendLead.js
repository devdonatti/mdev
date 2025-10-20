export async function handler(event, context) {
  try {
    const payload = JSON.parse(event.body);

    const res = await fetch(
      "https://hooks.zapier.com/hooks/catch/25038243/ur67ar0/",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      }
    );

    return {
      statusCode: res.ok ? 200 : 500,
      body: JSON.stringify({ success: res.ok }),
    };
  } catch (err) {
    return { statusCode: 500, body: JSON.stringify({ error: err.message }) };
  }
}

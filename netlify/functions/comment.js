const WEBHOOK_URL = process.env.DISCORD_WEBHOOK;

exports.handler = async function(event) {
  if (event.httpMethod !== 'POST')
    return { statusCode: 405, body: 'Method Not Allowed' };

  if (!WEBHOOK_URL)
    return { statusCode: 500, body: JSON.stringify({ error: 'Webhook not configured' }) };

  let body;
  try { body = JSON.parse(event.body); }
  catch { return { statusCode: 400, body: JSON.stringify({ error: 'Invalid JSON' }) }; }

  const name    = String(body.name    || '').trim().slice(0, 80);
  const message = String(body.message || '').trim().slice(0, 1000);

  if (!name || !message)
    return { statusCode: 400, body: JSON.stringify({ error: 'Missing name or message' }) };

  const payload = {
    username: 'Sonic.EXE Unofficial',
    avatar_url: 'https://vsexeunofficial.com/icono.png',
    embeds: [{
      color: 0xcc0000,
      author: { name },
      description: message,
      footer: { text: 'vsexeunofficial.com — Comments' },
      timestamp: new Date().toISOString(),
    }],
  };

  try {
    const res = await fetch(WEBHOOK_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    });
    if (!res.ok) throw new Error(`Discord ${res.status}`);
    return {
      statusCode: 200,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ ok: true }),
    };
  } catch (e) {
    return { statusCode: 502, body: JSON.stringify({ error: 'Failed to send to Discord' }) };
  }
};

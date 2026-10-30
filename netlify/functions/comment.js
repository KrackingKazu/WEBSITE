const WEBHOOK_URL = process.env.DISCORD_WEBHOOK;

const TYPES = {
  bug:   { label: 'Bug',        color: 0xcc0000 },
  idea:  { label: 'Suggestion', color: 0xf0b400 },
  other: { label: 'Comment',    color: 0x5865f2 },
};

const json = (statusCode, data) => ({
  statusCode,
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(data),
});

const clean = (value, max) => String(value || '').replace(/[\u0000-\u0008\u000B\u000C\u000E-\u001F\u007F]/g, '').trim().slice(0, max);

exports.handler = async function(event) {
  if (event.httpMethod !== 'POST')
    return { statusCode: 405, body: 'Method Not Allowed' };

  if (!WEBHOOK_URL)
    return json(500, { error: 'Webhook not configured' });

  let body;
  try { body = JSON.parse(event.body); }
  catch { return json(400, { error: 'Invalid JSON' }); }

  if (clean(body.website, 200) || Number(body.elapsed) < 3000)
    return json(200, { ok: true });

  const name    = clean(body.name, 80);
  const message = clean(body.message, 1000);
  const type    = TYPES[body.type] ? body.type : 'other';
  const lang    = clean(body.lang, 12) || 'en';

  if (!name || !message)
    return json(400, { error: 'Missing name or message' });

  const payload = {
    username: 'Sonic.EXE Unofficial',
    avatar_url: 'https://vsexeunofficial.com/icono.png',
    allowed_mentions: { parse: [] },
    embeds: [{
      color: TYPES[type].color,
      title: TYPES[type].label,
      author: { name },
      description: message,
      fields: [{ name: 'Language', value: lang, inline: true }],
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
    return json(200, { ok: true });
  } catch (e) {
    return json(502, { error: 'Failed to send to Discord' });
  }
};

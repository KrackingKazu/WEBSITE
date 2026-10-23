const crypto = require('crypto');

const GAME_ID     = '1055030';
const PRIVATE_KEY = process.env.GJ_PRIVATE_KEY;

function gjSign(url) {
  return crypto.createHash('md5').update(url + PRIVATE_KEY).digest('hex');
}

function gjUrl(endpoint, params) {
  const base = `https://api.gamejolt.com/api/game/v1_2${endpoint}?game_id=${GAME_ID}&${params}&format=json`;
  return `${base}&signature=${gjSign(base)}`;
}

function reply(statusCode, body) {
  return {
    statusCode,
    headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' },
    body: JSON.stringify(body),
  };
}

const succeeded = r => !!r && (r.success === true || r.success === 'true');

exports.handler = async function(event) {
  const { username, token } = event.queryStringParameters || {};

  if (!username || !token)
    return reply(400, { error: 'Enter username and token' });

  if (!PRIVATE_KEY)
    return reply(500, { error: 'Server misconfigured: GJ_PRIVATE_KEY is not set' });

  try {
    const user = `username=${encodeURIComponent(username.trim())}&user_token=${encodeURIComponent(token.trim())}`;

    const auth = (await (await fetch(gjUrl('/users/auth/', user))).json()).response;
    if (!succeeded(auth)) {
      const msg = (auth && auth.message) || '';
      if (/signature/i.test(msg))
        return reply(500, { error: 'Server misconfigured: GJ_PRIVATE_KEY is wrong' });
      return reply(401, { error: 'Wrong username or Game Token' });
    }

    const trophies = (await (await fetch(gjUrl('/trophies/', user))).json()).response;
    if (!succeeded(trophies))
      return reply(502, { error: (trophies && trophies.message) || 'GameJolt returned an error' });

    const trophyIds = (trophies.trophies || [])
      .filter(t => t.achieved && t.achieved !== 'false' && t.achieved !== false)
      .map(t => Number(t.id));
    return reply(200, { trophyIds });
  } catch (e) {
    return reply(500, { error: 'Failed to reach GameJolt' });
  }
};

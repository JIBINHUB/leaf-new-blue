/**
 * Server-side Supabase access for the API routes.
 *
 * Uses the SECRET (service role) key, which bypasses row level security. It is
 * read from the environment and must never be imported into anything under
 * src/ — that code ships to the browser.
 *
 * Returns null when the key is absent so the enquiry email still goes out on a
 * deployment that has not been configured yet. Persistence is an upgrade to the
 * existing flow, never a new way for it to fail.
 */

const SUPABASE_URL = process.env.SUPABASE_URL || 'https://fzkzpamibtbisttlciep.supabase.co';
const SERVICE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY || '';

function headers() {
  return {
    apikey: SERVICE_KEY,
    Authorization: `Bearer ${SERVICE_KEY}`,
    'Content-Type': 'application/json',
    Prefer: 'return=representation'
  };
}

/** POST rows to a table. Resolves to the inserted rows, or null on any failure. */
async function insert(table, rows) {
  if (!SERVICE_KEY) return null;

  try {
    const response = await fetch(`${SUPABASE_URL}/rest/v1/${table}`, {
      method: 'POST',
      headers: headers(),
      body: JSON.stringify(rows)
    });

    if (!response.ok) {
      console.error('Supabase insert failed', { table, status: response.status, body: await response.text() });
      return null;
    }

    return await response.json();
  } catch (error) {
    console.error('Supabase insert threw', { table, message: error?.message });
    return null;
  }
}

/** PATCH a single row by id. Best-effort: never throws into the request path. */
async function update(table, id, patch) {
  if (!SERVICE_KEY) return;

  try {
    await fetch(`${SUPABASE_URL}/rest/v1/${table}?id=eq.${encodeURIComponent(id)}`, {
      method: 'PATCH',
      headers: headers(),
      body: JSON.stringify(patch)
    });
  } catch (error) {
    console.error('Supabase update threw', { table, message: error?.message });
  }
}

/** Resolve the auth user id for an email, so an order attaches to their account. */
async function findUserIdByEmail(email) {
  if (!SERVICE_KEY || !email) return null;

  try {
    const response = await fetch(
      `${SUPABASE_URL}/rest/v1/profiles?select=id&email=eq.${encodeURIComponent(email)}&limit=1`,
      { headers: headers() }
    );
    if (!response.ok) return null;
    const rows = await response.json();
    return rows?.[0]?.id || null;
  } catch {
    return null;
  }
}

module.exports = { insert, update, findUserIdByEmail, isConfigured: Boolean(SERVICE_KEY) };

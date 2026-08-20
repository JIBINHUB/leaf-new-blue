/**
 * Supabase browser client.
 *
 * The publishable key below is designed to be public — it ships in every
 * browser bundle by definition, and it grants nothing on its own. Every table
 * has row level security, so this key can only read what a policy allows and
 * can only write rows the signed-in user owns.
 *
 * The SECRET key must never appear in this file or anywhere under src/.
 * It lives only in Vercel's environment variables, used by /api handlers.
 */

import { createClient } from '@supabase/supabase-js';

const SUPABASE_URL =
  import.meta.env.VITE_SUPABASE_URL || 'https://fzkzpamibtbisttlciep.supabase.co';

const SUPABASE_PUBLISHABLE_KEY =
  import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY ||
  'sb_publishable_1pEA9udMI4Kep0yEJEwC4w_7vF28g88';

export const supabase = createClient(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY, {
  auth: {
    persistSession: true,      // customer stays signed in across visits
    autoRefreshToken: true,
    detectSessionInUrl: true   // needed for the email confirmation link
  }
});

export const SITE_MEDIA_BUCKET = 'site-media';

/** Public URL for a file in the managed media bucket. */
export const mediaPublicUrl = (storagePath) =>
  supabase.storage.from(SITE_MEDIA_BUCKET).getPublicUrl(storagePath).data.publicUrl;

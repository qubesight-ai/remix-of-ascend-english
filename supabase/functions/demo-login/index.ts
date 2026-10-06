import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

const json = (body: unknown, status = 200) =>
  new Response(JSON.stringify(body), {
    status,
    headers: { ...corsHeaders, 'Content-Type': 'application/json' },
  });

async function findUserByEmail(admin: ReturnType<typeof createClient>, email: string) {
  const target = email.toLowerCase();
  for (let page = 1; page <= 20; page++) {
    const { data, error } = await admin.auth.admin.listUsers({ page, perPage: 200 });
    if (error) throw error;
    const hit = data.users.find((u) => u.email?.toLowerCase() === target);
    if (hit) return hit;
    if (data.users.length < 200) break;
  }
  return null;
}

Deno.serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders });
  }

  try {
    let checkOnly = false;
    try {
      const body = await req.json();
      checkOnly = body?.check === true;
    } catch { /* no body */ }

    const supabaseUrl = Deno.env.get('SUPABASE_URL')!;
    const supabaseServiceKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!;
    const demoEmail = Deno.env.get('DEMO_USER_EMAIL')?.trim();
    const demoPassword = Deno.env.get('DEMO_USER_PASSWORD');

    if (!demoEmail || !demoPassword) {
      return json({
        ok: false,
        code: 'not_configured',
        error: 'The demo email or password has not been saved in the app settings.',
      }, 500);
    }

    const admin = createClient(supabaseUrl, supabaseServiceKey, {
      auth: { autoRefreshToken: false, persistSession: false },
    });

    const user = await findUserByEmail(admin, demoEmail);
    if (!user) {
      return json({
        ok: false,
        code: 'account_missing',
        error: 'No account exists for the saved demo email. Create that account first.',
      }, 404);
    }
    if (!user.email_confirmed_at) {
      return json({
        ok: false,
        code: 'not_confirmed',
        error: 'The demo account exists but its email has not been confirmed.',
      }, 403);
    }

    const { data, error } = await admin.auth.signInWithPassword({
      email: demoEmail,
      password: demoPassword,
    });

    if (error || !data.session) {
      console.error('Demo login failed:', error?.message);
      return json({
        ok: false,
        code: 'wrong_password',
        error: 'The demo account exists, but the saved password does not match it.',
      }, 401);
    }

    if (checkOnly) {
      return json({ ok: true, code: 'ok', message: 'Demo account exists and can sign in.' });
    }

    return json({
      ok: true,
      access_token: data.session.access_token,
      refresh_token: data.session.refresh_token,
    });
  } catch (err) {
    console.error('Unexpected error:', err);
    return json({ ok: false, code: 'internal', error: 'Unexpected error while checking the demo account.' }, 500);
  }
});

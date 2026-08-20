import "jsr:@supabase/functions-js/edge-runtime.d.ts";
import { createClient } from "jsr:@supabase/supabase-js@2";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type, Authorization, X-Client-Info, Apikey",
};

Deno.serve(async (req: Request) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { status: 200, headers: corsHeaders });
  }

  try {
    const {
      referrerName,
      referrerPhone,
      referrerEmail,
      friendName,
      friendPhone,
      friendEmail,
    } = await req.json();

    if (!referrerName || !referrerPhone || !referrerEmail || !friendName || !friendPhone) {
      return new Response(
        JSON.stringify({ error: "Missing required fields" }),
        { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    const supabase = createClient(
      Deno.env.get("SUPABASE_URL")!,
      Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!
    );

    const { error: dbError } = await supabase.from("referrals").insert({
      referrer_name: referrerName,
      referrer_phone: referrerPhone,
      referrer_email: referrerEmail,
      friend_name: friendName,
      friend_phone: friendPhone,
      friend_email: friendEmail || null,
    });

    if (dbError) throw new Error(`DB error: ${dbError.message}`);

    // Send email notification — best effort, does not fail the response
    const resendKey = Deno.env.get("RESEND_API_KEY");
    if (resendKey) {
      const emailHtml = `
        <div style="font-family:sans-serif;max-width:600px;margin:0 auto;background:#0f172a;color:#e2e8f0;padding:32px;border-radius:12px;">
          <h1 style="color:#00d4ff;font-size:22px;margin:0 0 4px;">New Referral — Give a Wax, Get a Wax</h1>
          <p style="color:#64748b;margin:0 0 24px;font-size:14px;">William's Auto Detailing</p>

          <table style="width:100%;border-collapse:collapse;">
            <tr>
              <td colspan="2" style="padding:10px 0;color:#00d4ff;font-size:13px;font-weight:700;text-transform:uppercase;letter-spacing:0.05em;">Referred By</td>
            </tr>
            <tr>
              <td style="padding:10px 0;border-bottom:1px solid #1e293b;color:#94a3b8;font-size:13px;width:140px;">Name</td>
              <td style="padding:10px 0;border-bottom:1px solid #1e293b;color:#f1f5f9;font-size:14px;font-weight:600;">${referrerName}</td>
            </tr>
            <tr>
              <td style="padding:10px 0;border-bottom:1px solid #1e293b;color:#94a3b8;font-size:13px;">Phone</td>
              <td style="padding:10px 0;border-bottom:1px solid #1e293b;font-size:14px;"><a href="tel:${referrerPhone.replace(/\D/g, '')}" style="color:#00d4ff;text-decoration:none;font-weight:600;">${referrerPhone}</a></td>
            </tr>
            <tr>
              <td style="padding:10px 0;border-bottom:1px solid #1e293b;color:#94a3b8;font-size:13px;">Email</td>
              <td style="padding:10px 0;border-bottom:1px solid #1e293b;font-size:14px;"><a href="mailto:${referrerEmail}" style="color:#00d4ff;text-decoration:none;">${referrerEmail}</a></td>
            </tr>
            <tr>
              <td colspan="2" style="padding:20px 0 10px;color:#00d4ff;font-size:13px;font-weight:700;text-transform:uppercase;letter-spacing:0.05em;">Their Friend</td>
            </tr>
            <tr>
              <td style="padding:10px 0;border-bottom:1px solid #1e293b;color:#94a3b8;font-size:13px;">Name</td>
              <td style="padding:10px 0;border-bottom:1px solid #1e293b;color:#f1f5f9;font-size:14px;font-weight:600;">${friendName}</td>
            </tr>
            <tr>
              <td style="padding:10px 0;${friendEmail ? 'border-bottom:1px solid #1e293b;' : ''}color:#94a3b8;font-size:13px;">Phone</td>
              <td style="padding:10px 0;${friendEmail ? 'border-bottom:1px solid #1e293b;' : ''}font-size:14px;"><a href="tel:${friendPhone.replace(/\D/g, '')}" style="color:#00d4ff;text-decoration:none;font-weight:600;">${friendPhone}</a></td>
            </tr>
            ${friendEmail ? `
            <tr>
              <td style="padding:10px 0;color:#94a3b8;font-size:13px;">Email</td>
              <td style="padding:10px 0;font-size:14px;"><a href="mailto:${friendEmail}" style="color:#00d4ff;text-decoration:none;">${friendEmail}</a></td>
            </tr>` : ''}
          </table>

          <p style="margin:24px 0 0;color:#475569;font-size:12px;">
            Both get a free basic-wax → premium wax/sealant upgrade once the friend books their first paid service.
            Submitted ${new Date().toLocaleString('en-US', { timeZone: 'America/New_York', dateStyle: 'medium', timeStyle: 'short' })} ET
          </p>
        </div>
      `;

      await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${resendKey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          from: "Referrals <onboarding@resend.dev>",
          to: ["williamautodetailing@gmail.com"],
          subject: `New Referral: ${referrerName} → ${friendName}`,
          html: emailHtml,
        }),
      }).catch(() => {
        // Email failure is non-fatal — referral is already saved to DB
      });
    }

    return new Response(
      JSON.stringify({ success: true }),
      { headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  } catch (err) {
    return new Response(
      JSON.stringify({ error: (err as Error).message }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  }
});

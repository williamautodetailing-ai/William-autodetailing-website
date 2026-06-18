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
    const { name, phone, email, vehicle, vehicleType, packageInterest, notes } = await req.json();

    if (!name || !phone || !email || !vehicle || !packageInterest) {
      return new Response(
        JSON.stringify({ error: "Missing required fields" }),
        { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    const supabase = createClient(
      Deno.env.get("SUPABASE_URL")!,
      Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!
    );

    const { error: dbError } = await supabase.from("leads").insert({
      name,
      phone,
      email,
      vehicle,
      vehicle_type: vehicleType ?? "sedan",
      package_interest: packageInterest,
      notes: notes || null,
    });

    if (dbError) throw new Error(`DB error: ${dbError.message}`);

    // Send email notification — best effort, does not fail the response
    const resendKey = Deno.env.get("RESEND_API_KEY");
    if (resendKey) {
      const emailHtml = `
        <div style="font-family:sans-serif;max-width:600px;margin:0 auto;background:#0f172a;color:#e2e8f0;padding:32px;border-radius:12px;">
          <h1 style="color:#00d4ff;font-size:22px;margin:0 0 4px;">New Lead</h1>
          <p style="color:#64748b;margin:0 0 24px;font-size:14px;">William's Auto Detailing</p>

          <table style="width:100%;border-collapse:collapse;">
            <tr>
              <td style="padding:10px 0;border-bottom:1px solid #1e293b;color:#94a3b8;font-size:13px;width:140px;">Name</td>
              <td style="padding:10px 0;border-bottom:1px solid #1e293b;color:#f1f5f9;font-size:14px;font-weight:600;">${name}</td>
            </tr>
            <tr>
              <td style="padding:10px 0;border-bottom:1px solid #1e293b;color:#94a3b8;font-size:13px;">Phone</td>
              <td style="padding:10px 0;border-bottom:1px solid #1e293b;font-size:14px;"><a href="tel:${phone.replace(/\D/g, '')}" style="color:#00d4ff;text-decoration:none;font-weight:600;">${phone}</a></td>
            </tr>
            <tr>
              <td style="padding:10px 0;border-bottom:1px solid #1e293b;color:#94a3b8;font-size:13px;">Email</td>
              <td style="padding:10px 0;border-bottom:1px solid #1e293b;font-size:14px;"><a href="mailto:${email}" style="color:#00d4ff;text-decoration:none;">${email}</a></td>
            </tr>
            <tr>
              <td style="padding:10px 0;border-bottom:1px solid #1e293b;color:#94a3b8;font-size:13px;">Vehicle</td>
              <td style="padding:10px 0;border-bottom:1px solid #1e293b;color:#f1f5f9;font-size:14px;">${vehicle}</td>
            </tr>
            <tr>
              <td style="padding:10px 0;border-bottom:1px solid #1e293b;color:#94a3b8;font-size:13px;">Type</td>
              <td style="padding:10px 0;border-bottom:1px solid #1e293b;color:#f1f5f9;font-size:14px;">${vehicleType === 'suv' ? 'SUV / Truck / Crossover' : 'Coupe / Sedan'}</td>
            </tr>
            <tr>
              <td style="padding:10px 0;border-bottom:1px solid #1e293b;color:#94a3b8;font-size:13px;">Package</td>
              <td style="padding:10px 0;border-bottom:1px solid #1e293b;color:#f1f5f9;font-size:14px;font-weight:600;">${packageInterest}</td>
            </tr>
            ${notes ? `
            <tr>
              <td style="padding:10px 0;color:#94a3b8;font-size:13px;vertical-align:top;">Notes</td>
              <td style="padding:10px 0;color:#f1f5f9;font-size:14px;">${notes}</td>
            </tr>` : ''}
          </table>

          <p style="margin:24px 0 0;color:#475569;font-size:12px;">Submitted ${new Date().toLocaleString('en-US', { timeZone: 'America/New_York', dateStyle: 'medium', timeStyle: 'short' })} ET</p>
        </div>
      `;

      await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${resendKey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          from: "Leads <onboarding@resend.dev>",
          to: ["williamautodetailing@gmail.com"],
          subject: `New Lead: ${name} — ${packageInterest}`,
          html: emailHtml,
        }),
      }).catch(() => {
        // Email failure is non-fatal — lead is already saved to DB
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

import "jsr:@supabase/functions-js/edge-runtime.d.ts";

/**
 * Returns real GoHighLevel availability for the booking calendar.
 * Secrets (set with `supabase secrets set ...`, NEVER in frontend):
 *   GHL_API_TOKEN     — your Private Integration token (pit-...)
 *   GHL_CALENDAR_ID   — the calendar to book into
 *   GHL_TIMEZONE      — optional, defaults to America/New_York
 */
const cors = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type, Authorization, apikey",
};

const GHL = "https://services.leadconnectorhq.com";
const DAYS_AHEAD = 45;

Deno.serve(async (req: Request) => {
  if (req.method === "OPTIONS") return new Response(null, { status: 200, headers: cors });

  try {
    const token = Deno.env.get("GHL_API_TOKEN");
    const calendarId = Deno.env.get("GHL_CALENDAR_ID");
    const tz = Deno.env.get("GHL_TIMEZONE") ?? "America/New_York";
    if (!token || !calendarId) throw new Error("Server not configured: missing GHL_API_TOKEN or GHL_CALENDAR_ID");

    const start = Date.now();
    const end = start + DAYS_AHEAD * 24 * 60 * 60 * 1000;
    const url = `${GHL}/calendars/${calendarId}/free-slots?startDate=${start}&endDate=${end}&timezone=${encodeURIComponent(tz)}`;

    const r = await fetch(url, {
      headers: { Authorization: `Bearer ${token}`, Version: "2021-04-15", Accept: "application/json" },
    });
    const data = await r.json();
    if (!r.ok) throw new Error(data.message || data.error || `GHL ${r.status}`);

    // GHL returns an object keyed by "YYYY-MM-DD" → { slots: [ISO, ...] }
    const slotsByDate: Record<string, string[]> = {};
    for (const [key, val] of Object.entries<any>(data)) {
      if (/^\d{4}-\d{2}-\d{2}$/.test(key) && val && Array.isArray(val.slots) && val.slots.length) {
        slotsByDate[key] = val.slots;
      }
    }

    return new Response(JSON.stringify({ timezone: tz, slotsByDate }), {
      headers: { ...cors, "Content-Type": "application/json" },
    });
  } catch (err) {
    return new Response(JSON.stringify({ error: (err as Error).message }), {
      status: 500, headers: { ...cors, "Content-Type": "application/json" },
    });
  }
});

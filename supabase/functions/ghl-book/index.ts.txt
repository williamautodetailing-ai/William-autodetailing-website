import "jsr:@supabase/functions-js/edge-runtime.d.ts";

/**
 * Books a GoHighLevel appointment for the chosen slot.
 * Upserts the contact (so it matches the same lead the inbound webhook created,
 * keyed by email/phone) then creates the appointment on the calendar.
 *
 * Secrets:
 *   GHL_API_TOKEN, GHL_CALENDAR_ID, GHL_LOCATION_ID
 */
const cors = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type, Authorization, apikey",
};

const GHL = "https://services.leadconnectorhq.com";

Deno.serve(async (req: Request) => {
  if (req.method === "OPTIONS") return new Response(null, { status: 200, headers: cors });

  try {
    const token = Deno.env.get("GHL_API_TOKEN");
    const calendarId = Deno.env.get("GHL_CALENDAR_ID");
    const locationId = Deno.env.get("GHL_LOCATION_ID");
    if (!token || !calendarId || !locationId) {
      throw new Error("Server not configured: missing GHL_API_TOKEN, GHL_CALENDAR_ID or GHL_LOCATION_ID");
    }

    const headers = {
      Authorization: `Bearer ${token}`,
      Version: "2021-04-15",
      "Content-Type": "application/json",
      Accept: "application/json",
    };

    const body = await req.json();
    const {
      firstName = "", lastName = "", email = "", phone = "",
      startTime, service = "", package: pkg = "", estimate = "", vehicle = "", carModel = "",
    } = body;

    if (!startTime) throw new Error("Missing startTime");
    if (!email && !phone) throw new Error("Need an email or phone to book");

    // 1) Upsert the contact (matches the webhook-created lead by email/phone)
    const cRes = await fetch(`${GHL}/contacts/upsert`, {
      method: "POST", headers,
      body: JSON.stringify({
        locationId, firstName, lastName, email, phone,
        name: [firstName, lastName].filter(Boolean).join(" ") || firstName,
      }),
    });
    const cData = await cRes.json();
    if (!cRes.ok) throw new Error(`Contact: ${cData.message || JSON.stringify(cData)}`);
    const contactId = cData.contact?.id || cData.id;
    if (!contactId) throw new Error("No contact id returned from GHL");

    // 2) Create the appointment
    const title = `${service || "Detail"}${pkg ? ` — ${pkg}` : ""}${firstName ? ` (${firstName})` : ""}`;
    const notes = `Vehicle: ${vehicle || "—"}${carModel ? ` (${carModel})` : ""} · Est: ${estimate ? `$${estimate}` : "—"} · Booked from website wizard`;

    const aRes = await fetch(`${GHL}/calendars/events/appointments`, {
      method: "POST", headers,
      body: JSON.stringify({
        calendarId, locationId, contactId,
        startTime, title,
        appointmentStatus: "confirmed",
        ignoreFreeSlotValidation: false,
        notes,
      }),
    });
    const aData = await aRes.json();
    if (!aRes.ok) throw new Error(`Appointment: ${aData.message || JSON.stringify(aData)}`);

    return new Response(
      JSON.stringify({ success: true, contactId, appointmentId: aData.id || aData.appointment?.id }),
      { headers: { ...cors, "Content-Type": "application/json" } },
    );
  } catch (err) {
    return new Response(JSON.stringify({ error: (err as Error).message }), {
      status: 500, headers: { ...cors, "Content-Type": "application/json" },
    });
  }
});

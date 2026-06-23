// GoHighLevel Inbound Webhook — paste the URL from your GHL workflow trigger here.
// GHL: Automation → Workflows → New Workflow → Add Trigger → "Inbound Webhook" → copy URL.
export const GHL_WEBHOOK_URL = 'https://services.leadconnectorhq.com/hooks/fwFAUJw1X0vaZwhtIsR1/webhook-trigger/180b39da-b060-4adf-8ac2-bb7a5a9a9939';

// GoHighLevel CALENDAR booking widget (date/time only — NOT a service menu).
// GHL: Calendars → open the calendar → Embed/Share → copy the URL ending in /widget/booking/<ID>.
// ⚠️ A "/widget/service-menu/" URL makes the customer pick a service again — use "/widget/booking/" instead.
export const GHL_CALENDAR_URL = 'https://api.leadconnectorhq.com/widget/booking/suGWOwXwpkmIArFkxTsf';

// OPTIONAL: a different calendar per package. If a package isn't listed here,
// it falls back to GHL_CALENDAR_URL above. Leave empty to use one calendar for everything.
export const GHL_CALENDAR_BY_PACKAGE: Record<string, string> = {
  // 'Signature Detail':  'https://api.leadconnectorhq.com/widget/booking/XXXX',
  // 'Pristine Detail':   'https://api.leadconnectorhq.com/widget/booking/YYYY',
  // 'The Perfect Detail':'https://api.leadconnectorhq.com/widget/booking/ZZZZ',
};

export const BOOKING_URL = 'https://app.urable.com/form/de36wHWdi8PvYueHdIv5/NpEaEWdx5tDbvPD5GDw8';
export const URABLE_FORM_URL = 'https://app.urable.com/form/de36wHWdi8PvYueHdIv5/NpEaEWdx5tDbvPD5GDw8';
export const BUSINESS_NAME = "William's Auto Detailing";
export const PHONE = '(808) 772-0952';
export const EMAIL = 'williamautodetailing@gmail.com';
export const INSTAGRAM_URL = 'https://www.instagram.com/william.autodetailing/';
// TODO: Replace with your actual Google Business review link
export const GOOGLE_REVIEWS_URL = 'https://search.google.com/local/writereview?placeid=YOUR_PLACE_ID_HERE';
export const GOOGLE_REVIEW_COUNT = 137;
export const GOOGLE_RATING = '5.0';
export const BASE_CITY = 'Doral';
export const TRAVEL_FEE_MILES = 15;

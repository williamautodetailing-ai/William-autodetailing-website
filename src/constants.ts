// GoHighLevel Inbound Webhook — paste the URL from your GHL workflow trigger here.
// GHL: Automation → Workflows → New Workflow → Add Trigger → "Inbound Webhook" → copy URL.
export const GHL_WEBHOOK_URL = 'https://services.leadconnectorhq.com/hooks/fwFAUJw1X0vaZwhtIsR1/webhook-trigger/180b39da-b060-4adf-8ac2-bb7a5a9a9939';

// GoHighLevel CALENDAR booking widget (date/time only — NOT a service menu).
// GHL: Calendars → open the calendar → Embed/Share → copy the URL ending in /widget/booking/<ID>.
// ⚠️ A "/widget/service-menu/" URL makes the customer pick a service again — use "/widget/booking/" instead.
// Fallback calendar (used only if a package has no specific calendar below). Pristine = most popular.
export const GHL_CALENDAR_URL = 'https://api.leadconnectorhq.com/widget/booking/6CHjp2S7jxqrsyAUp56B';

// Each package books into its own GHL calendar → the step opens straight on that package's dates.
// Keys must match the package names in src/data/packages.ts exactly.
export const GHL_CALENDAR_BY_PACKAGE: Record<string, string> = {
  'Signature Detail':       'https://api.leadconnectorhq.com/widget/booking/Jqg0ZKVcTMFPJEqK9SAl',
  'Pristine Detail':        'https://api.leadconnectorhq.com/widget/booking/6CHjp2S7jxqrsyAUp56B',
  'The Perfect Detail':     'https://api.leadconnectorhq.com/widget/booking/ahlqBoyzuDZccGBPIlE7',
  'Tier 1 Ceramic Coating': 'https://api.leadconnectorhq.com/widget/booking/FHHbKTWtkXhC5vbjUmxx',
  'Tier 2 Ceramic Coating': 'https://api.leadconnectorhq.com/widget/booking/rySvR38QgVGskSUa5X9B',
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

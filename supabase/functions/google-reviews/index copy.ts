import "jsr:@supabase/functions-js/edge-runtime.d.ts";

// Returns live Google rating, review count and up to 5 reviews (Google Places API limit).
// Required secrets (Supabase → Project Settings → Edge Functions → Secrets):
//   GOOGLE_PLACES_API_KEY — Google Cloud key with "Places API (New)" enabled
//   GOOGLE_PLACE_ID       — your business Place ID (starts with "ChIJ...")

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type, Authorization, X-Client-Info, Apikey",
};

// Cache in memory so we don't call Google on every page view (keeps API usage ~free)
const CACHE_TTL_MS = 6 * 60 * 60 * 1000; // 6 hours
let cached: { data: unknown; expires: number } | null = null;

type GoogleReview = {
  rating?: number;
  relativePublishTimeDescription?: string;
  publishTime?: string;
  text?: { text?: string };
  originalText?: { text?: string };
  authorAttribution?: { displayName?: string; uri?: string; photoUri?: string };
  googleMapsUri?: string;
};

Deno.serve(async (req: Request) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { status: 200, headers: corsHeaders });
  }

  const jsonHeaders = {
    ...corsHeaders,
    "Content-Type": "application/json",
    "Cache-Control": "public, max-age=3600, s-maxage=21600",
  };

  try {
    if (cached && cached.expires > Date.now()) {
      return new Response(JSON.stringify(cached.data), { headers: jsonHeaders });
    }

    const apiKey = Deno.env.get("GOOGLE_PLACES_API_KEY");
    const placeId = Deno.env.get("GOOGLE_PLACE_ID");
    if (!apiKey || !placeId) throw new Error("Missing GOOGLE_PLACES_API_KEY or GOOGLE_PLACE_ID secret");

    const res = await fetch(`https://places.googleapis.com/v1/places/${placeId}`, {
      headers: {
        "X-Goog-Api-Key": apiKey,
        "X-Goog-FieldMask": "rating,userRatingCount,googleMapsUri,reviews",
      },
    });

    if (!res.ok) throw new Error(`Google API error ${res.status}: ${await res.text()}`);

    const place = await res.json();

    const data = {
      rating: place.rating ?? null,
      reviewCount: place.userRatingCount ?? null,
      mapsUrl: place.googleMapsUri ?? null,
      reviews: ((place.reviews ?? []) as GoogleReview[]).map((r) => ({
        name: r.authorAttribution?.displayName ?? "Google user",
        profileUrl: r.authorAttribution?.uri ?? null,
        photoUrl: r.authorAttribution?.photoUri ?? null,
        rating: r.rating ?? 5,
        timeAgo: r.relativePublishTimeDescription ?? "",
        publishTime: r.publishTime ?? null,
        quote: r.originalText?.text ?? r.text?.text ?? "",
        reviewUrl: r.googleMapsUri ?? null,
      })).filter((r) => r.quote),
    };

    cached = { data, expires: Date.now() + CACHE_TTL_MS };

    return new Response(JSON.stringify(data), { headers: jsonHeaders });
  } catch (err) {
    // Serve stale cache if Google is down
    if (cached) {
      return new Response(JSON.stringify(cached.data), { headers: jsonHeaders });
    }
    return new Response(
      JSON.stringify({ error: (err as Error).message }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  }
});

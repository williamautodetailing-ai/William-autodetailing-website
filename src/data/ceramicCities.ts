// Per-city ceramic coating landing pages (/ceramic-coating/<citySlug>).
// Each entry must carry GENUINELY UNIQUE local copy — these are not doorway
// pages. Shared factual content (packages, prep process) lives in the template;
// the unique local angle + FAQs live here. Landmarks / nearby areas are pulled
// from src/data/cities.ts by matching `name`, so they stay in one place.

export interface CeramicFaq {
  q: string;
  a: string;
}

export interface CeramicCityContent {
  citySlug: string;          // bare slug → URL /ceramic-coating/<citySlug>
  name: string;              // must match a name in cities.ts
  metaDescription: string;   // unique <meta description>
  intro: string;             // hero sub-headline, local
  localHeading: string;      // "Why ceramic coating in <City>…" section heading
  localBody: string;         // unique local reasoning (climate, parking, usage)
  faqs: CeramicFaq[];        // 3 unique FAQs (feed FAQ rich-result schema)
}

export const ceramicCities: CeramicCityContent[] = [
  {
    citySlug: 'doral',
    name: 'Doral',
    metaDescription:
      "Mobile ceramic coating in Doral, FL. 2–5 year hydrophobic paint protection applied at your home or office — no travel fee in Doral. Full prep included. Book today.",
    intro:
      "Doral is our home base, so we can bring a full ceramic coating service straight to your driveway, condo, or office lot — with no travel fee.",
    localHeading: 'Why ceramic coating makes sense in Doral',
    localBody:
      "Doral runs on its cars — sales reps, business owners, and commuters whose vehicles sit in open office lots near CityPlace Doral and Downtown Doral all day. That means hours of direct sun, sprinkler overspray in the master-planned communities, and water spots that bake into the clear coat. A ceramic coating shrugs all of that off: UV-blocking protection so paint doesn't fade, and a hydrophobic surface so sprinkler minerals and rain rinse away instead of etching in.",
    faqs: [
      {
        q: 'Do you apply ceramic coating in Doral?',
        a: "Yes — Doral is our home base. We come fully equipped to your home, condo, or office anywhere in Doral, and there's no travel fee.",
      },
      {
        q: 'Will ceramic coating stop the water spots from sprinklers in my community?',
        a: "It dramatically reduces them. The hydrophobic surface keeps sprinkler water from clinging and mineralizing on the paint, and what does land wipes off easily instead of etching in.",
      },
      {
        q: 'How long does the ceramic coating service take in Doral?',
        a: 'Plan for most of the day — our Tier 1 coating runs about 8 hours including full prep, paint polish, and curing. We do it all on-site at your location in Doral.',
      },
    ],
  },
  {
    citySlug: 'miami',
    name: 'Miami',
    metaDescription:
      "Mobile ceramic coating in Miami, FL. Long-lasting hydrophobic paint protection for Brickell, Wynwood & Downtown — applied at your home, garage, or office. Book now.",
    intro:
      "From Brickell high-rises to Wynwood lofts, we bring professional ceramic coating to Miami drivers who don't have time to baby their paint.",
    localHeading: 'Why ceramic coating makes sense in Miami',
    localBody:
      "City driving is hard on paint. Between construction dust downtown, street and garage parking with zero shade, and the relentless Miami sun, an uncoated car dulls fast — and finding time to wash it in Brickell traffic is its own battle. Ceramic coating fixes both problems: it locks in gloss and blocks UV oxidation, and its self-cleaning, hydrophobic surface means your car stays looking sharp between washes with far less effort.",
    faqs: [
      {
        q: 'Do you apply ceramic coating in Miami?',
        a: 'Yes. We serve all of Miami — Brickell, Wynwood, Little Havana, Downtown and beyond — coming to your home, apartment, or office fully self-contained.',
      },
      {
        q: 'Can you coat my car if I only have garage or street parking in Brickell?',
        a: "Usually yes. We just need a flat, reasonably ventilated spot to work and let the coating cure. Many of our Miami clients have us apply it in their building's garage — just clear it with your building first.",
      },
      {
        q: 'Is ceramic coating worth it with how much my car sits in the sun?',
        a: "That's exactly when it pays off most. Constant sun is what fades and oxidizes Miami paint — the UV resistance in a ceramic coating is its single biggest benefit here.",
      },
    ],
  },
  {
    citySlug: 'medley',
    name: 'Medley',
    metaDescription:
      "Mobile ceramic coating in Medley, FL. Durable paint protection for work trucks, fleet, and personal vehicles — applied on-site. Fight industrial fallout & brake dust. Book today.",
    intro:
      "Medley's mix of industrial yards and residential streets is tough on vehicles — we bring ceramic coating right to your lot or driveway.",
    localHeading: 'Why ceramic coating makes sense in Medley',
    localBody:
      "Work trucks, vans, and fleet vehicles in Medley take a beating: industrial fallout, brake and rail dust, and hard-water residue all bond to bare clear coat and are a nightmare to scrub off. Ceramic coating gives that paint a sacrificial, slick barrier — contaminants sit on top of the coating instead of etching the paint, so a quick rinse brings the finish back. For a vehicle that earns its keep, multi-year protection beats waxing every couple of months.",
    faqs: [
      {
        q: 'Do you ceramic coat work trucks and fleet vehicles in Medley?',
        a: 'Absolutely. We coat everything from personal cars to work trucks and small fleets on-site in Medley. Ask us about multi-vehicle scheduling.',
      },
      {
        q: 'Will ceramic coating help with industrial fallout and brake dust?',
        a: "Yes — that's one of its biggest wins here. Contaminants bond to the coating instead of the paint, so they rinse off far more easily and don't permanently stain the finish.",
      },
      {
        q: 'Do you need power or water hookups at my Medley location?',
        a: 'No. Our unit is fully self-contained — we bring our own water and power, so we can work at an industrial lot or a home driveway without any hookups from you.',
      },
    ],
  },
  {
    citySlug: 'kendall',
    name: 'Kendall',
    metaDescription:
      "Mobile ceramic coating in Kendall, FL. Protect family SUVs from tree sap, lovebugs & sun with 2–5 year hydrophobic coating — applied at your home. Serving The Falls & Dadeland. Book now.",
    intro:
      "Kendall families trust us with their daily SUVs and commuters — we bring ceramic coating to your driveway, from The Falls to Dadeland.",
    localHeading: 'Why ceramic coating makes sense in Kendall',
    localBody:
      "Kendall life is hard on a family car: tree-lined streets drop sap and pollen, lovebug season splatters the front end twice a year, and school-run and grocery miles add up fast. Tree sap and bug acids will permanently etch unprotected clear coat. A ceramic coating keeps them sitting on the surface so they wipe away cleanly, and it makes the inevitable hand wash quicker — which matters when your car is also the family hauler.",
    faqs: [
      {
        q: 'Do you apply ceramic coating in Kendall?',
        a: 'Yes — we serve all of Kendall, from The Falls and Dadeland to the surrounding neighborhoods, coming right to your home or workplace.',
      },
      {
        q: 'Will ceramic coating protect against tree sap and lovebugs?',
        a: "It helps a lot. Sap and bug splatter bond to the coating rather than the paint, so they're far easier to remove and won't etch in if you clean them within a reasonable time.",
      },
      {
        q: 'Is ceramic coating safe for my SUV or minivan?',
        a: 'Completely. We coat vehicles of every size — pricing just scales with the vehicle. Larger SUVs and vans are some of the best candidates because they have so much paint exposed to the elements.',
      },
    ],
  },
  {
    citySlug: 'tamiami',
    name: 'Tamiami',
    metaDescription:
      "Mobile ceramic coating in Tamiami, FL. Hydrophobic paint protection against dust, pollen & full-sun exposure — applied at your home. Full prep & polish included. Book today.",
    intro:
      "Out toward the Trail, full sun and fine dust are constant — we bring showroom-grade ceramic coating to your Tamiami driveway.",
    localHeading: 'Why ceramic coating makes sense in Tamiami',
    localBody:
      "Tamiami sits on the western edge of the county, where open skies mean unfiltered sun and breezes carry fine dust and pollen off the surrounding land. That combination dulls paint quickly and leaves a gritty film that scratches the clear coat every time it's wiped. Ceramic coating answers both: strong UV resistance to keep color from fading, and a slick hydrophobic surface so dust and pollen rinse off instead of grinding in.",
    faqs: [
      {
        q: 'Do you apply ceramic coating in Tamiami?',
        a: 'Yes. We come to your home anywhere in Tamiami fully equipped — no need to drive across the county to a shop.',
      },
      {
        q: 'Will ceramic coating help with all the dust and pollen out here?',
        a: 'It does. The hydrophobic surface keeps dust and pollen from sticking, so a light rinse clears it — and it stops that gritty film from scratching your clear coat during washes.',
      },
      {
        q: 'How do I keep the coating performing in full sun?',
        a: 'Just rinse or hand wash regularly and avoid brush car washes. The coating handles the UV; keeping contaminants from sitting on it for weeks keeps it beading like new.',
      },
    ],
  },
  {
    citySlug: 'sweetwater',
    name: 'Sweetwater',
    metaDescription:
      "Mobile ceramic coating in Sweetwater, FL. Low-maintenance paint protection for students & commuters near FIU — applied at your apartment or home. Book your coating today.",
    intro:
      "Near FIU and Dolphin Mall, most cars live in apartment lots with no shade — we bring ceramic coating to you in Sweetwater.",
    localHeading: 'Why ceramic coating makes sense in Sweetwater',
    localBody:
      "Sweetwater is full of students and commuters whose cars sit all day in open apartment and campus lots near FIU — no garage, no shade, and not a lot of free time for washing. That's the exact scenario ceramic coating is built for: it blocks the UV that fades paint in uncovered parking, and its self-cleaning surface keeps the car looking good between the occasional wash. Less time on upkeep, better resale when you move on.",
    faqs: [
      {
        q: 'Do you apply ceramic coating in Sweetwater?',
        a: 'Yes — we serve all of Sweetwater, including the FIU area, and come straight to your apartment, home, or workplace.',
      },
      {
        q: 'I park in an apartment lot near FIU with no garage. Is ceramic coating still worth it?',
        a: "Especially then. Uncovered parking is where UV damage and fading happen fastest, so the sun protection from a coating delivers the most value for cars that live outside.",
      },
      {
        q: 'Does ceramic coating really save me time on washing?',
        a: 'Yes. Dirt and water bead off a coated surface, so washes are faster and less frequent — handy when your schedule is packed.',
      },
    ],
  },
  {
    citySlug: 'west-miami',
    name: 'West Miami',
    metaDescription:
      "Mobile ceramic coating in West Miami, FL. Popular long-term paint protection for a tough climate — applied in your driveway. 2–5 year hydrophobic coating. Book now.",
    intro:
      "Ceramic coating is one of our most-requested services in West Miami — and we apply it right in your driveway.",
    localHeading: 'Why ceramic coating makes sense in West Miami',
    localBody:
      "West Miami homeowners tend to take pride in their cars and keep them for the long haul — which is exactly why ceramic coating is so popular here. South Florida's punishing mix of UV, humidity, and afternoon downpours wears down ordinary wax in weeks. A professional ceramic coating locks in protection for years instead, defending against oxidation and water spotting while keeping that deep, glossy finish that makes a well-kept car stand out on the block.",
    faqs: [
      {
        q: 'Do you apply ceramic coating in West Miami?',
        a: 'Yes — and it\'s one of our most-booked services here. We come to your West Miami home driveway, apartment, or office, fully self-contained.',
      },
      {
        q: 'How is ceramic coating better than waxing for our climate?',
        a: "Wax lasts weeks in Florida's heat and humidity; a ceramic coating lasts years. It bonds to the clear coat for far stronger, longer UV and water-spot protection.",
      },
      {
        q: 'Will ceramic coating help my car hold its value?',
        a: 'Yes. By preventing fading, oxidation, and etching, the coating keeps the paint looking newer for longer — a real plus if you keep cars long-term, as many West Miami owners do.',
      },
    ],
  },
  {
    citySlug: 'miami-beach',
    name: 'Miami Beach',
    metaDescription:
      "Mobile ceramic coating in Miami Beach, FL. The best defense against salt air, coastal UV & sand — applied at your condo or home. 2–5 year hydrophobic protection. Book today.",
    intro:
      "Salt air and relentless coastal sun are brutal on Miami Beach vehicles — ceramic coating is the strongest defense, and we come to you.",
    localHeading: 'Why ceramic coating makes sense on Miami Beach',
    localBody:
      "Nowhere in our service area punishes paint like the Beach. Salt-laden ocean air accelerates oxidation, blowing sand micro-scratches the clear coat, and the unobstructed sun over South Beach, Mid Beach, and North Beach fades color fast. Ceramic coating is purpose-built for this: a hard, chemically resistant layer that shields paint from salt and UV, with a hydrophobic surface that keeps salt residue and sand from bonding — so a simple rinse keeps your finish protected between details.",
    faqs: [
      {
        q: 'Do you apply ceramic coating on Miami Beach?',
        a: 'Yes — we come to you anywhere on the Beach: South Beach, Mid Beach, North Beach, and the islands. We just need a spot to work and let the coating cure.',
      },
      {
        q: 'Does ceramic coating really protect against salt air and sand?',
        a: "It's the best protection short of keeping the car in a sealed garage. The coating blocks salt and UV from attacking the clear coat, and its slick surface stops salt and sand from bonding to the paint.",
      },
      {
        q: 'I live in a Miami Beach condo — can you still coat my car?',
        a: 'In most cases yes. Many clients have us apply it in their building garage. Just confirm with your condo association, and we handle the rest on-site.',
      },
    ],
  },
  {
    citySlug: 'south-miami',
    name: 'South Miami',
    metaDescription:
      "Mobile ceramic coating in South Miami, FL. Protect paint from heavy tree canopy, sap & bird droppings — applied at your home. 2–5 year hydrophobic coating. Book now.",
    intro:
      "South Miami's leafy streets are beautiful — and rough on paint. We bring ceramic coating to your home near Sunset Drive and beyond.",
    localHeading: 'Why ceramic coating makes sense in South Miami',
    localBody:
      "The mature tree canopy that makes South Miami so green is also a constant assault on your clear coat: dripping sap, falling pollen, and bird droppings that turn acidic and etch paint within hours in the heat. Ceramic coating creates a smooth, sacrificial barrier so these contaminants sit on top of the coating instead of biting into the paint — making sap and droppings far easier to wipe away before they leave a permanent mark.",
    faqs: [
      {
        q: 'Do you apply ceramic coating in South Miami?',
        a: 'Yes — we serve the entire South Miami area, including the neighborhoods around Sunset Drive and downtown, coming right to your home or office.',
      },
      {
        q: 'Will ceramic coating protect against tree sap and bird droppings?',
        a: "Significantly. Both bond to the coating rather than the paint, so they're easier to remove and far less likely to etch — as long as you clean them off within a reasonable time.",
      },
      {
        q: 'Should I still wipe off bird droppings quickly even with a coating?',
        a: 'Yes. The coating buys you time and prevents most etching, but acidic droppings are best removed promptly. With a coating, that cleanup is quick and leaves no stain.',
      },
    ],
  },
  {
    citySlug: 'coral-gables',
    name: 'Coral Gables',
    metaDescription:
      "Mobile ceramic coating in Coral Gables, FL. Preserve a luxury finish against canopy sap & sun — applied at your home. Premium 2–5 year hydrophobic protection. Book today.",
    intro:
      "Coral Gables sets a high bar, and so do we. We bring premium ceramic coating to the City Beautiful, from Miracle Mile to the University area.",
    localHeading: 'Why ceramic coating makes sense in Coral Gables',
    localBody:
      "The Gables is defined by its grand banyan and oak canopy — and that canopy drips sap and pollen onto some of the nicest cars in Miami-Dade. Combine that with intense sun and the occasional acidic rain, and a luxury finish can dull or spot quickly. Ceramic coating preserves that showroom look: it locks in depth and gloss, resists UV fading, and keeps sap and contaminants from etching the clear coat — protection worthy of the vehicles and the standards Coral Gables is known for.",
    faqs: [
      {
        q: 'Do you apply ceramic coating in Coral Gables?',
        a: 'Yes — we serve the entire Coral Gables area, from Miracle Mile to the University of Miami border, and come to your home or office with everything we need.',
      },
      {
        q: 'Will ceramic coating protect my car from the banyan and oak sap?',
        a: 'It helps considerably. Sap bonds to the coating instead of the paint, so it wipes off cleanly and is far less likely to leave an etched mark on the clear coat.',
      },
      {
        q: 'Is ceramic coating a good choice for a luxury or exotic car?',
        a: 'It\'s ideal. High-end finishes benefit most from the added depth, gloss, and long-term UV and contaminant protection. We tailor prep and coating tier to the vehicle.',
      },
    ],
  },
  {
    citySlug: 'hialeah-gardens',
    name: 'Hialeah Gardens',
    metaDescription:
      "Mobile ceramic coating in Hialeah Gardens, FL. Years of paint protection that beats repeat waxing — applied at your home, no hookups needed. Book your coating today.",
    intro:
      "Hialeah Gardens drivers work hard, and so do their cars. We bring multi-year ceramic protection right to your door — no hookups needed.",
    localHeading: 'Why ceramic coating makes sense in Hialeah Gardens',
    localBody:
      "For a hard-working daily driver, the math on ceramic coating is simple: instead of re-waxing every few weeks in South Florida's heat — and watching hard-water spots and sun take their toll anyway — you get years of protection in one application. The coating's UV resistance keeps paint from fading in open parking, and its hydrophobic surface keeps mineral spotting and grime from sticking, so upkeep is a quick rinse rather than a weekend project.",
    faqs: [
      {
        q: 'Do you apply ceramic coating in Hialeah Gardens?',
        a: 'Yes — we come to your home or workplace anywhere in Hialeah Gardens, fully self-contained with our own water and power.',
      },
      {
        q: 'Is ceramic coating cheaper than waxing over time?',
        a: 'Over a few years, often yes. One ceramic coating replaces dozens of wax jobs and protects far better against UV and water spots in the meantime.',
      },
      {
        q: 'Do you need anything from me to apply the coating?',
        a: "Just a flat place to park and work. We bring everything — water, power, and all materials — so there are no hookups or prep needed on your end.",
      },
    ],
  },
  {
    citySlug: 'olympia-heights',
    name: 'Olympia Heights',
    metaDescription:
      "Mobile ceramic coating in Olympia Heights, FL. Keep daily-driver paint glossy and protected from sun — applied at your home. 5-star rated, 2–5 year coating. Book now.",
    intro:
      "Olympia Heights is a quiet residential community where most cars live on the street in full sun — exactly where ceramic coating shines.",
    localHeading: 'Why ceramic coating makes sense in Olympia Heights',
    localBody:
      "In Olympia Heights, daily drivers spend most of their lives parked outside in unrelenting sun, with afternoon storms leaving water spots behind. Both quietly age a car's paint — fading color and etching the clear coat. Ceramic coating protects against exactly that, with serious UV resistance and a hydrophobic surface that sheds rain before it can spot. It's the easiest way to keep a daily driver looking new and holding its value for years.",
    faqs: [
      {
        q: 'Do you apply ceramic coating in Olympia Heights?',
        a: 'Yes — we serve Olympia Heights and the surrounding Westchester-area neighborhoods, coming right to your home with everything we need.',
      },
      {
        q: 'My car is parked on the street all day — does ceramic coating help?',
        a: 'That\'s the perfect use case. Street-parked cars get the most sun, and UV protection is where a ceramic coating delivers the most value.',
      },
      {
        q: 'How long will the ceramic coating last?',
        a: 'Our Tier 1 coating protects for 2–3 years and Tier 2 for 4–5 years. With simple maintenance washing, you get the full lifespan even on a daily driver.',
      },
    ],
  },
];

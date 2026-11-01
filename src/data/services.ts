// Individual service pages (/services/:slug) — built for local SEO.
// Prices, durations and descriptions match the booking menu / packages.ts.
// The prerender script reads metaTitle + metaDescription from here too.

export interface ServiceFaq {
  q: string;
  a: string;
}

export interface ServiceBenefit {
  title: string;
  description: string;
}

export interface ServiceImage {
  src: string;
  alt: string;
  caption?: string;
  description?: string;     // 1–2 sentences shown under the photo
}

export interface ServicePageContent {
  slug: string;
  name: string;              // short name (nav, links)
  summary: string;           // one-liner for service cards on the home page
  metaTitle: string;
  metaDescription: string;
  keywords: string;
  badge: string;             // small pill above the H1
  h1: string;
  h1Highlight: string;       // gradient part of the H1
  intro: string;
  description: string[];     // "About this service" paragraphs
  price?: string;            // e.g. "$75" or "From $200"
  pricing?: { sedan: number; suv: number }; // exact prices by vehicle size, when known
  priceNote?: string;
  duration?: string;
  bookAs: string;            // package/service name pre-filled in the lead form
  includes: string[];
  benefits: ServiceBenefit[];
  process: string[];
  disclaimer?: string;
  faqs: ServiceFaq[];
  images?: ServiceImage[];   // real work photos shown on the page
  related: string[];         // slugs of related services
}

export const services: ServicePageContent[] = [
  {
    slug: 'interior-detailing',
    name: 'Interior Detailing',
    summary: 'Full cabin deep clean with seat shampoo & extraction for cloth or leather conditioning for leather.',
    metaTitle: "Interior Car Detailing Miami — From $200 | William's Auto Detailing",
    metaDescription: 'Mobile interior car detailing in Miami-Dade from $200. Air purge, two-stage vacuum, cloth seat shampoo & extraction or leather cleaning & conditioning, streak-free glass. We come to you.',
    keywords: 'interior car detailing Miami, mobile interior detailing, car interior cleaning Doral, interior detail near me, car seat cleaning Miami, car seat shampoo Miami',
    badge: 'Mobile Interior Detailing',
    h1: 'Interior Car Detailing',
    h1Highlight: 'in Miami',
    intro: "From crumbs in the crevices to stains in the seats, our interior detail brings your cabin back to that clean, fresh, like-new feeling — done right in your driveway or parking spot anywhere in Miami-Dade.",
    description: [
      "Your car's interior is where you spend all of your time — commuting, running errands, driving the kids around — and it shows. Dust settles into the vents, sand and crumbs work their way into the seat rails, and spills, sweat and body oils soak into the seats. A quick vacuum doesn't touch any of that. Our interior detail is a true top-to-bottom reset of your cabin.",
      "We start with a full air purge blow-out to force debris out of the vents, seams and tight gaps, then do a two-stage vacuum of the floors, seats, trunk and every crevice. Floor mats are cleaned, plastics, vinyl and trim are wiped down, and all interior glass is finished streak-free.",
      "Seats are where our interior detail really stands apart. Cloth seats are shampooed and hot-water extracted to pull dirt, odors and stains out from deep in the fabric. Leather seats are deep scrubbed and treated with leather conditioner to keep them soft, hydrated and protected from the Florida sun for up to 3 months.",
      "Interior detailing starts at $200 and we come to your home, office or apartment anywhere in Miami-Dade County — no drop-offs, no waiting rooms.",
    ],
    price: 'From $200',
    priceNote: 'Starting price — final price depends on vehicle size and interior condition.',
    duration: '2–3 hours',
    bookAs: 'Interior Detailing',
    includes: [
      'Full vehicle air purge blow-out of vents, seams & crevices',
      'Two-stage vacuum — floors, seats, trunk & crevices',
      'Cloth seats: shampoo + hot-water extraction',
      'Leather seats: deep scrub + leather conditioner (up to 3 months UV protection)',
      'Floor mats cleaned (carpet & weather mats)',
      'Plastic, vinyl & trim surfaces cleaned and wiped down',
      'Interior glass streak-free finish',
    ],
    benefits: [
      { title: 'Healthier Cabin', description: 'Removes dust, allergens, bacteria and odors that build up in carpets, vents and seat fabric.' },
      { title: 'Seats Done Right', description: 'Cloth is shampooed and extracted, leather is scrubbed and conditioned — every time.' },
      { title: 'Higher Resale Value', description: 'A clean, well-kept interior is one of the first things buyers and dealers notice.' },
      { title: 'We Come to You', description: 'No drop-offs or waiting rooms — we detail at your home, office or apartment.' },
    ],
    process: [
      'Air purge blow-out to lift debris from vents, seams and tight spaces',
      'Two-stage vacuum of every surface and crevice',
      'Cloth seats shampooed & hot-water extracted, or leather scrubbed & conditioned',
      'Floor mats cleaned',
      'Plastics, vinyl and trim wiped down',
      'Streak-free interior glass to finish',
    ],
    faqs: [
      { q: 'How much does interior detailing cost?', a: 'Interior detailing starts at $200. The final price depends on vehicle size and the condition of the interior.' },
      { q: 'Are the seats shampooed?', a: 'Yes. Cloth seats are shampooed and hot-water extracted. If you have leather seats, they are deep scrubbed and treated with leather conditioner instead.' },
      { q: 'How long does an interior detail take?', a: 'Most interior details take about 2–3 hours depending on vehicle size and condition.' },
      { q: 'Where do you do the interior detail?', a: "We're fully mobile — we come to your home, office or apartment anywhere in Miami-Dade County." },
    ],
    images: [
      { src: '/images/optimized/work/interior-detail-mercedes-tan-leather.webp', alt: 'Clean Mercedes-Benz interior with tan leather seats after a mobile interior detail in Miami', caption: 'Mercedes-Benz — Full Interior Detail', description: 'Leather seats scrubbed and conditioned, carpets vacuumed and every surface wiped down. This is what your cabin looks like when we hand the keys back.' },
      { src: '/images/optimized/work/leather-conditioning-bmw-m8-red.webp', alt: 'BMW M8 Competition red leather interior after detailing in Miami', caption: 'BMW M8 — Leather Seats Restored', description: 'Red leather deep cleaned and conditioned so the color stays rich and the leather stays soft in the Florida heat.' },
      { src: '/images/optimized/work/interior-detail-bmw-black-leather.webp', alt: 'BMW interior with black leather seats after an interior detail in Miami-Dade', caption: 'BMW — Daily Driver Reset', description: 'A daily driver brought back to clean: dash, vents, seats and floor mats all done in one visit.' },
    ],
    related: ['shampoo-extraction', 'leather-alcantara-cleaning', 'exterior-detailing'],
  },
  {
    slug: 'exterior-detailing',
    name: 'Exterior Detailing',
    summary: 'Wash, clay and seal. Up to 6 months of paint protection.',
    metaTitle: "Exterior Car Detailing Miami — Wash, Clay & Seal From $150 | William's Auto Detailing",
    metaDescription: 'Mobile exterior car detailing in Miami-Dade from $150. Hand wash, clay bar and sealant with up to 6 months of paint protection. Exterior only, done at your home or office.',
    keywords: 'exterior car detailing Miami, mobile exterior detail Miami, clay bar treatment Miami, paint sealant Miami, exterior detail Doral',
    badge: 'Mobile Exterior Detailing',
    h1: 'Exterior Car Detailing',
    h1Highlight: 'in Miami',
    intro: 'Wash, clay and seal, done in your driveway. Your paint comes out smooth, glossy and protected for up to 6 months.',
    description: [
      "South Florida is hard on paint. UV fades it, salt air settles on it, and bugs, bird droppings and brake dust etch into the clear coat if they sit too long. A regular wash takes off the loose dirt and leaves the rest bonded to the surface.",
      "Our exterior detail is three steps. We hand wash the car to take off the dirt you can see. A clay bar then pulls out the bonded contamination you can feel, leaving the paint smooth as glass. Finally we seal it, so water beads off and dirt releases easily for up to 6 months.",
      "This is an exterior-only service, priced from $150 for sedans and coupes and $175 for SUVs and trucks. We don't offer basic washes: every exterior visit includes the clay and the seal.",
    ],
    price: 'From $150',
    pricing: { sedan: 150, suv: 175 },
    priceNote: 'Exterior only. $150 sedans & coupes, $175 SUVs & trucks.',
    bookAs: 'Exterior Detailing',
    includes: [
      'Foam bath and careful hand wash',
      'Clay bar treatment to remove bonded contamination',
      'Paint sealant with up to 6 months of protection',
    ],
    benefits: [
      { title: 'Smooth Paint', description: 'The clay bar removes the gritty contamination a wash leaves behind.' },
      { title: '6 Months of Protection', description: 'The seal keeps water beading and dirt releasing easily for up to 6 months.' },
      { title: 'Safe Hand Wash', description: 'A foam pre-wash and hand wash avoid the swirls automatic washes leave behind.' },
      { title: 'Done at Your Location', description: 'We come to your home, office or apartment anywhere in Miami-Dade.' },
    ],
    process: [
      'Wash: foam bath and hand wash',
      'Clay: clay bar decontamination for smooth paint',
      'Seal: sealant applied for up to 6 months of protection',
    ],
    faqs: [
      { q: 'How much is an exterior detail?', a: 'Exterior detailing is $150 for sedans and coupes and $175 for SUVs and trucks.' },
      { q: 'Do you offer regular car washes?', a: 'No. Every exterior visit is a full wash, clay and seal, so your paint is cleaned, decontaminated and protected for up to 6 months.' },
      { q: 'What is a clay bar treatment?', a: 'A clay bar lifts bonded contaminants like industrial fallout, overspray and tree sap out of your clear coat, leaving the paint smooth so the sealant bonds better.' },
      { q: 'How long does the protection last?', a: 'The sealant protects your paint for up to 6 months. For multi-year protection, see our ceramic coating packages.' },
    ],
    images: [
      { src: '/images/optimized/work/foam-bath-hand-wash-bmw-m2.webp', alt: 'BMW M2 covered in foam during a hand wash exterior detail in Miami', caption: 'Wash', description: 'A thick foam bath loosens dirt before we touch the paint, so grit never gets ground into the clear coat.' },
      { src: '/images/optimized/work/exterior-detail-corvette-grand-sport.webp', alt: 'Silver Corvette Grand Sport after an exterior detail in Miami', caption: 'The Finished Result', description: 'Washed, clayed and sealed. The paint beads water for up to 6 months.' },
      { src: '/images/optimized/work/porsche-gt3-rs-mobile-detail-miami.webp', alt: 'Two Porsche 911 GT3 RS cars detailed in a Miami driveway', caption: 'Done in Your Driveway', description: 'We\'re fully mobile. These two GT3 RSs were detailed right at the owner\'s home in Miami-Dade.' },
    ],
    related: ['paint-correction', 'headlight-restoration', 'interior-detailing'],
  },
  {
    slug: 'paint-correction',
    name: 'Paint Correction',
    summary: 'Machine polishing that removes swirl marks and light scratches to restore deep gloss.',
    metaTitle: "Paint Correction Miami — Swirl & Scratch Removal | William's Auto Detailing",
    metaDescription: 'Paint correction and polishing in Miami-Dade. Remove swirl marks, light scratches and dull oxidized paint to restore deep gloss and clarity. Mobile service — we come to you.',
    keywords: 'paint correction Miami, swirl mark removal Miami, car polishing Doral, scratch removal Miami, paint enhancement polish',
    badge: 'Paint Correction & Polishing',
    h1: 'Paint Correction',
    h1Highlight: 'in Miami',
    intro: "Swirl marks, light scratches and dull, faded paint make even a great car look tired. Machine polishing removes those defects from the clear coat and restores the deep gloss your paint had when it was new.",
    description: [
      "Look at your car in direct sunlight and you'll probably see it — fine circular scratches that look like a spider web across the paint. Those swirl marks come from automatic car washes, dirty towels and improper drying, and over time they make paint look hazy and dull no matter how clean it is.",
      "Paint correction fixes the paint itself rather than hiding the problem. After a full wash and clay bar and iron decontamination, we use a machine polisher and professional compounds and polishes to carefully level the clear coat and remove swirls, light scratches and oxidation. The result is paint with real depth, sharp reflections and a gloss that wax alone can never give you.",
      "Paint correction is the essential first step before a ceramic coating, because a coating locks in whatever finish is underneath it. Every one of our ceramic coating packages includes a paint enhancement polish, and The Perfect Detail includes it too. For heavier defects, we'll inspect your paint and give you an honest quote and realistic expectations before we start.",
    ],
    price: 'From $550',
    priceNote: 'Paint enhancement polish is included in The Perfect Detail and in every ceramic coating package. Heavier correction is quoted based on paint condition.',
    duration: '4–8 hours',
    bookAs: 'The Perfect Detail',
    includes: [
      'Full exterior wash and decontamination',
      'Clay bar & iron removal treatment',
      'Machine paint enhancement polish',
      'Removes light swirls and restores gloss & clarity',
      'Scratch / scuff treatment available',
      'Wax & ceramic sealant up to 6 months',
      'Optional upgrade to a 2–5 year ceramic coating',
    ],
    benefits: [
      { title: 'Swirl Removal', description: 'Reduces the spider-web swirl marks left by automatic car washes and improper drying.' },
      { title: 'Deep Gloss', description: 'Polishing restores reflection, depth and clarity to faded or hazy paint.' },
      { title: 'Perfect Before Ceramic', description: 'Correction is the right first step before a ceramic coating locks in the finish for years.' },
      { title: 'Honest Expectations', description: "We inspect your paint first and tell you exactly what's realistic before we start." },
    ],
    process: [
      'Inspect the paint under light to assess defects',
      'Wash, clay bar and iron decontamination',
      'Machine polish to level swirls and light scratches',
      'Wipe down to reveal the true corrected finish',
      'Protect with sealant or ceramic coating',
    ],
    disclaimer: 'Deep scratches that go through the clear coat cannot be fully removed by polishing. We will always tell you what to expect before we start.',
    faqs: [
      { q: 'Can paint correction remove all scratches?', a: "It removes swirl marks and light scratches in the clear coat. Deeper scratches can usually be reduced, but if a scratch catches your fingernail it has likely gone through the clear coat and can't be fully removed." },
      { q: 'Should I get a ceramic coating after paint correction?', a: 'We recommend it. A ceramic coating locks in the corrected finish and protects it for 2–5 years. Every ceramic package includes a paint enhancement polish.' },
      { q: 'How long does paint correction take?', a: 'The Perfect Detail with paint enhancement polish takes about 4–5 hours. Ceramic coating packages with correction take around 8 hours.' },
    ],
    images: [
      { src: '/images/optimized/work/paint-correction-before-after-mercedes.webp', alt: 'Black Mercedes-Benz hood before and after paint correction showing swirl marks removed', caption: 'Before & After — 50/50 Test', description: 'Left side untouched, right side corrected. Polishing removes the swirls and haze so reflections go from blurry to sharp.' },
      { src: '/images/optimized/work/paint-correction-swirl-marks-bmw-m8.webp', alt: 'Swirl marks and holograms on a BMW M8 hood under inspection lights before paint correction', caption: 'What We\'re Fixing', description: 'Under our inspection lights, swirl marks and holograms show up as spider webs in the paint. This is what correction removes.' },
      { src: '/images/optimized/work/ceramic-coating-application-bmw-m8.webp', alt: 'Detailer applying ceramic coating to the carbon fiber roof of a BMW M8 after paint correction', caption: 'Locking It In', description: 'After correction, a ceramic coating seals the finish so the gloss lasts for years instead of weeks.' },
    ],
    related: ['exterior-detailing', 'headlight-restoration', 'engine-bay-detail'],
  },
  {
    slug: 'shampoo-extraction',
    name: 'Shampoo & Extraction',
    summary: 'Shampoo and hot-water extraction of seats, carpets and mats with stain treatment.',
    metaTitle: "Car Seat Shampoo & Carpet Extraction Miami — Stain Treatment | William's Auto Detailing",
    metaDescription: 'Car upholstery shampoo and hot-water extraction in Miami-Dade. Deep clean seats, carpets and mats and treat stains — $75, about 1 hour. Mobile service, we come to you.',
    keywords: 'car seat shampoo Miami, carpet extraction car Miami, car upholstery cleaning Doral, car stain removal Miami, mobile car shampoo',
    badge: 'Upholstery Shampoo & Extraction',
    h1: 'Car Shampoo & Extraction',
    h1Highlight: 'in Miami',
    intro: "Coffee spills, kid messes, sweat and sand work deep into fabric seats and carpets. Our shampoo and extraction treatment deep cleans upholstery, carpets and mats and pulls the dirt out — not just the surface.",
    description: [
      "Fabric seats and carpets act like a sponge. Every spilled drink, muddy shoe, beach trip and sweaty commute leaves something behind, and over time it builds into stains, dingy discoloration and that stale smell that air fresheners can't cover. Vacuuming only gets what's sitting on top.",
      "Our shampoo and extraction service goes deeper. We vacuum first, pre-treat stains and heavily soiled areas, then shampoo and agitate the upholstery, carpets and floor mats to break the dirt loose. A hot-water extractor then rinses the fibers and pulls the dirty solution back out — taking the grime, odor-causing residue and as much of the stain as possible with it.",
      "Shampoo and extraction is available as a $75 add-on that takes about an hour, and it's included with our Interior Detailing service and in our Pristine and Perfect Detail packages for cloth seats. It's a great choice before selling a car, after a road trip, or anytime the seats just don't feel clean anymore.",
    ],
    price: '$75',
    priceNote: 'Book as a stain treatment add-on to any detail. Included with Interior Detailing and Pristine & Perfect Detail for cloth seats.',
    duration: '1 hour',
    bookAs: 'Stain Treatment',
    includes: [
      'Shampoo of upholstery (cloth seats)',
      'Shampoo of carpets and floor mats',
      'Hot-water extraction to pull out dirt and solution',
      'Targeted stain treatment',
      'Sanitized, fresher-smelling fabric',
    ],
    benefits: [
      { title: 'Deep Clean', description: 'Extraction removes dirt and residue from deep in the fibers, not just the surface.' },
      { title: 'Odor Reduction', description: 'Cleaning the fabric itself removes the source of many lingering cabin odors.' },
      { title: 'Stain Treatment', description: 'Targeted treatment to lift spills and stains from seats, carpets and mats.' },
      { title: 'Mobile & Convenient', description: 'We shampoo and extract at your home or office — no drop-off needed.' },
    ],
    process: [
      'Vacuum to remove loose dirt and debris',
      'Pre-treat stains and heavily soiled areas',
      'Shampoo and agitate seats, carpets and mats',
      'Hot-water extraction to rinse and remove dirt',
      'Final groom of the fabric to help it dry evenly',
    ],
    disclaimer: 'We cannot guarantee complete removal of stains. While we aim to do an excellent job, there are SEVERAL variables with stain treatment and resolution that come into play that prevent us from being able to promise complete removal.',
    faqs: [
      { q: 'How much does car seat shampoo cost?', a: 'Stain treatment with shampoo and extraction of upholstery, carpets and mats is $75 and takes about 1 hour. It is also included with Interior Detailing and in our Pristine and Perfect Detail packages for cloth seats.' },
      { q: 'Will all stains come out?', a: "Most stains improve a lot, but we can't guarantee complete removal. How old the stain is, what caused it and the type of fabric all affect the result." },
      { q: 'How long until the seats are dry?', a: 'Extraction removes most of the moisture. Drying time depends on weather and airflow — leaving windows cracked in a safe spot helps them dry faster.' },
    ],
    images: [
      { src: '/images/optimized/work/seat-shampoo-extraction-corvette.webp', alt: 'Red fabric sport seat after shampoo and extraction in Miami', caption: 'Shampooed & Extracted', description: 'The brush lines in the fabric are the sign of a fresh extraction. Dirt and stains are pulled out from deep in the fibers, not just the surface.' },
    ],
    related: ['interior-detailing', 'leather-alcantara-cleaning', 'engine-bay-detail'],
  },
  {
    slug: 'leather-alcantara-cleaning',
    name: 'Leather & Alcantara Cleaning',
    summary: 'Deep scrub and conditioning that restores leather & Alcantara and protects from UV.',
    metaTitle: "Leather Seat Cleaning & Conditioning Miami — Alcantara Cleaning | William's Auto Detailing",
    metaDescription: 'Leather and Alcantara deep cleaning and conditioning in Miami-Dade. Deep scrub, restored fibers and UV protection for up to 3 months — $75, about 30 minutes. We come to you.',
    keywords: 'leather seat cleaning Miami, leather conditioning Miami, Alcantara cleaning Miami, car leather cleaner Doral, leather interior detailing',
    badge: 'Leather & Alcantara Care',
    h1: 'Leather & Alcantara',
    h1Highlight: 'Deep Cleaning & Conditioning',
    intro: "Leather and Alcantara look and feel incredible — until body oils, sunscreen and dirt build up. Our deep clean and conditioning restores the look and feel of your seats and protects them from Florida's sun.",
    description: [
      "Leather seats don't stay clean on their own. Body oils, sweat, lotion, sunscreen and everyday dirt build up in the grain and perforations, leaving leather shiny, sticky and darker than it should be. Add Miami's heat and UV, and unprotected leather dries out, fades and eventually cracks. Alcantara has its own problem — its soft fibers mat down and turn dark and greasy, especially on steering wheels and seat bolsters.",
      "We start with a deep scrub and clean of every leather and Alcantara surface, lifting out the oils and grime trapped in the grain and fibers. On Alcantara, we restore the fibers so the material looks and feels soft again, and leave behind protection that helps resist future soiling.",
      "On leather, the deep scrub is followed by a quality leather conditioner that hydrates the hide and protects it from UV rays for up to 3 months — keeping it soft, supple and looking factory-fresh. It's a $75 add-on that takes about 30 minutes, and leather conditioning is included with our Interior Detailing service and in our Pristine and Perfect Detail packages.",
    ],
    price: '$75',
    priceNote: 'Book as an add-on to any detail. Leather scrub & conditioning is included with Interior Detailing and Pristine & Perfect Detail.',
    duration: '30 minutes',
    bookAs: 'Leather/Alcantara Deep Cleaning & Conditioning',
    includes: [
      'Deep scrub and clean of Alcantara and leather surfaces',
      'Restores fibers in Alcantara',
      'Leaves behind protection from future soiling',
      'Deep scrub of leather and conditioning',
      'Hydrates leather for up to 3 months to protect from UV rays',
    ],
    benefits: [
      { title: 'Prevents Cracking', description: "Conditioning keeps leather hydrated so it doesn't dry out and crack in Miami heat." },
      { title: 'UV Protection', description: 'Conditioned leather is protected from UV rays for up to 3 months.' },
      { title: 'Restored Alcantara', description: 'Cleaning lifts matted, dirty fibers so Alcantara looks and feels soft again.' },
      { title: 'Soil Resistance', description: 'Leaves behind protection that helps resist future dirt and stains.' },
    ],
    process: [
      'Vacuum seams and perforations',
      'Gentle deep scrub of leather and Alcantara surfaces',
      'Wipe away lifted dirt and oils',
      'Restore and groom Alcantara fibers',
      'Condition and protect leather',
    ],
    faqs: [
      { q: 'How often should I condition leather seats?', a: 'In South Florida we recommend about every 3 months. Our conditioning hydrates leather and protects it from UV rays for up to 3 months.' },
      { q: 'Can you clean Alcantara steering wheels and seats?', a: 'Yes. We deep scrub and clean Alcantara, restore the fibers and leave protection behind against future soiling.' },
      { q: 'How much does leather cleaning and conditioning cost?', a: 'Leather/Alcantara deep cleaning and conditioning is $75 and takes about 30 minutes. It can be added to any detail.' },
    ],
    images: [
      { src: '/images/optimized/work/leather-conditioning-bmw-m8-red.webp', alt: 'BMW M8 red leather seats after leather cleaning and conditioning in Miami', caption: 'BMW M8 — Cleaned & Conditioned', description: 'Oils and dirt scrubbed out of the grain, then conditioned so the leather stays soft, rich and protected from UV.' },
      { src: '/images/optimized/work/interior-detail-mercedes-tan-leather.webp', alt: 'Mercedes-Benz tan leather seats after leather cleaning and conditioning', caption: 'Light Leather, Brought Back', description: 'Light leather shows dirt and dye transfer fast. A deep clean restores the original color and conditioning keeps it from drying out.' },
    ],
    related: ['interior-detailing', 'shampoo-extraction', 'headlight-restoration'],
  },
  {
    slug: 'headlight-restoration',
    name: 'Headlight Restoration',
    summary: 'Restore yellowed, cloudy headlights to clear — sealed with a 3 year UV coating.',
    metaTitle: "Headlight Restoration Miami — 3 Year UV Coating | William's Auto Detailing",
    metaDescription: 'Headlight restoration in Miami-Dade. Restore clarity to yellowed, oxidized headlights for better looks and safer night driving, with a 3 year UV coating applied — $90, about 1 hour.',
    keywords: 'headlight restoration Miami, headlight cleaning Doral, yellow headlights fix Miami, oxidized headlights, headlight restoration near me',
    badge: 'Headlight Restoration',
    h1: 'Headlight Restoration',
    h1Highlight: 'in Miami',
    intro: "The Florida sun turns headlights yellow and cloudy fast. Our headlight restoration brings back clarity and visibility, making your car look much better and safer to drive at night — then seals them with a 3 year UV coating.",
    description: [
      "Modern headlight lenses are made of polycarbonate plastic with a thin factory UV coating. Under South Florida's sun that coating breaks down, and the lens starts to oxidize — turning yellow, foggy and cloudy. Besides making the whole car look older, hazy headlights scatter and block light, which makes it harder to see the road at night.",
      "Our headlight restoration removes the oxidized, yellowed layer from the lens and refines it back to a clear, glossy finish. The difference is immediate: brighter light output, better visibility in the dark and rain, and a front end that looks years newer.",
      "Most quick fixes look good for a few weeks and then yellow again because nothing protects the bare plastic. We finish every restoration with a 3 year UV coating to seal the lens and help keep it clear. Headlight restoration is $90, takes about an hour, and can be booked on its own or added to any detail — for a fraction of the cost of replacing headlight assemblies.",
    ],
    price: '$90',
    duration: '1 hour',
    bookAs: 'Headlights Restoration',
    includes: [
      'Removal of yellowing and oxidation',
      'Restored clarity and light output',
      '3 year UV coating applied',
    ],
    benefits: [
      { title: 'Safer Night Driving', description: 'Clear lenses let more light through so you can see — and be seen — better.' },
      { title: 'Better Looks', description: 'Cloudy headlights age a car. Restored lenses make the whole front end look newer.' },
      { title: 'Lasting Results', description: 'A 3 year UV coating helps keep the lenses from yellowing again.' },
      { title: 'Cheaper Than Replacement', description: 'Restoration costs a fraction of new headlight assemblies.' },
    ],
    process: [
      'Clean and mask surrounding paint and trim',
      'Remove oxidized, yellowed layer from the lens',
      'Refine and polish the lens to clarity',
      'Apply 3 year UV protective coating',
    ],
    faqs: [
      { q: 'How much does headlight restoration cost?', a: 'Headlight restoration is $90 and takes about 1 hour, with a 3 year UV coating applied.' },
      { q: 'How long does headlight restoration last?', a: 'We apply a 3 year UV coating after restoring the lenses to help keep them from oxidizing and yellowing again.' },
      { q: 'Can I add headlight restoration to a detail?', a: 'Yes. It can be booked on its own or added to any detail package.' },
    ],
    images: [
      { src: '/images/optimized/work/headlight-restoration-before-bmw.webp', alt: 'Cloudy, oxidized BMW headlight before headlight restoration', caption: 'Before', description: 'Yellowed, cloudy lenses from years of Florida sun — they cut down light output and make the whole car look older.' },
      { src: '/images/optimized/work/headlight-restoration-after-bmw.webp', alt: 'Clear BMW headlight after headlight restoration with UV coating in Miami', caption: 'After', description: 'Restored to crystal clear and sealed with a 3 year UV coating to help keep them from yellowing again.' },
    ],
    related: ['exterior-detailing', 'paint-correction', 'engine-bay-detail'],
  },
  {
    slug: 'engine-bay-detail',
    name: 'Engine Bay Detail',
    summary: 'Clean, protect and dress the engine bay for a like-new look under the hood.',
    metaTitle: "Engine Bay Cleaning Miami — Engine Bay Detail | William's Auto Detailing",
    metaDescription: 'Engine bay detailing in Miami-Dade. Clean, protect and dress your engine bay to remove grease, grime and buildup — $50. Add to any mobile detail. We come to you.',
    keywords: 'engine bay cleaning Miami, engine bay detail Doral, engine detailing Miami, under hood cleaning, engine bay detailing near me',
    badge: 'Engine Bay Detailing',
    h1: 'Engine Bay Detail',
    h1Highlight: 'in Miami',
    intro: "A clean engine bay makes a great impression when you sell, makes leaks easier to spot, and simply looks right on a well-kept car. We clean, protect and dress your engine bay safely.",
    description: [
      "Under the hood is the part of the car most people never clean — and it shows. Road dust, leaves, grease and oil residue build up over the engine, plastic covers and hoses until everything looks dull and grimy. Heat makes it worse, baking the dirt on and drying out rubber and plastic parts.",
      "Our engine bay detail cleans away that buildup safely. We protect sensitive components, apply degreaser to break down grease and grime, agitate the dirty areas and carefully rinse and dry. Then we dress and protect the plastics and rubber so they look rich and new instead of faded and chalky.",
      "A clean engine bay isn't just about looks. It makes oil and coolant leaks much easier to spot early, and it's one of the first places buyers and dealers look when you're selling or trading in. At $50, it's an easy add-on to any detail.",
    ],
    price: '$50',
    bookAs: 'Engine Bay Detail',
    includes: [
      'Clean of the engine bay',
      'Degrease grime and buildup',
      'Protect plastics and rubber',
      'Dress for a clean, like-new finish',
    ],
    benefits: [
      { title: 'Higher Resale Appeal', description: 'Buyers and dealers notice a clean engine bay — it signals a well-maintained car.' },
      { title: 'Spot Problems Early', description: 'Leaks and worn parts are easier to see on a clean engine.' },
      { title: 'Protected Components', description: 'Dressing protects plastics and rubber from drying out in the heat.' },
      { title: 'Show-Ready', description: 'Perfect before a car show, a sale or just for pride of ownership.' },
    ],
    process: [
      'Cover sensitive electrical components',
      'Apply degreaser and agitate grime',
      'Carefully rinse and dry',
      'Dress and protect plastics and rubber',
    ],
    faqs: [
      { q: 'Is engine bay cleaning safe?', a: 'Yes. We protect sensitive components and take a careful approach to safely clean the engine bay.' },
      { q: 'How much does an engine bay detail cost?', a: 'An engine bay detail is $50 and can be added to any detail package.' },
    ],
    images: [
      { src: '/images/optimized/promotions/engine-bay-before.webp', alt: 'Dirty engine bay before an engine bay detail', caption: 'Before', description: 'Dust, grime and baked-on buildup that makes the engine bay look neglected and hides leaks.' },
      { src: '/images/optimized/promotions/engine-bay-after.webp', alt: 'Clean, dressed engine bay after an engine bay detail in Miami', caption: 'After', description: 'Degreased, cleaned and dressed — plastics and rubber protected with a clean, like-new finish.' },
    ],
    related: ['exterior-detailing', 'headlight-restoration', 'paint-correction'],
  },
];

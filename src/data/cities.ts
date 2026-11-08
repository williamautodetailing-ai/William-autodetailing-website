import { BUSINESS_NAME, GOOGLE_RATING, GOOGLE_REVIEW_COUNT, TRAVEL_FEE_MILES } from '../constants';

export interface CityFaq {
  q: string;
  a: string;
}

export interface CityData {
  name: string;
  slug: string;
  state: string;
  county: string;
  description: string;
  /** Second paragraph: what car care looks like in this area. Must be unique per city (no swapped names). */
  localDetail: string;
  /** City-specific questions; also feed the page's FAQ schema. */
  faqs: CityFaq[];
  landmarks?: string[];
  nearbyAreas?: string[];
  travelFee?: boolean;
}

export const cityPages: CityData[] = [
  {
    name: 'Doral',
    slug: 'doral-mobile-detailing',
    state: 'FL',
    county: 'Miami-Dade',
    description: "Doral is our home base — we're right in your neighborhood and can arrive fast with no travel fee. Whether you're near CityPlace Doral, the Trump Doral resort, or in one of the beautiful residential communities, we bring professional mobile detailing directly to you.",
    localDetail: "Doral sits right next to Miami International Airport, and a lot of cars here split the week between gated communities and open office and warehouse lots along Doral Boulevard and the Dolphin Expressway. That means long hours in full sun and the fine dust that comes with a busy commercial area. Our details include door jamb and wheel well cleaning plus an air purge that blows dust out of vents and crevices before we vacuum.",
    faqs: [
      {
        q: 'Do you detail cars at offices and warehouses in Doral?',
        a: "Yes. We can detail your car in a driveway, a community parking lot or your work lot, as long as there's room to work around the vehicle and the property allows it.",
      },
      {
        q: 'Is there a travel fee in Doral?',
        a: 'No. Doral is our home base, so there is never a travel fee here.',
      },
    ],
    landmarks: ['CityPlace Doral', 'Trump National Doral', 'Downtown Doral'],
    nearbyAreas: ['Miami', 'Medley', 'Hialeah', 'Hialeah Gardens', 'Sweetwater'],
    travelFee: false,
  },
  {
    name: 'Miami',
    slug: 'miami-mobile-detailing',
    state: 'FL',
    county: 'Miami-Dade',
    description: "Miami's fast-paced lifestyle deserves a detailing service that comes to you. From Brickell to Wynwood, Little Havana to Overtown, we serve all of Miami with our premium mobile detailing unit. Keep your vehicle looking as vibrant as the city itself.",
    localDetail: "Many of our Miami customers live in condo towers in Brickell, Edgewater and Downtown, where the car sits in a shared garage and there's nowhere to wash it yourself. Our setup is self-contained, so we don't need to hook into your building's water or power. Some buildings ask contractors to check in with management first, so let us know your building's rules when you book and we'll plan around them.",
    faqs: [
      {
        q: 'Can you detail my car in a Brickell or Downtown condo garage?',
        a: "Usually, yes. We bring our own water and power, so all we need is access to the car and room to work. Some buildings require management approval for contractors, so check with your building before your appointment.",
      },
      {
        q: 'Which parts of Miami do you cover?',
        a: 'All of the City of Miami, including Brickell, Downtown, Edgewater, Wynwood, Little Havana, Overtown and Coconut Grove.',
      },
    ],
    landmarks: ['Brickell', 'Wynwood', 'Little Havana', 'Downtown Miami'],
    nearbyAreas: ['Doral', 'Coral Gables', 'West Miami', 'South Miami'],
    travelFee: false,
  },
  {
    name: 'Medley',
    slug: 'medley-mobile-detailing',
    state: 'FL',
    county: 'Miami-Dade',
    description: "Medley's industrial and residential communities deserve vehicles that look their best. Our mobile detailing service brings professional-grade cleaning right to your door, saving you time without compromising on quality.",
    localDetail: "Medley is mostly industrial, with rock quarries, warehouses and steady truck traffic along Okeechobee Road and South River Drive. That puts fine limestone dust and road grime on every car parked here, and it works its way into door jambs, wheel wells and air vents. Left alone, that grit scratches paint every time someone wipes the car down, which is why a proper wash and decontamination matters more here than in most places.",
    faqs: [
      {
        q: 'Do you detail pickup trucks and work vehicles in Medley?',
        a: 'Yes. Our packages are priced for sedans and coupes or for SUVs and trucks, and an interior shampoo and extraction is a good add-on for work vehicles with dirty carpets and seats.',
      },
      {
        q: 'How do you deal with the dust from the quarries and job sites?',
        a: "We rinse and foam the car before we touch the paint, so loose grit lifts off instead of being dragged across it. Door jambs and wheel wells are cleaned, and an air purge blows dust out of vents and crevices before we vacuum.",
      },
    ],
    nearbyAreas: ['Doral', 'Hialeah', 'Hialeah Gardens', 'Miami'],
    travelFee: false,
  },
  {
    name: 'Kendall',
    slug: 'kendall-mobile-detailing',
    state: 'FL',
    county: 'Miami-Dade',
    description: "Kendall residents trust William's Auto Detailing for premium mobile car care. From The Falls to Dadeland and everywhere in between, we service all of Kendall. Our team comes to your home or workplace for maximum convenience.",
    localDetail: "Kendall is spread out, and most of our customers here live in single-family homes and townhouse communities between the Turnpike and Dadeland. Long commutes on the Don Shula Expressway and US-1 leave brake dust on the wheels and a film of road grime on the paint, while family cars collect crumbs, spills and sand on the inside. Detailing in your driveway saves you the trip across town and the wait at a car wash.",
    faqs: [
      {
        q: 'How long does a detail take at my home in Kendall?',
        a: 'About 2 hours for a Signature Detail, about 3 hours for a Pristine Detail and 4 to 5 hours for The Perfect Detail. You can stay home or go about your day while we work.',
      },
      {
        q: 'Can you get kid and pet messes out of a family car?',
        a: 'Yes. A full interior detail covers vacuuming, wiping down every surface and cleaning the glass, and a shampoo and extraction treats stained cloth seats, carpets and mats.',
      },
    ],
    landmarks: ['The Falls Shopping Center', 'Dadeland Mall', 'Kendall Town Center'],
    nearbyAreas: ['Tamiami', 'South Miami', 'Palmetto Bay', 'Olympia Heights'],
    travelFee: false,
  },
  {
    name: 'Tamiami',
    slug: 'tamiami-mobile-detailing',
    state: 'FL',
    county: 'Miami-Dade',
    description: "Tamiami residents can enjoy showroom-quality detailing without leaving home. Our mobile unit handles everything on-site — from a quick signature detail to a full ceramic coating package. Convenient, professional, and competitively priced.",
    localDetail: "In Tamiami, most cars are parked in driveways in residential neighborhoods, exposed to the daily summer pattern of afternoon storms followed by hard sun. Rainwater dries on the paint and glass, leaving mineral spots that bake in if they sit. A sealant or ceramic coating makes water bead and roll off before it can dry into spots, and makes the car much easier to keep clean between details.",
    faqs: [
      {
        q: 'What can I do about water spots on my car?',
        a: "Fresh water spots usually come off during a wash. Spots that have etched into the clear coat need polishing, which is part of paint correction. A sealant or ceramic coating afterwards helps keep new spots from forming.",
      },
      {
        q: 'Do you still come out during the rainy season?',
        a: "Yes. We work around the weather and will reschedule if a storm makes it impossible to finish properly. Many summer appointments happen in the morning, before the afternoon rain.",
      },
    ],
    nearbyAreas: ['Kendall', 'Sweetwater', 'Doral', 'West Miami'],
    travelFee: false,
  },
  {
    name: 'Sweetwater',
    slug: 'sweetwater-mobile-detailing',
    state: 'FL',
    county: 'Miami-Dade',
    description: "Sweetwater is one of our most-served areas. Whether you're near FIU, in a residential neighborhood, or parked at work, we'll come to you. Our eco-friendly products and professional techniques deliver results that stand out.",
    localDetail: "Sweetwater sits right next to FIU's main campus, and a lot of residents here live in apartments and condos where washing your own car isn't allowed or isn't practical. That's exactly the situation mobile detailing is built for. We bring everything with us, so all we need is access to the car and enough space to work around it.",
    faqs: [
      {
        q: 'Can you detail my car at my apartment complex in Sweetwater?',
        a: "In most cases, yes. We bring our own water and power, so we don't need a hose or an outlet. Some complexes have rules about contractors in the parking lot, so it's worth checking with your office first.",
      },
      {
        q: 'Do you detail cars near the FIU campus?',
        a: 'We come to homes, apartments and workplaces across Sweetwater, including the neighborhoods around FIU. We can only work where the property allows it, so campus parking lots usually are not an option.',
      },
    ],
    landmarks: ['Florida International University', 'Sweetwater City Hall'],
    nearbyAreas: ['Doral', 'Tamiami', 'West Miami', 'Miami'],
    travelFee: false,
  },
  {
    name: 'West Miami',
    slug: 'west-miami-mobile-detailing',
    state: 'FL',
    county: 'Miami-Dade',
    description: "West Miami's tight-knit community deserves top-tier mobile detailing. We service your home driveway, apartment parking, or office lot with the same precision and care. Our ceramic coatings are especially popular in West Miami for long-lasting protection in Florida's tough climate.",
    localDetail: "West Miami is a small city of quiet residential streets between SW 8th Street and Coral Way, and nearly every home has its own driveway. That's the ideal setup for a mobile detail: we park beside your car, work in your driveway and you never have to leave the house. It also makes a regular maintenance schedule easy to keep.",
    faqs: [
      {
        q: 'Do I need to be home while you detail my car?',
        a: "Not for the whole appointment. We need the car unlocked or the keys at the start and end, and access to it while we work. Many West Miami customers stay inside or head out while we detail in the driveway.",
      },
      {
        q: 'Can I set up regular details for my car?',
        a: 'Yes. Our Maintenance Club offers weekly, bi-weekly or monthly visits after an initial full detail, with a free scratch or stain removal each month.',
      },
    ],
    nearbyAreas: ['Miami', 'Coral Gables', 'Sweetwater', 'South Miami'],
    travelFee: false,
  },
  {
    name: 'Miami Beach',
    slug: 'miami-beach-mobile-detailing',
    state: 'FL',
    county: 'Miami-Dade',
    description: "Salt air, UV rays, and constant sun take a toll on Miami Beach vehicles. Our ceramic coating packages are the ultimate defense against Florida's harsh coastal environment. We come to you anywhere on the Beach — South Beach, Mid Beach, North Beach.",
    localDetail: "On Miami Beach, salt air from the ocean and the bay settles on paint, glass and chrome every day, and sand finds its way into carpets and seat tracks. Salt left on the car draws moisture and speeds up corrosion on wheels, trim and anything metal underneath. Regular washes remove it before it does damage, and a ceramic coating makes it much harder for salt and grime to bond to the paint.",
    faqs: [
      {
        q: 'Does salt air really damage cars on Miami Beach?',
        a: "Over time, yes. Salt holds moisture against the car, which speeds up corrosion on metal parts and dulls paint and trim. Washing it off regularly and protecting the paint with a sealant or ceramic coating is the best defense.",
      },
      {
        q: 'Can you detail my car in a Miami Beach condo garage?',
        a: "Usually, yes. Our setup is self-contained, so we don't need your building's water or power. Many buildings require management approval for contractors, so check with yours before you book.",
      },
    ],
    landmarks: ['South Beach', 'Ocean Drive', 'Lincoln Road', 'Venetian Islands'],
    nearbyAreas: ['Miami', 'Surfside', 'Bal Harbour'],
    travelFee: false,
  },
  {
    name: 'South Miami',
    slug: 'south-miami-mobile-detailing',
    state: 'FL',
    county: 'Miami-Dade',
    description: "South Miami homeowners and businesses trust William's Auto Detailing for reliable, high-quality mobile car care. We serve the entire South Miami area including residential neighborhoods and commercial districts with our fully-equipped mobile unit.",
    localDetail: "South Miami is compact, with a walkable downtown along Sunset Drive and older residential streets shaded by big trees. That shade keeps cars cooler, but it also drops leaves, sap and bird droppings on them. Sap and droppings are acidic and can etch into clear coat within days in the Florida heat, so regular washes and a layer of protection go a long way here.",
    faqs: [
      {
        q: 'Can you remove tree sap and bird droppings from my paint?',
        a: "Yes, if they haven't been there too long. Most come off during a careful wash and clay bar treatment. If they've already etched into the clear coat, polishing during paint correction can usually reduce or remove the marks.",
      },
      {
        q: 'Do you detail cars at businesses in downtown South Miami?',
        a: "We can, as long as there's a safe place to work around the car and the property allows it. Driveways and private lots are usually easiest.",
      },
    ],
    landmarks: ['South Miami Downtown', 'Sunset Drive'],
    nearbyAreas: ['Kendall', 'West Miami', 'Coral Gables', 'Tamiami'],
    travelFee: false,
  },
  {
    name: 'Coral Gables',
    slug: 'coral-gables-mobile-detailing',
    state: 'FL',
    county: 'Miami-Dade',
    description: "Coral Gables is known for luxury, beauty, and high standards — and so are we. Our premium mobile detailing service is the perfect match for Coral Gables vehicles. From the Miracle Mile to Coconut Grove's border, we serve the entire City Beautiful.",
    localDetail: "A lot of our Coral Gables customers want more than a wash: paint correction to remove swirl marks, a ceramic coating to protect a new car, or leather conditioning for a luxury interior. We do all of it on-site, in your driveway or garage, so a high-value car never has to sit at a shop or be driven across town. Exterior work starts with a foam bath and hand wash, never an automatic brush.",
    faqs: [
      {
        q: 'Do you offer paint correction and ceramic coating in Coral Gables?',
        a: "Yes. Both are done at your home in Coral Gables. Paint correction removes swirls and light scratches, and our ceramic coatings protect the paint for 2 to 5 years depending on the tier.",
      },
      {
        q: 'Can you clean and condition leather and Alcantara?',
        a: 'Yes. We deep clean leather and Alcantara, restore the fibers and condition the surfaces, with UV protection that lasts up to 3 months.',
      },
    ],
    landmarks: ['Miracle Mile', 'Biltmore Hotel', 'University of Miami', 'Venetian Pool'],
    nearbyAreas: ['West Miami', 'South Miami', 'Miami', 'Coconut Grove'],
    travelFee: false,
  },
  {
    name: 'Hialeah Gardens',
    slug: 'hialeah-gardens-mobile-detailing',
    state: 'FL',
    county: 'Miami-Dade',
    description: "Hialeah Gardens residents get the same professional-grade detailing service that Miami's most discerning car owners rely on. Our mobile unit comes fully equipped — no water or power hookups needed from you.",
    localDetail: "Hialeah Gardens is a residential city on the northwest edge of Miami-Dade, a short drive from our Doral base. Many households here have family SUVs and work trucks that see heavy daily use, and the interiors show it first: dirt ground into carpets, stained seats and dusty vents. An interior detail with shampoo and extraction brings that back, and we do it right in your driveway.",
    faqs: [
      {
        q: 'Can you deep clean stained seats and carpets?',
        a: 'Yes. Our shampoo and extraction service treats stains and pulls dirt out of cloth seats, carpets and mats. It takes about an hour and can be added to any detail.',
      },
      {
        q: 'Do you need water or power from my house?',
        a: "No. We bring our own water and power, so you don't need to leave a hose or an outlet available.",
      },
    ],
    nearbyAreas: ['Hialeah', 'Medley', 'Doral', 'Miami Lakes'],
    travelFee: false,
  },
  {
    name: 'Hialeah',
    slug: 'hialeah-mobile-detailing',
    state: 'FL',
    county: 'Miami-Dade',
    description: "Hialeah is just northeast of our Doral base, so we can bring a full mobile detail to your home or workplace anywhere in the city with no travel fee. From the neighborhoods around Palm Avenue to the blocks near Westland Mall, we come to you fully equipped.",
    localDetail: "Hialeah is Miami-Dade's second-largest city, and parking is tight on a lot of its blocks: several cars often share one driveway, and many people park on the street. That makes it hard to wash a car at home, and the drive to a shop on Okeechobee Road or West 49th Street eats into the day. All we need is enough room to work safely around the car, so we can usually detail it right where it's parked.",
    faqs: [
      {
        q: 'Can you detail my car if I only have street parking in Hialeah?',
        a: "Often, yes, as long as the car is parked legally and there's enough room to work safely around it. A driveway or private lot is easiest, so let us know your parking situation when you book.",
      },
      {
        q: 'Is there a travel fee for Hialeah?',
        a: `No. Hialeah is within ${TRAVEL_FEE_MILES} miles of our Doral base, so there's no travel fee anywhere in the city.`,
      },
    ],
    landmarks: ['Westland Mall', 'Hialeah Park', 'Amelia Earhart Park', 'Palm Avenue'],
    nearbyAreas: ['Hialeah Gardens', 'Medley', 'Doral', 'Miami Lakes'],
    travelFee: false,
  },
  {
    name: 'Olympia Heights',
    slug: 'olympia-heights-mobile-detailing',
    state: 'FL',
    county: 'Miami-Dade',
    description: `Olympia Heights is a vibrant residential community in Miami-Dade, and we're proud to serve it. Our mobile detailing team arrives at your address, fully prepared to deliver the same 5-star quality that has earned us ${GOOGLE_REVIEW_COUNT} Google reviews.`,
    localDetail: "Olympia Heights is a residential area of single-family homes in west Miami-Dade, between Westchester and Kendall. With most cars parked in driveways under the open sun, UV is the biggest long-term threat: it fades paint, dries out dashboards and cracks leather. Sealants, ceramic coatings and leather conditioning are the simplest ways to keep a car looking newer for longer.",
    faqs: [
      {
        q: 'How do I protect my car from the sun if I park outside?',
        a: "Protect the paint with a sealant or ceramic coating, and keep the interior shaded when you can. Our ceramic coatings last 2 to 5 years, and leather conditioning adds UV protection to leather seats for up to 3 months.",
      },
      {
        q: 'Is ceramic coating worth it if my car is parked outside every day?',
        a: 'Outdoor cars benefit the most. A ceramic coating blocks UV, resists water spots and makes washing much easier, which matters more when the car never gets a break from the weather.',
      },
    ],
    nearbyAreas: ['Westchester', 'Kendall', 'Tamiami', 'West Miami'],
    travelFee: false,
  },
];

/** Page title and meta description for a city page. The prerender script uses these too. */
export const cityMetaTitle = (city: CityData) =>
  `Mobile Car Detailing in ${city.name}, ${city.state} | ${BUSINESS_NAME}`;

export const cityMetaDescription = (city: CityData) =>
  `Mobile car detailing in ${city.name}, ${city.state}. We come to your home, condo or office fully equipped. Interior, exterior and ceramic coating. ${GOOGLE_RATING} stars from ${GOOGLE_REVIEW_COUNT} Google reviews.`;

export const allServiceAreas = [
  'Miami', 'Doral', 'Brickell', 'Miami Beach',
  'Coral Gables', 'Hialeah', 'Miramar', 'Kendall',
  'Tamiami', 'Pinecrest', 'Fontainebleau', 'Miami Lakes',
  'South Miami',
];

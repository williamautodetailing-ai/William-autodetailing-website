export interface CityData {
  name: string;
  slug: string;
  state: string;
  county: string;
  description: string;
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
    landmarks: ['CityPlace Doral', 'Trump National Doral', 'Downtown Doral'],
    nearbyAreas: ['Miami', 'Medley', 'Hialeah Gardens', 'Sweetwater'],
    travelFee: false,
  },
  {
    name: 'Miami',
    slug: 'miami-mobile-detailing',
    state: 'FL',
    county: 'Miami-Dade',
    description: "Miami's fast-paced lifestyle deserves a detailing service that comes to you. From Brickell to Wynwood, Little Havana to Overtown, we serve all of Miami with our premium mobile detailing unit. Keep your vehicle looking as vibrant as the city itself.",
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
    nearbyAreas: ['Doral', 'Hialeah Gardens', 'Miami'],
    travelFee: false,
  },
  {
    name: 'Kendall',
    slug: 'kendall-mobile-detailing',
    state: 'FL',
    county: 'Miami-Dade',
    description: "Kendall residents trust William's Auto Detailing for premium mobile car care. From The Falls to Dadeland and everywhere in between, we service all of Kendall. Our team comes to your home or workplace for maximum convenience.",
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
    nearbyAreas: ['Kendall', 'Sweetwater', 'Doral', 'West Miami'],
    travelFee: false,
  },
  {
    name: 'Sweetwater',
    slug: 'sweetwater-mobile-detailing',
    state: 'FL',
    county: 'Miami-Dade',
    description: "Sweetwater is one of our most-served areas. Whether you're near FIU, in a residential neighborhood, or parked at work, we'll come to you. Our eco-friendly products and professional techniques deliver results that stand out.",
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
    nearbyAreas: ['Miami', 'Coral Gables', 'Sweetwater', 'South Miami'],
    travelFee: false,
  },
  {
    name: 'Miami Beach',
    slug: 'miami-beach-mobile-detailing',
    state: 'FL',
    county: 'Miami-Dade',
    description: "Salt air, UV rays, and constant sun take a toll on Miami Beach vehicles. Our ceramic coating packages are the ultimate defense against Florida's harsh coastal environment. We come to you anywhere on the Beach — South Beach, Mid Beach, North Beach.",
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
    nearbyAreas: ['Hialeah', 'Medley', 'Doral', 'Miami Lakes'],
    travelFee: false,
  },
  {
    name: 'Olympia Heights',
    slug: 'olympia-heights-mobile-detailing',
    state: 'FL',
    county: 'Miami-Dade',
    description: "Olympia Heights is a vibrant residential community in Miami-Dade, and we're proud to serve it. Our mobile detailing team arrives at your address, fully prepared to deliver the same 5-star quality that has earned us 137 Google reviews.",
    nearbyAreas: ['Westchester', 'Kendall', 'Tamiami', 'West Miami'],
    travelFee: false,
  },
];

export const allServiceAreas = [
  'Miami', 'Doral', 'Brickell', 'Miami Beach',
  'Coral Gables', 'Hialeah', 'Miramar', 'Kendall',
  'Tamiami', 'Pinecrest', 'Fontainebleau', 'Miami Lakes',
  'South Miami',
];

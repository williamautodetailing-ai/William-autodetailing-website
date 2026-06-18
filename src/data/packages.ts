export type PackageCategory = 'signature' | 'pristine' | 'perfect' | 'ceramic-t1' | 'ceramic-t2' | 'windshield';

export interface DetailPackage {
  id: PackageCategory;
  name: string;
  tagline: string;
  guidance?: string;
  duration?: string;
  pricing: {
    sedan: number;
    suv?: number;
    label?: string;
  };
  features: string[];
  popular?: boolean;
  isCeramic?: boolean;
  note?: string;
}

export interface ComparisonRow {
  label: string;
  group?: string;
}

export interface DetailComparisonRow extends ComparisonRow {
  signature: boolean;
  pristine: boolean;
  perfect: boolean;
}

export interface CeramicComparisonRow extends ComparisonRow {
  t1: boolean;
  t2: boolean;
  windshield: boolean;
}

export const packages: DetailPackage[] = [
  {
    id: 'signature',
    name: 'Signature Detail',
    tagline: 'Complete interior & exterior maintenance',
    guidance: 'Perfect for daily drivers who want their car looking clean without going all-in on a full detail. Ideal for busy professionals.',
    duration: '2 hours',
    pricing: {
      sedan: 174.99,
      suv: 194.99,
    },
    features: [
      'Wheel faces, wells & tires cleaned + dressed',
      'Double foam bath & hand wash',
      'Exterior glass streak-free finish',
      'Door jambs, gas cap & trunk jamb cleaned',
      'Windshield sealant for improved visibility',
      'Waxed & ceramic sealed (up to 3 months)',
      'Full vehicle air purge blow-out',
      'Two-stage interior vacuum (floors, seats, crevices)',
      'Floor mats cleaned (carpet & weather)',
      'Plastic, vinyl & leather surfaces wiped',
      'Interior glass streak-free finish',
    ],
    popular: false,
  },
  {
    id: 'pristine',
    name: 'Pristine Detail',
    tagline: 'Deep clean & exterior restoration',
    guidance: 'Inside and out. Our most-booked package. Great for families, commuters, and anyone who wants a real, thorough detail.',
    duration: '3 hours',
    pricing: {
      sedan: 300.00,
      suv: 325.00,
    },
    features: [
      'Everything in Signature Detail',
      'Wheel faces ceramic spray sealant',
      'Clay bar treatment',
      'Iron removal treatment',
      'Ceramic sealed up to 6 months protection',
      'Cloth seats shampooed, sanitized & extracted',
      'Leather seats scrubbed & conditioned (3 months)',
      'Stain removal on cloth seats',
    ],
    popular: true,
  },
  {
    id: 'perfect',
    name: 'The Perfect Detail',
    tagline: 'Full correction + the deepest clean we offer',
    guidance: "Selling the car, recovering from a road trip, or the interior has seen some things — this is the one. The most thorough detail we do, start to finish.",
    duration: '4–5 hours',
    pricing: {
      sedan: 550.00,
      suv: 650.00,
    },
    features: [
      'Paint enhancement polish — removes light swirls, restores gloss & clarity',
      'Wheel faces, wells & tires cleaned + dressed',
      'Wheel faces ceramic spray sealant',
      'Clay bar & iron removal treatment',
      'Exterior glass streak-free finish',
      'Door jambs, gas jamb & trunk jamb cleaned',
      'Windshield sealant for improved visibility',
      'Waxed & ceramic sealed up to 6 months',
      'Full vehicle air purge blow-out',
      'Two-stage interior vacuum (all surfaces & crevices)',
      'Floor mats cleaned (carpet & weather)',
      'Cloth seats shampooed + extracted + stain removal',
      'Leather seats scrubbed & conditioned (3 months)',
      'Plastic, vinyl & leather surfaces wiped',
      'Interior glass streak-free finish',
    ],
    popular: false,
  },
  {
    id: 'ceramic-t1',
    name: 'Tier 1 Ceramic Coating',
    tagline: '2–3 year professional paint protection',
    duration: '8 hours',
    pricing: {
      sedan: 699.00,
      suv: 799.00,
    },
    features: [
      'Signature Exterior Detail included',
      'Standard Interior Detail included',
      'Paint enhancement polish',
      '2–3 year professional paint coating',
      'Protection from bird droppings & bug splatter',
      'Hydrophobic surface (easier to clean)',
      'Enhanced gloss, shine & paint clarity',
    ],
    isCeramic: true,
    note: 'Starting price — additional charges for vehicle size & condition may apply.',
  },
  {
    id: 'ceramic-t2',
    name: 'Tier 2 Ceramic Coating',
    tagline: '4–5 year elite paint protection',
    pricing: {
      sedan: 999.00,
      suv: 1099.00,
    },
    features: [
      'Signature Exterior Detail included',
      'Standard Interior Detail included',
      'Paint enhancement polish',
      '4–5 year professional paint coating',
      'Superior chemical & UV resistance',
      'Hydrophobic surface (easier to clean)',
      'Maximum gloss, shine & paint clarity',
    ],
    isCeramic: true,
    note: 'Starting price — additional charges for vehicle size & condition may apply.',
  },
  {
    id: 'windshield',
    name: 'Windshield Ceramic',
    tagline: '18 months windshield protection',
    pricing: {
      sedan: 149.00,
      label: 'Flat Rate',
    },
    features: [
      '18 months ceramic protection',
      'Improved visibility in bad weather',
      'Easier to clean bugs & debris',
      'Hydrophobic glass coating',
      'Safer driving experience',
    ],
    isCeramic: true,
  },
];

export const detailComparisonRows: DetailComparisonRow[] = [
  // Exterior
  { group: 'Exterior', label: 'Foam bath & hand wash',             signature: true,  pristine: true,  perfect: true  },
  { group: 'Exterior', label: 'Wheel faces, wells & tires cleaned + dressed', signature: true, pristine: true, perfect: true },
  { group: 'Exterior', label: 'Exterior glass streak-free finish', signature: true,  pristine: true,  perfect: true  },
  { group: 'Exterior', label: 'Door jambs, gas cap & trunk jamb cleaned', signature: true, pristine: true, perfect: true },
  { group: 'Exterior', label: 'Windshield sealant',                signature: true,  pristine: true,  perfect: true  },
  { group: 'Exterior', label: 'Wax & ceramic seal (3 months)',     signature: true,  pristine: false, perfect: false },
  { group: 'Exterior', label: 'Ceramic sealed (6 months)',         signature: false, pristine: true,  perfect: true  },
  { group: 'Exterior', label: 'Wheel faces ceramic spray sealant', signature: false, pristine: true,  perfect: true  },
  { group: 'Exterior', label: 'Clay bar treatment',                signature: false, pristine: true,  perfect: true  },
  { group: 'Exterior', label: 'Iron removal treatment',            signature: false, pristine: true,  perfect: true  },
  { group: 'Exterior', label: 'Paint enhancement polish',          signature: false, pristine: false, perfect: true  },
  // Interior
  { group: 'Interior', label: 'Full vehicle air purge blow-out',   signature: true,  pristine: true,  perfect: true  },
  { group: 'Interior', label: 'Two-stage vacuum (floors, seats, crevices)', signature: true, pristine: true, perfect: true },
  { group: 'Interior', label: 'Floor mats cleaned',                signature: true,  pristine: true,  perfect: true  },
  { group: 'Interior', label: 'Plastic, vinyl & leather surfaces wiped', signature: true, pristine: true, perfect: true },
  { group: 'Interior', label: 'Interior glass streak-free finish', signature: true,  pristine: true,  perfect: true  },
  { group: 'Interior', label: 'Cloth seats shampooed & extracted', signature: false, pristine: true,  perfect: true  },
  { group: 'Interior', label: 'Leather seats scrubbed & conditioned', signature: false, pristine: true, perfect: true },
  { group: 'Interior', label: 'Stain removal on cloth seats',      signature: false, pristine: true,  perfect: true  },
];

export const ceramicComparisonRows: CeramicComparisonRow[] = [
  // Prep
  { group: 'Prep Work', label: 'Signature exterior detail',        t1: true,  t2: true,  windshield: false },
  { group: 'Prep Work', label: 'Interior detail',                  t1: true,  t2: true,  windshield: false },
  { group: 'Prep Work', label: 'Clay bar treatment',               t1: true,  t2: true,  windshield: false },
  { group: 'Prep Work', label: 'Iron removal treatment',           t1: true,  t2: true,  windshield: false },
  { group: 'Prep Work', label: 'Paint enhancement polish',         t1: true,  t2: true,  windshield: false },
  // Coating
  { group: 'Coating', label: '2–3 year paint protection',          t1: true,  t2: false, windshield: false },
  { group: 'Coating', label: '4–5 year paint protection',          t1: false, t2: true,  windshield: false },
  { group: 'Coating', label: '18 months windshield protection',    t1: false, t2: false, windshield: true  },
  { group: 'Coating', label: 'Hydrophobic surface',                t1: true,  t2: true,  windshield: true  },
  { group: 'Coating', label: 'Protection from bird droppings & bugs', t1: true, t2: true, windshield: false },
  { group: 'Coating', label: 'Superior chemical & UV resistance',  t1: false, t2: true,  windshield: false },
  { group: 'Coating', label: 'Enhanced gloss & paint clarity',     t1: true,  t2: false, windshield: false },
  { group: 'Coating', label: 'Maximum gloss & paint clarity',      t1: false, t2: true,  windshield: false },
  { group: 'Coating', label: 'Improved visibility in rain',        t1: false, t2: false, windshield: true  },
  { group: 'Coating', label: 'Easier to clean bugs & debris',      t1: false, t2: false, windshield: true  },
];

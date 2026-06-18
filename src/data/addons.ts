export interface AddOnService {
  id: string;
  name: string;
  duration?: string;
  description: string;
  disclaimer?: string;
}

export const addons: AddOnService[] = [
  {
    id: 'scratch-scuff',
    name: 'Scratch / Scuff Treatment',
    description: 'Professional treatment of surface scratches and scuffs to reduce their appearance and restore the finish.',
    disclaimer: 'Cannot guarantee complete removal.',
  },
  {
    id: 'interior-panel-polish',
    name: 'Interior Panel Polish',
    duration: '30 min',
    description: 'Polish and correction of interior glossy panels — removes light scratches and restores the factory clarity to hard plastic trim.',
  },
  {
    id: 'engine-bay-detail',
    name: 'Engine Bay Detail',
    description: 'Thorough clean, protect, and dress of the engine bay. Removes grease, grime, and buildup for a clean under-hood appearance.',
  },
  {
    id: 'stain-treatment',
    name: 'Stain Treatment',
    duration: '1 hour',
    description: 'Shampoo and extraction of upholstery, carpets, and mats using professional-grade equipment to lift embedded stains.',
    disclaimer: 'We cannot guarantee complete removal of stains. While we aim to do an excellent job, there are several variables with stain treatment and resolution that prevent us from being able to promise complete removal.',
  },
  {
    id: 'leather-alcantara',
    name: 'Leather / Alcantara Deep Clean',
    duration: '30 min',
    description: 'Deep scrub and clean of Alcantara and leather surfaces. Restores fibers in Alcantara and protects against future soiling. Leather is conditioned and hydrated for up to 3 months of UV protection.',
  },
  {
    id: 'headlights-restoration',
    name: 'Headlights Restoration',
    duration: '1 hour',
    description: 'Restore clarity and visibility to oxidized or yellowed headlights — making them look dramatically better and safer to drive at night. A 3-year UV coating is applied to prevent re-oxidation.',
  },
];

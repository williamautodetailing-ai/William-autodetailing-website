import { packages } from './packages';

/**
 * Fixed-price promotional offer. When passed to <QuoteWizard offer={...} />,
 * the wizard skips the service + package steps and quotes the offer price.
 */
export interface SpecialOffer {
  id: string;
  name: string;
  /** Short line shown in the wizard's promo strip */
  promo: string;
  pricing: { sedan: number; suv: number };
  /** What's bundled on top of the base package */
  upgrades: { title: string; desc: string }[];
  /** Add-on ids already included — hidden from the add-on step */
  includedAddonIds: string[];
  features: string[];
}

const signature = packages.find(p => p.id === 'signature')!;

export const SIGNATURE_199_SPECIAL: SpecialOffer = {
  id: 'signature-199',
  name: '$199 Signature Special',
  promo: 'Signature Detail + Windshield & Engine Bay upgrades included',
  pricing: { sedan: 199, suv: 219 },
  upgrades: [
    {
      title: 'Upgraded Windshield Sealant',
      desc: 'Hydrophobic glass protection — rain beads off, bugs and debris wipe away easier.',
    },
    {
      title: 'Engine Bay Detail',
      desc: 'Degreased, cleaned, protected and dressed for a clean under-hood look.',
    },
  ],
  includedAddonIds: ['engine-bay-detail'],
  // Base Signature features, minus the standard windshield sealant (upgraded above)
  features: signature.features.filter(f => !f.toLowerCase().startsWith('windshield sealant')),
};

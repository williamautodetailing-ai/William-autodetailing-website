import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { packages } from '../../data/packages';
import { services } from '../../data/services';
import { maintenancePlans } from '../../data/maintenanceClub';
import { useLeadModal } from '../../context/LeadModalContext';

type Size = 'sedan' | 'suv';

interface MenuItem {
  name: string;
  note: string;
  price: (size: Size) => string;
  /** Name passed to the booking form, or a page link instead */
  book?: string;
  to?: string;
  popular?: boolean;
}

const pkg = (id: string) => packages.find(p => p.id === id)!;
const money = (n: number) => `$${Number.isInteger(n) ? n : n.toFixed(2)}`;
const pkgPrice = (id: string) => (size: Size) => money(size === 'suv' ? pkg(id).pricing.suv ?? pkg(id).pricing.sedan : pkg(id).pricing.sedan);
const servicePrice = (slug: string) => () => services.find(s => s.slug === slug)?.price ?? '';
const service = (slug: string) => services.find(s => s.slug === slug)!;
const lowestPlan = maintenancePlans.reduce((a, b) => (a.sedan < b.sedan ? a : b));

const groups: { title: string; items: MenuItem[] }[] = [
  {
    title: 'Full details',
    items: [
      { name: 'Signature Detail', note: 'Inside and out. About 2 hours.', price: pkgPrice('signature'), book: 'Signature Detail' },
      { name: 'Pristine Detail', note: 'Adds clay bar, seat shampoo and 6-month sealant.', price: pkgPrice('pristine'), book: 'Pristine Detail', popular: true },
      { name: 'The Perfect Detail', note: 'Adds a paint polish. Our deepest clean.', price: pkgPrice('perfect'), book: 'The Perfect Detail' },
    ],
  },
  {
    title: 'Protection',
    items: [
      { name: 'Ceramic Coating', note: '2 to 5 years of protection. Prep included.', price: size => `From ${pkgPrice('ceramic-t1')(size)}`, book: 'Tier 1 Ceramic Coating' },
      {
        name: 'Maintenance Club',
        note: 'Weekly, bi-weekly or monthly upkeep.',
        price: size => `From ${money(size === 'suv' ? lowestPlan.suv : lowestPlan.sedan)}/visit`,
        to: '/maintenance-club',
      },
    ],
  },
  {
    title: 'Add-ons',
    items: [
      { slug: 'headlight-restoration', note: 'Clear lenses with a 3-year UV seal.' },
      { slug: 'leather-alcantara-cleaning', note: 'Deep clean and UV conditioning.' },
      { slug: 'shampoo-extraction', note: 'Seats, carpets and mats.' },
      { slug: 'engine-bay-detail', note: 'Cleaned, protected and dressed.' },
    ].map(({ slug, note }) => ({
      name: service(slug).name,
      note,
      price: servicePrice(slug),
      book: service(slug).bookAs,
    })),
  },
];

// Prices set like a menu. The Sedan / SUV switch is the page's one live control,
// and every row books that exact service in one tap.
export default function PriceMenu() {
  const [size, setSize] = useState<Size>('sedan');
  const { openModal } = useLeadModal();

  return (
    <section id="services" className="py-24 md:py-36 bg-charcoal-900 scroll-mt-24">
      <div className="container-custom grid lg:grid-cols-12 gap-10 lg:gap-8">
        <div className="lg:col-span-4">
          <h2 data-reveal className="font-display text-4xl md:text-6xl font-bold text-white tracking-tight">
            Simple pricing.
          </h2>
          <p data-reveal className="mt-4 text-lg text-charcoal-200 max-w-sm">
            Tap any service to book it. No payment until we confirm your appointment.
          </p>

          <div data-reveal role="group" aria-label="Vehicle size" className="mt-8 inline-flex bg-charcoal-950 p-1 rounded-lg">
            {(['sedan', 'suv'] as Size[]).map(s => (
              <button
                key={s}
                onClick={() => setSize(s)}
                aria-pressed={size === s}
                className={`px-5 py-2.5 rounded-md text-base font-semibold transition-colors ${
                  size === s ? 'bg-white text-charcoal-950' : 'text-charcoal-300 hover:text-white'
                }`}
              >
                {s === 'sedan' ? 'Sedan / Coupe' : 'SUV / Truck'}
              </button>
            ))}
          </div>

          <Link data-reveal to="/detail-packages" className="mt-8 hidden lg:flex items-center gap-2 text-white hover:text-accent font-semibold transition-colors">
            Compare everything in each package <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="lg:col-span-8 grid md:grid-cols-2 gap-x-12 gap-y-12">
          {groups.map(group => (
            <div key={group.title} className={group.title === 'Full details' ? 'md:col-span-2' : ''}>
              <h3 data-reveal className="text-xl font-bold text-gold mb-4">{group.title}</h3>
              <ul className={group.title === 'Full details' ? 'grid md:grid-cols-2 gap-x-12' : ''}>
                {group.items.map((item, i) => {
                  const inner = (
                    <>
                      <span className="min-w-0">
                        <span className="flex items-center gap-2 text-[17px] font-semibold text-white group-hover:text-accent transition-colors">
                          {item.name}
                          {item.popular && <span className="text-[13px] font-semibold text-gold">Most booked</span>}
                        </span>
                        <span className="block mt-0.5 text-base text-charcoal-300 leading-snug">{item.note}</span>
                      </span>
                      <span className="flex-shrink-0 text-[17px] font-semibold text-white tabular-nums text-right">
                        {item.price(size)}
                      </span>
                    </>
                  );
                  const rowClass =
                    'group w-full flex items-start justify-between gap-6 py-4 text-left rounded-md md:-mx-3 md:px-3 hover:bg-charcoal-800 transition-colors';
                  return (
                    <li key={item.name} data-reveal style={{ ['--d' as string]: `${i * 60}ms` }}>
                      {item.to ? (
                        <Link to={item.to} className={rowClass}>{inner}</Link>
                      ) : (
                        <button onClick={() => openModal(item.book)} className={rowClass} aria-label={`Book ${item.name}, ${item.price(size)}`}>
                          {inner}
                        </button>
                      )}
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
          <Link to="/detail-packages" className="md:col-span-2 lg:hidden flex items-center gap-2 text-white hover:text-accent font-semibold transition-colors">
            Compare everything in each package <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}

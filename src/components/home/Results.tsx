import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

// Real before/after work, each linking to the service that produced it.
const results = [
  {
    src: '/images/optimized/work/paint-correction-before-after-mercedes.webp',
    alt: 'Black Mercedes-Benz hood, left half before and right half after paint correction',
    title: 'Paint correction',
    text: 'Swirls polished out of a black Mercedes hood.',
    to: '/services/paint-correction',
  },
  {
    src: '/images/optimized/work/headlight-restoration-after-bmw.webp',
    alt: 'Clear BMW headlight after restoration',
    title: 'Headlight restoration',
    text: 'Yellowed lenses made clear, then sealed for 3 years.',
    to: '/services/headlight-restoration',
  },
  {
    src: '/images/optimized/work/leather-conditioning-bmw-m8-red.webp',
    alt: 'BMW M8 red leather seats after cleaning and conditioning',
    title: 'Interior detail',
    text: 'Leather deep cleaned and conditioned against the Miami sun.',
    to: '/services/interior-detailing',
  },
  {
    src: '/images/optimized/promotions/engine-bay-after.webp',
    alt: 'Clean, dressed engine bay after an engine bay detail',
    title: 'Engine bay',
    text: 'Grease and grime cleaned off, plastics dressed.',
    to: '/services/engine-bay-detail',
  },
];

export default function Results() {
  return (
    <section id="results" className="py-24 md:py-36 bg-charcoal-950">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-10 md:mb-14">
          <h2 data-reveal className="font-display text-4xl md:text-6xl font-bold text-white tracking-tight">
            See the difference.
          </h2>
          <Link data-reveal to="/gallery" className="inline-flex items-center gap-2 text-white hover:text-accent font-semibold transition-colors">
            More of our work <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>

      {/* Swipe on phones, a full row on desktop */}
      <div className="container-custom">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 md:gap-5">
          {results.map((r, i) => (
            <Link
              key={r.src}
              to={r.to}
              data-reveal
              style={{ ['--d' as string]: `${i * 80}ms` }}
              className="group bg-charcoal-900 overflow-hidden"
            >
              <div className="overflow-hidden">
                <img
                  src={r.src}
                  alt={r.alt}
                  loading="lazy"
                  decoding="async"
                  width={800}
                  height={1000}
                  className="w-full aspect-[4/5] object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                />
              </div>
              <div className="p-4 md:p-5">
                <h3 className="text-base md:text-lg font-bold text-white group-hover:text-accent transition-colors">{r.title}</h3>
                <p className="mt-1 text-base text-charcoal-200 leading-snug">{r.text}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

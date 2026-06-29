import { useState } from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Star, Check, Shield, Droplets, Sun, Zap, ChevronDown, ChevronUp } from 'lucide-react';
import type { CeramicCityContent } from '../data/ceramicCities';
import { cityPages } from '../data/cities';
import { packages } from '../data/packages';
import { BUSINESS_NAME, GOOGLE_RATING, GOOGLE_REVIEW_COUNT, TRAVEL_FEE_MILES, BASE_CITY } from '../constants';
import { useLeadModal } from '../context/LeadModalContext';
import SEO from '../components/SEO';

interface CeramicCityPageProps {
  content: CeramicCityContent;
}

const benefits = [
  {
    icon: Shield,
    title: 'Long-Term Protection',
    description: 'Guards against bird droppings, bug splatter, UV, and contamination for years — not the weeks you get from wax.',
  },
  {
    icon: Droplets,
    title: 'Hydrophobic Surface',
    description: 'Water beads and rolls off, taking dirt with it. Your car stays cleaner longer and washes in minutes.',
  },
  {
    icon: Sun,
    title: 'UV & Heat Resistance',
    description: "Florida's sun fades paint fast. Ceramic coating blocks UV radiation and prevents oxidation.",
  },
  {
    icon: Zap,
    title: 'Enhanced Gloss & Clarity',
    description: 'Adds incredible depth and a mirror-like shine, making your paint look better than the day you bought it.',
  },
];

export default function CeramicCityPage({ content }: CeramicCityPageProps) {
  const { openModal } = useLeadModal();
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const city = cityPages.find((c) => c.name === content.name);
  const state = city?.state ?? 'FL';
  const ceramicPackages = packages.filter((p) => p.isCeramic);

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: content.faqs.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  };

  return (
    <div className="bg-charcoal-950 text-white pt-24 md:pt-32">
      <SEO
        title={`Ceramic Coating in ${content.name}, ${state} | ${BUSINESS_NAME}`}
        description={content.metaDescription}
        keywords={`ceramic coating ${content.name}, ceramic coating ${content.name} FL, mobile ceramic coating ${content.name}, paint protection ${content.name}, car ceramic coating near me`}
        canonical={`/ceramic-coating/${content.citySlug}`}
      />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* Hero */}
      <section className="relative py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 opacity-25">
            <img
              src="/images/optimized/ceramic-hero.webp"
              srcSet="/images/optimized/ceramic-hero-480.webp 480w, /images/optimized/ceramic-hero-768.webp 768w, /images/optimized/ceramic-hero.webp 1200w"
              sizes="100vw"
              alt={`Ceramic coating in ${content.name}, ${state}`}
              className="w-full h-full object-cover"
              width={1200}
              height={800}
              loading="eager"
              decoding="async"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950 via-charcoal-950/80 to-charcoal-950/60" />
        </div>
        <div className="decorative-blur absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-accent/10 rounded-full blur-[150px]" />

        <div className="relative z-10 container-custom text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-charcoal-800/80 border border-charcoal-700 mb-6">
            <MapPin className="w-4 h-4 text-accent" />
            <span className="text-charcoal-200 text-sm font-medium">{content.name}, {state}</span>
          </div>

          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
            Ceramic Coating
            <span className="block gradient-text">in {content.name}, {state}</span>
          </h1>

          <p className="text-lg md:text-xl text-charcoal-300 max-w-2xl mx-auto mb-8">
            {content.intro}
          </p>

          <div className="flex items-center justify-center gap-2 mb-10">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-5 h-5 text-gold fill-gold" />
            ))}
            <span className="text-charcoal-300 text-sm ml-1">
              {GOOGLE_RATING} · {GOOGLE_REVIEW_COUNT} Google Reviews
            </span>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button onClick={() => openModal('Tier 1 Ceramic Coating')} className="btn-primary text-lg px-8 py-4">
              Get a Ceramic Quote
            </button>
            <a href="#packages" className="btn-secondary text-lg px-8 py-4">
              View Packages
            </a>
          </div>
        </div>
      </section>

      {/* Local angle */}
      <section className="py-16 bg-charcoal-900">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-6">
                {content.localHeading}
              </h2>
              <p className="text-charcoal-300 text-lg leading-relaxed mb-6">
                {content.localBody}
              </p>

              {city?.travelFee === false && (
                <div className="flex items-start gap-3 bg-charcoal-800/50 rounded-xl p-4 border border-charcoal-700 mb-6">
                  <Check className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                  <p className="text-charcoal-300 text-sm">
                    <strong className="text-white">{content.name} is within our no-travel-fee zone.</strong>{' '}
                    A travel fee only applies for locations more than {TRAVEL_FEE_MILES} miles from {BASE_CITY}.
                  </p>
                </div>
              )}

              {city?.landmarks && city.landmarks.length > 0 && (
                <div>
                  <p className="text-charcoal-500 text-sm font-semibold uppercase tracking-wider mb-3">Serving Near</p>
                  <div className="flex flex-wrap gap-2">
                    {city.landmarks.map((lm) => (
                      <span key={lm} className="px-3 py-1.5 bg-charcoal-800 border border-charcoal-700 rounded-full text-sm text-charcoal-300">
                        {lm}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <div className="grid grid-cols-2 gap-4">
              {benefits.map((item) => (
                <div key={item.title} className="bg-charcoal-800/50 border border-charcoal-700 rounded-xl p-5 hover:border-accent/40 transition-colors">
                  <item.icon className="w-7 h-7 text-accent mb-3" />
                  <h4 className="font-bold text-white text-sm mb-1">{item.title}</h4>
                  <p className="text-charcoal-400 text-xs">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Packages */}
      <section id="packages" className="section-padding bg-charcoal-950 relative">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,212,255,0.04),transparent_70%)]" />
        <div className="container-custom relative z-10">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-4">
              Ceramic Packages in <span className="gradient-text">{content.name}</span>
            </h2>
            <p className="text-charcoal-400 mb-8">Full prep, paint polish, and coating — applied on-site at your address in {content.name}.</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-5xl mx-auto">
            {ceramicPackages.map((pkg) => (
              <div
                key={pkg.id}
                className="rounded-2xl p-6 flex flex-col bg-charcoal-800/50 border border-charcoal-700 transition-all hover:scale-[1.02] hover:border-accent/40"
              >
                <h3 className="font-bold text-white mb-1">{pkg.name}</h3>
                <p className="text-charcoal-500 text-xs mb-3">{pkg.tagline}</p>
                <p className="text-2xl font-bold text-white mb-1">
                  {pkg.pricing.label ? '' : 'from '}${pkg.pricing.sedan.toFixed(0)}
                  {pkg.pricing.label && <span className="text-charcoal-500 text-sm font-normal"> {pkg.pricing.label}</span>}
                </p>
                {pkg.duration && <p className="text-charcoal-500 text-xs mb-4">Est. {pkg.duration}</p>}
                <ul className="space-y-2 mb-5 flex-1">
                  {pkg.features.slice(0, 6).map((f) => (
                    <li key={f} className="flex items-start gap-1.5 text-xs">
                      <Check className="w-3.5 h-3.5 mt-0.5 flex-shrink-0 text-accent" />
                      <span className="text-charcoal-300">{f}</span>
                    </li>
                  ))}
                </ul>
                <button
                  onClick={() => openModal(pkg.name)}
                  className="block w-full text-center py-2.5 rounded-lg font-semibold text-sm bg-charcoal-700 text-white hover:bg-charcoal-600 transition-all"
                >
                  Book in {content.name}
                </button>
              </div>
            ))}
          </div>

          <p className="text-center text-charcoal-500 text-sm mt-8">
            Want the full breakdown?{' '}
            <Link to="/ceramic-coating" className="text-accent hover:underline">Compare all ceramic coating tiers</Link>.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-charcoal-900">
        <div className="container-custom max-w-3xl">
          <h2 className="font-display text-2xl md:text-3xl font-bold text-white mb-8 text-center">
            Ceramic Coating in {content.name} — FAQ
          </h2>
          <div className="space-y-3">
            {content.faqs.map((f, i) => (
              <div key={f.q} className="bg-charcoal-800/50 border border-charcoal-700 rounded-xl overflow-hidden">
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between gap-4 p-5 text-left"
                >
                  <span className="font-semibold text-white text-sm md:text-base">{f.q}</span>
                  {openFaq === i
                    ? <ChevronUp className="w-5 h-5 text-accent flex-shrink-0" />
                    : <ChevronDown className="w-5 h-5 text-charcoal-400 flex-shrink-0" />}
                </button>
                {openFaq === i && (
                  <p className="px-5 pb-5 text-charcoal-300 text-sm leading-relaxed">{f.a}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Nearby areas */}
      {city?.nearbyAreas && city.nearbyAreas.length > 0 && (
        <section className="py-12 bg-charcoal-950">
          <div className="container-custom">
            <h3 className="font-bold text-white text-lg mb-4 text-center">
              Also Serving Nearby Areas
            </h3>
            <div className="flex flex-wrap justify-center gap-3">
              {city.nearbyAreas.map((area) => (
                <span key={area} className="px-4 py-2 bg-charcoal-800 border border-charcoal-700 rounded-full text-sm text-charcoal-300">
                  {area}
                </span>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="py-20 bg-charcoal-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-accent/10 via-transparent to-primary-500/10" />
        <div className="container-custom relative z-10 text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-4">
            Protect Your Paint in <span className="gradient-text">{content.name}</span>
          </h2>
          <p className="text-charcoal-400 text-lg mb-8 max-w-xl mx-auto">
            Get a ceramic coating quote in under 2 minutes. We come to you anywhere in {content.name}.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button onClick={() => openModal('Tier 1 Ceramic Coating')} className="btn-primary text-lg px-10 py-4">
              Get My Ceramic Quote
            </button>
            {city && (
              <Link to={`/areas/${city.slug}`} className="btn-secondary text-lg px-8 py-4">
                All {content.name} Detailing
              </Link>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}

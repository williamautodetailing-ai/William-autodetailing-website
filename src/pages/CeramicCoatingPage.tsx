import { useState } from 'react';
import { Check, Minus, Clock, Shield, Droplets, Sun, Zap, Star, ChevronDown, ChevronUp } from 'lucide-react';
import { packages, ceramicComparisonRows } from '../data/packages';
import { BUSINESS_NAME, GOOGLE_RATING, GOOGLE_REVIEW_COUNT } from '../constants';
import { useLeadModal } from '../context/LeadModalContext';
import useDocumentMeta from '../hooks/useDocumentMeta';

type GroupedRows<T> = { name: string; rows: T[] }[];
function groupRows<T extends { group?: string }>(rows: T[]): GroupedRows<T> {
  const groups: GroupedRows<T> = [];
  rows.forEach((row) => {
    const name = row.group ?? '';
    const existing = groups.find((g) => g.name === name);
    if (existing) existing.rows.push(row);
    else groups.push({ name, rows: [row] });
  });
  return groups;
}

const benefits = [
  {
    icon: Shield,
    title: 'Long-Term Protection',
    description: 'Guard against bird droppings, bug splatter, UV rays, and environmental contamination for years, not months.',
  },
  {
    icon: Droplets,
    title: 'Hydrophobic Surface',
    description: 'Water beads and rolls off, taking dirt with it. Your car stays cleaner for longer and washes in minutes.',
  },
  {
    icon: Sun,
    title: 'UV & Heat Resistance',
    description: "Florida's intense sun fades paint fast. Ceramic coating blocks UV radiation and prevents oxidation.",
  },
  {
    icon: Zap,
    title: 'Enhanced Gloss & Clarity',
    description: 'Adds incredible depth and mirror-like shine to your paint, making your car look better than the day you bought it.',
  },
];

const faqs = [
  {
    q: 'How long does ceramic coating last?',
    a: 'Our Tier 1 package provides 2–3 years of protection, while Tier 2 lasts 4–5 years. Proper maintenance significantly extends longevity.',
  },
  {
    q: 'Does my car need to be prepped before coating?',
    a: 'Yes — and we handle all prep. This includes a full exterior detail, clay bar treatment, iron removal, and a paint enhancement polish to maximize coating bonding and gloss.',
  },
  {
    q: 'Can ceramic coating be applied to a new car?',
    a: 'Absolutely. In fact, new cars are ideal candidates. Factory paint is often contaminated from transport. We decontaminate, polish, and coat for ultimate protection from day one.',
  },
  {
    q: 'What about the windshield coating?',
    a: 'Our $149 windshield ceramic coating provides 18 months of hydrophobic protection, dramatically improving visibility during rain and making it easier to clean.',
  },
  {
    q: 'Do I need to maintain a ceramic-coated vehicle differently?',
    a: 'Maintenance is actually easier! Avoid automatic car washes with brushes. Hand washing or touchless washing is best. A maintenance kit is included with our Tier 1 & Tier 2 packages.',
  },
];

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map(f => ({
    '@type': 'Question',
    name: f.q,
    acceptedAnswer: { '@type': 'Answer', text: f.a },
  })),
};

export default function CeramicCoatingPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [mobilePkgIdx, setMobilePkgIdx] = useState(0);
  const { openModal } = useLeadModal();

  useDocumentMeta({
    title: `Ceramic Coating Miami — 2–5 Year Paint Protection | ${BUSINESS_NAME}`,
    description: `Professional ceramic coating in Miami-Dade. 2–5 year hydrophobic paint protection with full prep included. UV defense, mirror finish, self-cleaning surface. ${GOOGLE_RATING} stars · ${GOOGLE_REVIEW_COUNT}+ reviews. We come to you.`,
    canonical: '/ceramic-coating',
  });

  const ceramicPackages = packages.filter(p => p.isCeramic);
  const groups = groupRows(ceramicComparisonRows);
  // column order: Tier 1, Tier 2, Windshield
  const cols = ceramicPackages;

  return (
    <div className="bg-charcoal-950 text-white pt-24 md:pt-32">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      {/* Hero */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 opacity-25">
            <img
              src="/images/optimized/ceramic-hero.webp"
              srcSet="/images/optimized/ceramic-hero-480.webp 480w, /images/optimized/ceramic-hero-768.webp 768w, /images/optimized/ceramic-hero.webp 1200w"
              sizes="100vw"
              alt="Ceramic coated car with mirror finish"
              className="w-full h-full object-cover"
              width={1200}
              height={800}
              loading="eager"
              decoding="async"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950 via-charcoal-950/75 to-charcoal-950/50" />
        </div>

        <div className="decorative-blur absolute top-1/3 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-accent/10 rounded-full blur-[150px]" />

        <div className="relative z-10 container-custom text-center py-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-charcoal-800/80 border border-accent/30 mb-8">
            <Shield className="w-4 h-4 text-accent" />
            <span className="text-charcoal-200 text-sm font-medium">Professional Ceramic Coating</span>
          </div>

          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
            Protect Your Paint.
            <span className="block gradient-text">For Years.</span>
          </h1>

          <p className="text-lg md:text-xl text-charcoal-300 max-w-2xl mx-auto mb-8">
            {BUSINESS_NAME} applies professional-grade ceramic coatings that defend your vehicle against Florida's harsh sun, salt air, and daily road hazards — while delivering a jaw-dropping mirror finish.
          </p>

          <div className="flex items-center justify-center gap-2 mb-10">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-5 h-5 text-gold fill-gold" />
            ))}
            <span className="text-charcoal-300 text-sm ml-1">{GOOGLE_RATING} · {GOOGLE_REVIEW_COUNT} Google Reviews</span>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button onClick={() => openModal('Tier 1 Ceramic Coating')} className="btn-primary text-lg px-8 py-4">
              Book Ceramic Coating
            </button>
            <a href="#packages" className="btn-secondary text-lg px-8 py-4">
              See Pricing
            </a>
          </div>
        </div>
      </section>

      {/* Why Ceramic */}
      <section className="section-padding bg-charcoal-950 relative">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,212,255,0.05),transparent_60%)]" />
        <div className="container-custom relative z-10">
          <div className="text-center mb-14">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-4">
              Why <span className="gradient-text">Ceramic Coating?</span>
            </h2>
            <p className="text-charcoal-400 text-lg max-w-xl mx-auto">
              Standard wax lasts weeks. Our ceramic coatings last years — with better protection and a finish that turns heads.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit) => (
              <div key={benefit.title} className="bg-charcoal-800/50 border border-charcoal-700 rounded-2xl p-6 hover:border-accent/40 transition-colors">
                <div className="w-12 h-12 rounded-xl bg-accent/15 flex items-center justify-center mb-4">
                  <benefit.icon className="w-6 h-6 text-accent" />
                </div>
                <h3 className="font-bold text-white mb-2">{benefit.title}</h3>
                <p className="text-charcoal-400 text-sm leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Packages */}
      <section id="packages" className="section-padding bg-charcoal-900">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-4">
              Ceramic Coating <span className="gradient-text">Packages</span>
            </h2>
            <p className="text-charcoal-300 max-w-xl mx-auto">
              All paint coating packages include full prep — detail, clay bar, iron removal &amp; polish.
            </p>
          </div>

          {/* ── MOBILE: one-package-at-a-time card view ── */}
          <div className="sm:hidden mb-8">
            <div className="flex bg-charcoal-800/60 rounded-xl p-1 border border-charcoal-700 gap-1 mb-4">
              {cols.map((pkg, i) => (
                <button
                  key={pkg.id}
                  onClick={() => setMobilePkgIdx(i)}
                  className={`flex-1 py-2 rounded-lg text-xs font-semibold transition-all leading-tight text-center ${
                    mobilePkgIdx === i
                      ? 'bg-charcoal-900 text-white border border-charcoal-600 shadow'
                      : 'text-charcoal-400 hover:text-charcoal-200'
                  }`}
                >
                  {pkg.name}
                </button>
              ))}
            </div>

            {cols.map((pkg, pkgIdx) => {
              const isHighlight = pkgIdx === 1;
              if (pkgIdx !== mobilePkgIdx) return null;
              return (
                <div
                  key={pkg.id}
                  className={`rounded-2xl border p-5 ${
                    isHighlight
                      ? 'border-accent/50 bg-accent/[0.04]'
                      : 'border-charcoal-700 bg-charcoal-800/40'
                  }`}
                >
                  {isHighlight && (
                    <div className="inline-flex items-center gap-1.5 mb-3 px-2.5 py-1 bg-charcoal-800 border border-accent/50 rounded-full">
                      <Star className="w-3 h-3 text-accent fill-accent" />
                      <span className="text-accent text-xs font-bold tracking-wider">BEST VALUE</span>
                    </div>
                  )}
                  <h3 className="font-display font-bold text-xl text-white mb-1">{pkg.name}</h3>
                  <p className="text-charcoal-300 text-sm mb-4">{pkg.tagline}</p>
                  {pkg.duration && (
                    <div className="flex items-center gap-1.5 text-charcoal-300 text-sm mb-3">
                      <Clock className="w-4 h-4 text-accent" />
                      {pkg.duration}
                    </div>
                  )}
                  {pkg.note && (
                    <p className="text-charcoal-500 text-xs italic mb-4 leading-snug">{pkg.note}</p>
                  )}
                  <div className="space-y-3 mb-5">
                    {groups.map((group) => (
                      <div key={group.name}>
                        <p className="text-xs font-bold uppercase tracking-wider text-charcoal-500 mb-1.5 mt-2">{group.name}</p>
                        <div className="space-y-1.5">
                          {group.rows.map((row) => {
                            const rowCols = [row.t1, row.t2, row.windshield];
                            const included = rowCols[pkgIdx];
                            return (
                              <div key={row.label} className="flex items-center gap-2">
                                {included ? (
                                  <Check className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0" />
                                ) : (
                                  <Minus className="w-3.5 h-3.5 text-charcoal-700 flex-shrink-0" />
                                )}
                                <span className={`text-sm ${included ? 'text-charcoal-300' : 'text-charcoal-600'}`}>
                                  {row.label}
                                </span>
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    ))}
                  </div>
                  <button
                    onClick={() => openModal(pkg.name)}
                    className={`w-full py-3 rounded-xl text-sm font-bold transition-all ${
                      isHighlight
                        ? 'bg-accent text-charcoal-950 hover:bg-accent-light shadow-md shadow-accent/20'
                        : 'bg-charcoal-700 text-white hover:bg-charcoal-600'
                    }`}
                  >
                    Book {pkg.name}
                  </button>
                </div>
              );
            })}
          </div>

          {/* ── DESKTOP: comparison table ── */}
          <div className="hidden sm:block overflow-x-auto -mx-4 sm:mx-0 custom-scrollbar">
            <div className="min-w-[620px] px-4 sm:px-0">
              {/* Column headers — pt-6 gives room for the badge above */}
              <div className="grid grid-cols-[minmax(170px,1fr)_repeat(3,minmax(0,1fr))] pt-6">
                <div />
                {cols.map((pkg, idx) => {
                  const isHighlight = idx === 1;
                  return (
                    <div
                      key={pkg.id}
                      className={`relative flex flex-col items-center text-center px-3 pt-8 pb-5 rounded-t-2xl ${
                        isHighlight
                          ? 'bg-gradient-to-b from-accent/8 to-charcoal-800 border-x-2 border-t-2 border-accent/50'
                          : 'bg-charcoal-800/60 border-x border-t border-charcoal-700'
                      }`}
                    >
                      {isHighlight && (
                        <div className="absolute -top-4 left-1/2 -translate-x-1/2 flex items-center gap-1 px-3 py-1 bg-charcoal-800 border border-accent/50 text-accent text-xs font-bold rounded-full whitespace-nowrap">
                          <Star className="w-3 h-3 fill-accent" />
                          BEST VALUE
                        </div>
                      )}
                      <p className="font-display font-bold text-base md:text-lg text-white mb-1">{pkg.name}</p>
                      <p className="text-charcoal-400 text-xs mb-3 leading-snug">{pkg.tagline}</p>
                      {pkg.duration && (
                        <div className="flex items-center gap-1 text-charcoal-400 text-xs mb-3">
                          <Clock className="w-3 h-3 text-accent" />
                          {pkg.duration}
                        </div>
                      )}
                      {pkg.note && (
                        <p className="text-charcoal-500 text-xs italic mb-2 px-1 leading-snug">{pkg.note}</p>
                      )}
                      <button
                        onClick={() => openModal(pkg.name)}
                        className={`w-full py-2 rounded-lg text-xs font-bold transition-all mt-auto ${
                          isHighlight
                            ? 'bg-accent text-charcoal-950 hover:bg-accent-light shadow-md shadow-accent/20'
                            : 'bg-charcoal-700 text-white hover:bg-charcoal-600'
                        }`}
                      >
                        Book
                      </button>
                    </div>
                  );
                })}
              </div>

              {/* Feature rows */}
              {groups.map((group, gi) => (
                <div key={group.name}>
                  <div className="grid grid-cols-[minmax(170px,1fr)_repeat(3,minmax(0,1fr))]">
                    <div className="py-2.5 px-3 bg-charcoal-800 border-y border-l border-charcoal-700">
                      <span className="text-xs font-bold uppercase tracking-wider text-charcoal-400">{group.name}</span>
                    </div>
                    {cols.map((pkg, idx) => {
                      const isHighlight = idx === 1;
                      return (
                        <div
                          key={pkg.id}
                          className={`py-2.5 border-y ${
                            isHighlight
                              ? 'bg-charcoal-800/80 border-x-2 border-accent/50'
                              : 'bg-charcoal-800/40 border-x border-charcoal-700'
                          }`}
                        />
                      );
                    })}
                  </div>

                  {group.rows.map((row, ri) => {
                    const isLastInGroup = ri === group.rows.length - 1;
                    const isLastGroup = gi === groups.length - 1;
                    const isVeryLast = isLastInGroup && isLastGroup;
                    const included = [row.t1, row.t2, row.windshield];
                    return (
                      <div
                        key={row.label}
                        className="grid grid-cols-[minmax(170px,1fr)_repeat(3,minmax(0,1fr))]"
                      >
                        <div
                          className={`flex items-center px-3 py-3 bg-charcoal-950/60 border-l border-b border-charcoal-700/60 ${
                            isVeryLast ? 'rounded-bl-xl' : ''
                          }`}
                        >
                          <span className="text-sm text-charcoal-300">{row.label}</span>
                        </div>
                        {included.map((inc, ci) => {
                          const isHighlight = ci === 1;
                          const isLastCol = ci === included.length - 1;
                          return (
                            <div
                              key={ci}
                              className={`flex items-center justify-center py-3 border-b ${
                                isHighlight
                                  ? 'bg-accent/[0.03] border-x-2 border-accent/50'
                                  : 'bg-charcoal-900/40 border-x border-charcoal-700/60'
                              } ${isVeryLast && isLastCol ? 'rounded-br-xl' : ''}`}
                            >
                              {inc ? (
                                <Check className="w-4 h-4 text-emerald-400" />
                              ) : (
                                <Minus className="w-4 h-4 text-charcoal-700" />
                              )}
                            </div>
                          );
                        })}
                      </div>
                    );
                  })}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="section-padding bg-charcoal-950">
        <div className="container-custom">
          <div className="text-center mb-14">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-4">
              Our <span className="gradient-text">Coating Process</span>
            </h2>
            <p className="text-charcoal-300 max-w-xl mx-auto">
              A proper ceramic coating requires meticulous preparation. Here's exactly what we do.
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-4">
            {[
              { step: '01', title: 'Full Exterior Detail', desc: 'Complete wash, decontamination, and drying to create a clean surface for prep work.' },
              { step: '02', title: 'Clay Bar Treatment', desc: 'Removes bonded surface contaminants that washing alone can\'t remove.' },
              { step: '03', title: 'Iron Removal', desc: 'Chemical decontamination to eliminate iron particles embedded in the clear coat.' },
              { step: '04', title: 'Paint Enhancement Polish', desc: 'Single-stage polishing to remove light swirls and maximize gloss before coating.' },
              { step: '05', title: 'Ceramic Coating Application', desc: 'Professional-grade coating applied in a controlled, panel-by-panel process for even coverage.' },
              { step: '06', title: 'Cure & Inspection', desc: 'Allow proper flash and cure time, followed by a thorough inspection of every coated surface.' },
            ].map((item) => (
              <div key={item.step} className="flex gap-5 items-start bg-charcoal-800/50 border border-charcoal-700 rounded-xl p-5 hover:border-accent/40 transition-colors">
                <div className="w-12 h-12 rounded-xl bg-accent/15 flex items-center justify-center flex-shrink-0">
                  <span className="font-bold text-accent text-sm">{item.step}</span>
                </div>
                <div>
                  <h4 className="font-bold text-white mb-1">{item.title}</h4>
                  <p className="text-charcoal-300 text-sm">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding bg-charcoal-900">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-4">
              Frequently Asked <span className="gradient-text">Questions</span>
            </h2>
          </div>

          <div className="max-w-2xl mx-auto space-y-3">
            {faqs.map((faq, i) => (
              <div key={i} className="bg-charcoal-800/50 border border-charcoal-700 rounded-xl overflow-hidden">
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between p-5 text-left"
                >
                  <span className="font-semibold text-white">{faq.q}</span>
                  {openFaq === i
                    ? <ChevronUp className="w-5 h-5 text-accent flex-shrink-0" />
                    : <ChevronDown className="w-5 h-5 text-charcoal-400 flex-shrink-0" />
                  }
                </button>
                {openFaq === i && (
                  <div className="px-5 pb-5 text-charcoal-300 text-sm leading-relaxed border-t border-charcoal-700 pt-4">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-charcoal-950 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-accent/10 via-transparent to-primary-500/10" />
        <div className="container-custom relative z-10 text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-4">
            Ready for a Showroom Finish <span className="gradient-text">That Lasts?</span>
          </h2>
          <p className="text-charcoal-300 text-lg mb-8 max-w-xl mx-auto">
            Book your ceramic coating consultation today. We come to you anywhere in Miami-Dade County.
          </p>
          <button onClick={() => openModal('Tier 1 Ceramic Coating')} className="btn-primary text-lg px-10 py-4">
            Book Ceramic Coating Now
          </button>
        </div>
      </section>
    </div>
  );
}

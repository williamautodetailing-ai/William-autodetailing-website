import { useState } from 'react';
import { Check, Minus, Clock, Star, Sparkles, ChevronDown, ChevronUp, Car, Users, Trophy } from 'lucide-react';
import { packages, detailComparisonRows } from '../data/packages';
import { BUSINESS_NAME, GOOGLE_RATING, GOOGLE_REVIEW_COUNT } from '../constants';
import { useLeadModal } from '../context/LeadModalContext';
import useDocumentMeta from '../hooks/useDocumentMeta';

const detailPackages = packages.filter((p) => !p.isCeramic);

const whyUs = [
  {
    icon: Car,
    title: 'We Come to You',
    description: 'No drop-offs, no waiting rooms. We detail at your home, office, or apartment anywhere in Miami-Dade.',
  },
  {
    icon: Sparkles,
    title: 'Professional-Grade Results',
    description: 'Professional detailing products and equipment — not the stuff you find at AutoZone.',
  },
  {
    icon: Users,
    title: 'Trusted by Hundreds',
    description: `${GOOGLE_REVIEW_COUNT}+ five-star Google reviews from Miami-Dade customers who keep coming back.`,
  },
  {
    icon: Trophy,
    title: "Miami's Highest Rated",
    description: 'A perfect 5.0 rating across over a hundred verified reviews. We stand behind every detail.',
  },
];

const faqs = [
  {
    q: 'Which package is right for me?',
    a: "The Signature Detail is great for maintenance every 4–6 weeks. The Pristine Detail is our most popular — ideal for a thorough refresh or anyone who hasn't had a detail in a few months. The Perfect Detail is for pre-sale prep, post-road-trip recovery, or when you want the absolute best.",
  },
  {
    q: 'How often should I get my car detailed?',
    a: 'For most people, a Signature Detail every 4–6 weeks or a Pristine Detail every 2–3 months keeps the vehicle in great shape. The Perfect Detail is typically an annual or pre-event service.',
  },
  {
    q: "What's included in the pricing?",
    a: "All pricing shown is for the full service listed. No hidden fees — we confirm any applicable travel fees when you book if you're more than 15 miles from Doral.",
  },
  {
    q: 'Can I add services on top of a package?',
    a: 'Yes — any of our add-ons (engine bay, headlight restoration, odor elimination, etc.) can be added to any package. Just mention it when booking.',
  },
  {
    q: 'How long does each service take?',
    a: "The Signature Detail takes about 2 hours, the Pristine Detail about 3 hours, and the Perfect Detail 4–5 hours. We'll let you know an estimated window when you book.",
  },
  {
    q: 'Do you need access to power and water?',
    a: 'No. We are fully self-contained — our mobile unit carries everything we need, including our own water supply and power.',
  },
];

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

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map(f => ({
    '@type': 'Question',
    name: f.q,
    acceptedAnswer: { '@type': 'Answer', text: f.a },
  })),
};

export default function DetailPackagesPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [mobilePkgIdx, setMobilePkgIdx] = useState(1);
  const { openModal } = useLeadModal();
  const groups = groupRows(detailComparisonRows);

  useDocumentMeta({
    title: `Detail Packages — Mobile Car Detailing Miami | ${BUSINESS_NAME}`,
    description: `Compare our 3 mobile car detailing packages — Signature, Pristine & Perfect Detail. Interior & exterior included. Professional products, eco-friendly, fully insured. We come to you in Miami-Dade.`,
    canonical: '/detail-packages',
  });

  return (
    <div className="bg-charcoal-950 text-white pt-24 md:pt-32">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      {/* Hero */}
      <section className="relative py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_60%_50%,rgba(59,130,246,0.12),transparent_65%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_80%,rgba(0,212,255,0.06),transparent_55%)]" />

        <div className="relative z-10 container-custom">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-charcoal-800/80 border border-charcoal-700 mb-8">
              <span className="w-2 h-2 rounded-full bg-accent" />
              <span className="text-charcoal-200 text-sm font-medium">Mobile Auto Detailing · Miami-Dade County</span>
            </div>

            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Detail Packages
              <span className="block gradient-text">Built for Every Budget</span>
            </h1>

            <p className="text-lg md:text-xl text-charcoal-300 mb-8 leading-relaxed">
              Three tiers of professional mobile detailing — from a thorough maintenance wash to our most complete paint correction and deep-clean experience. All performed at your location.
            </p>

            <div className="flex items-center gap-3 mb-10">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 text-gold fill-gold" />
              ))}
              <span className="text-charcoal-300 text-sm">
                {GOOGLE_RATING} · {GOOGLE_REVIEW_COUNT} Google Reviews
              </span>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button onClick={() => openModal()} className="btn-primary text-lg px-8 py-4">
                Book Now
              </button>
              <a href="#packages" className="btn-secondary text-lg px-8 py-4">
                Compare Packages
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section id="packages" className="section-padding bg-charcoal-900">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-4">
              Compare <span className="gradient-text">Packages</span>
            </h2>
            <p className="text-charcoal-300 max-w-xl mx-auto">
              Every package covers interior and exterior. Pricing shown for sedan — SUV/truck rates in the table.
            </p>
          </div>

          {/* ── MOBILE: one-package-at-a-time card view ── */}
          <div className="sm:hidden mb-8">
            <div className="flex bg-charcoal-800/60 rounded-xl p-1 border border-charcoal-700 gap-1 mb-4">
              {detailPackages.map((pkg, i) => (
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

            {detailPackages.map((pkg, pkgIdx) => {
              const isPopular = !!pkg.popular;
              if (pkgIdx !== mobilePkgIdx) return null;
              return (
                <div
                  key={pkg.id}
                  className={`rounded-2xl border p-5 ${
                    isPopular
                      ? 'border-accent/50 bg-accent/[0.04]'
                      : 'border-charcoal-700 bg-charcoal-800/40'
                  }`}
                >
                  {isPopular && (
                    <div className="inline-flex items-center gap-1.5 mb-3 px-2.5 py-1 bg-charcoal-800 border border-accent/50 rounded-full">
                      <Star className="w-3 h-3 text-accent fill-accent" />
                      <span className="text-accent text-xs font-bold tracking-wider">MOST POPULAR</span>
                    </div>
                  )}
                  <h3 className="font-display font-bold text-xl text-white mb-1">{pkg.name}</h3>
                  <p className="text-charcoal-300 text-sm mb-4">{pkg.tagline}</p>
                  {pkg.duration && (
                    <div className="flex items-center gap-1.5 text-charcoal-300 text-sm mb-4">
                      <Clock className="w-4 h-4 text-accent" />
                      {pkg.duration}
                    </div>
                  )}
                  <div className="space-y-3 mb-5">
                    {groups.map((group) => (
                      <div key={group.name}>
                        <p className="text-xs font-bold uppercase tracking-wider text-charcoal-500 mb-1.5 mt-2">{group.name}</p>
                        <div className="space-y-1.5">
                          {group.rows.map((row) => {
                            const cols = [row.signature, row.pristine, row.perfect];
                            const included = cols[pkgIdx];
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
                      isPopular
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
              <div className="grid grid-cols-[minmax(170px,1fr)_repeat(3,minmax(0,1fr))] mb-0 pt-6">
                <div />
                {detailPackages.map((pkg) => {
                  const isPopular = !!pkg.popular;
                  return (
                    <div
                      key={pkg.id}
                      className={`relative flex flex-col items-center text-center px-3 pt-8 pb-5 rounded-t-2xl ${
                        isPopular
                          ? 'bg-gradient-to-b from-accent/8 to-charcoal-800 border-x-2 border-t-2 border-accent/50'
                          : 'bg-charcoal-800/60 border-x border-t border-charcoal-700'
                      }`}
                    >
                      {isPopular && (
                        <div className="absolute -top-4 left-1/2 -translate-x-1/2 flex items-center gap-1 px-3 py-1 bg-charcoal-800 border border-accent/50 text-accent text-xs font-bold rounded-full whitespace-nowrap">
                          <Star className="w-3 h-3 fill-accent" />
                          MOST POPULAR
                        </div>
                      )}
                      <p className="font-display font-bold text-base md:text-lg text-white mb-1">
                        {pkg.name}
                      </p>
                      <p className="text-charcoal-400 text-xs mb-3 leading-snug">{pkg.tagline}</p>
                      {pkg.duration && (
                        <div className="flex items-center gap-1 text-charcoal-400 text-xs mb-3">
                          <Clock className="w-3 h-3 text-accent" />
                          {pkg.duration}
                        </div>
                      )}
                      <button
                        onClick={() => openModal(pkg.name)}
                        className={`w-full py-2 rounded-lg text-xs font-bold transition-all ${
                          isPopular
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
                  {/* Group header */}
                  <div className="grid grid-cols-[minmax(170px,1fr)_repeat(3,minmax(0,1fr))]">
                    <div className="py-2.5 px-3 bg-charcoal-800 border-y border-l border-charcoal-700">
                      <span className="text-xs font-bold uppercase tracking-wider text-charcoal-400">{group.name}</span>
                    </div>
                    {detailPackages.map((pkg) => {
                      const isPopular = !!pkg.popular;
                      return (
                        <div
                          key={pkg.id}
                          className={`py-2.5 border-y ${
                            isPopular
                              ? 'bg-charcoal-800/80 border-x-2 border-accent/50'
                              : 'bg-charcoal-800/40 border-x border-charcoal-700'
                          }`}
                        />
                      );
                    })}
                  </div>

                  {/* Feature rows within group */}
                  {group.rows.map((row, ri) => {
                    const isLastInGroup = ri === group.rows.length - 1;
                    const isLastGroup = gi === groups.length - 1;
                    const isVeryLast = isLastInGroup && isLastGroup;
                    const cols = [row.signature, row.pristine, row.perfect];
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
                        {cols.map((included, ci) => {
                          const isPopular = !!detailPackages[ci]?.popular;
                          const isLastCol = ci === cols.length - 1;
                          return (
                            <div
                              key={ci}
                              className={`flex items-center justify-center py-3 border-b ${
                                isPopular
                                  ? 'bg-accent/[0.03] border-x-2 border-accent/50'
                                  : 'bg-charcoal-900/40 border-x border-charcoal-700/60'
                              } ${isVeryLast && isLastCol ? 'rounded-br-xl' : ''}`}
                            >
                              {included ? (
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

          <p className="text-center text-charcoal-500 text-sm mt-8">
            Need something extra?{' '}
            <a href="/add-ons" className="text-accent hover:underline">
              Browse add-on services →
            </a>
          </p>
        </div>
      </section>

      {/* Why Us */}
      <section className="section-padding bg-charcoal-950 relative">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,212,255,0.04),transparent_60%)]" />
        <div className="container-custom relative z-10">
          <div className="text-center mb-14">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-4">
              Why Choose <span className="gradient-text">{BUSINESS_NAME}?</span>
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyUs.map((item) => (
              <div
                key={item.title}
                className="bg-charcoal-800/50 border border-charcoal-700 rounded-2xl p-6 hover:border-accent/40 transition-colors"
              >
                <div className="w-12 h-12 rounded-xl bg-accent/15 flex items-center justify-center mb-4">
                  <item.icon className="w-6 h-6 text-accent" />
                </div>
                <h3 className="font-bold text-white mb-2">{item.title}</h3>
                <p className="text-charcoal-300 text-sm leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What to Expect */}
      <section className="section-padding bg-charcoal-900">
        <div className="container-custom">
          <div className="text-center mb-14">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-4">
              What to <span className="gradient-text">Expect</span>
            </h2>
            <p className="text-charcoal-300 max-w-xl mx-auto">
              Every detail is performed at your location, from start to finish.
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-4">
            {[
              { step: '01', title: 'Book in Under 2 Minutes', desc: "Fill out our quick form with your vehicle info and preferred time. We'll confirm availability and any applicable travel fee." },
              { step: '02', title: 'We Arrive at Your Location', desc: 'Our fully equipped mobile unit arrives at your home, office, or apartment with everything needed — no hookups required.' },
              { step: '03', title: 'Exterior First', desc: 'Wheels, tires, and bodywork are washed, decontaminated, and protected according to your package.' },
              { step: '04', title: 'Interior Deep Clean', desc: 'Vacuuming, surface wipe-down, glass, and any package-specific treatments (shampoo, leather conditioning, stain removal).' },
              { step: '05', title: 'Final Inspection', desc: 'We walk the vehicle and address any missed spots before we pack up. You get a freshly detailed car without leaving your driveway.' },
            ].map((item) => (
              <div key={item.step} className="flex gap-5 items-start bg-charcoal-800/50 border border-charcoal-700 rounded-xl p-5 hover:border-accent/40 transition-colors">
                <div className="w-12 h-12 rounded-xl bg-accent/15 flex items-center justify-center flex-shrink-0">
                  <span className="font-bold text-accent text-sm">{item.step}</span>
                </div>
                <div>
                  <h4 className="font-bold text-white mb-1">{item.title}</h4>
                  <p className="text-charcoal-300 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding bg-charcoal-950">
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
                  className="w-full flex items-center justify-between p-5 text-left gap-4"
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
      <section className="py-20 bg-charcoal-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-accent/10 via-transparent to-primary-500/10" />
        <div className="container-custom relative z-10 text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-4">
            Ready for a <span className="gradient-text">Spotless Car?</span>
          </h2>
          <p className="text-charcoal-300 text-lg mb-8 max-w-xl mx-auto">
            Book in minutes. We come to you. Available 7 days a week across Miami-Dade County.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button onClick={() => openModal()} className="btn-primary text-lg px-10 py-4">
              Book Your Detail Now
            </button>
            <a href="/ceramic-coating" className="btn-secondary text-lg px-8 py-4">
              View Ceramic Coatings
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

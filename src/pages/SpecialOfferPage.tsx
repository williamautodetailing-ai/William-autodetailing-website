import { Phone, Star, Check, ArrowRight, Instagram } from 'lucide-react';
import QuoteWizard from '../components/QuoteWizard';
import SEO from '../components/SEO';
import { useReveal } from '../hooks/useReveal';
import { SIGNATURE_199_SPECIAL as OFFER } from '../data/offers';
import {
  BUSINESS_NAME, PHONE, INSTAGRAM_URL, GOOGLE_RATING, GOOGLE_REVIEW_COUNT,
} from '../constants';

const telHref = `tel:${PHONE.replace(/\D/g, '')}`;

const STEPS = [
  { title: 'Claim your price', desc: 'Pick your vehicle size and lock in the special in under 60 seconds.' },
  { title: 'We come to you', desc: 'Fully equipped, right to your driveway — no drop-offs, no waiting rooms.' },
  { title: 'Drive a head-turner', desc: 'Showroom-level results, every time, backed by our guarantee.' },
];

const PERKS = [
  { label: 'Fully Mobile', sub: 'All of Miami-Dade' },
  { label: '$1M Insured', sub: 'Your car is protected' },
  { label: `${GOOGLE_RATING} Rated`, sub: `${GOOGLE_REVIEW_COUNT}+ reviews` },
  { label: 'No Payment to Book', sub: 'Pay after you inspect' },
];

const PRICES = [
  { label: 'Sedan / Coupe', price: OFFER.pricing.sedan },
  { label: 'SUV / Truck', price: OFFER.pricing.suv },
];

// Landing page in the home page's style, with the booking wizard kept in the hero. No site nav, to reduce exits.
export default function SpecialOfferPage() {
  useReveal();

  const scrollToQuote = () =>
    document.getElementById('quote')?.scrollIntoView({ behavior: 'smooth', block: 'start' });

  return (
    <div className="min-h-screen bg-charcoal-950 text-white">
      <SEO
        title={`$${OFFER.pricing.sedan} Signature Detail Special — Mobile Detailing Miami | ${BUSINESS_NAME}`}
        description={`Signature Detail + upgraded windshield sealant + engine bay detail. $${OFFER.pricing.sedan} sedans, $${OFFER.pricing.suv} SUVs & trucks. We come to you anywhere in Miami-Dade. ${GOOGLE_RATING}★ · ${GOOGLE_REVIEW_COUNT}+ reviews.`}
        canonical="/199-special"
      />

      {/* Minimal top bar */}
      <header className="absolute top-0 inset-x-0 z-30">
        <div className="container-custom flex items-center justify-between h-24 md:h-32">
          <img
            src="/images/optimized/williams-logo.webp"
            alt={BUSINESS_NAME}
            className="h-20 md:h-28 w-auto object-contain"
            width={256}
            height={256}
            fetchpriority="high"
          />
          <a
            href={telHref}
            className="sm:hidden flex items-center justify-center w-11 h-11 flex-shrink-0 rounded-full bg-accent text-charcoal-950"
            aria-label={`Call ${PHONE}`}
          >
            <Phone className="w-5 h-5" />
          </a>
          <a href={telHref} className="hidden sm:flex items-center gap-2 text-white font-semibold hover:text-accent transition-colors">
            <Phone className="w-5 h-5 text-accent" /> {PHONE}
          </a>
        </div>
      </header>

      {/* Hero + embedded wizard */}
      <section className="relative overflow-hidden lg:min-h-[78svh] lg:flex lg:items-end">
        <div className="absolute inset-x-0 top-0 h-[78svh] lg:h-full overflow-hidden">
          <img
            src="/images/optimized/hero-porsche.webp"
            srcSet="/images/optimized/hero-porsche-480.webp 480w, /images/optimized/hero-porsche-768.webp 768w, /images/optimized/hero-porsche.webp 1200w"
            sizes="100vw"
            alt="Mobile car detailing in Miami"
            className="hero-drift absolute inset-0 w-full h-full object-cover object-top"
            width={1200}
            height={1053}
            fetchpriority="high"
            decoding="async"
          />
          <div className="absolute inset-x-0 bottom-0 h-[80%] bg-gradient-to-t from-charcoal-950 via-charcoal-950/80 to-transparent" />
          <div className="hidden lg:block absolute inset-y-0 left-0 w-2/3 bg-gradient-to-r from-charcoal-950/80 to-transparent" />
        </div>

        <div className="relative z-10 container-custom w-full grid lg:grid-cols-2 gap-10 lg:gap-12 lg:items-end pt-36 pb-12 md:pb-16">
          {/* Left: the offer */}
          <div>
            <span data-reveal className="badge-gold mb-5">LIMITED-TIME SPECIAL</span>

            <h1
              data-reveal
              className="font-display font-bold text-white tracking-tight leading-[0.98] text-[clamp(40px,4.6vw,72px)] max-w-[16ch]"
            >
              Signature Detail + Upgrades
              <span className="block mt-1">Just ${OFFER.pricing.sedan}.</span>
            </h1>

            <p data-reveal style={{ ['--d' as string]: '80ms' }} className="mt-5 text-lg md:text-xl text-white/90 max-w-xl">
              Our full Signature Detail inside and out — plus an upgraded windshield sealant and an engine bay detail. Done in your driveway.
            </p>

            <div data-reveal style={{ ['--d' as string]: '120ms' }} className="mt-7 flex flex-wrap gap-3">
              {PRICES.map((p) => (
                <div key={p.label} className="inline-flex flex-col justify-center px-5 py-3 rounded-lg bg-charcoal-800">
                  <span className="text-xl font-bold text-gold tabular-nums leading-tight">${p.price}</span>
                  <span className="text-sm text-charcoal-300">{p.label}</span>
                </div>
              ))}
            </div>

            <div data-reveal style={{ ['--d' as string]: '160ms' }} className="mt-7 flex flex-col sm:flex-row sm:items-center gap-4">
              <button onClick={scrollToQuote} className="btn-primary text-lg px-8 py-4">
                Claim the ${OFFER.pricing.sedan} Special <ArrowRight className="w-5 h-5" />
              </button>
              <a href={telHref} className="inline-flex items-center justify-center gap-2 text-white font-semibold hover:text-accent transition-colors py-2">
                <Phone className="w-5 h-5 text-accent" /> Call {PHONE}
              </a>
            </div>

            <p data-reveal style={{ ['--d' as string]: '240ms' }} className="mt-7 flex flex-wrap items-center gap-x-3 gap-y-1 text-white/85 text-base">
              <span className="flex items-center gap-0.5" aria-hidden="true">
                {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 text-gold fill-gold" />)}
              </span>
              <span>{GOOGLE_RATING} from {GOOGLE_REVIEW_COUNT} Google reviews</span>
              <span aria-hidden="true">·</span>
              <span>No payment to book</span>
            </p>
          </div>

          {/* Right: quote wizard with the offer pre-loaded */}
          <div id="quote" className="scroll-mt-6">
            <div className="w-full max-w-lg mx-auto bg-charcoal-900 rounded-2xl shadow-2xl shadow-black/60 overflow-hidden">
              <div className="px-5 sm:px-6 py-4 border-b border-charcoal-800">
                <h2 className="font-display text-xl font-bold text-white tracking-tight">
                  Lock In Your ${OFFER.pricing.sedan} Detail
                </h2>
              </div>
              <QuoteWizard offer={OFFER} />
            </div>
          </div>
        </div>
      </section>

      {/* Trust perks */}
      <section className="bg-charcoal-900">
        <div className="container-custom grid grid-cols-2 lg:grid-cols-4 gap-6 py-10">
          {PERKS.map((p) => (
            <div key={p.label}>
              <p className="text-white font-semibold leading-tight">{p.label}</p>
              <p className="mt-1 text-charcoal-300 text-sm">{p.sub}</p>
            </div>
          ))}
        </div>
      </section>

      {/* What's included */}
      <section className="section-padding bg-charcoal-950">
        <div className="container-custom">
          <h2 data-reveal className="font-display text-4xl md:text-5xl font-bold text-white tracking-tight text-center mb-12">
            Everything in the ${OFFER.pricing.sedan} Special
          </h2>

          <div className="grid lg:grid-cols-5 gap-6">
            {/* Upgrades */}
            <div className="lg:col-span-2 space-y-6">
              {OFFER.upgrades.map((u) => (
                <div key={u.title} className="relative bg-charcoal-800 border border-gold/60 rounded-2xl p-6">
                  <span className="badge-gold absolute -top-3 right-5">INCLUDED</span>
                  <h3 className="text-lg font-bold text-white mb-2">{u.title}</h3>
                  <p className="text-charcoal-300 text-base leading-relaxed">{u.desc}</p>
                </div>
              ))}
            </div>

            {/* Base Signature Detail */}
            <div className="lg:col-span-3 bg-charcoal-800 rounded-2xl p-6 sm:p-8">
              <p className="text-charcoal-300 text-base mb-1">Plus the full</p>
              <h3 className="font-display text-2xl font-bold text-white mb-5">Signature Detail</h3>
              <ul className="grid sm:grid-cols-2 gap-x-6 gap-y-3">
                {OFFER.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm text-charcoal-300">
                    <Check className="w-4 h-4 text-gold flex-shrink-0 mt-0.5" />
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="section-padding bg-charcoal-900">
        <div className="container-custom">
          <h2 data-reveal className="font-display text-4xl md:text-5xl font-bold text-white tracking-tight text-center mb-12">
            Booked in 60 seconds. Detailed at your door.
          </h2>
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {STEPS.map((s) => (
              <div key={s.title} className="text-center bg-charcoal-800 rounded-2xl p-8">
                <h3 className="text-lg font-bold text-white mb-2">{s.title}</h3>
                <p className="text-charcoal-300 text-base leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Closing offer: same layout as ClosingCta, but the button returns to the wizard so the offer stays loaded */}
      <section className="bg-charcoal-950 lg:grid lg:grid-cols-2 lg:min-h-[80svh]">
        <img
          src="/images/optimized/work/exterior-detail-corvette-grand-sport.webp"
          alt="Silver Corvette Grand Sport after an exterior detail in Miami"
          loading="lazy"
          decoding="async"
          width={1000}
          height={1333}
          className="w-full h-[56svh] lg:h-full object-cover object-[40%_60%]"
        />

        <div className="container-custom lg:mx-0 lg:max-w-none flex items-center py-16 lg:px-16 xl:px-24">
          <div className="max-w-md">
            <h2 data-reveal className="font-display text-4xl md:text-5xl font-bold text-white tracking-tight">
              ${OFFER.pricing.sedan} sedans · ${OFFER.pricing.suv} SUVs & trucks
            </h2>
            <p data-reveal style={{ ['--d' as string]: '80ms' }} className="mt-4 text-lg text-charcoal-200">
              Signature Detail, upgraded windshield sealant and engine bay detail — no payment to book, satisfaction guaranteed.
            </p>
            <div data-reveal style={{ ['--d' as string]: '160ms' }} className="mt-8">
              <button onClick={scrollToQuote} className="btn-primary text-lg px-8 py-4">
                Claim the Special <ArrowRight className="w-5 h-5" />
              </button>
            </div>
            <a href={telHref} className="mt-5 inline-flex items-center gap-2 text-white hover:text-accent font-semibold transition-colors">
              <Phone className="w-4 h-4 text-accent" /> or call {PHONE}
            </a>
          </div>
        </div>
      </section>

      {/* Minimal footer */}
      <footer className="bg-charcoal-900">
        <div className="container-custom py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-charcoal-400 text-sm text-center sm:text-left">© {new Date().getFullYear()} {BUSINESS_NAME} · Mobile detailing across Miami-Dade</p>
          <div className="flex items-center gap-5">
            <a href={telHref} className="flex items-center gap-1.5 text-charcoal-300 hover:text-accent text-sm transition-colors">
              <Phone className="w-4 h-4" /> {PHONE}
            </a>
            <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-charcoal-300 hover:text-accent transition-colors">
              <Instagram className="w-5 h-5" />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

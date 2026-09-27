import { Phone, Star, MapPin, ShieldCheck, Car, Award, Clock, Check, ArrowRight, Instagram, Sparkles, Droplets, Wrench } from 'lucide-react';
import QuoteWizard from '../components/QuoteWizard';
import SEO from '../components/SEO';
import { SIGNATURE_199_SPECIAL as OFFER } from '../data/offers';
import {
  BUSINESS_NAME, PHONE, INSTAGRAM_URL, GOOGLE_RATING, GOOGLE_REVIEW_COUNT,
} from '../constants';

const telHref = `tel:${PHONE.replace(/\D/g, '')}`;

const UPGRADE_ICONS = [Droplets, Wrench];

const STEPS = [
  { icon: Phone, title: 'Claim your price', desc: 'Pick your vehicle size and lock in the special in under 60 seconds.' },
  { icon: Car, title: 'We come to you', desc: 'Fully equipped, right to your driveway — no drop-offs, no waiting rooms.' },
  { icon: Award, title: 'Drive a head-turner', desc: 'Showroom-level results, every time, backed by our guarantee.' },
];

const PERKS = [
  { icon: MapPin, label: 'Fully Mobile', sub: 'All of Miami-Dade' },
  { icon: ShieldCheck, label: '$1M Insured', sub: 'Your car is protected' },
  { icon: Star, label: `${GOOGLE_RATING} Rated`, sub: `${GOOGLE_REVIEW_COUNT}+ reviews` },
  { icon: Clock, label: 'No Payment to Book', sub: 'Pay after you inspect' },
];

export default function SpecialOfferPage() {
  const scrollToQuote = () =>
    document.getElementById('quote')?.scrollIntoView({ behavior: 'smooth', block: 'start' });

  return (
    <div className="min-h-screen bg-charcoal-950 text-white">
      <SEO
        title={`$${OFFER.pricing.sedan} Signature Detail Special — Mobile Detailing Miami | ${BUSINESS_NAME}`}
        description={`Signature Detail + upgraded windshield sealant + engine bay detail. $${OFFER.pricing.sedan} sedans, $${OFFER.pricing.suv} SUVs & trucks. We come to you anywhere in Miami-Dade. ${GOOGLE_RATING}★ · ${GOOGLE_REVIEW_COUNT}+ reviews.`}
        canonical="/199-special"
      />
      {/* Minimal top bar — no nav, reduce exits */}
      <header className="absolute top-0 inset-x-0 z-30">
        <div className="container-custom flex items-center justify-between h-20">
          <img
            src="/images/optimized/williams-logo.webp"
            alt={BUSINESS_NAME}
            className="h-14 w-auto object-contain"
            width={160}
            height={160}
            fetchpriority="high"
          />
          <a href={telHref} className="flex items-center gap-2 text-sm font-semibold text-white hover:text-accent transition-colors">
            <Phone className="w-4 h-4 text-accent" />
            <span className="hidden sm:inline">{PHONE}</span>
            <span className="sm:hidden">Call</span>
          </a>
        </div>
      </header>

      {/* HERO + embedded wizard */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/images/optimized/hero-porsche.webp"
            alt="Mobile car detailing in Miami"
            className="w-full h-full object-cover opacity-40"
            width={1200}
            height={1053}
            fetchpriority="high"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950 via-charcoal-950/80 to-charcoal-950/60" />
          <div className="absolute inset-0 bg-gradient-to-r from-charcoal-950/80 to-transparent" />
        </div>

        <div className="relative container-custom grid lg:grid-cols-2 gap-10 lg:gap-12 items-center pt-28 pb-14 lg:pt-32 lg:pb-20">
          {/* Left — offer */}
          <div className="animate-fade-in-up">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gold/15 border border-gold/40 mb-5">
              <Sparkles className="w-3.5 h-3.5 text-gold" />
              <span className="text-gold text-xs font-bold tracking-widest uppercase">Limited-Time Special</span>
            </div>

            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.05] mb-5">
              Signature Detail + Upgrades
              <span className="block gradient-text mt-1">Just ${OFFER.pricing.sedan}.</span>
            </h1>

            <p className="text-charcoal-300 text-lg mb-6 max-w-xl">
              Our full Signature Detail inside and out — plus an <span className="text-white font-medium">upgraded windshield sealant</span> and
              an <span className="text-white font-medium">engine bay detail</span>. Done in your driveway.
            </p>

            {/* Price cards */}
            <div className="grid grid-cols-2 gap-3 mb-6 max-w-md">
              <div className="bg-charcoal-900/80 border border-charcoal-700 rounded-xl px-4 py-3.5">
                <p className="text-charcoal-400 text-xs font-semibold uppercase tracking-wide">🚗 Sedan / Coupe</p>
                <p className="text-3xl font-bold gradient-text leading-tight mt-1">${OFFER.pricing.sedan}</p>
              </div>
              <div className="bg-charcoal-900/80 border border-charcoal-700 rounded-xl px-4 py-3.5">
                <p className="text-charcoal-400 text-xs font-semibold uppercase tracking-wide">🚙 SUV / Truck</p>
                <p className="text-3xl font-bold gradient-text leading-tight mt-1">${OFFER.pricing.suv}</p>
              </div>
            </div>

            <div className="flex items-center gap-2 mb-8 text-charcoal-300 text-sm">
              <span className="flex items-center gap-0.5">
                {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 text-gold fill-gold" />)}
              </span>
              <span className="font-semibold text-white">{GOOGLE_RATING}</span>
              <span>· {GOOGLE_REVIEW_COUNT} Google Reviews</span>
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <button onClick={scrollToQuote} className="btn-primary text-base py-4 px-7 justify-center">
                Claim the ${OFFER.pricing.sedan} Special <ArrowRight className="w-5 h-5" />
              </button>
              <a href={telHref} className="btn-secondary text-base py-4 px-7 justify-center">
                <Phone className="w-5 h-5" /> Call Now
              </a>
            </div>
          </div>

          {/* Right — embedded quote wizard, offer pre-loaded */}
          <div id="quote" className="scroll-mt-24">
            <div className="w-full max-w-lg mx-auto bg-charcoal-900 border border-charcoal-700 rounded-2xl shadow-2xl shadow-black/60 overflow-hidden">
              <div className="flex items-center gap-3 px-5 sm:px-6 py-4 border-b border-charcoal-800 bg-gradient-to-r from-charcoal-900 to-charcoal-800">
                <img
                  src="/images/optimized/williams-logo.webp"
                  alt={BUSINESS_NAME}
                  className="h-10 w-auto object-contain flex-shrink-0"
                  width={64}
                  height={64}
                />
                <div>
                  <p className="text-gold text-[10px] font-bold tracking-widest uppercase">Special Offer</p>
                  <h2 className="text-base sm:text-lg font-bold text-white leading-tight">
                    Lock In Your <span className="gradient-text">${OFFER.pricing.sedan} Detail</span>
                  </h2>
                </div>
              </div>
              <QuoteWizard offer={OFFER} />
            </div>
          </div>
        </div>
      </section>

      {/* Trust perks */}
      <section className="border-y border-charcoal-800 bg-charcoal-900/40">
        <div className="container-custom grid grid-cols-2 lg:grid-cols-4 gap-4 py-8">
          {PERKS.map(p => {
            const Icon = p.icon;
            return (
              <div key={p.label} className="flex items-center gap-3">
                <span className="flex items-center justify-center w-11 h-11 rounded-xl bg-accent/10 border border-accent/25 flex-shrink-0">
                  <Icon className="w-5 h-5 text-accent" />
                </span>
                <div>
                  <p className="text-white font-semibold text-sm leading-tight">{p.label}</p>
                  <p className="text-charcoal-400 text-xs">{p.sub}</p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* What's included */}
      <section className="container-custom py-16 lg:py-20">
        <div className="text-center mb-12">
          <p className="text-accent text-xs font-bold tracking-widest uppercase mb-2">What's Included</p>
          <h2 className="font-display text-3xl sm:text-4xl font-bold">Everything in the ${OFFER.pricing.sedan} Special</h2>
        </div>

        <div className="grid lg:grid-cols-5 gap-6">
          {/* Upgrades */}
          <div className="lg:col-span-2 space-y-4">
            {OFFER.upgrades.map((u, i) => {
              const Icon = UPGRADE_ICONS[i] ?? Sparkles;
              return (
                <div key={u.title} className="relative bg-gradient-to-br from-gold/10 to-charcoal-900 border border-gold/40 rounded-2xl p-6">
                  <span className="absolute -top-2.5 right-5 text-[10px] font-bold uppercase tracking-wide text-charcoal-950 bg-gold px-2 py-0.5 rounded-full">
                    Included
                  </span>
                  <Icon className="w-8 h-8 text-gold mb-3" />
                  <h3 className="text-lg font-bold text-white mb-1.5">{u.title}</h3>
                  <p className="text-charcoal-400 text-sm leading-relaxed">{u.desc}</p>
                </div>
              );
            })}
          </div>

          {/* Base Signature Detail */}
          <div className="lg:col-span-3 bg-charcoal-900 border border-charcoal-700 rounded-2xl p-6 sm:p-8">
            <p className="text-accent text-xs font-bold tracking-widest uppercase mb-1">Plus the full</p>
            <h3 className="text-2xl font-bold text-white mb-5">Signature Detail</h3>
            <ul className="grid sm:grid-cols-2 gap-x-6 gap-y-3">
              {OFFER.features.map(f => (
                <li key={f} className="flex items-start gap-2.5 text-charcoal-200 text-sm">
                  <Check className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                  <span>{f}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="container-custom pb-16 lg:pb-20">
        <div className="text-center mb-12">
          <p className="text-accent text-xs font-bold tracking-widest uppercase mb-2">How It Works</p>
          <h2 className="font-display text-3xl sm:text-4xl font-bold">Booked in 60 seconds. Detailed at your door.</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {STEPS.map((s, i) => {
            const Icon = s.icon;
            return (
              <div key={s.title} className="relative bg-charcoal-900 border border-charcoal-700 rounded-2xl p-6">
                <span className="absolute -top-3 -left-3 w-9 h-9 rounded-full bg-accent text-charcoal-950 font-bold flex items-center justify-center text-sm">{i + 1}</span>
                <Icon className="w-8 h-8 text-accent mb-4" />
                <h3 className="text-lg font-bold text-white mb-1.5">{s.title}</h3>
                <p className="text-charcoal-400 text-sm leading-relaxed">{s.desc}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative overflow-hidden border-t border-charcoal-800">
        <div className="absolute inset-0 bg-gradient-to-r from-gold/10 via-accent/5 to-transparent" />
        <div className="relative container-custom py-16 text-center">
          <h2 className="font-display text-3xl sm:text-4xl font-bold mb-3">
            ${OFFER.pricing.sedan} sedans · ${OFFER.pricing.suv} SUVs & trucks
          </h2>
          <p className="text-charcoal-300 mb-8 max-w-xl mx-auto">
            Signature Detail, upgraded windshield sealant and engine bay detail — no payment to book, satisfaction guaranteed.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <button onClick={scrollToQuote} className="btn-primary text-base py-4 px-8 justify-center">
              Claim the Special <ArrowRight className="w-5 h-5" />
            </button>
            <a href={telHref} className="btn-secondary text-base py-4 px-8 justify-center">
              <Phone className="w-5 h-5" /> {PHONE}
            </a>
          </div>
        </div>
      </section>

      {/* Minimal footer */}
      <footer className="border-t border-charcoal-800 bg-charcoal-950">
        <div className="container-custom py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-charcoal-500 text-sm">© {new Date().getFullYear()} {BUSINESS_NAME} · Mobile detailing across Miami-Dade</p>
          <div className="flex items-center gap-5">
            <a href={telHref} className="flex items-center gap-1.5 text-charcoal-300 hover:text-accent text-sm transition-colors">
              <Phone className="w-4 h-4" /> {PHONE}
            </a>
            <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" className="text-charcoal-300 hover:text-accent transition-colors">
              <Instagram className="w-5 h-5" />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

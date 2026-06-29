import { Phone, Star, MapPin, ShieldCheck, Car, Award, Clock, Check, ArrowRight, Instagram } from 'lucide-react';
import QuoteWizard from '../components/QuoteWizard';
import SEO from '../components/SEO';
import {
  BUSINESS_NAME, PHONE, INSTAGRAM_URL, GOOGLE_RATING, GOOGLE_REVIEW_COUNT,
} from '../constants';

const telHref = `tel:${PHONE.replace(/\D/g, '')}`;

const HERO_BULLETS = [
  'We come to your home, office, or driveway',
  'Fully equipped — water, power, everything',
  'Fully insured · $1M coverage',
  '100% satisfaction guaranteed or you don’t pay',
];

const STEPS = [
  { icon: Phone, title: 'Get your instant quote', desc: 'Answer a few quick questions and lock in your price in 60 seconds.' },
  { icon: Car, title: 'We come to you', desc: 'Fully equipped, right to your driveway — no drop-offs, no waiting rooms.' },
  { icon: Award, title: 'Drive a head-turner', desc: 'Showroom-level results, every time, backed by our guarantee.' },
];

const PERKS = [
  { icon: MapPin, label: 'Fully Mobile', sub: 'All of Miami-Dade' },
  { icon: ShieldCheck, label: '$1M Insured', sub: 'Your car is protected' },
  { icon: Star, label: `${GOOGLE_RATING} Rated`, sub: `${GOOGLE_REVIEW_COUNT}+ reviews` },
  { icon: Clock, label: 'No Payment to Book', sub: 'Pay after you inspect' },
];

export default function LandingPage() {
  const scrollToQuote = () =>
    document.getElementById('quote')?.scrollIntoView({ behavior: 'smooth', block: 'start' });

  return (
    <div className="min-h-screen bg-charcoal-950 text-white">
      <SEO
        title={`Mobile Detailing Miami — Premium Results in Your Driveway | ${BUSINESS_NAME}`}
        description={`Miami's top-rated mobile car detailing. We come to your home or office fully equipped. Instant quote, no payment to book. ${GOOGLE_RATING}★ · ${GOOGLE_REVIEW_COUNT}+ reviews.`}
        canonical="/book"
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
          {/* Left — value prop */}
          <div className="animate-fade-in-up">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-charcoal-900/80 border border-charcoal-700 mb-5">
              <span className="flex items-center gap-0.5">
                {[...Array(5)].map((_, i) => <Star key={i} className="w-3.5 h-3.5 text-gold fill-gold" />)}
              </span>
              <span className="text-charcoal-200 text-xs font-medium">{GOOGLE_RATING} · {GOOGLE_REVIEW_COUNT} Google Reviews</span>
            </div>

            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.05] mb-5">
              Mobile Detailing in Miami.
              <span className="block gradient-text mt-1">Premium Results in Your Driveway.</span>
            </h1>

            <p className="text-charcoal-300 text-lg mb-6 max-w-xl">
              We bring the full detailing studio to your home or office — no drop-offs, no waiting rooms.
              Just a car that turns heads.
            </p>

            <ul className="space-y-2.5 mb-8">
              {HERO_BULLETS.map(b => (
                <li key={b} className="flex items-start gap-2.5 text-charcoal-200">
                  <Check className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                  <span>{b}</span>
                </li>
              ))}
            </ul>

            <div className="flex flex-col sm:flex-row gap-3">
              <button onClick={scrollToQuote} className="btn-primary text-base py-4 px-7 justify-center">
                Get My Instant Quote <ArrowRight className="w-5 h-5" />
              </button>
              <a href={telHref} className="btn-secondary text-base py-4 px-7 justify-center">
                <Phone className="w-5 h-5" /> Call Now
              </a>
            </div>
          </div>

          {/* Right — embedded quote wizard */}
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
                  <p className="text-accent text-[10px] font-bold tracking-widest uppercase">Free Estimate</p>
                  <h2 className="text-base sm:text-lg font-bold text-white leading-tight">
                    Get Your Price <span className="gradient-text">Instantly</span>
                  </h2>
                </div>
              </div>
              <QuoteWizard />
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

      {/* How it works */}
      <section className="container-custom py-16 lg:py-20">
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
        <div className="absolute inset-0 bg-gradient-to-r from-accent/10 via-primary-500/5 to-transparent" />
        <div className="relative container-custom py-16 text-center">
          <h2 className="font-display text-3xl sm:text-4xl font-bold mb-3">Ready for a car that turns heads?</h2>
          <p className="text-charcoal-300 mb-8 max-w-xl mx-auto">
            Get your instant quote now — no payment to book, satisfaction guaranteed.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <button onClick={scrollToQuote} className="btn-primary text-base py-4 px-8 justify-center">
              Get My Instant Quote <ArrowRight className="w-5 h-5" />
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

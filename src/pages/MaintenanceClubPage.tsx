import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Check, Star, Sparkles, ShieldCheck, Percent, CalendarCheck, ChevronDown, ChevronUp, Crown } from 'lucide-react';
import { BUSINESS_NAME, PHONE, GOOGLE_RATING, GOOGLE_REVIEW_COUNT } from '../constants';
import { useLeadModal } from '../context/LeadModalContext';
import SEO from '../components/SEO';

// Price per maintenance visit
const plans: { id: string; name: string; frequency: string; sedan: number; suv: number; tagline: string; popular?: boolean }[] = [
  {
    id: 'weekly',
    name: 'Weekly',
    frequency: 'Every week',
    sedan: 75,
    suv: 95,
    tagline: 'For daily drivers and show cars that always need to look perfect.',
  },
  {
    id: 'biweekly',
    name: 'Bi-Weekly',
    frequency: 'Every 2 weeks',
    sedan: 100,
    suv: 125,
    tagline: 'The sweet spot — your car never has time to get dirty.',
    popular: true,
  },
  {
    id: 'monthly',
    name: 'Monthly',
    frequency: 'Once a month',
    sedan: 125,
    suv: 145,
    tagline: 'Keep that freshly detailed look with a monthly reset.',
  },
];

const perks = [
  'Maintenance detail at your home or office on your schedule',
  '1 free scratch or stain removal each month',
  'Save 5–50% on premium add-ons',
];

const benefits = [
  {
    icon: Sparkles,
    title: 'Always Freshly Detailed',
    description: 'Regular maintenance visits keep your car looking like it just came out of a full detail — all the time.',
  },
  {
    icon: ShieldCheck,
    title: 'Free Scratch / Stain Removal',
    description: 'Spill coffee, drop something or scuff the paint? Get 1 free scratch or stain removal with your visits every month.',
  },
  {
    icon: Percent,
    title: '5–50% Off Premium Add-Ons',
    description: 'Members save on leather conditioning, engine bay details, ceramic coatings, headlight restoration and more.',
  },
  {
    icon: CalendarCheck,
    title: 'Weekly, Bi-Weekly or Monthly',
    description: 'Pick the schedule that fits your car and your life. We come to you anywhere in Miami-Dade.',
  },
];

const discountedAddons = [
  { name: 'Leather & Alcantara Conditioning', to: '/services/leather-alcantara-cleaning' },
  { name: 'Engine Bay Detail', to: '/services/engine-bay-detail' },
  { name: 'Ceramic Coating', to: '/ceramic-coating' },
  { name: 'Headlight Restoration', to: '/services/headlight-restoration' },
  { name: 'Shampoo & Extraction', to: '/services/shampoo-extraction' },
  { name: 'Paint Correction', to: '/services/paint-correction' },
];

const steps = [
  { title: 'Book a Full Detail', description: 'Every membership starts with a full detail to bring your car up to our standard.' },
  { title: 'Choose Your Plan', description: 'Pick weekly, bi-weekly or monthly maintenance visits.' },
  { title: 'Stay Freshly Detailed', description: 'We come to you on schedule and keep your car looking its best.' },
];

const faqs = [
  {
    q: 'Why do I need a full detail first?',
    a: 'Maintenance visits are designed to keep a clean car clean. A full detail first brings your vehicle up to our standard so every maintenance visit keeps it looking freshly detailed.',
  },
  {
    q: 'How does the free scratch or stain removal work?',
    a: "Members get 1 free scratch removal or stain removal each month. If you spill something on the seats, drop something or scuff the paint, we'll take care of it during your maintenance visit.",
  },
  {
    q: 'Which add-ons are discounted?',
    a: 'Members save between 5% and 50% on premium add-ons like leather conditioning, engine bay details, ceramic coatings, headlight restoration and more.',
  },
  {
    q: 'How often will you come out?',
    a: 'You choose — weekly, bi-weekly (every 2 weeks) or monthly. We come to your home, office or apartment anywhere in Miami-Dade County.',
  },
];

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((f) => ({
    '@type': 'Question',
    name: f.q,
    acceptedAnswer: { '@type': 'Answer', text: f.a },
  })),
};

export default function MaintenanceClubPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const { openModal } = useLeadModal();

  return (
    <div className="bg-charcoal-950 text-white pt-24 md:pt-32">
      <SEO
        title={`Maintenance Club — Car Detailing Membership Miami | ${BUSINESS_NAME}`}
        description="Join the Maintenance Club: weekly, bi-weekly or monthly mobile maintenance details in Miami-Dade. 1 free scratch or stain removal each month and 5–50% off premium add-ons."
        keywords="car detailing membership Miami, car detailing subscription, monthly car detailing Miami, maintenance detail Miami, weekly car wash membership Doral"
        canonical="/maintenance-club"
      />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* Hero */}
      <section className="relative py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0 opacity-25">
          <img
            src="/images/optimized/work/porsche-gt3-rs-mobile-detail-miami.webp"
            alt="Two Porsche 911 GT3 RS cars kept detailed in a Miami driveway"
            className="w-full h-full object-cover"
            loading="eager"
            decoding="async"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950 via-charcoal-950/75 to-charcoal-950/50" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,212,255,0.10),transparent_65%)]" />
        <div className="decorative-blur absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-accent/10 rounded-full blur-[180px]" />

        <div className="relative z-10 container-custom text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-charcoal-800/80 border border-accent/30 mb-8">
            <Crown className="w-4 h-4 text-gold" />
            <span className="text-charcoal-200 text-sm font-medium">Membership</span>
          </div>

          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
            The Maintenance
            <span className="block gradient-text">Club</span>
          </h1>

          <p className="text-lg md:text-xl text-charcoal-300 max-w-2xl mx-auto mb-8">
            Keep your car looking freshly detailed all the time. Regular mobile maintenance visits, a free scratch or stain removal every month, and members-only savings on premium add-ons.
          </p>

          <div className="flex items-center justify-center gap-2 mb-10">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-5 h-5 text-gold fill-gold" />
            ))}
            <span className="text-charcoal-300 text-sm ml-1">{GOOGLE_RATING} · {GOOGLE_REVIEW_COUNT} Google Reviews</span>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button onClick={() => openModal('Maintenance Club')} className="btn-primary text-lg px-8 py-4">
              Join the Club
            </button>
            <a href="#plans" className="btn-secondary text-lg px-8 py-4">
              See Plans
            </a>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="section-padding bg-charcoal-900">
        <div className="container-custom">
          <div className="grid grid-cols-2 gap-4 md:gap-6 max-w-3xl mx-auto mb-14">
            <figure className="overflow-hidden rounded-2xl border border-charcoal-700">
              <img
                src="/images/optimized/work/exterior-detail-corvette-grand-sport.webp"
                alt="Silver Corvette Grand Sport kept freshly detailed in Miami"
                loading="lazy"
                decoding="async"
                className="w-full aspect-[4/5] object-cover"
              />
            </figure>
            <figure className="overflow-hidden rounded-2xl border border-charcoal-700">
              <img
                src="/images/optimized/work/foam-bath-hand-wash-bmw-m2.webp"
                alt="BMW M2 foam bath during a mobile maintenance wash in Miami"
                loading="lazy"
                decoding="async"
                className="w-full aspect-[4/5] object-cover"
              />
            </figure>
          </div>

          <h2 className="font-display text-3xl md:text-4xl font-bold text-white text-center mb-12">
            Member <span className="gradient-text">Benefits</span>
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((b) => (
              <div key={b.title} className="bg-charcoal-800/50 border border-charcoal-700 rounded-2xl p-6 hover:border-accent/40 transition-colors">
                <div className="w-12 h-12 rounded-xl bg-accent/10 border border-accent/30 flex items-center justify-center mb-4">
                  <b.icon className="w-6 h-6 text-accent" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{b.title}</h3>
                <p className="text-charcoal-400 text-sm leading-relaxed">{b.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Plans */}
      <section id="plans" className="section-padding bg-charcoal-950 scroll-mt-28">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-4">
              Choose Your <span className="gradient-text">Plan</span>
            </h2>
            <p className="text-charcoal-400 text-lg max-w-2xl mx-auto">
              Every plan includes the same member benefits — just pick how often you want us out.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {plans.map((plan) => (
              <div
                key={plan.id}
                className={`relative flex flex-col rounded-2xl p-8 border ${
                  plan.popular
                    ? 'border-accent/60 bg-gradient-to-b from-accent/10 to-charcoal-900 shadow-xl shadow-accent/10'
                    : 'border-charcoal-700 bg-charcoal-800/50'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 flex items-center gap-1 px-3 py-1 bg-charcoal-800 border border-accent/50 text-accent text-xs font-bold rounded-full whitespace-nowrap">
                    <Star className="w-3 h-3 fill-accent" />
                    MOST POPULAR
                  </div>
                )}
                <h3 className="font-display text-2xl font-bold text-white mb-1">{plan.name}</h3>
                <p className="text-accent text-sm font-semibold mb-4">{plan.frequency}</p>
                <div className="mb-4 space-y-2">
                  <p>
                    <span className="text-4xl font-bold text-white">${plan.sedan}</span>
                    <span className="text-charcoal-400 text-sm"> / visit</span>
                    <span className="block text-charcoal-500 text-xs">Sedans & Coupes</span>
                  </p>
                  <p>
                    <span className="text-2xl font-bold text-white">${plan.suv}</span>
                    <span className="text-charcoal-400 text-sm"> / visit</span>
                    <span className="block text-charcoal-500 text-xs">SUVs & Trucks</span>
                  </p>
                </div>
                <p className="text-charcoal-400 text-sm mb-6">{plan.tagline}</p>
                <ul className="space-y-3 mb-8 flex-1">
                  {perks.map((perk) => (
                    <li key={perk} className="flex items-start gap-2 text-sm text-charcoal-300">
                      <Check className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                      {perk}
                    </li>
                  ))}
                </ul>
                <button
                  onClick={() => openModal(`Maintenance Club — ${plan.name}`)}
                  className={`w-full py-3 rounded-xl font-bold transition-all ${
                    plan.popular
                      ? 'bg-accent text-charcoal-950 hover:bg-accent-light shadow-md shadow-accent/20'
                      : 'bg-charcoal-700 text-white hover:bg-charcoal-600'
                  }`}
                >
                  Join {plan.name}
                </button>
              </div>
            ))}
          </div>

          <p className="text-center text-charcoal-500 text-sm mt-8 max-w-xl mx-auto">
            Prices are per maintenance visit. A full detail visit is required to qualify for membership.
          </p>
        </div>
      </section>

      {/* How it works */}
      <section className="section-padding bg-charcoal-900">
        <div className="container-custom">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-white text-center mb-12">
            How to <span className="gradient-text">Join</span>
          </h2>
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {steps.map((step, i) => (
              <div key={step.title} className="text-center bg-charcoal-800/50 border border-charcoal-700 rounded-2xl p-8">
                <span className="w-12 h-12 rounded-full bg-accent/15 border border-accent/40 text-accent text-lg font-bold flex items-center justify-center mx-auto mb-4">
                  {i + 1}
                </span>
                <h3 className="text-lg font-bold text-white mb-2">{step.title}</h3>
                <p className="text-charcoal-400 text-sm leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link to="/detail-packages" className="text-accent hover:underline font-semibold">
              View full detail packages →
            </Link>
          </div>
        </div>
      </section>

      {/* Discounted add-ons */}
      <section className="section-padding bg-charcoal-950">
        <div className="container-custom text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 font-bold mb-6">
            <Percent className="w-4 h-4" /> Members save 5–50%
          </div>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-8">
            Discounted <span className="gradient-text">Premium Add-Ons</span>
          </h2>
          <div className="flex flex-wrap justify-center gap-3 max-w-3xl mx-auto">
            {discountedAddons.map((a) => (
              <Link
                key={a.name}
                to={a.to}
                className="px-4 py-2 rounded-full bg-charcoal-800 border border-charcoal-700 text-charcoal-200 text-sm hover:border-accent hover:text-accent transition-colors"
              >
                {a.name}
              </Link>
            ))}
            <span className="px-4 py-2 rounded-full bg-charcoal-800 border border-charcoal-700 text-charcoal-400 text-sm">and more</span>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding bg-charcoal-900">
        <div className="container-custom max-w-3xl">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-white text-center mb-10">
            Maintenance Club <span className="gradient-text">FAQ</span>
          </h2>
          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <div key={faq.q} className="bg-charcoal-800/50 border border-charcoal-700 rounded-xl overflow-hidden">
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between gap-4 px-6 py-4 text-left"
                  aria-expanded={openFaq === i}
                >
                  <h3 className="font-semibold text-white">{faq.q}</h3>
                  {openFaq === i ? <ChevronUp className="w-5 h-5 text-accent flex-shrink-0" /> : <ChevronDown className="w-5 h-5 text-charcoal-400 flex-shrink-0" />}
                </button>
                <div className={`px-6 pb-4 text-charcoal-400 leading-relaxed ${openFaq === i ? '' : 'hidden'}`}>{faq.a}</div>
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
            Never Drive a Dirty Car <span className="gradient-text">Again</span>
          </h2>
          <p className="text-charcoal-400 text-lg mb-8 max-w-xl mx-auto">
            Join the {BUSINESS_NAME} Maintenance Club and keep your car looking freshly detailed year-round.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button onClick={() => openModal('Maintenance Club')} className="btn-primary text-lg px-10 py-4">
              Join the Club
            </button>
            <a href={`tel:${PHONE.replace(/\D/g, '')}`} className="text-accent font-semibold hover:underline">
              or call {PHONE}
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

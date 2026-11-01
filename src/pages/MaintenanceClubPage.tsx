import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Check, Star, Sparkles, ShieldCheck, Percent, CalendarCheck, ChevronDown, ChevronUp } from 'lucide-react';
import { BUSINESS_NAME } from '../constants';
import { useLeadModal } from '../context/LeadModalContext';
import SEO from '../components/SEO';
import { maintenancePlans as plans, maintenancePlanBookingName } from '../data/maintenanceClub';
import PageHero from '../components/PageHero';
import ClosingCta from '../components/home/ClosingCta';

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
    <div className="bg-charcoal-950 text-white">
      <SEO
        title={`Maintenance Club — Car Detailing Membership Miami | ${BUSINESS_NAME}`}
        description="Join the Maintenance Club: weekly, bi-weekly or monthly mobile maintenance details in Miami-Dade. 1 free scratch or stain removal each month and 5–50% off premium add-ons."
        keywords="car detailing membership Miami, car detailing subscription, monthly car detailing Miami, maintenance detail Miami, weekly car wash membership Doral"
        canonical="/maintenance-club"
      />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <PageHero
        image="/images/optimized/work/porsche-gt3-rs-mobile-detail-miami.webp"
        imageAlt="Two Porsche 911 GT3 RS cars kept detailed in a Miami driveway"
        title="The Maintenance Club."
        sub="Weekly, bi-weekly or monthly visits, a free scratch or stain removal every month, and 5–50% off add-ons."
        price="From $75/visit"
        priceNote="Full detail required to join"
        action={<a href="#plans" className="btn-primary text-lg px-8 py-4">Choose My Plan</a>}
      />

      {/* Benefits */}
      <section className="section-padding bg-charcoal-900">
        <div className="container-custom">
          <div className="grid grid-cols-2 gap-4 md:gap-6 max-w-3xl mx-auto mb-14">
            <figure className="overflow-hidden rounded-2xl">
              <img
                src="/images/optimized/work/exterior-detail-corvette-grand-sport.webp"
                alt="Silver Corvette Grand Sport kept freshly detailed in Miami"
                loading="lazy"
                decoding="async"
                className="w-full aspect-[4/5] object-cover"
              />
            </figure>
            <figure className="overflow-hidden rounded-2xl">
              <img
                src="/images/optimized/work/foam-bath-hand-wash-bmw-m2.webp"
                alt="BMW M2 foam bath during a mobile maintenance wash in Miami"
                loading="lazy"
                decoding="async"
                className="w-full aspect-[4/5] object-cover"
              />
            </figure>
          </div>

          <h2 className="font-display text-4xl md:text-5xl font-bold text-white tracking-tight text-center mb-12">
            Member <span className="gradient-text">Benefits</span>
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((b) => (
              <div key={b.title} className="bg-charcoal-800 rounded-2xl p-6 hover:border-accent/40 transition-colors">
                <h3 className="text-lg font-bold text-white mb-2">{b.title}</h3>
                <p className="text-charcoal-300 text-base leading-relaxed">{b.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Plans */}
      <section id="plans" className="section-padding bg-charcoal-950 scroll-mt-28">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="font-display text-4xl md:text-5xl font-bold text-white tracking-tight mb-4">
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
                    ? 'border-gold/60 bg-charcoal-800'
                    : 'border-charcoal-700 bg-charcoal-800'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 flex items-center gap-1 px-3 py-1 bg-charcoal-800 border border-gold/50 text-gold text-xs font-bold rounded-full whitespace-nowrap">
                    <Star className="w-3 h-3 fill-gold" />
                    MOST POPULAR
                  </div>
                )}
                <h3 className="font-display text-2xl font-bold text-white mb-1">{plan.name}</h3>
                <div className="mb-4 space-y-2">
                  <p>
                    <span className="text-4xl font-bold text-white">${plan.sedan}</span>
                    <span className="text-charcoal-300 text-base"> / visit</span>
                    <span className="block text-charcoal-500 text-xs">Sedans & Coupes</span>
                  </p>
                  <p>
                    <span className="text-2xl font-bold text-white">${plan.suv}</span>
                    <span className="text-charcoal-300 text-base"> / visit</span>
                    <span className="block text-charcoal-500 text-xs">SUVs & Trucks</span>
                  </p>
                </div>
                <p className="text-charcoal-300 text-base mb-6">{plan.tagline}</p>
                <ul className="space-y-3 mb-8 flex-1">
                  {perks.map((perk) => (
                    <li key={perk} className="flex items-start gap-2 text-sm text-charcoal-300">
                      <Check className="w-4 h-4 text-gold flex-shrink-0 mt-0.5" />
                      {perk}
                    </li>
                  ))}
                </ul>
                <button
                  onClick={() => openModal(maintenancePlanBookingName(plan))}
                  className={`w-full py-3 rounded-xl font-bold transition-all ${
                    plan.popular
                      ? 'bg-accent text-charcoal-950 hover:bg-accent-light'
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
          <h2 className="font-display text-4xl md:text-5xl font-bold text-white tracking-tight text-center mb-12">
            How to <span className="gradient-text">Join</span>
          </h2>
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {steps.map((step) => (
              <div key={step.title} className="text-center bg-charcoal-800 rounded-2xl p-8">
                <h3 className="text-lg font-bold text-white mb-2">{step.title}</h3>
                <p className="text-charcoal-300 text-base leading-relaxed">{step.description}</p>
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
          <h2 className="font-display text-4xl md:text-5xl font-bold text-white tracking-tight mb-8">
            Members save 5–50% on add-ons.
          </h2>
          <div className="flex flex-wrap justify-center gap-3 max-w-3xl mx-auto">
            {discountedAddons.map((a) => (
              <Link
                key={a.name}
                to={a.to}
                className="px-4 py-2 rounded-full bg-charcoal-800 text-charcoal-200 text-sm hover:border-accent hover:text-accent transition-colors"
              >
                {a.name}
              </Link>
            ))}
            <span className="px-4 py-2 rounded-full bg-charcoal-800 text-charcoal-300 text-base">and more</span>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding bg-charcoal-900">
        <div className="container-custom max-w-3xl">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-white tracking-tight text-center mb-10">
            Maintenance Club <span className="gradient-text">FAQ</span>
          </h2>
          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <div key={faq.q} className="bg-charcoal-800 rounded-xl overflow-hidden">
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

      <ClosingCta
        title="Never drive a dirty car again."
        bookAs="Maintenance Club — Bi-Weekly"
        bookLabel="Join Bi-Weekly"
        image="/images/optimized/work/foam-bath-hand-wash-bmw-m2.webp"
        imageAlt="BMW M2 foam bath during a mobile maintenance wash in Miami"
      />
    </div>
  );
}

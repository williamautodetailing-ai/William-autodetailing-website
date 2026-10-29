import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Check, Clock, Star, ChevronDown, ChevronUp, AlertCircle, MapPin, ArrowRight } from 'lucide-react';
import { services, type ServicePageContent } from '../data/services';
import { cityPages } from '../data/cities';
import { BUSINESS_NAME, PHONE, GOOGLE_RATING, GOOGLE_REVIEW_COUNT } from '../constants';
import { useLeadModal } from '../context/LeadModalContext';
import Testimonials from '../components/Testimonials';
import SEO from '../components/SEO';

const SITE_URL = 'https://williamautodetailing.net';

export default function ServicePage({ service }: { service: ServicePageContent }) {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const { openModal } = useLeadModal();

  const related = service.related
    .map((slug) => services.find((s) => s.slug === slug))
    .filter((s): s is ServicePageContent => Boolean(s));

  const schema = [
    {
      '@context': 'https://schema.org',
      '@type': 'Service',
      name: service.name,
      serviceType: service.name,
      description: service.metaDescription,
      url: `${SITE_URL}/services/${service.slug}`,
      areaServed: { '@type': 'AdministrativeArea', name: 'Miami-Dade County, FL' },
      provider: {
        '@type': 'AutomotiveBusiness',
        name: BUSINESS_NAME,
        telephone: PHONE,
        url: SITE_URL,
        aggregateRating: {
          '@type': 'AggregateRating',
          ratingValue: GOOGLE_RATING,
          reviewCount: GOOGLE_REVIEW_COUNT,
        },
      },
    },
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: service.faqs.map((f) => ({
        '@type': 'Question',
        name: f.q,
        acceptedAnswer: { '@type': 'Answer', text: f.a },
      })),
    },
    {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE_URL}/` },
        { '@type': 'ListItem', position: 2, name: service.name, item: `${SITE_URL}/services/${service.slug}` },
      ],
    },
  ];

  return (
    <div className="bg-charcoal-950 text-white pt-24 md:pt-32">
      <SEO
        title={service.metaTitle}
        description={service.metaDescription}
        keywords={service.keywords}
        canonical={`/services/${service.slug}`}
      />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      {/* Hero */}
      <section className="relative py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,212,255,0.08),transparent_65%)]" />
        <div className="decorative-blur absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-accent/8 rounded-full blur-[180px]" />

        <div className="relative z-10 container-custom text-center">
          <nav aria-label="Breadcrumb" className="text-charcoal-500 text-sm mb-6">
            <Link to="/" className="hover:text-accent transition-colors">Home</Link>
            <span className="mx-2">/</span>
            <span className="text-charcoal-300">{service.name}</span>
          </nav>

          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-charcoal-800/80 border border-charcoal-700 mb-8">
            <span className="w-2 h-2 rounded-full bg-accent" />
            <span className="text-charcoal-200 text-sm font-medium">{service.badge}</span>
          </div>

          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
            {service.h1}
            <span className="block gradient-text">{service.h1Highlight}</span>
          </h1>

          <p className="text-lg md:text-xl text-charcoal-300 max-w-2xl mx-auto mb-8">{service.intro}</p>

          <div className="flex flex-wrap items-center justify-center gap-3 mb-8">
            {service.price && (
              <span className="px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 font-bold">
                {service.price}
              </span>
            )}
            {service.duration && (
              <span className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-charcoal-800 border border-charcoal-700 text-charcoal-200 text-sm">
                <Clock className="w-4 h-4 text-accent" /> {service.duration}
              </span>
            )}
            <span className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-charcoal-800 border border-charcoal-700 text-charcoal-200 text-sm">
              <MapPin className="w-4 h-4 text-accent" /> We come to you
            </span>
          </div>

          <div className="flex items-center justify-center gap-2 mb-10">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-5 h-5 text-gold fill-gold" />
            ))}
            <span className="text-charcoal-300 text-sm ml-1">{GOOGLE_RATING} · {GOOGLE_REVIEW_COUNT} Google Reviews</span>
          </div>

          <button onClick={() => openModal(service.bookAs)} className="btn-primary text-lg px-8 py-4">
            Book {service.name}
          </button>
          {service.priceNote && (
            <p className="text-charcoal-500 text-sm mt-6 max-w-xl mx-auto">{service.priceNote}</p>
          )}
        </div>
      </section>

      {/* About this service */}
      <section className="section-padding bg-charcoal-950">
        <div className="container-custom max-w-3xl">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-8 text-center">
            About Our <span className="gradient-text">{service.name}</span>
          </h2>
          <div className="space-y-5 text-charcoal-300 text-lg leading-relaxed">
            {service.description.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>
        </div>
      </section>

      {/* What's included + process */}
      <section className="section-padding bg-charcoal-900">
        <div className="container-custom grid lg:grid-cols-2 gap-8">
          <div className="bg-charcoal-800/50 border border-charcoal-700 rounded-2xl p-8">
            <h2 className="font-display text-2xl md:text-3xl font-bold text-white mb-6">
              What's <span className="gradient-text">Included</span>
            </h2>
            <ul className="space-y-3">
              {service.includes.map((item) => (
                <li key={item} className="flex items-start gap-3 text-charcoal-300">
                  <Check className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            {service.disclaimer && (
              <div className="flex items-start gap-2 bg-charcoal-700/50 border border-charcoal-600/50 rounded-lg px-4 py-3 mt-6">
                <AlertCircle className="w-4 h-4 text-amber-400 flex-shrink-0 mt-0.5" />
                <p className="text-xs text-charcoal-400 leading-relaxed">{service.disclaimer}</p>
              </div>
            )}
          </div>

          <div className="bg-charcoal-800/50 border border-charcoal-700 rounded-2xl p-8">
            <h2 className="font-display text-2xl md:text-3xl font-bold text-white mb-6">
              Our <span className="gradient-text">Process</span>
            </h2>
            <ol className="space-y-4">
              {service.process.map((step, i) => (
                <li key={step} className="flex items-start gap-4">
                  <span className="w-8 h-8 rounded-full bg-accent/15 border border-accent/40 text-accent text-sm font-bold flex items-center justify-center flex-shrink-0">
                    {i + 1}
                  </span>
                  <span className="text-charcoal-300 pt-1">{step}</span>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="section-padding bg-charcoal-950">
        <div className="container-custom">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-white text-center mb-12">
            Why Get <span className="gradient-text">{service.name}?</span>
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {service.benefits.map((b) => (
              <div key={b.title} className="bg-charcoal-800/50 border border-charcoal-700 rounded-2xl p-6 hover:border-accent/40 transition-colors">
                <h3 className="text-lg font-bold text-white mb-2">{b.title}</h3>
                <p className="text-charcoal-400 text-sm leading-relaxed">{b.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Testimonials />

      {/* FAQ */}
      <section className="section-padding bg-charcoal-950">
        <div className="container-custom max-w-3xl">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-white text-center mb-10">
            {service.name} <span className="gradient-text">FAQ</span>
          </h2>
          <div className="space-y-3">
            {service.faqs.map((faq, i) => (
              <div key={faq.q} className="bg-charcoal-800/50 border border-charcoal-700 rounded-xl overflow-hidden">
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between gap-4 px-6 py-4 text-left"
                  aria-expanded={openFaq === i}
                >
                  <h3 className="font-semibold text-white">{faq.q}</h3>
                  {openFaq === i ? <ChevronUp className="w-5 h-5 text-accent flex-shrink-0" /> : <ChevronDown className="w-5 h-5 text-charcoal-400 flex-shrink-0" />}
                </button>
                {/* Answers stay in the DOM so crawlers can read them */}
                <div className={`px-6 pb-4 text-charcoal-400 leading-relaxed ${openFaq === i ? '' : 'hidden'}`}>{faq.a}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Related services + areas */}
      <section className="section-padding bg-charcoal-900">
        <div className="container-custom">
          <h2 className="font-display text-2xl md:text-3xl font-bold text-white text-center mb-8">
            Related <span className="gradient-text">Services</span>
          </h2>
          <div className="grid sm:grid-cols-3 gap-4 mb-14">
            {related.map((r) => (
              <Link
                key={r.slug}
                to={`/services/${r.slug}`}
                className="group flex items-center justify-between bg-charcoal-800/50 border border-charcoal-700 rounded-xl px-5 py-4 hover:border-accent/50 transition-colors"
              >
                <span className="font-semibold text-white">{r.name}</span>
                <ArrowRight className="w-4 h-4 text-accent group-hover:translate-x-1 transition-transform" />
              </Link>
            ))}
          </div>

          <h2 className="font-display text-xl md:text-2xl font-bold text-white text-center mb-6">
            Mobile {service.name} Across Miami-Dade
          </h2>
          <div className="flex flex-wrap justify-center gap-2">
            {cityPages.map((city) => (
              <Link
                key={city.slug}
                to={`/areas/${city.slug}`}
                className="px-3 py-1.5 rounded-full bg-charcoal-800 border border-charcoal-700 text-charcoal-300 text-sm hover:border-accent hover:text-accent transition-colors"
              >
                {city.name}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-charcoal-950 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-accent/10 via-transparent to-primary-500/10" />
        <div className="container-custom relative z-10 text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to <span className="gradient-text">Book?</span>
          </h2>
          <p className="text-charcoal-400 text-lg mb-8 max-w-xl mx-auto">
            {BUSINESS_NAME} comes to your home, office or apartment anywhere in Miami-Dade County.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button onClick={() => openModal(service.bookAs)} className="btn-primary text-lg px-10 py-4">
              Book {service.name}
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

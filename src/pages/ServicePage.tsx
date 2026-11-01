import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Check, ChevronDown, ChevronUp, AlertCircle, ArrowRight } from 'lucide-react';
import { services, type ServicePageContent } from '../data/services';
import { cityPages } from '../data/cities';
import { BUSINESS_NAME, PHONE, GOOGLE_RATING, GOOGLE_REVIEW_COUNT } from '../constants';
import Testimonials from '../components/Testimonials';
import SEO from '../components/SEO';
import PageHero from '../components/PageHero';
import ClosingCta from '../components/home/ClosingCta';

const SITE_URL = 'https://williamautodetailing.net';

export default function ServicePage({ service }: { service: ServicePageContent }) {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

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
    <div className="bg-charcoal-950 text-white">
      <SEO
        title={service.metaTitle}
        description={service.metaDescription}
        keywords={service.keywords}
        canonical={`/services/${service.slug}`}
      />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      <PageHero
        image={service.images?.[service.images.length - 1]?.src ?? '/images/optimized/hero-porsche.webp'}
        imageAlt={service.images?.[service.images.length - 1]?.alt ?? `${service.name} in Miami`}
        title={`${service.name} in Miami.`}
        sub={service.summary}
        price={service.price}
        priceNote={service.pricing ? `$${service.pricing.sedan} sedans · $${service.pricing.suv} SUVs` : service.duration}
        bookAs={service.bookAs}
        bookLabel={`Book ${service.name}`}
        above={
          <nav aria-label="Breadcrumb" className="text-charcoal-300 text-base mb-4">
            <Link to="/" className="hover:text-accent transition-colors">Home</Link>
            <span className="mx-2">/</span>
            <span className="text-white">{service.name}</span>
          </nav>
        }
      />

      {/* Real work photos — shown first so visitors instantly see what they get */}
      {service.images && service.images.length > 0 && (
        <section className="py-16 md:py-20 bg-charcoal-900">
          <div className="container-custom">
            <h2 className="font-display text-4xl md:text-5xl font-bold text-white tracking-tight text-center mb-3">
              See What <span className="gradient-text">You Get</span>
            </h2>
            <p className="text-charcoal-400 text-center mb-10">Real {service.name.toLowerCase()} results from Miami-Dade customers.</p>
            <div
              className={`grid gap-6 mx-auto ${
                service.images.length === 1
                  ? 'max-w-md'
                  : service.images.length === 2
                    ? 'sm:grid-cols-2 max-w-3xl'
                    : 'sm:grid-cols-2 lg:grid-cols-3 max-w-5xl'
              }`}
            >
              {service.images.map((img) => (
                <figure key={img.src} className="flex flex-col overflow-hidden rounded-2xl bg-charcoal-800">
                  <img
                    src={img.src}
                    alt={img.alt}
                    loading="lazy"
                    decoding="async"
                    className="w-full aspect-[4/5] object-cover"
                  />
                  {(img.caption || img.description) && (
                    <figcaption className="p-5">
                      {img.caption && <p className="font-bold text-white mb-1">{img.caption}</p>}
                      {img.description && <p className="text-charcoal-300 text-base leading-relaxed">{img.description}</p>}
                    </figcaption>
                  )}
                </figure>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* About this service */}
      <section className="section-padding bg-charcoal-950">
        <div className="container-custom max-w-3xl">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-white tracking-tight mb-8 text-center">
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
          <div className="bg-charcoal-800 rounded-2xl p-8">
            <h2 className="font-display text-4xl md:text-5xl font-bold text-white tracking-tight mb-6">
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
              <div className="flex items-start gap-2 bg-charcoal-700/50 rounded-lg px-4 py-3 mt-6">
                <AlertCircle className="w-4 h-4 text-gold flex-shrink-0 mt-0.5" />
                <p className="text-xs text-charcoal-400 leading-relaxed">{service.disclaimer}</p>
              </div>
            )}
          </div>

          <div className="bg-charcoal-800 rounded-2xl p-8">
            <h2 className="font-display text-4xl md:text-5xl font-bold text-white tracking-tight mb-6">
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
          <h2 className="font-display text-4xl md:text-5xl font-bold text-white tracking-tight text-center mb-12">
            Why Get <span className="gradient-text">{service.name}?</span>
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {service.benefits.map((b) => (
              <div key={b.title} className="bg-charcoal-800 rounded-2xl p-6 hover:border-accent/40 transition-colors">
                <h3 className="text-lg font-bold text-white mb-2">{b.title}</h3>
                <p className="text-charcoal-300 text-base leading-relaxed">{b.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Testimonials />

      {/* FAQ */}
      <section className="section-padding bg-charcoal-950">
        <div className="container-custom max-w-3xl">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-white tracking-tight text-center mb-10">
            {service.name} <span className="gradient-text">FAQ</span>
          </h2>
          <div className="space-y-3">
            {service.faqs.map((faq, i) => (
              <div key={faq.q} className="bg-charcoal-800 rounded-xl overflow-hidden">
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
          <h2 className="font-display text-4xl md:text-5xl font-bold text-white tracking-tight text-center mb-8">
            Related <span className="gradient-text">Services</span>
          </h2>
          <div className="grid sm:grid-cols-3 gap-4 mb-14">
            {related.map((r) => (
              <Link
                key={r.slug}
                to={`/services/${r.slug}`}
                className="group flex items-center justify-between bg-charcoal-800 rounded-xl px-5 py-4 hover:border-accent/50 transition-colors"
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
                className="px-3 py-1.5 rounded-full bg-charcoal-800 text-charcoal-300 text-sm hover:border-accent hover:text-accent transition-colors"
              >
                {city.name}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <ClosingCta title={`Book ${service.name} this week.`} bookAs={service.bookAs} bookLabel={`Book ${service.name}`} />
    </div>
  );
}

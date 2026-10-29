import { Link } from 'react-router-dom';
import { BUSINESS_NAME, GOOGLE_RATING, GOOGLE_REVIEW_COUNT } from '../constants';
import { services } from '../data/services';
import { useLeadModal } from '../context/LeadModalContext';
import Gallery from '../components/Gallery';
import SEO from '../components/SEO';

const photos = [
  {
    src: '/images/optimized/promotions/engine-bay-before.webp',
    alt: 'Dirty engine bay before detailing in Miami',
    caption: 'Engine Bay — Before',
  },
  {
    src: '/images/optimized/promotions/engine-bay-after.webp',
    alt: 'Clean, dressed engine bay after detailing in Miami',
    caption: 'Engine Bay — After',
  },
  {
    src: '/images/optimized/about-us/audi-r8.webp',
    alt: 'Audi R8 after a mobile detail in Miami-Dade',
    caption: 'Audi R8 — Full Detail',
  },
  {
    src: '/images/optimized/hero-porsche.webp',
    alt: 'Porsche with a glossy, ceramic protected finish',
    caption: 'Porsche — Paint Protection',
  },
];

export default function GalleryPage() {
  const { openModal } = useLeadModal();

  return (
    <div className="bg-charcoal-950 text-white pt-24 md:pt-32">
      <SEO
        title={`Car Detailing Gallery — Before & After Photos Miami | ${BUSINESS_NAME}`}
        description={`See real before & after results from ${BUSINESS_NAME}. Interior detailing, paint correction, ceramic coating, engine bay & headlight restoration across Miami-Dade. ${GOOGLE_RATING} stars · ${GOOGLE_REVIEW_COUNT}+ Google reviews.`}
        keywords="car detailing before and after Miami, auto detailing gallery, ceramic coating results Miami, mobile detailing photos"
        canonical="/gallery"
      />

      {/* Hero */}
      <section className="relative py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,212,255,0.08),transparent_65%)]" />
        <div className="relative z-10 container-custom text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-charcoal-800/80 border border-charcoal-700 mb-8">
            <span className="w-2 h-2 rounded-full bg-accent" />
            <span className="text-charcoal-200 text-sm font-medium">Real Miami Customers · Real Results</span>
          </div>
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
            Detailing <span className="gradient-text">Gallery</span>
          </h1>
          <p className="text-lg md:text-xl text-charcoal-300 max-w-2xl mx-auto">
            Before & afters from mobile details, paint corrections and ceramic coatings we've done across Miami-Dade County.
          </p>
        </div>
      </section>

      {/* Photo grid */}
      <section className="pb-8">
        <div className="container-custom">
          <div className="grid sm:grid-cols-2 gap-6">
            {photos.map((photo) => (
              <figure key={photo.src} className="group relative overflow-hidden rounded-2xl border border-charcoal-700 bg-charcoal-900">
                <img
                  src={photo.src}
                  alt={photo.alt}
                  loading="lazy"
                  decoding="async"
                  className="w-full aspect-[4/3] object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <figcaption className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-charcoal-950/90 to-transparent px-5 py-4 text-sm font-semibold text-white">
                  {photo.caption}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* Full Google photo gallery */}
      <Gallery />

      {/* Services links */}
      <section className="section-padding bg-charcoal-900">
        <div className="container-custom text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-8">
            Explore Our <span className="gradient-text">Services</span>
          </h2>
          <div className="flex flex-wrap justify-center gap-3 mb-10">
            {services.map((s) => (
              <Link
                key={s.slug}
                to={`/services/${s.slug}`}
                className="px-4 py-2 rounded-full bg-charcoal-800 border border-charcoal-700 text-charcoal-200 text-sm hover:border-accent hover:text-accent transition-colors"
              >
                {s.name}
              </Link>
            ))}
            <Link
              to="/ceramic-coating"
              className="px-4 py-2 rounded-full bg-charcoal-800 border border-charcoal-700 text-charcoal-200 text-sm hover:border-accent hover:text-accent transition-colors"
            >
              Ceramic Coating
            </Link>
          </div>
          <button onClick={() => openModal()} className="btn-primary text-lg px-10 py-4">
            Get Results Like These
          </button>
        </div>
      </section>
    </div>
  );
}

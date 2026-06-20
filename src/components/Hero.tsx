import { Star, MapPin } from 'lucide-react';
import { BUSINESS_NAME, GOOGLE_RATING, GOOGLE_REVIEW_COUNT } from '../constants';
import { useLeadModal } from '../context/LeadModalContext';

export default function Hero() {
  const { openModal } = useLeadModal();

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Hero image */}
      <div className="absolute inset-0 bg-charcoal-950">
        <img
          <img
  src="/images/optimized/hero-porsche.webp"
  alt="William detailing a Porsche 911 in Miami — William's Auto Detailing"
  className="w-full h-full object-cover object-top opacity-55"
  width={1200}
  height={1053}
  fetchPriority="high"
  decoding="async"
/>
          alt="William detailing a Porsche 911 in Miami — William's Auto Detailing"
          className="w-full h-full object-cover object-top opacity-55"
        />

        {/* Address blur — covers "3311" in top-right of image */}
        <div
          className="absolute rounded-sm"
          style={{
            top: '3%',
            right: '9%',
            width: '12%',
            height: '7%',
            backdropFilter: 'blur(14px)',
            WebkitBackdropFilter: 'blur(14px)',
          }}
        />

        <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950 via-charcoal-950/60 to-charcoal-950/20" />
        <div className="absolute inset-0 bg-gradient-to-r from-charcoal-950/60 via-transparent to-charcoal-950/40" />
      </div>

      <div className="absolute top-1/4 -left-32 w-64 h-64 bg-accent/20 rounded-full blur-[128px]" />
      <div className="absolute bottom-1/4 -right-32 w-64 h-64 bg-primary-500/20 rounded-full blur-[128px]" />

      <div className="relative z-10 container-custom text-center px-4 pt-24 md:pt-28">
        <div className="max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-charcoal-800/80 border border-charcoal-700 mb-8 animate-fade-in">
            <span className="flex items-center gap-0.5">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 text-gold fill-gold" />
              ))}
            </span>
            <span className="text-charcoal-200 text-sm font-medium">
              {GOOGLE_RATING} · {GOOGLE_REVIEW_COUNT} Google Reviews
            </span>
            <span className="text-charcoal-600 hidden sm:inline">|</span>
            <span className="hidden sm:flex items-center gap-1 text-charcoal-300 text-sm">
              <MapPin className="w-4 h-4" />
              Miami &amp; Surrounding Areas
            </span>
          </div>

          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
            Premium Miami Mobile Detailing
            <span className="block mt-2 gradient-text">We Come to You</span>
          </h1>

          <p className="text-lg md:text-xl text-charcoal-300 max-w-2xl mx-auto mb-4 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            {BUSINESS_NAME} — Miami's top-rated mobile auto detailing. Professional car detailing at your home, office, or apartment. Exotic cars, luxury vehicles, and daily drivers welcome.
          </p>

          <p className="text-charcoal-400 text-sm mb-10 animate-fade-in-up" style={{ animationDelay: '0.25s' }}>
            Serving Miami, Doral, Brickell, Miami Beach, Coral Gables &amp; all of Miami-Dade
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
            <button
              onClick={() => openModal()}
              className="btn-primary text-lg px-8 py-4"
            >
              Book Your Detail Now
            </button>
            <a href="#services" className="btn-secondary text-lg px-8 py-4">
              View Packages
            </a>
          </div>

          <p className="text-charcoal-400 text-sm mt-8 animate-fade-in" style={{ animationDelay: '0.5s' }}>
            No hidden fees · Satisfaction guaranteed · Eco-friendly products
          </p>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-charcoal-950 to-transparent" />
    </section>
  );
}

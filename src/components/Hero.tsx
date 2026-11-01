import { Star, Phone } from 'lucide-react';
import { PHONE, GOOGLE_RATING, GOOGLE_REVIEW_COUNT } from '../constants';
import { useLeadModal } from '../context/LeadModalContext';

// Home hero: one full-bleed photo of the real work, one headline, one action.
export default function Hero() {
  const { openModal } = useLeadModal();
  const tel = `tel:${PHONE.replace(/\D/g, '')}`;

  return (
    <section className="relative min-h-[92svh] md:min-h-screen flex items-end overflow-hidden bg-charcoal-950">
      <img
        src="/images/optimized/hero-porsche.webp"
        srcSet="/images/optimized/hero-porsche-480.webp 480w, /images/optimized/hero-porsche-768.webp 768w, /images/optimized/hero-porsche.webp 1200w"
        sizes="100vw"
        alt="William detailing a Porsche 911 in a Miami driveway"
        className="hero-drift absolute inset-0 w-full h-full object-cover object-top"
        width={1200}
        height={1053}
        fetchpriority="high"
        decoding="async"
      />

      {/* Neutral scrim under the text band only */}
      <div className="absolute inset-x-0 bottom-0 h-[70%] bg-gradient-to-t from-charcoal-950 via-charcoal-950/70 to-transparent" />

      <div className="relative z-10 container-custom w-full pb-14 md:pb-20">
        <h1
          data-reveal
          className="font-display font-bold text-white tracking-tight leading-[0.95] text-[clamp(44px,7.2vw,108px)] max-w-[14ch]"
        >
          Showroom finish in your driveway.
        </h1>

        <p data-reveal style={{ ['--d' as string]: '80ms' }} className="mt-6 text-lg md:text-xl text-white/90 max-w-xl">
          Miami's 5-star mobile detailer. We detail your car at your home, office or apartment.
        </p>

        <div data-reveal style={{ ['--d' as string]: '160ms' }} className="mt-8 flex flex-col sm:flex-row sm:items-center gap-4">
          <button onClick={() => openModal()} className="btn-primary text-lg px-8 py-4">
            Book My Detail
          </button>
          <a href={tel} className="inline-flex items-center justify-center gap-2 text-white font-semibold hover:text-accent transition-colors py-2">
            <Phone className="w-5 h-5 text-accent" /> Call {PHONE}
          </a>
        </div>

        <p data-reveal style={{ ['--d' as string]: '240ms' }} className="mt-8 flex flex-wrap items-center gap-x-3 gap-y-1 text-white/85 text-base">
          <span className="flex items-center gap-0.5" aria-hidden="true">
            {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 text-gold fill-gold" />)}
          </span>
          <span>{GOOGLE_RATING} from {GOOGLE_REVIEW_COUNT} Google reviews</span>
          <span aria-hidden="true">·</span>
          <span>No payment to book</span>
        </p>
      </div>
    </section>
  );
}

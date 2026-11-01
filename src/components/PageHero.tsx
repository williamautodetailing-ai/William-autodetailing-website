import { Star, Phone } from 'lucide-react';
import type { ReactNode } from 'react';
import { PHONE, GOOGLE_RATING, GOOGLE_REVIEW_COUNT } from '../constants';
import { useReveal } from '../hooks/useReveal';
import { useLeadModal } from '../context/LeadModalContext';

interface PageHeroProps {
  image: string;
  imageAlt: string;
  title: string;
  /** One sentence under the headline */
  sub: string;
  /** e.g. "From $150" — shown in a filled tile beside the button */
  price?: string;
  priceNote?: string;
  /** Name passed to the booking form; omit to open the general form */
  bookAs?: string;
  bookLabel?: string;
  /** Replaces the Book button (e.g. a link to a plan picker) */
  action?: ReactNode;
  /** Small links above the title, e.g. a breadcrumb */
  above?: ReactNode;
}

// Inner-page hero in the home page's style: one real photo, one headline, one action.
export default function PageHero({ image, imageAlt, title, sub, price, priceNote, bookAs, bookLabel = 'Book Now', action, above }: PageHeroProps) {
  const { openModal } = useLeadModal();
  useReveal();
  const tel = `tel:${PHONE.replace(/\D/g, '')}`;

  return (
    <section className="relative min-h-[78svh] flex items-end overflow-hidden bg-charcoal-950">
      <img
        src={image}
        alt={imageAlt}
        className="hero-drift absolute inset-0 w-full h-full object-cover"
        decoding="async"
      />
      <div className="absolute inset-x-0 bottom-0 h-[80%] bg-gradient-to-t from-charcoal-950 via-charcoal-950/80 to-transparent" />

      <div className="relative z-10 container-custom w-full pt-36 pb-12 md:pb-16">
        {above}
        <h1 data-reveal className="font-display font-bold text-white tracking-tight leading-[0.98] text-[clamp(40px,6vw,88px)] max-w-[16ch]">
          {title}
        </h1>
        <p data-reveal style={{ ['--d' as string]: '80ms' }} className="mt-5 text-lg md:text-xl text-white/90 max-w-xl">
          {sub}
        </p>

        <div data-reveal style={{ ['--d' as string]: '160ms' }} className="mt-8 flex flex-col sm:flex-row sm:items-center gap-4">
          {price && (
            <div className="inline-flex flex-col justify-center px-5 py-3 rounded-lg bg-charcoal-800 self-start sm:self-auto">
              <span className="text-xl font-bold text-gold tabular-nums leading-tight">{price}</span>
              {priceNote && <span className="text-sm text-charcoal-300">{priceNote}</span>}
            </div>
          )}
          {action ?? (
            <button onClick={() => openModal(bookAs)} className="btn-primary text-lg px-8 py-4">
              {bookLabel}
            </button>
          )}
          <a href={tel} className="inline-flex items-center gap-2 text-white font-semibold hover:text-accent transition-colors py-2">
            <Phone className="w-5 h-5 text-accent" /> {PHONE}
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
    </section>
  );
}

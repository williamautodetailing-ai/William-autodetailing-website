import { Link } from 'react-router-dom';
import { Phone, MessageSquare } from 'lucide-react';
import { PHONE } from '../../constants';
import { useReveal } from '../../hooks/useReveal';
import { useLeadModal } from '../../context/LeadModalContext';

interface ClosingCtaProps {
  title?: string;
  /** Name passed to the booking form */
  bookAs?: string;
  bookLabel?: string;
  image?: string;
  imageAlt?: string;
}

// Last photograph with the closing offer beside it. Used on the home page and inner pages.
export default function ClosingCta({
  title = 'Your car, detailed this week.',
  bookAs,
  bookLabel = 'Book My Detail',
  image = '/images/optimized/work/exterior-detail-corvette-grand-sport.webp',
  imageAlt = 'Silver Corvette Grand Sport after an exterior detail in Miami',
}: ClosingCtaProps) {
  const { openModal } = useLeadModal();
  useReveal();
  const digits = PHONE.replace(/\D/g, '');

  return (
    <section id="book" className="bg-charcoal-900 lg:grid lg:grid-cols-2 lg:min-h-[80svh]">
      <img
        src={image}
        alt={imageAlt}
        loading="lazy"
        decoding="async"
        width={1000}
        height={1333}
        className="w-full h-[56svh] lg:h-full object-cover object-[40%_60%]"
      />

      <div className="container-custom lg:mx-0 lg:max-w-none flex items-center py-16 lg:px-16 xl:px-24">
        <div className="max-w-md">
          <h2 data-reveal className="font-display text-4xl md:text-5xl font-bold text-white tracking-tight">
            {title}
          </h2>
          <p data-reveal style={{ ['--d' as string]: '80ms' }} className="mt-4 text-lg text-charcoal-200">
            Based in Doral, serving all of{' '}
            <Link to="/areas/miami-mobile-detailing" className="text-white underline underline-offset-4 hover:text-accent">Miami-Dade</Link>.
            Open 7 days, 9am to 6pm.
          </p>
          <div data-reveal style={{ ['--d' as string]: '160ms' }} className="mt-8 flex flex-col sm:flex-row gap-3">
            <button onClick={() => openModal(bookAs)} className="btn-primary text-lg px-8 py-4">
              {bookLabel}
            </button>
            <a href={`sms:${digits}`} className="btn-secondary text-lg px-6 py-4">
              <MessageSquare className="w-5 h-5" /> Text us
            </a>
          </div>
          <a href={`tel:${digits}`} className="mt-5 inline-flex items-center gap-2 text-white hover:text-accent font-semibold transition-colors">
            <Phone className="w-4 h-4 text-accent" /> or call {PHONE}
          </a>
        </div>
      </div>
    </section>
  );
}

import { Phone, Mail, Clock, Instagram, MapPin, Star } from 'lucide-react';
import { Link } from 'react-router-dom';
import { BUSINESS_NAME, PHONE, EMAIL, INSTAGRAM_URL, GOOGLE_REVIEWS_URL, GOOGLE_RATING, GOOGLE_REVIEW_COUNT } from '../constants';
import { cityPages } from '../data/cities';
import { useLeadModal } from '../context/LeadModalContext';

export default function Footer() {
  const { openModal } = useLeadModal();

  return (
    <footer className="bg-charcoal-950 pt-16 pb-8 border-t border-charcoal-800">
      <div className="container-custom">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          <div>
            <Link to="/" className="flex items-center mb-4">
              <img
                src="/images/optimized/williams-logo.webp"
                alt="William's Auto Detailing"
                className="h-14 w-auto object-contain"
                width={256}
                height={256}
                loading="lazy"
                decoding="async"
              />
            </Link>
            <p className="text-charcoal-400 text-sm leading-relaxed mb-4">
              Miami's top-rated mobile auto detailing. We come to you — home, office, or apartment — anywhere in Miami-Dade County.
            </p>
            <div className="inline-flex items-center gap-2 px-3 py-2 rounded-lg bg-charcoal-800 border border-charcoal-700">
              <span className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 text-gold fill-gold" />
                ))}
              </span>
              <span className="text-charcoal-300 text-xs font-medium">
                {GOOGLE_RATING} · {GOOGLE_REVIEW_COUNT} Reviews
              </span>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-white mb-4">Services</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/detail-packages" className="text-charcoal-400 hover:text-accent transition-colors text-sm">
                  Detail Packages
                </Link>
              </li>
              <li>
                <Link to="/ceramic-coating" className="text-charcoal-400 hover:text-accent transition-colors text-sm">
                  Ceramic Coatings
                </Link>
              </li>
              <li>
                <Link to="/add-ons" className="text-charcoal-400 hover:text-accent transition-colors text-sm">
                  Add-Ons
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-white mb-4">Service Areas</h4>
            <ul className="grid grid-cols-2 gap-x-2 gap-y-1.5">
              {cityPages.map((city) => (
                <li key={city.slug}>
                  <Link
                    to={`/areas/${city.slug}`}
                    className="text-charcoal-400 hover:text-accent transition-colors text-sm"
                  >
                    {city.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-white mb-4">Contact</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href={`tel:${PHONE.replace(/\D/g, '')}`}
                  className="flex items-center gap-2 text-charcoal-400 hover:text-accent transition-colors text-sm"
                >
                  <Phone className="w-4 h-4" />
                  {PHONE}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${EMAIL}`}
                  className="flex items-center gap-2 text-charcoal-400 hover:text-accent transition-colors text-sm"
                >
                  <Mail className="w-4 h-4" />
                  {EMAIL}
                </a>
              </li>
              <li className="flex items-center gap-2 text-charcoal-400 text-sm">
                <MapPin className="w-4 h-4" />
                Doral, FL &amp; All of Miami-Dade
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-white mb-4">Hours</h4>
            <div className="flex items-start gap-2 text-charcoal-400 text-sm mb-6">
              <Clock className="w-4 h-4 mt-0.5" />
              <div>
                <p>Mon – Sun: 9am – 6pm</p>
                <p className="text-charcoal-500 mt-1">Flexible scheduling available</p>
              </div>
            </div>

            <h4 className="font-bold text-white mb-3">Follow Us</h4>
            <div className="flex gap-3">
              <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" aria-label="Instagram"
                className="w-10 h-10 rounded-lg bg-charcoal-800 border border-charcoal-700 flex items-center justify-center text-charcoal-400 hover:border-accent hover:text-accent transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href={GOOGLE_REVIEWS_URL} target="_blank" rel="noopener noreferrer" aria-label="Google Reviews"
                className="w-10 h-10 rounded-lg bg-charcoal-800 border border-charcoal-700 flex items-center justify-center text-charcoal-400 hover:border-accent hover:text-accent transition-colors">
                <Star className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-charcoal-800">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-6">
              <p className="text-charcoal-500 text-sm">
                © {new Date().getFullYear()} {BUSINESS_NAME}. All rights reserved.
              </p>
              <Link to="/privacy-policy" className="text-charcoal-500 hover:text-accent transition-colors text-sm">
                Privacy Policy
              </Link>
            </div>
            <button onClick={() => openModal()} className="btn-primary">
              Book Your Detail Now
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}

import { MapPin, Clock, CheckCircle, AlertCircle } from 'lucide-react';
import { allServiceAreas } from '../data/cities';
import { BASE_CITY, TRAVEL_FEE_MILES } from '../constants';
import { useLeadModal } from '../context/LeadModalContext';

export default function ServiceArea() {
  const { openModal } = useLeadModal();

  return (
    <section id="service-area" className="py-10 md:py-24 lg:py-32 bg-charcoal-950 relative overflow-hidden">
      <div className="absolute bottom-0 right-0 w-1/2 h-full bg-gradient-to-l from-accent/5 to-transparent" />

      <div className="container-custom relative z-10">
        <div className="text-center mb-8 md:mb-16">
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            Our <span className="gradient-text">Service Area</span>
          </h2>
          <p className="text-charcoal-400 text-lg max-w-2xl mx-auto">
            We Come to You — Serving Miami &amp; all of Miami-Dade County
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          <div>
            <div className="bg-charcoal-800/50 rounded-3xl p-5 md:p-8 border border-charcoal-700 mb-4 md:mb-6">
              <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                <MapPin className="w-5 h-5 text-accent" />
                Areas We Serve
              </h3>

              <div className="grid grid-cols-3 gap-1.5 mb-4">
                {allServiceAreas.map((area) => (
                  <div
                    key={area}
                    className="flex items-center gap-1 px-2 py-1.5 bg-charcoal-700/50 rounded-lg"
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0" />
                    <span className="text-charcoal-300 text-xs sm:text-sm truncate">{area}</span>
                  </div>
                ))}
              </div>

              <p className="text-charcoal-500 text-sm italic">
                Don't see your area? Contact us — we likely service it!
              </p>
            </div>

            <div className="bg-charcoal-800/50 rounded-xl p-5 border border-charcoal-700 flex items-start gap-3">
              <AlertCircle className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
              <div>
                <p className="text-white font-semibold text-sm">Travel Fee Policy</p>
                <p className="text-charcoal-400 text-sm mt-1">
                  A travel fee applies for locations more than <strong className="text-white">{TRAVEL_FEE_MILES} miles from {BASE_CITY}</strong>. We'll confirm any applicable fees when you book.
                </p>
              </div>
            </div>
          </div>

          <div>
            <div className="space-y-3 mb-8">
              <div className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-accent" />
                <span className="text-charcoal-300">Your home or office parking</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-accent" />
                <span className="text-charcoal-300">Apartment complexes (with permission)</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-accent" />
                <span className="text-charcoal-300">Office buildings &amp; commercial lots</span>
              </div>
              <div className="flex items-center gap-3">
                <Clock className="w-5 h-5 text-accent" />
                <span className="text-charcoal-300">Available 7 days a week, 9am – 6pm</span>
              </div>
            </div>

            <button
              onClick={() => openModal()}
              className="btn-primary w-full justify-center"
            >
              Check Availability
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

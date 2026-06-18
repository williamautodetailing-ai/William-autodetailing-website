import { MapPin, Star, Check, Shield, Droplets } from 'lucide-react';
import { Link } from 'react-router-dom';
import type { CityData } from '../data/cities';
import { packages } from '../data/packages';
import { BUSINESS_NAME, GOOGLE_RATING, GOOGLE_REVIEW_COUNT, TRAVEL_FEE_MILES, BASE_CITY } from '../constants';
import { useLeadModal } from '../context/LeadModalContext';

interface CityPageProps {
  city: CityData;
}

const testimonials = [
  { name: 'Carlos M.', quote: "William did an amazing job on my car. Came right to my house — zero hassle.", rating: 5 },
  { name: 'Maria G.', quote: "The Pristine Detail made my SUV look brand new. Outstanding service!", rating: 5 },
  { name: 'Robert K.', quote: "Best mobile detailing I've found in the area. Professional and thorough.", rating: 5 },
];

export default function CityPage({ city }: CityPageProps) {
  const { openModal } = useLeadModal();
  const mainPackages = packages.filter(p => p.id !== 'windshield');

  return (
    <div className="bg-charcoal-950 text-white pt-24 md:pt-32">
      {/* Hero */}
      <section className="relative py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 opacity-20">
            <img
              src="https://images.pexels.com/photos/325185/pexels-photo-325185.jpeg?auto=compress&cs=tinysrgb&w=1920"
              alt={`Mobile detailing in ${city.name}, FL`}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950 via-charcoal-950/80 to-charcoal-950/60" />
        </div>
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-accent/10 rounded-full blur-[150px]" />

        <div className="relative z-10 container-custom text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-charcoal-800/80 border border-charcoal-700 mb-6">
            <MapPin className="w-4 h-4 text-accent" />
            <span className="text-charcoal-200 text-sm font-medium">{city.name}, {city.state}</span>
          </div>

          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
            Mobile Auto Detailing
            <span className="block gradient-text">in {city.name}, FL</span>
          </h1>

          <p className="text-lg md:text-xl text-charcoal-300 max-w-2xl mx-auto mb-8">
            {BUSINESS_NAME} brings professional mobile detailing directly to {city.name} residents. No need to drive anywhere — we come to your home, office, or apartment.
          </p>

          <div className="flex items-center justify-center gap-2 mb-10">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-5 h-5 text-gold fill-gold" />
            ))}
            <span className="text-charcoal-300 text-sm ml-1">
              {GOOGLE_RATING} · {GOOGLE_REVIEW_COUNT} Google Reviews
            </span>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button onClick={() => openModal()} className="btn-primary text-lg px-8 py-4">
              Book in {city.name}
            </button>
            <a href="#services" className="btn-secondary text-lg px-8 py-4">
              View Packages
            </a>
          </div>
        </div>
      </section>

      {/* About This Location */}
      <section className="py-16 bg-charcoal-900">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-6">
                Detailing <span className="gradient-text">{city.name}</span>
              </h2>
              <p className="text-charcoal-300 text-lg leading-relaxed mb-6">
                {city.description}
              </p>

              {city.travelFee === false && (
                <div className="flex items-start gap-3 bg-charcoal-800/50 rounded-xl p-4 border border-charcoal-700 mb-6">
                  <Check className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                  <p className="text-charcoal-300 text-sm">
                    <strong className="text-white">{city.name} is within our no-travel-fee zone.</strong>{' '}
                    A travel fee only applies for locations more than {TRAVEL_FEE_MILES} miles from {BASE_CITY}.
                  </p>
                </div>
              )}

              {city.landmarks && city.landmarks.length > 0 && (
                <div>
                  <p className="text-charcoal-500 text-sm font-semibold uppercase tracking-wider mb-3">Serving Near</p>
                  <div className="flex flex-wrap gap-2">
                    {city.landmarks.map((lm) => (
                      <span key={lm} className="px-3 py-1.5 bg-charcoal-800 border border-charcoal-700 rounded-full text-sm text-charcoal-300">
                        {lm}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: MapPin, title: 'We Come to You', desc: 'Home, office, or apartment parking' },
                { icon: Shield, title: 'Fully Insured', desc: '$1M liability for your peace of mind' },
                { icon: Droplets, title: 'Self-Contained', desc: 'No water or power needed from you' },
                { icon: Star, title: '5-Star Rated', desc: `${GOOGLE_REVIEW_COUNT} verified Google reviews` },
              ].map((item) => (
                <div key={item.title} className="bg-charcoal-800/50 border border-charcoal-700 rounded-xl p-5 hover:border-accent/40 transition-colors">
                  <item.icon className="w-7 h-7 text-accent mb-3" />
                  <h4 className="font-bold text-white text-sm mb-1">{item.title}</h4>
                  <p className="text-charcoal-400 text-xs">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Packages */}
      <section id="services" className="section-padding bg-charcoal-950 relative">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,212,255,0.04),transparent_70%)]" />
        <div className="container-custom relative z-10">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-4">
              Packages Available in <span className="gradient-text">{city.name}</span>
            </h2>
            <p className="text-charcoal-400 mb-8">Same professional service, delivered to your address in {city.name}.</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {mainPackages.map((pkg) => (
              <div
                key={pkg.id}
                className={`rounded-2xl p-5 flex flex-col transition-all hover:scale-[1.02] ${
                  pkg.popular
                    ? 'bg-gradient-to-b from-accent/10 to-charcoal-800 border-2 border-accent shadow-accent/20 shadow-lg'
                    : 'bg-charcoal-800/50 border border-charcoal-700'
                }`}
              >
                {pkg.popular && (
                  <div className="text-xs font-bold text-accent mb-3 flex items-center gap-1">
                    <Star className="w-3.5 h-3.5 fill-accent" />
                    MOST POPULAR
                  </div>
                )}
                <h3 className="font-bold text-white mb-1">{pkg.name}</h3>
                <p className="text-charcoal-500 text-xs mb-3">{pkg.tagline}</p>
                {pkg.duration && <p className="text-charcoal-500 text-xs mb-3">Est. {pkg.duration}</p>}
                <ul className="space-y-2 mb-5 flex-1">
                  {pkg.features.slice(0, 5).map((f) => (
                    <li key={f} className="flex items-start gap-1.5 text-xs">
                      <Check className={`w-3.5 h-3.5 mt-0.5 flex-shrink-0 ${pkg.popular ? 'text-accent' : 'text-primary-400'}`} />
                      <span className="text-charcoal-300">{f}</span>
                    </li>
                  ))}
                  {pkg.features.length > 5 && (
                    <li className="text-charcoal-500 text-xs pl-5">+{pkg.features.length - 5} more included</li>
                  )}
                </ul>
                <button
                  onClick={() => openModal(pkg.name)}
                  className={`block w-full text-center py-2.5 rounded-lg font-semibold text-sm transition-all ${
                    pkg.popular ? 'bg-accent text-charcoal-950 hover:bg-accent-light' : 'bg-charcoal-700 text-white hover:bg-charcoal-600'
                  }`}
                >
                  Book in {city.name}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-charcoal-900">
        <div className="container-custom">
          <h2 className="font-display text-2xl md:text-3xl font-bold text-white mb-8 text-center">
            What Customers Say
          </h2>
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {testimonials.map((t) => (
              <div key={t.name} className="bg-charcoal-800/50 border border-charcoal-700 rounded-2xl p-6">
                <div className="flex gap-1 mb-3">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-gold fill-gold" />
                  ))}
                </div>
                <p className="text-charcoal-300 text-sm italic mb-4">"{t.quote}"</p>
                <p className="font-semibold text-white text-sm">{t.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Nearby Areas */}
      {city.nearbyAreas && city.nearbyAreas.length > 0 && (
        <section className="py-12 bg-charcoal-950">
          <div className="container-custom">
            <h3 className="font-bold text-white text-lg mb-4 text-center">
              Also Serving Nearby Areas
            </h3>
            <div className="flex flex-wrap justify-center gap-3">
              {city.nearbyAreas.map((area) => (
                <span key={area} className="px-4 py-2 bg-charcoal-800 border border-charcoal-700 rounded-full text-sm text-charcoal-300">
                  {area}
                </span>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="py-20 bg-charcoal-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-accent/10 via-transparent to-primary-500/10" />
        <div className="container-custom relative z-10 text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-4">
            Ready for Your <span className="gradient-text">{city.name} Detail?</span>
          </h2>
          <p className="text-charcoal-400 text-lg mb-8 max-w-xl mx-auto">
            Book online in under 2 minutes. We come to you anywhere in {city.name}.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button onClick={() => openModal()} className="btn-primary text-lg px-10 py-4">
              Book Now in {city.name}
            </button>
            <Link to="/ceramic-coating" className="btn-secondary text-lg px-8 py-4">
              Ceramic Coating
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

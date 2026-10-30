import { Link } from 'react-router-dom';
import { ArrowRight, Clock } from 'lucide-react';
import { services } from '../data/services';

// Grid of clickable cards linking to each /services/:slug page
export default function ServiceCards() {
  return (
    <section id="all-services" className="section-padding bg-charcoal-950 relative">
      <div className="container-custom relative z-10">
        <div className="text-center mb-12">
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            Our <span className="gradient-text">Services</span>
          </h2>
          <p className="text-charcoal-300 text-lg max-w-2xl mx-auto">
            Mobile detailing services across Miami-Dade. Tap any service to see what's included.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {services.map((s) => (
            <Link
              key={s.slug}
              to={`/services/${s.slug}`}
              className="group flex flex-col bg-charcoal-800/50 border border-charcoal-700 rounded-2xl p-6 hover:border-accent/50 transition-all duration-300 hover:shadow-lg hover:shadow-accent/10"
            >
              <h3 className="text-lg font-bold text-white mb-2 group-hover:text-accent transition-colors">{s.name}</h3>
              <p className="text-charcoal-400 text-sm leading-relaxed flex-1 mb-4">{s.summary}</p>
              <div className="flex items-center gap-3 mb-5 text-sm">
                {s.price && <span className="text-gold font-bold">{s.price}</span>}
                {s.duration && (
                  <span className="inline-flex items-center gap-1 text-charcoal-400">
                    <Clock className="w-3.5 h-3.5 text-accent" /> {s.duration}
                  </span>
                )}
              </div>
              <span className="inline-flex items-center justify-center gap-2 w-full py-2.5 rounded-lg bg-charcoal-700 text-white font-semibold text-sm group-hover:bg-accent group-hover:text-charcoal-950 transition-colors">
                View Service <ArrowRight className="w-4 h-4" />
              </span>
            </Link>
          ))}

          <Link
            to="/ceramic-coating"
            className="group flex flex-col bg-gradient-to-br from-gold/10 to-charcoal-900 border border-gold/40 rounded-2xl p-6 hover:border-gold transition-all duration-300"
          >
            <h3 className="text-lg font-bold text-white mb-2 group-hover:text-gold transition-colors">Ceramic Coating</h3>
            <p className="text-charcoal-300 text-sm leading-relaxed flex-1 mb-4">2–5 year professional paint protection with full prep included.</p>
            <div className="mb-5 text-sm text-gold font-bold">From $699</div>
            <span className="inline-flex items-center justify-center gap-2 w-full py-2.5 rounded-lg bg-accent text-charcoal-950 font-semibold text-sm">
              View Service <ArrowRight className="w-4 h-4" />
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}

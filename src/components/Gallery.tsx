import { ExternalLink, Camera, Star } from 'lucide-react';
import { GOOGLE_RATING, GOOGLE_REVIEW_COUNT } from '../constants';

const GOOGLE_PHOTOS_URL = 'https://share.google/O09RVjOI5JFSInkKp';

export default function Gallery() {
  return (
    <section id="gallery" className="section-padding bg-charcoal-950 relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-64 bg-accent/5 rounded-full blur-[120px]" />

      <div className="container-custom relative z-10">
        <div className="text-center mb-12">
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            Our <span className="gradient-text">Work</span>
          </h2>
          <p className="text-charcoal-400 text-lg max-w-2xl mx-auto">
            Real results from real Miami customers. Browse our full photo gallery on Google.
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <a
            href={GOOGLE_PHOTOS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group block bg-charcoal-800/50 border border-charcoal-700 hover:border-accent/60 rounded-3xl p-10 text-center transition-all duration-300 hover:shadow-xl hover:shadow-accent/10"
          >
            <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-accent/20 to-primary-500/20 border border-charcoal-600 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
              <Camera className="w-9 h-9 text-accent" />
            </div>

            <h3 className="font-display text-2xl font-bold text-white mb-3">
              View Our Photo Gallery
            </h3>

            <p className="text-charcoal-400 mb-6 leading-relaxed">
              See before & afters, ceramic coating results, interior restorations, and more — all from real Miami-Dade customers.
            </p>

            <div className="flex items-center justify-center gap-2 mb-8 text-charcoal-400 text-sm">
              <span className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-gold fill-gold" />
                ))}
              </span>
              <span>{GOOGLE_RATING} · {GOOGLE_REVIEW_COUNT} reviews on Google</span>
            </div>

            <span className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-accent to-primary-500 text-charcoal-950 font-semibold rounded-lg group-hover:shadow-lg group-hover:shadow-accent/25 transition-all duration-300">
              Open Gallery on Google
              <ExternalLink className="w-4 h-4" />
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}

import { Link } from 'react-router-dom';
import { cityPages } from '../../data/cities';
import { BASE_CITY, TRAVEL_FEE_MILES } from '../../constants';

// Every service-area page, linked from the home page so each city is one click from the top of the site.
export default function ServiceAreas() {
  return (
    <section className="section-padding bg-charcoal-950">
      <div className="container-custom text-center">
        <h2 data-reveal className="font-display text-4xl md:text-5xl font-bold text-white tracking-tight mb-4">
          Mobile detailing across Miami-Dade.
        </h2>
        <p data-reveal style={{ ['--d' as string]: '80ms' }} className="text-charcoal-300 text-lg max-w-2xl mx-auto mb-10">
          Based in {BASE_CITY}, we come to your home, condo or office in all of these areas. No travel fee within {TRAVEL_FEE_MILES} miles of {BASE_CITY}.
        </p>
        <ul className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
          {cityPages.map((city) => (
            <li key={city.slug}>
              <Link
                to={`/areas/${city.slug}/`}
                className="inline-block px-4 py-2 rounded-full bg-charcoal-800 text-charcoal-200 text-base hover:text-accent transition-colors"
              >
                {city.name} mobile detailing
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

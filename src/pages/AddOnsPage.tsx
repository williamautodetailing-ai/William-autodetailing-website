import { Clock, AlertCircle } from 'lucide-react';
import { addons } from '../data/addons';
import { useLeadModal } from '../context/LeadModalContext';
import { BUSINESS_NAME } from '../constants';
import SEO from '../components/SEO';

export default function AddOnsPage() {
  const { openModal } = useLeadModal();

  return (
    <div className="bg-charcoal-950 text-white pt-24 md:pt-32">
      <SEO
        title={`Add-On Services — Engine Bay, Headlights & More | ${BUSINESS_NAME}`}
        description="Specialty add-on detailing services in Miami. Engine bay cleaning, headlight restoration, odor elimination, pet hair removal, clay bar & more. Book standalone or with any package."
        canonical="/add-ons"
      />
      {/* Hero */}
      <section className="relative py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,212,255,0.08),transparent_65%)]" />
        <div className="decorative-blur absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-accent/8 rounded-full blur-[180px]" />

        <div className="relative z-10 container-custom text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-charcoal-800/80 border border-charcoal-700 mb-8">
            <span className="w-2 h-2 rounded-full bg-accent" />
            <span className="text-charcoal-200 text-sm font-medium">Specialty Add-On Services</span>
          </div>

          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
            Add-On <span className="gradient-text">Services</span>
          </h1>

          <p className="text-lg md:text-xl text-charcoal-300 max-w-2xl mx-auto mb-10">
            Targeted treatments that go beyond the standard detail. Add any of these to your booking, or book them as a standalone service.
          </p>

          <button onClick={() => openModal()} className="btn-primary text-lg px-8 py-4">
            Request a Quote
          </button>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding bg-charcoal-900">
        <div className="container-custom">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {addons.map((addon) => (
              <div
                key={addon.id}
                className="bg-charcoal-800/50 border border-charcoal-700 rounded-2xl p-6 flex flex-col hover:border-accent/40 transition-all duration-300 hover:shadow-lg hover:shadow-accent/5"
              >
                <div className="flex items-start justify-between gap-3 mb-4">
                  <h3 className="text-lg font-bold text-white leading-snug">{addon.name}</h3>
                  {addon.duration && (
                    <div className="flex items-center gap-1.5 px-2.5 py-1 bg-charcoal-700 rounded-full flex-shrink-0">
                      <Clock className="w-3 h-3 text-accent" />
                      <span className="text-xs text-charcoal-300 font-medium whitespace-nowrap">{addon.duration}</span>
                    </div>
                  )}
                </div>

                <p className="text-charcoal-400 text-sm leading-relaxed flex-1 mb-4">
                  {addon.description}
                </p>

                {addon.disclaimer && (
                  <div className="flex items-start gap-2 bg-charcoal-700/50 border border-charcoal-600/50 rounded-lg px-3 py-2.5 mb-4">
                    <AlertCircle className="w-4 h-4 text-amber-400 flex-shrink-0 mt-0.5" />
                    <p className="text-xs text-charcoal-400 leading-relaxed">{addon.disclaimer}</p>
                  </div>
                )}

                <button
                  onClick={() => openModal(addon.name)}
                  className="w-full py-2.5 rounded-lg bg-charcoal-700 text-white font-semibold text-sm hover:bg-charcoal-600 transition-colors"
                >
                  Book This Service
                </button>
              </div>
            ))}
          </div>

          <p className="text-center text-charcoal-500 text-sm mt-10">
            All add-ons can be bundled with any detailing package.{' '}
            <button onClick={() => openModal()} className="text-accent hover:underline">
              Request a quote →
            </button>
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-charcoal-950 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-accent/10 via-transparent to-primary-500/10" />
        <div className="container-custom relative z-10 text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-4">
            Not Sure What You <span className="gradient-text">Need?</span>
          </h2>
          <p className="text-charcoal-400 text-lg mb-8 max-w-xl mx-auto">
            Describe your vehicle and we'll recommend the right combination of services. {BUSINESS_NAME} comes to you.
          </p>
          <button onClick={() => openModal()} className="btn-primary text-lg px-10 py-4">
            Get a Recommendation
          </button>
        </div>
      </section>
    </div>
  );
}

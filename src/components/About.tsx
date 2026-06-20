import { Shield, Leaf, Award, Users } from 'lucide-react';
import { Link } from 'react-router-dom';
import { BUSINESS_NAME } from '../constants';
import { useLeadModal } from '../context/LeadModalContext';

const stats = [
  { icon: Users, value: '400+', label: 'Happy Customers' },
  { icon: Award, value: '4+', label: 'Years Experience' },
  { icon: Shield, value: '100%', label: 'Satisfaction Rate' },
  { icon: Leaf, value: 'Eco', label: 'Friendly Products' },
];

export default function About() {
  const { openModal } = useLeadModal();
  return (
    <section id="about" className="section-padding bg-charcoal-900 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(0,212,255,0.08),transparent_50%)]" />

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="order-2 lg:order-1">
            <div className="relative">
              <div className="aspect-[4/5] rounded-3xl overflow-hidden bg-charcoal-800 border border-charcoal-700 max-w-md mx-auto lg:mx-0">
                <img
                  src="/images/optimized/about-us/audi-r8.webp"
                  alt="William detailing an Audi R8 in Miami"
                  className="w-full h-full object-cover object-center"
                  width={900}
                  height={941}
                  loading="lazy"
                  decoding="async"
                />
              </div>

              <div className="absolute -bottom-6 -right-6 bg-charcoal-800 rounded-2xl p-6 border border-charcoal-700 shadow-xl max-w-xs hidden lg:block">
                <div className="flex items-center gap-3 mb-2">
                  <Shield className="w-6 h-6 text-accent" />
                  <span className="font-bold text-white">Fully Insured</span>
                </div>
                <p className="text-charcoal-400 text-sm">
                  $1M liability coverage for your complete peace of mind
                </p>
              </div>
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-charcoal-800 border border-charcoal-700 mb-6">
              <Award className="w-4 h-4 text-accent" />
              <span className="text-charcoal-300 text-sm font-medium">Miami-Dade's Trusted Mobile Detailer</span>
            </div>

            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              About <span className="gradient-text">{BUSINESS_NAME}</span>
            </h2>

            <div className="space-y-5 text-charcoal-300 mb-8">
              <p>
                Based in Doral, FL, {BUSINESS_NAME} has built its reputation on one simple principle: treat every vehicle as if it were our own. We come to you — no dropping off, no waiting, no hassle.
              </p>
              <p>
                We use only premium, eco-friendly products that are safe for your family and the environment. Our ceramic-grade sealants and pH-balanced cleaners deliver showroom results without harsh chemicals.
              </p>
              <p>
                Fully insured and certified, we serve all of Miami-Dade County from our home base in Doral. A travel fee applies for locations more than 15 miles out — we'll always be upfront about pricing.
              </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="bg-charcoal-800/50 rounded-xl p-4 text-center border border-charcoal-700"
                >
                  <stat.icon className="w-6 h-6 text-accent mx-auto mb-2" />
                  <div className="text-xl font-bold text-white">{stat.value}</div>
                  <div className="text-charcoal-400 text-sm">{stat.label}</div>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <button onClick={() => openModal()} className="btn-primary">
                Book Now
              </button>
              <Link to="/ceramic-coating" className="btn-secondary">
                Explore Ceramic Coating
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

import { Calendar, MapPin, Car } from 'lucide-react';

const steps = [
  {
    icon: Calendar,
    title: 'Book Online',
    description: 'Choose your package and schedule a time that works for you. Book in under 2 minutes.',
  },
  {
    icon: MapPin,
    title: 'We Come to You',
    description: 'Our mobile unit arrives at your location with all the professional equipment needed.',
  },
  {
    icon: Car,
    title: 'Drive Away Spotless',
    description: 'Relax while we work. Your car will look and feel brand new when we finish.',
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-16 md:py-20 bg-charcoal-950 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-accent/5 rounded-full blur-[160px]" />

      <div className="container-custom relative z-10">
        <div className="text-center mb-10">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-3">
            How It <span className="gradient-text">Works</span>
          </h2>
          <p className="text-charcoal-300 max-w-xl mx-auto">
            Three simple steps to a spotless vehicle — no drop-off, no waiting rooms.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-5 max-w-4xl mx-auto">
          {steps.map((step, index) => (
            <div
              key={step.title}
              className="flex gap-4 items-start bg-charcoal-800/50 border border-charcoal-700 rounded-2xl p-5 hover:border-accent/40 transition-colors"
            >
              <div className="flex-shrink-0 relative">
                <div className="w-12 h-12 rounded-full bg-accent/15 border border-accent/25 flex items-center justify-center">
                  <step.icon className="w-5 h-5 text-accent" />
                </div>
                <span className="absolute -top-1.5 -right-1.5 w-5 h-5 rounded-full bg-accent text-charcoal-950 text-xs font-bold flex items-center justify-center">
                  {index + 1}
                </span>
              </div>
              <div>
                <h3 className="font-bold text-white mb-1">{step.title}</h3>
                <p className="text-charcoal-300 text-sm leading-relaxed">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

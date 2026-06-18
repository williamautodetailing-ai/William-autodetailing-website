import { useState, useEffect } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { GOOGLE_RATING, GOOGLE_REVIEW_COUNT } from '../constants';

const testimonials = [
  {
    name: 'Jessica Hernandez',
    role: 'Doral, FL',
    initials: 'JH',
    rating: 5,
    timeAgo: '19 weeks ago',
    quote: "Will is AMAZING and his work follows. I reached out on a Thursday and by Friday morning my car was clean. His attention to detail is excellent! If you are looking at other mobile car services, look no further. I promise you won't be disappointed with his work and the outcome of your vehicle! Thank you again, Will! My car looks brand new!",
  },
  {
    name: 'Jonathan Hawat',
    role: 'Local Guide',
    initials: 'JH',
    rating: 5,
    timeAgo: '9 weeks ago',
    quote: "I needed a wash and was from out of state. Messaged him we communicated, got straight to business and the job was done. Came out amazing. Trustworthy, Communication, service all 5 stars and definitely recommend. Thank you again",
  },
  {
    name: 'Carlos Lucero',
    role: 'Miami, FL',
    initials: 'CL',
    rating: 5,
    timeAgo: '24 weeks ago',
    quote: "William's Auto Detailing did an absolutely outstanding job on my BMW — it honestly looks better than when I first got it. The attention to detail was next level; the paint, wheels, and interior all look flawless. William was professional, punctual, and communicated clearly throughout the process. You can tell he truly takes pride in his work. The convenience of mobile detailing made it even better. I've already scheduled future maintenance and highly recommend him to anyone looking for top-tier detailing.",
  },
  {
    name: 'Steven',
    role: 'Local Guide · Miami, FL',
    initials: 'S',
    rating: 5,
    timeAgo: '16 weeks ago',
    quote: "Best auto detailing in Miami, great customer service and very professional throughout the whole process. He did a paint correction and ceramic on my car and it came out looking brand new with all the really bad swirl marks gone after. Highly recommend if you want your cars paint looking like it just came off the showroom floor.",
  },
  {
    name: 'Danny Hernandez',
    role: 'Miami, FL',
    initials: 'DH',
    rating: 5,
    timeAgo: '13 weeks ago',
    quote: "William's Auto Detailing came out to me for mobile detailing in Miami and did an amazing job detailing my car inside and out. The convenience of having everything done at my location made the experience super easy and stress-free. I had my brand new Tesla Model 3 ceramic coated with their 2–3 year coating package and it came out absolutely perfect. The paint looks incredibly glossy and smooth, and you can really tell they pay attention to every detail. They took the time to explain the ceramic coating process and how to properly maintain it so it lasts. The quality of work and professionalism were top tier, so I've already signed up for their monthly maintenance plan to keep the car looking this good. If you're looking for high-quality mobile detailing in Miami or ceramic coating, I highly recommend William's Auto Detailing.",
  },
];

const avatarColors: Record<string, string> = {
  JH: 'from-blue-500 to-blue-700',
  CL: 'from-emerald-500 to-emerald-700',
  S: 'from-violet-500 to-violet-700',
  DH: 'from-orange-500 to-orange-700',
};

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const goTo = (index: number) => {
    setActiveIndex(index);
    setIsAutoPlaying(false);
  };

  const next = () => { setActiveIndex((prev) => (prev + 1) % testimonials.length); setIsAutoPlaying(false); };
  const prev = () => { setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length); setIsAutoPlaying(false); };

  const active = testimonials[activeIndex];
  const colorClass = avatarColors[active.initials] ?? 'from-accent to-primary-500';

  return (
    <section id="testimonials" className="section-padding bg-charcoal-900 relative overflow-hidden">
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-accent/5 rounded-full blur-[150px]" />

      <div className="container-custom relative z-10">
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            What Our <span className="gradient-text">Customers Say</span>
          </h2>
          <div className="inline-flex items-center gap-2 text-charcoal-400">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-4 h-4 text-gold fill-gold" />
            ))}
            <span className="text-sm">{GOOGLE_RATING} · {GOOGLE_REVIEW_COUNT} Google Reviews</span>
          </div>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="flex justify-center gap-4 mb-8">
            <button onClick={prev} className="p-3 rounded-full bg-charcoal-800 border border-charcoal-700 text-white hover:border-accent transition-colors" aria-label="Previous">
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button onClick={next} className="p-3 rounded-full bg-charcoal-800 border border-charcoal-700 text-white hover:border-accent transition-colors" aria-label="Next">
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

          <div className="relative bg-charcoal-800/50 rounded-3xl p-8 md:p-12 border border-charcoal-700 min-h-[280px]">
            <Quote className="absolute top-6 left-6 w-12 h-12 text-accent/20 rotate-180" />

            <div className="text-center relative z-10">
              <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${colorClass} flex items-center justify-center mx-auto mb-5`}>
                <span className="text-white font-bold text-lg">{active.initials}</span>
              </div>

              <div className="flex justify-center gap-1 mb-4">
                {[...Array(active.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-gold fill-gold" />
                ))}
              </div>

              <blockquote className="text-lg md:text-xl text-white font-medium leading-relaxed mb-6 max-w-3xl mx-auto">
                "{active.quote}"
              </blockquote>

              <p className="font-bold text-white">{active.name}</p>
              <p className="text-charcoal-400 text-sm">{active.role} · {active.timeAgo}</p>
            </div>
          </div>

          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => goTo(i)}
                className={`h-2 rounded-full transition-all ${i === activeIndex ? 'bg-accent w-6' : 'w-2 bg-charcoal-600 hover:bg-charcoal-500'}`}
                aria-label={`Review ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// Three stages, each a real photo and one sentence.
const stages = [
  {
    title: 'Pick your detail.',
    text: 'Choose a service and a day. No payment up front.',
    src: '/images/optimized/work/interior-detail-bmw-black-leather.webp',
    alt: 'BMW interior ready for a detail',
  },
  {
    title: 'We come to you.',
    text: 'Home, office or apartment, anywhere in Miami-Dade.',
    src: '/images/optimized/work/foam-bath-hand-wash-bmw-m2.webp',
    alt: 'BMW M2 covered in foam during a mobile hand wash',
  },
  {
    title: 'Drive away spotless.',
    text: 'Most details take 2 to 5 hours, start to finish.',
    src: '/images/optimized/work/porsche-gt3-rs-mobile-detail-miami.webp',
    alt: 'Two freshly detailed Porsche 911 GT3 RS cars in a Miami driveway',
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 md:py-36 bg-charcoal-950">
      <div className="container-custom">
        <h2 data-reveal className="font-display text-4xl md:text-6xl font-bold text-white tracking-tight mb-10 md:mb-14">
          Booked in 2 minutes.
        </h2>
        <ol className="grid sm:grid-cols-3 gap-10 sm:gap-6 lg:gap-10">
          {stages.map((s, i) => (
            <li key={s.title} data-reveal style={{ ['--d' as string]: `${i * 90}ms` }}>
              <img
                src={s.src}
                alt={s.alt}
                loading="lazy"
                decoding="async"
                width={800}
                height={1000}
                className="w-full aspect-[4/5] object-cover"
              />
              <h3 className="mt-5 font-display text-2xl md:text-3xl font-bold text-white">{s.title}</h3>
              <p className="mt-2 text-lg text-charcoal-200">{s.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

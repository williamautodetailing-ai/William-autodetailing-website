import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useLeadModal } from '../context/LeadModalContext';

// Served as /404.html with a real 404 status, so search engines drop dead URLs
// instead of indexing them as copies of the home page.
export default function NotFoundPage() {
  const { openModal } = useLeadModal();

  useEffect(() => {
    document.title = "Page not found | William's Auto Detailing";
    let robots = document.querySelector('meta[name="robots"]') as HTMLMetaElement | null;
    if (!robots) {
      robots = document.createElement('meta');
      robots.name = 'robots';
      document.head.appendChild(robots);
    }
    robots.content = 'noindex';
  }, []);

  return (
    <main className="min-h-[80svh] flex items-center bg-charcoal-950">
      <div className="container-custom pt-36 pb-20">
        <h1 className="font-display font-bold text-white tracking-tight text-5xl md:text-6xl">
          This page isn't here.
        </h1>
        <p className="mt-5 text-lg text-charcoal-200 max-w-xl">
          The link may be old or mistyped. Here's where most people are headed.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row gap-3">
          <button onClick={() => openModal()} className="btn-primary text-lg px-8 py-4">
            Book My Detail
          </button>
          <Link to="/" className="btn-secondary text-lg px-6 py-4">
            Go to the home page
          </Link>
        </div>
        <ul className="mt-10 flex flex-wrap gap-x-6 gap-y-3 text-base">
          <li><Link to="/detail-packages" className="text-white underline underline-offset-4 hover:text-accent">Detail packages</Link></li>
          <li><Link to="/ceramic-coating" className="text-white underline underline-offset-4 hover:text-accent">Ceramic coating</Link></li>
          <li><Link to="/maintenance-club" className="text-white underline underline-offset-4 hover:text-accent">Maintenance Club</Link></li>
          <li><Link to="/gallery" className="text-white underline underline-offset-4 hover:text-accent">Gallery</Link></li>
        </ul>
      </div>
    </main>
  );
}

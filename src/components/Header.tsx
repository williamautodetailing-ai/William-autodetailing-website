import { useState, useEffect } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { cityPages } from '../data/cities';
import { useLeadModal } from '../context/LeadModalContext';

const navLinks = [
  { href: '/#how-it-works', label: 'How It Works' },
  { href: '/#services', label: 'Services' },
  { href: '/#gallery', label: 'Gallery' },
  { href: '/#testimonials', label: 'Reviews' },
  { href: '/ceramic-coating', label: 'Ceramic Coating', isPage: true },
  { href: '/add-ons', label: 'Add-Ons', isPage: true },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isCitiesOpen, setIsCitiesOpen] = useState(false);
  const location = useLocation();
  const { openModal } = useLeadModal();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
    setIsCitiesOpen(false);
  }, [location.pathname]);

  const isHomePage = location.pathname === '/';

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled || !isHomePage || isMobileMenuOpen
            ? 'bg-charcoal-950 shadow-lg shadow-black/20'
            : 'bg-transparent'
        }`}
      >
        <div className="container-custom">
          <div className="flex items-center justify-between h-24 md:h-32">
            <Link to="/" className="flex items-center">
              <img
                src="/images/optimized/williams-logo.webp"
                alt="William's Auto Detailing"
                className="h-20 md:h-28 w-auto object-contain"
                width={256}
                height={256}
                fetchpriority="high"
              />
            </Link>

            <nav className="hidden md:flex items-center gap-6">
              {navLinks.map((link) =>
                link.isPage ? (
                  <Link
                    key={link.href}
                    to={link.href}
                    className={`text-charcoal-200 hover:text-accent transition-colors font-medium ${
                      location.pathname === link.href ? 'text-accent' : ''
                    }`}
                  >
                    {link.label}
                  </Link>
                ) : (
                  <a
                    key={link.href}
                    href={link.href}
                    className="text-charcoal-200 hover:text-accent transition-colors font-medium"
                  >
                    {link.label}
                  </a>
                )
              )}

              <div
                className="relative"
                onMouseEnter={() => setIsCitiesOpen(true)}
                onMouseLeave={() => setIsCitiesOpen(false)}
              >
                <button className="flex items-center gap-1 text-charcoal-200 hover:text-accent transition-colors font-medium">
                  Areas <ChevronDown className="w-4 h-4" />
                </button>

                {isCitiesOpen && (
                  <div className="absolute top-full left-1/2 -translate-x-1/2 pt-3 z-50">
                    <div className="bg-charcoal-900 border border-charcoal-700 rounded-xl shadow-2xl p-3 w-72 grid grid-cols-2 gap-1">
                      {cityPages.map((city) => (
                        <Link
                          key={city.slug}
                          to={`/areas/${city.slug}`}
                          className="px-3 py-2 rounded-lg text-sm text-charcoal-300 hover:text-accent hover:bg-charcoal-800 transition-colors"
                        >
                          {city.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </nav>

            <div className="hidden md:block">
              <button onClick={() => openModal()} className="btn-primary">
                Book Now
              </button>
            </div>

            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 text-charcoal-200 hover:text-white"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {isMobileMenuOpen && (
          <div className="md:hidden bg-charcoal-950 border-t border-charcoal-800 max-h-[80vh] overflow-y-auto">
            <nav className="container-custom py-4 flex flex-col gap-2">
              {navLinks.map((link) =>
                link.isPage ? (
                  <Link
                    key={link.href}
                    to={link.href}
                    className="text-charcoal-200 hover:text-accent transition-colors font-medium py-2 px-2 rounded-lg hover:bg-charcoal-800"
                  >
                    {link.label}
                  </Link>
                ) : (
                  <a
                    key={link.href}
                    href={link.href}
                    className="text-charcoal-200 hover:text-accent transition-colors font-medium py-2 px-2 rounded-lg hover:bg-charcoal-800"
                  >
                    {link.label}
                  </a>
                )
              )}

              <div className="border-t border-charcoal-800 pt-3 mt-1">
                <p className="text-charcoal-500 text-xs font-semibold uppercase tracking-wider px-2 mb-2">Service Areas</p>
                <div className="grid grid-cols-2 gap-1">
                  {cityPages.map((city) => (
                    <Link
                      key={city.slug}
                      to={`/areas/${city.slug}`}
                      className="text-charcoal-300 hover:text-accent text-sm py-2 px-2 rounded-lg hover:bg-charcoal-800 transition-colors"
                    >
                      {city.name}
                    </Link>
                  ))}
                </div>
              </div>

              <button
                onClick={() => { openModal(); setIsMobileMenuOpen(false); }}
                className="btn-primary mt-3 justify-center"
              >
                Book Now
              </button>
            </nav>
          </div>
        )}
      </header>

      <button
        onClick={() => openModal()}
        className="fixed bottom-6 right-6 z-50 md:hidden btn-primary shadow-lg shadow-accent/30"
      >
        Book Now
      </button>
    </>
  );
}

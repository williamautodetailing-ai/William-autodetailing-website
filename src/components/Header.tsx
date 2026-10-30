import { useState, useEffect } from 'react';
import { Menu, X, ChevronDown, Gift } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { cityPages } from '../data/cities';
import { services } from '../data/services';
import { useLeadModal } from '../context/LeadModalContext';

const serviceLinks = [
  ...services.map((s) => ({ href: `/services/${s.slug}`, label: s.name })),
  { href: '/detail-packages', label: 'Detail Packages' },
  { href: '/add-ons', label: 'Add-Ons' },
];

const navLinks = [
  { href: '/ceramic-coating', label: 'Ceramic Coating' },
  { href: '/maintenance-club', label: 'Maintenance Club' },
  { href: '/gallery', label: 'Gallery' },
];

const REFER_HREF = '/refer';
const REFER_LABEL = 'Give a Wax, Get a Wax';

const navItemClass = 'whitespace-nowrap text-charcoal-200 hover:text-accent transition-colors font-medium';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isCitiesOpen, setIsCitiesOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
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
    setIsServicesOpen(false);
  }, [location.pathname]);

  const isHomePage = location.pathname === '/';
  const isActive = (href: string) => location.pathname === href;

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
          <div className="flex items-center justify-between gap-6 h-24 md:h-32">
            <Link to="/" className="flex items-center flex-shrink-0">
              <img
                src="/images/optimized/williams-logo.webp"
                alt="William's Auto Detailing"
                className="h-20 md:h-28 w-auto object-contain"
                width={256}
                height={256}
                fetchpriority="high"
              />
            </Link>

            <nav className="hidden lg:flex items-center gap-8">
              <div
                className="relative"
                onMouseEnter={() => setIsServicesOpen(true)}
                onMouseLeave={() => setIsServicesOpen(false)}
              >
                <button className={`flex items-center gap-1 ${navItemClass}`}>
                  Services <ChevronDown className="w-4 h-4" />
                </button>

                {isServicesOpen && (
                  <div className="absolute top-full left-1/2 -translate-x-1/2 pt-3 z-50">
                    <div className="bg-charcoal-900 border border-charcoal-700 rounded-xl shadow-2xl p-3 w-64 flex flex-col gap-1">
                      {serviceLinks.map((s) => (
                        <Link
                          key={s.href}
                          to={s.href}
                          className="px-3 py-2 rounded-lg text-sm text-charcoal-300 hover:text-accent hover:bg-charcoal-800 transition-colors"
                        >
                          {s.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  className={`${navItemClass} ${isActive(link.href) ? 'text-accent' : ''}`}
                >
                  {link.label}
                </Link>
              ))}

              <div
                className="relative"
                onMouseEnter={() => setIsCitiesOpen(true)}
                onMouseLeave={() => setIsCitiesOpen(false)}
              >
                <button className={`flex items-center gap-1 ${navItemClass}`}>
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

              <Link
                to={REFER_HREF}
                className={`inline-flex items-center gap-2 whitespace-nowrap px-4 py-2 rounded-full border text-sm font-semibold transition-colors ${
                  isActive(REFER_HREF)
                    ? 'border-accent bg-accent/10 text-accent'
                    : 'border-accent/50 text-accent hover:bg-accent/10 hover:border-accent'
                }`}
              >
                <Gift className="w-4 h-4" />
                {REFER_LABEL}
              </Link>
            </nav>

            <div className="hidden md:block flex-shrink-0">
              <button onClick={() => openModal()} className="btn-primary whitespace-nowrap">
                Book Now
              </button>
            </div>

            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 text-charcoal-200 hover:text-white"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {isMobileMenuOpen && (
          <div className="lg:hidden bg-charcoal-950 border-t border-charcoal-800 max-h-[80vh] overflow-y-auto">
            <nav className="container-custom py-4 flex flex-col gap-2">
              <div>
                <p className="text-charcoal-500 text-xs font-semibold uppercase tracking-wider px-2 mb-2">Services</p>
                <div className="grid grid-cols-2 gap-1">
                  {serviceLinks.map((s) => (
                    <Link
                      key={s.href}
                      to={s.href}
                      className="text-charcoal-300 hover:text-accent text-sm py-2 px-2 rounded-lg hover:bg-charcoal-800 transition-colors"
                    >
                      {s.label}
                    </Link>
                  ))}
                </div>
              </div>

              <div className="border-t border-charcoal-800 pt-3 mt-1 flex flex-col gap-1">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    to={link.href}
                    className="text-charcoal-200 hover:text-accent transition-colors font-medium py-2 px-2 rounded-lg hover:bg-charcoal-800"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>

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

              <Link
                to={REFER_HREF}
                className="mt-3 inline-flex items-center justify-center gap-2 px-4 py-3 rounded-full border border-accent/50 text-accent font-semibold hover:bg-accent/10 transition-colors"
              >
                <Gift className="w-4 h-4" />
                {REFER_LABEL}
              </Link>

              <button
                onClick={() => { openModal(); setIsMobileMenuOpen(false); }}
                className="btn-primary mt-2 justify-center"
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

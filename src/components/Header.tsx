import { useState, useEffect } from 'react';
import { Menu, X, ChevronDown, Gift, Phone, MessageSquare } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { cityPages } from '../data/cities';
import { services } from '../data/services';
import { useLeadModal } from '../context/LeadModalContext';
import { PHONE } from '../constants';

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
  const [showFloatingCta, setShowFloatingCta] = useState(false);
  const location = useLocation();
  const { openModal } = useLeadModal();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      // Floating Book Now appears once the page's own hero buttons have scrolled away
      setShowFloatingCta(window.scrollY > 500);
    };
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

            <nav className="hidden xl:flex items-center gap-6 2xl:gap-8">
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
                    ? 'border-gold bg-gold/10 text-gold'
                    : 'border-gold/50 text-gold hover:bg-gold/10 hover:border-gold'
                }`}
              >
                <Gift className="w-4 h-4" />
                {REFER_LABEL}
              </Link>
            </nav>

            <div className="hidden md:flex items-center gap-4 flex-shrink-0 ml-auto xl:ml-0">
              <a
                href={`tel:${PHONE.replace(/\D/g, '')}`}
                className="flex items-center gap-2 whitespace-nowrap text-charcoal-200 hover:text-accent transition-colors font-medium"
                aria-label={`Call ${PHONE}`}
              >
                <Phone className="w-4 h-4 text-accent" />
                <span className="hidden 2xl:inline">{PHONE}</span>
              </a>
              <button onClick={() => openModal()} className="btn-primary whitespace-nowrap">
                Book Now
              </button>
            </div>

            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="xl:hidden p-2 text-charcoal-200 hover:text-white"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {isMobileMenuOpen && (
          <div className="xl:hidden bg-charcoal-950 border-t border-charcoal-800 max-h-[80vh] overflow-y-auto">
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
                className="mt-3 inline-flex items-center justify-center gap-2 px-4 py-3 rounded-full border border-gold/50 text-gold font-semibold hover:bg-gold/10 transition-colors"
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
              <a
                href={`tel:${PHONE.replace(/\D/g, '')}`}
                className="inline-flex items-center justify-center gap-2 py-3 text-charcoal-200 font-medium hover:text-accent transition-colors"
              >
                <Phone className="w-4 h-4 text-accent" /> Call {PHONE}
              </a>
            </nav>
          </div>
        )}
      </header>

      {/* Phone action bar: Call · Text · Book, once the page's own buttons have scrolled away */}
      <div
        className={`fixed inset-x-0 bottom-0 z-50 md:hidden bg-charcoal-900 pb-[env(safe-area-inset-bottom)] transition-transform duration-300 ${
          showFloatingCta && !isMobileMenuOpen ? 'translate-y-0' : 'translate-y-full'
        }`}
        aria-hidden={!showFloatingCta || isMobileMenuOpen}
      >
        <div className="grid grid-cols-[1fr_1fr_1.6fr] gap-2 p-2">
          <a
            href={`tel:${PHONE.replace(/\D/g, '')}`}
            tabIndex={showFloatingCta ? 0 : -1}
            className="flex flex-col items-center justify-center gap-0.5 py-2 rounded-lg text-charcoal-200 hover:text-white hover:bg-charcoal-800 text-[13px] font-semibold"
          >
            <Phone className="w-5 h-5 text-accent" /> Call
          </a>
          <a
            href={`sms:${PHONE.replace(/\D/g, '')}`}
            tabIndex={showFloatingCta ? 0 : -1}
            className="flex flex-col items-center justify-center gap-0.5 py-2 rounded-lg text-charcoal-200 hover:text-white hover:bg-charcoal-800 text-[13px] font-semibold"
          >
            <MessageSquare className="w-5 h-5 text-accent" /> Text
          </a>
          <button
            onClick={() => openModal()}
            tabIndex={showFloatingCta ? 0 : -1}
            className="btn-primary justify-center text-base"
          >
            Book Now
          </button>
        </div>
      </div>
    </>
  );
}

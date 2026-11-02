import { Suspense } from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import { Routes, Route, Navigate, useParams, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import HowItWorks from './components/HowItWorks';
import Results from './components/home/Results';
import PriceMenu from './components/home/PriceMenu';
import ClosingCta from './components/home/ClosingCta';

import Testimonials from './components/Testimonials';


import Footer from './components/Footer';
import CeramicCoatingPage from './pages/CeramicCoatingPage';
import DetailPackagesPage from './pages/DetailPackagesPage';
import AddOnsPage from './pages/AddOnsPage';
import PrivacyPolicyPage from './pages/PrivacyPolicyPage';
import CityPage from './pages/CityPage';
import CeramicCityPage from './pages/CeramicCityPage';
import GalleryPage from './pages/GalleryPage';
import ServicePage from './pages/ServicePage';
import MaintenanceClubPage from './pages/MaintenanceClubPage';
import LandingPage from './pages/LandingPage';
import ReferralPage from './pages/ReferralPage';
import SpecialOfferPage from './pages/SpecialOfferPage';
import NotFoundPage from './pages/NotFoundPage';
import { cityPages } from './data/cities';
import { services } from './data/services';

import { ceramicCities } from './data/ceramicCities';
import { LeadModalProvider } from './context/LeadModalContext';
import LeadFormModal from './components/LeadFormModal';

function HomePage() {
  return (
    <main>
      <Hero />
      <Results />
      <PriceMenu />
      <HowItWorks />
      <Testimonials />
      <ClosingCta />
    </main>
  );
}

function CityRoute() {
  const { slug } = useParams<{ slug: string }>();
  const city = cityPages.find((c) => c.slug === slug);
  if (!city) return <Navigate to="/" replace />;
  return <CityPage city={city} />;
}

function CeramicCityRoute() {
  const { slug } = useParams<{ slug: string }>();
  const content = ceramicCities.find((c) => c.citySlug === slug);
  if (!content) return <Navigate to="/ceramic-coating" replace />;
  return <CeramicCityPage content={content} />;
}

function ServiceRoute() {
  const { slug } = useParams<{ slug: string }>();
  const service = services.find((s) => s.slug === slug);
  if (!service) return <Navigate to="/detail-packages" replace />;
  return <ServicePage service={service} />;
}

// Mirrors AppLayout in App.tsx: ad landing pages have no site header or footer.
function AppLayout() {
  const { pathname } = useLocation();
  const path = pathname.replace(/\/$/, '');
  const isLanding = path === '/book' || path === '/199-special';
  return (
      <div className="min-h-screen bg-charcoal-950 text-white">
        {!isLanding && <Header />}
        {/* Suspense boundary must match the client tree in App.tsx, otherwise
            hydration mismatches and the page content renders twice. */}
        <Suspense fallback={null}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/ceramic-coating" element={<CeramicCoatingPage />} />
            <Route path="/ceramic-coating/:slug" element={<CeramicCityRoute />} />
            <Route path="/detail-packages" element={<DetailPackagesPage />} />
            <Route path="/add-ons" element={<AddOnsPage />} />
            <Route path="/gallery" element={<GalleryPage />} />
            <Route path="/maintenance-club" element={<MaintenanceClubPage />} />
            <Route path="/services/:slug" element={<ServiceRoute />} />
            <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
            <Route path="/areas/:slug" element={<CityRoute />} />
            <Route path="/book" element={<LandingPage />} />
            <Route path="/refer" element={<ReferralPage />} />
            <Route path="/199-special" element={<SpecialOfferPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </Suspense>
        {!isLanding && <Footer />}
        <LeadFormModal />
      </div>
  );
}

function AppShell({ url }: { url: string }) {
  return (
    <StaticRouter location={url}>
      <AppLayout />
    </StaticRouter>
  );
}

export function render(url: string): string {
  return renderToString(
    <LeadModalProvider>
      <AppShell url={url} />
    </LeadModalProvider>
  );
}

export const routes: string[] = [
  '/',
  '/ceramic-coating',
  '/detail-packages',
  '/add-ons',
  '/gallery',
  '/maintenance-club',
  '/privacy-policy',
  '/book',
  '/refer',
  '/199-special',
  ...services.map((s) => `/services/${s.slug}`),
  ...cityPages.map((c) => `/areas/${c.slug}`),
  ...ceramicCities.map((c) => `/ceramic-coating/${c.citySlug}`),
];

// Re-exported so the prerender script can build per-page meta from a single
// source of truth (see scripts/prerender.mjs).
export { ceramicCities, services };

/** Path rendered to dist/404.html; any URL no route matches shows the not-found page. */
export const notFoundRoute = '/__not-found__';

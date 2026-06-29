import { Suspense } from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import { Routes, Route, Navigate, useParams } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import HowItWorks from './components/HowItWorks';
import Services from './components/Services';
import Gallery from './components/Gallery';
import Testimonials from './components/Testimonials';
import ServiceArea from './components/ServiceArea';
import About from './components/About';
import Footer from './components/Footer';
import CeramicCoatingPage from './pages/CeramicCoatingPage';
import DetailPackagesPage from './pages/DetailPackagesPage';
import AddOnsPage from './pages/AddOnsPage';
import PrivacyPolicyPage from './pages/PrivacyPolicyPage';
import CityPage from './pages/CityPage';
import CeramicCityPage from './pages/CeramicCityPage';
import { cityPages } from './data/cities';
import { ceramicCities } from './data/ceramicCities';
import { LeadModalProvider } from './context/LeadModalContext';
import LeadFormModal from './components/LeadFormModal';

function HomePage() {
  return (
    <main>
      <Hero />
      <HowItWorks />
      <Services />
      <Gallery />
      <Testimonials />
      <ServiceArea />
      <About />
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

function AppShell({ url }: { url: string }) {
  return (
    <StaticRouter location={url}>
      <div className="min-h-screen bg-charcoal-950 text-white">
        <Header />
        {/* Suspense boundary must match the client tree in App.tsx, otherwise
            hydration mismatches and the page content renders twice. */}
        <Suspense fallback={null}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/ceramic-coating" element={<CeramicCoatingPage />} />
            <Route path="/ceramic-coating/:slug" element={<CeramicCityRoute />} />
            <Route path="/detail-packages" element={<DetailPackagesPage />} />
            <Route path="/add-ons" element={<AddOnsPage />} />
            <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
            <Route path="/areas/:slug" element={<CityRoute />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </Suspense>
        <Footer />
        <LeadFormModal />
      </div>
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
  '/privacy-policy',
  ...cityPages.map((c) => `/areas/${c.slug}`),
  ...ceramicCities.map((c) => `/ceramic-coating/${c.citySlug}`),
];

// Re-exported so the prerender script can build per-page meta from a single
// source of truth (see scripts/prerender.mjs).
export { ceramicCities };

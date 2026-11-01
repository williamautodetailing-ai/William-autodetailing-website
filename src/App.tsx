import { lazy, Suspense } from 'react';



import { BrowserRouter, Routes, Route, useParams, Navigate, useLocation } from 'react-router-dom';



import { useEffect } from 'react';



import Header from './components/Header';



import Hero from './components/Hero';



import HowItWorks from './components/HowItWorks';
import Results from './components/home/Results';
import PriceMenu from './components/home/PriceMenu';
import ClosingCta from './components/home/ClosingCta';






import { services } from './data/services';



import Testimonials from './components/Testimonials';









import Footer from './components/Footer';



import { cityPages } from './data/cities';
import { ceramicCities } from './data/ceramicCities';



import { LeadModalProvider } from './context/LeadModalContext';



import LeadFormModal from './components/LeadFormModal';




import SEO from './components/SEO';
import { useReveal } from './hooks/useReveal';







const CeramicCoatingPage = lazy(() => import('./pages/CeramicCoatingPage'));



const DetailPackagesPage = lazy(() => import('./pages/DetailPackagesPage'));



const AddOnsPage = lazy(() => import('./pages/AddOnsPage'));



const PrivacyPolicyPage = lazy(() => import('./pages/PrivacyPolicyPage'));



const CityPage = lazy(() => import('./pages/CityPage'));



const CeramicCityPage = lazy(() => import('./pages/CeramicCityPage'));



const LandingPage = lazy(() => import('./pages/LandingPage'));



const ReferralPage = lazy(() => import('./pages/ReferralPage'));
const SpecialOfferPage = lazy(() => import('./pages/SpecialOfferPage'));
const GalleryPage = lazy(() => import('./pages/GalleryPage'));
const ServicePage = lazy(() => import('./pages/ServicePage'));
const MaintenanceClubPage = lazy(() => import('./pages/MaintenanceClubPage'));







function PageFallback() {



  return (



    <div className="min-h-screen bg-charcoal-950 flex items-center justify-center">



      <div className="w-8 h-8 rounded-full border-2 border-accent border-t-transparent animate-spin" />



    </div>



  );



}







function ScrollToTop() {



  const { pathname } = useLocation();



  useEffect(() => { window.scrollTo(0, 0); }, [pathname]);



  return null;



}







function HomePage() {
  useReveal();
  return (



    <main>
      <SEO
        title="William's Auto Detailing | #1 Mobile Car Detailing in Miami, FL"
        description="William's Auto Detailing — Miami's top-rated mobile car detailing. We come to your home, office, or apartment. Signature detail, deep-clean packages, ceramic coating, and add-ons. 5.0 stars · 190+ Google reviews. Serving all of Miami-Dade County."
        keywords="mobile car detailing Miami, auto detailing Miami FL, ceramic coating Miami, car detailing Doral, mobile detailing near me, car detailing Miami-Dade, best car detailing Miami"
        canonical="/"
      />

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







function AppLayout() {

  const location = useLocation();

  const isLanding = location.pathname === '/book' || location.pathname === '/199-special';




  return (



    <div className="min-h-screen bg-charcoal-950 text-white">



      <ScrollToTop />



      {!isLanding && <Header />}



      <Suspense fallback={<PageFallback />}>



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



          <Route path="*" element={<Navigate to="/" replace />} />



        </Routes>



      </Suspense>



      {!isLanding && <Footer />}



      <LeadFormModal />



    </div>



  );



}







export default function App() {



  return (



    <BrowserRouter>



      <LeadModalProvider>



        <AppLayout />



      </LeadModalProvider>



    </BrowserRouter>



  );



}


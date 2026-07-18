import { lazy, Suspense, useEffect } from 'react';
import type { ComponentType } from 'react';
import { Route, Routes, useLocation } from 'react-router';
import { SiteLayout } from './components/SiteLayout';
import { LoadingScreen } from './components/LoadingScreen';

function lazyWithDelay<TProps>(factory: () => Promise<{ default: ComponentType<TProps> }>, delayMs = 700) {
  return lazy(() =>
    Promise.all([factory(), new Promise((resolve) => window.setTimeout(resolve, delayMs))]).then(
      ([module]) => module,
    ),
  );
}

const HomePage = lazyWithDelay(() => import('./pages/HomePage').then((module) => ({ default: module.HomePage })));
const ServicesPage = lazyWithDelay(() => import('./pages/ServicesPage').then((module) => ({ default: module.ServicesPage })));
const ServiceDetailPage = lazyWithDelay(() => import('./pages/ServiceDetailPage').then((module) => ({ default: module.ServiceDetailPage })));
const ApproachPage = lazyWithDelay(() => import('./pages/ApproachPage').then((module) => ({ default: module.ApproachPage })));
const TeamPage = lazyWithDelay(() => import('./pages/TeamPage').then((module) => ({ default: module.TeamPage })));
const ResourcesPage = lazyWithDelay(() => import('./pages/ResourcesPage').then((module) => ({ default: module.ResourcesPage })));
const RatesPage = lazyWithDelay(() => import('./pages/RatesPage').then((module) => ({ default: module.RatesPage })));
const AboutPage = lazyWithDelay(() => import('./pages/AboutPage').then((module) => ({ default: module.AboutPage })));
const ConsultationPage = lazyWithDelay(() => import('./pages/ConsultationPage').then((module) => ({ default: module.ConsultationPage })));
const NotFoundPage = lazyWithDelay(() => import('./pages/NotFoundPage').then((module) => ({ default: module.NotFoundPage })));

function ScrollManager() {
  const location = useLocation();

  useEffect(() => {
    const scrollToHash = () => {
      if (location.hash) {
        const element = document.getElementById(location.hash.slice(1));
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
          return;
        }
      }

      window.scrollTo({ top: 0, behavior: 'auto' });
    };

    const timeoutId = window.setTimeout(scrollToHash, 0);
    return () => window.clearTimeout(timeoutId);
  }, [location.pathname, location.hash]);

  return null;
}

export default function App() {
  return (
    <>
      <ScrollManager />
      <SiteLayout>
        <Suspense fallback={<LoadingScreen />}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/services/:slug" element={<ServiceDetailPage />} />
            <Route path="/approach" element={<ApproachPage />} />
            <Route path="/team" element={<TeamPage />} />
            <Route path="/resources" element={<ResourcesPage />} />
            <Route path="/rates" element={<RatesPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/consultation" element={<ConsultationPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </Suspense>
      </SiteLayout>
    </>
  );
}

import React, { lazy, Suspense, useEffect, useRef, useState } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import Navigation from './components/Navigation';
import Footer from './components/Footer';

const HomePage = lazy(() => import('./pages/HomePage'));
const ResearchPage = lazy(() => import('./pages/ResearchPage'));
const PublicationsPage = lazy(() => import('./pages/PublicationsPage'));
const TeamPage = lazy(() => import('./pages/TeamPage'));
const OpportunitiesPage = lazy(() => import('./pages/OpportunitiesPage'));
const NewsPage = lazy(() => import('./pages/NewsPage'));
const NewsDetailPage = lazy(() => import('./pages/NewsDetailPage'));
const NotFoundPage = lazy(() => import('./pages/NotFoundPage'));

const PageFallback = () => (
  <div className="min-h-screen bg-stone-950" aria-hidden="true" />
);

export default function EnbodyLabWebsite() {
  const [isScrolled, setIsScrolled] = useState(false);
  const isScrolledRef = useRef(false);
  const location = useLocation();

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (ticking) return;
      ticking = true;

      window.requestAnimationFrame(() => {
        const nextIsScrolled = window.scrollY > 80;

        if (nextIsScrolled !== isScrolledRef.current) {
          isScrolledRef.current = nextIsScrolled;
          setIsScrolled(nextIsScrolled);
        }

        ticking = false;
      });
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-stone-950 text-stone-100 overflow-x-hidden">
      <Navigation isScrolled={isScrolled} />

      <Suspense fallback={<PageFallback />}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/research" element={<ResearchPage />} />
          <Route path="/research/:section" element={<ResearchPage />} />
          <Route path="/publications" element={<PublicationsPage />} />
          <Route path="/team" element={<TeamPage />} />
          <Route path="/opportunities" element={<OpportunitiesPage />} />
          <Route path="/news" element={<NewsPage />} />
          <Route path="/news/:slug" element={<NewsDetailPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>

      <Footer />
    </div>
  );
}

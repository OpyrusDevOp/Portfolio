import React, { useEffect } from 'react';
import HomePage from './pages/Home';
import { BrowserRouter, Navigate, Route, Routes, useLocation } from 'react-router-dom';
import ProjectsPage from './pages/Projects';
import Navbar from './components/Navbar';
import LanguageURLSync from './components/LanguageURLSync';
import Footer from './components/Footer';
import AnimatedBackground from './components/AnimatedBackground';
import { LanguageProvider } from './i18n';

const AnimatedRoutes = () => {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo(0, 0); }, [pathname]);
  return (
    <main key={pathname} className="relative z-10 fade-up">
      <Routes>
        <Route element={<HomePage />} path='/' />
        <Route element={<ProjectsPage />} path='/projects' />
        {/* Unknown paths (incl. the removed /cv page) go home */}
        <Route element={<Navigate to='/' replace />} path='*' />
      </Routes>
    </main>
  );
};

const Portfolio: React.FC = () => {
  return (
    <BrowserRouter basename='/'>
      <LanguageProvider>
        <LanguageURLSync />
        <AnimatedBackground />
        <Navbar />
        {/* Leave room for the floating sidebar on wide screens */}
        <div className="xl:pl-24">
          <AnimatedRoutes />
          <Footer />
        </div>
      </LanguageProvider>
    </BrowserRouter>
  );
};

export default Portfolio;

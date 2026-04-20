import React from 'react';
import HomePage from './pages/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ProjectsPage from './pages/Projects';
import AnimatedNavbar from './components/AnimatedNavbar';
import LanguageSwitcher from './components/LanguageSwitcher';
import LanguageURLSync from './components/LanguageURLSync';
import Footer from './components/Footer';
import ContactPage from './pages/Contact';
import { LanguageProvider } from './i18n';

const Portfolio: React.FC = () => {
  return (
    <BrowserRouter basename='/'>
      <LanguageProvider>
        <LanguageURLSync />
        <nav className="fixed top-4 left-1/2 -translate-x-1/2 z-50 flex items-center gap-2">
          <AnimatedNavbar />
          <LanguageSwitcher />
        </nav>
        <Routes>
          <Route element={<HomePage />} path='/' />
          <Route element={<ProjectsPage />} path='/projects' />
          <Route element={<ContactPage />} path='/cv' />
        </Routes>
        <Footer />
      </LanguageProvider>
    </BrowserRouter>
  );
};

export default Portfolio;

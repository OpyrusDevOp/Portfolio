import React from 'react';
import HomePage from './pages/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ProjectsPage from './pages/Projects';
import AnimatedNavbar from './components/AnimatedNavbar';
import Footer from './components/Footer';
import ContactPage from './pages/Contact';

const Portfolio: React.FC = () => {
  return (
    <BrowserRouter basename='/'>
      <nav className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50">
        <AnimatedNavbar />
      </nav>
      <Routes>
        <Route element={<HomePage />} path='/' />
        <Route element={<ProjectsPage />} path='/projects' />
        <Route element={<ContactPage />} path='/cv' />
      </Routes>

      <Footer />
    </BrowserRouter >
  )
};

export default Portfolio;

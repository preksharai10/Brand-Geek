import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Hero from './components/Hero';
import List from './components/List'; 
import SEO from './components/SEO';
import SocialMedia from './components/SocialMedia';
import ContentMarketing from './components/ContentMarketing';
import WebDevelopment from './components/WebDevelopement';
import PPC from './components/PPC';
import PrivacyPolicy from './components/PrivacyPolicy';
import RefundPolicy from './components/RefundPolicy';
import TermsConditions from './components/TermsConditions';
import CookieNotice from './components/CookieNotice';
import Contact from './components/Contact';
import About from './components/About';
import ScrollToTop from './components/ScrollToTop';
import Services from './components/Services';


// HomePage composed of multiple sections
function HomePage() {
  return (
    <>
      <Hero />
      <List />
      <SEO />
      <SocialMedia />
      <ContentMarketing />
      <WebDevelopment />
      <PPC />
    </>
  );
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Header />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/refund-policy" element={<RefundPolicy />} />
        <Route path="/terms-conditions" element={<TermsConditions />} />
        <Route path="/cookie-notice" element={<CookieNotice />} />
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;

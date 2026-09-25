import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import WhyTrustUs from './components/WhyTrustUs';
import Pricing from './components/Pricing';
import Contact from './components/Contact';
import Footer from './components/Footer';
import FloatingWidgets from './components/FloatingWidgets';
import PrivacyPolicy from './components/PrivacyPolicy'; // Import kiya

export default function App() {
  const [currentPage, setCurrentPage] = useState('home'); // 'home' ya 'privacy'

  return (
    <div className="bg-[#0a0a0a] min-h-screen text-slate-100 selection:bg-orange-500 selection:text-white">
      <Navbar setCurrentPage={setCurrentPage} />

      {currentPage === 'home' ? (
        <>
          <Hero />
          <Services />
          <WhyTrustUs />
          <Pricing />
          <Contact />
        </>
      ) : (
        <PrivacyPolicy setCurrentPage={setCurrentPage} />
      )}

      <Footer setCurrentPage={setCurrentPage} />
      <FloatingWidgets />
    </div>
  );
}
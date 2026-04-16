import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import QuoteSection from './components/QuoteSection';
import ProcessSection from './components/ProcessSection';
import { StatsSection, GallerySection } from './components/GallerySection';
import { InfoSection, SuccessSection, ContactForm } from './components/InfoSection';


function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <QuoteSection />
        <ProcessSection />
        <StatsSection />
        <GallerySection />
        <InfoSection />
        <SuccessSection />
        <ContactForm />
      </main>
      
    </div>
  );
}

export default App;

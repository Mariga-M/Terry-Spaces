import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { Amenities } from './components/Amenities';
import { Pricing } from './components/Pricing';
import { Location } from './components/Location';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
      <Header />
      <main>
        <Hero />
        <Services />
        <Amenities />
        <Pricing />
        <Location />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
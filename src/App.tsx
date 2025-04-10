import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import ServiceArea from './components/ServiceArea';
import Services from './components/Services';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <ServiceArea />
        <Services />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;

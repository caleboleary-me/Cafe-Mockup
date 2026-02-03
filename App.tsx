
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Menu from './components/Menu';
import AIBarista from './components/AIBarista';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <Menu />
        <AIBarista />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;

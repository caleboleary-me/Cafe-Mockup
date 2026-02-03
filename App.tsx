// App.tsx
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Menu from './components/Menu';
// Remove this line, since the file is gone:
// import AIBarista from './components/AIBarista';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <Menu />
        {/* Remove <AIBarista /> as well */}
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;

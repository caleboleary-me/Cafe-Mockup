
import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&q=80&w=2000")',
          backgroundPosition: 'center',
          backgroundSize: 'cover'
        }}
      >
        <div className="absolute inset-0 bg-black/40" />
      </div>

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-7xl lg:text-8xl text-white font-serif font-bold mb-6 leading-tight animate-in fade-in slide-in-from-bottom-8 duration-1000">
          Fresh Coffee, <br />
          <span className="italic text-[#E6D5B8]">Local Vibes</span>
        </h1>
        <p className="text-lg md:text-xl text-white/90 mb-10 max-w-2xl mx-auto font-light leading-relaxed animate-in fade-in slide-in-from-bottom-12 duration-1000 delay-200">
          Handcrafted beverages and locally sourced breakfast, served in the heart of our community. Experience the perfect morning ritual at Morning Brew.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-in fade-in slide-in-from-bottom-16 duration-1000 delay-500">
          <a 
            href="#menu" 
            className="px-8 py-4 bg-[#7C5E4B] text-white rounded-full font-medium flex items-center justify-center gap-2 hover:bg-[#634A3B] transition-all transform hover:scale-105"
          >
            View Menu <ArrowRight className="h-4 w-4" />
          </a>
          <a 
            href="#contact" 
            className="px-8 py-4 bg-white/10 backdrop-blur-md border border-white/20 text-white rounded-full font-medium hover:bg-white/20 transition-all transform hover:scale-105"
          >
            Find Us
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-[1px] h-12 bg-gradient-to-b from-white to-transparent" />
      </div>
    </section>
  );
};

export default Hero;

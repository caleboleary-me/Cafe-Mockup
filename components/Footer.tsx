
import React from 'react';
import { Coffee, Heart } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white border-t border-gray-100 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center space-x-2">
            <Coffee className="h-6 w-6 text-[#7C5E4B]" />
            <span className="text-lg font-serif font-bold tracking-tight text-[#332D2D]">
              Morning Brew Café
            </span>
          </div>

          <div className="flex flex-wrap justify-center gap-8 text-sm font-medium text-gray-500">
            <a href="#" className="hover:text-[#7C5E4B] transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-[#7C5E4B] transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-[#7C5E4B] transition-colors">Accessibility</a>
            <a href="#" className="hover:text-[#7C5E4B] transition-colors">Cookie Settings</a>
          </div>

          <p className="text-sm text-gray-400">
            © {currentYear} Morning Brew Café. All rights reserved.
          </p>
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-50 text-center">
          <p className="text-xs text-gray-300 flex items-center justify-center gap-1">
            Handcrafted with <Heart className="h-3 w-3 fill-gray-300" /> for the community.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

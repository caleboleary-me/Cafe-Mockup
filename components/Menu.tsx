
import React, { useState } from 'react';
import { MENU_ITEMS } from '../constants';
import { Category } from '../types';

const Menu: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<Category>('All');

  const categories: Category[] = ['All', 'Coffee', 'Breakfast', 'Lunch', 'Pastries'];

  const filteredItems = activeCategory === 'All' 
    ? MENU_ITEMS 
    : MENU_ITEMS.filter(item => item.category === activeCategory);

  return (
    <section id="menu" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-[#332D2D] mb-4">Our Menu</h2>
          <div className="w-24 h-1 bg-[#7C5E4B] mx-auto mb-8 rounded-full" />
          
          <div className="flex flex-wrap justify-center gap-4 md:gap-8">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`text-sm md:text-base font-medium px-4 py-2 rounded-full transition-all ${
                  activeCategory === cat 
                  ? 'bg-[#7C5E4B] text-white' 
                  : 'text-gray-500 hover:text-[#7C5E4B] hover:bg-[#7C5E4B]/5'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-x-16 gap-y-12">
          {filteredItems.map((item) => (
            <div key={item.id} className="group flex justify-between items-start border-b border-gray-100 pb-6">
              <div className="flex-1 pr-8">
                <div className="flex items-center gap-3 mb-1">
                  <h3 className="text-xl font-serif font-bold text-[#332D2D] group-hover:text-[#7C5E4B] transition-colors">
                    {item.name}
                  </h3>
                  {item.isSpecial && (
                    <span className="text-[10px] uppercase tracking-widest px-2 py-0.5 bg-[#F0ECE3] text-[#7C5E4B] rounded font-bold">
                      Popular
                    </span>
                  )}
                </div>
                <p className="text-gray-500 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
              <span className="text-lg font-medium text-[#7C5E4B] tabular-nums">
                {item.price}
              </span>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-gray-400 text-sm italic italic">
            * Prices and availability subject to change. Please inform us of any allergies.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Menu;

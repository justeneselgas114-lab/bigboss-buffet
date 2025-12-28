
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MENU_ITEMS, BUFFET_PRICE, CURRENCY } from '../constants';
import { MenuItem } from '../types';

const Menu: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const categories = ['All', 'Main', 'Grill', 'Dessert'];

  const filteredItems = activeCategory === 'All' 
    ? MENU_ITEMS 
    : MENU_ITEMS.filter(item => item.category === activeCategory);

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-stone-50 pb-32"
    >
      {/* Header */}
      <div className="bg-stone-950 text-white py-24 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=1920&auto=format&fit=crop')] bg-cover bg-center opacity-20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.h1 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="text-5xl md:text-7xl font-black mb-6 tracking-tight"
          >
            The Great Feast
          </motion.h1>
          <p className="text-stone-400 max-w-xl mx-auto font-medium text-lg leading-relaxed">
            Every dish tells a story. Every bite is a boss-level experience. Explore our daily rotating selection.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        {/* Pricing HUD */}
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 transform -translate-y-20">
          {[
            { label: 'Adults', price: `${CURRENCY}${BUFFET_PRICE}`, sub: 'Unbeatable Value' },
            { label: 'Kids (3-4ft)', price: `${CURRENCY}${Math.floor(BUFFET_PRICE / 2)}`, sub: '50% Discount' },
            { label: 'Under 3ft', price: 'FREE', sub: 'Little Bosses Eat Free' }
          ].map((item, i) => (
            <motion.div 
              key={i}
              whileHover={{ y: -5 }}
              className="bg-white p-8 rounded-[2rem] shadow-xl border border-stone-100 text-center"
            >
              <h3 className="text-stone-500 font-bold text-sm uppercase tracking-widest mb-2">{item.label}</h3>
              <p className="text-5xl font-black text-brand-600 mb-2">{item.price}</p>
              <p className="text-xs text-stone-400 font-medium uppercase tracking-widest">{item.sub}</p>
            </motion.div>
          ))}
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-16 bg-white p-2 rounded-full w-fit mx-auto shadow-lg border border-stone-100">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`relative px-8 py-3 rounded-full text-sm font-black uppercase tracking-widest transition-all duration-300 ${
                activeCategory === cat
                  ? 'text-white'
                  : 'text-stone-500 hover:text-brand-600'
              }`}
            >
              {activeCategory === cat && (
                <motion.div 
                  layoutId="activeTab"
                  className="absolute inset-0 bg-brand-600 rounded-full"
                  transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                />
              )}
              <span className="relative z-10">{cat}</span>
            </button>
          ))}
        </div>

        {/* Menu Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
        >
          <AnimatePresence mode='popLayout'>
            {filteredItems.map((item) => (
              <MenuCard key={item.id} item={item} />
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </motion.div>
  );
};

const MenuCard: React.FC<{ item: MenuItem }> = ({ item }) => {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.4 }}
      className="bg-white rounded-[2rem] shadow-[0_20px_40px_-15px_rgba(0,0,0,0.05)] overflow-hidden hover:shadow-2xl transition-all group border border-stone-100"
    >
      <div className="relative h-72 overflow-hidden">
        <img 
          src={item.imageUrl} 
          alt={item.name} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-stone-900/40 to-transparent" />
        {item.isSpecial && (
          <div className="absolute top-6 right-6 bg-white text-brand-600 text-[10px] font-black px-4 py-2 rounded-full shadow-xl uppercase tracking-[0.2em]">
            Signature
          </div>
        )}
      </div>
      <div className="p-8">
        <div className="flex justify-between items-center mb-4">
          <span className="text-[10px] font-black text-brand-600 uppercase tracking-widest px-3 py-1 bg-brand-50 rounded-lg">
            {item.category}
          </span>
        </div>
        <h3 className="text-2xl font-black text-stone-900 mb-3 tracking-tight">{item.name}</h3>
        <p className="text-stone-500 text-sm leading-relaxed font-medium">
          {item.description}
        </p>
      </div>
    </motion.div>
  );
};

export default Menu;

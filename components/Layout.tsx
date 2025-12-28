
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Facebook, MapPin, Phone, Mail, Instagram, MessageCircle } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';
import { RESTAURANT_PHONE } from '../constants';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Menu', path: '/menu' },
    { name: 'Reservations', path: '/reservations' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  const closeMenu = () => setIsMobileMenuOpen(false);

  return (
    <div className="flex flex-col min-h-screen text-stone-800 selection:bg-brand-600 selection:text-white">
      <header className={`sticky top-0 z-50 transition-all duration-300 ${scrolled ? 'glass shadow-lg py-2' : 'bg-transparent py-4'}`}>
        <div className="container mx-auto px-4 flex justify-between items-center">
          <Link to="/" className="flex items-center gap-3 group" onClick={closeMenu}>
            <motion.div 
              whileHover={{ rotate: 5, scale: 1.1 }}
              className="bg-brand-600 text-white p-2 rounded-xl shadow-lg shadow-brand-600/20"
            >
              <span className="font-extrabold text-xl tracking-tighter">BB</span>
            </motion.div>
            <span className="font-black text-2xl tracking-tight text-stone-900 group-hover:text-brand-600 transition-colors">
              BigBoss<span className="text-brand-600">Buffet</span>
            </span>
          </Link>

          <nav className="hidden md:flex gap-1 items-center">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-4 py-2 text-sm font-bold uppercase tracking-widest transition-all rounded-full hover:bg-brand-100/50 ${
                  location.pathname === link.path ? 'text-brand-600 bg-brand-50' : 'text-stone-600 hover:text-brand-600'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="ml-4">
              <Link 
                to="/reservations" 
                className="bg-brand-600 hover:bg-brand-700 text-white px-6 py-2.5 rounded-full font-black text-sm uppercase tracking-widest shadow-xl shadow-brand-600/30 block"
              >
                Book Now
              </Link>
            </motion.div>
          </nav>

          <button 
            className="md:hidden p-2 text-stone-900 bg-white/50 rounded-full"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="md:hidden absolute top-full left-0 w-full bg-white shadow-2xl border-t border-stone-100"
            >
              <nav className="flex flex-col p-6 space-y-2">
                {navLinks.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    onClick={closeMenu}
                    className={`text-xl font-bold p-4 rounded-2xl transition-all ${
                      location.pathname === link.path ? 'bg-brand-600 text-white' : 'text-stone-600 active:bg-stone-50'
                    }`}
                  >
                    {link.name}
                  </Link>
                ))}
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      <main className="flex-grow">
        {children}
      </main>

      <footer className="bg-stone-950 text-stone-400 pt-20 pb-10">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16 mb-20">
            <div className="space-y-6">
              <h3 className="text-3xl font-black text-white">BigBoss Buffet</h3>
              <p className="leading-relaxed text-stone-500">
                Experience the finest culinary treasures of Davao. We celebrate family, flavor, and the vibrant spirit of Panabo City.
              </p>
              <div className="flex gap-4">
                {[Facebook, Instagram, Mail].map((Icon, i) => (
                  <motion.a 
                    key={i} href="#" 
                    whileHover={{ scale: 1.2, color: '#f97316' }}
                    className="w-10 h-10 bg-stone-900 rounded-full flex items-center justify-center hover:bg-white transition-all"
                  >
                    <Icon size={20} />
                  </motion.a>
                ))}
              </div>
            </div>

            <div>
              <h4 className="text-sm font-black text-white uppercase tracking-[0.2em] mb-8">Reach Out</h4>
              <ul className="space-y-6">
                <li className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-stone-900 rounded-lg flex items-center justify-center text-brand-500 shrink-0">
                    <MapPin size={20} />
                  </div>
                  <span className="text-sm">Quezon Street, Panabo City, Davao del Norte</span>
                </li>
                <li className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-stone-900 rounded-lg flex items-center justify-center text-brand-500 shrink-0">
                    <Phone size={20} />
                  </div>
                  <span className="text-sm">+63 912 345 6789</span>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-sm font-black text-white uppercase tracking-[0.2em] mb-8">Service Hours</h4>
              <div className="bg-stone-900/50 p-6 rounded-2xl border border-stone-800">
                <div className="flex justify-between items-center mb-4">
                  <span className="text-sm">Lunch</span>
                  <span className="font-bold text-white">11:00 AM - 2:00 PM</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm">Dinner</span>
                  <span className="font-bold text-white">5:00 PM - 9:00 PM</span>
                </div>
                <div className="mt-4 pt-4 border-t border-stone-800 text-xs text-brand-500 font-bold uppercase tracking-widest text-center">
                  Open Every Single Day
                </div>
              </div>
            </div>
          </div>

          <div className="text-center pt-8 border-t border-stone-900 text-xs font-medium tracking-widest text-stone-600">
            &copy; {new Date().getFullYear()} BIGBOSS BUFFET PANABO. DESIGNED FOR EXCELLENCE.
          </div>
        </div>
      </footer>

      {/* Floating Action Button for Mobile Quick Contact */}
      <motion.a
        href={`https://wa.me/${RESTAURANT_PHONE}`}
        target="_blank"
        rel="noopener noreferrer"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="fixed bottom-6 right-6 z-40 bg-[#25D366] text-white p-4 rounded-full shadow-2xl md:hidden flex items-center justify-center"
      >
        <MessageCircle size={28} />
      </motion.a>
    </div>
  );
};

export default Layout;

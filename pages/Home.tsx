
import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Utensils, Flame, Users, Star, ArrowRight, CheckCircle2 } from 'lucide-react';
import { TESTIMONIALS, BUFFET_PRICE, CURRENCY } from '../constants';

const Home: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="flex flex-col overflow-hidden"
    >
      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center justify-center overflow-hidden">
        <motion.div 
          initial={{ scale: 1.2 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="absolute inset-0 z-0"
        >
          <img 
            src="https://images.unsplash.com/photo-1555244162-803834f70033?q=80&w=1920&auto=format&fit=crop" 
            alt="Buffet Spread" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-stone-900/90" />
        </motion.div>

        <div className="relative z-10 container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <span className="inline-block px-4 py-1.5 mb-6 rounded-full bg-brand-600/20 border border-brand-500/30 text-brand-400 text-xs font-black uppercase tracking-[0.3em] backdrop-blur-md">
              The Best in Panabo City
            </span>
            <h1 className="text-6xl md:text-8xl font-black text-white mb-8 tracking-tighter leading-none">
              Dine Like a <span className="text-brand-500 italic">Boss.</span>
            </h1>
            <p className="text-xl md:text-2xl text-stone-300 mb-10 max-w-2xl mx-auto font-medium leading-relaxed">
              Experience Davao's most celebrated unlimited dining destination. Fresh, authentic, and truly legendary.
            </p>
            <div className="flex flex-col sm:flex-row gap-5 justify-center items-center">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link 
                  to="/reservations" 
                  className="px-10 py-5 bg-brand-600 hover:bg-brand-700 text-white rounded-full text-lg font-black shadow-2xl shadow-brand-600/40 transition-all flex items-center gap-3"
                >
                  Secure a Table <ArrowRight size={22} strokeWidth={3} />
                </Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link 
                  to="/menu" 
                  className="px-10 py-5 bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 text-white rounded-full text-lg font-black transition-all"
                >
                  See the Feast
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </div>
        
        {/* Scroll Indicator */}
        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/40"
        >
          <div className="w-[1px] h-12 bg-gradient-to-b from-transparent via-white/50 to-transparent mx-auto"></div>
        </motion.div>
      </section>

      {/* Features Section */}
      <section className="py-32 bg-white relative">
        <div className="container mx-auto px-4">
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 md:grid-cols-3 gap-10"
          >
            {[
              { 
                icon: <Utensils />, 
                title: "30+ Daily Dishes", 
                desc: "A revolving selection of the island's best seafood, meats, and seasonal greens." 
              },
              { 
                icon: <Flame />, 
                title: "Live Sizzle Station", 
                desc: "Hand-picked cuts grilled to perfection by our master pitmasters as you watch." 
              },
              { 
                icon: <Users />, 
                title: "Vibrant Atmosphere", 
                desc: "Spacious, modern interiors designed for celebration and family reunions." 
              }
            ].map((feature, idx) => (
              <motion.div 
                key={idx}
                variants={itemVariants}
                className="group p-10 rounded-3xl bg-stone-50 hover:bg-white transition-all duration-500 hover:shadow-[0_40px_80px_-20px_rgba(0,0,0,0.08)] border border-stone-100 flex flex-col items-start"
              >
                <div className="w-16 h-16 rounded-2xl bg-brand-100 text-brand-600 flex items-center justify-center mb-8 group-hover:bg-brand-600 group-hover:text-white transition-all duration-500 group-hover:rotate-6 group-hover:scale-110">
                  {feature.icon}
                </div>
                <h3 className="text-2xl font-black mb-4 text-stone-900">{feature.title}</h3>
                <p className="text-stone-500 leading-relaxed font-medium">{feature.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-32 bg-brand-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-20">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:w-1/2 relative"
            >
              <div className="absolute -top-6 -left-6 w-32 h-32 bg-brand-500/10 rounded-full blur-3xl"></div>
              <img 
                src="https://images.unsplash.com/photo-1544148103-0773bf10d330?q=80&w=800&auto=format&fit=crop" 
                className="rounded-[2.5rem] shadow-2xl relative z-10"
                alt="Chef Cooking"
              />
              <motion.div 
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute -bottom-10 -right-10 bg-white p-8 rounded-3xl shadow-2xl z-20 max-w-[200px]"
              >
                <div className="flex items-center gap-2 mb-2">
                  <Star className="text-yellow-400 fill-yellow-400" size={16} />
                  <span className="font-bold text-stone-900">4.9/5 Rating</span>
                </div>
                <p className="text-xs text-stone-500 font-bold uppercase tracking-widest">Customer Satisfaction</p>
              </motion.div>
            </motion.div>
            
            <div className="lg:w-1/2 space-y-8">
              <span className="text-brand-600 font-black text-sm uppercase tracking-widest">Our Philosophy</span>
              <h2 className="text-5xl font-black text-stone-900 leading-tight">Authenticity is our <br/><span className="text-brand-600">Main Ingredient</span></h2>
              <p className="text-lg text-stone-600 leading-relaxed">
                We believe that a buffet shouldn't compromise on quality. Every tray at BigBoss is handled with the same care as an à la carte meal. We source local, support Panabo farmers, and cook from the heart.
              </p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {['Farm-to-Table Meat', 'Daily Fresh Catch', 'Heirloom Recipes', 'Pure Ingredients'].map((text, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <CheckCircle2 className="text-brand-500" size={20} />
                    <span className="font-bold text-stone-700">{text}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-24 bg-stone-900 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-brand-600/10 rounded-full blur-[120px]"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12 text-center md:text-left">
            <div>
              <h2 className="text-4xl md:text-6xl font-black text-white mb-4">Unlimited Joy.</h2>
              <p className="text-brand-400 font-bold text-xl uppercase tracking-widest">One Simple Price</p>
            </div>
            <div className="bg-white/5 backdrop-blur-xl p-10 rounded-[3rem] border border-white/10">
              <span className="text-white/60 text-sm font-bold block mb-2 uppercase tracking-widest">Per Adult</span>
              <div className="flex items-start justify-center md:justify-start">
                <span className="text-3xl font-black text-white mr-1 mt-2">{CURRENCY}</span>
                <span className="text-8xl font-black text-white leading-none">{BUFFET_PRICE}</span>
              </div>
              <p className="text-brand-500 font-black mt-4 text-center">ALL-ACCESS PASS</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-32 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-black text-stone-900">What Our Bosses Say</h2>
            <div className="w-20 h-2 bg-brand-600 mx-auto rounded-full mt-6"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {TESTIMONIALS.map((t, idx) => (
              <motion.div 
                key={t.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                className="bg-stone-50 p-10 rounded-3xl relative"
              >
                <div className="flex text-brand-500 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={18} fill={i < t.rating ? "currentColor" : "none"} />
                  ))}
                </div>
                <p className="text-stone-700 font-medium italic mb-10 text-lg leading-relaxed">"{t.text}"</p>
                <div className="flex justify-between items-center border-t border-stone-200 pt-6">
                  <span className="font-black text-stone-900">{t.name}</span>
                  <span className="text-[10px] font-black px-3 py-1 bg-brand-100 text-brand-700 rounded-full uppercase tracking-widest">{t.source}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default Home;

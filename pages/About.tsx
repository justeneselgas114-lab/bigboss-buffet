import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="bg-stone-50 min-h-screen">
      {/* Header */}
      <div className="bg-stone-900 text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-[url('https://picsum.photos/id/431/1920/600')] bg-cover bg-center"></div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Story</h1>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          {/* Image Grid */}
          <div className="w-full lg:w-1/2 grid grid-cols-2 gap-4">
            <motion.img 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              src="https://picsum.photos/id/292/400/500" 
              className="rounded-2xl shadow-lg mt-12 w-full h-64 object-cover" 
              alt="Restaurant Interior"
            />
            <motion.img 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              src="https://picsum.photos/id/429/400/500" 
              className="rounded-2xl shadow-lg w-full h-64 object-cover" 
              alt="Food Prep"
            />
          </div>

          {/* Text Content */}
          <div className="w-full lg:w-1/2">
            <h2 className="text-3xl font-bold text-stone-800 mb-6">Bringing Families Together</h2>
            <p className="text-stone-600 mb-6 leading-relaxed">
              Founded in Panabo City, <strong>BigBoss Buffet</strong> started with a simple mission: to provide a place where families and friends can gather to enjoy unlimited servings of high-quality Filipino dishes without breaking the bank.
            </p>
            <p className="text-stone-600 mb-8 leading-relaxed">
              We believe that good food is best shared. That's why we focus on authentic flavors, fresh ingredients, and a warm, welcoming atmosphere. From our signature Lechon Belly to our fresh grilled seafood, every dish is prepared with love by our expert chefs.
            </p>

            <div className="space-y-4">
              {[
                "Authentic Filipino Cuisine",
                "Fresh Ingredients Daily",
                "Clean & Spacious Dining Area",
                "Professional & Friendly Staff"
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <CheckCircle className="text-brand-600" size={20} />
                  <span className="font-semibold text-stone-700">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
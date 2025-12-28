import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, Users, MessageCircle } from 'lucide-react';
import { RESTAURANT_PHONE } from '../constants';

const Reservations: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    date: '',
    time: '',
    guests: '2',
    notes: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Construct the message with proper formatting
    const message = `Hello BigBoss Buffet! I would like to reserve a table.

Details:
Name: ${formData.name}
Date: ${formData.date}
Time: ${formData.time}
Guests: ${formData.guests}
Notes: ${formData.notes || 'None'}`;
    
    // encodeURIComponent ensures special characters (like & or emojis) don't break the link
    const whatsappUrl = `https://wa.me/${RESTAURANT_PHONE}?text=${encodeURIComponent(message)}`;
    
    // Open WhatsApp
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="min-h-screen bg-stone-50 py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 bg-white rounded-3xl shadow-2xl overflow-hidden">
          
          {/* Left Side: Visual/Info */}
          <div className="bg-brand-600 p-12 text-white flex flex-col justify-between relative overflow-hidden">
            <div className="relative z-10">
              <h2 className="text-4xl font-bold mb-6">Book Your Table</h2>
              <p className="text-brand-100 text-lg mb-8">
                Skip the waiting lines! Reserve your spot for a special lunch or dinner with family and friends.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-center gap-4 bg-brand-700/50 p-4 rounded-xl backdrop-blur-sm">
                  <div className="p-3 bg-white/20 rounded-full">
                    <Calendar size={24} />
                  </div>
                  <div>
                    <p className="text-sm text-brand-200">Open Daily</p>
                    <p className="font-semibold">Mon - Sun</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4 bg-brand-700/50 p-4 rounded-xl backdrop-blur-sm">
                  <div className="p-3 bg-white/20 rounded-full">
                    <Clock size={24} />
                  </div>
                  <div>
                    <p className="text-sm text-brand-200">Buffet Hours</p>
                    <p className="font-semibold">11 AM - 2 PM | 5 PM - 9 PM</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Decorative Circle */}
            <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-brand-500 rounded-full opacity-50 blur-2xl"></div>
          </div>

          {/* Right Side: Form */}
          <div className="p-12">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-semibold text-stone-700 mb-2">Full Name</label>
                <input
                  type="text"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-stone-200 bg-white text-stone-900 placeholder-stone-400 focus:border-brand-500 focus:ring-2 focus:ring-brand-200 outline-none transition-all"
                  placeholder="Juan Dela Cruz"
                />
              </div>

              <div className="grid grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-stone-700 mb-2">Date</label>
                  <input
                    type="date"
                    name="date"
                    required
                    value={formData.date}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-stone-200 bg-white text-stone-900 placeholder-stone-400 focus:border-brand-500 focus:ring-2 focus:ring-brand-200 outline-none transition-all"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-stone-700 mb-2">Time</label>
                  <input
                    type="time"
                    name="time"
                    required
                    value={formData.time}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-stone-200 bg-white text-stone-900 placeholder-stone-400 focus:border-brand-500 focus:ring-2 focus:ring-brand-200 outline-none transition-all"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-stone-700 mb-2">Number of Guests</label>
                <div className="relative">
                  <Users className="absolute left-4 top-3.5 text-stone-400" size={20} />
                  <select
                    name="guests"
                    value={formData.guests}
                    onChange={handleChange}
                    className="w-full pl-12 pr-4 py-3 rounded-lg border border-stone-200 bg-white text-stone-900 focus:border-brand-500 focus:ring-2 focus:ring-brand-200 outline-none transition-all appearance-none"
                  >
                    {[1,2,3,4,5,6,7,8,9,10, '10+'].map(num => (
                      <option key={num} value={num}>{num} {num === 1 ? 'Person' : 'People'}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-stone-700 mb-2">Special Requests (Optional)</label>
                <textarea
                  name="notes"
                  value={formData.notes}
                  onChange={handleChange}
                  rows={3}
                  className="w-full px-4 py-3 rounded-lg border border-stone-200 bg-white text-stone-900 placeholder-stone-400 focus:border-brand-500 focus:ring-2 focus:ring-brand-200 outline-none transition-all resize-none"
                  placeholder="High chair needed, allergies, birthday, etc."
                ></textarea>
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-full bg-[#25D366] hover:bg-[#128C7E] text-white font-bold py-4 rounded-xl shadow-lg flex items-center justify-center gap-3 transition-colors"
              >
                <MessageCircle size={24} />
                Reserve via WhatsApp
              </motion.button>
              
              <p className="text-xs text-stone-500 text-center mt-4">
                Clicking the button will open WhatsApp with your reservation details pre-filled. You just need to press Send.
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reservations;
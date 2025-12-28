import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { RESTAURANT_PHONE } from '../constants';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Construct WhatsApp Message for Inquiry
    const message = `Hello BigBoss Buffet! I have an inquiry.

From: ${formData.name}
Email: ${formData.email || 'N/A'}

Message:
${formData.message}`;
    
    // encodeURIComponent ensures special characters (like & or emojis) don't break the link
    const whatsappUrl = `https://wa.me/${RESTAURANT_PHONE}?text=${encodeURIComponent(message)}`;

    // Open WhatsApp
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="min-h-screen bg-white">
      <div className="bg-stone-100 py-16 text-center">
        <h1 className="text-4xl font-bold text-stone-800">Contact Us</h1>
        <p className="text-stone-500 mt-4">We'd love to hear from you</p>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* Contact Info */}
          <div>
            <h2 className="text-2xl font-bold text-stone-800 mb-8">Get in Touch</h2>
            <div className="space-y-8">
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-brand-100 rounded-full flex items-center justify-center text-brand-600 shrink-0">
                  <Phone size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-lg text-stone-800">Phone</h3>
                  <p className="text-stone-600 mb-1">+63 912 345 6789</p>
                  <p className="text-sm text-stone-500">Mon-Sun, 9am - 9pm</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 bg-brand-100 rounded-full flex items-center justify-center text-brand-600 shrink-0">
                  <Mail size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-lg text-stone-800">Email</h3>
                  <p className="text-stone-600">reservations@bigbossbuffet.ph</p>
                  <p className="text-stone-600">info@bigbossbuffet.ph</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 bg-brand-100 rounded-full flex items-center justify-center text-brand-600 shrink-0">
                  <MapPin size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-lg text-stone-800">Location</h3>
                  <p className="text-stone-600">Quezon Street, Panabo City</p>
                  <p className="text-stone-600">Davao del Norte, Philippines</p>
                </div>
              </div>
            </div>

            {/* Functional Message Form */}
            <form onSubmit={handleSubmit} className="mt-12 space-y-4">
              <h3 className="font-bold text-lg text-stone-800">Send a Message</h3>
              <input 
                type="text" 
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Name" 
                required
                className="w-full p-3 border border-stone-200 rounded-lg bg-white text-stone-900 placeholder-stone-400 focus:border-brand-500 outline-none" 
              />
              <input 
                type="email" 
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email (optional)" 
                className="w-full p-3 border border-stone-200 rounded-lg bg-white text-stone-900 placeholder-stone-400 focus:border-brand-500 outline-none" 
              />
              <textarea 
                rows={4} 
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your Message" 
                required
                className="w-full p-3 border border-stone-200 rounded-lg bg-white text-stone-900 placeholder-stone-400 focus:border-brand-500 outline-none"
              ></textarea>
              <button 
                type="submit"
                className="bg-stone-900 text-white px-6 py-3 rounded-lg font-bold hover:bg-stone-800 transition-colors flex items-center gap-2"
              >
                <Send size={18} /> Send Inquiry via WhatsApp
              </button>
            </form>
          </div>

          {/* Map */}
          <div className="h-[500px] bg-stone-200 rounded-2xl overflow-hidden shadow-lg border border-stone-300">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3958.077209707266!2d125.6833!3d7.3069!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x32f94e466d71629f%3A0x6b8f36894c23c50!2sPanabo%20City%2C%20Davao%20del%20Norte!5e0!3m2!1sen!2sph!4v1620000000000!5m2!1sen!2sph" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen={true} 
              loading="lazy"
              title="Map of Panabo City"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
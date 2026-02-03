
import React from 'react';
import { MapPin, Phone, Mail, Instagram, Facebook, Twitter } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24 bg-[#FAF9F6]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          
          {/* Info Side */}
          <div>
            <h2 className="text-4xl font-serif font-bold text-[#332D2D] mb-6">Get in Touch</h2>
            <p className="text-gray-600 mb-10 leading-relaxed">
              Have a question about our menu, private events, or just want to say hi? We'd love to hear from you. Drop us a message or visit us in person.
            </p>

            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="h-12 w-12 rounded-xl bg-white shadow-sm flex items-center justify-center shrink-0">
                  <MapPin className="h-6 w-6 text-[#7C5E4B]" />
                </div>
                <div>
                  <h4 className="font-bold text-[#332D2D]">Visit Us</h4>
                  <p className="text-gray-500">123 Espresso Lane, Coffee District<br />Bean Town, BT 54321</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="h-12 w-12 rounded-xl bg-white shadow-sm flex items-center justify-center shrink-0">
                  <Phone className="h-6 w-6 text-[#7C5E4B]" />
                </div>
                <div>
                  <h4 className="font-bold text-[#332D2D]">Call Us</h4>
                  <p className="text-gray-500">(555) 123-4567</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="h-12 w-12 rounded-xl bg-white shadow-sm flex items-center justify-center shrink-0">
                  <Mail className="h-6 w-6 text-[#7C5E4B]" />
                </div>
                <div>
                  <h4 className="font-bold text-[#332D2D]">Email Us</h4>
                  <p className="text-gray-500">hello@morningbrew.cafe</p>
                </div>
              </div>
            </div>

            <div className="mt-12">
              <h4 className="font-bold text-[#332D2D] mb-4">Follow Our Journey</h4>
              <div className="flex gap-4">
                {[Instagram, Facebook, Twitter].map((Icon, i) => (
                  <a key={i} href="#" className="h-10 w-10 rounded-full bg-white shadow-sm flex items-center justify-center hover:text-[#7C5E4B] transition-colors">
                    <Icon className="h-5 w-5" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Form Side */}
          <div className="bg-white p-8 md:p-10 rounded-3xl shadow-sm border border-gray-100">
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#7C5E4B]/20 focus:border-[#7C5E4B]"
                    placeholder="Jane Doe"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                  <input 
                    type="email" 
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#7C5E4B]/20 focus:border-[#7C5E4B]"
                    placeholder="jane@example.com"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Subject</label>
                <select className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#7C5E4B]/20 focus:border-[#7C5E4B]">
                  <option>General Inquiry</option>
                  <option>Table Reservation</option>
                  <option>Private Events</option>
                  <option>Career Opportunities</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Your Message</label>
                <textarea 
                  rows={4}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#7C5E4B]/20 focus:border-[#7C5E4B]"
                  placeholder="Tell us what's on your mind..."
                />
              </div>
              <button 
                type="submit"
                className="w-full py-4 bg-[#7C5E4B] text-white rounded-xl font-bold hover:bg-[#634A3B] transition-all transform hover:scale-[1.01]"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>

        {/* Map Placeholder Section */}
        <div id="location" className="mt-24 rounded-3xl overflow-hidden shadow-sm h-[400px] bg-gray-200 relative group">
          <div className="absolute inset-0 bg-gray-300 animate-pulse flex items-center justify-center">
            <div className="text-center p-8 bg-white/80 backdrop-blur-md rounded-2xl shadow-xl max-w-xs mx-auto">
              <MapPin className="h-10 w-10 text-[#7C5E4B] mx-auto mb-4" />
              <h3 className="font-serif font-bold text-lg mb-2">Morning Brew Location</h3>
              <p className="text-sm text-gray-600 mb-4">123 Espresso Lane, Bean Town</p>
              <button className="text-sm font-bold text-[#7C5E4B] hover:underline">Get Directions</button>
            </div>
          </div>
          {/* Faking a map background style */}
          <div className="absolute inset-0 opacity-40 mix-blend-overlay pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at 50% 50%, transparent 10%, #ccc 80%)' }}></div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

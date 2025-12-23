
import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, MessageCircle, CheckCircle } from 'lucide-react';

const Contact: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <div className="min-h-screen">
      <section className="py-24 bg-gray-50 dark:bg-gray-950">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">Get in touch</h1>
            <p className="text-xl text-gray-500 max-w-2xl mx-auto">Have a question about a space? Our experts are here to help you find the perfect fit.</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Info */}
            <div className="space-y-8">
              <div className="bg-white dark:bg-gray-900 p-10 rounded-[2.5rem] border border-gray-100 dark:border-gray-800 shadow-sm">
                <div className="w-12 h-12 bg-blue-50 dark:bg-blue-900/40 rounded-2xl flex items-center justify-center text-blue-600 mb-6">
                  <MapPin size={24} />
                </div>
                <h3 className="text-xl font-bold mb-2">Our Office</h3>
                <p className="text-gray-500 leading-relaxed">
                  Level 5, Tower A, <br />
                  RMZ Millenia Business Park, <br />
                  Kandanchavadi, Chennai 600096 <br />
                  Tamil Nadu, India
                </p>
              </div>

              <div className="bg-white dark:bg-gray-900 p-10 rounded-[2.5rem] border border-gray-100 dark:border-gray-800 shadow-sm">
                <div className="w-12 h-12 bg-blue-50 dark:bg-blue-900/40 rounded-2xl flex items-center justify-center text-blue-600 mb-6">
                  <Mail size={24} />
                </div>
                <h3 className="text-xl font-bold mb-2">Email Us</h3>
                <p className="text-gray-500">support@nearbyspace.app</p>
                <p className="text-gray-500">sales@nearbyspace.app</p>
              </div>

              <div className="bg-white dark:bg-gray-900 p-10 rounded-[2.5rem] border border-gray-100 dark:border-gray-800 shadow-sm">
                <div className="w-12 h-12 bg-blue-50 dark:bg-blue-900/40 rounded-2xl flex items-center justify-center text-blue-600 mb-6">
                  <Phone size={24} />
                </div>
                <h3 className="text-xl font-bold mb-2">Call Us</h3>
                <p className="text-gray-500">+91 (44) 4567 8900</p>
                <p className="text-gray-500">Mon - Fri, 9am - 6pm IST</p>
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-2">
              <div className="bg-white dark:bg-gray-900 p-10 md:p-16 rounded-[3rem] border border-gray-100 dark:border-gray-800 shadow-2xl">
                {submitted ? (
                  <div className="text-center py-20">
                     <div className="w-20 h-20 bg-green-100 dark:bg-green-900/30 text-green-600 rounded-full flex items-center justify-center mx-auto mb-8">
                        <CheckCircle size={48} />
                     </div>
                     <h2 className="text-3xl font-bold mb-4">Message Received!</h2>
                     <p className="text-gray-500">One of our workspace experts will get back to you within 24 hours.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-xs font-bold text-gray-400 uppercase tracking-widest">Your Name</label>
                        <input type="text" required className="w-full px-6 py-4 rounded-2xl bg-gray-50 dark:bg-gray-800 border-none outline-none focus:ring-2 focus:ring-blue-600" placeholder="John Doe" />
                      </div>
                      <div className="space-y-2">
                        <label className="text-xs font-bold text-gray-400 uppercase tracking-widest">Email Address</label>
                        <input type="email" required className="w-full px-6 py-4 rounded-2xl bg-gray-50 dark:bg-gray-800 border-none outline-none focus:ring-2 focus:ring-blue-600" placeholder="john@example.com" />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-bold text-gray-400 uppercase tracking-widest">Subject</label>
                      <select className="w-full px-6 py-4 rounded-2xl bg-gray-50 dark:bg-gray-800 border-none outline-none focus:ring-2 focus:ring-blue-600">
                        <option>Space Inquiry</option>
                        <option>List My Property</option>
                        <option>Partnership</option>
                        <option>Support</option>
                      </select>
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-bold text-gray-400 uppercase tracking-widest">Message</label>
                      <textarea required rows={5} className="w-full px-6 py-4 rounded-2xl bg-gray-50 dark:bg-gray-800 border-none outline-none focus:ring-2 focus:ring-blue-600" placeholder="How can we help you?"></textarea>
                    </div>
                    <button className="w-full md:w-auto px-12 py-5 bg-blue-600 text-white font-bold rounded-2xl hover:bg-blue-700 shadow-xl shadow-blue-200 dark:shadow-none transition-all flex items-center justify-center">
                      <Send size={18} className="mr-2" />
                      Send Message
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section Placeholder */}
      <section className="h-[400px] w-full bg-gray-200 dark:bg-gray-800 grayscale">
         <div className="w-full h-full flex items-center justify-center relative overflow-hidden">
            <img src="https://picsum.photos/id/10/1920/400" className="w-full h-full object-cover opacity-50" alt="Map View" />
            <div className="absolute z-10 p-6 bg-white dark:bg-gray-900 rounded-3xl shadow-2xl border border-gray-100 dark:border-gray-800 text-center">
               <MapPin size={32} className="mx-auto text-blue-600 mb-4" />
               <h4 className="font-bold">Chennai HQ</h4>
               <p className="text-xs text-gray-500">Find us at Kandanchavadi</p>
            </div>
         </div>
      </section>
    </div>
  );
};

export default Contact;

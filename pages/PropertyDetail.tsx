
import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { MapPin, Users, Star, ArrowLeft, Check, Info, Send, Phone, Share2, Heart } from 'lucide-react';
import { MOCK_PROPERTIES, AMENITIES } from '../constants';

const PropertyDetail: React.FC = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const property = MOCK_PROPERTIES.find(p => p.name.toLowerCase().replace(' ', '-') === slug);

  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [isSubmitted, setIsSubmitted] = useState(false);

  if (!property) return <div className="p-24 text-center">Listing not found.</div>;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  return (
    <div className="pb-24">
      {/* Dynamic SEO JSON-LD */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          "name": property.name,
          "image": property.images,
          "address": {
            "@type": "PostalAddress",
            "streetAddress": property.address,
            "addressLocality": property.city,
            "addressRegion": property.city,
            "addressCountry": "IN"
          },
          "priceRange": `₹${property.price}`,
          "telephone": "+91-123-456-7890",
          "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": property.rating,
            "reviewCount": property.reviewsCount
          }
        })}
      </script>

      {/* Gallery Header */}
      <section className="relative h-[60vh] bg-black">
        <button 
          onClick={() => navigate(-1)}
          className="absolute top-8 left-8 z-20 w-12 h-12 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white hover:bg-white/40 transition-all"
        >
          <ArrowLeft size={24} />
        </button>
        
        <div className="absolute top-8 right-8 z-20 flex space-x-3">
          <button className="w-12 h-12 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white hover:bg-white/40 transition-all">
            <Share2 size={20} />
          </button>
          <button className="w-12 h-12 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white hover:bg-white/40 transition-all">
            <Heart size={20} />
          </button>
        </div>

        <img src={property.images[0]} alt={property.name} className="w-full h-full object-cover opacity-80" />
      </section>

      <div className="max-w-7xl mx-auto px-4 -mt-32 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Info */}
          <div className="lg:col-span-2 space-y-8">
            <div className="bg-white dark:bg-gray-900 rounded-[2rem] p-8 md:p-12 shadow-2xl border border-gray-100 dark:border-gray-800">
              <div className="flex flex-wrap items-center gap-2 mb-4">
                <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900/40 text-blue-600 dark:text-blue-400 text-xs font-bold rounded-full uppercase tracking-widest">{property.type}</span>
                {property.isPremium && <span className="px-3 py-1 bg-yellow-100 dark:bg-yellow-900/40 text-yellow-700 dark:text-yellow-400 text-xs font-bold rounded-full uppercase tracking-widest">Premium</span>}
              </div>
              
              <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">{property.name}</h1>
              
              <div className="flex flex-wrap items-center gap-6 mb-8 text-gray-500">
                <div className="flex items-center">
                  <MapPin size={18} className="mr-2 text-blue-600" />
                  {property.city}
                </div>
                <div className="flex items-center">
                  <Users size={18} className="mr-2 text-blue-600" />
                  {property.capacity} capacity
                </div>
                <div className="flex items-center">
                  <Star size={18} className="mr-2 text-yellow-500 fill-yellow-500" />
                  {property.rating} ({property.reviewsCount} reviews)
                </div>
              </div>

              <div className="prose dark:prose-invert max-w-none">
                <h2 className="text-2xl font-bold mb-4">Description</h2>
                <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed mb-8">
                  {property.description} This space is meticulously designed to foster productivity and creativity. Situated in one of the most sought-after locations in {property.city}, it offers unmatched accessibility and infrastructure.
                </p>
              </div>

              <h2 className="text-2xl font-bold mb-6">Key Amenities</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {property.amenities.map(id => {
                  const am = AMENITIES.find(a => a.id === id);
                  return (
                    <div key={id} className="flex flex-col items-center p-4 bg-gray-50 dark:bg-gray-800 rounded-2xl border border-gray-100 dark:border-gray-700 text-center">
                      <span className="text-2xl mb-2">{am?.icon}</span>
                      <span className="text-xs font-bold text-gray-500 uppercase">{am?.name}</span>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="bg-white dark:bg-gray-900 rounded-[2rem] p-8 shadow-xl border border-gray-100 dark:border-gray-800">
              <h2 className="text-2xl font-bold mb-6">Location</h2>
              <p className="text-gray-500 mb-6">{property.address}</p>
              <div className="w-full h-80 bg-gray-100 dark:bg-gray-800 rounded-2xl flex items-center justify-center overflow-hidden grayscale">
                 <img src={`https://picsum.photos/seed/${property.name}/800/400`} alt="Map location" className="w-full h-full object-cover" />
                 <div className="absolute flex flex-col items-center">
                    <div className="w-10 h-10 bg-red-600 rounded-full flex items-center justify-center text-white shadow-xl animate-bounce">
                      <MapPin size={24} />
                    </div>
                 </div>
              </div>
            </div>
          </div>

          {/* Sidebar Inquiry Form */}
          <div className="lg:col-span-1">
            <div className="sticky top-28 space-y-6">
              <div className="bg-white dark:bg-gray-900 rounded-[2.5rem] p-8 shadow-2xl border border-blue-100 dark:border-blue-900">
                <div className="mb-8">
                  <div className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-1">Starting from</div>
                  <div className="text-4xl font-bold text-gray-900 dark:text-white">₹{property.price.toLocaleString('en-IN')}<span className="text-lg font-normal text-gray-400">/mo</span></div>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <input 
                      type="text" 
                      placeholder="Full Name" 
                      required
                      className="w-full px-5 py-3 rounded-xl bg-gray-50 dark:bg-gray-800 border-none outline-none focus:ring-2 focus:ring-blue-600 transition-all"
                      value={formState.name}
                      onChange={e => setFormState({...formState, name: e.target.value})}
                    />
                  </div>
                  <div>
                    <input 
                      type="email" 
                      placeholder="Work Email" 
                      required
                      className="w-full px-5 py-3 rounded-xl bg-gray-50 dark:bg-gray-800 border-none outline-none focus:ring-2 focus:ring-blue-600 transition-all"
                      value={formState.email}
                      onChange={e => setFormState({...formState, email: e.target.value})}
                    />
                  </div>
                  <div>
                    <textarea 
                      placeholder="How many seats do you need?" 
                      rows={3}
                      className="w-full px-5 py-3 rounded-xl bg-gray-50 dark:bg-gray-800 border-none outline-none focus:ring-2 focus:ring-blue-600 transition-all"
                      value={formState.message}
                      onChange={e => setFormState({...formState, message: e.target.value})}
                    ></textarea>
                  </div>
                  <button 
                    disabled={isSubmitted}
                    className={`w-full py-4 rounded-xl font-bold text-white transition-all flex items-center justify-center ${isSubmitted ? 'bg-green-500' : 'bg-blue-600 hover:bg-blue-700 shadow-xl shadow-blue-200 dark:shadow-none'}`}
                  >
                    {isSubmitted ? (
                      <>
                        <Check size={20} className="mr-2" />
                        Inquiry Sent!
                      </>
                    ) : (
                      <>
                        <Send size={18} className="mr-2" />
                        Book a Tour
                      </>
                    )}
                  </button>
                </form>

                <div className="mt-8 pt-6 border-t border-gray-100 dark:border-gray-800 text-center">
                  <div className="flex items-center justify-center text-gray-500 mb-2">
                    <Phone size={16} className="mr-2" />
                    <span className="text-sm font-semibold">+91 98765 43210</span>
                  </div>
                  <p className="text-[10px] text-gray-400 uppercase font-bold tracking-widest">Speak to a workspace expert</p>
                </div>
              </div>

              <div className="bg-blue-600 rounded-[2rem] p-8 text-white">
                <h3 className="text-xl font-bold mb-4">Why book with us?</h3>
                <ul className="space-y-4">
                  <li className="flex items-start text-sm">
                    <Check size={16} className="mr-3 mt-1 flex-shrink-0" />
                    Lowest price guaranteed
                  </li>
                  <li className="flex items-start text-sm">
                    <Check size={16} className="mr-3 mt-1 flex-shrink-0" />
                    Direct owner interaction
                  </li>
                  <li className="flex items-start text-sm">
                    <Check size={16} className="mr-3 mt-1 flex-shrink-0" />
                    Free documentation support
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyDetail;

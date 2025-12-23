
import React from 'react';
import { useParams } from 'react-router-dom';
import { MOCK_PROPERTIES } from '../constants';
import PropertyCard from '../components/PropertyCard';
import { MapPin, Info } from 'lucide-react';

const CityPage: React.FC = () => {
  const { city } = useParams();
  const cityName = city?.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ') || '';
  
  const properties = MOCK_PROPERTIES.filter(p => p.city.toLowerCase() === cityName.toLowerCase());

  return (
    <div className="min-h-screen pb-24">
      {/* City Hero */}
      <div className="h-[40vh] bg-gradient-to-br from-blue-600 to-indigo-900 relative overflow-hidden flex items-center justify-center">
         <div className="absolute inset-0 opacity-20">
            <img src={`https://picsum.photos/seed/${city}/1920/1080`} className="w-full h-full object-cover" alt={cityName} />
         </div>
         <div className="relative z-10 text-center px-4">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 tracking-tight">Coworking Spaces in {cityName}</h1>
            <p className="text-blue-100 text-lg md:text-xl font-light max-w-2xl mx-auto">Discover top-rated shared offices and managed spaces in the heart of {cityName}.</p>
         </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 mt-12">
        <div className="flex flex-col md:flex-row gap-12">
          {/* Main List */}
          <div className="flex-grow">
            <div className="mb-10 flex items-center justify-between">
              <h2 className="text-2xl font-bold flex items-center">
                <MapPin className="mr-2 text-blue-600" size={24} />
                Spaces in {cityName}
              </h2>
              <span className="text-sm font-bold text-gray-400 uppercase tracking-widest">{properties.length} Listings</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {properties.length > 0 ? (
                properties.map(p => <PropertyCard key={p.id} property={p} />)
              ) : (
                <div className="col-span-full py-20 text-center bg-gray-50 dark:bg-gray-900 rounded-[2rem]">
                  <p className="text-gray-500">Currently expanding our network in {cityName}. Check back soon!</p>
                </div>
              )}
            </div>

            {/* AEO/FAQ Section */}
            <div className="mt-20 p-10 bg-white dark:bg-gray-900 rounded-[2.5rem] border border-gray-100 dark:border-gray-800">
               <h3 className="text-2xl font-bold mb-8">Frequently Asked Questions about Coworking in {cityName}</h3>
               <div className="space-y-8">
                  <div className="space-y-2">
                    <h4 className="font-bold text-lg">What is the average cost of a coworking desk in {cityName}?</h4>
                    <p className="text-gray-500">In {cityName}, hot desks typically start from ₹5,000 per month, while premium private offices can go up to ₹25,000 per seat depending on the micro-market like BKC or Koramangala.</p>
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-bold text-lg">Are there coworking spaces near {cityName} metro stations?</h4>
                    <p className="text-gray-500">Yes, nearbyspace.app features many spaces specifically selected for their proximity to transit hubs to reduce your daily commute time.</p>
                  </div>
               </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="md:w-80 flex-shrink-0">
             <div className="sticky top-28 bg-gray-50 dark:bg-gray-900 p-8 rounded-[2rem] border border-gray-100 dark:border-gray-800">
                <h3 className="text-xl font-bold mb-6">Local Guide</h3>
                <div className="space-y-4">
                   <div className="flex items-start">
                      <div className="w-8 h-8 bg-blue-100 dark:bg-blue-900/40 rounded-lg flex items-center justify-center text-blue-600 mr-3 mt-1 flex-shrink-0">
                        <Info size={16} />
                      </div>
                      <p className="text-sm text-gray-600 dark:text-gray-400">Popular hubs in {cityName} include the central business districts and tech parks.</p>
                   </div>
                   <div className="flex items-start">
                      <div className="w-8 h-8 bg-blue-100 dark:bg-blue-900/40 rounded-lg flex items-center justify-center text-blue-600 mr-3 mt-1 flex-shrink-0">
                        <MapPin size={16} />
                      </div>
                      <p className="text-sm text-gray-600 dark:text-gray-400">Most spaces offer 24/7 access and high-speed fiber internet.</p>
                   </div>
                </div>
                <button className="w-full mt-8 py-4 bg-blue-600 text-white font-bold rounded-xl shadow-lg hover:bg-blue-700 transition-all">
                  Request a Quote
                </button>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CityPage;

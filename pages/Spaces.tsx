
import React, { useState, useEffect } from 'react';
import { Search, MapPin, Filter, SlidersHorizontal, Navigation } from 'lucide-react';
import { MOCK_PROPERTIES, CITIES } from '../constants';
import PropertyCard from '../components/PropertyCard';
import { SpaceType } from '../types';

const Spaces: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCity, setSelectedCity] = useState('All Cities');
  const [selectedType, setSelectedType] = useState('All Types');
  const [isNearMeLoading, setIsNearMeLoading] = useState(false);

  const filteredProperties = MOCK_PROPERTIES.filter(p => {
    const matchesSearch = p.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          p.city.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCity = selectedCity === 'All Cities' || p.city === selectedCity;
    const matchesType = selectedType === 'All Types' || p.type === selectedType;
    return matchesSearch && matchesCity && matchesType;
  });

  const handleNearMe = () => {
    setIsNearMeLoading(true);
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          // In a real app, you'd fetch nearby spaces from backend using lat/lng
          console.log(position.coords);
          setTimeout(() => setIsNearMeLoading(false), 1000);
        },
        () => setIsNearMeLoading(false)
      );
    } else {
      setIsNearMeLoading(false);
    }
  };

  return (
    <div className="min-h-screen pt-12 pb-24">
      <div className="max-w-7xl mx-auto px-4">
        {/* Page Title & Search */}
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">Explore Workspaces</h1>
          <div className="flex flex-col md:flex-row gap-4">
            <div className="relative flex-grow">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
              <input 
                type="text" 
                placeholder="Search by city, area or building name..."
                className="w-full pl-12 pr-4 py-4 rounded-2xl bg-gray-100 dark:bg-gray-900 border-none focus:ring-2 focus:ring-blue-600 outline-none"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <button 
              onClick={handleNearMe}
              className={`flex items-center justify-center px-6 py-4 rounded-2xl bg-blue-600 text-white font-bold hover:bg-blue-700 transition-all ${isNearMeLoading ? 'opacity-50 cursor-wait' : ''}`}
            >
              <Navigation size={20} className="mr-2" />
              {isNearMeLoading ? 'Finding...' : 'Near Me'}
            </button>
          </div>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap items-center gap-4 mb-12">
          <div className="flex items-center text-sm font-bold text-gray-400 mr-2">
            <Filter size={16} className="mr-2" />
            FILTER BY
          </div>
          
          <select 
            className="px-4 py-2 rounded-full border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 text-sm focus:ring-1 focus:ring-blue-600 outline-none"
            value={selectedCity}
            onChange={(e) => setSelectedCity(e.target.value)}
          >
            <option>All Cities</option>
            {CITIES.map(city => <option key={city}>{city}</option>)}
          </select>

          <select 
            className="px-4 py-2 rounded-full border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 text-sm focus:ring-1 focus:ring-blue-600 outline-none"
            value={selectedType}
            onChange={(e) => setSelectedType(e.target.value)}
          >
            <option>All Types</option>
            {Object.values(SpaceType).map(type => <option key={type}>{type}</option>)}
          </select>

          <div className="ml-auto flex items-center text-sm text-gray-500">
            Showing <span className="font-bold text-gray-900 dark:text-gray-100 mx-1">{filteredProperties.length}</span> results
          </div>
        </div>

        {/* Results Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {filteredProperties.length > 0 ? (
            filteredProperties.map(property => (
              <PropertyCard key={property.id} property={property} />
            ))
          ) : (
            <div className="col-span-full py-24 text-center">
              <div className="w-24 h-24 bg-gray-100 dark:bg-gray-800 rounded-full flex items-center justify-center mx-auto mb-6">
                <Search size={40} className="text-gray-400" />
              </div>
              <h3 className="text-xl font-bold">No spaces found</h3>
              <p className="text-gray-500 mt-2">Try adjusting your filters or search term.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Spaces;

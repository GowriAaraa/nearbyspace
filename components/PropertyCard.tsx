
import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Users, Star, ArrowRight } from 'lucide-react';
import { PropertyListing } from '../types';

interface PropertyCardProps {
  property: PropertyListing;
}

const PropertyCard: React.FC<PropertyCardProps> = ({ property }) => {
  const citySlug = property.city.toLowerCase().replace(' ', '-');
  const propertySlug = property.name.toLowerCase().replace(' ', '-');

  return (
    <div className="group bg-white dark:bg-gray-900 rounded-[2.5rem] border border-gray-100 dark:border-gray-800 overflow-hidden shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-500">
      <div className="relative aspect-[4/3] overflow-hidden">
        <img 
          src={property.images[0]} 
          alt={property.name} 
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
          loading="lazy"
        />
        {property.isPremium && (
          <div className="absolute top-4 left-4 px-3 py-1 bg-blue-600 text-white text-[10px] font-bold uppercase tracking-widest rounded-full shadow-lg">
            Premium Choice
          </div>
        )}
        <div className="absolute bottom-4 right-4 bg-black/60 backdrop-blur-md px-3 py-1 rounded-full text-white text-xs font-bold">
          ₹{property.price.toLocaleString('en-IN')}/mo
        </div>
      </div>
      
      <div className="p-6">
        <div className="flex justify-between items-start mb-2">
          <span className="text-[10px] font-bold uppercase tracking-widest text-blue-600 dark:text-blue-400">{property.type}</span>
          <div className="flex items-center text-xs font-bold text-gray-900 dark:text-gray-100">
            <Star size={12} className="text-yellow-400 fill-yellow-400 mr-1" />
            {property.rating}
          </div>
        </div>
        
        <h3 className="text-lg font-bold mb-2 group-hover:text-blue-600 transition-colors">{property.name}</h3>
        
        <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-4">
          <MapPin size={14} className="mr-1" />
          {property.area}, {property.city}
        </div>
        
        <div className="flex items-center justify-between pt-4 border-t border-gray-100 dark:border-gray-800">
          <div className="flex items-center text-xs text-gray-400">
            <Users size={14} className="mr-1" />
            Up to {property.capacity} seats
          </div>
          <Link 
            to={`/spaces/${citySlug}/${propertySlug}`} 
            className="w-8 h-8 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-all"
          >
            <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;

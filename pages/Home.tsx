
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
// Added ShieldCheck to imports
import { Search, MapPin, Building, ChevronRight, Star, Users, Briefcase, Zap, ShieldCheck } from 'lucide-react';
import { Link } from 'react-router-dom';
import { MOCK_PROPERTIES, CITIES } from '../constants';
import PropertyCard from '../components/PropertyCard';

const SLIDES = [
  {
    image: 'https://picsum.photos/id/445/1920/1080',
    title: 'Work Where Inspiration Strikes',
    subtitle: 'Find premium coworking spaces in Bangalore, Mumbai & Delhi.',
    cta: 'Discover Spaces',
    seo: 'Best coworking spaces in India for startups and freelancers.'
  },
  {
    image: 'https://picsum.photos/id/370/1920/1080',
    title: 'Fuel Your Productivity',
    subtitle: 'Managed office solutions designed for high-growth Indian teams.',
    cta: 'Explore Managed Offices',
    seo: 'Rent premium managed office spaces across PAN India cities.'
  },
  {
    image: 'https://picsum.photos/id/382/1920/1080',
    title: 'India\'s Largest Network',
    subtitle: 'From Guindy to Gurgaon, find your perfect office near the metro.',
    cta: 'View Map',
    seo: 'Coworking space near me with top-tier amenities and connectivity.'
  },
  {
    image: 'https://picsum.photos/id/6/1920/1080',
    title: 'Trusted by 5000+ Founders',
    subtitle: 'Join the most vibrant community of creators in India.',
    cta: 'Join Community',
    seo: 'Flexible workspace solutions for modern Indian businesses.'
  }
];

const REVIEWS = [
  { id: 1, name: 'Ananya Sharma', role: 'Founder, Techflow', comment: 'NearbySpace made our office search in Bangalore so effortless. The UI is just beautiful.', rating: 5 },
  { id: 2, name: 'Rahul Varma', role: 'Freelancer', comment: 'Found a great hot desk near my home in Pune. Highly recommend for independent workers!', rating: 5 },
  { id: 3, name: 'Priya Iyer', role: 'HR Manager, FinLeap', comment: 'Scaling our team in Mumbai was easy with their managed office listings.', rating: 4 },
  { id: 4, name: 'Vikram Singh', role: 'Product Lead', comment: 'The proximity search works like a charm. Found an office 5 mins from the metro.', rating: 5 },
];

const Home: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % SLIDES.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative h-[90vh] overflow-hidden bg-black">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 0.6, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5, ease: 'easeOut' }}
            className="absolute inset-0 z-0"
          >
            <img 
              src={SLIDES[currentSlide].image} 
              alt={SLIDES[currentSlide].seo}
              className="w-full h-full object-cover"
            />
          </motion.div>
        </AnimatePresence>

        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/30 z-10" />

        <div className="relative z-20 h-full max-w-7xl mx-auto px-4 flex flex-col justify-center items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="space-y-6"
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-blue-600/20 text-blue-400 text-sm font-bold tracking-widest uppercase backdrop-blur-md border border-blue-500/30">
              Made for Bharat 🇮🇳
            </span>
            <h1 className="text-5xl md:text-7xl font-bold text-white tracking-tight leading-tight max-w-4xl mx-auto">
              {SLIDES[currentSlide].title}
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto font-light">
              {SLIDES[currentSlide].subtitle}
            </p>

            <div className="pt-8 flex flex-col md:flex-row items-center justify-center gap-4">
              <Link to="/spaces" className="w-full md:w-auto px-10 py-4 bg-white text-black font-bold rounded-full text-lg hover:scale-105 transition-transform">
                {SLIDES[currentSlide].cta}
              </Link>
              <button className="w-full md:w-auto px-10 py-4 bg-white/10 text-white font-semibold rounded-full text-lg backdrop-blur-md hover:bg-white/20 transition-all">
                List Your Space
              </button>
            </div>
          </motion.div>

          <div className="absolute bottom-10 left-0 right-0 flex justify-center space-x-2">
            {SLIDES.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentSlide(i)}
                className={`w-12 h-1 rounded-full transition-all ${i === currentSlide ? 'bg-white w-20' : 'bg-white/30'}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Google Ads Unit 1 */}
      <div className="max-w-7xl mx-auto px-4 mt-12">
        <div className="w-full h-24 bg-gray-50 dark:bg-gray-900 rounded-xl border border-dashed border-gray-300 dark:border-gray-800 flex items-center justify-center overflow-hidden">
          <span className="text-gray-400 font-bold opacity-50">GOOGLE ADS HORIZONTAL UNIT</span>
        </div>
      </div>

      {/* Quick Search Section */}
      <section className="py-24 max-w-7xl mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div className="max-w-xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Find your next workspace</h2>
            <p className="text-gray-500 dark:text-gray-400">Search through verified coworking listings across 10 major Indian cities with over 500+ flexible office locations.</p>
          </div>
          <Link to="/spaces" className="flex items-center text-blue-600 font-bold hover:underline">
            View all spaces <ChevronRight size={18} className="ml-1" />
          </Link>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-16">
          {CITIES.slice(0, 10).map((city) => (
            <Link 
              key={city}
              to={`/spaces/${city.toLowerCase().replace(' ', '-')}`}
              className="group p-6 bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 rounded-3xl shadow-sm hover:shadow-xl hover:border-blue-200 dark:hover:border-blue-900 transition-all flex flex-col items-center text-center"
            >
              <div className="w-12 h-12 bg-blue-50 dark:bg-blue-900/30 rounded-2xl flex items-center justify-center text-blue-600 dark:text-blue-400 mb-4 group-hover:scale-110 transition-transform">
                <MapPin size={24} />
              </div>
              <span className="font-bold text-gray-900 dark:text-gray-100">{city}</span>
              <span className="text-xs text-gray-400 mt-1">40+ Spaces</span>
            </Link>
          ))}
        </div>

        {/* Dynamic Listings */}
        <h3 className="text-2xl font-bold mb-8 flex items-center">
          Recently Listed Spaces <Zap size={20} className="ml-2 text-yellow-500 fill-yellow-500" />
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {MOCK_PROPERTIES.map((prop) => (
            <PropertyCard key={prop.id} property={prop} />
          ))}
        </div>
      </section>

      {/* Value Proposition Section */}
      <section className="py-24 bg-gray-50 dark:bg-gray-950">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-16 tracking-tight">Why founders choose NearbySpace</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="space-y-6">
              <div className="w-16 h-16 bg-white dark:bg-gray-900 rounded-2xl shadow-lg mx-auto flex items-center justify-center text-blue-600">
                <ShieldCheck size={32} />
              </div>
              <h3 className="text-xl font-bold">Verified Listings Only</h3>
              <p className="text-gray-500 dark:text-gray-400 leading-relaxed">Every workspace on our platform is physically verified by our local city teams to ensure the highest quality standards.</p>
            </div>
            <div className="space-y-6">
              <div className="w-16 h-16 bg-white dark:bg-gray-900 rounded-2xl shadow-lg mx-auto flex items-center justify-center text-blue-600">
                <Building size={32} />
              </div>
              <h3 className="text-xl font-bold">Zero Brokerage Fee</h3>
              <p className="text-gray-500 dark:text-gray-400 leading-relaxed">Users pay exactly what the owner lists. No hidden charges or agent commissions. Transparency is our core value.</p>
            </div>
            <div className="space-y-6">
              <div className="w-16 h-16 bg-white dark:bg-gray-900 rounded-2xl shadow-lg mx-auto flex items-center justify-center text-blue-600">
                <Users size={32} />
              </div>
              <h3 className="text-xl font-bold">Community-First</h3>
              <p className="text-gray-500 dark:text-gray-400 leading-relaxed">Join a network of 10,000+ creators. Get access to exclusive networking events and mentorship across India.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 max-w-7xl mx-auto px-4 overflow-hidden">
        <h2 className="text-3xl font-bold mb-12 text-center">What our users say</h2>
        <div className="flex space-x-6 animate-scroll hover:pause">
           {/* Simple horizontal marquee simulation */}
           <div className="flex space-x-6 animate-[marquee_20s_linear_infinite]">
            {[...REVIEWS, ...REVIEWS].map((review, i) => (
              <div key={i} className="flex-shrink-0 w-80 p-8 bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 rounded-3xl shadow-sm">
                <div className="flex mb-4">
                  {[...Array(review.rating)].map((_, j) => <Star key={j} size={16} className="text-yellow-400 fill-yellow-400" />)}
                </div>
                <p className="text-gray-600 dark:text-gray-300 italic mb-6">"{review.comment}"</p>
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold mr-3">
                    {review.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="font-bold text-sm">{review.name}</h4>
                    <p className="text-xs text-gray-400">{review.role}</p>
                  </div>
                </div>
              </div>
            ))}
           </div>
        </div>
      </section>

      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  );
};

export default Home;


import React, { useState, useEffect } from 'react';
import { HashRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { Menu, X, Sun, Moon, Search, MapPin, Building, ShieldCheck, Mail, Phone, ChevronRight, LayoutDashboard, LogOut, ArrowRight, User } from 'lucide-react';

import Home from './pages/Home';
import Spaces from './pages/Spaces';
import About from './pages/About';
import Contact from './pages/Contact';
import OwnerDashboard from './pages/OwnerDashboard';
import PropertyDetail from './pages/PropertyDetail';
import CityPage from './pages/CityPage';
import OwnerAuth from './pages/OwnerAuth';

const App: React.FC = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  const toggleTheme = () => setIsDarkMode(!isDarkMode);

  return (
    <Router>
      <div className="min-h-screen flex flex-col font-sans">
        {/* Navigation */}
        <nav className="sticky top-0 z-50 bg-white/80 dark:bg-gray-900/80 apple-blur border-b border-gray-200 dark:border-gray-800 transition-colors">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-20 items-center">
              <div className="flex items-center space-x-2">
                <Link to="/" className="flex items-center group">
                  <div className="w-10 h-10 bg-gradient-to-tr from-blue-600 to-indigo-700 rounded-xl flex items-center justify-center text-white font-bold text-xl shadow-lg group-hover:scale-105 transition-transform">
                    N
                  </div>
                  <span className="ml-3 text-2xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-700 dark:from-blue-400 dark:to-indigo-500">
                    nearbyspace
                  </span>
                </Link>
              </div>

              {/* Desktop Nav */}
              <div className="hidden md:flex items-center space-x-8">
                <Link to="/" className="text-sm font-medium hover:text-blue-600 transition-colors">Home</Link>
                <Link to="/spaces" className="text-sm font-medium hover:text-blue-600 transition-colors">Find Spaces</Link>
                <Link to="/about" className="text-sm font-medium hover:text-blue-600 transition-colors">About Us</Link>
                <Link to="/contact" className="text-sm font-medium hover:text-blue-600 transition-colors">Contact</Link>
                
                <div className="h-6 w-px bg-gray-200 dark:bg-gray-700 mx-2"></div>

                <button 
                  onClick={toggleTheme}
                  className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                >
                  {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
                </button>

                {isLoggedIn ? (
                  <Link 
                    to="/dashboard"
                    className="flex items-center px-5 py-2.5 rounded-full bg-gray-100 dark:bg-gray-800 text-sm font-semibold hover:bg-gray-200 dark:hover:bg-gray-700 transition-all"
                  >
                    <LayoutDashboard size={16} className="mr-2" />
                    Dashboard
                  </Link>
                ) : (
                  <Link 
                    to="/auth"
                    className="px-5 py-2.5 rounded-full bg-blue-600 text-white text-sm font-semibold hover:bg-blue-700 shadow-md shadow-blue-200 dark:shadow-none transition-all"
                  >
                    Owner Login
                  </Link>
                )}
              </div>

              {/* Mobile Menu Toggle */}
              <div className="md:hidden flex items-center space-x-4">
                <button onClick={toggleTheme} className="p-2">
                  {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
                </button>
                <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="p-2">
                  {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
              </div>
            </div>
          </div>

          {/* Mobile Menu */}
          <AnimatePresence>
            {isMenuOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="md:hidden bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800 overflow-hidden"
              >
                <div className="px-4 pt-2 pb-6 space-y-1">
                  <Link to="/" onClick={() => setIsMenuOpen(false)} className="block px-3 py-4 text-base font-medium border-b border-gray-100 dark:border-gray-800">Home</Link>
                  <Link to="/spaces" onClick={() => setIsMenuOpen(false)} className="block px-3 py-4 text-base font-medium border-b border-gray-100 dark:border-gray-800">Find Spaces</Link>
                  <Link to="/about" onClick={() => setIsMenuOpen(false)} className="block px-3 py-4 text-base font-medium border-b border-gray-100 dark:border-gray-800">About Us</Link>
                  <Link to="/contact" onClick={() => setIsMenuOpen(false)} className="block px-3 py-4 text-base font-medium border-b border-gray-100 dark:border-gray-800">Contact</Link>
                  <div className="pt-4">
                    {isLoggedIn ? (
                      <Link to="/dashboard" onClick={() => setIsMenuOpen(false)} className="w-full flex items-center justify-center px-4 py-3 rounded-xl bg-blue-600 text-white font-bold">
                        Owner Dashboard
                      </Link>
                    ) : (
                      <Link to="/auth" onClick={() => setIsMenuOpen(false)} className="w-full flex items-center justify-center px-4 py-3 rounded-xl bg-blue-600 text-white font-bold">
                        List Your Space
                      </Link>
                    )}
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </nav>

        {/* Content Area */}
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/spaces" element={<Spaces />} />
            <Route path="/spaces/:city" element={<CityPage />} />
            <Route path="/spaces/:city/:slug" element={<PropertyDetail />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/dashboard/*" element={<OwnerDashboard onLogout={() => setIsLoggedIn(false)} />} />
            <Route path="/auth" element={<OwnerAuth onLogin={() => setIsLoggedIn(true)} />} />
          </Routes>
        </main>

        {/* Footer */}
        <footer className="bg-gray-50 dark:bg-gray-950 border-t border-gray-200 dark:border-gray-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
              <div className="col-span-1 md:col-span-1">
                <Link to="/" className="flex items-center">
                  <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold">N</div>
                  <span className="ml-2 text-xl font-bold tracking-tight">nearbyspace</span>
                </Link>
                <p className="mt-6 text-sm text-gray-500 leading-relaxed">
                  India's leading marketplace for flexible workspaces. We connect building owners with the next generation of founders and creators.
                </p>
                <div className="mt-8 flex space-x-4">
                  <div className="w-10 h-10 rounded-full bg-white dark:bg-gray-900 shadow-sm border border-gray-200 dark:border-gray-800 flex items-center justify-center">
                    <span className="text-xl">🇮🇳</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-xs font-semibold text-gray-400 uppercase tracking-wider">Presence</span>
                    <span className="text-sm font-medium">Across 10+ Cities</span>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-sm font-bold text-gray-900 dark:text-white uppercase tracking-wider mb-6">Discovery</h3>
                <ul className="space-y-4">
                  <li><Link to="/spaces/bangalore" className="text-sm text-gray-600 dark:text-gray-400 hover:text-blue-600">Bangalore</Link></li>
                  <li><Link to="/spaces/mumbai" className="text-sm text-gray-600 dark:text-gray-400 hover:text-blue-600">Mumbai</Link></li>
                  <li><Link to="/spaces/delhi" className="text-sm text-gray-600 dark:text-gray-400 hover:text-blue-600">Delhi NCR</Link></li>
                  <li><Link to="/spaces/hyderabad" className="text-sm text-gray-600 dark:text-gray-400 hover:text-blue-600">Hyderabad</Link></li>
                </ul>
              </div>

              <div>
                <h3 className="text-sm font-bold text-gray-900 dark:text-white uppercase tracking-wider mb-6">Platform</h3>
                <ul className="space-y-4">
                  <li><Link to="/about" className="text-sm text-gray-600 dark:text-gray-400 hover:text-blue-600">Our Story</Link></li>
                  <li><Link to="/auth" className="text-sm text-gray-600 dark:text-gray-400 hover:text-blue-600">Partner with Us</Link></li>
                  <li><Link to="/contact" className="text-sm text-gray-600 dark:text-gray-400 hover:text-blue-600">Support</Link></li>
                  <li><a href="#" className="text-sm text-gray-600 dark:text-gray-400 hover:text-blue-600">Privacy Policy</a></li>
                </ul>
              </div>

              <div>
                <h3 className="text-sm font-bold text-gray-900 dark:text-white uppercase tracking-wider mb-6">Newsletter</h3>
                <p className="text-xs text-gray-500 mb-4">Get the latest on workspace trends in India.</p>
                <div className="flex">
                  <input 
                    type="email" 
                    placeholder="Email address" 
                    className="flex-grow px-4 py-2 text-sm border border-gray-300 dark:border-gray-800 bg-white dark:bg-gray-900 rounded-l-lg focus:outline-none focus:ring-1 focus:ring-blue-600"
                  />
                  <button className="bg-blue-600 text-white px-4 py-2 rounded-r-lg hover:bg-blue-700 transition-colors">
                    Join
                  </button>
                </div>
              </div>
            </div>

            {/* Google Ads Placeholder 2 */}
            <div className="mt-16 w-full h-32 bg-gray-100 dark:bg-gray-900 rounded-2xl flex items-center justify-center border border-dashed border-gray-300 dark:border-gray-700">
               <span className="text-gray-400 text-sm font-medium">ADVERTISEMENT SPACE</span>
            </div>

            <div className="mt-16 pt-8 border-t border-gray-200 dark:border-gray-800 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <div className="text-sm text-gray-500">
                &copy; {new Date().getFullYear()} nearbyspace.app. All rights reserved.
              </div>
              <div className="signature-font text-lg text-gray-800 dark:text-gray-200">
                Made in <span className="inline-block animate-bounce">🇮🇳</span> by <span className="font-bold">Gowri</span> and <span className="font-bold">gowri</span> ✍️
              </div>
            </div>
          </div>
        </footer>
      </div>
    </Router>
  );
};

export default App;


import React, { useState } from 'react';
import { Routes, Route, Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Plus, 
  BarChart3, 
  Building2, 
  MessageSquare, 
  Settings, 
  LogOut, 
  ChevronRight, 
  MapPin, 
  IndianRupee, 
  Users, 
  Image as ImageIcon,
  CheckCircle2,
  Trash2,
  Edit
} from 'lucide-react';
import { MOCK_PROPERTIES } from '../constants';
import { SpaceType } from '../types';

const DashboardHome: React.FC = () => {
  return (
    <div className="space-y-8">
      <div className="flex justify-between items-end">
        <div>
          <h1 className="text-3xl font-bold">Welcome back, Partner</h1>
          <p className="text-gray-500">Here's what's happening with your properties today.</p>
        </div>
        <Link to="/dashboard/add" className="flex items-center px-6 py-3 bg-blue-600 text-white font-bold rounded-2xl hover:bg-blue-700 shadow-lg shadow-blue-100 transition-all">
          <Plus size={20} className="mr-2" />
          Add Property
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white dark:bg-gray-900 p-8 rounded-3xl border border-gray-100 dark:border-gray-800 shadow-sm">
          <div className="w-12 h-12 bg-blue-50 dark:bg-blue-900/40 rounded-xl flex items-center justify-center text-blue-600 mb-6">
            <Building2 size={24} />
          </div>
          <div className="text-3xl font-bold mb-1">4</div>
          <div className="text-sm font-bold text-gray-400 uppercase tracking-widest">Active Listings</div>
        </div>
        <div className="bg-white dark:bg-gray-900 p-8 rounded-3xl border border-gray-100 dark:border-gray-800 shadow-sm">
          <div className="w-12 h-12 bg-green-50 dark:bg-green-900/40 rounded-xl flex items-center justify-center text-green-600 mb-6">
            <MessageSquare size={24} />
          </div>
          <div className="text-3xl font-bold mb-1">12</div>
          <div className="text-sm font-bold text-gray-400 uppercase tracking-widest">New Inquiries</div>
        </div>
        <div className="bg-white dark:bg-gray-900 p-8 rounded-3xl border border-gray-100 dark:border-gray-800 shadow-sm">
          <div className="w-12 h-12 bg-purple-50 dark:bg-purple-900/40 rounded-xl flex items-center justify-center text-purple-600 mb-6">
            <BarChart3 size={24} />
          </div>
          <div className="text-3xl font-bold mb-1">2.4k</div>
          <div className="text-sm font-bold text-gray-400 uppercase tracking-widest">Property Views</div>
        </div>
      </div>

      <div className="bg-white dark:bg-gray-900 rounded-[2.5rem] p-8 border border-gray-100 dark:border-gray-800 shadow-sm">
        <h2 className="text-xl font-bold mb-6">Your Properties</h2>
        <div className="space-y-4">
          {MOCK_PROPERTIES.slice(0, 2).map(p => (
            <div key={p.id} className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-800 rounded-2xl hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">
              <div className="flex items-center">
                <div className="w-16 h-16 rounded-xl overflow-hidden mr-4">
                  <img src={p.images[0]} alt={p.name} className="w-full h-full object-cover" />
                </div>
                <div>
                  <h4 className="font-bold">{p.name}</h4>
                  <p className="text-sm text-gray-500">{p.area}, {p.city}</p>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <button className="p-3 bg-white dark:bg-gray-900 rounded-xl shadow-sm border border-gray-100 dark:border-gray-800 hover:text-blue-600"><Edit size={18}/></button>
                <button className="p-3 bg-white dark:bg-gray-900 rounded-xl shadow-sm border border-gray-100 dark:border-gray-800 hover:text-red-600"><Trash2 size={18}/></button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const AddPropertyForm: React.FC = () => {
  const [step, setStep] = useState(1);
  const navigate = useNavigate();

  return (
    <div className="max-w-4xl">
      <div className="flex items-center justify-between mb-12">
        <h1 className="text-3xl font-bold">List New Workspace</h1>
        <div className="flex space-x-2">
          {[1, 2, 3, 4, 5].map(i => (
            <div key={i} className={`w-12 h-1.5 rounded-full ${step >= i ? 'bg-blue-600' : 'bg-gray-200 dark:bg-gray-800'}`} />
          ))}
        </div>
      </div>

      <div className="bg-white dark:bg-gray-900 rounded-[2.5rem] p-8 md:p-12 shadow-xl border border-gray-100 dark:border-gray-800">
        {step === 1 && (
          <div className="space-y-6">
            <h2 className="text-xl font-bold">Step 1: Basic Details</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-bold text-gray-400 uppercase tracking-widest">Property Name</label>
                <input type="text" className="w-full px-5 py-3 rounded-xl bg-gray-50 dark:bg-gray-800 border-none outline-none focus:ring-2 focus:ring-blue-600" placeholder="e.g. Innov8 Park Square" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-gray-400 uppercase tracking-widest">City</label>
                <input type="text" className="w-full px-5 py-3 rounded-xl bg-gray-50 dark:bg-gray-800 border-none outline-none focus:ring-2 focus:ring-blue-600" placeholder="e.g. Bangalore" />
              </div>
              <div className="md:col-span-2 space-y-2">
                <label className="text-sm font-bold text-gray-400 uppercase tracking-widest">Full Address</label>
                <textarea rows={3} className="w-full px-5 py-3 rounded-xl bg-gray-50 dark:bg-gray-800 border-none outline-none focus:ring-2 focus:ring-blue-600" placeholder="Enter full postal address..."></textarea>
              </div>
            </div>
          </div>
        )}

        {step === 2 && (
          <div className="space-y-6">
            <h2 className="text-xl font-bold">Step 2: Space & Pricing</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-bold text-gray-400 uppercase tracking-widest">Space Type</label>
                <select className="w-full px-5 py-3 rounded-xl bg-gray-50 dark:bg-gray-800 border-none outline-none focus:ring-2 focus:ring-blue-600">
                  {Object.values(SpaceType).map(t => <option key={t}>{t}</option>)}
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-gray-400 uppercase tracking-widest">Pricing (₹ / month)</label>
                <input type="number" className="w-full px-5 py-3 rounded-xl bg-gray-50 dark:bg-gray-800 border-none outline-none focus:ring-2 focus:ring-blue-600" placeholder="9000" />
              </div>
            </div>
          </div>
        )}

        {step === 5 && (
          <div className="text-center py-12 space-y-6">
            <div className="w-20 h-20 bg-green-100 dark:bg-green-900/30 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle2 size={48} />
            </div>
            <h2 className="text-3xl font-bold">Listing Published!</h2>
            <p className="text-gray-500 max-w-sm mx-auto">Your property is now live and visible to thousands of potential workspace seekers across India.</p>
            <button onClick={() => navigate('/dashboard')} className="px-10 py-4 bg-blue-600 text-white font-bold rounded-2xl hover:bg-blue-700">
              Back to Dashboard
            </button>
          </div>
        )}

        {step < 5 && (
          <div className="mt-12 flex justify-between">
            <button 
              onClick={() => setStep(Math.max(1, step - 1))}
              disabled={step === 1}
              className="px-8 py-3 bg-gray-100 dark:bg-gray-800 font-bold rounded-xl disabled:opacity-30"
            >
              Back
            </button>
            <button 
              onClick={() => setStep(step + 1)}
              className="px-10 py-3 bg-blue-600 text-white font-bold rounded-xl hover:bg-blue-700 shadow-lg shadow-blue-100 transition-all"
            >
              {step === 4 ? 'Confirm & Publish' : 'Continue'}
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

const OwnerDashboard: React.FC<{ onLogout: () => void }> = ({ onLogout }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    onLogout();
    navigate('/');
  };

  return (
    <div className="flex min-h-screen bg-gray-50 dark:bg-gray-950">
      {/* Sidebar */}
      <div className="w-20 md:w-72 bg-white dark:bg-gray-900 border-r border-gray-200 dark:border-gray-800 flex flex-col pt-10 pb-6 px-4">
        <div className="hidden md:block px-4 mb-10">
          <div className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4">Dashboard</div>
        </div>
        
        <nav className="flex-grow space-y-2">
          <Link to="/dashboard" className="flex items-center px-4 py-4 rounded-2xl bg-blue-50 dark:bg-blue-900/30 text-blue-600 font-bold">
            <BarChart3 size={24} className="md:mr-4" />
            <span className="hidden md:block">Overview</span>
          </Link>
          <Link to="/dashboard/listings" className="flex items-center px-4 py-4 rounded-2xl text-gray-500 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
            <Building2 size={24} className="md:mr-4" />
            <span className="hidden md:block">Properties</span>
          </Link>
          <Link to="/dashboard/inquiries" className="flex items-center px-4 py-4 rounded-2xl text-gray-500 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
            <MessageSquare size={24} className="md:mr-4" />
            <span className="hidden md:block">Inquiries</span>
          </Link>
          <Link to="/dashboard/settings" className="flex items-center px-4 py-4 rounded-2xl text-gray-500 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
            <Settings size={24} className="md:mr-4" />
            <span className="hidden md:block">Settings</span>
          </Link>
        </nav>

        <button 
          onClick={handleLogout}
          className="flex items-center px-4 py-4 rounded-2xl text-red-500 hover:bg-red-50 dark:hover:bg-red-900/20 transition-colors"
        >
          <LogOut size={24} className="md:mr-4" />
          <span className="hidden md:block font-bold">Logout</span>
        </button>
      </div>

      {/* Main Content */}
      <div className="flex-grow p-4 md:p-12 overflow-y-auto max-h-screen">
        <Routes>
          <Route path="/" element={<DashboardHome />} />
          <Route path="/add" element={<AddPropertyForm />} />
          <Route path="/listings" element={<DashboardHome />} />
          <Route path="/inquiries" element={<DashboardHome />} />
        </Routes>
      </div>
    </div>
  );
};

export default OwnerDashboard;

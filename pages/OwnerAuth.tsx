
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Mail, Phone, Lock, ChevronRight, CheckCircle } from 'lucide-react';

interface OwnerAuthProps {
  onLogin: () => void;
}

const OwnerAuth: React.FC<OwnerAuthProps> = ({ onLogin }) => {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({ name: '', phone: '', business: '' });

  const handleNext = (e: React.FormEvent) => {
    e.preventDefault();
    if (step < 2) setStep(step + 1);
    else {
      onLogin();
      navigate('/dashboard');
    }
  };

  return (
    <div className="min-h-[80vh] flex items-center justify-center p-4">
      <div className="w-full max-w-xl">
        <div className="bg-white dark:bg-gray-900 rounded-[3rem] p-12 shadow-2xl border border-gray-100 dark:border-gray-800">
          <div className="text-center mb-10">
            <h1 className="text-3xl font-bold tracking-tight mb-2">List your workspace</h1>
            <p className="text-gray-500">Reach thousands of founders and companies across India.</p>
          </div>

          <div className="flex justify-center mb-12">
            <div className={`w-3 h-3 rounded-full mx-1 ${step >= 1 ? 'bg-blue-600' : 'bg-gray-200'}`} />
            <div className={`w-3 h-3 rounded-full mx-1 ${step >= 2 ? 'bg-blue-600' : 'bg-gray-200'}`} />
          </div>

          <form onSubmit={handleNext} className="space-y-6">
            {step === 1 && (
              <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }}>
                <div className="space-y-4">
                  <div className="relative">
                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                    <input 
                      type="text" 
                      placeholder="Full Name" 
                      required
                      className="w-full pl-12 pr-4 py-4 rounded-2xl bg-gray-50 dark:bg-gray-800 outline-none focus:ring-2 focus:ring-blue-600 transition-all"
                      onChange={e => setFormData({...formData, name: e.target.value})}
                    />
                  </div>
                  <div className="relative">
                    <Phone className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                    <input 
                      type="tel" 
                      placeholder="Mobile Number" 
                      required
                      className="w-full pl-12 pr-4 py-4 rounded-2xl bg-gray-50 dark:bg-gray-800 outline-none focus:ring-2 focus:ring-blue-600 transition-all"
                      onChange={e => setFormData({...formData, phone: e.target.value})}
                    />
                  </div>
                </div>
              </motion.div>
            )}

            {step === 2 && (
              <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }}>
                <div className="space-y-4">
                  <div className="p-4 bg-blue-50 dark:bg-blue-900/30 rounded-2xl text-blue-600 text-sm font-medium mb-6">
                    Enter the 4-digit code sent to your phone.
                  </div>
                  <div className="flex justify-between gap-4">
                    {[1, 2, 3, 4].map(i => (
                      <input 
                        key={i}
                        type="text" 
                        maxLength={1}
                        className="w-full h-16 text-center text-2xl font-bold rounded-2xl bg-gray-50 dark:bg-gray-800 border-none outline-none focus:ring-2 focus:ring-blue-600"
                        placeholder="•"
                      />
                    ))}
                  </div>
                </div>
              </motion.div>
            )}

            <button className="w-full py-5 rounded-2xl bg-blue-600 text-white font-bold text-lg hover:bg-blue-700 shadow-xl shadow-blue-200 dark:shadow-none transition-all flex items-center justify-center">
              {step === 1 ? 'Send OTP' : 'Verify & Continue'}
              <ChevronRight className="ml-2" size={20} />
            </button>
          </form>

          <div className="mt-12 text-center text-sm text-gray-500">
            By continuing, you agree to our <a href="#" className="text-blue-600 hover:underline">Terms of Service</a> and <a href="#" className="text-blue-600 hover:underline">Partner Agreement</a>.
          </div>
        </div>
      </div>
    </div>
  );
};

export default OwnerAuth;

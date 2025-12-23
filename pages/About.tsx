
import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Target, Users, Zap, Globe, Heart } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="pb-24">
      {/* Hero */}
      <section className="py-24 bg-gray-50 dark:bg-gray-950">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-bold mb-8 tracking-tight"
          >
            Empowering Bharat's <br /><span className="text-blue-600">Entrepreneurial Spirit.</span>
          </motion.h1>
          <p className="text-xl text-gray-500 max-w-3xl mx-auto leading-relaxed">
            NearbySpace is India's most trusted marketplace for flexible workspace solutions. We connect building owners with the next generation of founders, freelancers, and global enterprises.
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { label: 'Cities', value: '10+' },
            { label: 'Workspaces', value: '500+' },
            { label: 'Active Users', value: '50k+' },
            { label: 'Success Rate', value: '98%' }
          ].map((stat, i) => (
            <div key={i} className="text-center p-8 bg-white dark:bg-gray-900 rounded-3xl border border-gray-100 dark:border-gray-800 shadow-sm">
              <div className="text-4xl font-bold text-blue-600 mb-2">{stat.value}</div>
              <div className="text-xs font-bold text-gray-400 uppercase tracking-widest">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Vision */}
      <section className="py-24 max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
        <div>
           <img src="https://picsum.photos/id/180/800/800" className="rounded-[3rem] shadow-2xl" alt="Coworking culture" />
        </div>
        <div className="space-y-8">
           <h2 className="text-4xl font-bold tracking-tight">Our Mission</h2>
           <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
             We believe that the future of work is flexible. Our mission is to democratize access to premium office infrastructure across India, from Tier 1 metros to emerging Tier 2 hubs.
           </p>
           <div className="space-y-4">
              <div className="flex items-start">
                 <div className="w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900/40 flex items-center justify-center text-blue-600 mr-4 mt-1 flex-shrink-0">
                    <Target size={20} />
                 </div>
                 <div>
                    <h4 className="font-bold">Owner First approach</h4>
                    <p className="text-sm text-gray-500">We empower property owners with tools to manage and monetize their spaces efficiently.</p>
                 </div>
              </div>
              <div className="flex items-start">
                 <div className="w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900/40 flex items-center justify-center text-blue-600 mr-4 mt-1 flex-shrink-0">
                    <Globe size={20} />
                 </div>
                 <div>
                    <h4 className="font-bold">PAN India Presence</h4>
                    <p className="text-sm text-gray-500">Expanding rapidly to cover every major commercial hub in the country.</p>
                 </div>
              </div>
           </div>
        </div>
      </section>

      {/* Team Signature */}
      <section className="py-24 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
           <h2 className="text-3xl font-bold mb-8 italic signature-font">"We are building for the India that dreams big."</h2>
           <p className="text-blue-100 max-w-2xl mx-auto mb-12">
             Every line of code at NearbySpace is written with the vision of making Bharat a global powerhouse of productivity.
           </p>
           <div className="text-xl signature-font">
             Gowri & gowri
           </div>
           <div className="mt-4 text-xs font-bold uppercase tracking-[0.3em] text-blue-300">Founders, nearbyspace.app</div>
        </div>
      </section>
    </div>
  );
};

export default About;

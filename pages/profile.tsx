import React from 'react';
// FIX: Change 'UserContext' to 'usercontext' to match App.tsx
import { useUser } from '../components/usercontext'; 
import { motion } from 'framer-motion';
import { Shield, Smartphone, Globe, Mail, MapPin, Camera } from 'lucide-react';

// ... rest of your Profile code ...

const Profile = () => {
  const { user } = useUser();

  return (
    <div className="max-w-4xl space-y-12">
      <div className="flex flex-col md:flex-row gap-10 items-center md:items-start">
        <div className="relative group">
          <div className="w-40 h-40 bg-gradient-to-tr from-blue-600 to-indigo-600 rounded-[48px] flex items-center justify-center text-5xl font-black shadow-2xl">
            {user?.name?.charAt(0).toUpperCase()}
          </div>
          <button className="absolute -bottom-2 -right-2 p-3 bg-white/10 hover:bg-white/20 backdrop-blur-xl border border-white/20 rounded-2xl transition-all group-hover:scale-110">
            <Camera size={20} className="text-white" />
          </button>
        </div>
        
        <div className="text-center md:text-left space-y-4 pt-4 flex-1">
          <div>
            <h2 className="text-5xl font-black tracking-tight mb-2">{user?.name}</h2>
            <div className="flex flex-wrap justify-center md:justify-start gap-4 text-gray-500 font-bold uppercase tracking-widest text-[10px]">
              <span className="flex items-center gap-1.5"><MapPin size={12} /> Silicon Valley, CA</span>
              <span className="flex items-center gap-1.5"><Globe size={12} /> Universal Access</span>
              <span className="flex items-center gap-1.5 text-blue-500"><Shield size={12} /> Enterprise Plan</span>
            </div>
          </div>
          <p className="text-gray-400 font-medium max-w-lg leading-relaxed">
            Lead UI Architect at Lumina OS. Passionate about building highly performant and aesthetically superior digital interfaces.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="bg-white/[0.03] border border-white/5 rounded-[32px] p-8 space-y-6"
        >
          <h3 className="text-xl font-black tracking-tight">Identity Details</h3>
          <div className="space-y-4">
            <div className="p-4 bg-black/20 rounded-2xl border border-white/5">
              <p className="text-[10px] text-gray-500 font-black uppercase tracking-widest mb-1">Email</p>
              <p className="font-bold text-gray-200">{user?.email}</p>
            </div>
            <div className="p-4 bg-black/20 rounded-2xl border border-white/5">
              <p className="text-[10px] text-gray-500 font-black uppercase tracking-widest mb-1">Phone</p>
              <p className="font-bold text-gray-200">+1 (555) 012-3456</p>
            </div>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="bg-white/[0.03] border border-white/5 rounded-[32px] p-8 space-y-6"
        >
          <h3 className="text-xl font-black tracking-tight">Security Status</h3>
          <div className="space-y-4">
             <div className="flex items-center justify-between p-4 bg-blue-600/5 border border-blue-500/10 rounded-2xl">
               <div className="flex items-center gap-3">
                 <Shield className="text-blue-500" size={20} />
                 <span className="font-bold text-sm">Two-Factor Auth</span>
               </div>
               <span className="text-[10px] font-black uppercase tracking-widest text-blue-500">Enabled</span>
             </div>
             <div className="flex items-center justify-between p-4 bg-white/5 border border-white/10 rounded-2xl">
               <div className="flex items-center gap-3">
                 <Smartphone className="text-gray-400" size={20} />
                 <span className="font-bold text-sm">Active Sessions</span>
               </div>
               <span className="text-[10px] font-black uppercase tracking-widest text-gray-400">3 Devices</span>
             </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Profile;

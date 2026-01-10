
import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Code, Palette, Rocket } from 'lucide-react';

const About = () => (
  <div className="max-w-5xl space-y-16">
    <div className="space-y-6">
      <h2 className="text-6xl font-black tracking-tight leading-tight">
        Engineered for <br />
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-500">
          The Perfectionists.
        </span>
      </h2>
      <p className="text-xl text-gray-500 max-w-2xl font-medium leading-relaxed">
        Lumina OS is a manifestation of the intersection between raw computing power and high-end artistic design. We build tools that don't just work, but inspire.
      </p>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
      {[
        { icon: Code, title: 'Clean Architecture', desc: 'Enterprise-grade stability.' },
        { icon: Palette, title: 'High Fidelity', desc: 'Crafted with absolute care.' },
        { icon: Rocket, title: 'Speed Focused', desc: 'Zero bloat, pure speed.' },
        { icon: Heart, title: 'User Centric', desc: 'Built for the individual.' },
      ].map((item, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: i * 0.1 }}
          className="p-8 bg-white/[0.03] border border-white/5 rounded-[32px] hover:border-white/10 transition-all"
        >
          <div className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center mb-6 text-blue-500 border border-white/10">
            <item.icon size={22} />
          </div>
          <h4 className="font-black text-sm mb-2 tracking-tight">{item.title}</h4>
          <p className="text-xs text-gray-500 font-medium">{item.desc}</p>
        </motion.div>
      ))}
    </div>

    <div className="p-12 bg-gradient-to-tr from-blue-600/10 to-indigo-600/10 border border-white/5 rounded-[48px] relative overflow-hidden">
      <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/10 blur-[100px] rounded-full" />
      <div className="relative z-10 space-y-6 max-w-2xl">
        <h3 className="text-3xl font-black tracking-tight">Our Mission</h3>
        <p className="text-gray-400 text-lg font-medium leading-relaxed">
          To provide a seamless operating experience where the tools disappear, leaving only the user's creativity and productivity at the forefront. Every pixel, every interaction, and every line of code is optimized for this singular goal.
        </p>
      </div>
    </div>
  </div>
);

export default About;

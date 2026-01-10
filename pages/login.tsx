
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useUser } from '../components/UserContext';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  User as UserIcon, 
  Mail, 
  Lock, 
  ArrowRight, 
  CheckCircle2, 
  Loader2,
  ShieldCheck,
  Zap,
  Globe
} from 'lucide-react';

const Login: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const { login } = useUser();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !password) return;

    setIsLoading(true);
    // Simulate professional API delay
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setIsLoading(false);
    setIsSuccess(true);
    
    setTimeout(() => {
      login({ name, email });
      navigate('/');
    }, 800);
  };

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-[#0a0a0a] relative overflow-hidden selection:bg-blue-500/30">
      {/* Dynamic Animated Background Blobs */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-600/20 blur-[120px] rounded-full animate-pulse" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-indigo-600/20 blur-[120px] rounded-full animate-pulse delay-700" />
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 pointer-events-none" />
      </div>

      <div className="container max-w-6xl mx-auto px-4 z-10 flex flex-col lg:flex-row items-center justify-between gap-12">
        
        {/* Left Content (Hidden on Mobile) */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="hidden lg:flex flex-col space-y-8 max-w-lg"
        >
          <div className="flex items-center gap-3 group">
            <div className="w-12 h-12 bg-blue-600 rounded-2xl flex items-center justify-center shadow-lg shadow-blue-600/40 group-hover:rotate-6 transition-transform">
              <Zap className="text-white w-6 h-6 fill-white" />
            </div>
            <span className="text-2xl font-bold text-white tracking-tight">Lumina OS</span>
          </div>

          <div className="space-y-4">
            <h1 className="text-5xl font-extrabold text-white leading-tight">
              Design your vision <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">
                with intelligence.
              </span>
            </h1>
            <p className="text-gray-400 text-lg">
              Experience the next generation of professional workflows. Secure, fast, and designed for global teams.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-6 pt-4">
            <div className="flex items-center gap-3 text-gray-300">
              <ShieldCheck className="w-5 h-5 text-blue-400" />
              <span className="text-sm">Enterprise Security</span>
            </div>
            <div className="flex items-center gap-3 text-gray-300">
              <Globe className="w-5 h-5 text-blue-400" />
              <span className="text-sm">Cloud Sync</span>
            </div>
          </div>
        </motion.div>

        {/* Right Content: Login Form */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="w-full max-w-md"
        >
          <div className="bg-white/5 backdrop-blur-2xl border border-white/10 rounded-3xl p-8 shadow-2xl relative">
            <AnimatePresence mode="wait">
              {!isSuccess ? (
                <motion.div
                  key="form"
                  initial={{ opacity: 1 }}
                  exit={{ opacity: 0, y: -20 }}
                  className="space-y-6"
                >
                  <div className="text-center lg:text-left">
                    <h2 className="text-3xl font-bold text-white mb-2">Welcome Back</h2>
                    <p className="text-gray-400 text-sm">Sign in to access your dashboard</p>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-300">Full Name</label>
                      <div className="relative">
                        <UserIcon className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
                        <input
                          required
                          type="text"
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          placeholder="Your Name"
                          className="w-full bg-black/40 border border-white/10 rounded-xl py-3.5 pl-12 pr-4 text-white placeholder:text-gray-600 focus:ring-2 focus:ring-blue-500/50 outline-none transition-all"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-300">Email Address</label>
                      <div className="relative">
                        <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
                        <input
                          required
                          type="email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="name@company.com"
                          className="w-full bg-black/40 border border-white/10 rounded-xl py-3.5 pl-12 pr-4 text-white placeholder:text-gray-600 focus:ring-2 focus:ring-blue-500/50 outline-none transition-all"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-300">Password</label>
                      <div className="relative">
                        <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
                        <input
                          required
                          type="password"
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                          placeholder="••••••••"
                          className="w-full bg-black/40 border border-white/10 rounded-xl py-3.5 pl-12 pr-4 text-white placeholder:text-gray-600 focus:ring-2 focus:ring-blue-500/50 outline-none transition-all"
                        />
                      </div>
                    </div>

                    <button
                      type="submit"
                      disabled={isLoading}
                      className="w-full flex items-center justify-center py-4 px-6 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold rounded-xl hover:opacity-90 transition-all disabled:opacity-50"
                    >
                      {isLoading ? (
                        <Loader2 className="w-5 h-5 animate-spin" />
                      ) : (
                        <>
                          <span>Sign In</span>
                          <ArrowRight className="ml-2 w-5 h-5" />
                        </>
                      )}
                    </button>
                  </form>
                </motion.div>
              ) : (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center py-12 text-center"
                >
                  <div className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center mb-6">
                    <CheckCircle2 className="w-12 h-12 text-green-500" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">Success!</h3>
                  <p className="text-gray-400">Welcome back, {name}. Loading your workspace...</p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
          
          <div className="mt-8 flex justify-center gap-6 opacity-30 grayscale invert">
            <span className="text-xs font-bold uppercase tracking-widest">Trusted by industry leaders</span>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Login;


import React from 'react';
import { HashRouter, Routes, Route, Navigate, Outlet, useLocation } from 'react-router-dom';
import { UserProvider, useUser } from './components/usercontext';
import Sidebar from './components/Sidebar';
import Login from './pages/Login';
import Dashboard from './pages/dashboard';
import Profile from './pages/profile';
import About from './pages/about';
import Files from './pages/files';
import { AnimatePresence, motion } from 'framer-motion';

const ProtectedLayout = () => {
  const { user } = useUser();
  const location = useLocation();
  
  if (!user) return <Navigate to="/login" replace />;

  return (
    <div className="flex min-h-screen bg-[#050505] text-white">
      <Sidebar />
      <main className="flex-1 overflow-x-hidden relative">
        <div className="max-w-7xl mx-auto p-4 md:p-10">
           <AnimatePresence mode="wait">
             <motion.div
               key={location.pathname}
               initial={{ opacity: 0, y: 10 }}
               animate={{ opacity: 1, y: 0 }}
               exit={{ opacity: 0, y: -10 }}
               transition={{ duration: 0.3 }}
             >
               <Outlet />
             </motion.div>
           </AnimatePresence>
        </div>
      </main>
    </div>
  );
};

function App() {
  return (
    <UserProvider>
      <HashRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route element={<ProtectedLayout />}>
            <Route path="/" element={<Dashboard />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/about" element={<About />} />
            <Route path="/files" element={<Files />} />
          </Route>
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </HashRouter>
    </UserProvider>
  );
}

export default App;

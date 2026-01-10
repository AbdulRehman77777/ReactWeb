
import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { 
  LayoutDashboard, 
  User as UserIcon, 
  Files as FilesIcon, 
  Info, 
  LogOut, 
  Zap,
  Menu,
  X
} from 'lucide-react';
// Fix: Use correct casing for UserContext
import { useUser } from './UserContext';
import { motion, AnimatePresence } from 'framer-motion';

const Sidebar = () => {
  const { user, logout } = useUser();
  const [isOpen, setIsOpen] = React.useState(false);
  const navigate = useNavigate();

  const menuItems = [
    { path: '/', icon: LayoutDashboard, label: 'Dashboard' },
    { path: '/profile', icon: UserIcon, label: 'Profile' },
    { path: '/files', icon: FilesIcon, label: 'Files' },
    { path: '/about', icon: Info, label: 'About' },
  ];

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <>
      {/* Mobile Toggle */}
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden fixed top-6 left-6 z-50 p-2 bg-white/10 backdrop-blur-lg rounded-xl border border-white/20"
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Sidebar Desktop/Overlay */}
      <AnimatePresence>
        {(isOpen || window.innerWidth >= 768) && (
          <motion.aside
            initial={{ x: -300 }}
            animate={{ x: 0 }}
            exit={{ x: -300 }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className={`fixed md:relative top-0 left-0 z-40 w-72 h-screen bg-black/40 backdrop-blur-2xl border-r border-white/5 flex flex-col p-8 ${isOpen ? 'flex' : 'hidden md:flex'}`}
          >
            {/* Logo */}
            <div className="flex items-center gap-3 mb-12">
              <div className="w-10 h-10 bg-blue-600 rounded-2xl flex items-center justify-center shadow-lg shadow-blue-600/40">
                <Zap size={22} className="text-white fill-white" />
              </div>
              <span className="text-xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
                Lumina OS
              </span>
            </div>

            {/* Navigation */}
            <nav className="flex-1 space-y-2">
              {menuItems.map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  onClick={() => setIsOpen(false)}
                  className={({ isActive }) => `
                    flex items-center gap-4 px-4 py-3.5 rounded-2xl transition-all duration-200 group
                    ${isActive 
                      ? 'bg-blue-600/10 text-blue-400 border border-blue-500/20' 
                      : 'text-gray-500 hover:text-gray-200 hover:bg-white/5'}
                  `}
                >
                  <item.icon size={20} className="transition-transform group-hover:scale-110" />
                  <span className="font-semibold text-sm tracking-wide">{item.label}</span>
                </NavLink>
              ))}
            </nav>

            {/* User Card */}
            <div className="mt-auto pt-8 border-t border-white/5">
              <div className="bg-white/5 rounded-3xl p-4 mb-4 border border-white/5">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-gradient-to-tr from-indigo-500 to-blue-500 rounded-full flex items-center justify-center text-sm font-bold shadow-lg">
                    {user?.name?.charAt(0).toUpperCase()}
                  </div>
                  <div className="overflow-hidden">
                    <p className="text-sm font-bold truncate">{user?.name}</p>
                    <p className="text-xs text-gray-500 truncate">{user?.email}</p>
                  </div>
                </div>
                <button 
                  onClick={handleLogout}
                  className="w-full flex items-center justify-center gap-2 py-2.5 bg-red-500/10 hover:bg-red-500/20 text-red-500 rounded-xl transition-all text-xs font-bold border border-red-500/10"
                >
                  <LogOut size={14} />
                  <span>SIGN OUT</span>
                </button>
              </div>
            </div>
          </motion.aside>
        )}
      </AnimatePresence>
    </>
  );
};

export default Sidebar;

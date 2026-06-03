import { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'Portfolio', path: '/portfolio' },
    { name: 'Pricing', path: '/pricing' },
    { name: 'Reviews', path: '/reviews' },
  ];

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  return (
    <div className="fixed inset-x-0 top-6 z-[100] flex justify-center px-6 pointer-events-none">
      
      <motion.nav 
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: "spring", damping: 25, stiffness: 120 }}
        className={`
          pointer-events-auto flex items-center justify-between gap-4 p-1.5 
          bg-black/60 backdrop-blur-2xl rounded-full border border-white/10 
          transition-all duration-500 relative overflow-hidden
          ${scrolled ? 'shadow-[0_20px_50px_-20px_rgba(0,0,0,0.8),0_0_15px_rgba(59,130,246,0.1)]' : 'shadow-none'}
          w-full lg:w-max
        `}
      >
        {/* Animated Gradient Background Trace */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 pointer-events-none" />

        {/* Logo Section */}
        <NavLink to="/" className="flex items-center gap-3 pl-4 pr-3 group">
          <motion.div 
            whileHover={{ scale: 1.1, rotate: 90 }}
            whileTap={{ scale: 0.9 }}
            className="relative w-8 h-8 flex items-center justify-center"
          >
            <div className="absolute inset-0 bg-blue-600 rounded-xl blur-md opacity-0 group-hover:opacity-40 transition-opacity" />
            <div className="relative w-full h-full bg-gradient-to-br from-blue-500 to-indigo-700 rounded-xl flex items-center justify-center">
               <div className="w-2.5 h-2.5 bg-white rounded-full animate-pulse shadow-[0_0_8px_white]" />
            </div>
          </motion.div>
          <span className="font-black text-white tracking-[-0.05em] uppercase text-sm group-hover:text-blue-400 transition-colors">
            Apex<span className="text-blue-600">.</span>
          </span>
        </NavLink>

        {/* Desktop Menu Matrix */}
        <div className="hidden lg:flex items-center gap-1">
          {navItems.map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              className={({ isActive }) =>
                `relative px-5 py-2.5 text-[11px] font-black tracking-[0.2em] uppercase transition-all duration-300
                ${isActive ? 'text-white' : 'text-gray-500 hover:text-white'}`
              }
            >
              {({ isActive }) => (
                <motion.div whileHover={{ y: -2 }} className="relative">
                  <span className="relative z-10">{item.name}</span>
                  {isActive && (
                    <motion.div
                      layoutId="nav-glow"
                      className="absolute -inset-x-3 -inset-y-1 bg-white/5 border border-white/10 rounded-full"
                      transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                    >
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-8 h-[1px] bg-blue-500 shadow-[0_0_10px_#3b82f6]" />
                    </motion.div>
                  )}
                </motion.div>
              )}
            </NavLink>
          ))}
          
          <div className="w-[1px] h-6 bg-white/10 mx-2" />

          {/* CTA: Contact */}
          <NavLink
            to="/contact"
            className="px-6 py-2.5 bg-blue-600 hover:bg-white hover:text-black text-white text-[11px] font-black tracking-widest uppercase rounded-full shadow-[0_10px_20px_rgba(37,99,235,0.2)] transition-all active:scale-95 flex items-center gap-2"
          >
            Transmit
            <div className="w-1 h-1 bg-current rounded-full animate-ping" />
          </NavLink>
        </div>

        {/* Mobile Toggle Trigger */}
        <button 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="lg:hidden w-11 h-11 flex items-center justify-center text-white bg-white/5 rounded-full transition-all active:scale-90 mr-1"
        >
          <div className="space-y-1.5">
            <motion.div animate={isMobileMenuOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }} className="w-5 h-0.5 bg-current rounded-full" />
            <motion.div animate={isMobileMenuOpen ? { opacity: 0, x: 10 } : { opacity: 1, x: 0 }} className="w-5 h-0.5 bg-current rounded-full" />
            <motion.div animate={isMobileMenuOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }} className="w-5 h-0.5 bg-current rounded-full" />
          </div>
        </button>
      </motion.nav>

      {/* Mobile Terminal Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, backdropFilter: "blur(0px)" }}
            animate={{ opacity: 1, backdropFilter: "blur(24px)" }}
            exit={{ opacity: 0, backdropFilter: "blur(0px)" }}
            className="lg:hidden fixed inset-0 bg-black/60 z-[-1] pointer-events-auto"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <motion.div 
              initial={{ y: -20, opacity: 0, scale: 0.9 }}
              animate={{ y: 0, opacity: 1, scale: 1 }}
              exit={{ y: -20, opacity: 0, scale: 0.9 }}
              className="absolute top-24 left-6 right-6 bg-[#0A0A0A] border border-white/10 rounded-[2.5rem] p-4 shadow-2xl overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="space-y-1">
                {[...navItems, { name: 'Contact', path: '/contact' }].map((item, idx) => (
                  <motion.div
                    key={item.name}
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: idx * 0.05 }}
                  >
                    <NavLink
                      to={item.path}
                      className={({ isActive }) =>
                        `px-8 py-5 flex items-center justify-between text-2xl font-black uppercase tracking-tighter rounded-3xl transition-all
                        ${isActive ? 'text-white bg-blue-600' : 'text-gray-500 hover:text-white hover:bg-white/5'}`
                      }
                    >
                      {item.name}
                      <span className="opacity-20 text-xs font-mono">0{idx + 1}</span>
                    </NavLink>
                  </motion.div>
                ))}
              </div>

              <div className="mt-4 p-8 bg-white/5 rounded-[2rem] border border-white/5 flex items-center justify-between">
                <div>
                  <p className="text-[10px] font-black text-blue-500 uppercase tracking-widest mb-1">Status</p>
                  <p className="text-white text-sm font-bold">Encrypted Line Active</p>
                </div>
                <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center">
                   <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
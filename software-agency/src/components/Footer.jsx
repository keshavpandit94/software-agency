import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const [time, setTime] = useState(new Date().toLocaleTimeString());

  // Real-time clock for that "Command Center" feel
  useEffect(() => {
    const timer = setInterval(() => setTime(new Date().toLocaleTimeString()), 1000);
    return () => clearInterval(timer);
  }, []);

  const fadeInUp = {
    hidden: { opacity: 0, y: 30, filter: "blur(10px)" },
    visible: { 
      opacity: 1, 
      y: 0, 
      filter: "blur(0px)",
      transition: { duration: 0.8, ease: [0.6, 0.05, -0.01, 0.9] } 
    }
  };

  return (
    <footer className="bg-[#030303] text-gray-500 py-24 px-6 mt-auto border-t border-white/5 relative overflow-hidden">
      
      {/* BACKGROUND ELEMENTS */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
           style={{ backgroundImage: `linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)`, backgroundSize: '60px 60px' }} />
      
      <motion.div 
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.1, 0.2, 0.1],
        }}
        transition={{ duration: 10, repeat: Infinity }}
        className="absolute bottom-[-20%] right-[10%] w-[500px] h-[500px] bg-blue-600/20 rounded-full filter blur-[120px] pointer-events-none"
      />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* TOP SECTION: BRAND & NEWSLETTER */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 pb-20 mb-20 border-b border-white/5">
          
          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}
            className="lg:col-span-5 space-y-10"
          >
            <Link to="/" className="inline-block group">
              <div className="flex items-center gap-5">
                <div className="relative w-14 h-14">
                   <div className="absolute inset-0 bg-blue-600 rounded-2xl blur-xl opacity-30 group-hover:opacity-60 transition-all duration-500" />
                   <div className="relative w-full h-full bg-[#0A0A0A] border border-white/10 rounded-2xl flex items-center justify-center shadow-2xl overflow-hidden">
                      <div className="w-4 h-4 bg-blue-500 rounded-full animate-pulse shadow-[0_0_15px_rgba(59,130,246,0.8)]" />
                      <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/20 to-transparent" />
                   </div>
                </div>
                <span className="text-4xl font-black text-white tracking-tighter uppercase italic">
                  Apex<span className="text-blue-600">.</span>
                </span>
              </div>
            </Link>
            
            <p className="text-xl leading-relaxed font-light max-w-sm text-gray-400 italic">
              "We architect high-fidelity systems for world-class brands, pushing boundaries since 2026."
            </p>

            <div className="flex gap-4">
               {[
                { name: 'X', link: '#' },
                { name: 'LN', link: '#' },
                { name: 'GH', link: '#' },
                { name: 'IG', link: '#' }
               ].map((soc) => (
                 <motion.a 
                    href={soc.link}
                    key={soc.name}
                    whileHover={{ y: -5, backgroundColor: 'rgba(59, 130, 246, 1)', borderColor: 'rgba(59, 130, 246, 1)', color: '#fff' }}
                    className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-[10px] font-black text-gray-400 transition-all duration-300"
                 >
                    {soc.name}
                 </motion.a>
               ))}
            </div>
          </motion.div>

          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}
            className="lg:col-span-7"
          >
            <div className="bg-gradient-to-br from-white/[0.03] to-transparent p-10 md:p-14 rounded-[3rem] border border-white/5 backdrop-blur-3xl relative overflow-hidden group">
               <div className="absolute -top-10 -right-10 text-[10rem] font-black text-white/[0.02] select-none italic">LOG</div>
               
               <h3 className="text-3xl font-black text-white mb-4 tracking-tighter uppercase italic">Stay Synced</h3>
               <p className="text-gray-400 mb-10 max-w-md font-light leading-relaxed">
                 Join 5,000+ engineers receiving our weekly transmission on AI, Cloud-Native patterns, and Edge architecture.
               </p>
               
               <form className="flex flex-col sm:flex-row gap-4">
                 <input 
                   type="email" required placeholder="PROTOCOL@GALAXY.SYS" 
                   className="flex-1 bg-black border border-white/10 rounded-2xl px-8 py-5 text-xs text-white focus:outline-none focus:border-blue-600 transition-all font-mono tracking-widest uppercase"
                 />
                 <button className="px-10 py-5 bg-blue-600 hover:bg-blue-500 text-white font-black rounded-2xl transition-all shadow-[0_15px_30px_rgba(37,99,235,0.3)] uppercase tracking-[0.2em] text-[10px] active:scale-95">
                   Subscribe
                 </button>
               </form>
            </div>
          </motion.div>
        </div>

        {/* NAVIGATION MATRIX */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 mb-24">
          {[
            { label: 'Network', links: ['Services', 'Infrastructure', 'Stack', 'Nodes'] },
            { label: 'Agency', links: ['Philosophy', 'Team', 'Archive', 'Intelligence'] },
            { label: 'Support', links: ['Documentation', 'Security', 'Status', 'Contact'] },
            { label: 'Legal', links: ['Terms', 'Privacy', 'Encryption', 'Cookies'] }
          ].map((col) => (
            <div key={col.label} className="space-y-8">
              <h3 className="text-blue-500 font-black uppercase tracking-[0.4em] text-[9px]">{col.label}</h3>
              <ul className="space-y-4">
                {col.links.map((link) => (
                  <li key={link}>
                    <Link 
                      to={`/${link.toLowerCase()}`} 
                      className="text-sm font-medium hover:text-white transition-all duration-300 flex items-center group/link"
                    >
                      <span className="w-0 group-hover/link:w-4 h-[1px] bg-blue-600 transition-all duration-300 mr-0 group-hover/link:mr-3" />
                      <span className="group-hover/link:translate-x-1 transition-transform duration-300">{link}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* SYSTEM STATUS BAR (BOTTOM) */}
        <div className="pt-10 border-t border-white/5 flex flex-col lg:flex-row justify-between items-center gap-8">
          <div className="flex flex-wrap justify-center items-center gap-4">
            <div className="flex items-center gap-3 px-5 py-2.5 rounded-full bg-white/5 border border-white/10 font-mono text-[9px] tracking-widest text-gray-400">
               <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
               SERVER_STATUS: OPTIMAL
            </div>
            <div className="px-5 py-2.5 rounded-full bg-white/5 border border-white/10 font-mono text-[9px] tracking-widest text-blue-500">
               TIMESTAMP: {time}
            </div>
          </div>

          <div className="flex flex-col md:flex-row items-center gap-6 font-mono text-[9px] tracking-[0.3em] uppercase text-gray-600">
            <span>&copy; {currentYear} APEX_CORE_INDUSTRIES</span>
            <span className="hidden md:block opacity-20 text-white">|</span>
            <div className="flex items-center gap-2">
                <span>ENCRYPTION: </span>
                <span className="text-white/40">AES-256-GCM</span>
            </div>
            <span className="hidden md:block opacity-20 text-white">|</span>
            <span className="text-blue-600/60">REL_2026.4.2</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
import { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { projectsData } from '../data/projectsData';

export default function Portfolio() {
  const [filter, setFilter] = useState('All');
  const containerRef = useRef(null);

  // Deep Parallax Effect
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);

  const fadeInUp = {
    hidden: { opacity: 0, y: 40, filter: "blur(10px)" },
    visible: { 
      opacity: 1, 
      y: 0, 
      filter: "blur(0px)",
      transition: { duration: 0.8, ease: [0.6, 0.05, -0.01, 0.9] } 
    }
  };

  const categories = ['All', 'Web Ecosystems', 'Native Mobile', 'Backend Architecture'];

  const filteredProjects = filter === 'All' 
    ? projectsData 
    : projectsData.filter(p => p.category === filter);

  return (
    <div ref={containerRef} className="w-full bg-[#020202] text-white min-h-screen selection:bg-blue-500/30 overflow-x-hidden">
      
      {/* 1. HERO SECTION */}
      <section className="relative pt-64 pb-48 px-6 overflow-hidden">
        <motion.div style={{ y }} className="absolute inset-0 z-0">
          <div className="absolute top-[-10%] left-[-10%] w-[800px] h-[800px] bg-blue-600/10 rounded-full blur-[160px] animate-pulse" />
          <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-purple-600/10 rounded-full blur-[160px]" />
        </motion.div>

        <motion.div 
          className="max-w-6xl mx-auto text-center relative z-10"
          initial="hidden" animate="visible"
          variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
        >
          <motion.div variants={fadeInUp} className="mb-8">
            <span className="px-5 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-md text-[10px] font-black uppercase tracking-[0.4em] text-blue-500">
              The Deployment Log 2026
            </span>
          </motion.div>
          <motion.h1 variants={fadeInUp} className="text-7xl md:text-[10rem] font-black mb-10 tracking-tighter leading-[0.8] uppercase italic">
            Visual <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-b from-white to-white/20">Engineering.</span>
          </motion.h1>
          <motion.p variants={fadeInUp} className="text-xl md:text-2xl text-gray-500 max-w-2xl mx-auto font-light leading-relaxed">
            A comprehensive record of systems architected with Node.js, React, and Native Mobile frameworks.
          </motion.p>
        </motion.div>
      </section>

      {/* 2. CATEGORY FILTERS */}
      <section className="py-10 px-6 max-w-7xl mx-auto relative z-20">
        <div className="flex flex-wrap justify-center gap-3 mb-24">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-8 py-3.5 rounded-full text-[10px] font-black tracking-widest uppercase transition-all duration-500 border 
                ${filter === cat 
                  ? 'bg-white text-black border-white shadow-[0_0_30px_rgba(255,255,255,0.1)]' 
                  : 'bg-transparent text-gray-500 border-white/10 hover:border-white/30 hover:text-white'
                }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* 3. PROJECT GRID */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div 
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9, y: 30 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, filter: "blur(10px)" }}
                whileHover={{ y: -12 }}
                className="group relative bg-[#080808] rounded-[3.5rem] border border-white/5 flex flex-col justify-between overflow-hidden transition-all duration-500 hover:border-white/20 shadow-2xl"
              >
                <div>
                  {/* Visual Canvas Panel - Clicking here opens Live Instance link */}
                  <a 
                    href={project.demo} 
                    target="_blank" 
                    rel="noreferrer" 
                    className="block relative aspect-[4/5] w-full overflow-hidden cursor-pointer"
                    title="Open Live Instance Deployment"
                  >
                    <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} transition-transform duration-1000 group-hover:scale-110 group-hover:rotate-1`} />
                    
                    {/* Identification Badge Mask Overlay */}
                    <div className="absolute inset-10 border border-white/10 rounded-[2.5rem] backdrop-blur-[2px] bg-white/5 flex flex-col items-center justify-center p-8 group-hover:inset-8 transition-all duration-700">
                      <div className="w-10 h-[1px] bg-blue-500 mb-6" />
                      <span className="text-[9px] font-mono tracking-[0.5em] text-white/40 mb-2 uppercase">System_ID</span>
                      <span className="text-xs font-mono text-white/80">{project.uid}</span>
                      <span className="text-[9px] font-mono tracking-widest text-blue-400 mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">// CLICK_TO_LAUNCH</span>
                    </div>

                    <div className="absolute bottom-8 left-1/2 -translate-x-1/2 px-5 py-2 bg-black/60 backdrop-blur-xl border border-white/10 rounded-full text-[8px] font-black uppercase tracking-widest text-blue-400">
                      {project.category}
                    </div>
                  </a>

                  {/* Info Layer Section */}
                  <div className="p-10 space-y-6">
                    {/* Using exact matching object key 'project.title' */}
                    <h3 className="text-3xl font-black tracking-tighter uppercase italic group-hover:text-blue-400 transition-colors duration-300">
                      {project.title}
                    </h3>
                    
                    {/* Defensive Grid Metadata Logic */}
                    <div className="grid grid-cols-2 gap-4 py-4 border-y border-white/5">
                      {Object.entries(project.stats || {}).map(([key, val]) => (
                        <div key={key}>
                          <p className="text-[8px] font-black uppercase tracking-widest text-gray-600 mb-1">{key}</p>
                          <p className="text-xs font-mono text-white/70">{val}</p>
                        </div>
                      ))}
                    </div>

                    <p className="text-gray-500 leading-relaxed text-sm font-light">
                      {project.description}
                    </p>
                  </div>
                </div>

                {/* Tech Badges & Interactive Link Bar */}
                <div className="p-10 pt-0 space-y-6">
                  <div className="flex flex-wrap gap-1.5">
                    {project.tech.map((t, i) => (
                      <span key={i} className="px-3 py-1 bg-white/5 text-[9px] font-bold uppercase tracking-widest rounded-md text-gray-400">
                        {t}
                      </span>
                    ))}
                  </div>

                  {/* Operational Deployment URLs */}
                  <div className="flex gap-4 pt-2">
                    {project.github && (
                      <a href={project.github} target="_blank" rel="noreferrer" className="text-[10px] font-mono tracking-wider text-gray-500 hover:text-white transition-colors">
                        // SOURCE_CODE
                      </a>
                    )}
                    {project.demo && (
                      <a href={project.demo} target="_blank" rel="noreferrer" className="text-[10px] font-mono tracking-wider text-blue-500 hover:text-blue-400 transition-colors">
                        // LIVE_INST
                      </a>
                    )}
                  </div>
                </div>

              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </section>

      {/* 4. TECHNICAL FOOTER STATS */}
      <section className="py-40 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 text-center border-t border-white/5 pt-20">
          {[
            { stat: "99.9%", label: "Deployment Success" },
            { stat: "0ms", label: "Logic Latency" },
            { stat: "50+", label: "Ecosystems Shipped" },
            { stat: "24/7", label: "Runtime Support" }
          ].map((item, i) => (
            <div key={i}>
              <div className="text-4xl font-black tracking-tighter mb-2 italic uppercase">{item.stat}</div>
              <div className="text-[9px] font-black uppercase tracking-widest text-gray-600 font-mono">{item.label}</div>
            </div>
          ))}
        </div>
      </section>
      
    </div>
  );
}
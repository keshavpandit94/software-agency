import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { useRef } from 'react';

export default function Services() {
  const containerRef = useRef(null);
  
  const fadeInUp = {
    hidden: { opacity: 0, y: 40, filter: "blur(10px)" },
    visible: { 
      opacity: 1, 
      y: 0, 
      filter: "blur(0px)",
      transition: { duration: 0.8, ease: [0.6, 0.05, -0.01, 0.9] } 
    }
  };

  const servicesList = [
    {
      title: "Core Web Systems",
      id: "WEB-01",
      description: "High-concurrency React & Next.js ecosystems built with Tailwind CSS for sub-second latency and design precision.",
      tags: ["React 19", "Next.js 15", "Tailwind CSS", "TypeScript"],
      deliverables: ["Atomic Design Systems", "SSR & Edge Routing", "SEO Optimization", "Tailwind JIT Integration"],
      color: "from-blue-600",
      icon: "M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
    },
    {
      title: "Native Mobile OS",
      id: "MOB-02",
      description: "Fluid iOS and Android applications developed via Expo and React Native for a truly native look and feel.",
      tags: ["React Native", "Expo Go", "NativeWind", "EAS Build"],
      deliverables: ["Cross-Platform Parity", "Expo Router Navigation", "Native Hardware Access", "OTA Updates (EAS)"],
      color: "from-purple-600",
      icon: "M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
    },
    {
      title: "Scalable Backends",
      id: "SRV-03",
      description: "Robust Node.js and Express server architectures designed to power thousands of concurrent client requests.",
      tags: ["Node.js", "Express", "PostgreSQL", "Redis"],
      deliverables: ["REST & GraphQL APIs", "JWT Authentication", "Real-time WebSockets", "Microservices Architecture"],
      color: "from-emerald-600",
      icon: "M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2"
    },
    {
      title: "Full-Stack Devops",
      id: "OPS-04",
      description: "Automated deployment pipelines and cloud orchestration for seamless hand-offs between Node servers and React clients.",
      tags: ["Docker", "CI/CD", "AWS/Vercel", "Linux"],
      deliverables: ["Auto-scaling Clusters", "Database Migration Ops", "Zero-Downtime Deploy", "SSL & Security Hardening"],
      color: "from-orange-600",
      icon: "M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 002-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
    }
  ];

  return (
    <div ref={containerRef} className="w-full bg-[#030303] text-white min-h-screen font-sans selection:bg-blue-500/30 overflow-x-hidden">
      
      {/* 1. HERO SECTION */}
      <section className="relative pt-56 pb-40 px-4">
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-1/4 left-[-5%] w-[400px] h-[400px] bg-blue-600/10 rounded-full blur-[120px] animate-pulse" />
          <div className="absolute bottom-1/4 right-[-5%] w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[120px] animate-pulse" />
        </div>

        <motion.div 
          className="max-w-6xl mx-auto text-center relative z-10"
          initial="hidden" animate="visible"
          variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
        >
          <motion.div variants={fadeInUp} className="mb-6 flex justify-center">
             <span className="px-4 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-md text-[10px] font-black uppercase tracking-[0.3em] text-blue-500">
               Unified JS Ecosystem
             </span>
          </motion.div>
          
          <motion.h1 variants={fadeInUp} className="text-7xl md:text-[10rem] font-black mb-8 tracking-tighter leading-[0.8] uppercase italic">
            Apex <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-b from-white to-white/20">Full-Stack.</span>
          </motion.h1>
          
          <motion.p variants={fadeInUp} className="text-xl md:text-2xl text-gray-500 max-w-3xl mx-auto font-light leading-relaxed">
            Harnessing Node.js, React Native, and Tailwind CSS to build high-fidelity products across every screen.
          </motion.p>
        </motion.div>
      </section>

      {/* 2. SERVICES GRID */}
      <section className="py-20 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {servicesList.map((service, index) => (
            <motion.div 
              key={index} 
              initial="hidden" whileInView="visible" viewport={{ once: true }}
              variants={fadeInUp}
              whileHover={{ y: -10 }}
              className="group relative p-10 md:p-14 bg-[#0A0A0A] border border-white/5 rounded-[3rem] transition-all duration-500 hover:border-white/20"
            >
              <div className="absolute top-10 right-10 font-mono text-[10px] text-gray-600 tracking-widest">{service.id}</div>

              <div className="relative z-10">
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${service.color} to-black flex items-center justify-center mb-10 shadow-xl`}>
                  <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={service.icon} />
                  </svg>
                </div>

                <h3 className="text-4xl font-black mb-4 tracking-tighter uppercase italic">{service.title}</h3>
                <p className="text-gray-400 text-lg leading-relaxed mb-8 font-light">
                  {service.description}
                </p>

                {/* Tech Tags */}
                <div className="flex flex-wrap gap-2 mb-10">
                  {service.tags.map((tag, i) => (
                    <span key={i} className="px-4 py-1 bg-white/5 border border-white/5 text-[9px] font-bold uppercase tracking-widest rounded-full text-blue-400">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="pt-8 border-t border-white/5 grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {service.deliverables.map((item, i) => (
                    <div key={i} className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-widest text-gray-500 group-hover:text-gray-300 transition-colors">
                      <div className="w-1 h-1 bg-blue-600 rounded-full" />
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 3. MARQUEE */}
      <div className="py-24 border-y border-white/5 bg-[#050505] overflow-hidden whitespace-nowrap">
        <motion.div 
            animate={{ x: [0, -1200] }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
            className="flex gap-20 items-center"
        >
            {[...Array(15)].map((_, i) => (
                <div key={i} className="flex gap-20 items-center">
                    <span className="text-6xl font-black text-white/5 uppercase tracking-tighter">Node.js</span>
                    <span className="text-6xl font-black text-blue-600/20 uppercase tracking-tighter italic">React Native</span>
                    <span className="text-6xl font-black text-white/5 uppercase tracking-tighter">Tailwind CSS</span>
                </div>
            ))}
        </motion.div>
      </div>

      {/* 4. CTA PANEL */}
      <section className="py-40 px-6">
        <motion.div 
          className="max-w-6xl mx-auto rounded-[4rem] p-16 md:p-24 text-center relative overflow-hidden bg-gradient-to-b from-[#111] to-[#000] border border-white/10"
          initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}
        >
          <div className="relative z-10">
            <h2 className="text-5xl md:text-8xl font-black mb-10 tracking-tighter leading-none uppercase italic text-white">
              Launch Your <br /> <span className="text-blue-600">Ecosystem.</span>
            </h2>
            <p className="text-lg md:text-xl text-gray-500 mb-12 max-w-xl mx-auto font-light leading-relaxed">
              Leverage a single codebase for Web, iOS, and Android. Built with Node.js reliability and Tailwind CSS speed.
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center gap-6">
              <Link to="/contact" className="px-12 py-6 bg-blue-600 text-white font-black rounded-2xl hover:bg-blue-500 transition-all uppercase tracking-widest text-xs shadow-[0_20px_40px_rgba(37,99,235,0.3)]">
                Secure 2026 Slot
              </Link>
              <Link to="/portfolio" className="px-12 py-6 border border-white/10 text-white font-black rounded-2xl hover:bg-white/5 transition-all uppercase tracking-widest text-xs">
                View JS Portfolio
              </Link>
            </div>
          </div>
        </motion.div>
      </section>
      
    </div>
  );
}
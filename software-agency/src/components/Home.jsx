import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useRef } from 'react';

export default function Home() {
  const containerRef = useRef(null);
  
  // High-fidelity animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 40, filter: "blur(10px)" },
    visible: { 
      opacity: 1, 
      y: 0, 
      filter: "blur(0px)",
      transition: { duration: 0.8, ease: [0.6, 0.05, -0.01, 0.9] } 
    }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  // Synced with your explicit data schemas
  const featuredBuilds = [
    { 
      title: "ELRN E-Learning Hub", 
      tag: "Web Ecosystems", 
      img: "https://images.unsplash.com/photo-1639322537228-f710d846310a?q=80&w=1200&auto=format",
      demo: "https://elearningweb.onrender.com",
      pos: "start"
    },
    { 
      title: "MedAI Health Assistant", 
      tag: "Backend Architecture", 
      img: "https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?q=80&w=1200&auto=format",
      demo: "https://medai-0ssn.onrender.com",
      pos: "end"
    }
  ];

  return (
    <div ref={containerRef} className="w-full bg-[#020202] text-white selection:bg-blue-500/30 font-sans overflow-x-hidden">
      
      {/* 1. HERO SECTION: SPATIAL DEPTH */}
      <section className="relative min-h-screen flex items-center justify-center pt-40 pb-32 px-4 overflow-hidden">
        {/* Layered Ambient FX */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <div className="absolute top-[-10%] left-[-10%] w-[1000px] h-[1000px] bg-blue-600/10 rounded-full blur-[150px] animate-pulse" />
          <div className="absolute bottom-[-10%] right-[-10%] w-[800px] h-[800px] bg-indigo-900/10 rounded-full blur-[150px]" />
          <div className="absolute inset-0 opacity-[0.02] bg-[url('https://www.transparenttextures.com/patterns/stardust.png')]" />
        </div>

        <motion.div 
          className="max-w-7xl mx-auto text-center relative z-10"
          initial="hidden" animate="visible" variants={staggerContainer}
        >
          <motion.div variants={fadeInUp} className="inline-flex items-center gap-3 px-5 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-3xl mb-12">
            <div className="w-2 h-2 rounded-full bg-blue-500 animate-ping" />
            <span className="text-[10px] font-black tracking-[0.4em] uppercase text-blue-400">System Status: Optimal 2026</span>
          </motion.div>

          <motion.h1 variants={fadeInUp} className="text-6xl md:text-[11rem] font-black mb-10 tracking-[-0.05em] leading-[0.8] uppercase italic">
            Engineering <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-b from-white to-white/10">The Edge.</span>
          </motion.h1>
          
          <motion.p variants={fadeInUp} className="text-lg md:text-2xl text-gray-500 mb-16 max-w-4xl mx-auto leading-relaxed font-light italic">
            Apex architects category-defining digital infrastructure. We bridge the gap between <span className="text-white">Neural-Logic</span> and <span className="text-white">Enterprise Scalability</span>.
          </motion.p>
          
          <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row justify-center gap-8 items-center">
            <Link to="/portfolio" className="group relative px-14 py-7 bg-blue-600 rounded-2xl overflow-hidden transition-all hover:scale-105 hover:shadow-[0_20px_50px_rgba(37,99,235,0.4)]">
              <span className="relative z-10 font-black text-xs uppercase tracking-[0.2em]">Explore Archive</span>
              <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
            </Link>
            <Link to="/contact" className="px-14 py-7 rounded-2xl border border-white/10 bg-white/5 hover:bg-white hover:text-black transition-all duration-500 font-black text-xs uppercase tracking-[0.2em] backdrop-blur-md">
              Initiate Discovery
            </Link>
          </motion.div>
        </motion.div>

        {/* Technical Scroll Anchor */}
        <motion.div 
          animate={{ y: [0, 15, 0], opacity: [0.3, 1, 0.3] }}
          transition={{ repeat: Infinity, duration: 2.5 }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4"
        >
          <span className="text-[9px] font-mono tracking-[0.5em] text-gray-600 uppercase">Scroll</span>
          <div className="w-[1px] h-16 bg-gradient-to-b from-blue-600 to-transparent" />
        </motion.div>
      </section>

      {/* 2. LIVE DATA FEED: BRAND MARQUEE */}
      <section className="py-16 bg-[#050505] border-y border-white/5 relative overflow-hidden">
        <div className="flex whitespace-nowrap gap-24 animate-marquee opacity-20">
          {[...Array(10)].map((_, i) => (
            <div key={i} className="flex gap-24 items-center">
              <span className="text-4xl font-black tracking-tighter uppercase italic">Node.js Ecosystem</span>
              <div className="w-2 h-2 rounded-full bg-blue-600" />
              <span className="text-4xl font-black tracking-tighter uppercase">React Native Mobile</span>
              <div className="w-2 h-2 rounded-full bg-blue-600" />
              <span className="text-4xl font-black tracking-tighter uppercase italic text-blue-500">Tailwind JIT</span>
            </div>
          ))}
        </div>
      </section>

      {/* 3. PERFORMANCE MATRIX */}
      <section className="py-40 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-10"
          >
            <div className="space-y-4">
               <h2 className="text-blue-500 font-mono text-[10px] tracking-[0.5em] uppercase font-bold">// Performance Matrix</h2>
               <h3 className="text-5xl md:text-8xl font-black tracking-tighter leading-none">Built for <br /> Absolute <span className="text-blue-600">Scale.</span></h3>
            </div>
            <p className="text-xl text-gray-500 font-light leading-relaxed max-w-lg">
              Our architecture is benchmarked against the world's most demanding traffic patterns. Zero friction. Maximum throughput.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 pt-6 border-t border-white/5">
              {[
                { t: "Uptime", v: "99.999%", d: "L5 Fault Tolerance" },
                { t: "Security", v: "Zero-Trust", d: "AES-256 GCM" }
              ].map((stat, i) => (
                <div key={i}>
                  <h5 className="text-white font-black uppercase text-xs tracking-widest mb-1">{stat.t}</h5>
                  <div className="text-4xl font-black text-blue-500 mb-1">{stat.v}</div>
                  <p className="text-[10px] text-gray-600 uppercase font-bold">{stat.d}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Technical Cubes */}
          <div className="grid grid-cols-2 gap-4">
            {[
              { label: "Core_Vitals", val: "100", unit: "Score" },
              { label: "Latency", val: "14", unit: "ms" },
              { label: "Throughput", val: "1.2M", unit: "req/s" },
              { label: "Deployment", val: "CD", unit: "Auto" }
            ].map((box, i) => (
              <motion.div 
                key={i}
                whileHover={{ scale: 1.05, borderColor: 'rgba(59,130,246,0.5)' }}
                className="p-10 rounded-[2.5rem] bg-gradient-to-br from-white/5 to-transparent border border-white/10 backdrop-blur-md flex flex-col justify-between aspect-square"
              >
                <span className="text-[9px] font-mono tracking-widest text-gray-600 uppercase">{box.label}</span>
                <div>
                  <div className="text-5xl font-black text-white">{box.val}</div>
                  <div className="text-[10px] text-blue-500 uppercase tracking-[0.2em] font-black">{box.unit}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. RECENT BUILDS: THE SHOWCASE */}
      <section className="py-40 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-32 gap-8">
            <h3 className="text-6xl md:text-[9rem] font-black tracking-tighter leading-none italic">The <br /> Portfolio<span className="text-blue-600">.</span></h3>
            <Link to="/portfolio" className="text-xs font-black uppercase tracking-[0.4em] border-b border-blue-500 pb-2 hover:text-blue-400 transition-colors">View All Projects</Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {featuredBuilds.map((proj, i) => (
              <motion.div 
                key={i} 
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className={`relative group ${proj.pos === 'end' ? 'md:mt-40' : ''}`}
              >
                {/* Clicking on the card area directly handles navigation to live site */}
                <a 
                  href={proj.demo} 
                  target="_blank" 
                  rel="noreferrer" 
                  className="block relative aspect-[3/4] rounded-[3.5rem] overflow-hidden bg-white/5 border border-white/10 cursor-pointer"
                >
                  <img 
                    src={proj.img} 
                    alt={proj.title} 
                    className="w-full h-full object-cover transition-transform duration-[1.5s] group-hover:scale-110 opacity-70 group-hover:opacity-100 grayscale group-hover:grayscale-0" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80" />
                  
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 backdrop-blur-[2px] bg-black/20">
                    <span className="px-5 py-2.5 rounded-full border border-white/20 bg-black/60 font-mono text-[10px] tracking-widest text-blue-400 uppercase">
                      // Launch_Application
                    </span>
                  </div>

                  <div className="absolute bottom-12 left-12 z-10">
                    <p className="text-blue-500 font-mono text-[10px] tracking-[0.3em] uppercase mb-4">{proj.tag}</p>
                    <h4 className="text-5xl font-black tracking-tight uppercase italic text-white">{proj.title}</h4>
                  </div>
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. CTA: FINAL TRANSMISSION */}
      <section className="py-40 px-6">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="max-w-7xl mx-auto bg-[#0A0A0A] rounded-[4rem] p-16 md:p-32 text-center relative overflow-hidden border border-white/10"
        >
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/10 rounded-full blur-[120px]" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-indigo-600/10 rounded-full blur-[120px]" />
          
          <div className="relative z-10">
            <h2 className="text-6xl md:text-9xl font-black mb-12 tracking-tighter leading-none uppercase italic">
              Ready to <br /> <span className="text-blue-600">Transmit?</span>
            </h2>
            <Link to="/contact" className="inline-block px-16 py-8 bg-white text-black rounded-2xl font-black text-xs uppercase tracking-[0.4em] hover:bg-blue-500 hover:text-white transition-all duration-500 active:scale-95 shadow-2xl">
              Initiate Protocol
            </Link>
          </div>
        </motion.div>
      </section>

      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 40s linear infinite;
        }
      `}</style>
    </div>
  );
}
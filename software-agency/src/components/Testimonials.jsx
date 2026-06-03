import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function Testimonials() {
  // Enhanced Ease for 2026 technical feel
  const fadeInUp = {
    hidden: { opacity: 0, y: 60, filter: "blur(15px)" },
    visible: { 
      opacity: 1, 
      y: 0, 
      filter: "blur(0px)",
      transition: { duration: 0.8, ease: [0.6, 0.05, -0.01, 0.9] } 
    }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
  };

  const reviews = [
    {
      id: 1,
      client: "Sarah Jenkins",
      role: "CTO, SocialConnect",
      rating: 5,
      text: "Their React Native team integrated Firebase and Cloudinary seamlessly. The video handling is buttery smooth across all hardware builds.",
      initial: "S",
      color: "from-blue-500 to-indigo-500",
      tag: "Mobile OS"
    },
    {
      id: 2,
      client: "Marcus Rodriguez",
      role: "Ops Manager, RetailFlow",
      rating: 5,
      text: "They delivered a high-performance Node.js ERP system that streamlined our operations without the typical enterprise bloat.",
      initial: "M",
      color: "from-purple-500 to-pink-500",
      tag: "Web Systems"
    },
    {
      id: 3,
      client: "David Chen",
      role: "VP Eng, FoodHub",
      rating: 5,
      text: "The backend using Express and Docker is rock-solid. It handles our peak hour order volume without breaking a sweat. Infrastructure is their superpower.",
      initial: "D",
      color: "from-emerald-500 to-teal-500",
      tag: "Cloud Ops"
    },
    {
      id: 4,
      client: "Emily Stanton",
      role: "Director, FinSecure",
      rating: 5,
      text: "Bank-level encryption and secure auth flows were non-negotiable. They built a system that exceeded our compliance standards.",
      initial: "E",
      color: "from-orange-500 to-red-500",
      tag: "Security"
    },
    {
      id: 5,
      client: "James Wilson",
      role: "CEO, StartUp Hub",
      rating: 5,
      text: "Our MVP was the reason we secured our next round of funding. They don't just write code; they build high-fidelity businesses.",
      initial: "J",
      color: "from-cyan-500 to-blue-500",
      tag: "Venture"
    },
    {
      id: 6,
      client: "Amanda Lee",
      role: "Marketing Director, GlobalReach",
      rating: 5,
      text: "Page load speeds dropped to under 800ms. Our SEO performance has tripled since the React migration. A complete transformation.",
      initial: "A",
      color: "from-pink-500 to-rose-500",
      tag: "Performance"
    }
  ];

  const renderStars = (rating) => (
    <div className="flex gap-1.5">
      {[...Array(5)].map((_, i) => (
        <div key={i} className={`w-1.5 h-1.5 rounded-full ${i < rating ? 'bg-blue-500 shadow-[0_0_8px_#3b82f6]' : 'bg-white/10'}`} />
      ))}
    </div>
  );

  return (
    <div className="w-full bg-[#020202] text-white min-h-screen selection:bg-blue-500/30 font-sans">
      
      {/* 1. HERO SECTION */}
      <section className="relative pt-64 pb-40 px-6 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <motion.div 
            animate={{ scale: [1, 1.2, 1], x: [0, 50, 0] }}
            transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
            className="absolute top-[-10%] left-[-10%] w-[600px] h-[600px] bg-purple-900/10 rounded-full blur-[160px]" 
          />
          <motion.div 
            animate={{ scale: [1.2, 1, 1.2], x: [0, -50, 0] }}
            transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
            className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-blue-900/10 rounded-full blur-[160px]" 
          />
        </div>

        <motion.div 
          className="max-w-6xl mx-auto text-center relative z-10"
          initial="hidden" animate="visible" variants={staggerContainer}
        >
          <motion.div variants={fadeInUp} className="mb-10">
            <span className="px-5 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-md text-[10px] font-black uppercase tracking-[0.4em] text-blue-500">
              Verified Intel
            </span>
          </motion.div>
          <motion.h1 variants={fadeInUp} className="text-7xl md:text-9xl font-black mb-12 tracking-tighter leading-[0.8] uppercase italic">
            Engineered <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-b from-white to-white/20">Trust.</span>
          </motion.h1>
          <motion.p variants={fadeInUp} className="text-xl md:text-2xl text-gray-500 max-w-3xl mx-auto font-light leading-relaxed">
            Read how category leaders leverage Apex to architect hyper-scalable systems and world-class experiences.
          </motion.p>
        </motion.div>
      </section>

      {/* 2. INFINITE MARQUEE */}
      <div className="py-20 border-y border-white/5 bg-black/50 backdrop-blur-sm overflow-hidden whitespace-nowrap">
        <motion.div 
          animate={{ x: [0, -1920] }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
          className="flex gap-24 items-center grayscale opacity-30 hover:opacity-100 transition-opacity"
        >
          {[...Array(12)].map((_, i) => (
            <span key={i} className="text-4xl font-black tracking-tighter uppercase px-10 italic">
              {['TechCorp', 'Nexus', 'GlobalReach', 'CloudSec', 'FinTech'][i % 5]}
            </span>
          ))}
        </motion.div>
      </div>

      {/* 3. REVIEWS GRID */}
      <section className="py-40 px-6 max-w-[95rem] mx-auto">
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}
        >
          {reviews.map((review) => (
            <motion.div 
              key={review.id} 
              variants={fadeInUp} 
              whileHover={{ y: -15, rotateX: 2, rotateY: -2 }}
              style={{ transformStyle: "preserve-3d" }}
              className="bg-[#080808] p-14 rounded-[4rem] border border-white/5 hover:border-blue-500/40 transition-all duration-700 flex flex-col relative group overflow-hidden"
            >
              <div className={`absolute -top-24 -right-24 w-64 h-64 bg-gradient-to-br ${review.color} opacity-0 group-hover:opacity-10 blur-3xl transition-opacity duration-1000`} />

              <div className="mb-12 flex items-center justify-between relative z-10">
                {renderStars(review.rating)}
                <span className="text-[9px] font-black uppercase tracking-[0.3em] text-blue-500 bg-blue-500/10 px-4 py-1.5 rounded-full border border-blue-500/20">
                  {review.tag}
                </span>
              </div>
              
              <blockquote className="text-gray-400 leading-relaxed mb-16 flex-grow text-xl font-light italic group-hover:text-white transition-colors duration-500 relative z-10">
                "{review.text}"
              </blockquote>
              
              <div className="mt-auto pt-10 border-t border-white/5 flex items-center gap-6 relative z-10">
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${review.color} flex items-center justify-center text-white font-black text-2xl shadow-xl`}>
                  {review.initial}
                </div>
                <div>
                  <div className="font-black text-white text-lg tracking-tight uppercase italic">{review.client}</div>
                  <div className="text-[10px] text-gray-600 font-black uppercase tracking-[0.3em] mt-1">{review.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* 4. CASE STUDY VIDEO */}
      <section className="py-40 px-6">
        <motion.div 
          className="max-w-7xl mx-auto rounded-[5rem] p-16 md:p-32 relative overflow-hidden bg-[#0A0A0A] border border-white/10"
          initial={{ opacity: 0, y: 100 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
        >
          <div className="relative z-20 flex flex-col lg:flex-row items-center gap-24">
            <div className="lg:w-1/2 text-left space-y-10">
              <h2 className="text-6xl md:text-9xl font-black tracking-tighter leading-none italic text-white uppercase">
                Deep <br /> 
                <span className="text-gray-700">Dives.</span>
              </h2>
              <p className="text-xl text-gray-500 font-light leading-relaxed max-w-md">
                We believe in extreme technical transparency. Watch our lead architects break down the logic behind our most complex deployments.
              </p>
              <Link to="/portfolio" className="inline-block px-14 py-7 bg-white text-black font-black rounded-2xl hover:bg-blue-600 hover:text-white transition-all uppercase tracking-[0.3em] text-[10px]">
                Explore Blueprints
              </Link>
            </div>
            
            <div className="lg:w-1/2 w-full aspect-video rounded-[3rem] bg-black/60 border border-white/5 flex items-center justify-center group cursor-pointer relative overflow-hidden">
               <div className="relative z-20 w-24 h-24 bg-white rounded-full flex items-center justify-center shadow-[0_0_40px_rgba(255,255,255,0.3)] group-hover:scale-110 transition-transform duration-700">
                  <svg className="w-10 h-10 text-black ml-1" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" />
                  </svg>
               </div>
               <img 
                src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=1200&q=80" 
                alt="Cyber Infrastructure"
                className="absolute inset-0 w-full h-full object-cover opacity-20 grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000"
               />
            </div>
          </div>
          <div className="absolute inset-0 opacity-[0.02] pointer-events-none bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:40px_40px]" />
        </motion.div>
      </section>
      
      {/* 5. PERFORMANCE FOOTER */}
      <section className="pb-40 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 text-center border-t border-white/5 pt-20">
          {[
            { stat: "150M+", label: "Ecosystem Requests" },
            { stat: "99.99%", label: "Uptime Protocol" },
            { stat: "24ms", label: "Edge Latency" },
            { stat: "L3", label: "Security Encryption" }
          ].map((item, i) => (
            <div key={i}>
              <div className="text-4xl font-black tracking-tighter mb-2 italic uppercase">{item.stat}</div>
              <div className="text-[10px] font-black uppercase tracking-[0.3em] text-gray-600 font-mono">{item.label}</div>
            </div>
          ))}
        </div>
      </section>
      
    </div>
  );
}
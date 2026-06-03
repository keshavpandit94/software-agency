import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

export default function Pricing() {
  const [openFaq, setOpenFaq] = useState(null);

  const fadeInUp = {
    hidden: { opacity: 0, y: 60, filter: "blur(15px)" },
    visible: { 
      opacity: 1, 
      y: 0, 
      filter: "blur(0px)",
      transition: { duration: 0.8, ease: [0.6, 0.05, -0.01, 0.9] } 
    }
  };

  const pricingTiers = [
    {
      name: "Lite",
      target: "Venture MVPs",
      range: "₹15k", // Updated Base Price
      time: "14 Days",
      description: "Aggressive speed-to-market for validation-ready prototypes.",
      features: ["Next.js 15 App Router", "Serverless Architecture", "GST-Ready Checkout", "Custom UI Library", "14-Day Post-Launch QA"],
      isPopular: false,
      accent: "blue"
    },
    {
      name: "Pro",
      target: "Commercial SaaS",
      range: "₹30k", // Updated Base Price
      time: "8-10 Weeks",
      description: "Enterprise-grade builds with advanced logic and complex integrations.",
      features: ["Distributed Microservices", "Advanced Auth Systems", "Razorpay/Stripe Integration", "Custom API Middleware", "90-Day Full Support"],
      isPopular: true,
      accent: "indigo"
    },
    {
      name: "Scale",
      target: "Cross-Platform",
      range: "₹60k", // Updated Base Price
      time: "4 Months",
      description: "Unified ecosystems across Web, iOS, and Android platforms.",
      features: ["React Native Hub", "Shared Logic Monorepo", "Real-time Sync (WebSockets)", "Biometric Security", "Dedicated DevOps Lead"],
      isPopular: false,
      accent: "purple"
    },
    {
      name: "Nexus",
      target: "Enterprise AI",
      range: "Quote",
      time: "Retainer",
      description: "Dedicated technical unit for continuous R&D and high-load platforms.",
      features: ["Custom LLM Orchestration", "Kubernetes Fleet Mgmt", "ISO/IEC 27001 Readiness", "24/7 Incident Response", "Direct CTO Access"],
      isPopular: false,
      accent: "emerald"
    }
  ];

  const faqs = [
    { q: "Source Code Ownership?", a: "Apex operates on a 'Work for Hire' basis. You own 100% of the IP, source code, and assets from Day 1." },
    { q: "Post-Launch Evolution?", a: "We provide dedicated maintenance retainers or help you hire an in-house team to take over the codebase." },
    { q: "GST & Tax Invoicing?", a: "All projects are billed with GST compliance. Our financial team provides full tax documentation for Indian corporate filing." }
  ];

  return (
    <div className="w-full bg-[#020202] text-white min-h-screen selection:bg-blue-500/30 font-sans">
      
      {/* 1. HERO SECTION */}
      <section className="relative pt-64 pb-40 px-6 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <motion.div 
            animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.15, 0.1] }}
            transition={{ duration: 10, repeat: Infinity }}
            className="absolute top-0 left-0 w-[600px] h-[600px] bg-blue-600 rounded-full blur-[140px]"
          />
          <motion.div 
            animate={{ scale: [1.2, 1, 1.2], opacity: [0.1, 0.15, 0.1] }}
            transition={{ duration: 12, repeat: Infinity }}
            className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-indigo-600 rounded-full blur-[140px]"
          />
        </div>

        <motion.div 
          className="max-w-6xl mx-auto text-center relative z-10"
          initial="hidden" animate="visible"
          variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
        >
          <motion.div variants={fadeInUp} className="mb-8">
            <span className="px-5 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-md text-[10px] font-black uppercase tracking-[0.4em] text-blue-500">
              Pricing Protocol 2026_INR
            </span>
          </motion.div>
          <motion.h1 variants={fadeInUp} className="text-6xl md:text-9xl font-black mb-10 tracking-tighter leading-[0.85] uppercase italic">
            Fixed <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-b from-white to-white/20">Velocity.</span>
          </motion.h1>
          <motion.p variants={fadeInUp} className="text-xl md:text-2xl text-gray-500 max-w-2xl mx-auto font-light leading-relaxed">
            Eliminating ambiguity through milestone-driven engineering and transparent capital allocation across the Indian subcontinent.
          </motion.p>
        </motion.div>
      </section>

      {/* 2. PRICING GRID */}
      <section className="px-6 max-w-[95rem] mx-auto relative -mt-20 z-20 pb-40">
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4"
          initial="hidden" whileInView="visible" viewport={{ once: true }}
          variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
        >
          {pricingTiers.map((tier, index) => (
            <motion.div 
              key={index} 
              variants={fadeInUp}
              whileHover={{ y: -10 }}
              className={`group relative bg-[#080808] p-10 rounded-[3rem] border border-white/5 flex flex-col transition-all duration-500
                ${tier.isPopular ? 'border-blue-500/40 ring-1 ring-blue-500/20 shadow-[0_0_50px_rgba(59,130,246,0.1)]' : 'hover:border-white/10'}
              `}
            >
              {tier.isPopular && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-[1px] bg-blue-500 shadow-[0_0_15px_#3b82f6]" />
              )}

              <div className="mb-10">
                <h3 className="text-3xl font-black mb-1 tracking-tighter uppercase italic">{tier.name}</h3>
                <p className="text-blue-500 font-mono text-[9px] uppercase tracking-[0.3em] mb-8 font-bold">{tier.target}</p>
                <div className="flex items-baseline gap-1 mb-2">
                  <span className="text-5xl font-black tracking-tighter">{tier.range}</span>
                  <span className="text-gray-600 font-mono text-[10px]">/BASE</span>
                </div>
                <p className="text-[10px] font-black text-gray-500 uppercase tracking-widest flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-pulse" />
                  Sprint: {tier.time}
                </p>
              </div>

              <ul className="mb-12 space-y-5 flex-grow">
                {tier.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3 group/item">
                    <div className="mt-1 w-1 h-1 rounded-full bg-white/20 group-hover/item:bg-blue-500 transition-colors" />
                    <span className="text-gray-500 text-[11px] font-bold uppercase tracking-widest group-hover/item:text-white transition-colors">{feature}</span>
                  </li>
                ))}
              </ul>

              <Link to="/contact" className={`
                w-full py-6 rounded-2xl font-black text-[10px] uppercase tracking-[0.4em] transition-all text-center relative overflow-hidden
                ${tier.isPopular ? 'bg-blue-600 text-white' : 'bg-white/5 text-white hover:bg-white/10'}
              `}>
                <span className="relative z-10">Initiate Workflow</span>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* 3. FAQ SECTION */}
      <section className="py-40 px-6 max-w-4xl mx-auto border-t border-white/5">
        <div className="text-center mb-24">
          <h2 className="text-blue-500 font-mono text-[10px] tracking-[0.5em] uppercase font-bold mb-4">// Intelligence</h2>
          <h3 className="text-5xl md:text-7xl font-black tracking-tighter uppercase italic">FAQ</h3>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-[#080808] rounded-[2.5rem] border border-white/5 overflow-hidden">
              <button 
                onClick={() => setOpenFaq(openFaq === index ? null : index)}
                className="w-full text-left px-10 py-9 flex items-center justify-between group"
              >
                <span className="font-black text-white text-sm uppercase tracking-widest group-hover:text-blue-500 transition-colors">{faq.q}</span>
                <motion.span 
                  animate={{ rotate: openFaq === index ? 180 : 0 }} 
                  className="text-blue-500"
                >
                  {openFaq === index ? "−" : "+"}
                </motion.span>
              </button>
              <AnimatePresence>
                {openFaq === index && (
                  <motion.div 
                    initial={{ height: 0, opacity: 0 }} 
                    animate={{ height: 'auto', opacity: 1 }} 
                    exit={{ height: 0, opacity: 0 }}
                    className="px-10 pb-10 text-gray-500 text-[13px] font-light leading-relaxed border-t border-white/5 pt-8"
                  >
                    {faq.a}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </section>

      {/* 4. FINAL CTA */}
      <section className="py-40 px-6">
        <motion.div 
          className="max-w-6xl mx-auto rounded-[5rem] p-20 md:p-32 text-center relative overflow-hidden bg-white group"
          initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }}
        >
          <div className="relative z-10">
            <h2 className="text-6xl md:text-9xl font-black mb-12 tracking-tighter leading-none uppercase text-black italic">
              Ready to <br /> <span className="text-blue-600">Ascend?</span>
            </h2>
            <Link to="/contact" className="inline-block px-16 py-8 bg-black text-white font-black rounded-full hover:scale-110 transition-transform active:scale-95 uppercase tracking-widest text-[11px]">
              Secure Your Slot
            </Link>
          </div>
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/5 rounded-full blur-[100px]" />
        </motion.div>
      </section>
      
    </div>
  );
}
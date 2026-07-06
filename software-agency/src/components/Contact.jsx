import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: 'Web Systems',
    budget: 'Medium (₹30k)', 
    message: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSending, setIsSending] = useState(false);
  const [isWakingServer, setIsWakingServer] = useState(true);
  
  // Clean production API endpoint
  const api = "https://software-agency-backend.onrender.com";

  // WAKE UP HANDSHAKE: Fires immediately when the component mounts to handle Render's free tier sleep mode
  useEffect(() => {
    const wakeServer = async () => {
      try {
        // Send a silent GET request to your backend's root or a status endpoint
        await fetch(api);
        setIsWakingServer(false);
        console.log("⚙️ Render node successfully spun up and initialized.");
      } catch (error) {
        // If it fails initially, it could be halfway through spinning up; let the user still attempt the submission
        setIsWakingServer(false); 
        console.warn("⚠️ Initial server handshake failed, could still be initialization sequence.");
      }
    };

    wakeServer();
  }, [api]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSending(true);

    try {
      const response = await fetch(`${api}/send-transmission`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        setIsSubmitted(true);
        // Reset state matching new defaults safely
        setFormData({ name: '', email: '', service: 'Web Systems', budget: 'Medium (₹30k)', message: '' });
      } else {
        alert("Transmission routing failed on the secure node. Please use the Direct Contact email links.");
      }
    } catch (error) {
      console.error("Connection Error:", error);
      // Informative user-facing feedback tailored for Render's spin-up delay
      alert("Connection handshake timed out. The cloud node is spinning up; please re-submit your message in 30 seconds.");
    } finally {
      setIsSending(false);
      setTimeout(() => setIsSubmitted(false), 5000);
    }
  };

  const handleDirectMail = (email) => {
    window.location.href = `mailto:${email}`;
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 60, filter: "blur(10px)" },
    visible: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.8 } }
  };

  return (
    <div className="w-full bg-[#050505] text-white min-h-screen selection:bg-blue-500/30 font-sans">
      
      {/* 1. HERO SECTION */}
      <section className="relative pt-48 pb-32 px-4 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-[-10%] left-[-10%] w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[150px]" />
          <div className="absolute bottom-[20%] right-[-5%] w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[150px]" />
        </div>

        <motion.div className="max-w-4xl mx-auto text-center relative z-10" initial="hidden" animate="visible">
          <motion.h4 variants={fadeInUp} className="text-blue-500 font-mono text-sm tracking-[0.4em] uppercase mb-6">// Secure Channel</motion.h4>
          <motion.h1 variants={fadeInUp} className="text-5xl md:text-8xl font-black mb-8 tracking-tighter leading-[0.85]">
            Initiate <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">Discovery.</span>
          </motion.h1>
        </motion.div>
      </section>

      {/* 2. MAIN CONTACT SECTION */}
      <section className="py-20 px-4 max-w-7xl mx-auto relative z-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          
          <motion.div className="lg:col-span-5 space-y-8" initial="hidden" whileInView="visible">
            <motion.h2 variants={fadeInUp} className="text-3xl font-black tracking-tight mb-4 uppercase text-white">Direct Contact</motion.h2>
            
            <div className="space-y-4">
              {[{ label: 'Engineering', val: 'pkeshav282@gmail.com', color: 'blue' }, { label: 'Partnerships', val: 'pkeshav282@gmail.com', color: 'purple' }].map((item, i) => (
                <div key={i} onClick={() => handleDirectMail(item.val)} className="group p-8 bg-white/5 border border-white/5 rounded-[2rem] backdrop-blur-xl flex items-center gap-6 transition-all hover:border-white/20 cursor-pointer">
                  <div className={`w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center text-blue-500 group-hover:bg-blue-500 group-hover:text-white transition-all`}>
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                  </div>
                  <div>
                    <p className="text-[10px] font-black uppercase tracking-widest text-gray-500 mb-1">{item.label}</p>
                    <p className="text-white font-mono text-sm">{item.val}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div className="lg:col-span-7">
            <div className="relative bg-[#0A0A0A] p-8 md:p-14 rounded-[3.5rem] border border-white/5 shadow-2xl overflow-hidden">
              <AnimatePresence>
                {isSubmitted && (
                  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="absolute inset-0 bg-black/95 z-50 backdrop-blur-2xl flex flex-col items-center justify-center text-center p-10">
                    <div className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center mb-8 shadow-lg shadow-blue-500/50">
                      <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg>
                    </div>
                    <h3 className="text-4xl font-black tracking-tighter mb-4 uppercase italic text-white">Transmission Received</h3>
                    <p className="text-gray-400 font-light max-w-sm">Data has been successfully routed to your endpoint via the secure backend node.</p>
                  </motion.div>
                )}
              </AnimatePresence>

              <form onSubmit={handleSubmit} className="space-y-8 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-[0.2em] text-blue-500 pl-1">Identity</label>
                    <input type="text" name="name" value={formData.name} onChange={handleChange} required placeholder="Full Name" className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-blue-500 transition-all font-light" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-[0.2em] text-blue-500 pl-1">Digital Mail</label>
                    <input type="email" name="email" value={formData.email} onChange={handleChange} required placeholder="Email Address" className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-blue-500 transition-all font-light" />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-[0.2em] text-blue-500 pl-1">Capability</label>
                    <select name="service" value={formData.service} onChange={handleChange} className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-blue-500 appearance-none font-light cursor-pointer">
                      <option value="Web Systems" className="bg-[#0A0A0A]">Web Systems</option>
                      <option value="Mobile OS" className="bg-[#0A0A0A]">Mobile OS</option>
                      <option value="Enterprise ERP" className="bg-[#0A0A0A]">Enterprise ERP</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-[0.2em] text-blue-500 pl-1">Scale (INR)</label>
                    <select name="budget" value={formData.budget} onChange={handleChange} className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-blue-500 appearance-none font-light cursor-pointer">
                      <option value="Lite (₹15k)" className="bg-[#0A0A0A]">Lite (₹15k)</option>
                      <option value="Medium (₹30k)" className="bg-[#0A0A0A]">Medium (₹30k)</option>
                      <option value="Scale (₹60k)" className="bg-[#0A0A0A]">Scale (₹60k)</option>
                      <option value="Custom / Enterprise" className="bg-[#0A0A0A]">Custom / Enterprise</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-[0.2em] text-blue-500 pl-1">Technical Brief</label>
                  <textarea name="message" value={formData.message} onChange={handleChange} required rows="4" placeholder="Describe the architectural requirements..." className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-blue-500 transition-all font-light resize-none"></textarea>
                </div>

                <button type="submit" disabled={isSending} className="w-full group relative py-6 bg-blue-600 rounded-2xl font-black text-xs uppercase tracking-[0.3em] overflow-hidden transition-all hover:bg-blue-500 active:scale-[0.98] disabled:opacity-50">
                  <span className="relative z-10">
                    {isSending ? 'Transmitting...' : 'Send Transmission'}
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
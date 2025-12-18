import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Facebook, Instagram, Linkedin, Twitter, X, Send, CheckCircle2 } from "lucide-react";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [subscriptionMessage, setSubscriptionMessage] = useState(null);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!email) return;

    setSubscriptionMessage({
      type: "success",
      text: "Welcome to the inner circle!",
    });

    setEmail("");
    setTimeout(() => setSubscriptionMessage(null), 5000);
  };

  return (
    <footer className="relative w-full bg-[#050505] pt-20 overflow-hidden">
      {/* 1. CINEMATIC BACKGROUND SYSTEM */}
      <div className="absolute inset-0 z-0">
        <div 
          className="absolute inset-0 bg-cover bg-center grayscale opacity-20 scale-110"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?auto=format&fit=crop&w=1600&q=80')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/80 to-transparent" />
        {/* Glowing Accent */}
        <div className="absolute -top-[20%] left-1/2 -translate-x-1/2 w-[80%] h-[40%] bg-purple-600/10 blur-[120px] rounded-full" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-8">
        
        {/* 2. TOP SECTION: BRAND & NEWSLETTER OVERLAY */}
        <div className="grid lg:grid-cols-2 gap-16 mb-24 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl font-black mb-6 tracking-tighter text-white">
              IQRAONLINE<span className="text-purple-500">.</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-md leading-relaxed font-light">
              Crafting beautiful digital experiences with modern design,
              innovative development, and world-class performance.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative p-8 rounded-[2rem] bg-white/[0.03] border border-white/10 backdrop-blur-xl"
          >
            <h3 className="text-xl font-bold mb-4 text-white">Stay in the flow</h3>
            <form onSubmit={handleSubscribe} className="relative group">
              <input
                type="email"
                placeholder="Your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full pl-6 pr-16 py-4 rounded-2xl bg-white/5 border border-white/10 text-white outline-none focus:border-purple-500/50 transition-all placeholder:text-gray-600"
                required
              />
              <button
                type="submit"
                className="absolute right-2 top-2 bottom-2 px-4 bg-white text-black rounded-xl hover:bg-purple-500 hover:text-white transition-all duration-300 active:scale-95"
              >
                <Send size={18} />
              </button>
            </form>

            <AnimatePresence>
              {subscriptionMessage && (
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className="absolute left-8 right-8 -bottom-16 p-4 rounded-xl bg-purple-600 text-white flex items-center justify-between shadow-2xl shadow-purple-900/40"
                >
                  <div className="flex items-center gap-3">
                    <CheckCircle2 size={18} />
                    <span className="text-sm font-medium">{subscriptionMessage.text}</span>
                  </div>
                  <X size={16} className="cursor-pointer" onClick={() => setSubscriptionMessage(null)} />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>

        {/* 3. LINK ECOSYSTEM */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 pb-20 border-b border-white/5">
          {/* Socials Column */}
          <div className="col-span-2 md:col-span-1">
            <h4 className="text-xs font-bold uppercase tracking-[0.3em] text-gray-500 mb-8">Connect</h4>
            <div className="flex flex-wrap gap-3">
              {[Facebook, Instagram, Twitter, Linkedin].map((Icon, idx) => (
                <a key={idx} href="#" className="p-4 bg-white/5 rounded-2xl border border-white/5 text-gray-400 hover:text-white hover:border-purple-500/50 hover:-translate-y-1 transition-all duration-300">
                  <Icon size={20} />
                </a>
              ))}
            </div>
          </div>

          {/* Links Columns */}
          {[
            { title: "Company", links: ["About Us", "Careers", "Blog", "Press"] },
            { title: "Services", links: ["Web Dev", "UI/UX Design", "Full-Stack", "SEO"] }
          ].map((col, idx) => (
            <div key={idx}>
              <h4 className="text-xs font-bold uppercase tracking-[0.3em] text-gray-500 mb-8">{col.title}</h4>
              <ul className="space-y-4">
                {col.links.map((link) => (
                  <li key={link}>
                    <Link to="#" className="text-gray-400 hover:text-purple-400 font-light transition-colors duration-300">
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div>
             <h4 className="text-xs font-bold uppercase tracking-[0.3em] text-gray-500 mb-8">Location</h4>
             <p className="text-gray-400 font-light leading-relaxed">
               Global Remote / <br />
               Blackburn, UK
             </p>
          </div>
        </div>

        {/* 4. LEGAL & UTILITY */}
        <div className="py-12 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-gray-600 text-sm font-light italic">
            © {new Date().getFullYear()} Iqra Online. Architectural Digital Design.
          </p>
          <div className="flex gap-8 text-gray-600 text-sm">
            <a href="#" className="hover:text-white transition-colors">Privacy</a>
            <a href="#" className="hover:text-white transition-colors">Terms</a>
            <a href="#" className="hover:text-white transition-colors">Security</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
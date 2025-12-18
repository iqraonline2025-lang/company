import React, { useState } from "react";
import { motion } from "framer-motion";

const ContactHero = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    const x = (clientX / window.innerWidth - 0.5) * 15;
    const y = (clientY / window.innerHeight - 0.5) * 15;
    setMousePos({ x, y });
  };

  // Animation variants for the "Masked" entrance
  const titleLine = {
    hidden: { y: "100%" },
    visible: {
      y: 0,
      transition: { duration: 0.8, ease: [0.33, 1, 0.68, 1] }
    }
  };

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 }
    }
  };

  return (
    <section 
      onMouseMove={handleMouseMove}
      className="relative w-full min-h-screen bg-[#020205] flex items-center justify-center overflow-hidden"
    >
      {/* --- BACKGROUND DYNAMICS --- */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div 
          animate={{ x: mousePos.x * -1, y: mousePos.y * -1 }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-indigo-600/10 blur-[120px] rounded-full" 
        />
        {/* Grainy Noise Overlay for Texture */}
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay" />
        
        {/* Subtle Tech Grid Mask */}
        <div className="absolute inset-0 opacity-[0.05] bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px]" />
      </div>

      <div className="relative z-10 w-full max-w-7xl px-8 grid lg:grid-cols-2 gap-16 items-center">
        
        {/* LEFT: ANIMATED TEXT CONTENT */}
        <motion.div 
          variants={container}
          initial="hidden"
          animate="visible"
          className="flex flex-col text-center lg:text-left"
        >
          <motion.div variants={titleLine} className="flex items-center gap-3 mb-6 justify-center lg:justify-start overflow-hidden">
            <span className="h-[1px] w-10 bg-indigo-500" />
            <span className="text-indigo-400 font-mono text-[10px] tracking-[0.6em] uppercase font-bold">
              Secure Channel Open
            </span>
          </motion.div>

          {/* Masked Title Animation */}
          <div className="overflow-hidden">
            <motion.h1 variants={titleLine} className="text-7xl md:text-9xl font-black text-white leading-[0.85] tracking-tighter">
              READY TO
            </motion.h1>
          </div>
          <div className="overflow-hidden">
            <motion.h1 
              variants={titleLine} 
              className="text-7xl md:text-9xl font-black text-transparent leading-[0.85] tracking-tighter italic"
              style={{ WebkitTextStroke: "1px rgba(255,255,255,0.3)" }}
            >
              CONNECT?
            </motion.h1>
          </div>

          <motion.p 
            variants={titleLine}
            className="mt-10 text-gray-400 text-lg md:text-xl max-w-lg leading-relaxed font-light mx-auto lg:mx-0"
          >
            Have a technical inquiry or a spiritual project? We're ready to provide 
            <span className="text-white italic"> bespoke architectural solutions </span> 
            tailored to your vision.
          </motion.p>

          <motion.div variants={titleLine} className="mt-12 flex flex-wrap justify-center lg:justify-start gap-8 items-center">
            <button 
              onClick={() => document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' })}
              className="relative group px-12 py-5 bg-white text-black font-black text-xs uppercase tracking-widest rounded-none hover:bg-indigo-600 hover:text-white transition-all duration-500 overflow-hidden"
            >
              <span className="relative z-10">Send Message</span>
              <div className="absolute top-0 left-0 w-full h-full bg-indigo-500 translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500" />
            </button>
            
            <div className="flex flex-col items-start text-left">
               <span className="text-[10px] text-indigo-500 font-bold tracking-widest uppercase mb-1">Avg Response</span>
               <span className="text-white font-mono text-sm tracking-tighter underline decoration-indigo-500/50 underline-offset-4">Under 24 Hours</span>
            </div>
          </motion.div>
        </motion.div>

        {/* RIGHT: ABSTRACT COMMUNICATION ELEMENT */}
        <div className="relative flex justify-center items-center h-[500px]">
          <motion.div
            animate={{ 
              rotate: 360,
              scale: [1, 1.05, 1],
            }}
            transition={{ 
              rotate: { duration: 20, repeat: Infinity, ease: "linear" },
              scale: { duration: 4, repeat: Infinity, ease: "easeInOut" }
            }}
            style={{ x: mousePos.x * 2, y: mousePos.y * 2 }}
            className="relative w-80 h-80 flex items-center justify-center"
          >
            {/* Outer Rotating Dashed Ring */}
            <div className="absolute inset-0 border-2 border-dashed border-indigo-500/30 rounded-full animate-[spin_15s_linear_infinite]" />
            
            {/* Middle Glassmorphic Layer */}
            <div className="absolute inset-8 bg-white/5 backdrop-blur-3xl rounded-full border border-white/10 shadow-[0_0_50px_rgba(79,70,229,0.2)]" />

            {/* Central Icon */}
            <motion.div 
               animate={{ y: [0, -10, 0] }}
               transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
               className="relative z-20 text-indigo-400"
            >
              <svg className="w-24 h-24" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.5" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
            </motion.div>
          </motion.div>

          {/* Floating 'Signal' Dots */}
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              animate={{ 
                opacity: [0, 1, 0],
                scale: [0.5, 1.5, 0.5],
                x: [0, (i - 2) * 50],
                y: [0, (i % 2 === 0 ? -100 : 100)]
              }}
              transition={{ duration: 3, repeat: Infinity, delay: i * 0.4 }}
              className="absolute w-2 h-2 bg-indigo-400 rounded-full blur-[2px]"
            />
          ))}
        </div>
      </div>

      {/* FOOTER DETAIL */}
      <div className="absolute bottom-10 w-full flex justify-between px-10 items-end pointer-events-none opacity-20">
         <div className="text-[10px] text-white font-mono tracking-widest uppercase">Encryption: AES-256</div>
         <div className="text-[10px] text-white font-mono tracking-widest uppercase">Global Availability</div>
      </div>
    </section>
  );
};

export default ContactHero;
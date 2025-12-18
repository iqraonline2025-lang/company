<<<<<<< HEAD
import React, { useState } from "react";
=======
import React from "react";
>>>>>>> e8d5e685ef16b3f7791a58e0cb28427671686f85
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

export default function QuranHero() {
  const navigate = useNavigate();
<<<<<<< HEAD
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    const x = (clientX / window.innerWidth - 0.5) * 20;
    const y = (clientY / window.innerHeight - 0.5) * 20;
    setMousePos({ x, y });
  };

  // Animation Variants
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 }
    }
  };

  const fadeInUp = {
    hidden: { y: 60, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1, 
      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } 
    }
  };

  return (
    <section 
      onMouseMove={handleMouseMove}
      className="w-full relative min-h-screen flex flex-col justify-center overflow-hidden bg-[#030207]"
    >
      {/* --- CINEMATIC BACKGROUND --- */}
      <div className="absolute inset-0 z-0">
        <motion.div
          animate={{ x: mousePos.x, y: mousePos.y }}
          className="absolute inset-0 opacity-30 bg-cover bg-center grayscale scale-110"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=2000&q=80')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0018]/95 via-[#120822]/90 to-[#030207]" />
        
        {/* Subtle Islamic Geometry Pattern */}
        <div className="absolute inset-0 opacity-[0.03] bg-[url('https://www.transparenttextures.com/patterns/islamic-art.png')] mix-blend-overlay pointer-events-none" />
      </div>

      {/* --- CONTENT AREA --- */}
      <motion.div 
        variants={container}
        initial="hidden"
        animate="visible"
        className="relative z-10 w-full max-w-6xl mx-auto text-center px-6"
      >
        <motion.div variants={fadeInUp} className="mb-8 flex justify-center">
          <div className="px-5 py-1.5 rounded-full border border-purple-500/20 bg-purple-500/5 backdrop-blur-md">
            <span className="text-purple-300 text-[10px] tracking-[0.5em] uppercase font-bold">
              Sacred Knowledge
            </span>
          </div>
        </motion.div>

        {/* Masked Title Animation */}
        <div className="overflow-hidden mb-2">
          <motion.h1 
            variants={fadeInUp}
            className="text-6xl md:text-9xl font-black text-white leading-[0.9] tracking-tighter"
          >
            Online Quran Learning
          </motion.h1>
        </div>

        <div className="overflow-hidden">
          <motion.h1 
            variants={fadeInUp}
            className="text-5xl md:text-8xl font-light italic tracking-tight"
          >
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-200 via-indigo-300 to-blue-200 animate-shimmer">
              With Tajweed & Expert Teachers
            </span>
          </motion.h1>
        </div>

        <motion.p
          variants={fadeInUp}
          className="mt-10 text-gray-400 max-w-2xl mx-auto text-lg md:text-2xl font-light leading-relaxed"
=======
  return (
    <section className="w-full relative">
      {/* Gradient Background */}
      <div
        className="absolute inset-0 bg-gradient-to-br 
        from-[#0a0018] via-[#1c0b32] via-[#1f2650] to-[#cdd5ff] opacity-95"
      />

      {/* Islamic / Quran-Themed Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center mix-blend-overlay opacity-70"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=2000&q=80')",
        }}
      ></div>

      {/* Main Content */}
      <div className="relative w-full max-w-5xl mx-auto pt-50 pb-40 text-center px-6">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-4xl md:text-6xl font-bold leading-tight 
            bg-gradient-to-r from-purple-200 via-blue-200 to-white 
            text-transparent bg-clip-text drop-shadow-lg"
        >
          Online Quran Learning
          <br />
          <span className="text-white">With Tajweed & Expert Teachers</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="mt-4 text-white/85 max-w-2xl mx-auto text-lg"
>>>>>>> e8d5e685ef16b3f7791a58e0cb28427671686f85
        >
          Master the Quran with certified instructors, tajweed rules, and
          one-on-one guidance — all in a peaceful and spiritual environment.
        </motion.p>

<<<<<<< HEAD
        <motion.div variants={fadeInUp} className="mt-12 flex justify-center">
          <button
            className="group relative px-12 py-5 bg-white text-black font-black uppercase text-xs tracking-[0.2em] rounded-full overflow-hidden transition-all hover:scale-105 active:scale-95 shadow-[0_0_30px_rgba(255,255,255,0.1)]"
            onClick={() => navigate("/contact")}
          >
            <span className="relative z-10">Start Your Quran Journey</span>
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-indigo-600 translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
          </button>
        </motion.div>
      </motion.div>

      {/* --- FEATURE CARDS WITH REVEAL --- */}
      <div className="relative z-20 w-full max-w-7xl mx-auto px-6 mt-32">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
=======
        <motion.button
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="mt-8 px-10 py-4 rounded-full text-white text-lg font-semibold 
            shadow-xl transition-all
            bg-gradient-to-r from-purple-600 to-blue-600 hover:opacity-90"
          onClick={() => navigate("/contact")}
        >
          Start Your Quran Journey
        </motion.button>
      </div>

      {/* Feature Cards */}
      <div className="absolute -bottom-20 w-full flex justify-center">
        <div className="bg-white/90 backdrop-blur-xl shadow-2xl rounded-2xl px-6 py-6 flex gap-4 sm:gap-8">
>>>>>>> e8d5e685ef16b3f7791a58e0cb28427671686f85
          {[
            { name: "One-on-One Classes", desc: "Personal instructor" },
            { name: "Tajweed Focused", desc: "Perfect pronunciation" },
            { name: "Flexible Timings", desc: "Learn at your pace" },
            { name: "Certified Teachers", desc: "Experienced Qaris" },
          ].map((item, i) => (
<<<<<<< HEAD
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
              className="group bg-white/[0.03] backdrop-blur-xl border border-white/10 p-10 rounded-[2.5rem] hover:border-purple-500/40 transition-all duration-700"
            >
              <h3 className="font-bold text-xl text-white mb-2 tracking-tight group-hover:text-purple-300 transition-colors">
                {item.name}
              </h3>
              <p className="text-gray-500 text-sm font-medium">
                {item.desc}
              </p>
              <div className="mt-6 w-12 h-[1px] bg-white/20 group-hover:w-full group-hover:bg-purple-500 transition-all duration-700" />
            </motion.div>
=======
            <div
              key={i}
              className="bg-white rounded-xl shadow-lg px-5 py-4 text-center min-w-[130px]"
            >
              <h3 className="font-bold text-lg bg-gradient-to-r from-purple-600 to-blue-600 text-transparent bg-clip-text">
                {item.name}
              </h3>
              <p className="text-gray-700 text-sm font-medium mt-1">
                {item.desc}
              </p>
            </div>
>>>>>>> e8d5e685ef16b3f7791a58e0cb28427671686f85
          ))}
        </div>
      </div>

<<<<<<< HEAD
      {/* Decorative Light Rays */}
      <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-purple-500/5 blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-indigo-500/5 blur-[150px] rounded-full pointer-events-none" />
    </section>
  );
}
=======
      {/* Spacer */}
      <div className="h-32"></div>
    </section>
  );
}
>>>>>>> e8d5e685ef16b3f7791a58e0cb28427671686f85

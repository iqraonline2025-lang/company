<<<<<<< HEAD
import React, { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { useNavigate } from "react-router-dom";

const CinematicHero = () => {
  const container = useRef();
  const navigate = useNavigate();

  useGSAP(() => {
    // 1. Text reveal with "Char Stagger" feel
    gsap.from(".hero-title", {
      y: 150,
      opacity: 0,
      rotateX: -45,
      stagger: 0.2,
      duration: 1.5,
      ease: "expo.out"
    });

    // 2. Floating 3D "Brackets" (The eye-catching IT element)
    gsap.to(".floating-bracket", {
      y: "random(-30, 30)",
      x: "random(-20, 20)",
      rotation: "random(-15, 15)",
      duration: 3,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
      stagger: 0.5
    });

    // 3. Scanner line effect
    gsap.to(".scanner-line", {
      top: "100%",
      duration: 4,
      repeat: -1,
      ease: "none"
    });
  }, { scope: container });

  return (
    <section ref={container} className="relative w-full h-screen bg-[#030303] overflow-hidden flex items-center justify-center">
      
      {/* --- BACKGROUND LAYER --- */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Massive Purple/Blue Nebula Glows */}
        <div className="absolute top-[-10%] left-[-10%] w-[70vw] h-[70vw] bg-purple-600/20 blur-[150px] rounded-full" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[60vw] h-[60vw] bg-blue-600/15 blur-[150px] rounded-full" />
        
        {/* Cinematic Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:60px_60px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]" />
      </div>

      <div className="relative z-10 w-full max-w-7xl px-8 flex flex-col items-center text-center">
        
        {/* FLOATING IT ELEMENTS (Replaces standard image) */}
        <div className="absolute inset-0 w-full h-full pointer-events-none">
            <span className="floating-bracket absolute top-[20%] left-[15%] text-8xl font-thin text-purple-500/40 select-none">{"{"}</span>
            <span className="floating-bracket absolute bottom-[25%] right-[12%] text-9xl font-thin text-blue-500/30 select-none">{"}"}</span>
            <span className="floating-bracket absolute top-[15%] right-[20%] text-6xl font-thin text-indigo-500/20 select-none">{"</>"}</span>
        </div>

        {/* MAIN CONTENT */}
        <div className="relative">
          <motion_div className="mb-4 inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-[10px] text-gray-400 uppercase tracking-[0.3em] font-bold">Protocol: Online</span>
          </motion_div>

          <h1 className="hero-title text-[clamp(3.5rem,10vw,8.5rem)] font-black text-white leading-[0.85] tracking-tighter uppercase italic">
            Design <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-b from-white via-white/80 to-purple-500/50">
                The Future
            </span>
          </h1>

          <p className="hero-title mt-8 text-gray-400 text-lg md:text-2xl max-w-2xl mx-auto font-light leading-relaxed">
            I craft digital ecosystems where <span className="text-white font-medium">high-performance code</span> meets the timeless art of <span className="text-white font-medium">Quranic wisdom</span>.
          </p>

          <div className="hero-title mt-12 flex flex-wrap justify-center gap-6">
            <button 
                onClick={() => navigate("/services")}
                className="relative overflow-hidden group px-12 py-5 bg-white text-black font-black text-sm uppercase tracking-widest rounded-sm transition-transform hover:scale-105"
            >
              <span className="relative z-10">Launch Project</span>
              <div className="scanner-line absolute left-0 top-0 w-full h-[2px] bg-purple-500 blur-sm z-20" />
              <div className="absolute inset-0 bg-purple-600 translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
            </button>

            <button 
                onClick={() => navigate("/quranteaching")}
                className="px-12 py-5 border border-white/20 text-white font-bold text-sm uppercase tracking-widest hover:bg-white hover:text-black transition-all duration-500 rounded-sm"
            >
              Learn Quran
            </button>
          </div>
        </div>
      </div>

      {/* SIDEBAR DECORATION */}
      <div className="absolute right-10 top-1/2 -translate-y-1/2 hidden xl:flex flex-col gap-20 items-center opacity-30">
        <p className="rotate-90 text-[10px] text-white tracking-[1em] uppercase whitespace-nowrap">Scroll to explore</p>
        <div className="w-px h-32 bg-gradient-to-b from-transparent via-white to-transparent" />
      </div>

=======
import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const PortHero = () => {
  const navigate = useNavigate();
  return (
    <section className="relative w-full min-h-screen flex items-center justify-center px-6 md:px-16 bg-gradient-to-br from-[#5b1bcb] via-[#1b2b75] via-40% via-black/90 to-white overflow-hidden">
      {/* Glow Effects */}
      <div className="absolute top-20 left-10 w-56 h-56 bg-purple-500/30 blur-3xl rounded-full"></div>
      <div className="absolute bottom-10 right-10 w-72 h-72 bg-blue-500/20 blur-3xl rounded-full"></div>

      <div className="relative w-full max-w-7xl grid md:grid-cols-2 gap-10 items-center z-10">
        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-center md:text-left"
        >
          <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight">
            Modern <span className="text-purple-300">Web Development</span>
            <br /> & Quran <span className="text-blue-300">Teaching</span>
          </h1>

          <p className="mt-6 text-gray-200 text-lg max-w-lg">
            Combining creativity and spirituality — I build clean, modern web
            experiences and teach Quran with proper Tajweed for learners of all
            levels.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <motion.a
              whileHover={{ scale: 1.05 }}
              href="#web"
              className="px-6 py-3 rounded-xl bg-purple-600 text-white font-medium shadow-lg"
              onClick={() => navigate("/services")}
            >
              Web Development
            </motion.a>

            <motion.a
              whileHover={{ scale: 1.05 }}
              href="#quran"
              className="px-6 py-3 rounded-xl bg-blue-600 text-white font-medium shadow-lg"
              onClick={() => navigate("/quranteaching")}
            >
              Quran Teaching
            </motion.a>
          </div>
        </motion.div>

        {/* RIGHT IMAGE */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="w-full flex justify-center"
        >
          <img
            src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=900&q=80"
            alt="Portfolio"
            className="w-full max-w-md rounded-3xl shadow-2xl border border-white/20"
          />
        </motion.div>
      </div>
>>>>>>> e8d5e685ef16b3f7791a58e0cb28427671686f85
    </section>
  );
};

<<<<<<< HEAD
export default CinematicHero;
=======
export default PortHero;
>>>>>>> e8d5e685ef16b3f7791a58e0cb28427671686f85

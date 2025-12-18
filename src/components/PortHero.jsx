import React, { useRef } from "react";
import { motion } from "framer-motion"; // Used for smaller UI elements
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { useNavigate } from "react-router-dom";

const CinematicHero = () => {
  const container = useRef();
  const navigate = useNavigate();

  useGSAP(() => {
    // 1. Text reveal with high-end stagger
    gsap.from(".hero-title", {
      y: 150,
      opacity: 0,
      rotateX: -45,
      stagger: 0.2,
      duration: 1.5,
      ease: "expo.out"
    });

    // 2. Floating 3D "Brackets" (Symbolizing Web Dev)
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

    // 3. Scanner line effect inside the primary button
    gsap.to(".scanner-line", {
      top: "100%",
      duration: 4,
      repeat: -1,
      ease: "none"
    });
  }, { scope: container });

  return (
    <section ref={container} className="relative w-full h-screen bg-[#030303] overflow-hidden flex items-center justify-center px-6">
      
      {/* --- BACKGROUND LAYER --- */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Massive Purple/Blue Nebula Glows */}
        <div className="absolute top-[-10%] left-[-10%] w-[70vw] h-[70vw] bg-purple-600/20 blur-[150px] rounded-full" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[60vw] h-[60vw] bg-blue-600/15 blur-[150px] rounded-full" />
        
        {/* Cinematic Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:60px_60px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]" />
      </div>

      <div className="relative z-10 w-full max-w-7xl flex flex-col items-center text-center">
        
        {/* FLOATING DECORATIVE ELEMENTS */}
        <div className="absolute inset-0 w-full h-full pointer-events-none">
            <span className="floating-bracket absolute top-[20%] left-[5%] md:left-[15%] text-6xl md:text-8xl font-thin text-purple-500/40 select-none">{"{"}</span>
            <span className="floating-bracket absolute bottom-[25%] right-[5%] md:right-[12%] text-7xl md:text-9xl font-thin text-blue-500/30 select-none">{"}"}</span>
            <span className="floating-bracket absolute top-[15%] right-[10%] md:right-[20%] text-4xl md:text-6xl font-thin text-indigo-500/20 select-none">{"</>"}</span>
        </div>

        {/* MAIN CONTENT */}
        <div className="relative">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="mb-4 inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 backdrop-blur-md"
          >
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-[10px] text-gray-400 uppercase tracking-[0.3em] font-bold">System Status: Online</span>
          </motion.div>

          <h1 className="hero-title text-[clamp(2.5rem,8vw,7rem)] font-black text-white leading-[0.9] tracking-tighter uppercase italic">
            Modern <span className="text-purple-300 italic">Web</span> <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-b from-white via-white/80 to-blue-500/50">
                & Quranic Art
            </span>
          </h1>

          <p className="hero-title mt-8 text-gray-400 text-lg md:text-2xl max-w-2xl mx-auto font-light leading-relaxed">
            Where <span className="text-white font-medium">high-performance code</span> meets the timeless depth of <span className="text-white font-medium">Quranic wisdom</span>. I build digital futures and teach ancient truths.
          </p>

          <div className="hero-title mt-12 flex flex-wrap justify-center gap-6">
            {/* Primary Action */}
            <button 
                onClick={() => navigate("/services")}
                className="relative overflow-hidden group px-10 py-5 bg-white text-black font-black text-xs uppercase tracking-widest rounded-sm transition-transform hover:scale-105"
            >
              <span className="relative z-10">Web Services</span>
              <div className="scanner-line absolute left-0 top-0 w-full h-[2px] bg-purple-500 blur-sm z-20" />
              <div className="absolute inset-0 bg-purple-600 translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
            </button>

            {/* Secondary Action */}
            <button 
                onClick={() => navigate("/quranteaching")}
                className="px-10 py-5 border border-white/20 text-white font-bold text-xs uppercase tracking-widest hover:bg-white hover:text-black transition-all duration-500 rounded-sm"
            >
              Quran Teaching
            </button>
          </div>
        </div>
      </div>

      {/* SIDEBAR SCROLL INDICATOR */}
      <div className="absolute right-6 top-1/2 -translate-y-1/2 hidden xl:flex flex-col gap-20 items-center opacity-30">
        <p className="rotate-90 text-[10px] text-white tracking-[1em] uppercase whitespace-nowrap">Explore Narrative</p>
        <div className="w-px h-32 bg-gradient-to-b from-transparent via-white to-transparent" />
      </div>

    </section>
  );
};

export default CinematicHero;
import React, { useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useNavigate } from "react-router-dom";

const BACKGROUND_IMAGE_URL =
  "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2938&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

const AboutHero = () => {
  const navigate = useNavigate();
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  // Handle Parallax Mouse Movement
  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    const moveX = (clientX - window.innerWidth / 2) / 50;
    const moveY = (clientY - window.innerHeight / 2) / 50;
    setMousePos({ x: moveX, y: moveY });
  };

  return (
    <section 
      onMouseMove={handleMouseMove}
      className="relative w-full h-screen flex items-center justify-center overflow-hidden bg-[#050505]"
    >
      {/* 1. Cinematic Background with Mouse Parallax */}
      <motion.div
        animate={{ x: mousePos.x, y: mousePos.y, scale: 1.1 }}
        transition={{ type: "tween", ease: "linear", duration: 0.2 }}
        className="absolute inset-0 filter grayscale contrast-125 opacity-40"
        style={{
          backgroundImage: `url('${BACKGROUND_IMAGE_URL}')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      {/* 2. Advanced Overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black" />
      <div className="absolute inset-0 bg-radial-at-c from-purple-600/20 via-transparent to-transparent" />
      
      {/* 3. Floating Background Accents (The 'High-Level' Detail) */}
      <motion.div 
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="absolute -top-1/4 -right-1/4 w-[600px] h-[600px] border border-purple-500/10 rounded-full"
      />
      <motion.div 
        animate={{ rotate: -360 }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        className="absolute -bottom-1/4 -left-1/4 w-[800px] h-[800px] border border-purple-500/5 rounded-full"
      />

      {/* 4. Main Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
        
        {/* Subtle Tagline */}
        <motion.span 
          initial={{ opacity: 0, letterSpacing: "0px" }}
          animate={{ opacity: 1, letterSpacing: "4px" }}
          transition={{ duration: 1, delay: 0.5 }}
          className="text-purple-400 text-xs font-bold uppercase mb-4 block"
        >
          ESTABLISHED IN INNOVATION
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 40, skewY: 2 }}
          animate={{ opacity: 1, y: 0, skewY: 0 }}
          transition={{ duration: 1, ease: "circOut" }}
          className="text-6xl md:text-8xl font-black text-white mb-8 leading-[0.9] tracking-tighter"
        >
          Our Story: <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-indigo-300 to-purple-600">
            Architects of the Modern Web
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="text-lg md:text-2xl text-purple-100/70 mb-12 max-w-2xl mx-auto font-light leading-relaxed"
        >
          We are a collective of designers and engineers crafting
          high-performance, modern digital experiences that drive innovation and
          growth.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 1.2 }}
        >
          <button
            onClick={() => navigate("/portfolio")}
            className="group relative px-10 py-4 bg-white text-black font-bold rounded-full overflow-hidden transition-all hover:pr-14 active:scale-95"
          >
            <span className="relative z-10">See Our Mission</span>
            {/* Animated Arrow that appears on hover */}
            <span className="absolute right-6 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all">
              →
            </span>
            <div className="absolute inset-0 bg-purple-500 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
          </button>
        </motion.div>
      </div>

      {/* 5. Scroll Indicator Detail */}
      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-30"
      >
        <div className="w-[1px] h-12 bg-gradient-to-b from-purple-500 to-transparent" />
      </motion.div>
    </section>
  );
};

export default AboutHero;
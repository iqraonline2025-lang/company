import React, { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const BACKGROUND_IMAGE_URL =
  "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2938&auto=format&fit=crop";

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

  // Animation Variants for orchestrated entrance
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.3 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <section
      onMouseMove={handleMouseMove}
      className="relative w-full h-screen flex items-center justify-center overflow-hidden bg-[#050505]"
    >
      {/* 1. Cinematic Background with Mouse Parallax */}
      <motion.div
        animate={{ x: mousePos.x, y: mousePos.y, scale: 1.05 }}
        transition={{ type: "tween", ease: "linear", duration: 0.2 }}
        className="absolute inset-0 filter grayscale contrast-125 opacity-40"
        style={{
          backgroundImage: `url('${BACKGROUND_IMAGE_URL}')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      {/* 2. Overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black" />
      <div className="absolute inset-0 bg-black/40" />
      <div className="absolute inset-0 bg-gradient-to-tr from-purple-900/20 via-transparent to-purple-900/20" />

      {/* 3. Floating Background Accents */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        className="absolute -top-1/4 -right-1/4 w-[600px] h-[600px] border border-purple-500/10 rounded-full pointer-events-none"
      />
      <motion.div
        animate={{ rotate: -360 }}
        transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
        className="absolute -bottom-1/4 -left-1/4 w-[800px] h-[800px] border border-purple-500/5 rounded-full pointer-events-none"
      />

      {/* 4. Hero Content */}
      <motion.div
        className="relative z-10 max-w-6xl mx-auto px-6 text-center flex flex-col items-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.span
          variants={itemVariants}
          className="text-purple-400 text-xs font-bold uppercase mb-4 tracking-[0.4em] block"
        >
          ESTABLISHED IN INNOVATION
        </motion.span>

        <motion.h1
          className="text-5xl md:text-8xl font-black text-white mb-8 leading-[0.9] tracking-tighter"
          variants={itemVariants}
        >
          Our Story: <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-indigo-300 to-purple-600">
            Architects of the Modern Web
          </span>
        </motion.h1>

        <motion.p
          className="text-lg md:text-2xl text-purple-100/70 mb-12 max-w-2xl mx-auto font-light leading-relaxed"
          variants={itemVariants}
        >
          We are a collective of designers and engineers crafting
          high-performance, modern digital experiences that drive innovation and
          growth.
        </motion.p>

        <motion.div variants={itemVariants}>
          <button
            onClick={() => navigate("/portfolio")}
            className="group relative px-10 py-4 bg-white text-black font-bold rounded-full overflow-hidden transition-all hover:pr-14 active:scale-95"
          >
            <span className="relative z-10">See Our Mission</span>
            <span className="absolute right-6 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all">
              →
            </span>
            <div className="absolute inset-0 bg-purple-500 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
          </button>
        </motion.div>
      </motion.div>

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
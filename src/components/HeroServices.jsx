<<<<<<< HEAD
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { useRef, useState } from "react";

export default function HeroServices() {
  const navigate = useNavigate();
  const containerRef = useRef(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  // Handle subtle mouse parallax
  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    const { innerWidth, innerHeight } = window;
    const x = (clientX / innerWidth - 0.5) * 40;
    const y = (clientY / innerHeight - 0.5) * 40;
    setMousePos({ x, y });
  };

  return (
    <div 
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className="relative min-h-screen w-full overflow-hidden bg-[#020205] text-white flex items-center pt-20 md:pt-0"
    >
      {/* ===== SUPER-GLOW BACKGROUND ===== */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3] 
          }}
          transition={{ duration: 10, repeat: Infinity }}
          className="absolute top-[-10%] left-[-10%] w-[400px] md:w-[800px] h-[400px] md:h-[800px] bg-purple-900/40 blur-[120px] md:blur-[180px] rounded-full"
        />
        <motion.div
          animate={{ 
            scale: [1.2, 1, 1.2],
            opacity: [0.2, 0.4, 0.2] 
          }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute bottom-[-10%] right-[-10%] w-[350px] md:w-[700px] h-[350px] md:h-[700px] bg-indigo-900/30 blur-[150px] md:blur-[200px] rounded-full"
        />
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03] mix-blend-overlay"></div>
      </div>

      {/* Grid: 1 column on mobile, 2 on desktop */}
      <div className="relative z-20 max-w-7xl mx-auto px-6 md:px-8 w-full grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
        
        {/* ===== LEFT CONTENT ===== */}
        <div className="flex flex-col justify-center space-y-6 md:space-y-8 mt-10 md:mt-0">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-3"
          >
            <span className="w-8 md:w-12 h-[1px] bg-purple-500"></span>
            <span className="text-[10px] md:text-xs tracking-[3px] md:tracking-[5px] text-purple-400 font-bold uppercase">
              The Digital Frontier
            </span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h1 className="text-5xl md:text-8xl font-black leading-[1] md:leading-[0.9] tracking-tighter">
              Build <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-indigo-400 to-blue-500">
                Next-Gen
              </span>
            </h1>
            <p className="mt-4 md:mt-6 text-gray-400 max-w-md text-base md:text-xl font-light leading-relaxed">
              Architecting immersive web experiences with <span className="text-white font-medium">Next.js 14</span> and <span className="text-white font-medium">Framer Motion</span>.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="flex flex-wrap gap-4 md:gap-5"
          >
            <button
              className="relative group px-8 md:px-10 py-3 md:py-4 bg-white text-black font-black uppercase text-[10px] md:text-xs tracking-widest rounded-full overflow-hidden transition-transform hover:scale-105"
              onClick={() => navigate("/contact")}
            >
              <span className="relative z-10">Start Project</span>
              <div className="absolute inset-0 bg-purple-600 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
            </button>
            <button
              className="px-8 md:px-10 py-3 md:py-4 border border-white/10 hover:border-purple-500/50 hover:bg-purple-500/5 rounded-full font-bold text-[10px] md:text-xs uppercase tracking-widest transition-all"
=======
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
export default function HeroServices() {
  const navigate = useNavigate();
  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-[#05050a] text-white">
      {/* ===== BACKGROUND GRADIENT BLOBS ===== */}
      <motion.div
        animate={{ x: [0, 60, -40, 0], y: [0, -40, 40, 0] }}
        transition={{ repeat: Infinity, duration: 12 }}
        className="absolute top-[-200px] left-[-100px] w-[700px] h-[700px] bg-purple-600 opacity-40 blur-[180px] rounded-full"
      />

      <motion.div
        animate={{ x: [0, -50, 20, 0], y: [0, 40, -40, 0] }}
        transition={{ repeat: Infinity, duration: 10 }}
        className="absolute bottom-[-200px] right-[-200px] w-[600px] h-[600px] bg-indigo-600 opacity-30 blur-[200px] rounded-full"
      />

      {/* ===== FLOATING PARTICLES ===== */}
      {Array.from({ length: 30 }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-purple-300 rounded-full opacity-40"
          animate={{
            x: [0, Math.random() * 200 - 100],
            y: [0, Math.random() * 200 - 100],
            opacity: [0.2, 1, 0.2],
          }}
          transition={{ repeat: Infinity, duration: 5 + Math.random() * 5 }}
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
          }}
        />
      ))}

      {/* MAIN WRAPPER */}
      <div className="relative z-20 max-w-7xl mx-auto px-8 pt-32 grid md:grid-cols-2 gap-10">
        {/* ===== LEFT TEXT CONTENT ===== */}
        <div className="flex flex-col justify-center space-y-6">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-sm tracking-[4px] text-purple-300 font-semibold"
          >
            NEXT LEVEL WEB DEVELOPMENT
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-5xl md:text-6xl font-extrabold leading-tight"
          >
            We Build
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-500">
              Future-Ready Websites
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-gray-300 max-w-md text-lg"
          >
            Modern websites built with React, Next.js, Tailwind, and
            cutting-edge animations that elevate your brand and boost
            conversions.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex gap-4 pt-4"
          >
            <button
              className="bg-purple-600 hover:bg-purple-700 px-8 py-3 rounded-xl font-semibold shadow-xl transition"
              onClick={() => navigate("/contact")}
            >
              Lets's Start Project
            </button>
            <button
              className="border border-gray-500 hover:border-white px-8 py-3 rounded-xl font-semibold transition"
>>>>>>> e8d5e685ef16b3f7791a58e0cb28427671686f85
              onClick={() => navigate("/portfolio")}
            >
              View Work
            </button>
          </motion.div>
        </div>

<<<<<<< HEAD
        {/* ===== RIGHT CONTENT: 3D Floating Stack (Fixed for Mobile) ===== */}
        <div className="relative h-[300px] md:h-[500px] w-full flex items-center justify-center">
          {[1, 2, 3].map((layer, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: 50 }}
              animate={{ 
                opacity: 1, 
                x: mousePos.x * (i + 1) * 0.15, 
                y: mousePos.y * (i + 1) * 0.15 
              }}
              className="absolute w-[280px] sm:w-[350px] md:w-[500px] aspect-video rounded-2xl md:rounded-3xl border border-white/10 backdrop-blur-3xl shadow-2xl overflow-hidden group"
              style={{
                zIndex: 10 - i,
                // Adjusting the vertical overlap for smaller screens
                top: `${10 + (i * 10)}%`, 
                left: `${5 + (i * 6)}%`,
                background: `linear-gradient(135deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0) 100%)`
              }}
            >
              <div className="px-3 md:px-5 py-2 md:py-3 flex gap-1 border-b border-white/5 bg-white/5">
                <div className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-red-500/40"></div>
                <div className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-yellow-500/40"></div>
                <div className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-green-500/40"></div>
              </div>

              <img
                src={i === 0 ? "https://images.unsplash.com/photo-1555066931-4365d14bab8c" : "https://images.unsplash.com/photo-1498050108023-c5249f4df085"}
                alt=""
                className="w-full h-full object-cover grayscale-[50%] group-hover:grayscale-0 transition-all duration-700 scale-110 group-hover:scale-100"
              />
            </motion.div>
          ))}
        </div>
      </div>

      {/* ===== MOUSE TRAILING LIGHT ===== */}
      <motion.div 
        className="pointer-events-none fixed top-0 left-0 w-[200px] md:w-[400px] h-[200px] md:h-[400px] bg-purple-500/10 blur-[80px] md:blur-[120px] rounded-full z-1"
        animate={{
          x: mousePos.x * 5,
          y: mousePos.y * 5
        }}
      />
    </div>
  );
}
=======
        {/* ===== RIGHT 3D INTERACTIVE STACK ===== */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="relative flex items-center justify-center"
        >
          {[1, 2, 3].map((layer, i) => (
            <motion.div
              key={i}
              className="absolute w-[450px] h-[280px] bg-[#0c0b14] rounded-2xl shadow-2xl overflow-hidden border border-white/10 backdrop-blur-xl"
              style={{
                transform: `translate(${i * 55}px, ${i * -35}px) rotateY(${
                  i * 12
                }deg)`,
              }}
              whileHover={{
                scale: 1.05,
                rotateY: 0,
              }}
              transition={{ type: "spring", stiffness: 200, damping: 20 }}
            >
              <img
                src="https://images.unsplash.com/photo-1498050108023-c5249f4df085"
                alt=""
                className="w-full h-full object-cover opacity-90"
              />
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* ===== SCROLL INDICATOR ===== */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 1.4 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 w-7 h-12 rounded-full border border-purple-400 flex items-center justify-center"
      >
        <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
      </motion.div>
    </div>
  );
}
>>>>>>> e8d5e685ef16b3f7791a58e0cb28427671686f85

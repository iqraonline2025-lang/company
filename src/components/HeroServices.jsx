import { motion } from "framer-motion";
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
      className="relative min-h-screen w-full overflow-hidden bg-[#05050a] text-white flex items-center pt-20 md:pt-0"
    >
      {/* ===== BACKGROUND GRADIENT BLOBS ===== */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          animate={{ x: [0, 60, -40, 0], y: [0, -40, 40, 0], scale: [1, 1.1, 1] }}
          transition={{ repeat: Infinity, duration: 12, ease: "linear" }}
          className="absolute top-[-10%] left-[-10%] w-[400px] md:w-[800px] h-[400px] md:h-[800px] bg-purple-600 opacity-30 blur-[120px] md:blur-[180px] rounded-full"
        />
        <motion.div
          animate={{ x: [0, -50, 20, 0], y: [0, 40, -40, 0], scale: [1.1, 1, 1.1] }}
          transition={{ repeat: Infinity, duration: 10, ease: "linear" }}
          className="absolute bottom-[-10%] right-[-10%] w-[350px] md:w-[700px] h-[350px] md:h-[700px] bg-indigo-600 opacity-20 blur-[150px] md:blur-[200px] rounded-full"
        />
        {/* Subtle Noise Texture */}
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03] mix-blend-overlay"></div>
      </div>

      {/* ===== MAIN WRAPPER ===== */}
      <div className="relative z-20 max-w-7xl mx-auto px-6 md:px-8 w-full grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
        
        {/* ===== LEFT CONTENT: Typography ===== */}
        <div className="flex flex-col justify-center space-y-6 md:space-y-8 mt-10 md:mt-0">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-3"
          >
            <span className="w-8 md:w-12 h-[1px] bg-purple-500"></span>
            <span className="text-[10px] md:text-xs tracking-[4px] text-purple-300 font-bold uppercase">
              Next Level Web Development
            </span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h1 className="text-5xl md:text-7xl font-black leading-[1.1] tracking-tighter">
              We Build <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-indigo-400 to-blue-500">
                Future-Ready Sites
              </span>
            </h1>
            <p className="mt-4 md:mt-6 text-gray-400 max-w-md text-base md:text-lg font-light leading-relaxed">
              Modern websites built with <span className="text-white">Next.js</span> and 
              cutting-edge animations that elevate your brand and boost conversions.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="flex flex-wrap gap-4"
          >
            <button
              className="relative group px-8 md:px-10 py-3 md:py-4 bg-purple-600 text-white font-bold uppercase text-[10px] md:text-xs tracking-widest rounded-xl overflow-hidden transition-all hover:scale-105"
              onClick={() => navigate("/contact")}
            >
              <span className="relative z-10">Start Project</span>
              <div className="absolute inset-0 bg-purple-700 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
            </button>
            <button
              className="px-8 md:px-10 py-3 md:py-4 border border-gray-500 hover:border-white rounded-xl font-bold text-[10px] md:text-xs uppercase tracking-widest transition-all"
              onClick={() => navigate("/portfolio")}
            >
              View Work
            </button>
          </motion.div>
        </div>

        {/* ===== RIGHT CONTENT: 3D Floating Interactive Stack ===== */}
        <div className="relative h-[300px] md:h-[500px] w-full flex items-center justify-center">
          {[1, 2, 3].map((layer, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: 50, rotateY: 15 }}
              animate={{ 
                opacity: 1, 
                x: mousePos.x * (i + 1) * 0.15, 
                y: mousePos.y * (i + 1) * 0.15 
              }}
              whileHover={{ scale: 1.05, rotateY: 0, zIndex: 50 }}
              className="absolute w-[280px] sm:w-[350px] md:w-[450px] aspect-video rounded-2xl border border-white/10 backdrop-blur-3xl shadow-2xl overflow-hidden group cursor-pointer"
              style={{
                zIndex: 10 - i,
                top: `${15 + (i * 8)}%`, 
                left: `${5 + (i * 10)}%`,
                background: `#0c0b14`,
                perspective: "1000px"
              }}
            >
              {/* Window Controls */}
              <div className="px-3 md:px-5 py-2 md:py-3 flex gap-1.5 border-b border-white/5 bg-white/5">
                <div className="w-2 h-2 rounded-full bg-red-500/40"></div>
                <div className="w-2 h-2 rounded-full bg-yellow-500/40"></div>
                <div className="w-2 h-2 rounded-full bg-green-500/40"></div>
              </div>

              <img
                src={i === 0 ? "https://images.unsplash.com/photo-1555066931-4365d14bab8c" : "https://images.unsplash.com/photo-1498050108023-c5249f4df085"}
                alt="Project Preview"
                className="w-full h-full object-cover grayscale-[40%] group-hover:grayscale-0 transition-all duration-700"
              />
            </motion.div>
          ))}
        </div>
      </div>

      {/* ===== SCROLL INDICATOR ===== */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 1.4 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 w-6 h-10 rounded-full border border-purple-400 flex items-center justify-center hidden md:flex"
      >
        <div className="w-1.5 h-1.5 bg-purple-400 rounded-full"></div>
      </motion.div>
    </div>
  );
}
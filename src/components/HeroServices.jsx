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
              onClick={() => navigate("/portfolio")}
            >
              View Work
            </button>
          </motion.div>
        </div>

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

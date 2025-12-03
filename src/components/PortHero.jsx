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
    </section>
  );
};

export default PortHero;

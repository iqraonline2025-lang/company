import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const SingleBGSection = () => {
  const navigate = useNavigate("");
  // Animation variants for the fluid, slow-moving blobs
  const blobVariant = {
    animate: (i) => ({
      x: [0, 100 * (i % 2 === 0 ? 1 : -1), 0], // Move horizontally
      y: [0, 50 * (i % 2 === 0 ? -1 : 1), 0], // Move vertically
      rotate: [0, 360],
      scale: [1, 1.1, 1], // Subtle pulsing scale
    }),
  };

  return (
    // Deep Black Background
    <section className="relative w-full h-screen overflow-hidden bg-black flex items-center justify-center">
      {/* 1. Fluid Animated Blobs Container */}
      <div className="absolute inset-0">
        {/* Blob 1: Blue */}
        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-blue-600 opacity-20 blur-3xl mix-blend-screen"
          variants={blobVariant}
          custom={1}
          animate="animate"
          transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
        />

        {/* Blob 2: Purple */}
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] rounded-full bg-purple-600 opacity-20 blur-3xl mix-blend-screen"
          variants={blobVariant}
          custom={2}
          animate="animate"
          transition={{
            repeat: Infinity,
            duration: 30,
            ease: "linear",
            delay: 5,
          }}
        />

        {/* Blob 3: Pink/Magenta */}
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 rounded-full bg-pink-600 opacity-15 blur-3xl mix-blend-screen"
          variants={blobVariant}
          custom={3}
          animate="animate"
          transition={{
            repeat: Infinity,
            duration: 20,
            ease: "linear",
            delay: 10,
          }}
        />
      </div>

      {/* 2. Content Overlay (To ensure text is readable over the bright blobs) */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* 3. Hero Text (Clean and High-Contrast) */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 1.2, delay: 0.8 }}
        className="relative z-20 text-center px-6 md:px-0 max-w-4xl"
      >
        <h1 className="text-white text-6xl md:text-8xl font-extrabold tracking-tight drop-shadow-lg">
          The Art of <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-pink-500">
            Digital Flow
          </span>
        </h1>

        <p className="text-gray-300 mt-6 max-w-2xl mx-auto text-xl md:text-2xl font-light">
          We don't just build websites; we engineer fluid, high-conversion
          experiences that move.
        </p>

        <motion.button
          whileHover={{
            scale: 1.05,
            boxShadow: "0 0 30px rgba(236, 72, 153, 0.5)",
          }}
          whileTap={{ scale: 0.95 }}
          className="mt-10 bg-gradient-to-r from-pink-600 to-blue-500 text-white font-semibold py-4 px-10 rounded-full shadow-lg transition-all"
          onClick={() => navigate("/services")}
        >
          Discover Fluidity
        </motion.button>
      </motion.div>
    </section>
  );
};

export default SingleBGSection;

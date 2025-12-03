import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const BACKGROUND_IMAGE_URL =
  "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2938&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

// Animation Variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.3, delayChildren: 0.3 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 120, damping: 20 },
  },
};

const AboutHero = () => {
  const navigate = useNavigate();
  return (
    <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-black">
      {/* Background Image */}
      <div
        className="absolute inset-0 filter grayscale brightness-75"
        style={{
          backgroundImage: `url('${BACKGROUND_IMAGE_URL}')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      ></div>

      {/* Black + Purple Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>
      <div className="absolute inset-0 bg-gradient-to-tr from-purple-900/15 via-purple-700/10 to-purple-900/15"></div>

      {/* Hero Content */}
      <motion.div
        className="relative z-10 max-w-5xl mx-auto px-6 text-center flex flex-col items-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h1
          className="text-5xl md:text-6xl font-extrabold text-white mb-6 leading-tight"
          variants={itemVariants}
        >
          Our Story: <br />
          <span className="text-purple-400">Architects of the Modern Web</span>
        </motion.h1>

        <motion.p
          className="text-lg md:text-xl text-purple-200 mb-8 max-w-3xl"
          variants={itemVariants}
        >
          We are a collective of designers and engineers crafting
          high-performance, modern digital experiences that drive innovation and
          growth.
        </motion.p>

        <motion.a
          href="#mission"
          className="inline-block bg-purple-600 text-white font-semibold px-8 py-3 rounded-lg shadow-lg hover:bg-purple-500 transition transform hover:scale-105"
          variants={itemVariants}
          whileTap={{ scale: 0.95 }}
          onClick={() => navigate("/portfolio")}
        >
          See Our Mission
        </motion.a>
      </motion.div>
    </section>
  );
};

export default AboutHero;

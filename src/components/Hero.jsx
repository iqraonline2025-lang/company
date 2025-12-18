import React from 'react';
import styled from 'styled-components';
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

export default function HeroSection() {
  const navigate = useNavigate();
  const pageBg = "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1920&q=80";

  return (
    <HeroContainer className="relative w-full min-h-screen flex items-center justify-center bg-black overflow-hidden pt-48 pb-24">
      {/* 1. Full-page background image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${pageBg})` }}
      />

      {/* 2. Overlays */}
      <div className="absolute inset-0 bg-black/50"></div>
      <div
        className="absolute inset-0 z-0 opacity-40"
        style={{
          backgroundImage: "linear-gradient(to top right, rgba(79, 70, 229, 0.5), rgba(168, 85, 247, 0.5))",
        }}
      ></div>

      {/* 3. The Content Area */}
      <div className="relative z-10 w-full max-w-4xl px-6 text-center mx-auto overflow-hidden py-10">
        
        {/* THE SCANLINE - Moves across the entire text section */}
        <div className="scanline" />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-20"
        >
          <h1 className="text-4xl md:text-6xl font-black text-white drop-shadow-2xl tracking-tight">
            Build Modern Web Platforms
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
              With Integrity & Purpose
            </span>
          </h1>

          <p className="text-gray-200 mt-8 max-w-2xl mx-auto text-lg md:text-xl leading-relaxed font-medium drop-shadow-md">
            Professional web development services to turn your ideas into
            scalable, high-quality digital products. Also offering comprehensive
            Quranic and Islamic Studies programs.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-6 mt-12">
            <motion.button
              whileHover={{ scale: 1.05, translateY: -2 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => navigate("/services")}
              className="px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-500
                         text-white font-bold rounded-xl shadow-xl shadow-purple-500/20
                         hover:shadow-purple-500/40 transition-all duration-300 uppercase tracking-wider"
            >
              Explore Services
            </motion.button>
            
            <motion.button
              whileHover={{ scale: 1.05, translateY: -2 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => navigate("/quranteaching")}
              className="px-8 py-4 border-2 border-blue-400/50 text-blue-100 backdrop-blur-sm
                         rounded-xl hover:bg-blue-400 hover:text-white
                         transition-all duration-300 font-bold uppercase tracking-wider"
            >
              Start Learning
            </motion.button>
          </div>
        </motion.div>
      </div>
    </HeroContainer>
  );
}

const HeroContainer = styled.section`
  /* The moving scanline beam */
  .scanline {
    position: absolute;
    top: -100%;
    left: 0;
    width: 100%;
    height: 120px;
    background: linear-gradient(
      to bottom,
      transparent 0%,
      rgba(255, 255, 255, 0.02) 40%,
      rgba(255, 255, 255, 0.4) 50%,
      rgba(255, 255, 255, 0.02) 60%,
      transparent 100%
    );
    z-index: 15;
    pointer-events: none;
    animation: scanline-move 5s linear infinite;
    filter: blur(2px);
  }

  @keyframes scanline-move {
    0% { top: -20%; opacity: 0; }
    10% { opacity: 1; }
    90% { opacity: 1; }
    100% { top: 100%; opacity: 0; }
  }

  &:hover .scanline {
    animation-duration: 2s;
    background: linear-gradient(
      to bottom,
      transparent 0%,
      rgba(168, 85, 247, 0.1) 40%,
      rgba(255, 255, 255, 0.8) 50%,
      rgba(59, 130, 246, 0.1) 60%,
      transparent 100%
    );
  }
`;
import React from "react";
import { motion } from "framer-motion";

// This component presents the professional profile for Somma Maazin in a clean, light theme.
const AboutOryntix = () => {
  // Animation variants for the main section
  const sectionVariants = {
    hidden: { opacity: 0, y: 100 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        when: "beforeChildren",
        staggerChildren: 0.2,
      },
    },
  };

  // Animation variants for the individual cards/points
  const cardVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { type: "spring", stiffness: 100 },
    },
  };

  return (
    <div className="min-h-screen bg-gray-50 p-8 font-inter flex items-center justify-center">
      <motion.section
        id="somma-about"
        className="max-w-6xl w-full p-12 bg-white text-gray-900 rounded-3xl shadow-2xl shadow-gray-300/50 border border-gray-100"
        variants={sectionVariants}
        initial="hidden"
        animate="visible"
      >
        <h1 className="text-6xl font-extrabold text-center mb-4 text-gray-800 tracking-tight">
          Iqra Online
        </h1>
        <p className="text-2xl text-center mb-16 text-indigo-600 font-medium">
          Full Stack Developer & Digital Architect
        </p>

        <div className="grid md:grid-cols-3 gap-10 text-left">
          {/* Value Proposition 1: Agility */}
          <motion.div
            className="p-8 bg-gray-50 rounded-xl border-t-4 border-indigo-500 shadow-lg hover:shadow-xl transition-shadow"
            variants={cardVariants}
          >
            <div className="text-4xl font-extrabold text-indigo-600 mb-4">
              <i className="fas fa-layer-group mr-2"></i> Agile Mastery
            </div>
            <p className="text-gray-700">
              I utilize a flexible, iterative development process, ensuring
              continuous feedback and rapid adaptation to evolving project
              requirements in dynamic environments.
            </p>
          </motion.div>

          {/* Value Proposition 2: Performance */}
          <motion.div
            className="p-8 bg-gray-50 rounded-xl border-t-4 border-cyan-500 shadow-lg hover:shadow-xl transition-shadow"
            variants={cardVariants}
          >
            <div className="text-4xl font-extrabold text-cyan-600 mb-4">
              <i className="fas fa-tachometer-alt mr-2"></i> Performance First
            </div>
            <p className="text-gray-700">
              Every digital solution is architected for speed and high
              scalability. My focus is on optimal infrastructure and superior
              Core Web Vitals for global reach.
            </p>
          </motion.div>

          {/* Value Proposition 3: Design */}
          <motion.div
            className="p-8 bg-gray-50 rounded-xl border-t-4 border-green-500 shadow-lg hover:shadow-xl transition-shadow"
            variants={cardVariants}
          >
            <div className="text-4xl font-extrabold text-green-600 mb-4">
              <i className="fas fa-user-check mr-2"></i> User-Centricity
            </div>
            <p className="text-gray-700">
              The end-user experience is the core objective. I focus on creating
              intuitive, accessible interfaces that drive adoption, conversion,
              and long-term engagement.
            </p>
          </motion.div>
        </div>

        <motion.div
          className="mt-16 pt-8 border-t border-gray-200 text-center"
          variants={cardVariants}
        >
          <h3 className="text-3xl font-semibold mb-4 text-gray-800">
            My Expertise
          </h3>
          <p className="text-xl text-gray-700 max-w-4xl mx-auto">
            I am built on a foundation of engineering excellence, specializing
            in cutting-edge JavaScript frameworks (React, Next.js, Node.js) and
            modern cloud architectures (AWS, Google Cloud). I don't just build
            functional components; I craft resilient, digital solutions designed
            for the future.
          </p>
        </motion.div>
      </motion.section>
    </div>
  );
};

export default AboutOryntix;

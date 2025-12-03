import React from "react";
import { motion } from "framer-motion";

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.3, delayChildren: 0.3 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 120, damping: 20 },
  },
};

const WhoWeAreMissionLight = () => {
  return (
    <motion.section
      id="mission"
      className="relative w-full bg-white text-gray-900 py-20 px-6"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-12 items-start">
        {/* Left Column: Who We Are */}
        <motion.div className="flex-1" variants={itemVariants}>
          <h2 className="text-4xl font-extrabold text-purple-600 mb-6">
            Who We Are
          </h2>
          <p className="text-lg text-gray-700 mb-4">
            We are a collective of designers and developers driven by passion,
            creativity, and innovation. Our focus is on crafting sustainable,
            high-quality digital experiences that combine modern design with
            powerful technology.
          </p>
          <p className="text-lg text-gray-700">
            With years of combined experience, we believe in collaboration,
            transparency, and building solutions that make an impact. Every
            project we take on is treated with meticulous attention to detail,
            ensuring excellence from concept to delivery.
          </p>
        </motion.div>

        {/* Right Column: Mission */}
        <motion.div className="flex-1" variants={itemVariants}>
          <h2 className="text-4xl font-extrabold text-purple-600 mb-6">
            Our Mission
          </h2>
          <p className="text-lg text-gray-700 mb-4">
            Our mission is to empower businesses and individuals with
            cutting-edge digital solutions. We aim to bridge the gap between
            ideas and execution by delivering websites, applications, and
            platforms that are intuitive, scalable, and aesthetically striking.
          </p>
          <p className="text-lg text-gray-700">
            By embracing innovation and continuously refining our skills, we
            strive to stay ahead of the curve. Our ultimate goal is to leave a
            lasting impression through the products we build and the experiences
            we create for our users.
          </p>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default WhoWeAreMissionLight;

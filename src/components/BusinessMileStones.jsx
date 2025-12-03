import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

// --- 1. UPDATED DATA STRUCTURE: Professional Capabilities (Content remains the same) ---
const SKILLS = [
  {
    name: "System Architecture",
    icon: "🏗️",
    description:
      "Designing scalable, high-availability microservices and component libraries using cloud-native patterns.",
    color: "text-purple-400",
    gradient: "from-purple-400",
  },
  {
    name: "Performance Optimization",
    icon: "⚡",
    description:
      "Achieving near-instantaneous load times (Core Web Vitals) through bundling, caching, and infrastructure tuning.",
    color: "text-yellow-400",
    gradient: "from-yellow-400",
  },
  {
    name: "DevOps & CI/CD",
    icon: "⚙️",
    description:
      "Automating deployment pipelines (GitHub Actions/GitLab CI) and managing infrastructure as code (IaC).",
    color: "text-sky-400",
    gradient: "from-sky-400",
  },
  {
    name: "Cross-Functional Leadership",
    icon: "🤝",
    description:
      "Mentoring engineers, driving technical standards, and aligning product goals with technical vision.",
    color: "text-pink-400",
    gradient: "from-pink-400",
  },
];

// Animation variants remain the same...
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { type: "spring", stiffness: 100, damping: 12 },
  },
};

// --- 2. NEW CARD COMPONENT: Minimalist Border-Animated Cards ---
const SkillCard = ({ skill }) => {
  // Define the main accent color for the card interaction (Purple/Fuchsia)
  const ACCENT_COLOR_HEX = "#9333ea"; // purple-600

  return (
    <motion.div
      variants={itemVariants}
      className="relative p-6 bg-zinc-900/50 rounded-xl overflow-hidden cursor-pointer backdrop-blur-sm"
      whileHover={{ y: -6 }} // Lift on hover
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    >
      {/* Dynamic Animated Border Layer */}
      <motion.div
        className="absolute inset-0 rounded-xl pointer-events-none"
        initial={{ borderWidth: "1px", opacity: 0.5, borderColor: "#3f3f46" }} // Initial gray border
        whileHover={{
          borderWidth: "3px", // Thicker border on hover
          opacity: 1,
          borderColor: ACCENT_COLOR_HEX, // Accent color on hover
          boxShadow: `0 0 15px 1px ${ACCENT_COLOR_HEX}`, // Subtle glow around the border
        }}
        transition={{ duration: 0.3 }}
      />

      {/* Background Fade/Glow (Subtle, internal) */}
      <motion.div
        className="absolute inset-0 transition-opacity rounded-xl opacity-0"
        style={{
          background: `radial-gradient(circle at 100% 0%, ${ACCENT_COLOR_HEX}33, transparent 70%)`,
        }}
        whileHover={{ opacity: 0.15 }}
      />

      <div className="relative z-10">
        <span className={`text-5xl mb-4 block ${skill.color}`}>
          {skill.icon}
        </span>
        <h3 className="text-xl font-bold mb-2 tracking-wide bg-clip-text text-transparent bg-gradient-to-r from-white to-purple-400">
          {skill.name}
        </h3>
        <p className="text-gray-400 text-sm">{skill.description}</p>
      </div>
    </motion.div>
  );
};

// --- 3. MAIN COMPONENT (Remains the same for theme/header) ---
export default function SkillsGrid() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <section className="relative bg-black min-h-screen py-20 px-4 sm:px-6 md:px-8 flex justify-center font-['Inter'] overflow-hidden">
      {/* Background Aura */}
      <motion.div
        className="absolute w-[650px] h-[650px] rounded-full blur-[160px] z-0"
        style={{
          background:
            "radial-gradient(circle, rgba(255,255,255,0.25), rgba(147,51,234,0.4), rgba(0,0,0,0.9))",
          left: "50%",
          top: "20%",
          transform: "translateX(-50%)",
        }}
        animate={{
          scale: [1, 1.05, 0.95, 1],
          opacity: [0.7, 0.9, 0.8, 0.7],
          borderRadius: ["50%", "45%", "52%", "50%"],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Dot Pattern */}
      <div
        className="absolute inset-0 opacity-10 bg-repeat z-0"
        style={{
          backgroundImage: "radial-gradient(#374151 0.5px, transparent 0.5px)",
          backgroundSize: "15px 15px",
        }}
      ></div>

      <div className="relative max-w-5xl w-full z-10">
        <header className="text-center mb-16">
          <motion.h1
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="text-6xl md:text-7xl font-black tracking-tighter mb-4 uppercase"
            style={{ textShadow: "0 0 18px #c084fc, 0 0 8px #a78bfa" }}
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-purple-300 to-purple-600">
              CORE CAPABILITIES
            </span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl font-mono text-purple-400 max-w-3xl mx-auto tracking-widest"
          >
            // ARCHITECTING SCALABLE SOLUTIONS
          </motion.p>
        </header>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {SKILLS.map((skill, i) => (
            <SkillCard key={i} skill={skill} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}

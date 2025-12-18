import React from "react";
import { motion } from "framer-motion";

const skills = [
  "HTML5",
  "CSS3",
  "JavaScript",
  "React",
  "Next.js",
  "Tailwind CSS",
  "Framer Motion",
  "Node.js",
  "Express.js",
  "MongoDB",
  "Git/GitHub",
  "REST APIs",
  "TypeScript",
  "Webpack",
  "SEO Optimization",
];

const BACKGROUND_IMAGE_URL =
  "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=2938&q=80";

// Animation variants
const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 120 } },
};

const SkillsTools = () => {
  return (
    <motion.section
      id="skills"
      className="relative w-full flex flex-col items-center justify-start py-16 px-6"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      style={{ minHeight: "500px" }}
    >
      {/* Background Image */}
      <div
        className="absolute top-0 left-0 w-full bg-cover bg-center filter brightness-75"
        style={{
          backgroundImage: `url('${BACKGROUND_IMAGE_URL}')`,
          height: "90%",
        }}
      ></div>

      {/* Gradient Overlay */}
      <div className="absolute top-0 left-0 w-full h-[90%] bg-gradient-to-tr from-black/60 via-purple-600/30 to-white/10"></div>

      {/* Content */}
      <div className="relative z-20 max-w-6xl mx-auto text-center mt-4">
        {/* mt-4 moves content slightly higher */}
        <motion.h2
          className="text-4xl md:text-5xl font-extrabold text-white mb-10"
          variants={itemVariants}
        >
          Skills & Tools
        </motion.h2>

        <motion.div
          className="flex flex-wrap justify-center gap-6"
          variants={containerVariants}
        >
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              className="bg-purple-600/30 text-white font-semibold px-4 py-2 rounded-lg shadow-md hover:bg-purple-600/50 transition"
              variants={itemVariants}
            >
              {skill}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default SkillsTools;

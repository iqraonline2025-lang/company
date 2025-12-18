import { motion } from "framer-motion";

export default function SkillFlow() {
  const skills = [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Node.js",
    "Tailwind",
    "Git & GitHub",
    "MongoDB",
    "Express.js",
    "API",
  ];

  return (
    // Light background section
    <div className="w-full overflow-hidden bg-white py-16">
      <h2 className="text-2xl font-bold text-center text-gray-800 mb-8">
        Technical Expertise
      </h2>
      <motion.div
        className="flex gap-10 whitespace-nowrap text-xl font-semibold"
        // Animation duration increased slightly for smoother flow
        animate={{ x: ["0%", "-100%"] }}
        transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
      >
        {skills.concat(skills).map((skill, i) => (
          <span
            key={i}
            // THEMED STYLING: Dark text, light background, purple/blue border accent
            className="px-6 py-2 
                       bg-white text-gray-800 
                       border border-gray-200 
                       rounded-full shadow-md
                       hover:border-purple-500 hover:text-purple-600 hover:shadow-lg transition-all duration-300"
          >
            {skill}
          </span>
        ))}
      </motion.div>
    </div>
  );
}

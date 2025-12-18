import React from "react";
import { motion } from "framer-motion";

const philosophyPoints = [
  {
    title: "Philosophy",
    desc: "I teach with a focus on understanding, reflection, and practical application.",
  },
  {
    title: "Why I Teach",
    desc: "To share knowledge respectfully, inspiring love for learning and spiritual growth.",
  },
  {
    title: "Qualifications",
    desc: "Certified in Quranic studies, Tajweed, and Islamic education, guiding learners of all ages.",
  },
];

const QuranPhilosophyRoundCards = () => {
  return (
    <section className="w-full bg-gray-50 py-24 px-6 flex justify-center">
      <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-3 gap-12 items-center">
        {philosophyPoints.map((point, index) => (
          <motion.div
            key={index}
            className="relative w-72 h-72 flex flex-col items-center justify-center bg-white rounded-full shadow-2xl p-8 text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
          >
            {/* Rotating Half-Border Around Card */}
            <motion.div
              className="absolute -inset-2 rounded-full border-4 border-purple-400 border-t-0 border-l-0 border-solid"
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 5, ease: "linear" }}
            ></motion.div>

            {/* Card Content */}
            <h3 className="text-2xl font-bold text-purple-600 mb-4 z-10">
              {point.title}
            </h3>
            <p className="text-gray-700 text-base leading-relaxed z-10">
              {point.desc}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default QuranPhilosophyRoundCards;

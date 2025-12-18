import React from "react";
import { motion } from "framer-motion";
import { FaBookOpen, FaLightbulb, FaHandsHelping } from "react-icons/fa";

const philosophyPoints = [
  {
    icon: <FaBookOpen size={36} className="text-purple-600 mb-4 mx-auto" />,
    title: "Deep Understanding",
    desc: "We guide learners to comprehend the Quranic verses profoundly, connecting meaning with context and practice.",
  },
  {
    icon: <FaLightbulb size={36} className="text-purple-600 mb-4 mx-auto" />,
    title: "Reflective Learning",
    desc: "Students are encouraged to reflect on teachings, fostering insight, mindfulness, and spiritual growth.",
  },
  {
    icon: <FaHandsHelping size={36} className="text-purple-600 mb-4 mx-auto" />,
    title: "Practical Application",
    desc: "Our methodology ensures learners implement Quranic principles in daily life, blending knowledge with action.",
  },
];

const QuranPhilosophyCards = () => {
  return (
    <section className="relative w-full bg-gray-50 py-20 px-6 flex justify-center">
      <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-3 gap-8">
        {philosophyPoints.map((point, index) => (
          <motion.div
            key={index}
            className="bg-white rounded-3xl shadow-xl p-8 text-center hover:shadow-purple-300 transition-shadow duration-500"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, delay: index * 0.2 }}
          >
            {point.icon}
            <h3 className="text-2xl font-bold text-purple-600 mb-4">
              {point.title}
            </h3>
            <p className="text-gray-700 text-lg leading-relaxed">
              {point.desc}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default QuranPhilosophyCards;

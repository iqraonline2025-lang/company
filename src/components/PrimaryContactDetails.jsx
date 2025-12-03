import React from "react";
import { motion } from "framer-motion";
import { Feather, Zap, Users } from "lucide-react"; // New icons for principles

// --- Data for Core Principles (Update these) ---
const details = [
  {
    title: "Design Excellence",
    detail:
      "Focusing on intuitive UI/UX and visual fidelity to drive user adoption.",
    icon: Feather, // Represents light, high-quality design
    iconColor: "text-purple-600",
    link: "#design-excellence", // Internal anchor link or descriptive link
  },
  {
    title: "Performance First",
    detail:
      "Architecting for speed, scalability, and efficiency using modern tech stacks.",
    icon: Zap, // Represents speed and efficiency
    iconColor: "text-blue-600",
    link: "#performance-first",
  },
  {
    title: "Client Partnership",
    detail:
      "Maintaining transparent communication and collaborative workflows from kickoff to launch.",
    icon: Users, // Represents team and collaboration
    iconColor: "text-orange-500",
    link: "#client-partnership",
  },
];

// --- Functional Component (Theme and structure remain identical) ---
const PrimaryContactDetails = () => {
  return (
    // Light background section
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-extrabold text-center text-gray-900 mb-12"
        >
          Our Guiding Principles
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-8">
          {details.map((item, index) => {
            const Icon = item.icon;
            return (
              // Note: Changed the outer element from <a> to <div> since the link is now descriptive,
              // but kept the inner <a> for flexibility, pointing it to '#'
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: index * 0.15 }}
                viewport={{ once: true, amount: 0.1 }}
                whileHover={{
                  y: -5,
                  boxShadow: "0 10px 20px rgba(0, 0, 0, 0.08)",
                }}
                className="bg-white p-6 rounded-xl shadow-lg border border-gray-100/80 transition-all duration-300 flex flex-col items-start text-left"
              >
                {/* Icon Container */}
                <div
                  className={`p-3 rounded-xl bg-white shadow-md mb-4 ${item.iconColor} ring-2 ring-gray-100`}
                >
                  <Icon className="w-6 h-6" />
                </div>

                {/* Title and Detail */}
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {item.title}
                </h3>

                {/* Descriptive Text / Link */}
                {/* Replaced functional links with descriptive text (using <a> tag for hover style) */}
                <a
                  href={item.link}
                  className="text-gray-600 text-lg hover:text-blue-500 transition-colors duration-200 break-words"
                  target="_self"
                >
                  {item.detail}
                </a>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default PrimaryContactDetails;

import { motion } from "framer-motion";
import { FaPalette, FaSitemap, FaTools } from "react-icons/fa";

const features = [
  {
    icon: <FaPalette size={28} />,
    title: "Wireframes & Prototypes",
    desc: "From low-fidelity wireframes to refined interactive prototypes crafted in Figma.",
  },
  {
    icon: <FaSitemap size={28} />,
    title: "User Flow Diagrams",
    desc: "Clear and strategic user journey mapping for intuitive experiences.",
  },
  {
    icon: <FaTools size={28} />,
    title: "Design Tools & Portfolio",
    desc: "Expertise in Figma, Adobe XD, and creating polished design portfolios.",
  },
];

export default function UIDesign() {
  return (
    <section className="relative py-20 px-6 bg-gradient-to-br from-[#fff8ff] to-[#f7f3ff]">
      {/* Soft pastel glow */}
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_top,_rgba(210,180,255,0.15),_transparent_70%)]" />

      <div className="relative max-w-7xl mx-auto">
        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center text-4xl font-bold text-gray-900 tracking-tight"
        >
          UI/UX Design
        </motion.h2>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          viewport={{ once: true }}
          className="text-center text-gray-600 max-w-2xl mx-auto text-lg mt-4"
        >
          Professional, modern, and user-centric design to elevate your digital
          experience.
        </motion.p>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-10 mt-20">
          {features.map((feature, idx) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.2, duration: 0.7 }}
              viewport={{ once: true }}
              className="bg-white/80 backdrop-blur-xl p-10 rounded-3xl shadow-md 
                         hover:shadow-xl border border-gray-100 transition-all hover:-translate-y-2"
            >
              {/* floating icon */}
              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{
                  repeat: Infinity,
                  duration: 3,
                  ease: "easeInOut",
                  delay: idx * 0.3,
                }}
                className="w-14 h-14 flex items-center justify-center mx-auto mb-6 rounded-2xl
                           bg-gradient-to-br from-pink-200 to-purple-200 shadow-md text-purple-700"
              >
                {feature.icon}
              </motion.div>

              <h3 className="text-xl font-semibold text-gray-900 text-center mb-3">
                {feature.title}
              </h3>

              <p className="text-gray-600 text-center leading-relaxed">
                {feature.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

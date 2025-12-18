import { motion } from "framer-motion";
import { FaPalette, FaFileAlt, FaSwatchbook } from "react-icons/fa";

const features = [
  {
    icon: <FaPalette size={32} />,
    title: "Logo Design",
    desc: "Custom logo creation that reflects your brand identity.",
  },
  {
    icon: <FaFileAlt size={32} />,
    title: "Style Guides",
    desc: "Comprehensive brand guidelines for consistent usage.",
  },
  {
    icon: <FaSwatchbook size={32} />,
    title: "Color Palette Design",
    desc: "Curated color schemes that evoke the right emotions.",
  },
];

export default function Branding() {
  return (
    <section className="relative py-20 px-6 bg-gradient-to-br from-[#fff8ff] to-[#f7f3ff]">
      {/* Soft glow */}
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_top,_rgba(255,182,255,0.15),_transparent_70%)]" />

      <div className="relative max-w-7xl mx-auto">
        {/* Title */}
        <motion.h2
          className="text-4xl font-bold text-center mb-6 text-gray-800 tracking-tight"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          Branding
        </motion.h2>

        {/* Subtitle */}
        <motion.p
          className="text-center text-gray-600 max-w-2xl mx-auto mb-16 text-lg"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
        >
          Beautiful, timeless and strategic branding that defines your identity.
        </motion.p>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-10">
          {features.map((feature, idx) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.2, duration: 0.7 }}
              viewport={{ once: true }}
              className="bg-white/80 backdrop-blur-xl p-10 rounded-3xl shadow-md hover:shadow-xl 
                         border border-gray-100 transition-all hover:-translate-y-2"
            >
              {/* Icon bubble */}
              <div
                className="w-16 h-16 mx-auto mb-6 flex items-center justify-center rounded-2xl
                           bg-gradient-to-br from-pink-200 to-purple-200 shadow-md text-purple-700"
              >
                {feature.icon}
              </div>

              <h3 className="text-2xl font-semibold text-gray-800 text-center mb-3">
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

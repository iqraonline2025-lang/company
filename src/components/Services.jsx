import {
  FaLaptopCode,
  FaPaintBrush,
  FaSearch,
  FaPalette,
  FaTools,
  FaBook,
} from "react-icons/fa";
import { motion } from "framer-motion";

const services = [
  {
    icon: <FaLaptopCode size={36} className="text-blue-400" />, // Added text color
    title: "Web Development",
    desc: "Full‑stack, maintainable web apps & APIs.",
    ringClass: "ring-blue-500/50",
  },
  {
    icon: <FaPaintBrush size={36} className="text-purple-400" />,
    title: "UI / UX Design",
    desc: "User‑centric design, prototypes & interfaces.",
    ringClass: "ring-purple-500/50",
  },
  {
    icon: <FaSearch size={36} className="text-green-400" />,
    title: "SEO",
    desc: "Optimization for visibility, speed & performance.",
    ringClass: "ring-green-500/50",
  },
  {
    icon: <FaPalette size={36} className="text-pink-400" />,
    title: "Branding",
    desc: "Logo, visual identity & brand guidelines.",
    ringClass: "ring-pink-500/50",
  },
  {
    icon: <FaTools size={36} className="text-orange-400" />,
    title: "Maintenance",
    desc: "Ongoing support, updates & performance tuning.",
    ringClass: "ring-orange-500/50",
  },
  {
    icon: <FaBook size={36} className="text-teal-400" />,
    title: "Quran Learning",
    desc: "Optional Quran guidance & spiritual learning.",
    small: true,
    ringClass: "ring-teal-500/50",
  },
];

export default function ServicesSoftGlassCentered() {
  return (
    // THEMED BACKGROUND: Using your signature purplish-black/blue gradient
    <section className="py-24 px-4 bg-gradient-to-br from-[#0e0a1f] via-[#1a0f2e] to-[#120a26]">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl font-extrabold text-center mb-16 
                     text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400"
        >
          Our Integrated Services
        </motion.h2>
      </div>

      <div className="max-w-6xl mx-auto grid gap-8 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1">
        {services.map((svc, idx) => (
          <motion.div
            key={svc.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1, duration: 0.7, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.1 }}
            className={`
              flex flex-col items-center p-8 rounded-2xl
              bg-white/5 backdrop-blur-md border border-white/20
              shadow-2xl shadow-black/30
              hover:bg-white/10 hover:border-blue-400/50 hover:scale-[1.03] // Enhanced hover effect
              transition-all duration-300
              ${svc.small ? "opacity-90" : "opacity-100"}
            `}
            // Added shadow-lg on hover using themed colors
            whileHover={{ boxShadow: "0 20px 30px rgba(79, 70, 229, 0.2)" }}
          >
            {/* ICON CONTAINER: Themed border/ring and colored icon */}
            <div
              className={`p-4 rounded-full mb-6 flex justify-center items-center 
                          ring-2 ${svc.ringClass} bg-white/10`} // Added themed ring and background
            >
              {svc.icon}
            </div>

            <h3 className="text-xl font-semibold text-white mb-3 text-center">
              {svc.title}
            </h3>
            <p className="text-gray-300 text-sm text-center">{svc.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

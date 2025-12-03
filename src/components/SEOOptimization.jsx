import { motion } from "framer-motion";
import { FaSearch, FaRocket, FaChartLine } from "react-icons/fa";

const features = [
  {
    icon: <FaSearch size={28} />,
    title: "On-Page SEO",
    desc: "Keyword targeting, metadata optimization, and content structuring for higher visibility.",
  },
  {
    icon: <FaRocket size={28} />,
    title: "Speed Optimization",
    desc: "Optimizing images, caching, code minimization, and faster loading performance.",
  },
  {
    icon: <FaChartLine size={28} />,
    title: "Core Web Vitals",
    desc: "Enhancing LCP, FID, and CLS to boost UX and search rankings.",
  },
];

export default function SEOOptimization() {
  return (
    <section className="relative py-24 px-6 bg-gradient-to-br from-[#1a102d] to-[#2b1850]">
      {/* Subtle Purple Glow Overlay */}
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.08),_transparent_60%)]" />

      <div className="relative max-w-7xl mx-auto">
        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center text-4xl font-bold text-white tracking-wide"
        >
          SEO & Performance
        </motion.h2>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          viewport={{ once: true }}
          className="text-center text-gray-300 text-lg max-w-2xl mx-auto mt-4"
        >
          Optimize your website to rank better, load faster, and perform
          flawlessly.
        </motion.p>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-10 mt-20">
          {features.map((feature, idx) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.2, duration: 0.7 }}
              viewport={{ once: true }}
              className="group rounded-2xl p-10 border border-white/10 
                         bg-white/5 backdrop-blur-xl shadow-xl 
                         transition-all duration-300 hover:-translate-y-3 
                         hover:shadow-purple-500/20"
            >
              {/* Floating Icon */}
              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{
                  repeat: Infinity,
                  duration: 3,
                  ease: "easeInOut",
                  delay: idx * 0.3,
                }}
                className="w-14 h-14 mb-6 flex items-center justify-center mx-auto
                           rounded-xl bg-gradient-to-br from-purple-600 to-indigo-500
                           text-white shadow-lg shadow-purple-500/30"
              >
                {feature.icon}
              </motion.div>

              <h3 className="text-xl font-semibold text-white text-center mb-3">
                {feature.title}
              </h3>

              <p className="text-gray-300 text-center leading-relaxed">
                {feature.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

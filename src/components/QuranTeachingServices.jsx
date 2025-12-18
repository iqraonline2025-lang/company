import { motion } from "framer-motion";
import { FaBook, FaGraduationCap, FaUsers } from "react-icons/fa";

const features = [
  {
    icon: <FaBook size={36} />,
    title: "Arabic Reading",
    desc: "Master the basics of Arabic script and pronunciation.",
  },
  {
    icon: <FaGraduationCap size={36} />,
    title: "Tajweed Rules",
    desc: "Learn proper Quranic recitation techniques.",
  },
  {
    icon: <FaUsers size={36} />,
    title: "Beginner to Advanced",
    desc: "Structured courses from novice to expert level.",
  },
];

export default function QuranTeachingServices() {
  return (
    <section className="py-20 px-4 bg-gradient-to-b from-[#0a0714] via-[#120a1f] to-[#190f2e]">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <motion.h2
          className="text-4xl font-bold text-center mb-14 text-purple-200 tracking-wide"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Quran Teaching Services
        </motion.h2>

        {/* Features */}
        <div className="grid gap-10 lg:grid-cols-3 md:grid-cols-2">
          {features.map((feature, idx) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.2, duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center p-10 rounded-2xl 
              bg-white/5 backdrop-blur-lg 
              border border-purple-500/20 
              shadow-[0_0_25px_rgba(150,80,255,0.15)]
              hover:shadow-[0_0_35px_rgba(180,100,255,0.35)]
              transition-all duration-300"
            >
              <div className="p-5 bg-purple-600/20 border border-purple-400/30 rounded-full mx-auto mb-6 w-fit text-purple-300">
                {feature.icon}
              </div>

              <h3 className="text-2xl font-semibold text-purple-200 mb-3">
                {feature.title}
              </h3>

              <p className="text-purple-300/80">{feature.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Packages */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h3 className="text-3xl font-semibold text-purple-200 mb-4">
            Packages
          </h3>
          <p className="text-purple-300/80 max-w-2xl mx-auto leading-relaxed">
            Choose from our flexible packages: Basic (1-on-1 sessions), Premium
            (group classes), or Elite (personalized curriculum).
          </p>
        </motion.div>
      </div>
    </section>
  );
}

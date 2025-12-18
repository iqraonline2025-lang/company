import { motion } from "framer-motion";
import { FaCode, FaServer, FaPlug } from "react-icons/fa";

const subsections = [
  {
    icon: <FaCode size={32} />,
    title: "Frontend Development",
    desc: "Modern, responsive, and interactive interfaces crafted using React, Next.js, and cutting-edge UI libraries.",
    features: ["React / Next.js", "Responsive UI", "Performance Optimization"],
  },
  {
    icon: <FaServer size={32} />,
    title: "Backend Development",
    desc: "Scalable backend systems using Node.js, Python, and secure API architectures.",
    features: ["Node.js / Python", "Databases", "API Architecture"],
  },
  {
    icon: <FaPlug size={32} />,
    title: "API Integrations",
    desc: "Smooth integration of third-party services, payment gateways, and authentication systems.",
    features: ["REST APIs", "3rd-party Integrations", "Auth Systems"],
  },
];

export default function WebDevelopment() {
  return (
    <section className="py-24 px-4 relative overflow-hidden bg-[#05050a]">
      {/* Soft glowing background */}
      <div className="absolute top-[-200px] right-[-200px] w-[500px] h-[500px] bg-purple-600 blur-[180px] opacity-30 rounded-full"></div>
      <div className="absolute bottom-[-200px] left-[-200px] w-[450px] h-[450px] bg-indigo-600 blur-[160px] opacity-25 rounded-full"></div>

      <div className="relative max-w-6xl mx-auto">
        {/* Animated Heading */}
        <motion.h2
          className="text-5xl md:text-6xl font-extrabold text-center mb-14 text-white"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Web Development <span className="text-purple-400">Services</span>
        </motion.h2>

        {/* Cards */}
        <div className="grid gap-10 md:grid-cols-3">
          {subsections.map((subsection, idx) => (
            <motion.div
              key={subsection.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.2, duration: 0.7 }}
              viewport={{ once: true }}
              className="
                bg-white/5 
                backdrop-blur-xl 
                p-8 
                rounded-2xl 
                border border-white/10 
                hover:border-purple-400/50 
                shadow-lg
                hover:shadow-purple-500/30 
                transition-all 
                duration-300 
                group
              "
            >
              {/* Icon */}
              <div className="flex items-center mb-6">
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ delay: idx * 0.2 + 0.1 }}
                  className="p-4 rounded-full bg-purple-600/20 text-purple-300 group-hover:bg-purple-600/30 transition"
                >
                  {subsection.icon}
                </motion.div>

                <div className="ml-4">
                  <h3 className="text-2xl font-semibold text-white mb-1">
                    {subsection.title}
                  </h3>
                  <p className="text-gray-300">{subsection.desc}</p>
                </div>
              </div>

              {/* Features */}
              <ul className="grid gap-2 text-gray-300">
                {subsection.features.map((feature, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.2 + i * 0.15 }}
                    className="flex items-center"
                  >
                    <span className="text-purple-400 mr-2">•</span>
                    {feature}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

import { motion } from "framer-motion";
import { FaCalendarAlt, FaBug, FaChartBar } from "react-icons/fa";

const features = [
  {
    icon: <FaCalendarAlt size={28} />,
    title: "Monthly Plans",
    desc: "Flexible monthly subscription for continuous maintenance.",
  },
  {
    icon: <FaBug size={28} />,
    title: "Bug Fixing",
    desc: "Fast detection & patching to keep your site healthy.",
  },
  {
    icon: <FaChartBar size={28} />,
    title: "Performance Monitoring",
    desc: "Track, measure & optimize real-time website performance.",
  },
];

export default function WebsiteMaintenance() {
  return (
    <section className="relative py-24 px-6 bg-white overflow-hidden">
      {/* Animated Background Lines */}
      <div className="absolute inset-0 opacity-[0.12] bg-[url('https://svgshare.com/i/18pq.svg')] bg-cover"></div>

      {/* Glow Blobs */}
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-purple-300 blur-[150px] opacity-30 rounded-full"></div>
      <div className="absolute bottom-0 right-0 w-[450px] h-[450px] bg-blue-300 blur-[160px] opacity-25 rounded-full"></div>

      <div className="max-w-7xl mx-auto relative">
        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center text-5xl font-extrabold text-gray-900 tracking-tight"
        >
          Website Maintenance
        </motion.h2>

        {/* Subtitle */}
        <motion.p
          className="text-center text-gray-600 text-lg max-w-2xl mx-auto mt-6 leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          viewport={{ once: true }}
        >
          Keep your website running smoothly with proactive updates, performance
          tuning, and bug prevention.
        </motion.p>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-10 mt-20">
          {features.map((feature, idx) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.2, duration: 0.8 }}
              viewport={{ once: true }}
              className="group relative bg-white/70 backdrop-blur-xl border border-gray-200
              rounded-3xl p-10 shadow-[0_8px_30px_rgb(0,0,0,0.05)] 
              hover:shadow-[0_10px_35px_rgb(0,0,0,0.08)] transition-all duration-500
              hover:-translate-y-3"
            >
              {/* floating icon */}
              <motion.div
                className="w-16 h-16 flex items-center justify-center 
                rounded-2xl bg-gradient-to-br from-purple-500 to-blue-500 text-white 
                shadow-lg mb-6 mx-auto"
                animate={{ y: [0, -10, 0] }}
                transition={{
                  repeat: Infinity,
                  duration: 3,
                  delay: idx * 0.3,
                  ease: "easeInOut",
                }}
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

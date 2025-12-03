import React from "react";
import { motion } from "framer-motion";
import { FaQuoteLeft } from "react-icons/fa";

const testimonials = [
  {
    name: "Ava Thompson",
    role: "Startup Founder",
    text: "The website they built completely transformed our online presence. Clean, fast, and incredibly professional.",
    img: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    name: "Lucas Bennett",
    role: "Marketing Lead",
    text: "Amazing attention to detail. The UI feels premium and the performance is top-tier.",
    img: "https://randomuser.me/api/portraits/men/46.jpg",
  },
  {
    name: "Sophia Carter",
    role: "Business Owner",
    text: "From design to responsiveness, everything is flawless. Highly recommend their services.",
    img: "https://randomuser.me/api/portraits/women/68.jpg",
  },
];

const Testimonials = () => {
  return (
    <section className="w-full py-24 bg-black text-white px-6 md:px-20">
      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl md:text-5xl font-bold text-center mb-16"
      >
        What Clients Say
      </motion.h2>

      {/* Cards */}
      <div className="grid md:grid-cols-3 gap-10">
        {testimonials.map((t, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: i * 0.2 }}
            className="bg-white/5 backdrop-blur-xl rounded-3xl p-8 border border-white/10 shadow-xl hover:shadow-purple-500/10 transition-all"
          >
            <FaQuoteLeft className="text-purple-400 text-3xl mb-6 opacity-80" />

            <p className="text-gray-300 text-base leading-relaxed mb-8">
              "{t.text}"
            </p>

            <div className="flex items-center gap-4">
              <img
                src={t.img}
                alt={t.name}
                className="w-12 h-12 rounded-full object-cover border border-purple-500/40"
              />
              <div>
                <h4 className="text-lg font-semibold">{t.name}</h4>
                <p className="text-gray-400 text-sm">{t.role}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;

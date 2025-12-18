import React from "react";
import { motion } from "framer-motion";

// Premium curated images
const images = [
  "https://images.unsplash.com/photo-1593642634315-48f5414c3ad9?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1522199755839-a2bacb67c546?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=1200&q=80",
];

export default function AnimatedImageShowcase() {
  return (
    <section className="relative w-full py-28 bg-gray-50 overflow-hidden">
      {/* Soft Gradients */}
      <div className="absolute top-0 left-20 w-[450px] h-[450px] bg-purple-300 blur-3xl opacity-30 rounded-full"></div>
      <div className="absolute bottom-0 right-20 w-[450px] h-[450px] bg-blue-300 blur-3xl opacity-30 rounded-full"></div>

      <div className="relative max-w-7xl mx-auto px-6 text-center">
        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-700 via-blue-700 to-purple-900 bg-clip-text text-transparent"
        >
          Modern & Aesthetic Work Showcase
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-gray-600 text-lg max-w-2xl mx-auto mb-14"
        >
          A premium collection of high-quality web designs, digital interfaces,
          and creative visuals.
        </motion.p>

        {/* Animated Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {images.map((img, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.15 }}
              whileHover={{
                scale: 1.05,
                rotateX: 6,
                rotateY: -6,
              }}
              className="rounded-2xl overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.12)] bg-white border border-gray-100 hover:shadow-[0_12px_45px_rgba(80,80,200,0.25)] transition-all"
            >
              <motion.img
                src={img}
                alt="Portfolio"
                className="w-full h-60 object-cover"
                whileHover={{ scale: 1.12 }}
                transition={{ duration: 0.4 }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

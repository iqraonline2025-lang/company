import React from "react";
import { motion } from "framer-motion";

const FounderSection = () => {
  return (
    <section className="relative w-full bg-gradient-to-b from-black via-purple-900 to-gray-900 py-20 px-6 flex justify-center">
      <motion.div
        className="max-w-4xl w-full flex flex-col items-center text-center bg-black/50 backdrop-blur-md rounded-3xl p-10 shadow-2xl border border-purple-700"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8 }}
      >
        {/* Photo */}
        <div className="w-40 h-40 rounded-full overflow-hidden mb-6 border-4 border-purple-500 shadow-lg">
          <img
            src="https://images.unsplash.com/photo-1603415526960-f7e0328c3d41?auto=format&fit=crop&w=500&q=80"
            alt="Founder"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Name & Role */}
        <h2 className="text-3xl md:text-4xl font-bold mb-2 text-purple-400">
          Iqra Online
        </h2>
        <p className="text-xl text-gray-300 mb-6">Founder & Lead Developer</p>

        {/* Bio */}
        <p className="max-w-2xl text-gray-200 text-lg leading-relaxed">
          Passionate about web development and Quran teaching, Hannah combines
          modern tech expertise with a deep commitment to spiritual learning,
          creating digital experiences that inspire and educate.
        </p>
      </motion.div>
    </section>
  );
};

export default FounderSection;

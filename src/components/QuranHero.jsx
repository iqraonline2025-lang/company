import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

export default function QuranHero() {
  const navigate = useNavigate();
  return (
    <section className="w-full relative">
      {/* Gradient Background */}
      <div
        className="absolute inset-0 bg-gradient-to-br 
        from-[#0a0018] via-[#1c0b32] via-[#1f2650] to-[#cdd5ff] opacity-95"
      />

      {/* Islamic / Quran-Themed Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center mix-blend-overlay opacity-70"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=2000&q=80')",
        }}
      ></div>

      {/* Main Content */}
      <div className="relative w-full max-w-5xl mx-auto pt-50 pb-40 text-center px-6">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-4xl md:text-6xl font-bold leading-tight 
            bg-gradient-to-r from-purple-200 via-blue-200 to-white 
            text-transparent bg-clip-text drop-shadow-lg"
        >
          Online Quran Learning
          <br />
          <span className="text-white">With Tajweed & Expert Teachers</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="mt-4 text-white/85 max-w-2xl mx-auto text-lg"
        >
          Master the Quran with certified instructors, tajweed rules, and
          one-on-one guidance — all in a peaceful and spiritual environment.
        </motion.p>

        <motion.button
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="mt-8 px-10 py-4 rounded-full text-white text-lg font-semibold 
            shadow-xl transition-all
            bg-gradient-to-r from-purple-600 to-blue-600 hover:opacity-90"
          onClick={() => navigate("/contact")}
        >
          Start Your Quran Journey
        </motion.button>
      </div>

      {/* Feature Cards */}
      <div className="absolute -bottom-20 w-full flex justify-center">
        <div className="bg-white/90 backdrop-blur-xl shadow-2xl rounded-2xl px-6 py-6 flex gap-4 sm:gap-8">
          {[
            { name: "One-on-One Classes", desc: "Personal instructor" },
            { name: "Tajweed Focused", desc: "Perfect pronunciation" },
            { name: "Flexible Timings", desc: "Learn at your pace" },
            { name: "Certified Teachers", desc: "Experienced Qaris" },
          ].map((item, i) => (
            <div
              key={i}
              className="bg-white rounded-xl shadow-lg px-5 py-4 text-center min-w-[130px]"
            >
              <h3 className="font-bold text-lg bg-gradient-to-r from-purple-600 to-blue-600 text-transparent bg-clip-text">
                {item.name}
              </h3>
              <p className="text-gray-700 text-sm font-medium mt-1">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Spacer */}
      <div className="h-32"></div>
    </section>
  );
}

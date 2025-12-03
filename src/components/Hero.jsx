import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

export default function HeroSection() {
  const navigate = useNavigate();
  const pageBg =
    "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1920&q=80";

  return (
    <section className="relative w-full min-h-screen flex items-center justify-center bg-black overflow-hidden pt-48 pb-24">
      {/* 1. Full-page background image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${pageBg})` }}
      />

      {/* 2. Subtly Dark Overlay (Transparency: bg-black/50 instead of /70) */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* 3. Color Theme Filter Overlay (Low opacity gradient) */}
      <div
        className="absolute inset-0 z-0 opacity-40" // opacity 40%
        style={{
          backgroundImage:
            "linear-gradient(to top right, rgba(79, 70, 229, 0.5), rgba(168, 85, 247, 0.5))",
        }} // Blue (indigo) to Purple
      ></div>

      {/* Glass-style card (Adjusted position based on previous request) */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 50 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.9, ease: "easeOut" }}
        className="relative z-10 w-full max-w-3xl 
                   bg-white/10 backdrop-blur-lg rounded-3xl 
                   border border-white/20 shadow-lg p-12 text-center 
                   mx-auto mb-12"
      >
        <h1 className="text-3xl md:text-4xl font-bold text-white drop-shadow-lg">
          Build Modern Web Platforms
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
            With Integrity & Purpose
          </span>
        </h1>

        <p className="text-gray-200 mt-6 max-w-xl mx-auto leading-relaxed">
          Professional web development services to turn your ideas into
          scalable, high-quality digital products. Also offering comprehensive
          Quranic and Islamic Studies programs.
        </p>

        <div className="flex justify-center gap-4 mt-10">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => navigate("/services")}
            className="px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-500
                       text-white font-semibold rounded-lg shadow-md shadow-purple-500/30
                       hover:from-purple-500 hover:to-blue-400 transition-all duration-300"
          >
            Explore Services
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => navigate("/quranteaching")}
            className="px-6 py-3 border border-blue-400 text-blue-300
                       rounded-lg hover:bg-blue-400 hover:text-white
                       transition-all duration-300"
          >
            Start Learning
          </motion.button>
        </div>
      </motion.div>
    </section>
  );
}

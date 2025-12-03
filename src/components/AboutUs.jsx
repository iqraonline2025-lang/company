import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function AboutUs() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 500); // simulate loading
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      // FIX 1: Loading State Background fixed to dark theme
      <section className="relative py-24 overflow-hidden bg-[#0e0a1f]">
        <div className="container mx-auto flex justify-center items-center h-64">
          {/* FIX 2: Loading Spinner border color changed to Blue/Purple */}
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-500"></div>
        </div>
      </section>
    );
  }

  return (
    // FIX 3: Main Section Background color filter (removed original image, using theme colors)
    <section className="relative py-24 overflow-hidden min-h-screen bg-gradient-to-br from-[#0e0a1f] via-[#1a0f2e] to-[#120a26]">
      {/* Background Image (Kept the div structure but used CSS to apply the theme color overlay) */}
      <div className="absolute inset-0 -z-10">
        <img
          src="https://images.unsplash.com/photo-1555949963-aa79dcee981c?auto=format&fit=crop&w=1600&q=80"
          alt="Web Development Background"
          className="w-full h-full object-cover opacity-30" // Reduced opacity of image for theme dominance
        />
        {/* FIX 4: Themed Color Overlay for readability/coloring */}
        <div
          className="absolute inset-0 z-0 opacity-50"
          style={{
            backgroundImage:
              "linear-gradient(to top right, rgba(66, 153, 225, 0.4), rgba(168, 85, 247, 0.4))",
          }}
        ></div>
        <div className="absolute inset-0 bg-black/40"></div>{" "}
        {/* Final dark overlay */}
      </div>

      {/* Floating particles (color updated) */}
      <div className="absolute inset-0 -z-20">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            // FIX 5: Particle color changed to Blue/Purple blend
            className="absolute w-2 h-2 bg-blue-500/30 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{ y: [0, -20, 0], opacity: [0.2, 0.8, 0.2] }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="container mx-auto max-w-4xl text-center relative z-10 px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          {/* FIX 6: Heading gradient changed to Blue/Purple */}
          <motion.h2
            className="text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-500 to-purple-600 bg-clip-text text-transparent"
            initial={{ opacity: 0, y: 30, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{
              duration: 0.8,
              delay: 0.5,
              type: "spring",
              stiffness: 100,
            }}
            whileHover={{
              scale: 1.05,
              textShadow: "0px 0px 10px rgba(99, 102, 241, 0.5)", // Themed hover shadow
            }}
          >
            Who we are
          </motion.h2>

          {/* FIX 7: Accent colors changed to Blue/Purple */}
          <motion.p
            className="text-white mb-8 text-lg leading-relaxed max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
          >
            We are a passionate team of{" "}
            <span className="text-blue-400 font-semibold">developers</span> and{" "}
            <span className="text-purple-400 font-semibold">educators</span>{" "}
            combining modern web development skills with the values of Quranic
            teachings. Our mission is to create meaningful digital experiences
            while staying true to ethical principles.
          </motion.p>

          {/* FIX 8: Heading gradient changed to Blue/Purple */}
          <motion.h2
            className="text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-500 to-purple-600 bg-clip-text text-transparent"
            initial={{ opacity: 0, y: 30, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{
              duration: 0.8,
              delay: 0.9,
              type: "spring",
              stiffness: 100,
            }}
            whileHover={{
              scale: 1.05,
              textShadow: "0px 0px 10px rgba(99, 102, 241, 0.5)",
            }}
          >
            Why choose us
          </motion.h2>

          {/* FIX 9: Accent colors changed to Blue/Purple */}
          <motion.p
            className="text-white text-lg leading-relaxed max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.1 }}
          >
            We blend{" "}
            <span className="text-blue-400 font-semibold">
              technical expertise
            </span>{" "}
            with{" "}
            <span className="text-purple-400 font-semibold">
              ethical guidance
            </span>
            , delivering top-quality solutions that are both innovative and
            responsible. With us, your projects get the perfect balance of
            skill, creativity, and purpose.
          </motion.p>

          {/* FIX 10: Button gradient changed from Teal to Blue/Purple */}
          <motion.button
            className="mt-8 px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{
              duration: 0.5,
              delay: 1.3,
              type: "spring",
              stiffness: 120,
            }}
            whileHover={{
              scale: 1.05,
              boxShadow: "0px 0px 20px rgba(99, 102, 241, 0.4)", // Themed hover shadow
            }}
            whileTap={{ scale: 0.95 }}
            onClick={() => navigate("/about")}
          >
            Learn More About Us
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}

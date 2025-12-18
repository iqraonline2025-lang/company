import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Typewriter from 'typewriter-effect';

export default function AboutUs() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 500);
    return () => clearTimeout(timer);
  }, []);

  // Animation variants for the "Why choose us" heading
  const titleVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  if (loading) {
    return (
      <section className="relative py-24 overflow-hidden bg-[#0e0a1f] h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-500"></div>
      </section>
    );
  }

  return (
    <section className="relative py-24 overflow-hidden min-h-screen bg-gradient-to-br from-[#0e0a1f] via-[#1a0f2e] to-[#120a26] flex items-center">
      
      {/* Background Layers */}
      <div className="absolute inset-0 -z-10">
        <img
          src="https://images.unsplash.com/photo-1555949963-aa79dcee981c?auto=format&fit=crop&w=1600&q=80"
          alt="Background"
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-black/60"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto max-w-4xl text-center relative z-10 px-4">
        
        {/* SECTION 1: Who We Are */}
        <div className="mb-24">
          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-500 to-purple-600 bg-clip-text text-transparent min-h-[60px]">
            <Typewriter
              options={{
                strings: ['Who we are', 'Our Identity', 'Our Vision'],
                autoStart: true,
                loop: true,
                delay: 75,
              }}
            />
          </h2>

          <motion.p
            className="text-white/90 text-lg leading-relaxed max-w-2xl mx-auto"
            initial={{ opacity: 0, filter: "blur(10px)" }}
            whileInView={{ opacity: 1, filter: "blur(0px)" }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            We are a passionate team of{" "}
            <span className="text-blue-400 font-semibold">developers</span> and{" "}
            <span className="text-purple-400 font-semibold">educators</span>{" "}
            combining modern web development skills with the values of Quranic
            teachings. Our mission is to create meaningful digital experiences
            that empower communities while staying true to ethical principles.
          </motion.p>
        </div>

        {/* SECTION 2: Why Choose Us (Animated) */}
        <div className="mb-12">
           <motion.h2 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={titleVariants}
            className="text-5xl font-bold mb-8 text-white tracking-tight"
          >
            Why <span className="text-blue-400">choose</span> us?
          </motion.h2>

          <motion.p
            className="text-white/80 text-lg md:text-xl leading-relaxed max-w-3xl mx-auto space-y-4"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.3 }}
          >
            In a fast-paced digital world, we provide a unique bridge between{" "}
            <span className="text-blue-400 font-semibold underline decoration-blue-500/30">cutting-edge technology</span> and{" "}
            <span className="text-purple-400 font-semibold underline decoration-purple-500/30">unwavering integrity</span>. 
            We don't just build websites; we craft scalable digital solutions 
            designed with purpose and precision. By integrating 
            <span className="text-white font-bold"> ethical guidance</span> into our 
            development process, we ensure that every project we touch serves 
            the greater good, providing you with high-performance results that 
            you can trust.
          </motion.p>
        </div>

        {/* BUTTON */}
        <motion.button
          className="mt-12 px-10 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-bold rounded-full shadow-lg"
          whileHover={{ 
            scale: 1.05, 
            boxShadow: "0px 0px 30px rgba(99, 102, 241, 0.6)",
            translateY: -2
          }}
          whileTap={{ scale: 0.95 }}
          onClick={() => navigate("/about")}
        >
          Explore Our Story
        </motion.button>
      </div>
    </section>
  );
}
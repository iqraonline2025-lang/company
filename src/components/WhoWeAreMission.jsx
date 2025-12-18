import React from "react";
import { motion } from "framer-motion";

<<<<<<< HEAD
const WhoWeAreMissionLight = () => {
  // Animation for the text reveal (rise up and fade)
  const textRevealVariants = {
    hidden: { y: "100%", opacity: 0 },
    visible: (i) => ({
      y: 0,
      opacity: 1,
      transition: {
        delay: i * 0.1,
        duration: 0.8,
        ease: [0.215, 0.61, 0.355, 1], // Custom cubic-bezier for a "smooth" snap
      },
    }),
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { 
      opacity: 1, 
      scale: 1, 
      transition: { duration: 1, ease: "easeOut" } 
    },
  };

  return (
    <section id="mission" className="relative w-full bg-[#fdfbff] py-32 px-6 overflow-hidden">
      {/* Background Decorative Elements */}
      <motion.div 
        animate={{ rotate: 360 }}
        transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
        className="absolute -top-24 -right-24 w-96 h-96 bg-purple-100 rounded-full blur-3xl opacity-50" 
      />
      <div className="absolute top-1/2 -left-24 w-72 h-72 bg-blue-100 rounded-full blur-3xl opacity-30" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col md:flex-row gap-20 items-stretch">
          
          {/* Left Column: Who We Are */}
          <motion.div 
            className="flex-1 group"
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <div className="overflow-hidden mb-6">
              <motion.h2 
                custom={1}
                variants={textRevealVariants}
                className="text-5xl font-black tracking-tight text-gray-900"
              >
                Who We <span className="text-purple-600">Are</span>
              </motion.h2>
              <motion.div 
                initial={{ width: 0 }}
                whileInView={{ width: "80px" }}
                transition={{ duration: 1, delay: 0.5 }}
                className="h-2 bg-purple-600 mt-2"
              />
            </div>

            <div className="space-y-6">
              <p className="text-xl text-gray-600 leading-relaxed font-medium">
                We are a collective of designers and developers driven by passion,
                creativity, and innovation.
              </p>
              <p className="text-lg text-gray-500 leading-relaxed border-l-4 border-purple-200 pl-6 italic">
                "Our focus is on crafting sustainable, high-quality digital 
                experiences that combine modern design with powerful technology."
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                With years of combined experience, we believe in collaboration,
                transparency, and building solutions that make an impact.
              </p>
            </div>
          </motion.div>

          {/* Vertical Divider (Hidden on Mobile) */}
          <div className="hidden md:block w-px bg-gradient-to-b from-transparent via-gray-200 to-transparent" />

          {/* Right Column: Mission */}
          <motion.div 
            className="flex-1 flex flex-col justify-center"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
             <div className="overflow-hidden mb-6 text-right md:text-left">
              <motion.h2 
                custom={2}
                variants={textRevealVariants}
                className="text-5xl font-black tracking-tight text-gray-900"
              >
                Our <span className="text-blue-600">Mission</span>
              </motion.h2>
            </div>

            <div className="space-y-8 bg-white/50 backdrop-blur-sm p-8 rounded-3xl border border-gray-100 shadow-xl shadow-purple-500/5 group hover:border-blue-200 transition-colors duration-500">
              <p className="text-xl text-gray-700 leading-relaxed">
                Our mission is to empower businesses and individuals with
                cutting-edge digital solutions.
              </p>
              
              <div className="grid grid-cols-2 gap-4">
                {['Intuitive', 'Scalable', 'Striking', 'Modern'].map((word, i) => (
                  <motion.div 
                    key={word}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.5 + (i * 0.1) }}
                    className="py-2 px-4 rounded-full bg-blue-50 text-blue-700 font-bold text-sm text-center"
                  >
                    {word}
                  </motion.div>
                ))}
              </div>

              <p className="text-lg text-gray-600 leading-relaxed">
                Our ultimate goal is to leave a lasting impression through the 
                products we build and the experiences we create for our users.
              </p>
            </div>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
};

export default WhoWeAreMissionLight;
=======
// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.3, delayChildren: 0.3 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 120, damping: 20 },
  },
};

const WhoWeAreMissionLight = () => {
  return (
    <motion.section
      id="mission"
      className="relative w-full bg-white text-gray-900 py-20 px-6"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-12 items-start">
        {/* Left Column: Who We Are */}
        <motion.div className="flex-1" variants={itemVariants}>
          <h2 className="text-4xl font-extrabold text-purple-600 mb-6">
            Who We Are
          </h2>
          <p className="text-lg text-gray-700 mb-4">
            We are a collective of designers and developers driven by passion,
            creativity, and innovation. Our focus is on crafting sustainable,
            high-quality digital experiences that combine modern design with
            powerful technology.
          </p>
          <p className="text-lg text-gray-700">
            With years of combined experience, we believe in collaboration,
            transparency, and building solutions that make an impact. Every
            project we take on is treated with meticulous attention to detail,
            ensuring excellence from concept to delivery.
          </p>
        </motion.div>

        {/* Right Column: Mission */}
        <motion.div className="flex-1" variants={itemVariants}>
          <h2 className="text-4xl font-extrabold text-purple-600 mb-6">
            Our Mission
          </h2>
          <p className="text-lg text-gray-700 mb-4">
            Our mission is to empower businesses and individuals with
            cutting-edge digital solutions. We aim to bridge the gap between
            ideas and execution by delivering websites, applications, and
            platforms that are intuitive, scalable, and aesthetically striking.
          </p>
          <p className="text-lg text-gray-700">
            By embracing innovation and continuously refining our skills, we
            strive to stay ahead of the curve. Our ultimate goal is to leave a
            lasting impression through the products we build and the experiences
            we create for our users.
          </p>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default WhoWeAreMissionLight;
>>>>>>> e8d5e685ef16b3f7791a58e0cb28427671686f85

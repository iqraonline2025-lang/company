import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useNavigate } from "react-router-dom";
// Data Structure for Technology Stack (using accurate SVG paths)
const techStack = [
  {
    name: "React / Next.js",
    logo: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2.5 14h5V8h-5v8zm3.5-9h-1.5v2h1.5v-2zm-2 4h1.5v2h-1.5v-2z",
    color: "text-blue-400",
  },
  {
    name: "Node.js / Express",
    logo: "M12 2a10 10 0 100 20 10 10 0 000-20zm0 18a8 8 0 110-16 8 8 0 010 16zm1.75-12.5h-3.5v9h3.5v-9zm-1.75-2.5h-1.5v1.5h1.5v-1.5z",
    color: "text-green-400",
  },
  {
    name: "Tailwind CSS",
    logo: "M12 22a10 10 0 01-8.66-5c-.44-.26-.52-.8-.22-1.2l1.6-2.8a.7.7 0 01.95-.2c.86.5 1.83.8 2.83.8a4.5 4.5 0 004.5-4.5V9.5a1 1 0 011-1h2.5a.5.5 0 01.5.5v2.5a1 1 0 01-1 1H17a1 1 0 00-1 1v4.5a.5.5 0 01-.5.5h-3a.5.5 0 01-.5-.5z",
    color: "text-cyan-400",
  },
  {
    name: "PostgreSQL / MongoDB",
    logo: "M12 20.25c-5.91 0-10.75-2.07-10.75-4.63s4.84-4.63 10.75-4.63 10.75 2.07 10.75 4.63-4.84 4.63-10.75 4.63zm0-7.75c-5.91 0-10.75-2.07-10.75-4.63S6.09 3.25 12 3.25s10.75 2.07 10.75 4.63-4.84 4.63-10.75 4.63z",
    color: "text-indigo-400",
  },
];

// Main App Component
const Second = () => {
  const navigate = useNavigate();
  // 1. Framer Motion Scroll Logic: Target the combined section area
  const combinedSectionRef = useRef(null);

  // Track scroll progress of the newly combined target element
  const { scrollYProgress } = useScroll({
    target: combinedSectionRef,
    // Start effect when the top of the element hits the bottom of the viewport ("start end")
    // End effect when the bottom of the element leaves the top of the viewport ("end start")
    offset: ["start end", "end start"],
  });

  // Map the scroll progress (0 to 1) to the opacity (0 to 1 to 0)
  const overlayOpacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 1, 0]);

  // Map scroll progress to vertical background movement (Parallax)
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["-50%", "50%"]);

  // Map scroll progress to blur level
  const overlayBlur = useTransform(scrollYProgress, [0, 0.5, 1], [0, 8, 0]);

  // Define the gradient colors and style
  const gradient = `linear-gradient(
        45deg,
        rgba(10, 0, 30, 0.98) 0%,     /* Deep Navy/Blackish-Purple */
        rgba(10, 70, 140, 0.8) 40%,    /* Corporate Blue */
        rgba(200, 200, 255, 0.1) 75%,  /* Subtle Whitish Haze */
        rgba(50, 0, 100, 0.9) 100%       /* Purplish Black for depth */
    )`;

  // Background Image URL
  const imageUrl =
    "https://placehold.co/1920x1080/0A0A1F/00D5FF?text=Digital+Architecture";

  return (
    // The main container provides the necessary height for scrolling
    <div className="min-h-[300vh] w-full relative bg-gray-950 font-inter">
      {/* 2. FULL VIEWPORT FIXED BACKGROUND (Appears/Disappears based on scroll) */}
      <motion.div
        className="fixed inset-0 z-0 pointer-events-none overflow-hidden"
        style={{
          opacity: overlayOpacity, // Opacity is controlled by scroll position of the combined section
        }}
      >
        {/* Parallax Background Image */}
        <motion.div
          className="absolute inset-[-50%] bg-cover bg-center"
          style={{
            backgroundImage: `url('${imageUrl}')`,
            backgroundAttachment: "fixed",
            y: backgroundY, // Apply parallax movement
            filter: `blur(${overlayBlur.get()}px)`, // Apply dynamic blur
          }}
        />

        {/* Fixed Gradient Overlay - This is stacked on top of the fixed background image */}
        <div className="absolute inset-0" style={{ background: gradient }} />
      </motion.div>

      {/* 3. SCROLLABLE CONTENT AREA (Z-index ensures it sits above the fixed background) */}
      <div className="relative z-10 px-4 sm:px-8 max-w-6xl mx-auto">
        {/* --- COMBINED TARGET SECTION (Card 1, 2, and 3) --- */}
        <div ref={combinedSectionRef}>
          {/* 1st Card: Project Goals and Scope */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="text-white text-center py-40 bg-gray-900/90 rounded-2xl mb-32 border border-cyan-500/30 shadow-2xl shadow-indigo-500/20 backdrop-blur-sm"
          >
            <h1 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-indigo-400 mb-4">
              PHASE 1: STRATEGY & SCOPE DEFINITION
            </h1>
            <p className="text-xl font-light text-gray-300 max-w-2xl mx-auto">
              We begin every project by deeply understanding your business
              objectives, target audience, and key performance indicators to
              define a clear, achievable technical roadmap.
            </p>
          </motion.div>

          {/* 2nd Card (KEY TECHNOLOGIES STACK) */}
          <motion.div
            className="relative max-w-6xl w-full p-10 rounded-2xl bg-gray-900/90 border border-indigo-700 shadow-2xl overflow-hidden mx-auto h-[600px] flex items-center justify-center backdrop-blur-sm"
            initial={{ scale: 0.95, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8 }}
          >
            {/* Content must be relative and have a higher Z-index */}
            <motion.div
              className="relative z-20 text-white w-full"
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: {
                    staggerChildren: 0.1,
                  },
                },
              }}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
              <h2 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-indigo-500 text-center mb-16 tracking-wider">
                CORE TECHNOLOGIES & EXPERTISE
              </h2>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                {techStack.map((tech) => (
                  <motion.div
                    key={tech.name}
                    variants={{
                      hidden: { opacity: 0, y: 50, scale: 0.8 },
                      visible: { opacity: 1, y: 0, scale: 1 },
                    }}
                    transition={{ type: "spring", stiffness: 100 }}
                    className="p-8 flex flex-col items-center bg-gray-800/80 rounded-2xl border border-gray-700 hover:border-cyan-500 transition-all duration-300 cursor-pointer backdrop-blur-md hover:shadow-cyan-500/30 shadow-xl"
                  >
                    {/* SVG Icon */}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className={`h-20 w-20 mb-4 ${tech.color} drop-shadow-lg`}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={1}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d={tech.logo}
                      />
                    </svg>

                    <p className="text-lg font-bold text-white text-center tracking-wide">
                      {tech.name}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* 3rd Card: Call to Action */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="text-white text-center py-40 bg-gray-900/90 rounded-2xl mt-32 border border-cyan-500/30 shadow-2xl shadow-indigo-500/20 backdrop-blur-sm"
          >
            <h1 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-indigo-400 mb-4">
              PHASE 3: LAUNCH & CONTINUOUS INTEGRATION
            </h1>
            <p className="text-xl font-light text-gray-300 max-w-2xl mx-auto mb-8">
              Explore our successful collaborations and see how we've helped
              businesses like yours achieve their digital ambitions.
            </p>
            <motion.a
              href="#portfolio" // Link to a portfolio or case studies section
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="inline-block px-10 py-4 bg-gradient-to-r from-indigo-600 to-purple-700 text-white text-xl font-semibold rounded-full hover:from-indigo-700 hover:to-purple-800 transition-all duration-300 shadow-lg shadow-indigo-500/50 transform hover:scale-105"
              onClick={() => {
                navigate("/portfolio");
                setTimeout(() => {
                  const element = document.getElementById("projects");
                  if (element) {
                    element.scrollIntoView({ behavior: "smooth" });
                  }
                }, 100);
              }}
            >
              View Case Studies
            </motion.a>
          </motion.div>
        </div>
        {/* --- END COMBINED TARGET SECTION --- */}
      </div>
    </div>
  );
};

export default Second;

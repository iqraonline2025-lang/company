import React from "react";
import { motion } from "framer-motion";

const ContactHeroSection = () => {
  return (
    // Main section with your established dark gradient background
    <section className="relative overflow-hidden py-24 md:py-32 lg:py-40 bg-gradient-to-br from-[#0e0a1f] via-[#1a0f2e] to-[#120a26] min-h-[80vh] flex items-center">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center relative z-10">
        {/* --- Left Content Area (Text) --- */}
        <div className="text-center lg:text-left">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight text-white mb-6"
          >
            Ready to{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
              Connect?
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg md:text-xl text-gray-300 max-w-lg lg:max-w-none mx-auto lg:mx-0 mb-8"
          >
            We're here to answer all your questions and help you start your
            journey. Drop us a message, and let's build something great
            together.
          </motion.p>

          <motion.button
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            onClick={() => {
              const element = document.getElementById("contact-form");
              if (element) {
                element.scrollIntoView({ behavior: "smooth" });
              }
            }}
            className="inline-block py-3 px-8 rounded-full text-lg font-semibold
                       bg-gradient-to-r from-purple-600 to-blue-500 text-white
                       shadow-lg shadow-purple-500/30 hover:from-purple-500 hover:to-blue-400
                       transition-all duration-300 transform hover:-translate-y-1"
          >
            Send Us a Message
          </motion.button>
        </div>

        {/* --- Right Illustration Area (Themed Abstract Visual) --- */}
        <div className="hidden lg:flex justify-center items-center relative h-96">
          {/* Main communication abstract element */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotate: -15 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 1.2, delay: 0.8, ease: "easeOut" }}
            className="relative w-72 h-72 bg-gradient-to-br from-blue-500 to-purple-500 rounded-3xl shadow-2xl flex items-center justify-center p-4"
          >
            {/* Inner message icon representation */}
            <div className="absolute inset-4 rounded-2xl bg-slate-900 flex items-center justify-center">
              <svg
                className="w-32 h-32 text-blue-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  d="M3 8l7.97 5.97L3 21h18l-7.97-5.97L21 8H3z"
                ></path>
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  d="M12 11l-8-6m16 0l-8 6m-8 0l8 6m-8 0L12 11"
                ></path>
              </svg>
            </div>
            {/* Floating "bubble" elements for dynamism */}
            <motion.div
              animate={{ y: [0, -10, 0], x: [0, 5, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-8 -left-8 w-24 h-24 rounded-full bg-blue-500/20 blur-xl"
            ></motion.div>
            <motion.div
              animate={{ y: [0, 10, 0], x: [0, -5, 0] }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1,
              }}
              className="absolute -bottom-8 -right-8 w-20 h-20 rounded-full bg-purple-500/20 blur-xl"
            ></motion.div>
          </motion.div>

          {/* Subtle background "grid" lines for tech feel */}
          <div className="absolute inset-0 opacity-10 pointer-events-none">
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHZpZXdCb3g9IjAgMCAyMCAyMCIgeG1sbnM9Imh0dHA6Ly93d3cuc2hhcGVzLmNvbS93cC1jb250ZW50L2ZpbGVzL3N2Z18wMDEzLmpwZyI+PHJlY3Qgd2lkdGg9IjIwIiBoZWlnaHQ9IjIwIiBmaWxsPSIjRjBGMEYwIi8+PHBhdGggZD0iTTAgMEwyMCAwTDIwIDIwTDAgMjBaTTIgMkgyMFYwSDJWMjBaTTQgNEgyMFYySDRWMjBaTTYgNkgyMFY0SDZWMjBaTTggOEgyMFY2SDhWMjBaTTIwIDEwSDhWMjBaTTEwIDEySDIwVjEwSDEwVjIwWk0yMCAxNEgxMFYxMkgxMFYyMFpNMTIgMTZIMjBWMTRIxMlYyMFpNMTQgMThIMjBWMTZIMTRWMjBaTTE2IDIwSDIwVjE4SDE2VjIwWiIgb3BhY2l0eT0iLjMiIGZpbGw9IiMwMDAwMDAiLz48L3N2Zz4=')] bg-grid-slate-700/50 [mask-image:linear-gradient(to_bottom,transparent,white,transparent)]"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactHeroSection;

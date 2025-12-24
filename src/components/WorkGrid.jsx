import React from "react";
import { motion } from "framer-motion";

// 1. YOUR MANUAL PROJECT DATA
const PROJECTS = [
  {
    id: 1,
    title: "The Gentlemen's Cut",
    desc: "A premium barber shop landing page featuring a sleek dark UI, online booking integration, and a service gallery.",
    img: "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?q=80&w=2070&auto=format&fit=crop",
    link: "https://barbershop-xi-smoky.vercel.app/", 
    tags: ["next js", "Framer Motion", "Tailwind", "supabase", "threejs" , "gsap"],
  },
  {
    id: 2,
    title: "Slice Junction",
    desc: "A vibrant pizza ordering platform with a custom builder, category filtering, and a responsive cart system.",
    img: "https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=2070&auto=format&fit=crop",
    link: "https://takeaway-pi.vercel.app/", 
    tags: ["react", "tailwind css", "framermotion"],
  },
];

const WorkGrid = () => {
  return (
    <section className="w-full py-20 px-6 md:px-16 bg-gradient-to-b from-white via-[#f5f4ff] to-[#eef3ff] text-gray-900">
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="max-w-5xl mx-auto text-center mb-16"
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">Recent Projects</h2>
        <p className="text-gray-500 text-lg">Exploring design and functionality through code.</p>
      </motion.div>

      {/* 2-Column Grid */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
        }}
        className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl mx-auto"
      >
        {PROJECTS.map((project) => (
          <motion.div
            key={project.id}
            variants={{
              hidden: { opacity: 0, y: 40 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            whileHover={{ y: -10 }}
            className="group bg-white rounded-[2rem] overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 border border-gray-100 flex flex-col"
          >
            {/* Image Wrapper */}
            <div className="overflow-hidden aspect-[16/10] relative">
              <img
                src={project.img}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500" />
            </div>

            {/* Text Content */}
            <div className="p-8 flex flex-col flex-grow">
              <div className="flex gap-2 mb-4">
                {project.tags.map((tag, i) => (
                  <span key={i} className="text-[10px] uppercase tracking-widest font-bold px-3 py-1 bg-purple-50 text-purple-600 rounded-lg">
                    {tag}
                  </span>
                ))}
              </div>

              <h3 className="text-2xl font-bold mb-3">{project.title}</h3>
              <p className="text-gray-600 leading-relaxed mb-8">
                {project.desc}
              </p>

              {/* Action Button */}
              <a 
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-auto w-full inline-flex items-center justify-center px-6 py-4 bg-gray-900 text-white rounded-2xl font-semibold transition-all duration-300 hover:bg-purple-700 hover:shadow-lg active:scale-95"
              >
                Launch Project
                <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="outward-arrow-svg-path-here" />
                  <path d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default WorkGrid;
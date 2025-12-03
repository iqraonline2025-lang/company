// src/components/ProjectsSection.jsx
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { supabase } from "../supabase-client"; // correct import

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.6, ease: "easeOut" },
  }),
};

const ProjectsSection = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const { data, error } = await supabase
          .from("featured_projects") // table name in Supabase
          .select("*")
          .order("created_at", { ascending: false });

        if (error) {
          console.error("Error fetching projects:", error);
        } else {
          setProjects(data);
        }
      } catch (err) {
        console.error("Unexpected error:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  if (loading) {
    return (
      <section className="py-24 min-h-screen flex items-center justify-center">
        <p className="text-white">Loading projects...</p>
      </section>
    );
  }

  return (
    <section
      id="projects"
      className="py-24 bg-gradient-to-br from-[#0a0018] via-[#120a26] to-[#1e153e] min-h-screen"
    >
      <div className="max-w-7xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-4xl font-extrabold text-center mb-16 text-white tracking-tight"
        >
          Our Featured{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
            Projects
          </span>
        </motion.h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              custom={index}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              whileHover={{
                y: -8,
                boxShadow: "0 15px 30px rgba(76,110,245,0.25)",
              }}
              viewport={{ once: true, amount: 0.1 }}
              className="flex flex-col rounded-xl overflow-hidden shadow-2xl bg-slate-800/80 
                         backdrop-blur-sm border border-slate-700/50 transition-all duration-300"
            >
              {/* Top Image */}
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Card Body */}
              <div className="p-6 flex-grow flex flex-col">
                <span className="text-blue-400 text-sm font-semibold mb-2">
                  {project.category}
                </span>

                <h3 className="text-white text-xl font-semibold mb-2">
                  {project.title}
                </h3>

                <p className="text-gray-400 text-sm mb-4 line-clamp-3">
                  {project.description}
                </p>

                {/* Tech Pills */}
                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.technologies?.map((tech, idx) => (
                    <span
                      key={idx}
                      className="text-xs font-medium bg-slate-700 text-gray-300 px-3 py-1 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;

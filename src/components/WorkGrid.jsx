import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { supabase } from "../supabase-client"; // adjust path

const WorkGrid = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProjects = async () => {
      const { data, error } = await supabase.from("projects").select("*");
      if (error) console.log("Error fetching projects:", error);
      else setProjects(data);
      setLoading(false);
    };

    fetchProjects();
  }, []);

  if (loading) return <p className="text-center py-20">Loading projects...</p>;

  return (
    <section className="w-full py-20 px-6 md:px-16 bg-gradient-to-b from-white via-[#f5f4ff] to-[#eef3ff] text-gray-900">
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.7 }}
        className="text-4xl md:text-5xl font-bold text-center mb-16"
      >
        My Work
      </motion.h2>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
        }}
        className="grid md:grid-cols-2 lg:grid-cols-3 gap-12 max-w-7xl mx-auto"
      >
        {projects.map((project, index) => (
          <motion.div
            key={index}
            variants={{
              hidden: { opacity: 0, y: 60 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            whileHover={{
              scale: 1.03,
              y: -6,
              boxShadow: "0px 20px 40px rgba(0,0,0,0.12)",
            }}
            className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl cursor-pointer border border-gray-100"
          >
            <motion.div className="overflow-hidden">
              <motion.img
                src={project.img}
                alt={project.title}
                className="w-full h-60 object-cover transition-all duration-700 hover:scale-105"
              />
            </motion.div>

            <div className="p-7">
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className="text-gray-600 text-sm mb-5 leading-relaxed">
                {project.desc}
              </p>

              <div className="flex flex-wrap gap-2">
                {project.tags?.map((tag, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 text-xs rounded-full bg-purple-100 text-purple-700 border border-purple-200"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default WorkGrid;

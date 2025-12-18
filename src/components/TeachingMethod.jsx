import React from "react";
import { Users, Laptop, Layers } from "lucide-react";
import { motion } from "framer-motion";

const methods = [
  {
    icon: Users,
    title: "1-to-1 Sessions",
    desc: "Individual attention with a dedicated instructor.",
    color: "from-purple-300 to-purple-500",
  },
  {
    icon: Laptop,
    title: "Online Zoom Classes",
    desc: "Interactive online learning with HD clarity.",
    color: "from-blue-300 to-blue-500",
  },
  {
    icon: Layers,
    title: "Personalized Levels",
    desc: "Classes tailored to your pace and skill level.",
    color: "from-pink-300 to-pink-500",
  },
];

export default function TeachingMethod() {
  return (
    <section className="py-20 bg-gradient-to-br from-[#f9f7ff] via-[#f3f4ff] to-[#ffffff]">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold mb-14 text-gray-900"
        >
          Teaching Method
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-10">
          {methods.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              whileHover={{ y: -6, scale: 1.02 }}
              className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all p-8 border border-gray-100"
            >
              <div
                className={`h-14 w-14 mx-auto rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center shadow-md mb-6 text-white`}
              >
                <item.icon size={26} />
              </div>

              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {item.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

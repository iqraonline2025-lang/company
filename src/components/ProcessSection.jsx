import { motion } from "framer-motion";
import { CheckCircle, Code, Monitor, Rocket, Wrench } from "lucide-react";

export default function ProcessSection() {
  const steps = [
    {
      title: "Requirement",
      icon: <CheckCircle size={28} />,
      description: "Gather and analyze project requirements for clarity.",
    },
    {
      title: "Design",
      icon: <Monitor size={28} />,
      description: "Create stunning UI/UX designs and prototypes.",
    },
    {
      title: "Development",
      icon: <Code size={28} />,
      description: "Develop scalable, clean, and efficient code.",
    },
    {
      title: "Testing",
      icon: <Wrench size={28} />,
      description: "Perform thorough QA and bug fixing.",
    },
    {
      title: "Launch",
      icon: <Rocket size={28} />,
      description: "Deploy the product to production seamlessly.",
    },
    {
      title: "Support",
      icon: <CheckCircle size={28} />,
      description: "Provide continuous support and updates.",
    },
  ];

  return (
    // THEMED BACKGROUND: Using the signature purplish-black gradient
    <section
      className="w-full py-24 text-white flex flex-col items-center 
                        bg-gradient-to-br from-[#0e0a1f] via-[#1a0f2e] to-[#120a26]"
    >
      {/* THEMED HEADING: Blue-to-Purple gradient text */}
      <h2
        className="text-4xl font-extrabold mb-16 text-center 
                   text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400"
      >
        Our Project Process
      </h2>

      <div className="relative w-full max-w-6xl flex flex-col md:flex-row justify-between items-center gap-16 md:gap-0">
        {/* Connecting horizontal line for desktop (Themed Blue/Purple) */}
        <div
          className="absolute top-1/2 left-8 right-8 h-1 
                     bg-gradient-to-r from-blue-400 to-purple-600 // Fixed gradient
                     transform -translate-y-1/2 z-0 rounded-full hidden md:block"
        ></div>

        {steps.map((step, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              delay: i * 0.2,
              duration: 0.6,
              type: "spring",
              stiffness: 80,
            }}
            className="relative flex flex-col items-center z-10 w-40 text-center"
          >
            {/* ICON CONTAINER: Themed Blue-to-Purple gradient background */}
            <div className="bg-gradient-to-tr from-blue-500 to-purple-600 p-5 rounded-full shadow-xl flex items-center justify-center mb-4">
              {step.icon}
            </div>

            <h3 className="font-semibold text-lg mb-2 text-white">
              {step.title}
            </h3>
            <p className="text-gray-300 text-sm">{step.description}</p>

            {/* Small vertical connector for mobile (Themed Blue/Purple) */}
            {i < steps.length - 1 && (
              <div
                className="absolute bottom-[-4rem] left-1/2 transform -translate-x-1/2 w-0.5 h-12 
                           bg-gradient-to-b from-blue-400 to-purple-600 // Fixed gradient
                           md:hidden"
              ></div>
            )}
          </motion.div>
        ))}
      </div>
    </section>
  );
}

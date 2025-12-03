// StatsCounter.jsx
import React, { useRef, useEffect } from "react";
import {
  motion,
  useSpring,
  useInView,
  useMotionValue,
  useTransform,
} from "framer-motion";

// Helper component for animating numbers
const AnimatedNumber = ({ value }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.5 });

  const base = useMotionValue(0);

  const springValue = useSpring(base, {
    stiffness: 100,
    damping: 30,
    mass: 1,
  });

  const rounded = useTransform(springValue, (v) => Math.floor(v));

  useEffect(() => {
    if (inView) base.set(value);
  }, [inView, value]);

  return <motion.span ref={ref}>{rounded}</motion.span>;
};

const stats = [
  { label: "Projects Delivered", value: 150, suffix: "+" },
  { label: "Client Satisfaction", value: 98, suffix: "%" },
  { label: "Happy Clients", value: 50, suffix: "+" },
  { label: "Years Experience", value: 10, suffix: "+" },
];

const StatsCounter = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-white via-[#f5f7ff] to-[#eef1ff]">
      <div className="max-w-6xl mx-auto px-6 w-full">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
          Our Achievements
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: index * 0.15 }}
              viewport={{ once: true }}
              className="p-6 rounded-xl bg-white shadow-md hover:shadow-xl transition border border-gray-100"
            >
              <p
                className="text-5xl md:text-6xl font-extrabold text-transparent bg-clip-text 
                bg-gradient-to-r from-purple-500 via-blue-500 to-purple-500"
              >
                <AnimatedNumber value={stat.value} />
                {stat.suffix}
              </p>

              <p className="text-gray-600 text-sm md:text-base font-medium uppercase tracking-wide mt-1">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsCounter;

import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const testimonials = [
  {
    name: "Ahmed Khan",
    role: "Business Owner",
    image:
      "https://images.unsplash.com/photo-1599566150163-29194dcaad36?auto=format&fit=crop&w=150&q=80", // fixed image
    text: "Exceptional web development services. Highly recommend for any business looking to establish a strong online presence.",
  },
  {
    name: "Fatima Ali",
    role: "Entrepreneur",
    image:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=150&q=80", // fixed image
    text: "The team's expertise in both development and Quranic teachings creates a unique and trustworthy partnership.",
  },
  {
    name: "Omar Hassan",
    role: "Startup Founder",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=150&q=80", // already reliable
    text: "Outstanding results and professional service. They delivered beyond our expectations.",
  },
];

export default function TestimonialsSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const totalItems = testimonials.length;

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % totalItems);
    }, 5000);
    return () => clearInterval(interval);
  }, [totalItems]);

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto max-w-4xl px-4">
        <motion.h2
          className="text-4xl font-extrabold text-center mb-12 text-gray-900"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          What Our Clients Say 💬
        </motion.h2>

        <hr className="my-6" />

        {/* SLIDER WRAPPER */}
        <div className="relative overflow-hidden">
          <motion.div
            className="flex"
            style={{ width: `${totalItems * 100}%` }}
            animate={{ x: `-${currentIndex * (100 / totalItems)}%` }}
            transition={{ duration: 0.5 }}
          >
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="flex-shrink-0 px-4"
                style={{ width: `${100 / totalItems}%` }} // Crucial width fix for slider
              >
                <motion.div
                  className="bg-white p-10 rounded-xl shadow-xl border border-gray-100/80 text-center transition-all duration-300 hover:shadow-2xl"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    // Added a fallback for better error handling if image fails
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src =
                        "https://via.placeholder.com/150/9CA3AF/FFFFFF?text=User";
                    }}
                    className="w-20 h-20 rounded-full mx-auto mb-4 object-cover border-4 border-purple-500/50 shadow-md"
                  />
                  <p className="text-gray-700 mb-6 italic text-lg">
                    "{testimonial.text}"
                  </p>
                  <h3 className="font-bold text-xl text-gray-900">
                    {testimonial.name}
                  </h3>
                  <p className="text-blue-600 text-sm">{testimonial.role}</p>
                </motion.div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Pagination Dots */}
        <div className="flex justify-center mt-10">
          {testimonials.map((_, index) => (
            <button
              key={index}
              className={`w-3 h-3 rounded-full mx-1 transition-colors duration-300 ${
                index === currentIndex
                  ? "bg-purple-600 scale-125"
                  : "bg-gray-400"
              }`}
              onClick={() => setCurrentIndex(index)}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

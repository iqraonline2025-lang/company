import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Star, Loader2, AlertTriangle } from "lucide-react";

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
};

const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7 } },
};

export default function TestimonialsSection() {
  const [testimonials, setTestimonials] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTestimonials = async () => {
      setLoading(true);
      setError(null);

      try {
        const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
        const anonKey = import.meta.env.VITE_SUPABASE_ANON_KEY; // ← ADD THIS

        // ✅ FIXED - Added Authorization header
        const res = await fetch(
          `${supabaseUrl}/functions/v1/get-testimonials`,
          {
            headers: {
              Authorization: `Bearer ${anonKey}`, // ← ADD THIS
            },
          }
        );

        if (!res.ok) {
          const errorData = await res
            .json()
            .catch(() => ({ error: "Unknown error" }));
          throw new Error(errorData.error || `HTTP ${res.status}`);
        }

        const data = await res.json();

        if (!Array.isArray(data)) {
          throw new Error("Invalid response format");
        }

        setTestimonials(data);
      } catch (err) {
        console.error("Failed to fetch testimonials:", err);
        setError(err.message || "Failed to load testimonials");
      } finally {
        setLoading(false);
      }
    };

    fetchTestimonials();
  }, []);

  if (loading) {
    return (
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <Loader2 className="w-8 h-8 animate-spin mx-auto text-blue-600 mb-4" />
          <p className="text-gray-500">Loading testimonials...</p>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center p-12 text-red-600 bg-red-50 border border-red-200 rounded-lg max-w-lg mx-auto">
            <AlertTriangle className="w-6 h-6 mx-auto mb-3" />
            <p className="font-semibold">{error}</p>
          </div>
        </div>
      </section>
    );
  }

  if (testimonials.length === 0) {
    return (
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="text-gray-500">No testimonials available yet.</p>
        </div>
      </section>
    );
  }

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-sm font-semibold uppercase text-blue-600 mb-2 tracking-widest">
            Trusted by Learners Worldwide
          </p>
          <h2 className="text-4xl font-extrabold text-gray-900 tracking-tight">
            What Our Students Say
          </h2>
        </motion.div>

        {/* Testimonials Grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {testimonials.map((testimonial) => (
            <motion.div
              key={testimonial.id}
              variants={fadeIn}
              whileHover={{
                y: -5,
                boxShadow:
                  "0 10px 15px -3px rgba(0,0,0,0.1), 0 4px 6px -2px rgba(0,0,0,0.05)",
              }}
              transition={{ type: "spring", stiffness: 300 }}
              className="bg-white p-6 rounded-xl shadow-lg border border-gray-100/80 flex flex-col justify-between"
            >
              {/* Rating Stars */}
              <div className="flex mb-4">
                {Array(Math.round(testimonial.rating))
                  .fill(0)
                  .map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 text-yellow-500 fill-yellow-500"
                    />
                  ))}
              </div>

              {/* Quote */}
              <p className="text-gray-700 text-lg italic mb-6 flex-grow">
                "{testimonial.quote}"
              </p>

              {/* Avatar + Info */}
              <div className="flex items-center pt-4 border-t border-gray-100">
                {testimonial.avatar_url && (
                  <img
                    src={testimonial.avatar_url}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full mr-4 object-cover border-2 border-blue-500"
                  />
                )}
                <div>
                  <p className="text-gray-900 font-semibold">
                    {testimonial.name}
                  </p>
                  <p className="text-blue-600 text-sm">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Optional CTA / Source */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center text-gray-500 mt-16 text-sm"
        >
          Average Rating based on {testimonials.length}+ verified student
          reviews.
        </motion.p>
      </div>
    </section>
  );
}

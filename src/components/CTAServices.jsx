import { motion } from "framer-motion";

export default function CTAServices() {
  return (
    <section className="py-24 bg-gray-900 text-white">
      <div className="container mx-auto max-w-4xl px-4 text-center">
        <motion.h2
          className="text-4xl font-bold mb-6"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Start Your Project Today
        </motion.h2>
        <motion.p
          className="text-xl mb-8 opacity-90"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          Ready to bring your ideas to life? Let's collaborate on your next big
          project.
        </motion.p>
        <motion.button
          className="px-8 py-4 bg-white text-teal-600 font-semibold rounded-full text-lg hover:bg-gray-100 transition-colors shadow-lg"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Get Started
        </motion.button>
      </div>
    </section>
  );
}

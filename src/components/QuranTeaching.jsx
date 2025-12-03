import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
export default function QuranTeaching() {
  const navigate = useNavigate();
  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto max-w-4xl px-4">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold mb-6 text-gray-800">
            Quran Teaching Services
          </h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Discover the beauty of the Quran through personalized online
            teaching sessions with qualified instructors.
          </p>
          <ul className="text-left max-w-md mx-auto mb-8 space-y-2">
            <li className="flex items-center">
              <span className="text-purple-500 mr-2">✓</span>
              Personalized one-on-one sessions
            </li>
            <li className="flex items-center">
              <span className="text-purple-500 mr-2">✓</span>
              Flexible scheduling
            </li>
            <li className="flex items-center">
              <span className="text-purple-500 mr-2">✓</span>
              Experienced and certified teachers
            </li>
          </ul>
          <motion.button
            className="px-6 py-3 bg-purple-500 text-white font-semibold rounded-full hover:bg-purple-600 transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => navigate("/contact")}
          >
            Contact Us Now
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}

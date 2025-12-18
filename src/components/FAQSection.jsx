import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useNavigate } from "react-router-dom";

// --- FAQ Data ---
const faqData = [
  {
    question: "What qualifications do your instructors have?",
    answer:
      "All our instructors are certified Huffaz (those who have memorized the entire Quran) and possess Ijaza (authorized certification) in Tajweed and Arabic studies. They undergo rigorous training to ensure high teaching standards.",
  },
  {
    question: "What materials do I need for the class?",
    answer:
      "You only need a stable internet connection, a microphone, and a device (PC, tablet, or smartphone). We provide all the necessary digital learning materials, including PDFs and specialized lesson plans.",
  },
  {
    question: "How do the scheduling and time zones work?",
    answer:
      "We offer 24/7 flexibility. During enrollment, you select times that fit your schedule, and our system automatically handles time zone conversions to ensure hassle-free class times.",
  },
  {
    question: "Can I try a class before enrolling in a full package?",
    answer:
      "Yes! We highly encourage new students to book our Trial Session (Free) package, which includes a full-length, no-obligation class with one of our certified teachers.",
  },
  {
    question:
      "What is the difference between Quran Reading and Tajweed Mastery?",
    answer:
      "Quran Reading focuses on basic fluency and correct articulation (makharij). Tajweed Mastery is for intermediate students who want to master the advanced, intricate rules of recitation (like Izhar, Idgham, Qalqalah, etc.).",
  },
];

const answerVariants = {
  hidden: { opacity: 0, height: 0 },
  visible: { opacity: 1, height: "auto", transition: { duration: 0.4 } },
};

// --- FAQ Item Component ---
const FAQItem = ({ question, answer, index, isOpen, toggleItem }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      viewport={{ once: true }}
      // Light theme border for separation
      className="border-b border-gray-200/80 last:border-b-0 py-4"
    >
      <button
        className="flex justify-between items-center w-full text-left py-2 group"
        onClick={() => toggleItem(index)}
      >
        <span className="text-lg font-semibold text-gray-800 group-hover:text-blue-600 transition-colors">
          {question}
        </span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        >
          {/* Blue accent on the icon when open */}
          <ChevronDown
            className={`w-6 h-6 ${isOpen ? "text-blue-600" : "text-gray-500"}`}
          />
        </motion.div>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            variants={answerVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            className="overflow-hidden"
          >
            <p className="text-gray-600 pt-3 pb-2 pr-6 border-t border-gray-100 mt-2">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

// --- Main FAQ Section Component (Light Theme) ---
export default function FAQSection() {
  const navigate = useNavigate();
  const [openIndex, setOpenIndex] = useState(null);

  const toggleItem = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    // Light background: white or very light gray
    <section className="py-24 bg-gray-50">
      <div className="max-w-4xl mx-auto px-6">
        {/* --- Header --- */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-extrabold text-gray-900 tracking-tight mb-2">
            Common Questions
          </h2>
          <p className="text-gray-600 text-lg">
            Find quick answers to the most common inquiries about our services.
          </p>
        </motion.div>

        {/* --- Accordion List Card --- */}
        <div className="bg-white p-6 md:p-8 rounded-xl shadow-xl border border-gray-100">
          {faqData.map((item, index) => (
            <FAQItem
              key={index}
              {...item}
              index={index}
              isOpen={openIndex === index}
              toggleItem={toggleItem}
            />
          ))}
        </div>

        {/* --- Optional CTA --- */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <p className="text-gray-700 mb-4">
            Didn't find what you were looking for?
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="py-3 px-8 rounded-lg text-white font-semibold 
                       bg-gradient-to-r from-purple-600 to-blue-500 shadow-md shadow-purple-500/20 
                       transition-all"
            onClick={() => navigate("/contact")}
          >
            Contact Support
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}

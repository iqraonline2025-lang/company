import { motion } from "framer-motion";
import { useState } from "react";

const faqs = [
  {
    question: "What services do you offer?",
    answer:
      "We offer web development, mobile app development, UI/UX design, and Quranic teaching services.",
  },
  {
    question: "How long does a typical project take?",
    answer:
      "Project timelines vary depending on complexity, but most web development projects take 4-8 weeks.",
  },
  {
    question: "Do you provide ongoing support?",
    answer:
      "Yes, we offer maintenance and support packages to keep your website updated and secure.",
  },
  {
    question: "What is your pricing structure?",
    answer:
      "We offer competitive pricing based on project requirements. Contact us for a custom quote.",
  },
  {
    question: "Can you work with existing websites?",
    answer:
      "Absolutely! We can redesign, update, or add features to existing websites.",
  },
  {
    question: "Do you offer Quranic teaching online?",
    answer:
      "Yes, we provide personalized online Quran teaching sessions with qualified instructors.",
  },
  {
    question: "What technologies do you use?",
    answer:
      "We use modern technologies like React, Node.js, and Tailwind CSS for web development.",
  },
  {
    question: "How do I get started?",
    answer:
      "Simply contact us through our website or email, and we'll discuss your project requirements.",
  },
  {
    question: "Do you offer training for developers?",
    answer:
      "Yes, we provide mentorship and training programs for aspiring developers.",
  },
  {
    question: "What makes you different from other agencies?",
    answer:
      "We combine technical expertise with ethical values, ensuring responsible and meaningful solutions.",
  },
];

export default function FAQs() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto max-w-4xl px-4">
        <motion.h2
          className="text-3xl font-bold text-center mb-12 text-gray-800"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Frequently Asked Questions
        </motion.h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-lg shadow-md"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <button
                className="w-full text-left p-6 focus:outline-none"
                onClick={() => toggleFAQ(index)}
              >
                <div className="flex justify-between items-center">
                  <h3 className="text-lg font-semibold text-gray-800">
                    {faq.question}
                  </h3>
                  <span className="text-teal-500 text-xl">
                    {openIndex === index ? "−" : "+"}
                  </span>
                </div>
              </button>
              {openIndex === index && (
                <motion.div
                  className="px-6 pb-6"
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <p className="text-gray-600">{faq.answer}</p>
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

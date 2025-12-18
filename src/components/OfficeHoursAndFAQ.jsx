import React from "react";
import { motion } from "framer-motion";
import { Clock, MessageSquare, Briefcase } from "lucide-react"; // Imported icons for hours, FAQ, and project

// --- Data for the component ---
const officeHours = [
  { day: "Monday - Friday", time: "9:00 AM – 6:00 PM" },
  { day: "Saturday", time: "10:00 AM – 4:00 PM" },
  { day: "Sunday", time: "Closed" },
  { day: "Timezone", time: "EST (UTC-5)" },
];

const quickAnswers = [
  {
    question: "How long does a typical project take?",
    answer:
      "Project timelines vary based on complexity, typically ranging from 4–12 weeks.",
    icon: Briefcase,
  },
  {
    question: "Do you offer free trials for Quran classes?",
    answer:
      "Yes: We offer a free trial session to help you find the perfect teacher.",
    icon: MessageSquare, // Reusing icon for simplicity
  },
  {
    question: "What is your response time?",
    answer:
      "We typically respond to all inquiries within 24 hours on business days.",
    icon: Clock, // Reusing icon for simplicity
  },
];

// --- Functional Component ---
const OfficeHoursAndFAQ = () => {
  return (
    // DARK THEME BACKGROUND: Using a consistent deep blue/purple color
    <section className="py-20 bg-[#120a26]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* --- LEFT COLUMN: Office Hours --- */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex flex-col"
          >
            <div className="flex items-center text-xl font-bold mb-6">
              <Clock className="w-6 h-6 text-blue-400 mr-3" />
              <h3 className="text-white">Office Hours</h3>
            </div>

            {/* Hours Table/List */}
            <div className="bg-slate-800/60 rounded-xl overflow-hidden shadow-xl border border-slate-700/50">
              {officeHours.map((item, index) => (
                <div
                  key={index}
                  className={`flex justify-between p-4 ${
                    index < officeHours.length - 1
                      ? "border-b border-slate-700"
                      : ""
                  }`}
                >
                  <span className="text-gray-300 font-medium">{item.day}</span>
                  <span
                    className={`font-semibold ${
                      item.time === "Closed" ? "text-red-400" : "text-white"
                    }`}
                  >
                    {item.time}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* --- RIGHT COLUMN: Quick Answers (FAQ) --- */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex flex-col"
          >
            <div className="flex items-center text-xl font-bold mb-6">
              <MessageSquare className="w-6 h-6 text-purple-400 mr-3" />
              <h3 className="text-white">Quick Answers</h3>
            </div>

            {/* FAQ Cards/Accordion Style */}
            <div className="space-y-4">
              {quickAnswers.map((item, index) => (
                <div
                  key={index}
                  className="p-5 rounded-xl bg-slate-800/60 shadow-lg border border-slate-700/50"
                >
                  <h4 className="text-white font-semibold mb-1 flex items-center">
                    <item.icon
                      className={`w-4 h-4 mr-2 ${
                        index % 2 === 0 ? "text-blue-400" : "text-purple-400"
                      }`}
                    />
                    {item.question}
                  </h4>
                  <p className="text-gray-400 text-sm">{item.answer}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default OfficeHoursAndFAQ;

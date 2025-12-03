import React from "react";
import { motion } from "framer-motion";
import {
  Linkedin,
  Twitter,
  Instagram,
  MessageCircle,
  Facebook,
  Mail,
} from "lucide-react";

// --- Contact Data (6 Options: Finalized Links) ---
const contactData = [
  {
    title: "Connect on LinkedIn",
    // ✅ Updated Detail
    detail: "iqra online",
    icon: Linkedin,
    color: "text-blue-700",
    // ✅ Updated actionLink
    actionLink: "https://www.linkedin.com/in/iqra-online-abb265393/",
    actionLabel: "View Profile",
    gradientClass: "from-blue-700 to-blue-400 shadow-blue-500/30",
  },
  {
    title: "Follow on X (Twitter)",
    // ⚠️ Placeholder Reminder
    detail: "@YOUR-TWITTER-HANDLE",
    icon: Twitter,
    color: "text-slate-900",
    // ⚠️ Placeholder Reminder
    actionLink: "https://twitter.com/YOUR-TWITTER-HANDLE",
    actionLabel: "Follow Now",
    gradientClass: "from-slate-800 to-slate-600 shadow-slate-700/30",
  },
  {
    title: "Creative on Instagram",
    // ⚠️ Placeholder Reminder
    detail: "@YOUR-INSTAGRAM-HANDLE",
    icon: Instagram,
    color: "text-purple-600",
    // ⚠️ Placeholder Reminder
    actionLink: "https://www.instagram.com/YOUR-INSTAGRAM-HANDLE",
    actionLabel: "View Profile",
    gradientClass: "from-purple-600 to-pink-500 shadow-purple-500/30",
  },
  {
    title: "Chat on WhatsApp",
    // ✅ Updated Number
    detail: "+44 7303 179101",
    icon: MessageCircle,
    color: "text-green-600",
    // ✅ Corrected actionLink with number
    actionLink:
      "https://wa.me/447303179101?text=Hello%2C%20I%20have%20an%20inquiry%20from%20your%20website.",
    actionLabel: "Start Chat",
    gradientClass: "from-green-600 to-green-400 shadow-green-500/30",
  },
  {
    title: "Like Us on Facebook",
    // ✅ Updated Detail
    detail: "iqra blackburn",
    icon: Facebook,
    color: "text-blue-800",
    // ✅ Updated actionLink
    actionLink: "https://www.facebook.com/profile.php?id=61579509960287",
    actionLabel: "Visit Page",
    gradientClass: "from-blue-800 to-blue-600 shadow-blue-700/30",
  },
  {
    title: "Email Direct",
    detail: "iqraonline2025@gmail.com",
    icon: Mail,
    color: "text-red-500",
    actionLink:
      "https://mail.google.com/mail/?view=cm&fs=1&to=iqraonline2025@gmail.com&su=Professional%20Inquiry",
    actionLabel: "Send Email",
    gradientClass: "from-red-600 to-red-400 shadow-red-500/30",
  },
];

// --- Functional Component (No changes needed here as the logic is correct) ---
const ContactInfoCards = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-extrabold text-center text-gray-900 mb-12"
        >
          Connect With Us
        </motion.h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {contactData.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: index * 0.1 }}
                viewport={{ once: true, amount: 0.1 }}
                whileHover={{
                  y: -8,
                  boxShadow: "0 15px 30px rgba(0, 0, 0, 0.15)",
                }}
                className="bg-white p-6 rounded-xl shadow-2xl border border-gray-100/80 transition-all duration-300 flex flex-col items-center text-center"
              >
                {/* Icon */}
                <div
                  className={`p-4 rounded-full bg-white shadow-xl mb-4 ${item.color} ring-4 ring-gray-100`}
                >
                  <Icon className="w-8 h-8" />
                </div>

                {/* Title and Detail */}
                <h3 className="text-xl font-bold text-gray-900 mb-1">
                  {item.title}
                </h3>
                <p className="text-gray-600 mb-6 flex-grow">{item.detail}</p>

                {/* Functional Gradient Button (CTA) */}
                <motion.a
                  href={item.actionLink}
                  // Target _blank for non-mailto links
                  target={
                    item.actionLink.startsWith("mailto") ? "_self" : "_blank"
                  }
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`w-full py-3 rounded-lg text-white font-semibold transition-all duration-200 
                                  bg-gradient-to-r ${item.gradientClass} shadow-md hover:shadow-lg`}
                >
                  {item.actionLabel}
                </motion.a>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ContactInfoCards;

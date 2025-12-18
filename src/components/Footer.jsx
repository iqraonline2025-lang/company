import React, { useState } from "react";
import { Link } from "react-router-dom";
<<<<<<< HEAD
import { motion, AnimatePresence } from "framer-motion";
import { Facebook, Instagram, Linkedin, Twitter, X, Send, CheckCircle2 } from "lucide-react";
=======
// Using lucide-react for self-contained component
import { Facebook, Instagram, Linkedin, Twitter, X } from "lucide-react";
>>>>>>> e8d5e685ef16b3f7791a58e0cb28427671686f85

export default function Footer() {
  const [email, setEmail] = useState("");
  const [subscriptionMessage, setSubscriptionMessage] = useState(null);

<<<<<<< HEAD
=======
  // Function to handle subscription without using alert()
>>>>>>> e8d5e685ef16b3f7791a58e0cb28427671686f85
  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!email) return;

<<<<<<< HEAD
    setSubscriptionMessage({
      type: "success",
      text: "Welcome to the inner circle!",
    });

    setEmail("");
    setTimeout(() => setSubscriptionMessage(null), 5000);
  };

  return (
    <footer className="relative w-full bg-[#050505] pt-20 overflow-hidden">
      {/* 1. CINEMATIC BACKGROUND SYSTEM */}
      <div className="absolute inset-0 z-0">
        <div 
          className="absolute inset-0 bg-cover bg-center grayscale opacity-20 scale-110"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?auto=format&fit=crop&w=1600&q=80')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/80 to-transparent" />
        {/* Glowing Accent */}
        <div className="absolute -top-[20%] left-1/2 -translate-x-1/2 w-[80%] h-[40%] bg-purple-600/10 blur-[120px] rounded-full" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-8">
        
        {/* 2. TOP SECTION: BRAND & NEWSLETTER OVERLAY */}
        <div className="grid lg:grid-cols-2 gap-16 mb-24 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl font-black mb-6 tracking-tighter text-white">
              IQRAONLINE<span className="text-purple-500">.</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-md leading-relaxed font-light">
              Crafting beautiful digital experiences with modern design,
              innovative development, and world-class performance.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative p-8 rounded-[2rem] bg-white/[0.03] border border-white/10 backdrop-blur-xl"
          >
            <h3 className="text-xl font-bold mb-4 text-white">Stay in the flow</h3>
            <form onSubmit={handleSubscribe} className="relative group">
              <input
                type="email"
                placeholder="Your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full pl-6 pr-16 py-4 rounded-2xl bg-white/5 border border-white/10 text-white outline-none focus:border-purple-500/50 transition-all placeholder:text-gray-600"
=======
    // Simulate API call or processing delay
    setSubscriptionMessage({
      type: "success",
      text: `Thank you, ${email}! You are now subscribed to Oryntix updates.`,
    });

    // Clear the form after a simulated successful submission
    setEmail("");

    // Automatically clear the message after 5 seconds
    setTimeout(() => {
      setSubscriptionMessage(null);
    }, 5000);
  };

  return (
    <footer className="relative w-full text-white overflow-hidden rounded-t-xl mt-8">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?auto=format&fit=crop&w=1600&q=80')",
        }}
      ></div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-gray-900/90 backdrop-blur-sm"></div>

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-6 md:px-12 py-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand & Socials */}
          <div>
            <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              Oryntix
            </h2>
            <p className="text-gray-300 leading-relaxed">
              Crafting beautiful digital experiences with modern design,
              innovative development, and world-class performance.
            </p>

            <div className="flex gap-4 mt-6">
              {/* Social Links with Purple Border Hover */}
              <a
                // ⚠️ INSERT YOUR FACEBOOK PROFILE URL HERE ⚠️
                href="https://www.facebook.com/profile.php?id=61579509960287"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 border-2 border-transparent bg-white/10 rounded-full hover:bg-white/20 hover:border-purple-400 transition duration-200"
              >
                <Facebook size={18} />
              </a>
              <a
                // ⚠️ INSERT YOUR INSTAGRAM PROFILE URL HERE ⚠️
                href="https://instagram.com/YOUR_INSTAGRAM_HANDLE"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 border-2 border-transparent bg-white/10 rounded-full hover:bg-white/20 hover:border-purple-400 transition duration-200"
              >
                <Instagram size={18} />
              </a>
              <a
                // ⚠️ INSERT YOUR X (TWITTER) PROFILE URL HERE ⚠️
                href="https://x.com/YOUR_TWITTER_HANDLE"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 border-2 border-transparent bg-white/10 rounded-full hover:bg-white/20 hover:border-purple-400 transition duration-200"
              >
                <Twitter size={18} />
              </a>
              <a
                // ⚠️ INSERT YOUR LINKEDIN PROFILE URL HERE ⚠️
                href="https://www.linkedin.com/in/iqra-online-abb265393/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 border-2 border-transparent bg-white/10 rounded-full hover:bg-white/20 hover:border-purple-400 transition duration-200"
              >
                <Linkedin size={18} />
              </a>
            </div>
          </div>

          {/* Links 1 */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Company</h3>
            <ul className="space-y-3 text-gray-300">
              <li>
                {/* Text Link with Purple Text Hover */}
                <Link to="/about" className="hover:text-purple-400 transition">
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/careers"
                  className="hover:text-purple-400 transition"
                >
                  Careers
                </Link>
              </li>
              <li>
                <Link to="/blog" className="hover:text-purple-400 transition">
                  Blog
                </Link>
              </li>
              <li>
                <Link to="/press" className="hover:text-purple-400 transition">
                  Press
                </Link>
              </li>
            </ul>
          </div>

          {/* Links 2 */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Services</h3>
            <ul className="space-y-3 text-gray-300">
              <li>
                <Link
                  to="/services"
                  className="hover:text-purple-400 transition"
                >
                  Web Development
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="hover:text-purple-400 transition"
                >
                  UI / UX Design
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="hover:text-purple-400 transition"
                >
                  Full-Stack Solutions
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="hover:text-purple-400 transition"
                >
                  SEO & Marketing
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter & Functionality */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Stay Updated</h3>
            <p className="text-gray-300 mb-4">
              Subscribe to receive our latest news, updates & digital insights.
            </p>
            <form onSubmit={handleSubscribe} className="flex">
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3 rounded-l-lg bg-white/10 placeholder-gray-300 text-white outline-none focus:ring-2 focus:ring-purple-400"
>>>>>>> e8d5e685ef16b3f7791a58e0cb28427671686f85
                required
              />
              <button
                type="submit"
<<<<<<< HEAD
                className="absolute right-2 top-2 bottom-2 px-4 bg-white text-black rounded-xl hover:bg-purple-500 hover:text-white transition-all duration-300 active:scale-95"
              >
                <Send size={18} />
              </button>
            </form>

            <AnimatePresence>
              {subscriptionMessage && (
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className="absolute left-8 right-8 -bottom-16 p-4 rounded-xl bg-purple-600 text-white flex items-center justify-between shadow-2xl shadow-purple-900/40"
                >
                  <div className="flex items-center gap-3">
                    <CheckCircle2 size={18} />
                    <span className="text-sm font-medium">{subscriptionMessage.text}</span>
                  </div>
                  <X size={16} className="cursor-pointer" onClick={() => setSubscriptionMessage(null)} />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>

        {/* 3. LINK ECOSYSTEM */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 pb-20 border-b border-white/5">
          {/* Socials Column */}
          <div className="col-span-2 md:col-span-1">
            <h4 className="text-xs font-bold uppercase tracking-[0.3em] text-gray-500 mb-8">Connect</h4>
            <div className="flex flex-wrap gap-3">
              {[Facebook, Instagram, Twitter, Linkedin].map((Icon, idx) => (
                <a key={idx} href="#" className="p-4 bg-white/5 rounded-2xl border border-white/5 text-gray-400 hover:text-white hover:border-purple-500/50 hover:-translate-y-1 transition-all duration-300">
                  <Icon size={20} />
                </a>
              ))}
            </div>
          </div>

          {/* Links Columns */}
          {[
            { title: "Company", links: ["About Us", "Careers", "Blog", "Press"] },
            { title: "Services", links: ["Web Dev", "UI/UX Design", "Full-Stack", "SEO"] }
          ].map((col, idx) => (
            <div key={idx}>
              <h4 className="text-xs font-bold uppercase tracking-[0.3em] text-gray-500 mb-8">{col.title}</h4>
              <ul className="space-y-4">
                {col.links.map((link) => (
                  <li key={link}>
                    <Link to="#" className="text-gray-400 hover:text-purple-400 font-light transition-colors duration-300">
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div>
             <h4 className="text-xs font-bold uppercase tracking-[0.3em] text-gray-500 mb-8">Location</h4>
             <p className="text-gray-400 font-light leading-relaxed">
               Global Remote / <br />
               Blackburn, UK
             </p>
          </div>
        </div>

        {/* 4. LEGAL & UTILITY */}
        <div className="py-12 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-gray-600 text-sm font-light italic">
            © {new Date().getFullYear()} Iqra Online. Architectural Digital Design.
          </p>
          <div className="flex gap-8 text-gray-600 text-sm">
            <a href="#" className="hover:text-white transition-colors">Privacy</a>
            <a href="#" className="hover:text-white transition-colors">Terms</a>
            <a href="#" className="hover:text-white transition-colors">Security</a>
=======
                className="px-6 bg-gradient-to-r from-purple-600 to-blue-600 rounded-r-lg font-semibold hover:from-purple-700 hover:to-blue-700 transition"
              >
                Subscribe
              </button>
            </form>

            {/* Newsletter Subscription Message (Functional Alert Replacement) */}
            {subscriptionMessage && (
              <div
                className={`mt-4 p-4 rounded-lg flex items-center justify-between text-sm font-semibold 
                    ${
                      subscriptionMessage.type === "success"
                        ? "bg-green-600 text-white"
                        : "bg-red-600 text-white"
                    }`}
              >
                <p>{subscriptionMessage.text}</p>
                <button
                  onClick={() => setSubscriptionMessage(null)}
                  className="p-1 rounded-full hover:bg-white/20 transition"
                  aria-label="Dismiss message"
                >
                  <X size={16} />
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Divider */}
        <div className="mt-16 h-px bg-white/20"></div>

        {/* Bottom Bar */}
        <div className="mt-8 flex flex-col md:flex-row justify-between text-gray-400 text-sm">
          <p>© {new Date().getFullYear()} Iqra Online. All rights reserved.</p>
          <div className="flex gap-6 mt-3 md:mt-0">
            {/* Bottom Links with Purple Text Hover */}
            <a href="#" className="hover:text-purple-400 transition">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-purple-400 transition">
              Terms of Service
            </a>
            <a href="#" className="hover:text-purple-400 transition">
              Support
            </a>
>>>>>>> e8d5e685ef16b3f7791a58e0cb28427671686f85
          </div>
        </div>
      </div>
    </footer>
  );
<<<<<<< HEAD
}
=======
}
>>>>>>> e8d5e685ef16b3f7791a58e0cb28427671686f85

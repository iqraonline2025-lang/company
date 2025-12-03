import React, { useState } from "react";
import { Link } from "react-router-dom";
// Using lucide-react for self-contained component
import { Facebook, Instagram, Linkedin, Twitter, X } from "lucide-react";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [subscriptionMessage, setSubscriptionMessage] = useState(null);

  // Function to handle subscription without using alert()
  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!email) return;

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
                required
              />
              <button
                type="submit"
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
          </div>
        </div>
      </div>
    </footer>
  );
}

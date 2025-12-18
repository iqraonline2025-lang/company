import { useState, useEffect } from "react";
<<<<<<< HEAD
import { Link, useNavigate, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Twitter, Instagram, Linkedin, LogOut, ArrowRight } from "lucide-react";
=======
import { Link, useNavigate } from "react-router-dom";
import {
  Menu,
  X,
  Twitter,
  Linkedin,
  Github,
  Instagram,
  LogOut,
} from "lucide-react";
>>>>>>> e8d5e685ef16b3f7791a58e0cb28427671686f85
import { supabase } from "../supabase-client";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();
<<<<<<< HEAD
  const location = useLocation();
=======
>>>>>>> e8d5e685ef16b3f7791a58e0cb28427671686f85

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

<<<<<<< HEAD
  // Animation Variants
  const navContainerVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.5, staggerChildren: 0.1, delayChildren: 0.2 } 
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: { opacity: 1, y: 0 }
  };

  const mobileMenuVariants = {
    closed: { opacity: 0, height: 0, transition: { duration: 0.3, ease: "easeInOut" } },
    open: { opacity: 1, height: "auto", transition: { duration: 0.5, ease: "anticipate" } }
  };

  const handleLogout = async () => {
    localStorage.removeItem("admin_session");
=======
  const handleLogout = async () => {
    // Clear mock admin session if it exists
    localStorage.removeItem("admin_session");

    // Also sign out from Supabase
>>>>>>> e8d5e685ef16b3f7791a58e0cb28427671686f85
    await supabase.auth.signOut();
    setIsLoggedIn(false);
    setIsAdmin(false);
    navigate("/login");
  };

<<<<<<< HEAD
=======
  useEffect(() => {
    const checkUserStatus = async () => {
      // First check for mock admin session (for testing)
      const mockSession = localStorage.getItem("admin_session");
      if (mockSession) {
        try {
          const sessionData = JSON.parse(mockSession);
          if (sessionData.expires_at > Date.now()) {
            setIsAdmin(true);
            setIsLoggedIn(true);
            return;
          } else {
            localStorage.removeItem("admin_session");
          }
        } catch (e) {
          localStorage.removeItem("admin_session");
        }
      }

      // Fall back to Supabase auth
      const {
        data: { user },
        error,
      } = await supabase.auth.getUser();

      if (user && !error) {
        setIsLoggedIn(true);
        // Check if user is admin (you can modify this logic based on your admin criteria)
        const adminEmails = ["admin@oryntix.com", "admin@example.com"]; // Add your admin emails here
        const userIsAdmin = adminEmails.includes(user.email);
        setIsAdmin(userIsAdmin);
      } else {
        setIsLoggedIn(false);
        setIsAdmin(false);
      }
    };

    checkUserStatus();
  }, [navigate]);

>>>>>>> e8d5e685ef16b3f7791a58e0cb28427671686f85
  const navItems = [
    { id: "home", label: "Home", href: "/" },
    { id: "about", label: "About", href: "/about" },
    { id: "services", label: "Services", href: "/services" },
    { id: "portfolio", label: "Portfolio", href: "/portfolio" },
    { id: "quran", label: "Quran Teaching", href: "/quranteaching" },
<<<<<<< HEAD
    ...(isAdmin ? [{ id: "dashboard", label: "Dashboard", href: "/dashboard" }] : []),
  ];

  return (
    <motion.header
      initial="hidden"
      animate="visible"
      variants={navContainerVariants}
      className={`fixed top-0 left-0 w-full z-[100] transition-all duration-700 ${
        scrolled 
          ? "py-3 bg-white/70 backdrop-blur-2xl shadow-[0_10px_40px_rgba(0,0,0,0.08)] border-b border-white/20" 
          : "py-6 bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-8 flex items-center justify-between">
        
        {/* BRAND LOGO with Hover Animation */}
        <Link to="/" className="group flex items-center gap-3">
          <motion.div 
            whileHover={{ rotate: 180, scale: 1.1 }}
            className="w-10 h-10 bg-gradient-to-tr from-purple-600 to-indigo-600 rounded-xl flex items-center justify-center text-white font-black text-xl shadow-lg"
          >
            I
          </motion.div>
          <div className="flex flex-col">
            <span className={`text-xl font-black tracking-tighter leading-none transition-colors duration-500 ${scrolled ? "text-gray-900" : "text-white"}`}>
              Iqra<span className="text-purple-600 italic">Online</span>
            </span>
            <span className="text-[10px] uppercase tracking-[0.3em] text-purple-500 font-bold">Academy</span>
          </div>
        </Link>

        {/* DESKTOP NAV */}
        <nav className="hidden md:flex items-center gap-10">
          <ul className="flex items-center gap-2">
            {navItems.map((item) => (
              <motion.li key={item.id} variants={itemVariants} className="relative">
                <Link
                  to={item.href}
                  className={`px-4 py-2 text-xs font-bold uppercase tracking-[0.15em] rounded-full transition-all relative z-10 ${
                    location.pathname === item.href 
                      ? (scrolled ? "text-purple-600" : "text-white")
                      : (scrolled ? "text-gray-500 hover:text-gray-900" : "text-white/60 hover:text-white")
                  }`}
                >
                  {item.label}
                  {location.pathname === item.href && (
                    <motion.span 
                      layoutId="nav-pill"
                      className={`absolute inset-0 rounded-full -z-10 ${scrolled ? "bg-purple-100" : "bg-white/10"}`}
                      transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                    />
                  )}
                </Link>
              </motion.li>
            ))}
          </ul>

          <motion.div variants={itemVariants} className="flex items-center gap-4 pl-6 border-l border-gray-200/20">
            {isLoggedIn && (
              <motion.button
                whileHover={{ scale: 1.1, color: "#ef4444" }}
                whileTap={{ scale: 0.9 }}
                onClick={handleLogout}
                className={`p-2 transition-colors ${scrolled ? "text-gray-600" : "text-white"}`}
              >
                <LogOut size={18} />
              </motion.button>
            )}
            <Link
              to="/contact"
              className="group flex items-center gap-2 px-6 py-3 bg-purple-600 text-white text-[10px] font-black uppercase tracking-widest rounded-xl hover:bg-purple-700 hover:shadow-[0_10px_20px_rgba(147,51,234,0.3)] transition-all active:scale-95"
            >
              Get Started
              <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </nav>

        {/* MOBILE TOGGLE */}
        <motion.button
          whileTap={{ scale: 0.9 }}
          onClick={() => setOpen(!open)}
          className={`md:hidden p-3 rounded-2xl transition-colors ${
            scrolled ? "text-gray-900 bg-gray-100" : "text-white bg-white/10 shadow-glass"
          }`}
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </motion.button>
      </div>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial="closed"
            animate="open"
            exit="closed"
            variants={mobileMenuVariants}
            className="absolute top-full left-0 w-full bg-white/95 backdrop-blur-2xl shadow-2xl border-t border-gray-100 md:hidden overflow-hidden"
          >
            <div className="p-8 space-y-8">
              <ul className="space-y-4">
                {navItems.map((item, i) => (
                  <motion.li 
                    key={item.id}
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: i * 0.1 }}
                  >
                    <Link
                      to={item.href}
                      onClick={() => setOpen(false)}
                      className="text-4xl font-black text-gray-900 hover:text-purple-600 transition-colors tracking-tighter"
                    >
                      {item.label}
                    </Link>
                  </motion.li>
                ))}
              </ul>
              
              <div className="pt-8 border-t border-gray-100 flex justify-between items-center">
                <div className="flex gap-6">
                  {[Twitter, Instagram, Linkedin].map((Icon, idx) => (
                    <motion.a 
                      key={idx} 
                      whileHover={{ y: -3, color: "#9333ea" }}
                      href="#" 
                      className="text-gray-400"
                    >
                      <Icon size={22} />
                    </motion.a>
                  ))}
                </div>
                <Link
                  to="/contact"
                  onClick={() => setOpen(false)}
                  className="px-6 py-3 bg-gray-900 text-white text-xs font-bold uppercase tracking-widest rounded-xl"
                >
                  Let's Talk
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
=======
    { id: "contact", label: "Contact", href: "/contact" },
    ...(isAdmin
      ? [{ id: "dashboard", label: "Dashboard", href: "/dashboard" }]
      : []),
  ];

  const baseLinkClasses =
    "relative px-2 py-1 transition-all duration-200 rounded";
  const hoverClasses =
    "hover:text-purple-600 hover:border-b-2 hover:border-purple-500";
  // Used for mobile menu to show a clear box/border around the link
  const mobileHoverClasses =
    "hover:text-purple-600 hover:bg-purple-50 hover:border-2 hover:border-purple-500";

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-shadow transition-colors ${
        scrolled ? "shadow-lg bg-white/95 backdrop-blur" : "bg-white/60"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
        <div className="text-xl font-bold text-purple-600">Iqra Online</div>

        {/* Desktop nav */}
        <nav className="hidden md:flex md:items-center md:gap-8">
          <ul className="flex items-center gap-6 text-sm font-medium">
            {navItems.map((item) => (
              <li key={item.id}>
                {item.href && item.href.startsWith("/") ? (
                  <Link
                    to={item.href}
                    // 🌟 Desktop Link Fix
                    className={`${baseLinkClasses} ${hoverClasses} border-b-2 border-transparent`}
                  >
                    {item.label}
                  </Link>
                ) : (
                  <a
                    href={`#${item.id}`}
                    // 🌟 Desktop Link Fix
                    className={`${baseLinkClasses} ${hoverClasses} border-b-2 border-transparent`}
                  >
                    {item.label}
                  </a>
                )}
              </li>
            ))}
          </ul>

          {/* Desktop social and logout */}
          <div className="ml-6 flex items-center gap-3">
            {/* Social links are not part of the 'navItems' request, but updating hover state for consistency */}
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noreferrer"
              className="p-2 rounded-full hover:bg-gray-100 hover:text-purple-600 transition-colors"
              aria-label="Twitter"
            >
              <Twitter size={18} />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noreferrer"
              className="p-2 rounded-full hover:bg-gray-100 hover:text-purple-600 transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={18} />
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noreferrer"
              className="p-2 rounded-full hover:bg-gray-100 hover:text-purple-600 transition-colors"
              aria-label="GitHub"
            >
              <Github size={18} />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer"
              className="p-2 rounded-full hover:bg-gray-100 hover:text-purple-600 transition-colors"
              aria-label="Instagram"
            >
              <Instagram size={18} />
            </a>

            {isLoggedIn && (
              <button
                onClick={handleLogout}
                className="p-2 rounded-full hover:bg-gray-100 hover:text-purple-600 transition-colors"
                aria-label="Logout"
              >
                <LogOut size={18} />
              </button>
            )}
          </div>
        </nav>

        {/* Mobile controls */}
        <div className="flex items-center gap-3 md:hidden">
          <button className="p-2 rounded-md hover:bg-gray-100 hover:text-purple-600 transition-colors">
            <Twitter size={18} />
          </button>

          <button
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((s) => !s)}
            className="p-2 rounded-md hover:bg-gray-100 hover:text-purple-600 transition-colors"
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden transition-all duration-300 ${
          open ? "max-h-screen" : "max-h-0"
        } overflow-hidden bg-white/95 border-t`}
      >
        <div className="px-6 pt-4 pb-6">
          <ul className="flex flex-col gap-3">
            {navItems.map((item) => (
              <li key={item.id}>
                {item.href && item.href.startsWith("/") ? (
                  <Link
                    to={item.href}
                    onClick={() => setOpen(false)}
                    // 🌟 Mobile Link Fix
                    className={`block px-3 py-2 text-base font-medium rounded border-2 border-transparent ${mobileHoverClasses}`}
                  >
                    {item.label}
                  </Link>
                ) : (
                  <a
                    href={`#${item.id}`}
                    onClick={() => setOpen(false)}
                    // 🌟 Mobile Link Fix
                    className={`block px-3 py-2 text-base font-medium rounded border-2 border-transparent ${mobileHoverClasses}`}
                  >
                    {item.label}
                  </a>
                )}
              </li>
            ))}
          </ul>

          <div className="mt-4 border-t pt-4 flex items-center gap-3">
            {/* Mobile Social Links */}
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noreferrer"
              className="p-2 rounded-md hover:bg-gray-100 hover:text-purple-600 transition-colors"
              aria-label="Twitter"
            >
              <Twitter size={18} />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noreferrer"
              className="p-2 rounded-md hover:bg-gray-100 hover:text-purple-600 transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={18} />
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noreferrer"
              className="p-2 rounded-md hover:bg-gray-100 hover:text-purple-600 transition-colors"
              aria-label="GitHub"
            >
              <Github size={18} />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer"
              className="p-2 rounded-md hover:bg-gray-100 hover:text-purple-600 transition-colors"
              aria-label="Instagram"
            >
              <Instagram size={18} />
            </a>

            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="ml-auto px-3 py-2 bg-blue-600 text-white rounded-md text-sm hover:bg-blue-700 transition-colors"
            >
              Contact
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
>>>>>>> e8d5e685ef16b3f7791a58e0cb28427671686f85

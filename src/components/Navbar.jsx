import { useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Twitter, Instagram, Linkedin, LogOut, ArrowRight } from "lucide-react";
import { supabase } from "../supabase-client";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

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
    await supabase.auth.signOut();
    setIsLoggedIn(false);
    setIsAdmin(false);
    navigate("/login");
  };

  const navItems = [
    { id: "home", label: "Home", href: "/" },
    { id: "about", label: "About", href: "/about" },
    { id: "services", label: "Services", href: "/services" },
    { id: "portfolio", label: "Portfolio", href: "/portfolio" },
    { id: "quran", label: "Quran Teaching", href: "/quranteaching" },
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
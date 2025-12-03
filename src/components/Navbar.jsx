import { useState, useEffect } from "react";
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
import { supabase } from "../supabase-client";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleLogout = async () => {
    // Clear mock admin session if it exists
    localStorage.removeItem("admin_session");

    // Also sign out from Supabase
    await supabase.auth.signOut();
    setIsLoggedIn(false);
    setIsAdmin(false);
    navigate("/login");
  };

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

  const navItems = [
    { id: "home", label: "Home", href: "/" },
    { id: "about", label: "About", href: "/about" },
    { id: "services", label: "Services", href: "/services" },
    { id: "portfolio", label: "Portfolio", href: "/portfolio" },
    { id: "quran", label: "Quran Teaching", href: "/quranteaching" },
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

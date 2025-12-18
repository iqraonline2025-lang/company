import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
export default function CardsSection() {
  const navigate = useNavigate();
  return (
    <section className="relative py-20 bg-gray-100 flex flex-col items-center">
      <h2 className="text-4xl font-bold mb-12">What We Offer</h2>

      <div className="flex flex-col md:flex-row gap-8 max-w-6xl w-full px-4">
        {/* Web Development Card */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="bg-white rounded-2xl shadow-lg overflow-hidden flex-1 flex flex-col"
        >
          <img
            src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=600&q=80"
            alt="Web Development"
            className="w-full h-64 object-cover"
          />
          <div className="p-6 flex flex-col flex-1">
            <h3 className="text-2xl font-semibold mb-4">Web Development</h3>
            <p className="text-gray-600 flex-1">
              Learn modern web development technologies and build professional
              websites.
            </p>
            <a
              href="#web-dev"
              className="mt-6 inline-block text-blue-600 font-semibold hover:underline"
              onClick={() => navigate("/portfolio")}
            >
              Learn More →
            </a>
          </div>
        </motion.div>

        {/* Quran Teaching Card */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="bg-white rounded-2xl shadow-lg overflow-hidden flex-1 flex flex-col"
        >
          <img
            src="https://images.unsplash.com/photo-1609599006353-e629aaabfeae?auto=format&fit=crop&w=600&q=80"
            alt="Quran Teaching"
            className="w-full h-64 object-cover"
          />
          <div className="p-6 flex flex-col flex-1">
            <h3 className="text-2xl font-semibold mb-4">Quran Teaching</h3>
            <p className="text-gray-600 flex-1">
              Connect with the teachings of the Quran through interactive
              lessons and guidance.
            </p>
            <a
              href="#quran-teaching"
              className="mt-6 inline-block text-green-600 font-semibold hover:underline"
              onClick={() => navigate("/quranteaching")}
            >
              Learn More →
            </a>
          </div>
        </motion.div>
      </div>

      {/* Arrow Decoration */}
      <div className="absolute bottom-0 right-10 md:right-20 animate-bounce">
        <svg
          className="w-12 h-12 text-gray-400"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19 9l-7 7-7-7"
          ></path>
        </svg>
      </div>
    </section>
  );
}

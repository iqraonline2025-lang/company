import React, { useEffect, useState, useCallback } from "react";
import { motion } from "framer-motion";
import { Clock, Users, Star } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { supabase } from "../supabase-client"; // Assuming your Supabase client is here

const CoursesSection = () => {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  // --- Data Fetching and Real-time Subscription Logic ---

  // Memoized function for initial data fetching
  const fetchCourses = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);

      // Best Practice: Explicitly select necessary columns
      const { data, error: fetchError } = await supabase
        .from("courses")
        .select(
          "id, title, level, duration, students, rating, description, color"
        )
        .order("id", { ascending: true });

      if (fetchError) {
        console.error("Supabase Error fetching courses:", fetchError);
        setError("Could not load courses from the server.");
        setCourses([]);
      } else {
        setCourses(data || []);
      }
    } catch (err) {
      console.error("Unexpected error during course fetch:", err);
      setError("An unexpected network error occurred.");
    } finally {
      setLoading(false);
    }
  }, []);

  // Effect for initial fetch and setting up real-time subscription
  useEffect(() => {
    fetchCourses(); // 1. Initial data load

    // 2. Set up real-time listener for updates
    const channel = supabase
      .channel("courses-channel")
      .on(
        "postgres_changes",
        { event: "*", schema: "public", table: "courses" },
        (payload) => {
          setCourses((prev) => {
            switch (payload.eventType) {
              case "INSERT":
                // Append new course
                return [...prev, payload.new];
              case "UPDATE":
                // Replace updated course
                return prev.map((c) =>
                  c.id === payload.new.id ? payload.new : c
                );
              case "DELETE":
                // Remove deleted course (using payload.old.id)
                return prev.filter((c) => c.id !== payload.old.id);
              default:
                return prev;
            }
          });
        }
      )
      .subscribe();

    // 3. Cleanup function: remove the channel when the component unmounts
    return () => {
      supabase.removeChannel(channel);
    };
  }, [fetchCourses]);

  // --- Render Loading, Error, and Empty States ---

  if (loading)
    return (
      <div className="flex justify-center items-center min-h-screen text-white">
        <span className="animate-pulse text-lg">Loading courses...</span>
      </div>
    );

  if (error)
    return (
      <div className="flex justify-center items-center min-h-screen bg-[#0e0a1f] p-8 text-center">
        <div className="text-red-400 border border-red-500/50 p-6 rounded-lg">
          <p className="text-xl font-semibold mb-2">🚨 Data Loading Error</p>
          <p>{error}</p>
          <p className="text-sm mt-2 text-red-300">
            Please check your network connection or try refreshing the page.
          </p>
        </div>
      </div>
    );

  if (courses.length === 0)
    return (
      <div className="flex justify-center items-center min-h-screen text-white text-xl">
        No courses available at the moment.
      </div>
    );

  // --- Animation Variants ---

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, delay: i * 0.1 },
    }),
  };

  // --- Main Render ---

  return (
    <section className="py-20 bg-gradient-to-br from-[#0e0a1f] via-[#1a0f2e] to-[#120a26] min-h-screen">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-4xl font-extrabold text-center mb-16 text-white tracking-tight"
        >
          Explore All{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
            {courses.length} Certified Courses
          </span>
        </motion.h2>

        {/* Course Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {courses.map((course, index) => {
            // Destructure course data with safe defaults (improved defaults for numbers)
            const {
              title = "Untitled Course",
              level = "All Levels",
              duration = "N/A",
              students = 0,
              rating = 0.0,
              description = "No description available.",
              // Default color if data is missing (e.g., for the Quran card)
              color = "from-gray-600 to-gray-500",
            } = course;

            return (
              <motion.div
                key={course.id}
                custom={index}
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                whileHover={{ scale: 1.03 }}
                viewport={{ once: true, amount: 0.2 }}
                className="flex flex-col rounded-xl overflow-hidden shadow-xl bg-slate-800/90 
                           backdrop-blur-md border border-slate-700/50 transition-all duration-300 hover:shadow-2xl cursor-pointer"
              >
                {/* Top Color Strip (The one that was potentially missing) */}
                <div className={`h-1.5 w-full bg-gradient-to-r ${color}`}></div>

                <div className="p-6 flex flex-col justify-between flex-grow">
                  {/* Card Header: Level and Rating */}
                  <div className="flex justify-between items-center mb-4">
                    <span className="bg-white/10 text-white text-xs font-medium px-3 py-1 rounded-full border border-white/20">
                      {level}
                    </span>
                    <div className="flex items-center text-yellow-400 text-sm font-semibold">
                      <Star className="w-3.5 h-3.5 mr-1 fill-yellow-400" />
                      {/* Format rating to one decimal place */}
                      {Number(rating).toFixed(1)}
                    </div>
                  </div>

                  {/* Card Content: Title and Description */}
                  <div>
                    <h3 className="text-white text-2xl font-semibold mb-2">
                      {title}
                    </h3>
                    <p className="text-gray-400 text-sm mb-6 line-clamp-3">
                      {description}
                    </p>
                  </div>

                  {/* Card Footer: Duration and Students */}
                  <div className="mt-auto">
                    <div className="flex items-center space-x-6 text-sm mb-6 text-gray-400">
                      <div className="flex items-center">
                        <Clock className="w-4 h-4 mr-1.5 text-blue-400" />
                        <span className="font-medium">{duration}</span>
                      </div>
                      <div className="flex items-center">
                        <Users className="w-4 h-4 mr-1.5 text-blue-400" />
                        <span className="font-medium">
                          {/* Format student count with commas */}
                          {Number(students).toLocaleString()}
                        </span>
                      </div>
                    </div>

                    {/* Enroll Button */}
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full py-3 rounded-lg text-white font-semibold 
                                 bg-gradient-to-r from-blue-500 to-purple-500 hover:from-purple-500 hover:to-blue-500 transition-colors duration-300"
                      onClick={() => navigate("/contact")}
                    >
                      Enroll Now
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CoursesSection;

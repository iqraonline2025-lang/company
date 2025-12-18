// src/components/ContactForm.jsx
import React, { useState } from "react";
import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    contactTime: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setIsSuccess(false);

    try {
      const response = await fetch(
        `${import.meta.env.VITE_SUPABASE_URL}/functions/v1/submit-contact`, // Using env variable
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            apikey: import.meta.env.VITE_SUPABASE_ANON_KEY,
            Authorization: `Bearer ${import.meta.env.VITE_SUPABASE_ANON_KEY}`,
          },
          body: JSON.stringify(formData),
        }
      );

      const result = await response.json();

      if (!result.success) throw new Error(result.error);

      setIsSuccess(true);
      setFormData({
        name: "",
        email: "",
        phone: "",
        service: "",
        contactTime: "",
        message: "",
      });

      setTimeout(() => setIsSuccess(false), 5000);
    } catch (err) {
      alert("Error submitting form: " + err.message);
    }

    setIsSubmitting(false);
  };

  // ... rest of your component remains the same
  if (isSuccess) {
    return (
      <section className="py-32 bg-gradient-to-br from-[#0e0a1f] via-[#1a0f2e] to-[#120a26] flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="p-10 md:p-16 rounded-xl bg-slate-800/60 border border-blue-500/50 
                     text-center max-w-2xl shadow-xl shadow-blue-900/40"
        >
          <CheckCircle className="w-16 h-16 text-blue-400 mx-auto mb-4" />
          <h2 className="text-3xl font-bold text-white mb-2">
            Inquiry Received!
          </h2>
          <p className="text-gray-300 text-lg">
            We will contact you during your preferred time slot shortly.
          </p>
        </motion.div>
      </section>
    );
  }

  return (
    <section
      id="contact-form"
      className="py-32 bg-gradient-to-br from-[#0e0a1f] via-[#1a0f2e] to-[#120a26]"
    >
      <div className="max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-extrabold text-white tracking-tight mb-2">
            Let's Discuss Your Needs
          </h2>
          <p className="text-gray-400 text-lg">
            Fill out the form below and indicate the best time for us to call or
            chat.
          </p>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="p-10 md:p-16 rounded-xl bg-slate-800/60 shadow-2xl shadow-slate-900/40 border border-slate-700/50"
          onSubmit={handleSubmit}
        >
          {/* Top Row: Name, Email, Phone */}
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            {["name", "email", "phone"].map((field) => (
              <div key={field}>
                <label
                  htmlFor={field}
                  className="block text-sm font-medium text-gray-300 mb-2 capitalize"
                >
                  {field} {field !== "phone" && "*"}
                </label>
                <input
                  type={
                    field === "email"
                      ? "email"
                      : field === "phone"
                      ? "tel"
                      : "text"
                  }
                  id={field}
                  name={field}
                  value={formData[field]}
                  onChange={handleChange}
                  placeholder={
                    field === "name"
                      ? "Full Name"
                      : field === "email"
                      ? "email@example.com"
                      : "Optional Phone Number"
                  }
                  className="w-full px-4 py-3 rounded-lg bg-slate-900 text-white placeholder-gray-500 border border-slate-700 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors"
                  required={field !== "phone"}
                />
              </div>
            ))}
          </div>

          {/* Middle Row: Service Type and Contact Time */}
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div>
              <label
                htmlFor="service"
                className="block text-sm font-medium text-gray-300 mb-2"
              >
                Program / Service Type *
              </label>
              <select
                id="service"
                name="service"
                value={formData.service}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg bg-slate-900 text-white border border-slate-700 focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-colors appearance-none"
                required
              >
                <option value="" disabled>
                  Select the type of service you are interested in
                </option>
                <option value="web_dev">Web Development</option>
                <option value="app_dev">Mobile App Development</option>
                <option value="consulting">Tech Consulting / Strategy</option>
                <option value="tajweed">Quranic Recitation (Tajweed)</option>
                <option value="hifz">Hifz Program (Memorization)</option>
                <option value="arabic">Classical Arabic Language</option>
                <option value="islamic_studies">General Islamic Studies</option>
              </select>
            </div>

            <div>
              <label
                htmlFor="contactTime"
                className="block text-sm font-medium text-gray-300 mb-2"
              >
                Preferred Contact Time *
              </label>
              <select
                id="contactTime"
                name="contactTime"
                value={formData.contactTime}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg bg-slate-900 text-white border border-slate-700 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors appearance-none"
                required
              >
                <option value="" disabled>
                  Select a suitable time
                </option>
                <option value="morning">Morning (9am - 12pm)</option>
                <option value="afternoon">Afternoon (12pm - 4pm)</option>
                <option value="evening">Evening (4pm - 8pm)</option>
                <option value="any">Anytime is fine</option>
              </select>
            </div>
          </div>

          {/* Message */}
          <div className="mb-8">
            <label
              htmlFor="message"
              className="block text-sm font-medium text-gray-300 mb-2"
            >
              Specific Questions or Goals *
            </label>
            <textarea
              id="message"
              name="message"
              rows="8"
              value={formData.message}
              onChange={handleChange}
              placeholder="Provide details about your project, goals, or current learning level..."
              className="w-full px-4 py-3 rounded-lg bg-slate-900 text-white placeholder-gray-500 border border-slate-700 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors resize-none"
              required
            ></textarea>
          </div>

          {/* Submit */}
          <motion.button
            type="submit"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            disabled={isSubmitting}
            className="mt-4 w-full py-3 rounded-lg text-white font-semibold 
                       bg-gradient-to-r from-purple-600 to-blue-500 shadow-lg shadow-purple-500/30 
                       transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitting ? "Submitting..." : "Send Inquiry"}
          </motion.button>
        </motion.form>
      </div>
    </section>
  );
}

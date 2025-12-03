import React from "react";
import { motion } from "framer-motion";

export default function GoogleMapSection() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <h2 className="text-3xl font-extrabold text-gray-900 tracking-tight">
            Find Our Location
          </h2>
          <p className="text-gray-600 text-lg">
            Visit our office or find us on the map below.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="relative w-full rounded-xl overflow-hidden shadow-xl border border-gray-200"
          style={{ height: "650px" }} // ⬅ Bigger map height
        >
          <iframe
            title="Office Location Map"
            src="https://www.google.com/maps/embed?pb=!1m21!1m12!1m3!1d18875.46285951364!2d-2.4642394306884707!3d53.746175114392365!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m6!3e0!4m3!3m2!1d53.7646466!2d-2.4602483!4m0!5e0!3m2!1sen!2suk!4v1764371075398!5m2!1sen!2suk"
            style={{ border: 0 }}
            width="100%"
            height="100%"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </motion.div>
      </div>
    </section>
  );
}

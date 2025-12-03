import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  Check,
  User,
  CreditCard,
  Calendar,
  Lock,
  ArrowLeft,
} from "lucide-react";
import { supabase } from "../supabase-client";

// ----------------------------
// PRICING SECTION
// ----------------------------
const PricingSection = ({ onChoosePlan }) => {
  const [plans, setPlans] = useState([]);

  useEffect(() => {
    const getPlans = async () => {
      const { data, error } = await supabase
        .from("pricing_plans")
        .select("*")
        .order("price", { ascending: true });
      if (error) console.log(error);
      else setPlans(data);
    };
    getPlans();
  }, []);

  return (
    <section className="py-16 px-4 bg-gray-50 min-h-screen">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          className="text-4xl font-bold text-center mb-4 text-purple-800"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Project Pricing Plans
        </motion.h2>
        <p className="text-center text-xl text-gray-600 mb-12">
          Select the tier that best suits your digital ambition.
        </p>

        <div className="grid gap-8 lg:grid-cols-3 md:grid-cols-2">
          {plans.map((plan, idx) => (
            <motion.div
              key={plan.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.2, duration: 0.6 }}
              viewport={{ once: true }}
              className={`text-center p-8 bg-white rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 ${
                plan.popular
                  ? "border-4 border-indigo-600 shadow-indigo-300/50"
                  : "border border-gray-200"
              }`}
            >
              {plan.popular && (
                <div className="bg-indigo-600 text-white px-4 py-1 rounded-full text-sm font-semibold mb-4 inline-block shadow-md">
                  Most Popular
                </div>
              )}
              <h3 className="text-3xl font-extrabold text-purple-800 mb-4">
                {plan.name}
              </h3>
              <div className="text-5xl font-bold text-indigo-700 mb-6">
                ${plan.price}
              </div>

              <ul className="text-left text-gray-700 mb-8 space-y-3">
                {plan.features?.map((feature, i) => (
                  <li key={i} className="flex items-start">
                    <Check className="text-green-500 w-5 h-5 mt-1 flex-shrink-0 mr-3" />
                    <span className="text-lg">{feature}</span>
                  </li>
                ))}
              </ul>

              <motion.button
                onClick={() => onChoosePlan(plan)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`w-full px-6 py-4 font-bold rounded-full transition-colors transform ${
                  plan.popular
                    ? "bg-indigo-600 text-white hover:bg-indigo-700 shadow-lg shadow-indigo-500/50"
                    : "bg-gray-200 text-purple-800 hover:bg-gray-300 border border-gray-300"
                }`}
              >
                Choose Plan
              </motion.button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// ----------------------------
// PAYMENT FORM WITH CARD INPUTS
// ----------------------------
const PaymentForm = ({ selectedPlan, onBack }) => {
  const [formData, setFormData] = useState({
    cardholder: "",
    cardNumber: "",
    expiry: "",
    cvv: "",
  });
  const [loading, setLoading] = useState(false);
  const [paymentStatus, setPaymentStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      // Call Supabase Edge Function to create PaymentIntent
      const res = await fetch(
        "https://inijadqaghcttqkhhiig.supabase.co/functions/v1/create-checkout",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImluaWphZHFhZ2hjdHRxa2hoaWlnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjQwNjgzODMsImV4cCI6MjA3OTY0NDM4M30.i3m0AcZn27YtK4g6vqR1-m6ceayoRguHkx-b_Yj4yns",
          },
          body: JSON.stringify({
            amount: selectedPlan.price * 100, // in cents
            cardholder: formData.cardholder,
            cardNumber: formData.cardNumber,
            expiry: formData.expiry,
            cvv: formData.cvv,
          }),
        }
      );
      const data = await res.json();

      if (data.clientSecret) {
        setPaymentStatus("success");
      } else {
        alert("Payment failed. Try again.");
      }
    } catch (err) {
      console.error(err);
      alert("Payment error, check console.");
    } finally {
      setLoading(false);
    }
  };

  if (paymentStatus === "success") {
    return (
      <div className="min-h-screen flex items-center justify-center bg-green-50 p-4">
        <div className="bg-white p-10 rounded-xl shadow-2xl text-center max-w-md w-full border-t-4 border-green-500">
          <Check className="w-16 h-16 text-green-500 mx-auto mb-6" />
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Payment Successful!
          </h2>
          <p className="text-lg text-gray-600 mb-6">
            Thank you for choosing the <b>{selectedPlan.name}</b> plan.
          </p>
          <button
            onClick={onBack}
            className="flex items-center mx-auto text-indigo-600 hover:text-indigo-800 transition-colors mt-6"
          >
            <ArrowLeft className="w-5 h-5 mr-2" /> Back to Pricing
          </button>
        </div>
      </div>
    );
  }

  return (
    <section className="min-h-screen flex items-center justify-center bg-gray-50 p-4">
      <div className="w-full max-w-2xl bg-white p-10 rounded-xl shadow-2xl border border-gray-100">
        <button
          onClick={onBack}
          className="flex items-center text-indigo-600 hover:text-indigo-800 transition-colors mb-6"
        >
          <ArrowLeft className="w-5 h-5 mr-2" /> Back to Pricing
        </button>

        <h2 className="text-4xl font-extrabold text-gray-800 mb-2">
          Secure Checkout
        </h2>
        <p className="text-xl text-gray-600 mb-8">
          Finalizing your <b>{selectedPlan.name}</b> plan.
        </p>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Cardholder */}
          <div>
            <label className="block mb-2">Cardholder Name</label>
            <div className="relative">
              <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                name="cardholder"
                value={formData.cardholder}
                onChange={handleChange}
                required
                placeholder="J. Doe"
                className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded"
              />
            </div>
          </div>

          {/* Card Number */}
          <div>
            <label className="block mb-2">Card Number</label>
            <div className="relative">
              <CreditCard className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                name="cardNumber"
                value={formData.cardNumber}
                onChange={handleChange}
                required
                placeholder="XXXX XXXX XXXX XXXX"
                maxLength={19}
                className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded"
              />
            </div>
          </div>

          {/* Expiry + CVV */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block mb-2">Expiry (MM/YY)</label>
              <div className="relative">
                <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  name="expiry"
                  value={formData.expiry}
                  onChange={handleChange}
                  required
                  placeholder="01/25"
                  maxLength={5}
                  className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded"
                />
              </div>
            </div>
            <div>
              <label className="block mb-2">CVV</label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  name="cvv"
                  value={formData.cvv}
                  onChange={handleChange}
                  required
                  placeholder="123"
                  maxLength={4}
                  className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded"
                />
              </div>
            </div>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full py-3 mt-6 bg-indigo-600 text-white rounded font-bold text-xl hover:bg-indigo-700 transition"
          >
            {loading ? "Processing..." : `Pay $${selectedPlan.price} Now`}
          </button>
        </form>
      </div>
    </section>
  );
};

// ----------------------------
// MAIN COMPONENT
// ----------------------------
export default function PricingApp() {
  const [currentPage, setCurrentPage] = useState("pricing");
  const [selectedPlan, setSelectedPlan] = useState(null);

  return (
    <div className="font-inter antialiased">
      {currentPage === "pricing" && (
        <PricingSection
          onChoosePlan={(plan) => {
            setSelectedPlan(plan);
            setCurrentPage("payment");
          }}
        />
      )}
      {currentPage === "payment" && selectedPlan && (
        <PaymentForm
          selectedPlan={selectedPlan}
          onBack={() => {
            setCurrentPage("pricing");
            setSelectedPlan(null);
          }}
        />
      )}
    </div>
  );
}

import React, { useState, useEffect } from "react";
import { supabase } from "../supabase-client";

const PricingPlanForm = ({ plan, onClose, onSave }) => {
  const [formData, setFormData] = useState({
    name: "",
    price: "",
    period: "month",
    features: "",
    popular: false,
    button_text: "Get Started",
    button_link: "",
  });
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (plan) {
      setFormData({
        name: plan.name || "",
        price: plan.price || "",
        period: plan.period || "month",
        features: plan.features ? plan.features.join(", ") : "",
        popular: plan.popular || false,
        button_text: plan.button_text || "Get Started",
        button_link: plan.button_link || "",
      });
    }
  }, [plan]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const data = {
        ...formData,
        features: formData.features.split(",").map((f) => f.trim()),
        price: parseFloat(formData.price) || 0,
      };

      if (plan) {
        // Update
        const { error } = await supabase
          .from("pricing-plans")
          .update(data)
          .eq("id", plan.id);
        if (error) throw error;
      } else {
        // Create
        const { error } = await supabase.from("pricing-plans").insert([data]);
        if (error) throw error;
      }

      onSave();
      onClose();
    } catch (error) {
      console.error("Error saving pricing plan:", error);
      alert("Error saving pricing plan: " + error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block text-sm font-medium text-gray-300 mb-1">
          Plan Name
        </label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md text-white"
          required
        />
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-300 mb-1">
            Price
          </label>
          <input
            type="number"
            name="price"
            value={formData.price}
            onChange={handleChange}
            step="0.01"
            className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md text-white"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-300 mb-1">
            Period
          </label>
          <select
            name="period"
            value={formData.period}
            onChange={handleChange}
            className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md text-white"
          >
            <option value="month">Monthly</option>
            <option value="year">Yearly</option>
            <option value="lifetime">Lifetime</option>
          </select>
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-300 mb-1">
          Features (comma-separated)
        </label>
        <textarea
          name="features"
          value={formData.features}
          onChange={handleChange}
          rows={3}
          placeholder="Feature 1, Feature 2, Feature 3"
          className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md text-white"
        />
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-300 mb-1">
            Button Text
          </label>
          <input
            type="text"
            name="button_text"
            value={formData.button_text}
            onChange={handleChange}
            className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md text-white"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-300 mb-1">
            Button Link
          </label>
          <input
            type="url"
            name="button_link"
            value={formData.button_link}
            onChange={handleChange}
            className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md text-white"
          />
        </div>
      </div>

      <div className="flex items-center">
        <input
          type="checkbox"
          name="popular"
          checked={formData.popular}
          onChange={handleChange}
          className="mr-2"
        />
        <label className="text-sm font-medium text-gray-300">
          Mark as Popular Plan
        </label>
      </div>

      <div className="flex justify-end gap-2">
        <button
          type="button"
          onClick={onClose}
          className="px-4 py-2 bg-gray-600 hover:bg-gray-500 text-white rounded-md"
        >
          Cancel
        </button>
        <button
          type="submit"
          disabled={loading}
          className="px-4 py-2 bg-blue-600 hover:bg-blue-500 text-white rounded-md disabled:opacity-50"
        >
          {loading ? "Saving..." : plan ? "Update" : "Create"}
        </button>
      </div>
    </form>
  );
};

export default PricingPlanForm;

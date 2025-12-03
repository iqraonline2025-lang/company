import { useState, useEffect } from "react";
import { supabase } from "../supabase-client";

const TestimonialForm = ({ testimonial, onClose, onSave }) => {
  const [formData, setFormData] = useState({
    name: "",
    role: "",
    quote: "",
    avatar_url: "",
    rating: 5,
  });
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (testimonial) {
      setFormData({
        name: testimonial.name || "",
        role: testimonial.role || "",
        quote: testimonial.quote || "",
        avatar_url: testimonial.avatar_url || "",
        rating: testimonial.rating || 5,
      });
    }
  }, [testimonial]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: name === "rating" ? parseFloat(value) : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      if (testimonial) {
        const { error } = await supabase
          .from("testimonials")
          .update(formData)
          .eq("id", testimonial.id);
        if (error) throw error;
      } else {
        const { error } = await supabase
          .from("testimonials")
          .insert([formData]);
        if (error) throw error;
      }

      onSave();
      onClose();
    } catch (error) {
      console.error("Error saving testimonial:", error);
      alert("Error saving testimonial: " + error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {["name", "role", "quote", "avatar_url"].map((field) => (
        <div key={field}>
          <label className="block text-sm font-medium text-gray-300 mb-1">
            {field === "quote"
              ? "Quote"
              : field.replace("_", " ").toUpperCase()}
          </label>
          <input
            type={field === "avatar_url" ? "url" : "text"}
            name={field}
            value={formData[field]}
            onChange={handleChange}
            className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md text-white"
            required={field !== "role" && field !== "avatar_url"}
          />
        </div>
      ))}

      <div>
        <label className="block text-sm font-medium text-gray-300 mb-1">
          Rating
        </label>
        <input
          type="number"
          name="rating"
          value={formData.rating}
          onChange={handleChange}
          min={0}
          max={5}
          step={0.1}
          className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md text-white"
          required
        />
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
          {loading ? "Saving..." : testimonial ? "Update" : "Create"}
        </button>
      </div>
    </form>
  );
};

export default TestimonialForm;

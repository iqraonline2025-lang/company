import { useState, useEffect } from "react";
import { supabase } from "../supabase-client";

const CourseForm = ({ course, onClose, onSave }) => {
  const [formData, setFormData] = useState({
    title: "",
    level: "",
    duration: "",
    students: "",
    rating: "",
    description: "",
    color: "",
  });
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (course) setFormData({ ...course });
  }, [course]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: name === "rating" ? parseFloat(value) || 0 : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      if (course) {
        const { error } = await supabase
          .from("courses")
          .update(formData)
          .eq("id", course.id);
        if (error) throw error;
      } else {
        const { error } = await supabase.from("courses").insert([formData]);
        if (error) throw error;
      }
      onSave();
      onClose();
    } catch (error) {
      console.error("Error saving course:", error);
      alert("Error saving course: " + error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {[
        "title",
        "level",
        "duration",
        "students",
        "rating",
        "description",
        "color",
      ].map((field) => (
        <div key={field}>
          <label className="block text-sm font-medium text-gray-300 mb-1">
            {field.charAt(0).toUpperCase() + field.slice(1)}
          </label>
          <input
            type={field === "rating" ? "number" : "text"}
            name={field}
            value={formData[field]}
            onChange={handleChange}
            className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md text-white"
            required
          />
        </div>
      ))}
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
          {loading ? "Saving..." : course ? "Update" : "Create"}
        </button>
      </div>
    </form>
  );
};

export default CourseForm;

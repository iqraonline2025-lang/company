import { useState, useEffect } from "react";
import { supabase } from "../supabase-client";

const ProjectsForm = ({ project, onClose, onSave }) => {
  const [formData, setFormData] = useState({
    title: "",
    desc: "",
    img: "",
    tags: "",
  });
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (project) {
      setFormData({
        title: project.title || "",
        desc: project.desc || "",
        img: project.img || "",
        tags: Array.isArray(project.tags) ? project.tags.join(", ") : "",
      });
    }
  }, [project]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const dataToSave = {
      ...formData,
      tags: formData.tags
        .split(",")
        .map((t) => t.trim())
        .filter((t) => t),
    };

    try {
      if (project) {
        const { error } = await supabase
          .from("projects")
          .update(dataToSave)
          .eq("id", project.id);
        if (error) throw error;
      } else {
        const { error } = await supabase.from("projects").insert([dataToSave]);
        if (error) throw error;
      }

      onSave();
      onClose();
    } catch (error) {
      console.error("Error saving project:", error);
      alert("Error saving project: " + error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {["title", "desc", "img"].map((field) => (
        <div key={field}>
          <label className="block text-sm font-medium text-gray-300 mb-1">
            {field === "desc"
              ? "Description"
              : field.charAt(0).toUpperCase() + field.slice(1)}
          </label>
          <input
            type={field === "img" ? "url" : "text"}
            name={field}
            value={formData[field]}
            onChange={handleChange}
            className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md text-white"
            required
          />
        </div>
      ))}

      <div>
        <label className="block text-sm font-medium text-gray-300 mb-1">
          Tags (comma-separated)
        </label>
        <input
          type="text"
          name="tags"
          value={formData.tags}
          onChange={handleChange}
          placeholder="React, Node.js, MongoDB"
          className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md text-white"
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
          {loading ? "Saving..." : project ? "Update" : "Create"}
        </button>
      </div>
    </form>
  );
};

export default ProjectsForm;

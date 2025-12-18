import { useState, useEffect } from "react";
import { supabase } from "../supabase-client";

const PackageForm = ({ pkg, onClose, onSave }) => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    classes: "",
    price: "",
    is_highlighted: false,
    gradient: "",
    stripe_price_id: "",
  });
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (pkg) {
      setFormData({
        title: pkg.title || "",
        description: pkg.description || "",
        classes: pkg.classes || "",
        price: pkg.price || "",
        is_highlighted: pkg.is_highlighted || false,
        gradient: pkg.gradient || "",
        stripe_price_id: pkg.stripe_price_id || "",
      });
    }
  }, [pkg]);

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

    const dataToSave = {
      ...formData,
      price: parseFloat(formData.price) || 0,
    };

    try {
      if (pkg) {
        const { error } = await supabase
          .from("packages")
          .update(dataToSave)
          .eq("id", pkg.id);
        if (error) throw error;
      } else {
        const { error } = await supabase.from("packages").insert([dataToSave]);
        if (error) throw error;
      }

      onSave();
      onClose();
    } catch (error) {
      console.error("Error saving package:", error);
      alert("Error saving package: " + error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {["title", "description", "classes", "gradient", "stripe_price_id"].map(
        (field) => (
          <div key={field}>
            <label className="block text-sm font-medium text-gray-300 mb-1">
              {field.replace("_", " ").toUpperCase()}
            </label>
            <input
              type="text"
              name={field}
              value={formData[field]}
              onChange={handleChange}
              className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md text-white"
              required
            />
          </div>
        )
      )}

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

      <div className="flex items-center gap-2">
        <input
          type="checkbox"
          name="is_highlighted"
          checked={formData.is_highlighted}
          onChange={handleChange}
          className="h-4 w-4 text-purple-600 border-gray-300 rounded"
        />
        <label className="text-sm font-medium text-gray-300">
          Highlight Package
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
          {loading ? "Saving..." : pkg ? "Update" : "Create"}
        </button>
      </div>
    </form>
  );
};

export default PackageForm;

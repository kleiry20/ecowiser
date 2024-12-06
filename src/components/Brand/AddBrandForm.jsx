import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addBrand, uploadImage } from "../../store/slices/brandSlice";

const AddBrandForm = ({ onCancel }) => {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    logo: "",
  });
  const [file, setFile] = useState(null);
  const [preview, setPreview] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = async (e) => {
    const file = e.target.files[0];
    if (file) {
      const imagePath = await dispatch(uploadImage(file)).unwrap();
      setFormData((prev) => ({ ...prev, logo: imagePath }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.name && formData.description && formData.logo) {
      dispatch(
        addBrand({
          id: Date.now(),
          ...formData,
        })
      );
      setFormData({ name: "", description: "", logo: "" });
      setPreview(null);
    } else {
      alert("All fields are required!");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-4 p-5 border border-gray-300"
    >
      <h3 className="text-lg font-semibold">Add a New Brand</h3>

      <div>
        <label htmlFor="name" className="block text-sm font-medium">
          Brand Name
        </label>
        <input
          type="text"
          name="name"
          id="name"
          value={formData.name}
          onChange={handleInputChange}
          className="w-full p-2 border border-gray-300 rounded-md"
        />
      </div>

      <div>
        <label htmlFor="description" className="block text-sm font-medium">
          Description
        </label>
        <textarea
          name="description"
          id="description"
          value={formData.description}
          onChange={handleInputChange}
          className="w-full p-2 border border-gray-300 rounded-md"
        />
      </div>

      <div>
        <label htmlFor="logoURL" className="block text-sm font-medium">
          Logo (Upload Image)
        </label>
        <input
          type="file"
          name="logoURL"
          id="logoURL"
          accept="image/*"
          onChange={handleFileChange}
          className="w-full p-2 border border-gray-300 rounded-md"
        />
        {preview && (
          <div className="mt-4">
            <img
              src={preview}
              alt="Logo Preview"
              className="object-contain w-32 h-32 border border-gray-300 rounded-md"
            />
          </div>
        )}
      </div>

      <button
        type="submit"
        className="px-4 py-2 text-white bg-blue-500 rounded-md"
      >
        Add Brand
      </button>
    </form>
  );
};

export default AddBrandForm;

import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {
  addBrand,
  updateBrand,
  uploadImage,
} from "../../store/slices/brandSlice";

const BrandForm = ({ existingBrand, onSubmit, onCancel }) => {
  const [preview, setPreview] = useState(null);

  const [formData, setFormData] = useState({
    name: existingBrand?.name || "",
    description: existingBrand?.description || "",
    logo: existingBrand?.logo || "",
  });

  const dispatch = useDispatch();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
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
    const brandData = {
      id: existingBrand?.id || Date.now(),
      ...formData,
    };

    if (existingBrand) {
      dispatch(updateBrand(brandData));
    } else {
      dispatch(addBrand(brandData));
    }
    onSubmit();
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col items-center gap-3 p-5 m-8 my-8 mb-0 bg-white border border-5"
    >
      <h3 className="text-2xl font-medium text-center">
        {existingBrand ? "Update" : "Add"} a Brand
      </h3>
      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-4">
          <label htmlFor="name">Brand:</label>
          <input
            type="text"
            name="name"
            placeholder="Enter the brand name"
            className="w-full p-2 border border-gray-300 rounded-md "
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="flex items-center gap-4">
          <label htmlFor="description">Description:</label>
          <textarea
            name="description"
            placeholder="Enter the description"
            className="w-full p-2 border border-gray-300 rounded-md "
            value={formData.description}
            onChange={handleChange}
            required
          />
        </div>
        <div className="flex items-center gap-4">
          <label htmlFor="logo" className="block text-sm font-medium">
            Logo:
          </label>
          <input
            type="file"
            name="logo"
            id="logo"
            accept="image/*"
            onChange={handleFileChange}
            className="p-2 border border-gray-300 rounded-md "
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
      </div>

      <div className="flex gap-4 mt-2">
        <button
          className={existingBrand ? "update-btn" : "add-btn"}
          style={{ fontSize: "0.875rem" }}
          type="submit"
        >
          {existingBrand ? "Update Brand" : "Add Brand"}
        </button>
        <button
          type="button"
          className="border-2 delete-btn"
          style={{ fontSize: "0.875rem" }}
          onClick={onCancel}
        >
          Cancel
        </button>
      </div>
    </form>
  );
};

export default BrandForm;

{
  /* <input
        type="text"
        name="logo"
        placeholder="Logo"
        className="border-2 "
        value={formData.logo}
        onChange={handleChange}
      /> */
}

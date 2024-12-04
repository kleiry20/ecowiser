import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addBrand, updateBrand } from "../../store/slices/brandSlice";

const BrandForm = ({ existingBrand, onSubmit, onCancel }) => {
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
    <form onSubmit={handleSubmit} className="flex gap-3 p-5 border border-5">
      <h3 className="">Form: {existingBrand ? "Update" : "Add"} a Brand</h3>
      <input
        type="text"
        name="name"
        placeholder="Brand Name"
        className="border border-2"
        value={formData.name}
        onChange={handleChange}
        required
      />
      <textarea
        name="description"
        placeholder="Description"
        className="border border-2"
        value={formData.description}
        onChange={handleChange}
        required
      />
      <input
        type="text"
        name="logo"
        placeholder="Logo URL"
        className="border border-2"
        value={formData.logo}
        onChange={handleChange}
      />
      <button className="border border-2" type="submit">
        {existingBrand ? "Update Brand" : "Add Brand"}
      </button>
      <button type="button" className="border border-2" onClick={onCancel}>
        Cancel
      </button>
    </form>
  );
};

export default BrandForm;

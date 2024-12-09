import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { uploadImage } from "../../store/slices/brandSlice";
import { addProduct, updateProduct } from "../../store/slices/productSlice";

const ProductForm = ({
  existingProduct: existingProduct,
  onSubmit,
  onCancel,
}) => {
  const [preview, setPreview] = useState(null);
  const brands = useSelector((state) => state.brand.brands);

  const [formData, setFormData] = useState({
    name: existingProduct?.name || "",
    description: existingProduct?.description || "",
    image: existingProduct?.image || "",
    category: existingProduct?.category || "",
    price: existingProduct?.price || "",
    brandAssociation: existingProduct?.brandAssociation || "",
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
    const productData = {
      id: existingProduct?.id || Date.now(),
      ...formData,
    };

    if (existingProduct) {
      dispatch(updateProduct(productData));
    } else {
      dispatch(addProduct(productData));
    }
    setFormData({
      name: "",
      description: "",
      logo: "",
      image: "",
      price: null,
      brandAssociation: null,
    });
    onSubmit();
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col items-center gap-3 p-5 m-8 my-8 mb-0 bg-white border border-5"
    >
      <h3 className="text-2xl font-medium text-center">
        {existingProduct ? "Update" : "Add"} a Product
      </h3>
      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-4">
          <label htmlFor="name">Product:</label>
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
          <label htmlFor="image" className="block text-sm font-medium">
            Image:
          </label>
          <input
            type="file"
            name="image"
            id="image"
            accept="image/*"
            onChange={handleFileChange}
            className="p-2 border border-gray-300 rounded-md "
          />
          {preview && (
            <div className="mt-4">
              <img
                src={preview}
                alt="Image Preview"
                className="object-contain w-32 h-32 border border-gray-300 rounded-md"
              />
            </div>
          )}
        </div>
        <div className="flex items-center gap-4">
          <label htmlFor="category">Category:</label>
          <input
            type="text"
            name="category"
            placeholder="Enter the category"
            className="w-full p-2 border border-gray-300 rounded-md "
            value={formData.category}
            onChange={handleChange}
            required
          />
        </div>
        <div className="flex items-center gap-4">
          <label htmlFor="name">Price:</label>
          <input
            type="number"
            name="price"
            placeholder="Enter the price"
            className="w-full p-2 border border-gray-300 rounded-md "
            value={formData.price}
            onChange={handleChange}
            required
          />
        </div>
        <div className="flex items-center gap-4">
          <label htmlFor="brandAssociation">Brand Association:</label>
          <select
            name="brandAssociation"
            className="w-full p-2 border border-gray-300 rounded-md"
            value={formData.brandAssociation}
            onChange={handleChange}
            required
          >
            <option value="" disabled>
              Select a Brand
            </option>
            {brands.map((brand) => (
              <option key={brand.id} value={brand.id}>
                {brand.name}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="flex gap-4 mt-2">
        <button
          className={existingProduct ? "update-btn" : "add-btn"}
          style={{ fontSize: "0.875rem" }}
          type="submit"
        >
          {existingProduct ? "Update Product" : "Add Product"}
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

export default ProductForm;

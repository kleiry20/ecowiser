import React, { useState } from "react";
import { Link } from "react-router-dom";
import addIcon from "../assets/addIcon.svg";
import searchIcon from "../assets/search.svg";
import { useDispatch, useSelector } from "react-redux";
import { setBrandSearchTerm } from "../store/slices/brandSlice";
import { setProductSearchTerm } from "../store/slices/productSlice";
import ProductForm from "../components/Product/ProductForm";
import ProductTable from "../components/Product/ProductTable";

export const ProductPage = () => {
  const [showForm, setShowForm] = useState(false);
  // to select the brand to be updated
  const [selectedProduct, setSelectedProduct] = useState(null);

  const dispatch = useDispatch();
  const { searchTerm, products } = useSelector((state) => state.product);

  const filteredProducts = products
    ? products.filter((product) => {
        const searchQuery = searchTerm.toLowerCase();
        return (
          product.name.toLowerCase().includes(searchQuery) ||
          product.description.toLowerCase().includes(searchQuery) ||
          product.category.toLowerCase().includes(searchQuery) ||
          product.price.toString().includes(searchQuery)
          // || product.brandAssociation.toLowerCase().includes(searchQuery)
        );
      })
    : [];

  return (
    <div className="flex flex-col">
      <h3 className="text-3xl font-medium">Products</h3>
      <div className="mt-6 bg-white">
        <div className="flex justify-between px-8 py-8 pb-0 bg-white">
          {/* search input */}
          <div className="relative w-1/3 ">
            <input
              type="text"
              placeholder="Search in products"
              className="w-full h-10 pl-8 text-sm font-light border border-gray-300 rounded-md"
              value={searchTerm}
              onChange={(e) => dispatch(setProductSearchTerm(e.target.value))}
            />
            <img
              className="absolute w-5 transform -translate-y-1/2 left-2 top-1/2"
              src={searchIcon}
              alt="Search Icon"
            />
          </div>
          <button
            className="flex items-center gap-1 bg-indigo-500 add-btn"
            onClick={() => setShowForm(!showForm)}
          >
            <img
              src={addIcon}
              className="w-4 text-sm text-white"
              alt="add-icon"
            />
            Add a Product
          </button>
        </div>

        {showForm && (
          <ProductForm
            existingProduct={selectedProduct}
            onSubmit={() => setShowForm(false)}
            onCancel={() => {
              setShowForm(false);
              setSelectedProduct(null);
            }}
          />
        )}

        <ProductTable
          setShowForm={setShowForm}
          showForm={showForm}
          setSelectedProduct={setSelectedProduct}
          filteredProducts={filteredProducts}
        />
      </div>
    </div>
  );
};

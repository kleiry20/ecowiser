import React, { useState } from "react";
import { Link } from "react-router-dom";
import addIcon from "../assets/addIcon.svg";
import searchIcon from "../assets/search.svg";
import BrandForm from "../components/Brand/BrandForm";
import BrandTable from "../components/Brand/BrandTable";
import { useDispatch, useSelector } from "react-redux";
import { setBrandSearchTerm } from "../store/slices/brandSlice";

export const BrandPage = () => {
  const [showForm, setShowForm] = useState(true);
  // to select the brand to be updated
  const [selectedBrand, setSelectedBrand] = useState(null);

  const dispatch = useDispatch();
  const { searchTerm, brands } = useSelector((state) => state.brand);

  const filteredBrands = brands
    ? brands.filter((brand) => {
        const searchQuery = searchTerm.toLowerCase();
        return (
          brand.name.toLowerCase().includes(searchQuery) ||
          brand.description.toLowerCase().includes(searchQuery)
        );
      })
    : [];

  console.log("filteredBrands brandpage", filteredBrands);

  return (
    <div className="flex flex-col">
      <h3 className="text-3xl font-medium">Brands</h3>
      <div className="mt-6 bg-white">
        <div className="flex justify-between px-8 py-8 pb-0 bg-white">
          {/* search input */}
          <div className="relative w-1/3 ">
            <input
              type="text"
              placeholder="Search in brands"
              className="w-full h-10 pl-8 text-sm font-light border border-gray-300 rounded-md"
              value={searchTerm}
              onChange={(e) => dispatch(setBrandSearchTerm(e.target.value))}
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
            Add a Brand
          </button>
        </div>

        {showForm && (
          <BrandForm
            existingBrand={selectedBrand}
            onSubmit={() => setShowForm(false)}
            onCancel={() => {
              setShowForm(false);
              setSelectedBrand(null);
            }}
          />
        )}

        <BrandTable
          setShowForm={setShowForm}
          showForm={showForm}
          setSelectedBrand={setSelectedBrand}
          filteredBrands={filteredBrands}
        />
      </div>
    </div>
  );
};

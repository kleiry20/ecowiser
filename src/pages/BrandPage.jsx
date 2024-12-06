import React, { useState } from "react";
import { Link } from "react-router-dom";
import addIcon from "../assets/addIcon.svg";
import searchIcon from "../assets/search.svg";
import BrandForm from "../components/Brand/BrandForm";
import BrandTable from "../components/Brand/BrandTable";
import { useSelector } from "react-redux";
import AddBrandForm from "../components/Brand/AddBrandForm";

export const BrandPage = () => {
  const [showForm, setShowForm] = useState(false);
  const [selectedBrand, setSelectedBrand] = useState(null);
  const brands = useSelector((state) => state.brand.brands);

  // const handleCancel = () => {
  //   setShowForm(false);
  // };

  return (
    <div className="flex flex-col">
      <h3 className="text-3xl font-medium">Brands</h3>
      <div className="flex justify-between px-8 py-8 pb-0 mt-6 bg-white">
        <div className="flex w-1/3 gap-2 p-2 border border-gray-300 rounded-md">
          <img className="w-5" src={searchIcon} alt="" />
          <input
            type="text"
            placeholder="Search in brands"
            className="w-full text-sm font-light text-gray-200"
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

      {/* {showForm && (
        <AddBrandForm
          onSubmit={() => setShowForm(false)}
          onCancel={() => {
            setShowForm(false);
            setSelectedBrand(null);
          }}
        />
      )} */}

      <BrandTable
        setShowForm={setShowForm}
        showForm={showForm}
        setSelectedBrand={setSelectedBrand}
      />
    </div>
  );
};

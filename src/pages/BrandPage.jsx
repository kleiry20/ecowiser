import React, { useState } from "react";
import { Link } from "react-router-dom";
import BrandForm from "../components/Brand/BrandForm";
import BrandTable from "../components/Brand/BrandTable";
import { useSelector } from "react-redux";

export const BrandPage = () => {
  const [showForm, setShowForm] = useState(false);
  const [selectedBrand, setSelectedBrand] = useState(null);
  const brands = useSelector((state) => state.brand.brands);

  // const handleCancel = () => {
  //   setShowForm(false);
  // };

  return (
    <div className="flex flex-col">
      <div className="flex justify-between">
        <h2>This is the Brand Page</h2>
        <button className="add-btn" onClick={() => setShowForm(!showForm)}>
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
      />
    </div>
  );
};

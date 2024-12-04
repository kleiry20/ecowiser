import React, { useState } from "react";
import "./Store.css";
import BrandForm from "../../components/Brand/BrandForm";
import BrandList from "../../components/Brand/BrandTable";
import BrandTable from "../../components/Brand/BrandTable";

export const Store = () => {
  const [showForm, setShowForm] = useState(false);
  return (
    <div className="store">
      {/* <h3>Dashboard / Products</h3>

      <h2 className="text-xl font-semibold">Products</h2>

      <div className="data-wrapper">
        <div className="flex justify-between">
          <input type="text" name="" id="" placeholder="search brands" />
          <button className="add-btn" onClick={() => setShowForm(!showForm)}>
            {showForm ? "Hide Form" : "Add Brand"}
          </button>
        </div>

        {showForm && <BrandForm onSubmit={() => setShowForm(false)} />}

        <BrandTable />
      </div> */}
      store
    </div>
  );
};

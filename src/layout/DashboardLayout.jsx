import React from "react";
import { Outlet } from "react-router-dom";
import { Sidebar } from "../components/Sidebar/Sidebar";
import { Navbar } from "../components/Navbar/Navbar";
import { BreadCrumb } from "../components/BreadCrumb";

const DashboardLayout = () => {
  return (
    <div className="app">
      <Sidebar />
      <div className="app-content">
        <Navbar />
        <div className="flex flex-col gap-4 p-5 bg-gray-100">
          <BreadCrumb />
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;

// Main routes:
// Use routes like /, /brands, and /products for general pages

// Breadcrumbs:
// Dashboard > Brands > Brand Name
// Dashboard > Brands > Brand Name > Product Name (wehn association is needed brand->product)

// Detailed view:
// Have routes like /brands/:brandId and /products/:productId for detailed views

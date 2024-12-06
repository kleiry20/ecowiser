import React from "react";
import { Link } from "react-router-dom";
import "./Sidebar.css";
import DashboardIcon from "../../assets/dashboard.svg";
import ProductsIcon from "../../assets/products.svg";
import BrandsIcon from "../../assets/brands.svg";
import CategoryIcon from "../../assets/category.svg";
import OrderIcon from "../../assets/orders.svg";
import CouponIcon from "../../assets/coupon.svg";
import ChatIcon from "../../assets/chat.svg";

export const Sidebar = () => {
  return (
    <aside className="flex flex-col w-1/6 h-full gap-6 px-4 py-8 border-r">
      <h3 className="sidebar-heading">tuks</h3>

      <div className="option-list">
        <p className="option-list-heading">Menu</p>
        <ul className="option-values">
          <li className="flex items-center gap-6 p-4 rounded-lg cursor-pointer hover:bg-indigo-500">
            <img src={DashboardIcon} className="w-4" alt="" />
            <Link className="text-sm font-light" to="/">
              Dashboard
            </Link>
          </li>
          <li className="flex items-center gap-6 p-4 rounded-lg cursor-pointer hover:bg-indigo-500">
            <img src={ProductsIcon} className="w-4" alt="" />
            <Link className="text-sm font-light" to="/products">
              Products
            </Link>
          </li>
          <li className="flex items-center gap-6 p-4 rounded-lg cursor-pointer hover:bg-indigo-500">
            <img src={BrandsIcon} className="w-4" alt="" />
            <Link className="text-sm font-light" to="/brands">
              Brands
            </Link>
          </li>
          <li className="flex items-center gap-6 p-4 rounded-lg cursor-pointer hover:bg-indigo-500">
            <img src={CategoryIcon} className="w-4" alt="" />
            <Link className="text-sm font-light" to="/not-implemented">
              Category
            </Link>
          </li>
          <li className="flex items-center gap-6 p-4 rounded-lg cursor-pointer hover:bg-indigo-500">
            <img src={OrderIcon} className="w-4" alt="" />
            <Link className="text-sm font-light" to="/not-implemented">
              Orders
            </Link>
          </li>
          <li className="flex items-center gap-6 p-4 rounded-lg cursor-pointer hover:bg-indigo-500">
            <img src={CouponIcon} className="w-4" alt="" />
            <Link className="text-sm font-light" to="/not-implemented">
              Coupons
            </Link>
          </li>
          <li className="flex items-center gap-6 p-4 rounded-lg cursor-pointer hover:bg-indigo-500">
            <img src={ChatIcon} className="w-4" alt="" />
            <Link className="text-sm font-light" to="/not-implemented">
              Chats
            </Link>
          </li>
        </ul>
      </div>

      <div className="option-list">
        <p className="option-list-heading">Other</p>
        <ul className="option-values">
          <li className="text-sm font-light">Settings</li>
          <li className="text-sm font-light">Logout</li>
        </ul>
      </div>
    </aside>
  );
};

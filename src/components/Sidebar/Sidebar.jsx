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
import SettingsIcon from "../../assets/settings.svg";
import LogoutIcon from "../../assets/logout.svg";

export const Sidebar = () => {
  return (
    <aside className="flex flex-col w-1/6 h-full gap-6 px-4 py-8 bg-white border-r">
      <h3 className="text-4xl font-semibold leading-none text-center ">
        tuks
        <span className=" header-line">
          <div className="header-line-div"></div>
        </span>
      </h3>

      <div className="">
        <p className="mt-6 ml-4 text-xs font-light tracking-widest uppercase">
          Menu
        </p>
        <ul className="flex flex-col gap-4 my-4 list-none">
          <li className="flex items-center gap-6 p-4 pl-8 rounded-lg cursor-pointer hover:bg-indigo-500 hover:text-white">
            <img src={DashboardIcon} className="w-4" alt="" />
            <Link className="text-sm font-light" to="/">
              Dashboard
            </Link>
          </li>
          <li className="flex items-center gap-6 p-4 pl-8 rounded-lg cursor-pointer hover:bg-indigo-500 hover:text-white">
            <img src={ProductsIcon} className="w-4" alt="" />
            <Link className="text-sm font-light" to="/products">
              Products
            </Link>
          </li>
          <li className="flex items-center gap-6 p-4 pl-8 rounded-lg cursor-pointer hover:bg-indigo-500 hover:text-white">
            <img src={BrandsIcon} className="w-4" alt="" />
            <Link className="text-sm font-light" to="/brands">
              Brands
            </Link>
          </li>
          <li className="flex items-center gap-6 p-4 pl-8 rounded-lg cursor-pointer hover:bg-indigo-500 hover:text-white">
            <img src={CategoryIcon} className="w-4" alt="" />
            <Link className="text-sm font-light" to="/not-implemented">
              Category
            </Link>
          </li>
          <li className="flex items-center gap-6 p-4 pl-8 rounded-lg cursor-pointer hover:bg-indigo-500 hover:text-white">
            <img src={OrderIcon} className="w-4" alt="" />
            <Link className="text-sm font-light" to="/not-implemented">
              Orders
            </Link>
          </li>
          <li className="flex items-center gap-6 p-4 pl-8 rounded-lg cursor-pointer hover:bg-indigo-500 hover:text-white">
            <img src={CouponIcon} className="w-4" alt="" />
            <Link className="text-sm font-light" to="/not-implemented">
              Coupons
            </Link>
          </li>
          <li className="flex items-center gap-6 p-4 pl-8 rounded-lg cursor-pointer hover:bg-indigo-500 hover:text-white">
            <img src={ChatIcon} className="w-4" alt="" />
            <Link className="text-sm font-light" to="/not-implemented">
              Chats
            </Link>
          </li>
        </ul>
      </div>

      <div className="">
        <p className="ml-4 text-xs font-light tracking-widest uppercase">
          Other
        </p>
        <ul className="flex flex-col gap-4 my-4 list-none">
          <li className="flex items-center gap-6 p-4 pl-8 rounded-lg cursor-pointer hover:bg-indigo-500 hover:text-white">
            <img src={SettingsIcon} className="w-4" alt="" />
            <Link className="text-sm font-light" to="/not-implemented">
              Settings
            </Link>
          </li>
          <li className="flex items-center gap-6 p-4 pl-8 rounded-lg cursor-pointer hover:bg-indigo-500 hover:text-white">
            <img src={LogoutIcon} className="w-4" alt="" />
            <Link className="text-sm font-light" to="/not-implemented">
              Logout
            </Link>
          </li>
        </ul>
      </div>
    </aside>
  );
};

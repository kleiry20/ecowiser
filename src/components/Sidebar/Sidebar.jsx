import React from "react";
import { Link } from "react-router-dom";
import "./Sidebar.css";

export const Sidebar = () => {
  return (
    <aside className="sidebar">
      <h3 className="sidebar-heading">tuks</h3>

      <div className="option-list">
        <p className="option-list-heading">Menu</p>
        <ul className="option-values">
          <li>
            <Link to="/">Dashboard</Link>
          </li>
          <li>
            <Link to="/products">Products</Link>
          </li>
          <li>
            <Link to="/brands">Brands</Link>
          </li>
          <li>Category</li>
          <li>Orders</li>
          <li>Coupons</li>
          <li>Chats</li>
        </ul>
      </div>

      <div className="option-list">
        <p className="option-list-heading">Other</p>
        <ul className="option-values">
          <li>Settings</li>
          <li>Logout</li>
        </ul>
      </div>
    </aside>
  );
};

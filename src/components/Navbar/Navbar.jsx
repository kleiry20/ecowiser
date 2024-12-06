import React from "react";
import "./Navbar.css";
import BellIcon from "../../assets/bell.svg";
import ProfileIcon from "../../assets/profile.svg";
import SearchIcon from "../../assets/search.svg";

export const Navbar = () => {
  return (
    <header className="navbar">
      <div className="flex w-1/4 gap-2 p-2 border border-gray-300 rounded-md">
        <img className="w-5" src={SearchIcon} alt="" />
        <input
          type="text"
          placeholder="Search anything here..."
          className="w-full text-sm font-light"
        />
      </div>

      <div className="navbar-info">
        <a href="">
          <img className="size-7" src={BellIcon} alt="notifications" />
        </a>

        <button>
          <img className="size-9" src={ProfileIcon} alt="profile" />
        </button>
      </div>
    </header>
  );
};

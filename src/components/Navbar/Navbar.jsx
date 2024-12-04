import React from "react";
import "./Navbar.css";
import BellIcon from "../../assets/bell.svg";
import ProfileIcon from "../../assets/profile.svg";
import SearchIcon from "../../assets/search.svg";

export const Navbar = () => {
  return (
    <header className="navbar">
      <input
        className="w-1/5 border-2 border-solid rounded-md navbar-search"
        placeholder="Search something here"
      />

      {/* <form class="nosubmit">
        <input class="nosubmit" type="search" placeholder="Search..." />
      </form> */}

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

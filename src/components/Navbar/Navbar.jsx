import React from "react";
import "./Navbar.css";
// Search logic for global search
import { useSelector } from "react-redux";

import BellIcon from "../../assets/bell.svg";
import ProfileIcon from "../../assets/profile.svg";
import SearchIcon from "../../assets/search.svg";

export const Navbar = () => {
  return (
    <header className="flex justify-between p-8 bg-white navbar-shadow">
      <div className="relative w-1/3 ">
        <input
          type="text"
          placeholder="Search anything..."
          className="w-full h-10 pl-8 text-sm font-light border border-gray-300 rounded-md"
        />
        <img
          className="absolute w-5 transform -translate-y-1/2 left-2 top-1/2"
          src={SearchIcon}
          alt="Search Icon"
        />
      </div>

      <div className="flex items-center gap-4">
        <a>
          <img className="w-6" src={BellIcon} alt="notifications" />
        </a>

        <button className="p-1 bg-gray-300 rounded-md">
          <img className="w-6" src={ProfileIcon} alt="profile" />
        </button>
      </div>
    </header>
  );
};

// const useGlobalSearch = () => {
//   const { searchTerm } = useSelector((state) => state.search);
//   const { brands } = useSelector((state) => state.brands);
//   const { products } = useSelector((state) => state.products);

//   const filteredResults = [...brands, ...products].filter((item) =>
//     item.name.toLowerCase().includes(searchTerm.toLowerCase())
//   );

//   return filteredResults;
// };

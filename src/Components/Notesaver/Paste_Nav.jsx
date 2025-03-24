import React from "react";
import { NavLink } from "react-router-dom";

const Paste_Nav = () => {
  return (
    <nav className="bg-gray-900 text-white py-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center px-6">
        {/* Logo */}
        {/* <div className="text-2xl font-bold text-green-400">
          Paste<span className="text-green-300">Hub</span>
        </div> */}

        {/* Navigation Links */}
        <div className="flex gap-6">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `text-lg font-semibold transition duration-200 ${
                isActive ? "text-green-400 border-b-2 border-green-400" : "text-gray-300"
              } hover:text-green-300`
            }
          >
            Home
          </NavLink>

          <NavLink
            to="/pastes"
            className={({ isActive }) =>
              `text-lg font-semibold transition duration-200 ${
                isActive ? "text-green-400 border-b-2 border-green-400" : "text-gray-300"
              } hover:text-green-300`
            }
          >
            Pastes
          </NavLink>
        </div>

        {/* User Profile / Authentication */}
        {/* <button className="px-4 py-2 bg-green-500 text-gray-900 rounded-lg font-semibold hover:bg-green-600 transition duration-200">
          Login
        </button> */}
      </div>
    </nav>
  );
};

export default Paste_Nav;

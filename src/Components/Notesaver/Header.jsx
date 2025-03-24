import React, { useState } from "react";
import { brainwave } from "../../assets";
import { navigation } from "../../Constants";
import { useLocation } from "react-router-dom";
import Button from "./Button";

const Header = () => {
  const location = useLocation();
  const [openNavigation, setOpenNavigation] = useState(false);
  // const isLoggedIn = localStorage.getItem("notesaver-auth");

  // const handleLogout = () => {
  //   localStorage.removeItem("notesaver-auth"); // Remove login session
  //   navigate("/login"); // Redirect to login page
  // };

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 bg-gray-900/80 backdrop-blur-md border-b border-gray-800 ${
        openNavigation ? "bg-gray-900" : ""
      }`}
    >
      <div className="flex items-center justify-between px-5 lg:px-10 py-4">
        {/* Logo */}
        <a className="block w-[12rem]" href="/">
          <img src={brainwave} width={190} height={40} alt="Brainwave Logo" />
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex gap-8">
          {navigation.map((item) => (
            <a
              key={item.id}
              href={item.url}
              className={`text-lg font-medium transition-all px-4 py-2 ${
                location.pathname === item.url
                  ? "text-green-400 border-b-2 border-green-400"
                  : "text-gray-300 hover:text-green-300"
              }`}
            >
              {item.title}
            </a>
          ))}
        </nav>

        {/* Auth Buttons (Desktop) */}
        <div className="hidden lg:flex items-center gap-4">
          <a href="#signup" className="text-gray-400 hover:text-white transition">
            New Account
          </a>

          <Button className="px-4 py-2 bg-green-400 text-white rounded-lg font-semibold hover:bg-green-600 transition">
          <a href="#login" className="text-black hover:text-white transition">
          Login
          </a>
          </Button>

          {/* <Button className="px-4 py-2 bg-green-500 text-black rounded-lg font-semibold hover:bg-green-600 transition">
          <a href="#login" className="text-gray-400 hover:text-white transition">
          Log
          </a>
          </Button> */}
        </div>

        {/* Mobile Menu Button (SVG Icons) */}
        <button
          className="lg:hidden text-gray-300"
          onClick={() => setOpenNavigation(!openNavigation)}
        >
          {openNavigation ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-7 h-7"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-7 h-7"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Navigation */}
      {openNavigation && (
        <div className="lg:hidden fixed top-[4rem] left-0 w-full bg-gray-900 py-4 shadow-lg">
          <nav className="flex flex-col items-center gap-4">
            {navigation.map((item) => (
              <a
                key={item.id}
                href={item.url}
                className="text-lg text-gray-300 hover:text-green-400 transition"
                onClick={() => setOpenNavigation(false)}
              >
                {item.title}
              </a>
            ))}
            <a
              href="#signup"
              className="text-gray-400 hover:text-white transition"
              onClick={() => setOpenNavigation(false)}
            >
              New Account
            </a>
            <Button
              className="px-4 py-2 bg-green-500 text-gray-900 rounded-lg font-semibold hover:bg-green-600 transition"
              onClick={() => setOpenNavigation(false)}
            >
              Sign In
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;

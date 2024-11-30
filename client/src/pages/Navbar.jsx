import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md w-full">
      <div className="max-w-screen-xl mx-auto flex justify-between items-center px-4 py-4">
        {/* Logo */}
        <div className="flex items-center">
          <img
            src="/logo.png"
            alt="MuscleMate Logo"
            className="h-8"
          />
          <Link
            to="/"
            className="ml-2 text-black text-xl font-bold uppercase hover:text-blue-500 transition"
          >
            FITNESS TRACKER
          </Link>
        </div>

        {/* Desktop Navbar Links */}
        <div className="hidden md:flex space-x-6">
          <Link
            to="/about"
            className="text-black hover:text-blue-500 transition uppercase"
          >
            About
          </Link>

          {/* Dropdown */}
          <div className="relative">
            <button
              className="text-black hover:text-blue-500 transition uppercase"
              onClick={() => setDropdownOpen(!isDropdownOpen)}
            >
              Programs
            </button>
            {isDropdownOpen && (
              <div className="absolute left-0 mt-2 bg-white shadow-lg rounded-md w-48 z-10">
                <Link
                  to="/programs/bodybuilding"
                  className="block px-4 py-2 text-black hover:bg-blue-100 uppercase"
                >
                  Bodybuilding
                </Link>
                <Link
                  to="/programs/fat-loss"
                  className="block px-4 py-2 text-black hover:bg-blue-100 uppercase"
                >
                  Fat Loss
                </Link>
                <Link
                  to="/programs/weight-gain"
                  className="block px-4 py-2 text-black hover:bg-blue-100 uppercase"
                >
                  Weight Gain
                </Link>
              </div>
            )}
          </div>

          <Link
            to="/articles"
            className="text-black hover:text-blue-500 transition uppercase"
          >
            Articles
          </Link>
          <Link
            to="/musclemate"
            className="text-black hover:text-blue-500 transition uppercase"
          >
            MuscleMate
          </Link>
          <Link
            to="/profile"
            className="text-black hover:text-blue-500 transition uppercase"
          >
            Profile
          </Link>
          <Link
            to="/sign-in"
            className="text-black hover:text-blue-500 transition uppercase"
          >
            Sign In
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <button
            className="text-black"
            onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="h-6 w-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white shadow-md z-10">
          <Link
            to="/about"
            className="block px-4 py-2 text-black hover:bg-blue-100 uppercase"
          >
            About
          </Link>
          <div className="relative">
            <button
              className="block w-full text-left px-4 py-2 bg-blue-500 text-white uppercase"
              onClick={() => setDropdownOpen(!isDropdownOpen)}
            >
              Programs
            </button>
            {isDropdownOpen && (
              <div className="absolute left-0 mt-2 bg-white shadow-lg rounded-md w-full">
                <Link
                  to="/programs/bodybuilding"
                  className="block px-4 py-2 text-black hover:bg-blue-100 uppercase"
                >
                  Bodybuilding
                </Link>
                <Link
                  to="/programs/fat-loss"
                  className="block px-4 py-2 text-black hover:bg-blue-100 uppercase"
                >
                  Fat Loss
                </Link>
                <Link
                  to="/programs/weight-gain"
                  className="block px-4 py-2 text-black hover:bg-blue-100 uppercase"
                >
                  Weight Gain
                </Link>
              </div>
            )}
          </div>
          <Link
            to="/articles"
            className="block px-4 py-2 text-black hover:bg-blue-100 uppercase"
          >
            Articles
          </Link>
          <Link
            to="/musclemate"
            className="block px-4 py-2 text-black hover:bg-blue-100 uppercase"
          >
            MuscleMate
          </Link>
          <Link
            to="/profile"
            className="block px-4 py-2 text-black hover:bg-blue-100 uppercase"
          >
            Profile
          </Link>
          <Link
            to="/sign-in"
            className="block px-4 py-2 text-black hover:bg-blue-100 uppercase"
          >
            Sign In
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;


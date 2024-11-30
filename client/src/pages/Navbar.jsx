import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("accessToken");
    setIsLoggedIn(!!token);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("accessToken");
    setIsLoggedIn(false);
    alert("You have logged out successfully.");
    navigate("/");
  };

  const handleProfileClick = () => {
    if (isLoggedIn) {
      navigate("/profile");
    } else {
      alert("Please log in to view your profile.");
      navigate("/login");
    }
  };

  const toggleDropdown = () => setDropdownOpen(!isDropdownOpen);
  const closeDropdown = () => setDropdownOpen(false);

  const toggleMobileMenu = () => setMobileMenuOpen(!isMobileMenuOpen);
  const closeMobileMenu = () => setMobileMenuOpen(false);

  return (
    <nav className="bg-white shadow-md w-full">
      <div className="max-w-screen-xl mx-auto flex justify-between items-center px-4 py-4">
        {/* Logo */}
        <div className="flex items-center">
          <img src="/logo.png" alt="Fitness Tracker Logo" className="h-8" />
          <Link
            to="/"
            className="ml-2 text-black text-xl font-bold uppercase hover:text-blue-500 transition"
            onClick={closeDropdown}
          >
            FITNESS TRACKER
          </Link>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex space-x-6">
          <Link
            to="/about"
            className="text-black hover:text-blue-500 transition uppercase"
          >
            About
          </Link>
          <div className="relative">
            <button
              className="text-black hover:text-blue-500 transition uppercase"
              onClick={toggleDropdown}
            >
              Programs
            </button>
            {isDropdownOpen && (
              <div
                className="absolute left-0 mt-2 bg-white shadow-lg rounded-md w-48 z-10"
                onMouseLeave={closeDropdown}
              >
                <Link
                  to="/programs/bodybuilding"
                  className="block px-4 py-2 text-black hover:bg-blue-100 uppercase"
                  onClick={closeDropdown}
                >
                  Bodybuilding
                </Link>
                <Link
                  to="/programs/fat-loss"
                  className="block px-4 py-2 text-black hover:bg-blue-100 uppercase"
                  onClick={closeDropdown}
                >
                  Fat Loss
                </Link>
                <Link
                  to="/programs/weight-gain"
                  className="block px-4 py-2 text-black hover:bg-blue-100 uppercase"
                  onClick={closeDropdown}
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
          <button
            onClick={handleProfileClick}
            className="text-black hover:text-blue-500 uppercase"
          >
            Profile
          </button>
          {isLoggedIn ? (
            <button
              onClick={handleLogout}
              className="text-black hover:text-red-600 transition uppercase"
            >
              Logout
            </button>
          ) : (
            <Link
              to="/login"
              className="text-black hover:text-blue-500 transition uppercase"
            >
              Log In
            </Link>
          )}
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <button
            className="text-black"
            onClick={toggleMobileMenu}
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

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white shadow-md z-10">
          <Link
            to="/about"
            className="block px-4 py-2 text-black hover:bg-blue-100 uppercase"
            onClick={closeMobileMenu}
          >
            About
          </Link>
          <button
            className="block w-full text-left px-4 py-2 text-black uppercase hover:bg-blue-100"
            onClick={toggleDropdown}
          >
            Programs
          </button>
          {isDropdownOpen && (
            <div className="bg-white shadow-md">
              <Link
                to="/programs/bodybuilding"
                className="block px-4 py-2 text-black hover:bg-blue-100 uppercase"
                onClick={closeMobileMenu}
              >
                Bodybuilding
              </Link>
              <Link
                to="/programs/fat-loss"
                className="block px-4 py-2 text-black hover:bg-blue-100 uppercase"
                onClick={closeMobileMenu}
              >
                Fat Loss
              </Link>
              <Link
                to="/programs/weight-gain"
                className="block px-4 py-2 text-black hover:bg-blue-100 uppercase"
                onClick={closeMobileMenu}
              >
                Weight Gain
              </Link>
            </div>
          )}
          <Link
            to="/articles"
            className="block px-4 py-2 text-black hover:bg-blue-100 uppercase"
            onClick={closeMobileMenu}
          >
            Articles
          </Link>
          <Link
            to="/musclemate"
            className="block px-4 py-2 text-black hover:bg-blue-100 uppercase"
            onClick={closeMobileMenu}
          >
            MuscleMate
          </Link>
          <button
            onClick={handleProfileClick}
            className="block px-4 py-2 text-black hover:bg-blue-100 uppercase"
          >
            Profile
          </button>
          {isLoggedIn ? (
            <button
              onClick={handleLogout}
              className="block px-4 py-2 text-white bg-red-500 rounded uppercase hover:bg-red-600 transition"
            >
              Logout
            </button>
          ) : (
            <Link
              to="/login"
              className="block px-4 py-2 text-black hover:bg-blue-100 uppercase"
              onClick={closeMobileMenu}
            >
              Sign In
            </Link>
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
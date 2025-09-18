// src/components/Navbar.jsx
import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-gray-900 text-white px-6 py-4 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
      
        <Link to="/" className="text-2xl font-bold text-blue-400">
          Electric Shop
        </Link>

        
        <div className="space-x-6">
          <Link
            to="/"
            className="hover:text-blue-400 transition duration-200"
          >
            Home
          </Link>
          <Link
            to="/product"
            className="hover:text-blue-400 transition duration-200"
          >
            Product
          </Link>
          <Link
            to="/about"
            className="hover:text-blue-400 transition duration-200"
          >
            About
          </Link>
          <Link
            to="/contact"
            className="hover:text-blue-400 transition duration-200"
          >
            Contact
          </Link>
          <Link
            to="/login"
            className="bg-blue-500 px-4 py-2 rounded-lg hover:bg-blue-600 transition duration-200"
          >
            Create an Account
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

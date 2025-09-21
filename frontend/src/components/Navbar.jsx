import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react"; 

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gray-900 text-white px-6 py-4 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold text-blue-400">
          Electric Shop
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6">
          <Link to="/" className="hover:text-blue-400 transition duration-200">
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

        {/* Mobile Hamburger Button */}
        <button
          className="md:hidden focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden flex flex-col space-y-4 mt-4 px-6">
          <Link
            to="/"
            className="hover:text-blue-400 transition duration-200"
            onClick={() => setIsOpen(false)}
          >
            Home
          </Link>
          <Link
            to="/product"
            className="hover:text-blue-400 transition duration-200"
            onClick={() => setIsOpen(false)}
          >
            Product
          </Link>
          <a
            href="/about"
            className="hover:text-blue-400 transition duration-200"
            onClick={() => setIsOpen(false)}
          >
            About
          </a>
          <Link
            to="/contact"
            className="hover:text-blue-400 transition duration-200"
            onClick={() => setIsOpen(false)}
          >
            Contact
          </Link>
          <Link
            to="/login"
            className="bg-blue-500 px-4 py-2 rounded-lg hover:bg-blue-600 transition duration-200 text-center"
            onClick={() => setIsOpen(false)}
          >
            Create an Account
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

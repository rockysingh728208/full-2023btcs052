
import React from "react";
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10 mt-10">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8">
        
        <div>
          <h2 className="text-xl font-bold text-white mb-4"> Electric Shop</h2>
          <p className="text-sm">
            Your one-stop shop for electronics, appliances, and gadgets.  
            Quality products at the best prices.
          </p>
        </div>

      
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="/" className="hover:text-yellow-400">Home</a></li>
            <li><a href="/about" className="hover:text-yellow-400">About Us</a></li>
            <li><a href="/products" className="hover:text-yellow-400">Products</a></li>
            <li><a href="/contact" className="hover:text-yellow-400">Contact</a></li>
          </ul>
        </div>

      
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Customer Support</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="/#" className="hover:text-yellow-400">FAQ</a></li>
            <li><a href="/#" className="hover:text-yellow-400">Returns & Refunds</a></li>
            <li><a href="/#" className="hover:text-yellow-400">Shipping Policy</a></li>
            <li><a href="/#" className="hover:text-yellow-400">Privacy Policy</a></li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Contact Us</h3>
          <p className="text-sm"> 123 Main Street,Sitamarhi</p>
          <p className="text-sm"> +91 7282089286</p>
          <p className="text-sm"> sagar@electricshop.com</p>

          {/* Social Media */}
          <div className="flex space-x-4 mt-4 text-xl">
            <a href="#" className="hover:text-yellow-400"><FaFacebookF /></a>
            <a href="#" className="hover:text-yellow-400"><FaInstagram /></a>
            <a href="#" className="hover:text-yellow-400"><FaTwitter /></a>
            <a href="#" className="hover:text-yellow-400"><FaYoutube /></a>
          </div>
        </div>
      </div>

      {/* Bottom Line */}
      <div className="text-center text-sm text-gray-500 mt-8 border-t border-gray-700 pt-4">
        © {new Date().getFullYear()} Electric Shop. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;

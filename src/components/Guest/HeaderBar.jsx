import React from "react";
import { Link } from "react-router-dom";

export default function HeaderBar() {
  return (
    <header className="w-full fixed top-0 left-0 bg-white shadow-md z-50">
      <nav className="container mx-auto px-6 py-4 flex items-center justify-between">
        <Link to="/" className="text-3xl font-extrabold text-green-600">
          Sedap<span className="text-black">.</span>
        </Link>

        <ul className="hidden md:flex gap-8 font-semibold text-gray-700">
          <li>
            <a href="#about" className="hover:text-green-600 transition">
              About
            </a>
          </li>
          <li>
            <a href="#products" className="hover:text-green-600 transition">
              Products
            </a>
          </li>
          <li>
            <a href="#testimoni" className="hover:text-green-600 transition">
              Testimoni
            </a>
          </li>
        </ul>

        <div className="flex gap-4">
          <Link
            to="/login"
            className="py-2 px-5 border border-green-600 text-green-600 rounded-md hover:bg-green-600 hover:text-white transition"
          >
            Login
          </Link>
          <Link
            to="/register"
            className="py-2 px-5 bg-green-600 text-white rounded-md hover:bg-green-700 transition"
          >
            Register
          </Link>
        </div>
      </nav>
    </header>
  );
}
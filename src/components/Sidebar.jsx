import { BsPerson } from "react-icons/bs";
import { AiOutlineUnorderedList } from "react-icons/ai";
import { BiHomeAlt } from "react-icons/bi";
import { HiUsers } from "react-icons/hi";
import { Link, useLocation } from "react-router-dom";

export default function Sidebar() {
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <div id="sidebar" className="flex min-h-screen w-90 flex-col bg-white p-10 shadow-lg">
      {/* Logo */}
      <div id="sidebar-logo" className="flex flex-col">
        <span id="logo-title" className="font-poppins-extrabold text-[48px] text-gray-900">
          Sedap <b id="logo-dot" className="text-hijau">.</b>
        </span>
        <span id="logo-subtitle" className="font-semibold text-gray-400">Modern Admin Dashboard</span>
      </div>

      {/* List Menu */}
      <div id="sidebar-menu" className="mt-10">
        <ul id="menu-list" className="space-y-3 mt-6">
          <li>
            <Link
              to="/"
              className={`flex items-center rounded-xl p-4 font-medium ${
                isActive("/") ? "bg-green-200 text-hijau font-extrabold" : "text-gray-600 hover:text-hijau hover:bg-green-100"
              }`}
            >
              <BiHomeAlt className="mr-4 text-xl" />
              Dashboard
            </Link>
          </li>
          <li>
            <Link
              to="/orders"
              className={`flex items-center rounded-xl p-4 font-medium ${
                isActive("/orders") ? "bg-green-200 text-hijau font-extrabold" : "text-gray-600 hover:text-hijau hover:bg-green-100"
              }`}
            >
              <AiOutlineUnorderedList className="mr-4 text-xl" />
              Orders
            </Link>
          </li>
          <li>
            <Link
              to="/customers"
              className={`flex items-center rounded-xl p-4 font-medium ${
                isActive("/customers") ? "bg-green-200 text-hijau font-extrabold" : "text-gray-600 hover:text-hijau hover:bg-green-100"
              }`}
            >
              <BsPerson className="mr-4 text-xl" />
              Customers
            </Link>
          </li>
          <li>
            <Link
              to="/users"
              className={`flex items-center rounded-xl p-4 font-medium ${
                isActive("/users") ? "bg-green-200 text-hijau font-extrabold" : "text-gray-600 hover:text-hijau hover:bg-green-100"
              }`}
            >
              <HiUsers className="mr-4 text-xl" />
              Users
            </Link>
          </li>
        </ul>
      </div>

      {/* Footer */}
      <div id="sidebar-footer" className="mt-auto">
        <div id="footer-card" className="bg-hijau px-4 py-2 rounded-md shadow-lg mb-10 flex items-center">
          <div id="footer-text" className="text-white text-sm">
            <span>Please organize your menus through button below!</span>
            <div id="add-menu-button" className="flex justify-center items-center p-2 mt-3 bg-white rounded-md space-x-2">
              <span className="text-gray-600 flex items-center">Add Menus</span>
            </div>
          </div>
          <img id="footer-avatar" className="w-20 rounded-full" src="https://avatar.iran.liara.run/public/28" />
        </div>
        <span id="footer-brand" className="font-bold text-gray-400">Sedap Restaurant Admin Dashboard</span>
        <p className="font-light text-gray-400">&copy; 2025 All Right Reserved</p>
      </div>
    </div>
  );
}

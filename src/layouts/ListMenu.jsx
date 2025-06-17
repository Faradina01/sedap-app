import React from 'react';
import { NavLink } from 'react-router-dom';
import { AiFillHome, AiOutlineAlert } from 'react-icons/ai';
import { CgProfile } from 'react-icons/cg';
import { AiOutlineShoppingCart } from 'react-icons/ai';

export default function ListMenu() {
  const menuClass = ({ isActive }) =>
    `flex items-center p-3 space-x-3 rounded-xl cursor-pointer
     ${isActive 
       ? 'bg-green-200 text-green-700 font-semibold' 
       : 'text-gray-600 hover:bg-green-200 hover:text-green-700'}`
  ;

  return (
    <ul className="space-y-2">
      <li>
        <NavLink to="/" className={menuClass}>
          <AiFillHome className="text-xl" />
          <span>Dashboard</span>
        </NavLink>
      </li>
      <li>
        <NavLink to="/orders" className={menuClass}>
          <AiOutlineShoppingCart className="text-xl" />
          <span>Orders</span>
        </NavLink>
      </li>
      <li>
        <NavLink to="/customers" className={menuClass}>
          <CgProfile className="text-xl" />
          <span>Customers</span>
        </NavLink>
      </li>

      {/* Menu untuk berbagai error */}
      <li>
        <NavLink to="/error/400" className={menuClass}>
          <AiOutlineAlert className="text-xl" />
          <span>Error 400</span>
        </NavLink>
      </li>
      <li>
        <NavLink to="/error/401" className={menuClass}>
          <AiOutlineAlert className="text-xl" />
          <span>Error 401</span>
        </NavLink>
      </li>
      <li>
        <NavLink to="/error/403" className={menuClass}>
          <AiOutlineAlert className="text-xl" />
          <span>Error 403</span>
        </NavLink>
      </li>
    </ul>
  );
}
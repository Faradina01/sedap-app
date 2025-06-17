import React from "react";
import { Outlet } from "react-router-dom";

export default function GuestLayout() {
  return (
    <div className="font-poppins bg-white text-gray-800 min-h-screen flex flex-col">
      <Outlet />
    </div>
  );
}
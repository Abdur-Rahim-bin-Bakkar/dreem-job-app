"use client";

import Link from "next/link";
import { useState } from "react";

import {
  FaBuilding,
  FaBriefcase,
  FaClipboardList,
  FaCog,
  FaBars,
  FaTimes
} from "react-icons/fa";

import { MdDashboard } from "react-icons/md";

const Sidebar = () => {
  const [open, setOpen] = useState(false);
  const menus = [
    { name: "Dashboard", icon: MdDashboard, path: "/dashboard/recruiter" },
    { name: "My Company", icon: FaBuilding, path: "/company" },
    { name: "Manage Jobs", icon: FaBriefcase, path: "/jobs" },
    { name: "Applications", icon: FaClipboardList, path: "/applications" },
    { name: "Settings", icon: FaCog, path: "/settings" },
  ];

  return (

    <div className="">
      <aside className=" min-h-screen bg-[#070B14] border-r border-white/10 p-5 hidden md:block">

        {/* Logo */}
        <h1 className="text-2xl font-bold text-white mb-8">
          HireLoop
        </h1>

        {/* Menu */}
        <nav className="space-y-2">
          {menus.map((menu, i) => {
            const Icon = menu.icon;

            return (
              <Link
                key={i}
                href={menu.path}
                className="flex items-center gap-3 px-4 py-3 rounded-lg text-gray-400 hover:text-white hover:bg-white/10 transition"
              >
                <Icon size={18} />
                <span className="text-sm font-medium">{menu.name}</span>
              </Link>
            );
          })}
        </nav>
      </aside>
      <>
        {/* Mobile Top Button (only < md) */}
        <button
          onClick={() => setOpen(true)}
          className="md:hidden fixed top-4 left-4 z-50 bg-white text-black p-2 rounded-md mt-10 flex items-center font-bold gap-2"
        >
          <FaBars />
          Menue
        </button>

        {/* Overlay (only mobile) */}
        <div
          onClick={() => setOpen(false)}
          className={`fixed inset-0 bg-black/50 z-40 transition md:hidden ${open ? "block" : "hidden"
            }`}
        />

        {/* Drawer (ONLY mobile, md+ hidden) */}
        <aside
          className={`
      fixed top-0 left-0 h-full w-[260px]
      bg-[#070B14] text-white z-50
      transform transition-transform duration-300

      md:hidden
      ${open ? "translate-x-0" : "-translate-x-full"}
    `}
        >
          {/* Header */}
          <div className="flex items-center justify-between p-4 border-b border-white/10">
            <h1 className="text-xl font-bold">HireLoop</h1>

            <button
              onClick={() => setOpen(false)}
              className="text-white"
            >
              <FaTimes />
            </button>
          </div>

          {/* Menu */}
          <nav className="p-4 space-y-2">
            {menus.map((menu, i) => {
              const Icon = menu.icon;

              return (
                <Link
                  key={i}
                  href={menu.path}
                  onClick={() => setOpen(false)}
                  className="flex items-center gap-3 px-4 py-3 rounded-lg text-gray-400 hover:text-white hover:bg-white/10 transition"
                >
                  <Icon />
                  {menu.name}
                </Link>
              );
            })}
          </nav>
        </aside>
      </>


    </div>
  );
};

export default Sidebar;
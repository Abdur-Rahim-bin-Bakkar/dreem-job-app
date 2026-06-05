"use client";

import { useState } from "react";
import Link from "next/link";

import {
  FaBars,
  FaTimes,
  FaBuilding,
  FaBriefcase,
  FaClipboardList,
  FaCog,
} from "react-icons/fa";

import { MdDashboard } from "react-icons/md";

const Sidebar = () => {
  const [open, setOpen] = useState(false);

  // MENUS
  const menus = [
    {
      name: "Dashboard",
      icon: MdDashboard,
      path: "/dashboard",
    },
    {
      name: "My Company",
      icon: FaBuilding,
      path: "/company",
    },
    {
      name: "Manage Jobs",
      icon: FaBriefcase,
      path: "/jobs",
    },
    {
      name: "Applications",
      icon: FaClipboardList,
      path: "/applications",
    },
    {
      name: "Settings",
      icon: FaCog,
      path: "/settings",
    },
  ];

  return (
    <>
      {/* MOBILE MENU BUTTON */}
      <button
        onClick={() => setOpen(true)}
        className="
          md:hidden
          fixed
          bottom-5
          right-5
          z-[100]
          w-12
          h-12
          rounded-full
          bg-white
          text-black
          flex
          items-center
          justify-center
          shadow-2xl
        "
      >
        <FaBars size={18} />
      </button>

      {/* OVERLAY */}
      <div
        onClick={() => setOpen(false)}
        className={`
          sticky
          inset-0
          z-40
          bg-black/50
          backdrop-blur-sm
          transition-all
          duration-300
          md:hidden

          ${
            open
              ? "opacity-100 visible"
              : "opacity-0 invisible"
          }
        `}
      />

      {/* SIDEBAR */}
      
      <aside
        className={`
          
          top-0
          left-0
          z-50
          h-screen
          w-[270px]
          bg-[#070B14]
          border-r
          border-white/10
          flex
          flex-col
          transition-transform
          duration-300
          ease-in-out
           mt-20

          ${
            open
              ? "translate-x-0"
              : "-translate-x-full"
          }

          md:translate-x-0
        `}
      >
        {/* TOP */}
        <div className="p-6 border-b border-white/10">
          <div className="flex items-center justify-between">
            {/* LOGO */}
            <h1 className="text-3xl font-bold text-white tracking-tight">
              HireLoop
            </h1>

            {/* CLOSE BUTTON */}
            <button
              onClick={() => setOpen(false)}
              className="md:hidden text-white"
            >
              <FaTimes size={18} />
            </button>
          </div>

          {/* USER */}
          <div className="mt-8 flex items-center gap-3">
            {/* AVATAR */}
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-gray-700 to-gray-900" />

            <div>
              <h2 className="text-white text-lg font-semibold">
                Alex Sterling
              </h2>

              <p className="text-gray-400 text-xs mt-1">
                Senior HR
              </p>

              <button className="mt-2 px-2 py-1 rounded-md bg-white/10 border border-white/10 text-[10px] text-white">
                PREMIUM ACCOUNT
              </button>
            </div>
          </div>
        </div>

        {/* MENUS */}
        <div className="flex-1 px-3 py-6">
          <div className="space-y-2">
            {menus.map((menu, index) => {
              const Icon = menu.icon;

              return (
                <Link
                  key={index}
                  href={menu.path}
                  onClick={() => setOpen(false)}
                  className={`
                    flex
                    items-center
                    gap-3
                    px-4
                    py-3
                    rounded-xl
                    transition-all
                    duration-300

                    ${
                      index === 0
                        ? "bg-white/10 border border-white/10 text-white"
                        : "text-gray-400 hover:bg-white/5 hover:text-white"
                    }
                  `}
                >
                  <Icon size={17} />

                  <span className="text-sm font-medium">
                    {menu.name}
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
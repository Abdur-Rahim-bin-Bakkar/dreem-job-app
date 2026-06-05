"use client";

import { FaBriefcase, FaUsers, FaCheckCircle, FaClipboardList } from "react-icons/fa";

export default function StatsCards() {
  const stats = [
    {
      title: "Total Job Posts",
      value: "48",
      icon: <FaBriefcase />,
    },
    {
      title: "Total Applicants",
      value: "1,284",
      icon: <FaUsers />,
    },
    {
      title: "Active Jobs",
      value: "18",
      icon: <FaCheckCircle />,
    },
    {
      title: "Jobs Closed",
      value: "32",
      icon: <FaClipboardList />,
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
      {stats.map((item, index) => (
        <div
          key={index}
          className="bg-[#111827] text-white rounded-xl p-5 flex items-center justify-between shadow-md border border-gray-800 hover:border-gray-600 transition"
        >
          {/* Left Text */}
          <div>
            <p className="text-gray-400 text-sm">{item.title}</p>
            <h2 className="text-2xl font-bold mt-1">{item.value}</h2>
          </div>

          {/* Icon */}
          <div className="text-3xl text-blue-500 bg-blue-500/10 p-3 rounded-lg">
            {item.icon}
          </div>
        </div>
      ))}
    </div>
  );
}
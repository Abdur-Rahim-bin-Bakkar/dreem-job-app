"use client";

import { Button } from "@heroui/react";

import {
  HiOutlineSearch,
  HiOutlineLocationMarker,
} from "react-icons/hi";

const Banner = () => {
  const tags = [
    "Product Designer",
    "AI Engineering",
    "DevOps Engineer",
    "Frontend Developer",
  ];

  return (
    <section className="relative overflow-hidden min-h-screen bg-black text-white">

      {/* Top Gradient Glow */}
      <div className="absolute top-[-150px] left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-violet-700/20 blur-[140px] rounded-full"></div>

      {/* Left Glow */}
      <div className="absolute top-[20%] left-[-100px] w-[300px] h-[300px] bg-fuchsia-600/20 blur-[120px] rounded-full"></div>

      {/* Right Glow */}
      <div className="absolute bottom-[10%] right-[-100px] w-[300px] h-[300px] bg-blue-600/20 blur-[120px] rounded-full"></div>

      {/* Grid Background */}
      <div className="absolute inset-0 opacity-[0.06] bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:80px_80px]"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 lg:px-8 pt-40 pb-28">

        {/* Badge */}
        <div className="flex justify-center">
          <div className="inline-flex items-center gap-2 border border-white/10 bg-white/5 backdrop-blur-xl rounded-full px-6 py-2 text-sm text-gray-300 shadow-[0_0_30px_rgba(139,92,246,0.2)]">
            <span className="text-orange-400">🔥</span>

            <span>50,000+ NEW JOBS THIS MONTH</span>
          </div>
        </div>

        {/* Main Content */}
        <div className="max-w-4xl mx-auto text-center mt-10">

          <h1 className="text-5xl md:text-7xl lg:text-[90px] font-black leading-[1.1] tracking-tight">
            Find Your Dream

            <span className="block mt-2 bg-gradient-to-r from-violet-400 via-fuchsia-400 to-blue-400 bg-clip-text text-transparent">
              Job Today
            </span>
          </h1>

          <p className="max-w-2xl mx-auto text-gray-400 text-lg md:text-xl leading-8 mt-8">
            HireLoop connects top talent with world-class companies.
            Browse thousands of curated opportunities and land your
            next role faster than ever before.
          </p>
        </div>

        {/* Search Box */}
        <div className="max-w-5xl mx-auto mt-14">

          <div className="bg-white/[0.04] border border-white/10 backdrop-blur-2xl rounded-3xl p-4 flex flex-col lg:flex-row gap-4 shadow-[0_0_40px_rgba(139,92,246,0.15)]">

            {/* Search Input */}
            <div className="flex-1">
              <div className="flex items-center gap-3 h-16 px-5 rounded-2xl bg-transparent border border-white/10">

                <HiOutlineSearch className="text-gray-500 text-2xl" />

                <input
                  type="text"
                  placeholder="Job title, skill or company"
                  className="w-full bg-transparent outline-none text-white placeholder:text-gray-500 text-base"
                />
              </div>
            </div>

            {/* Location Input */}
            <div className="flex-1">
              <div className="flex items-center gap-3 h-16 px-5 rounded-2xl bg-transparent border border-white/10">

                <HiOutlineLocationMarker className="text-gray-500 text-2xl" />

                <input
                  type="text"
                  placeholder="Location or Remote"
                  className="w-full bg-transparent outline-none text-white placeholder:text-gray-500 text-base"
                />
              </div>
            </div>

            {/* Button */}
            <Button
              className="bg-violet-600 hover:bg-violet-700 text-white rounded-2xl h-16 px-10 text-lg font-semibold"
            >
              <HiOutlineSearch className="text-2xl" />
            </Button>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap items-center justify-center gap-3 mt-8">

            <span className="text-gray-500 text-sm">
              Trending:
            </span>

            {tags.map((tag) => (
              <button
                key={tag}
                className="px-5 py-2 rounded-full bg-white/[0.04] border border-white/10 text-sm text-gray-300 hover:bg-violet-600 hover:border-violet-500 transition duration-300"
              >
                {tag}
              </button>
            ))}
          </div>
        </div>

        {/* Bottom Blur Line */}
        <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-violet-500 to-transparent"></div>
      </div>
    </section>
  );
};

export default Banner;
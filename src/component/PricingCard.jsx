"use client";

import { Button } from "@heroui/react";

const PricingCard = ({ title, price, desc, features, isPopular }) => {
  return (
    <div
      className={`rounded-3xl p-6 border transition duration-300 ${
        isPopular
          ? "bg-white text-black border-white scale-105"
          : "bg-[#111] text-white border-white/10"
      }`}
    >
      {/* Title */}
      <h3 className="text-lg font-semibold">{title}</h3>

      {/* Price */}
      <div className="mt-3 flex items-end gap-1">
        <h1 className="text-4xl font-bold">${price}</h1>
        <span className="text-sm opacity-70">/month</span>
      </div>

      {/* Description */}
      <p className={`mt-3 text-sm ${isPopular ? "text-black/70" : "text-gray-400"}`}>
        {desc}
      </p>

      {/* Features */}
      <ul className="mt-5 space-y-2 text-sm">
        {features.map((item, i) => (
          <li key={i} className="flex items-center gap-2">
            <span>✔</span> {item}
          </li>
        ))}
      </ul>

      {/* Button */}
      <Button
        className={`w-full mt-6 rounded-2xl font-medium ${
          isPopular ? "bg-black text-white" : "bg-white text-black"
        }`}
      >
        Choose Plan
      </Button>
    </div>
  );
};

export default PricingCard;
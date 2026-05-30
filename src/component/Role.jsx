"use client";

import Link from "next/link";
import {
  FaFacebookF,
  FaGithub,
  FaInstagram,
  FaLinkedinIn,
  FaXTwitter,
} from "react-icons/fa6";

const Role = () => {
  return (
    <footer className="bg-black text-white border-t border-white/10 overflow-hidden">
      {/* Top Glow */}
      <div className="relative">
        <div className="absolute inset-0 flex justify-center">
          <div className="w-[700px] h-[250px] bg-violet-600/30 blur-[140px] rounded-full -top-24 absolute"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-6 lg:px-10 pt-20 pb-12">
          {/* CTA Section */}
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-5xl font-bold leading-tight">
              Your next role is
              <br />
              already looking for you
            </h2>

            <p className="text-gray-400 mt-5 max-w-2xl mx-auto text-sm md:text-base">
              Join thousands of developers discovering better remote jobs,
              faster applications, and top companies.
            </p>

            <div className="flex items-center justify-center gap-4 mt-8 flex-wrap">
              <button className="bg-white text-black px-6 py-3 rounded-full font-semibold hover:scale-105 duration-300">
                Get Started
              </button>

              <button className="border border-white/20 px-6 py-3 rounded-full hover:bg-white/10 duration-300">
                Browse Jobs
              </button>
            </div>
          </div>

          {/* Footer Grid */}
         
        </div>
      </div>
    </footer>
  );
};

export default Role;
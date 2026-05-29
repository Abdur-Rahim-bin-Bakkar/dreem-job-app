"use client";

import Link from "next/link";
import {
  FaFacebookF,
  FaGithub,
  FaInstagram,
  FaLinkedinIn,
  FaXTwitter,
} from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-black text-white border-t border-white/10 overflow-hidden text-center md:text-start">
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 border-t border-white/10 pt-14">
            {/* Logo & About */}
            <div className="lg:col-span-2">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-violet-600"></div>

                <h1 className="text-xl font-bold">
                  Hire<span className="text-violet-500">Loop</span>
                </h1>
              </div>

              <p className="text-gray-400 text-sm leading-7 mt-5 max-w-md">
                Discover premium remote jobs from top startups and companies
                around the world. Build your career with opportunities designed
                for modern developers.
              </p>

              {/* Social */}
              <div className="flex items-center gap-4 mt-6 justify-center md:justify-start">
                <Link
                  href="#"
                  className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-violet-600 duration-300"
                >
                  <FaFacebookF />
                </Link>

                <Link
                  href="#"
                  className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-violet-600 duration-300"
                >
                  <FaInstagram />
                </Link>

                <Link
                  href="#"
                  className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-violet-600 duration-300"
                >
                  <FaLinkedinIn />
                </Link>

                <Link
                  href="#"
                  className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-violet-600 duration-300"
                >
                  <FaGithub />
                </Link>

                <Link
                  href="#"
                  className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-violet-600 duration-300"
                >
                  <FaXTwitter />
                </Link>
              </div>
            </div>

            {/* Links */}
            <div>
              <h3 className="font-semibold text-lg mb-5">Product</h3>

              <div className="flex flex-col gap-3 text-gray-400 text-sm">
                <Link href="#" className="hover:text-white duration-300">
                  Find Jobs
                </Link>

                <Link href="#" className="hover:text-white duration-300">
                  Companies
                </Link>

                <Link href="#" className="hover:text-white duration-300">
                  Pricing
                </Link>

                <Link href="#" className="hover:text-white duration-300">
                  Dashboard
                </Link>
              </div>
            </div>

            <div>
              <h3 className="font-semibold text-lg mb-5">Resources</h3>

              <div className="flex flex-col gap-3 text-gray-400 text-sm">
                <Link href="#" className="hover:text-white duration-300">
                  Blog
                </Link>

                <Link href="#" className="hover:text-white duration-300">
                  Career Tips
                </Link>

                <Link href="#" className="hover:text-white duration-300">
                  Help Center
                </Link>

                <Link href="#" className="hover:text-white duration-300">
                  Support
                </Link>
              </div>
            </div>

            <div>
              <h3 className="font-semibold text-lg mb-5">Company</h3>

              <div className="flex flex-col gap-3 text-gray-400 text-sm">
                <Link href="#" className="hover:text-white duration-300">
                  About
                </Link>

                <Link href="#" className="hover:text-white duration-300">
                  Contact
                </Link>

                <Link href="#" className="hover:text-white duration-300">
                  Privacy Policy
                </Link>

                <Link href="#" className="hover:text-white duration-300">
                  Terms & Conditions
                </Link>
              </div>
            </div>
          </div>

          {/* Bottom */}
          <div className="border-t border-white/10 mt-14 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-gray-500">
              © 2026 JobBoard. All rights reserved.
            </p>

            <div className="flex items-center gap-5 text-sm text-gray-500">
              <Link href="#" className="hover:text-white duration-300">
                Privacy
              </Link>

              <Link href="#" className="hover:text-white duration-300">
                Terms
              </Link>

              <Link href="#" className="hover:text-white duration-300">
                Cookies
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
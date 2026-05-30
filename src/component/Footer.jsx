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
         

          {/* Footer Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 ">
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
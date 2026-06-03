"use client";

import Link from "next/link";
import { useState } from "react";
import { Button } from "@heroui/react";
import { HiOutlineMenuAlt3, HiX } from "react-icons/hi";
import logo from '@/images/logo.png'
import Image from "next/image";
import { authClient } from "@/lib/auth-client";

const Navbar = () => {

  const {
    data: session,
    isPending, //loading state
    error, //error object
    refetch //refetch the session
  } = authClient.useSession()
  console.log(session)
  const handleSignout = async () => {
    await authClient.signOut();
  }

  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    {
      name: "Browse Jobs",
      href: "/jobs",
    },
    {
      name: "Companies",
      href: "/companies",
    },
    {
      name: "Candidates",
      href: "/candidates",
    },
    {
      name: "Pricing",
      href: "/pricing",
    },
  ];

  return (
    <nav className="absolute top-0 left-0 w-full z-50">

      <div className="max-w-7xl mx-auto px-4 lg:px-8">

        <div className="flex items-center justify-between py-6">

          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-3 shrink-0"
          >

            <Image src={logo} alt='logo' width={500} height={400} className="w-25 md:w-35" />

            {/* <h2 className="text-white text-2xl font-black tracking-tight">
              HireLoop
            </h2> */}
          </Link>

          {/* Desktop Right Section */}
          <div className="hidden lg:flex items-center ml-auto">

            {/* Nav Links */}
            <div className="flex items-center gap-1">

              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-gray-300 hover:text-violet-400 text-[15px] font-medium transition duration-300 px-5 py-3 rounded-xl hover:bg-white/[0.05]"
                >
                  {link.name}
                </Link>
              ))}
            </div>

            {/* Divider */}
            <div className="w-px h-7 bg-gradient-to-b from-violet-500/20 via-fuchsia-400/60 to-blue-500/20 mx-6"></div>

            {/* Right Buttons */}
            <div className="flex items-center gap-4">

              {
                session ? <>
                  <p>{session?.user?.name}</p>
                  <Button onClick={handleSignout}>Sign Out</Button>

                </> :
                  <Link
                    href="/login"
                    className="text-violet-300 font-medium"
                  >
                    Sign-In
                  </Link>
              }

              <Button
                className="bg-white text-black hover:scale-105 transition duration-300 font-semibold rounded-2xl px-7 h-12"
              >
                Get Started
              </Button>
            </div>
          </div>

          {/* Mobile Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden text-white text-3xl"
          >
            {
              isOpen
                ? <HiX />
                : <HiOutlineMenuAlt3 />
            }
          </button>
        </div>

        {/* Mobile Menu */}
        {
          isOpen && (
            <div className="lg:hidden bg-white/10 backdrop-blur-md rounded-2xl p-5">

              <div className="flex flex-col gap-4">

                {
                  navLinks.map((link) => (
                    <Link
                      key={link.name}
                      href={link.href}
                      className="text-white text-base font-medium"
                    >
                      {link.name}
                    </Link>
                  ))
                }

                {/* Divider */}
                <div className="w-full h-px bg-gradient-to-r from-violet-500/20 via-fuchsia-400/60 to-blue-500/20"></div>

                <div className="flex flex-col gap-3 pt-2">
                  {
                    session ? <></> :
                      <Link
                        href="/login"
                        className="text-violet-300 font-medium"
                      >
                        Sign-In
                      </Link>
                  }



                  <Button className="bg-white text-black rounded-xl">
                    Get Started
                  </Button>

                </div>
              </div>
            </div>
          )
        }

      </div>
    </nav>
  );
};

export default Navbar;
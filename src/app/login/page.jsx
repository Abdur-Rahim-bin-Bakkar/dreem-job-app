// app/login/page.jsx

"use client";

import Link from "next/link";
import { Button } from "@heroui/react";

import { HiOutlineMail, HiOutlineLockClosed } from "react-icons/hi";
import { FaGoogle, FaGithub } from "react-icons/fa";
import { authClient } from "@/lib/auth-client";
import { useRouter, useSearchParams } from "next/navigation";

const LoginPage = () => {
  const router = useRouter()
  const params = useSearchParams()
  const redirectTo = params.get('redirect') || '/'
  console.log(redirectTo)



  const onSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);

    const email = formData.get("email");
    const password = formData.get("password");

    console.log("Email:", email);
    console.log("Password:", password);
    const { data, error } = await authClient.signIn.email({
      /**
       * The user email
       */
      email,
      /**
       * The user password
       */
      password,
      /**
       * A URL to redirect to after the user verifies their email (optional)
       */
      // callbackURL: "/",
      /**
       * remember the user session after the browser is closed. 
       * @default true
       */
      rememberMe: false
    }, {
      //callbacks
    })
    console.log(error,'errror')
    console.log(data,'data')
    if(data){
      router.push(redirectTo)
    }
  };
  return (
    <section className="relative min-h-screen overflow-hidden bg-black text-white mt-10">

      {/* Glow Effect */}
      <div className="absolute top-[-150px] left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-violet-700/20 blur-[140px] rounded-full"></div>

      {/* Grid Background */}
      <div className="absolute inset-0 opacity-[0.06] bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:80px_80px]"></div>

   

      {/* Login Card */}
      <div className="relative z-10 flex items-center justify-center px-4 py-16">

        <div className="w-full max-w-md bg-white/[0.04] border border-white/10 backdrop-blur-2xl rounded-3xl p-8 shadow-[0_0_50px_rgba(139,92,246,0.15)]">

          {/* Header */}
          <div className="text-center">
            <h2 className="text-4xl font-black">
              <span className="text-white">hire</span>
              <span className="text-violet-400">loop</span>
            </h2>

            <h1 className="text-5xl font-black mt-6">
              Welcome Back
            </h1>

            <p className="text-gray-400 mt-3">
              Login to continue your journey
            </p>
          </div>

          {/* Form */}
          <form onSubmit={onSubmit} className="mt-10 space-y-6">

            {/* Email */}
            <div>
              <label className="text-sm text-gray-400 mb-2 block">
                Email
              </label>

              <div className="relative">
                <HiOutlineMail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 text-xl" />

                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full h-14 pl-12 pr-4 bg-white/[0.04] border border-white/10 rounded-xl text-white placeholder:text-gray-500 outline-none focus:border-violet-500"
                  name="email"
                />
              </div>
            </div>

            {/* Password */}
            <div>
              <label className="text-sm text-gray-400 mb-2 block">
                Password
              </label>

              <div className="relative">
                <HiOutlineLockClosed className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 text-xl" />

                <input
                  type="password"
                  placeholder="Enter your password"
                  className="w-full h-14 pl-12 pr-4 bg-white/[0.04] border border-white/10 rounded-xl text-white placeholder:text-gray-500 outline-none focus:border-violet-500"
                  name="password"
                />
              </div>
            </div>

            {/* Forgot */}
            <div className="flex justify-end">
              <Link
                href="/forgot-password"
                className="text-sm text-violet-400 hover:text-violet-300"
              >
                Forgot Password?
              </Link>
            </div>

            {/* Button */}
            <Button
              type="submit"
              fullWidth
              className="bg-violet-600 hover:bg-violet-700 h-14 rounded-xl text-white font-semibold text-base"
            >
              Login
            </Button>
          </form>

          {/* Register */}
          <p className="text-center text-gray-400 text-sm mt-6">
            Don&apos;t have an account?{" "}
            <Link href={`/register?redirect=${redirectTo}`} className="text-violet-400">
              Sign Up
            </Link>
          </p>

          {/* Divider */}
          <div className="flex items-center gap-4 my-8">
            <div className="flex-1 h-[1px] bg-white/10"></div>
            <span className="text-xs text-gray-500">OR CONTINUE WITH</span>
            <div className="flex-1 h-[1px] bg-white/10"></div>
          </div>

          {/* Social */}
          <div className="space-y-4">

            <Button
              fullWidth
              variant="bordered"
              className="border-white/10 bg-white/[0.03] h-14 text-white"
            >
              <FaGoogle className="text-red-500 text-lg" />
              Continue with Google
            </Button>

            <Button
              fullWidth
              variant="bordered"
              className="border-white/10 bg-white/[0.03] h-14 text-white"
            >
              <FaGithub className="text-lg" />
              Continue with Github
            </Button>

          </div>
        </div>
      </div>
    </section>
  );
};

export default LoginPage;
"use client";

import { authClient } from "@/lib/auth-client";
import { Button } from "@heroui/react";
import Link from "next/link";
import { redirect, useSearchParams } from "next/navigation";
import { Description, Label, Radio, RadioGroup } from "@heroui/react";

import { FaGithub, FaGoogle, FaUser } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";

const RegisterForm = () => {
  const params = useSearchParams()
  const redirectTo = params.get('redirect') || '/'
  console.log(redirectTo)

  const handleRegister = async (e) => {
    e.preventDefault();

    const form = e.target;

    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const role = form.role.value;

    console.log({
      name,
      email,
      password,
      role
    });

    const { data, error } = await authClient.signUp.email({
      name,
      email,
      password,
      role
    });

    console.log(data, "data");
    console.log(error, "error");
    if (data) {
      redirect(`/login?redirect=${redirectTo}`)
    }
  };

  return (
    <div className="w-full max-w-md mt-28 bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 shadow-2xl mb-10">

      {/* Logo */}
      <div className="flex justify-center mb-6">
        <h1 className="text-3xl font-black">
          <span className="text-white">hire</span>
          <span className="text-purple-500">loop</span>
        </h1>
      </div>

      {/* Heading */}
      <div className="text-center mb-8">
        <h2 className="text-4xl font-bold mb-2 text-white">
          Create Account
        </h2>

        <p className="text-gray-400 text-sm">
          Start your journey and find your dream job
        </p>
      </div>

      {/* Form */}
      <form
        onSubmit={handleRegister}
        className="space-y-5"
      >

        {/* Name */}
        <div className="space-y-2">

          <label className="text-sm text-gray-400">
            Full Name
          </label>

          <div className="flex items-center gap-3 h-14 px-4 bg-white/5 border border-white/10 rounded-xl hover:border-purple-500 transition-all duration-300">

            <FaUser className="text-gray-400 text-lg" />

            <input
              type="text"
              name="name"
              placeholder="Abdur Rahim"
              className="w-full bg-transparent outline-none text-white placeholder:text-gray-500"
            />
          </div>
        </div>

        {/* Email */}
        <div className="space-y-2">

          <label className="text-sm text-gray-400">
            Email
          </label>

          <div className="flex items-center gap-3 h-14 px-4 bg-white/5 border border-white/10 rounded-xl hover:border-purple-500 transition-all duration-300">

            <MdEmail className="text-gray-400 text-xl" />

            <input
              type="email"
              name="email"
              placeholder="rahim@gmail.com"
              className="w-full bg-transparent outline-none text-white placeholder:text-gray-500"
            />
          </div>
        </div>

        {/* Password */}
        <div className="space-y-2">

          <label className="text-sm text-gray-400">
            Password
          </label>

          <div className="flex items-center gap-3 h-14 px-4 bg-white/5 border border-white/10 rounded-xl hover:border-purple-500 transition-all duration-300">

            <RiLockPasswordFill className="text-gray-400 text-xl" />

            <input
              type="password"
              name="password"
              placeholder="********"
              className="w-full bg-transparent outline-none text-white placeholder:text-gray-500"
            />
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <Label>What you want to do</Label>
          <RadioGroup defaultValue="seeker" name="role" orientation="horizontal">
            <Radio value="seeker">
              <Radio.Control>
                <Radio.Indicator />
              </Radio.Control>
              <Radio.Content>
                <Label>Seeker</Label>

              </Radio.Content>
            </Radio>

            <Radio value="recruiter">
              <Radio.Control>
                <Radio.Indicator />
              </Radio.Control>
              <Radio.Content>
                <Label>Recruiter</Label>

              </Radio.Content>
            </Radio>
          </RadioGroup>
        </div>

        {/* Submit Button */}
        <Button
          type="submit"
          className="w-full bg-purple-600 hover:bg-purple-700 text-white font-semibold h-12 rounded-xl transition-all duration-300"
        >
          Create Account
        </Button>

      </form>

      {/* Footer */}
      <p className="text-center text-sm text-gray-400 mt-6">

        Already have an account?{" "}

        <Link
          href={`/login?redirect=${redirectTo}`}
          className="text-purple-400 hover:text-purple-300 transition-colors"
        >
          Sign In
        </Link>
      </p>

      {/* Divider */}
      <div className="flex items-center gap-3 my-6">

        <div className="flex-1 h-[1px] bg-white/10" />

        <p className="text-xs text-gray-500 whitespace-nowrap">
          OR CONTINUE WITH
        </p>

        <div className="flex-1 h-[1px] bg-white/10" />

      </div>

      {/* Social Login */}
      <div className="space-y-4">

        {/* Google */}
        <Button
          className="w-full bg-white/10 border border-white/10 text-white h-12 rounded-xl hover:bg-white/15 transition-all duration-300 flex items-center justify-center gap-2"
        >
          <FaGoogle className="text-red-400 text-lg" />

          Continue with Google
        </Button>

        {/* Github */}
        <Button
          className="w-full bg-white/10 border border-white/10 text-white h-12 rounded-xl hover:bg-white/15 transition-all duration-300 flex items-center justify-center gap-2"
        >
          <FaGithub className="text-white text-lg" />

          Continue with Github
        </Button>

      </div>

    </div>
  );
};

export default RegisterForm;
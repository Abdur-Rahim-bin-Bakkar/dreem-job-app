"use client";

import Image from "next/image";
import {
  FaBriefcase,
  FaMoneyBillWave,
  FaCalendarAlt,
} from "react-icons/fa";

export default function JobDetails({ jobDetailsData }) {
  console.log(jobDetailsData?.logo)
  if (!jobDetailsData) {
    return (
      <div className="text-center text-white mt-20">
        Loading job details...
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto px-4 py-10 mt-20">

      {/* HEADER */}
      <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-6 md:p-10 shadow-lg">

        <div className="flex flex-col md:flex-row md:items-center gap-6">

          {/* logo fallback */}
          <Image
            src={jobDetailsData?.logo}
            alt="company logo"
            width={80}
            height={80}
            className="rounded-xl"
            unoptimized
          />

          <div>
            <h1 className="text-2xl md:text-3xl font-bold text-white">
              {jobDetailsData.jobTitle}
            </h1>

            <p className="text-zinc-400 text-sm mt-1">
              {jobDetailsData.companyName || "Unknown Company"} • {jobDetailsData.jobCategory}
            </p>

            <div className="flex gap-3 mt-3 flex-wrap">
              <span className="bg-green-600/20 text-green-400 px-3 py-1 rounded-full text-xs">
                {jobDetailsData.jobType}
              </span>

              {jobDetailsData.isRemote && (
                <span className="bg-blue-600/20 text-blue-400 px-3 py-1 rounded-full text-xs">
                  Remote
                </span>
              )}

              <span className="bg-zinc-800 text-zinc-300 px-3 py-1 rounded-full text-xs">
                {jobDetailsData.status}
              </span>
            </div>
          </div>
        </div>

        {/* INFO GRID */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8 text-sm">

          <div className="flex items-center gap-2 text-zinc-300">
            <FaMoneyBillWave />
            Salary: {jobDetailsData.currency} {jobDetailsData.minSalary} - {jobDetailsData.maxSalary}
          </div>

          <div className="flex items-center gap-2 text-zinc-300">
            <FaCalendarAlt />
            Deadline: {jobDetailsData.deadline}
          </div>

          <div className="flex items-center gap-2 text-zinc-300">
            <FaBriefcase />
            Category: {jobDetailsData.jobCategory}
          </div>

        </div>
      </div>

      {/* BODY */}
      <div className="grid md:grid-cols-3 gap-6 mt-8">

        {/* LEFT SIDE */}
        <div className="md:col-span-2 space-y-6">

          <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6">
            <h2 className="text-xl font-semibold mb-3">Responsibilities</h2>
            <p className="text-zinc-400">
              {jobDetailsData.responsibilities}
            </p>
          </div>

          <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6">
            <h2 className="text-xl font-semibold mb-3">Requirements</h2>
            <p className="text-zinc-400">
              {jobDetailsData.requirements}
            </p>
          </div>

          <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6">
            <h2 className="text-xl font-semibold mb-3">Benefits</h2>
            <p className="text-zinc-400">
              {jobDetailsData.benefits}
            </p>
          </div>

        </div>

        {/* RIGHT SIDE */}
        <div className="space-y-6">

          {/* Apply Box */}
          <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6">
            <h2 className="text-lg font-semibold mb-3">Apply Now</h2>

            <button className="w-full bg-blue-600 hover:bg-blue-700 transition text-white py-2 rounded-xl">
              Apply Now
            </button>

            <p className="text-xs text-zinc-400 mt-3">
              Deadline: {jobDetailsData.deadline}
            </p>
          </div>

          {/* Company */}
          <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6">
            <h2 className="text-lg font-semibold mb-3">Company</h2>

            <div className="flex items-center gap-3">

              <Image
                src={jobDetailsData.logo || "https://via.placeholder.com/40"}
                alt="company"
                width={40}
                height={40}
                className="rounded-md"
                unoptimized
              />

              <div>
                <p className="text-white">
                  {jobDetailsData.companyName || "Unknown Company"}
                </p>

                <p className="text-zinc-400 text-xs">
                  ID: {jobDetailsData.companyId}
                </p>
              </div>

            </div>
          </div>

        </div>
      </div>

    </div>
  );
}
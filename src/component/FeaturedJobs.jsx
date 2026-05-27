"use client";

import { Button } from "@heroui/react";
import { FaArrowRight } from "react-icons/fa";

const jobs = [
  {
    title: "Frontend Developer",
    company:
      "Showcase your commitment to diversity and inclusion by highlighting initiatives",
    location: "New York, USA",
    type: "Hybrid",
    salary: "$25-40k/year",
  },
  {
    title: "Frontend Developer",
    company:
      "Showcase your commitment to diversity and inclusion by highlighting initiatives",
    location: "New York, USA",
    type: "Hybrid",
    salary: "$25-40k/year",
  },
  {
    title: "Frontend Developer",
    company:
      "Showcase your commitment to diversity and inclusion by highlighting initiatives",
    location: "New York, USA",
    type: "Hybrid",
    salary: "$25-40k/year",
  },
  {
    title: "Frontend Developer",
    company:
      "Showcase your commitment to diversity and inclusion by highlighting initiatives",
    location: "New York, USA",
    type: "Hybrid",
    salary: "$25-40k/year",
  },
  {
    title: "Frontend Developer",
    company:
      "Showcase your commitment to diversity and inclusion by highlighting initiatives",
    location: "New York, USA",
    type: "Hybrid",
    salary: "$25-40k/year",
  },
  {
    title: "Frontend Developer",
    company:
      "Showcase your commitment to diversity and inclusion by highlighting initiatives",
    location: "New York, USA",
    type: "Hybrid",
    salary: "$25-40k/year",
  },
];

const FeaturedJobs = () => {
  return (
    <section className="bg-black py-24 px-4">
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-16">
          <p className="text-xs uppercase tracking-[0.3em] text-violet-400 mb-4">
            Smart Job Discovery
          </p>

          <h2 className="text-white text-3xl md:text-5xl font-bold leading-tight max-w-2xl mx-auto">
            The roles you’d never
            <br />
            find by searching
          </h2>
        </div>

        {/* Job Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

          {jobs.map((job, index) => (
            <div
              key={index}
              className="bg-[#111111] border border-white/5 rounded-3xl p-7 hover:border-violet-500/40 transition duration-300"
            >

              <h3 className="text-white text-xl font-semibold mb-4">
                {job.title}
              </h3>

              <p className="text-gray-400 text-sm leading-7 mb-6">
                {job.company}
              </p>

              <div className="flex flex-wrap gap-3 mb-8">

                <span className="bg-white/5 text-gray-300 text-xs px-3 py-2 rounded-full">
                  📍 {job.location}
                </span>

                <span className="bg-white/5 text-gray-300 text-xs px-3 py-2 rounded-full">
                  {job.type}
                </span>

                <span className="bg-violet-500/10 text-violet-300 text-xs px-3 py-2 rounded-full">
                  {job.salary}
                </span>

              </div>

              <button className="text-white text-sm flex items-center gap-2 hover:text-violet-400 transition">
                Apply Now
                <FaArrowRight className="text-sm" />
              </button>

            </div>
          ))}
        </div>

        {/* Bottom Button */}
        <div className="flex justify-center mt-12">
          <Button className="bg-white text-black rounded-2xl px-8 h-12 font-medium">
            View all job openings
          </Button>
        </div>

      </div>
    </section>
  );
};

export default FeaturedJobs;
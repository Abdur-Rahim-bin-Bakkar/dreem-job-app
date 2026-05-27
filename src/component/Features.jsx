"use client";

import {
  FaSearch,
  FaChartBar,
  FaBriefcase,
  FaBookmark,
  FaRocket,
  FaFileAlt,
  FaBrain,
  FaChartLine,
} from "react-icons/fa";

const features = [
  {
    icon: FaSearch,
    title: "Smart Search",
    desc: "Find your ideal role with advanced filters.",
  },
  {
    icon: FaChartBar,
    title: "Salary Insights",
    desc: "See real salary data to negotiate confidently.",
  },
  {
    icon: FaBriefcase,
    title: "Top Companies",
    desc: "Apply to vetted brands with top culture.",
  },
  {
    icon: FaBookmark,
    title: "Saved Jobs",
    desc: "Manage jobs favorites on your dashboard.",
  },
  {
    icon: FaRocket,
    title: "One-Click Apply",
    desc: "Simplify your application with instant process.",
  },
  {
    icon: FaFileAlt,
    title: "Resume Builder",
    desc: "Craft professional resumes with modern templates.",
  },
  {
    icon: FaBrain,
    title: "Skill-Based Matching",
    desc: "Discover jobs that match your abilities.",
  },
  {
    icon: FaChartLine,
    title: "Career Growth Resources",
    desc: "Boost your career with expert learning tips.",
  },
];

const Features = () => {
  return (
    <section className="bg-[#0d0d0d] py-24 px-4">
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-16">
          <p className="text-xs uppercase tracking-[0.3em] text-violet-400 mb-4">
            Featured Job
          </p>

          <h2 className="text-white text-3xl md:text-5xl font-bold leading-tight">
            Everything you need
            <br />
            to succeed
          </h2>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">

          {features.map((feature, index) => {
            const Icon = feature.icon;

            // 🔥 safety check (important)
            if (!Icon) return null;

            return (
              <div
                key={index}
                className="bg-[#121212] border border-white/5 rounded-3xl p-6 hover:border-violet-500/30 transition duration-300"
              >
                <div className="w-12 h-12 rounded-2xl bg-black flex items-center justify-center border border-white/10 mb-5">
                  <Icon className="text-violet-400 text-[20px]" />
                </div>

                <h3 className="text-white font-semibold text-lg mb-3">
                  {feature.title}
                </h3>

                <p className="text-gray-400 text-sm leading-7">
                  {feature.desc}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default Features;
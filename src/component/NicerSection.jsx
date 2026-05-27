// components/home/NicerSection.jsx

"use client";

import globe from "@/images/globe.png";

import {
  HiOutlineBriefcase,
  HiOutlineOfficeBuilding,
  HiOutlineUsers,
  HiOutlineStar,
} from "react-icons/hi";

const NicerSection = () => {
  const stats = [
    {
      id: 1,
      title: "50K",
      subtitle: "Active Jobs",
      icon: <HiOutlineBriefcase />,
    },
    {
      id: 2,
      title: "12K",
      subtitle: "Companies",
      icon: <HiOutlineOfficeBuilding />,
    },
    {
      id: 3,
      title: "2M",
      subtitle: "Job Seekers",
      icon: <HiOutlineUsers />,
    },
    {
      id: 4,
      title: "97%",
      subtitle: "Satisfaction Rate",
      icon: <HiOutlineStar />,
    },
  ];

  return (
    <section className="relative overflow-hidden bg-black text-white pb-24">

      {/* Background Image Section */}
      <div
        className="relative w-full min-h-[450px] bg-cover bg-center bg-no-repeat flex items-center justify-center"
        style={{
          backgroundImage: `url(${globe.src})`,
        }}
      >

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/40"></div>

        {/* Content */}
        <div className="relative z-10 text-center px-4">
          <h2 className="text-2xl md:text-4xl font-bold leading-tight">
            Assisting over 15,000 job seekers
            find their dream positions.
          </h2>

          <p className="text-gray-300 mt-6 text-lg">
            Join thousands of professionals already growing their careers with HireLoop.
          </p>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 -mt-20 relative z-20">

          {stats.map((item) => (
            <div
              key={item.id}
              className="bg-white/5 border border-white/10 backdrop-blur-xl rounded-3xl p-8 hover:-translate-y-2 transition duration-300"
            >
              <div className="text-violet-400 text-2xl">
                {item.icon}
              </div>

              <h2 className="text-5xl font-bold mt-6">
                {item.title}
              </h2>

              <p className="text-gray-400 mt-3">
                {item.subtitle}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NicerSection;
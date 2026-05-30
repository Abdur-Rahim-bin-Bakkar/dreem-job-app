"use client";

import PricingCard from "./PricingCard";

const PricingSection = () => {
  return (
    <section className="bg-black py-24  text-center  w-full px-5">
      <div className=" ">

        {/* Heading */}
        <p className="text-violet-400 text-xs uppercase tracking-[0.3em]">
          Pricing
        </p>

        <h2 className="text-white text-3xl md:text-5xl font-bold mt-3">
          Pay for the leverage,
          <br />
          not the listings
        </h2>

        {/* Toggle UI */}
        <div className="mt-6 inline-flex bg-[#1a1a1a] p-1 rounded-full">
          <button className="px-4 py-1 text-sm bg-white text-black rounded-full">
            Monthly
          </button>
          <button className="px-4 py-1 text-sm text-gray-300">
            Yearly
          </button>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-6 mt-12 w-full ">

          <PricingCard
            title="Starter"
            price="0"
            desc="Basic access to get started"
            features={[
              "Daily job alerts",
              "Basic analytics",
              "Limited insights",
            ]}
          />

          <PricingCard
            title="Growth"
            price="17"
            isPopular={true}
            desc="Best for active job seekers"
            features={[
              "Everything in Starter",
              "AI recommendations",
              "Salary insights",
              "Advanced filters",
            ]}
          />

          <PricingCard
            title="Premium"
            price="99"
            desc="Full access for professionals"
            features={[
              "Everything in Growth",
              "Priority listings",
              "Recruiter access",
            ]}
          />

        </div>

      </div>
    </section>
  );
};

export default PricingSection;
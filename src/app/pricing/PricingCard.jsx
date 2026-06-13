"use client";

import { useState } from "react";
import { Card, Button } from "@heroui/react";
import {
  FaCheck,
  FaCrown,
  FaUserTie,
  FaBuilding,
  FaChevronDown,
} from "react-icons/fa";

const pricingPlans = {
  seekers: [
    {
      name: "Free",
      price: "$0",
      period: "/forever",
      popular: false,
      features: [
        "Browse & save up to 10 jobs",
        "Apply to up to 3 jobs per month",
        "Basic profile",
        "Email alerts",
      ],
    },
    {
      name: "Pro",
      price: "$19",
      period: "/month",
      popular: true,
      features: [
        "Apply to up to 30 jobs per month",
        "Unlimited saved jobs",
        "Application tracking",
        "Salary insights",
      ],
    },
    {
      name: "Premium",
      price: "$39",
      period: "/month",
      popular: false,
      features: [
        "Everything in Pro",
        "Unlimited applications",
        "Profile boost to recruiters",
        "Early access to new jobs",
        "Priority support",
      ],
    },
  ],

  recruiters: [
    {
      name: "Free",
      price: "$0",
      period: "/forever",
      popular: false,
      features: [
        "Up to 3 active job posts",
        "Basic applicant management",
        "Standard listing visibility",
      ],
    },
    {
      name: "Growth",
      price: "$49",
      period: "/month",
      popular: true,
      features: [
        "Up to 10 active job posts",
        "Applicant tracking",
        "Basic analytics",
        "Email support",
      ],
    },
    {
      name: "Enterprise",
      price: "$149",
      period: "/month",
      popular: false,
      features: [
        "Up to 50 active job posts",
        "Advanced analytics dashboard",
        "Featured job listings",
        "Team collaboration",
        "Custom branding",
        "Priority support",
      ],
    },
  ],
};

const faqs = [
  {
    question: "Can I cancel my subscription anytime?",
    answer:
      "Yes. You can cancel your subscription at any time from your account settings.",
  },
  {
    question: "Do you offer refunds?",
    answer:
      "Refund requests are reviewed on a case-by-case basis according to our refund policy.",
  },
  {
    question: "What payment methods do you accept?",
    answer:
      "We accept major credit cards, debit cards, and supported online payment methods.",
  },
  {
    question: "Can I switch plans later?",
    answer:
      "Absolutely. You can upgrade or downgrade your plan at any time.",
  },
];

export default function PricingCard() {
  const [activeTab, setActiveTab] = useState("seekers");
  const [openFaq, setOpenFaq] = useState(null);

  const plans =
    activeTab === "seekers"
      ? pricingPlans.seekers
      : pricingPlans.recruiters;

  return (
    <div className="max-w-11/12 mx-auto px-4 py-20">

      {/* Header */}
      <div className="text-center mb-16">
        <h1 className="text-5xl font-bold">
          Simple & Transparent Pricing
        </h1>

        <p className="text-zinc-400 mt-4 max-w-2xl mx-auto">
          Choose the perfect plan whether you re searching for your next
          opportunity or hiring top talent.
        </p>
      </div>

      {/* Toggle */}
      <div className="flex justify-center mb-12">
        <div className="bg-zinc-900 p-2 rounded-2xl flex gap-2 border border-zinc-800">

          <button
            onClick={() => setActiveTab("seekers")}
            className={`flex items-center gap-2 px-6 py-3 rounded-xl transition ${
              activeTab === "seekers"
                ? "bg-blue-600 text-white"
                : "text-zinc-400 hover:text-white"
            }`}
          >
            <FaUserTie />
            Job Seekers
          </button>

          <button
            onClick={() => setActiveTab("recruiters")}
            className={`flex items-center gap-2 px-6 py-3 rounded-xl transition ${
              activeTab === "recruiters"
                ? "bg-blue-600 text-white"
                : "text-zinc-400 hover:text-white"
            }`}
          >
            <FaBuilding />
            Recruiters
          </button>
        </div>
      </div>

      {/* Pricing Cards */}
      <div className="grid md:grid-cols-3 gap-8">
        {plans.map((plan) => (
          <Card
            key={plan.name}
            className={`p-8 relative ${
              plan.popular
                ? "border-2 border-blue-600 scale-105"
                : ""
            }`}
          >
            {plan.popular && (
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-blue-600 text-white px-4 py-1 rounded-full text-sm flex items-center gap-2">
                <FaCrown />
                Most Popular
              </div>
            )}

            <h2 className="text-2xl font-bold">{plan.name}</h2>

            <div className="mt-4">
              <span className="text-5xl font-bold">
                {plan.price}
              </span>
              <span className="text-zinc-500">
                {plan.period}
              </span>
            </div>

            <div className="mt-8 space-y-4">
              {plan.features.map((feature) => (
                <div
                  key={feature}
                  className="flex gap-3"
                >
                  <FaCheck className="text-green-500 mt-1 shrink-0" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>

            <Button
              color={plan.popular ? "primary" : "default"}
              className="w-full mt-8"
            >
              {activeTab === "seekers"
                ? "Get Started"
                : "Choose Plan"}
            </Button>
          </Card>
        ))}
      </div>

      {/* FAQ */}
      <div className="max-w-4xl mx-auto mt-24">
        <h2 className="text-4xl font-bold text-center mb-10">
          Frequently Asked Questions
        </h2>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-zinc-800 rounded-2xl overflow-hidden"
            >
              <button
                onClick={() =>
                  setOpenFaq(openFaq === index ? null : index)
                }
                className="w-full flex justify-between items-center p-5 text-left"
              >
                <span className="font-semibold">
                  {faq.question}
                </span>

                <FaChevronDown
                  className={`transition ${
                    openFaq === index ? "rotate-180" : ""
                  }`}
                />
              </button>

              {openFaq === index && (
                <div className="px-5 pb-5 text-zinc-400">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
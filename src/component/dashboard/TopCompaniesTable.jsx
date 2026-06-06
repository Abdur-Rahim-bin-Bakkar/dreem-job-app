"use client";

const companies = [
  {
    id: 1,
    name: "Google Inc.",
    category: "Technology",
    location: "Mountain View",
    jobs: 24,
    logo: "G",
  },
  {
    id: 2,
    name: "Meta Platforms",
    category: "Social Media",
    location: "Menlo Park",
    jobs: 18,
    logo: "M",
  },
  {
    id: 3,
    name: "Stripe",
    category: "Fintech",
    location: "San Francisco",
    jobs: 12,
    logo: "S",
  },
  {
    id: 4,
    name: "Tesla",
    category: "Automotive",
    location: "Austin",
    jobs: 31,
    logo: "T",
  },
];

export default function TopCompaniesTable() {
  return (
    <div className="rounded-2xl border border-zinc-800 bg-[#111111] p-5 mt-10">
      {/* Header */}
      <div className="mb-6 flex items-center justify-between">
        <h2 className="text-lg font-semibold text-white">
          My Top Companies
        </h2>

        <button className="text-sm text-zinc-400 transition hover:text-white">
          View all
        </button>
      </div>

      {/* Company List */}
      <div className="space-y-3">
        {companies.map((company) => (
          <div
            key={company.id}
            className="flex items-center justify-between rounded-xl border border-zinc-800 bg-[#161616] p-4 transition hover:border-zinc-700 hover:bg-[#1b1b1b]"
          >
            {/* Left */}
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-lg border border-zinc-700 bg-zinc-900 text-sm font-semibold text-white">
                {company.logo}
              </div>

              <div>
                <h4 className="text-sm font-medium text-white">
                  {company.name}
                </h4>

                <p className="mt-1 text-xs text-zinc-500">
                  {company.category} • {company.location}
                </p>
              </div>
            </div>

            {/* Right */}
            <div className="text-right">
              <p className="text-lg font-semibold text-white">
                {company.jobs}
              </p>

              <p className="text-[11px] text-zinc-500">
                Active Jobs
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Footer Button */}
      <button className="mt-5 w-full rounded-xl border border-zinc-800 py-3 text-sm font-medium text-zinc-300 transition hover:border-zinc-700 hover:bg-zinc-900 hover:text-white">
        View All Companies
      </button>
    </div>
  );
}
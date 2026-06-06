"use client";

const applications = [
  {
    id: 1,
    name: "Julianne Moore",
    role: "Senior Product Designer",
    date: "Oct 24, 2023",
    experience: "6 years",
    status: "Interviewing",
  },
  {
    id: 2,
    name: "Robert Downey",
    role: "Backend Engineer",
    date: "Oct 23, 2023",
    experience: "4 years",
    status: "New",
  },
  {
    id: 3,
    name: "Emma Stone",
    role: "Marketing Lead",
    date: "Oct 22, 2023",
    experience: "8 years",
    status: "Reviewing",
  },
  {
    id: 4,
    name: "Chris Pratt",
    role: "Product Manager",
    date: "Oct 21, 2023",
    experience: "5 years",
    status: "Rejected",
  },
];

const getStatusStyle = (status) => {
  switch (status) {
    case "Interviewing":
      return "bg-emerald-500/20 text-emerald-400 border border-emerald-500/30";
    case "Reviewing":
      return "bg-amber-500/20 text-amber-400 border border-amber-500/30";
    case "Rejected":
      return "bg-red-500/20 text-red-400 border border-red-500/30";
    default:
      return "bg-slate-500/20 text-slate-300 border border-slate-500/30";
  }
};

export default function RecentApplicationsTable() {
  return (
    <div className="rounded-2xl border border-zinc-800 bg-[#111111] p-6">
      {/* Header */}
      <div className="mb-6 flex items-center justify-between">
        <h2 className="text-lg font-semibold text-white">
          Recent Applications
        </h2>

        <button className="text-sm text-zinc-400 hover:text-white transition">
          View all
        </button>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-zinc-800">
              <th className="pb-4 text-left text-xs font-medium text-zinc-500">
                Candidate Name
              </th>

              <th className="pb-4 text-left text-xs font-medium text-zinc-500">
                Role
              </th>

              <th className="pb-4 text-left text-xs font-medium text-zinc-500">
                Date Applied
              </th>

              <th className="pb-4 text-left text-xs font-medium text-zinc-500">
                Experience
              </th>

              <th className="pb-4 text-left text-xs font-medium text-zinc-500">
                Status
              </th>
            </tr>
          </thead>

          <tbody>
            {applications.map((app) => (
              <tr
                key={app.id}
                className="border-b border-zinc-900 hover:bg-white/[0.02] transition"
              >
                <td className="py-5">
                  <div className="flex items-center gap-3">
                    <div className="h-8 w-8 rounded-full bg-zinc-700" />

                    <span className="text-sm font-medium text-white">
                      {app.name}
                    </span>
                  </div>
                </td>

                <td className="py-5 text-sm text-zinc-400">
                  {app.role}
                </td>

                <td className="py-5 text-sm text-zinc-400">
                  {app.date}
                </td>

                <td className="py-5 text-sm text-zinc-400">
                  {app.experience}
                </td>

                <td className="py-5">
                  <span
                    className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-medium ${getStatusStyle(
                      app.status
                    )}`}
                  >
                    {app.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
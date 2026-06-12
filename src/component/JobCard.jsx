import Image from "next/image";
import {
    FaArrowRight,
    FaMapMarkerAlt,
    FaBuilding,
} from "react-icons/fa";

export default function JobCard({ job }) {
    return (
        <article className="group bg-[#3a393970] border border-violet-900/50 rounded-3xl p-6 transition-all duration-300 hover:border-violet-600 hover:-translate-y-1 shadow">

            {/* Company */}
            <div className="flex items-center gap-3 mb-6">
                {
                    job?.logo &&
                    <Image
                        src={job?.logo || 'no logo'}
                        alt={'company logo'}
                        width={50}
                        height={50}
                        className="rounded-xl object-cover"
                    />
                }


                <div>
                    <h4 className="font-semibold text-white">
                        {job.companyName}
                    </h4>

                    <p className="text-sm text-zinc-500">
                        {job.jobCategory}
                    </p>
                </div>
            </div>

            {/* Job Title */}
            <h2 className="text-2xl font-bold text-white mb-4">
                {job.jobTitle}
            </h2>

            {/* Description */}
            <p className="text-zinc-400 leading-relaxed line-clamp-3 mb-8">
                {job.responsibilities}
            </p>

            {/* Tags */}
            <div className="flex flex-wrap gap-3 mb-8">
                <div className="px-4 py-2 rounded-full bg-zinc-900 text-zinc-300 flex items-center gap-2">
                    <FaMapMarkerAlt />
                    {job.isRemote ? "Remote" : "On Site"}
                </div>

                <div className="px-4 py-2 rounded-full bg-zinc-900 text-zinc-300">
                    {job.jobType}
                </div>

                <div className="px-4 py-2 rounded-full bg-violet-950 text-violet-300">
                    {job.currency} {job.minSalary}-{job.maxSalary}
                </div>
            </div>

            {/* Bottom */}
            <div className="flex items-center justify-between">
                <div>
                    <p className="text-xs text-zinc-500">
                        Deadline
                    </p>

                    <p className="text-sm text-white">
                        {job.deadline}
                    </p>
                </div>

                <button className="flex items-center gap-2 text-white font-medium group-hover:gap-4 transition-all">
                    Apply Now
                    <FaArrowRight />
                </button>
            </div>
        </article>
    );
}
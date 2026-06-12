// import JobCard from "@/component/JobCard";
// import { getAllJobs } from "@/lib/api/get";

// export default async function AllJobsPage() {
//   const jobs = await getAllJobs()

//   return (
//     <section className="min-h-screen bg-black p-6 mt-20">
//       <div className="max-w-11/12  mx-auto grid gap-6 md:grid-cols-2 lg:grid-cols-3">
//         {jobs.map((job) => (
//           <JobCard
//             key={job._id}
//             job={job}
//           />
//         ))}
//       </div>
//     </section>
//   );
// }
import JobCard from "@/component/JobCard";
import JobFilters from "@/component/JobFilters";
import { getAllJobs } from "@/lib/api/get";

export default async function AllJobsPage({searchParams}) {
    const params = await searchParams
    const jobs = await getAllJobs(params);
    console.log(params,'this is search params')

    return (
        <section className="min-h-screen bg-black p-6 mt-20">

            <div className="max-w-7xl mx-auto">

                <JobFilters />

                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">

                    {jobs.map((job) => (
                        <JobCard
                            key={job._id}
                            job={job}
                        />
                    ))}

                </div>

            </div>

        </section>
    );
}
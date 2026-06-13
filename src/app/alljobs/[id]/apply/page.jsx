import { jobDetails } from '@/lib/api/get';
import { getServerSession } from '@/lib/session/server';
import Link from 'next/link';
import { redirect } from 'next/navigation';
import React from 'react';
import { FaUserTie, FaBriefcase, FaArrowRight } from "react-icons/fa";
import JobApplicationForm from './ApplicatioinForm';
const ApplyPage = async ({ params }) => {
    const { id } = await params;
    const session = await getServerSession();
    // console.log(session?.user)

    if (!session) {
        redirect(`/login?redirect=/alljobs/${id}/apply`)
    }
    // console.log(id, 'id', session, 'session')
    if (session?.user?.role !== 'seeker') {
        return (
            <div className="min-h-[70vh] flex items-center justify-center px-4 my-20">
                <div className="max-w-2xl w-full bg-zinc-900 border border-zinc-800 rounded-3xl p-8 md:p-12 text-center shadow-xl">

                    {/* Icon */}
                    <div className="w-24 h-24 mx-auto rounded-full bg-amber-500/10 flex items-center justify-center mb-6">
                        <FaUserTie className="text-5xl text-amber-500" />
                    </div>

                    {/* Heading */}
                    <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
                        Application Restricted
                    </h1>

                    {/* Description */}
                    <p className="text-zinc-400 text-lg leading-relaxed">
                        Only <span className="text-white font-semibold">Job Seekers</span>
                        {" "}can apply for jobs on HireLoop.
                        Your current account role does not have permission
                        to submit job applications.
                    </p>

                    <p className="text-zinc-500 mt-4">
                        If you'd like to apply for this opportunity,
                        please sign in with a Job Seeker account or
                        create a new Job Seeker profile.
                    </p>

                    {/* Info Card */}
                    <div className="mt-8 bg-zinc-800/50 border border-zinc-700 rounded-2xl p-5">
                        <div className="flex items-center justify-center gap-3">
                            <FaBriefcase className="text-blue-400 text-xl" />
                            <span className="text-zinc-300">
                                Job applications are available exclusively for Job Seekers.
                            </span>
                        </div>
                    </div>

                    {/* Actions */}
                    <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">

                        <Link href={'/alljobs'} className="px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 transition font-medium text-white flex items-center justify-center gap-2">

                            Browse Jobs
                            <FaArrowRight />

                        </Link>

                        <button className="px-6 py-3 rounded-xl border border-zinc-700 hover:bg-zinc-800 transition font-medium text-white">
                            Switch Account
                        </button>
                    </div>

                    {/* Footer Note */}
                    <p className="text-xs text-zinc-500 mt-8">
                        Need help? Contact the HireLoop support team for assistance with account roles.
                    </p>
                </div>
            </div>
        )
    }

    const job = await jobDetails(id)
    // console.log(job)
    return (
        <div className='mt-20'>
            <h1>this is apply page</h1>
            <JobApplicationForm  user={session?.user} job={job}/>
        </div>
    );
};

export default ApplyPage;
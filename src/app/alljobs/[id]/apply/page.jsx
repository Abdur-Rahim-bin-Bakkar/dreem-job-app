import { getApplications, jobDetails } from '@/lib/api/get';
import { getServerSession } from '@/lib/session/server';
import Link from 'next/link';
import { redirect } from 'next/navigation';
import React from 'react';
import { FaUserTie, FaBriefcase, FaArrowRight, FaCrown } from "react-icons/fa";
import JobApplicationForm from './ApplicatioinForm';
import {
    FaFileSignature,
    FaCheckCircle,
    FaLock,
} from "react-icons/fa";
const ApplyPage = async ({ params }) => {
    const { id } = await params;
    const session = await getServerSession();
    console.log(session?.user?.id, 'etai')

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
    const applications = await getApplications(session?.user?.id)
    // console.log(applications)
    const plan = {
        name: 'Free',
        maxApplicationPerMonth: 3
    }
    return (
        <div className="max-w-6xl mx-auto px-4 py-10 mt-20">

            {/* Application Status Card */}
            <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-6 md:p-8 mb-8">

                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">

                    <div>
                        <div className="flex items-center gap-3 mb-3">
                            <FaFileSignature className="text-2xl text-blue-500" />

                            <h1 className="text-2xl md:text-3xl font-bold">
                                Job Application
                            </h1>
                        </div>

                        <p className="text-zinc-400">
                            Submit your application and showcase why you're the right
                            candidate for this opportunity.
                        </p>
                    </div>

                    <div className="bg-zinc-800/50 border border-zinc-700 rounded-2xl px-6 py-4">
                        <div className="text-center">
                            <p className="text-zinc-400 text-sm">
                                Monthly Applications
                            </p>

                            <h2 className="text-3xl font-bold mt-1">
                                {applications.length}
                                <span className="text-zinc-500 text-xl">
                                    {" "}
                                    / {plan.maxApplicationPerMonth}
                                </span>
                            </h2>
                        </div>
                    </div>
                </div>

                {/* Progress Bar */}
                <div className="mt-6">
                    <div className="w-full h-3 bg-zinc-800 rounded-full overflow-hidden">
                        <div
                            className="h-full bg-blue-600 rounded-full transition-all"
                            style={{
                                width: `${Math.min(
                                    (applications.length /
                                        plan.maxApplicationPerMonth) *
                                    100,
                                    100
                                )}%`,
                            }}
                        />
                    </div>

                    <p className="text-xs text-zinc-500 mt-2">
                        {plan.maxApplicationPerMonth - applications.length} application
                        slots remaining this month.
                    </p>
                </div>
            </div>

            {/* Limit Reached */}
            {applications.length >= plan.maxApplicationPerMonth ? (
                <div className="bg-zinc-900 border border-red-900/50 rounded-3xl p-10 text-center">

                    <div className="w-20 h-20 mx-auto rounded-full bg-red-500/10 flex items-center justify-center mb-6">
                        <FaLock className="text-4xl text-red-500" />
                    </div>

                    <h2 className="text-2xl font-bold mb-3">
                        Application Limit Reached
                    </h2>

                    <p className="text-zinc-400 max-w-xl mx-auto">
                        You have reached your monthly application limit for the{" "}
                        <span className="text-white font-semibold">
                            {plan.name}
                        </span>{" "}
                        plan.
                        Upgrade your subscription or wait until next month to apply
                        for more jobs.
                    </p>
                    <Link
                        href="/pricing"
                        className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 text-white font-semibold shadow-lg hover:shadow-xl mt-10"
                    >
                        <FaCrown />
                        Upgrade Plan
                    </Link>

                </div>
            ) : (
                <>
                    {/* Success Notice */}
                    <div className="bg-green-500/10 border border-green-500/20 rounded-2xl p-4 mb-6 flex items-center gap-3">
                        <FaCheckCircle className="text-green-500 text-xl shrink-0" />

                        <p className="text-green-300 text-sm">
                            You can still apply to{" "}
                            <span className="font-semibold">
                                {plan.maxApplicationPerMonth - applications.length}
                            </span>{" "}
                            more job(s) this month.
                        </p>
                    </div>

                    <JobApplicationForm
                        user={session?.user}
                        job={job}
                    />
                </>
            )}
        </div>
    );
};

export default ApplyPage;
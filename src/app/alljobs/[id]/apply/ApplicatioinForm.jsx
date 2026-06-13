"use client";

import { createApplication } from "@/lib/meutations/server";
import { useState } from "react";
import {
    FaFileAlt,
    FaLinkedin,
    FaGithub,
    FaGlobe,
    FaPaperPlane,
} from "react-icons/fa";

export default function JobApplicationForm({ job, user }) {
    const { name, id, email } = user;
    // console.log(name)
    // console.log(id)
    // console.log(email)

    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();

        const form = e.target;

        const applicationData = {
            resume: form.resume.value,
            linkedin: form.linkedin.value,
            github: form.github.value,
            portfolio: form.portfolio.value,
            coverLetter: form.coverLetter.value,
            message: form.message.value,
        };
        const newApplication = {
            ...applicationData,
            applicantName: name,
            applicantEmail: email,
            applicantId: id,
            jobId: job?._id

        }

        console.log(newApplication);
        const result = await createApplication(newApplication)
        console.log(result, 'post resulet')
        if (result?.insertedId) {
            alert("Application submitted successfully");
        }

        setLoading(true);

        // API Call Here

        setTimeout(() => {
            setLoading(false);
        }, 1500);
    };

    return (
        <div className="max-w-4xl mx-auto px-4 py-10">
            <div className="bg-zinc-900 border border-zinc-800 rounded-3xl overflow-hidden">

                {/* Header */}
                <div className="border-b border-zinc-800 p-8">
                    <h1 className="text-3xl font-bold text-white">
                        Apply for {job?.jobTitle} Position
                    </h1>

                    <p className="text-zinc-400 mt-2">
                        Submit your application details below. Make sure your links are
                        accessible and up-to-date.
                    </p>
                </div>

                {/* Form */}
                <form
                    onSubmit={handleSubmit}
                    className="p-8 space-y-6"
                >
                    {/* Resume */}
                    <div>
                        <label className="flex items-center gap-2 text-sm font-medium mb-2">
                            <FaFileAlt />
                            Resume URL *
                        </label>

                        <input
                            type="url"
                            name="resume"
                            required
                            placeholder="https://drive.google.com/..."
                            className="w-full bg-zinc-800 border border-zinc-700 rounded-xl px-4 py-3 outline-none focus:border-blue-500"
                        />
                    </div>

                    {/* LinkedIn */}
                    <div>
                        <label className="flex items-center gap-2 text-sm font-medium mb-2">
                            <FaLinkedin />
                            LinkedIn Profile *
                        </label>

                        <input
                            type="url"
                            name="linkedin"
                            required
                            placeholder="https://linkedin.com/in/your-profile"
                            className="w-full bg-zinc-800 border border-zinc-700 rounded-xl px-4 py-3 outline-none focus:border-blue-500"
                        />
                    </div>

                    {/* Grid */}
                    <div className="grid md:grid-cols-2 gap-6">

                        {/* GitHub */}
                        <div>
                            <label className="flex items-center gap-2 text-sm font-medium mb-2">
                                <FaGithub />
                                GitHub Profile
                            </label>

                            <input
                                type="url"
                                name="github"
                                placeholder="https://github.com/username"
                                className="w-full bg-zinc-800 border border-zinc-700 rounded-xl px-4 py-3 outline-none focus:border-blue-500"
                            />
                        </div>

                        {/* Portfolio */}
                        <div>
                            <label className="flex items-center gap-2 text-sm font-medium mb-2">
                                <FaGlobe />
                                Portfolio Website
                            </label>

                            <input
                                type="url"
                                name="portfolio"
                                placeholder="https://yourportfolio.com"
                                className="w-full bg-zinc-800 border border-zinc-700 rounded-xl px-4 py-3 outline-none focus:border-blue-500"
                            />
                        </div>
                    </div>

                    {/* Cover Letter */}
                    <div>
                        <label className="text-sm font-medium mb-2 block">
                            Cover Letter (Optional)
                        </label>

                        <textarea
                            name="coverLetter"
                            rows={6}
                            placeholder="Introduce yourself and explain why you're a great fit for this role..."
                            className="w-full bg-zinc-800 border border-zinc-700 rounded-xl px-4 py-3 outline-none resize-none focus:border-blue-500"
                        />
                    </div>

                    {/* Message */}
                    <div>
                        <label className="text-sm font-medium mb-2 block">
                            Additional Message (Optional)
                        </label>

                        <textarea
                            name="message"
                            rows={4}
                            placeholder="Anything else you'd like the recruiter to know?"
                            className="w-full bg-zinc-800 border border-zinc-700 rounded-xl px-4 py-3 outline-none resize-none focus:border-blue-500"
                        />
                    </div>

                    {/* Submit */}
                    <button
                        type="submit"
                        disabled={loading}
                        className="w-full md:w-auto bg-blue-600 hover:bg-blue-700 disabled:opacity-50 transition px-8 py-3 rounded-xl font-medium flex items-center justify-center gap-2"
                    >
                        <FaPaperPlane />

                        {loading ? "Submitting..." : "Submit Application"}
                    </button>
                </form>
            </div>
        </div>
    );
}
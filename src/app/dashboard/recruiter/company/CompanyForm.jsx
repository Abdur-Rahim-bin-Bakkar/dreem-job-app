"use client";

import { useState } from "react";
import {
    Form,
    Fieldset,
    TextField,
    Label,
    Input,
    TextArea,
    Button,
} from "@heroui/react";

import {
    FaBuilding,
    FaLocationDot,
    FaUsers,
    FaPen,
} from "react-icons/fa6";
import { authClient } from "@/lib/auth-client";

export default function CompanyForm({ companyData }) {
    const {
        data: session,
        isPending, //loading state
        error, //error object
        refetch //refetch the session
    } = authClient.useSession()

    // console.log(session?.user?.id, 'thsi is form company form')
    const [company, setCompany] = useState(companyData);
    const [editing, setEditing] = useState(false);
    const [loading, setLoading] = useState(false);



    const textInputClass =
        "bg-zinc-900 border border-zinc-800 text-white rounded-xl h-12";

    const textAreaClass =
        "bg-zinc-900 border border-zinc-800 text-white rounded-xl min-h-32";

    // 🔥 IMGBB upload function
    const uploadToImgbb = async (file) => {
        const formData = new FormData();
        formData.append("image", file);

        const res = await fetch(
            `https://api.imgbb.com/1/upload?key=${process.env.NEXT_PUBLIC_IMAGE_UPLOAD_API}`,
            {
                method: "POST",
                body: formData,
            }
        );

        const data = await res.json();

        return data.data.url;
    };

    // 🔥 submit handler
    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        const formData = Object.fromEntries(
            new FormData(e.currentTarget)
        );

        const file = formData.logo;

        let imageUrl =
            "https://cdn-icons-png.flaticon.com/512/5968/5968705.png";

        // 🔥 upload image to imgbb
        if (file && file.size > 0) {
            imageUrl = await uploadToImgbb(file);
        }

        const newCompanyData = {
            companyName: formData.companyName,
            industry: formData.industry,
            website: formData.website,
            location: formData.location,
            employeeCount: formData.employeeCount,
            description: formData.description,
            logo: imageUrl,
            status: company?.status ? company?.status : "pending",
            recruiterId: session?.user?.id
        };

        try {
            // 🔥 POST to backend
            const res = await fetch(
                `${process.env.NEXT_PUBLIC_SERVER}/companypost`,
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(newCompanyData),
                }
            );

            const data = await res.json();

            console.log("Saved to DB:", data);

            // 🔥 update UI state
            setCompany(newCompanyData);
            setEditing(false);
        } catch (error) {
            console.error("Error saving company:", error);
        }

        setLoading(false);
    };

    const StatusBadge = ({ status }) => {
        const styles = {
            pending:
                "bg-yellow-500/15 text-yellow-400 border-yellow-500/20",
            approved:
                "bg-green-500/15 text-green-400 border-green-500/20",
            rejected:
                "bg-red-500/15 text-red-400 border-red-500/20",
        };

        return (
            <span
                className={`px-3 py-1 rounded-full border text-xs font-medium capitalize ${styles[status]}`}
            >
                {status}
            </span>
        );
    };

    return (
        <div className="max-w-6xl mx-auto p-6">

            {/* HEADER */}
            <div className="mb-8">
                <h1 className="text-3xl font-bold text-white">
                    Company Profile
                </h1>
                <p className="text-zinc-400 mt-2">
                    Manage your company information.
                </p>
            </div>

            {/* NO COMPANY */}
            {!company?.companyName && !editing && (
                <div className="bg-[#0d0d0d] border border-zinc-800 rounded-3xl p-10">
                    <div className="flex flex-col items-center text-center">
                        <FaBuilding
                            className="text-zinc-500 mb-4"
                            size={40}
                        />

                        <h2 className="text-xl font-semibold text-white">
                            No Company Registered
                        </h2>

                        <p className="text-zinc-400 mt-2 max-w-md">
                            Create your company profile before posting jobs.
                        </p>

                        <Button
                            onPress={() => setEditing(true)}
                            className="mt-6 bg-white text-black font-semibold"
                        >
                            Register Company
                        </Button>
                    </div>
                </div>
            )}

            {/* FORM */}
            {(!company?.companyName || editing) && (
                <div className="bg-[#0d0d0d] border border-zinc-800 rounded-3xl p-8">
                    <Form onSubmit={handleSubmit} className="space-y-8">
                        <Fieldset className="space-y-6 w-full">
                            <legend className="text-lg font-medium text-zinc-300 border-b border-zinc-800 pb-3 mb-2">
                                Company Information
                            </legend>

                            <div className="grid md:grid-cols-2 gap-6">
                                <TextField name="companyName">
                                    <Label className="text-zinc-400">
                                        Company Name
                                    </Label>
                                    <Input
                                        className={textInputClass}
                                        placeholder="Google"
                                    />
                                </TextField>

                                <TextField name="industry">
                                    <Label className="text-zinc-400">
                                        Industry
                                    </Label>
                                    <Input
                                        className={textInputClass}
                                        placeholder="Technology"
                                    />
                                </TextField>
                            </div>

                            <div className="grid md:grid-cols-2 gap-6">
                                <TextField name="website">
                                    <Label className="text-zinc-400">
                                        Website URL
                                    </Label>
                                    <Input
                                        className={textInputClass}
                                        placeholder="https://company.com"
                                    />
                                </TextField>

                                <TextField name="location">
                                    <Label className="text-zinc-400">
                                        Location
                                    </Label>
                                    <Input
                                        className={textInputClass}
                                        placeholder="Dhaka, Bangladesh"
                                    />
                                </TextField>
                            </div>

                            <div className="grid md:grid-cols-2 gap-6">
                                <TextField name="employeeCount">
                                    <Label className="text-zinc-400">
                                        Employee Count
                                    </Label>
                                    <Input
                                        className={textInputClass}
                                        placeholder="11-50"
                                    />
                                </TextField>

                                <div>
                                    <Label className="text-zinc-400 block mb-2">
                                        Company Logo
                                    </Label>

                                    <input
                                        type="file"
                                        name="logo"
                                        className="w-full rounded-xl border border-dashed border-zinc-700 bg-zinc-900 p-3 text-zinc-400"
                                    />
                                </div>
                            </div>

                            <TextField name="description">
                                <Label className="text-zinc-400">
                                    Description
                                </Label>
                                <TextArea
                                    className={textAreaClass}
                                    placeholder="Tell people about your company..."
                                />
                            </TextField>

                            <div className="flex justify-end gap-3 pt-4 border-t border-zinc-800">
                                {company && (
                                    <Button
                                        type="button"
                                        variant="bordered"
                                        onPress={() => setEditing(false)}
                                    >
                                        Cancel
                                    </Button>
                                )}

                                <Button
                                    type="submit"
                                    className="bg-white text-black font-semibold"
                                    disabled={loading}
                                >
                                    {loading
                                        ? "Uploading..."
                                        : company
                                            ? "Update Company"
                                            : "Register Company"}
                                </Button>
                            </div>
                        </Fieldset>
                    </Form>
                </div>
            )}

            {/* DETAILS */}
            {company?.companyName && !editing && (
                <div className="bg-[#0d0d0d] border border-zinc-800 rounded-3xl p-8">
                    <div className="flex justify-between">
                        <div className="flex gap-5">
                            <img
                                src={company?.logo}
                                className="w-24 h-24 rounded-2xl border border-zinc-800"
                            />

                            <div>
                                <h2 className="text-2xl font-bold text-white">
                                    {company.companyName}
                                </h2>

                                <a
                                    href={company.website}
                                    target="_blank"
                                    className="text-zinc-400"
                                >
                                    {company.website}
                                </a>

                                <div className="mt-3">
                                    <StatusBadge status={company.status} />
                                </div>
                            </div>
                        </div>

                        <Button
                            variant="bordered"
                            onPress={() => setEditing(true)}
                        >
                            <FaPen />
                            Edit
                        </Button>
                    </div>

                    <div className="grid md:grid-cols-3 gap-5 mt-8">
                        <div className="bg-zinc-900 p-5 rounded-2xl border border-zinc-800">
                            <FaBuilding className="text-zinc-500 mb-2" />
                            <p className="text-zinc-400 text-sm">Industry</p>
                            <p className="text-white">{company.industry}</p>
                        </div>

                        <div className="bg-zinc-900 p-5 rounded-2xl border border-zinc-800">
                            <FaLocationDot className="text-zinc-500 mb-2" />
                            <p className="text-zinc-400 text-sm">Location</p>
                            <p className="text-white">{company.location}</p>
                        </div>

                        <div className="bg-zinc-900 p-5 rounded-2xl border border-zinc-800">
                            <FaUsers className="text-zinc-500 mb-2" />
                            <p className="text-zinc-400 text-sm">Employees</p>
                            <p className="text-white">
                                {company.employeeCount}
                            </p>
                        </div>
                    </div>

                    <div className="mt-6 bg-zinc-900 p-5 rounded-2xl border border-zinc-800">
                        <h3 className="text-white font-semibold mb-3">
                            About Company
                        </h3>
                        <p className="text-zinc-400">
                            {company.description}
                        </p>
                    </div>
                </div>
            )}
        </div>
    );
}
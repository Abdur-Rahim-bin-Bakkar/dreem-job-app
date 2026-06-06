"use client";

import {
  Button,
  Card,
  Input,
  Select,
  Switch,
  TextArea,
} from "@heroui/react";

export default function NewJobPage() {
  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = Object.fromEntries(new FormData(e.currentTarget));

    const payload = {
      ...form,
      salaryMin: Number(form.salaryMin || 0),
      salaryMax: Number(form.salaryMax || 0),
      isRemote: form.isRemote === "on",
    };

    console.log(payload);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#07090D] to-[#0B0F1A] text-white py-10 px-4">
      <div className="mx-auto max-w-5xl">

        {/* HEADER */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold">Post a New Job</h1>
          <p className="text-gray-400 mt-2">
            Create a job posting and attract top talent
          </p>
        </div>

        {/* CARD */}
        <Card className="p-8 bg-[#0F1117]/80 border border-white/10 rounded-2xl">

          <form onSubmit={handleSubmit} className="space-y-12">

            {/* JOB INFO */}
            <section className="space-y-6">

              <Input
                name="title"
                label="Job Title"
                placeholder="Senior Frontend Developer"
                isRequired
              />

              <Input
                name="category"
                label="Job Category"
                placeholder="Software Development"
                isRequired
              />

              <Select name="type" label="Job Type" isRequired>
                <option value="FULL_TIME">Full Time</option>
                <option value="PART_TIME">Part Time</option>
                <option value="REMOTE">Remote</option>
                <option value="CONTRACT">Contract</option>
                <option value="INTERNSHIP">Internship</option>
              </Select>

              <div className="grid gap-4 md:grid-cols-3">
                <Input name="salaryMin" type="number" label="Min Salary" />
                <Input name="salaryMax" type="number" label="Max Salary" />
                <Input name="currency" label="Currency" defaultValue="USD" />
              </div>

              <div className="flex items-center justify-between p-4 rounded-xl bg-white/5 border border-white/10">
                <div>
                  <p className="font-medium">Remote Position</p>
                  <p className="text-xs text-gray-400">
                    Enable for fully remote jobs
                  </p>
                </div>
                <Switch name="isRemote" />
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                <Input name="city" label="City" placeholder="Dhaka" />
                <Input name="country" label="Country" placeholder="Bangladesh" />
              </div>

              <Input
                name="applicationDeadline"
                type="date"
                label="Application Deadline"
              />
            </section>

            {/* DESCRIPTION */}
            <section className="space-y-5">

              <TextArea
                name="responsibilities"
                label="Responsibilities"
                minRows={5}
              />

              <TextArea
                name="requirements"
                label="Requirements"
                minRows={5}
              />

              <TextArea
                name="benefits"
                label="Benefits"
                minRows={4}
              />
            </section>

            {/* COMPANY */}
            <section>
              <Input
                name="company"
                label="Company"
                defaultValue="Tech Solutions Ltd."
                isReadOnly
              />
            </section>

            {/* SUBMIT */}
            <Button
              type="submit"
              color="primary"
              className="w-full py-6 text-lg font-semibold rounded-xl"
            >
              Publish Job
            </Button>

          </form>
        </Card>
      </div>
    </div>
  );
}
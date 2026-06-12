"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";

export default function JobFilters() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const [search, setSearch] = useState(
    searchParams.get("search") || ""
  );

  const handleFilter = (e) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    const params = new URLSearchParams();

    if (search)
      params.set("search", search);

    if (formData.get("category"))
      params.set("category", formData.get("category"));

    if (formData.get("type"))
      params.set("type", formData.get("type"));

    if (formData.get("remote"))
      params.set("remote", formData.get("remote"));

    router.push(`/alljobs?${params.toString()}`);
  };

  return (
    <form
      onSubmit={handleFilter}
      className="bg-zinc-950 border border-zinc-800 p-5 rounded-2xl mb-8 flex flex-wrap gap-4"
    >
      <input
        type="text"
        placeholder="Search by job title..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="bg-zinc-900 border border-zinc-700 px-4 py-3 rounded-xl flex-1 min-w-[250px]"
      />

      <select
        name="category"
        defaultValue={searchParams.get("category") || ""}
        className="bg-zinc-900 border border-zinc-700 px-4 py-3 rounded-xl"
      >
        <option value="">All Categories</option>
        <option value="technology">Technology</option>
        <option value="design">Design</option>
        <option value="marketing">Marketing</option>
      </select>

      <select
        name="type"
        defaultValue={searchParams.get("type") || ""}
        className="bg-zinc-900 border border-zinc-700 px-4 py-3 rounded-xl"
      >
        <option value="">All Types</option>
        <option value="full-time">Full Time</option>
        <option value="part-time">Part Time</option>
        <option value="internship">Internship</option>
        <option value="contract">Contract</option>
      </select>

      <select
        name="remote"
        defaultValue={searchParams.get("remote") || ""}
        className="bg-zinc-900 border border-zinc-700 px-4 py-3 rounded-xl"
      >
        <option value="">Remote / Onsite</option>
        <option value="true">Remote</option>
        <option value="false">On Site</option>
      </select>

      <button
        type="submit"
        className="bg-violet-600 px-5 py-3 rounded-xl font-medium"
      >
        Search
      </button>
    </form>
  );
}
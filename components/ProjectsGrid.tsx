"use client";

import { useMemo, useState } from "react";

type Project = {
  title: string;
  sector: "Construction" | "Energy" | "Retail";
  summary: string;
};

const filters: Array<"All" | Project["sector"]> = ["All", "Construction", "Energy", "Retail"];

export default function ProjectsGrid({ projects }: { projects: readonly Project[] }) {
  const [activeFilter, setActiveFilter] = useState<(typeof filters)[number]>("All");

  const visibleProjects = useMemo(
    () => (activeFilter === "All" ? projects : projects.filter((project) => project.sector === activeFilter)),
    [activeFilter, projects],
  );

  return (
    <>
      <div className="flex flex-wrap gap-2">
        {filters.map((filter) => (
          <button
            key={filter}
            onClick={() => setActiveFilter(filter)}
            className={`rounded-full border px-3 py-1 text-xs font-semibold transition ${
              activeFilter === filter
                ? "border-[#0f172a] bg-[#0f172a] text-white"
                : "border-slate-300 bg-white text-slate-700 hover:bg-slate-50"
            }`}
            type="button"
          >
            {filter}
          </button>
        ))}
      </div>

      <section className="grid gap-4 md:grid-cols-2">
        {visibleProjects.map((project) => (
          <article key={project.title} className="section-card p-5">
            <p className="text-xs uppercase tracking-wide text-[#bfa26a]">{project.sector}</p>
            <h2 className="mt-2 font-heading text-2xl font-semibold">{project.title}</h2>
            <p className="mt-2 text-sm text-slate-700">{project.summary}</p>
          </article>
        ))}
      </section>
    </>
  );
}

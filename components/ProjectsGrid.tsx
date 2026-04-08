"use client";

import Image from "next/image";
import { useMemo, useState } from "react";

type Project = {
  title: string;
  sector: "Construction" | "Energy" | "Retail";
  summary: string;
  image: string;
};

const filters: Array<"All" | Project["sector"]> = ["All", "Construction", "Energy", "Retail"];

export default function ProjectsGrid({ projects }: { projects: readonly Project[] }) {
  const [activeFilter, setActiveFilter] = useState<(typeof filters)[number]>("All");

  const visibleProjects = useMemo(
    () => (activeFilter === "All" ? projects : projects.filter((p) => p.sector === activeFilter)),
    [activeFilter, projects],
  );

  return (
    <>
      {/* ── Filter pills ── */}
      <div className="flex flex-wrap gap-2" role="group" aria-label="Filter projects by sector">
        {filters.map((filter) => (
          <button
            key={filter}
            id={`filter-${filter.toLowerCase()}`}
            onClick={() => setActiveFilter(filter)}
            aria-pressed={activeFilter === filter}
            className={`rounded-full border px-4 py-1.5 text-xs font-semibold tracking-wide transition-all duration-200 ${
              activeFilter === filter
                ? "border-[#0f172a] bg-[#0f172a] text-white shadow-[var(--shadow-sm)]"
                : "border-slate-200 bg-white text-[#64748b] hover:border-slate-300 hover:bg-slate-50 hover:text-[#0f172a]"
            }`}
            type="button"
          >
            {filter}
          </button>
        ))}
      </div>

      {/* ── Cards grid ── */}
      <section className="grid gap-6 md:grid-cols-2" aria-live="polite">
        {visibleProjects.map((project, i) => (
          <article
            key={project.title}
            className="group reveal overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-[var(--shadow-sm)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[var(--shadow-lg)]"
            style={{ animationDelay: `${i * 0.07}s` }}
          >
            {/* Thumbnail */}
            <div className="img-zoom-wrap relative h-56 w-full">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a1020]/55 via-transparent to-transparent" />
              {/* Sector badge */}
              <span className="sector-badge absolute bottom-4 left-4">
                {project.sector}
              </span>
            </div>

            {/* Body */}
            <div className="p-5 sm:p-6">
              <h2 className="font-heading text-xl font-semibold text-[#0f172a] transition-colors group-hover:text-[#c7a559]">
                {project.title}
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-[#64748b]">{project.summary}</p>
              <div className="mt-4 flex items-center gap-1.5 text-sm font-semibold text-[#c7a559] opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0 -translate-x-1">
                <span>View details</span>
                <span aria-hidden>→</span>
              </div>
            </div>
          </article>
        ))}
      </section>
    </>
  );
}

import CtaLink from "@/components/CtaLink";
import ProjectsGrid from "@/components/ProjectsGrid";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects | Lexicon Empire",
  description: "Explore Lexicon Empire project delivery across construction, energy, and retail sectors.",
};

const projects = [
  { title: "Luxury Mansions", sector: "Construction", summary: "Bespoke residential developments for premium clients." },
  { title: "Public Works Facilities", sector: "Construction", summary: "Community infrastructure built for longevity and impact." },
  { title: "Filling Station Expansion", sector: "Energy", summary: "Operational fuel network scaling and modernization." },
  { title: "Retail Center Development", sector: "Retail", summary: "Commercial hubs designed for commerce and daily utility." },
] as const;

export default function ProjectsPage() {
  return (
    <div className="space-y-8">
      <section className="section-card p-7 md:p-9">
        <p className="text-xs uppercase tracking-widest text-[#b58f3e]">Portfolio</p>
        <h1 className="mt-2 font-heading text-4xl font-bold text-[#0f172a] md:text-5xl">Projects & Portfolio</h1>
        <p className="mt-4 text-slate-700">
          Explore delivery proof across construction, energy, and retail initiatives.
        </p>
      </section>
      <ProjectsGrid projects={projects} />
      <CtaLink
        href="/contact?inquiry=Construction"
        eventName="cta_click"
        eventLabel="projects_start_your_project"
        className="inline-block rounded bg-[#0f172a] px-4 py-2 text-white transition hover:bg-[#1e293b]"
      >
        Start Your Project
      </CtaLink>
    </div>
  );
}

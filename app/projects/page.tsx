import CtaLink from "@/components/CtaLink";
import ProjectsGrid from "@/components/ProjectsGrid";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects & Portfolio",
  description:
    "Explore Lexicon Empire project delivery proof across construction, energy, and retail sectors in Ghana.",
};

const projects = [
  {
    title: "Luxury Mansion Estates",
    sector: "Construction",
    summary: "Bespoke residential developments built for premium clients — designed for elegance and enduring quality.",
    image: "/images/real-estate/IMG_4670.jpg",
  },
  {
    title: "Public Works Facilities",
    sector: "Construction",
    summary: "Community infrastructure built for longevity and social impact — schools, roads, and civic buildings.",
    image: "/images/construction/IMG_4648.jpg",
  },
  {
    title: "Filling Station Expansion",
    sector: "Energy",
    summary: "Operational fuel network scaling and modernization across key Takoradi corridors.",
    image: "/images/energy/IMG_4665.jpg",
  },
  {
    title: "Retail Center Development",
    sector: "Retail",
    summary: "Commercial hubs designed for accessibility, commerce, and sustained community engagement.",
    image: "/images/real-estate/IMG_4677.jpg",
  },
] as const;

export default function ProjectsPage() {
  return (
    <div className="space-y-10 md:space-y-14">

      {/* ═══ HEADER ═══ */}
      <section className="section-card p-8 md:p-12">
        <span className="eyebrow">Portfolio</span>
        <div className="gold-rule" aria-hidden />
        <h1 className="font-heading text-4xl font-bold text-[#0f172a] md:text-5xl">
          Projects &amp; Portfolio
        </h1>
        <p className="mt-5 max-w-2xl text-base leading-relaxed text-[#64748b]">
          A curated look at our delivery proof — across construction, energy, and retail initiatives —
          each one a testament to our commitment to quality and community.
        </p>
      </section>

      {/* ═══ FILTERABLE GRID ═══ */}
      <div className="space-y-6">
        <ProjectsGrid projects={projects} />
      </div>

      {/* ═══ CTA STRIP ═══ */}
      <section className="flex flex-col items-center gap-4 rounded-2xl bg-[#0f172a] p-8 text-center text-white md:p-10">
        <p className="font-heading text-xl font-semibold sm:text-2xl">Have a project in mind?</p>
        <p className="max-w-md text-sm text-white/60">
          Tell us about your vision and our team will map the right approach, timeline, and resources.
        </p>
        <CtaLink
          href="/contact?inquiry=Construction"
          eventName="cta_click"
          eventLabel="projects_start_your_project"
          className="btn btn-gold"
        >
          Start Your Project →
        </CtaLink>
      </section>
    </div>
  );
}

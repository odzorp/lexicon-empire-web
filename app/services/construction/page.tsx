import Link from "next/link";
import CtaLink from "@/components/CtaLink";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Construction Services | Lexicon Empire",
  description: "Premium construction and infrastructure services for residential, hospitality, and public works.",
};

export default function ConstructionServicePage() {
  return (
    <div className="space-y-8">
      <section className="section-card p-7 md:p-9">
        <p className="text-xs uppercase tracking-widest text-[#b58f3e]">Service Vertical</p>
        <h1 className="mt-2 font-heading text-4xl font-bold text-[#0f172a] md:text-5xl">
          Premium Construction & Infrastructure
        </h1>
        <p className="mt-4 max-w-3xl text-slate-700">
          End-to-end delivery for high-value residential, hospitality, and public infrastructure projects.
        </p>
      </section>

      <section className="section-card p-6 md:p-8">
        <p>
          At the heart of Lexicon Empire is our world-class construction division, delivering high-end
          residential, hospitality, and public works solutions.
        </p>
        <div className="mt-5 grid gap-4 md:grid-cols-3">
          {[
            ["Residential", "Bespoke mansions and luxury estates."],
            ["Hospitality", "Modern hotels and resort facilities."],
            ["Public Works", "Long-lasting community infrastructure."],
          ].map(([title, copy]) => (
            <article key={title} className="rounded-lg border border-slate-200 bg-[#eef2f9] p-4">
              <h2 className="font-heading text-xl font-semibold text-[#0f172a]">{title}</h2>
              <p className="mt-2 text-sm text-slate-700">{copy}</p>
            </article>
          ))}
        </div>
      </section>
      <div className="flex flex-wrap gap-3">
        <Link href="/projects" className="rounded border border-[#0f172a] px-4 py-2">
          View Portfolio
        </Link>
        <CtaLink
          href="/contact?inquiry=Construction"
          eventName="cta_click"
          eventLabel="construction_request_quote"
          className="rounded bg-[#0f172a] px-4 py-2 text-white"
        >
          Request a Quote
        </CtaLink>
      </div>
    </div>
  );
}

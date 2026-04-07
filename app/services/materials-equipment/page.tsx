import CtaLink from "@/components/CtaLink";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Materials & Equipment | Lexicon Empire",
  description: "Machine hiring and quality material supply services to keep projects on schedule.",
};

export default function MaterialsEquipmentPage() {
  return (
    <div className="space-y-8">
      <section className="section-card p-7 md:p-9">
        <p className="text-xs uppercase tracking-widest text-[#b58f3e]">Service Vertical</p>
        <h1 className="mt-2 font-heading text-4xl font-bold text-[#0f172a] md:text-5xl">Materials & Equipment</h1>
        <p className="mt-4 max-w-3xl text-slate-700">
          Reliable machinery access and quality building materials to keep critical construction projects on
          schedule and on standard.
        </p>
      </section>

      <section className="grid gap-4 md:grid-cols-2">
        <article className="section-card p-6">
          <h2 className="font-heading text-2xl font-semibold">Machine Hiring</h2>
          <p className="mt-2 text-slate-700">Heavy-duty machinery available to keep your projects on schedule.</p>
          <CtaLink
            href="/contact?inquiry=Machine Hiring"
            eventName="cta_click"
            eventLabel="machine_hiring_book_machinery"
            className="mt-4 inline-block rounded bg-[#0f172a] px-4 py-2 text-white transition hover:bg-[#1e293b]"
          >
            Book Machinery
          </CtaLink>
        </article>
        <article className="section-card p-6">
          <h2 className="font-heading text-2xl font-semibold">Material Supply</h2>
          <p className="mt-2 text-slate-700">Comprehensive range of high-grade building materials.</p>
          <CtaLink
            href="/contact?inquiry=Material Supply"
            eventName="cta_click"
            eventLabel="materials_request_bulk_quote"
            className="mt-4 inline-block rounded border border-[#0f172a] px-4 py-2 transition hover:bg-slate-50"
          >
            Request Bulk Quote
          </CtaLink>
        </article>
      </section>
    </div>
  );
}

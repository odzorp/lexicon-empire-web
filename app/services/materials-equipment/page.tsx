import Image from "next/image";
import CtaLink from "@/components/CtaLink";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Materials & Equipment",
  description:
    "Reliable machine hiring and quality building material supply services to keep your projects on schedule and on standard.",
};

export default function MaterialsEquipmentPage() {
  return (
    <div className="space-y-10 md:space-y-14">

      {/* ═══ HERO ═══ */}
      <section className="section-card p-8 md:p-12">
        <span className="eyebrow">Service Vertical</span>
        <div className="gold-rule" aria-hidden />
        <h1 className="font-heading text-4xl font-bold text-[#0f172a] md:text-5xl">
          Materials &amp; Equipment
        </h1>
        <p className="mt-5 max-w-3xl text-base leading-relaxed text-[#64748b]">
          Reliable machinery access and quality building materials to keep critical construction projects
          on schedule and on standard — supplied directly from our integrated network.
        </p>
      </section>

      {/* ═══ FEATURE PHOTO ═══ */}
      <section className="img-zoom-wrap relative overflow-hidden rounded-2xl shadow-[var(--shadow-lg)]" style={{ minHeight: "380px" }}>
        <Image
          src="/images/materials/IMG_4658.jpg"
          alt="Building materials supply on-site – Lexicon Empire"
          fill
          className="object-cover"
          sizes="(max-width: 1280px) 100vw, 1280px"
        />
        {/* Dark caption strip */}
        <div className="absolute inset-0 flex items-end bg-gradient-to-t from-[#0a1020]/80 via-[#0a1020]/15 to-transparent">
          <div className="p-7 md:p-10">
            <span className="eyebrow text-[#f4d8a2]">On-Site Supply</span>
            <p className="mt-2 font-heading text-2xl font-semibold text-white md:text-3xl">
              High-Grade Supply, On Demand
            </p>
            <p className="mt-2 text-sm text-white/65">
              From raw aggregate to finished fixtures — we stock it, we deliver it.
            </p>
          </div>
        </div>
      </section>

      {/* ═══ SERVICE CARDS ═══ */}
      <section>
        <span className="eyebrow">Our Offerings</span>
        <div className="gold-rule" aria-hidden />
        <div className="grid gap-5 md:grid-cols-2">
          <article className="section-card p-7">
            <span className="text-3xl" aria-hidden>🚧</span>
            <h2 className="mt-4 font-heading text-xl font-semibold text-[#0f172a]">Machine Hiring</h2>
            <p className="mt-2 text-sm leading-relaxed text-[#64748b]">
              Access the right heavy-duty machinery at the right time. Our modern fleet — excavators,
              cranes, compactors, and more — keeps your projects moving.
            </p>
            <ul className="mt-4 space-y-1.5 text-sm text-[#4b5563]">
              {["Excavators & Bulldozers", "Tower & Mobile Cranes", "Compactors & Rollers", "Forklifts & Loaders"].map((item) => (
                <li key={item} className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#c7a559]" aria-hidden />
                  {item}
                </li>
              ))}
            </ul>
            <CtaLink
              href="/contact?inquiry=Machine Hiring"
              eventName="cta_click"
              eventLabel="machine_hiring_book_machinery"
              className="btn btn-navy mt-6"
            >
              Book Machinery
            </CtaLink>
          </article>

          <article className="section-card p-7">
            <span className="text-3xl" aria-hidden>🪨</span>
            <h2 className="mt-4 font-heading text-xl font-semibold text-[#0f172a]">Material Supply</h2>
            <p className="mt-2 text-sm leading-relaxed text-[#64748b]">
              Comprehensive sourcing of high-grade construction materials — delivered to site and quality-
              verified at every stage.
            </p>
            <ul className="mt-4 space-y-1.5 text-sm text-[#4b5563]">
              {["Cement & Aggregate", "Steel & Reinforcement", "Timber & Wood Products", "Finishing Materials"].map((item) => (
                <li key={item} className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#c7a559]" aria-hidden />
                  {item}
                </li>
              ))}
            </ul>
            <CtaLink
              href="/contact?inquiry=Material Supply"
              eventName="cta_click"
              eventLabel="materials_request_bulk_quote"
              className="btn btn-outline mt-6"
            >
              Request Bulk Quote
            </CtaLink>
          </article>
        </div>
      </section>
    </div>
  );
}

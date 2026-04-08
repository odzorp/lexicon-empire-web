import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Lexicon Empire — our founder story, mission, values, and a decade of diversified service legacy across Ghana.",
};

const MVL = [
  {
    title: "Mission",
    copy: "Provide integrated solutions that improve infrastructure and daily life across West Africa.",
    icon: "🎯",
  },
  {
    title: "Vision",
    copy: "Build long-term value through quality, reliability, and continuous innovation.",
    icon: "🔭",
  },
  {
    title: "Legacy",
    copy: "A decade of trusted delivery across high-impact construction, energy, and retail sectors.",
    icon: "🏆",
  },
];

const CORE_VALUES = [
  { label: "Integrity", detail: "We do the job right, every time, with no compromise." },
  { label: "Innovation", detail: "We evolve with modern needs and embrace better methods." },
  { label: "Excellence", detail: "We hold every deliverable to the highest standard." },
  { label: "Legacy", detail: "We build outcomes that last generations beyond the project." },
];

export default function AboutPage() {
  return (
    <div className="space-y-10 md:space-y-14">

      {/* ═══ PAGE HEADER ═══ */}
      <section className="section-card p-8 md:p-12">
        <span className="eyebrow">Company Profile</span>
        <div className="gold-rule" aria-hidden />
        <h1 className="font-heading text-4xl font-bold text-[#0f172a] md:text-5xl">
          About Lexicon Empire
        </h1>
        <p className="mt-5 max-w-3xl text-base leading-relaxed text-[#64748b]">
          Lexicon Empire is built on precision, reliability, and excellence. Over a decade, we have evolved
          from a dedicated construction business into a diversified conglomerate serving construction, energy,
          manufacturing, and retail across Ghana.
        </p>

        {/* MVL cards */}
        <div className="mt-8 grid gap-4 text-sm md:grid-cols-3">
          {MVL.map(({ title, copy, icon }) => (
            <article
              key={title}
              className="flex flex-col gap-3 rounded-xl bg-[#f1f4fa] p-5 border border-slate-200/60"
            >
              <span className="text-2xl" aria-hidden>{icon}</span>
              <h2 className="font-heading text-lg font-semibold text-[#0f172a]">{title}</h2>
              <p className="leading-relaxed text-[#4b5563]">{copy}</p>
            </article>
          ))}
        </div>
      </section>

      {/* ═══ FOUNDER MESSAGE ═══ */}
      <section className="section-card overflow-hidden p-0 md:grid md:grid-cols-[380px_1fr]">
        {/* Portrait */}
        <div className="img-zoom-wrap relative min-h-[300px] bg-[#0f172a] md:min-h-0">
          <Image
            src="/images/founder.png"
            alt="Founder of Lexicon Empire"
            fill
            className="object-cover object-top"
            sizes="(max-width: 768px) 100vw, 380px"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a1020]/50 to-transparent md:bg-gradient-to-r md:from-transparent md:to-[#0f172a]/20" />
        </div>

        {/* Text */}
        <div className="p-8 md:p-12">
          <span className="eyebrow">Founder&apos;s Message</span>
          <div className="gold-rule" aria-hidden />
          <h2 className="font-heading text-2xl font-semibold text-[#0f172a] sm:text-3xl">
            Message from the Founder
          </h2>

          <blockquote className="mt-5 border-l-2 border-[#c7a559] pl-5">
            <p className="text-lg italic leading-relaxed text-[#334155]">
              &ldquo;A Decade of Building Dreams, Fueling Progress, and Honoring Commitment.&rdquo;
            </p>
          </blockquote>

          <p className="mt-4 text-sm leading-relaxed text-[#64748b]">
            From luxury estates to public infrastructure and essential energy services, Lexicon Empire
            continues to build a legacy rooted in integrity, innovation, and long-term community
            partnerships.
          </p>

          {/* Core values */}
          <div className="mt-7 rounded-2xl bg-[#0f172a] p-6 text-white">
            <span className="eyebrow text-[#f4d8a2]">Core Values</span>
            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              {CORE_VALUES.map(({ label, detail }) => (
                <div key={label} className="glass-card p-3.5">
                  <p className="text-sm font-semibold text-[#f4d8a2]">{label}</p>
                  <p className="mt-1 text-xs leading-relaxed text-white/60">{detail}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══ CTA ═══ */}
      <section className="flex flex-col items-center gap-4 rounded-2xl border border-[#c7a559]/20 bg-[#fffbf3] p-8 text-center md:p-12">
        <p className="font-heading text-2xl font-semibold text-[#0f172a]">Ready to work with us?</p>
        <p className="max-w-md text-sm text-[#64748b]">
          Whether you have a construction project, energy inquiry, or partnership opportunity — we&apos;re
          ready to talk.
        </p>
        <Link href="/contact" className="btn btn-navy mt-2">
          Start a Conversation →
        </Link>
      </section>
    </div>
  );
}

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About | Lexicon Empire",
  description: "Learn about Lexicon Empire, our founder story, mission, values, and diversified service legacy.",
};

export default function AboutPage() {
  return (
    <div className="space-y-8">
      <section className="section-card overflow-hidden p-7 md:p-10">
        <p className="text-xs uppercase tracking-widest text-[#b58f3e]">Company Profile</p>
        <h1 className="mt-2 font-heading text-4xl font-bold text-[#0f172a] md:text-5xl">About Lexicon Empire</h1>
        <p className="mt-4 max-w-3xl text-slate-700">
          Lexicon Empire is built on precision, reliability, and excellence. Over a decade, we have evolved from
          a dedicated construction business into a diversified group serving construction, energy, manufacturing,
          and retail across Ghana.
        </p>
        <div className="mt-6 grid gap-4 text-sm md:grid-cols-3">
          {[
            ["Mission", "Provide integrated solutions that improve infrastructure and daily life."],
            ["Vision", "Build long-term value through quality, reliability, and innovation."],
            ["Legacy", "A decade of trusted delivery across high-impact sectors."],
          ].map(([title, copy]) => (
            <article key={title} className="rounded-lg bg-[#eef2f9] p-4">
              <h2 className="font-heading text-xl font-semibold text-[#0f172a]">{title}</h2>
              <p className="mt-2 text-slate-700">{copy}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section-card grid gap-6 p-7 md:grid-cols-[1.5fr_1fr] md:p-8">
        <div>
          <h2 className="font-heading text-3xl font-semibold text-[#0f172a]">Message from the Founder</h2>
          <p className="mt-4 text-slate-700">
            &ldquo;A Decade of Building Dreams, Fueling Progress, and Honoring Commitment.&rdquo;
          </p>
          <p className="mt-3 text-slate-600">
            From luxury estates to public infrastructure and essential services, Lexicon Empire continues to
            build a legacy of excellence rooted in integrity, innovation, and long-term partnerships.
          </p>
        </div>
        <div className="rounded-xl bg-[#0f172a] p-5 text-white">
          <p className="text-xs uppercase tracking-widest text-[#f4d8a2]">Core Values</p>
          <ul className="mt-3 space-y-2 text-sm">
            <li>Integrity: Doing the job right, every time.</li>
            <li>Innovation: Evolving with modern needs.</li>
            <li>Legacy: Building outcomes that endure.</li>
          </ul>
        </div>
      </section>
    </div>
  );
}

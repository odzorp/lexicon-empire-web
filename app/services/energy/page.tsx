import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Energy & Petroleum | Lexicon Empire",
  description: "Filling station and LPG distribution services with safety, reliability, and quality delivery.",
};

export default function EnergyPage() {
  return (
    <div className="space-y-8">
      <section className="section-card p-7 md:p-9">
        <p className="text-xs uppercase tracking-widest text-[#b58f3e]">Service Vertical</p>
        <h1 className="mt-2 font-heading text-4xl font-bold text-[#0f172a] md:text-5xl">Energy & Petroleum</h1>
        <p className="mt-4 max-w-3xl text-slate-700">
          Reliable energy distribution through filling stations and LPG operations with safety and service
          quality at the center.
        </p>
      </section>
      <section className="grid gap-4 md:grid-cols-2">
        <article className="section-card p-6">
          <h2 className="font-heading text-2xl font-semibold text-[#0f172a]">Filling Stations</h2>
          <p className="mt-2 text-slate-700">High-quality fuels and lubricants for motorists and fleets.</p>
        </article>
        <article className="section-card p-6">
          <h2 className="font-heading text-2xl font-semibold text-[#0f172a]">LPG Distribution</h2>
          <p className="mt-2 text-slate-700">Safe domestic and industrial LPG access through managed stations.</p>
        </article>
      </section>
    </div>
  );
}

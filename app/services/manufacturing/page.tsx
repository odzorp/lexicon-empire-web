import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Manufacturing & Retail | Lexicon Empire",
  description: "Mineral water production and retail center services focused on quality and accessibility.",
};

export default function ManufacturingPage() {
  return (
    <div className="space-y-8">
      <section className="section-card p-7 md:p-9">
        <p className="text-xs uppercase tracking-widest text-[#b58f3e]">Service Vertical</p>
        <h1 className="mt-2 font-heading text-4xl font-bold text-[#0f172a] md:text-5xl">Manufacturing & Retail</h1>
        <p className="mt-4 max-w-3xl text-slate-700">
          Consumer-focused production and modern retail development to deliver trusted products and accessible
          shopping experiences.
        </p>
      </section>
      <section className="grid gap-4 md:grid-cols-2">
        <article className="section-card p-6">
          <h2 className="font-heading text-2xl font-semibold text-[#0f172a]">Mineral Water Production</h2>
          <p className="mt-2 text-slate-700">Clean, healthy bottled water produced with strict quality controls.</p>
        </article>
        <article className="section-card p-6">
          <h2 className="font-heading text-2xl font-semibold text-[#0f172a]">Malls & Retail Centers</h2>
          <p className="mt-2 text-slate-700">Well-positioned retail hubs that support commerce and community access.</p>
        </article>
      </section>
    </div>
  );
}

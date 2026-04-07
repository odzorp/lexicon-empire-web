import Link from "next/link";
import CtaLink from "@/components/CtaLink";

export default function Home() {
  return (
    <div className="space-y-8 md:space-y-12">
      <section className="overflow-hidden rounded-2xl bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#0f172a] p-6 text-white sm:p-8 md:p-12">
        <p className="mb-3 inline-block rounded-full border border-[#c7a559]/50 bg-[#c7a559]/15 px-3 py-1 text-xs tracking-widest text-[#f4d8a2]">
          PREMIUM INFRASTRUCTURE GROUP
        </p>
        <h1 className="max-w-4xl font-heading text-3xl font-bold leading-tight sm:text-4xl md:text-6xl">
          Building the Future, Fueling the Present.
        </h1>
        <p className="mt-5 max-w-3xl text-base text-white/85 md:text-lg">
          Lexicon Empire is a multifaceted conglomerate delivering premium construction, equipment services,
          energy distribution, and manufacturing excellence.
        </p>
        <div className="mt-7 flex flex-wrap gap-3">
          <CtaLink
            href="/services/construction"
            eventName="cta_click"
            eventLabel="home_explore_services"
            className="rounded-md bg-[#c7a559] px-5 py-2.5 font-semibold text-black transition hover:bg-[#b58f3e]"
          >
            Explore Our Services
          </CtaLink>
          <CtaLink
            href="/contact"
            eventName="cta_click"
            eventLabel="home_contact_us"
            className="rounded-md border border-white/40 px-5 py-2.5 transition hover:bg-white/10"
          >
            Contact Us
          </CtaLink>
        </div>
        <div className="mt-8 grid gap-3 text-sm md:grid-cols-3">
          {[
            ["10+ Years", "Proven delivery and trusted operations"],
            ["4 Verticals", "Construction, materials, energy, and retail"],
            ["End-to-End", "Integrated solutions from supply to execution"],
          ].map(([metric, copy]) => (
            <div key={metric} className="rounded-lg border border-white/15 bg-white/5 p-4">
              <p className="font-heading text-2xl font-semibold text-[#f4d8a2]">{metric}</p>
              <p className="mt-1 text-white/80">{copy}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section-card p-5 sm:p-6 md:p-8">
        <div className="mb-6 flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-xs uppercase tracking-widest text-[#b58f3e]">Core Verticals</p>
            <h2 className="font-heading text-2xl font-bold text-[#0f172a] sm:text-3xl">Solutions Built for Scale</h2>
          </div>
          <p className="max-w-2xl text-sm text-slate-600">
            Each business unit is designed to operate independently and integrate seamlessly into large
            enterprise and public-sector projects.
          </p>
        </div>
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {[
          ["Construction", "High-end residential, hospitality, and public works.", "/services/construction"],
          ["Materials", "Machine hiring and high-grade material supply.", "/services/materials-equipment"],
          ["Energy", "Filling stations and LPG distribution.", "/services/energy"],
          ["Manufacturing", "Mineral water production and retail centers.", "/services/manufacturing"],
        ].map(([title, desc, href]) => (
          <article key={title} className="rounded-xl border border-slate-200/70 bg-white p-5 transition hover:-translate-y-0.5 hover:shadow-md">
            <h3 className="font-heading text-xl font-semibold text-[#0f172a]">{title}</h3>
            <p className="mt-2 text-sm text-slate-700">{desc}</p>
            <Link href={href as string} className="mt-4 inline-block text-sm font-semibold text-[#0f172a]">
              Learn more →
            </Link>
          </article>
        ))}
        </div>
      </section>

      <section className="grid gap-4 md:grid-cols-3">
        {[
          ["Integrated Excellence", "From machinery and materials to final project execution under one group."],
          ["Quality Assurance", "Consistent quality controls across every vertical and deliverable."],
          ["Innovation Driven", "Modern methods and technology to deliver dependable long-term value."],
        ].map(([title, copy]) => (
          <article key={title} className="section-card p-5">
            <h3 className="font-heading text-xl font-semibold text-[#0f172a]">{title}</h3>
            <p className="mt-2 text-sm text-slate-700">{copy}</p>
          </article>
        ))}
      </section>

      <section className="section-card grid gap-6 p-5 sm:p-6 md:grid-cols-[1.6fr_1fr] md:p-8">
        <div>
          <h2 className="font-heading text-2xl font-semibold text-[#0f172a] sm:text-3xl">Founder Spotlight</h2>
          <p className="mt-3 text-slate-700">
          &ldquo;A Decade of Building Dreams, Fueling Progress, and Honoring Commitment.&rdquo;
          </p>
          <p className="mt-3 text-slate-600">
            Discover the journey, values, and long-term vision behind Lexicon Empire&apos;s growth across
            construction, energy, and manufacturing.
          </p>
          <Link href="/about" className="mt-4 inline-block rounded-md border border-slate-300 px-4 py-2 text-sm font-semibold text-[#0f172a]">
            Read Full Message
          </Link>
        </div>
        <div className="rounded-xl bg-[#0f172a] p-5 text-white">
          <p className="text-xs uppercase tracking-widest text-[#f4d8a2]">Need a fast response?</p>
          <h3 className="mt-2 font-heading text-2xl font-semibold">Start Your Inquiry</h3>
          <p className="mt-2 text-sm text-white/80">
            Tell us your project type and we will route your request to the right team.
          </p>
          <CtaLink
            href="/contact"
            eventName="cta_click"
            eventLabel="home_start_inquiry_panel"
            className="mt-4 inline-block rounded-md bg-[#c7a559] px-4 py-2 font-semibold text-black"
          >
            Open Contact Form
          </CtaLink>
        </div>
      </section>
    </div>
  );
}

import CtaLink from "@/components/CtaLink";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Manufacturing & Retail",
  description:
    "Mineral water production and modern retail center development — quality products, accessible communities.",
};

export default function ManufacturingPage() {
  return (
    <div className="space-y-10 md:space-y-14">

      {/* ═══ HERO ═══ */}
      <section className="section-card p-8 md:p-12">
        <span className="eyebrow">Service Vertical</span>
        <div className="gold-rule" aria-hidden />
        <h1 className="font-heading text-4xl font-bold text-[#0f172a] md:text-5xl">
          Manufacturing &amp; Retail
        </h1>
        <p className="mt-5 max-w-3xl text-base leading-relaxed text-[#64748b]">
          Consumer-focused production and modern retail development delivering trusted products and
          accessible shopping experiences across Ghana.
        </p>
      </section>

      {/* ═══ SERVICE CARDS ═══ */}
      <section>
        <span className="eyebrow">Our Offerings</span>
        <div className="gold-rule" aria-hidden />
        <div className="grid gap-5 md:grid-cols-2">
          <article className="section-card p-7">
            <span className="text-3xl" aria-hidden>💧</span>
            <h2 className="mt-4 font-heading text-xl font-semibold text-[#0f172a]">Mineral Water Production</h2>
            <p className="mt-2 text-sm leading-relaxed text-[#64748b]">
              Clean, healthy bottled water produced with strict quality controls and modern hygiene
              standards — delivering safe hydration to homes and businesses.
            </p>
            <ul className="mt-4 space-y-1.5 text-sm text-[#4b5563]">
              {["ISO-Certified Production", "Bulk & Retail Packaging", "Distribution Network", "Quality Lab Testing"].map((item) => (
                <li key={item} className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#c7a559]" aria-hidden />
                  {item}
                </li>
              ))}
            </ul>
          </article>

          <article className="section-card p-7">
            <span className="text-3xl" aria-hidden>🛍</span>
            <h2 className="mt-4 font-heading text-xl font-semibold text-[#0f172a]">Malls &amp; Retail Centers</h2>
            <p className="mt-2 text-sm leading-relaxed text-[#64748b]">
              Well-positioned, modern retail hubs that support local commerce, entrepreneurship, and
              everyday community access to goods and services.
            </p>
            <ul className="mt-4 space-y-1.5 text-sm text-[#4b5563]">
              {["Mixed-Use Commercial Hubs", "Anchor Tenant Fit-Outs", "Car Park & Common Areas", "Long-Term Tenancy Management"].map((item) => (
                <li key={item} className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#c7a559]" aria-hidden />
                  {item}
                </li>
              ))}
            </ul>
          </article>
        </div>
      </section>

      {/* ═══ CTA ═══ */}
      <div className="flex flex-wrap gap-3">
        <CtaLink
          href="/contact?inquiry=Manufacturing"
          eventName="cta_click"
          eventLabel="manufacturing_inquire"
          className="btn btn-navy"
        >
          Make an Inquiry →
        </CtaLink>
        <CtaLink
          href="/projects"
          eventName="cta_click"
          eventLabel="manufacturing_view_projects"
          className="btn btn-outline"
        >
          View Projects
        </CtaLink>
      </div>
    </div>
  );
}

import Image from "next/image";
import Link from "next/link";
import CtaLink from "@/components/CtaLink";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Construction & Infrastructure",
  description:
    "Premium construction and infrastructure services for residential, hospitality, and public works projects across Ghana.",
};

const constructionImages = [
  { src: "/images/construction/IMG_4648.jpg", alt: "Residential construction – Lexicon Empire", caption: "Residential" },
  { src: "/images/construction/IMG_4649.jpg", alt: "Hospitality construction – Lexicon Empire", caption: "Hospitality" },
  { src: "/images/construction/IMG_4650.jpg", alt: "Infrastructure project – Lexicon Empire", caption: "Infrastructure" },
  { src: "/images/construction/IMG_4651.jpg", alt: "Public works site – Lexicon Empire", caption: "Public Works" },
];

export default function ConstructionServicePage() {
  return (
    <div className="space-y-10 md:space-y-14">

      {/* ═══ HERO ═══ */}
      <section className="section-card p-8 md:p-12">
        <span className="eyebrow">Service Vertical</span>
        <div className="gold-rule" aria-hidden />
        <h1 className="font-heading text-4xl font-bold text-[#0f172a] md:text-5xl">
          Premium Construction<br />&amp; Infrastructure
        </h1>
        <p className="mt-5 max-w-3xl text-base leading-relaxed text-[#64748b]">
          End-to-end delivery for high-value residential, hospitality, and public infrastructure projects —
          built to outlast generations.
        </p>
      </section>

      {/* ═══ PHOTO GALLERY ═══ */}
      <section aria-label="Construction project gallery">
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {constructionImages.map((img, i) => (
            <div
              key={img.src}
              className={`img-zoom-wrap group relative overflow-hidden rounded-2xl ${
                i === 0 ? "sm:col-span-2 sm:row-span-2" : ""
              }`}
              style={{ minHeight: i === 0 ? "360px" : "200px" }}
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover"
                sizes={i === 0 ? "(max-width: 640px) 100vw, 50vw" : "(max-width: 640px) 100vw, 25vw"}
              />
              {/* Caption on hover */}
              <div className="absolute inset-0 flex items-end bg-gradient-to-t from-[#0a1020]/70 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <span className="sector-badge m-4">{img.caption}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ═══ SERVICE BREAKDOWN ═══ */}
      <section className="section-card p-7 md:p-10">
        <span className="eyebrow">What We Deliver</span>
        <div className="gold-rule" aria-hidden />
        <p className="max-w-3xl text-[#64748b]">
          At the heart of Lexicon Empire is our world-class construction division, delivering high-end
          residential, hospitality, and public works solutions with uncompromising quality.
        </p>

        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {[
            {
              title: "Residential",
              copy: "Bespoke mansions, luxury gated communities, and high-end private estates.",
              icon: "🏡",
            },
            {
              title: "Hospitality",
              copy: "Modern hotels, resort facilities, and commercial-grade recreational spaces.",
              icon: "🏨",
            },
            {
              title: "Public Works",
              copy: "Long-lasting community infrastructure — schools, roads, and civic buildings.",
              icon: "🏛",
            },
          ].map(({ title, copy, icon }) => (
            <article
              key={title}
              className="rounded-xl border border-slate-200/70 bg-[#f7f9fd] p-5 transition hover:border-[#c7a559]/30 hover:shadow-[var(--shadow-sm)]"
            >
              <span className="text-2xl" aria-hidden>{icon}</span>
              <h2 className="mt-3 font-heading text-lg font-semibold text-[#0f172a]">{title}</h2>
              <p className="mt-2 text-sm leading-relaxed text-[#64748b]">{copy}</p>
            </article>
          ))}
        </div>
      </section>

      {/* ═══ ACTIONS ═══ */}
      <div className="flex flex-wrap gap-3">
        <Link href="/projects" className="btn btn-outline">
          View Portfolio
        </Link>
        <CtaLink
          href="/contact?inquiry=Construction"
          eventName="cta_click"
          eventLabel="construction_request_quote"
          className="btn btn-navy"
        >
          Request a Quote
        </CtaLink>
      </div>
    </div>
  );
}

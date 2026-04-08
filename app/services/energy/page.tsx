import Image from "next/image";
import CtaLink from "@/components/CtaLink";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Energy & Petroleum",
  description:
    "Filling station and LPG distribution services with safety, reliability, and quality fuel delivery across Ghana.",
};

const stationImages = [
  { src: "/images/energy/IMG_4663.jpg", alt: "Lexicon Empire filling station – forecourt" },
  { src: "/images/energy/IMG_4665.jpg", alt: "Lexicon Empire filling station – operations" },
  { src: "/images/energy/IMG_4668.jpg", alt: "Lexicon Empire filling station – canopy" },
];

export default function EnergyPage() {
  return (
    <div className="space-y-10 md:space-y-14">

      {/* ═══ HERO ═══ */}
      <section className="section-card p-8 md:p-12">
        <span className="eyebrow">Service Vertical</span>
        <div className="gold-rule" aria-hidden />
        <h1 className="font-heading text-4xl font-bold text-[#0f172a] md:text-5xl">
          Energy &amp; Petroleum
        </h1>
        <p className="mt-5 max-w-3xl text-base leading-relaxed text-[#64748b]">
          Reliable energy distribution through modern filling stations and managed LPG operations —
          putting safety and service quality at the forefront of every nozzle.
        </p>
      </section>

      {/* ═══ STATION PHOTO STRIP ═══ */}
      <section aria-label="Filling station photo gallery">
        <div className="grid gap-3 sm:grid-cols-3">
          {stationImages.map((img, i) => (
            <div
              key={img.src}
              className="img-zoom-wrap relative overflow-hidden rounded-2xl shadow-[var(--shadow-sm)]"
              style={{ minHeight: "240px" }}
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover"
                sizes="(max-width: 640px) 100vw, 33vw"
                priority={i === 0}
              />
            </div>
          ))}
        </div>
      </section>

      {/* ═══ SERVICE CARDS ═══ */}
      <section>
        <span className="eyebrow">Our Offerings</span>
        <div className="gold-rule" aria-hidden />
        <div className="grid gap-5 md:grid-cols-2">
          <article className="section-card p-7">
            <span className="text-3xl" aria-hidden>⛽</span>
            <h2 className="mt-4 font-heading text-xl font-semibold text-[#0f172a]">Filling Stations</h2>
            <p className="mt-2 text-sm leading-relaxed text-[#64748b]">
              Premium-grade fuels and lubricants dispensed through modern, well-maintained forecourts,
              serving private motorists and commercial fleets alike.
            </p>
            <ul className="mt-4 space-y-1.5 text-sm text-[#4b5563]">
              {["Premium & Regular Petrol", "Diesel Fuel", "Engine Lubricants", "Fleet Accounts"].map((item) => (
                <li key={item} className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#c7a559]" aria-hidden />
                  {item}
                </li>
              ))}
            </ul>
          </article>

          <article className="section-card p-7">
            <span className="text-3xl" aria-hidden>🔵</span>
            <h2 className="mt-4 font-heading text-xl font-semibold text-[#0f172a]">LPG Distribution</h2>
            <p className="mt-2 text-sm leading-relaxed text-[#64748b]">
              Safe, reliable access to liquefied petroleum gas for domestic and industrial consumers,
              delivered through our managed network of licensed LPG stations.
            </p>
            <ul className="mt-4 space-y-1.5 text-sm text-[#4b5563]">
              {["Domestic Cylinders", "Industrial Bulk LPG", "On-Site Refills", "Safety-First Operations"].map((item) => (
                <li key={item} className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#c7a559]" aria-hidden />
                  {item}
                </li>
              ))}
            </ul>
          </article>
        </div>
      </section>

      <CtaLink
        href="/contact?inquiry=Energy"
        eventName="cta_click"
        eventLabel="energy_inquire_now"
        className="btn btn-navy"
      >
        Inquire About Energy Services →
      </CtaLink>
    </div>
  );
}

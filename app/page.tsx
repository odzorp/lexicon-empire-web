import Image from "next/image";
import Link from "next/link";
import CtaLink from "@/components/CtaLink";
import ScrollReveal from "@/components/ScrollReveal";
import ParallaxHero from "@/components/ParallaxHero";

export default function Home() {
  return (
    <div className="space-y-16 md:space-y-24">

      {/* ═══ HERO ═══ */}
      <ParallaxHero className="rounded-3xl" backgroundImage="/images/banner.jpg">
        <div className="relative z-10 flex h-full min-h-[620px] flex-col justify-end p-6 text-white sm:p-10 md:p-14 md:min-h-[680px]">
          {/* Animated floating orbs */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="floating-orb orb-1" style={{ top: '10%', right: '10%' }} />
            <div className="floating-orb orb-2" style={{ bottom: '20%', left: '5%' }} />
            <div className="floating-orb orb-3" style={{ top: '40%', right: '30%' }} />
          </div>

          {/* Eyebrow with animation */}
          <ScrollReveal delay={100}>
            <div className="mb-5 flex items-center gap-3">
              <span className="h-px w-10 bg-gradient-to-r from-transparent to-[#c7a559]" aria-hidden />
              <span className="eyebrow text-[#f4d8a2]">Premium Infrastructure Group · Ghana</span>
            </div>
          </ScrollReveal>

          {/* Main headline */}
          <ScrollReveal delay={200}>
            <h1 className="font-heading text-5xl font-bold leading-[1.1] sm:text-6xl md:text-7xl lg:text-8xl">
              <span className="text-reveal">
                <span>Building</span> <span>the</span> <span>Future,</span>
              </span>
              <br />
              <span className="bg-gradient-to-r from-[#c7a559] via-[#f4d8a2] to-[#c7a559] bg-clip-text text-transparent text-glow-gold">
                Fueling the Present.
              </span>
            </h1>
          </ScrollReveal>

          {/* Description */}
          <ScrollReveal delay={350}>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/75 md:text-xl">
              A multifaceted conglomerate delivering premium construction, equipment services,
              energy distribution, and manufacturing excellence across West Africa.
            </p>
          </ScrollReveal>

          {/* CTA Buttons */}
          <ScrollReveal delay={450}>
            <div className="mt-8 flex flex-wrap gap-4">
              <CtaLink
                href="/services/construction"
                eventName="cta_click"
                eventLabel="home_explore_services"
                className="btn btn-gold text-sm md:text-base px-8 py-3.5 shadow-[0_8px_30px_rgba(199,165,89,0.4)] hover:shadow-[0_12px_40px_rgba(199,165,89,0.55)] hover:-translate-y-1"
              >
                <span>Explore Our Services</span>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" className="transition-transform duration-300 group-hover:translate-x-1">
                  <path d="M3 8h10M9 4l4 4-4 4" />
                </svg>
              </CtaLink>
              <CtaLink
                href="/contact"
                eventName="cta_click"
                eventLabel="home_contact_us"
                className="btn btn-outline-white text-sm md:text-base px-8 py-3.5"
              >
                Contact Us
              </CtaLink>
            </div>
          </ScrollReveal>

          {/* Stats strip */}
          <ScrollReveal delay={550}>
            <div className="mt-12 grid gap-3 sm:grid-cols-3">
              {[
                { num: "10+", label: "Years", copy: "Proven delivery and trusted operations" },
                { num: "4", label: "Verticals", copy: "Construction, materials, energy & retail" },
                { num: "100%", label: "End-to-End", copy: "Supply to execution under one group" },
              ].map(({ num, label, copy }, i) => (
                <div 
                  key={label} 
                  className="stat-chip group hover:bg-white/12 transition-all duration-300"
                >
                  <p className="font-heading text-2xl font-bold text-[#f4d8a2] md:text-3xl">
                    {num} <span className="text-base font-semibold text-white/70">{label}</span>
                  </p>
                  <p className="mt-1 text-xs text-white/55">{copy}</p>
                  {/* Accent line */}
                  <div className="mt-3 h-px w-0 bg-gradient-to-r from-[#c7a559] to-transparent transition-all duration-500 group-hover:w-full" />
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </ParallaxHero>

      {/* ═══ CORE VERTICALS ═══ */}
      <ScrollReveal>
        <section className="section-card p-6 sm:p-8 md:p-10">
          <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <span className="eyebrow">Core Verticals</span>
              <div className="gold-rule" aria-hidden />
              <h2 className="font-heading text-3xl font-bold text-[#0f172a] sm:text-4xl">
                Solutions Built for Scale
              </h2>
            </div>
            <p className="max-w-sm text-base text-[#64748b] leading-relaxed">
              Each business unit operates independently while integrating seamlessly into large enterprise
              and public-sector projects.
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
            {[
              {
                title: "Construction",
                desc: "High-end residential, hospitality, and public works.",
                href: "/services/construction",
                icon: (
                  <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M3 21h18M5 21V7l7-4 7 4v14M9 21v-6h6v6M9 9h.01M15 9h.01M9 13h.01M15 13h.01" />
                  </svg>
                ),
              },
              {
                title: "Materials",
                desc: "Machine hiring and high-grade material supply.",
                href: "/services/materials-equipment",
                icon: (
                  <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M14 7l-5 5-5-5M12 4v16M4 14h16" />
                  </svg>
                ),
              },
              {
                title: "Energy",
                desc: "Filling stations and LPG distribution.",
                href: "/services/energy",
                icon: (
                  <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
                  </svg>
                ),
              },
              {
                title: "Manufacturing",
                desc: "Mineral water production and retail centers.",
                href: "/services/manufacturing",
                icon: (
                  <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M2 20a2 2 0 002 2h16a2 2 0 002-2V8l-7 5V8l-7 5V8l-7 5V8l-7 5v2zM6 12v4M10 12v4M14 12v4" />
                  </svg>
                ),
              },
            ].map(({ title, desc, href, icon }, index) => (
              <ScrollReveal key={title} delay={index * 100}>
                <Link
                  href={href}
                  className="service-card group relative flex h-full flex-col rounded-2xl border border-slate-100 bg-white p-6 shadow-[var(--shadow-sm)] transition-all duration-500 hover:-translate-y-2 hover:border-[#c7a559]/30 hover:shadow-[var(--shadow-lg)]"
                >
                  {/* Icon */}
                  <div className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-[#c7a559]/10 to-[#c7a559]/5 text-[#c7a559] transition-all duration-500 group-hover:from-[#c7a559] group-hover:to-[#b58f3e] group-hover:text-white">
                    {icon}
                  </div>
                  
                  <h3 className="font-heading text-xl font-semibold text-[#0f172a]">{title}</h3>
                  <p className="mt-2 flex-1 text-sm text-[#64748b] leading-relaxed">{desc}</p>
                  
                  <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[#c7a559] transition-all duration-300 group-hover:gap-3">
                    Learn more 
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" className="transition-transform duration-300">
                      <path d="M3 8h10M9 4l4 4-4 4" />
                    </svg>
                  </span>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </section>
      </ScrollReveal>

      {/* ═══ VALUE PROPS ═══ */}
      <div className="grid gap-5 md:grid-cols-3">
        {[
          {
            title: "Integrated Excellence",
            copy: "From machinery and materials to final project execution — all under one trusted group.",
            icon: (
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M9 12l2 2 4-4M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            ),
          },
          {
            title: "Quality Assurance",
            copy: "Rigorous quality controls across every vertical, every deliverable, every time.",
            icon: (
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M9 12l2 2 4-4M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
              </svg>
            ),
          },
          {
            title: "Innovation Driven",
            copy: "Modern methods and technology delivering dependable long-term value.",
            icon: (
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            ),
          },
        ].map(({ title, copy, icon }, index) => (
          <ScrollReveal key={title} delay={index * 150}>
            <article className="group relative overflow-hidden rounded-2xl bg-white p-8 shadow-[var(--shadow-md)] transition-all duration-500 hover:-translate-y-2 hover:shadow-[var(--shadow-xl)]">
              {/* Background accent */}
              <div className="absolute -right-12 -top-12 h-32 w-32 rounded-full bg-[#c7a559]/5 transition-transform duration-700 group-hover:scale-150" />
              
              <div className="relative">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-[#c7a559] to-[#b58f3e] text-white shadow-lg">
                  {icon}
                </div>
                <h3 className="font-heading text-xl font-semibold text-[#0f172a]">{title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-[#64748b]">{copy}</p>
              </div>
            </article>
          </ScrollReveal>
        ))}
      </div>

      {/* ═══ FOUNDER SPOTLIGHT ═══ */}
      <ScrollReveal>
        <section className="section-card overflow-hidden p-0 md:grid md:grid-cols-[1fr_420px]">
          {/* Text side */}
          <div className="relative p-7 sm:p-9 md:p-12">
            {/* Decorative element */}
            <div className="absolute left-0 top-0 h-1 w-20 bg-gradient-to-r from-[#c7a559] to-transparent" />
            
            <span className="eyebrow mt-6">Leadership</span>
            <div className="gold-rule" aria-hidden />
            <h2 className="font-heading text-2xl font-semibold text-[#0f172a] sm:text-3xl lg:text-4xl">
              Founder Spotlight
            </h2>
            <p className="mt-6 text-xl font-light italic leading-relaxed text-[#334155] border-l-4 border-[#c7a559] pl-4">
              "A Decade of Building Dreams, Fueling Progress, and Honoring Commitment."
            </p>
            <p className="mt-5 text-base leading-relaxed text-[#64748b]">
              Discover the journey, values, and long-term vision behind Lexicon Empire's growth across
              construction, energy, and manufacturing sectors in Ghana and beyond.
            </p>
            <Link
              href="/about"
              className="btn btn-outline mt-8 group"
            >
              <span>Read Full Message</span>
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" className="transition-transform duration-300 group-hover:translate-x-1">
                <path d="M3 8h10M9 4l4 4-4 4" />
              </svg>
            </Link>
          </div>

          {/* Portrait side */}
          <div className="relative min-h-[320px] bg-[#0f172a] md:min-h-0">
            <Image
              src="/images/founder.png"
              alt="Founder of Lexicon Empire"
              fill
              className="object-cover object-top"
              sizes="(max-width: 768px) 100vw, 420px"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0a1020]/80 via-[#0a1020]/20 to-transparent md:bg-gradient-to-r md:from-transparent md:via-transparent md:to-[#0a1020]/50" />
            
            {/* Floating badge */}
            <div className="absolute bottom-6 right-6 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 px-4 py-3">
              <p className="text-xs text-white/60 uppercase tracking-wider">Established</p>
              <p className="font-heading text-xl font-bold text-[#c7a559]">2014</p>
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* ═══ INQUIRY CTA BANNER ═══ */}
      <ScrollReveal>
        <section className="relative overflow-hidden rounded-3xl bg-[#0f172a] p-8 md:p-14">
          {/* Decorative elements */}
          <div className="pointer-events-none absolute -right-24 -top-24 h-96 w-96 rounded-full bg-[#c7a559]/10 blur-[100px]" aria-hidden />
          <div className="pointer-events-none absolute -bottom-20 left-10 h-72 w-72 rounded-full bg-[#c7a559]/8 blur-[80px]" aria-hidden />
          
          {/* Grid pattern overlay */}
          <div className="pointer-events-none absolute inset-0 opacity-[0.03]" 
            style={{ 
              backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
              backgroundSize: '40px 40px'
            }} 
          />

          <div className="relative z-10 flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
            <div>
              <span className="eyebrow text-[#f4d8a2]">Fast Response Guaranteed</span>
              <div className="gold-rule" aria-hidden />
              <h3 className="font-heading text-3xl font-semibold text-white sm:text-4xl">
                Start Your Inquiry Today
              </h3>
              <p className="mt-3 max-w-lg text-base leading-relaxed text-white/65">
                Tell us your project type and we'll route your request directly to the right specialist team
                within 24 hours. Our experts are ready to bring your vision to life.
              </p>
            </div>
            
            <div className="flex flex-col gap-3 sm:flex-row">
              <CtaLink
                href="/contact"
                eventName="cta_click"
                eventLabel="home_start_inquiry_panel"
                className="btn btn-gold text-base px-8 py-4 shadow-[0_8px_30px_rgba(199,165,89,0.4)] hover:shadow-[0_12px_40px_rgba(199,165,89,0.55)] hover:-translate-y-1"
              >
                Open Contact Form
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M4 9h10M10 4l5 5-5 5" />
                </svg>
              </CtaLink>
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* ═══ LOGO Ticker (if needed in future) ═══ */}
    </div>
  );
}

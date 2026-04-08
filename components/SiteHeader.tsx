"use client";

import { useEffect, useState, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NAV_LINKS = [
  { href: "/about", label: "About" },
  { href: "/projects", label: "Projects" },
  { href: "/contact", label: "Contact" },
];

const SERVICE_LINKS = [
  { href: "/services/construction", label: "Construction & Infrastructure" },
  { href: "/services/materials-equipment", label: "Materials & Equipment" },
  { href: "/services/energy", label: "Energy & Petroleum" },
  { href: "/services/manufacturing", label: "Manufacturing & Retail" },
];

export default function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => { setOpen(false); }, [pathname]);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 ${
        scrolled
          ? "border-white/10 bg-[#0a1020]/95 shadow-[0_8px_32px_rgba(0,0,0,0.4)] backdrop-blur-xl"
          : "border-white/6 bg-[#0f172a]/90 backdrop-blur-md"
      }`}
      style={{ 
        transition: 'background-color 300ms ease, border-color 300ms ease, box-shadow 300ms ease, backdrop-filter 300ms ease',
        backfaceVisibility: 'hidden',
        WebkitBackfaceVisibility: 'hidden'
      }}
    >
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between gap-6 px-4 py-3.5 md:py-4">
        {/* ── Logo ── */}
        <Link href="/" className="group flex items-center gap-2.5" aria-label="Lexicon Empire – home">
          {/* Animated Gold Diamond Mark */}
          <span className="relative flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-[#c7a559] to-[#b58f3e] shadow-[0_0_20px_rgba(199,165,89,0.45)] transition-all duration-500 group-hover:shadow-[0_0_35px_rgba(199,165,89,0.7)] group-hover:scale-105">
            <svg width="16" height="16" viewBox="0 0 14 14" fill="none" aria-hidden>
              <path d="M7 0.5L13.5 7L7 13.5L0.5 7L7 0.5Z" fill="#0a1020" />
            </svg>
            {/* Shine effect */}
            <span className="absolute inset-0 rounded-xl bg-gradient-to-br from-white/30 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
          </span>
          <span className="font-heading text-base font-bold tracking-wide leading-tight">
            Lexicon<br />
            <span className="bg-gradient-to-r from-[#c7a559] to-[#f4d8a2] bg-clip-text text-transparent">
              Empire
            </span>
          </span>
        </Link>

        {/* ── Desktop Nav ── */}
        <nav className="hidden items-center gap-1 md:flex" aria-label="Main navigation">
          {/* Services dropdown */}
          <div 
            className="group relative"
            ref={dropdownRef}
          >
            <button
              type="button"
              onClick={() => setDropdownOpen(!dropdownOpen)}
              onMouseEnter={() => setDropdownOpen(true)}
              className={`nav-link flex items-center gap-1.5 rounded-lg px-3.5 py-2.5 text-sm transition-all duration-300 ${
                dropdownOpen 
                  ? "text-white bg-white/10" 
                  : "text-white/80 hover:text-white hover:bg-white/[0.06]"
              }`}
            >
              Services
              <svg 
                width="10" 
                height="6" 
                viewBox="0 0 10 6" 
                fill="currentColor" 
                aria-hidden 
                className={`transition-transform duration-300 ${dropdownOpen ? "rotate-180" : ""}`}
              >
                <path d="M0 0.5L5 5.5L10 0.5H0Z" />
              </svg>
            </button>
            
            {/* Animated Dropdown */}
            <div 
              className={`absolute left-1/2 top-full mt-3 w-80 -translate-x-1/2 overflow-hidden rounded-2xl border border-white/12 bg-[#0f172a]/98 p-2 shadow-2xl backdrop-blur-xl transition-all duration-300 ${
                dropdownOpen 
                  ? "visible translate-y-0 opacity-100" 
                  : "invisible -translate-y-2 opacity-0"
              }`}
            >
              <div className="grid gap-1">
                {SERVICE_LINKS.map(({ href, label }, index) => (
                  <Link
                    key={href}
                    href={href}
                    onClick={() => setDropdownOpen(false)}
                    className={`group/link relative overflow-hidden rounded-xl px-4 py-3.5 text-sm transition-all duration-300 hover:pl-6 ${
                      pathname === href 
                        ? "bg-gradient-to-r from-[#c7a559]/20 to-transparent text-white" 
                        : "text-white/70 hover:bg-white/[0.06] hover:text-white"
                    }`}
                    style={{ 
                      animationDelay: dropdownOpen ? `${index * 50}ms` : '0ms' 
                    }}
                  >
                    <span className="relative z-10">{label}</span>
                    {/* Slide indicator */}
                    <span className="absolute left-2 top-1/2 h-1 w-0 -translate-y-1/2 rounded-full bg-[#c7a559] transition-all duration-300 group-hover/link:w-4" />
                  </Link>
                ))}
              </div>
              
              {/* Bottom accent line */}
              <div className="mt-2 h-px bg-gradient-to-r from-transparent via-[#c7a559]/30 to-transparent" />
            </div>
          </div>

          {NAV_LINKS.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              aria-current={pathname === href ? "page" : undefined}
              className={`relative rounded-lg px-3.5 py-2.5 text-sm transition-all duration-300 hover:bg-white/[0.06] ${
                pathname === href 
                  ? "text-white" 
                  : "text-white/80 hover:text-white"
              }`}
            >
              <span className="relative z-10">{label}</span>
              {pathname === href && (
                <span className="absolute bottom-1 left-1/2 h-0.5 w-6 -translate-x-1/2 rounded-full bg-[#c7a559]" />
              )}
            </Link>
          ))}

          {/* CTA Button */}
          <Link
            href="/contact"
            className="btn btn-gold ml-4 text-xs shadow-[0_4px_20px_rgba(199,165,89,0.35)] hover:shadow-[0_8px_30px_rgba(199,165,89,0.5)] hover:-translate-y-0.5"
          >
            <span className="relative z-10">Get a Quote</span>
          </Link>
        </nav>

        {/* ── Mobile Toggle ── */}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/20 text-white/80 transition-all duration-300 hover:border-white/40 hover:bg-white/8 md:hidden"
          aria-expanded={open}
          aria-label={open ? "Close menu" : "Open menu"}
        >
          <span className="sr-only">{open ? "Close" : "Menu"}</span>
          <div className="relative h-5 w-5">
            <span className={`absolute left-0 h-0.5 w-full bg-white transition-all duration-300 ${open ? "top-1/2 -translate-y-1/2 rotate(45deg)" : "top-0"}`} />
            <span className={`absolute left-0 top-1/2 h-0.5 w-full -translate-y-1/2 bg-white transition-all duration-300 ${open ? "opacity-0" : "opacity-100"}`} />
            <span className={`absolute left-0 h-0.5 w-full bg-white transition-all duration-300 ${open ? "top-1/2 -translate-y-1/2 -rotate(45deg)" : "bottom-0"}`} />
          </div>
        </button>
      </div>

      {/* ── Mobile Drawer ── */}
      <div
        className="relative md:hidden"
      >
        <div
          className={`absolute inset-x-0 origin-top overflow-hidden transition-[opacity,transform] duration-300 ease-out ${
            open 
              ? "visible translate-y-0 opacity-100" 
              : "invisible -translate-y-2 opacity-0"
          }`}
          style={{ transitionDelay: open ? '0ms' : '150ms' }}
        >
          <nav
            className="border-t border-white/10 bg-[#0a1020]/98 px-4 py-6 backdrop-blur-xl"
            aria-label="Mobile navigation"
          >
            <div className="mx-auto flex w-full max-w-6xl flex-col gap-1">
              <p className="mb-3 px-3 text-[0.65rem] font-bold uppercase tracking-widest text-[#c7a559]/70">Services</p>
              {SERVICE_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="rounded-xl px-4 py-3 text-sm text-white/80 transition-colors duration-200 hover:bg-white/[0.08] hover:text-white"
                >
                  {link.label}
                </Link>
              ))}
              
              <div className="my-4 border-t border-white/10" />
              
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="rounded-xl px-4 py-3 text-sm text-white/80 transition-colors duration-200 hover:bg-white/[0.08] hover:text-white"
                >
                  {link.label}
                </Link>
              ))}
              
              <Link
                href="/contact"
                className="btn btn-gold mt-6 w-full justify-center text-sm shadow-[0_4px_20px_rgba(199,165,89,0.35)]"
              >
                Get a Quote
              </Link>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}

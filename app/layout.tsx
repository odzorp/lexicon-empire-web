import type { Metadata } from "next";
import { Merriweather, Open_Sans } from "next/font/google";
import SiteHeader from "@/components/SiteHeader";
import Link from "next/link";
import "./globals.css";

const headingFont = Merriweather({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
});

const bodyFont = Open_Sans({
  variable: "--font-body",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Lexicon Empire – Building the Future, Fueling the Present",
    template: "%s | Lexicon Empire",
  },
  description:
    "Lexicon Empire is a premium Ghanaian conglomerate delivering world-class construction, energy distribution, materials supply, and manufacturing across West Africa.",
  icons: {
    icon: "/favicon.jpg",
    shortcut: "/favicon.jpg",
    apple: "/favicon.jpg",
  },
};

const FOOTER_SERVICES = [
  { href: "/services/construction", label: "Construction" },
  { href: "/services/materials-equipment", label: "Materials & Equipment" },
  { href: "/services/energy", label: "Energy & Petroleum" },
  { href: "/services/manufacturing", label: "Manufacturing & Retail" },
];

const FOOTER_COMPANY = [
  { href: "/about", label: "About Us" },
  { href: "/projects", label: "Projects" },
  { href: "/contact", label: "Contact" },
];

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${headingFont.variable} ${bodyFont.variable} h-full`}>
      <body className="app-shell min-h-full flex flex-col text-[#111827]">
        <SiteHeader />

        <main className="mx-auto w-full max-w-6xl flex-1 px-4 py-10 md:py-14">
          {children}
        </main>

        {/* ═══ FOOTER ═══ */}
        <footer className="relative mt-16 border-t border-white/8 bg-[#0a1020] text-white/75">
          {/* Decorative top gradient */}
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#c7a559]/40 to-transparent" />
          
          {/* Main footer grid */}
          <div className="mx-auto w-full max-w-6xl px-4 py-16">
            <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">

              {/* Brand column */}
              <div className="lg:col-span-1">
                <div className="flex items-center gap-3">
                  {/* Diamond logo with glow */}
                  <span className="relative flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-[#c7a559] to-[#b58f3e] shadow-[0_0_25px_rgba(199,165,89,0.5)]">
                    <svg width="18" height="18" viewBox="0 0 14 14" fill="none" aria-hidden>
                      <path d="M7 0.5L13.5 7L7 13.5L0.5 7L7 0.5Z" fill="#0a1020" />
                    </svg>
                  </span>
                  <span className="font-heading text-base font-bold tracking-wide text-white leading-tight">
                    Lexicon<br />
                    <span className="bg-gradient-to-r from-[#c7a559] to-[#f4d8a2] bg-clip-text text-transparent">
                      Empire
                    </span>
                  </span>
                </div>
                <p className="mt-5 text-sm leading-relaxed text-white/55">
                  Building, fueling, and sustaining excellence across Ghana since 2014. We deliver premium 
                  construction, energy, materials, and manufacturing solutions.
                </p>
                <div className="mt-6 flex items-center gap-3">
                  <span className="relative flex h-2.5 w-2.5 shrink-0">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75" />
                    <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-green-500" />
                  </span>
                  <p className="text-xs text-white/50 uppercase tracking-wider">Takoradi, Ghana</p>
                </div>
              </div>

              {/* Services column */}
              <div>
                <p className="mb-5 text-[0.7rem] font-bold uppercase tracking-widest text-[#c7a559]">Services</p>
                <ul className="space-y-3">
                  {FOOTER_SERVICES.map(({ href, label }) => (
                    <li key={href}>
                      <Link
                        href={href}
                        className="group inline-flex items-center gap-2 text-sm text-white/55 transition-all duration-300 hover:text-white hover:translate-x-1"
                      >
                        <span className="h-1 w-0 rounded-full bg-[#c7a559] transition-all duration-300 group-hover:w-3" />
                        {label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Company column */}
              <div>
                <p className="mb-5 text-[0.7rem] font-bold uppercase tracking-widest text-[#c7a559]">Company</p>
                <ul className="space-y-3">
                  {FOOTER_COMPANY.map(({ href, label }) => (
                    <li key={href}>
                      <Link
                        href={href}
                        className="group inline-flex items-center gap-2 text-sm text-white/55 transition-all duration-300 hover:text-white hover:translate-x-1"
                      >
                        <span className="h-1 w-0 rounded-full bg-[#c7a559] transition-all duration-300 group-hover:w-3" />
                        {label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Contact column */}
              <div>
                <p className="mb-5 text-[0.7rem] font-bold uppercase tracking-widest text-[#c7a559]">Get in Touch</p>
                <p className="text-sm text-white/55 leading-relaxed">
                  Have a project or partnership inquiry? Our team of experts responds within 24 hours.
                </p>
                <Link
                  href="/contact"
                  className="btn btn-gold mt-6 inline-flex text-xs shadow-[0_4px_20px_rgba(199,165,89,0.35)] hover:shadow-[0_8px_30px_rgba(199,165,89,0.5)] hover:-translate-y-0.5"
                >
                  Open Contact Form
                </Link>
              </div>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="border-t border-white/6">
            <div className="mx-auto flex w-full max-w-6xl flex-col items-center justify-between gap-4 px-4 py-6 text-xs text-white/40 sm:flex-row">
              <p className="flex items-center gap-2">
                <span>© {new Date().getFullYear()} Lexicon Empire.</span>
                <span className="hidden sm:inline">All rights reserved.</span>
              </p>
              <p className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-[#c7a559]/60" />
                <span>Takoradi, Ghana · West Africa</span>
              </p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import { Merriweather, Open_Sans } from "next/font/google";
import Link from "next/link";
import "./globals.css";

const headingFont = Merriweather({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["400", "700"],
});

const bodyFont = Open_Sans({
  variable: "--font-body",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Lexicon Empire",
  description: "Building the future, fueling the present.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${headingFont.variable} ${bodyFont.variable} h-full`}>
      <body className="app-shell min-h-full flex flex-col text-[#111827]">
        <SiteHeader />
        <main className="mx-auto w-full max-w-6xl flex-1 px-4 py-10 md:py-12">{children}</main>
        <footer className="mt-8 border-t border-white/10 bg-[#0f172a] px-4 py-8 text-sm text-white/80">
          <div className="mx-auto flex w-full max-w-6xl flex-col gap-4 md:flex-row md:justify-between">
            <p>Lexicon Empire - Building, Fueling, Sustaining Excellence.</p>
            <p>Takoradi, Ghana</p>
          </div>
        </footer>
      </body>
    </html>
  );
}

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-20 border-b border-white/10 bg-[#0f172a]/95 text-white backdrop-blur">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-4">
        <Link href="/" className="font-heading text-xl font-bold tracking-wide">
          Lexicon Empire
        </Link>
        <nav className="hidden gap-5 text-sm md:flex">
          <Link href="/about">About</Link>
          <div className="group relative">
            <Link href="/services/construction">Services</Link>
            <div className="invisible absolute left-0 top-full mt-3 w-72 rounded-lg border border-white/15 bg-[#111827] p-3 opacity-0 shadow-lg transition group-hover:visible group-hover:opacity-100">
              <p className="mb-2 text-xs uppercase tracking-widest text-[#bfa26a]">Our Verticals</p>
              <div className="grid gap-2">
                <Link href="/services/construction" className="rounded px-2 py-1 hover:bg-white/10">
                  Construction & Infrastructure
                </Link>
                <Link href="/services/materials-equipment" className="rounded px-2 py-1 hover:bg-white/10">
                  Materials & Equipment
                </Link>
                <Link href="/services/energy" className="rounded px-2 py-1 hover:bg-white/10">
                  Energy & Petroleum
                </Link>
                <Link href="/services/manufacturing" className="rounded px-2 py-1 hover:bg-white/10">
                  Manufacturing & Retail
                </Link>
              </div>
            </div>
          </div>
          <Link href="/projects">Projects</Link>
          <Link href="/contact">Contact</Link>
        </nav>
        <Link
          href="/contact"
          className="rounded-md border border-[#c7a559]/70 bg-[#c7a559] px-3 py-1.5 text-xs font-semibold text-black md:hidden"
        >
          Contact
        </Link>
      </div>
    </header>
  );
}

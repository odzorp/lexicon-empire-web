"use client";

import Link from "next/link";
import { useState } from "react";

export default function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-20 border-b border-white/10 bg-[#0f172a]/95 text-white backdrop-blur">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-4">
        <Link href="/" className="font-heading text-lg font-bold tracking-wide md:text-xl">
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

        <button
          type="button"
          onClick={() => setOpen((value) => !value)}
          className="rounded-md border border-white/30 px-3 py-1.5 text-xs font-semibold md:hidden"
          aria-expanded={open}
          aria-label="Toggle navigation menu"
        >
          {open ? "Close" : "Menu"}
        </button>
      </div>

      {open ? (
        <nav className="border-t border-white/10 bg-[#0f172a] px-4 py-3 md:hidden">
          <div className="mx-auto flex w-full max-w-6xl flex-col gap-2 text-sm">
            <Link href="/about" onClick={() => setOpen(false)} className="rounded px-2 py-1 hover:bg-white/10">
              About
            </Link>
            <Link href="/services/construction" onClick={() => setOpen(false)} className="rounded px-2 py-1 hover:bg-white/10">
              Construction
            </Link>
            <Link href="/services/materials-equipment" onClick={() => setOpen(false)} className="rounded px-2 py-1 hover:bg-white/10">
              Materials & Equipment
            </Link>
            <Link href="/services/energy" onClick={() => setOpen(false)} className="rounded px-2 py-1 hover:bg-white/10">
              Energy & Petroleum
            </Link>
            <Link href="/services/manufacturing" onClick={() => setOpen(false)} className="rounded px-2 py-1 hover:bg-white/10">
              Manufacturing & Retail
            </Link>
            <Link href="/projects" onClick={() => setOpen(false)} className="rounded px-2 py-1 hover:bg-white/10">
              Projects
            </Link>
            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="mt-1 rounded bg-[#c7a559] px-3 py-2 text-center font-semibold text-black"
            >
              Contact
            </Link>
          </div>
        </nav>
      ) : null}
    </header>
  );
}

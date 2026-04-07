import type { Metadata } from "next";
import { Merriweather, Open_Sans } from "next/font/google";
import SiteHeader from "@/components/SiteHeader";
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

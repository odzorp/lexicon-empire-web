import ContactForm from "@/components/ContactForm";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact | Lexicon Empire",
  description: "Contact Lexicon Empire for construction, materials, energy, and retail service inquiries.",
};

export default async function ContactPage({
  searchParams,
}: {
  searchParams: Promise<{ inquiry?: string }>;
}) {
  const params = await searchParams;
  const defaultInquiry = params.inquiry ?? "General Inquiry";

  return (
    <div className="space-y-8">
      <section className="section-card p-7 md:p-9">
        <p className="text-xs uppercase tracking-widest text-[#b58f3e]">Get in Touch</p>
        <h1 className="mt-2 font-heading text-4xl font-bold text-[#0f172a] md:text-5xl">Contact Us</h1>
        <p className="mt-4 max-w-3xl text-slate-700">
          Share your project or service request and our team will route it to the right department quickly.
        </p>
      </section>
      <section className="grid gap-6 md:grid-cols-2">
        <ContactForm defaultInquiry={defaultInquiry} />
        <div className="section-card space-y-4 p-6">
          <h2 className="font-heading text-2xl font-semibold">Direct Contacts</h2>
          <div className="space-y-2 text-slate-700">
            <p><span className="font-semibold text-[#0f172a]">Sales:</span> sales@lexiconempire.com</p>
            <p><span className="font-semibold text-[#0f172a]">HR:</span> hr@lexiconempire.com</p>
            <p><span className="font-semibold text-[#0f172a]">Support:</span> support@lexiconempire.com</p>
          </div>
          <div className="overflow-hidden rounded-lg border border-slate-200 bg-[#eef2f9]">
            <iframe
              title="Lexicon Empire HQ Map"
              src="https://www.google.com/maps?q=Takoradi%2C%20Ghana&output=embed"
              loading="lazy"
              className="h-56 w-full"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
          <div className="rounded-lg bg-[#0f172a] p-4 text-sm text-white">
            Business hours: Mon-Fri, 8:00 AM - 5:00 PM
          </div>
        </div>
      </section>
    </div>
  );
}

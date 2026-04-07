"use client";

import { FormEvent, useState } from "react";

type Props = {
  defaultInquiry?: string;
};

const inquiryOptions = [
  "General Inquiry",
  "Construction",
  "Machine Hiring",
  "Material Supply",
  "Petroleum/Energy",
];

export default function ContactForm({ defaultInquiry = "General Inquiry" }: Props) {
  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);
    const email = String(formData.get("email") ?? "").trim();
    const name = String(formData.get("name") ?? "").trim();
    const message = String(formData.get("message") ?? "").trim();
    const nextErrors: Record<string, string> = {};

    if (name.length < 2) nextErrors.name = "Please enter your full name.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) nextErrors.email = "Please enter a valid email address.";
    if (message.length < 10) nextErrors.message = "Message should be at least 10 characters.";

    setErrors(nextErrors);
    setStatus("");
    if (Object.keys(nextErrors).length > 0) return;
    setLoading(true);

    const payload = Object.fromEntries(formData.entries());

    const response = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    setLoading(false);
    if (!response.ok) {
      setStatus("We could not submit your inquiry. Please try again.");
      return;
    }

    setStatus("Thank you. Your inquiry has been received.");
    form.reset();
  }

  return (
    <form className="section-card grid gap-3 p-6" onSubmit={onSubmit}>
      <h2 className="font-heading text-2xl font-semibold text-[#0f172a]">Inquiry Form</h2>
      <input name="name" required placeholder="Name" className="rounded-md border border-slate-300 bg-white p-2.5 focus:border-[#b58f3e] focus:outline-none" />
      {errors.name ? <p className="text-xs text-red-700">{errors.name}</p> : null}
      <input name="email" type="email" required placeholder="Email" className="rounded-md border border-slate-300 bg-white p-2.5 focus:border-[#b58f3e] focus:outline-none" />
      {errors.email ? <p className="text-xs text-red-700">{errors.email}</p> : null}
      <input name="phone" placeholder="Phone" className="rounded-md border border-slate-300 bg-white p-2.5 focus:border-[#b58f3e] focus:outline-none" />
      <select name="inquiryType" defaultValue={defaultInquiry} className="rounded-md border border-slate-300 bg-white p-2.5 focus:border-[#b58f3e] focus:outline-none">
        {inquiryOptions.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
      <textarea name="message" required rows={5} placeholder="Message" className="rounded-md border border-slate-300 bg-white p-2.5 focus:border-[#b58f3e] focus:outline-none" />
      {errors.message ? <p className="text-xs text-red-700">{errors.message}</p> : null}
      <button
        type="submit"
        disabled={loading}
        className="rounded-md bg-[#0f172a] px-4 py-2.5 font-medium text-white transition hover:bg-[#1e293b] disabled:opacity-60"
      >
        {loading ? "Submitting..." : "Submit Inquiry"}
      </button>
      {status ? <p className="text-sm text-[#0f172a]">{status}</p> : null}
    </form>
  );
}

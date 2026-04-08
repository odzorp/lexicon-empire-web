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
  "Manufacturing & Retail",
];

export default function ContactForm({ defaultInquiry = "General Inquiry" }: Props) {
  const [status, setStatus] = useState<"" | "success" | "error">("");
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
      setStatus("error");
      return;
    }

    setStatus("success");
    form.reset();
  }

  return (
    <form
      id="contact-inquiry-form"
      className="section-card space-y-5 p-7 md:p-9"
      onSubmit={onSubmit}
      noValidate
    >
      <div>
        <span className="eyebrow">Inquiry Form</span>
        <div className="gold-rule" aria-hidden />
        <h2 className="font-heading text-2xl font-semibold text-[#0f172a]">Send Us a Message</h2>
        <p className="mt-1 text-sm text-[#64748b]">We respond to all inquiries within 24 hours.</p>
      </div>

      {/* Name */}
      <div>
        <label htmlFor="cf-name" className="form-label">Full Name</label>
        <input
          id="cf-name"
          name="name"
          required
          placeholder="e.g. Kwame Mensah"
          className={`form-input ${errors.name ? "border-red-400 focus:border-red-400 focus:shadow-[0_0_0_3px_rgba(239,68,68,0.15)]" : ""}`}
          aria-describedby={errors.name ? "cf-name-err" : undefined}
        />
        {errors.name && (
          <p id="cf-name-err" className="mt-1.5 text-xs text-red-600" role="alert">{errors.name}</p>
        )}
      </div>

      {/* Email */}
      <div>
        <label htmlFor="cf-email" className="form-label">Email Address</label>
        <input
          id="cf-email"
          name="email"
          type="email"
          required
          placeholder="you@yourcompany.com"
          className={`form-input ${errors.email ? "border-red-400 focus:border-red-400 focus:shadow-[0_0_0_3px_rgba(239,68,68,0.15)]" : ""}`}
          aria-describedby={errors.email ? "cf-email-err" : undefined}
        />
        {errors.email && (
          <p id="cf-email-err" className="mt-1.5 text-xs text-red-600" role="alert">{errors.email}</p>
        )}
      </div>

      {/* Phone */}
      <div>
        <label htmlFor="cf-phone" className="form-label">Phone <span className="font-normal normal-case tracking-normal text-[#94a3b8]">(optional)</span></label>
        <input
          id="cf-phone"
          name="phone"
          placeholder="+233 24 000 0000"
          className="form-input"
        />
      </div>

      {/* Inquiry type */}
      <div>
        <label htmlFor="cf-inquiry" className="form-label">Inquiry Type</label>
        <select
          id="cf-inquiry"
          name="inquiryType"
          defaultValue={defaultInquiry}
          className="form-input cursor-pointer"
        >
          {inquiryOptions.map((opt) => (
            <option key={opt} value={opt}>{opt}</option>
          ))}
        </select>
      </div>

      {/* Message */}
      <div>
        <label htmlFor="cf-message" className="form-label">Message</label>
        <textarea
          id="cf-message"
          name="message"
          required
          rows={5}
          placeholder="Describe your project or inquiry in brief..."
          className={`form-input resize-y ${errors.message ? "border-red-400 focus:border-red-400 focus:shadow-[0_0_0_3px_rgba(239,68,68,0.15)]" : ""}`}
          aria-describedby={errors.message ? "cf-message-err" : undefined}
        />
        {errors.message && (
          <p id="cf-message-err" className="mt-1.5 text-xs text-red-600" role="alert">{errors.message}</p>
        )}
      </div>

      {/* Submit */}
      <button
        id="cf-submit"
        type="submit"
        disabled={loading}
        className="btn btn-navy w-full justify-center py-3 text-sm disabled:opacity-55"
      >
        {loading ? (
          <span className="flex items-center gap-2">
            <svg className="h-4 w-4 animate-spin" viewBox="0 0 24 24" fill="none" aria-hidden>
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z" />
            </svg>
            Submitting…
          </span>
        ) : "Submit Inquiry"}
      </button>

      {/* Status messages */}
      {status === "success" && (
        <div className="flex items-center gap-2.5 rounded-xl border border-green-200 bg-green-50 px-4 py-3 text-sm text-green-800" role="alert">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor" aria-hidden><path d="M8 0a8 8 0 100 16A8 8 0 008 0zm3.646 5.146l-4.5 4.5a.5.5 0 01-.707 0l-2-2a.5.5 0 01.707-.707L6.793 8.586l4.146-4.147a.5.5 0 01.707.707z"/></svg>
          Thank you — your inquiry has been received. We&apos;ll be in touch within 24 hours.
        </div>
      )}
      {status === "error" && (
        <div className="flex items-center gap-2.5 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-800" role="alert">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor" aria-hidden><path d="M8 0a8 8 0 100 16A8 8 0 008 0zm1 11H7V9h2v2zm0-4H7V5h2v2z"/></svg>
          Something went wrong. Please try again or email us directly.
        </div>
      )}
    </form>
  );
}

"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import FadeIn from "./FadeIn";

const clientTypes = [
  "Fintech founder",
  "RIA or wealth management firm",
  "Alternative investment firm",
  "Financial services company",
  "Tech founder (non-finance)",
  "Other",
];

export default function InquiryForm() {
  const [selected, setSelected] = useState<string>("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    await fetch("https://formspree.io/f/xbdqjpvq", {
      method: "POST",
      body: data,
      headers: { Accept: "application/json" },
    });
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <section id="inquiry" className="bg-[#f5f4f2] py-20 px-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.45, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="max-w-2xl mx-auto text-center"
        >
          <div className="w-14 h-14 rounded-full bg-[#c9a96e] flex items-center justify-center mx-auto mb-6">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path
                d="M5 12l4.5 4.5L19 7"
                stroke="#0a0a0a"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <h2 className="text-[#0a0a0a] text-2xl font-bold mb-3">
            We&apos;re on it.
          </h2>
          <p className="text-gray-500">
            Thanks for reaching out. We&apos;ll be in touch within 48 hours.
          </p>
        </motion.div>
      </section>
    );
  }

  return (
    <section id="inquiry" className="bg-[#f5f4f2] py-20 px-6">
      <div className="max-w-2xl mx-auto">
        <FadeIn>
          <h2 className="text-[#0a0a0a] text-3xl md:text-4xl font-bold tracking-tight mb-3">
            Let&apos;s Talk
          </h2>
          <p className="text-gray-500 text-base mb-10">
            We work with a small number of clients at a time. Fill this out and
            we&apos;ll be in touch within 48 hours.
          </p>
        </FadeIn>

        <FadeIn delay={0.1}>
          <form onSubmit={handleSubmit} className="flex flex-col gap-6">
            {/* Name */}
            <div className="flex flex-col gap-1.5">
              <label
                htmlFor="name"
                className="text-[#0a0a0a] text-sm font-medium"
              >
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                placeholder="Your name"
                className="bg-white border border-gray-200 text-[#0a0a0a] text-sm px-4 py-3 outline-none focus:border-[#c9a96e] placeholder-gray-400 transition-colors duration-200"
              />
            </div>

            {/* Email */}
            <div className="flex flex-col gap-1.5">
              <label
                htmlFor="email"
                className="text-[#0a0a0a] text-sm font-medium"
              >
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                placeholder="you@company.com"
                className="bg-white border border-gray-200 text-[#0a0a0a] text-sm px-4 py-3 outline-none focus:border-[#c9a96e] placeholder-gray-400 transition-colors duration-200"
              />
            </div>

            {/* Company */}
            <div className="flex flex-col gap-1.5">
              <label
                htmlFor="company"
                className="text-[#0a0a0a] text-sm font-medium"
              >
                Company or Firm Name
              </label>
              <input
                id="company"
                name="company"
                type="text"
                required
                placeholder="Your company or firm"
                className="bg-white border border-gray-200 text-[#0a0a0a] text-sm px-4 py-3 outline-none focus:border-[#c9a96e] placeholder-gray-400 transition-colors duration-200"
              />
            </div>

            {/* Radio group */}
            <div className="flex flex-col gap-3">
              <p className="text-[#0a0a0a] text-sm font-medium">
                What best describes you?
              </p>
              <div className="flex flex-col gap-2.5">
                {clientTypes.map((type) => (
                  <label
                    key={type}
                    className="flex items-center gap-3 cursor-pointer group"
                  >
                    <div
                      className={`w-4 h-4 rounded-full border-2 flex items-center justify-center shrink-0 transition-colors duration-150 ${
                        selected === type
                          ? "border-[#c9a96e]"
                          : "border-gray-300 group-hover:border-gray-400"
                      }`}
                      onClick={() => setSelected(type)}
                    >
                      {selected === type && (
                        <div className="w-2 h-2 rounded-full bg-[#c9a96e]" />
                      )}
                    </div>
                    <input
                      type="radio"
                      name="clientType"
                      value={type}
                      checked={selected === type}
                      onChange={() => setSelected(type)}
                      className="sr-only"
                    />
                    <span className="text-gray-600 text-sm">{type}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Textarea */}
            <div className="flex flex-col gap-1.5">
              <label
                htmlFor="message"
                className="text-[#0a0a0a] text-sm font-medium"
              >
                What does your marketing need to do that it isn&apos;t doing right now?
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                placeholder="Tell us what's not working — or what you're trying to make happen."
                className="bg-white border border-gray-200 text-[#0a0a0a] text-sm px-4 py-3 outline-none focus:border-[#c9a96e] placeholder-gray-400 resize-vertical transition-colors duration-200"
              />
            </div>

            {/* Submit */}
            <div>
              <button
                type="submit"
                className="btn-gold bg-[#c9a96e] text-[#0a0a0a] font-semibold text-sm px-8 py-3.5 hover:bg-[#b8945a] w-full sm:w-auto"
              >
                Submit — we&apos;ll be in touch
              </button>
            </div>
          </form>
        </FadeIn>
      </div>
    </section>
  );
}

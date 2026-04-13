"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative bg-[#0a0a0a] pt-32 pb-24 px-6 overflow-hidden">

      {/* ── Geometric SVG background ── */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          {/* Fine 40-px grid */}
          <pattern
            id="hero-grid-sm"
            width="40"
            height="40"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M 40 0 L 0 0 0 40"
              fill="none"
              stroke="rgba(201,169,110,0.055)"
              strokeWidth="0.5"
            />
          </pattern>
          {/* Coarse 200-px grid */}
          <pattern
            id="hero-grid-lg"
            width="200"
            height="200"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M 200 0 L 0 0 0 200"
              fill="none"
              stroke="rgba(201,169,110,0.09)"
              strokeWidth="0.75"
            />
          </pattern>
        </defs>

        {/* Grid layers */}
        <rect width="100%" height="100%" fill="url(#hero-grid-sm)" />
        <rect width="100%" height="100%" fill="url(#hero-grid-lg)" />

        {/* Diagonal accent lines */}
        <line
          x1="-2%" y1="105%"
          x2="58%"  y2="-3%"
          stroke="rgba(201,169,110,0.08)"
          strokeWidth="1"
        />
        <line
          x1="18%"  y1="105%"
          x2="80%"  y2="-3%"
          stroke="rgba(201,169,110,0.045)"
          strokeWidth="1"
        />

        {/* Large polygon outline — upper-left anchor */}
        <polygon
          points="0,0 420,0 0,260"
          fill="none"
          stroke="rgba(201,169,110,0.07)"
          strokeWidth="1"
        />
        {/* Filled inner triangle — very faint */}
        <polygon
          points="0,0 200,0 0,125"
          fill="rgba(201,169,110,0.025)"
        />

        {/* Right-edge polygon shape */}
        <polygon
          points="100%,0 100%,60% 70%,0"
          fill="rgba(201,169,110,0.018)"
        />
      </svg>

      {/* ── Ambient gold radial glow (animated) ── */}
      <motion.div
        aria-hidden="true"
        className="absolute pointer-events-none"
        style={{
          top: "-10%",
          left: "-8%",
          width: "55%",
          height: "120%",
          background:
            "radial-gradient(ellipse, rgba(201,169,110,0.09) 0%, rgba(201,169,110,0.03) 45%, transparent 70%)",
        }}
        animate={{ scale: [1, 1.08, 1], opacity: [0.75, 1, 0.75] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* ── Content ── */}
      <div className="relative max-w-4xl mx-auto">

        {/* Vertical gold accent line */}
        <div
          className="hidden md:block absolute w-[2px]"
          style={{
            left: "-28px",
            top: "2px",
            height: "68%",
            background:
              "linear-gradient(to bottom, #c9a96e 0%, rgba(201,169,110,0.45) 55%, transparent 100%)",
          }}
          aria-hidden="true"
        />

        {/* Eyebrow */}
        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="text-[#c9a96e] text-xs font-semibold uppercase tracking-[0.15em] mb-6"
        >
          Finance + Tech Marketing · Built for Hard Markets
        </motion.p>

        {/* H1 */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, ease: [0.25, 0.46, 0.45, 0.94], delay: 0.1 }}
          className="text-white text-4xl md:text-6xl font-bold leading-tight tracking-tight mb-6"
        >
          Your Story. Delivered to Your Market.
        </motion.h1>

        {/* Subhead */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, ease: [0.25, 0.46, 0.45, 0.94], delay: 0.2 }}
          className="text-gray-400 text-lg md:text-xl font-light leading-relaxed max-w-2xl mb-10"
        >
          Fintech founders and financial firms don&apos;t need a generalist. They
          need someone who already understands the market, speaks the language,
          and knows how to make compliance and creativity coexist. That&apos;s us.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, ease: [0.25, 0.46, 0.45, 0.94], delay: 0.32 }}
          className="flex flex-col sm:flex-row gap-4"
        >
          <a
            href="#inquiry"
            className="btn-gold bg-[#c9a96e] text-[#0a0a0a] font-semibold px-7 py-3.5 text-sm hover:bg-[#b8945a] text-center"
          >
            Work With Us
          </a>
          <a
            href="#services"
            className="btn-outline border border-[#3a3a3a] text-white font-semibold px-7 py-3.5 text-sm hover:border-[#c9a96e] hover:text-[#c9a96e] text-center"
          >
            See What We Do
          </a>
        </motion.div>
      </div>
    </section>
  );
}

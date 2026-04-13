"use client";

import { motion } from "framer-motion";

/**
 * EKG waveform path — one full period in viewBox "0 0 1000 100"
 * Baseline: y=50. Spike peak: y=2. All events clustered in x 370–616.
 *
 * Anatomy (left → right):
 *   0–370   flat baseline
 *   370–410  P-wave (small rounded hump, Q ctrl at y=10 → peak ≈ y=30)
 *   410–465  flat PR interval
 *   465–478  Q dip (y=63)
 *   478–487  R spike (y=2) — the sharp vertical peak
 *   487–500  S dip (y=67)
 *   500–515  recovery to baseline
 *   515–540  flat ST segment
 *   540–616  T-wave (symmetric cubic, peak ≈ y=23)
 *   616–1000 long flat return
 */
const EKG_PATH =
  "M 0 50 L 370 50 Q 387 10 410 50 L 465 50 L 478 63 L 487 2 L 500 67 L 515 50 L 540 50 C 556 14 594 14 616 50 L 1000 50";

export default function EKGLine() {
  return (
    /*
     * Container: full width, fixed 130 px tall, centered vertically inside the section.
     * overflow-hidden clips the 300%-wide scrolling div to just what's visible.
     */
    <div
      className="absolute left-0 right-0 overflow-hidden pointer-events-none select-none"
      style={{
        height: 130,
        top: "50%",
        transform: "translateY(-50%)",
      }}
      aria-hidden="true"
    >
      {/*
       * The scrolling strip is 300% of the visible container width, holding 3 identical
       * SVG periods side-by-side. Animating x from 0 → -33.333% (of self) = -100% of
       * parent, so exactly one period scrolls past per cycle → seamless loop.
       *
       * Duration 1.8 s → visual ~33 BPM. Steady, ambient, unmistakably alive.
       */}
      <motion.div
        style={{ display: "flex", width: "300%", height: "100%" }}
        animate={{ x: ["0%", "-33.333%"] }}
        transition={{
          duration: 1.8,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        {[0, 1, 2].map((i) => (
          <svg
            key={i}
            viewBox="0 0 1000 100"
            preserveAspectRatio="none"
            style={{ flex: "1 1 0", height: "100%" }}
          >
            {/* Soft outer glow — wider stroke, very low opacity */}
            <path
              d={EKG_PATH}
              stroke="rgba(201,169,110,0.07)"
              strokeWidth="10"
              fill="none"
              vectorEffect="non-scaling-stroke"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            {/* Core line */}
            <path
              d={EKG_PATH}
              stroke="rgba(201,169,110,0.22)"
              strokeWidth="1.75"
              fill="none"
              vectorEffect="non-scaling-stroke"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        ))}
      </motion.div>
    </div>
  );
}

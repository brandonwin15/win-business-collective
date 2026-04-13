import FadeIn from "./FadeIn";
import CountUp from "./CountUp";

const stats = [
  {
    to: 5,
    prefix: "$",
    suffix: "M+",
    label: "Capital influenced through positioning and outreach",
  },
  {
    to: 18,
    prefix: "",
    suffix: "%",
    label: "MRR growth driven at a Series B fintech company",
  },
  {
    to: 70,
    prefix: "",
    suffix: "+",
    label: "Sales and marketing assets shipped in one year",
  },
];

export default function Proof() {
  return (
    <section className="relative bg-[#0a0a0a] py-20 px-6 overflow-hidden">

      {/* Watermark — large faded $ symbol */}
      <div
        className="absolute inset-0 flex items-center justify-end overflow-hidden pointer-events-none select-none"
        aria-hidden="true"
      >
        <span
          className="text-white font-black select-none leading-none"
          style={{
            fontSize: "clamp(220px, 28vw, 380px)",
            opacity: 0.028,
            letterSpacing: "-0.06em",
            transform: "translateX(12%) translateY(-5%)",
          }}
        >
          $
        </span>
      </div>

      <div className="relative max-w-6xl mx-auto">
        <FadeIn>
          <p className="text-[#c9a96e] text-xs font-semibold uppercase tracking-[0.15em] mb-12">
            Proof of Work
          </p>
        </FadeIn>

        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {stats.map((stat, i) => (
            <FadeIn key={stat.label} delay={0.1 + i * 0.12}>
              <div className="flex flex-col gap-3">
                <CountUp
                  to={stat.to}
                  prefix={stat.prefix}
                  suffix={stat.suffix}
                  duration={2.2}
                  className="text-white text-4xl md:text-5xl font-bold tracking-tight"
                />
                <p className="text-gray-400 text-sm leading-relaxed max-w-[220px]">
                  {stat.label}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={0.45}>
          <p className="text-[#c9a96e] text-xs font-semibold tracking-widest uppercase border-t border-[#1e1e1e] pt-8">
            FINRA Series 7 · Series 66 · $90M AUM practice background
          </p>
        </FadeIn>
      </div>
    </section>
  );
}

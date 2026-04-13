import FadeIn from "./FadeIn";
import EKGLine from "./EKGLine";

export default function About() {
  return (
    <section
      id="about"
      className="relative py-20 px-6 overflow-hidden"
      style={{ background: "#0a0a0a" }}
    >
      {/* EKG heartbeat line — spans the full section width behind all content */}
      <EKGLine />

      <div className="relative z-10 max-w-3xl mx-auto">

        {/* Section label */}
        <FadeIn>
          <p className="text-[#c9a96e] text-xs font-semibold uppercase tracking-[0.15em] mb-6">
            About
          </p>
        </FadeIn>

        {/* Tagline */}
        <FadeIn delay={0.08}>
          <p
            className="mb-10 text-[#c9a96e] text-sm tracking-[0.18em] uppercase"
            style={{ fontVariant: "small-caps" }}
          >
            The heartbeat of your business isn&apos;t AI. It&apos;s you.
          </p>
        </FadeIn>

        {/* Founder block */}
        <FadeIn delay={0.15}>
          <div className="relative">
            {/* Gold top accent line */}
            <div
              className="absolute left-0 right-0 top-0"
              style={{
                height: "1px",
                background:
                  "linear-gradient(to right, #c9a96e, rgba(201,169,110,0.35) 60%, transparent 90%)",
              }}
              aria-hidden="true"
            />

            {/* Content */}
            <div className="pt-8">

              {/* Avatar + name */}
              <div className="flex items-center gap-5 mb-7">
                <div className="w-14 h-14 rounded-full bg-[#c9a96e] flex items-center justify-center shrink-0">
                  <span className="text-[#0a0a0a] font-bold text-lg tracking-tight">
                    BW
                  </span>
                </div>
                <div>
                  <p className="text-white font-semibold text-lg">Brandon Win</p>
                  <p className="text-[#c9a96e] text-sm font-medium">
                    Series 7 · Series 66 · 10 Years Finance and PMM
                  </p>
                  <p className="text-gray-500 text-sm">Founder</p>
                </div>
              </div>

              {/* Bio */}
              <p className="text-gray-300 text-[16px] leading-relaxed">
                I spent a decade at the intersection of financial services and product
                marketing. I&apos;ve sat in advisor reviews, helped raise capital, and built
                GTM strategies for products that were hard to explain to buyers who
                were hard to impress. I built Win Business Collective for founders and
                firms who are done sounding like everyone else.
              </p>
            </div>
          </div>
        </FadeIn>

      </div>
    </section>
  );
}

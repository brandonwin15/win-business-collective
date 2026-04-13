import FadeIn from "./FadeIn";

export default function WhoWeHelp() {
  return (
    <section id="who-we-help" className="dot-grid bg-white py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <FadeIn>
          <p className="text-[#c9a96e] text-xs font-semibold uppercase tracking-[0.15em] mb-4">
            Who We Help
          </p>
          <h2 className="text-[#0a0a0a] text-3xl md:text-4xl font-bold tracking-tight mb-12 max-w-xl">
            Built for the people building what&apos;s next in finance.
          </h2>
        </FadeIn>

        {/* Cards */}
        <div className="grid md:grid-cols-2 gap-6">
          <FadeIn delay={0.1}>
            <div className="card-lift border-l-[3px] border-[#c9a96e] pl-6 py-2">
              <h3 className="text-[#0a0a0a] text-xl font-semibold mb-3">
                Tech Founders in Financial Markets
              </h3>
              <p className="text-gray-600 leading-relaxed">
                You move fast. Your buyers don&apos;t forgive sloppy positioning. We
                close the gap between what you built and why the market should
                care.
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.2}>
            <div className="card-lift border-l-[3px] border-[#c9a96e] pl-6 py-2">
              <h3 className="text-[#0a0a0a] text-xl font-semibold mb-3">
                Financial Firms Ready to Stand Out
              </h3>
              <p className="text-gray-600 leading-relaxed">
                RIAs, alternative investment firms, and financial services
                companies who know their marketing looks like everyone else&apos;s.
                And are done with it.
              </p>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}

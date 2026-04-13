import FadeIn from "./FadeIn";

const tiers = [
  {
    name: "Foundation",
    price: "$1,000",
    period: "/mo",
    features: [
      "Messaging and positioning",
      "Core brand narrative",
      "One content channel",
      "Monthly strategy call",
    ],
    featured: false,
    cta: "Get Started",
  },
  {
    name: "Growth",
    price: "$2,000",
    period: "/mo",
    features: [
      "Everything in Foundation",
      "Full content strategy",
      "GTM and sales assets",
      "Bi-weekly calls",
    ],
    featured: true,
    cta: "Get Started",
  },
  {
    name: "Partner",
    price: "Custom",
    period: "/ scope-based",
    features: [
      "Embedded support",
      "Full GTM buildout",
      "Compliance-aware strategy",
      "Dedicated availability",
    ],
    featured: false,
    cta: "Let's Talk",
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="bg-[#f5f4f2] py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <FadeIn>
          <p className="text-[#c9a96e] text-xs font-semibold uppercase tracking-[0.15em] mb-4">
            Pricing
          </p>
          <h2 className="text-[#0a0a0a] text-3xl md:text-4xl font-bold tracking-tight mb-12 max-w-lg">
            Clear pricing. No retainers that don&apos;t deliver.
          </h2>
        </FadeIn>

        <div className="grid md:grid-cols-3 gap-6 mb-10">
          {tiers.map((tier, i) => (
            <FadeIn key={tier.name} delay={0.1 + i * 0.1}>
              <div
                className={`card-lift flex flex-col p-8 h-full ${
                  tier.featured
                    ? "bg-[#111111] text-white card-lift-dark"
                    : "bg-white text-[#0a0a0a]"
                }`}
                style={{
                  borderTop: tier.featured
                    ? "2px solid rgba(201,169,110,0.75)"
                    : "2px solid rgba(201,169,110,0.38)",
                }}
              >
                {tier.featured && (
                  <span className="text-[#c9a96e] text-xs font-semibold uppercase tracking-widest mb-4">
                    Most Popular
                  </span>
                )}
                <h3
                  className={`text-lg font-semibold mb-1 ${
                    tier.featured ? "text-white" : "text-[#0a0a0a]"
                  }`}
                >
                  {tier.name}
                </h3>
                <div className="flex items-baseline gap-1 mb-6">
                  <span
                    className={`text-3xl font-bold ${
                      tier.featured ? "text-white" : "text-[#0a0a0a]"
                    }`}
                  >
                    {tier.price}
                  </span>
                  <span
                    className={`text-sm ${
                      tier.featured ? "text-gray-400" : "text-gray-500"
                    }`}
                  >
                    {tier.period}
                  </span>
                </div>

                <ul className="flex flex-col gap-3 mb-8 flex-1">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <svg
                        className="mt-0.5 shrink-0"
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                      >
                        <path
                          d="M3 8l3.5 3.5L13 4.5"
                          stroke="#c9a96e"
                          strokeWidth="1.75"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      <span
                        className={`text-sm leading-snug ${
                          tier.featured ? "text-gray-300" : "text-gray-600"
                        }`}
                      >
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                <a
                  href="#inquiry"
                  className={`btn-gold text-sm font-semibold py-3 text-center transition-colors ${
                    tier.featured
                      ? "bg-[#c9a96e] text-[#0a0a0a] hover:bg-[#b8945a]"
                      : "border border-[#0a0a0a] text-[#0a0a0a] hover:bg-[#0a0a0a] hover:text-white"
                  }`}
                >
                  {tier.cta}
                </a>
              </div>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={0.4}>
          <p className="text-gray-500 text-sm text-center">
            Not sure which fits? Fill out the form below and we&apos;ll figure it out
            together.
          </p>
        </FadeIn>
      </div>
    </section>
  );
}

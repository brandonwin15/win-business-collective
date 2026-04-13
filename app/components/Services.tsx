import FadeIn from "./FadeIn";

const services = [
  {
    number: "01",
    title: "Story and Positioning",
    description:
      "Find the message that makes your buyers stop, lean in, and actually get it.",
  },
  {
    number: "02",
    title: "Compliant Content Strategy",
    description:
      "Bold marketing that doesn't make your compliance officer's eye twitch. We know the lines.",
  },
  {
    number: "03",
    title: "GTM and Growth Assets",
    description:
      "The decks, emails, and collateral that move your deals forward. Done for you.",
  },
];

export default function Services() {
  return (
    <section id="services" className="dot-grid bg-white py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <FadeIn>
          <p className="text-[#c9a96e] text-xs font-semibold uppercase tracking-[0.15em] mb-4">
            What We Do
          </p>
          <h2 className="text-[#0a0a0a] text-3xl md:text-4xl font-bold tracking-tight mb-12 max-w-lg">
            Three ways we make your marketing work harder.
          </h2>
        </FadeIn>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, i) => (
            <FadeIn key={service.number} delay={0.1 + i * 0.1}>
              <div
                className="card-lift flex flex-col gap-4 p-6 bg-white border border-gray-100 shadow-sm"
                style={{ borderTop: "2px solid rgba(201,169,110,0.45)" }}
              >
                <span className="text-[#c9a96e] text-sm font-semibold tracking-widest">
                  {service.number}
                </span>
                <h3 className="text-[#0a0a0a] text-xl font-semibold leading-snug">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed text-[15px]">
                  {service.description}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

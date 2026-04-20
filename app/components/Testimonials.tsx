import FadeIn from "./FadeIn";

const testimonials = [
  {
    name: "Shruti Gupta",
    title: "Founder, Pollsee",
    quote:
      "Working with this team has been a game changer. They're uniquely good at going from 0 to 1, especially when the brief is ambiguous and the product is still evolving. In early stage chaos, when positioning shifts weekly and priorities move fast, they don't freeze or overprocess. They lean in, ask sharp questions, and turn half-formed ideas into clear narratives and execution. If you're building in that messy, formative stage where everything is changing, this is the kind of marketing and GTM partner you want. They move fast, think strategically, and aren't afraid of a blank page.",
  },
  {
    name: "Marjorie Wang",
    title: "CEO / CCO, Wealthhouse Advisors",
    quote:
      "Brandon helped us build our website and marketing material from scratch. We were able to tell him our vision and he was able to navigate the complexities to get it compliant while getting our message across. The work he does is thoughtful, efficient, and easy to implement into our business. Would definitely recommend him for getting things started with not a lot of expertise for our internal teams.",
  },
];

export default function Testimonials() {
  return (
    <section className="bg-[#f5f4f2] py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <FadeIn>
          <p className="text-[#c9a96e] text-xs font-semibold uppercase tracking-[0.15em] mb-4">
            What Clients Say
          </p>
          <h2 className="text-[#0a0a0a] text-3xl md:text-4xl font-bold tracking-tight mb-12 max-w-lg">
            Straight from the people we&apos;ve worked with.
          </h2>
        </FadeIn>

        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((t, i) => (
            <FadeIn key={t.name} delay={0.1 + i * 0.12}>
              <div
                className="card-lift flex flex-col gap-5 p-8 bg-white border border-gray-100 shadow-sm"
                style={{ borderTop: "2px solid rgba(201,169,110,0.45)" }}
              >
                {/* Quote mark */}
                <span
                  className="text-[#c9a96e] font-bold leading-none select-none"
                  style={{ fontSize: "3rem", lineHeight: 1 }}
                  aria-hidden="true"
                >
                  &ldquo;
                </span>

                <p className="text-gray-600 leading-relaxed text-[15px] flex-1">
                  {t.quote}
                </p>

                {/* Divider */}
                <div className="border-t border-gray-100 pt-5">
                  <p className="text-[#0a0a0a] font-semibold text-sm">{t.name}</p>
                  <p className="text-[#c9a96e] text-sm font-medium mt-0.5">{t.title}</p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

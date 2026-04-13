import FadeIn from "./FadeIn";

export default function TheProblem() {
  return (
    <section className="bg-[#f5f4f2] py-20 px-6">
      <div className="max-w-3xl mx-auto">
        <FadeIn>
          <p className="text-[#c9a96e] text-xs font-semibold uppercase tracking-[0.15em] mb-6">
            The Problem
          </p>
          <h2 className="text-[#0a0a0a] text-3xl md:text-4xl font-bold tracking-tight leading-tight mb-8">
            Most founders have a vision. The market just can&apos;t always see it.
          </h2>
        </FadeIn>

        <FadeIn delay={0.1}>
          <p className="text-gray-600 text-lg leading-relaxed mb-10">
            You know your product and services inside and out. The problem isn&apos;t
            what you built. It&apos;s that the story hasn&apos;t caught up to the vision
            yet. In a world where everyone is producing AI-generated noise, buyers
            are more skeptical and more distracted than ever.
          </p>
        </FadeIn>

        <FadeIn delay={0.18}>
          <blockquote className="border-l-[3px] border-[#c9a96e] pl-6 my-10">
            <p className="text-[#0a0a0a] text-xl md:text-2xl font-medium leading-snug italic">
              &ldquo;The founders who win are the ones whose market actually understands
              what they do and why it matters.&rdquo;
            </p>
          </blockquote>
        </FadeIn>

        <FadeIn delay={0.26}>
          <p className="text-gray-600 text-lg leading-relaxed">
            We simplify your marketing down to what resonates. We extract the
            vision, shape it into a story your market can grab onto, and help you
            show up with focus instead of volume. You keep building. We make sure
            the right people understand what they&apos;re looking at.
          </p>
        </FadeIn>
      </div>
    </section>
  );
}

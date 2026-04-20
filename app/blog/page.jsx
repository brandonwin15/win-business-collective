import Link from "next/link";
import { getAllPosts } from "../../lib/posts";

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <main
      style={{ fontFamily: "'DM Sans', sans-serif" }}
      className="min-h-screen bg-[#0d0d0d] text-[#f0ece4]"
    >
      {/* ── HERO ───────────────────────────────────── */}
      <section className="relative px-6 pt-28 pb-20 md:px-16 lg:px-24 overflow-hidden">
        {/* Background accent */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -top-32 -right-32 w-[520px] h-[520px] rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(196,163,100,0.12) 0%, transparent 70%)",
          }}
        />
        <p className="text-xs tracking-[0.25em] uppercase text-[#c4a364] mb-6 font-medium">
          Win Business Collective
        </p>
        <h1
          style={{ fontFamily: "'Playfair Display', serif" }}
          className="text-5xl md:text-7xl font-black leading-[1.02] max-w-3xl"
        >
          Blogs &amp;{" "}
          <span className="italic text-[#c4a364]">Hot Takes</span>
        </h1>
        <p className="mt-6 max-w-lg text-[#a09a90] text-lg leading-relaxed font-light">
          Marketing strategy, AI done right, and the things nobody in your
          industry wants to say out loud.
        </p>

        {/* Decorative rule */}
        <div className="mt-14 h-px w-full bg-gradient-to-r from-[#c4a364]/40 via-[#c4a364]/10 to-transparent" />
      </section>

      {/* ── LET'S TALK CTA ─────────────────────────── */}
      <section className="px-6 md:px-16 lg:px-24 pb-20">
        <div
          className="relative rounded-2xl overflow-hidden px-10 py-14 md:px-16 md:py-16"
          style={{
            background:
              "linear-gradient(135deg, #1a1710 0%, #111108 60%, #0d0d0b 100%)",
            border: "1px solid rgba(196,163,100,0.25)",
          }}
        >
          {/* Corner accent */}
          <div
            aria-hidden="true"
            className="absolute top-0 right-0 w-64 h-64 opacity-20"
            style={{
              background:
                "radial-gradient(circle at top right, #c4a364 0%, transparent 65%)",
            }}
          />

          <div className="relative z-10 flex flex-col md:flex-row md:items-center md:justify-between gap-8">
            <div className="max-w-lg">
              <p className="text-xs tracking-[0.2em] uppercase text-[#c4a364] mb-3 font-medium">
                Ready to fix your messaging?
              </p>
              <h2
                style={{ fontFamily: "'Playfair Display', serif" }}
                className="text-3xl md:text-4xl font-bold leading-snug"
              >
                Let&apos;s Talk.
              </h2>
              <p className="mt-4 text-[#a09a90] leading-relaxed font-light">
                30 minutes. No deck, no pitch. Just an honest conversation about
                where your marketing is leaking revenue — and what to do about it.
              </p>
            </div>
            <div className="shrink-0">
              <a
                href="/#inquiry"
                className="inline-block px-8 py-4 rounded-lg text-sm font-medium tracking-wide transition-all duration-200 bg-[#c4a364] hover:bg-[#d4b574] text-[#0d0d0d]"
              >
                Book a Call →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── RECENT POSTS ───────────────────────────── */}
      <section className="px-6 md:px-16 lg:px-24 pb-28">
        <div className="flex items-center gap-4 mb-12">
          <span className="w-6 h-px bg-[#c4a364]" />
          <p className="text-xs tracking-[0.2em] uppercase text-[#c4a364] font-medium">
            Recent Posts
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {posts.map((post, i) => (
            <article
              key={post.slug}
              className="group relative flex flex-col rounded-xl overflow-hidden transition-transform duration-300 hover:-translate-y-1"
              style={{
                background: "#111111",
                border: "1px solid rgba(255,255,255,0.07)",
              }}
            >
              {/* Top accent bar */}
              <div
                className="h-[3px] w-full"
                style={{
                  background:
                    i === 0
                      ? "#c4a364"
                      : i === 1
                      ? "rgba(196,163,100,0.5)"
                      : "rgba(196,163,100,0.25)",
                }}
              />

              <div className="flex flex-col flex-1 p-7">
                <div className="flex items-center justify-between mb-5">
                  <span
                    className="text-[10px] tracking-[0.18em] uppercase font-medium px-2.5 py-1 rounded-sm"
                    style={{
                      background: "rgba(196,163,100,0.1)",
                      color: "#c4a364",
                    }}
                  >
                    {post.tag}
                  </span>
                  <span className="text-[11px] text-[#5a544e]">{post.date}</span>
                </div>

                <h3
                  style={{ fontFamily: "'Playfair Display', serif" }}
                  className="text-xl font-bold leading-snug mb-4 group-hover:text-[#c4a364] transition-colors duration-200"
                >
                  {post.title}
                </h3>

                <p className="text-[#7a7268] text-sm leading-relaxed font-light flex-1">
                  {post.excerpt}
                </p>

                <div className="mt-7 flex items-center justify-between">
                  <span className="text-[11px] text-[#4a443e]">
                    {post.readTime}
                  </span>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="text-xs font-medium text-[#c4a364] hover:text-[#d4b574] transition-colors flex items-center gap-1.5"
                  >
                    Read Post
                    <span className="inline-block transition-transform duration-200 group-hover:translate-x-1">
                      →
                    </span>
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}

import { notFound } from "next/navigation";
import Link from "next/link";
import { MDXRemote } from "next-mdx-remote/rsc";
import { getAllPosts, getPostBySlug } from "../../../lib/posts";

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};
  return { title: post.title, description: post.excerpt };
}

export default async function PostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  return (
    <main
      style={{ fontFamily: "'DM Sans', sans-serif" }}
      className="min-h-screen bg-[#0d0d0d] text-[#f0ece4]"
    >
      {/* ── HEADER ─────────────────────────────────── */}
      <section className="relative px-6 pt-28 pb-16 md:px-16 lg:px-24 overflow-hidden">
        {/* Background accent */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -top-32 -right-32 w-[520px] h-[520px] rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(196,163,100,0.10) 0%, transparent 70%)",
          }}
        />

        {/* Back link */}
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-xs tracking-[0.2em] uppercase text-[#c4a364] hover:text-[#d4b574] transition-colors mb-10 font-medium"
        >
          ← All Posts
        </Link>

        {/* Tag + date */}
        <div className="flex items-center gap-4 mb-6">
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
          <span className="text-[11px] text-[#4a443e]">{post.readTime}</span>
        </div>

        <h1
          style={{ fontFamily: "'Playfair Display', serif" }}
          className="text-4xl md:text-6xl font-black leading-[1.06] max-w-3xl"
        >
          {post.title}
        </h1>

        <p className="mt-6 max-w-2xl text-[#a09a90] text-lg leading-relaxed font-light">
          {post.excerpt}
        </p>

        <div className="mt-12 h-px w-full bg-gradient-to-r from-[#c4a364]/40 via-[#c4a364]/10 to-transparent" />
      </section>

      {/* ── BODY ───────────────────────────────────── */}
      <section className="px-6 md:px-16 lg:px-24 pb-28">
        <div className="max-w-2xl prose-post">
          <MDXRemote source={post.content} />
        </div>
      </section>

      {/* ── CTA ────────────────────────────────────── */}
      <section className="px-6 md:px-16 lg:px-24 pb-28">
        <div
          className="relative rounded-2xl overflow-hidden px-10 py-14 md:px-16 md:py-16"
          style={{
            background:
              "linear-gradient(135deg, #1a1710 0%, #111108 60%, #0d0d0b 100%)",
            border: "1px solid rgba(196,163,100,0.25)",
          }}
        >
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
                where your marketing is leaking revenue.
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
    </main>
  );
}

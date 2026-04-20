import fs from "fs";
import path from "path";
import matter from "gray-matter";

const postsDirectory = path.join(process.cwd(), "posts");

export type PostFrontmatter = {
  title: string;
  date: string;
  tag: string;
  excerpt: string;
  readTime: string;
};

export type PostMeta = PostFrontmatter & { slug: string };

export type Post = PostMeta & { content: string };

function formatDate(iso: string): string {
  return new Date(iso).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
}

export function getAllPosts(): PostMeta[] {
  const fileNames = fs.readdirSync(postsDirectory);

  const posts = fileNames
    .filter((f) => /\.(md|mdx)$/.test(f))
    .map((fileName) => {
      const slug = fileName.replace(/\.(md|mdx)$/, "");
      const fullPath = path.join(postsDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, "utf8");
      const { data } = matter(fileContents);
      const frontmatter = data as PostFrontmatter;
      return { slug, ...frontmatter, date: formatDate(frontmatter.date) };
    });

  // Sort newest first — compare raw ISO strings stored in frontmatter
  return posts.sort((a, b) => {
    const rawA = getPostRawDate(a.slug);
    const rawB = getPostRawDate(b.slug);
    return new Date(rawB).getTime() - new Date(rawA).getTime();
  });
}

function getPostRawDate(slug: string): string {
  const extensions = ["md", "mdx"];
  for (const ext of extensions) {
    const fullPath = path.join(postsDirectory, `${slug}.${ext}`);
    if (fs.existsSync(fullPath)) {
      const { data } = matter(fs.readFileSync(fullPath, "utf8"));
      return data.date as string;
    }
  }
  return "1970-01-01";
}

export function getPostBySlug(slug: string): Post | null {
  const extensions = ["md", "mdx"];
  for (const ext of extensions) {
    const fullPath = path.join(postsDirectory, `${slug}.${ext}`);
    if (fs.existsSync(fullPath)) {
      const fileContents = fs.readFileSync(fullPath, "utf8");
      const { data, content } = matter(fileContents);
      const frontmatter = data as PostFrontmatter;
      return {
        slug,
        ...frontmatter,
        date: formatDate(frontmatter.date),
        content,
      };
    }
  }
  return null;
}

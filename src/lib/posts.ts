import fs from "fs";
import path from "path";
import matter from "gray-matter";
import readingTime from "reading-time";

const POSTS_DIR = path.join(process.cwd(), "content/posts");

export interface PostMeta {
  slug: string;
  title: string;
  date: string;
  lastUpdated?: string;
  tags: string[];
  excerpt: string;
  readingTime: string;
  author?: string;
  verdict?: string;
  rating?: number;
}

export interface Post extends PostMeta {
  content: string;
}

export function getAllPosts(): PostMeta[] {
  if (!fs.existsSync(POSTS_DIR)) return [];

  const files = fs.readdirSync(POSTS_DIR).filter((f) => f.endsWith(".mdx"));

  const posts = files.map((filename) => {
    const slug = filename.replace(/\.mdx$/, "");
    return getPostMeta(slug);
  });

  return posts
    .filter((p): p is PostMeta => p !== null)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export function getPostMeta(slug: string): PostMeta | null {
  const filePath = path.join(POSTS_DIR, `${slug}.mdx`);
  if (!fs.existsSync(filePath)) return null;

  const raw = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(raw);
  const stats = readingTime(content);

  return {
    slug,
    title: data.title ?? slug,
    date: data.date ?? "",
    lastUpdated: data.lastUpdated,
    tags: data.tags ?? [],
    excerpt: data.excerpt ?? content.slice(0, 160).replace(/\n/g, " "),
    readingTime: stats.text,
    author: data.author,
    verdict: data.verdict,
    rating: data.rating,
  };
}

export function getPostBySlug(slug: string): Post | null {
  const filePath = path.join(POSTS_DIR, `${slug}.mdx`);
  if (!fs.existsSync(filePath)) return null;

  const raw = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(raw);
  const stats = readingTime(content);

  return {
    slug,
    title: data.title ?? slug,
    date: data.date ?? "",
    lastUpdated: data.lastUpdated,
    tags: data.tags ?? [],
    excerpt: data.excerpt ?? content.slice(0, 160).replace(/\n/g, " "),
    readingTime: stats.text,
    author: data.author,
    verdict: data.verdict,
    rating: data.rating,
    content,
  };
}

export function getAllTags(): string[] {
  const posts = getAllPosts();
  const tagSet = new Set<string>();
  posts.forEach((p) => p.tags.forEach((t) => tagSet.add(t)));
  return Array.from(tagSet).sort();
}

export function getPostsByTag(tag: string): PostMeta[] {
  return getAllPosts().filter((p) => p.tags.includes(tag));
}

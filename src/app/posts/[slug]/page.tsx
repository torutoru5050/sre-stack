import { notFound } from "next/navigation";
import { getAllPosts, getPostBySlug } from "@/lib/posts";
import MDXContent from "@/components/MDXContent";
import Link from "next/link";
import type { Metadata } from "next";

interface Props {
  params: { slug: string };
}

export async function generateStaticParams() {
  return getAllPosts().map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = getPostBySlug(params.slug);
  if (!post) return {};

  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      publishedTime: post.date,
      tags: post.tags,
    },
  };
}

export default function PostPage({ params }: Props) {
  const post = getPostBySlug(params.slug);
  if (!post) notFound();

  return (
    <article className="mx-auto max-w-3xl px-6 py-12">
      <div className="mb-8">
        <div className="mb-4 flex items-center gap-3 text-sm text-gray-500">
          <time>{post.date}</time>
          <span>&middot;</span>
          <span>{post.readingTime}</span>
        </div>
        <h1 className="text-4xl font-bold text-white">{post.title}</h1>
        <div className="mt-4 flex flex-wrap gap-2">
          {post.tags.map((tag) => (
            <Link
              key={tag}
              href={`/tags/${tag}`}
              className="rounded-full bg-gray-800 px-3 py-1 text-xs text-green-400 hover:bg-gray-700"
            >
              {tag}
            </Link>
          ))}
        </div>
      </div>

      <MDXContent source={post.content} />

      <div className="mt-12 border-t border-gray-800 pt-8">
        <Link
          href="/"
          className="text-green-400 hover:text-green-300 transition-colors"
        >
          &larr; Back to all posts
        </Link>
      </div>
    </article>
  );
}

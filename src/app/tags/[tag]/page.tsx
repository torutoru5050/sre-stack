import { getAllTags, getPostsByTag } from "@/lib/posts";
import PostCard from "@/components/PostCard";
import Link from "next/link";
import type { Metadata } from "next";

interface Props {
  params: { tag: string };
}

export async function generateStaticParams() {
  return getAllTags().map((tag) => ({ tag }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  return {
    title: `Posts tagged "${params.tag}"`,
    description: `All SRE Stack articles about ${params.tag}`,
  };
}

export default function TagPage({ params }: Props) {
  const posts = getPostsByTag(params.tag);

  return (
    <div className="mx-auto max-w-4xl px-6 py-12">
      <div className="mb-8">
        <Link
          href="/"
          className="text-sm text-green-400 hover:text-green-300 transition-colors"
        >
          &larr; All posts
        </Link>
        <h1 className="mt-4 text-3xl font-bold text-white">
          Tagged: {params.tag}
        </h1>
      </div>

      <div className="grid gap-6">
        {posts.map((post) => (
          <PostCard key={post.slug} post={post} />
        ))}
      </div>

      {posts.length === 0 && (
        <p className="text-gray-500">
          No posts with this tag yet.
        </p>
      )}
    </div>
  );
}

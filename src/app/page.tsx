import { getAllPosts, getAllTags } from "@/lib/posts";
import PostCard from "@/components/PostCard";
import Link from "next/link";

export default function Home() {
  const posts = getAllPosts();
  const tags = getAllTags();

  return (
    <div className="mx-auto max-w-4xl px-6 py-12">
      <section className="mb-12">
        <h1 className="text-4xl font-bold text-white">
          SRE Tools, Compared.
        </h1>
        <p className="mt-4 text-lg text-gray-400">
          Honest reviews and head-to-head comparisons of observability, incident
          management, and DevOps tools &mdash; from engineers who actually use
          them on-call.
        </p>
      </section>

      {tags.length > 0 && (
        <div className="mb-8 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <Link
              key={tag}
              href={`/tags/${tag}`}
              className="rounded-full border border-gray-700 px-4 py-1 text-sm text-gray-400 transition-colors hover:border-green-400 hover:text-green-400"
            >
              {tag}
            </Link>
          ))}
        </div>
      )}

      <div className="grid gap-6">
        {posts.map((post) => (
          <PostCard key={post.slug} post={post} />
        ))}
      </div>

      {posts.length === 0 && (
        <p className="text-gray-500">No posts yet. Stay tuned!</p>
      )}
    </div>
  );
}

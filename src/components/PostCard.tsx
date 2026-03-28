import Link from "next/link";
import type { PostMeta } from "@/lib/posts";

export default function PostCard({ post }: { post: PostMeta }) {
  return (
    <article className="rounded-lg border border-gray-800 bg-gray-900 p-6 transition-colors hover:border-green-400/50">
      <Link href={`/posts/${post.slug}`}>
        <div className="mb-3 flex items-center gap-3 text-xs text-gray-500">
          <time>{post.date}</time>
          <span>&middot;</span>
          <span>{post.readingTime}</span>
        </div>
        <h2 className="mb-2 text-xl font-semibold text-white">{post.title}</h2>
        <p className="text-sm text-gray-400 line-clamp-2">{post.excerpt}</p>
        <div className="mt-4 flex flex-wrap gap-2">
          {post.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full bg-gray-800 px-3 py-1 text-xs text-green-400"
            >
              {tag}
            </span>
          ))}
        </div>
      </Link>
    </article>
  );
}

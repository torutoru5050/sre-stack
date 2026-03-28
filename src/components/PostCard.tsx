import Link from "next/link";
import type { PostMeta } from "@/lib/posts";

export default function PostCard({ post }: { post: PostMeta }) {
  return (
    <article className="group relative rounded-xl border border-gray-800 bg-gray-900/80 p-6 transition-all hover:border-green-400/50 hover:bg-gray-900">
      <Link href={`/posts/${post.slug}`}>
        {post.verdict && (
          <span className="absolute right-4 top-4 rounded-full bg-green-400/15 px-3 py-0.5 text-xs font-medium text-green-400 border border-green-400/30">
            {post.verdict}
          </span>
        )}
        <div className="mb-3 flex items-center gap-3 text-xs text-gray-500">
          <time>{post.date}</time>
          <span>&middot;</span>
          <span>{post.readingTime}</span>
          {post.rating && (
            <>
              <span>&middot;</span>
              <span className="flex items-center gap-1 text-yellow-400">
                <svg className="h-3 w-3" viewBox="0 0 20 20">
                  <path
                    d="M10 1l2.39 4.84 5.34.78-3.87 3.77.91 5.33L10 13.27l-4.77 2.51.91-5.33L2.27 6.68l5.34-.78L10 1z"
                    fill="#facc15"
                  />
                </svg>
                {post.rating.toFixed(1)}
              </span>
            </>
          )}
        </div>
        <h2 className="mb-2 text-xl font-bold text-white group-hover:text-green-400 transition-colors">
          {post.title}
        </h2>
        <p className="text-sm leading-relaxed text-gray-400 line-clamp-2">{post.excerpt}</p>
        <div className="mt-4 flex items-center justify-between">
          <div className="flex flex-wrap gap-2">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full bg-gray-800 px-3 py-1 text-xs text-green-400"
              >
                {tag}
              </span>
            ))}
          </div>
          <span className="text-sm text-gray-600 transition-colors group-hover:text-green-400">
            Read &rarr;
          </span>
        </div>
      </Link>
    </article>
  );
}

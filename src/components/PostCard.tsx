import Link from "next/link";
import type { PostMeta } from "@/lib/posts";

export default function PostCard({ post }: { post: PostMeta }) {
  return (
    <article className="group relative rounded-xl border border-transparent bg-surface-container-high p-6 transition-all hover:border-outline-variant/25 hover:bg-surface-container-highest hover:shadow-lg hover:shadow-black/20">
      {/* Invisible overlay link for whole card click */}
      <Link
        href={`/posts/${post.slug}`}
        className="absolute inset-0 z-0"
        aria-label={post.title}
      />

      <div className="relative z-10 mb-3 flex flex-wrap items-center gap-2">
        {post.verdict && (
          <span className="rounded-full bg-primary/10 px-3 py-0.5 text-xs font-medium text-primary">
            {post.verdict}
          </span>
        )}
        {post.lastUpdated && post.lastUpdated !== post.date && (
          <span className="rounded-full bg-tertiary/10 px-3 py-0.5 text-xs font-medium text-tertiary">
            Updated {post.lastUpdated}
          </span>
        )}
      </div>

      <div className="relative z-10">
        <div className="mb-3 flex items-center gap-3 text-xs text-on-surface-variant">
          <time dateTime={post.date}>{post.date}</time>
          <span className="text-outline-variant">&middot;</span>
          <span>{post.readingTime}</span>
          {post.rating && (
            <>
              <span className="text-outline-variant">&middot;</span>
              <span
                className="flex items-center gap-1 text-yellow-400"
                role="img"
                aria-label={`Rating: ${post.rating.toFixed(1)} out of 5`}
              >
                <svg className="h-3 w-3" viewBox="0 0 20 20" aria-hidden="true">
                  <path
                    d="M10 1l2.39 4.84 5.34.78-3.87 3.77.91 5.33L10 13.27l-4.77 2.51.91-5.33L2.27 6.68l5.34-.78L10 1z"
                    fill="#facc15"
                  />
                </svg>
                <span aria-hidden="true">{post.rating.toFixed(1)}</span>
              </span>
            </>
          )}
        </div>
        <h2 className="mb-2 text-xl font-bold text-on-surface transition-colors group-hover:text-primary">
          {post.title}
        </h2>
        <p className="line-clamp-2 text-[15px] leading-relaxed text-on-surface-variant">
          {post.excerpt}
        </p>
      </div>
      <div className="relative z-10 mt-4 flex items-center justify-between">
        <div className="flex flex-wrap gap-2">
          {post.tags.map((tag) => (
            <Link
              key={tag}
              href={`/tags/${tag}`}
              className="pointer-events-auto rounded-full bg-surface-container px-3 py-1 text-xs text-primary transition-colors hover:bg-surface-container-highest"
            >
              {tag}
            </Link>
          ))}
        </div>
        <span className="text-sm text-outline transition-colors group-hover:text-primary" aria-hidden="true">
          Read &rarr;
        </span>
      </div>
    </article>
  );
}

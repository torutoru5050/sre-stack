"use client";

import { useState, useMemo } from "react";
import PostCard from "@/components/PostCard";
import Link from "next/link";
import type { PostMeta } from "@/lib/posts";

const POSTS_PER_PAGE = 12;

export default function PostsPageClient({
  posts,
  tags,
}: {
  posts: PostMeta[];
  tags: string[];
}) {
  const [activeTag, setActiveTag] = useState<string | null>(null);
  const [visibleCount, setVisibleCount] = useState(POSTS_PER_PAGE);

  const filteredPosts = useMemo(() => {
    if (!activeTag) return posts;
    return posts.filter((p) => p.tags.includes(activeTag));
  }, [posts, activeTag]);

  const visiblePosts = filteredPosts.slice(0, visibleCount);
  const hasMore = visibleCount < filteredPosts.length;

  function handleTagClick(tag: string) {
    setActiveTag((prev) => (prev === tag ? null : tag));
    setVisibleCount(POSTS_PER_PAGE);
  }

  return (
    <div className="mx-auto max-w-5xl px-6 py-16">
      {/* Header */}
      <Link
        href="/"
        className="inline-flex items-center gap-1 text-sm text-primary transition-colors hover:text-primary-dim"
      >
        &larr; Home
      </Link>

      <div className="mt-6 mb-2">
        <h1 className="text-3xl font-extrabold tracking-tight text-on-surface sm:text-4xl">
          All Reviews
        </h1>
        <p className="mt-2 text-sm text-on-surface-variant">
          {filteredPosts.length} {filteredPosts.length === 1 ? "article" : "articles"}
          {activeTag && (
            <span>
              {" "}tagged <span className="text-primary">{activeTag}</span>
            </span>
          )}
        </p>
      </div>

      {/* Tag filters */}
      {tags.length > 0 && (
        <div className="mb-8 mt-4 flex flex-wrap gap-2 hide-scrollbar">
          {tags.map((tag) => (
            <button
              key={tag}
              onClick={() => handleTagClick(tag)}
              className={`rounded-full px-4 py-1.5 text-sm transition-colors ${
                activeTag === tag
                  ? "bg-primary text-surface-container-lowest"
                  : "bg-surface-container-high text-on-surface-variant hover:bg-surface-container-highest hover:text-primary"
              }`}
            >
              {tag}
            </button>
          ))}
        </div>
      )}

      {/* Post grid */}
      <div className="grid gap-6 sm:grid-cols-2">
        {visiblePosts.map((post) => (
          <PostCard key={post.slug} post={post} />
        ))}
      </div>

      {filteredPosts.length === 0 && (
        <p className="text-on-surface-variant">No posts found.</p>
      )}

      {/* Load More */}
      {hasMore && (
        <div className="mt-10 text-center">
          <button
            onClick={() => setVisibleCount((c) => c + POSTS_PER_PAGE)}
            className="inline-flex items-center rounded-lg border border-outline-variant/20 bg-surface-container-highest px-6 py-3 text-sm font-semibold text-on-surface transition-colors hover:bg-surface-bright"
          >
            Load More
          </button>
        </div>
      )}
    </div>
  );
}

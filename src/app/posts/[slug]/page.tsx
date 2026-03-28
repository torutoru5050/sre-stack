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

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    datePublished: post.date,
    dateModified: post.lastUpdated ?? post.date,
    description: post.excerpt,
    author: {
      "@type": "Person",
      name: post.author ?? "SaaSPedia Team",
      url: "https://saaspedia.dev/about",
    },
    publisher: {
      "@type": "Organization",
      name: "SaaSPedia",
      url: "https://saaspedia.dev",
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://saaspedia.dev/posts/${params.slug}`,
    },
    keywords: post.tags,
    ...(post.rating && {
      reviewRating: {
        "@type": "Rating",
        ratingValue: post.rating,
        bestRating: 5,
      },
    }),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <article className="mx-auto max-w-3xl px-6 py-12">
        <div className="mb-8">
          {/* Verdict badge */}
          {post.verdict && (
            <div className="mb-4">
              <span className="rounded-full bg-green-400/15 px-3 py-1 text-xs font-medium text-green-400 border border-green-400/30">
                {post.verdict}
              </span>
            </div>
          )}

          {/* Meta */}
          <div className="mb-4 flex flex-wrap items-center gap-3 text-sm text-gray-500">
            <time>Published {post.date}</time>
            {post.lastUpdated && (
              <>
                <span>&middot;</span>
                <time className="text-green-400/70">Updated {post.lastUpdated}</time>
              </>
            )}
            <span>&middot;</span>
            <span>{post.readingTime}</span>
          </div>

          <h1 className="text-3xl font-extrabold leading-tight text-white sm:text-4xl">
            {post.title}
          </h1>

          {/* Tags */}
          <div className="mt-4 flex flex-wrap gap-2">
            {post.tags.map((tag) => (
              <Link
                key={tag}
                href={`/tags/${tag}`}
                className="rounded-full bg-gray-800 px-3 py-1 text-xs text-green-400 hover:bg-gray-700 transition-colors"
              >
                {tag}
              </Link>
            ))}
          </div>

          {/* Author */}
          <div className="mt-6 flex items-center gap-3 border-t border-b border-gray-800 py-4">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-green-400/15 text-sm font-bold text-green-400">
              {(post.author ?? "ST")[0]}
            </div>
            <div>
              <p className="text-sm font-medium text-white">
                {post.author ?? "SaaSPedia Team"}
              </p>
              <p className="text-xs text-gray-500">
                Independent reviewer &middot; Tested hands-on
              </p>
            </div>
          </div>
        </div>

        <MDXContent source={post.content} />

        {/* Back link */}
        <div className="mt-12 border-t border-gray-800 pt-8">
          <Link
            href="/"
            className="text-green-400 hover:text-green-300 transition-colors"
          >
            &larr; Back to all comparisons
          </Link>
        </div>
      </article>
    </>
  );
}

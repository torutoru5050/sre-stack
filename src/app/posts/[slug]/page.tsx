import { notFound } from "next/navigation";
import { getAllPosts, getPostBySlug } from "@/lib/posts";
import MDXContent from "@/components/MDXContent";
import PostCard from "@/components/PostCard";
import NewsletterForm from "@/components/NewsletterForm";
import Link from "next/link";
import type { Metadata } from "next";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllPosts().map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
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

export default async function PostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  // Related posts: same tags, exclude current
  const allPosts = getAllPosts();
  const relatedPosts = allPosts
    .filter(
      (p) =>
        p.slug !== post.slug && p.tags.some((t) => post.tags.includes(t))
    )
    .slice(0, 3);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Review",
    headline: post.title,
    name: post.title,
    datePublished: post.date,
    dateModified: post.lastUpdated ?? post.date,
    description: post.excerpt,
    author: {
      "@type": "Person",
      name: post.author ?? "Toru Iwabuchi",
      url: "https://saaspedia.dev/about",
    },
    publisher: {
      "@type": "Organization",
      name: "SaaSPedia",
      url: "https://saaspedia.dev",
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://saaspedia.dev/posts/${slug}`,
    },
    keywords: post.tags,
    itemReviewed: {
      "@type": "SoftwareApplication",
      name: post.title.split("—")[0]?.trim() ?? post.title,
    },
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
        {/* Back link */}
        <Link
          href="/"
          className="inline-flex items-center gap-1 text-sm text-primary transition-colors hover:text-primary-dim"
        >
          &larr; Back to Reviews
        </Link>

        <div className="mb-10 mt-6">
          {/* Meta row */}
          <div className="mb-4 flex flex-wrap items-center gap-3 text-xs text-on-surface-variant">
            <time dateTime={post.date}>{post.date}</time>
            {post.lastUpdated && (
              <>
                <span className="text-outline-variant">&middot;</span>
                <time dateTime={post.lastUpdated} className="text-primary/70">
                  Updated {post.lastUpdated}
                </time>
              </>
            )}
            <span className="text-outline-variant">&middot;</span>
            <span>{post.readingTime}</span>
          </div>

          {/* Title */}
          <h1 className="text-3xl font-extrabold leading-tight tracking-tight text-on-surface sm:text-4xl">
            {post.title}
          </h1>

          {/* Rating & Verdict */}
          <div className="mt-4 flex flex-wrap items-center gap-4">
            {post.rating && (
              <div
                className="flex items-center gap-1"
                role="img"
                aria-label={`Rating: ${post.rating.toFixed(1)} out of 5`}
              >
                {Array.from({ length: 5 }, (_, i) => (
                  <svg
                    key={i}
                    className="h-4 w-4"
                    viewBox="0 0 20 20"
                    aria-hidden="true"
                  >
                    <path
                      d="M10 1l2.39 4.84 5.34.78-3.87 3.77.91 5.33L10 13.27l-4.77 2.51.91-5.33L2.27 6.68l5.34-.78L10 1z"
                      fill={
                        i < Math.floor(post.rating!) ? "#facc15" : "#424855"
                      }
                      opacity={
                        i < Math.floor(post.rating!)
                          ? 1
                          : i < post.rating!
                            ? 0.5
                            : 1
                      }
                    />
                  </svg>
                ))}
                <span
                  className="ml-1 text-sm font-medium text-yellow-400"
                  aria-hidden="true"
                >
                  {post.rating.toFixed(1)}
                </span>
              </div>
            )}
            {post.verdict && (
              <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                {post.verdict}
              </span>
            )}
          </div>

          {/* Tags */}
          <div className="mt-4 flex flex-wrap gap-2">
            {post.tags.map((tag) => (
              <Link
                key={tag}
                href={`/tags/${tag}`}
                className="rounded-full bg-surface-container-high px-3 py-1 text-xs text-primary transition-colors hover:bg-surface-container-highest"
              >
                {tag}
              </Link>
            ))}
          </div>

          {/* Author */}
          <div className="mt-8 flex items-center gap-3 border-t border-outline-variant/15 pt-6">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-sm font-bold text-primary">
              {(post.author ?? "Toru Iwabuchi")[0]}
            </div>
            <div>
              <p className="text-sm font-medium text-on-surface">
                {post.author ?? "Toru Iwabuchi"}
              </p>
              <p className="text-xs leading-relaxed text-on-surface-variant">
                SRE at a global tech company. Obsessed with automation
                <br className="hidden sm:inline" />
                {" "}and cutting operational toil. Running multiple side projects.
              </p>
            </div>
          </div>
        </div>

        <MDXContent source={post.content} />

        {/* Related articles */}
        {relatedPosts.length > 0 && (
          <div className="mt-16">
            <h2 className="mb-6 text-xs font-semibold uppercase tracking-[0.15em] text-on-surface-variant">
              Related Comparisons
            </h2>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {relatedPosts.map((rp) => (
                <PostCard key={rp.slug} post={rp} />
              ))}
            </div>
          </div>
        )}

        {/* Newsletter signup */}
        <div className="mt-16 rounded-xl border border-outline-variant/10 bg-surface-container p-8 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.15em] text-primary">Stay Updated</p>
          <h3 className="mt-2 text-xl font-bold text-on-surface">Get More Comparisons</h3>
          <p className="mt-2 text-sm text-on-surface-variant">Technical deep-dives delivered weekly. No spam.</p>
          <NewsletterForm />
        </div>

        {/* Back link bottom */}
        <div className="mt-12 border-t border-outline-variant/15 pt-8">
          <Link
            href="/"
            className="text-primary transition-colors hover:text-primary-dim"
          >
            &larr; Back to all comparisons
          </Link>
        </div>
      </article>
    </>
  );
}

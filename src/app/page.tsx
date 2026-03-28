import { getAllPosts, getAllTags } from "@/lib/posts";
import PostCard from "@/components/PostCard";
import Link from "next/link";

export default function Home() {
  const posts = getAllPosts();
  const tags = getAllTags();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "SaaSPedia",
    url: "https://saaspedia.dev",
    description:
      "Honest comparisons and reviews of SaaS tools for the AI era.",
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero */}
      <section className="hero-gradient relative overflow-hidden">
        <div className="relative mx-auto max-w-5xl px-6 py-20 sm:py-28">
          <p className="mb-5 text-xs font-semibold uppercase tracking-[0.15em] text-primary">
            Independent &middot; Engineer-Written &middot; AI-Era
          </p>
          <h1 className="max-w-3xl text-4xl font-extrabold leading-tight tracking-tight text-on-surface sm:text-5xl lg:text-6xl">
            AI-Era SaaS Reviews{" "}
            <span className="text-primary">for DevOps Teams</span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-on-surface-variant">
            Honest, experience-based reviews of SaaS tools for SRE, DevOps, and
            Platform Engineering teams. We benchmark technical precision so you
            don&apos;t have to.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <Link
              href="#articles"
              className="primary-gradient inline-flex items-center rounded-lg px-6 py-3 text-sm font-semibold text-surface-container-lowest transition-opacity hover:opacity-90"
            >
              Start Exploring
            </Link>
            <Link
              href="/tags/comparison"
              className="inline-flex items-center rounded-lg border border-outline-variant/20 bg-surface-container-highest px-6 py-3 text-sm font-semibold text-on-surface transition-colors hover:bg-surface-bright"
            >
              View Comparisons
            </Link>
          </div>
          <div className="mt-10 flex items-center gap-6 text-sm text-on-surface-variant">
            <span className="flex items-center gap-2">
              <span className="inline-block h-1.5 w-1.5 rounded-full bg-primary" />
              {posts.length} comparisons
            </span>
            <span className="flex items-center gap-2">
              <span className="inline-block h-1.5 w-1.5 rounded-full bg-primary" />
              Updated weekly
            </span>
          </div>
        </div>
      </section>

      <div id="articles" className="mx-auto max-w-5xl px-6 py-16">
        {/* Section heading */}
        <h2 className="mb-2 text-xs font-semibold uppercase tracking-[0.15em] text-on-surface-variant">
          Featured Reviews
        </h2>

        {/* Tag filters */}
        {tags.length > 0 && (
          <div className="mb-8 mt-4 flex flex-wrap gap-2 hide-scrollbar">
            {tags.map((tag) => (
              <Link
                key={tag}
                href={`/tags/${tag}`}
                className="rounded-full bg-surface-container-high px-4 py-1.5 text-sm text-on-surface-variant transition-colors hover:bg-surface-container-highest hover:text-primary"
              >
                {tag}
              </Link>
            ))}
          </div>
        )}

        {/* Post grid */}
        <div className="grid gap-6 sm:grid-cols-2">
          {posts.map((post) => (
            <PostCard key={post.slug} post={post} />
          ))}
        </div>

        {posts.length === 0 && (
          <p className="text-on-surface-variant">No posts yet. Stay tuned!</p>
        )}

        {/* Newsletter */}
        <div className="mt-20 rounded-xl border border-outline-variant/10 bg-surface-container p-8 sm:p-12">
          <div className="mx-auto max-w-xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.15em] text-primary">
              The Technical Digest
            </p>
            <h3 className="mt-3 text-2xl font-bold text-on-surface">
              Stay Updated on the Stack
            </h3>
            <p className="mt-3 text-[15px] leading-relaxed text-on-surface-variant">
              No marketing fluff. Just technical deep-dives and SaaS comparison
              matrices delivered to your inbox every Tuesday.
            </p>
            <p className="mt-6 text-sm text-on-surface-variant">
              Newsletter launching soon.{" "}
              <a
                href="mailto:hello@saaspedia.dev"
                className="text-primary transition-colors hover:text-primary-dim"
              >
                Email us
              </a>{" "}
              to get on the list.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

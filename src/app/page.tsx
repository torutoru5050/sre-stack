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
      <section className="relative overflow-hidden border-b border-gray-800 bg-gray-950">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-green-400/10 via-transparent to-transparent" />
        <div className="relative mx-auto max-w-4xl px-6 py-16 sm:py-24">
          <p className="mb-4 text-sm font-medium uppercase tracking-widest text-green-400">
            Independent &middot; Engineer-Written &middot; AI-Era
          </p>
          <h1 className="text-4xl font-extrabold leading-tight sm:text-5xl">
            <span className="bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
              Find the Right SaaS.
            </span>
            <br />
            <span className="bg-gradient-to-r from-green-400 to-emerald-300 bg-clip-text text-transparent">
              Skip the Marketing Hype.
            </span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-gray-400">
            Honest, hands-on comparisons of SaaS tools for developers and
            engineering teams. Every review is based on real-world usage — not
            vendor demos.
          </p>
          <div className="mt-8 flex items-center gap-4 text-sm text-gray-500">
            <span className="flex items-center gap-1.5">
              <svg className="h-4 w-4 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              {posts.length} comparisons
            </span>
            <span className="flex items-center gap-1.5">
              <svg className="h-4 w-4 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Updated weekly
            </span>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-4xl px-6 py-12">
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

        {/* Newsletter */}
        <div className="mt-16 rounded-xl border border-gray-800 bg-gray-900/50 p-8 text-center">
          <h3 className="text-lg font-bold text-white">Stay in the Loop</h3>
          <p className="mt-2 text-sm text-gray-400">
            Get new SaaS comparisons delivered to your inbox. No spam, unsubscribe anytime.
          </p>
          <form className="mx-auto mt-4 flex max-w-md gap-2" onSubmit={undefined}>
            <input
              type="email"
              placeholder="you@company.com"
              className="flex-1 rounded-lg border border-gray-700 bg-gray-800 px-4 py-2.5 text-sm text-white placeholder-gray-500 focus:border-green-400 focus:outline-none"
            />
            <button
              type="button"
              className="rounded-lg bg-green-500 px-5 py-2.5 text-sm font-semibold text-black transition-colors hover:bg-green-400"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

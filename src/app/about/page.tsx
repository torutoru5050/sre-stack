import type { Metadata } from "next";
import { getAllPosts } from "@/lib/posts";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about SaaSPedia — who we are, how we test, and our commitment to honest SaaS reviews.",
};

export default function AboutPage() {
  const posts = getAllPosts();

  return (
    <div className="mx-auto max-w-5xl px-6 py-16">
      <p className="text-xs font-semibold uppercase tracking-[0.15em] text-primary">
        About Us
      </p>
      <h1 className="mt-3 text-4xl font-extrabold tracking-tight text-on-surface">
        About SaaSPedia
      </h1>
      <p className="mt-4 max-w-2xl text-base leading-relaxed text-on-surface-variant">
        Engineering precision for the modern software stack.
      </p>

      {/* Stats — real numbers only */}
      <div className="mt-12 grid gap-4 sm:grid-cols-3">
        <div className="rounded-xl bg-surface-container-high p-6 text-center">
          <p className="text-3xl font-bold text-primary">{posts.length}</p>
          <p className="mt-1 text-xs uppercase tracking-wider text-on-surface-variant">
            Reviews Published
          </p>
        </div>
        <div className="rounded-xl bg-surface-container-high p-6 text-center">
          <p className="text-3xl font-bold text-primary">Hands-on</p>
          <p className="mt-1 text-xs uppercase tracking-wider text-on-surface-variant">
            Testing Methodology
          </p>
        </div>
        <div className="rounded-xl bg-surface-container-high p-6 text-center">
          <p className="text-3xl font-bold text-primary">Zero</p>
          <p className="mt-1 text-xs uppercase tracking-wider text-on-surface-variant">
            Vendor-Sponsored Reviews
          </p>
        </div>
      </div>

      {/* Sections */}
      <div className="mt-16 grid gap-6 lg:grid-cols-2">
        <section className="rounded-xl bg-surface-container-high p-8">
          <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
            <svg
              className="h-5 w-5 text-primary"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={1.5}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6.75 7.5l3 2.25-3 2.25m4.5 0h3m-9 8.25h13.5A2.25 2.25 0 0021 18V6a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 6v12a2.25 2.25 0 002.25 2.25z"
              />
            </svg>
          </div>
          <h2 className="text-xl font-bold text-on-surface">Who We Are</h2>
          <p className="mt-3 text-base leading-relaxed text-on-surface-variant">
            SaaSPedia is an independent review and comparison site for SaaS tools
            in the AI era. We&apos;re a team of engineers who got tired of
            reading vendor-sponsored &ldquo;reviews&rdquo; that always recommend
            the sponsor. So we built something different.
          </p>
        </section>

        <section className="rounded-xl bg-surface-container-high p-8">
          <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
            <svg
              className="h-5 w-5 text-primary"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={1.5}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5"
              />
            </svg>
          </div>
          <h2 className="text-xl font-bold text-on-surface">Our Methodology</h2>
          <div className="mt-3 space-y-3 text-on-surface-variant leading-relaxed">
            <p className="text-base">
              Every tool we review goes through the same process:
            </p>
            <ol className="list-decimal space-y-2 pl-5 text-[15px]">
              <li>
                <strong className="text-on-surface">Hands-on testing</strong> —
                We use each tool in real environments for at least 2 weeks.
              </li>
              <li>
                <strong className="text-on-surface">Feature comparison</strong>{" "}
                — Detailed matrices based on actual usage, not marketing pages.
              </li>
              <li>
                <strong className="text-on-surface">Pricing analysis</strong> —
                Real costs for small, mid-size, and enterprise teams.
              </li>
              <li>
                <strong className="text-on-surface">Verdict</strong> — Clear
                recommendations: which tool is best for which use case.
              </li>
            </ol>
          </div>
        </section>

        <section className="rounded-xl bg-surface-container-high p-8">
          <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
            <svg
              className="h-5 w-5 text-primary"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={1.5}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z"
              />
            </svg>
          </div>
          <h2 id="ethics" className="scroll-mt-20 text-xl font-bold text-on-surface">
            How We Make Money
          </h2>
          <p className="mt-3 text-base leading-relaxed text-on-surface-variant">
            Some links on SaaSPedia are affiliate links. When you sign up for a
            tool through our link, we may earn a commission at no extra cost to
            you. This is how we keep the site running and the content free.
          </p>
          <p className="mt-3 text-base leading-relaxed text-on-surface-variant">
            <strong className="text-on-surface">
              Commission status never influences our technical scorecard.
            </strong>{" "}
            We&apos;ve recommended free and open-source tools over paid
            alternatives many times.
          </p>
        </section>

        <section className="rounded-xl bg-surface-container-high p-8">
          <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
            <svg
              className="h-5 w-5 text-primary"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={1.5}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
              />
            </svg>
          </div>
          <h2 className="text-xl font-bold text-on-surface">Contact</h2>
          <p className="mt-3 text-base leading-relaxed text-on-surface-variant">
            Have a question, correction, or tool you&apos;d like us to review?
            Reach out at{" "}
            <a
              href="mailto:hello@saaspedia.dev"
              className="text-primary transition-colors hover:text-primary-dim"
            >
              hello@saaspedia.dev
            </a>
          </p>
        </section>
      </div>
    </div>
  );
}

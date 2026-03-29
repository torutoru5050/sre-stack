import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Media Kit",
  description: "SaaSPedia media kit for partners and advertisers.",
};

export default function MediaKitPage() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-16">
      <p className="text-xs font-semibold uppercase tracking-[0.15em] text-primary">
        For Partners
      </p>
      <h1 className="mt-3 text-4xl font-extrabold tracking-tight text-on-surface">
        Media Kit
      </h1>

      <div className="mt-12 space-y-8">
        {/* About */}
        <section className="rounded-xl bg-surface-container-high p-8">
          <h2 className="text-xl font-bold text-on-surface">About SaaSPedia</h2>
          <p className="mt-3 text-base leading-relaxed text-on-surface-variant">
            SaaSPedia is an independent review and comparison site for SaaS tools
            in the AI era. We publish honest, engineer-written comparisons of
            observability, incident management, DevOps, and SRE tools.
          </p>
        </section>

        {/* Audience */}
        <section className="rounded-xl bg-surface-container-high p-8">
          <h2 className="text-xl font-bold text-on-surface">Audience</h2>
          <div className="mt-4 grid gap-4 sm:grid-cols-3">
            <div className="text-center">
              <p className="text-2xl font-bold text-primary">SRE / DevOps</p>
              <p className="mt-1 text-xs uppercase tracking-wider text-on-surface-variant">
                Primary Audience
              </p>
            </div>
            <div className="text-center">
              <p className="text-2xl font-bold text-primary">IC → Manager</p>
              <p className="mt-1 text-xs uppercase tracking-wider text-on-surface-variant">
                Seniority Range
              </p>
            </div>
            <div className="text-center">
              <p className="text-2xl font-bold text-primary">Global</p>
              <p className="mt-1 text-xs uppercase tracking-wider text-on-surface-variant">
                Geography
              </p>
            </div>
          </div>
        </section>

        {/* Content */}
        <section className="rounded-xl bg-surface-container-high p-8">
          <h2 className="text-xl font-bold text-on-surface">Content</h2>
          <ul className="mt-4 space-y-2 text-[15px] text-on-surface-variant">
            <li>24+ in-depth comparison and review articles</li>
            <li>Topics: monitoring, CI/CD, IaC, incident management, security, error tracking</li>
            <li>Every tool tested hands-on in production environments</li>
            <li>Weekly newsletter via Buttondown</li>
          </ul>
        </section>

        {/* Partnership */}
        <section className="rounded-xl bg-surface-container-high p-8">
          <h2 className="text-xl font-bold text-on-surface">
            Partnership Opportunities
          </h2>
          <ul className="mt-4 space-y-2 text-[15px] text-on-surface-variant">
            <li>Affiliate partnerships (CPA / CPL)</li>
            <li>Sponsored reviews and comparisons</li>
            <li>Newsletter sponsorship</li>
          </ul>
        </section>

        {/* Contact */}
        <section className="rounded-xl bg-surface-container-high p-8">
          <h2 className="text-xl font-bold text-on-surface">Contact</h2>
          <p className="mt-3 text-base text-on-surface-variant">
            Interested in partnering?{" "}
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

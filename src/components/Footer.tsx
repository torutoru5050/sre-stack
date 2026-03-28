import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-surface-container-low">
      <div className="mx-auto max-w-5xl px-6 py-16">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <span className="text-lg font-bold text-on-surface">
              SaaS<span className="text-primary">Pedia</span>
            </span>
            <p className="mt-3 text-sm leading-relaxed text-on-surface-variant">
              Engineering precision for the modern software stack. We benchmark
              tools based on latency, reliability, and developer experience.
            </p>
          </div>

          {/* Explore */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-on-surface-variant">
              Explore
            </h4>
            <ul className="mt-4 space-y-2.5 text-sm">
              <li>
                <Link
                  href="/tags/monitoring"
                  className="text-on-surface-variant transition-colors hover:text-primary"
                >
                  Monitoring
                </Link>
              </li>
              <li>
                <Link
                  href="/tags/incident-management"
                  className="text-on-surface-variant transition-colors hover:text-primary"
                >
                  Incident Response
                </Link>
              </li>
              <li>
                <Link
                  href="/tags/ci-cd"
                  className="text-on-surface-variant transition-colors hover:text-primary"
                >
                  CI/CD
                </Link>
              </li>
              <li>
                <Link
                  href="/tags/ai"
                  className="text-on-surface-variant transition-colors hover:text-primary"
                >
                  AI Tools
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-on-surface-variant">
              Company
            </h4>
            <ul className="mt-4 space-y-2.5 text-sm">
              <li>
                <Link
                  href="/about"
                  className="text-on-surface-variant transition-colors hover:text-primary"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/about#ethics"
                  className="text-on-surface-variant transition-colors hover:text-primary"
                >
                  Ethics Policy
                </Link>
              </li>
              <li>
                <a
                  href="mailto:hello@saaspedia.dev"
                  className="text-on-surface-variant transition-colors hover:text-primary"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Transparency */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-on-surface-variant">
              Transparency
            </h4>
            <p className="mt-4 text-sm leading-relaxed text-on-surface-variant">
              Some links on this site are affiliate links. Commission status
              never influences our technical scorecard.
            </p>
          </div>
        </div>

        <div className="mt-12 border-t border-outline-variant/15 pt-8 text-center">
          <p className="text-xs text-outline">
            &copy; {new Date().getFullYear()} SaaSPedia. Engineering Precision
            for DevOps.
          </p>
        </div>
      </div>
    </footer>
  );
}

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about SaaSPedia — who we are, how we test, and our commitment to honest SaaS reviews.",
};

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-16">
      <h1 className="text-4xl font-extrabold text-white">About SaaSPedia</h1>

      <section className="mt-10">
        <h2 className="text-xl font-bold text-white">Who We Are</h2>
        <p className="mt-3 leading-relaxed text-gray-400">
          SaaSPedia is an independent review and comparison site for SaaS tools
          in the AI era. We&apos;re a team of engineers who got tired of reading
          vendor-sponsored &ldquo;reviews&rdquo; that always recommend the
          sponsor. So we built something different.
        </p>
      </section>

      <section className="mt-10">
        <h2 className="text-xl font-bold text-white">Our Methodology</h2>
        <div className="mt-3 space-y-4 text-gray-400 leading-relaxed">
          <p>Every tool we review goes through the same process:</p>
          <ol className="list-decimal space-y-2 pl-6">
            <li>
              <strong className="text-gray-300">Hands-on testing</strong> — We
              sign up, configure, and use each tool in real environments for at
              least 2 weeks.
            </li>
            <li>
              <strong className="text-gray-300">Feature comparison</strong> — We
              build detailed feature matrices based on actual usage, not
              marketing pages.
            </li>
            <li>
              <strong className="text-gray-300">Pricing analysis</strong> — We
              calculate real costs for small, mid-size, and enterprise teams.
            </li>
            <li>
              <strong className="text-gray-300">Verdict</strong> — We give clear
              recommendations: which tool is best for which use case.
            </li>
          </ol>
        </div>
      </section>

      <section className="mt-10">
        <h2 className="text-xl font-bold text-white">How We Make Money</h2>
        <p className="mt-3 leading-relaxed text-gray-400">
          Some links on SaaSPedia are affiliate links. When you sign up for a
          tool through our link, we may earn a commission at no extra cost to
          you. This is how we keep the site running and the content free.
        </p>
        <p className="mt-3 leading-relaxed text-gray-400">
          <strong className="text-gray-300">
            Affiliate relationships never influence our ratings or
            recommendations.
          </strong>{" "}
          We&apos;ve recommended free and open-source tools over paid
          alternatives many times. Our reputation depends on honesty.
        </p>
      </section>

      <section className="mt-10">
        <h2 className="text-xl font-bold text-white">Contact</h2>
        <p className="mt-3 leading-relaxed text-gray-400">
          Have a question, correction, or tool you&apos;d like us to review?
          Reach out at{" "}
          <a
            href="mailto:hello@saaspedia.dev"
            className="text-green-400 hover:text-green-300 transition-colors"
          >
            hello@saaspedia.dev
          </a>
        </p>
      </section>
    </div>
  );
}

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-gray-800 bg-gray-950 py-12">
      <div className="mx-auto max-w-4xl px-6">
        <div className="grid gap-8 sm:grid-cols-3">
          {/* Brand */}
          <div>
            <span className="text-lg font-bold text-white">
              SaaS<span className="text-green-400">Pedia</span>
            </span>
            <p className="mt-2 text-sm leading-relaxed text-gray-500">
              Independent SaaS comparisons for the AI era. Written by engineers, for engineers.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-sm font-semibold text-gray-300">Explore</h4>
            <ul className="mt-3 space-y-2 text-sm text-gray-500">
              <li>
                <Link href="/tags/ai" className="hover:text-green-400 transition-colors">
                  AI Tools
                </Link>
              </li>
              <li>
                <Link href="/tags/comparison" className="hover:text-green-400 transition-colors">
                  Comparisons
                </Link>
              </li>
              <li>
                <Link href="/tags/developer-tools" className="hover:text-green-400 transition-colors">
                  Developer Tools
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-green-400 transition-colors">
                  About
                </Link>
              </li>
            </ul>
          </div>

          {/* Disclosure */}
          <div>
            <h4 className="text-sm font-semibold text-gray-300">Transparency</h4>
            <p className="mt-3 text-sm leading-relaxed text-gray-500">
              Some links on this site are affiliate links. We may earn a
              commission at no extra cost to you. This never influences our
              ratings or recommendations.
            </p>
          </div>
        </div>

        <div className="mt-10 border-t border-gray-800 pt-6 text-center text-xs text-gray-600">
          &copy; {new Date().getFullYear()} SaaSPedia. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

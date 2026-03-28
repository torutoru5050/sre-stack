import Link from "next/link";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-gray-800 bg-gray-950/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-4xl items-center justify-between px-6 py-4">
        <Link href="/" className="flex items-center gap-2">
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-green-400 text-sm font-extrabold text-black">
            S
          </span>
          <span className="text-lg font-bold text-white">
            SaaS<span className="text-green-400">Pedia</span>
          </span>
        </Link>
        <nav className="flex gap-5 text-sm text-gray-400">
          <Link href="/" className="hover:text-white transition-colors">
            Home
          </Link>
          <Link href="/tags/ai" className="hover:text-white transition-colors">
            AI Tools
          </Link>
          <Link
            href="/tags/comparison"
            className="hover:text-white transition-colors"
          >
            Comparisons
          </Link>
          <Link
            href="/about"
            className="hover:text-white transition-colors"
          >
            About
          </Link>
        </nav>
      </div>
    </header>
  );
}

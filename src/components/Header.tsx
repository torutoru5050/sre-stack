import Link from "next/link";

export default function Header() {
  return (
    <header className="border-b border-gray-800 bg-gray-950">
      <div className="mx-auto flex max-w-4xl items-center justify-between px-6 py-4">
        <Link href="/" className="text-xl font-bold text-green-400">
          SRE Stack
        </Link>
        <nav className="flex gap-6 text-sm text-gray-400">
          <Link href="/" className="hover:text-white transition-colors">
            Home
          </Link>
          <Link href="/tags/sre" className="hover:text-white transition-colors">
            SRE
          </Link>
          <Link
            href="/tags/observability"
            className="hover:text-white transition-colors"
          >
            Observability
          </Link>
          <Link
            href="/tags/incident-management"
            className="hover:text-white transition-colors"
          >
            Incident Mgmt
          </Link>
        </nav>
      </div>
    </header>
  );
}

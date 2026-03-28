export default function ProsConsList({
  pros = "",
  cons = "",
}: {
  pros?: string;
  cons?: string;
}) {
  const prosList = pros ? pros.split("|").map((s) => s.trim()).filter(Boolean) : [];
  const consList = cons ? cons.split("|").map((s) => s.trim()).filter(Boolean) : [];

  return (
    <div className="not-prose my-8 grid gap-4 sm:grid-cols-2">
      <div className="rounded-lg border border-green-400/30 bg-green-400/5 p-5">
        <h4 className="mb-3 flex items-center gap-2 text-sm font-semibold uppercase tracking-wide text-green-400">
          <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
          Pros
        </h4>
        <ul className="space-y-2">
          {prosList.map((item, i) => (
            <li key={i} className="flex items-start gap-2 text-sm text-gray-300">
              <span className="mt-0.5 text-green-400">+</span>
              {item}
            </li>
          ))}
        </ul>
      </div>
      <div className="rounded-lg border border-red-400/30 bg-red-400/5 p-5">
        <h4 className="mb-3 flex items-center gap-2 text-sm font-semibold uppercase tracking-wide text-red-400">
          <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
          Cons
        </h4>
        <ul className="space-y-2">
          {consList.map((item, i) => (
            <li key={i} className="flex items-start gap-2 text-sm text-gray-300">
              <span className="mt-0.5 text-red-400">&minus;</span>
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

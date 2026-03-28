interface AffiliateCTAProps {
  name: string;
  url: string;
  description: string;
  cta?: string;
  badge?: string;
  rating?: number;
  note?: string;
}

export default function AffiliateCTA({
  name,
  url,
  description,
  cta = "Start Free Trial",
  badge,
  rating,
  note,
}: AffiliateCTAProps) {
  return (
    <div className="not-prose relative my-8 overflow-hidden rounded-xl border border-green-400/30 bg-gradient-to-br from-green-400/10 to-green-400/5 p-6">
      {badge && (
        <span className="absolute right-4 top-4 rounded-full bg-yellow-400/90 px-3 py-0.5 text-xs font-bold text-black">
          {badge}
        </span>
      )}
      <h3 className="text-lg font-bold text-white">{name}</h3>
      {rating && (
        <div className="mt-1 flex items-center gap-1">
          {Array.from({ length: 5 }, (_, i) => (
            <svg key={i} className="h-4 w-4" viewBox="0 0 20 20">
              <path
                d="M10 1l2.39 4.84 5.34.78-3.87 3.77.91 5.33L10 13.27l-4.77 2.51.91-5.33L2.27 6.68l5.34-.78L10 1z"
                fill={i < Math.floor(rating) ? "#facc15" : i < rating ? "#facc15" : "#374151"}
                opacity={i < Math.floor(rating) ? 1 : i < rating ? 0.5 : 1}
              />
            </svg>
          ))}
          <span className="ml-1 text-sm text-yellow-400">{rating.toFixed(1)}</span>
        </div>
      )}
      <p className="mt-3 text-sm leading-relaxed text-gray-300">{description}</p>
      <div className="mt-4 flex items-center gap-4">
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer nofollow"
          className="inline-block rounded-lg bg-green-500 px-6 py-2.5 text-sm font-semibold text-black shadow-lg shadow-green-500/20 transition-all hover:bg-green-400 hover:shadow-green-500/30"
        >
          {cta} &rarr;
        </a>
        {note && (
          <span className="text-xs text-gray-500">{note}</span>
        )}
      </div>
    </div>
  );
}

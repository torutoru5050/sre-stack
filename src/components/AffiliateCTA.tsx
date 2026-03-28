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
    <div className="not-prose relative my-8 overflow-hidden rounded-xl border-l-4 border-l-primary bg-surface-container-high p-6">
      {badge && (
        <span className="absolute right-4 top-4 rounded-full bg-yellow-400/90 px-3 py-0.5 text-xs font-bold text-black">
          {badge}
        </span>
      )}
      <h3 className="text-lg font-bold text-on-surface">{name}</h3>
      {rating && (
        <div
          className="mt-1 flex items-center gap-1"
          role="img"
          aria-label={`Rating: ${rating.toFixed(1)} out of 5`}
        >
          {Array.from({ length: 5 }, (_, i) => (
            <svg
              key={i}
              className="h-4 w-4"
              viewBox="0 0 20 20"
              aria-hidden="true"
            >
              <path
                d="M10 1l2.39 4.84 5.34.78-3.87 3.77.91 5.33L10 13.27l-4.77 2.51.91-5.33L2.27 6.68l5.34-.78L10 1z"
                fill={i < Math.floor(rating) ? "#facc15" : "#424855"}
                opacity={i < Math.floor(rating) ? 1 : i < rating ? 0.5 : 1}
              />
            </svg>
          ))}
          <span className="ml-1 text-sm text-yellow-400" aria-hidden="true">
            {rating.toFixed(1)}
          </span>
        </div>
      )}
      <p className="mt-3 text-[15px] leading-relaxed text-on-surface-variant">
        {description}
      </p>
      <div className="mt-4 flex items-center gap-4">
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer nofollow"
          className="primary-gradient inline-block rounded-lg px-6 py-2.5 text-sm font-semibold text-surface-container-lowest shadow-lg shadow-primary/20 transition-opacity hover:opacity-90"
        >
          {cta} &rarr;
        </a>
        {note && <span className="text-xs text-outline">{note}</span>}
      </div>
    </div>
  );
}

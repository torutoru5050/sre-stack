export default function MethodologyBox() {
  return (
    <div className="my-8 rounded-xl bg-tertiary/5 p-5">
      <h4 className="mb-2 flex items-center gap-2 text-sm font-semibold text-tertiary">
        <svg
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={1.5}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
          />
        </svg>
        How We Test
      </h4>
      <p className="text-sm leading-relaxed text-on-surface-variant">
        Every tool we review is tested hands-on in real production environments
        for at least 2 weeks. We evaluate based on setup experience, daily
        usability, pricing transparency, and support quality. Our comparisons are
        independent — we may earn affiliate commissions, but this never
        influences our ratings or recommendations.
      </p>
    </div>
  );
}

export default function StarRating({
  rating,
  max = 5,
}: {
  rating: number;
  max?: number;
}) {
  return (
    <div className="flex items-center gap-1">
      {Array.from({ length: max }, (_, i) => {
        const fill =
          i + 1 <= Math.floor(rating)
            ? "full"
            : i < rating
              ? "half"
              : "empty";
        return (
          <svg
            key={i}
            className="h-4 w-4"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {fill === "full" && (
              <path
                d="M10 1l2.39 4.84 5.34.78-3.87 3.77.91 5.33L10 13.27l-4.77 2.51.91-5.33L2.27 6.68l5.34-.78L10 1z"
                fill="#facc15"
              />
            )}
            {fill === "half" && (
              <>
                <path
                  d="M10 1l2.39 4.84 5.34.78-3.87 3.77.91 5.33L10 13.27l-4.77 2.51.91-5.33L2.27 6.68l5.34-.78L10 1z"
                  fill="#374151"
                />
                <path
                  d="M10 1v12.27l-4.77 2.51.91-5.33L2.27 6.68l5.34-.78L10 1z"
                  fill="#facc15"
                />
              </>
            )}
            {fill === "empty" && (
              <path
                d="M10 1l2.39 4.84 5.34.78-3.87 3.77.91 5.33L10 13.27l-4.77 2.51.91-5.33L2.27 6.68l5.34-.78L10 1z"
                fill="#374151"
              />
            )}
          </svg>
        );
      })}
      <span className="ml-1 text-sm font-medium text-yellow-400">
        {rating.toFixed(1)}
      </span>
    </div>
  );
}

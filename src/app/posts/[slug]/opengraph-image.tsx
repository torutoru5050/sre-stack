import { ImageResponse } from "next/og";
import { getPostBySlug, getAllPosts } from "@/lib/posts";

export const runtime = "nodejs";
export const alt = "Article OG Image";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export function generateStaticParams() {
  return getAllPosts().map((post) => ({ slug: post.slug }));
}

export default async function OGImage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  const title = post?.title ?? slug;
  const tags = post?.tags ?? [];
  const rating = post?.rating;
  const verdict = post?.verdict;

  return new ImageResponse(
    (
      <div
        style={{
          width: "1200px",
          height: "630px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          backgroundColor: "#080e1a",
          padding: "48px 56px",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Green gradient accent - bottom right */}
        <div
          style={{
            position: "absolute",
            bottom: "-80px",
            right: "-80px",
            width: "400px",
            height: "400px",
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(105,246,184,0.25) 0%, rgba(105,246,184,0.05) 50%, transparent 70%)",
            display: "flex",
          }}
        />

        {/* Top: Logo */}
        <div style={{ display: "flex", alignItems: "center", gap: "4px" }}>
          <span
            style={{
              fontSize: "28px",
              fontWeight: 700,
              color: "#ffffff",
            }}
          >
            SaaS
          </span>
          <span
            style={{
              fontSize: "28px",
              fontWeight: 700,
              color: "#69f6b8",
            }}
          >
            Pedia
          </span>
        </div>

        {/* Center: Title */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            flex: 1,
            justifyContent: "center",
            paddingRight: "60px",
          }}
        >
          <div
            style={{
              fontSize: title.length > 60 ? "36px" : title.length > 40 ? "42px" : "48px",
              fontWeight: 700,
              color: "#ffffff",
              lineHeight: 1.3,
              display: "flex",
              flexWrap: "wrap",
            }}
          >
            {title}
          </div>
        </div>

        {/* Bottom: Tags + Rating + Verdict */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          {/* Tags */}
          <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
            {tags.slice(0, 5).map((tag) => (
              <div
                key={tag}
                style={{
                  backgroundColor: "rgba(105,246,184,0.12)",
                  color: "#69f6b8",
                  fontSize: "16px",
                  fontWeight: 500,
                  padding: "6px 16px",
                  borderRadius: "20px",
                  display: "flex",
                }}
              >
                {tag}
              </div>
            ))}
          </div>

          {/* Rating + Verdict */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "16px",
            }}
          >
            {rating && (
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "4px",
                }}
              >
                {Array.from({ length: 5 }, (_, i) => (
                  <div
                    key={i}
                    style={{
                      width: "20px",
                      height: "20px",
                      borderRadius: "2px",
                      backgroundColor:
                        i < Math.floor(rating)
                          ? "#facc15"
                          : "rgba(250,204,21,0.2)",
                      display: "flex",
                    }}
                  />
                ))}
                <span
                  style={{
                    fontSize: "20px",
                    fontWeight: 700,
                    color: "#facc15",
                    marginLeft: "6px",
                  }}
                >
                  {rating.toFixed(1)}
                </span>
              </div>
            )}
            {verdict && (
              <div
                style={{
                  backgroundColor: "rgba(105,246,184,0.15)",
                  color: "#69f6b8",
                  fontSize: "16px",
                  fontWeight: 600,
                  padding: "6px 18px",
                  borderRadius: "20px",
                  display: "flex",
                }}
              >
                {verdict}
              </div>
            )}
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}

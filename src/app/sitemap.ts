import { getAllPosts } from "@/lib/posts";
import type { MetadataRoute } from "next";

const BASE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://saaspedia.dev";

export default function sitemap(): MetadataRoute.Sitemap {
  const posts = getAllPosts();

  const postEntries = posts.map((post) => ({
    url: `${BASE_URL}/posts/${post.slug}`,
    lastModified: new Date(post.lastUpdated ?? post.date),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  return [
    {
      url: BASE_URL,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    ...postEntries,
  ];
}

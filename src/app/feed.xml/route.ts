import { getAllPosts } from "@/lib/posts";

const SITE_URL = "https://saaspedia.dev";

export async function GET() {
  const posts = getAllPosts().slice(0, 20);

  const items = posts
    .map((post) => {
      const pubDate = new Date(post.date).toUTCString();
      return `    <item>
      <title><![CDATA[${post.title}]]></title>
      <link>${SITE_URL}/posts/${post.slug}</link>
      <description><![CDATA[${post.excerpt}]]></description>
      <pubDate>${pubDate}</pubDate>
      <guid isPermaLink="true">${SITE_URL}/posts/${post.slug}</guid>
    </item>`;
    })
    .join("\n");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>SaaSPedia</title>
    <link>${SITE_URL}</link>
    <description>DevOps/SRE向けSaaS比較・レビューブログ</description>
    <language>ja</language>
    <atom:link href="${SITE_URL}/feed.xml" rel="self" type="application/rss+xml" />
${items}
  </channel>
</rss>`;

  return new Response(xml, {
    headers: {
      "Content-Type": "application/xml",
    },
  });
}

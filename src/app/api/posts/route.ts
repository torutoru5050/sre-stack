import { NextRequest, NextResponse } from "next/server";
import fs from "fs";
import path from "path";

const API_KEY = process.env.POSTS_API_KEY;

export async function POST(request: NextRequest) {
  // API key auth
  const authHeader = request.headers.get("authorization");
  if (API_KEY && authHeader !== `Bearer ${API_KEY}`) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const body = await request.json();
  const { slug, title, content, date, tags } = body;

  if (!slug || !title || !content) {
    return NextResponse.json(
      { error: "Missing required fields: slug, title, content" },
      { status: 400 }
    );
  }

  const postDate = date ?? new Date().toISOString().split("T")[0];
  const postTags = tags ?? [];

  const frontmatter = [
    "---",
    `title: "${title}"`,
    `date: "${postDate}"`,
    `tags: [${postTags.map((t: string) => `"${t}"`).join(", ")}]`,
    `excerpt: "${content.slice(0, 155).replace(/"/g, '\\"').replace(/\n/g, " ")}..."`,
    "---",
  ].join("\n");

  const mdxContent = `${frontmatter}\n\n${content}\n`;

  const postsDir = path.join(process.cwd(), "content/posts");
  fs.mkdirSync(postsDir, { recursive: true });
  fs.writeFileSync(path.join(postsDir, `${slug}.mdx`), mdxContent, "utf-8");

  return NextResponse.json({ ok: true, slug, path: `/posts/${slug}` });
}

import { getAllPosts, getAllTags } from "@/lib/posts";
import PostsPageClient from "@/components/PostsPageClient";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "All Reviews | SaaSPedia",
};

export default function PostsPage() {
  const posts = getAllPosts();
  const tags = getAllTags();

  return <PostsPageClient posts={posts} tags={tags} />;
}

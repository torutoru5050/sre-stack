import { MDXRemote } from "next-mdx-remote/rsc";
import AffiliateCTA from "./AffiliateCTA";

const components = {
  AffiliateCTA,
};

export default function MDXContent({ source }: { source: string }) {
  return (
    <div className="prose prose-invert prose-green max-w-none prose-headings:text-white prose-a:text-green-400 prose-code:text-green-300">
      <MDXRemote source={source} components={components} />
    </div>
  );
}

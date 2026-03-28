import { MDXRemote } from "next-mdx-remote/rsc";
import AffiliateCTA from "./AffiliateCTA";
import StarRating from "./StarRating";
import ProsConsList from "./ProsConsList";
import MethodologyBox from "./MethodologyBox";

const components = {
  AffiliateCTA,
  StarRating,
  ProsConsList,
  MethodologyBox,
};

export default function MDXContent({ source }: { source: string }) {
  return (
    <div className="prose prose-invert prose-green max-w-none prose-headings:text-white prose-a:text-green-400 prose-code:text-green-300">
      <MDXRemote source={source} components={components} />
    </div>
  );
}

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
    <div className="prose prose-invert max-w-none prose-headings:text-on-surface prose-p:text-on-surface-variant prose-a:text-primary prose-strong:text-on-surface prose-code:text-primary-dim prose-li:text-on-surface-variant">
      <MDXRemote source={source} components={components} />
    </div>
  );
}

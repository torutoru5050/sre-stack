"use client";

import { ReactNode } from "react";

interface TrackableLinkProps {
  href: string;
  name: string;
  children: ReactNode;
  className?: string;
}

export default function TrackableLink({
  href,
  name,
  children,
  className,
}: TrackableLinkProps) {
  const handleClick = () => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (window as any).gtag?.("event", "cta_click", {
      cta_name: name,
      cta_url: href,
      cta_position: "article",
    });
  };

  return (
    <a
      href={href}
      onClick={handleClick}
      target="_blank"
      rel="noopener noreferrer nofollow"
      className={className}
    >
      {children}
    </a>
  );
}

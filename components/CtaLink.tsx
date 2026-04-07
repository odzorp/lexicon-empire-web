"use client";

import Link, { LinkProps } from "next/link";
import { MouseEvent, ReactNode } from "react";

declare global {
  interface Window {
    dataLayer?: Array<Record<string, string>>;
  }
}

type Props = LinkProps & {
  className?: string;
  children: ReactNode;
  eventName: string;
  eventLabel: string;
};

export default function CtaLink({
  className,
  children,
  eventName,
  eventLabel,
  ...props
}: Props) {
  function trackClick() {
    if (typeof window === "undefined") return;
    window.dataLayer = window.dataLayer ?? [];
    window.dataLayer.push({
      event: eventName,
      label: eventLabel,
      href: String(props.href),
    });
  }

  return (
    <Link
      {...props}
      className={className}
      onClick={(event: MouseEvent<HTMLAnchorElement>) => {
        trackClick();
        props.onClick?.(event);
      }}
    >
      {children}
    </Link>
  );
}

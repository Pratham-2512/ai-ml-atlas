"use client";

import type { AnchorHTMLAttributes, MouseEvent } from "react";
import { scrollToId } from "@/lib/scroll";

type Props = { to: string } & AnchorHTMLAttributes<HTMLAnchorElement>;

export default function ScrollLink({ to, onClick, children, ...rest }: Props) {
  function handleClick(e: MouseEvent<HTMLAnchorElement>) {
    e.preventDefault();
    scrollToId(to);
    onClick?.(e);
  }

  return (
    <a href={`#${to}`} onClick={handleClick} {...rest}>
      {children}
    </a>
  );
}

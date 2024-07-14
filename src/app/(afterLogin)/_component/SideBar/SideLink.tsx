"use client";

import Link from "next/link";
import { useSelectedLayoutSegment } from "next/navigation";
import { ReactNode } from "react";
import classes from "./sidebar.module.scss";

interface SideLinkProps {
  children: ReactNode;
  href: string;
}

export default function SideLink({ children, href }: SideLinkProps) {
  const segment = useSelectedLayoutSegment();
  const isSegment = href.slice(1);

  return (
    <Link
      href={href}
      className={segment === isSegment ? classes.active : undefined}
    >
      {children}
    </Link>
  );
}

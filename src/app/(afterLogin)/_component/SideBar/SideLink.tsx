"use client";

import Link from "next/link";
import { useSelectedLayoutSegment } from "next/navigation";
import { ReactNode } from "react";
import classes from "./sidebar.module.scss";

interface SideLinkProps {
  children: ReactNode;
  href: string;
}

const EXPLORE_PATH = ["search", "explore"];

export default function SideLink({ children, href }: SideLinkProps) {
  const segment = useSelectedLayoutSegment();
  const isSegment = href.slice(1);

  const classFunc = (): string | undefined => {
    if (isSegment === "explore") {
      return EXPLORE_PATH.includes(segment ?? "") ? classes.active : undefined;
    } else {
      return segment === isSegment ? classes.active : undefined;
    }
  };

  return (
    <Link href={href} className={classFunc()}>
      {children}
    </Link>
  );
}

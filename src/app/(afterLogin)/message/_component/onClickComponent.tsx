"use client";
import { useRouter } from "next/navigation";
import { ReactNode } from "react";

export default function OnclickComponent({
  children,
}: {
  children: ReactNode;
}) {
  const router = useRouter();

  return <div onClick={() => router.push("/")}>{children}</div>;
}

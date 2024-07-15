"use client";

import HomePage from "@/app/(afterLogin)/home/page";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function PhotoPage() {
  const router = useRouter();
  useEffect(() => {
    router.back();
  }, [router]);
  return null;
}

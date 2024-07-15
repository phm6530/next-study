"use client";

import SearchFilter from "@/app/(afterLogin)/_component/Search/SearchFilter";
import SearchInput from "@/app/(afterLogin)/_component/Search/SearchInput";
import TrendSection from "@/app/(afterLogin)/_component/TrendSection/TrendSection";
import { usePathname } from "next/navigation";

export default function RightContents() {
  const pathname = usePathname();

  if (pathname === "/explore") {
    return <>추천인</>;
  }

  if (pathname === "/search") {
    return (
      <>
        <SearchFilter />
        <TrendSection />
      </>
    );
  }

  return (
    <>
      {/* 검색창 */}
      <SearchInput />
      <TrendSection />
    </>
  );
}

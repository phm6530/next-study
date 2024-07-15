"use client";

import {
  usePathname,
  useRouter,
  useSearchParams,
  useSelectedLayoutSegment,
} from "next/navigation";
import classes from "./tab.module.scss";
import useStore from "@/app/util/store";

export default function Tab() {
  const { homeTab: tab, setTab } = useStore();

  const router = useRouter();
  const searchParams = useSearchParams();
  const pathname = usePathname();

  const onClickHot = (tab: "rec" | "fol") => {
    setTab(tab);
    const newParams = new URLSearchParams(searchParams.toString());

    if (tab === "rec") {
      newParams.delete("f");
      router.replace(`${pathname}?q=${newParams.get("q")}`);
    } else {
      newParams.set("f", tab);
      router.replace(`${pathname}?${newParams.toString()}`);
    }
  };

  return (
    <div className={classes.tab}>
      <div
        className={tab === "rec" ? classes.active : undefined}
        onClick={() => onClickHot("rec")}
      >
        추천
      </div>
      <div
        className={tab === "fol" ? classes.active : undefined}
        onClick={() => onClickHot("fol")}
      >
        팔로우 중
      </div>
    </div>
  );
}

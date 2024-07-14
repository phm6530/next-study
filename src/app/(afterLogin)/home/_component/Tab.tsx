"use client";

import classes from "./tab.module.scss";
import useStore from "@/app/util/store";

export default function Tab() {
  const { homeTab: tab, setTab } = useStore();

  return (
    <div className={classes.tab}>
      <div
        className={tab === "rec" ? classes.active : undefined}
        onClick={() => setTab("rec")}
      >
        추천
      </div>
      <div
        className={tab === "fol" ? classes.active : undefined}
        onClick={() => setTab("fol")}
      >
        팔로우 중
      </div>
    </div>
  );
}

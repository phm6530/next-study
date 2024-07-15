import Tab from "@/app/(afterLogin)/home/_component/Tab";
import { ReactNode } from "react";
import classes from "./FixedHeader.module.scss";

export default function FixedHeader({ children }: { children: ReactNode }) {
  return (
    <div className={classes.FixedHeader}>
      <div className={classes.FixedHeaderContents}>{children}</div>
      <Tab />
    </div>
  );
}

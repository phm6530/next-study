import TrendItem from "@/app/(afterLogin)/_component/TrendSection/TrendItem";
import classes from "./TrendSection.module.scss";

export default function TrendSection() {
  return (
    <>
      <h3>Trend Section</h3>
      <div className={classes.ListWrapper}>
        <TrendItem />
        <TrendItem />
        <TrendItem />
        <TrendItem />
        <TrendItem />
      </div>
    </>
  );
}

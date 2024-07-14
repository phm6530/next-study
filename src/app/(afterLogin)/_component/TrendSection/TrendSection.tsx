import TrendItem from "@/app/(afterLogin)/_component/TrendSection/TrendItem";
import classes from "./TrendSection.module.scss";

export default function TrendSection() {
  return (
    <div className={classes.TrendWrapper}>
      <h1>Trend Section</h1>
      <div className={classes.ListWrapper}>
        <TrendItem />
        <TrendItem />
        <TrendItem />
        <TrendItem />
        <TrendItem />
        <TrendItem />
        <TrendItem />
        <TrendItem />
        <TrendItem />
        <TrendItem />
        <TrendItem />
        <TrendItem />
        <TrendItem />
        <TrendItem />
        <TrendItem />
        <TrendItem />
        <TrendItem />
        <TrendItem />
        <TrendItem />
        <TrendItem />
      </div>
    </div>
  );
}

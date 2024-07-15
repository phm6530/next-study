import TrendItem from "@/app/(afterLogin)/_component/TrendSection/TrendItem";
import classes from "./TrendSection.module.scss";

export default function TrendSection() {
  return (
    <div className={classes.TrendWrapper}>
      <h2>나를 위한 트랜드</h2>
      <div className={classes.listWrapper}>
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

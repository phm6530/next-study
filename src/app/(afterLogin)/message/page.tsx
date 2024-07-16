import Room from "@/app/(afterLogin)/message/_component/Room";
import classes from "./messagePage.module.scss";

export default function page() {
  return (
    <div className={classes.wrap}>
      <div className={classes.pageHeader}>
        <h1>Message</h1>
        <div className={classes.searchForm}>
          <input type="text" placeholder="쪽지 검색하기" />
        </div>
        <div className={classes.roomList}>
          <Room />
          <Room />
          <Room />
          <Room />
        </div>
      </div>
    </div>
  );
}

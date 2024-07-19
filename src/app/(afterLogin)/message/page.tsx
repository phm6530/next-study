import Room from "@/app/(afterLogin)/message/_component/Room";
import classes from "./messagePage.module.scss";
import dynamic from "next/dynamic";

export default function page() {
  const DynamicFramer = dynamic(
    () => import("@/app/_component/animation/Framer"),
    {
      ssr: false, // 서버 사이드 렌더링을 사용하지 않음
      loading: () => <p>Loading...</p>, // 로딩 컴포넌트
    }
  );
  return (
    <DynamicFramer>
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
    </DynamicFramer>
  );
}

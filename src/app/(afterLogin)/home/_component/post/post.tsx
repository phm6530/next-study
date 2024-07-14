import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import timezone from "dayjs/plugin/timezone";
import utc from "dayjs/plugin/utc";
import "dayjs/locale/ko";
import classes from "./post.module.scss";
import Image from "next/image";

export default function Post() {
  dayjs.extend(utc);
  dayjs.extend(timezone);
  dayjs.extend(relativeTime);
  dayjs.locale("ko");

  //   const now = dayjs().tz("Asia/Seoul");

  //   console.log(now.format("YYYY-MM-DD HH:mm:ss"));
  //   console.log("현재 한국 시간:", now.fromNow());

  const target = {
    user: {
      id: "hyunmin",
      nickname: "리슨업",
      profileImg: null,
    },
    contents: "clone Coding 중 ..",
    createAt: new Date(),
    images: [],
  };

  const timeSet = (time: Date | string) => {
    return dayjs(time).fromNow();
  };

  return (
    <div className={classes.postItemGrid}>
      <div className={classes.userImg}>{target.user.profileImg}</div>
      <div className={classes.userId}>
        <b>{target.user.nickname}</b> <span>{target.user.id} </span>
      </div>

      {timeSet(target.createAt)}
      <div className={classes.userContents}>{target.contents}</div>
      <div className={classes.imgArea}>
        <Image
          src="/images/cx.jpg"
          alt="CX Image"
          width={800} // 원본 이미지의 너비
          height={600} // 원본 이미지의 높이
          layout="responsive"
          objectFit="contain"
        />
      </div>
    </div>
  );
}

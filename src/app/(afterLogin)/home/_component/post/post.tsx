import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import timezone from "dayjs/plugin/timezone";
import utc from "dayjs/plugin/utc";
import "dayjs/locale/ko";
import classes from "./post.module.scss";
import Image from "next/image";
import PostAticle from "@/app/(afterLogin)/_component/post/PostAticle";
import { postTarget } from "@/app/types/post";
import Link from "next/link";
import PostImages from "@/app/(afterLogin)/home/_component/post/postImages";

export default function Post() {
  dayjs.extend(utc);
  dayjs.extend(timezone);
  dayjs.extend(relativeTime);
  dayjs.locale("ko");

  //   const now = dayjs().tz("Asia/Seoul");

  //   console.log(now.format("YYYY-MM-DD HH:mm:ss"));
  //   console.log("현재 한국 시간:", now.fromNow());

  const target: postTarget = {
    postId: 1,
    post: {
      user: {
        userId: "hyunmin",
        nickname: "리슨업",
        profileImg: null,
      },
      contents: "clone Coding 중 ..",
      createAt: new Date(),
      images: [{ imageId: 1, src: "/images/cx.jpg", alt: "CX Image" }],
    },
  };

  const timeSet = (time: Date | string) => {
    return dayjs(time).fromNow();
  };

  const { postId, post } = target;

  return (
    <PostAticle user={post.user} postId={postId}>
      <div className={classes.userImg}>{post.user.profileImg}</div>

      <div className={classes.userId}>
        <Link href={`/modalDetail/${post.user.userId}`}>
          <b>{post.user.nickname}</b>
        </Link>
        <span>{post.user.userId} </span>
      </div>

      {timeSet(post.createAt)}
      <div className={classes.userContents}>{post.contents}</div>
      <div className={classes.imgArea}>
        {post.images.map((img, idx) => (
          <PostImages
            key={`post-Img-${idx}`}
            postId={postId}
            userId={post.user.userId}
            imgData={img}
          />
        ))}
      </div>
    </PostAticle>
  );
}

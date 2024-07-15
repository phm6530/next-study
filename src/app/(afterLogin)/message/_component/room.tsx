import classes from "./Room.module.scss";
import Image from "next/image";
import dayjs from "dayjs";
import "dayjs/locale/ko";
import relativeTime from "dayjs/plugin/relativeTime";
import { MessageProps } from "@/app/types/message";
import Link from "next/link";
export default function Room() {
  dayjs.locale("ko");
  dayjs.extend(relativeTime);

  const user: MessageProps = {
    userId: "hero",
    nickname: "영웅",
    profileImg: null,
    Messages: [
      { roomId: 123, content: "안녕하세요!!.", createdAt: new Date() },
      { roomId: 123, content: "안녕하세요.", createdAt: new Date() },
      { roomId: 123, content: "안녕히가세요.", createdAt: new Date() },
    ],
  };

  const { userId, nickname, profileImg, Messages } = user;
  return (
    <div className={classes.RoomWrapper}>
      <div className={classes.avatar}>
        {profileImg && <Image src={"/img"} fill alt="" />}
      </div>

      <div>
        <b>{nickname}</b> <span className={classes.userId}>@{userId}</span>
        <span className={classes.fromNow}>
          {dayjs(user.Messages?.at(-1)?.createdAt).fromNow()}
        </span>
      </div>

      <div>{Messages[0].content}</div>
    </div>
  );
}

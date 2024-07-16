import { chatMessage, ChatRoomMessageProps } from "@/app/types/message";
import classes from "../messagePage.module.scss";

export default function InsideRoom({
  params,
}: {
  params: { roomNumber: number };
}) {
  const { roomNumber } = params; // 추후 사용

  const ChatRoomMessage: ChatRoomMessageProps = {
    you: {
      userId: "test",
      nickname: "타인임",
      profileImg: null,
      signupDate: "2022-5-5",
      followers: [],
    },
    messages: [
      {
        roomId: 1,
        target: "you",
        content: "안녕하세요?",
        createdAt: "2022-1-11",
      },
      {
        roomId: 1,
        target: "me",
        content: "안녕하세요? 반갑습니다....",
        createdAt: "2022-1-11",
      },
    ],
  };

  const { you, messages } = ChatRoomMessage;

  const isStringType = (arg: unknown) => {
    if (typeof arg === "string") {
      return arg;
    }
  };

  const getMessageClass = (arg: Pick<chatMessage, "target">["target"]) => {
    if (arg === "you") {
      return classes.youMsg;
    } else if (arg === "me") {
      return classes.meMsg;
    } else {
      throw new Error("에러!") as never;
    }
  };

  return (
    <>
      <div className={classes.pageHeader}>
        <h1>{you.nickname}</h1>
      </div>

      <div className={classes.chatPartner}>
        <div className={classes.avatar}>{you.profileImg}</div>
        <div className={classes.userId}>{you.userId}</div>
        <div className={classes.userNick}>{you.nickname}</div>
        <div className={classes.createdAt}>{you.signupDate}</div>
        <div className={classes.commonFollowers}>
          {you.followers.length === 0
            ? "나와 동일한 팔로우 하는 친구가 없습니다. "
            : you.followers.map((follow) => {
                return <div>{follow.string}</div>;
              })}
        </div>
      </div>

      {/* Msg Area */}
      {messages.map((msg) => {
        return (
          <div
            className={`${classes.messageWrap} ${getMessageClass(msg.target)}`}
          >
            <div
              className={`${classes.msgBubble} ${
                msg.target === "me" ? classes.meBubble : undefined
              }`}
            >
              {msg.content}
            </div>
            <div className={classes.msgSummary}>
              {isStringType(msg.createdAt)} ＊확인함
            </div>
          </div>
        );
      })}
    </>
  );
}

"use client";

import { UserProps } from "@/app/types/user";
import { useRouter } from "next/navigation";
import { ReactNode } from "react";
import classes from "@/app/(afterLogin)/home/_component/post/post.module.scss";

export default function PostAticle({
  user,
  postId,
  children,
}: {
  user: UserProps;
  postId: number;
  children: ReactNode;
}) {
  const router = useRouter();
  const { userId } = user;

  const onClickHandler = () => {
    router.push(`/${userId}/status/${postId}`);
  };

  return (
    <article className={classes.postItemGrid} onClickCapture={onClickHandler}>
      {children}
    </article>
  );
}

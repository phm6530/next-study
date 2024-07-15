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

  const onClickHandler = (e: React.MouseEvent<HTMLElement>) => {
    const target = e.target as HTMLElement;

    // 클릭된 요소가 a 태그 또는 그 안의 자식인지 확인
    if (target.closest("a")) {
      return;
    }

    router.push(`/modalDetail/${userId}/status/${postId}`);
  };

  return (
    <article className={classes.postItemGrid} onClickCapture={onClickHandler}>
      {children}
    </article>
  );
}

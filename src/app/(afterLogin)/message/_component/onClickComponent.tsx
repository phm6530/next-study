"use client";
import { MessageProps } from "@/app/types/message";
import { useRouter } from "next/navigation";
import { ReactNode } from "react";

interface OnclickComponent extends Pick<MessageProps, "roomId"> {
  children: ReactNode;
}

export default function OnclickComponent({
  roomId,
  children,
}: OnclickComponent) {
  const router = useRouter();

  return (
    <div onClick={() => router.push(`/message/${roomId}`)}>{children}</div>
  );
}

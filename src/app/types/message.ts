import { UserProps, YouProps } from "@/app/types/user";

export type MessageProps = {
  roomId: number;
  content: string;
  createdAt: string | Date;
};

export interface MessagePageProps extends UserProps {
  Messages: MessageProps[];
}

export interface chatMessage extends MessageProps {
  target: "me" | "you";
}

export interface ChatRoomMessageProps {
  you: YouProps;
  messages: chatMessage[];
}

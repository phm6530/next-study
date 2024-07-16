import { UserProps } from "@/app/types/user";

export type MessageProps = {
  roomId: number;
  content: string;
  createdAt: string | Date;
};

export interface MessagePageProps extends UserProps {
  Messages: MessageProps[];
}

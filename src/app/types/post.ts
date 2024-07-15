import { UserProps } from "@/app/types/user";

export type PostImg = { imageId: number; src: string; alt: string };

export interface postProps {
  user: UserProps;
  contents: string;
  createAt: string | Date;
  images: PostImg[];
}

export interface postTarget {
  postId: number;
  post: postProps;
}

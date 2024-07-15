import { PostImg } from "@/app/types/post";
import { UserProps } from "@/app/types/user";
import Image from "next/image";
import Link from "next/link";

interface PostimagesProps extends Pick<UserProps, "userId"> {
  postId: number;
  imgData: PostImg;
}

export default function PostImages({
  postId,
  userId,
  imgData,
}: PostimagesProps) {
  const { imageId } = imgData;
  return (
    <Link href={`/${userId}/status/${postId}/photo/${imageId}`}>
      <Image
        src="/images/cx.jpg"
        alt="CX Image"
        width={800} // 원본 이미지의 너비
        height={600} // 원본 이미지의 높이
        style={{ objectFit: "cover", width: "100%", height: "auto" }}
        priority
      />
    </Link>
  );
}

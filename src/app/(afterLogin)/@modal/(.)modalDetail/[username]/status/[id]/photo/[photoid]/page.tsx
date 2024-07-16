import ModalClose from "@/app/(afterLogin)/_component/ui/ModalClose";
import classes from "./modal.module.scss";
import PostList from "@/app/(afterLogin)/home/_component/post/postList";
import Image from "next/image";

export default function modalPage() {
  return (
    <div className={classes.backDrop}>
      <div className={classes.modalContents}>
        <div className={classes.modalHeader}>
          <ModalClose />
        </div>
        <div className={classes.imgWrapper}>
          <Image
            src="/images/cx.jpg"
            alt="CX Image"
            width={800} // 원본 이미지의 너비
            height={600} // 원본 이미지의 높이
            style={{ objectFit: "cover", width: "100%", height: "auto" }}
            priority
          />
        </div>
        <div className={classes.scrollWrapper}>
          <PostList />
        </div>
      </div>
    </div>
  );
}

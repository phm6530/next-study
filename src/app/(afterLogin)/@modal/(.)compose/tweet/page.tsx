import PostForm from "@/app/(afterLogin)/home/_component/postForm/PostForm";
import classes from "./tweetModal.module.scss";
import ModalClose from "@/app/(afterLogin)/_component/ui/ModalClose";

export default function Page() {
  return (
    <div className={classes.modalBackDrop}>
      <div className={classes.modalWrapper}>
        <ModalClose />
        <PostForm />
      </div>
    </div>
  );
}

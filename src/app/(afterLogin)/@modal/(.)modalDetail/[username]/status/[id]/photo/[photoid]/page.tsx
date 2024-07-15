import ModalClose from "@/app/(afterLogin)/_component/ui/ModalClose";
import classes from "./modal.module.scss";

export default function modalPage() {
  return (
    <div className={classes.backDrop}>
      <div className={classes.modalContents}>
        <ModalClose />
      </div>
    </div>
  );
}

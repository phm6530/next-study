"use client";
import classes from "./CommentForm.module.scss";

import {
  ChangeEvent,
  ChangeEventHandler,
  FormEvent,
  FormEventHandler,
  useRef,
  useState,
} from "react";

export default function CommentForm() {
  const [txtValue, setTxtValue] = useState<string>("");
  const ref = useRef<HTMLInputElement>(null);
  const [pickImg, setPickImg] = useState<string>();

  const me = {
    id: "squirrel309",
    image: null,
  };

  const onChangeHandler: ChangeEventHandler<HTMLTextAreaElement> = (
    e: ChangeEvent<HTMLTextAreaElement>
  ) => {
    const val = e.target.value;
    setTxtValue(val);
  };

  //form Event Handler
  const onSubmitHandler: FormEventHandler<HTMLFormElement> = (e: FormEvent) => {
    e.preventDefault();
  };

  const imgClickTrigger = () => {
    ref.current?.click();
  };

  const previewHandler: ChangeEventHandler<HTMLInputElement> = (
    e: ChangeEvent<HTMLInputElement>
  ) => {
    if (e.target.files) {
      const reader = new FileReader();
      reader.readAsDataURL(e.target.files[0]);

      reader.onload = () => {
        const result = reader.result;
        if (typeof result === "string") {
          setPickImg(result);
        }
      };
    }
  };

  return (
    <>
      <form onSubmit={onSubmitHandler} className={classes.formGrid}>
        <textarea
          className={classes.postFormTextarea}
          value={txtValue}
          onChange={onChangeHandler}
          placeholder="답글 게시하기"
        />
        <input
          type="file"
          hidden
          name="imgUploader"
          multiple
          ref={ref}
          onChange={previewHandler}
        />
        <button onClick={imgClickTrigger}>img</button>
        <button disabled className={classes.submitPost}>
          게시하기
        </button>
      </form>
    </>
  );
  return <></>;
}

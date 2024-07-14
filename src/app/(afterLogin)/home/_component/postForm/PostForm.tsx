"use client";

import {
  ChangeEvent,
  ChangeEventHandler,
  FormEvent,
  FormEventHandler,
  useRef,
  useState,
} from "react";
import classes from "./postForm.module.scss";

export default function PostForm() {
  const [txtValue, setTxtValue] = useState<string>("");
  const ref = useRef<HTMLInputElement>(null);

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

  return (
    <form onSubmit={onSubmitHandler}>
      <textarea
        className={classes.postFormTextarea}
        value={txtValue}
        onChange={onChangeHandler}
        placeholder="무슨일이 있으셨나요?"
      />
      <input type="file" hidden name="imgUploader" multiple ref={ref} />
      <button onClick={imgClickTrigger}>img</button>
      <button disabled>게시하기</button>
    </form>
  );
}

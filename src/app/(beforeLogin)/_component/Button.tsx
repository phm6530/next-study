"use client";

import ModalBackDrop from "@/app/component/Modal/ModalBackDrop";
import { useState } from "react";
import styles from "@/app/page.module.css";

const Button = () => {
  const [view, setView] = useState<boolean>(false);
  return (
    <>
      {view && <ModalBackDrop />}
      <button className={styles.login} onClick={() => setView(true)}>
        로그인
      </button>
    </>
  );
};

export default Button;

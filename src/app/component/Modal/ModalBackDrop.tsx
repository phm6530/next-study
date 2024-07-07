"use client";
import { createPortal } from "react-dom";
import S from "./Modal.module.css";
import { useEffect, useState } from "react";

export default function ModalBackDrop() {
  const [mount, setMount] = useState<boolean>(false);

  /**
   Next.js는 CSR사용하려면 useEffect를 이용하여 Mount 시점을 이용하자 
   SSR은 객체형태로 CLient에 전달되기 전에는 DOM이 페인팅 되지 않았기떄문에 
   Mount 되지않았음
  */

  useEffect(() => {
    setMount(true);
    return () => setMount(false);
  }, []);

  if (!mount) return;

  return createPortal(
    <div className={S.backdrop_bg}>모달</div>,
    document.getElementById("modal-backdrop") as HTMLDivElement
  );
}

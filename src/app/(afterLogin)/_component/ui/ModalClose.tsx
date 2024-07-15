"use client";

import { useRouter } from "next/navigation";
import { IoCloseSharp } from "react-icons/io5";
export default function ModalClose() {
  const router = useRouter();

  const close = () => {
    router.back();
  };

  return (
    <>
      {" "}
      <div onClick={close} style={{ cursor: "pointer" }}>
        <IoCloseSharp />
      </div>
    </>
  );
}

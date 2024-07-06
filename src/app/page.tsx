import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <>
      <div>
        <div className={styles.logo_section}>
          <Image
            src="/images/cx.jpg"
            alt="logo"
            layout="fill"
            objectFit="cover"
          />
        </div>
        <div className={styles.right}>
          <h1>지금 일어나고 있는 일</h1>
        </div>
      </div>
    </>
  );
}

import Image from "next/image";
import styles from "@/app/(beforeLogin)/page.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.left}>
          <div>
            <h1>Welcome to My Website</h1>
            <div
              style={{
                position: "relative",
                width: "100%",
                height: "600px",
                marginTop: "20px",
              }}
            >
              <Image
                src="https://www.h-creations.com/uploads/blog/4fae71e0-eb58-41e3-8eff-6b5a38f90e0a/Route_20240703133607.jpg"
                alt="logo"
                fill
                style={{ objectFit: "contain" }}
                sizes="(max-width: 600px) 100vw, 50vw"
                priority
              />
            </div>
          </div>
        </div>

        <div className={styles.right}>
          <h1>지금 일어나고 있는 일</h1>
          <h2>지금 가입하세요.</h2>
          <Link href="/i/flow/signup" className={styles.signup}>
            계정 만들기
          </Link>
          <h3>이미 트위터에 가입하셨나요?</h3>
          <Link href="/i/flow/login" className={styles.login}>
            로그인
          </Link>
        </div>
      </div>
    </>
  );
}

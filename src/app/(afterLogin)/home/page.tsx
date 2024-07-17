import FixedHeader from "@/app/(afterLogin)/_component/FixedHeader";
import PostList from "@/app/(afterLogin)/home/_component/post/postList";
import PostForm from "@/app/(afterLogin)/home/_component/postForm/PostForm";

import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import tz from "dayjs/plugin/timezone";

export default function HomePage() {
  dayjs.extend(utc);
  dayjs.extend(tz);

  // 한국 시간대 설정
  const koreaTime = dayjs().tz("Asia/Seoul").format("YYYY-MM-DD HH:mm:ss");

  console.log(koreaTime); // 현재 한국 시간 출력

  return (
    <>
      <main className="relative">
        <FixedHeader>
          <h1>Home Page</h1>
        </FixedHeader>
        <PostForm />
        <PostList />
      </main>
    </>
  );
}

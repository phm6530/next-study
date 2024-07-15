import FixedHeader from "@/app/(afterLogin)/_component/FixedHeader";
import PostList from "@/app/(afterLogin)/home/_component/post/postList";
import PostForm from "@/app/(afterLogin)/home/_component/postForm/PostForm";

export default function HomePage() {
  console.log("홈 진입");
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

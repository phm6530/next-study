import PostForm from "@/app/(afterLogin)/home/_component/postForm/PostForm";
import Tab from "@/app/(afterLogin)/home/_component/Tab";

export default function HomePage() {
  return (
    <>
      <main style={{ position: "relative", height: "100vh" }}>
        <Tab />
        <PostForm />
      </main>
    </>
  );
}

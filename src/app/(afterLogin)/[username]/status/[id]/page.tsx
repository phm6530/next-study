import CommentForm from "@/app/(afterLogin)/[username]/status/[id]/_component/CommentForm";
import Post from "@/app/(afterLogin)/home/_component/post/post";

export default function ProfileDetailPage({
  params,
}: {
  params: { id: number };
}) {
  const postId = params.id;
  return (
    <>
      <h3>h1 - {postId}</h3>
      <Post />
      <CommentForm />
    </>
  );
}

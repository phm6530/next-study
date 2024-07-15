import Post from "@/app/(afterLogin)/home/_component/post/post";
import { UserProps } from "@/app/types/user";

export default function profileDashBoard({
  params,
}: {
  params: { username: string };
}) {
  const user: UserProps = {
    userId: "hyunmin",
    nickname: "리슨업",
    profileImg: null,
  };

  const name = params.username;

  return (
    <>
      <h1>[username] : {name}</h1>
      <h2>{user.nickname}</h2>
      <div>
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
      </div>
    </>
  );
}

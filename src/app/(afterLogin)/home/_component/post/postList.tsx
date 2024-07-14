import Post from "@/app/(afterLogin)/home/_component/post/post";
import classes from "./post.module.scss";

export default function PostList() {
  const arr = [...Array(10).keys()];
  console.log(arr);

  return (
    <div className={classes.postItme_List}>
      {arr.map((_, idx) => {
        return <Post key={`post-${idx}`} />;
      })}
    </div>
  );
}

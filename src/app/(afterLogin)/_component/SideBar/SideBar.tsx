import SideLink from "@/app/(afterLogin)/_component/SideBar/SideLink";
import classes from "./sidebar.module.scss";
import Link from "next/link";

export default function SideBar() {
  const links = [
    { path: "/home", pathName: "Home" },
    { path: "/search", pathName: "탐색하기" },
    { path: "/message", pathName: "쪽지" },
    { path: "/profile", pathName: "프로필" },
  ];

  return (
    <div className={classes.SideWrapper}>
      <div>logo</div>
      <nav>
        <ul>
          {links.map((link, idx) => {
            return (
              <li key={`${link}-${idx}`}>
                <SideLink href={link.path}>{link.pathName}</SideLink>
              </li>
            );
          })}
        </ul>
      </nav>
      <Link href="/compose/tweet" className={classes.btn}>
        게시하기
      </Link>

      <button className={classes.logout}>로그아웃</button>
    </div>
  );
}

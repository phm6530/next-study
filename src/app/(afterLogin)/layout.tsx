import SideBar from "@/app/(afterLogin)/_component/SideBar/SideBar";
import "@/app/styles/globals.scss";
import classes from "./layout.module.scss";
import SearchInput from "@/app/(afterLogin)/_component/Search/SearchInput";
import TrendSection from "@/app/(afterLogin)/_component/TrendSection/TrendSection";

export default function AfterLoginLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <body className={classes.bodyAlign}>
        <div className={classes.mainGrid}>
          {/* sider bar */}
          <SideBar />
          <div className={classes.rightWrapper}>
            <div className={classes.contentsArea}>{children}</div>
            <div className={classes.rightSection}>
              {/* 검색창 */}
              <SearchInput />
              <TrendSection />
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}

import SideBar from "@/app/(afterLogin)/_component/SideBar/SideBar";
import "@/app/styles/globals.scss";
import classes from "./layout.module.scss";
import RightContents from "@/app/(afterLogin)/_component/RightContents";
import pool from "@/app/util/db";
import { PoolConnection } from "mysql2/promise";

export default async function AfterLoginLayout({
  children,
  modal,
}: {
  children: React.ReactNode;
  modal: React.ReactNode;
}) {
  async function runTransaction<R>(
    callback: (conn: PoolConnection) => Promise<R>
  ): Promise<R> {
    const conn = await pool.getConnection();
    try {
      await conn.beginTransaction();

      const result = await callback(conn); // 콜백 함수 실행

      await conn.commit(); // 트랜잭션 커밋
      return result;
    } catch (error) {
      if (conn) {
        await conn.rollback(); // 트랜잭션 롤백
      }
      throw error;
    } finally {
      if (conn) {
        conn.release();
      }
    }
  }

  const [row] = await runTransaction(async (conn: PoolConnection) => {
    const sql = "SELECT * FROM myportpolio.project_roles;";
    return conn.query(sql);
  });

  return (
    <>
      {modal}
      <div className={classes.mainGrid}>
        {/* sider bar */}
        <SideBar />
        <div className={classes.rightWrapper}>
          <div className={classes.contentsArea}>{children}</div>
          <div className={classes.rightSection}>
            <RightContents />
          </div>
        </div>
      </div>
    </>
  );
}

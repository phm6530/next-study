import mysql from "mysql2/promise";

const pool = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  timezone: "+09:00",
});

export async function testConnection() {
  try {
    const connection = await pool.getConnection();
    connection.release();
    console.log("연결완료");
  } catch (error) {
    if (error instanceof Error) {
      console.log("연결오류", error.message);
    }
  }
}

export default pool;

import mysql from "mysql2/promise";
import "dotenv/config"
export const pool = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  waitForConnections: true,
  connectionLimit: 10,   // handles multiple requests
  queueLimit: 0,
});

export async function connectDB() {
  try {
    const conn = await pool.getConnection();
    console.log(" MySQL Connected (Pool Active)");
    conn.release();
  } catch (err) {
    console.error("DB Connection Failed:", err.message);
  }
}

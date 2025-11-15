import { pool } from "../config/connectDB.js";

export const createTableUser= async()=> {
  const query = `
    CREATE TABLE IF NOT EXISTS admins (
      aid VARCHAR(5) PRIMARY KEY,
      username VARCHAR(150)  NOT NULL,
      email VARCHAR(100) NOT NULL,
      password VARCHAR(100) NOT NULL,
      phone VARCHAR(150) NOT NULL
    );
  `;
  await pool.query(query);
  console.log("✅ admins  table created");
}
import { pool } from "../config/connectDB.js";

export const  createTableJob= async () =>{
  const query = `
  CREATE TABLE IF NOT EXISTS jobs (
    jid VARCHAR(5) PRIMARY KEY,
    title VARCHAR(150) NOT NULL,
    location VARCHAR(100) NOT NULL,
    posting_date DATE NOT NULL,
    deadLine DATE NOT NULL,
    status VARCHAR(100) DEFAULT 'active',
    hr_mail VARCHAR(150) NOT NULL,
    hr_phone VARCHAR(15) NOT NULL,
    salary DECIMAL(10,2) NOT NULL,
    domain ENUM('IT', 'Electrical', 'Mechanical', 'Civil', 'Finance', 'Law') NOT NULL,
    typeOf ENUM('permanent', 'intern') NOT NULL DEFAULT 'permanent',
    imageLogo VARCHAR(150) NOT NULL,
    company_name VARCHAR(200) NOT NULL,
    description TEXT,
    skillsRequired JSON,
    education TEXT,
    role JSON,
    details TEXT
);

  `;
  await pool.query(query);
  console.log(" Jobs table created");
}

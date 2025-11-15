import { pool } from "../config/connectDB.js";

export const createTableSavedJob = async () => {
    const query = `CREATE TABLE IF NOT EXISTS savedJobs(
        sid VARCHAR(5) PRIMARY KEY NOT NULL,
        uid VARCHAR(5) NOT NULL,
        jid VARCHAR(5) NOT NULL,
        first_name VARCHAR(100) NOT NULL,
        last_name VARCHAR(100) NOT NULL,
        email VARCHAR(200) NOT NULL,
        phone VARCHAR(20) NOT NULL,
        college VARCHAR(200) NOT NULL,
        degree VARCHAR(100) NOT NULL,
        dob DATE NOT NULL,
        linkedin_url VARCHAR(300) NULL,
        github_url VARCHAR(300) NULL,
        resume_path VARCHAR(400) NOT NULL,
        address VARCHAR(200) NOT NULL,
        applied_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        UNIQUE(uid, jid),
        FOREIGN KEY (uid) REFERENCES users(uid) ON DELETE CASCADE,
        FOREIGN KEY (jid) REFERENCES jobs(jid) ON DELETE CASCADE
    );`;
    await pool.query(query);
    console.log("✅ savedJobs  table created");
};
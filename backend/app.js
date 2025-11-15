import express from "express";
import { connectDB } from "./config/connectDB.js";
import { createTableUser } from "./model/user_db.js";
import { createTableJob } from "./model/job_db.js";
import { createTableSavedJob } from "./model/savedJob_db.js";
import userRouter from "./route/userRouter.js";
import adminRouter from "./route/adminRouter.js";
import cors from 'cors'
import "dotenv/config"

const port=process.env.PORT || 4000
const app = express();

app.use(cors({
  origin: [
      'https://online-job-portal-6plg.onrender.com',
      'http://localhost:5173',  // For local development
      'http://localhost:4000'
  ],
  credentials: true
}))

app.use(express.json());
app.use(express.urlencoded({ extended: true }))


await connectDB();
await createTableUser();
await createTableJob();
await createTableSavedJob();



app.use("/user", userRouter);
app.use("/admin",adminRouter)
//app.use("/jobs", jobRoutes);


app.listen(port, () => console.log(`🚀 Server running on port ${port}`));

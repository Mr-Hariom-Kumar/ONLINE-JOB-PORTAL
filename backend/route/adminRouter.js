import express from "express"
import { addJobs, loginAdmin, registerAdmin,getAllJobs,getAllApplications } from "../controller/adminController.js"
import upload from "../middleware/multer.js"
import authAdmin from "../middleware/authAdmin.js"

const adminRouter=express.Router()
adminRouter.post("/register",registerAdmin)
adminRouter.post("/login",loginAdmin)
adminRouter.post("/add-job",upload.single("imageLogo"),authAdmin,addJobs)
adminRouter.get("/jobs", authAdmin, getAllJobs)
adminRouter.get("/applications", authAdmin, getAllApplications)

export default adminRouter
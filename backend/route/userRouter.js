import express from 'express'
import { registerUser,loginUser,applyJob, displayJob, getSavedJob} from '../controller/userController.js'
import authUser from '../middleware/AuthUser.js'
import upload from '../middleware/multer.js'

const userRouter=express.Router()

userRouter.post('/register',registerUser)
userRouter.post('/login',loginUser)
userRouter.get('/displayJob',displayJob)
userRouter.post('/apply/:jid',upload.single('resume'),authUser, applyJob)
userRouter.post('/savedJob',authUser, getSavedJob)
// userRouter.get('/get-profile',authUser,getProfile)

export default userRouter
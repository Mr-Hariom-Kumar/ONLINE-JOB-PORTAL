import bcrypt, { genSalt } from "bcrypt";
import validator from "validator";
import jwt from "jsonwebtoken";
import { pool } from "../config/connectDB.js";
import connectCloudinary from "../config/cloudinary.js";

//login user work
const generateUserId = async () => {
  const [rows] = await pool.query(
    "SELECT uid FROM users ORDER BY uid DESC LIMIT 1"
  );
  if (rows.length === 0) return "U0001";
  const lastId = rows[0].uid;
  const num = parseInt(lastId.substring(1)) + 1;
  return "U" + num.toString().padStart(4, "0");
};

const registerUser = async (req, res) => {
  try {
    const { username, email, password } = req.body;
    if (!email || !username || !password) {
      return res.json({ success: false, message: "missing details" });
    }

    if (!validator.isEmail(email)) {
      return res.json({ success: false, message: "Enter a valid email" });
    }
    if (password.length < 8) {
      return res.json({
        success: false,
        message: "enter strong password(i.e length >=8)",
      });
    }

    const [existingUsers] = await pool.query(
      "SELECT * FROM users WHERE email = ? OR username = ?",
      [email, username]
    );

    if (existingUsers.length > 0) {
      return res.json({ success: false, message: "User already exists" });
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    const uid = await generateUserId();

    await pool.query(
      "INSERT INTO users (uid, username, email, password) VALUES (?, ?, ?, ?)",
      [uid, username, email, hashedPassword]
    );

    const token = jwt.sign({ uid: uid, email: email }, process.env.JWT_SECRET, {
      expiresIn: "7d",
    });
    return res.json({
      success: true,
      message: "User registered successfully",
      token: token,
      user: { uid, username, email },
    });
  } catch (error) {
    console.log(error.message);
    res.json({ success: false, message: error.message });
  }
};

const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    const [users] = await pool.query("SELECT * FROM users WHERE email = ?", [
      email,
    ]);
    if (users.length === 0) {
      return res.json({ success: false, message: "No user found" });
    }
    const user = users[0];
    const isMatch = await bcrypt.compare(password, user.password);
    if (isMatch) {
      const token = jwt.sign(
        { uid: user.uid, email: user.email },
        process.env.JWT_SECRET,
        {
          expiresIn: "7d",
        }
      );

      return res.json({
        success: true,
        token: token,
        user: {
          uid: user.uid,
          username: user.username,
          email: user.email,
        },
      });
    } else {
      return res.json({ success: false, message: "Invalid credentials" });
    }
  } catch (error) {
    console.log(error.message);
    return res.json({ success: false, message: error.message });
  }
};

//apply job work
const generateSavedJobId = async () => {
  const [rows] = await pool.query(
    "SELECT sid FROM savedJobs ORDER BY sid DESC LIMIT 1"
  );
  if (rows.length === 0) return "S0001";

  const lastId = rows[0].sid;
  const num = parseInt(lastId.substring(1)) + 1;
  return "S" + num.toString().padStart(4, "0");
};

const applyJob = async (req, res) => {
  try {
    const {
      firstName,
      lastName,
      email,
      phone,
      college,
      degree,
      dob,
      address,
      linkedin,
      github,
    } = req.body;
    const resume = req.file;
    const {uid}=req.body
    const {jid } = req.params;
    const sid = await generateSavedJobId();
    const missingFields = [];
if (!firstName) missingFields.push('firstName');
if (!lastName) missingFields.push('lastName');
if (!email) missingFields.push('email');
if (!phone) missingFields.push('phone');
if (!college) missingFields.push('college');
if (!degree) missingFields.push('degree');
if (!dob) missingFields.push('dob');
if (!address) missingFields.push('address');

if (missingFields.length > 0) {
  return res.json({ 
    success: false, 
    message: `Missing credentials: ${missingFields.join(', ')}` 
  });
}
    if (!resume) {
      return res.json({ success: false, message: "please uplopad resume" });
    }

    const [existingApplication] = await pool.query(
      "SELECT * FROM savedJobs WHERE email = ? AND phone = ?",
      [email, phone]
    );

    if (existingApplication.length > 0) {
      return res.json({
        success: false,
        message: "Already applied for this job",
      });
    }

    const [users] = await pool.query("SELECT * FROM users WHERE uid = ?", [
      uid,
    ]);

    if (users.length === 0) {
      return res.json({ success: false, message: "User not found" });
    }

    const [jobs] = await pool.query("SELECT * FROM jobs WHERE jid = ?", [jid]);
    if (jobs.length === 0) {
      return res.json({ success: false, message: "Job not found" });
    }

    const cloudinary = await connectCloudinary();
    const resumeUpload = await cloudinary.uploader.upload(resume.path, {
      resource_type: "raw",
    });
    const resumePath = resumeUpload.secure_url;

    let addressToStore;
    try {
      const parsed =
        typeof address === "string" ? JSON.parse(address) : address;
      addressToStore = JSON.stringify(parsed);
    } catch (err) {
      addressToStore = String(address);
    }
    await pool.query(
      `INSERT INTO savedJobs 
            (sid, uid, jid, first_name, last_name, email, phone, college, degree, dob, linkedin_url, github_url, resume_path,address) 
            VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?,?)`,
      [
        sid,
        uid,
        jid,
        firstName,
        lastName,
        email,
        phone,
        college,
        degree,
        dob,
        linkedin || null,
        github || null,
        resumePath,
        addressToStore,
      ]
    );

    return res.json({
      success: true,
      message: "Job application submitted successfully",
      applicationId: sid,
    });
  } catch (error) {
    console.error("Apply Job Error:", error.message);
    return res.json({ success: false, message: error.message });
  }
};


const displayJob=async (req,res)=>{
  try{
  const [allJobs]=await pool.query("SELECT * FROM jobs")
  res.status(200).json({
    success: true,
    count: allJobs.length,
    data: allJobs
  });
}catch(error){
  console.error('Error fetching jobs:', error);
    res.status(500).json({
      success: false,
      message: 'Error fetching jobs',
      error: error.message
    });
}
}
const getSavedJob=async (req,res)=>{
  try{
    const [savedJob]=await pool.query("SELECT * FROM savedjobs")
    res.status(200).json({
      success: true,
      count: savedJob.length,
      data: savedJob
    });
    
  }catch(error){
    console.error('Error fetching savedjobs:', error);
    res.status(500).json({
      success: false,
      message: 'Error fetching savedjobs',
      error: error.message
    });
  }
  
}
// const viewSavedJobs= async (req,res)=>{

// }

export { registerUser, loginUser, applyJob,displayJob,getSavedJob };

import bcrypt, { genSalt } from "bcrypt";
import validator from "validator";
import jwt from "jsonwebtoken";
import { pool } from "../config/connectDB.js";
import connectCloudinary from "../config/cloudinary.js";

const generateAdminId = async () => {
  const [rows] = await pool.query(
    "SELECT aid FROM admins ORDER BY aid DESC LIMIT 1"
  );
  if (rows.length === 0) return "A0001";
  const lastId = rows[0].aid;
  const num = parseInt(lastId.substring(1)) + 1;
  return "A" + num.toString().padStart(4, "0");
};

const registerAdmin = async (req, res) => {
  try {
    const { username, email, password, phone } = req.body;
    if (!username || !email || !password || !phone) {
      return res.json({ success: false, message: "Missing credential" });
    }
    if (password.length < 8) {
      return res.json({ success: false, message: "Weak Password" });
    }

    if (!validator.isEmail(email)) {
      return res.json({ success: false, message: "invalid email" });
    }

    const [existingAdmins] = await pool.query(
      "SELECT * FROM admins WHERE email=? OR username= ?",
      [email, username]
    );

    if (existingAdmins.length > 0) {
     return  res.json({ success: false, message: "Admin Already exists" });
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    const aid = await generateAdminId();

    await pool.query(
      "INSERT INTO admins (aid, username, email, password,phone) VALUES (?, ?, ?, ?,?)",
      [aid, username, email, hashedPassword,phone]
    );

    const atoken = jwt.sign({ aid: aid, email: email }, process.env.JWT_SECRET, {
      expiresIn: "7d",
    });

    return res.json({
      success: true,
      message: "Admin registered successfully",
      atoken:atoken,
      user: { aid, username, email },
    });
  } catch (error) {
    console.log(error.message);
   return  res.json({ success: false, message: error.message });
  }
};

const loginAdmin=async (req,res)=>{
  const {email,password}=req.body
  const [admins]=await pool.query("SELECT * FROM admins WHERE email=?",[email]);
  if(admins.length===0){
    return res.json({success:false,message:"no admin found"})
  }
  const admin=admins[0]
  const isMatch=await bcrypt.compare(password,admin.password)
if(isMatch){
  const atoken=jwt.sign(
    {aid:admin.aid,email:admin.email},
    process.env.JWT_SECRET,
    { expiresIn: "7d",}
  )
  return res.json(
    {
        success: true,
        atoken: atoken,
        admin: {
          aid: admin.aid,
          username: admin.username,
          email: admin.email,
        },
    }
  );
} else {
      return res.json({ success: false, message: "Invalid credentials" });
    }
  
}




const generateJobId = async () => {
  const [rows] = await pool.query(
    "SELECT jid FROM jobs ORDER BY jid DESC LIMIT 1"
  );
  if (rows.length === 0) return "J0001";
  const lastId = rows[0].jid;
  const num = parseInt(lastId.substring(1)) + 1;
  return "J" + num.toString().padStart(4, "0");
};


const addJobs = async (req, res) => {
  try {
    const {
      title,
      location,
      posting_date,
      deadline,
      status,
      hr_mail,
      hr_phone,
      salary,
      domain,
      typeOf,
      company_name,
      description,
      education,
      details,
      skillsRequired,
      role
    } = req.body;

    const imageLogo = req.file;
    const { aid } = req.body;
    const jid = await generateJobId();

    // Validation
    const missingFields = [];
    if (!title) missingFields.push('title');
    if (!location) missingFields.push('location');
    if (!posting_date) missingFields.push('posting_date');
    if (!deadline) missingFields.push('deadline');
    if (!hr_mail) missingFields.push('hr_mail');
    if (!hr_phone) missingFields.push('hr_phone');
    if (!salary) missingFields.push('salary');
    if (!domain) missingFields.push('domain');
    if (!typeOf) missingFields.push('typeOf');
    if (!company_name) missingFields.push('company_name');

    if (missingFields.length > 0) {
      return res.json({
        success: false,
        message: `Missing credentials: ${missingFields.join(', ')}`
      });
    }

    if (!imageLogo) {
      return res.json({ success: false, message: "Please upload company logo" });
    }

    // Validate email
    if (!validator.isEmail(hr_mail)) {
      return res.json({ success: false, message: "Invalid HR email" });
    }

    // Validate domain
    const validDomains = ['IT', 'Electrical', 'Mechanical', 'Civil', 'Finance', 'Law'];
    if (!validDomains.includes(domain)) {
      return res.json({ 
        success: false, 
        message: `Invalid domain. Must be one of: ${validDomains.join(', ')}` 
      });
    }

    // Validate typeOf
    const validTypes = ['permanent', 'intern'];
    if (!validTypes.includes(typeOf)) {
      return res.json({ 
        success: false, 
        message: `Invalid job type. Must be 'permanent' or 'intern'` 
      });
    }

    // Check if admin exists
    const [admins] = await pool.query("SELECT * FROM admins WHERE aid = ?", [aid]);
    if (admins.length === 0) {
      return res.json({ success: false, message: "Admin not found" });
    }

    // Upload logo to Cloudinary
    const cloudinary = await connectCloudinary();
    const logoUpload = await cloudinary.uploader.upload(imageLogo.path, {
      resource_type: "image",
    });
    const logoPath = logoUpload.secure_url;

    // Parse JSON fields if they're strings
    let skillsArray = null;
    let roleArray = null;

    if (skillsRequired) {
      skillsArray = typeof skillsRequired === 'string' ? JSON.parse(skillsRequired) : skillsRequired;
    }

    if (role) {
      roleArray = typeof role === 'string' ? JSON.parse(role) : role;
    }

    // Insert job into database with ALL fields
    await pool.query(
      `INSERT INTO jobs 
        (jid, title, location, posting_date, deadLine, status, hr_mail, hr_phone, salary, domain, typeOf, imageLogo, company_name, description, skillsRequired, education, role, details) 
        VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
      [
        jid,
        title,
        location,
        posting_date,
        deadline,
        status || 'active',
        hr_mail,
        hr_phone,
        salary,
        domain,
        typeOf,
        logoPath,
        company_name,
        description || null,
        skillsArray ? JSON.stringify(skillsArray) : null,
        education || null,
        roleArray ? JSON.stringify(roleArray) : null,
        details || null
      ]
    );

    return res.json({
      success: true,
      message: "Job posted successfully",
      jobId: jid,
      job: {
        jid,
        title,
        location,
        company_name,
        domain,
        typeOf,
        salary,
        deadline
      }
    });
  } catch (error) {
    console.error("Add Job Error:", error.message);
    return res.json({ success: false, message: error.message });
  }
};


// Get all jobs for admin
const getAllJobs = async (req, res) => {
  try {
    const { aid } = req.body; // From authAdmin middleware

    // Verify admin exists
    const [admins] = await pool.query("SELECT * FROM admins WHERE aid = ?", [aid]);
    if (admins.length === 0) {
      return res.json({ success: false, message: "Admin not found" });
    }

    // Get all jobs
    const [jobs] = await pool.query(
      "SELECT * FROM jobs ORDER BY posting_date DESC"
    );

    return res.json({
      success: true,
      count: jobs.length,
      data: jobs
    });
  } catch (error) {
    console.error("Get Jobs Error:", error.message);
    return res.json({ success: false, message: error.message });
  }
};

// Get all applications for admin
const getAllApplications = async (req, res) => {
  try {
    const { aid } = req.body; // From authAdmin middleware

    // Verify admin exists
    const [admins] = await pool.query("SELECT * FROM admins WHERE aid = ?", [aid]);
    if (admins.length === 0) {
      return res.json({ success: false, message: "Admin not found" });
    }

    // Get all applications with job details
    const [applications] = await pool.query(`
      SELECT 
        s.*,
        j.title as job_title,
        j.company_name,
        j.location as job_location
      FROM savedJobs s
      LEFT JOIN jobs j ON s.jid = j.jid
      ORDER BY s.applied_at DESC
    `);

    return res.json({
      success: true,
      count: applications.length,
      data: applications
    });
  } catch (error) {
    console.error("Get Applications Error:", error.message);
    return res.json({ success: false, message: error.message });
  }
};

// Update the export line
export { registerAdmin, loginAdmin, addJobs, getAllJobs, getAllApplications }


//  jid VARCHAR(5) PRIMARY KEY,
//       title VARCHAR(150) NOT NULL,
//       location VARCHAR(100) NOT NULL,
//       posting_date DATE NOT NULL,
//       deadLine DATE NOT NULL,
//       status VARCHAR(100) DEFAULT 'active',
//       hr_mail VARCHAR(150) NOT NULL,
//       hr_phone VARCHAR(15) NOT NULL,
//       salary DECIMAL(10,2) NOT NULL,
//       domain ENUM('IT', 'Electrical', 'Mechanical', 'Civil', 'Finance', 'Law') NOT NULL,
//       typeOf ENUM('permanent', 'intern') NOT NULL DEFAULT 'permanent,
//       imageLogo VARCHAR(150) NOT NULL'

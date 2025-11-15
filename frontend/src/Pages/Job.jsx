import React, { useContext, useEffect, useMemo, useState } from "react";
import { AppContext } from "../Context/AppContext";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";

const Job = () => {
  const {backendURL, token, setToken,jobs } = useContext(AppContext);
  const navigate = useNavigate();
  const { jobid } = useParams();

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [college, setCollege] = useState("");
  const [degree, setDegree] = useState("");
  const [age, setAge] = useState("");
  const [linkedin, setLinkedin] = useState("");
  const [github, setGithub] = useState("");
  const [resume, setResume] = useState(null);
  const [address, setAddress] = useState("");



  //const [github,setGithub]=useState('')
  const index = useMemo(
    () => new Map(jobs.map((item) => [item.jid, item])),
    [jobs]
  );

  const item = index.get(jobid);


  if (!item) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold">Job not found</h2>
          <button onClick={() => navigate('/')} className="mt-4 px-6 py-2 bg-amber-600 text-white">
            Go Back
          </button>
        </div>
      </div>
    );
  }

  const handleSubmit = async (e) => {
    console.log("Form submitted!");
    e.preventDefault();
    //console.log('Prevented default');
    console.log("Resume:", resume);
    console.log("First Name:", firstName);

    const formData = new FormData();
  formData.append("resume", resume);
  formData.append("firstName", firstName);     
  formData.append("lastName", lastName);       
  formData.append("email", email);
  formData.append("phone", phone);
  formData.append("college", college);
  formData.append("degree", degree);
  formData.append("dob", age);                
  formData.append("linkedin", linkedin);        
  formData.append("github", github);            
  formData.append("address", address);

    formData.forEach((value, key) => {
      console.log(`${key}: ${value}`);
    });
    try {
      if (!resume) {
        return toast.error("please add resume");
      }
      const { data } = await axios.post(
        backendURL + `/user/apply/${jobid}`,
        formData,
        { headers: { token } }
      );

      if (data.success) {
        const companyName = data.companyName || item.company_name;
        toast.success(`your application is sent to ${companyName}`);
        setFirstName("");
        setLastName("");
        setEmail("");
        setPhone("");
        setCollege("");
        setDegree("");
        setAge("");
        setLinkedin("");
        setGithub("");
        setResume(null);
        setAddress("");
      }

      const fileInput = document.getElementById('resume');
      if (fileInput) {
        fileInput.value = '';
      }
    } catch (error) {
      toast.error(error.message)
    }
  };
  return (
    <div className="min-w-[50%]">
      <button
        onClick={() => {
          navigate("/");
        }}
        className="px-6 py-2 bg-amber-600"
      >
        Back
      </button>
      <h1 className="font-bold text-2xl">Job Application</h1>
      <div className="flex max-sm:flex-col">
        <div className="mt-3  max-w-full border-r-2 border-gray-700 px-5">
          <h2>{item.company_name}</h2>
          <p>~{item.title}</p>
          <h2 className="mt-3 font-semibold text-2xl">Info</h2>
          <p>{item.details}</p>
          <h2 className="mt-3 font-semibold text-2xl">Skills required</h2>
          <ul className="list-disc ml-6">
            {item.skillsRequired.map((el, index) => (
              <li key={index}>{el}</li>
            ))}
          </ul>

          <h2 className="mt-3 font-semibold text-2xl">education</h2>
          <p>{item.education}</p>
          <h2 className="mt-3 font-semibold text-2xl">
            What will you be doing
          </h2>
          <p>{item.role}</p>
        </div>
        {/* styling for left side */}
        <div className="p-3 min-w-[50%] max-sm:border-t-2 max-sm:mt-5">
          <h1 className="font-bold text-2xl mb-3">Fillup Required Details</h1>
          <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-3 px-5 min-w-full"
          >
            <div className="flex flex-row gap-5 justify-around">
              <input
                onChange={(e) => setFirstName(e.target.value)}
                value={firstName}
                className="w-[50%] py-2 px-3 border border-black"
                type="text"
                placeholder="enter your first name"
                required
              />
              <input
                onChange={(e) => setLastName(e.target.value)}
                value={lastName}
                className="w-[50%] py-2 px-3 border border-black "
                type="text"
                placeholder="enter your last name"
                required
              />
            </div>
            <input
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              className=" py-2 px-3 border border-black"
              type="email"
              placeholder="enter your email"
              required
            />
            <input
              onChange={(e) => setPhone(e.target.value)}
              value={phone}
              className=" py-2 px-3 border border-black"
              type="tel"
              placeholder="enter your phone number"
              required
            />

            <input
              onChange={(e) => setCollege(e.target.value)}
              value={college}
              className=" py-2 px-3 border border-black"
              type="text"
              placeholder="enter your college name"
              required
            />
            <div className="flex flex-row gap-5 justify-around items-center">
              <div className="flex flex-col w-[50%]">
                <label htmlFor="degree" className="mb-1 ">
                  Degree
                </label>
                <select
                  id="degree"
                  className="py-2 px-3 border border-black"
                  onChange={(e) => setDegree(e.target.value)}
                  value={degree}
                  required
                >
                  <option value="">Select your degree</option>
                  <option value="it">CS & IT</option>
                  <option value="civil">CIVIL</option>
                  <option value="electrical">ELECTRICAL</option>
                  <option value="mechanical">MECHANICAL</option>
                  <option value="law">LAW</option>
                  <option value="finance">FINANCE</option>
                </select>
              </div>

              <div className="flex flex-col w-[50%]">
                <label htmlFor="dob" className="mb-1 ">
                  Date of Birth
                </label>
                <input
                  onChange={(e) => setAge(e.target.value)}
                  value={age}
                  id="dob"
                  className="py-2 px-3 border border-black"
                  type="date"
                  placeholder="Enter your Age"
                  required
                />
              </div>
            </div>

            <input
              onChange={(e) => setAddress(e.target.value)}
              value={address}
              className=" py-2 px-3 border border-black"
              type="text"
              placeholder="enter your Home City Address"
              required
            />
            <input
              onChange={(e) => setLinkedin(e.target.value)}
              value={linkedin}
              className=" py-2 px-3 border border-black"
              type="text"
              placeholder="enter Linkedin URL"
            />

            <input
              onChange={(e) => setGithub(e.target.value)}
              value={github}
              className=" py-2 px-3 border border-black"
              type="text"
              placeholder="enter Github URL"
            />
            <div className="flex flex-col w-[50%] gap-2">
              <label htmlFor="resume" className="font-medium">
                Please upload resume
              </label>
              <input
                onChange={(e) => setResume(e.target.files[0])}
                id="resume"
                type="file"
                className="border border-black py-2 px-3 rounded-md cursor-pointer file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:bg-amber-600 file:text-white   transition-all"
                required
              />
            </div>
            <button
              type="submit"
              className="bg-amber-600 px-3 py-3 shadow-2xl text-white font-semibold cursor-pointer"
            >
              Apply
            </button>
          </form>
        </div>
      </div>

      <div className="p-4">
        <div className="font-medium text-2xl">Meet the Hiring team</div>
        <div>{`HR Email: ${item.hr_mail}`}</div>
        <div>{`HR Phone: ${item.hr_phone}`}</div>
      </div>
      <div className="mt-5"></div>
    </div>
  );
};
export default Job;

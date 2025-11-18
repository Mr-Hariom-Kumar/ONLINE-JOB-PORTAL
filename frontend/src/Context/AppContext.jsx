import React, { createContext, useContext, useEffect, useState } from 'react'
import { companyInfo } from '../assets/assets'
import axios from 'axios'
import {toast} from 'react-toastify'

export const AppContext = createContext()

const AppContextProvider = (props) => {
  const [token, setToken] = useState(localStorage.getItem('token') || false)
  const [jobs, setJobs] = useState([])
  const [savedJobs,setSavedJobs]=useState([])
  const backendURL = import.meta.env.VITE_BACKEND_URL || 'http://localhost:5174'

  const getJobData = async () => {
    try {
      const {data} = await axios.get(backendURL + '/user/displayJob')

      if (data.success) {
        console.log("call made from frontend",data)
        console.log("allJobs",data.data)
        setJobs(data.data)
        //console.log("data added in jobs",jobs)
      }

    } catch(error) {
      console.log(error)
      toast.error(error.message)
    }
  }

  const getSavedJobs=async ()=>{
    try{
        if (!token) {
    console.log("getSavedJobs: no token, skipping call");
    setSavedJobs([]); 
    return;
        }

      const {data}=await axios.post(backendURL+'/user/savedJob',{},{headers:{token}})
      if(data.success){
        setSavedJobs(data.data)
      }

    }catch(error){
      toast.error("something error occured")
    }
  }
  useEffect(()=>{
    getSavedJobs()
  },[token])
  useEffect(() => {
    if (token) {
      localStorage.setItem('token', token)
    } else {
      localStorage.removeItem('token')
    }
  }, [token])

  // Run only once when component mounts
  useEffect(() => {
    getJobData()
  },[]) // Empty dependency array
  useEffect(() => {
    console.log("jobs state updated:", jobs);
  }, [jobs]);
  // Separate effect to persist token


  const values = {
    token,
    setToken,
    companyInfo,
    getJobData,
    jobs,
    setJobs,
    savedJobs,
    setSavedJobs,
    getSavedJobs,
    backendURL
  }

  return (
    <AppContext.Provider value={values}>
      {props.children}
    </AppContext.Provider>
  )
}

export default AppContextProvider
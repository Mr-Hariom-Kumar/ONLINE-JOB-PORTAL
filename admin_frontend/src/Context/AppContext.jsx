import React, { createContext, useEffect, useState } from 'react'
import axios from 'axios'
import { toast } from 'react-toastify'

export const AppContext = createContext()

const AppContextProvider = (props) => {
  const [token, setToken] = useState(localStorage.getItem('atoken') || false)
  const [jobs, setJobs] = useState([])
  const [applications, setApplications] = useState([])
  const backendURL = import.meta.env.VITE_BACKEND_URL

  // Fetch all jobs for admin
  const fetchJobs = async () => {
    try {
      const { data } = await axios.get(backendURL + '/admin/jobs', {
        headers: { atoken: token }  // Changed from 'token' to 'atoken'
      })
      
      if (data.success) {
        setJobs(data.data)
      }
    } catch(error) {
      console.log(error)
      toast.error(error.message)
    }
  }

  // Fetch all applications
  const fetchApplications = async () => {
    try {
      const { data } = await axios.get(backendURL + '/admin/applications', {
        headers: { atoken: token }  // Changed from 'token' to 'atoken'
      })
      
      if (data.success) {
        setApplications(data.data)
      }
    } catch(error) {
      console.log(error)
      toast.error(error.message)
    }
  }

  // Persist token
  useEffect(() => {
    if (token) {
      localStorage.setItem('atoken', token)
    } else {
      localStorage.removeItem('atoken')
    }
  }, [token])

  // Fetch data when logged in
  useEffect(() => {
    if (token) {
      fetchJobs()
      fetchApplications()
    }
  }, [token])

  const values = {
    token,
    setToken,
    jobs,
    setJobs,
    applications,
    setApplications,
    fetchJobs,
    fetchApplications,
    backendURL
  }

  return (
    <AppContext.Provider value={values}>
      {props.children}
    </AppContext.Provider>
  )
}

export default AppContextProvider
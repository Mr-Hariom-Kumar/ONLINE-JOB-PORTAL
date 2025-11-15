import React from 'react'
import { Route,Routes } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import Navbar from './Components/Navbar'
import Home from './Pages/Home'
import Login from './Pages/Login'
import Job from './Pages/Job'
import Footer from './Components/Footer'
import { ToastContainer } from 'react-toastify';
import FindJob from './Pages/FindJob'
import Myjob from './Pages/Myjob'
const App = () => {
  // const navigate=useNavigate()
  return (
    <div className='min-h-screen'>
        <Navbar/>
        <div className='pt-20 px-2'>
          <Routes >
            <Route path='/' element={<Home/>}/>
            <Route path='/job/:jobid' element={<Job/>}/>
            <Route path='/login' element={<Login/>}  />
            <Route path='/find-jobs' element={<FindJob/>}  />
            <Route path='/explore/:domain' element={<FindJob/>}  />
            <Route path='/my-job' element={<Myjob/>}  />
          </Routes>
        </div>
       
        <Footer/>
        <ToastContainer />
      
    </div>
  )
}

export default App


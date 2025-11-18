import React, { useContext, useState } from 'react'
import { NavLink,useNavigate } from 'react-router-dom'
import { AppContext } from '../Context/AppContext'
const Navbar = () => {
  const navigate=useNavigate()
  const [sidebar,setSidebar]=useState(false)
  const {token,setToken} =useContext(AppContext)
 
  return (
    <>
    
    <div className='flex justify-between py-6 px-8 bg-gray-900 w-screen max-sm:w-screen text-white max-sm:font-medium max-sm:py-6 fixed z-100'>
      <div className='border rounded-full px-3 py-2 bg-blue-600 font-bold'>JP</div>
      <ul className='flex gap-7 max-sm:gap-4 max-sm:hidden'>
        <NavLink to='/'>
          <li className='text-md font-medium'>Home</li>
          <hr className='border-none outline-none h-0.5 bg-white w-5/5 m-auto hidden'></hr>
        </NavLink>
        <NavLink to='/find-jobs'>
           <li className='text-md font-medium'>Find Job</li>
           <hr className='border-none outline-none h-0.5 bg-white w-5/5  m-auto hidden'></hr>
        </NavLink>
        <NavLink to='/my-job'>
           <li className='text-md font-medium'>My Job</li>
           <hr className='border-none outline-none h-0.5 bg-white w-5/5 m-auto hidden'></hr>
        </NavLink>
      </ul>
      {
        token?
        <div className='flex gap-2'>
          <img src="" alt="userIMG" />
          <div onClick={()=>{sidebar?setSidebar(false):setSidebar(true)}}>
            drop
          </div>
       </div>:
       <button onClick={()=>{
         navigate("/login");
       }}className='bg-amber-600 px-4 py-1 font-medium text-middle' >Signup</button>
      }
      
    </div>
    {/* desiging for side bar */}

    {
      sidebar && token?
      <div className='fixed right-0 top-25 h-[88vh] max-md:w-[40vw]  max-md:h-[90vh]   max-sm:top-28 max-sm:w-[45vw] max-sm:h-[90vh]  w-[230px] bg-white  py-5 shadow-2xl border border-none rounded-lg rounded-tr-none rounded-br-none  z-100'>
          <ul className='flex  flex-col  text-center w-full py-5'>
          <NavLink to='/'  className="block w-full border border-gray-400 border-l-0 border-r-0">
            <li className='text-md font-medium side hover:bg-amber-600 hover:text-white py-5 w-full'>Home</li>
          </NavLink>
          <NavLink to='/job' className="block w-full border border-gray-400 border-l-0 border-r-0">
            <li className='text-md font-medium side hover:bg-amber-600 py-5 w-full hover:text-white'>Find Job</li>
          </NavLink>
          <NavLink to='/my-job' className="block w-full border border-gray-400 border-l-0 border-r-0">
            <li className='text-md font-medium side hover:bg-amber-600 py-5 w-full hover:text-white'>My Job</li>
          </NavLink>
           <NavLink to='/contact' className="block w-full border border-gray-400 border-l-0 border-r-0">
            <li className='text-md font-medium side hover:bg-amber-600 py-5 w-full hover:text-white'>Contact</li>
          </NavLink>
           <NavLink to='/setting' className="block w-full border border-gray-400 border-l-0 border-r-0">
            <li className='text-md font-medium side hover:bg-amber-600 py-5 w-full hover:text-white'>Setting</li>
          </NavLink>
           <NavLink to='/' onClick={()=>{setToken(false)}} className="block w-full border border-gray-400 border-l-0 border-r-0">
            <li className='text-md font-medium side hover:bg-amber-600 py-5 w-full hover:text-white'>Log out</li>
          </NavLink>
        </ul>
    </div>:""
    }
    
    </>
  )
}

export default Navbar

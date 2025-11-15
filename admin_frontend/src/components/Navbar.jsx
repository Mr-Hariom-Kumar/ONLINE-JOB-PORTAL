import React, { useContext } from 'react'
import { AppContext } from '../Context/AppContext'
import { useNavigate } from 'react-router-dom'

const Navbar = () => {
  const { setToken } = useContext(AppContext)
  const navigate = useNavigate()

  const handleLogout = () => {
    setToken(false)
    localStorage.removeItem('atoken')
    navigate('/login')
  }

  return (
    <div className='bg-white shadow-md px-8 py-4 flex justify-between items-center'>
      <div className='flex items-center gap-4'>
        <div className='w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-xl'>
          JP
        </div>
        <h1 className='text-xl font-bold text-gray-900'>Job Portal Admin</h1>
      </div>

      <div className='flex items-center gap-4'>
        <div className='text-right'>
          <p className='text-sm font-medium text-gray-900'>Admin User</p>
          <p className='text-xs text-gray-500'>Administrator</p>
        </div>
        <button
          onClick={handleLogout}
          className='px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg font-medium transition'
        >
          Logout
        </button>
      </div>
    </div>
  )
}

export default Navbar
import React, { useContext, useState } from 'react'
import { AppContext } from '../Context/AppContext'
import axios from 'axios'
import { toast } from 'react-toastify'

const Login = () => {
  const { setToken, backendURL } = useContext(AppContext)
  const [isRegister, setIsRegister] = useState(false)
  const [userType,setUserType]=useState('user')
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    phone: ''
  })
  const [loading, setLoading] = useState(false)

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)

    try {
      const endpoint = isRegister ? '/admin/register' : '/admin/login'
      const payload = isRegister 
        ? formData 
        : { email: formData.email, password: formData.password }

      const { data } = await axios.post(backendURL + endpoint, payload)

      if (data.success) {
        setToken(data.atoken)
        toast.success(data.message)
      } else {
        toast.error(data.message)
      }
    } catch (error) {
      toast.error(error.response?.data?.message || 'Something went wrong')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className='min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900'>
      <div className='bg-white rounded-2xl shadow-2xl p-8 w-full max-w-md'>

      {
        userType==="user"?
        <a href={import.meta.env.VITE_USER_URL} className='align-middle'>
        <button className='py-2 px-3 cursor-pointer text-xs bg-gray-600 text-white font-semibold' 
        onClick={()=>{
          setUserType("admin");
          
        }}>Are you a user?</button></a>:<button className='py-2 px-2 bg-gray-600 text-white font-semibold' onClick={()=>{setUserType("user")}}>Are you an admin?</button>
      
      }

        <div className='text-center mb-8'>
          <h1 className='text-3xl font-bold text-gray-900 mb-2'>
            {isRegister ? 'Admin Registration' : 'Admin Login'}
          </h1>
          <p className='text-gray-600'>
            {isRegister ? 'Create your admin account' : 'Welcome back!'}
          </p>
        </div>

        <div className='space-y-5'>
          {isRegister && (
            <div>
              <label className='block text-sm font-medium text-gray-700 mb-2'>
                Username
              </label>
              <input
                type='text'
                name='username'
                value={formData.username}
                onChange={handleChange}
                required
                className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition'
                placeholder='Enter username'
              />
            </div>
          )}

          <div>
            <label className='block text-sm font-medium text-gray-700 mb-2'>
              Email
            </label>
            <input
              type='email'
              name='email'
              value={formData.email}
              onChange={handleChange}
              required
              className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition'
              placeholder='admin@example.com'
            />
          </div>

          <div>
            <label className='block text-sm font-medium text-gray-700 mb-2'>
              Password
            </label>
            <input
              type='password'
              name='password'
              value={formData.password}
              onChange={handleChange}
              required
              className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition'
              placeholder='••••••••'
            />
          </div>

          {isRegister && (
            <div>
              <label className='block text-sm font-medium text-gray-700 mb-2'>
                Phone
              </label>
              <input
                type='tel'
                name='phone'
                value={formData.phone}
                onChange={handleChange}
                required
                className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition'
                placeholder='+1234567890'
              />
            </div>
          )}

          <button
            onClick={handleSubmit}
            disabled={loading}
            className='w-full bg-amber-600 hover:bg-amber-700 text-white font-semibold py-3 rounded-lg transition duration-200 disabled:opacity-50 disabled:cursor-not-allowed'
          >
            {loading ? 'Processing...' : isRegister ? 'Register' : 'Login'}
          </button>
        </div>

        <div className='mt-6 text-center'>
          <button
            onClick={() => setIsRegister(!isRegister)}
            className='text-blue-600 hover:text-blue-700 font-medium'
          >
            {isRegister 
              ? 'Already have an account? Login' 
              : "Don't have an account? Register"}
          </button>
        </div>
      </div>
    </div>
  )
}

export default Login

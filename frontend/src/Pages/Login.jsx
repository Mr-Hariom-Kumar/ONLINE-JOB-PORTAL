import React, { useContext, useState } from 'react'
import { AppContext } from '../Context/AppContext'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import axios from 'axios'

const Login = () => {
  // Get all context values in ONE useContext call
  const { token, setToken, backendURL } = useContext(AppContext)
  
  const [state, setState] = useState('signup')
  const [username, setUserName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [userType,setUserType]=useState('admin')
  
  const navigate = useNavigate()
  
  const handleSubmit = async (e) => {
    e.preventDefault()
    console.log('form submitted')

    try {
      if (state === "signup") {
        const { data } = await axios.post(backendURL + '/user/register', {
          username,
          email,
          password
        })
        
        if (data.success) {
          localStorage.setItem("token", data.token)
          setToken(data.token)
          setState("login")
          navigate('/login')
        } else {
          toast.error(data.message)
        }
      } else {
        const { data } = await axios.post(backendURL + '/user/login', {
          email,
          password
        })
        
        if (data.success) {
          console.log(data)
          localStorage.setItem("token", data.token)
          setToken(data.token)
          navigate('/')
          toast.success(`logged in!welcome ${data.username}`)
        } else {
          toast.error(data.message)
        }
      }
    } catch (error) {
      console.log(error.message)
    }
  }

  return (
    <div className='w-screen h-screen'>
      
      <div className='align-middle flex flex-col w-[50vh] px-3 py-3 m-auto rounded-lg justify-center mt-40 bg-white shadow-2xl'>
      {
        userType==="admin"?
        <a href={import.meta.env.VITE_ADMIN_URL} className='align-middle'>
        <button className='py-2 px-3 cursor-pointer text-xs bg-gray-600 text-white font-semibold' 
        onClick={()=>{
          setUserType("user");
          
        }}>Are you n Admin?</button></a>:<button className='py-2 px-2 bg-gray-600 text-white font-semibold' onClick={()=>{setUserType("admin")}}>Are you a user?</button>
      
      }
        <h1 className='text-center font-bold text-lg'>
          {state === 'signup' ? 'Sign Up' : 'Login'}
        </h1>
        
        <form onSubmit={handleSubmit} className='p-2 flex flex-col gap-2 mt-3'>
          {state === 'signup' ? (
            <div className='py-3 flex flex-col gap-1'>
              <label htmlFor="username" className='font-semibold'>
                Username
              </label>
              <input
                className='px-3 py-2 border-2 border-black'
                type="text"
                placeholder='enter username'
                id='username'
                onChange={(e) => setUserName(e.target.value)}
                value={username}
                required
              />
            </div>
          ) : ''}
          
          <label htmlFor="email" className='font-semibold'>
            Email
          </label>
          <input
            type="email"
            id='email'
            placeholder='enter email'
            className='px-3 py-2 border-2 border-black'
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            required
          />
          
          <label htmlFor="password" className='font-semibold mt-2'>
            Password
          </label>
          <input
            type="password"
            placeholder='enter password'
            className='px-3 py-2 border-2 '
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            required
          />
          
          <button
            type='submit'
            className='mt-2 py-2 bg-amber-600 font-medium text-white cursor-pointer'
          >
            {state === 'signup' ? 'Signup' : 'Login'}
          </button>
          
          {state === "signup" ? (
            <p>
              Already have an account?
              <span
                onClick={() => setState("login")}
                className="text-blue-700 cursor-pointer"
              >
                Login here
              </span>
            </p>
          ) : (
            <p>
              Create an new account?
              <span
                onClick={() => setState("signup")}
                className="text-blue-700 cursor-pointer"
              >
                click here
              </span>
            </p>
          )}
        </form>
      </div>
    </div>
  )
}

export default Login
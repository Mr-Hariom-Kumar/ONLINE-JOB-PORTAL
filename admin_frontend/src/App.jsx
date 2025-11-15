import React, { useContext } from 'react'
import { Route, Routes, Navigate } from 'react-router-dom'
import { AppContext } from './Context/AppContext.jsx'
import Login from './pages/Login.jsx'
import Dashboard from './pages/Dashboard.jsx'
import ManageJobs from './pages/ManageJobs.jsx'
import ViewApplications from './pages/ViewApplications.jsx'
import Navbar from './components/Navbar.jsx'
import Sidebar from './components/Sidebar.jsx'

const App = () => {
  const { token } = useContext(AppContext)

  return (
    <div className='min-h-screen bg-gray-100'>
      {token ? (
        <>
          <Navbar />
          <div className='flex'>
            <Sidebar />
            <div className='flex-1 p-8'>
              <Routes>
                <Route path='/' element={<Dashboard />} />
                <Route path='/jobs' element={<ManageJobs />} />
                <Route path='/applications' element={<ViewApplications />} />
                <Route path='*' element={<Navigate to='/' />} />
              </Routes>
            </div>
          </div>
        </>
      ) : (
        <Routes>
          <Route path='/login' element={<Login />} />
          <Route path='*' element={<Navigate to='/login' />} />
        </Routes>
      )}
    </div>
  )
}

export default App
                
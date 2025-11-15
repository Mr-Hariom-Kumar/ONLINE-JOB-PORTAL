import React from 'react'
import { NavLink } from 'react-router-dom'

const Sidebar = () => {
  const menuItems = [
    {
      path: '/',
      icon: '📊',
      label: 'Dashboard'
    },
    {
      path: '/jobs',
      icon: '💼',
      label: 'Manage Jobs'
    },
    {
      path: '/applications',
      icon: '📝',
      label: 'Applications'
    }
  ]

  return (
    <div className='w-64 bg-gray-900 min-h-screen p-6'>
      <div className='mb-8'>
        <h2 className='text-2xl font-bold text-white'>Admin Panel</h2>
      </div>

      <nav className='space-y-2'>
        {menuItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) =>
              `flex items-center gap-3 px-4 py-3 rounded-lg transition ${
                isActive
                  ? 'bg-blue-600 text-white'
                  : 'text-gray-300 hover:bg-gray-800'
              }`
            }
          >
            <span className='text-xl'>{item.icon}</span>
            <span className='font-medium'>{item.label}</span>
          </NavLink>
        ))}
      </nav>
    </div>
  )
}

export default Sidebar

// ============================================
// 6. AdminNavbar.jsx (components/Navbar.jsx - Updated for Admin)
// ============================================

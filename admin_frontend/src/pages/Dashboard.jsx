import React, { useContext } from 'react'
import { AppContext } from '../Context/AppContext'

const Dashboard = () => {
  const { jobs, applications } = useContext(AppContext)

  const stats = [
    {
      title: 'Total Jobs',
      value: jobs.length,
      icon: '💼',
      bgColor: 'bg-blue-100',
      textColor: 'text-blue-600'
    },
    {
      title: 'Active Jobs',
      value: jobs.filter(j => j.status === 'active').length,
      icon: '✅',
      bgColor: 'bg-green-100',
      textColor: 'text-green-600'
    },
    {
      title: 'Total Applications',
      value: applications.length,
      icon: '📝',
      bgColor: 'bg-purple-100',
      textColor: 'text-purple-600'
    },
    {
      title: 'Pending Review',
      value: applications.filter(a => !a.reviewed).length,
      icon: '⏳',
      bgColor: 'bg-orange-100',
      textColor: 'text-orange-600'
    }
  ]

  const recentJobs = jobs.slice(0, 5)
  const recentApplications = applications.slice(0, 5)

  return (
    <div className='space-y-6'>
      <div>
        <h1 className='text-3xl font-bold text-gray-900 mb-2'>Dashboard</h1>
        <p className='text-gray-600'>Welcome to your admin panel</p>
      </div>

      {/* Stats Grid */}
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
        {stats.map((stat, index) => (
          <div key={index} className='bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition'>
            <div className='flex items-center justify-between'>
              <div>
                <p className='text-gray-600 text-sm font-medium mb-1'>{stat.title}</p>
                <p className='text-3xl font-bold text-gray-900'>{stat.value}</p>
              </div>
              <div className={`${stat.bgColor} ${stat.textColor} text-3xl w-14 h-14 rounded-full flex items-center justify-center`}>
                {stat.icon}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className='grid grid-cols-1 lg:grid-cols-2 gap-6'>
        {/* Recent Jobs */}
        <div className='bg-white rounded-xl shadow-md p-6'>
          <h2 className='text-xl font-bold text-gray-900 mb-4'>Recent Jobs</h2>
          <div className='space-y-3'>
            {recentJobs.length > 0 ? (
              recentJobs.map((job) => (
                <div key={job.jid} className='border-l-4 border-blue-500 pl-4 py-2'>
                  <h3 className='font-semibold text-gray-900'>{job.title}</h3>
                  <p className='text-sm text-gray-600'>{job.company_name} • {job.location}</p>
                  <p className='text-xs text-gray-500 mt-1'>
                    {new Date(job.posting_date).toLocaleDateString()}
                  </p>
                </div>
              ))
            ) : (
              <p className='text-gray-500 text-center py-4'>No jobs posted yet</p>
            )}
          </div>
        </div>

        {/* Recent Applications */}
        <div className='bg-white rounded-xl shadow-md p-6'>
          <h2 className='text-xl font-bold text-gray-900 mb-4'>Recent Applications</h2>
          <div className='space-y-3'>
            {recentApplications.length > 0 ? (
              recentApplications.map((app) => (
                <div key={app.sid} className='border-l-4 border-green-500 pl-4 py-2'>
                  <h3 className='font-semibold text-gray-900'>{app.first_name} {app.last_name}</h3>
                  <p className='text-sm text-gray-600'>{app.email}</p>
                  <p className='text-xs text-gray-500 mt-1'>
                    {new Date(app.applied_at).toLocaleDateString()}
                  </p>
                </div>
              ))
            ) : (
              <p className='text-gray-500 text-center py-4'>No applications yet</p>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard
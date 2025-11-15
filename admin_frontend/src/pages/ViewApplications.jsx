import React, { useContext, useState } from 'react'
import { AppContext } from '../Context/AppContext'

const ViewApplications = () => {
  const { applications } = useContext(AppContext)
  const [selectedApp, setSelectedApp] = useState(null)

  return (
    <div className='space-y-6'>
      <div>
        <h1 className='text-3xl font-bold text-gray-900 mb-2'>Applications</h1>
        <p className='text-gray-600'>View and manage job applications</p>
      </div>

      <div className='bg-white rounded-xl shadow-md overflow-hidden'>
        <div className='overflow-x-auto'>
          <table className='w-full'>
            <thead className='bg-gray-50'>
              <tr>
                <th className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase'>ID</th>
                <th className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase'>Name</th>
                <th className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase'>Email</th>
                <th className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase'>Phone</th>
                <th className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase'>College</th>
                <th className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase'>Degree</th>
                <th className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase'>Applied Date</th>
                <th className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase'>Action</th>
              </tr>
            </thead>
            <tbody className='divide-y divide-gray-200'>
              {applications.length > 0 ? (
                applications.map((app) => (
                  <tr key={app.sid} className='hover:bg-gray-50'>
                    <td className='px-6 py-4 text-sm text-gray-900'>{app.sid}</td>
                    <td className='px-6 py-4 text-sm font-medium text-gray-900'>
                      {app.first_name} {app.last_name}
                    </td>
                    <td className='px-6 py-4 text-sm text-gray-600'>{app.email}</td>
                    <td className='px-6 py-4 text-sm text-gray-600'>{app.phone}</td>
                    <td className='px-6 py-4 text-sm text-gray-600'>{app.college}</td>
                    <td className='px-6 py-4 text-sm text-gray-600'>{app.degree}</td>
                    <td className='px-6 py-4 text-sm text-gray-600'>
                      {new Date(app.applied_at).toLocaleDateString()}
                    </td>
                    <td className='px-6 py-4'>
                      <button
                        onClick={() => setSelectedApp(app)}
                        className='text-blue-600 hover:text-blue-800 font-medium text-sm'
                      >
                        View Details
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan='8' className='px-6 py-8 text-center text-gray-500'>
                    No applications received yet
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* Application Detail Modal */}
      {selectedApp && (
        <div className='fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4'>
          <div className='bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto'>
            <div className='p-6 border-b flex justify-between items-center'>
              <h2 className='text-2xl font-bold text-gray-900'>Application Details</h2>
              <button
                onClick={() => setSelectedApp(null)}
                className='text-gray-500 hover:text-gray-700 text-2xl'
              >
                ×
              </button>
            </div>
            
            <div className='p-6 space-y-4'>
              <div className='grid grid-cols-2 gap-4'>
                <div>
                  <p className='text-sm text-gray-600 font-medium'>First Name</p>
                  <p className='text-gray-900'>{selectedApp.first_name}</p>
                </div>
                <div>
                  <p className='text-sm text-gray-600 font-medium'>Last Name</p>
                  <p className='text-gray-900'>{selectedApp.last_name}</p>
                </div>
                <div>
                  <p className='text-sm text-gray-600 font-medium'>Email</p>
                  <p className='text-gray-900'>{selectedApp.email}</p>
                </div>
                <div>
                  <p className='text-sm text-gray-600 font-medium'>Phone</p>
                  <p className='text-gray-900'>{selectedApp.phone}</p>
                </div>
                <div>
                  <p className='text-sm text-gray-600 font-medium'>College</p>
                  <p className='text-gray-900'>{selectedApp.college}</p>
                </div>
                <div>
                  <p className='text-sm text-gray-600 font-medium'>Degree</p>
                  <p className='text-gray-900'>{selectedApp.degree}</p>
                </div>
                <div>
                  <p className='text-sm text-gray-600 font-medium'>Date of Birth</p>
                  <p className='text-gray-900'>{new Date(selectedApp.dob).toLocaleDateString()}</p>
                </div>
                <div>
                  <p className='text-sm text-gray-600 font-medium'>Applied Date</p>
                  <p className='text-gray-900'>{new Date(selectedApp.applied_at).toLocaleDateString()}</p>
                </div>
              </div>

              <div>
                <p className='text-sm text-gray-600 font-medium mb-2'>Address</p>
                <p className='text-gray-900'>{selectedApp.address}</p>
              </div>

              {selectedApp.linkedin_url && (
                <div>
                  <p className='text-sm text-gray-600 font-medium'>LinkedIn</p>
                  <a href={selectedApp.linkedin_url} target='_blank' rel='noopener noreferrer' className='text-blue-600 hover:underline'>
                    {selectedApp.linkedin_url}
                  </a>
                </div>
              )}

              {selectedApp.github_url && (
                <div>
                  <p className='text-sm text-gray-600 font-medium'>GitHub</p>
                  <a href={selectedApp.github_url} target='_blank' rel='noopener noreferrer' className='text-blue-600 hover:underline'>
                    {selectedApp.github_url}
                  </a>
                </div>
              )}

              <div>
                <p className='text-sm text-gray-600 font-medium mb-2'>Resume</p>
                <a 
                  href={selectedApp.resume_path} 
                  target='_blank' 
                  rel='noopener noreferrer'
                  className='inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition'
                >
                  📄 Download Resume
                </a>
              </div>
            </div>

            <div className='p-6 border-t flex justify-end'>
              <button
                onClick={() => setSelectedApp(null)}
                className='px-6 py-2 bg-gray-200 hover:bg-gray-300 text-gray-800 rounded-lg font-semibold transition'
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default ViewApplications
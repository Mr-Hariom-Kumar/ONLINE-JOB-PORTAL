import React, { useContext, useState } from 'react'
import { AppContext } from '../Context/AppContext'
import axios from 'axios'
import { toast } from 'react-toastify'

const ManageJobs = () => {
  const { jobs, fetchJobs, backendURL, token } = useContext(AppContext)
  const [showAddModal, setShowAddModal] = useState(false)
  const [loading, setLoading] = useState(false)
  const [formData, setFormData] = useState({
    title: '',
    company_name: '',
    location: '',
    posting_date: '',
    deadline: '',
    hr_mail: '',
    hr_phone: '',
    salary: '',
    domain: 'IT',
    typeOf: 'permanent',
    status: 'active',
    description: '',
    education: '',
    details: ''
  })
  const [skillsRequired, setSkillsRequired] = useState([''])
  const [role, setRole] = useState([''])
  const [logoFile, setLogoFile] = useState(null)

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleFileChange = (e) => {
    setLogoFile(e.target.files[0])
  }

  // Handle skills array
  const handleSkillChange = (index, value) => {
    const newSkills = [...skillsRequired]
    newSkills[index] = value
    setSkillsRequired(newSkills)
  }

  const addSkillField = () => {
    setSkillsRequired([...skillsRequired, ''])
  }

  const removeSkillField = (index) => {
    const newSkills = skillsRequired.filter((_, i) => i !== index)
    setSkillsRequired(newSkills)
  }

  // Handle role array
  const handleRoleChange = (index, value) => {
    const newRoles = [...role]
    newRoles[index] = value
    setRole(newRoles)
  }

  const addRoleField = () => {
    setRole([...role, ''])
  }

  const removeRoleField = (index) => {
    const newRoles = role.filter((_, i) => i !== index)
    setRole(newRoles)
  }

  const handleSubmit = async () => {
    setLoading(true)
    try {
      const formDataToSend = new FormData()
      
      // Add basic fields
      Object.keys(formData).forEach(key => {
        formDataToSend.append(key, formData[key])
      })

      // Add arrays as JSON strings
      formDataToSend.append('skillsRequired', JSON.stringify(skillsRequired.filter(s => s.trim())))
      formDataToSend.append('role', JSON.stringify(role.filter(r => r.trim())))

      if (logoFile) {
        formDataToSend.append('imageLogo', logoFile)
      }

      const { data } = await axios.post(
        backendURL + '/admin/add-job',
        formDataToSend,
        {
          headers: { 
            atoken: token,
            'Content-Type': 'multipart/form-data'
          }
        }
      )

      if (data.success) {
        toast.success(data.message)
        setShowAddModal(false)
        fetchJobs()
        // Reset form
        setFormData({
          title: '',
          company_name: '',
          location: '',
          posting_date: '',
          deadline: '',
          hr_mail: '',
          hr_phone: '',
          salary: '',
          domain: 'IT',
          typeOf: 'permanent',
          status: 'active',
          description: '',
          education: '',
          details: ''
        })
        setSkillsRequired([''])
        setRole([''])
        setLogoFile(null)
      } else {
        toast.error(data.message)
      }
    } catch (error) {
      toast.error(error.response?.data?.message || 'Failed to add job')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className='space-y-6'>
      <div className='flex justify-between items-center'>
        <div>
          <h1 className='text-3xl font-bold text-gray-900 mb-2'>Manage Jobs</h1>
          <p className='text-gray-600'>Post and manage job listings</p>
        </div>
        <button
          onClick={() => setShowAddModal(true)}
          className='bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition'
        >
          + Add New Job
        </button>
      </div>

      {/* Jobs List */}
      <div className='bg-white rounded-xl shadow-md overflow-hidden'>
        <div className='overflow-x-auto'>
          <table className='w-full'>
            <thead className='bg-gray-50'>
              <tr>
                <th className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase'>Job ID</th>
                <th className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase'>Title</th>
                <th className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase'>Company</th>
                <th className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase'>Location</th>
                <th className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase'>Domain</th>
                <th className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase'>Type</th>
                <th className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase'>Salary</th>
                <th className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase'>Status</th>
                <th className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase'>Deadline</th>
              </tr>
            </thead>
            <tbody className='divide-y divide-gray-200'>
              {jobs.length > 0 ? (
                jobs.map((job) => (
                  <tr key={job.jid} className='hover:bg-gray-50'>
                    <td className='px-6 py-4 text-sm text-gray-900'>{job.jid}</td>
                    <td className='px-6 py-4 text-sm font-medium text-gray-900'>{job.title}</td>
                    <td className='px-6 py-4 text-sm text-gray-600'>{job.company_name}</td>
                    <td className='px-6 py-4 text-sm text-gray-600'>{job.location}</td>
                    <td className='px-6 py-4 text-sm text-gray-600'>{job.domain}</td>
                    <td className='px-6 py-4 text-sm text-gray-600 capitalize'>{job.typeOf}</td>
                    <td className='px-6 py-4 text-sm text-gray-600'>₹{job.salary}</td>
                    <td className='px-6 py-4'>
                      <span className={`px-2 py-1 text-xs rounded-full ${
                        job.status === 'active' ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'
                      }`}>
                        {job.status}
                      </span>
                    </td>
                    <td className='px-6 py-4 text-sm text-gray-600'>
                      {new Date(job.deadLine).toLocaleDateString()}
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan='9' className='px-6 py-8 text-center text-gray-500'>
                    No jobs found. Add your first job!
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* Add Job Modal */}
      {showAddModal && (
        <div className='fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4 overflow-y-auto'>
          <div className='bg-white rounded-2xl shadow-2xl max-w-6xl w-full my-8'>
            <div className='p-6 border-b sticky top-0 bg-white z-10'>
              <h2 className='text-2xl font-bold text-gray-900'>Add New Job</h2>
            </div>
            
            <div className='p-6 space-y-6 max-h-[70vh] overflow-y-auto'>
              {/* Basic Information */}
              <div>
                <h3 className='text-lg font-semibold text-gray-900 mb-4'>Basic Information</h3>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                  <div>
                    <label className='block text-sm font-medium text-gray-700 mb-2'>Job Title *</label>
                    <input
                      type='text'
                      name='title'
                      value={formData.title}
                      onChange={handleChange}
                      className='w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none'
                      placeholder='e.g. Software Engineer'
                    />
                  </div>

                  <div>
                    <label className='block text-sm font-medium text-gray-700 mb-2'>Company Name *</label>
                    <input
                      type='text'
                      name='company_name'
                      value={formData.company_name}
                      onChange={handleChange}
                      className='w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none'
                      placeholder='e.g. Tech Corp'
                    />
                  </div>

                  <div>
                    <label className='block text-sm font-medium text-gray-700 mb-2'>Location *</label>
                    <input
                      type='text'
                      name='location'
                      value={formData.location}
                      onChange={handleChange}
                      className='w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none'
                      placeholder='e.g. Bangalore, India'
                    />
                  </div>

                  <div>
                    <label className='block text-sm font-medium text-gray-700 mb-2'>Posting Date *</label>
                    <input
                      type='date'
                      name='posting_date'
                      value={formData.posting_date}
                      onChange={handleChange}
                      className='w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none'
                    />
                  </div>

                  <div>
                    <label className='block text-sm font-medium text-gray-700 mb-2'>Deadline *</label>
                    <input
                      type='date'
                      name='deadline'
                      value={formData.deadline}
                      onChange={handleChange}
                      className='w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none'
                    />
                  </div>

                  <div>
                    <label className='block text-sm font-medium text-gray-700 mb-2'>HR Email *</label>
                    <input
                      type='email'
                      name='hr_mail'
                      value={formData.hr_mail}
                      onChange={handleChange}
                      className='w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none'
                      placeholder='hr@company.com'
                    />
                  </div>

                  <div>
                    <label className='block text-sm font-medium text-gray-700 mb-2'>HR Phone *</label>
                    <input
                      type='tel'
                      name='hr_phone'
                      value={formData.hr_phone}
                      onChange={handleChange}
                      className='w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none'
                      placeholder='+91 1234567890'
                    />
                  </div>

                  <div>
                    <label className='block text-sm font-medium text-gray-700 mb-2'>Salary (₹) *</label>
                    <input
                      type='number'
                      name='salary'
                      value={formData.salary}
                      onChange={handleChange}
                      className='w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none'
                      placeholder='500000'
                    />
                  </div>

                  <div>
                    <label className='block text-sm font-medium text-gray-700 mb-2'>Domain *</label>
                    <select
                      name='domain'
                      value={formData.domain}
                      onChange={handleChange}
                      className='w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none'
                    >
                      <option value='IT'>IT</option>
                      <option value='Electrical'>Electrical</option>
                      <option value='Mechanical'>Mechanical</option>
                      <option value='Civil'>Civil</option>
                      <option value='Finance'>Finance</option>
                      <option value='Law'>Law</option>
                    </select>
                  </div>

                  <div>
                    <label className='block text-sm font-medium text-gray-700 mb-2'>Job Type *</label>
                    <select
                      name='typeOf'
                      value={formData.typeOf}
                      onChange={handleChange}
                      className='w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none'
                    >
                      <option value='permanent'>Permanent</option>
                      <option value='intern'>Intern</option>
                    </select>
                  </div>

                  <div>
                    <label className='block text-sm font-medium text-gray-700 mb-2'>Status</label>
                    <select
                      name='status'
                      value={formData.status}
                      onChange={handleChange}
                      className='w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none'
                    >
                      <option value='active'>Active</option>
                      <option value='inactive'>Inactive</option>
                    </select>
                  </div>

                  <div>
                    <label className='block text-sm font-medium text-gray-700 mb-2'>Company Logo *</label>
                    <input
                      type='file'
                      accept='image/*'
                      onChange={handleFileChange}
                      className='w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none'
                    />
                  </div>
                </div>
              </div>

              {/* Description */}
              <div>
                <h3 className='text-lg font-semibold text-gray-900 mb-4'>Job Description</h3>
                <div className='space-y-4'>
                  <div>
                    <label className='block text-sm font-medium text-gray-700 mb-2'>Short Description</label>
                    <textarea
                      name='description'
                      value={formData.description}
                      onChange={handleChange}
                      rows='3'
                      className='w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none'
                      placeholder='Brief overview of the job position...'
                    />
                  </div>

                  <div>
                    <label className='block text-sm font-medium text-gray-700 mb-2'>Detailed Information</label>
                    <textarea
                      name='details'
                      value={formData.details}
                      onChange={handleChange}
                      rows='4'
                      className='w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none'
                      placeholder='Complete details about the role, company culture, growth opportunities...'
                    />
                  </div>

                  <div>
                    <label className='block text-sm font-medium text-gray-700 mb-2'>Education Requirements</label>
                    <textarea
                      name='education'
                      value={formData.education}
                      onChange={handleChange}
                      rows='2'
                      className='w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none'
                      placeholder='e.g. B.E/B.Tech in Computer Science or related field...'
                    />
                  </div>
                </div>
              </div>

              {/* Skills Required */}
              <div>
                <div className='flex justify-between items-center mb-4'>
                  <h3 className='text-lg font-semibold text-gray-900'>Skills Required</h3>
                  <button
                    type='button'
                    onClick={addSkillField}
                    className='px-3 py-1 bg-amber-600 hover:bg-amber-700 text-white rounded text-sm font-medium transition'
                  >
                    + Add Skill
                  </button>
                </div>
                <div className='space-y-3'>
                  {skillsRequired.map((skill, index) => (
                    <div key={index} className='flex gap-2'>
                      <input
                        type='text'
                        value={skill}
                        onChange={(e) => handleSkillChange(index, e.target.value)}
                        className='flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none'
                        placeholder={`Skill ${index + 1}`}
                      />
                      {skillsRequired.length > 1 && (
                        <button
                          type='button'
                          onClick={() => removeSkillField(index)}
                          className='px-3 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg text-sm font-medium transition'
                        >
                          Remove
                        </button>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Roles & Responsibilities */}
              <div>
                <div className='flex justify-between items-center mb-4'>
                  <h3 className='text-lg font-semibold text-gray-900'>Roles & Responsibilities</h3>
                  <button
                    type='button'
                    onClick={addRoleField}
                    className='px-3 py-1 bg-amber-600 hover:bg-amber-700 text-white rounded text-sm font-medium transition'
                  >
                    + Add Role
                  </button>
                </div>
                <div className='space-y-3'>
                  {role.map((r, index) => (
                    <div key={index} className='flex gap-2'>
                      <textarea
                        value={r}
                        onChange={(e) => handleRoleChange(index, e.target.value)}
                        rows='2'
                        className='flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none'
                        placeholder={`Responsibility ${index + 1}`}
                      />
                      {role.length > 1 && (
                        <button
                          type='button'
                          onClick={() => removeRoleField(index)}
                          className='px-3 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg text-sm font-medium transition'
                        >
                          Remove
                        </button>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className='p-6 border-t flex gap-3 justify-end sticky bottom-0 bg-white'>
              <button
                onClick={() => setShowAddModal(false)}
                className='px-6 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition'
              >
                Cancel
              </button>
              <button
                onClick={handleSubmit}
                disabled={loading}
                className='px-6 py-2 bg-amber-600 hover:bg-amber-700 text-white rounded-lg font-semibold transition disabled:opacity-50'
              >
                {loading ? 'Adding...' : 'Add Job'}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default ManageJobs
import React from 'react'
import { useContext } from 'react'
import { AppContext } from '../Context/AppContext'
import {useNavigate,useParams} from 'react-router-dom'

const FindJob = () => {
    const navigate=useNavigate()
    const {jobs,setJobs}=useContext(AppContext)
    const {domain=""}=useParams()

    // Filter jobs based on domain
    const filteredJobs = domain 
      ? jobs.filter(item => item.domain === domain.toLowerCase()) 
      : jobs;

  return (
    <div>
        <div className="text-2xl font-bold mb-4">
          {domain ? `Explore ${domain.charAt(0).toUpperCase() + domain.slice(1)} Jobs` : 'Explore All Jobs'}
        </div>
        
        <div className="w-full grid grid-cols-[repeat(auto-fill,minmax(200px,1fr))] gap-4 pt-5 gap-y-6 px-3 sm:px-0">
          {filteredJobs.length > 0 ? (
            filteredJobs.map((item,index) => (
              <div
                key={item.jid}
                className="bg-white shadow-2xl cursor-pointer rounded-md relative"
                onClick={() => navigate(`/job/${item.jid}`)}
              >
                <div className="flex flex-col px-3 py-3">
                  <div className="w-full h-24 flex items-center justify-center mb-4 bg-gray-50 rounded-md">
                    <img
                      src={item.imageLogo}
                      className="max-w-full max-h-full object-contain p-2"
                      alt={item.company_name}
                    />
                  </div>

                  <div className="flex flex-col mt-2">
                    <h3 className="font-bold">{item.company_name}</h3>
                    <p className="text-gray-800 mt-1">~{item.title}</p>
                    <p className="text-gray-900 mt-1">{item.description}</p>
                    <div className="flex justify-between mt-1">
                      <p className="text-gray-800 text-sm font-semibold">
                        {item.salary}
                      </p>
                      <p className="text-black italic font-medium text-xs">
                        {item.deadline}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="col-span-full text-center py-10 text-gray-500">
              No jobs found in this domain.
            </div>
          )}
        </div>
    </div>
  )
}

export default FindJob
import React from 'react'
import { useContext } from 'react'
import { AppContext } from '../Context/AppContext';
import { useNavigate } from 'react-router-dom'

const Myjob = () => {
    const {savedJobs, setSavedJobs} = useContext(AppContext)
    const navigate = useNavigate()
   
    console.log("Saved Jobs:", savedJobs) // Debug log to check data
   
    return (
        <div>
            <div className="text-2xl font-bold mb-4">Your Applied Jobs</div>
            {
                savedJobs.length === 0 ? (
                    <div className='text-center py-10'>
                        <p className='text-gray-500 text-xl mb-4'>No Applied Jobs Yet</p>
                        <button 
                            onClick={() => navigate('/find-jobs')}
                            className='bg-amber-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-amber-700'
                        >
                            Browse Jobs
                        </button>
                    </div>
                ) : (
                    <div className="w-full grid grid-cols-[repeat(auto-fill,minmax(200px,1fr))] gap-4 pt-5 gap-y-6 px-3 sm:px-0">
                        {savedJobs.map((item, index) => (
                            <div
                                key={item.jid || index}
                                className="bg-white shadow-2xl cursor-pointer rounded-md relative hover:shadow-xl transition-shadow"
                                onClick={() => navigate(`/job/${item.jid}`)}
                            >
                                <div className="flex flex-col px-3 py-3">
                                    <div className="w-full h-24 flex items-center justify-center mb-4 bg-gray-50 rounded-md">
                                        <img
                                            src={item.imageLogo}
                                            className="max-w-full max-h-full object-contain p-2"
                                            alt={item.company_name || 'Company logo'}
                                        />
                                    </div>

                                    <div className="flex flex-col mt-2">
                                        <h3 className="font-bold text-base">{item.company_name}</h3>
                                        <p className="text-gray-800 mt-1 text-sm">~{item.title}</p>
                                        <p className="text-gray-900 mt-1 text-sm line-clamp-2">
                                            {item.description || 'No description available'}
                                        </p>
                                        <div className="flex justify-between mt-2">
                                            <p className="text-gray-800 text-sm font-semibold">
                                                ₹{item.salary}
                                            </p>
                                            <p className="text-black italic font-medium text-xs">
                                                {item.deadLine}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                )
            }
        </div>
    )
}

export default Myjob
import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../Context/AppContext";

const DisplayJob = () => {
  const navigate = useNavigate();
  const { jobs } = useContext(AppContext);

  if (!jobs || jobs.length === 0) {
    return <div className="text-center py-10">Loading...</div>;
  }

  // Group jobs by domain (IT, Electrical, etc.)
  const groupedJobs = jobs.reduce((acc, job) => {
    const key = job.domain || "UNKNOWN";
    if (!acc[key]) acc[key] = [];
    acc[key].push(job);
    return acc;
  }, {});

  return (
    <div>
      {Object.entries(groupedJobs).map(([domain, categoryGroup], i) => {
        const categoryTitle = domain.toUpperCase();

        return (
          <div key={domain} className="mb-8">
            <h1 className="font-bold text-2xl mb-4">
              Recent Jobs in {categoryTitle}
            </h1>

            <div className="w-full grid grid-cols-[repeat(auto-fill,minmax(200px,1fr))] gap-4 pt-5 gap-y-6 px-3 sm:px-0">
              {categoryGroup.map((item) => (
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
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default DisplayJob;

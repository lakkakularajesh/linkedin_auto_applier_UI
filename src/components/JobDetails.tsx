import React from 'react';
import { Job } from '../types';

interface JobDetailsProps {
    job: Job;
}

const JobDetails: React.FC<JobDetailsProps> = ({ job }) => {

    if (!job) {
        return <div>Loading...</div>;
    }

    return (
        <div key={job.Job_ID} className="bg-white border border-gray-200 rounded-lg shadow p-6 flex flex-col justify-between">
            <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">{job.Title}</h3>
                <p className="text-gray-600 mb-1"><span className="font-medium">Company:</span> {job.Company}</p>
                <p className="text-gray-600 mb-1"><span className="font-medium">HR Name:</span> {job.HR_Name}</p>
                <p className="text-gray-600 mb-1"><span className="font-medium">Date Applied:</span> {job.Date_Applied}</p>
            </div>
            <div className="mt-4">
                <a
                    href={job.Job_Link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block text-blue-600 hover:underline font-medium"
                >
                    View Job
                </a>
            </div>
        </div>
    );
};

export default JobDetails;
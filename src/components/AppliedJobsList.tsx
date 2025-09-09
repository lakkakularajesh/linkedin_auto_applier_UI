import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchJobs } from '../redux/jobsSlice';
import { RootState } from '../redux/store';
import { Job } from '../types';
import JobDetails from './JobDetails';
import { subDays } from 'date-fns';
import { formatDistanceToNow } from 'date-fns/formatDistanceToNow';

const AppliedJobsList: React.FC = () => {
    const dispatch = useDispatch();
    const jobs = useSelector((state: RootState) => state.jobs.jobs);
    const loading = useSelector((state: RootState) => state.jobs.loading);
    const error = useSelector((state: RootState) => state.jobs.error);

    useEffect(() => {
        dispatch(fetchJobs());
    }, [dispatch]);

    const sortedJobs = [...jobs].sort((a: Job, b: Job) => {
        return new Date(b.Date_Applied).getTime() - new Date(a.Date_Applied).getTime();
    });

    const formatDate = (dateString: string): string => {
        const date = new Date(dateString);
        const today = new Date();
        const yesterday = subDays(today, 1);

        if (date.toDateString() === today.toDateString()) {
            return 'Today';
        } else if (date.toDateString() === yesterday.toDateString()) {
            return 'Yesterday';
        } else {
            return formatDistanceToNow(date, { addSuffix: true });
        }
    };

    // Group jobs by formatted date
    const groupedJobs = sortedJobs.reduce((acc: { [key: string]: Job[] }, job: Job) => {
        const formattedDate = formatDate(job.Date_Applied);
        if (!acc[formattedDate]) {
            acc[formattedDate] = [];
        }
        acc[formattedDate].push(job);
        return acc;
    }, {});

    const sectionRefs = Object.keys(groupedJobs).reduce((acc: { [key: string]: React.RefObject<HTMLDivElement> }, date) => {
        acc[date] = React.createRef<HTMLDivElement>();
        return acc;
    }, {});

    const scrollToSection = (date: string) => {
        sectionRefs[date].current?.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
        });
    };

    if (loading) {
        return <div className="text-center py-8 text-lg text-gray-600">Loading...</div>;
    }

    if (error) {
        return <div className="text-center py-8 text-red-500">Error: {error}</div>;
    }

    return (
        <div className="container mx-auto px-4 py-8 flex">
            {/* Left Pane */}
            <div className="w-1/4 pr-4 sticky top-4 h-fit">
                <h3 className="text-lg font-semibold mb-2">Sections</h3>
                <ul>
                    {Object.keys(groupedJobs).map((formattedDate) => (
                        <li key={formattedDate} className="mb-1">
                            <button
                                className="text-blue-500 hover:underline"
                                onClick={() => scrollToSection(formattedDate)}
                            >
                                {formattedDate}
                            </button>
                        </li>
                    ))}
                </ul>
            </div>

            {/* Main Content */}
            <div className="w-3/4">
                <h2 className="text-2xl font-bold mb-6 text-gray-800">LinkedIn Applied Jobs</h2>
                {Object.entries(groupedJobs).map(([formattedDate, jobs]) => (
                    <div key={formattedDate} ref={sectionRefs[formattedDate]}>
                        <div className="text-lg font-semibold text-gray-700 mb-2">{formattedDate}</div>
                        <hr className="my-4 border-t border-gray-300" />
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {jobs.map((job: Job) => (
                                <JobDetails key={job.Job_ID} job={job} />
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default AppliedJobsList;
import axios from 'axios';
import { API_BASE_URL } from '../config';

export const fetchAppliedJobs = async () => {
    try {
        const response = await axios.get(`${API_BASE_URL}/applied-jobs`);
        return response.data;
    } catch (error: unknown) {
        if (axios.isAxiosError(error)) {
            throw new Error(error.response ? error.response.data.error : 'Error fetching applied jobs');
        }
        throw new Error('Error fetching applied jobs');
    }
};

export const updateAppliedDate = async (jobId: any) => {
    try {
        const response = await axios.put(`${API_BASE_URL}/applied-jobs/${jobId}`);
        return response.data;
    } catch (error: unknown) {
        if (axios.isAxiosError(error)) {
            throw new Error(error.response ? error.response.data.error : 'Error updating applied date');
        }
        throw new Error('Error updating applied date');
    }
};
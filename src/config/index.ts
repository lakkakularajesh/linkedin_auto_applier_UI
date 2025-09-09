export const API_BASE_URL = 'http://127.0.0.1:5000'; // Base URL for the backend API

export const ENDPOINTS = {
    FETCH_APPLIED_JOBS: `${API_BASE_URL}/applied-jobs`,
    UPDATE_APPLIED_DATE: (jobId: string) => `${API_BASE_URL}/applied-jobs/${jobId}`,
};
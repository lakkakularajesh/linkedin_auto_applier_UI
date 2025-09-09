import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { fetchAppliedJobs, updateAppliedDate } from '../api/jobsApi';

interface Job {
    Job_ID: string;
    Title: string;
    Company: string;
    HR_Name: string;
    HR_Link: string;
    Job_Link: string;
    External_Job_link: string;
    Date_Applied: string;
}

interface JobsState {
    jobs: Job[];
    loading: boolean;
    error: string | null;
}

const initialState: JobsState = {
    jobs: [],
    loading: false,
    error: null,
};

export const fetchJobs = createAsyncThunk('jobs/fetchJobs', async () => {
    const response = await fetchAppliedJobs();
    return response;
});

export const updateJobDate = createAsyncThunk('jobs/updateJobDate', async ({ jobId }: { jobId: string }) => {
    await updateAppliedDate(jobId);
    return jobId;
});

const jobsSlice = createSlice({
    name: 'jobs',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchJobs.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchJobs.fulfilled, (state, action) => {
                state.loading = false;
                state.jobs = action.payload;
            })
            .addCase(fetchJobs.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message || 'Failed to fetch jobs';
            })
            .addCase(updateJobDate.fulfilled, (state, action) => {
                const jobId = action.payload;
                const job = state.jobs.find(job => job.Job_ID === jobId);
                if (job) {
                    job.Date_Applied = new Date().toISOString(); // Update the date to current time
                }
            });
    },
});

export default jobsSlice.reducer;
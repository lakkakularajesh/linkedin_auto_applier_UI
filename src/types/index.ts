export interface Job {
    Job_ID: string;
    Title: string;
    Company: string;
    HR_Name: string;
    HR_Link: string;
    Job_Link: string;
    External_Job_link: string;
    Date_Applied: string;
}

export interface UpdateJobDateResponse {
    message: string;
}

export interface ErrorResponse {
    error: string;
}
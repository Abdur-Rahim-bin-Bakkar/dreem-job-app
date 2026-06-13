import React from 'react';
import JobDetails from './JobDetails';
import { jobDetails } from '@/lib/api/get';

const page = async ({ params }) => {
    const { id } = await params;
    console.log(id, 'id is is id')
    const jobDetailsData = await jobDetails(id)
    // console.log(jobDetailsData)
    return (
        <div>
            <JobDetails jobDetailsData ={jobDetailsData}></JobDetails>
        </div>
    );
};

export default page;
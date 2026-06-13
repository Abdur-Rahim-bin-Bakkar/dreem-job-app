import React from 'react';
import JobDetails from './JobDetails';
import { jobDetails } from '@/lib/api/get';
import { getServerSession } from '@/lib/session/server';

const page = async ({ params }) => {
    const { id } = await params;
    console.log(id, 'id is is id')
    const jobDetailsData = await jobDetails(id)
    // console.log(jobDetailsData)
    const session = await getServerSession()
    console.log(session, 'usr session')
    return (
        <div>
            <JobDetails session = {session} jobDetailsData ={jobDetailsData} id={id}></JobDetails>
        </div>
    );
};

export default page;
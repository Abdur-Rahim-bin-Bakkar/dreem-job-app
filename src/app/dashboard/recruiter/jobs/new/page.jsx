import React from 'react';
import PostJobForm from './PostJobForm';
import { getServerSession } from '@/lib/session/server';
import { getCompanyInfo } from '@/lib/api/get';

const NewJobPostPage = async () => {
    const session = await getServerSession()
    // console.log(session)
    const companyData = await getCompanyInfo(session?.user?.id)
    // console.log(companyData , 'company data form new job page')
    return (
        <div>
            <PostJobForm companyData ={companyData} />
        </div>
    );
};

export default NewJobPostPage;
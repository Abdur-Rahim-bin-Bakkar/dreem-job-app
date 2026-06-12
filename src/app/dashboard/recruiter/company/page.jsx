import React from 'react';
import CompanyForm from './CompanyForm';
import { headers } from 'next/headers';
import { auth } from '@/lib/auth';

const CompanyPage = async () => {
    const  session  = await auth.api.getSession({
        headers: await headers(),
    });
    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER}/my/company?recruiterId=${session?.user?.id}`);
    const companyData = await res.json()
    console.log(companyData, 'this is company data', session?.user?.id, 'thsi is session')
    return (
        <div>
            <CompanyForm companyData={companyData} />
        </div>
    );
};

export default CompanyPage;
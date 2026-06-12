import React from 'react';
import CompanyForm from './CompanyForm';
import { headers } from 'next/headers';
import { auth } from '@/lib/auth';
import { getCompanyInfo } from '@/lib/api/get';
import { getServerSession } from '@/lib/session/server';

const CompanyPage = async () => {
    const session = await getServerSession();
    const companyData = await getCompanyInfo(session?.user?.id)

    return (
        <div>
            <CompanyForm companyData={companyData} />
        </div>
    );
};

export default CompanyPage;
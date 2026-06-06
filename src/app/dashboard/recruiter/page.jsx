import RecentApplicationsTable from '@/component/dashboard/RecentApplicationsTable';
import StatsCards from '@/component/dashboard/StatsCards';
import TopCompaniesTable from '@/component/dashboard/TopCompaniesTable';
import React from 'react';

const RecruiterPage = () => {
    return (
        <div className="p-6 bg-black min-h-screen">
            <StatsCards />

            <div className='mt-15'>
                <div >
                    <RecentApplicationsTable />
                </div>

                <div>
                    <TopCompaniesTable />
                </div>
            </div>
        </div>
    );
};

export default RecruiterPage;
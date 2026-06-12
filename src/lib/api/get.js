// get company by user id: 
export const getCompanyInfo = async (userId) => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER}/my/company?recruiterId=${userId}`)
    const companyData = await res.json()
    return companyData
}

//get jobs by company id
export const getJobs = async (companyId) => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER}/jobs?status=active&companyId=${companyId}`)
    const jobs = await res.json()
    return jobs
}

// get all jobs:
export const getAllJobs = async ()=>{
    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER}/all/jobs`)
    const allJobs = await res.json()
    return allJobs;
}
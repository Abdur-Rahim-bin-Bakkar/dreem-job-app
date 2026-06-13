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
// export const getAllJobs = async ()=>{
//     const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER}/all/jobs`)
//     const allJobs = await res.json()
//     return allJobs;
// }
export const getAllJobs = async (searchParams = {}) => {
  const params = new URLSearchParams();

  if (searchParams.search)
    params.append("search", searchParams.search);

  if (searchParams.category)
    params.append("category", searchParams.category);

  if (searchParams.type)
    params.append("type", searchParams.type);

  if (searchParams.remote)
    params.append("remote", searchParams.remote);

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_SERVER}/all/jobs?${params.toString()}`,
    {
      cache: "no-store",
    }
  );

  return await res.json();
};


// get job details:
export const jobDetails = async (id) => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER}/job/${id}`)
  const job = await res.json()
  return job
}


// get applications by user id:
export const getApplications = async (userid) => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_SERVER}/application?applicantId=${userid}`
  );

  const data = await response.json();
  return data;
}
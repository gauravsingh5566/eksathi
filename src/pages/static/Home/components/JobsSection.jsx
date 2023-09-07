import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import JobCard from '../../Careers/components/JobCard'
import { useGlobalContext } from 'global/context';



const JobsSection = ({id}) => {
    const { api } = useGlobalContext();
    const [jobs, setJobs] = useState([]);

    const getJobs = async () => {
        try {
            const res = await api.get(`/app/jobs/active`);
            if (res?.status === 200) {
                console.log("Job was successfully Fetchech: ", res?.data?.results);
                setJobs(res?.data?.results);
            }
        } catch (err) {
            console.log("Error getting jobs", err);
        }
    }


    useEffect(() => {
        getJobs();
    }, []);

   

    return (
        <>
            <section className='container mb-5 py-5'>
                <div className='fw-bold mb-4 d-flex flex-wrap justify-content-between'>
                    <div>
                        <h3 className='fw-bold mb-2'>Jobs</h3>
                        <h5>Premium jobs on your fingertips</h5>
                    </div>
                    <Link to='/careers'>View All Jobs</Link>
                </div>

                <div className='row row-cols-1 row-cols-lg-4'>
                    {
                        jobs?.map(job => (
                            <>
                            <div className='col'>
                                <JobCard jd={job}  />
                            </div>
                            
                            </>
                        ))
                    }


                </div>
            </section>
        </>
    )
}

export default JobsSection;
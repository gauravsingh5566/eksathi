import { Button } from '@mui/joy';
import React from 'react';
import EducationCard from './EducationCard';
import AddEducation from 'pages/user/profile/components/Modals/AddEducation';
import { useState } from 'react';
import { useGlobalContext } from 'global/context';
import { useEffect } from 'react';

const Education = ({userId}) => {
    const [openAddEducation, setOpenAddEducation] = useState(false);
    const { api, userData } = useGlobalContext();
    const [educations, setEducations] = useState([]);

    const getEducations = async () => {
        try {
            const res = await api.get(`/app/candidates/educations/${userId || userData?.id}`);
            if (res?.status === 200) {
                console.log("educations : ", res?.data?.results);
                setEducations(res?.data?.results);
            }
        } catch (e) {
            console.log(e);
            setEducations([]);
        }
    }

    useEffect(() => {
        getEducations();
    }, [userId]);

    return (
        <>
            <div className="job-container">
                <div className="job-header mb-4 d-flex flex-wrap align-items-center justify-content-between">
                    <h4>Education</h4>
                    {
                        userId === userData?.id ?
                        <Button variant='soft' onClick={() => setOpenAddEducation(true)}>Add Education</Button>
                        : null
                    }
                </div>
                <div className="job-list">
                    {
                        educations?.map(education => (
                            <EducationCard setAddEducationModel={setOpenAddEducation} key={education?.id} education={education}/>
                        ))
                    }
                </div>
                <AddEducation open={openAddEducation} setOpen={setOpenAddEducation} action='add' />
            </div>
        </>
    )
}

export default Education;
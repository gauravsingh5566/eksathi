import { Button } from '@mui/joy';
import React from 'react';
import { useState } from 'react';
import ExperienceCard from './ExperienceCard';
import AddExperience from 'pages/user/profile/components/Modals/AddExperience';
import { useGlobalContext } from 'global/context';
import { useEffect } from 'react';

const Experience = ({ userId }) => {
    const { api, userData } = useGlobalContext();
    const [openAddExperienceModel, setOpenAddExperienceModel] = useState(false);
    const [experiences, setExperiences] = useState([]);

    const getExperiences = async () => {
        try {
            const res = await api.get(`/app/candidates/experiences/${userId || userData?.id}`);
            if (res?.status === 200) {
                console.log("experiences : ", res?.data?.results);
                setExperiences(res?.data?.results);
            }
        } catch (e) {
            console.log(e);
            setExperiences([]);
        }
    }

    useEffect(() => {
        getExperiences();
    }, [userId]);

    return (
        <>
            <div className="job-container">
                <div className="job-header mb-4 d-flex flex-wrap align-items-center justify-content-between">
                    <h4>Experience</h4>
                    {
                        userId === userData?.id ?
                            <Button variant='soft' onClick={() => setOpenAddExperienceModel(true)}>Add Experience</Button>
                            : null
                    }
                </div>
                <div className="job-list">
                    {
                        experiences?.map((experience) => (
                            <ExperienceCard setOpenAddExperienceModel={setOpenAddExperienceModel} key={experience?.id} experience={experience} />
                        ))
                    }

                </div>
                <AddExperience open={openAddExperienceModel} setOpen={setOpenAddExperienceModel} action='add' />
            </div>
        </>
    )
}

export default Experience;
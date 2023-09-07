import { Button } from '@mui/joy';
import React from 'react';
import { useState } from 'react';
import SkillsChip from './SkillsChip';
import AddSkill from 'pages/user/profile/components/Modals/AddSkill';
import { useGlobalContext } from 'global/context';
import { toast } from 'react-hot-toast';
import { useEffect } from 'react';

const Skills = ({userId}) => {
    const {userData, api} = useGlobalContext();
    const [openAddSkill, setOpenAddSkill] = useState(false);
    const [skills, setSkills] = useState([]);
    const [refresh, setRefresh] = useState(0);
    const getSkills = async () => {
        try {
            const res = await api.get(`/app/candidates/skills/${userId || userData?.id}`);
            if (res?.status === 200) {
                 setSkills(res?.data?.results);
                 console.log("Skills : ", res?.data?.results);
            }
        } catch (err) {
            console.log(err);
            // toast.error("Error getting skills");
            setSkills([]);
        }
    }

    useEffect(()=> {
        getSkills();
    }, [userId, refresh]);

    return (
        <>
            <div className="job-container">
                <div className="job-header mb-4 d-flex flex-wrap align-items-center justify-content-between">
                    <h4>Skills</h4>
                    {
                        userId === userData?.id ?
                        <Button variant='soft' onClick={() => setOpenAddSkill(true)}>Add & Delete Skill</Button>
                        : null
                    }
                </div>
                <div className="job-list d-flex flex-wrap ">
                    
                    {/* <Button variant='soft' color='info' size='sm' className='mr-2 mb-2'>Communication Skills</Button> */}
                    {
                        skills.map((skill) => (
                            <SkillsChip key={skill?.id} name={skill?.skill_name} userId={skill?.user_id} />
                        ))
                    }
                </div>
                <AddSkill open={openAddSkill} setOpen={setOpenAddSkill} skills={skills} userId={userId} action='add' refreshCount={refresh} refresh={setRefresh}/>
            </div>
        </>
    )
}

export default Skills
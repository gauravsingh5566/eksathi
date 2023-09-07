import { Edit } from '@mui/icons-material'
import { AspectRatio, Box, Divider, IconButton, ListDivider, Typography } from '@mui/joy'
import moment from 'moment'
import AddExperience from 'pages/user/profile/components/Modals/AddExperience'
import React from 'react'
import { useState } from 'react'
import { useLocation } from 'react-router-dom'

const ExperienceCard = ({experience}) => {
    const location = useLocation();
    const [openAddExperienceModel, setOpenAddExperienceModel] = useState(false);
    return (
        <>
            <div className="job-item  d-flex justify-content-between">
                <Box
                    sx={{
                        display: 'flex',
                        marginBottom: '10px',
                        gap: 1,
                        py: 1,
                        overflow: 'auto',
                        width: '100%',
                        scrollSnapType: 'x mandatory',
                        '& > *': {
                            scrollSnapAlign: 'center',
                        },
                        '::-webkit-scrollbar': { display: 'none' },
                    }}
                >

                    <AspectRatio ratio="1" sx={{ minWidth: 60 }}>
                        <img
                            src={`https://images.unsplash.com/photo-1685549925654-e86dcebdd21a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2081&q=80`}
                            alt='img'
                            className='rounded-3'
                        />
                    </AspectRatio>
                    <Box sx={{ whiteSpace: 'nowrap' }} className="w-100 ml-2">
                        <div className="d-flex justify-content-between w-100">
                            <div>
                                <Typography fontWeight="lg">{experience?.title}</Typography>
                                <Typography fontWeight="sm">{experience?.organization}</Typography>
                            </div>
                            {/* {
                                location?.pathname === '/setting/jobprofile' || location?.pathname === '/profile'?
                                    <IconButton variant='plain'
                                        // sx={{position: 'absolute', right: '2.4rem'}}
                                        sx={{
                                            height: 30,
                                            width: 30
                                        }}
                                        onClick={() => {
                                            setOpenAddExperienceModel(true);
                                        }}
                                    >
                                        <Edit />
                                    </IconButton> : null
                            } */}
                           
                        </div>

                        <Typography level="body2">{experience?.subject} · {experience?.standard}</Typography>
                        <Typography level="body2">{moment(experience?.start_date).format('MMM, YYYY')} - {experience?.is_working ? 'Present' : moment(experience?.end_date).format('MMM, YYYY')} . Full Time · 7 mos</Typography>
                        <Typography level="body2">{experience?.location}, India · On-site</Typography>
                        {/* <Typography level="body2">Skills: <span>MySQL · Cascading Style Sheets (CSS) · Data Structures · REST APIs · JavaScript · HTML5 · React.js · Node.js</span></Typography> */}
                        
                    </Box>
                </Box>
                
            </div>
            {/* <Divider/> */}
            <AddExperience open={openAddExperienceModel} setOpen={setOpenAddExperienceModel} edit={true} data={experience}/>
        </>
    )
}

export default ExperienceCard
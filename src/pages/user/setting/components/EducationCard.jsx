
import React from 'react'
import { Edit } from '@mui/icons-material'
import { AspectRatio, Box, Divider, IconButton, ListDivider, Typography } from '@mui/joy'
import { useLocation } from 'react-router-dom'
import moment from 'moment'

const EducationCard = ({education, setAddEducationModel}) => {
    const location = useLocation();
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
                                <Typography fontWeight="lg">{education?.institution_name}</Typography>
                                <Typography fontWeight="sm">{education?.degree}, {education?.field_of_study}</Typography>
                            </div>
                            {
                                location?.pathname === '/setting/jobprofile' ?
                                    <IconButton variant='plain'
                                        // sx={{position: 'absolute', right: '2.4rem'}}
                                        sx={{
                                            height: 30,
                                            width: 30
                                        }}
                                        onClick={() => {
                                            setAddEducationModel(true);
                                        }}
                                    >
                                        <Edit />
                                    </IconButton> : null
                            }
                         
                        </div>

                        <Typography level="body2">{moment(education?.start_date).format("MMM YYYY")} - {moment(education?.end_date).format("MMM YYYY")}</Typography>
                        {/* <Typography level="body2">Delhi, India · On-site</Typography> */}
                        {/* <Typography level="body2">Skills: <span>MySQL · Cascading Style Sheets (CSS) · Data Structures · REST APIs · JavaScript · HTML5 · React.js · Node.js</span></Typography> */}
                        
                    </Box>
                </Box>

            </div>
            {/* <Divider/> */}
        </>
  )
}

export default EducationCard;
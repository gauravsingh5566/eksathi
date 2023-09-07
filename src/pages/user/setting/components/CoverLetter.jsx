import { Edit } from '@mui/icons-material';
import { IconButton } from '@mui/joy';
import React from 'react'

const CoverLetter = () => {
    return (
        <>
            <div className="job-container">
                <div className="job-header mb-4 d-flex flex-wrap align-items-center justify-content-between">
                    <h4>Cover Letter</h4>
                    <IconButton variant='plain'
                        // sx={{position: 'absolute', right: '2.4rem'}}
                        sx={{
                            height: 30,
                            width: 30
                        }}
                        onClick={() => {
                            // setOpenAddCertification(true)
                        }}
                    >
                        <Edit />
                    </IconButton>
                </div>
                <div className="job-list">
                    <p>
                        With a total experience of several years and 10 months in IT sector I have developed myself as a technical professional who is able to perform tasks and challenges in a team as well as individually. I am hard working and adaptable with good analytical skills, ability to learn new things quickly and work in both independent or team environments. Have been an integral part of the company through effective communication,Microsoft Office and development.
                    </p>
                </div>

            </div>
        </>
    )
}

export default CoverLetter;
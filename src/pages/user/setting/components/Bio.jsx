import { Edit } from '@mui/icons-material';
import { IconButton } from '@mui/joy';
import { useGlobalContext } from 'global/context';
import React from 'react'
import { useNavigate } from 'react-router-dom';

const Bio = ({ bio, author }) => {
    const {userData} = useGlobalContext();
    const navigate = useNavigate();
    return (
        <>
            <div className="job-container">
                <div className="job-header mb-4 d-flex flex-wrap align-items-center justify-content-between">
                    <h4>{author===userData?.id ? "About Me" : `Bio`}</h4>
                    {
                        author === userData?.id ?
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
                                <Edit onClick = {() =>{
                                    navigate('/setting/profile')
                                }} />
                            </IconButton> : null
                    }
                </div>
                <div className="job-list">
                    <p>
                        {bio}
                    </p>
                </div>

            </div>
        </>
    )
}

export default Bio;
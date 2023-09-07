import React from 'react'
import { ChatBubble, CheckCircleOutlineTwoTone, DeleteOutlineTwoTone, Image, MailTwoTone, StarRounded } from '@mui/icons-material'
import { Avatar, Button } from '@mui/joy'
import { ListItemAvatar, ListItemText } from '@mui/material'
import { Link } from 'react-router-dom'
import { useGlobalContext } from 'global/context'

const ConnectionProfile = ({ user }) => {
    
    const {userData, setShowMessage, setMessageTo } = useGlobalContext();

    const handleMessage = () => {
        setShowMessage(true);
        setMessageTo(user);
    }

    return (
        <div className='shadow hover-bg px-3 rounded'>
            <div className='d-flex rounded p-0 py-3 align-items-start'>
                <ListItemAvatar>
                    <Avatar src={user?.avatar_url} sx={{ height: 40, width: 40 }} />
                </ListItemAvatar>
                <ListItemText className='px-2 pt-0 m-0'
                    primary={
                        <div className='lh-1 mb-2'>
                            <span className='text-dark fw-bold'><Link to={`/${user?.username}`}>{user?.first_name + " " + user?.last_name}</Link></span><br />
                            {/* <small className='fw-semibold'>{user?.bio}</small> */}
                        </div>
                    }
                    secondary={
                        <>
                            <div>

                                {
                                   user?.skills?.length ? 
                                   user?.skills?.map(skill => (
                                    <>
                                        <StarRounded style={{ fontSize: "14px", color: "gold", marginLeft: -3 }} />
                                        {skill}
                                    </>
                                )) : <p className='capitalize'>{user?.role || "New User"}</p>
                                }
                            </div>
                        </>
                    } />
                <div className='d-flex flex-column'>
                    <Button variant='soft'
                        color="info"
                        startDecorator={<MailTwoTone />}
                        disabled={user?.id === userData?.id}
                        onClick={handleMessage}
                    >
                        Message
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default ConnectionProfile
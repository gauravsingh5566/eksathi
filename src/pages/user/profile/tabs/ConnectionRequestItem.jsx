import React from 'react'
import { CheckCircleOutlineTwoTone, CheckCircleTwoTone, DeleteOutlineTwoTone, DeleteRounded, DeleteTwoTone, Image, StarRounded } from '@mui/icons-material'
import { Avatar, Button, IconButton } from '@mui/joy'
import { ListItemAvatar, ListItemText, Rating } from '@mui/material'
import { Popup } from 'layout/Popup'
import { useGlobalContext } from 'global/context'
import { toast } from 'react-hot-toast'
import { Link } from 'react-router-dom'

const ConnectionRequestItem = ({ user, removeRequest }) => {
    const { api, apiAuth } = useGlobalContext();

    const handleAction = async (action) => {
        try {
            const res = await api.put(`/app/connections/action/${user?.connectionId}`, { action });
            if (res?.status === 200) {
                console.log("Request Action: ", res?.data);
                toast.success(res?.data?.message);
            }
        } catch (error) {
            console.log(error);
            toast.error(error?.response?.data?.error);
        }
        removeRequest(user?.id); 
    }

    return (
        // <div className='shadow px-4 py-2 rounded'>
        //     <div className='d-flex flex-column rounded p-0 py-2 align-items-start justify-content-center'>
        //         <Avatar className='mb-3' src={user?.avatar_url} sx={{ height: 60, width: 60 }} />
        //         <div className='lh-1 mb-2 d-flex flex-column align-items-between'>
        //             <p className='text-dark text-center fw-bold mb-3'>{user?.first_name + " " + user?.last_name}</p>
        //             {/* <small className='fw-semibold truncate'>{user?.bio}</small> */}
        //             <div className='d-flex justify-content-between'>
        //                 <Button variant='soft' size='sm' color='success' className='text-capitalize' onClick={() => handleAction('accept')}
        //                     disabled={user?.status === 'pending' ? false : true}
        //                 >
        //                     <CheckCircleOutlineTwoTone sx={{ fontSize: "16px" }} />&nbsp;{user?.status === 'pending' ? 'Accept' : 'Accepted'}
        //                 </Button>
        //                 <Button variant='soft' size="sm" color='danger' className='text-capitalize' onClick={() => handleAction('accept')}>
        //                     <DeleteOutlineTwoTone sx={{ fontSize: "16px" }} />&nbsp;Reject
        //                 </Button>
        //             </div>
        //         </div>

        //     </div>
        // </div>
        <>
        <div className="rounded-4 shadow p-4 hover-bg" style={{ height: '100%' }}>
                {/* <p className='text-center fw-bold p-2 m-1 rounded bg-info text-white mb-3'>1st Rank</p> */}
                <div className="d-flex justify-content-center flex-wrap mb-3">
                    <Avatar alt="Remy Sharp" src={user?.avatar_url || 'https://img.freepik.com/premium-vector/owl-3d_630384-162.jpg?w=826'} size="lg"
                        sx={{
                            height: 100, width: 100
                        }} />
                </div>
                <Link to={`/${user?.username}`} className="d-flex flex-column align-items-center mb-3">
                    <h4 className='text-center'>{user?.first_name}</h4>
                    <h4 className='text-center mb-2'>{user?.last_name}</h4>
                    <Rating
                        name="text-feedback"
                        value={user?.rating || 0}
                        readOnly
                        precision={0.5}
                        icon={<StarRounded fontSize="inherit" />}
                        emptyIcon={<StarRounded style={{ opacity: 0.55 }} fontSize="inherit" />}
                    />
                </Link>
                <div className="d-flex justify-content-between">
                <div className="right-controls mr-4">
                        <IconButton variant='soft' color='danger' className='text-capitalize' onClick={() => handleAction('accept')}>
                            <DeleteTwoTone  />
                        </IconButton>
                    </div>
                    <div className="left-controls">
                        <Button variant='soft' color='success' className='text-capitalize' onClick={() => handleAction('accept')}
                            disabled={user?.status === 'pending' ? false : true}
                        >
                            <CheckCircleTwoTone sx={{ fontSize: "16px" }} />&nbsp;{user?.status === 'pending' ? 'Accept' : 'Accepted'}
                        </Button>
                    </div>
                   
                </div>
            </div>
        </>
    )
}

export default ConnectionRequestItem
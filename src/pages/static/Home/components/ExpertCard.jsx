import { Favorite, HourglassTopTwoTone, MailTwoTone, PersonAddAltRounded, SmsFailedRounded, Star } from '@mui/icons-material';
import { Avatar, Button, IconButton } from '@mui/joy';
import { Rating } from '@mui/material';
import { useGlobalContext } from 'global/context';
import React from 'react';
import { toast } from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';

const ExpertCard = ({ user }) => {
    const navigate = useNavigate();
    const { userData, api, setShowMessage, setMessageTo, setAuth } = useGlobalContext();
    const handleConnect = async () => {
        try {
            const res = await api.post(`/app/connections/send-request`, {
                senderId: userData?.id,
                receiverId: user?.id
            });
            if (res?.status === 200) {
                user = {...user, connectionStatus: 'pending'};
                toast.success(res?.data?.message);
            }
        } catch (error) {
            console.log(error);
            if (error?.response?.status === 401) {
                setAuth(true);
            } else {
                toast.error(error?.response?.data?.message);
            }
        }
    }

    const handleMessage = () => {
        setShowMessage(true);
        setMessageTo(user);
    }
    return (
        <>
            <div className="col  mb-3">
                <div className="rounded-4 shadow p-4 hover-s" style={{ height: '100%' }}>
                    {/* <p className='text-center fw-bold p-2 m-1 rounded bg-info text-white mb-3'>1st Rank</p> */}
                    <div className="d-flex justify-content-center flex-wrap mb-3">
                        <Avatar alt="Remy Sharp" src={user?.avatar_url || 'https://img.freepik.com/premium-vector/owl-3d_630384-162.jpg?w=826'} size="lg"
                            sx={{
                                height: '150px', width: '150px'
                            }} />
                    </div>
                    <Link to={`/${user?.username}`} className="d-flex flex-column align-items-center mb-3">
                        <h3 className='text-center'>{user?.first_name}</h3>
                        <h3 className='text-center mb-2'>{user?.last_name}</h3>
                        <Rating
                            name="text-feedback"
                            value={user?.rating || 0}
                            readOnly
                            precision={0.5}
                            emptyIcon={<Star style={{ opacity: 0.55 }} fontSize="inherit" />}
                        />
                    </Link>
                    <div className="d-flex justify-content-between">
                        <div className="left-controls">
                            <IconButton
                                color={user?.connectionStatus === "accepted" ? "info" :
                                    user?.connectionStatus === "pending" ? "warning" :
                                        user?.connectionStatus === "rejected" ? "danger" :
                                            "primary"
                                }
                                onClick={user?.connectionStatus === "accepted" ? handleMessage : user?.connectionStatus === "pending" ? null : handleConnect}>


                                {user?.connectionStatus === "accepted" ? <MailTwoTone /> :
                                    user?.connectionStatus === "pending" ? <HourglassTopTwoTone /> :
                                        user?.connectionStatus === "rejected" ? <SmsFailedRounded /> :
                                            <PersonAddAltRounded />
                                }

                            </IconButton>
                        </div>
                        <div className="right-controls">
                            <Button variant='soft' onClick={() => navigate(`/${user?.username}`)}>
                                Profile
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ExpertCard;
import * as React from 'react';
import AspectRatio from '@mui/joy/AspectRatio';
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import CardOverflow from '@mui/joy/CardOverflow';
import Divider from '@mui/joy/Divider';
import Typography from '@mui/joy/Typography';
import { useGlobalContext } from 'global/context';
import { Popup } from 'layout/Popup';
import { Badge, CardCover } from '@mui/material';
import { ConnectWithoutContactTwoTone, HourglassTopTwoTone, MailTwoTone, PersonAddAltSharp, PunchClockTwoTone, SmsFailedRounded, Star, StarRounded, StarsTwoTone } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import { Avatar, Rating } from '@mui/material';
import moment from 'moment';
import { Button } from '@mui/joy';
import { toast } from 'react-hot-toast';

export default function UserTicket({ user, index }) {
    const { userData, api, setShowMessage, setMessageTo, setAuth } = useGlobalContext();
    const handleConnect = async () => {
        try {
            const res = await api.post(`/app/connections/send-request`, {
                senderId: userData?.id,
                receiverId: user?.id
            });
            if (res?.status === 200) {
                toast.success(res?.data?.message);
                user = { ...user, connectionStatus: 'pending' };
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

            {/* User Card */}
            <div className="col-lg-4 responsive-column-half p-2">
                <Card
                    orientation="horizontal"
                    variant="outlined"
                    sx={{
                        overflow: "hidden",
                        bgcolor: 'background.body',
                        '&:hover': { boxShadow: 'md' },
                        border: 0,
                    }}
                    className={`p-0 shadow hover-shadow justify-content-stretch animate slide delay-${index}`}
                >
                    <div className='h-100 p-2'>
                        <Avatar
                            src={user?.avatar_url || "images/student.webp"}
                            srcSet="https://images.unsplash.com/photo-1507833423370-a126b89d394b?auto=format&fit=crop&w=90&dpr=2 2x"
                            loading="lazy"
                            variant="square"
                            className='rounded-2'
                            sx={{ width: '100%', height: 90 }}
                        />
                        <div className='mt-1'>
                            <Button
                                color={user?.connectionStatus === "accepted" ? "info" :
                                    user?.connectionStatus === "pending" ? "warning" :
                                        user?.connectionStatus === "rejected" ? "danger" :
                                            "primary"
                                }
                                variant='soft'
                                size='sm'
                                startDecorator={user?.connectionStatus === "accepted" ? <MailTwoTone /> :
                                    user?.connectionStatus === "pending" ? <HourglassTopTwoTone /> :
                                        user?.connectionStatus === "rejected" ? <SmsFailedRounded /> :
                                            <PersonAddAltSharp />
                                }
                                className='rounded-2'
                                onClick={user?.connectionStatus === "accepted" ? handleMessage : user?.connectionStatus === "pending" ? null : handleConnect}
                            >
                                {user?.connectionStatus === "accepted" ? "Message" :
                                    user?.connectionStatus === "pending" ? "Requested" :
                                        user?.connectionStatus === "rejected" ? "Declined" :
                                            "Connect"
                                }
                            </Button>
                        </div>
                    </div>
                    <CardContent sx={{ p: 1 }}>
                        <div className='lh-sm'>
                            <small className='rounded-1 border px-1 text-secondary'>{user?.expertise?.length ? user?.expertise[0] : user?.education ? user?.education : "Newbee"}</small>
                        </div>
                        <Link to={`/${user?.username}`} className="text-info lh-1 fs-16 fw-bold text-capitalize ">
                            {/* <Typography fontWeight="md" textColor="success.plainColor" mb={0.5}> */}
                            {user?.first_name}

                            {/* </Typography> */}
                            {/* <Typography level="body2">{user?.expertise?.length ? user?.expertise[0] : user?.education ? user?.education : "Newbee"}</Typography> */}
                        </Link>
                        <Typography className="mb-5" style={{ fontSize: '12px' }}>{user?.location}</Typography>
                        <div className="d-flex align-items-center">
                            <Rating
                                name="size-small"
                                readOnly
                                defaultValue={user?.rating}
                                size="small"
                                precision={0.5}
                                icon={<StarRounded fontSize="inherit" />}
                                emptyIcon={<StarRounded style={{ opacity: 0.55 }} fontSize="inherit" />}
                            /> 
                            {/* <span className='ml-2'> {user?.rating}</span> */}
                        </div>
                        {/* <Typography className={"text-secondary"} style={{ fontSize: '12px' }}> {user?.last_active ? `Last active ${moment(user?.last_active).calendar()}` : null}</Typography> */}

                    </CardContent>
                    {
                        Boolean(user?.profession || user?.role) &&
                        <>
                            <Divider />
                            <CardOverflow
                                variant="soft"
                                color="primary"
                                sx={{
                                    px: 0.2,
                                    writingMode: 'vertical-rl',
                                    textAlign: 'center',
                                    fontSize: 'xs2',
                                    fontWeight: 'xl2',
                                    letterSpacing: '1px',
                                    textTransform: 'uppercase',
                                }}
                            >
                                {user?.profession || user?.role}
                            </CardOverflow>
                        </>
                    }
                </Card>

            </div>
        </>
    );
}
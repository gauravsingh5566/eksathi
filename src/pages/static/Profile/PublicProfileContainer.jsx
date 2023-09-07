import React from 'react'
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import ShareIcon from '@mui/icons-material/Share';
import PlaceIcon from '@mui/icons-material/Place';
import Experience from 'pages/user/setting/components/Experience';
import Education from 'pages/user/setting/components/Education';
import Certification from 'pages/user/setting/components/Certification';
import Skills from 'pages/user/setting/components/Skills';
import Bio from 'pages/user/setting/components/Bio';
import { Button, CircularProgress, IconButton, LinearProgress, Tooltip } from '@mui/joy';
import { ConnectWithoutContact, Facebook, FiberManualRecordRounded, FiberManualRecordTwoTone, GitHub, HourglassTopTwoTone, Instagram, LinkTwoTone, LinkedIn, MailTwoTone, Menu, PersonAddAltRounded, RocketLaunchTwoTone, SmsFailedRounded, Star, StarRounded, Twitter, YouTube } from '@mui/icons-material';
import { useState } from 'react';
import { useNavigate, useParams, Outlet } from 'react-router';
import { Popup } from 'layout/Popup';
import { useGlobalContext } from 'global/context';
import { useEffect } from 'react';
import moment from 'moment';
import { toast } from 'react-hot-toast';
import ProfileDetails from './components/ProfileDetails';
import ProfileAnswers from './components/ProfileAnswers';
import ProfileQuestions from './components/ProfileQuestions';
import ProfileConnections from './components/ProfileConnections';
import SuggestedExperts from 'pages/user/widgets/SuggestedExperts';
import TrendingQuestions from 'pages/user/widgets/TrendingQuestions';
import { Rating } from '@mui/material';


const labels = {
    0.0: 'Biginner',
    0.1: 'Biginner',
    0.2: 'Biginner',
    0.3: 'Biginner',
    0.4: 'Biginner',
    0.5: 'Just Started',
    0.6: 'Just Started',
    0.7: 'Just Started',
    0.8: 'Just Started',
    0.9: 'Just Started',
    1.0: 'Just Started+',
    1.1: 'Just Started+',
    1.2: 'Just Started+',
    1.3: 'Just Started+',
    1.4: 'Just Started+',
    1.5: 'Still Learning',
    1.6: 'Still Learning',
    1.7: 'Still Learning',
    1.8: 'Still Learning',
    1.9: 'Still Learning',
    2.0: 'Still Learning+',
    2.1: 'Still Learning+',
    2.2: 'Still Learning+',
    2.3: 'Still Learning+',
    2.4: 'Still Learning+',
    2.5: 'Gaining Expertise',
    2.6: 'Gaining Expertise',
    2.7: 'Gaining Expertise',
    2.8: 'Gaining Expertise',
    2.9: 'Gaining Expertise',
    3: 'Gaining Expertise+',
    3.0: 'Gaining Expertise+',
    3.1: 'Gaining Expertise+',
    3.2: 'Gaining Expertise+',
    3.3: 'Gaining Expertise+',
    3.4: 'Gaining Expertise+',
    3.5: 'Expert Now',
    3.6: 'Expert Now',
    3.7: 'Expert Now',
    3.8: 'Expert Now',
    3.9: 'Expert Now',
    4: 'Expert Now+',
    4.0: 'Expert Now+',
    4.1: 'Expert Now+',
    4.2: 'Expert Now+',
    4.3: 'Expert Now+',
    4.4: 'Expert Now+',
    4.5: 'Param Gyani',
    4.6: 'Param Gyani',
    4.7: 'Param Gyani',
    4.8: 'Param Gyani',
    4.9: 'Param Gyani',
    5: 'Param Gyani+',
    5.0: 'Param Gyani+',
};

function PublicProfileContainer({ data }) {
    const { userData, token, api, apiAuth, setShowMessage, setMessageTo, setAuth, onlineUsers } = useGlobalContext();
    const navigate = useNavigate();
    const [profile, setProfile] = useState(data);
    const { username } = useParams();
    const [isOnline, setIsOnline] = useState(false);
    const [loading, setLoading] = useState(true);
    const [componentType, setComponentType] = useState("details");
    const [profileCompletion, setProfileCompletion] = useState(0);

    const getProfile = async () => {
        let profileNotify = toast.loading("Getting profile information...");
        setLoading(true);
        try {
            console.log("Username: ", username);
            if (username && username === 'profile') {
                const res = await api.get(`app/user/profile/${userData?.id}?userId=${userData?.id}`);
                if (res.status == 200) {
                    toast.dismiss(profileNotify);
                    toast.success("Information fetched successfully");
                    setProfile(res?.data);
                    setLoading(false);
                    // localStorage.setItem('user', user);
                    console.log(res);
                    console.log("Profile: ", res?.data);
                }
            } else if (username) {
                const res = await api.get(`app/user/profile/${username || userData?.id}?userId=${userData?.id}`);
                if (res.status == 200) {
                    toast.dismiss(profileNotify);
                    toast.success("Information fetched successfully");
                    setProfile(res?.data);
                    setLoading(false);
                    // localStorage.setItem('user', user);
                    console.log(res);
                    console.log("Profile: ", res?.data);
                }
            } else if (userData?.id) {
                const res = await api.get(`app/user/${userData?.id}`);
                if (res.status == 200) {
                    toast.dismiss(profileNotify);
                    toast.success("Information fetched successfully");
                    setProfile(res?.data);
                    setLoading(false);
                    // localStorage.setItem('user', user);
                    console.log(res);
                    console.log("Profile: ", res?.data);
                }
            } else {
                navigate('/404');
            }
        } catch (error) {
            toast.dismiss(profileNotify);
            if (error?.response?.data?.status === 404) {
                toast.error("Error getting profile information, Please try again later!");
                navigate('/404');
            }
            else {
                // toast.error(error?.response?.data?.message);
                // toast("Redirecting back to last visited page...");
                // navigate(-1);
                navigate('/404');
            }
            if (data?.id) {
            }
            // setLoading(false);

        }
    }

    const handleConnect = async () => {
        try {
            const res = await api.post(`/app/connections/send-request`, {
                senderId: userData?.id,
                receiverId: profile?.id
            });
            if (res?.status === 200) {
                setProfile((user) => {
                    return { ...user, connectionStatus: 'pending' };
                })
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

    const getProfileCompletion = async () => {
        try {
            const res = await api.get(`/app/user/profile-completion/${profile?.id}`);
            if (res?.status === 200) {
                console.log("Profile completion:  ", res?.data);
                setProfileCompletion(res?.data?.completionPercentage);
            }
        } catch (error) {
            console.error(error);
        }
    };

    const handleMessage = () => {
        setShowMessage(true);
        setMessageTo(profile);
    }

    useEffect(() => {
        getProfileCompletion();
        
    }, [profile?.id, data?.id]);

    useEffect(() => {
        setIsOnline(false);
        getProfile();
        window.scrollTo(0, 0);
        console.log("Current Online Users after username changed: ", onlineUsers);
        let isLive = onlineUsers.find((online) => online?.username === profile?.id);
        console.log('Current User Status: ', isLive);
        console.log('Current User ID: ', isLive?.username);

        if (isLive) {
            setIsOnline(true);
        } else {
            setIsOnline(false);
        }
    }, [username]);

    useEffect(() => {
        console.log("Current Online Users after online users update: ", onlineUsers);
        let isLive = onlineUsers.find((online) => online?.username === profile?.id);
        console.log('Current User Status: ', isLive);
        console.log('Current User ID: ', isLive?.username);

        if (isLive) {
            setIsOnline(true);
        } else {
            setIsOnline(false);
        }

    }, [onlineUsers]);

    const ProfileSubComponents = () => {
        switch (componentType) {
            case "details":
                return <ProfileDetails profile={profile} />
            case "questions":
                return <ProfileQuestions profile={profile} />
            case "answers":
                return <ProfileAnswers profile={profile} />
            case "connections":
                return <ProfileConnections profile={profile} />
            default:
                return <ProfileDetails profile={profile} />
        }
    };

    return (
        <>
            {
                !loading ?
                    <div className='container mt-4'>

                        <div className="row">

                            <div className="col col-12 col-lg-9">
                                <div className=' '>
                                    <div className='rounded-4 shadow mb-4 pb-4' >
                                        <div className='col '>
                                            <div
                                                className="row justify-content-end align-items-end flex-column flex-wrap"
                                                style={{
                                                    height: "20vh",
                                                    backgroundImage: "linear-gradient(45deg, #3f00ff52, #5836dd)",
                                                    borderTopLeftRadius: "15px",
                                                    borderTopRightRadius: "15px"
                                                }}
                                            >
                                                <h1 className='fw-bold fs-100 pr-4' style={{ color: '#ffffff12' }}>{labels[Math.round(profile?.rating) || 0.5]}</h1>
                                                <div className="p-3 pr-4 d-flex align-items-center">
                                                    <span className='text-white fs-18 fw-bold'>{profile?.rating || 0}  &nbsp;</span>
                                                    <Rating
                                                        name="text-feedback"
                                                        value={profile?.rating || 0}
                                                        readOnly={profile?.id === userData?.id || userData?.id === undefined ? true : false}
                                                        precision={0.5}
                                                        icon={<StarRounded fontSize="inherit" />}
                                                        emptyIcon={<StarRounded style={{ opacity: 0.55 }} fontSize="inherit" />}
                                                    />
                                                </div>
                                            </div>
                                            <div className="container d-flex flex-wrap justify-content-between align-items-end">
                                                <Avatar
                                                    style={{
                                                        marginTop: "-100px",
                                                        marginLeft: "18px",
                                                        border: "5px solid white"
                                                    }}

                                                    alt="Remy Sharp"
                                                    src={profile?.avatar_url}
                                                    sx={{ width: 150, height: 150 }}
                                                />
                                                <div className="">
                                                    <Stack spacing={2} direction="row" >
                                                        {/* <Button variant='soft'>Hire</Button>
                              <Button variant='soft'>Setting</Button>
                              <Button variant='soft'>Public</Button> */}
                                                        {/* <IconButton variant='plain'>
                                <Menu />
                              </IconButton> */}
                                                        {
                                                            profile?.id === userData?.id ?
                                                                <div className="hero-btn-box text-right py-3">
                                                                    <Button variant="soft" color="neutral"
                                                                        onClick={() => navigate('/setting/profile')}

                                                                    >
                                                                        <i className="la la-gear mr-1" /> Settings
                                                                    </Button>
                                                                </div> : null
                                                        }

                                                    </Stack>
                                                </div>
                                            </div>
                                            <div className='p-4'>
                                                <div className="media-body mb-3">

                                                    <div className="d-flex flex-wrap">
                                                        <h3 className='fw-bold mr-3 text-capitalize'>{profile?.name}</h3>
                                                        <Button color="warning"
                                                            onClick={function () { }}
                                                            size="sm"
                                                            className="text-capitalize"
                                                            variant="solid">{profile?.profile?.profession || profile?.role}
                                                        </Button>
                                                    </div>

                                                    {
                                                        isOnline ?
                                                            <span className='text-success fw-bold'>
                                                                <FiberManualRecordRounded color='success' sx={{ fontSize: '14px', marginRight: '10px' }} />

                                                                Online
                                                            </span> :
                                                            <span>
                                                                <FiberManualRecordTwoTone color='' sx={{ fontSize: '14px', marginRight: '10px' }} />

                                                                Last active {moment(profile?.createdAt).calendar()}
                                                            </span>
                                                    }
                                                    <p><i class="bi bi-map-fill mr-2 text-info"></i>{profile?.profile?.location ? profile?.profile?.location + ', ' : profile?.profile?.address?.city && profile?.profile?.address?.city + ', '}India</p>
                                                    <ul>

                                                        <li className="meta-privacy d-inline-block  mr-2">@{profile?.username}</li>
                                                        {
                                                            profile?.presentWork ?
                                                                <>
                                                                    <li className="meta-privacy d-inline-block fw-bold mr-2">
                                                                        <FiberManualRecordTwoTone color='secondary'
                                                                            sx={{
                                                                                fontSize: '10px',
                                                                                marginRight: '10px'
                                                                            }} />
                                                                        {profile?.presentWork?.title} {profile?.presentWork?.subject && `(${profile?.presentWork?.subject})`}  at {profile?.presentWork?.organization}
                                                                    </li>
                                                                    <li className="meta-privacy d-inline-block mr-2"><FiberManualRecordTwoTone color='secondary' sx={{ fontSize: '10px', marginRight: '10px' }} />
                                                                        <span className='text-capitalize'>{profile?.presentWork?.employment_type?.replace("-", " ")}</span>
                                                                    </li>
                                                                </>
                                                                : null
                                                        }


                                                    </ul>
                                                    {
                                                        profile?.presentWork ?
                                                            <ul>

                                                                <li className="meta-privacy d-inline-block  mr-2"><span className='fw-bold text-info'>Job Location:</span> {profile?.presentWork?.location}</li>
                                                                <li className="meta-privacy d-inline-block  mr-2"><span className='fw-bold text-info'>Current CTC:</span> {profile?.presentWork?.ctc} LPA</li>
                                                                {/* <li className="meta-privacy d-inline-block fw-bold mr-2"><FiberManualRecordTwoTone color='secondary' sx={{ fontSize: '10px', marginRight: '10px' }} /> Lead Engineer at Govardhan Learning Cloud</li>
                                  <li className="meta-privacy d-inline-block mr-2"><FiberManualRecordTwoTone color='secondary' sx={{ fontSize: '10px', marginRight: '10px' }} /> Full Time</li> */}

                                                            </ul> : null
                                                    }
                                                    {/* <p><span className='fw-semibold'>Talks about:</span> #english, #mathematics, #india, #g20</p> */}
                                                    <div className="">
                                                        {
                                                            profile?.profile?.social_links?.facebook ?
                                                                <Tooltip title={profile?.profile?.social_links?.facebook}>
                                                                    <IconButton href={profile?.profile?.social_links?.facebook} target="_blank" className="mr-1 bg-light  rounded text-primary">
                                                                        <Facebook sx={{ fontSize: 20 }} /></IconButton>
                                                                </Tooltip>
                                                                : null
                                                        }

                                                        {
                                                            profile?.profile?.social_links?.instagram ?
                                                                <Tooltip title={profile?.profile?.social_links?.instagram}>
                                                                    <IconButton href={profile?.profile?.social_links?.instagram} target="_blank" className="mr-1 bg-light  text-danger rounded">
                                                                        <Instagram sx={{ fontSize: 20 }} />
                                                                    </IconButton>
                                                                </Tooltip>
                                                                : null
                                                        }
                                                        {
                                                            profile?.profile?.social_links?.linkedin ?
                                                                <Tooltip title={profile?.profile?.social_links?.linkedin}>
                                                                    <IconButton href={profile?.profile?.social_links?.linkedin} target="_blank" className="mr-1 bg-light  rounded text-primary"><LinkedIn sx={{ fontSize: 20 }} /></IconButton>
                                                                </Tooltip>
                                                                : null
                                                        }
                                                        {
                                                            profile?.profile?.social_links?.twitter ?
                                                                <Tooltip title={profile?.profile?.social_links?.twitter}>
                                                                    <IconButton href={profile?.profile?.social_links?.twitter} target="_blank" className="mr-1 bg-light  text-info rounded"><Twitter sx={{ fontSize: 20 }} /></IconButton>
                                                                </Tooltip>
                                                                : null
                                                        }
                                                        {
                                                            profile?.profile?.social_links?.youtube ?
                                                                <Tooltip title={profile?.profile?.social_links?.youtube}>
                                                                    <IconButton href={profile?.profile?.social_links?.youtube} target="_blank" className="mr-1 bg-light  text-danger rounded"><YouTube sx={{ fontSize: 20 }} /></IconButton>
                                                                </Tooltip>
                                                                : null
                                                        }

                                                        {

                                                            profile?.profile?.social_links?.github ?
                                                                <Tooltip title={profile?.profile?.social_links?.github}>
                                                                    <IconButton href={profile?.profile?.social_links?.github} target="_blank" className="mr-1 bg-light  text-dark rounded"><GitHub sx={{ fontSize: 20 }} /></IconButton>
                                                                </Tooltip>
                                                                : null
                                                        }
                                                        {
                                                            profile?.profile?.social_links?.website ?
                                                                <Tooltip title={profile?.profile?.social_links?.website}>
                                                                    <IconButton href={profile?.profile?.social_links?.website} target="_blank" className="mr-1 bg-light  text-dark rounded"><LinkTwoTone sx={{ fontSize: 20 }} /></IconButton>
                                                                </Tooltip>
                                                                : null
                                                        }
                                                    </div>
                                                </div>

                                                <Stack direction='row' spacing={2} >
                                                    {/* <Button variant='outlined' color='info' onClick={() => navigate('/messages', { state: { userId: profile?.id } })}>Message</Button> */}
                                                    {
                                                        profile?.id !== userData?.id ?
                                                            <Button
                                                                color={profile?.connectionStatus === "accepted" ? "info" :
                                                                    profile?.connectionStatus === "pending" ? "warning" :
                                                                        profile?.connectionStatus === "rejected" ? "danger" :
                                                                            "primary"
                                                                }
                                                                variant='soft'
                                                                size='sm'
                                                                startDecorator={profile?.connectionStatus === "accepted" ? <MailTwoTone /> :
                                                                    profile?.connectionStatus === "pending" ? <HourglassTopTwoTone /> :
                                                                        profile?.connectionStatus === "rejected" ? <SmsFailedRounded /> :
                                                                            <PersonAddAltRounded />
                                                                }
                                                                className='rounded-2'
                                                                onClick={profile?.connectionStatus === "accepted" ? handleMessage : profile?.connectionStatus === "pending" ? null : handleConnect}
                                                            >
                                                                {profile?.connectionStatus === "accepted" ? "Message" :
                                                                    profile?.connectionStatus === "pending" ? "Requested" :
                                                                        profile?.connectionStatus === "rejected" ? "Declined" :
                                                                            "Connect"
                                                                }
                                                            </Button> : null
                                                    }
                                                    {
                                                        userData?.role === "institute" && profile?.role === "teacher" && profile?.id !== userData?.id ?
                                                            <Button
                                                                variant='soft'
                                                                color="success"
                                                            >
                                                                Hire Me
                                                            </Button> : null
                                                    }
                                                    <Button variant='soft' color='info' endDecorator={<ShareIcon />} onClick={() => window.open(`https://wa.me/?text=https://www.eksathi.com/${profile?.username}`,  'rel=noopener noreferrer')}>Share Profile</Button>
                                                </Stack>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='d-flex justify-content-between flex-wrap'>
                                        <div className="responsive-column-half  ">
                                            <div className="media media-card hover-bg-dark align-items-center rounded shadow"
                                                style={{ cursor: "pointer" }}
                                                onClick={() => setComponentType("details")}
                                            >
                                                {/* <div className="icon-element icon-element- bg-info">
                      <p className='fw-bold fs-30 text-white'>P</p>
                    </div> */}
                                                <CircularProgress size='lg' className=" mr-3" determinate value={Math.round(profileCompletion)}>
                                                    <Avatar
                                                        alt={profile?.name}
                                                        src={profile?.avatar_url}
                                                        sx={{ width: 50, height: 50 }}
                                                    />
                                                </CircularProgress>
                                                {
                                                    profile?.id !== userData?.id ?
                                                        <div className="media-body">
                                                            <h5 className="fw-bold fs-27" style={{ color: "rgb(18 81 199)", minHeight: 78 }}>View <br /> Profile</h5>

                                                            {/* <p className="fs-20">Profile</p> */}
                                                        </div> :
                                                        <div className="media-body">
                                                            <h5 className="fw-bold fs-40" style={{ color: "rgb(18 81 199)" }}>{Math.round(profileCompletion)}%</h5>
                                                            <p className="fs-15">Completed</p>
                                                        </div>
                                                }
                                            </div>
                                        </div>
                                        <div className="responsive-column-half ">
                                            <div className="media media-card hover-bg-dark align-items-center rounded shadow "
                                                style={{ cursor: "pointer" }}
                                                onClick={() => setComponentType("questions")}
                                            >
                                                <div className="icon-element icon-element- mr-4 bg-2">
                                                    <p className='fw-bold fs-30 text-white'>Q</p>
                                                </div>
                                                <div className="media-body">
                                                    <h5 className="fw-bold fs-40" style={{ color: "#28d5a7" }}>{profile?.stats?.questionCount}</h5>
                                                    <p className="fs-15">Questions</p>
                                                </div>
                                            </div>
                                        </div>
                                        {/* end col-lg-4 */}
                                        <div className="responsive-column-half ">
                                            <div className="media media-card hover-bg-dark align-items-center rounded shadow"
                                                style={{ cursor: "pointer" }}
                                                onClick={() => setComponentType("answers")}
                                            >
                                                <div className="icon-element icon-element- mr-4 bg-1">
                                                    <p className='fw-bold fs-30 text-white'>A</p>
                                                </div>
                                                <div className="media-body">
                                                    <h5 className="fw-bold fs-40 " style={{ color: "#8747ff" }}>{profile?.stats?.answerCount}</h5>
                                                    <p className="fs-15">Answers</p>
                                                </div>
                                            </div>
                                        </div>
                                        {/* end col-lg-4 */}

                                        <div className="responsive-column-half ">
                                            <div className="media media-card hover-bg-dark align-items-center rounded shadow"
                                                style={{ cursor: "pointer" }}
                                                onClick={() => setComponentType("connections")}
                                            >
                                                <div className="icon-element icon-element- mr-4 bg-3">
                                                    {/* <p className='fw-bold fs-30 text-white'>C</p> */}
                                                    <RocketLaunchTwoTone className='text-white fw-bold fs-30' />
                                                </div>
                                                <div className="media-body">
                                                    <h5 className="fw-bold fs-40 text-warning">{profile?.stats?.connectionCount}</h5>
                                                    <p className="fs-15">Connections</p>
                                                </div>
                                            </div>
                                        </div>
                                        {/* end col-lg-4 */}
                                    </div>

                                    <ProfileSubComponents />
                                </div>
                            </div>
                            <div className="col col-12 col-lg-3">

                                <SuggestedExperts heading="Connect to experts" />

                                <TrendingQuestions type="expertise" expertise={profile?.skills} />
                            </div>

                        </div>

                    </div>
                    :
                    <>
                        {/* <h2>Loading Page...</h2> */}
                        <LinearProgress />
                        <div style={{ minHeight: 800 }}></div>
                    </>
            }



        </>


    )
}

export default PublicProfileContainer;


import { useGlobalContext } from "global/context";
import { Popup } from "layout/Popup";
import React, { useEffect, useState } from "react";
import { Link, NavLink, Navigate, Outlet, useNavigate, useParams } from "react-router-dom";
import axios from 'axios';
import moment from "moment";
import { Facebook, FiberManualRecordRounded, FiberManualRecordTwoTone, GitHub, HourglassTopTwoTone, Instagram, LinkTwoTone, LinkedIn, MailTwoTone, PersonAddAltRounded, Share, SmsFailedRounded, StarRounded, Twitter, Web, WebStories, YouTube } from "@mui/icons-material";
import { Avatar, Divider, IconButton, Tooltip } from "@mui/material";
import SuggestedExperts from "../widgets/SuggestedExperts";
import TrendingQuestions from "../widgets/TrendingQuestions";
import { AspectRatio, Button, Stack } from "@mui/joy";
import { toast } from "react-hot-toast";

const Profile = () => {
  const { userData, api, setShowMessage, setMessageTo, setAuth, onlineUsers } = useGlobalContext();
  const navigate = useNavigate();
  const [user, setUser] = useState({});
  const { publicId } = useParams();
  const [isOnline, setIsOnline] = useState(false);
  const [profileCompletion, setProfileCompletion] = useState(0);


  const getUser = async () => {

    try {
      const res = await api.get(`app/user/${publicId || userData?.id}`);
      if (res.status == 200) {

        setUser(res?.data);
        // localStorage.setItem('user', user);
        console.log(res);
        console.log("User: ", res?.data);
      }
    } catch (error) {
      toast.error("Connection lost!");
    }
  }

  const handleConnect = async () => {
    try {
      const res = await api.post(`/app/connections/send-request`, {
        senderId: userData?.id,
        receiverId: user?.id
      });
      if (res?.status === 200) {
        setUser((user) => {
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
      const res = await api.get(`/app/user/profile-completion/${user?.id}`);
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
    setMessageTo(user);
  }

  useEffect(() => {
    let isLive = onlineUsers.find((online) => online?.username === user?.id);
    console.log('Current User Status: ', isLive);
    console.log('Current User ID: ', isLive?.username);

    if (isLive?.username === user?.id) {
      setIsOnline(true);
    } else {
      setIsOnline(false);
    }

  }, [onlineUsers]);

  useEffect(() => {
    getUser();
  }, [publicId, userData]);
  // useEffect(() => {

  // }, [token]);

  return (
    <div className="py-3 container ">
      <div className="row g-2 rounded-4">
        <div className="col-12 col-lg-9 p-2">
          <div className="rounded-4 bg-white shadow-lg">
            {/* Profile Area  */}
            <section className="hero-area shadow-sm rounded-4 pt-3">
              <span className="stroke-shape stroke-shape-1" />
              <span className="stroke-shape stroke-shape-2" />
              <span className="stroke-shape stroke-shape-3" />
              <span className="stroke-shape stroke-shape-4" />
              <span className="stroke-shape stroke-shape-5" />
              <span className="stroke-shape stroke-shape-6" />

              <div className="container px-5 pt-4">

                <div className="row">
                  <div className="col-lg-8">
                    <div className="hero-content">
                      <div className="media media-card align-items-start shadow-none p-0 mb-0 rounded-0 bg-transparent flex-wrap">
                        <div className="media-img">
                          {/* <img src={endpoint + user.profile || "/images/user.webp"} alt="avatar" /> */}
                          <AspectRatio ratio="1" className='rounded-4' sx={{ width: '100%' }}>
                            <Avatar src={user?.avatar_url} variant="square" />
                          </AspectRatio>
                        </div>
                        <div className="media-body  d-flex flex-column align-items-between" style={{ height: "100% !important", }}>
                          <div>
                            <h2>{user?.name}</h2>
                            <h6 className="text-secondary mb-1">
                              {
                                isOnline ?
                                  <span className='text-success fw-bold'>
                                    <FiberManualRecordRounded color='success' sx={{ fontSize: '14px', marginRight: '10px' }} />

                                    Online
                                  </span> :
                                  <span className="fst-italic">
                                    <FiberManualRecordTwoTone color='' sx={{ fontSize: '14px', marginRight: '10px' }} />

                                    Last active {moment(user?.createdAt).calendar()}
                                  </span>
                              }
                            </h6>
                            {/* <small className="text-primary fw-bold">25+ Connections</small> */}
                            <p className="fw-bold"><i class="bi bi-map-fill mr-2 text-info"></i>{user?.profile?.location ? user?.profile?.location + ', ' : user?.profile?.address?.city && user?.profile?.address?.city + ', '}India</p>
                            {
                              user?.skills?.map((skill, index) => index < 2 && (
                                <p className='fw-bold text-info d-flex align-items-center' style={{ fontSize: "14px" }} key={index}>
                                  <StarRounded className="mr-2" style={{ fontSize: "18px", color: "gold", marginLeft: -3 }} />
                                  {skill}
                                </p>
                              ))
                            }
                          </div>
                          {
                            user?.profile?.profession ?
                              <div className="mt-1">
                                <Button
                                  className="text-capitalize"
                                  size="sm"
                                  variant="soft"
                                  color="warning"
                                >{user?.profile?.profession}</Button>
                              </div> : null
                          }

                        </div>
                      </div>
                      <div>
                        <div className="mt-2">
                          <Tooltip title={user?.profile?.social_links?.facebook}>
                            <IconButton href={user?.profile?.social_links?.facebook} target="_blank" className="mr-1 bg-light  rounded text-primary">
                              <Facebook sx={{ fontSize: 20 }} /></IconButton>
                          </Tooltip>
                          <Tooltip title={user?.profile?.social_links?.instagram}>
                            <IconButton href={user?.profile?.social_links?.instagram} target="_blank" className="mr-1 bg-light  text-danger rounded">
                              <Instagram sx={{ fontSize: 20 }} />
                            </IconButton>
                          </Tooltip>
                          <Tooltip title={user?.profile?.social_links?.linkedin}>
                            <IconButton href={user?.profile?.social_links?.linkedin} target="_blank" className="mr-1 bg-light  rounded text-primary"><LinkedIn sx={{ fontSize: 20 }} /></IconButton>
                          </Tooltip>
                          <Tooltip title={user?.profile?.social_links?.twitter}>
                            <IconButton href={user?.profile?.social_links?.twitter} target="_blank" className="mr-1 bg-light  text-info rounded"><Twitter sx={{ fontSize: 20 }} /></IconButton>
                          </Tooltip>
                          <Tooltip title={user?.profile?.social_links?.youtube}>
                            <IconButton href={user?.profile?.social_links?.youtube} target="_blank" className="mr-1 bg-light  text-danger rounded"><YouTube sx={{ fontSize: 20 }} /></IconButton>
                          </Tooltip>
                          <Tooltip title={user?.profile?.social_links?.github}>
                            <IconButton href={user?.profile?.social_links?.github} target="_blank" className="mr-1 bg-light  text-dark rounded"><GitHub sx={{ fontSize: 20 }} /></IconButton>
                          </Tooltip>
                          <Tooltip title={user?.profile?.social_links?.website}>
                            <IconButton href={user?.profile?.social_links?.website} target="_blank" className="mr-1 bg-light  text-dark rounded"><LinkTwoTone sx={{ fontSize: 20 }} /></IconButton>
                          </Tooltip>
                        </div>
                      </div>
                      {/* end media */}
                    </div>
                    {/* end hero-content */}
                  </div>
                  {/* end col-lg-8 */}
                  {
                    !publicId ?
                      <div className="col-lg-4">
                        <div className="hero-btn-box text-right py-3">
                          <Button variant="soft" color="neutral"
                            onClick={() => navigate('/setting')}

                          >
                            <i className="la la-gear mr-1" /> Settings
                          </Button>
                        </div>

                      </div> :
                      <div className="col-lg-4">
                        <div className="hero-btn-box text-right py-3">
                          <Stack direction='row' spacing={2} justifyContent="end">
                            {/* <Button variant='outlined' color='info' onClick={() => navigate('/messages', { state: { userId: profile?.id } })}>Message</Button> */}
                            {
                              user?.id !== userData?.id ?
                                <Button
                                  color={user?.connectionStatus === "accepted" ? "info" :
                                    user?.connectionStatus === "pending" ? "warning" :
                                      user?.connectionStatus === "rejected" ? "danger" :
                                        "primary"
                                  }
                                  variant='soft'
                                  size='md'
                                  startDecorator={user?.connectionStatus === "accepted" ? <MailTwoTone /> :
                                    user?.connectionStatus === "pending" ? <HourglassTopTwoTone /> :
                                      user?.connectionStatus === "rejected" ? <SmsFailedRounded /> :
                                        <PersonAddAltRounded />
                                  }
                                  className='rounded-2'
                                  onClick={user?.connectionStatus === "accepted" ? handleMessage : user?.connectionStatus === "pending" ? null : handleConnect}
                                >
                                  {user?.connectionStatus === "accepted" ? "Message" :
                                    user?.connectionStatus === "pending" ? "Requested" :
                                      user?.connectionStatus === "rejected" ? "Declined" :
                                        "Connect"
                                  }
                                </Button> : null
                            }
                            {
                              user?.role === "institute" ?
                                <Button
                                  variant='soft'
                                  color="success"
                                >
                                  Hire Me
                                </Button> : null
                            }
                            {/* <IconButton variant='soft' color='info'
                              onClick={() => navigate(`whatsapp://send?text=${process.env.REACT_APP_API_ENDPOINT}${user?.username}`)}
                            >
                              <Share />
                            </IconButton> */}
                          </Stack>
                        </div>

                      </div>
                  }
                  {/* end col-lg-4 */}

                </div>
                {/* end row */}
                <div className="row">
                  <div className="col-lg-12">
                    <ul
                      className="nav nav-tabs generic-tabs generic--tabs generic--tabs-2 mt-4"
                      id="myTab"
                      role="tablist"
                    >
                      <li className="nav-item">
                        <NavLink
                          className="nav-link btn btn-link"
                          to={publicId ? `/user/${publicId}/` : "/profile/"}
                        >
                          Profile
                        </NavLink>
                      </li>
                      <li className="nav-item">
                        <NavLink
                          className="nav-link btn btn-link"
                          to={publicId ? `/user/${publicId}/connection` : "/profile/connection"}
                        >
                          Connection
                        </NavLink>
                      </li>
                      <li className="nav-item">
                        <NavLink
                          className="nav-link btn btn-link"
                          to={publicId ? `/user/${publicId}/questions` : "/profile/questions"}
                        >
                          Questions Asked
                        </NavLink>
                      </li>
                      <li className="nav-item">
                        <NavLink
                          className="nav-link btn btn-link"
                          to={publicId ? `/user/${publicId}/answers` : "/profile/answers"}
                        >
                          Answered
                        </NavLink>
                      </li>
                    </ul>
                  </div>

                  {/* end col-lg-4 */}
                </div>
              </div>
              {/* end container */}
            </section>
            {/* START USER DETAILS AREA */}
            <section className="user-details-area pt-30px pb-60px">
              <div className="container">
                <div className="row">
                  <div className="col-lg-12">
                    <div className="tab-content" id="myTabContent">
                      <Outlet context={[publicId, user]} />
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
        <div className="col-lg-3 p-2">
          <SuggestedExperts heading="Connect to experts" />
          <hr />
          <TrendingQuestions type="expertise" expertise={user?.skills} />
        </div>
      </div>
    </div>
  );
};

export default Profile;

import React from "react";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import ShareIcon from "@mui/icons-material/Share";
import PlaceIcon from "@mui/icons-material/Place";
import Experience from "pages/user/setting/components/Experience";
import Education from "pages/user/setting/components/Education";
import Certification from "pages/user/setting/components/Certification";
import Skills from "pages/user/setting/components/Skills";
import Bio from "pages/user/setting/components/Bio";
import { Button, CircularProgress, IconButton } from "@mui/joy";
import {
  ArrowBackIosNewRounded,
  ConnectWithoutContact,
  FiberManualRecordRounded,
  FiberManualRecordTwoTone,
  HourglassTopTwoTone,
  MailTwoTone,
  Menu,
  PersonAddAltRounded,
  RocketLaunchTwoTone,
  SmsFailedRounded,
} from "@mui/icons-material";
import { useState } from "react";
import { useNavigate, useParams, useLocation } from "react-router";
import { Popup } from "layout/Popup";
import { useGlobalContext } from "global/context";
import { useEffect } from "react";
import moment from "moment";
import { toast } from "react-hot-toast";
import ProfileDetails from "./components/ProfileDetails";
import ProfileAnswers from "./components/ProfileAnswers";
import ProfileQuestions from "./components/ProfileQuestions";
import ProfileConnections from "./components/ProfileConnections";
import { styled } from "styled-components";

function ProfilePage({ data }) {
  const {
    userData,
    token,
    api,
    apiAuth,
    setShowMessage,
    setMessageTo,
    setAuth,
    onlineUsers,
  } = useGlobalContext();
  const navigate = useNavigate();
  const location = useLocation();
  const [profile, setProfile] = useState(data);
  const { username } = useParams();
  const [isOnline, setIsOnline] = useState(false);
  const [loading, setLoading] = useState(false);
  const [componentType, setComponentType] = useState("details");
  const [profileCompletion, setProfileCompletion] = useState(0);

  const getProfile = async () => {
    let profileNotify = toast.loading("Getting profile information...");
    try {
      const res = await api.get(
        `app/user/profile/${username || userData?.id}?userId=${userData?.id}`
      );
      if (res.status == 200) {
        toast.dismiss(profileNotify);
        toast.success("Information fetched successfully");
        setProfile(res?.data);
        setLoading(true);
        // localStorage.setItem('user', user);
        console.log(res);
        console.log("Profile: ", res?.data);
      }
    } catch (error) {
      toast.dismiss(profileNotify);
      // if (error?.response?.data?.status === 404) {
      //   toast.error("User Not Found!");
      //   navigate("/404");
      // }
      // else {
      //   toast.error(error?.response?.data?.message);
      //   toast("Redirecting back to last visited page...");
      //   navigate(-1);
      // }
      if (data?.id) {
        // navigate('/404');
      }
    }
  };

  const handleConnect = async () => {
    try {
      const res = await api.post(`/app/connections/send-request`, {
        senderId: userData?.id,
        receiverId: profile?.id,
      });
      if (res?.status === 200) {
        setProfile((user) => {
          return { ...user, connectionStatus: "pending" };
        });
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
  };

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
  };

  useEffect(() => {
    getProfileCompletion();
  }, [profile?.id, data?.id]);

  useEffect(() => {
    getProfile();
  }, []);

  useEffect(() => {
    let isLive = onlineUsers.find((online) => online?.username === profile?.id);
    console.log("Current User Status: ", isLive);
    console.log("Current User ID: ", isLive?.username);

    if (isLive?.username === profile?.id) {
      setIsOnline(true);
    } else {
      setIsOnline(false);
    }
  }, [onlineUsers]);

  const ProfileSubComponents = () => {
    switch (componentType) {
      case "details":
        return <ProfileDetails profile={profile} />;
      case "questions":
        return <ProfileQuestions profile={profile} />;
      case "answers":
        return <ProfileAnswers profile={profile} />;
      case "connections":
        return <ProfileConnections profile={profile} />;
      default:
        return <ProfileDetails profile={profile} />;
    }
  };

  const ScrollerStyle = {
    maxHeight: "900px",
    width: "100%",
    overflowY: "scroll",
    justifyContent: "flex-end",
    // marginTop: "140px",
  };

  const ScrollHiddenDiv = styled.div`
    .scroll-bar-hidden::-webkit-scrollbar {
      display: none;
    }
  `;

  const ScrollMinibarDiv = styled.div`
    .scroll-minibar::-webkit-scrollbar {
      width: 3px;
      background-color: black;
    }

    .scroll-minibar::-webkit-scrollbar-thumb {
      background-color: rgb(185, 182, 182) !important;
    }
  `;

  return (
    <div className="scroll-minibar" style={ScrollerStyle}>
      {loading ? (
        <div className="container mt-4">
          <div className="d-flex align-items-center justify-content-between rounded shadow-lg p-3 mb-3">
            <div className="d-flex align-items-center">
              <IconButton variant="plain" onClick={() => navigate(-1)}>
                <ArrowBackIosNewRounded />
              </IconButton>
              <h5>Applicant ID {location?.state?.id}</h5>
            </div>
            <div>
              <Button varient="soft" color="info" className="text-capitalize">
                {location?.state?.status}
              </Button>
            </div>
          </div>
          <div className=" ">
            <div className="rounded-4 shadow mb-4 pb-4">
              <div className="col ">
                <div
                  className="row"
                  style={{
                    height: "20vh",
                    backgroundImage:
                      "linear-gradient(45deg, #3f00ff52, #5836dd)",
                    borderTopLeftRadius: "15px",
                    borderTopRightRadius: "15px",
                  }}
                ></div>
                <div className="container d-flex flex-wrap justify-content-between align-items-end">
                  <Avatar
                    style={{
                      marginTop: "-100px",
                      marginLeft: "18px",
                      border: "5px solid white",
                    }}
                    alt="Remy Sharp"
                    src={profile?.avatar_url}
                    sx={{ width: 150, height: 150 }}
                  />
                  <div className="">
                    <Stack spacing={2} direction="row">
                      {/* <Button variant='soft'>Hire</Button>
            <Button variant='soft'>Setting</Button>
            <Button variant='soft'>Public</Button> */}
                      {/* <IconButton variant='plain'>
              <Menu />
            </IconButton> */}
                    </Stack>
                  </div>
                </div>
                <div className="p-4">
                  <div className="media-body mb-3">
                    <div className="d-flex flex-wrap">
                      <h3 className="fw-bold mr-3">{profile?.name}</h3>
                      <Button
                        color="warning"
                        onClick={function () {}}
                        size="sm"
                        className="text-capitalize"
                        variant="solid"
                      >
                        {profile?.profile?.profession}
                      </Button>
                    </div>

                    {isOnline ? (
                      <span className="text-success fw-bold">
                        <FiberManualRecordRounded
                          color="success"
                          sx={{ fontSize: "14px", marginRight: "10px" }}
                        />
                        Online
                      </span>
                    ) : (
                      <span>
                        <FiberManualRecordTwoTone
                          color=""
                          sx={{ fontSize: "14px", marginRight: "10px" }}
                        />
                        Last active {moment(profile?.createdAt).calendar()}
                      </span>
                    )}
                    <p>
                      <i class="bi bi-map-fill mr-2 text-info"></i>
                      {profile?.profile?.location
                        ? profile?.profile?.location + ", "
                        : profile?.profile?.address?.city &&
                          profile?.profile?.address?.city + ", "}
                      India
                    </p>
                    <ul>
                      <li className="meta-privacy d-inline-block  mr-2">
                        @{profile?.username}
                      </li>
                      {profile?.presentWork ? (
                        <li className="meta-privacy d-inline-block fw-bold mr-2">
                          <FiberManualRecordTwoTone
                            color="secondary"
                            sx={{
                              fontSize: "10px",
                              marginRight: "10px",
                            }}
                          />
                          {profile?.presentWork?.title}{" "}
                          {profile?.presentWork?.subject &&
                            `(${profile?.presentWork?.subject})`}{" "}
                          at {profile?.presentWork?.organization}
                        </li>
                      ) : null}
                      <li className="meta-privacy d-inline-block mr-2">
                        <FiberManualRecordTwoTone
                          color="secondary"
                          sx={{ fontSize: "10px", marginRight: "10px" }}
                        />
                        <span className="text-capitalize">
                          {profile?.presentWork?.employment_type?.replace(
                            "-",
                            " "
                          )}
                        </span>
                      </li>
                    </ul>
                    <ul>
                      <li className="meta-privacy d-inline-block  mr-2">
                        <span className="fw-bold text-info">Job Location:</span>{" "}
                        {profile?.presentWork?.location}
                      </li>
                      <li className="meta-privacy d-inline-block  mr-2">
                        <span className="fw-bold text-info">Current CTC:</span>{" "}
                        {profile?.presentWork?.ctc} LPA
                      </li>
                      {/* <li className="meta-privacy d-inline-block fw-bold mr-2"><FiberManualRecordTwoTone color='secondary' sx={{ fontSize: '10px', marginRight: '10px' }} /> Lead Engineer at Govardhan Learning Cloud</li>
            <li className="meta-privacy d-inline-block mr-2"><FiberManualRecordTwoTone color='secondary' sx={{ fontSize: '10px', marginRight: '10px' }} /> Full Time</li> */}
                    </ul>
                    {/* <p><span className='fw-semibold'>Talks about:</span> #english, #mathematics, #india, #g20</p> */}
                  </div>
                  <Stack direction="row" spacing={2}>
                    {/* <Button variant='outlined' color='info' onClick={() => navigate('/messages', { state: { userId: profile?.id } })}>Message</Button> */}
                    {profile?.id !== userData?.id ? (
                      <Button
                        color={
                          profile?.connectionStatus === "accepted"
                            ? "info"
                            : profile?.connectionStatus === "pending"
                            ? "warning"
                            : profile?.connectionStatus === "rejected"
                            ? "danger"
                            : "primary"
                        }
                        variant="soft"
                        size="sm"
                        startDecorator={
                          profile?.connectionStatus === "accepted" ? (
                            <MailTwoTone />
                          ) : profile?.connectionStatus === "pending" ? (
                            <HourglassTopTwoTone />
                          ) : profile?.connectionStatus === "rejected" ? (
                            <SmsFailedRounded />
                          ) : (
                            <PersonAddAltRounded />
                          )
                        }
                        className="rounded-2"
                        onClick={
                          profile?.connectionStatus === "accepted"
                            ? handleMessage
                            : profile?.connectionStatus === "pending"
                            ? null
                            : handleConnect
                        }
                      >
                        {profile?.connectionStatus === "accepted"
                          ? "Message"
                          : profile?.connectionStatus === "pending"
                          ? "Requested"
                          : profile?.connectionStatus === "rejected"
                          ? "Declined"
                          : "Connect"}
                      </Button>
                    ) : null}
                    {userData?.role === "institute" ? (
                      <Button variant="soft" color="success">
                        Hire Me
                      </Button>
                    ) : null}
                    <Button
                      variant="soft"
                      color="info"
                      endDecorator={<ShareIcon />}
                      onClick={() =>
                        window.open(
                          `https://wa.me/?text=https://www.eksathi.com/${profile?.username}`,
                         
                          "rel=noopener noreferrer"
                        )
                      }
                    >
                      Share Profile
                    </Button>
                  </Stack>
                </div>
              </div>
            </div>

            <div className="row row-cols-2 row-cols-lg-4">
              <div className="responsive-column-half p-3 ">
                <div
                  className="media media-card hover-bg align-items-center rounded shadow p-4 px-5"
                  style={{ cursor: "pointer" }}
                  onClick={() => setComponentType("details")}
                >
                  {/* <div className="icon-element icon-element- bg-info">
                      <p className='fw-bold fs-30 text-white'>P</p>
                    </div> */}
                  <CircularProgress
                    size="lg"
                    className=" mr-4"
                    determinate
                    value={Math.round(profileCompletion)}
                  >
                    <Avatar
                      alt={profile?.name}
                      src={profile?.avatar_url}
                      sx={{ width: 50, height: 50 }}
                    />
                  </CircularProgress>
                  {profile?.id !== userData?.id ? (
                    <div className="media-body">
                      <h5
                        className="fw-bold fs-27"
                        style={{ color: "rgb(18 81 199)", minHeight: 78 }}
                      >
                        View &nbsp; Profile
                      </h5>

                      {/* <p className="fs-20">Profile</p> */}
                    </div>
                  ) : (
                    <div className="media-body">
                      <h5
                        className="fw-bold fs-40"
                        style={{ color: "rgb(18 81 199)" }}
                      >
                        {Math.round(profileCompletion)}%
                      </h5>
                      <p className="fs-15">Completed</p>
                    </div>
                  )}
                </div>
              </div>
              <div className="responsive-column-half p-3">
                <div
                  className="media media-card hover-bg align-items-center rounded shadow p-4 px-5"
                  style={{ cursor: "pointer" }}
                  onClick={() => setComponentType("questions")}
                >
                  <div className="icon-element icon-element- mr-4 bg-2">
                    <p className="fw-bold fs-30 text-white">Q</p>
                  </div>
                  <div className="media-body">
                    <h5 className="fw-bold fs-40" style={{ color: "#28d5a7" }}>
                      {profile?.stats?.questionCount}
                    </h5>
                    <p className="fs-15">Questions</p>
                  </div>
                </div>
              </div>
              {/* end col-lg-4 */}
              <div className="responsive-column-half p-3">
                <div
                  className="media media-card hover-bg align-items-center rounded shadow p-4 px-5"
                  style={{ cursor: "pointer" }}
                  onClick={() => setComponentType("answers")}
                >
                  <div className="icon-element icon-element- mr-4 bg-1">
                    <p className="fw-bold fs-30 text-white">A</p>
                  </div>
                  <div className="media-body">
                    <h5 className="fw-bold fs-40 " style={{ color: "#8747ff" }}>
                      {profile?.stats?.answerCount}
                    </h5>
                    <p className="fs-15">Answers</p>
                  </div>
                </div>
              </div>
              {/* end col-lg-4 */}

              <div className="responsive-column-half p-3">
                <div
                  className="media media-card hover-bg align-items-center rounded shadow p-4 px-5"
                  style={{ cursor: "pointer" }}
                  onClick={() => setComponentType("connections")}
                >
                  <div className="icon-element icon-element- mr-4 bg-3">
                    {/* <p className='fw-bold fs-30 text-white'>C</p> */}
                    <RocketLaunchTwoTone className="text-white fw-bold fs-30" />
                  </div>
                  <div className="media-body">
                    <h5 className="fw-bold fs-40 text-warning">
                      {profile?.stats?.connectionCount}
                    </h5>
                    <p className="fs-15">Connections</p>
                  </div>
                </div>
              </div>
              {/* end col-lg-4 */}
            </div>
            <ProfileSubComponents />
          </div>
        </div>
      ) : (
        <>
          <h2>Loading Page...</h2>
        </>
      )}
    </div>
  );
}

export default ProfilePage;

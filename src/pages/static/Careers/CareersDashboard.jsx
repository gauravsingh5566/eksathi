import React, { useEffect, useState } from "react";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import EmailIcon from "@mui/icons-material/Email";
import TokenIcon from "@mui/icons-material/Token";
import Pagination from "@mui/material/Pagination";
import Button from "@mui/joy/Button";
import WorkIcon from "@mui/icons-material/Work";
import LogoutIcon from "@mui/icons-material/Logout";
import { ProgressBar } from "react-bootstrap";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import PersonIcon from "@mui/icons-material/Person";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import LoginIcon from "@mui/icons-material/Login";
import QuestionAnswerIcon from "@mui/icons-material/QuestionAnswer";
import StarIcon from "@mui/icons-material/Star";
import { Link, useNavigate } from "react-router-dom";
import FullscreenIcon from "@mui/icons-material/Fullscreen";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import { SwipeableDrawer, useMediaQuery } from "@mui/material";
import ViewJobApplication from "./ViewJobApplication";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";
import CloseIcon from "@mui/icons-material/Close";
import JobDetails from "./components/JobDetails";
import { LinearProgress, Typography } from "@mui/joy";
import {
  FastForwardTwoTone,
  KeyboardArrowRight,
  LogoutRounded,
} from "@mui/icons-material";
import { useGlobalContext } from "global/context";
import EmployeeDashboard from "./components/EmployeeDashboard";

export default function CareersDashboard() {
  const [state, setState] = React.useState({});
  const { userData, api, OnboardingData } = useGlobalContext();
  const navigate = useNavigate();
  const [profileCompletion, setProfileCompletion] = useState(0);
  useEffect(() => {
    window.scroll(0, 0);
  }, []);
  const handleLogout = () => {
    localStorage.clear();
    navigate(`/auth/login`);
  };

  const getProfileCompletion = async () => {
    try {
      const res = await api.get(`/app/user/profile-completion/${userData?.id}`);
      if (res?.status === 200) {
        console.log("Profile completion:  ", res?.data);
        setProfileCompletion(res?.data?.completionPercentage);
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    if (userData?.id !== undefined) {
      getProfileCompletion();
    }
  }, [userData?.id]);

  const isSmallScreen = useMediaQuery("(max-width:600px)");
  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };
  // Add backgroundColor in Button on hover

  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(true);
  };
  // Drawer Open

  // const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  // const handleDrawerOpen = () => {
  //   setIsDrawerOpen(true);
  // };

  // const handleDrawerClose = () => {
  //   setIsDrawerOpen(false);
  // };

  const completedData = 6; // Number of completed profile fields
  const totalData = 10; // Total number of required profile fields

  // Calculate the profile completion percentage
  const profileCompletionPercentage = (completedData / totalData) * 100;

  console.log(userData , "UserData sdhjsadhjahsd ")

  return (
    <>
      <div className="container">
        <div className=" row row-cols-lg-2 row-cols-sm-1 row-cols-1 ">
          <div className="  col-12 col-lg-9    rounded-2  mt-3 mb-5">
            <div className="container ">
              <div className="d-flex justify-content-between align-items-center  mb-3 ">
                <h3 className="font-weight-bold"> Applied Jobs </h3>
                <Link to="/careers">
                  <Button variant="outlined" color="info">
                    Apply Another Job
                  </Button>
                </Link>
              </div>
            </div>

            <EmployeeDashboard />

            <div className="d-flex align-items-center justify-content-center mt-4">
              <Pagination count={8} shape="rounded" />
            </div>
          </div>

          <Box className=" col-12  col-lg-3 mt-2 ">
            <div className="  ">
              <div className="">
                <div className="shadow-lg mb-3 rounded-3 ">
                  <div className="p-1 mt-2 mb-2">
                    <div className="d-flex justify-content-between mb-3">
                      <div className=" p-2 d-flex align-items-center justify-content-between">
                        <div>
                          <Avatar
                            style={{
                              width: "50px",
                              height: "50px",
                            }}
                            alt="Remy Sharp"
                            src={userData?.profile}
                          />
                        </div>
                        <div className="mt-1">
                          <h6 className="fs-15 font-weight-bold ml-2 ">
                            {userData?.first_name + " " + userData?.last_name ||
                              OnboardingData?.name ||
                              userData?.name}
                          </h6>
                          <Link to="/profile">
                            <Button
                              variant="plain"
                              endDecorator={
                                <ArrowCircleRightIcon sx={{ width: "16px" }} />
                              }
                              color="info"
                              size="sm"
                            >
                              View Profile
                            </Button>
                          </Link>
                        </div>
                      </div>
                      <div></div>
                    </div>
                    <div className=" ml-2 p-1">
                      <p className="font-weight-bold mb-1 ">
                        Your Profile is {Math.round(profileCompletion)}%
                        Complete
                      </p>
                      <LinearProgress
                        determinate
                        value={Math.round(profileCompletion)}
                        style={{ width: "98%" }}
                        max="100"
                        color="info"
                      />
                    </div>
                    <div className="d-flex justify-content-between align-items-center">
                      <div className="d-flex align-items-center p-2">
                        <Link to="/messages">
                          <Button variant="plain" color="info">
                            <EmailIcon />
                          </Button>
                        </Link>
                      </div>
                      <div className="p-2">
                        <Link to="/setting/profile">
                          <Button variant="soft" color="info" size="sm">
                            Finish Your Profile
                          </Button>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <Link to="#" style={{ color: "#5f35ae" }}>
                  <div className="shadow-sm mb-3  rounded-3 font-weight-bold    ">
                    <div className="p-3 d-flex align-items-center">
                      <div>
                        <BookmarkIcon />
                      </div>
                      <div>&nbsp;&nbsp; Jobs Save For Later</div>
                    </div>
                  </div>
                </Link>
                <Link to="/messages" style={{ color: "#5f35ae" }}>
                  <div className="shadow-sm mb-3  rounded-3 font-weight-bold    ">
                    <div className="p-3 d-flex align-items-center">
                      <div>
                        <QuestionAnswerIcon />
                      </div>
                      <div>&nbsp;&nbsp; My Discussions</div>
                    </div>
                  </div>
                </Link>
                <Link
                  to="/resume-maker"
                  className=""
                  style={{ color: "#5f35ae" }}
                >
                  <div className="shadow-sm mb-3  rounded-3 font-weight-bold    ">
                    <div className="p-3 d-flex align-items-center">
                      <div>
                        <StarIcon />
                      </div>
                      <div>&nbsp;&nbsp; Get CV</div>
                    </div>
                  </div>
                </Link>
                <Link to="/careers" style={{ color: "#5f35ae" }}>
                  <div className="shadow-sm mb-3  rounded-3 font-weight-bold    ">
                    <div className="p-3 d-flex align-items-center">
                      <div>
                        <WorkIcon />
                      </div>
                      <div>&nbsp;&nbsp; Check Another Job</div>
                    </div>
                  </div>
                </Link>
                {/* <div className=" row p-3 d-flex align-items-end justify-content-center">
                  <Button
                    variant="plain"
                    fullWidth
                    color="info"
                    className=""
                    onClick={handleLogout}
                    startDecorator={<LogoutRounded />}
                  >
                    Logout
                  </Button>
                </div> */}
              </div>
            </div>
          </Box>
        </div>
      </div>
    </>
  );
}
